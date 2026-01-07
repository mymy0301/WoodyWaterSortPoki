
import { _decorator, Component, Node, tween, Vec3, CCFloat } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemSpriteRotate
 * DateTime = Tue Feb 15 2022 11:23:37 GMT+0700 (Indochina Time)
 * Author = tuzkekizer
 * FileBasename = ItemSpriteRotate.ts
 * FileBasenameNoExtension = ItemSpriteRotate
 * URL = db://assets/scripts/scene/play/ItemSpriteRotate.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemSpriteRotate')
export class ItemSpriteRotate extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(CCFloat)
    timeRotate:number = 1;
    start () {
        // [3]
        tween(this.node).by(this.timeRotate,{eulerAngles:new Vec3(0,0,-90)},{easing:'linear',onComplete:()=>{
        
        }}).repeatForever().start();
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
