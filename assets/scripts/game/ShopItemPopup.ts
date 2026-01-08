
import { _decorator, Button, Component, Label, Node, Sprite, SpriteFrame, Vec3 } from 'cc';
import { BasePopup } from '../common/basePopup';
import { TicketGroup } from './TicketGroup';
import { CoinGroup } from '../common/coinGroup';
import { BOOSTER_TYPE, Constants, SHOP_ITEM_TYPE, TICKET_TYPE } from '../framework/constants';
import { localConfig } from '../localConfig';
import { FBInstantManager } from '../common/FBInstantManager';
import { clientEvent } from '../framework/clientEvent';
import { LogEventManager } from '../common/LogEventManager';
import { PokiSDKManager } from '../common/PokiSDKManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ShopItemPopup
 * DateTime = Tue Nov 05 2024 09:45:35 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ShopItemPopup.ts
 * FileBasenameNoExtension = ShopItemPopup
 * URL = db://assets/scripts/game/ShopItemPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('ShopItemPopup')
export class ShopItemPopup extends BasePopup {


    @property(Button)
    btnWatchAd: Button = null;

    @property(Sprite)
    iconBooster: Sprite = null;

    @property(SpriteFrame)
    sfUndo: SpriteFrame = null;

    @property(SpriteFrame)
    sfSuggest: SpriteFrame = null;

    @property(SpriteFrame)
    sfAddCol: SpriteFrame = null;

    // @property(Label)
    // txtValue: Label = null;

    @property(Button)
    btnCoin: Button = null;

    @property(Label)
    txtPriceCoin: Label = null;


    @property(Label)
    txtInfo: Label = null;

    countItem: number = 1;
    boosterType: BOOSTER_TYPE = null;
    showShopItemPopup(boosterType: BOOSTER_TYPE) {
        let isWatchAd = localConfig.instance.getShopItem_Free_byBoosterType(boosterType);
        this.boosterType = boosterType;
        this.txtPriceCoin.string = `${localConfig.instance.getBoosterPrice(boosterType)}`;
        if(boosterType == BOOSTER_TYPE.UNDO){
            this.iconBooster.spriteFrame = this.sfUndo;
            // this.txtInfo.string = "Undo";
        }else if(boosterType == BOOSTER_TYPE.SUGGEST){
            this.iconBooster.spriteFrame = this.sfSuggest;
            // this.txtInfo.string = "Suggest";
        }else if(boosterType == BOOSTER_TYPE.ADDCOL){
            this.iconBooster.spriteFrame = this.sfAddCol;
            // this.txtInfo.string = "Add Column";
        }
        if(!isWatchAd){
            this.btnWatchAd.node.active = true;
            this.btnWatchAd.node.setPosition(new Vec3(-220,-444,0));
            this.btnCoin.node.setPosition(new Vec3(220,-444,0));
        }else{
            this.btnWatchAd.node.active = false;
            this.btnCoin.node.setPosition(new Vec3(0,-444,0));
        }

        super.showPopup();
    }

    onEnable(): void {
        super.onEnable();
        this.btnWatchAd.node.on(Constants.CLICK, this.touchWatchAd, this);
        this.btnCoin.node.on(Constants.CLICK, this.touchCoin, this);
    }

    onDisable(): void {
        super.onDisable();
        this.btnWatchAd.node.off(Constants.CLICK, this.touchWatchAd, this);
        this.btnCoin.node.off(Constants.CLICK, this.touchCoin, this);
    }
    touchWatchAd(): void {
        LogEventManager.instance.logButtonClick("watchad","shopitempopup");
        // FBInstantManager.instance.Show_RewardedVideoAsync("shopitempopup","watchad",(err, success) => {
        //     if (err) {
        //     } else {
        //         localConfig.instance.setShopItem_Free_byBoosterType(this.boosterType);
        //         this.receiveBooster("watchad");
        //         this.hidePopup();
        //     }
        // })

        PokiSDKManager.instance.Show_RewardedVideoAsync("shopitempopup","watchad",(err, success) => {
            if (err) {
            } else {
                localConfig.instance.setShopItem_Free_byBoosterType(this.boosterType);
                this.receiveBooster("watchad");
                this.hidePopup();
            }
        });
    }

    touchCoin(): void {
        LogEventManager.instance.logButtonClick("coin","shopitempopup");
        if (localConfig.instance.currCoin >= localConfig.instance.getBoosterPrice(this.boosterType)) {
            localConfig.instance.setCoin(localConfig.instance.currCoin - localConfig.instance.getBoosterPrice(this.boosterType));
            LogEventManager.instance.logResourceSpend("currency","coin",localConfig.instance.getBoosterPrice(this.boosterType),"shopitempopup","exchange");
            this.receiveBooster("exchange");
            this.hidePopup();
        } else {
            // this.hidePopup();
            clientEvent.dispatchEvent(Constants.SHOW_SHOP_POPUP);
        }
    }
    receiveBooster(reason: string): void {
        if (this.boosterType == BOOSTER_TYPE.UNDO) {
            localConfig.instance.setBoosterCount(BOOSTER_TYPE.UNDO,localConfig.instance.getBoosterCount(BOOSTER_TYPE.UNDO) + this.countItem);
            LogEventManager.instance.logResourceEarned("booster","undo",this.countItem,"shopitem",reason);
        } else if (this.boosterType == BOOSTER_TYPE.SUGGEST) {
            localConfig.instance.setBoosterCount(BOOSTER_TYPE.SUGGEST,localConfig.instance.getBoosterCount(BOOSTER_TYPE.SUGGEST) + this.countItem);
            LogEventManager.instance.logResourceEarned("booster","shuffle",this.countItem,"shopitem",reason);
        } else if (this.boosterType == BOOSTER_TYPE.ADDCOL) {
            localConfig.instance.setBoosterCount(BOOSTER_TYPE.ADDCOL,localConfig.instance.getBoosterCount(BOOSTER_TYPE.ADDCOL) + this.countItem);
            LogEventManager.instance.logResourceEarned("booster","addcol",this.countItem,"shopitem",reason);
        }

        clientEvent.dispatchEvent(Constants.SHOPITEM_BUYSUCESS, this.boosterType);
    }

    touchClose(): void {
        LogEventManager.instance.logButtonClick("close","shopitempopup");
        super.touchClose();
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
