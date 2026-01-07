
import { _decorator, Component, Node, Sprite, Vec3 } from 'cc';
import { localConfig } from '../localConfig';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = BackGroundMenuManager
 * DateTime = Mon Dec 09 2024 09:58:31 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = BackGroundMenuManager.ts
 * FileBasenameNoExtension = BackGroundMenuManager
 * URL = db://assets/scripts/game/BackGroundMenuManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('BackGroundMenuManager')
export class BackGroundMenuManager extends Component {
    @property(Sprite)
    bg: Sprite = null;
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
        this.bg.node.setScale(new Vec3(localConfig.instance.scaleBG,localConfig.instance.scaleBG,localConfig.instance.scaleBG));
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
