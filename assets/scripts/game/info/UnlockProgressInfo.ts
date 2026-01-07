
import { _decorator, Component, Node } from 'cc';
import { THEME_TYPE } from '../../framework/constants';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = UnlockProgressInfo
 * DateTime = Thu Oct 10 2024 16:03:14 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = UnlockProgressInfo.ts
 * FileBasenameNoExtension = UnlockProgressInfo
 * URL = db://assets/scripts/game/info/UnlockProgressInfo.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('UnlockProgressInfo')
export class UnlockProgressInfo {
    level:number = 1;
    type:THEME_TYPE = THEME_TYPE.TUBE;
    itemID:number = 1;
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
