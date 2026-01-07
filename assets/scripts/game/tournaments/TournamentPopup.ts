
import { _decorator, Button, Component, Label, Node, Prefab, ScrollView, Sprite, tween, Tween, UIOpacity } from 'cc';
import { BasePopup } from '../../common/basePopup';
import { ItemTournamentGroupPlayer } from './ItemTournamentGroupPlayer';
import { CountDownToNextTime_Tournament } from '../../common/CountDownToNextTime_Tournament';
import { AVATAR_TYPE, Constants, ENV_TYPE } from '../../framework/constants';
import { LeaderBoardGroup } from '../LeaderBoardGroup';
import { LeaderboardDataInfo } from '../../common/LeaderboardDataInfo';
import { LeaderBoardGroupManager } from '../LeaderBoardGroupManager';
import { resourceUtil } from '../../framework/resourceUtil';
import { localConfig } from '../../localConfig';
import { clientEvent } from '../../framework/clientEvent';
import { ItemRankInfo } from '../../common/ItemRankInfo';
import { FBInstantManager } from '../../common/FBInstantManager';
import { PGSPlayInstantManager } from '../../common/PGSPlayInstantManager';
import { LogEventManager } from '../../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TournamentPopup
 * DateTime = Wed Oct 30 2024 09:03:28 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = TournamentPopup.ts
 * FileBasenameNoExtension = TournamentPopup
 * URL = db://assets/scripts/game/tournaments/TournamentPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('TournamentPopup')
export class TournamentPopup extends BasePopup {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    
    @property(Label)
    txtTitle:Label = null;

    @property(ItemTournamentGroupPlayer)
    arrPlayers:ItemTournamentGroupPlayer[] = [];

    @property(Sprite)
    iconTournament:Sprite = null;

    @property(Node)
    nodeLoadingIconTournament:Node = null;

    @property(Node)
    nodeTime:Node = null;

    @property(CountDownToNextTime_Tournament)
    countDownTime:CountDownToNextTime_Tournament = null;

    @property(Node)
    nodeTimeEnded:Node = null;

    @property(Label)
    txtCountPlayers:Label = null;

    @property(LeaderBoardGroupManager)
    leaderboardGroupManager:LeaderBoardGroupManager = null;

    @property(Node)
    nodeLoadingLeaderboard:Node = null;

    @property(Button)
    btnPlay:Button = null;

    @property(Button)
    btnOK:Button = null;

    onEnable(): void {
        super.onEnable();
        this.btnPlay.node.on(Constants.CLICK,this.touchPlay,this);
        this.btnOK.node.on(Constants.CLICK,this.touchOK,this);

        clientEvent.on(Constants.PGS_RECEIVE_LISTRANK_LEADERBOARD,this.receiveListRankLeaderboard,this);
    }

    onDisable(): void {
        super.onDisable();
        this.btnPlay.node.off(Constants.CLICK,this.touchPlay,this);
        this.btnOK.node.off(Constants.CLICK,this.touchOK,this);

        clientEvent.off(Constants.PGS_RECEIVE_LISTRANK_LEADERBOARD,this.receiveListRankLeaderboard,this);
    }

    leaderboardDataInfo:LeaderboardDataInfo = null; 
    showTournamentPopup(_leaderboardDataInfo:LeaderboardDataInfo){
        this.leaderboardGroupManager.resetRankGroup();
        for(let i = 0;i < this.arrPlayers.length;i++){
            this.arrPlayers[i].reset();
        }
        if(this.leaderboardDataInfo && this.leaderboardDataInfo._id == _leaderboardDataInfo._id){

        }else{
            this.leaderboardDataInfo = _leaderboardDataInfo;
            this.resetPopup();
            this.initTournamentDataInfo();
        }
        super.showPopup();
    }

    resetPopup(){
        this.iconTournament.spriteFrame = null;
        this.nodeLoadingIconTournament.active = true;
        this.nodeTime.active = false;
        this.nodeTimeEnded.active = false;
        this.txtCountPlayers.string = "";
        this.btnPlay.node.active = false;
        this.btnOK.node.active = false;
        this.nodeLoadingLeaderboard.active = true;

        
    }

    showPoup_ShowView_Finished(): void {
        super.showPoup_ShowView_Finished();

        if(localConfig.instance.envType == ENV_TYPE.TEST_AD){
            let arrListLeaderboard_Ranks : ItemRankInfo[] = [];
            clientEvent.dispatchEvent(Constants.PGS_RECEIVE_LISTRANK_LEADERBOARD, arrListLeaderboard_Ranks);
            
        }else if(localConfig.instance.mapLeaderBoard_ItemRankInfos.has(this.leaderboardDataInfo._id)){
            this.receiveListRankLeaderboard();
        }else{
            PGSPlayInstantManager.instance.GetTournament_TopPlayers_byLeaderboardID(this.leaderboardDataInfo._id,this.leaderboardDataInfo.tournamentId);
        }
    }

    


    initTournamentDataInfo(){
        this.txtTitle.string = `${this.leaderboardDataInfo.name}`;
        this.loadBackground();
        if(this.leaderboardDataInfo.expireTime < localConfig.instance.getCurrTime()){
            this.nodeTimeEnded.active = true;
            this.btnOK.node.active = true;
        }else{
            this.nodeTime.active = true;
            this.btnPlay.node.active = true;
            this.countDownTime.initCountDownTime(this.leaderboardDataInfo.expireTime - localConfig.instance.getCurrTime(),()=>{this.initTournamentDataInfo();});
        }
    }

    showPlayers(){
        if(localConfig.instance.mapLeaderBoard_Totals.has(this.leaderboardDataInfo._id)){
            this.txtCountPlayers.string = localConfig.instance.mapLeaderBoard_Totals.get(this.leaderboardDataInfo._id).toString() + " players";
            this.txtCountPlayers.node.active = true;
        }else{
            this.txtCountPlayers.string = "??? players";
            this.txtCountPlayers.node.active = true;
        }
    }

    loadBackground(){
        let pathIcon:string = "tournament/" + this.leaderboardDataInfo.type+"_1";
        resourceUtil.loadSpriteFrame_Bundle(pathIcon, (err, spriteFrame) => {
            if (err) {
                console.error(err);
                this.iconTournament.spriteFrame = null;
                return;
            }
            if(!this.node || !this.iconTournament){
                return;
            } 
            this.nodeLoadingIconTournament.active = false;
            this.iconTournament.spriteFrame = spriteFrame;
        });
    }

    receiveListRankLeaderboard(){
        if(localConfig.instance.mapLeaderBoard_ItemRankInfos.has(this.leaderboardDataInfo._id)){
            this.showPlayers();
            let arrItemRankInfos:ItemRankInfo[] = localConfig.instance.mapLeaderBoard_ItemRankInfos.get(this.leaderboardDataInfo._id);
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

            this.nodeLoadingLeaderboard.active = false;
            this.leaderboardGroupManager.initRankGroup(arrItemRankInfos);
        }else{
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

            this.showPlayers();

            this.nodeLoadingLeaderboard.active = false;
            this.leaderboardGroupManager.initRankGroup(arrItemRankInfos);



            for(let i = 0; i < this.arrPlayers.length; i++){   
                let itemRankInfo:ItemRankInfo = arrItemRankInfos[i];
                if(itemRankInfo){
                    this.arrPlayers[i].initPlayer(itemRankInfo);
                } 
            }
        }
    }

    touchPlay(){
        LogEventManager.instance.logButtonClick("play","tournamentpopup");
        FBInstantManager.instance.joinTournament(this.leaderboardDataInfo.contextId,(err,success)=>{
            if(err){

            }else{
                this.hidePopup();
                clientEvent.dispatchEvent(Constants.TOURNAMENT_TOUCH_PLAY,this.leaderboardDataInfo);
            }
        });
        
    }

    touchOK(){
        LogEventManager.instance.logButtonClick("ok","tournamentpopup");
        this.hidePopup();
    }

    touchClose(): void {
        LogEventManager.instance.logButtonClick("close","tournamentpopup");
        super.touchClose();
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
