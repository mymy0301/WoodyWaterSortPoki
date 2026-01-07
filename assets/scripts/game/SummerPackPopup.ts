
import { _decorator, Component, Node } from 'cc';
import { BasePopup } from '../common/basePopup';
import { ItemShopPack } from './ItemShopPack';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = SummerPackPopup
 * DateTime = Mon Sep 23 2024 17:53:39 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = SummerPackPopup.ts
 * FileBasenameNoExtension = SummerPackPopup
 * URL = db://assets/scripts/game/SummerPackPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('SummerPackPopup')
export class SummerPackPopup extends BasePopup {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(ItemShopPack)
    itemSummerPack:ItemShopPack = null;

    showSummerPack(){
        super.showPopup();
    }

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
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
