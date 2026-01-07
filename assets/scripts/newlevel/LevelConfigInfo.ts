
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = LevelConfigInfo
 * DateTime = Mon Apr 14 2025 15:31:56 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = LevelConfigInfo.ts
 * FileBasenameNoExtension = LevelConfigInfo
 * URL = db://assets/scripts/newlevel/LevelConfigInfo.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('LevelConfigInfo')
export class LevelConfigInfo{
    levelOrder:string = "";
    levelIndex:number = 1;
    seeds:string[] = [];
    isHard:boolean = false;
    isSuperHard:boolean = false;
    isTutorial:boolean = false;
}

@ccclass('LevelConfigInfoModels')
export class LevelConfigInfoModels{
    levelConfigModels:LevelConfigInfo[] = [];
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
