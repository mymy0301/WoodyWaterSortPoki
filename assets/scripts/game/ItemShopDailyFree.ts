
import { _decorator, Button, Component, Node } from 'cc';
import { Constants } from '../framework/constants';
import { localConfig } from '../localConfig';
import { AudioManager2 } from '../framework/audioManager2';
import { clientEvent } from '../framework/clientEvent';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemShopDailyFree
 * DateTime = Sat May 10 2025 11:00:09 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemShopDailyFree.ts
 * FileBasenameNoExtension = ItemShopDailyFree
 * URL = db://assets/scripts/game/ItemShopDailyFree.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemShopDailyFree')
export class ItemShopDailyFree extends Component {
     @property(Button)
    btnClaim: Button;

    @property(Node)
    objNextTime: Node;

    @property(Node)
    startPos:Node;

    @property(Node)
    notify: Node;


    protected onEnable(): void {
        this.btnClaim.node.on(Constants.CLICK, this.touchClaim, this);

        this.showInfo();
    }

    protected onDisable(): void {
        this.btnClaim.node.on(Constants.CLICK, this.touchClaim, this);
    }

    showInfo(){
        if(localConfig.instance.getCurrDay() > localConfig.instance.shop_daily_free_lastday){
            this.btnClaim.node.active = true;
            this.objNextTime.active = false;
            this.notify.active = true;
        }else{
            this.btnClaim.node.active = false;
            this.objNextTime.active = true;
            this.notify.active = false;
        }
    }

    touchClaim(){
        LogEventManager.instance.logButtonClick("shopitemdailyfree","shoppopup");
        AudioManager2.instance.playSound_Coin_Appear();
        this.btnClaim.node.active = false;
        this.objNextTime.active = true;
        this.notify.active = false;
        localConfig.instance.setShopDailyFreeLastDay();
        clientEvent.dispatchEvent(Constants.UPDATE_COIN_STARTPOS, this.startPos.worldPosition);

        clientEvent.dispatchEvent(Constants.SHOW_ADDCOIN, 50);
        LogEventManager.instance.logResourceEarned("currency","coin",50,"shop","shopdailyfree");
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
