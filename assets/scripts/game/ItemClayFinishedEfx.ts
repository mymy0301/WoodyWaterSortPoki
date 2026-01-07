
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemClayFinishedEfx
 * DateTime = Thu Apr 24 2025 17:53:12 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemClayFinishedEfx.ts
 * FileBasenameNoExtension = ItemClayFinishedEfx
 * URL = db://assets/scripts/game/ItemClayFinishedEfx.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemClayFinishedEfx')
export class ItemClayFinishedEfx extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        this.scheduleOnce(() => {
            this.node.active = false;
        }, 5);
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
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
