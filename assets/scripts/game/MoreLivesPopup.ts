
import { _decorator, Button, Component, Label, Node } from 'cc';
import { BasePopup } from '../common/basePopup';
import { CountDownTimeHeart } from '../common/CountDownTimeHeart';
import { localConfig } from '../localConfig';
import { Constants, SCENE_TYPE } from '../framework/constants';
import { configuration } from '../framework/configuration';
import { clientEvent } from '../framework/clientEvent';
import { FBInstantManager } from '../common/FBInstantManager';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = MoreLivesPopup
 * DateTime = Fri May 09 2025 10:49:08 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = MoreLivesPopup.ts
 * FileBasenameNoExtension = MoreLivesPopup
 * URL = db://assets/scripts/game/MoreLivesPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('MoreLivesPopup')
export class MoreLivesPopup extends BasePopup {
    @property(Node)
    nodeNextLife: Node = null;

    @property(Node)
    nodeMaxLife: Node = null;

    @property(Label)
    txtCountLife: Label = null;

    @property(CountDownTimeHeart)
    countDownTimeHeart: CountDownTimeHeart = null;

    @property(Button)
    btnRefill: Button = null;

    @property(Button)
    btnWatchAd: Button = null;

    onEnable(): void {
        super.onEnable();
        this.btnRefill.node.on(Constants.CLICK, this.touchRefill, this);
        this.btnWatchAd.node.on(Constants.CLICK, this.touchWatchAd, this);
        this.showInfo();
    }

    onDisable(): void {
        super.onDisable();
        this.btnRefill.node.off(Constants.CLICK, this.touchRefill, this);
        this.btnWatchAd.node.off(Constants.CLICK, this.touchWatchAd, this);
    }


    cbMoreLives:any = null;

    showMoreLivesPopup(cb:any) {
        this.cbMoreLives = cb;
        this.showPopup();
    }
    showInfo() {
        this.txtCountLife.string = `${localConfig.instance.currHeart}`;
        if(localConfig.instance.currHeart >= localConfig.instance.HEART_MAX_COUNT){
            this.nodeNextLife.active = false;
            this.nodeMaxLife.active = true;
            this.countDownTimeHeart.node.active = false;
            this.btnRefill.node.active = false;
            this.btnWatchAd.node.active = false;
        }else{
            this.nodeNextLife.active = true;
            this.nodeMaxLife.active = false;
            this.countDownTimeHeart.node.active = true;
            this.countDownTimeHeart.initCountDownTime(localConfig.instance.currHeart_CountTime,()=>{
                this.showInfo();
            });
            this.btnRefill.node.active = true;
            this.btnWatchAd.node.active = true;
        }
    }


    touchRefill() {
        LogEventManager.instance.logButtonClick("refill","morelivespopup");
        if(localConfig.instance.currCoin >= localConfig.instance.HEARE_PRICE){
            localConfig.instance.setCoin(localConfig.instance.currCoin - localConfig.instance.HEARE_PRICE);
            LogEventManager.instance.logResourceSpend("currency","coin",localConfig.instance.HEARE_PRICE,"morelivespopup","refill");
            localConfig.instance.currHeart ++;
            configuration.instance.setData_HeartCount(localConfig.instance.currHeart);
            LogEventManager.instance.logResourceEarned("booster","heart",1,"morelivespopup","exchange");
            clientEvent.dispatchEvent(Constants.HEART_UPDATE);
            this.showInfo();
            this.hidePopup();
            this.cbMoreLives();
        }else{
            this.hidePopup();
            if(localConfig.instance.currSceneType == SCENE_TYPE.MENU){
                clientEvent.dispatchEvent(Constants.SHOW_SHOP_GROUP);
            } else {
                clientEvent.dispatchEvent(Constants.SHOW_SHOP_POPUP);
            }
            this.cbMoreLives();
        }
    }

    touchWatchAd() {
        LogEventManager.instance.logButtonClick("watchad","masterpasspopup");
        FBInstantManager.instance.Show_RewardedVideoAsync("morelivespopup","watchad",(err, success) => {
            if(err){
                
            }else{
                localConfig.instance.currHeart ++;
                configuration.instance.setData_HeartCount(localConfig.instance.currHeart);
                LogEventManager.instance.logResourceEarned("booster","heart",1,"morelivespopup","watchad");
                clientEvent.dispatchEvent(Constants.HEART_UPDATE);
                this.showInfo();

                this.hidePopup();

                this.cbMoreLives();
            }
        });
    }

    touchClose(): void {
        LogEventManager.instance.logButtonClick("close","morelivespopup");
        super.touchClose();
        this.cbMoreLives();
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
