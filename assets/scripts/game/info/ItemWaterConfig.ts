
import { _decorator, Component, Node, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemWaterConfig
 * DateTime = Tue Aug 06 2024 09:10:26 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemWaterConfig.ts
 * FileBasenameNoExtension = ItemWaterConfig
 * URL = db://assets/scripts/game/info/ItemWaterConfig.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemWaterConfig')
export class ItemWaterConfig {
    TARGET_scaleTOP:Vec2;
    TARGET_moveTOP:Vec2;
    TARGET_scaleBOTTOM:Vec2;
    TARGET_moveBOTTOM:Vec2;

    constructor(_target_scaleTOP:Vec2,_target_moveTOP:Vec2,_target_scaleBOTTOM:Vec2,_target_moveBOTTOM:Vec2){
        this.TARGET_scaleTOP = _target_scaleTOP;
        this.TARGET_moveTOP = _target_moveTOP;
        this.TARGET_scaleBOTTOM = _target_scaleBOTTOM;
        this.TARGET_moveBOTTOM = _target_moveBOTTOM;
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
