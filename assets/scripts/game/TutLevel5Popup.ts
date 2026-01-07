
import { _decorator, Component, Node } from 'cc';
import { BasePopup } from '../common/basePopup';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TutLevel5Popup
 * DateTime = Thu Oct 10 2024 08:25:13 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = TutLevel5Popup.ts
 * FileBasenameNoExtension = TutLevel5Popup
 * URL = db://assets/scripts/game/TutLevel5Popup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('TutLevel5Popup')
export class TutLevel5Popup extends BasePopup {
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

    showPopup(): void {
        super.showPoup_ShowView_Finished();
    }


    hidePopup(): void {
        super.hidePopup_Finished();
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
