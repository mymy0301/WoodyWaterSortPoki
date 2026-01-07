
import { _decorator, Component, Node, Tween, tween, Vec3, Quat, random } from 'cc';
import { lodash } from '../framework/lodash';
import { ItemSpriteShake } from './ItemSpriteShake';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = IconNotification
 * DateTime = Mon Feb 14 2022 15:33:26 GMT+0700 (Indochina Time)
 * Author = tuzkekizer
 * FileBasename = IconNotification.ts
 * FileBasenameNoExtension = IconNotification
 * URL = db://assets/scripts/common/IconNotification.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('IconNotification')
export class IconNotification extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Node)
    icon:Node = null;
    
    tweenNotify:Tween<{}> = null;
    @property(Vec3)
    posTarget:Vec3 = new Vec3(0,0,0);

    @property(Vec3)
    posTarget_2:Vec3 = new Vec3(0,0,0);

    onLoad(){
        this.tweenNotify = tween(this.icon)
        .to(0.3,{position:new Vec3(this.posTarget.x,this.posTarget.y,0)},{easing:'quadInOut'})
        .to(0.3,{position:new Vec3(this.posTarget_2.x,this.posTarget_2.y,0)},{easing:'quadInOut'})
        
        // .to(0.1,{scale: new Vec3(1,1,1)})
        .union().repeatForever();
    }
    start () {
    }

    onEnable(){
        this.tweenNotify.start();
    }

    onDisable(){
        if(this.tweenNotify != null){
            this.tweenNotify.stop();
        }
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
