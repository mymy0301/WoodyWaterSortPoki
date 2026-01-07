
import { _decorator, Component, Label, Node } from 'cc';
import { FBInstantCommon_Callback } from './FBInstantManager';
import Utils from '../core/utils/Utils';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = CountDownNextTimeMS
 * DateTime = Thu Oct 31 2024 11:10:02 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = CountDownNextTimeMS.ts
 * FileBasenameNoExtension = CountDownNextTimeMS
 * URL = db://assets/scripts/common/CountDownNextTimeMS.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('CountDownNextTimeMS')
export class CountDownNextTimeMS extends Component {
    @property(Label)
    txtCountDownTime:Label;

    countTime:number;

    cb:FBInstantCommon_Callback = null;

    initCountDownTime(_time:number,_callback:FBInstantCommon_Callback){
        this.cb = _callback;
        this.countTime = _time;
        this.txtCountDownTime.string = `${Utils.getTimeStrByS_2(this.countTime)}`;
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
            this.txtCountDownTime.string = `${Utils.getTimeStrByS_2(this.countTime)}`;
        }else{
            this.countTime = 0;
            this.txtCountDownTime.string = `${Utils.getTimeStrByS_2(this.countTime)}`;
            this.unschedule(this.showTime);

            this.cb!();
        }
    }

    setStopCountDownTime(){
        this.txtCountDownTime.string = `${Utils.getTimeStrByS_2(this.countTime)}`;
        this.unschedule(this.showTime);
        
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
