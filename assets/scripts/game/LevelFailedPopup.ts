
import { _decorator, Button, Component, Label, Node } from 'cc';
import { BasePopup } from '../common/basePopup';
import { Constants, GAME_MODE } from '../framework/constants';
import Utils from '../core/utils/Utils';
import { clientEvent } from '../framework/clientEvent';
import { localConfig } from '../localConfig';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = LevelFailedPopup
 * DateTime = Thu May 08 2025 17:33:08 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = LevelFailedPopup.ts
 * FileBasenameNoExtension = LevelFailedPopup
 * URL = db://assets/scripts/game/LevelFailedPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('LevelFailedPopup')
export class LevelFailedPopup extends BasePopup {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Label)
    txtLevel:Label = null;

    @property(Label)
    txtValue:Label;

    @property(Button)
    btnTryAgain:Button;

    onEnable(): void {
        super.onEnable();
        this.btnTryAgain.node.on(Constants.CLICK, this.touchTryAgain, this);
    }

    onDisable(): void {
        super.onDisable();
        this.btnTryAgain.node.off(Constants.CLICK, this.touchTryAgain, this);
    }

    showLevelFailedPopup(value: number): void {
        this.txtValue.string = `x${Utils.formatNumber(value)}`;
        if(localConfig.instance.currGameMode == GAME_MODE.NORMAL){
            this.txtLevel.string = `Level ${Utils.formatNumber(localConfig.instance.currLevel)}`;
        }
        super.showPopup();
    }

    touchTryAgain() {
        LogEventManager.instance.logButtonClick("retry","levelfailedpopup");
        this.hidePopup();
        clientEvent.dispatchEvent(Constants.LEVELFAILED_TOUCH_RETRY);
    }

    touchClose(): void {
        LogEventManager.instance.logButtonClick("close","levelfailedpopup");
        super.touchClose();
        clientEvent.dispatchEvent(Constants.BACK_TO_HOME);
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
