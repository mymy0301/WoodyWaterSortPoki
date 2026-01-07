
import { _decorator, Component, Node } from 'cc';
import { AVATAR_TYPE } from '../../framework/constants';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PlayerRaceDataInfo
 * DateTime = Wed Nov 06 2024 11:18:54 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = PlayerRaceDataInfo.ts
 * FileBasenameNoExtension = PlayerRaceDataInfo
 * URL = db://assets/scripts/game/race/PlayerRaceDataInfo.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('PlayerRaceDataInfo')
export class PlayerRaceDataInfo {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    avatarType:AVATAR_TYPE = AVATAR_TYPE.TYPE_LOCAL;
    userName:string = "";
    avatarURL:string = "1";
    playerID:string = "";
    raceSkinID:number = 0;
    arrTimes:number[] = [];
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
