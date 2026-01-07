
import { _decorator, Component, Node } from 'cc';
import { localConfig } from '../localConfig';
import { configuration } from '../framework/configuration';
import { clientEvent } from '../framework/clientEvent';
import { Constants } from '../framework/constants';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = HeartManager
 * DateTime = Wed May 07 2025 11:42:25 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = HeartManager.ts
 * FileBasenameNoExtension = HeartManager
 * URL = db://assets/scripts/common/HeartManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('HeartManager')
export class HeartManager extends Component {
    
    isCountDownHeart: boolean = false;

    protected onEnable(): void {
        clientEvent.on(Constants.HEART_COUNT_UPDATE,this.setChangeHeart,this);
        clientEvent.on(Constants.HEART_UNLIMITED_UPDATE,this.setAddHeartUnlimited,this);
        this.initHeart();
        this.initHeartUnlimited();
    }

    protected onDisable(): void {
        clientEvent.off(Constants.HEART_COUNT_UPDATE,this.setChangeHeart,this);
        clientEvent.off(Constants.HEART_UNLIMITED_UPDATE,this.setAddHeartUnlimited,this);
    }

    initHeart() {
        if(localConfig.instance.currHeart >= localConfig.instance.HEART_MAX_COUNT) {
            
        }else{
            let countHeartAdd:number = Math.floor((localConfig.instance.getCurrTime() - localConfig.instance.currHeart_LastTime) / localConfig.instance.HEART_TIME_RESET);
            if(countHeartAdd > 0){
                localConfig.instance.currHeart += countHeartAdd;
                if(localConfig.instance.currHeart >= localConfig.instance.HEART_MAX_COUNT){
                    localConfig.instance.currHeart = localConfig.instance.HEART_MAX_COUNT;
                    localConfig.instance.currHeart_LastTime = localConfig.instance.getCurrTime();
                }else{
                    localConfig.instance.currHeart_LastTime += countHeartAdd * localConfig.instance.HEART_TIME_RESET;
                    localConfig.instance.currHeart_CountTime = localConfig.instance.getCurrTime() - localConfig.instance.currHeart_LastTime;
                    this.schedule(this.scheduleHeart, 1);
                }
                configuration.instance.setData_HeartLastTime(localConfig.instance.currHeart_LastTime);
                configuration.instance.setData_HeartCount(localConfig.instance.currHeart);


                clientEvent.dispatchEvent(Constants.HEART_UPDATE);
            }else{
                localConfig.instance.currHeart_CountTime = localConfig.instance.getCurrTime() - localConfig.instance.currHeart_LastTime;
                this.schedule(this.scheduleHeart, 1);
            }
        }
    }

    scheduleHeart(){
        if(localConfig.instance.currHeart_CountTime > 0){
            localConfig.instance.currHeart_CountTime -= 1;
            if(localConfig.instance.currHeart_CountTime == 0){
                localConfig.instance.currHeart_LastTime = localConfig.instance.getCurrTime();
                localConfig.instance.currHeart ++;


                this.unschedule(this.scheduleHeart);

                configuration.instance.setData_HeartLastTime(localConfig.instance.currHeart_LastTime);
                configuration.instance.setData_HeartCount(localConfig.instance.currHeart);
                if(localConfig.instance.currHeart >= localConfig.instance.HEART_MAX_COUNT){

                }else{
                    localConfig.instance.currHeart_CountTime = localConfig.instance.HEART_TIME_RESET;
                    this.schedule(this.scheduleHeart, 1);
                }

                clientEvent.dispatchEvent(Constants.HEART_UPDATE);
            }
        }
    }

    setChangeHeart(changeHeart: number) {
        if(changeHeart > 0){
            localConfig.instance.currHeart += changeHeart;
            configuration.instance.setData_HeartCount(localConfig.instance.currHeart);
            if(localConfig.instance.currHeart >= localConfig.instance.HEART_MAX_COUNT){
                localConfig.instance.currHeart = localConfig.instance.HEART_MAX_COUNT;
                localConfig.instance.currHeart_LastTime = localConfig.instance.getCurrTime();
                configuration.instance.setData_HeartLastTime(localConfig.instance.currHeart_LastTime);
            }
        }else{
            if(localConfig.instance.currHeartUnlimited_CountTime > 0){

            }else{
                if(localConfig.instance.currHeart == localConfig.instance.HEART_MAX_COUNT){
                    localConfig.instance.currHeart += changeHeart;
                    configuration.instance.setData_HeartCount(localConfig.instance.currHeart);
                    
                    localConfig.instance.currHeart_LastTime = localConfig.instance.getCurrTime();
                    localConfig.instance.currHeart_CountTime = localConfig.instance.HEART_TIME_RESET;
                    configuration.instance.setData_HeartLastTime(localConfig.instance.currHeart_LastTime);
                    this.schedule(this.scheduleHeart, 1);
                }else{
                    localConfig.instance.currHeart += changeHeart;
                    configuration.instance.setData_HeartCount(localConfig.instance.currHeart);
                }
                
            }
        }

        clientEvent.dispatchEvent(Constants.HEART_UPDATE);
        
    }

    initHeartUnlimited() {
        if(localConfig.instance.currHeartUnlimited_CountTime > 0) {
            this.schedule(this.scheduleHeartUnlimited, 1);
        }
    }

    scheduleHeartUnlimited() {
        if(localConfig.instance.currHeartUnlimited_CountTime > 0){
            localConfig.instance.currHeartUnlimited_CountTime -= 1;
            if(localConfig.instance.currHeartUnlimited_CountTime == 0){
                this.unschedule(this.scheduleHeartUnlimited);

                configuration.instance.setData_HeartUnlimited(localConfig.instance.currHeartUnlimited_CountTime);
                configuration.instance.setData_HeartUnlimited_LastTime(localConfig.instance.getCurrTime());
                
                clientEvent.dispatchEvent(Constants.HEART_UPDATE);
            }
        }
    }

    setAddHeartUnlimited(countAddTime: number) {
        localConfig.instance.currHeartUnlimited_CountTime+= countAddTime;
        configuration.instance.setData_HeartUnlimited(localConfig.instance.currHeartUnlimited_CountTime);
        configuration.instance.setData_HeartUnlimited_LastTime(localConfig.instance.getCurrTime());
        this.initHeartUnlimited();

        clientEvent.dispatchEvent(Constants.HEART_UPDATE);
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
