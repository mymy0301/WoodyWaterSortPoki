
import { _decorator, Button, Component, instantiate, Label, Node, Prefab, tween, UIOpacity, Vec3 } from 'cc';
import { BasePopup } from '../common/basePopup';
import { GroupRewardDataInfo } from './info/ShopDataInfo';
import { BOOSTER_TYPE, Constants, SHOP_ITEM_TYPE, TICKET_TYPE } from '../framework/constants';
import { clientEvent } from '../framework/clientEvent';
import { ItemRewardReceive } from './ItemRewardReceive';
import { AudioManager2 } from '../framework/audioManager2';
import { localConfig } from '../localConfig';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = RewardReceivePopup
 * DateTime = Mon Oct 14 2024 01:00:30 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = RewardReceivePopup.ts
 * FileBasenameNoExtension = RewardReceivePopup
 * URL = db://assets/scripts/game/RewardReceivePopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('RewardReceivePopup')
export class RewardReceivePopup extends BasePopup {
    @property(Prefab)
    arrItemRewardReceivePrefabs:Prefab[] = [];

    @property(Label)
    txtTitle:Label = null;

    @property(Node)
    nodeGroupContent:Node = null;

    @property(Button)
    btnClaim:Button = null;

    @property(Node)
    nodeClaim:Node = null;

    @property(UIOpacity)
    nodeClaim_Opacity:UIOpacity = null;

    ticketGold_StartPos:Vec3 = new Vec3(0,0,0);
    ticketSilver_StartPos:Vec3 = new Vec3(0,0,0);
    coin_StartPos:Vec3 = new Vec3(0,0,0);

    onEnable(): void {
        super.onEnable();
        this.btnClaim.node.on(Button.EventType.CLICK, this.touchClaim, this);
    }

    onDisable(): void {
        super.onDisable();
        this.btnClaim.node.off(Button.EventType.CLICK, this.touchClaim, this);
    }

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    groupRewardDataInfo:GroupRewardDataInfo;

    title:string = "";
    showRewardReceivePopup(_title:string,_groupRewardDataInfo:GroupRewardDataInfo) {
        this.title = _title;
        AudioManager2.instance.playPopupOpen2();
        this.groupRewardDataInfo = _groupRewardDataInfo;
        this.txtTitle.string = _title;
        this.nodeGroupContent.destroyAllChildren();
        this.btnClaim.node.active = false;
        super.showPopup();
    }

    showPoup_ShowView_Finished(): void {
        super.showPoup_ShowView_Finished();
        this.showRewards();
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
            itemRewardReceive.showItem(this.groupRewardDataInfo.items[i].itemShopType,this.groupRewardDataInfo.items[i].value,0.2 * i);

            if(this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.COIN){
                clientEvent.dispatchEvent(Constants.UPDATE_COIN_STARTPOS,item.worldPosition);
            }else if(this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_UNDO){
                
            }else if(this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_SUGGEST){
                
            }else if(this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_ADDCOL){
                
            }else if(this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.HEART_UNLIMITED){
                clientEvent.dispatchEvent(Constants.UPDATE_HEART_STARTPOS,item.worldPosition);
            }
        }

        this.btnClaim.node.active = true;
        this.nodeClaim.setScale(new Vec3(0.5,0.5,0.5));
        this.nodeClaim_Opacity.opacity = 150;
        tween(this.nodeClaim).to(0.5,{scale: new Vec3(1,1,1)}, { easing: 'backOut',onComplete:()=>{

        }}).start();

        tween(this.nodeClaim_Opacity).to(0.4,{opacity: 255}, { easing: 'quadOut',onComplete:()=>{

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
        LogEventManager.instance.logButtonClick("claim","rewardreceivepopup");
        AudioManager2.instance.playSound_Coin_Appear();
        
        for(let i = 0;i < this.groupRewardDataInfo.items.length;i++){
            if(this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.COIN){
                clientEvent.dispatchEvent(Constants.SHOW_ADDCOIN,this.groupRewardDataInfo.items[i].value);
                LogEventManager.instance.logResourceEarned("currency","coin",this.groupRewardDataInfo.items[i].value,this.title.toLowerCase().toString(),"reward");
            }else if(this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_UNDO){
                localConfig.instance.setBoosterCount(BOOSTER_TYPE.UNDO,localConfig.instance.getBoosterCount(BOOSTER_TYPE.UNDO) + this.groupRewardDataInfo.items[i].value);
                LogEventManager.instance.logResourceEarned("booster","undo",this.groupRewardDataInfo.items[i].value,this.title.toLowerCase().toString(),"reward");
            }else if(this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_SUGGEST){
                localConfig.instance.setBoosterCount(BOOSTER_TYPE.SUGGEST,localConfig.instance.getBoosterCount(BOOSTER_TYPE.SUGGEST) + this.groupRewardDataInfo.items[i].value);
                LogEventManager.instance.logResourceEarned("booster","shuffle",this.groupRewardDataInfo.items[i].value,this.title.toLowerCase().toString(),"reward");
            }else if(this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_ADDCOL){
                localConfig.instance.setBoosterCount(BOOSTER_TYPE.ADDCOL,localConfig.instance.getBoosterCount(BOOSTER_TYPE.ADDCOL) + this.groupRewardDataInfo.items[i].value);
                LogEventManager.instance.logResourceEarned("booster","addcol",this.groupRewardDataInfo.items[i].value,this.title.toLowerCase().toString(),"reward");
            }else if(this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.HEART_UNLIMITED){
                clientEvent.dispatchEvent(Constants.SHOW_ADDHEART_UNLIMITED,this.groupRewardDataInfo.items[i].value);
                LogEventManager.instance.logResourceEarned("booster","heart_unlimited",this.groupRewardDataInfo.items[i].value,this.title.toLowerCase().toString(),"reward");
            }
        }

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
