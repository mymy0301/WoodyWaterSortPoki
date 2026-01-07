
import { _decorator, Button, Component, instantiate, Label, Node, Prefab, tween, Tween, Vec3 } from 'cc';
import { BOOSTER_TYPE, Constants, SHOP_ITEM_TYPE, SHOP_PACK_TYPE, TICKET_TYPE } from '../../framework/constants';
import { localConfig } from '../../localConfig';
import { PassRewardDataInfo, RewardDataInfo } from '../info/ShopDataInfo';
import Utils from '../../core/utils/Utils';
import { ShopItemPopup } from '../ShopItemPopup';
import { ItemRewardPass } from './ItemRewardPass';
import { ItemScrollView } from '../../common/ItemScrollView';
import { clientEvent } from '../../framework/clientEvent';
import { AudioManager2 } from '../../framework/audioManager2';
import { FBInstantManager } from '../../common/FBInstantManager';
import { configuration } from '../../framework/configuration';
import { LogEventManager } from '../../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemMasterPass
 * DateTime = Thu Nov 14 2024 14:28:06 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemMasterPass.ts
 * FileBasenameNoExtension = ItemMasterPass
 * URL = db://assets/scripts/game/masterpass/ItemMasterPass.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemMasterPass')
export class ItemMasterPass extends ItemScrollView {
    indexPass:number = 0;
    passRewardDataInfo:PassRewardDataInfo = null;

    @property(Prefab)
    arrItemPrefabs:Prefab[] = [];

    @property(Label)
    txtIndexPass:Label = null;

    @property(Node)
    passProgress:Node = null;

    @property(Node)
    nodeItemFree:Node = null;

    @property(Node)
    nodeItemFreeRecive:Node = null;

    @property(Button)
    btnFree:Button = null;

    @property(Node)
    nodeClaimFree:Node = null;

    @property(Node)
    nodeLockFree:Node = null;

    @property(Node)
    nodeItemPass:Node = null;

    @property(Node)
    nodeItemPassRecive:Node = null;

    @property(Button)
    btnPass:Button = null;

    @property(Node)
    nodeClaimPass:Node = null;

    @property(Node)
    nodeLockPass:Node = null;

    tweenLock:Tween<{}> = null;

    protected onEnable(): void {
        this.btnFree.node.on(Constants.CLICK,this.touchFree,this);
        this.btnPass.node.on(Constants.CLICK,this.touchPass,this);

        clientEvent.on(Constants.PASS_ACTIVATED_UPDATE,this.setPassActivated,this);
    }

    protected onDisable(): void {
        this.btnFree.node.off(Constants.CLICK,this.touchFree,this);
        this.btnPass.node.off(Constants.CLICK,this.touchPass,this);

        clientEvent.off(Constants.PASS_ACTIVATED_UPDATE,this.setPassActivated,this);
    }

    init(_indexPass:number){
        // console.log(_indexPass);
        super.init(_indexPass,0);
        
        this.indexPass = _indexPass;
        this.nodeItemFree.removeAllChildren();
        this.nodeItemPass.removeAllChildren();
        this.nodeItemFreeRecive.removeAllChildren();
        this.nodeItemPassRecive.removeAllChildren();
        
        this.passRewardDataInfo = localConfig.instance.arrPassRewardDataInfos[this.indexPass];
        // console.log(this.passRewardDataInfo);
        let itemFree = instantiate(this.getItemPrefabbyShopItemType(this.passRewardDataInfo.items[0].itemShopType));
        itemFree.parent = this.nodeItemFree;
        let itemFreeReward:ItemRewardPass = itemFree.getComponent(ItemRewardPass);
        itemFreeReward.initRewardPass(this.passRewardDataInfo.items[0].itemShopType,false,this.passRewardDataInfo.items[0].value);

        let itemPass = instantiate(this.getItemPrefabbyShopItemType(this.passRewardDataInfo.itemsPass[0].itemShopType));
        itemPass.parent = this.nodeItemPass;
        let itemPassReward:ItemRewardPass = itemPass.getComponent(ItemRewardPass);
        itemPassReward.initRewardPass(this.passRewardDataInfo.itemsPass[0].itemShopType,false,this.passRewardDataInfo.itemsPass[0].value);

        this.txtIndexPass.string = `${this.indexPass}`;
        this.btnFree.interactable = true;
        this.btnPass.interactable = true;
        this.passProgress.active = false;
        this.nodeLockFree.active = false;
        this.nodeLockPass.active = true;

        this.nodeClaimFree.active = false;
        this.nodeClaimPass.active = false;

        // console.log(this.indexPass);
        // console.log(localConfig.instance.passIndexAvailable);
        // console.log(localConfig.instance.arrPassFreeClaims);
        if(this.indexPass <= localConfig.instance.passIndexAvailable){
            this.passProgress.active = true;
            if(localConfig.instance.arrPassFreeClaims.indexOf(this.indexPass) == -1){
                this.nodeClaimFree.active = true;
            }else{
                this.nodeClaimFree.active = false;
                this.btnFree.interactable = false;
            }

            if(localConfig.instance.passActivated){
                this.nodeLockPass.active = false;
                if(localConfig.instance.arrPassMasterClaims.indexOf(this.indexPass) == -1){
                    this.nodeClaimPass.active = true;
                }else{
                    this.nodeClaimPass.active = false;
                    this.btnPass.interactable = false;
                }
            }
        }else{
            this.passProgress.active = false;
            this.nodeLockFree.active = true;
            this.nodeLockPass.active = true;
        }


    }

    setPassActivated(){
        if(this.indexPass <= localConfig.instance.passIndexAvailable){
            if(localConfig.instance.passActivated){
                this.nodeLockPass.active = false;
                if(localConfig.instance.arrPassMasterClaims.indexOf(this.indexPass) == -1){
                    this.nodeClaimPass.active = true;
                }else{
                    this.nodeClaimPass.active = false;
                    this.btnPass.interactable = false;
                }
            }
        }
    }

    getItemPrefabbyShopItemType(shopItemType:SHOP_ITEM_TYPE){
        if(shopItemType == SHOP_ITEM_TYPE.COIN){
            return this.arrItemPrefabs[0];
        }else if(shopItemType == SHOP_ITEM_TYPE.BOOSTER_UNDO){
            return this.arrItemPrefabs[1];
        }else if(shopItemType == SHOP_ITEM_TYPE.BOOSTER_SUGGEST){
            return this.arrItemPrefabs[2];
        }else if(shopItemType == SHOP_ITEM_TYPE.BOOSTER_ADDCOL){
            return this.arrItemPrefabs[3];
        }else if(shopItemType == SHOP_ITEM_TYPE.HEART_UNLIMITED){
            return this.arrItemPrefabs[4];
        }
    }

    touchFree(){
        LogEventManager.instance.logButtonClick("free","masterpasspopup");
        // console.log("touchFree");
        if(this.indexPass <= localConfig.instance.passIndexAvailable){
            this.nodeClaimFree.active = false;
            this.btnFree.interactable = false;
            this.setReciveReward(false,this.passRewardDataInfo.items);
            localConfig.instance.addPassFreeClaim(this.indexPass);
        }else{
            this.showAnimLock(this.nodeLockFree);
            if(this.indexPass <= localConfig.instance.passIndexAvailable){
                clientEvent.dispatchEvent(Constants.SHOW_MASSTERPASS_ACTIVATE_POPUP);
            }
        }
    }

    

    touchPass(){
        LogEventManager.instance.logButtonClick("pass","masterpasspopup");
        // console.log("touchPass");
        if(localConfig.instance.passActivated){
            if(this.indexPass <= localConfig.instance.passIndexAvailable){
                this.nodeClaimPass.active = false;
                this.btnPass.interactable = false;
                this.setReciveReward(true,this.passRewardDataInfo.itemsPass);
                localConfig.instance.addPassMasterClaim(this.indexPass);
            }else{
                
                this.showAnimLock(this.nodeLockPass);
            }
        }else{
            if(FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(SHOP_PACK_TYPE.MASTER_PASS))){
                if(this.indexPass <= localConfig.instance.passIndexAvailable){
                    clientEvent.dispatchEvent(Constants.SHOW_MASSTERPASS_ACTIVATE_POPUP);
                }else{
                    this.showAnimLock(this.nodeLockPass);
                }
            }else{
                this.showAnimLock(this.nodeLockPass);
            }
            
        }
        
    }

    showAnimLock(nodeLock:Node){
        AudioManager2.instance.playNotification();
        nodeLock.angle = 0;
        if (this.tweenLock) {
            this.tweenLock.stop();
        }
        this.tweenLock = tween(nodeLock)
            .to(0.025, { angle: 20 })
            .to(0.05, { angle: -20 })
            .to(0.05, { angle: 20 })
            .to(0.05, { angle: -20 })
            .to(0.05, { angle: 20 })
            .to(0.05, { angle: 0 })
            .union().start();
    }


    setReciveReward(isPass:boolean,items:RewardDataInfo[]){
        AudioManager2.instance.playGetReward();
        for(let i=0 ; i < items.length ; i++){
            this.showItemRewardClaimed(isPass,items[i]);
            if(items[i].itemShopType == SHOP_ITEM_TYPE.COIN){
                localConfig.instance.setCoin(localConfig.instance.currCoin + items[i].value);
                LogEventManager.instance.logResourceEarned("currency","coin",items[i].value,"masterpass","reward");
            }else if(items[i].itemShopType == SHOP_ITEM_TYPE.HEART_UNLIMITED){
                clientEvent.dispatchEvent(Constants.HEART_UNLIMITED_UPDATE,items[i].value);
                LogEventManager.instance.logResourceEarned("booster","heart_unlimited",items[i].value,"masterpass","reward");
            }else if(items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_UNDO){
                localConfig.instance.setBoosterCount(BOOSTER_TYPE.UNDO,localConfig.instance.getBoosterCount(BOOSTER_TYPE.UNDO) + items[i].value);
                LogEventManager.instance.logResourceEarned("booster","undo",items[i].value,"masterpass","reward");
            }else if(items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_SUGGEST){
                localConfig.instance.setBoosterCount(BOOSTER_TYPE.SUGGEST,localConfig.instance.getBoosterCount(BOOSTER_TYPE.SUGGEST) + items[i].value);
                LogEventManager.instance.logResourceEarned("booster","shuffle",items[i].value,"masterpass","reward");
            }else if(items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_ADDCOL){
                localConfig.instance.setBoosterCount(BOOSTER_TYPE.ADDCOL,localConfig.instance.getBoosterCount(BOOSTER_TYPE.ADDCOL) + items[i].value);
                LogEventManager.instance.logResourceEarned("booster","addcol",items[i].value,"masterpass","reward");
            }
        }
    }

    showItemRewardClaimed(isPass:boolean,rewardDataInfo:RewardDataInfo){
        let item = instantiate(this.getItemPrefabbyShopItemType(rewardDataInfo.itemShopType));
        if(isPass){
            item.parent = this.nodeItemPassRecive;
        }else{
            item.parent = this.nodeItemFreeRecive;
        }
        let itemRewardPass:ItemRewardPass = item.getComponent(ItemRewardPass);
        itemRewardPass.initRewardPassRecive(rewardDataInfo.value);
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
