
import { _decorator, Button, Component, Enum, Label, Node } from 'cc';
import { BOOSTER_TYPE, Constants, ENV_TYPE, IAP_PLACEMENT_TYPE, IAP_SHOW_TYPE, SCENE_TYPE, SHOP_ITEM_TYPE, SHOP_PACK_TYPE, TICKET_TYPE } from '../framework/constants';
import { RewardDataInfo, ShopDataInfo } from './info/ShopDataInfo';
import { FBInstantManager } from '../common/FBInstantManager';
import { localConfig } from '../localConfig';
import { clientEvent } from '../framework/clientEvent';
import { AudioManager2 } from '../framework/audioManager2';
import { LogEventManager } from '../common/LogEventManager';
import { RemoveAdPackPopup } from './RemoveAdPackPopup';
import { PlaySceneManager } from '../PlaySceneManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemShopPack
 * DateTime = Mon Sep 16 2024 16:52:26 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemShopPack.ts
 * FileBasenameNoExtension = ItemShopPack
 * URL = db://assets/scripts/game/ItemShopPack.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemShopPack')
export class ItemShopPack extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property({type:Enum(SHOP_PACK_TYPE)})
    shopPackType:SHOP_PACK_TYPE = SHOP_PACK_TYPE.TICKET_GOLD_10;

    @property({type:Enum(IAP_PLACEMENT_TYPE)})
    iapPlacementType:IAP_PLACEMENT_TYPE = IAP_PLACEMENT_TYPE.HOME_SHOP;

    @property({type:Enum(IAP_SHOW_TYPE)})
    iapShowType:IAP_SHOW_TYPE = IAP_SHOW_TYPE.SHOP;

    @property(Button)
    btnBuy:Button;

    @property(Label)
    txtPrice:Label;

    @property(Node)
    arrStartPos:Node[] = [];

    shopDataInfo:ShopDataInfo = null;
    protected onEnable(): void {
        clientEvent.on(Constants.STARTER_PACK_UPDATE,this.showActive,this);
        this.btnBuy.node.on(Constants.CLICK,this.touchBuy,this);
        this.shopDataInfo = localConfig.instance.getItemShopDataInfo_byPackID(localConfig.instance.getIAP_PackID_bShopPackType(this.shopPackType));
        this.showActive();
    }

    protected onDisable(): void {
        clientEvent.off(Constants.STARTER_PACK_UPDATE,this.showActive,this);
        this.btnBuy.node.off(Constants.CLICK,this.touchBuy,this);
    }

    start () {
        // [3]
    }


    showActive(){
        if(FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(this.shopPackType))){
            // console.log("AAAAAAAAAAAAAA");
            this.node.active = true;
            this.txtPrice.string = `${this.shopDataInfo.price}`;
            if(this.shopPackType == SHOP_PACK_TYPE.STARTER_PACK){
                if(localConfig.instance.isIAPStarterPack){
                    this.node.active = false;
                }
            }
        }else{
            // console.log("BBBBBBBBBBBBBBBBBB");
            this.node.active = false;
        }
    }

    touchBuy(){
        // let placement:string = "home_shop";
        // if(localConfig.instance.currSceneType == SCENE_TYPE.GAME){
        //     placement = "ingame_booster";
        // }
        LogEventManager.instance.logButtonClick("buy",localConfig.instance.getIAP_PackID_bShopPackType(this.shopPackType));
        LogEventManager.instance.logIAPClick(localConfig.instance.getIAP_PlacementType(this.iapPlacementType),localConfig.instance.getIAP_ShowType(this.iapShowType),localConfig.instance.getIAP_PackID_bShopPackType(this.shopPackType));
        
        let self = this;
        if(localConfig.instance.envType == ENV_TYPE.TEST_AD){
            let packID:string = localConfig.instance.getIAP_PackID_bShopPackType(this.shopPackType);
            const valueIAP: number = localConfig.instance.getValuePriceIAPPack_byProductID(packID);
            LogEventManager.instance.logEventIAP(""+packID, packID, valueIAP);
            LogEventManager.instance.logIAPPurchase(localConfig.instance.getIAP_PlacementType(this.iapPlacementType),localConfig.instance.getIAP_ShowType(this.iapShowType),localConfig.instance.getIAP_PackID_bShopPackType(this.shopPackType),valueIAP,"USD");
            
            this.buyIAP_Success();
            return;
        }
        let packID:string = localConfig.instance.getIAP_PackID_bShopPackType(this.shopPackType);
        FBInstantManager.instance.getListIAP_Purchase((err:Error,success:string)=>{
            if(err){
                FBInstantManager.instance.buyIAP_consumePackID(packID,localConfig.instance.getIAP_PlacementType(this.iapPlacementType),localConfig.instance.getIAP_ShowType(this.iapShowType),(err:Error,success:string)=>{
                    if(err){
                        clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION,"Buy Fail!");
                    }else{
                        clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION,"Buy Success!");
                        self.buyIAP_Success();
                    }
                });
                
            }else{
                let purchaseToken:string = FBInstantManager.instance.iap_checkPurchaseInfo(packID);
                if(purchaseToken != ""){
                    FBInstantManager.instance.iap_consumePackID(purchaseToken,(err:Error,success:string)=>{
                        if(err){
                            clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION,"Buy Fail!");
                        }else{
                            clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION,"Buy Success!");
                            self.buyIAP_Success();
                        }
                    });
                }else{
                    FBInstantManager.instance.buyIAP_consumePackID(packID,localConfig.instance.getIAP_PlacementType(this.iapPlacementType),localConfig.instance.getIAP_ShowType(this.iapShowType),(err:Error,success:string)=>{
                        if(err){
                            clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION,"Buy Fail!");
                        }else{
                            clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION,"Buy Success!");
                            self.buyIAP_Success();
                        }
                    });
                }
            }
        });
    }

    buyIAP_Success(){
        AudioManager2.instance.playSound_Coin_Appear();
        FBInstantManager.instance.SetNextTime_ShowInterstitialAd();
        let shopDataInfo:ShopDataInfo = localConfig.instance.getItemShopDataInfo_byPackID(localConfig.instance.getIAP_PackID_bShopPackType(this.shopPackType));
        for(let i=0; i< shopDataInfo.items.length;i++){
            let itemShopDataInfo:RewardDataInfo = shopDataInfo.items[i];
            // if(itemShopDataInfo.itemShopType == SHOP_ITEM_TYPE.TICKET_GOLD){
            //     clientEvent.dispatchEvent(Constants.UPDATE_TICKET_STARTPOS,TICKET_TYPE.GOLD,this.arrStartPos[i].worldPosition);
            //     clientEvent.dispatchEvent(Constants.SHOW_ADDTICKET,TICKET_TYPE.GOLD,shopDataInfo.items[i].value);
            // }else if(itemShopDataInfo.itemShopType == SHOP_ITEM_TYPE.TICKET_SILVER){
            //     clientEvent.dispatchEvent(Constants.UPDATE_TICKET_STARTPOS,TICKET_TYPE.SILVER,this.arrStartPos[i].worldPosition);
            //     clientEvent.dispatchEvent(Constants.SHOW_ADDTICKET,TICKET_TYPE.SILVER,shopDataInfo.items[i].value);
            // }else 
            if(itemShopDataInfo.itemShopType == SHOP_ITEM_TYPE.COIN){
                clientEvent.dispatchEvent(Constants.UPDATE_COIN_STARTPOS,this.arrStartPos[0].worldPosition);
                clientEvent.dispatchEvent(Constants.SHOW_ADDCOIN,shopDataInfo.items[i].value);
                LogEventManager.instance.logResourceEarned("currency","coin",shopDataInfo.items[i].value,"shop","purchase");
            }else if(itemShopDataInfo.itemShopType == SHOP_ITEM_TYPE.HEART_UNLIMITED){
                clientEvent.dispatchEvent(Constants.UPDATE_HEART_STARTPOS,this.arrStartPos[1].worldPosition);
                clientEvent.dispatchEvent(Constants.SHOW_ADDHEART_UNLIMITED,shopDataInfo.items[i].value);
                LogEventManager.instance.logResourceEarned("booster","heart_unlimited",shopDataInfo.items[i].value,"shop","purchase");
            }else if(itemShopDataInfo.itemShopType == SHOP_ITEM_TYPE.BOOSTER_UNDO){
                localConfig.instance.setBoosterCount(BOOSTER_TYPE.UNDO,localConfig.instance.getBoosterCount(BOOSTER_TYPE.UNDO) + shopDataInfo.items[i].value);
                LogEventManager.instance.logResourceEarned("booster","undo",shopDataInfo.items[i].value,"shop","purchase");
            }else if(itemShopDataInfo.itemShopType == SHOP_ITEM_TYPE.BOOSTER_SUGGEST){
                localConfig.instance.setBoosterCount(BOOSTER_TYPE.SUGGEST,localConfig.instance.getBoosterCount(BOOSTER_TYPE.SUGGEST) + shopDataInfo.items[i].value);
                LogEventManager.instance.logResourceEarned("booster","shuffle",shopDataInfo.items[i].value,"shop","purchase");
            }else if(itemShopDataInfo.itemShopType == SHOP_ITEM_TYPE.BOOSTER_ADDCOL){
                localConfig.instance.setBoosterCount(BOOSTER_TYPE.ADDCOL,localConfig.instance.getBoosterCount(BOOSTER_TYPE.ADDCOL) + shopDataInfo.items[i].value);
                LogEventManager.instance.logResourceEarned("booster","addcol",shopDataInfo.items[i].value,"shop","purchase");
            }
            else if(itemShopDataInfo.itemShopType == SHOP_ITEM_TYPE.REMOVE_AD){
                localConfig.instance.setData_RemoveAd();
                clientEvent.dispatchEvent(Constants.BUY_REMOVEAD_SUCCESS);
            }
        }

        clientEvent.dispatchEvent(Constants.SHOP_PACK_UPDATE,this.shopPackType)

        if(this.shopPackType == SHOP_PACK_TYPE.REMOVE_AD){
            localConfig.instance.setData_RemoveAd();
        }else if(this.shopPackType == SHOP_PACK_TYPE.REMOVE_AD_PACK){
            localConfig.instance.setData_RemoveAd();
        }else if(this.shopPackType == SHOP_PACK_TYPE.STARTER_PACK){
            localConfig.instance.setData_IAPStarterPack();
        }
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
