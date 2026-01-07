
import { _decorator, Component, Node, tween, Vec3, CCFloat } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemSpriteScale
 * DateTime = Tue Feb 15 2022 11:43:50 GMT+0700 (Indochina Time)
 * Author = tuzkekizer
 * FileBasename = ItemSpriteScale.ts
 * FileBasenameNoExtension = ItemSpriteScale
 * URL = db://assets/scripts/scene/play/ItemSpriteScale.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemSpriteScale')
export class ItemSpriteScale extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(CCFloat)
    timeScale:number = 1;

    @property(CCFloat)
    scaleTarget:number = 1.2;
    start () {
        // [3]
        tween(this.node).to(this.timeScale,{scale:new Vec3(this.scaleTarget,this.scaleTarget,this.scaleTarget)},{easing:'linear'})
        .to(this.timeScale,{scale:new Vec3(1,1,1)},{easing:'linear'}).union()
        .repeatForever().start();
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
