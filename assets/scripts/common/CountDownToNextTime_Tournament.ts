
import { _decorator, Component, Label, Node } from 'cc';
import { FBInstantCommon_Callback } from './FBInstantManager';
import Utils from '../core/utils/Utils';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = CountDownToNextTime_Tournament
 * DateTime = Tue Oct 29 2024 12:05:13 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = CountDownToNextTime_Tournament.ts
 * FileBasenameNoExtension = CountDownToNextTime_Tournament
 * URL = db://assets/scripts/common/CountDownToNextTime_Tournament.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('CountDownToNextTime_Tournament')
export class CountDownToNextTime_Tournament extends Component {
    @property(Label)
    txtCountDownTime:Label;

    countTime:number;

    cb:FBInstantCommon_Callback = null;

    initCountDownTime(_time:number,_callback:FBInstantCommon_Callback){
        this.cb = _callback;
        this.countTime = _time;
        this.txtCountDownTime.string = `Ends in ${Utils.getTimeStrByS_HaveDay_Tournament(this.countTime)}`;
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
            this.txtCountDownTime.string = `Ends in ${Utils.getTimeStrByS_HaveDay_Tournament(this.countTime)}`;
        }else{
            this.countTime = 0;
            this.txtCountDownTime.string = `${Utils.getTimeStrByS_HaveDay_Tournament(this.countTime)}`;
            this.unschedule(this.showTime);

            this.cb!();
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
