
import { _decorator, Component, Node, Vec2, Vec3 } from 'cc';
import { ItemWaterConfig } from './ItemWaterConfig';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemTubeConfig
 * DateTime = Tue Aug 06 2024 09:23:39 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemTubeConfig.ts
 * FileBasenameNoExtension = ItemTubeConfig
 * URL = db://assets/scripts/game/info/ItemTubeConfig.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemTubeConfig')
export class ItemTubeConfig{
    pivotRight:Vec3 = new Vec3(-68,-191,0);
    pivotLeft:Vec3 = new Vec3(68,-191,0);
    arrRotateConfigs:number[] = [];
    arrScaleConfigs:number[] = [];
    arrMoveConfigs:number[] = [];
    arrScaleWaterConfigs:number[] = [];
    arrScaleInitTops:number[] = [];

    constructor(_pivotRight:Vec3,_pivotLeft:Vec3,_arrRotateConfigs:number[],_arrScaleConfigs:number[],_arrMoveConfigs:number[],_arrScaleWaterConfigs:number[],_arrScaleInitTops:number[]){
        this.pivotRight = _pivotRight;
        this.pivotLeft = _pivotLeft;
        this.arrRotateConfigs = _arrRotateConfigs;
        this.arrScaleConfigs = _arrScaleConfigs;
        this.arrMoveConfigs = _arrMoveConfigs;
        this.arrScaleWaterConfigs = _arrScaleWaterConfigs;
        this.arrScaleInitTops = _arrScaleInitTops;
        // this.arrItemWaterConfigs_Step1 = _arrItemWaterConfigs_Step1;
        // this.arrItemWaterConfigs_Step2 = _arrItemWaterConfigs_Step2;
        // this.arrItemWaterConfigs_Step3 = _arrItemWaterConfigs_Step3;
        // this.arrItemWaterConfigs_Step4 = _arrItemWaterConfigs_Step4;
    }

    // getItemWaterConfigs_byIndexStep(indexStep:number){
    //     if(indexStep == 0){
    //         return this.arrItemWaterConfigs_Step1;
    //     }else if(indexStep == 1){
    //         return this.arrItemWaterConfigs_Step2;
    //     }else if(indexStep == 2){
    //         return this.arrItemWaterConfigs_Step3;
    //     }else if(indexStep == 3){
    //         return this.arrItemWaterConfigs_Step4;
    //     }
    //     return this.arrItemWaterConfigs_Step1;
    // }
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
