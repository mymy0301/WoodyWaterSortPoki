
import { _decorator, Component, Node } from 'cc';
import { BasePopup } from '../common/basePopup';
import { clientEvent } from '../framework/clientEvent';
import { Constants, IAP_PLACEMENT_TYPE, IAP_SHOW_TYPE, SHOP_PACK_TYPE } from '../framework/constants';
import { LogEventManager } from '../common/LogEventManager';
import { localConfig } from '../localConfig';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = RemoveAdPackPopup
 * DateTime = Mon Sep 23 2024 15:34:00 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = RemoveAdPackPopup.ts
 * FileBasenameNoExtension = RemoveAdPackPopup
 * URL = db://assets/scripts/game/RemoveAdPackPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('RemoveAdPackPopup')
export class RemoveAdPackPopup extends BasePopup {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    onEnable(): void {
        super.onEnable();
        clientEvent.on(Constants.BUY_REMOVEAD_SUCCESS, this.buyRemoveAdSuccess, this);  
    }

    onDisable(): void {
        super.onDisable();
        clientEvent.off(Constants.BUY_REMOVEAD_SUCCESS, this.buyRemoveAdSuccess, this);
    }

    showRemoveAdPackPopup() {
        let arrPackShows = [];
        arrPackShows.push(SHOP_PACK_TYPE.REMOVE_AD);
        arrPackShows.push(SHOP_PACK_TYPE.REMOVE_AD_PACK);
        let strPacks = "";
        for (let i = 0; i < arrPackShows.length; i++) {
            if (i == arrPackShows.length - 1) {
                strPacks = strPacks + localConfig.instance.getIAP_PackID_bShopPackType(arrPackShows[i]);
            } else {
                strPacks = strPacks + localConfig.instance.getIAP_PackID_bShopPackType(arrPackShows[i]) + ", ";
            }
        }
        LogEventManager.instance.logIAPShow(localConfig.instance.getIAP_PlacementType(IAP_PLACEMENT_TYPE.HOME_POPUP), localConfig.instance.getIAP_ShowType(IAP_SHOW_TYPE.PACK), strPacks);
        this.showPopup();
    }   

    buyRemoveAdSuccess() {
        this.hidePopup();
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
