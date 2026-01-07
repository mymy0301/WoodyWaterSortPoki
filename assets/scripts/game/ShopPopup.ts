
import { _decorator, Component, Label, Node } from 'cc';
import { BasePopup } from '../common/basePopup';
import { clientEvent } from '../framework/clientEvent';
import { Constants, IAP_PLACEMENT_TYPE, IAP_SHOW_TYPE, SHOP_PACK_TYPE, TICKET_TYPE } from '../framework/constants';
import { localConfig } from '../localConfig';
import { FBInstantManager } from '../common/FBInstantManager';
import { lodash } from '../framework/lodash';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ShopPopup
 * DateTime = Fri Sep 27 2024 15:04:45 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ShopPopup.ts
 * FileBasenameNoExtension = ShopPopup
 * URL = db://assets/scripts/game/ShopPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ShopPopup')
export class ShopPopup extends BasePopup {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Node)
    targetCoin:Node = null;

    @property(Node)
    targetHeart:Node = null;

    @property(Label)
    txtTitle:Label = null;

    @property(Node)
    groupStarterPack:Node = null;

    @property(Node)
    groupBundle:Node = null;

    @property(Node)
    groupSuperBundle:Node = null;

    @property(Node)
    groupMegaBundle:Node = null;

    @property(Node)
    groupUltraBundle:Node = null;

    showShopPopup() {
        let arrPackShows = [];
        
        if(FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(SHOP_PACK_TYPE.BUNDLE_1))) {
            this.groupBundle.active = true;
            arrPackShows.push(SHOP_PACK_TYPE.BUNDLE_1);
            arrPackShows.push(SHOP_PACK_TYPE.BUNDLE_2);
        }else{
            this.groupBundle.active = false;
        }

        let isShowStartPack:boolean = false;
        if(FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(SHOP_PACK_TYPE.STARTER_PACK))) {
            if(localConfig.instance.isIAPStarterPack) {
                isShowStartPack = false;
            }else{
                isShowStartPack = true;
                arrPackShows.push(SHOP_PACK_TYPE.STARTER_PACK);
            }
        }
        this.groupStarterPack.active = isShowStartPack;


        if(isShowStartPack) {
            
        }else{
            this.groupSuperBundle.active = false;
            this.groupMegaBundle.active = false;
            this.groupUltraBundle.active = false;

            let randomShowBundle: number = lodash.random(0, 4);
            if (randomShowBundle == 0) {
                if (FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(SHOP_PACK_TYPE.BUNDLE_3))) {
                    this.groupSuperBundle.active = true;
                    arrPackShows.push(SHOP_PACK_TYPE.BUNDLE_3);
                } else {
                    this.groupSuperBundle.active = false;
                }
            } else if (randomShowBundle == 1) {
                if (FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(SHOP_PACK_TYPE.BUNDLE_4))) {
                    this.groupMegaBundle.active = true;
                    arrPackShows.push(SHOP_PACK_TYPE.BUNDLE_4);
                } else {
                    this.groupMegaBundle.active = false;
                }
            } else {
                if (FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(SHOP_PACK_TYPE.BUNDLE_5))) {
                    this.groupUltraBundle.active = true;
                    arrPackShows.push(SHOP_PACK_TYPE.BUNDLE_5);
                } else {
                    this.groupUltraBundle.active = false;
                }
            }
        }
        let strPacks = "";
        for (let i = 0; i < arrPackShows.length; i++) {
            if (i == arrPackShows.length - 1) {
                strPacks = strPacks + localConfig.instance.getIAP_PackID_bShopPackType(arrPackShows[i]);
            } else {
                strPacks = strPacks + localConfig.instance.getIAP_PackID_bShopPackType(arrPackShows[i]) + ", ";
            }
        }
        LogEventManager.instance.logIAPShow(localConfig.instance.getIAP_PlacementType(IAP_PLACEMENT_TYPE.INGAME_POPUP),localConfig.instance.getIAP_ShowType(IAP_SHOW_TYPE.PACK),strPacks);
        super.showPopup();

    }

    onEnable(): void {
        super.onEnable();
        clientEvent.dispatchEvent(Constants.UPDATE_COIN_TARGETPOS,this.targetCoin.worldPosition);
        clientEvent.dispatchEvent(Constants.UPDATE_HEART_STARTPOS,this.targetHeart.worldPosition);
    }

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    hidePopup(): void {
        super.hidePopup();
        clientEvent.dispatchEvent(Constants.SHOP_POPUP_CLOSE);
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
