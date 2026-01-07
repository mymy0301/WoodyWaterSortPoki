
import { _decorator, Button, Component, Label, Node } from 'cc';
import { BasePopup } from '../../common/basePopup';
import { Constants } from '../../framework/constants';
import { clientEvent } from '../../framework/clientEvent';
import { AudioManager2 } from '../../framework/audioManager2';
import { LogEventManager } from '../../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TubeRaceLosePopup
 * DateTime = Tue Nov 12 2024 09:31:03 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = TubeRaceLosePopup.ts
 * FileBasenameNoExtension = TubeRaceLosePopup
 * URL = db://assets/scripts/game/race/TubeRaceLosePopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('TubeRaceLosePopup')
export class TubeRaceLosePopup extends BasePopup {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Button)
    btnContinue: Button = null;

    @property(Label)
    txtInfo:Label = null;

    indexRank:number = 5;

    onEnable(): void {
        // [1]
        super.onEnable();
        this.btnContinue.node.on(Constants.CLICK, this.touchContinue, this);
    }

    onDisable(): void {
        // [1]
        super.onDisable();
        this.btnContinue.node.off(Constants.CLICK, this.touchContinue, this);
    }

    showTubeRaceLosePopup(_indexRank:number): void {
        AudioManager2.instance.playPopupOpen2();
        this.indexRank = _indexRank;
        this.txtInfo.string = `${_indexRank}`;
        super.showPopup();
    }

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    touchContinue() {
        LogEventManager.instance.logButtonClick("continue","tuberacelosepopup");
        this.hidePopup();
        AudioManager2.instance.playPopupOpen2();
        clientEvent.dispatchEvent(Constants.SHOW_TUBERACE_JOIN_POPUP);
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
