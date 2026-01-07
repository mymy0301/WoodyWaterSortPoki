
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = InfoMonth
 * DateTime = Tue Oct 01 2024 14:40:48 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = InfoMonth.ts
 * FileBasenameNoExtension = InfoMonth
 * URL = db://assets/scripts/common/InfoMonth.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('InfoMonth')
export class InfoMonth {
    month:number = 1;
    year:number = 2024;

    constructor( _month?: number, _year?: number){
        this.month = _month;
        this.year = _year;
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
