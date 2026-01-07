
import { _decorator, Component, Node } from 'cc';
import { clientEvent } from '../framework/clientEvent';
import { Constants } from '../framework/constants';
import { localConfig } from '../localConfig';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ShopGroupRemoveAd
 * DateTime = Mon Sep 23 2024 14:44:54 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ShopGroupRemoveAd.ts
 * FileBasenameNoExtension = ShopGroupRemoveAd
 * URL = db://assets/scripts/game/ShopGroupRemoveAd.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ShopGroupRemoveAd')
export class ShopGroupRemoveAd extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;


    protected onEnable(): void {
        clientEvent.on(Constants.BUY_REMOVEAD_SUCCESS, this.buyRemoveAdSuccess, this);
        clientEvent.on(Constants.VIP_UPDATE, this.showInfo, this);

        this.showInfo();
    }

    protected onDisable(): void {
        clientEvent.off(Constants.BUY_REMOVEAD_SUCCESS, this.buyRemoveAdSuccess, this);
        clientEvent.off(Constants.VIP_UPDATE, this.showInfo, this);
    }

    buyRemoveAdSuccess() {
        this.node.active = false;
    }

    showInfo() {
        this.node.active = !localConfig.instance.isRemoveAd;
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
