
import { _decorator, Component, Node } from 'cc';
import { InfoMonth } from './InfoMonth';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = InfoMonthReward
 * DateTime = Tue Oct 01 2024 14:45:56 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = InfoMonthReward.ts
 * FileBasenameNoExtension = InfoMonthReward
 * URL = db://assets/scripts/common/InfoMonthReward.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('InfoMonthReward')
export class InfoMonthReward {
    infoMonth:InfoMonth= null;
    indexReward:number = 0;
    constructor(_infoMonth:InfoMonth,_indexReward:number){
        this.infoMonth = _infoMonth;    
        this.indexReward = _indexReward;
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
