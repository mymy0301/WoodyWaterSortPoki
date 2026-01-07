
import { _decorator, Component, Node, Prefab, Vec3, instantiate } from 'cc';
import { AudioManager2 } from '../framework/audioManager2';
import { clientEvent } from '../framework/clientEvent';
import { Constants } from '../framework/constants';
import { localConfig } from '../localConfig';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = EfxBottleFinishManager
 * DateTime = Tue Mar 15 2022 13:40:20 GMT+0700 (Indochina Time)
 * Author = tuzkekizer
 * FileBasename = EfxBottleFinishManager.ts
 * FileBasenameNoExtension = EfxBottleFinishManager
 * URL = db://assets/scripts/waters/EfxBottleFinishManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('EfxBottleFinishManager')
export class EfxBottleFinishManager extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Prefab)
    itemEfx:Prefab;

    arrPools:Node[] = [];

    onEnable(){
        clientEvent.on(Constants.SHOW_EFX_TUBE_FINSIHED,this.showEfxBottleFinished,this);
    }

    onDisable(){
        clientEvent.off(Constants.SHOW_EFX_TUBE_FINSIHED,this.showEfxBottleFinished,this);
    }

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    showEfxBottleFinished(posWorld:Vec3,scale:number){
        AudioManager2.instance.playSound_BottleDone();
        let efx = this.getItem();
        efx.active = true;
        efx.setParent(this.node);
        let pos:Vec3 = localConfig.instance.getPos_PosWord_WorldSpace(posWorld, scale);
        efx.setWorldPosition(new Vec3(pos.x, pos.y, 999));
        efx.setScale(new Vec3(scale,scale,scale));
    }

    getItem(){
        for(let i=0; i< this.arrPools.length;i++){
            if(!this.arrPools[i].active){
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
