
import { _decorator, Component, Label, Node } from 'cc';
import Utils from '../core/utils/Utils';
import { FBInstantCommon_Callback } from './FBInstantManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = CountDownToNextTime
 * DateTime = Fri Sep 27 2024 14:47:57 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = CountDownToNextTime.ts
 * FileBasenameNoExtension = CountDownToNextTime
 * URL = db://assets/scripts/common/CountDownToNextTime.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('CountDownToNextTime')
export class CountDownToNextTime extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Label)
    txtCountDownTime:Label;

    countTime:number = 0;

    cb:FBInstantCommon_Callback = null;

    initTime(_time:number){
        this.countTime = _time;
        this.txtCountDownTime.string = `${Utils.getTimeStrByS_HaveDay_Event(this.countTime)}`;
    }

    initCountDownTime(_time:number,_callback:FBInstantCommon_Callback){
        this.cb = _callback;
        this.countTime = _time;
        this.txtCountDownTime.string = `${Utils.getTimeStrByS_HaveDay_Event(this.countTime)}`;
        this.schedule(this.showTime,1);
        this.node.active = true;
    }

    onDisable(){
        this.unschedule(this.showTime);
    }

    showTime(){
        this.countTime --;
        //console.log(this.countTime);
        //console.log(Utils.getTimeStrByS_3(this.countTime));
        if(this.countTime > 0){
            this.txtCountDownTime.string = `${Utils.getTimeStrByS_HaveDay_Event(this.countTime)}`;
        }else{
            this.countTime = 0;
            this.txtCountDownTime.string = `${Utils.getTimeStrByS_HaveDay_Event(this.countTime)}`;
            this.unschedule(this.showTime);

            this.cb!();
        }
    }

    setStopCountDownTime(){
        if(this.countTime > 0){
            this.txtCountDownTime.string = `${Utils.getTimeStrByS_HaveDay_Event(this.countTime)}`;
        }else{
            this.countTime = 0;
            this.txtCountDownTime.string = `${Utils.getTimeStrByS_HaveDay_Event(this.countTime)}`;
        }
        this.unschedule(this.showTime);
    }

    resetCountDownTime(){
        this.txtCountDownTime.string = `${Utils.getTimeStrByS_HaveDay_Event(0)}`;
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
