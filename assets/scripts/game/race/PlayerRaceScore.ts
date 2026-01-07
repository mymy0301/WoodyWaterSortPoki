
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PlayerRaceScore
 * DateTime = Mon Nov 11 2024 09:56:25 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = PlayerRaceScore.ts
 * FileBasenameNoExtension = PlayerRaceScore
 * URL = db://assets/scripts/game/race/PlayerRaceScore.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('PlayerRaceScore')
export class PlayerRaceScore {
    indexID:number = 0;
    isMyPlayer:boolean = false;
    score:number = 0;
    timeFinished:number = 2 * 60 * 60;
    indexRank:number = 0;
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
