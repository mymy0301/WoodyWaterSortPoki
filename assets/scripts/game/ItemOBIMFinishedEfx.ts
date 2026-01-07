
import { _decorator, Component, Node, ParticleSystem } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemOBIMFinishedEfx
 * DateTime = Thu Apr 24 2025 15:59:50 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemOBIMFinishedEfx.ts
 * FileBasenameNoExtension = ItemOBIMFinishedEfx
 * URL = db://assets/scripts/game/ItemOBIMFinishedEfx.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemOBIMFinishedEfx')
export class ItemOBIMFinishedEfx extends Component {
    @property(ParticleSystem)
    arrEfxs: ParticleSystem[] = [];

    start() {
        // [3]
        this.scheduleOnce(() => {
            this.node.active = false;
        }, 5);
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
