
import { _decorator, Button, Component, Label, Node } from 'cc';
import { BasePopup } from '../../common/basePopup';
import { Constants, ENV_TYPE, SHOP_PACK_TYPE } from '../../framework/constants';
import { CountDownToNextTime } from '../../common/CountDownToNextTime';
import { localConfig } from '../../localConfig';
import { FBInstantManager } from '../../common/FBInstantManager';
import { clientEvent } from '../../framework/clientEvent';
import { ShopDataInfo } from '../info/ShopDataInfo';
import { LogEventManager } from '../../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = MasterPassDetailPopup
 * DateTime = Thu Nov 21 2024 14:58:17 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = MasterPassDetailPopup.ts
 * FileBasenameNoExtension = MasterPassDetailPopup
 * URL = db://assets/scripts/game/masterpass/MasterPassDetailPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('MasterPassDetailPopup')
export class MasterPassDetailPopup extends BasePopup {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Button)
    btnBuy:Button = null;

    @property(Label)
    txtPrice:Label = null;

    @property(Node)
    objHover:Node = null;

    @property(CountDownToNextTime)
    countDownTime:CountDownToNextTime = null;

    @property(Node)
    nodeFinished:Node = null;

    shopPackType:SHOP_PACK_TYPE = SHOP_PACK_TYPE.MASTER_PASS;
    shopDataInfo:ShopDataInfo = null;
    onEnable(): void {
        this.shopDataInfo = localConfig.instance.getItemShopDataInfo_byPackID(localConfig.instance.getIAP_PackID_bShopPackType(this.shopPackType));
        super.onEnable();
        this.btnBuy.node.on(Constants.CLICK, this.touchBuy, this);
        this.showInfo();
    }

    showInfo(){
        if(FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(this.shopPackType))){
            this.btnBuy.interactable = true;
            this.objHover.active = false;
            this.txtPrice.string = `${this.shopDataInfo.price}`;
        }else{
            this.objHover.active = true;
            this.btnBuy.interactable = false;
            this.txtPrice.string = `Loading...`;
        }
    }

    onDisable(): void {
        super.onDisable();
        this.btnBuy.node.off(Constants.CLICK, this.touchBuy, this);
    }

    showMaterPassDetailPopup(){
        super.showPopup();
        let timeLeft:number = localConfig.instance.passLastTime + localConfig.instance.PASS_TIME - localConfig.instance.getCurrTime();
        if(timeLeft > 0){
            this.nodeFinished.active = false;
            this.countDownTime.initCountDownTime(timeLeft,()=>{
                
            });
        }else{
            this.countDownTime.node.active = false;
            this.nodeFinished.active = true;
        }
    }

    touchBuy(){
        LogEventManager.instance.logButtonClick("buy","masterpassdetailpopup");
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
        localConfig.instance.setPassActivated();
        clientEvent.dispatchEvent(Constants.PASS_ACTIVATED_UPDATE);
        this.hidePopup();
    }

    touchClose(): void {
        LogEventManager.instance.logButtonClick("close","masterpassdetailpopup");
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
