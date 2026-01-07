
import { _decorator, Button, Component, Node } from 'cc';
import { clientEvent } from '../framework/clientEvent';
import { Constants, SHOP_PACK_TYPE } from '../framework/constants';
import { FBInstantManager } from '../common/FBInstantManager';
import { localConfig } from '../localConfig';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ButtonSaleManager
 * DateTime = Mon Sep 23 2024 17:00:10 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ButtonSaleManager.ts
 * FileBasenameNoExtension = ButtonSaleManager
 * URL = db://assets/scripts/game/ButtonSaleManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ButtonSaleManager')
export class ButtonSaleManager extends Component {
    @property(Button)
    btnSale: Button = null;

    protected onEnable(): void {
        this.btnSale.node.on(Button.EventType.CLICK, this.touchSale, this); 
        clientEvent.dispatchEvent(Constants.IAP_INIT_SUCCESS,this.showInfo,this);
        this.showInfo();
    }

    protected onDisable(): void {
        this.btnSale.node.off(Button.EventType.CLICK, this.touchSale, this);
        clientEvent.off(Constants.IAP_INIT_SUCCESS,this.showInfo,this);
    }

    showInfo() {
        if(FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(SHOP_PACK_TYPE.SUMMER_PACK))){
            this.node.active = true;
        }else{
            this.node.active = false;
        }
    }
    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    touchSale() {
        clientEvent.dispatchEvent(Constants.SHOW_SUMMER_PACK_POPUP);
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
