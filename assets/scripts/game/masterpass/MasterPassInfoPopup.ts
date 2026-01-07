
import { _decorator, Component, Node } from 'cc';
import { BaseInfoPopup } from '../BaseInfoPopup';
import { localConfig } from '../../localConfig';
import { AudioManager2 } from '../../framework/audioManager2';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = MasterPassInfoPopup
 * DateTime = Thu Nov 21 2024 17:31:26 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = MasterPassInfoPopup.ts
 * FileBasenameNoExtension = MasterPassInfoPopup
 * URL = db://assets/scripts/game/masterpass/MasterPassInfoPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('MasterPassInfoPopup')
export class MasterPassInfoPopup extends BaseInfoPopup {
    
    showMasterPassInfoPopup(){
        AudioManager2.instance.playPopupOpen2();
        super.showInfoPopup();
    }

    touchClose(): void {
        localConfig.instance.setMassterPassTutorialFinished();
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
