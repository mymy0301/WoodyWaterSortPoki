
import { _decorator, Component, Node } from 'cc';
import { TOURNAMENT_TYPE } from '../../framework/constants';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TournamentPageHostDataInfo
 * DateTime = Wed Jul 16 2025 10:28:04 GMT+0700 (Indochina Time)
 * Author = MyTom2k17
 * FileBasename = TournamentPageHostDataInfo.ts
 * FileBasenameNoExtension = TournamentPageHostDataInfo
 * URL = db://assets/scripts/game/info/TournamentPageHostDataInfo.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('TournamentPageHostDataInfo')
export class TournamentPageHostDataInfo {
    contextID: string;
    tournamentID: string;
    endTime: number;
    title: string;
    eventName: string;
    typeHost: TOURNAMENT_TYPE = TOURNAMENT_TYPE.PAGE_HOST;
    levelIndex: number;
    eventType: number = 0;
    eventURL: string = "";
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
