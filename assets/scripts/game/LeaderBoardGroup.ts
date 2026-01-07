
import { _decorator, Component, Node, Tween, tween, UIOpacity, Widget } from 'cc';
import { CountDownToNextTime } from '../common/CountDownToNextTime';
import { LeaderBoardGroupManager } from './LeaderBoardGroupManager';
import { AVATAR_TYPE, Constants, ENV_TYPE, LEADERBOARD_TYPE } from '../framework/constants';
import { clientEvent } from '../framework/clientEvent';
import { localConfig } from '../localConfig';
import { ItemRankInfo } from '../common/ItemRankInfo';
import { FBInstantManager } from '../common/FBInstantManager';
import { LeaderboardDataInfo } from '../common/LeaderboardDataInfo';
import { lodash } from '../framework/lodash';
import { PGSPlayInstantManager } from '../common/PGSPlayInstantManager';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = LeaderBoardGroup
 * DateTime = Thu Oct 17 2024 15:36:38 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = LeaderBoardGroup.ts
 * FileBasenameNoExtension = LeaderBoardGroup
 * URL = db://assets/scripts/game/LeaderBoardGroup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('LeaderBoardGroup')
export class LeaderBoardGroup extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Widget)
    groupAllTopWidget:Widget;

    @property(Widget)
    groupAllContentWidget:Widget;

    @property(UIOpacity)
    groupOpacity:UIOpacity = null;

    tweenGroup:Tween<{}> = null;

    @property(CountDownToNextTime)
    countDownNextTime:CountDownToNextTime = null;

    @property(LeaderBoardGroupManager)
    leaderBoardGroupManager:LeaderBoardGroupManager = null;
    

    currLeaderBoardType:LEADERBOARD_TYPE = null;

    @property(Node)
    iconLoading:Node;


    protected onEnable(): void {
        clientEvent.on(Constants.TOUCH_TABLEADERBOARD,this.touchTabTheme,this);
        clientEvent.on(Constants.PGS_RECEIVE_LISTRANK_LEADERBOARD,this.receiveListRankLeaderboard,this);
        this.showTime();
    }

    protected onDisable(): void {
        clientEvent.off(Constants.TOUCH_TABLEADERBOARD,this.touchTabTheme,this);
        clientEvent.off(Constants.PGS_RECEIVE_LISTRANK_LEADERBOARD,this.receiveListRankLeaderboard,this);
    }

    initAllTop(){
        // console.error("initAllTop LeaderBoardGroup");
        if(localConfig.instance.isMobile){
            
            let posY = (localConfig.instance.scaleBG - 1) * localConfig.instance.DEFAULT_H / 2  ;
            // console.log("posY:"+posY);
            if(posY <= 0){
                this.groupAllTopWidget.top = 0;
                this.groupAllContentWidget.top = 400;
                return;
            }
            this.groupAllTopWidget.top = -posY;
            this.groupAllContentWidget.top = 400-posY;
        }else{
            this.groupAllTopWidget.top = 0;
            this.groupAllContentWidget.top = 400;
        }
    }

    start () {
        // [3]
        this.initAllTop();
    }

    showGroup(){
        if(this.currLeaderBoardType == null){
            this.currLeaderBoardType = LEADERBOARD_TYPE.WORLD;
            clientEvent.dispatchEvent(Constants.TABLEARDBOARD_UPDATE,LEADERBOARD_TYPE.WORLD);
            this.showTab();
        }
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    showTime(){
        let countTimeNextWeek:number = localConfig.instance.getTimeToNextWeek();
        this.countDownNextTime.initCountDownTime(countTimeNextWeek,()=>{
            
        });
    }

    touchTabTheme(leaderBoardType:LEADERBOARD_TYPE){
        if(leaderBoardType == LEADERBOARD_TYPE.WORLD){
            LogEventManager.instance.logButtonClick("world","leaderboardpopup");
        }else{
            LogEventManager.instance.logButtonClick("friend","leaderboardpopup");
        }
        if(this.currLeaderBoardType != leaderBoardType){
            this.currLeaderBoardType = leaderBoardType;
            clientEvent.dispatchEvent(Constants.TABLEARDBOARD_UPDATE,this.currLeaderBoardType);

            this.showTab();
        }
    }

    showTab(){
        this.leaderBoardGroupManager.resetRankGroup();

        if(this.currLeaderBoardType == LEADERBOARD_TYPE.WORLD){
            this.countDownNextTime.node.active = true;
            let strWorldContextID:string = localConfig.instance.getWorldContextID_byWeek(localConfig.instance.currWeek);
            let leaderboardDataInfo:LeaderboardDataInfo = localConfig.instance.getLeaderBoardDataInfo_byContextID(strWorldContextID);
            if(leaderboardDataInfo != null){
                if(localConfig.instance.mapLeaderBoard_ItemRankInfos.has(leaderboardDataInfo._id)){
                    this.receiveListRankLeaderboard(localConfig.instance.mapLeaderBoard_ItemRankInfos.get(leaderboardDataInfo._id));
                }else{
                    this.iconLoading.active = true;
                    PGSPlayInstantManager.instance.GetTopPlayers_byLeaderboardID(leaderboardDataInfo._id,leaderboardDataInfo.tournamentId);
                }
            }else{
                if(localConfig.instance.envType == ENV_TYPE.TEST_AD) {
                    let arrListLeaderboard_Ranks : ItemRankInfo[] = [];
                    for(let i=0; i< 50;i++){
                        let itemRankInfo:ItemRankInfo = new ItemRankInfo();
                        itemRankInfo.userName = ""+FBInstantManager.instance.getName()+i;
                        itemRankInfo.avatarType = AVATAR_TYPE.TYPE_LOCAL;
                        itemRankInfo.userScore = 800 - i;
                        itemRankInfo.avatarURL = ""+lodash.random(1,20);
                        itemRankInfo.indexRank = i + 1;
                        if(i == 60){
                            itemRankInfo.isMyRank = true;
                        }else{
                            itemRankInfo.isMyRank = false;
                        }
                        itemRankInfo.playerID = ""+(i + 1);
                        arrListLeaderboard_Ranks.push(itemRankInfo);
                    }
        
                    clientEvent.dispatchEvent(Constants.PGS_RECEIVE_LISTRANK_LEADERBOARD,arrListLeaderboard_Ranks);
                }else{
                    this.receiveListRankLeaderboard([]);
                }
            }
        }else if(this.currLeaderBoardType == LEADERBOARD_TYPE.FRIEND){
            this.countDownNextTime.node.active = false;
            let arrListLeaderboard_Ranks : ItemRankInfo[] = [];
            for(let i=0; i< localConfig.instance.arrConnectedPlayerInfos.length;i++){
                let friendInfo = localConfig.instance.arrConnectedPlayerInfos[i];
                let itemRankInfo:ItemRankInfo = new ItemRankInfo();
                itemRankInfo.userName = friendInfo.name;
                itemRankInfo.avatarType = AVATAR_TYPE.TYPE_WEB;
                itemRankInfo.userScore = friendInfo.level;
                itemRankInfo.avatarURL = friendInfo.avatarUrl;
                itemRankInfo.indexRank = i + 1;
                itemRankInfo.isMyRank = false;
                arrListLeaderboard_Ranks.push(itemRankInfo);
            }

            let myItemRankInfo = new ItemRankInfo();
            myItemRankInfo.avatarType = AVATAR_TYPE.TYPE_WEB;
            myItemRankInfo.avatarURL = "";
            myItemRankInfo.idFB = localConfig.instance.playerID;
            myItemRankInfo.indexRank = 100;
            myItemRankInfo.isMyRank = true;
            myItemRankInfo.userName = FBInstantManager.instance.getName();
            myItemRankInfo.userScore = localConfig.instance.currLevelUnlock;
            arrListLeaderboard_Ranks.push(myItemRankInfo);

            arrListLeaderboard_Ranks.sort((a,b)=>{
                return b.userScore - a.userScore;
            });

            for(let i=0; i< arrListLeaderboard_Ranks.length;i++){
                arrListLeaderboard_Ranks[i].indexRank = i + 1;
            }
            this.receiveListRankLeaderboard(arrListLeaderboard_Ranks);
        }
    }

    receiveListRankLeaderboard(arrListRankInfos:ItemRankInfo[]){
        let myItemRankInfo: ItemRankInfo = null;
        let indeMyRank: number = arrListRankInfos.findIndex(item => item.isMyRank == true);
        if (indeMyRank > -1) {
            myItemRankInfo = arrListRankInfos[indeMyRank];
            myItemRankInfo.userScore = localConfig.instance.currLevelUnlock;
        } else {
            myItemRankInfo = new ItemRankInfo();
            myItemRankInfo.avatarType = AVATAR_TYPE.TYPE_WEB;
            myItemRankInfo.avatarURL = "";
            myItemRankInfo.idFB = localConfig.instance.playerID;
            myItemRankInfo.indexRank = 100;
            myItemRankInfo.isMyRank = true;
            myItemRankInfo.userName = FBInstantManager.instance.getName();
            myItemRankInfo.userScore = localConfig.instance.currLevelUnlock;
            arrListRankInfos.push(myItemRankInfo);
        }

        arrListRankInfos.sort((a,b)=>{
            return b.userScore - a.userScore;
        });

        for(let i=0; i< arrListRankInfos.length;i++){
            arrListRankInfos[i].indexRank = i + 1;
        }

        this.iconLoading.active = false;
        this.leaderBoardGroupManager.initRankGroup(arrListRankInfos);
    }

    setShow(){
        if(this.tweenGroup != null){    
            this.tweenGroup.stop();
        }
        this.tweenGroup = tween(this.groupOpacity).to(0.2,{opacity:255},{easing:'linear',onComplete:()=>{}}).start();
    }

    setHide(){
        if(this.tweenGroup != null){
            this.tweenGroup.stop();
        }
        this.tweenGroup = tween(this.groupOpacity).to(0.2,{opacity:0},{easing:'linear',onComplete:()=>{
            
        }}).start();
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
