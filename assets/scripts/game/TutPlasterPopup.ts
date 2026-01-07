
import { _decorator, Component, Node } from 'cc';
import { BasePopup } from '../common/basePopup';
import { localConfig } from '../localConfig';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TutPlasterPopup
 * DateTime = Sun May 11 2025 22:53:32 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = TutPlasterPopup.ts
 * FileBasenameNoExtension = TutPlasterPopup
 * URL = db://assets/scripts/game/TutPlasterPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('TutPlasterPopup')
export class TutPlasterPopup extends BasePopup {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    showTutPlasterPopup() {
        this.showPopup();
    }

    touchClose(): void {
        super.touchClose();
        localConfig.instance.setTutPlasterFinished();
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
