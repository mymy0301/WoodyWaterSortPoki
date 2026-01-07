
import { _decorator, Component, Label, Node, Vec3 } from 'cc';
import { BasePopup } from '../common/basePopup';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TutLevelPopup
 * DateTime = Thu Oct 10 2024 06:32:15 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = TutLevelPopup.ts
 * FileBasenameNoExtension = TutLevelPopup
 * URL = db://assets/scripts/game/TutLevelPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('TutLevelPopup')
export class TutLevelPopup extends BasePopup {
    @property(Node)
    objHand:Node = null;

    @property(Label)
    txtInfo:Label = null;
    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    showPopup(){
        this.showPoup_ShowView_Finished();
    }

    hidePopup(): void {
        this.hidePopup_Finished();
    }

    showTutLevel1_step1(posHand:Vec3){
        this.txtInfo.node.active = true;
        this.objHand.active = true;

        this.txtInfo.string = `Click left tube to pick up`;
        this.objHand.position = posHand;
    }

    showTutLevel1_step2(posHand:Vec3){
        this.txtInfo.node.active = true;
        this.objHand.active = true; 

        this.txtInfo.string = `Click right tube to pour`;
        this.objHand.position = posHand;
    }

    showTutLevel2(){
        this.txtInfo.node.active = true;
        this.objHand.active = false; 

        this.txtInfo.string = `Only pour water into the same color`;
    }

    hideTut(){
        this.txtInfo.node.active = false;
        this.objHand.active = false; 
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
