
import { _decorator, Component, Enum, Node } from 'cc';
import { SHOP_ITEM_TYPE } from '../../framework/constants';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ShopDataInfo
 * DateTime = Mon Sep 16 2024 16:52:43 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ShopDataInfo.ts
 * FileBasenameNoExtension = ShopDataInfo
 * URL = db://assets/scripts/game/info/ShopDataInfo.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ShopDataInfo')
export class ShopDataInfo {
    packID:string;
    price:string;
    price_amount_cents:number = 0;
    items:RewardDataInfo[] = [];
}

@ccclass('RewardDataInfo')
export class RewardDataInfo {
    @property({type:Enum(SHOP_ITEM_TYPE)})
    itemShopType:SHOP_ITEM_TYPE = SHOP_ITEM_TYPE.TICKET_GOLD;
    value:number = 0;

    constructor(itemShopType:SHOP_ITEM_TYPE, value:number) {
        this.itemShopType = itemShopType;
        this.value = value;
    }
}

@ccclass('GroupRewardDataInfo')
export class GroupRewardDataInfo {
    items:RewardDataInfo[] = [];

    constructor(items:RewardDataInfo[]) {
        this.items = items;
    }
}

@ccclass('SpinRewardDataInfo')
export class SpinRewardDataInfo {
    items:RewardDataInfo[] = [];
    ratio:number = 1;
    constructor(items:RewardDataInfo[], ratio:number) {
        this.items = items;
        this.ratio = ratio;
    }
}

@ccclass('PassRewardDataInfo')
export class PassRewardDataInfo {
    items:RewardDataInfo[] = [];
    itemsPass:RewardDataInfo[] = [];

    constructor(items:RewardDataInfo[], itemsPass:RewardDataInfo[]) {
        this.items = items;
        this.itemsPass = itemsPass;
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
