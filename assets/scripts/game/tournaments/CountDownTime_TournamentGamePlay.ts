
import { _decorator, Component, Label, Node } from 'cc';
import { GAME_STATE } from '../../framework/constants';
import { FBInstantCommon_Callback } from '../../common/FBInstantManager';
import { localConfig } from '../../localConfig';
import Utils from '../../core/utils/Utils';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = CountDownTime_TournamentGamePlay
 * DateTime = Mon Nov 04 2024 10:36:18 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = CountDownTime_TournamentGamePlay.ts
 * FileBasenameNoExtension = CountDownTime_TournamentGamePlay
 * URL = db://assets/scripts/game/tournaments/CountDownTime_TournamentGamePlay.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('CountDownTime_TournamentGamePlay')
export class CountDownTime_TournamentGamePlay extends Component {
    @property(Label)
    txtCountDownTime:Label;

    countTime:number;
    isCountDownTime:boolean = false;
    sumTime:number = 0;

    cb:FBInstantCommon_Callback = null;

    update(deltaTime: number) {
        if(localConfig.instance.currGameState == GAME_STATE.PLAY){
            if(this.isCountDownTime){
                this.sumTime += deltaTime;
                if(this.sumTime >= 1){
                    this.sumTime = 0;
                    this.countTime --;
                    this.showTime();
                    if(this.countTime <= 0){
                        this.isCountDownTime = false;
                        this.cb!();
                    }
                }
            }else{
                this.sumTime += deltaTime;
            }
        }
    }

    setInitCountTime(_initTime:number,cb:FBInstantCommon_Callback){
        this.cb = cb;
        this.countTime = _initTime;
        this.isCountDownTime = false;
        this.sumTime = 0;
        this.showTime();
    }

    setStartCountTime(){
        this.isCountDownTime = true;
        this.sumTime = 0;
        this.showTime();
    }

    setEndCountTime(){
        this.isCountDownTime = false;
    }

    showTime(){
        this.txtCountDownTime.string = `${Utils.getTimeStrByS_4(this.countTime)}`;
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
