
import { _decorator, Component, Label, Node, sp, tween, Tween, Vec3 } from 'cc';
import { PlayerRaceDataInfo } from './PlayerRaceDataInfo';
import Utils from '../../core/utils/Utils';
import { localConfig } from '../../localConfig';
import { Constants, THEME_TYPE } from '../../framework/constants';
import { clientEvent } from '../../framework/clientEvent';
import { FBInstantManager } from '../../common/FBInstantManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemPlayerRace
 * DateTime = Thu Nov 07 2024 15:43:25 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemPlayerRace.ts
 * FileBasenameNoExtension = ItemPlayerRace
 * URL = db://assets/scripts/game/race/ItemPlayerRace.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemPlayerRace')
export class ItemPlayerRace extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Vec3)
    posPreStart:Vec3 = new Vec3(0,0,0);

    @property(Vec3)
    posStart:Vec3 = new Vec3(0,0,0);

    @property(Vec3)
    posEnd:Vec3 = new Vec3(0,0,0);

    @property(Vec3)
    posFinished:Vec3 = new Vec3(0,0,0);

    @property(Vec3)
    scalePreStart:Vec3 = new Vec3(1,1,1);

    @property(Vec3)
    scaleStart:Vec3 = new Vec3(1,1,1);

    @property(Vec3)
    scaleEnd:Vec3 = new Vec3(1,1,1);

    @property(sp.Skeleton)
    character:sp.Skeleton = null;

    @property(Node)
    nodeInfo:Node;

    @property(Label)
    txtScore:Label = null;

    @property(Label)
    txtScore2:Label = null;

    @property(Label)
    txtName:Label = null;

    @property(Boolean)
    isMyPlayer:boolean = false;

    @property(Node)
    nodeFindding:Node = null;

    playerRaceDataInfo:PlayerRaceDataInfo = null;

    start () {
        // [3]
    }

    protected onEnable(): void {
        
    }

    protected onDisable(): void {
        this.unschedule(this.checkMoveToNextScore);
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    tweenMovePlayer:Tween<{}> = null;
    
    initPlayerFindding(_playerRaceDataInfo:PlayerRaceDataInfo,delayTime:number = 0){
        this.playerRaceDataInfo = _playerRaceDataInfo;
        this.resetPlayer();
        this.nodeFindding.active = true;
        this.character.node.active = false;
        this.schedule(this.setPlayerFindding_Finished,delayTime,1,0);
    }

    setPlayerFindding_Finished(){
        this.resetPlayer();
        this.nodeFindding.active = false;
        this.txtName.string = `${this.playerRaceDataInfo.userName}`;
        this.setMoveToStart();
    }

    initPlayer(_playerRaceDataInfo:PlayerRaceDataInfo){
        this.resetPlayer();
        this.playerRaceDataInfo = _playerRaceDataInfo;
        this.txtName.string = `${this.playerRaceDataInfo.userName}`;
        this.setMoveToStart();
    }

    initMyPlayer(){
        this.resetPlayer();
        this.txtName.string = `${FBInstantManager.instance.getName()}`;
        this.currScore = localConfig.instance.raceScore;
        this.setMoveToStart();
    }

    resetPlayer(){
        if(this.tweenMovePlayer){
            this.tweenMovePlayer.stop();
        }
        this.currScore = 0;
        this.txtScore.string = `0`;
        this.txtScore2.string = `0`;
        
        this.nodeInfo.active = false;
        this.txtScore2.node.active = false;
        this.character.node.setPosition(this.posPreStart);
        this.character.node.setScale(this.scalePreStart);
        this.nodeFindding.active = false;
        this.unschedule(this.checkMoveToNextScore);
        this.unschedule(this.setAnimationDace_Finished);
        this.unschedule(this.setPlayerFindding_Finished);
        
    }

    setMoveToStart(){
        this.txtScore2.node.active = false;
        this.character.node.active = true;
        this.setAnimationRun();
        if(this.tweenMovePlayer){
            this.tweenMovePlayer.stop();
        }

        this.tweenMovePlayer = tween(this.character.node).to(0.8, { position: this.posStart }, { easing: 'linear',onComplete: () => {
            this.setMoveToStart_Finished();
        } }).start();
    }
    setMoveToStart_Finished(){  
        this.nodeFindding.active = false;
        this.nodeInfo.active = true;

        this.setAnimationIdle();
        
        this.nodeInfo.active = true;
    }

    checkMoveToCurrScore(){
        if(!this.isMyPlayer){
            let timePlayed:number = localConfig.instance.getCurrTime() - localConfig.instance.raceLastTime;
            this.currScore = localConfig.instance.getRaceScore_Opponent(timePlayed, this.playerRaceDataInfo.arrTimes);

            // console.log("this.currScore",this.currScore);
        }

    }
    currScore:number = 0;
    scoreCheck:number = 0;
    setMoveToCurrScore(indexRank:number){
        // console.log("setMoveToCurrScore",indexRank,this.currScore);
        if(this.currScore == 0) {
            if(!this.isMyPlayer){
                // console.log("setMoveToCurrScore22222",this.currScore);
                this.schedule(this.checkMoveToNextScore,5);
            }
            return;
        }
        this.setAnimationRun();
        this.scoreCheck = 0;
        this.txtScore2.node.active = true;
        this.txtScore2.string = `${this.scoreCheck}`;
        let timeMove = this.currScore / 10 * 2 + 0.1 * indexRank;
        let posX:number = (this.posEnd.x - this.posStart.x) * (this.currScore / 10) + this.posStart.x;
        let posY:number = (this.posEnd.y - this.posStart.y) * (this.currScore / 10) + this.posStart.y;
        let scale:number = (this.scaleEnd.x - this.scaleStart.x) * (this.currScore / 10) + this.scaleStart.x;

        if(this.tweenMovePlayer){
            this.tweenMovePlayer.stop();
        }

        this.tweenMovePlayer = tween(this.character.node).to(timeMove, { position: new Vec3(posX, posY, 0), scale: new Vec3(scale, scale, 1) }, {
            easing: 'linear', 
            onUpdate: (target,ratio) => {
                let score:number = Math.floor( ratio * this.currScore);
                if(score != this.scoreCheck){
                    this.scoreCheck = score;
                    this.txtScore.string = `${this.scoreCheck}`;
                    this.txtScore2.string = `${this.scoreCheck}`;
                }
            }, onComplete: () => {
                this.setMoveToCurrScore_Finished();
            }
        }).start();0
    }

    setMoveToCurrScore_Finished(){
        // console.log("setMoveToCurrScore_Finished",this.currScore);
        if(this.currScore == 10){
            this.setMoveToEnd();
        }else{
            this.scheduleOnce(()=>{
                if(!this.isMyPlayer){
                    this.schedule(this.checkMoveToNextScore,5);
                }
                this.txtScore2.node.active = false;
                this.setAnimationIdle();
            },0.2);
        }
    }

    setMoveToEnd(){
        // console.log("setMoveToEnd");
        this.unschedule(this.checkMoveToNextScore);
        // this.txtScore2.node.active = false;
        if(this.tweenMovePlayer){
            this.tweenMovePlayer.stop();
        }
        this.tweenMovePlayer = tween(this.character.node).to(0.5, { position: this.posFinished }, { easing: 'linear',onComplete: () => {
            this.setMoveToEnd_Finished();
        }}).start();
    }
    setMoveToEnd_Finished(){
        this.txtScore2.node.active = false;
        this.setAnimationDance();
        this.schedule(this.setAnimationDace_Finished,2.67,1,0);
    }

    setAnimationDace_Finished(){
        // clientEvent.dispatchEvent(Constants.TUBERACE_PLAYER_FINISHED);
        this.setAnimationIdle();
    }

    checkMoveToNextScore(){
        if(!this.isMyPlayer && !localConfig.instance.checkRaceFinished()){
            let timePlayed:number = localConfig.instance.getCurrTime() - localConfig.instance.raceLastTime;
            // console.log("timePlayed",timePlayed);
            let scoreOpponent:number = localConfig.instance.getRaceScore_Opponent(timePlayed, this.playerRaceDataInfo.arrTimes);
            // console.log("scoreOpponent",scoreOpponent,this.currScore);
            if(scoreOpponent > this.currScore){
                this.currScore = scoreOpponent;
                this.setMoveToNextScore();
            }
        }
    }

    setMoveToNextScore(){
        let posX:number = (this.posEnd.x - this.posStart.x) * (this.currScore / 10) + this.posStart.x;
        let posY:number = (this.posEnd.y - this.posStart.y) * (this.currScore / 10) + this.posStart.y;
        let scale:number = (this.scaleEnd.x - this.scaleStart.x) * (this.currScore / 10) + this.scaleStart.x;
        if(this.tweenMovePlayer){
            this.tweenMovePlayer.stop();
        }

        this.setAnimationRun();
        this.tweenMovePlayer = tween(this.character.node).delay(0.2).to(0.5, { position: new Vec3(posX, posY, 0), scale: new Vec3(scale, scale, 1) }, {
            easing: 'linear', 
            onUpdate: (target,ratio) => {
                if(this.scoreCheck != this.currScore){
                    this.scoreCheck = this.currScore;
                    this.txtScore.string = `${this.scoreCheck}`;
                    this.txtScore2.string = `${this.scoreCheck}`;
                }
            }, onComplete: () => {
                this.setMoveToNextScore_Finished();
            }
        }).start();
    }

    setMoveToNextScore_Finished(){
        // this.txtScore2.node.active = false;
        // console.log("setMoveToNextScore_Finished",this.currScore);
        if(this.currScore == 10){
            clientEvent.dispatchEvent(Constants.TUBERACE_OPPONENTS_FINISHED);
            this.setMoveToEnd();
        }else{
            this.scheduleOnce(()=>{
                this.txtScore2.node.active = false;
                this.setAnimationIdle();
            },0.2);
        }
    }


    setAnimationIdle(){
        let strAnimIdle:string = "";
        if(this.isMyPlayer){
            strAnimIdle = localConfig.instance.getStrAnimationIdle_byID(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.SKIN));
        }else{
            strAnimIdle = localConfig.instance.getStrAnimationIdle_byID(this.playerRaceDataInfo.raceSkinID);
        }
        this.character.setAnimation(0,strAnimIdle,true);
    }

    setAnimationRun(){
        let strAnimRun:string = "";
        if(this.isMyPlayer){
            strAnimRun = localConfig.instance.getStrAnimationRun_byID(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.SKIN));
        }else{
            strAnimRun = localConfig.instance.getStrAnimationRun_byID(this.playerRaceDataInfo.raceSkinID);
        }
        this.character.setAnimation(0,strAnimRun,true);
    }

    setAnimationDance(){
        let strAnimRun:string = "";
        if(this.isMyPlayer){
            strAnimRun = localConfig.instance.getStrAnimationDance_byID(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.SKIN));
        }else{
            strAnimRun = localConfig.instance.getStrAnimationDance_byID(this.playerRaceDataInfo.raceSkinID);
        }
        this.character.setAnimation(0,strAnimRun,false);
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
