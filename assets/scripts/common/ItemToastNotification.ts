
import { _decorator, Component, Node, Label, UIOpacity, Vec3, tween } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemToastNotification
 * DateTime = Thu Feb 10 2022 10:07:15 GMT+0700 (Indochina Time)
 * Author = tuzkekizer
 * FileBasename = ItemToastNotification.ts
 * FileBasenameNoExtension = ItemToastNotification
 * URL = db://assets/scripts/common/ItemToastNotification.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemToastNotification')
export class ItemToastNotification extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Label)
    txtContent:Label;

    @property(UIOpacity)
    opactityNode:UIOpacity;

    showItemToastNotification(_content:string){
        this.txtContent.string = `${_content}`;

        this.node.setPosition(new Vec3(0,280,0));
        this.opactityNode.opacity = 255;

        this.moveToFinished();
    }

    moveToFinished(){
        tween(this.node).delay(0.1).to(0.8,{position:new Vec3(0,550,0)},{easing:'quadIn',onComplete:()=>{
            this.node.destroy();
        }}).start();

        tween(this.opactityNode).delay(0.1).to(1,{opacity:0},{easing:'quadIn',onComplete:()=>{

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
