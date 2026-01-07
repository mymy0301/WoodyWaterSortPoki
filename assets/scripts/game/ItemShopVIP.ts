
import { _decorator, Button, Component, Enum, Label, Node } from 'cc';
import { Constants, ENV_TYPE, SHOP_ITEM_TYPE, SHOP_PACK_TYPE, TICKET_TYPE } from '../framework/constants';
import { localConfig } from '../localConfig';
import { FBInstantManager } from '../common/FBInstantManager';
import { clientEvent } from '../framework/clientEvent';
import { AudioManager2 } from '../framework/audioManager2';
import { RewardDataInfo, ShopDataInfo } from './info/ShopDataInfo';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemShopVIP
 * DateTime = Mon Sep 23 2024 11:27:28 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemShopVIP.ts
 * FileBasenameNoExtension = ItemShopVIP
 * URL = db://assets/scripts/game/ItemShopVIP.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemShopVIP')
export class ItemShopVIP extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property({type:Enum(SHOP_PACK_TYPE)})
    shopPackType:SHOP_PACK_TYPE = SHOP_PACK_TYPE.VIP_30;

    @property(Label)
    txtState:Label;

    @property(Button)
    btnBuy:Button;

    @property(Label)
    txtPrice:Label;

    @property(Node)
    objEndTime:Node;

    @property(Label)
    txtEndTime:Label;

    @property(Node)
    arrStartPos:Node[] = [];

    shopDataInfo:ShopDataInfo = null;

    protected onEnable(): void {
        this.btnBuy.node.on(Constants.CLICK,this.touchBuy,this);
        this.shopDataInfo = localConfig.instance.getItemShopDataInfo_byPackID(localConfig.instance.getIAP_PackID_bShopPackType(this.shopPackType));
        this.showInfo();
    }

    protected onDisable(): void {
        this.btnBuy.node.off(Constants.CLICK,this.touchBuy,this);
    }


    showInfo(){
        // console.log(localConfig.instance.vipType,this.shopPackType);
        if(localConfig.instance.vipType != 0){
            if(localConfig.instance.vipType == this.shopPackType){
                this.btnBuy.node.active = false;
                this.txtState.string = "Purchased";
                this.node.active = true;
                this.showEndTime();
            }else{
                // console.log("BBBBBBBBBBBBBBBBBB11111");
                this.node.active = false;
            }
        }else{
            this.btnBuy.node.active = true;
            this.objEndTime.active = false;
            this.txtState.string = "Not Purchased";
            if(FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(this.shopPackType))){
                // console.log("AAAAAAAAAAAAAA");
                this.node.active = true;
                this.txtPrice.string = `${this.shopDataInfo.price}`;
            }else{
                // console.log("BBBBBBBBBBBBBBBBBB");
                this.node.active = false;
            }
        }
    }

    showEndTime(){
        let countDaysLeft:number = localConfig.instance.getVipCountDownTimeLeft(this.shopPackType);
        this.txtEndTime.string = `(${countDaysLeft} days left)`;
        this.objEndTime.active = true;
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
        

        if(localConfig.instance.vipType == SHOP_PACK_TYPE.VIP_3){
            clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"3-DAY VIP PASS",localConfig.instance.vipDailyRewards);
        }else if(localConfig.instance.vipType == SHOP_PACK_TYPE.VIP_7){
            clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"7-DAY VIP PASS",localConfig.instance.vipDailyRewards);
        }else if(localConfig.instance.vipType == SHOP_PACK_TYPE.VIP_30){
            clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"30-DAY VIP PASS",localConfig.instance.vipDailyRewards);
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
