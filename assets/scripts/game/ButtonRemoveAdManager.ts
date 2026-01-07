
import { _decorator, Button, Component, Node } from 'cc';
import { clientEvent } from '../framework/clientEvent';
import { Constants, SHOP_PACK_TYPE } from '../framework/constants';
import { localConfig } from '../localConfig';
import { FBInstantManager } from '../common/FBInstantManager';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ButtonRemoveAdManager
 * DateTime = Mon Sep 23 2024 16:49:56 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ButtonRemoveAdManager.ts
 * FileBasenameNoExtension = ButtonRemoveAdManager
 * URL = db://assets/scripts/game/ButtonRemoveAdManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ButtonRemoveAdManager')
export class ButtonRemoveAdManager extends Component {
    @property(Button)
    btnRemoveAd: Button = null;

    protected onEnable(): void {
        clientEvent.on(Constants.REMOVE_AD_UPDATE, this.showInfo, this);
        clientEvent.on(Constants.VIP_UPDATE, this.showInfo, this);
        this.btnRemoveAd.node.on(Constants.CLICK, this.touchRemoveAd, this);

        this.showInfo();
    }

    protected onDisable(): void {
        clientEvent.off(Constants.REMOVE_AD_UPDATE, this.showInfo, this);
        clientEvent.off(Constants.VIP_UPDATE, this.showInfo, this);
        this.btnRemoveAd.node.off(Constants.CLICK, this.touchRemoveAd, this);
    }

    showInfo(){
        if(localConfig.instance.isRemoveAd){
            this.node.active = false;
        }else{
            if(FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(SHOP_PACK_TYPE.REMOVE_AD)) 
                || FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(SHOP_PACK_TYPE.REMOVE_AD_PACK))){
                    this.node.active = true;
            }else{
                this.node.active = false;
            }
          
        }
    }

    touchRemoveAd(): void {
        LogEventManager.instance.logButtonClick("removead","home");  
        clientEvent.dispatchEvent(Constants.SHOW_REMOVEAD_POPUP);
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
