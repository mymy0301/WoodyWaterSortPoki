
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = LoadingPopup
 * DateTime = Tue Mar 08 2022 16:04:49 GMT+0700 (Indochina Time)
 * Author = tuzkekizer
 * FileBasename = LoadingPopup.ts
 * FileBasenameNoExtension = LoadingPopup
 * URL = db://assets/scripts/scene/LoadingPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('LoadingPopup')
export class LoadingPopup extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Node)
    groupNode:Node;

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    showLoading(){
        this.node.active = true;
    }

    hideLoading(){
        this.node.active = false;
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
