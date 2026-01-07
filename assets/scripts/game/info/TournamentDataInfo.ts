
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TournamentDataInfo
 * DateTime = Tue Oct 29 2024 10:44:40 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = TournamentDataInfo.ts
 * FileBasenameNoExtension = TournamentDataInfo
 * URL = db://assets/scripts/game/info/TournamentDataInfo.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('TournamentDataInfo')
export class TournamentDataInfo {
    tournamentId:string = "";
    contextId:string = "";
    expireTime:number = 0;
    name:string = "";
    
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
