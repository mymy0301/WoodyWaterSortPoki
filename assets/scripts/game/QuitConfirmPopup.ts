
import { _decorator, Button, Component, Node } from 'cc';
import { BasePopup } from '../common/basePopup';
import { Constants, GAME_STATE } from '../framework/constants';
import { localConfig } from '../localConfig';
import { clientEvent } from '../framework/clientEvent';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = QuitConfirmPopup
 * DateTime = Thu May 08 2025 16:45:44 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = QuitConfirmPopup.ts
 * FileBasenameNoExtension = QuitConfirmPopup
 * URL = db://assets/scripts/game/QuitConfirmPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('QuitConfirmPopup')
export class QuitConfirmPopup extends BasePopup {
    @property(Button)
    btnQuit: Button = null;

    @property(Button)
    btnContinue: Button = null;


    onEnable(): void {
        super.onEnable();
        this.btnQuit.node.on(Constants.CLICK, this.touchQuit, this);
        this.btnContinue.node.on(Constants.CLICK, this.touchContinue, this);
    }

    onDisable(): void {
        super.onDisable();
        this.btnQuit.node.off(Constants.CLICK, this.touchQuit, this);
        this.btnContinue.node.off(Constants.CLICK, this.touchContinue, this);
    }

    showQuitConfirmPopup(): void {
        super.showPopup();
        localConfig.instance.currGameState = GAME_STATE.PAUSE;
    }

    touchQuit(): void {
        LogEventManager.instance.logButtonClick("quit","quitconfirm");
        super.hidePopup();
        clientEvent.dispatchEvent(Constants.QUITCONFIRM_TOUCH_YES);
    }

    touchContinue(): void {
        LogEventManager.instance.logButtonClick("continue","quitconfirm");
        super.hidePopup();
        clientEvent.dispatchEvent(Constants.QUITCONFIRM_TOUCH_CONTINUE);
    }

    touchClose(): void {
        LogEventManager.instance.logButtonClick("close","quitconfirm");
        super.touchClose();
        clientEvent.dispatchEvent(Constants.QUITCONFIRM_TOUCH_CONTINUE);
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
