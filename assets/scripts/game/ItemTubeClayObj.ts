
import { _decorator, Component, Node, Sprite, tween, Tween, UIOpacity } from 'cc';
import { Constants } from '../framework/constants';
import { clientEvent } from '../framework/clientEvent';
import { MagicOBIMInfo } from '../newlevel/MagicLevelDataInfo';
import { localConfig } from '../localConfig';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemTubeClayObj
 * DateTime = Thu Apr 24 2025 17:36:10 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemTubeClayObj.ts
 * FileBasenameNoExtension = ItemTubeClayObj
 * URL = db://assets/scripts/game/ItemTubeClayObj.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemTubeClayObj')
export class ItemTubeClayObj extends Component {
    @property(Node)
    bg:Node = null;

    @property(UIOpacity)
    bg_Opacity:UIOpacity = null;

    start () {
        // [3]
    }
    tweenBgOpacity:Tween<{}> = null;
    setShowClayFinished(){
        if(this.tweenBgOpacity != null) this.tweenBgOpacity.stop();
        this.tweenBgOpacity = tween(this.bg_Opacity).to(0.3,{opacity:0},{easing:'linear',onComplete:()=>{
            this.node.active = false;
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
