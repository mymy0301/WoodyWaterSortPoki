
import { _decorator, Component, Node } from 'cc';
import { BasePopup } from '../common/basePopup';
import { Constants, DAILYTASK_TYPE } from '../framework/constants';
import { clientEvent } from '../framework/clientEvent';
import { QuestDataInfo } from './info/QuestDataInfo';
import { AudioManager2 } from '../framework/audioManager2';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = DailyTaskPopup
 * DateTime = Sun Oct 13 2024 21:22:25 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = DailyTaskPopup.ts
 * FileBasenameNoExtension = DailyTaskPopup
 * URL = db://assets/scripts/game/DailyTaskPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('DailyTaskPopup')
export class DailyTaskPopup extends BasePopup {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Node)
    loginGroup:Node = null;

    @property(Node)
    questGroup:Node = null;;

    dailyTaskType:DAILYTASK_TYPE = null;

    onEnable(): void {
        super.onEnable();
        clientEvent.on(Constants.TOUCH_TABDAILYTASK,this.touchTabDailyTask,this);
        clientEvent.on(Constants.DAILY_QUEST_TOUCH_GOTO,this.setDailyQuestTouchGoto,this);
    }

    onDisable(): void {
        super.onDisable();
        clientEvent.off(Constants.TOUCH_TABDAILYTASK,this.touchTabDailyTask,this);
        clientEvent.off(Constants.DAILY_QUEST_TOUCH_GOTO,this.setDailyQuestTouchGoto,this);
    }

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    showDailyTaskPopup(dailyTaskType:DAILYTASK_TYPE){ 
        // console.log("showDailyTaskPopup:"+dailyTaskType);
        this.dailyTaskType = dailyTaskType;
        super.showPopup();
        this.showTab();
        clientEvent.dispatchEvent(Constants.TABDAILYTASK_UPDATE,this.dailyTaskType);
    }

    touchTabDailyTask(tabType:DAILYTASK_TYPE){
        if(tabType == DAILYTASK_TYPE.LOGIN){
            LogEventManager.instance.logButtonClick("tablogin","dailytaskpopup");
        }else if(tabType == DAILYTASK_TYPE.QUEST){
            LogEventManager.instance.logButtonClick("tabquest","dailytaskpopup");
        }
        
        if(this.dailyTaskType != tabType){
            this.dailyTaskType = tabType;
            this.showTab();

            clientEvent.dispatchEvent(Constants.TABDAILYTASK_UPDATE,this.dailyTaskType);
        }
    }

    showTab(){
        // console.log("showTab:"+this.dailyTaskType);
        if(this.dailyTaskType == DAILYTASK_TYPE.LOGIN){
            this.loginGroup.active = true;
            this.questGroup.active = false;
        }else if(this.dailyTaskType == DAILYTASK_TYPE.QUEST){
            this.loginGroup.active = false;
            this.questGroup.active = true;
        }
    }


    setDailyQuestTouchGoto(questDataInfo:QuestDataInfo){
        if(questDataInfo.id == 1){
            this.dailyTaskType = DAILYTASK_TYPE.LOGIN;
            this.showTab();
            clientEvent.dispatchEvent(Constants.TABDAILYTASK_UPDATE,this.dailyTaskType);
        }else if(questDataInfo.id == 2 || questDataInfo.id == 3 || questDataInfo.id == 4 || questDataInfo.id == 5 || questDataInfo.id == 8 || questDataInfo.id == 9 || questDataInfo.id == 10){
            this.hidePopup();
            clientEvent.dispatchEvent(Constants.TOUCH_LEVEL);
        }else if(questDataInfo.id == 6){
            this.hidePopup();
            clientEvent.dispatchEvent(Constants.GOTO_TOURNAMENT);
        }else if(questDataInfo.id == 7){
            this.hidePopup();
            AudioManager2.instance.playPopupOpen2();
            clientEvent.dispatchEvent(Constants.SHOW_DAILY_CHALLENGE_POPUP);
        }
    }

    touchClose(): void {
        LogEventManager.instance.logButtonClick("close","dailytaskpopup");
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
