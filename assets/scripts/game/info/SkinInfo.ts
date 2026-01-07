
import { _decorator, Component, Node } from 'cc';
import { UNLOCK_TYPE } from '../../framework/constants';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = SkinInfo
 * DateTime = Fri Oct 11 2024 10:21:20 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = SkinInfo.ts
 * FileBasenameNoExtension = SkinInfo
 * URL = db://assets/scripts/game/info/SkinInfo.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('SkinInfo')
export class SkinInfo {
    id:number = 0;
    unlockType:UNLOCK_TYPE = UNLOCK_TYPE.NONE;
    price:number = 0;
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
