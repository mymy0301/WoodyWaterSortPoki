
import { _decorator, Button, Component, Label, Node, tween, Vec3 } from 'cc';
import { BoxRaceRewardInfoGroup } from './BoxRaceRewardInfoGroup';
import { BasePopup } from '../../common/basePopup';
import { Constants } from '../../framework/constants';
import { GroupRewardDataInfo } from '../info/ShopDataInfo';
import { localConfig } from '../../localConfig';
import { CountDownToNextTime } from '../../common/CountDownToNextTime';
import { ItemPlayerRace } from './ItemPlayerRace';
import { lodash } from '../../framework/lodash';
import { PlayerRaceDataInfo } from './PlayerRaceDataInfo';
import { PlayerRaceScore } from './PlayerRaceScore';
import { clientEvent } from '../../framework/clientEvent';
import { AudioManager2 } from '../../framework/audioManager2';
import { LogEventManager } from '../../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TubeRacePopup
 * DateTime = Thu Nov 07 2024 14:42:13 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = TubeRacePopup.ts
 * FileBasenameNoExtension = TubeRacePopup
 * URL = db://assets/scripts/game/race/TubeRacePopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('TubeRacePopup')
export class TubeRacePopup extends BasePopup {

    @property(Button)
    btnBox1:Button = null;

    @property(Button)
    btnBox2:Button = null;

    @property(Button)
    btnBox3:Button = null;

    @property(BoxRaceRewardInfoGroup)
    boxRaceRewardInfoGroup:BoxRaceRewardInfoGroup = null;

    @property(CountDownToNextTime)
    countDownTime:CountDownToNextTime = null;

    @property(ItemPlayerRace)
    myPlayer:ItemPlayerRace = null;

    @property(ItemPlayerRace)
    arrPlayerOpponents:ItemPlayerRace[] = [];


    myIndexRank:number = 0;

    // @property(Label)
    // txtInfoRank:Label = null;
    // @property(Node)
    // groupTryAgain:Node = null;

    // @property(Button)
    // btnTryAgain:Button = null;

    onEnable(): void {
        super.onEnable();
        this.btnBox1.node.on(Constants.CLICK,this.touchBox1,this);
        this.btnBox2.node.on(Constants.CLICK,this.touchBox2,this);
        this.btnBox3.node.on(Constants.CLICK,this.touchBox3,this);
        // this.btnTryAgain.node.on(Constants.CLICK,this.touchTryAgain,this);

        clientEvent.on(Constants.TUBERACE_PLAYER_FINISHED,this.setTubeRacePlayerFinished,this);
        clientEvent.on(Constants.TUBERACE_CLAIM_FINISHED,this.setClaimFinished,this);
        clientEvent.on(Constants.SHOW_TUBERACE_JOIN_POPUP,this.setShowTubeRaceJoinPopup,this);
    }

    onDisable(): void {
        super.onDisable();
        this.btnBox1.node.off(Constants.CLICK,this.touchBox1,this);
        this.btnBox2.node.off(Constants.CLICK,this.touchBox2,this);
        this.btnBox3.node.off(Constants.CLICK,this.touchBox3,this);
        // this.btnTryAgain.node.off(Constants.CLICK,this.touchTryAgain,this);

        clientEvent.off(Constants.TUBERACE_PLAYER_FINISHED,this.setTubeRacePlayerFinished,this);
        clientEvent.off(Constants.TUBERACE_CLAIM_FINISHED,this.setClaimFinished,this);
        clientEvent.off(Constants.SHOW_TUBERACE_JOIN_POPUP,this.setShowTubeRaceJoinPopup,this);
    }

    isFinddingOpponent: boolean = false;

    showTubeRacePopup(_isFinddingOpponent:boolean){
        this.isTubeRace_ShowFinished = false;
        this.btnClose.node.active = false;
        this.isFinddingOpponent = _isFinddingOpponent;
        this.boxRaceRewardInfoGroup.reset();
        this.myPlayer.resetPlayer();
        for(let i = 0;i < this.arrPlayerOpponents.length;i++){
            this.arrPlayerOpponents[i].resetPlayer();
        }
        if(this.isFinddingOpponent){
            this.countDownTime.initTime(localConfig.instance.RACE_TIME);
        }else{
            this.showInfo();
            
        }
        super.showPopup();
    }

    showInfo(){
        let countTime:number = localConfig.instance.raceLastTime + localConfig.instance.RACE_TIME - localConfig.instance.getCurrTime();
        if(countTime > 0){
            this.countDownTime.initCountDownTime(countTime,()=>{

            });
        }else{
            this.countDownTime.resetCountDownTime();
        }
    }

    showPoup_ShowView(): void {
        this.tweenOpacityBG = tween(this.bgOpacity).to(0.2,{opacity:255},{easing:'quadOut',onComplete:()=>{       

        }}).start();

        this.tweenOpacityPopup = tween(this.popup_UIOpacity).to(0.2,{opacity:255},{easing:'quadOut',onComplete:()=>{
            this.showPoup_ShowView_Finished();
        }}).start();
    }

    showPoup_ShowView_Finished(): void {
        super.showPoup_ShowView_Finished();
        // console.log("showPoup_ShowView_Finished",this.isFinddingOpponent);
        let maxTimeFindding:number = 0;
        if(this.isFinddingOpponent){
            this.lockGroup.active = false;
            this.btnClose.node.active = true;
            this.myPlayer.initMyPlayer();
            for(let i = 0;i < this.arrPlayerOpponents.length;i++){
                let timeFindding:number = 0.5 + lodash.randomFloat(i , i+1);
                if(i == 3){
                    maxTimeFindding = timeFindding;
                }
                this.arrPlayerOpponents[i].initPlayerFindding(localConfig.instance.arrPlayerRaceDataInfos[i], timeFindding );
            }

            this.scheduleOnce(()=>{
                this.setAllPlayerRace_MoveToTarget_Finished(true);
            },maxTimeFindding + 0.8 + 0.3);
        }else{
            if(localConfig.instance.checkRaceFinished()){
                this.lockGroup.active = true;
            }else{
                this.lockGroup.active = false;
            }
            
            this.myPlayer.initMyPlayer();
            for(let i = 0;i < this.arrPlayerOpponents.length;i++){
                this.arrPlayerOpponents[i].initPlayer(localConfig.instance.arrPlayerRaceDataInfos[i]);
            }

            this.scheduleOnce(()=>{
                this.setAllPlayerRace_MoveToTarget_Finished();
            },1.5);
        }
    }

    setAllPlayerRace_MoveToTarget_Finished(isFinddingOpponent:boolean = false){
        if(isFinddingOpponent){
            this.btnClose.node.active = true;
            localConfig.instance.updateRaceLastTime();
            this.countDownTime.initCountDownTime(localConfig.instance.RACE_TIME,()=>{
                
            });
        }else if(!localConfig.instance.checkRaceFinished()){
            this.btnClose.node.active = true;
        }
        
        for(let i = 0;i < this.arrPlayerOpponents.length;i++){
            this.arrPlayerOpponents[i].checkMoveToCurrScore();
        }

        let arrPlayerRaceScores:PlayerRaceScore[] = [];
        let myPlayer:PlayerRaceScore = new PlayerRaceScore();
        myPlayer.indexID = 5;
        myPlayer.isMyPlayer = true;
        myPlayer.score = localConfig.instance.raceScore;
        if(myPlayer.score == 10){
            myPlayer.timeFinished = localConfig.instance.raceFinishedTime - localConfig.instance.raceLastTime;
        }else{
            myPlayer.timeFinished = 2 * 60 * 60;
        }
        arrPlayerRaceScores.push(myPlayer);

        for(let i = 0;i < this.arrPlayerOpponents.length;i++){
            let playerOpponent:PlayerRaceScore = new PlayerRaceScore();
            playerOpponent.indexID = i;
            playerOpponent.isMyPlayer = false;
            playerOpponent.score = this.arrPlayerOpponents[i].currScore;
            if(playerOpponent.score == 10){
                playerOpponent.timeFinished = this.arrPlayerOpponents[i].playerRaceDataInfo.arrTimes[9];
            }else{
                playerOpponent.timeFinished = 2 * 60 * 60;
            }
            arrPlayerRaceScores.push(playerOpponent);
        }

        arrPlayerRaceScores.sort(function(a,b){
            if(a.score > b.score){
                return -1;
            }else if(a.score < b.score){    
                return 1;
            }else if(a.timeFinished <= b.timeFinished){
                return -1;
            }
        });



        for(let i= 0; i < arrPlayerRaceScores.length;i++){
            arrPlayerRaceScores[i].indexRank = i;
        }

        // console.log(arrPlayerRaceScores);

        let indexRankMyPlayer:number = -1;
        for(let i= 0; i < arrPlayerRaceScores.length;i++){
            if(arrPlayerRaceScores[i].isMyPlayer){
                indexRankMyPlayer = arrPlayerRaceScores[i].indexRank;
            }
        }
        this.myPlayer.setMoveToCurrScore(indexRankMyPlayer);
        for(let i = 0;i < this.arrPlayerOpponents.length;i++){

            let indexRankOpponent:number = -1;
            for(let j= 0; j < arrPlayerRaceScores.length;j++){
                if(arrPlayerRaceScores[j].indexID == i){
                    indexRankOpponent = arrPlayerRaceScores[j].indexRank;
                }
            }
            this.arrPlayerOpponents[i].setMoveToCurrScore(indexRankOpponent);
        }

        if(localConfig.instance.checkRaceFinished()){
            this.scheduleOnce(()=>{
                this.setTubeRacePlayerFinished();
            },4);
        }
    }

    touchBox1(): void {
        LogEventManager.instance.logButtonClick("box1","tuberacepopup");
        this.showRewardBoxInfo(this.btnBox1.node.worldPosition,0);
    }

    touchBox2(): void {
        LogEventManager.instance.logButtonClick("box2","tuberacepopup");
        this.showRewardBoxInfo(this.btnBox2.node.worldPosition,1);
    }

    touchBox3(): void {
        LogEventManager.instance.logButtonClick("box3","tuberacepopup");
        this.showRewardBoxInfo(this.btnBox3.node.worldPosition,2);
    }


    showRewardBoxInfo(posStart:Vec3,indexBox:number): void {
        let groupRewardDataInfo:GroupRewardDataInfo = localConfig.instance.arrRace_GroupRewardDataInfos[indexBox];
        this.boxRaceRewardInfoGroup.showBoxRewardInfoGroup(posStart,indexBox,groupRewardDataInfo);
    }

    isTubeRace_ShowFinished:boolean = false;
    setTubeRacePlayerFinished(){
        if(!this.isTubeRace_ShowFinished && localConfig.instance.checkRaceFinished()){
            this.countDownTime.setStopCountDownTime();
            this.isTubeRace_ShowFinished = true;
            this.myIndexRank = this.getIndexMyRank();
            if(this.myIndexRank < 3){
                clientEvent.dispatchEvent(Constants.SHOW_TUBERACE_WIN_POPUP,this.myIndexRank);
            }else{
                localConfig.instance.resetRaceDatas();
                clientEvent.dispatchEvent(Constants.SHOW_TUBERACE_LOSE_POPUP,this.myIndexRank);
            }
        }
    }

    getIndexMyRank() {
        let arrPlayerRaceScores: PlayerRaceScore[] = [];
        let myPlayer: PlayerRaceScore = new PlayerRaceScore();
        myPlayer.indexID = 5;
        myPlayer.isMyPlayer = true;
        myPlayer.score = localConfig.instance.raceScore;
        if (myPlayer.score == 10) {
            myPlayer.timeFinished = localConfig.instance.raceFinishedTime - localConfig.instance.raceLastTime;
        } else {
            myPlayer.timeFinished = 2 * 60 * 60;
        }
        arrPlayerRaceScores.push(myPlayer);

        for (let i = 0; i < this.arrPlayerOpponents.length; i++) {
            let playerOpponent: PlayerRaceScore = new PlayerRaceScore();
            playerOpponent.indexID = i;
            playerOpponent.isMyPlayer = false;
            playerOpponent.score = this.arrPlayerOpponents[i].currScore;
            if (playerOpponent.score == 10) {
                playerOpponent.timeFinished = this.arrPlayerOpponents[i].playerRaceDataInfo.arrTimes[9];
            } else {
                playerOpponent.timeFinished = 2 * 60 * 60;
            }
            arrPlayerRaceScores.push(playerOpponent);
        }

        arrPlayerRaceScores.sort(function (a, b) {
            if (a.score > b.score) {
                return -1;
            } else if (a.score < b.score) {
                return 1;
            } else if (a.timeFinished <= b.timeFinished) {
                return -1;
            }
        });



        for (let i = 0; i < arrPlayerRaceScores.length; i++) {
            arrPlayerRaceScores[i].indexRank = i;
        }

        // console.log(arrPlayerRaceScores);

        let indexRankMyPlayer: number = -1;
        for (let i = 0; i < arrPlayerRaceScores.length; i++) {
            if (arrPlayerRaceScores[i].isMyPlayer) {
                indexRankMyPlayer = arrPlayerRaceScores[i].indexRank;
                return indexRankMyPlayer;
            }
        }

    }

    setClaimFinished(): void {
        this.hidePopup_Finished();
        localConfig.instance.resetRaceDatas();
        clientEvent.dispatchEvent(Constants.SHOW_TUBERACE_JOIN_POPUP);
    }

    setShowTubeRaceJoinPopup(): void {
        this.hidePopup_Finished();
    }

    hidePopup(): void {
        AudioManager2.instance.playPopupClose();
        // this.lockGroup.active = true;
        // this.tweenOpacityPopup = tween(this.popup_UIOpacity).to(0.2,{opacity:0},{easing:'quadOut',onComplete:()=>{

        // }}).start();

        // this.tweenOpacityBG = tween(this.bgOpacity).to(0.3,{opacity:0},{easing:'quadOut',onComplete:()=>{       
        //     this.hidePopup_Finished();
        // }}).start();
        this.hidePopup_Finished();
    }

    touchClose(): void {
        LogEventManager.instance.logButtonClick("close","tuberacepopup");
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
