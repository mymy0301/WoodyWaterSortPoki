
import { _decorator, Component, Node } from 'cc';
import { localConfig } from '../localConfig';
import { clientEvent } from '../framework/clientEvent';
import { Constants } from '../framework/constants';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ButtonTabShopManager
 * DateTime = Mon Dec 09 2024 17:55:11 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ButtonTabShopManager.ts
 * FileBasenameNoExtension = ButtonTabShopManager
 * URL = db://assets/scripts/game/ButtonTabShopManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ButtonTabShopManager')
export class ButtonTabShopManager extends Component {
    @property(Node)
    notify: Node = null;

    protected onEnable(): void {
        clientEvent.on(Constants.SHOP_FREE_LASTTIME_UPDATE,this.showNotify,this);
        clientEvent.on(Constants.SHOP_DAILY_FREE_LASTDAY_UPDATE,this.showNotify,this);
        this.showNotify();
    }

    protected onDisable(): void {
        clientEvent.off(Constants.SHOP_FREE_LASTTIME_UPDATE,this.showNotify,this);
        clientEvent.off(Constants.SHOP_DAILY_FREE_LASTDAY_UPDATE,this.showNotify,this);
    }

    showNotify(): void {
        if(localConfig.instance.getCurrTime() - localConfig.instance.shop_free_lastTime >  localConfig.instance.SHOP_FREE_NEXT_TIME
            || localConfig.instance.getCurrDay() > localConfig.instance.shop_daily_free_lastday){
            this.notify.active = true;
        }else{
            this.notify.active = false;
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
