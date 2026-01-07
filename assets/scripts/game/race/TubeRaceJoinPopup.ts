
import { _decorator, Button, Component, Node } from 'cc';
import { BasePopup } from '../../common/basePopup';
import { Constants } from '../../framework/constants';
import { clientEvent } from '../../framework/clientEvent';
import { localConfig } from '../../localConfig';
import { LogEventManager } from '../../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TubeRaceJoinPopup
 * DateTime = Wed Nov 06 2024 09:26:42 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = TubeRaceJoinPopup.ts
 * FileBasenameNoExtension = TubeRaceJoinPopup
 * URL = db://assets/scripts/game/race/TubeRaceJoinPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('TubeRaceJoinPopup')
export class TubeRaceJoinPopup extends BasePopup {
    @property(Button)
    btnJoin:Button = null;

    onEnable(): void {
        super.onEnable();
        this.btnJoin.node.on(Constants.CLICK, this.touchJoin, this);
    }

    onDisable(): void {
        super.onDisable();
        this.btnJoin.node.off(Constants.CLICK, this.touchJoin, this);
    }
    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    showTubeRaceJoinPopup(){
        this.showPopup();
    }

    touchJoin(){
        LogEventManager.instance.logButtonClick("join","tuberacejoinpopup");
        this.hidePopup();
        localConfig.instance.setStartRace();
        clientEvent.dispatchEvent(Constants.SHOW_TUBERACE_POPUP,true);
    }

    touchClose(): void {
        LogEventManager.instance.logButtonClick("close","tuberacejoinpopup");
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
