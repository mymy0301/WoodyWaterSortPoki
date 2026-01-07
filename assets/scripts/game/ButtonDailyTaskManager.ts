
import { _decorator, Button, Component, Node } from 'cc';
import { Constants, DAILYTASK_TYPE } from '../framework/constants';
import { clientEvent } from '../framework/clientEvent';
import { localConfig } from '../localConfig';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ButtonDailyTaskManager
 * DateTime = Sun Oct 13 2024 21:40:08 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ButtonDailyTaskManager.ts
 * FileBasenameNoExtension = ButtonDailyTaskManager
 * URL = db://assets/scripts/game/ButtonDailyTaskManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ButtonDailyTaskManager')
export class ButtonDailyTaskManager extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Button)
    btnDailyTask: Button = null;

    @property(Node)
    nodeNotify:Node = null;

    protected onEnable(): void {
        this.btnDailyTask.node.on(Constants.CLICK,this.touchDailyTask,this);
        clientEvent.on(Constants.DAILYTASK_NOTIFY_UPDATE,this.showNotify,this);
        this.showNotify();
    }

    protected onDisable(): void {
        this.btnDailyTask.node.off(Constants.CLICK,this.touchDailyTask,this);
        clientEvent.off(Constants.DAILYTASK_NOTIFY_UPDATE,this.showNotify,this);
    }


    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    touchDailyTask(){
        LogEventManager.instance.logButtonClick("dailytask","home");
        if(localConfig.instance.getCurrDay() > localConfig.instance.currDailyLoginLastDay){
            clientEvent.dispatchEvent(Constants.SHOW_DAILYTASK_POPUP,DAILYTASK_TYPE.LOGIN);
        }else{
            clientEvent.dispatchEvent(Constants.SHOW_DAILYTASK_POPUP,DAILYTASK_TYPE.QUEST);
        }
    }

    showNotify(): void {
        let isshowNotify = false;
        if(localConfig.instance.getCurrDay() > localConfig.instance.currDailyLoginLastDay){
            isshowNotify = true;
        }

        for(let i=0; i< localConfig.instance.arrDailyQuestDataInfos.length;i++){
            let questDataInfo = localConfig.instance.arrDailyQuestDataInfos[i];
            if(!localConfig.instance.checkDailyQuestReceive_byID(questDataInfo.id)){
                let progressValue:number = localConfig.instance.getDailyQuestProgress_byID(questDataInfo.id);
                if(progressValue >= questDataInfo.count){
                    isshowNotify = true;
                }
            }
        }

        this.nodeNotify.active = isshowNotify;

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
