
import { _decorator, Component, Node, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemTubePolygonConfig
 * DateTime = Thu Aug 08 2024 11:11:11 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemTubePolygonConfig.ts
 * FileBasenameNoExtension = ItemTubePolygonConfig
 * URL = db://assets/scripts/game/info/ItemTubePolygonConfig.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemTubePolygonConfig')
export class ItemTubePolygonConfig {
    arrPoints:Vec2[] = [];

    constructor(_arrPoints:Vec2[]){
        this.arrPoints = _arrPoints;
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
