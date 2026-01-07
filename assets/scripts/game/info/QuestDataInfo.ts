
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = QuestDataInfo
 * DateTime = Mon Oct 14 2024 21:21:48 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = QuestDataInfo.ts
 * FileBasenameNoExtension = QuestDataInfo
 * URL = db://assets/scripts/game/info/QuestDataInfo.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('QuestDataInfo')
export class QuestDataInfo {
    id:number = 0;
    des:string = "";
    count:number = 0;
    value:number = 0;
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
