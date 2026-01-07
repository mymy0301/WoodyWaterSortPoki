
import { _decorator, Component, Node, Label, utils } from 'cc';
import Utils from '../core/utils/Utils';
import { clientEvent } from '../framework/clientEvent';
import { Constants } from '../framework/constants';
import { localConfig } from '../localConfig';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = CountDownTimeNextDay
 * DateTime = Mon Feb 21 2022 10:58:04 GMT+0700 (Indochina Time)
 * Author = tuzkekizer
 * FileBasename = CountDownTimeNextDay.ts
 * FileBasenameNoExtension = CountDownTimeNextDay
 * URL = db://assets/scripts/scene/play/CountDownTimeNextDay.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('CountDownTimeNextDay')
export class CountDownTimeNextDay extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Label)
    txtCountDownTime:Label;

    countTime:number;
    start () {
        // [3]
    }


    onEnable(){
        this.countTime = localConfig.instance.getTimeToNextDay();
        this.txtCountDownTime.string = `${Utils.getTimeStrByS_3(this.countTime)}`;
        this.schedule(this.showTime,1);
    }

    onDisable(){
        this.unschedule(this.showTime);
    }

    showTime(){
        this.countTime --;
        //console.log(this.countTime);
        //console.log(Utils.getTimeStrByS_3(this.countTime));
        if(this.countTime > 0){
            this.txtCountDownTime.string = `${Utils.getTimeStrByS_3(this.countTime)}`;
        }else{
            this.countTime = 0;
            this.txtCountDownTime.string = `${Utils.getTimeStrByS_3(this.countTime)}`;
            this.unschedule(this.showTime);

            clientEvent.dispatchEvent(Constants.COUNTDOWNTIME_NEXTDAY_FINISHED);
        }
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
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
