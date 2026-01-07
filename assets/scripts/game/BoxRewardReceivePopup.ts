
import { _decorator, Button, Component, instantiate, Label, Node, Prefab, sp, tween, UIOpacity, Vec3 } from 'cc';
import { BasePopup } from '../common/basePopup';
import { BoxRewardInfoGroup } from './BoxRewardInfoGroup';
import { GroupRewardDataInfo } from './info/ShopDataInfo';
import { BOOSTER_TYPE, BOX_STATE, BOX_TYPE, Constants, SHOP_ITEM_TYPE, TICKET_TYPE } from '../framework/constants';
import { ItemRewardReceive } from './ItemRewardReceive';
import { AudioManager2 } from '../framework/audioManager2';
import { clientEvent } from '../framework/clientEvent';
import { localConfig } from '../localConfig';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = BoxRewardReceivePopup
 * DateTime = Tue Oct 08 2024 14:24:48 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = BoxRewardReceivePopup.ts
 * FileBasenameNoExtension = BoxRewardReceivePopup
 * URL = db://assets/scripts/game/BoxRewardReceivePopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('BoxRewardReceivePopup')
export class BoxRewardReceivePopup extends BasePopup {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
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
    }

    onDisable(): void {
        super.onDisable();
        this.btnClaim.node.off(Button.EventType.CLICK, this.touchClaim, this);
    }
    boxType:BOX_TYPE = BOX_TYPE.NONE;
    groupRewardDataInfo:GroupRewardDataInfo;

    showDailyChallenge_BoxRewardReceivePopup(_boxType:BOX_TYPE,_groupRewardDataInfo:GroupRewardDataInfo){
        AudioManager2.instance.playPopupOpen2();
        this.txtTitle.string = "DAIILY CHALLENGE";
        this.nodeGroupContent.destroyAllChildren();
        this.boxType = _boxType;
        this.groupRewardDataInfo = _groupRewardDataInfo;
        let strAnimReady:string = this.getAnimationName_byState(BOX_STATE.READY);
        this.chestBox.setAnimation(0,strAnimReady,true);
        
        this.btnClaim.node.active = false;
        super.showPopup();
    }

    showPoup_ShowView_Finished(): void {
        super.showPoup_ShowView_Finished();
        this.setBoxReward_Open();
    }

    hidePopup(): void {
        this.hidePopup_Finished();
    }

    setBoxReward_Open(){
        
        let strAnimOpen:string = this.getAnimationName_byState(BOX_STATE.OPENING);
        this.chestBox.setAnimation(0,strAnimOpen,false);

        this.scheduleOnce(()=>{
            AudioManager2.instance.playSound_Chest_Open();
        },0.2);

        this.scheduleOnce(()=>{
            this.setBoxReward_Opened();
        },1.5);

        this.scheduleOnce(()=>{
            this.showRewards();
        },1);

    }

    setBoxReward_Opened(){
        let strAnimOpened: string = this.getAnimationName_byState(BOX_STATE.OPENED);
        this.chestBox.setAnimation(0, strAnimOpened, true);
        this.btnClaim.node.active = true;
        this.nodeClaim.setScale(new Vec3(0.8,0.8,0.8));
        this.nodeClaim_Opacity.opacity = 150;
        tween(this.nodeClaim).to(0.5,{scale: new Vec3(1,1,1)}, { easing: 'backOut',onComplete:()=>{

        }}).start();

        tween(this.nodeClaim_Opacity).to(0.4,{opacity: 255}, { easing: 'quadOut',onComplete:()=>{

        }}).start();
    }

    getAnimationName_byState(state:BOX_STATE){
        let strAnim:string = "box";
        if(state == BOX_STATE.READY){
            strAnim = "idle_box";
            if(this.boxType == BOX_TYPE.BOX_1){
                strAnim += "2";
            }else if(this.boxType == BOX_TYPE.BOX_2){
                strAnim += "3";
            }else if(this.boxType == BOX_TYPE.BOX_3){
                strAnim += "4";
            }else if(this.boxType == BOX_TYPE.BOX_4){
                strAnim += "5";
            }
        }else if(state == BOX_STATE.OPENING){
            if(this.boxType == BOX_TYPE.BOX_1){
                strAnim += "2";
            }else if(this.boxType == BOX_TYPE.BOX_2){
                strAnim += "3";
            }else if(this.boxType == BOX_TYPE.BOX_3){
                strAnim += "4";
            }else if(this.boxType == BOX_TYPE.BOX_4){
                strAnim += "5";
            }
        }else if(state == BOX_STATE.OPENED){
            if(this.boxType == BOX_TYPE.BOX_1){
                strAnim += "2_2";
            }else if(this.boxType == BOX_TYPE.BOX_2){
                strAnim += "3_2";
            }else if(this.boxType == BOX_TYPE.BOX_3){
                strAnim += "4_2";
            }else if(this.boxType == BOX_TYPE.BOX_4){
                strAnim += "5_2";
            }
        }
        console.log(strAnim);
        return strAnim;
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
        LogEventManager.instance.logButtonClick("claim","boxrewardreceivepopup");
        AudioManager2.instance.playSound_Coin_Appear();
        
        for (let i = 0; i < this.groupRewardDataInfo.items.length; i++) {
            if (this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.COIN) {
                clientEvent.dispatchEvent(Constants.SHOW_ADDCOIN, this.groupRewardDataInfo.items[i].value);
                LogEventManager.instance.logResourceEarned("currency","coin",this.groupRewardDataInfo.items[i].value,"daily_challenge","reward");
            } else if (this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_UNDO) {
                localConfig.instance.setBoosterCount(BOOSTER_TYPE.UNDO, localConfig.instance.getBoosterCount(BOOSTER_TYPE.UNDO) + this.groupRewardDataInfo.items[i].value);
                LogEventManager.instance.logResourceEarned("booster","undo",this.groupRewardDataInfo.items[i].value,"daily_challenge","reward");
            } else if (this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_SUGGEST) {
                localConfig.instance.setBoosterCount(BOOSTER_TYPE.SUGGEST, localConfig.instance.getBoosterCount(BOOSTER_TYPE.SUGGEST) + this.groupRewardDataInfo.items[i].value);
                LogEventManager.instance.logResourceEarned("booster","shuffle",this.groupRewardDataInfo.items[i].value,"daily_challenge","reward");
            } else if (this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_ADDCOL) {
                localConfig.instance.setBoosterCount(BOOSTER_TYPE.ADDCOL, localConfig.instance.getBoosterCount(BOOSTER_TYPE.ADDCOL) + this.groupRewardDataInfo.items[i].value);
                LogEventManager.instance.logResourceEarned("booster","addcol",this.groupRewardDataInfo.items[i].value,"daily_challenge","reward");
            } else if (this.groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.HEART_UNLIMITED) {
                clientEvent.dispatchEvent(Constants.SHOW_ADDHEART_UNLIMITED, this.groupRewardDataInfo.items[i].value);
                LogEventManager.instance.logResourceEarned("booster","heart_unlimited",this.groupRewardDataInfo.items[i].value,"daily_challenge","reward");
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
