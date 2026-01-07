
import { _decorator, Component, instantiate, Node, Prefab, Vec3 } from 'cc';
import { Constants } from '../framework/constants';
import { clientEvent } from '../framework/clientEvent';
import { AudioManager2 } from '../framework/audioManager2';
import { localConfig } from '../localConfig';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = EfxClayFinishManager
 * DateTime = Thu Apr 24 2025 17:52:52 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = EfxClayFinishManager.ts
 * FileBasenameNoExtension = EfxClayFinishManager
 * URL = db://assets/scripts/game/EfxClayFinishManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('EfxClayFinishManager')
export class EfxClayFinishManager extends Component {
    @property(Prefab)
    itemEfx: Prefab;

    arrPools: Node[] = [];

    onEnable() {
        clientEvent.on(Constants.SHOW_EFX_CLAY_FINSIHED, this.showEfxClayFinished, this);
    }

    onDisable() {
        clientEvent.off(Constants.SHOW_EFX_CLAY_FINSIHED, this.showEfxClayFinished, this);
    }

    start() {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    showEfxClayFinished(posWorld: Vec3, scale: number) {
        console.log("showEfxClayFinished",posWorld,scale);
        // AudioManager2.instance.playClay();
        let efx = this.getItem();
        efx.active = true;
        efx.setParent(this.node);
        let pos:Vec3 = localConfig.instance.getPos_PosWord_WorldSpace(posWorld, scale);
        efx.setWorldPosition(new Vec3(pos.x, pos.y, 999));
        efx.setScale(new Vec3(scale, scale, scale));
    }

    getItem() {
        for (let i = 0; i < this.arrPools.length; i++) {
            if (!this.arrPools[i].active) {
                return this.arrPools[i];
            }
        }

        let obj = instantiate(this.itemEfx);
        obj.parent = this.node;
        this.arrPools.push(obj);
        return obj;

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
