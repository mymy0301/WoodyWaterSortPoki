
import { _decorator, Button, Component, Enum, Label, Node } from 'cc';
import { BasePopup } from '../../common/basePopup';
import { Constants, ENV_TYPE, SHOP_ITEM_TYPE, SHOP_PACK_TYPE, TICKET_TYPE } from '../../framework/constants';
import { RewardDataInfo, ShopDataInfo } from '../info/ShopDataInfo';
import { localConfig } from '../../localConfig';
import { FBInstantManager } from '../../common/FBInstantManager';
import { clientEvent } from '../../framework/clientEvent';
import { AudioManager2 } from '../../framework/audioManager2';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = VIPPopup
 * DateTime = Thu Dec 05 2024 15:29:20 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = VIPPopup.ts
 * FileBasenameNoExtension = VIPPopup
 * URL = db://assets/scripts/game/vip/VIPPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('VIPPopup')
export class VIPPopup extends BasePopup {
   
    @property({type:Enum(SHOP_PACK_TYPE)})
    shopPackType:SHOP_PACK_TYPE = SHOP_PACK_TYPE.VIP_3;

    @property(Button)
    btnBuy:Button = null;

    @property(Label)
    txtPrice:Label = null;

    @property(Label)
    txtTitle:Label = null;

    @property(Label)
    txtBonus:Label = null;

    @property(Node)
    arrStartPos:Node[] = [];

    shopDataInfo:ShopDataInfo = null;
    onEnable(): void {
        super.onEnable();
        this.btnBuy.node.on(Constants.CLICK,this.touchBuy,this);
        this.shopDataInfo = localConfig.instance.getItemShopDataInfo_byPackID(localConfig.instance.getIAP_PackID_bShopPackType(this.shopPackType));
        this.showInfo();
    }

    onDisable(): void {
        super.onDisable();
        this.btnBuy.node.off(Constants.CLICK,this.touchBuy,this);
    }

    showInfo(){
        this.txtPrice.string = `${this.shopDataInfo.price}`;
    }

    touchBuy(){
        let self = this;
        if(localConfig.instance.envType == ENV_TYPE.TEST_AD){
            this.buyIAP_Success();
            return;
        }
        let packID:string = localConfig.instance.getIAP_PackID_bShopPackType(this.shopPackType);
        FBInstantManager.instance.getListIAP_Purchase((err:Error,success:string)=>{
            if(err){
                FBInstantManager.instance.buyIAP_consumePackID(packID,(err:Error,success:string)=>{
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
                    FBInstantManager.instance.buyIAP_consumePackID(packID,(err:Error,success:string)=>{
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
            if(itemShopDataInfo.itemShopType == SHOP_ITEM_TYPE.TICKET_GOLD){
                clientEvent.dispatchEvent(Constants.UPDATE_TICKET_STARTPOS,TICKET_TYPE.GOLD,this.arrStartPos[i].worldPosition);
                clientEvent.dispatchEvent(Constants.SHOW_ADDTICKET,TICKET_TYPE.GOLD,shopDataInfo.items[i].value);
            }else if(itemShopDataInfo.itemShopType == SHOP_ITEM_TYPE.TICKET_SILVER){
                clientEvent.dispatchEvent(Constants.UPDATE_TICKET_STARTPOS,TICKET_TYPE.SILVER,this.arrStartPos[i].worldPosition);
                clientEvent.dispatchEvent(Constants.SHOW_ADDTICKET,TICKET_TYPE.SILVER,shopDataInfo.items[i].value);
            }else if(itemShopDataInfo.itemShopType == SHOP_ITEM_TYPE.COIN){
                clientEvent.dispatchEvent(Constants.UPDATE_COIN_STARTPOS,this.arrStartPos[i].worldPosition);
                clientEvent.dispatchEvent(Constants.SHOW_ADDCOIN,shopDataInfo.items[i].value,this.arrStartPos[i].worldPosition);
            }
        }
        localConfig.instance.setVIPType(this.shopPackType);
        if(this.shopPackType == SHOP_PACK_TYPE.VIP_3){
            clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"3-DAY VIP PASS",localConfig.instance.vipDailyRewards);
        }else if(this.shopPackType == SHOP_PACK_TYPE.VIP_7){
            clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"7-DAY VIP PASS",localConfig.instance.vipDailyRewards);
        }else if(this.shopPackType == SHOP_PACK_TYPE.VIP_30){
            clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"30-DAY VIP PASS",localConfig.instance.vipDailyRewards);
        }

        this.hidePopup_Finished();
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
