
import { _decorator, Component, Node, tween, Tween, UIOpacity, Widget } from 'cc';
import { clientEvent } from '../framework/clientEvent';
import { Constants, IAP_PLACEMENT_TYPE, IAP_SHOW_TYPE, SHOP_PACK_TYPE, TICKET_TYPE } from '../framework/constants';
import { localConfig } from '../localConfig';
import { ItemShopVIP } from './ItemShopVIP';
import { FBInstantManager } from '../common/FBInstantManager';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ShopGroup
 * DateTime = Wed Sep 25 2024 16:54:45 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ShopGroup.ts
 * FileBasenameNoExtension = ShopGroup
 * URL = db://assets/scripts/game/ShopGroup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ShopGroup')
export class ShopGroup extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Widget)
    groupAllTopWidget:Widget;

    @property(Widget)
    groupAllContentWidget:Widget;

    @property(Widget)
    scrollViewWidget:Widget;
    
    @property(UIOpacity)
    groupOpacity:UIOpacity = null;

    tweenGroup:Tween<{}> = null;

    @property(Node)
    targetCoin:Node = null;

    @property(Node)
    targetHeart:Node = null;

    @property(Node)
    groupPackCoin1:Node = null;

    @property(Node)
    groupPackCoin2:Node = null;

    @property(Node)
    groupRemoveAd:Node = null;

    @property(Node)
    groupBundle:Node = null;

    @property(Node)
    groupSuperBundle:Node = null;

    @property(Node)
    groupMegaBundle:Node = null;

    @property(Node)
    groupUltraBundle:Node = null;

    protected onEnable(): void {
        clientEvent.on(Constants.STARTER_PACK_UPDATE,this.showInfo,this);
        clientEvent.dispatchEvent(Constants.UPDATE_COIN_TARGETPOS,this.targetCoin.worldPosition);
        clientEvent.dispatchEvent(Constants.UPDATE_HEART_TARGETPOS,this.targetHeart.worldPosition);
        clientEvent.on(Constants.IAP_INIT_SUCCESS,this.showInfo,this);
        this.showInfo();
    }

    protected onDisable(): void {
        clientEvent.off(Constants.STARTER_PACK_UPDATE,this.showInfo,this);
        this.contentGroup.active = false;
        clientEvent.off(Constants.IAP_INIT_SUCCESS,this.showInfo,this);
    }


    showInfo(){
        if(FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(SHOP_PACK_TYPE.COIN_1))) {
            this.groupPackCoin1.active = true;
            this.groupPackCoin2.active = true;
        } else {
            this.groupPackCoin1.active = false;
            this.groupPackCoin2.active = false;
        }

        if(FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(SHOP_PACK_TYPE.BUNDLE_1))) {
            this.groupBundle.active = true;
        } else {
            this.groupBundle.active = false;
        }

        if(FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(SHOP_PACK_TYPE.REMOVE_AD))) {
            this.groupRemoveAd.active = true;
        } else {
            this.groupRemoveAd.active = false;
        }

        if(FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(SHOP_PACK_TYPE.BUNDLE_3))) {
            this.groupSuperBundle.active = true;
        } else {    
            this.groupSuperBundle.active = false;
        }

        if(FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(SHOP_PACK_TYPE.BUNDLE_4))) {
            this.groupMegaBundle.active = true;
        } else {
            this.groupMegaBundle.active = false;
        }

        if(FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(SHOP_PACK_TYPE.BUNDLE_5))) {
            this.groupUltraBundle.active = true;
        } else {
            this.groupUltraBundle.active = false;
        }
    }

    initAllTop(){
        // console.error("initAllTop ShopGroup");
        if(localConfig.instance.isMobile){
            
            let posY = (localConfig.instance.scaleBG - 1) * localConfig.instance.DEFAULT_H / 2  ;
            // console.log("posY:"+posY);
            if(posY <= 0){
                this.groupAllTopWidget.top = 0;
                this.groupAllContentWidget.top = 0;
                this.scrollViewWidget.bottom = 372.25;
                return;
            }
            this.groupAllTopWidget.top = -posY;
            this.groupAllContentWidget.top = -posY;
            this.scrollViewWidget.bottom = 372.25 - posY;
            // console.log("this.scrollViewWidget.bottom:"+this.scrollViewWidget.bottom);
        }else{
            this.groupAllTopWidget.top = 0;
            this.groupAllContentWidget.top = 0;
            this.scrollViewWidget.bottom = 372.25;
        }
    }

    start () {
        // [3]
        this.initAllTop();
    }

    // update (deltaTime: number) {
    //     // [4]
    // 
    @property(Node)
    contentGroup:Node = null;
    showGroup(){
        LogEventManager.instance.logIAPShow(localConfig.instance.getIAP_PlacementType(IAP_PLACEMENT_TYPE.HOME_SHOP),localConfig.instance.getIAP_ShowType(IAP_SHOW_TYPE.SHOP),"null");
        this.contentGroup.active = true;
        // if(this.tweenGroup != null){    
        //     this.tweenGroup.stop();
        // }
        // this.tweenGroup = tween(this.groupOpacity).to(0.2,{opacity:255},{easing:'linear',onComplete:()=>{}}).start();
    }

    setShow(){
        if(this.tweenGroup != null){    
            this.tweenGroup.stop();
        }
        this.tweenGroup = tween(this.groupOpacity).to(0.2,{opacity:255},{easing:'linear',onComplete:()=>{}}).start();
    }

    setHide(){
        this.contentGroup.active = false;
        if(this.tweenGroup != null){
            this.tweenGroup.stop();
        }
        this.tweenGroup = tween(this.groupOpacity).to(0.2,{opacity:0},{easing:'linear',onComplete:()=>{
            
        }}).start();
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
