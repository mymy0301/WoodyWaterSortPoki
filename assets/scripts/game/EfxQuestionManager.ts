
import { _decorator, Component, instantiate, Mat4, Node, Prefab, UITransform, Vec3, view } from 'cc';
import { clientEvent } from '../framework/clientEvent';
import { Constants } from '../framework/constants';
import { localConfig } from '../localConfig';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = EfxQuestionManager
 * DateTime = Mon May 19 2025 15:15:34 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = EfxQuestionManager.ts
 * FileBasenameNoExtension = EfxQuestionManager
 * URL = db://assets/scripts/game/EfxQuestionManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('EfxQuestionManager')
export class EfxQuestionManager extends Component {

    @property(Prefab)
    itemEfx: Prefab;

    arrPools: Node[] = [];

    onEnable() {
        clientEvent.on(Constants.SHOW_EFX_QUESTION, this.showEfxQuestion, this);
    }

    onDisable() {
        clientEvent.off(Constants.SHOW_EFX_QUESTION, this.showEfxQuestion, this);
    }

    start() {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    showEfxQuestion(posWorld: Vec3, scale: number) {
        let efx = this.getItem();
        efx.active = true;
        efx.setParent(this.node);
        let pos:Vec3 = localConfig.instance.getPos_PosWord_WorldSpace(posWorld, scale);
        efx.setWorldPosition(new Vec3(pos.x , pos.y, 999));
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
