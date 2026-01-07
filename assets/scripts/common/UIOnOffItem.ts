
import { _decorator, CCInteger, Component, Node, Sprite, SpriteFrame, tween, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = UIOnOffItem
 * DateTime = Wed Feb 09 2022 15:57:32 GMT+0700 (Indochina Time)
 * Author = tuzkekizer
 * FileBasename = UIOnOffItem.ts
 * FileBasenameNoExtension = UIOnOffItem
 * URL = db://assets/scripts/common/UIOnOffItem.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('UIOnOffItem')
export class UIOnOffItem extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Node)
    iconSwtich:Node;

    @property(Sprite)
    bg:Sprite;

    @property(SpriteFrame)
    bg_ON:SpriteFrame;

    @property(SpriteFrame)
    bg_OFF:SpriteFrame;

    @property(CCInteger)
    posX:number = 0;

    setItemON(){
        this.bg.spriteFrame = this.bg_ON;
        this.iconSwtich.setPosition(new Vec3(this.posX,-9,0));
    }

    switchItemON(){
        this.bg.spriteFrame = this.bg_ON;
        this.iconSwtich.setPosition(new Vec3(-this.posX,-9,0));
        tween(this.iconSwtich).to(0.2,{position:new Vec3(this.posX,-9,0)},{easing:'quadOut',onComplete:()=>{

        }}).start();
    }

    setItemOFF(){
        this.bg.spriteFrame = this.bg_OFF;
        this.iconSwtich.setPosition(new Vec3(-this.posX,-9,0));
    }

    switchItemOFF(){
        this.bg.spriteFrame = this.bg_OFF;
        this.iconSwtich.setPosition(new Vec3(this.posX,-9,0));
        tween(this.iconSwtich).to(0.2,{position:new Vec3(-this.posX,-9,0)},{easing:'quadOut',onComplete:()=>{

        }}).start();
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
