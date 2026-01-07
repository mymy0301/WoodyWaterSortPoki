
import { _decorator, Button, Component, Label, Node } from 'cc';
import { Constants } from '../../framework/constants';
import { clientEvent } from '../../framework/clientEvent';
import { CountDownToNextTime } from '../../common/CountDownToNextTime';
import { localConfig } from '../../localConfig';
import { PlayerRaceScore } from './PlayerRaceScore';
import { AudioManager2 } from '../../framework/audioManager2';
import { LogEventManager } from '../../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ButtonRaceManager
 * DateTime = Wed Nov 06 2024 10:21:15 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ButtonRaceManager.ts
 * FileBasenameNoExtension = ButtonRaceManager
 * URL = db://assets/scripts/game/race/ButtonRaceManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ButtonRaceManager')
export class ButtonRaceManager extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Button)
    btnRace:Button = null;

    @property(Node)
    nodeJoin:Node = null;

    @property(Node)
    nodeActive:Node = null;

    @property(CountDownToNextTime)
    countDownTime:CountDownToNextTime = null;

    @property(Label)
    txtIndexRank:Label = null;

    @property(Node)
    nodeLock:Node = null;

    @property(Label)
    txtUnLock:Label = null;

    protected onEnable(): void {
        this.btnRace.node.on(Constants.CLICK,this.touchRace,this);
        clientEvent.on(Constants.TUBERACE_UPDATE, this.showInfo, this);
        this.showInfo();
    }

    protected onDisable(): void {
        this.btnRace.node.off(Constants.CLICK,this.touchRace,this);
        clientEvent.on(Constants.TUBERACE_UPDATE, this.showInfo, this);
    }

    showInfo(){
        if(localConfig.instance.currLevelUnlock < localConfig.instance.RACE_LEVEL_UNLOCK) {
            this.nodeActive.active = false;
            this.nodeJoin.active = false;
            this.nodeLock.active = true;
            this.txtUnLock.string = `Lv.${localConfig.instance.RACE_LEVEL_UNLOCK}`;
            return;
        }
        this.nodeLock.active = false;
        if(localConfig.instance.raceActive == 0 || localConfig.instance.checkRaceFinished()){
            this.nodeActive.active = false;
            this.nodeJoin.active = true;
        }else{
            this.nodeActive.active = true;
            this.nodeJoin.active = false;

            let indexMyRank:number = this.getIndexMyRank();
            this.txtIndexRank.string = `${indexMyRank+1}`;

            let timeLeft:number = localConfig.instance.raceLastTime + localConfig.instance.RACE_TIME - localConfig.instance.getCurrTime();
            if(timeLeft > 0){
                this.countDownTime.initCountDownTime(timeLeft,()=>{
                    AudioManager2.instance.playPopupOpen2();
                    clientEvent.dispatchEvent(Constants.SHOW_TUBERACE_POPUP,false);
                });
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

        let timePlayed:number = localConfig.instance.getCurrTime() - localConfig.instance.raceLastTime;
        for (let i = 0; i < localConfig.instance.arrPlayerRaceDataInfos.length; i++) {
            let playerOpponent: PlayerRaceScore = new PlayerRaceScore();
            playerOpponent.indexID = i;
            playerOpponent.isMyPlayer = false;

            playerOpponent.score = localConfig.instance.getRaceScore_Opponent(timePlayed, localConfig.instance.arrPlayerRaceDataInfos[i].arrTimes);
            if (playerOpponent.score == 10) {
                playerOpponent.timeFinished = localConfig.instance.arrPlayerRaceDataInfos[i].arrTimes[9];
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

    touchRace(){
        LogEventManager.instance.logButtonClick("race","home");
        if(localConfig.instance.currLevelUnlock < localConfig.instance.RACE_LEVEL_UNLOCK){
            clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION,"Unlock at Level "+localConfig.instance.RACE_LEVEL_UNLOCK);
            return;
        }

        if(localConfig.instance.raceActive == 0){
            clientEvent.dispatchEvent(Constants.SHOW_TUBERACE_JOIN_POPUP);
        }else{
            clientEvent.dispatchEvent(Constants.SHOW_TUBERACE_POPUP,false);
        }
       
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
