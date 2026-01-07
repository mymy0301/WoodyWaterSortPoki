
import { _decorator, Button, Component, instantiate, Label, Node, Prefab, tween, UIOpacity, Vec3 } from 'cc';
import { BasePopup } from '../common/basePopup';
import { GroupRewardDataInfo } from './info/ShopDataInfo';
import { clientEvent } from '../framework/clientEvent';
import { BOOSTER_TYPE, Constants, SHOP_ITEM_TYPE, TICKET_TYPE } from '../framework/constants';
import { ItemRewardReceive } from './ItemRewardReceive';
import { AudioManager2 } from '../framework/audioManager2';
import { FBInstantManager } from '../common/FBInstantManager';
import { localConfig } from '../localConfig';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = RewardChestsPopup
 * DateTime = Thu Oct 24 2024 17:58:14 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = RewardChestsPopup.ts
 * FileBasenameNoExtension = RewardChestsPopup
 * URL = db://assets/scripts/game/RewardChestsPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('RewardChestsPopup')
export class RewardChestsPopup extends BasePopup {
    @property(Prefab)
    arrItemRewardReceivePrefabs:Prefab[] = [];

    @property(Label)
    txtTitle:Label = null;

    @property(Node)
    nodeGroupContent:Node = null;

    @property(Button)
    btnClaim:Button = null;

    @property(Label)
    txtClaim:Label;

    @property(Node)
    nodeClaim:Node = null;

    @property(UIOpacity)
    nodeClaim_Opacity:UIOpacity = null;



    @property(Node)
    iconAD:Node = null;

    @property(Button)
    btnNoThanks:Button;

    @property(Node)
    nodeNoThanks:Node = null;

    @property(UIOpacity)
    nodeNoThanks_Opacity:UIOpacity = null;


    ticketGold_StartPos:Vec3 = new Vec3(0,0,0);
    ticketSilver_StartPos:Vec3 = new Vec3(0,0,0);
    coin_StartPos:Vec3 = new Vec3(0,0,0);

    arrItemRewardReceives:ItemRewardReceive[] = [];

    onEnable(): void {
        super.onEnable();
        this.btnClaim.node.on(Button.EventType.CLICK, this.touchClaim, this);
        this.btnNoThanks.node.on(Button.EventType.CLICK, this.touchNoThanks, this);
    }

    onDisable(): void {
        super.onDisable();
        this.btnClaim.node.off(Button.EventType.CLICK, this.touchClaim, this);
        this.btnNoThanks.node.off(Button.EventType.CLICK, this.touchNoThanks, this);
    }

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    groupRewardDataInfo:GroupRewardDataInfo;
    indexChest:number = -1;
    showRewardChestsPopup(indexChest:number,_groupRewardDataInfo:GroupRewardDataInfo) {
        AudioManager2.instance.playPopupOpen2();
        this.indexChest = indexChest;
        this.groupRewardDataInfo = _groupRewardDataInfo;
        this.nodeGroupContent.destroyAllChildren();
        this.btnClaim.node.active = false;
        this.btnNoThanks.node.active = false;
        this.arrItemRewardReceives = [];
        this.unschedule(this.showButtons_Step1);
        this.unschedule(this.showButtons_Step2);
        super.showPopup();
    }

    showPoup_ShowView_Finished(): void {
        super.showPoup_ShowView_Finished();
        this.showRewards();

        this.schedule(this.showButtons_Step1,1,0,0.5);
    }

    showRewards(){
        AudioManager2.instance.playPopupReward();
        clientEvent.dispatchEvent(Constants.HOME_UPDATE_TARGET_POS);
        for(let i = 0;i < this.groupRewardDataInfo.items.length;i++){
            let item = instantiate(this.getItemRewardReceivePrefab(this.groupRewardDataInfo.items[i].itemShopType));
            item.parent = this.nodeGroupContent;
            let posX:number = (i - this.groupRewardDataInfo.items.length / 2 + 0.5) * 350;
            item.setPosition(new Vec3(posX,0,0));
            let itemRewardReceive:ItemRewardReceive = item.getComponent(ItemRewardReceive);
            itemRewardReceive.showItem(this.groupRewardDataInfo.items[i].itemShopType,this.groupRewardDataInfo.items[i].value,0.3 * i + 0.2);
            this.arrItemRewardReceives.push(itemRewardReceive);

            if(this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.COIN){
                clientEvent.dispatchEvent(Constants.UPDATE_COIN_STARTPOS,item.worldPosition);
            }else if(this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_UNDO){
                
            }else if(this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_SUGGEST){
                
            }else if(this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_ADDCOL){
                
            }else if(this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.HEART_UNLIMITED){
                clientEvent.dispatchEvent(Constants.UPDATE_HEART_STARTPOS,item.worldPosition);
            }
        }


        
    }

    showButtons_Step1(){
        if(this.indexChest == 0){
            this.iconAD.active = false;
            this.txtClaim.string = "Claim";
        }else{
            this.iconAD.active = true;
            this.txtClaim.string = "Claim x2";
            this.schedule(this.showButtons_Step2,1,0,2);
        }
        this.btnClaim.node.active = true;
        this.nodeClaim.setScale(new Vec3(0.5,0.5,0.5));
        this.nodeClaim_Opacity.opacity = 150;
        tween(this.nodeClaim).to(0.5,{scale: new Vec3(1,1,1)}, { easing: 'backOut',onComplete:()=>{

        }}).start();

        tween(this.nodeClaim_Opacity).to(0.4,{opacity: 255}, { easing: 'quadOut',onComplete:()=>{

        }}).start();
    }

    showButtons_Step2(){
        this.btnNoThanks.node.active = true;
        this.nodeNoThanks.setScale(new Vec3(0.5,0.5,0.5));
        this.nodeNoThanks_Opacity.opacity = 150;
        tween(this.nodeNoThanks).to(0.5,{scale: new Vec3(1,1,1)}, { easing: 'backOut',onComplete:()=>{

        }}).start();

        tween(this.nodeNoThanks_Opacity).to(0.4,{opacity: 255}, { easing: 'quadOut',onComplete:()=>{

        }}).start();
    }

    getItemRewardReceivePrefab(itemShopType:number){
        if(itemShopType == SHOP_ITEM_TYPE.COIN){
            return this.arrItemRewardReceivePrefabs[0];
        }else if(itemShopType == SHOP_ITEM_TYPE.BOOSTER_UNDO){
            return this.arrItemRewardReceivePrefabs[1];
        }else if(itemShopType == SHOP_ITEM_TYPE.BOOSTER_SUGGEST){
            return this.arrItemRewardReceivePrefabs[2];
        }else if(itemShopType == SHOP_ITEM_TYPE.BOOSTER_ADDCOL){
            return this.arrItemRewardReceivePrefabs[3];
        }else if(itemShopType == SHOP_ITEM_TYPE.HEART_UNLIMITED){
            return this.arrItemRewardReceivePrefabs[4];
        }
    }

    touchClaim(){
        if(this.indexChest == 0){
            LogEventManager.instance.logButtonClick("claim","rewardchestpopup");
            this.setClaimRewards(false);
        }else{
            LogEventManager.instance.logButtonClick("claimx2","rewardchestpopup");
            FBInstantManager.instance.Show_RewardedVideoAsync("rewardchestpopup","claimx2",(err, success) => {
                if (err) {
    
                } else {
                    this.setClaimRewards(true);
                }
            });
        }
       
    }

    setClaimRewards(isX2:boolean){
        AudioManager2.instance.playSound_Coin_Appear();
        for(let i = 0;i < this.arrItemRewardReceives.length;i++){
            this.arrItemRewardReceives[i].hideItem();
        }
        if(isX2){
            for(let i = 0;i < this.groupRewardDataInfo.items.length;i++){
                this.groupRewardDataInfo.items[i].value *= 2;
            }
        }
        for(let i = 0;i < this.groupRewardDataInfo.items.length;i++){
            if(this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.COIN){
                clientEvent.dispatchEvent(Constants.SHOW_ADDCOIN,this.groupRewardDataInfo.items[i].value);
                LogEventManager.instance.logResourceEarned("currency","coin",this.groupRewardDataInfo.items[i].value,"level_chests","reward");
            }else if(this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_UNDO){
                localConfig.instance.setBoosterCount(BOOSTER_TYPE.UNDO,localConfig.instance.getBoosterCount(BOOSTER_TYPE.UNDO) + this.groupRewardDataInfo.items[i].value);
                LogEventManager.instance.logResourceEarned("booster","undo",this.groupRewardDataInfo.items[i].value,"level_chests","reward");
            }else if(this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_SUGGEST){
                localConfig.instance.setBoosterCount(BOOSTER_TYPE.SUGGEST,localConfig.instance.getBoosterCount(BOOSTER_TYPE.SUGGEST) + this.groupRewardDataInfo.items[i].value);
                LogEventManager.instance.logResourceEarned("booster","shuffle",this.groupRewardDataInfo.items[i].value,"level_chests","reward");
            }else if(this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_ADDCOL){
                localConfig.instance.setBoosterCount(BOOSTER_TYPE.ADDCOL,localConfig.instance.getBoosterCount(BOOSTER_TYPE.ADDCOL) + this.groupRewardDataInfo.items[i].value);
                LogEventManager.instance.logResourceEarned("booster","addcol",this.groupRewardDataInfo.items[i].value,"level_chests","reward");
            }else if(this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.HEART_UNLIMITED){
                clientEvent.dispatchEvent(Constants.SHOW_ADDHEART_UNLIMITED,this.groupRewardDataInfo.items[i].value);
                LogEventManager.instance.logResourceEarned("booster","heart_unlimited",this.groupRewardDataInfo.items[i].value,"level_chests","reward");
            }
        }

        this.hidePopup();
    }

    hidePopup(): void {
        AudioManager2.instance.playPopupClose();
        this.lockGroup.active = true;
        this.tweenOpacityPopup = tween(this.popup_UIOpacity).to(0.2,{opacity:0},{easing:'quadOut',onComplete:()=>{

        }}).start();

        this.tweenOpacityBG = tween(this.bgOpacity).to(0.3,{opacity:0},{easing:'quadOut',onComplete:()=>{       
            this.hidePopup_Finished();
        }}).start();
    }

    touchNoThanks(){
        LogEventManager.instance.logButtonClick("nothanks","rewardchestpopup");
        this.setClaimRewards(false);
        this.hidePopup();
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
