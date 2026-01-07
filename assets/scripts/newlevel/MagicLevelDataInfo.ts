
import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = MagicLevelDataInfo
 * DateTime = Mon Apr 14 2025 15:58:20 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = MagicLevelDataInfo.ts
 * FileBasenameNoExtension = MagicLevelDataInfo
 * URL = db://assets/scripts/newlevel/MagicLevelDataInfo.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('MagicLevelDataInfo')
export class MagicLevelDataInfo{
    UCCC:number = 0;
    CC:number = 0;
    LId:string = "";
    B:MagicBInfo[] = [];
    maxCol:number = 0;
    maxRow:number = 0;
}
@ccclass('MagicBInfo')
export class MagicBInfo{
    Id:number = 0;
    P:MagicPInfo = new MagicPInfo();
    C:MagicCInfo[] = [];
    OBIM:MagicOBIMInfo[] = [];
    indexX:number = 0;
    indexY:number = 0;
}

@ccclass('MagicPInfo')
export class MagicPInfo{
    x:number = 0;
    y:number = 0;
    z:number = 0;
}

@ccclass('MagicCInfo')
export class MagicCInfo{
    LP:MagicPInfo = new MagicPInfo();
    BIM:MagicBIMInfo = new MagicBIMInfo();
}

@ccclass('MagicBIMInfo')
export class MagicBIMInfo{
    Id:number = 0;
    CI:number = 0;
    V:boolean = true;
}

@ccclass('MagicOBIMInfo')
export class MagicOBIMInfo{
    Id:number = 0;
    CI:number = 0;
    Obj:MagicOBIMObjInfo = null;
}

@ccclass('MagicOBIMObjInfo')
export class MagicOBIMObjInfo{
    Id:number = 0;
    TA:number = 0;
    CI:number = 0;
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
