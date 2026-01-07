
import { _decorator, Button, Component, Label, Node, UIOpacity, Widget } from 'cc';
import { BasePopup } from '../common/basePopup';
import { AVATAR_TYPE, Constants } from '../framework/constants';
import { localConfig } from '../localConfig';
import { AudioManager2 } from '../framework/audioManager2';
import { LeaderBoardGroupManager } from './LeaderBoardGroupManager';
import { clientEvent } from '../framework/clientEvent';
import { LogEventManager } from '../common/LogEventManager';
import { FBInstantManager } from '../common/FBInstantManager';
import { ItemRankInfo } from '../common/ItemRankInfo';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = WinTournamentPageHostPopup
 * DateTime = Wed Jul 16 2025 10:05:04 GMT+0700 (Indochina Time)
 * Author = MyTom2k17
 * FileBasename = WinTournamentPageHostPopup.ts
 * FileBasenameNoExtension = WinTournamentPageHostPopup
 * URL = db://assets/scripts/game/WinTournamentPageHostPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('WinTournamentPageHostPopup')
export class WinTournamentPageHostPopup extends BasePopup {
    @property(Widget)
    groupAllTopWidget: Widget;

    @property(Label)
    txtInfoTournament:Label;

    @property(Button)
    btnHome: Button;

    @property(Button)
    btnShare: Button;

    @property(Button)
    btnReplay: Button;

    @property(Node)
    iconLoading: Node;

    @property(LeaderBoardGroupManager)
    leaderboardGroupManager: LeaderBoardGroupManager = null;
    score:number = 0;
    onEnable(): void {
        super.onEnable();
        this.btnShare.node.on(Constants.CLICK,this.touchShare,this);
        this.btnReplay.node.on(Constants.CLICK, this.touchReplay, this);
        this.btnHome.node.on(Constants.CLICK, this.touchHome, this);

        clientEvent.on(Constants.RECEIVE_LISTRANK_TOURNAMENT_PAGEHOST,this.receiveListRankTournamentPageHost,this);
    }

    onDisable(): void {
        super.onDisable();
        this.btnShare.node.off(Constants.CLICK,this.touchShare,this);
        this.btnReplay.node.off(Constants.CLICK, this.touchReplay, this);
        this.btnHome.node.off(Constants.CLICK, this.touchHome, this);

        clientEvent.off(Constants.RECEIVE_LISTRANK_TOURNAMENT_PAGEHOST,this.receiveListRankTournamentPageHost,this);
    }

    start () {
        // [3]
        this.initAllTop();
    }

    initAllTop(): void {
        if (localConfig.instance.isMobile) {
            let posY = (localConfig.instance.scaleBG - 1) * localConfig.instance.DEFAULT_H / 2;
            if (posY > 0) {
                this.groupAllTopWidget.top = -posY;
            } else {
                this.groupAllTopWidget.top = 0;
            }
        } else {
            this.groupAllTopWidget.top = 0;
        }
    }

    showWinTournamentPageHostPopup(_score:number):void{
        this.iconLoading.active = true;
        this.score = _score;
        this.leaderboardGroupManager.resetRankGroup();
        AudioManager2.instance.playSound_WIN2();

        this.txtInfoTournament.string = `${localConfig.instance.currTournamentPageHostDataInfo.title}`;
        super.showPopup();
    }

    showPoup_ShowView_Finished(): void {
        super.showPoup_ShowView_Finished();
        
        FBInstantManager.instance.GetLeaderBoard_TournamentPageHost();
    }

    receiveListRankTournamentPageHost(arrListRankInfos:ItemRankInfo[]){
        FBInstantManager.instance.PostScoreShareTournament(this.score,(err,success)=>{
            
        });

        // console.log("receiveListRankTournament",arrListRankInfos);
        if(arrListRankInfos != null){
            let indeMyRank: number = arrListRankInfos.findIndex(item => item.isMyRank == true);
            if (indeMyRank > -1) {
                let myItemRankInfo: ItemRankInfo = arrListRankInfos[indeMyRank];
                if(myItemRankInfo.userScore < this.score){
                    myItemRankInfo.userScore = this.score;
                }
            } else {

                let myItemRankInfo: ItemRankInfo = new ItemRankInfo();
                myItemRankInfo.avatarType = AVATAR_TYPE.TYPE_WEB;
                myItemRankInfo.avatarURL = "";
                myItemRankInfo.idFB = localConfig.instance.playerID;
                myItemRankInfo.indexRank = arrListRankInfos.length + 1;
                myItemRankInfo.isMyRank = true;
                myItemRankInfo.userName = FBInstantManager.instance.getName();
                myItemRankInfo.userScore = this.score;
                arrListRankInfos.push(myItemRankInfo);
            }
            this.iconLoading.active = false;
            this.leaderboardGroupManager.initRankGroup(arrListRankInfos);

        }else{
            let myRankInfo:ItemRankInfo = new ItemRankInfo();
            myRankInfo.avatarType = AVATAR_TYPE.TYPE_LOCAL;
            myRankInfo.userName = FBInstantManager.instance.getName();
            myRankInfo.avatarURL = FBInstantManager.instance.getPhotoUrl();
            myRankInfo.userScore = this.score;
            myRankInfo.indexRank = 1;
            myRankInfo.isMyRank = true;
            let arrRankInfos :ItemRankInfo[] = [];
            arrRankInfos.push(myRankInfo);

            this.iconLoading.active = false;
            this.leaderboardGroupManager.initRankGroup(arrRankInfos);
        }
    }

    touchShare(){
        LogEventManager.instance.logButtonClick("share", "wintournamentpagehostpopup");
        clientEvent.dispatchEvent(Constants.SHOW_SHARE_INFOSCORE_POPUP, this.score, (err, success) => {

        });
    }

    touchReplay(){
        FBInstantManager.instance.Show_InterstitialAdAsync("tournament_pagehost_popup", "replay", (err, success) => {
            LogEventManager.instance.logButtonClick("replay", "wintournamentpagehostpopup");
            this.hidePopup();
            clientEvent.dispatchEvent(Constants.TOURNAMENT_PAGEHOST_TOUCH_REPLAY);
        });
       
    }

    // touchClose(): void {
    //     FBInstantManager.instance.Show_InterstitialAdAsync("tournament_pagehost_popup", "close", (err, success) => {
    //         LogEventManager.instance.logButtonClick("close","wintournamentpagehostpopup");
    //         super.touchClose();
    //     });
       
    // }

    touchHome() {
        LogEventManager.instance.logButtonClick("home", "tournament_pagehost_popup");
        this.hidePopup();
        FBInstantManager.instance.resetContext(() => { });
        localConfig.instance.currTournamentPageHostDataInfo = null;

        clientEvent.dispatchEvent(Constants.TOURNAMENT_PAGEHOST_TOUCH_HOME);

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
