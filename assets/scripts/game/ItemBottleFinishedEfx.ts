
import { _decorator, Component, Node, ParticleSystem } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemBottleFinishedEfx
 * DateTime = Tue Mar 15 2022 13:36:11 GMT+0700 (Indochina Time)
 * Author = tuzkekizer
 * FileBasename = ItemBottleFinishedEfx.ts
 * FileBasenameNoExtension = ItemBottleFinishedEfx
 * URL = db://assets/scripts/waters/ItemBottleFinishedEfx.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemBottleFinishedEfx')
export class ItemBottleFinishedEfx extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(ParticleSystem)
    arrEfxs:ParticleSystem[] = [];

    start () {
        // [3]
        this.scheduleOnce(()=>{
            this.node.active = false;
        },5);
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
