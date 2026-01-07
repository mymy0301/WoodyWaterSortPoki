
import { _decorator, Button, Component, Label, Node, Sprite, tween, Tween, UIOpacity, Vec3 } from 'cc';
import { LeaderboardDataInfo } from '../../common/LeaderboardDataInfo';
import { ItemTournamentGroupPlayer } from './ItemTournamentGroupPlayer';
import { AVATAR_TYPE, Constants, ENV_TYPE } from '../../framework/constants';
import { localConfig } from '../../localConfig';
import { clientEvent } from '../../framework/clientEvent';
import { ItemRankInfo } from '../../common/ItemRankInfo';
import { PGSPlayInstantManager } from '../../common/PGSPlayInstantManager';
import { CountDownToNextTime } from '../../common/CountDownToNextTime';
import { CountDownToNextTime_Tournament } from '../../common/CountDownToNextTime_Tournament';
import { resourceUtil } from '../../framework/resourceUtil';
import { FBInstantManager } from '../../common/FBInstantManager';
import { lodash } from '../../framework/lodash';
import { LogEventManager } from '../../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemTournament
 * DateTime = Tue Oct 29 2024 11:09:24 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemTournament.ts
 * FileBasenameNoExtension = ItemTournament
 * URL = db://assets/scripts/game/tournaments/ItemTournament.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemTournament')
export class ItemTournament extends Component {
    leaderboarDataInfo:LeaderboardDataInfo = null;

    @property(UIOpacity)
    nodeGroupOpacity:UIOpacity = null;

    @property(Node)
    nodeGroup:Node = null;

    @property(Sprite)
    bg:Sprite = null;

    @property(Node)
    iconLoadingBG:Node = null;

    @property(Label)
    txtName:Label = null;

    @property(Label)
    txtTime:Label = null;

    @property(CountDownToNextTime_Tournament)
    countTime:CountDownToNextTime_Tournament = null;

    @property(Label)
    txtTimeEnded:Label = null;

    @property(Label)
    txtCountPlayers:Label = null;

    @property(ItemTournamentGroupPlayer)
    arrPlayers:ItemTournamentGroupPlayer[] = [];

    @property(Button)
    btnJoin:Button = null;

    @property(Button)
    btnView:Button = null;

    tweenOpacity:Tween<{}> = null;
    tweenShow:Tween<{}> = null;
    
    
    protected onEnable(): void {
        this.btnJoin.node.on(Constants.CLICK,this.touchJoin,this);
        this.btnView.node.on(Constants.CLICK,this.touchView,this);

        clientEvent.on(Constants.PGS_RECEIVE_LISTRANK_LEADERBOARD,this.receiveListRankLeaderboard,this);

        if(this.leaderboarDataInfo){
            this.showCountTime();

            if(localConfig.instance.mapLeaderBoard_ItemRankInfos.has(this.leaderboarDataInfo._id)){
                this.receiveListRankLeaderboard();
            }
        }
    }

    protected onDisable(): void {
        this.btnJoin.node.off(Constants.CLICK,this.touchJoin,this);
        this.btnView.node.off(Constants.CLICK,this.touchView,this);

        clientEvent.off(Constants.PGS_RECEIVE_LISTRANK_LEADERBOARD,this.receiveListRankLeaderboard,this);
    }

    index:number = 0;
    init(_index:number,_leaderboarDataInfo:LeaderboardDataInfo){
        // console.log(_leaderboarDataInfo);
        this.index = _index;
        this.leaderboarDataInfo = _leaderboarDataInfo;
        this.txtName.string = this.leaderboarDataInfo.name;
        this.txtCountPlayers.node.active = false;

        for(let i = 0; i < this.arrPlayers.length; i++){    
            this.arrPlayers[i].node.active = false;
        }
        this.iconLoadingBG.active = true;
        this.loadBackground();

        
        this.showCountTime();
        if(localConfig.instance.envType == ENV_TYPE.TEST_AD){
            let arrListLeaderboard_Ranks : ItemRankInfo[] = [];
            // for (let i = 0; i < 1; i++) {
            //     let itemRankInfo: ItemRankInfo = new ItemRankInfo();
            //     itemRankInfo.userName = "" + FBInstantManager.instance.getName() + i;
            //     itemRankInfo.avatarType = AVATAR_TYPE.TYPE_LOCAL;
            //     itemRankInfo.userScore = 8000 - 500 * i;
            //     itemRankInfo.avatarURL = "" + lodash.random(1, 20);
            //     itemRankInfo.indexRank = i + 1;
            //     if (i == 60) {
            //         itemRankInfo.isMyRank = true;
            //     } else {
            //         itemRankInfo.isMyRank = false;
            //     }
            //     itemRankInfo.playerID = "" + (i + 1);
            //     arrListLeaderboard_Ranks.push(itemRankInfo);
            // }
            // localConfig.instance.mapLeaderBoard_Totals.set(_leaderboarDataInfo._id,10);
            // localConfig.instance.mapLeaderBoard_ItemRankInfos.set(_leaderboarDataInfo._id,arrListLeaderboard_Ranks);
            clientEvent.dispatchEvent(Constants.PGS_RECEIVE_LISTRANK_LEADERBOARD, arrListLeaderboard_Ranks);
            
        }else{
            if(localConfig.instance.mapLeaderBoard_ItemRankInfos.has(this.leaderboarDataInfo._id)){
                this.receiveListRankLeaderboard();
            }else{
                PGSPlayInstantManager.instance.GetTournament_TopPlayers_byLeaderboardID(this.leaderboarDataInfo._id,this.leaderboarDataInfo.tournamentId);
            }
        }

        this.showGroup();
    }

    showGroup(){
        if(this.tweenOpacity != null){
            this.tweenOpacity.stop();
        }
        if(this.tweenShow != null){
            this.tweenShow.stop();
        }
        let delayTime:number = this.index * 0.15 + 0.2;
        this.nodeGroup.setPosition(new Vec3(0,-60,0));
        this.nodeGroupOpacity.opacity = 0;

        this.tweenOpacity = tween(this.nodeGroupOpacity).delay(delayTime).to(0.3,{opacity:255},{easing:'linear',onComplete:()=>{

        }}).start();

        this.tweenShow = tween(this.nodeGroup).delay(delayTime).to(0.3,{position:new Vec3(0,0,0)},{easing:'linear',onComplete:()=>{

        }}).start();
    }

    hideGroup(){
        if(this.tweenOpacity != null){
            this.tweenOpacity.stop();
        }
        if(this.tweenShow != null){
            this.tweenShow.stop();
        }
        this.nodeGroupOpacity.opacity = 0;
        this.nodeGroup.setPosition(new Vec3(0,-60,0));
    }
    showCountTime(){
        this.iconLoadingBG.active = true;
        this.loadBackground();

        this.txtTime.node.active = false;
        this.txtTimeEnded.node.active = false;
        this.btnJoin.node.active = false;
        this.btnView.node.active = false;
        
        if(this.leaderboarDataInfo.expireTime < localConfig.instance.getCurrTime()){
            this.txtTimeEnded.node.active = true;
            this.btnView.node.active = true;

        }else{
            this.txtTime.node.active = true;
            this.btnJoin.node.active = true;

            this.countTime.initCountDownTime(this.leaderboarDataInfo.expireTime - localConfig.instance.getCurrTime(),()=>{this.showCountTime();});
        }
        
    }

    receiveListRankLeaderboard(){
        if(localConfig.instance.mapLeaderBoard_ItemRankInfos.has(this.leaderboarDataInfo._id)){
            this.showPlayers();
            let arrItemRankInfos:ItemRankInfo[] = localConfig.instance.mapLeaderBoard_ItemRankInfos.get(this.leaderboarDataInfo._id);
            let indeMyRank: number = arrItemRankInfos.findIndex(item => item.isMyRank == true);
            if (indeMyRank > -1) {

            } else {
                let myItemRankInfo = new ItemRankInfo();
                myItemRankInfo.avatarType = AVATAR_TYPE.TYPE_WEB;
                myItemRankInfo.avatarURL = "";
                myItemRankInfo.idFB = localConfig.instance.playerID;
                myItemRankInfo.indexRank = arrItemRankInfos.length + 1;
                myItemRankInfo.isMyRank = true;
                myItemRankInfo.userName = FBInstantManager.instance.getName();
                myItemRankInfo.userScore = 0;
                arrItemRankInfos.push(myItemRankInfo);
            }

            for(let i = 0; i < this.arrPlayers.length; i++){   
                let itemRankInfo:ItemRankInfo = arrItemRankInfos[i];
                if(itemRankInfo){
                    this.arrPlayers[i].initPlayer(itemRankInfo);
                } 
            }
        }else{
            this.showPlayers();

            let arrItemRankInfos:ItemRankInfo[] = [];
            let myItemRankInfo = new ItemRankInfo();
            myItemRankInfo.avatarType = AVATAR_TYPE.TYPE_WEB;
            myItemRankInfo.avatarURL = "";
            myItemRankInfo.idFB = localConfig.instance.playerID;
            myItemRankInfo.indexRank = arrItemRankInfos.length + 1;
            myItemRankInfo.isMyRank = true;
            myItemRankInfo.userName = FBInstantManager.instance.getName();
            myItemRankInfo.userScore = 0;
            arrItemRankInfos.push(myItemRankInfo);
            
            for(let i = 0; i < this.arrPlayers.length; i++){   
                let itemRankInfo:ItemRankInfo = arrItemRankInfos[i];
                if(itemRankInfo){
                    this.arrPlayers[i].initPlayer(itemRankInfo);
                } 
            }
        }
    }

    showPlayers(){
        if(localConfig.instance.mapLeaderBoard_Totals.has(this.leaderboarDataInfo._id)){
            this.txtCountPlayers.string = localConfig.instance.mapLeaderBoard_Totals.get(this.leaderboarDataInfo._id).toString() + " players";
            this.txtCountPlayers.node.active = true;
        }else{
            this.txtCountPlayers.string = "??? players";
            this.txtCountPlayers.node.active = true;
        }
    }

    loadBackground(){
        let pathIcon:string = "tournament/" + this.leaderboarDataInfo.type+"_2";
        resourceUtil.loadSpriteFrame_Bundle(pathIcon, (err, spriteFrame) => {
            if (err) {
                console.error(err);
                this.bg.spriteFrame = null;
                return;
            }
            if(!this.node || !this.bg){
                return;
            } 
            this.iconLoadingBG.active = false;
            this.bg.spriteFrame = spriteFrame;
        });
    }

    touchJoin(){
        LogEventManager.instance.logButtonClick("join","tournamentpopup");
        clientEvent.dispatchEvent(Constants.SHOW_TOURNAMENT_POPUP,this.leaderboarDataInfo);
    }

    touchView(){
        LogEventManager.instance.logButtonClick("view","tournamentpopup");
        clientEvent.dispatchEvent(Constants.SHOW_TOURNAMENT_POPUP,this.leaderboarDataInfo);
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
