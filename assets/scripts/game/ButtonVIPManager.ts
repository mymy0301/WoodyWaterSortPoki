
import { _decorator, Button, Component, Node } from 'cc';
import { localConfig } from '../localConfig';
import { clientEvent } from '../framework/clientEvent';
import { Constants, SHOP_PACK_TYPE } from '../framework/constants';
import { FBInstantManager } from '../common/FBInstantManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ButtonVIPManager
 * DateTime = Mon Sep 23 2024 16:03:27 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ButtonVIPManager.ts
 * FileBasenameNoExtension = ButtonVIPManager
 * URL = db://assets/scripts/game/ButtonVIPManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ButtonVIPManager')
export class ButtonVIPManager extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Button)
    btnVIP:Button;

    protected onEnable(): void {
        this.btnVIP.node.on(Button.EventType.CLICK, this.touchVIP, this);
        clientEvent.on(Constants.VIP_UPDATE, this.showInfo, this);
        this.showInfo();
    }
    protected onDisable(): void {
        this.btnVIP.node.off(Button.EventType.CLICK, this.touchVIP, this);
        clientEvent.off(Constants.VIP_UPDATE, this.showInfo, this);
    }

    showInfo(){
        if(localConfig.instance.vipType != 0){
            this.node.active = false;
        }else if(FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(SHOP_PACK_TYPE.VIP_3))
                || FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(SHOP_PACK_TYPE.VIP_7))
                || FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(SHOP_PACK_TYPE.VIP_30))){
                    this.node.active = true;
        }else{
            this.node.active = false;
        }
    }

    touchVIP(): void {
        clientEvent.dispatchEvent(Constants.SHOW_VIP_POPUP)
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
