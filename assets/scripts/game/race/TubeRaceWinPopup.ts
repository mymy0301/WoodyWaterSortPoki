
import { _decorator, Button, Component, instantiate, Label, Node, Prefab, sp, tween, UIOpacity, Vec3 } from 'cc';
import { BOOSTER_TYPE, BOX_TYPE, Constants, SHOP_ITEM_TYPE, TICKET_TYPE } from '../../framework/constants';
import { GroupRewardDataInfo } from '../info/ShopDataInfo';
import { localConfig } from '../../localConfig';
import { BasePopup } from '../../common/basePopup';
import { AudioManager2 } from '../../framework/audioManager2';
import { clientEvent } from '../../framework/clientEvent';
import { ItemRewardReceive } from '../ItemRewardReceive';
import { LogEventManager } from '../../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TubeRaceWinPopup
 * DateTime = Mon Nov 11 2024 06:15:36 GMT+0700 (Indochina Time)
 * Author = MyTom2k17
 * FileBasename = TubeRaceWinPopup.ts
 * FileBasenameNoExtension = TubeRaceWinPopup
 * URL = db://assets/scripts/game/race/TubeRaceWinPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('TubeRaceWinPopup')
export class TubeRaceWinPopup extends BasePopup {
    @property(Prefab)
    arrItemRewardReceivePrefabs:Prefab[] = [];

    @property(Label)
    txtTitle:Label = null;

    @property(Node)
    nodeGroupContent:Node = null;

    @property(sp.Skeleton)
    chestBox:sp.Skeleton = null;

    @property(Button)
    btnClaim:Button = null;

    @property(Node)
    nodeClaim:Node = null;

    @property(UIOpacity)
    nodeClaim_Opacity:UIOpacity = null;

    @property(Button)
    btnOpen:Button = null;

    @property(Node)
    nodeOpen:Node = null;

    @property(UIOpacity)
    nodeOpen_Opacity:UIOpacity = null;

    ticketGold_StartPos:Vec3 = new Vec3(0,0,0);
    ticketSilver_StartPos:Vec3 = new Vec3(0,0,0);
    coin_StartPos:Vec3 = new Vec3(0,0,0);

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    onEnable(): void {
        super.onEnable();
        this.btnClaim.node.on(Button.EventType.CLICK, this.touchClaim, this);
        this.btnOpen.node.on(Button.EventType.CLICK, this.touchOpen, this);
    }

    onDisable(): void {
        super.onDisable();
        this.btnClaim.node.off(Button.EventType.CLICK, this.touchClaim, this);
        this.btnOpen.node.off(Button.EventType.CLICK, this.touchOpen, this);
    }
    indexRank:number = 0;
    groupRewardDataInfo:GroupRewardDataInfo = null;

    showTubeRaceWinPopup(_indexRank:number){
        AudioManager2.instance.playPopupOpen2();
        this.indexRank = _indexRank;
        this.txtTitle.string = "TUBE  RACE";
        this.nodeGroupContent.destroyAllChildren();
        this.groupRewardDataInfo = localConfig.instance.arrRace_GroupRewardDataInfos[_indexRank];
        this.chestBox.node.active = false;
        this.chestBox.node.setPosition(new Vec3(0,-100,0));
        this.btnClaim.node.active = false;
        this.btnOpen.node.active = false;
        super.showPopup();
    }

    showPoup_ShowView(): void {
        this.tweenOpacityBG = tween(this.bgOpacity).to(0.2,{opacity:255},{easing:'quadOut',onComplete:()=>{       

        }}).start();

        this.tweenOpacityPopup = tween(this.popup_UIOpacity).to(0.2,{opacity:255},{easing:'quadOut',onComplete:()=>{
            this.showPoup_ShowView_Finished();
        }}).start();
    }

    showPoup_ShowView_Finished(): void {
        super.showPoup_ShowView_Finished();
        this.lockGroup.active = true;
        this.setBoxReward_Appear();
    }

    hidePopup(): void {
        this.hidePopup_Finished();
    }

    setBoxReward_Appear(){
        this.chestBox.node.active = true;
        let strAnimAppear:string = this.getAnimation_Appear_byIndexRank(this.indexRank + 1);
        this.chestBox.setAnimation(0,strAnimAppear,false);

        this.scheduleOnce(()=>{
            this.setBoxReward_Touch();
        },0.75);

    }

    setBoxReward_Touch(){
        let strAnimTouch:string = this.getAnimation_Touch_byIndexRank(this.indexRank + 1);
        this.chestBox.setAnimation(0,strAnimTouch,true);

        this.btnOpen.node.active = true;
        this.nodeOpen.setScale(new Vec3(0.8,0.8,0.8));
        this.nodeOpen_Opacity.opacity = 150;

        tween(this.nodeOpen).to(0.5,{scale: new Vec3(1,1,1)}, { easing: 'backOut',onComplete:()=>{
            this.lockGroup.active = false;
        }}).start();

        tween(this.nodeOpen_Opacity).to(0.4,{opacity: 255}, { easing: 'quadOut',onComplete:()=>{

        }}).start();
    }


    touchOpen(){
        LogEventManager.instance.logButtonClick("open","tuberacewinpopup");
        let timeDelay:number = 0.1;
        this.btnOpen.node.active = false;
        let strAnimOpening:string = this.getAnimation_Opening_byIndexRank(this.indexRank + 1);
        
        this.scheduleOnce(()=>{
            this.chestBox.setAnimation(0,strAnimOpening,false);
        },timeDelay);
        
        this.scheduleOnce(()=>{
            tween(this.chestBox.node).to(0.3,{position: new Vec3(0,-430,0)}, { easing: 'quadOut',onComplete:()=>{
            
            }}).start();
        },0.5 + timeDelay);

        this.scheduleOnce(()=>{
            AudioManager2.instance.playSound_Chest_Open();
            
        },0.2 + timeDelay);

        this.scheduleOnce(()=>{
            this.showRewards();
        },0.8 + timeDelay);

        this.scheduleOnce(()=>{
            this.setBoxReward_Opened();
        },1.3 + timeDelay);
    }

    setBoxReward_Opened(){
        let strAnimOpened: string = this.getAnimation_Opened_byIndexRank(this.indexRank + 1);
        this.chestBox.setAnimation(0, strAnimOpened, true);
        this.btnClaim.node.active = true;
        this.nodeClaim.setScale(new Vec3(0.8,0.8,0.8));
        this.nodeClaim_Opacity.opacity = 150;
        tween(this.nodeClaim).to(0.5,{scale: new Vec3(1,1,1)}, { easing: 'backOut',onComplete:()=>{

        }}).start();

        tween(this.nodeClaim_Opacity).to(0.4,{opacity: 255}, { easing: 'quadOut',onComplete:()=>{

        }}).start();
    }



    showRewards(){
        clientEvent.dispatchEvent(Constants.HOME_UPDATE_TARGET_POS);
        for(let i = 0;i < this.groupRewardDataInfo.items.length;i++){
            let item = instantiate(this.getItemRewardReceivePrefab(this.groupRewardDataInfo.items[i].itemShopType));
            item.parent = this.nodeGroupContent;
            let posX:number = (i - this.groupRewardDataInfo.items.length / 2 + 0.5) * 350;
            item.setPosition(new Vec3(posX,0,0));
            let itemRewardReceive:ItemRewardReceive = item.getComponent(ItemRewardReceive);
            itemRewardReceive.showItem(this.groupRewardDataInfo.items[i].itemShopType,this.groupRewardDataInfo.items[i].value,0.1 * i);

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
        LogEventManager.instance.logButtonClick("claim","tuberacewinpopup");
        AudioManager2.instance.playSound_Coin_Appear();
        
       for (let i = 0; i < this.groupRewardDataInfo.items.length; i++) {
           if (this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.COIN) {
               clientEvent.dispatchEvent(Constants.SHOW_ADDCOIN, this.groupRewardDataInfo.items[i].value);
               LogEventManager.instance.logResourceEarned("currency","coin",this.groupRewardDataInfo.items[i].value,"race","reward");
           } else if (this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_UNDO) {
               localConfig.instance.setBoosterCount(BOOSTER_TYPE.UNDO, localConfig.instance.getBoosterCount(BOOSTER_TYPE.UNDO) + this.groupRewardDataInfo.items[i].value);
               LogEventManager.instance.logResourceEarned("booster","undo",this.groupRewardDataInfo.items[i].value,"race","reward");
           } else if (this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_SUGGEST) {
               localConfig.instance.setBoosterCount(BOOSTER_TYPE.SUGGEST, localConfig.instance.getBoosterCount(BOOSTER_TYPE.SUGGEST) + this.groupRewardDataInfo.items[i].value);
               LogEventManager.instance.logResourceEarned("booster","shuffle",this.groupRewardDataInfo.items[i].value,"race","reward");
           } else if (this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_ADDCOL) {
               localConfig.instance.setBoosterCount(BOOSTER_TYPE.ADDCOL, localConfig.instance.getBoosterCount(BOOSTER_TYPE.ADDCOL) + this.groupRewardDataInfo.items[i].value);
               LogEventManager.instance.logResourceEarned("booster","addcol",this.groupRewardDataInfo.items[i].value,"race","reward");
           } else if (this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.HEART_UNLIMITED) {
               clientEvent.dispatchEvent(Constants.SHOW_ADDHEART_UNLIMITED, this.groupRewardDataInfo.items[i].value);
               LogEventManager.instance.logResourceEarned("booster","heart_unlimited",this.groupRewardDataInfo.items[i].value,"race","reward");
           }
       }
        clientEvent.dispatchEvent(Constants.TUBERACE_CLAIM_FINISHED);
        this.hidePopup();
    }


    getAnimation_Appear_byIndexRank(indexRank:number){
        let strAnim = "appear";
        if(indexRank == 1){
            strAnim += "1";
        }else if(indexRank == 2){
            strAnim += "2";
        }else if(indexRank == 3){
            strAnim += "3";
        }
        return strAnim;
    }

    getAnimation_Touch_byIndexRank(indexRank:number){
        let strAnim = "touch_to_open";
        if(indexRank == 1){
            strAnim += "1";
        }else if(indexRank == 2){
            strAnim += "2";
        }else if(indexRank == 3){
            strAnim += "3";
        }
        return strAnim;
    }

    getAnimation_Opening_byIndexRank(indexRank:number){
        let strAnim = "opening";
        if(indexRank == 1){
            strAnim += "1";
        }else if(indexRank == 2){
            strAnim += "2";
        }else if(indexRank == 3){
            strAnim += "3";
        }
        return strAnim;
    }

    getAnimation_Opened_byIndexRank(indexRank:number){
        let strAnim = "opened";
        if(indexRank == 1){
            strAnim += "1";
        }else if(indexRank == 2){
            strAnim += "2";
        }else if(indexRank == 3){
            strAnim += "3";
        }
        return strAnim;
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
