
import { _decorator, Button, Component, Node } from 'cc';
import { Constants, TICKET_TYPE } from '../framework/constants';
import { clientEvent } from '../framework/clientEvent';
import { FBInstantManager } from '../common/FBInstantManager';
import { localConfig } from '../localConfig';
import { CountDownToNextTime } from '../common/CountDownToNextTime';
import { AudioManager2 } from '../framework/audioManager2';
import { LogEventManager } from '../common/LogEventManager';
import { PokiSDKManager } from '../common/PokiSDKManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemShopFree
 * DateTime = Mon Sep 23 2024 09:24:08 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemShopFree.ts
 * FileBasenameNoExtension = ItemShopFree
 * URL = db://assets/scripts/game/ItemShopFree.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemShopFree')
export class ItemShopFree extends Component {
    @property(Button)
    btnClaim:Button;

    @property(Node)
    objNextTime:Node;

    @property(CountDownToNextTime)
    countDownToNextTime:CountDownToNextTime = null;

    @property(Node)
    startPos:Node;

    protected onEnable(): void {
        this.btnClaim.node.on(Constants.CLICK,this.touchClaim,this);

        this.showInfo();
    }

    protected onDisable(): void {
        this.btnClaim.node.on(Constants.CLICK,this.touchClaim,this);
    }

    start () {
        // [3]
    }

    showInfo(){
        if(localConfig.instance.shop_free_lastTime > localConfig.instance.getCurrTime() - localConfig.instance.SHOP_FREE_NEXT_TIME){
            this.btnClaim.node.active = false;
            this.objNextTime.active = true;

            this.countDownToNextTime.initCountDownTime(localConfig.instance.shop_free_lastTime + localConfig.instance.SHOP_FREE_NEXT_TIME - localConfig.instance.getCurrTime(),()=>{this.setCountDownToNextTimeFinished()});
            
        }else{
            this.btnClaim.node.active = true;   
            this.objNextTime.active = false;
        }
    }

    touchClaim(){
        LogEventManager.instance.logButtonClick("shopitemfree","shoppopup");
        // FBInstantManager.instance.Show_RewardedVideoAsync("shoppopup","shopitemfree",(err,success)=>{
        //     if(err){

        //     }else{
        //         AudioManager2.instance.playSound_Coin_Appear();
        //         this.btnClaim.node.active = false;
        //         this.objNextTime.active = true;
        //         clientEvent.dispatchEvent(Constants.UPDATE_COIN_STARTPOS, this.startPos.worldPosition);
        
        //         clientEvent.dispatchEvent(Constants.SHOW_ADDCOIN, 100);
        //         LogEventManager.instance.logResourceEarned("currency","coin",100,"shop","watchad");
        //         localConfig.instance.setShopFreeLastTime();
        //         this.countDownToNextTime.initCountDownTime(localConfig.instance.SHOP_FREE_NEXT_TIME,()=>{this.setCountDownToNextTimeFinished()});
        //     }
        // });

        PokiSDKManager.instance.Show_RewardedVideoAsync("shoppopup","shopitemfree",(err,success)=>{
            if(err){

            }else{
                AudioManager2.instance.playSound_Coin_Appear();
                this.btnClaim.node.active = false;
                this.objNextTime.active = true;
                clientEvent.dispatchEvent(Constants.UPDATE_COIN_STARTPOS, this.startPos.worldPosition);
        
                clientEvent.dispatchEvent(Constants.SHOW_ADDCOIN, 100);
                LogEventManager.instance.logResourceEarned("currency","coin",100,"shop","watchad");
                localConfig.instance.setShopFreeLastTime();
                this.countDownToNextTime.initCountDownTime(localConfig.instance.SHOP_FREE_NEXT_TIME,()=>{this.setCountDownToNextTimeFinished()});
            }
        });
        
    }
    setCountDownToNextTimeFinished(){
        this.btnClaim.node.active = true;
        this.objNextTime.active = false;
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
