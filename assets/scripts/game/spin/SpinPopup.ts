
import { _decorator, AnimationComponent, Button, Component, instantiate, Label, Node, Prefab, tween, Tween, Vec3 } from 'cc';
import { BasePopup } from '../../common/basePopup';
import { ItemSpin } from './ItemSpin';
import { Constants, SHOP_ITEM_TYPE, TICKET_TYPE } from '../../framework/constants';
import { localConfig } from '../../localConfig';
import { lodash } from '../../framework/lodash';
import { clientEvent } from '../../framework/clientEvent';
import { AudioManager2 } from '../../framework/audioManager2';
import { FBInstantManager } from '../../common/FBInstantManager';
import Utils from '../../core/utils/Utils';
import { GroupRewardDataInfo } from '../info/ShopDataInfo';
import { LogEventManager } from '../../common/LogEventManager';
import { PokiSDKManager } from '../../common/PokiSDKManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = SpinPopup
 * DateTime = Tue Dec 03 2024 15:51:10 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = SpinPopup.ts
 * FileBasenameNoExtension = SpinPopup
 * URL = db://assets/scripts/game/spin/SpinPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('SpinPopup')
export class SpinPopup extends BasePopup {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Node)
    spinGroup:Node = null;

    @property(Node)
    contentGroup:Node = null;

    @property(Prefab)
    arrItemSpinPrefabs:Prefab[] = [];

    arrItemSpins:ItemSpin[] = [];

    @property(Button)
    btnFreeSpin:Button = null;

    @property(Button)
    btnSpinCoin:Button = null;

    @property(Button)
    btnSpinAd:Button = null;

    @property(Node)
    spinAd_disable:Node = null;

    @property(Label)
    txtSpinAdCount:Label = null;



    @property(Node)
    objFree:Node = null;

    @property(Node)
    objNextTime:Node = null;

    @property(AnimationComponent)
    lightAnimation:AnimationComponent = null;

    @property(Node)
    targetCoin:Node = null;

    onEnable(): void {
        super.onEnable();
        this.btnFreeSpin.node.on(Constants.CLICK, this.touchFreeSpin, this);
        this.btnSpinCoin.node.on(Constants.CLICK, this.touchSpinCoin, this);    
        this.btnSpinAd.node.on(Constants.CLICK, this.touchSpinAd, this);
        clientEvent.dispatchEvent(Constants.UPDATE_COIN_TARGETPOS,this.targetCoin.worldPosition);
    }

    onDisable(): void {
        super.onDisable();
        this.btnFreeSpin.node.off(Constants.CLICK, this.touchFreeSpin, this);
        this.btnSpinCoin.node.off(Constants.CLICK, this.touchSpinCoin, this);
        this.btnSpinAd.node.off(Constants.CLICK, this.touchSpinAd, this);
    }

    showSpinPopup(){
        this.spinGroup.setRotationFromEuler(new Vec3(0,0,0));
        if(this.arrItemSpins.length > 0){
            for(let i = 0; i < this.arrItemSpins.length; i++){
                this.arrItemSpins[i].reset();
                this.arrItemSpins[i].node.active = false;

            }
        }else{
            this.contentGroup.destroyAllChildren();
        }
        this.objFree.active = false;
        this.objNextTime.active = false;
        this.btnFreeSpin.node.active = false;
        this.btnSpinCoin.node.active = false;
        this.btnSpinAd.node.active = false;
        this.spinAd_disable.active = false;
        this.btnClose.node.active = false;
        this.btnClose2.node.active = false;
        this.lightAnimation.play("light_wait");
        super.showPopup();
    }

    arrRatios:number[] = [];
    showPoup_ShowView_Finished(): void {
        super.showPoup_ShowView_Finished();
        for(let i = 0; i < localConfig.instance.arrSpinRewardDataInfos.length; i++){
            this.arrRatios.push(localConfig.instance.arrSpinRewardDataInfos[i].ratio);
        }
        // console.log("this.arrRatios",this.arrRatios);
        this.lockGroup.active = true;
        if(this.arrItemSpins.length > 0){
            for(let i = 0; i < this.arrItemSpins.length; i++){
                this.arrItemSpins[i].node.active = true;
                this.arrItemSpins[i].showItem();
            }
        }else{
            // console.log("localConfig.instance.arrSpin_GroupRewardDataInfos",localConfig.instance.arrSpin_GroupRewardDataInfos);
            for(let i=0; i< localConfig.instance.arrSpinRewardDataInfos.length; i++){
                let item = instantiate(this.getItemRewardReceivePrefab(localConfig.instance.arrSpinRewardDataInfos[i].items[0].itemShopType));
                item.parent = this.contentGroup;
                item.setRotationFromEuler(new Vec3(0,0, i * 45));
                let itemSpin:ItemSpin = item.getComponent(ItemSpin);
                itemSpin.initItem(i,localConfig.instance.arrSpinRewardDataInfos[i].items[0].value,localConfig.instance.arrSpinRewardDataInfos[i].items[0].itemShopType);
                this.arrItemSpins.push(itemSpin);
            }
        }
        this.scheduleOnce(()=>{
            this.lockGroup.active = false;
            this.btnClose.node.active = true;
            this.btnClose2.node.active = true;
            this.showInfo();
            this.lightAnimation.pause();
            this.lightAnimation.play("light_idle");
        },0.1 * 8 + 0.5);
    }

    hidePopup(): void {
        this.hidePopup_Finished();
    }

    hideInfo(){
        this.btnFreeSpin.node.active = false;
        this.btnSpinCoin.node.active = false;
        this.btnSpinAd.node.active = false;
        this.objFree.active = false;
        this.objNextTime.active = false;
        this.btnClose2.node.active = false;
    }
    showInfo(){
        this.btnClose2.node.active = true;
        this.btnFreeSpin.node.active = false;
        this.btnSpinCoin.node.active = false;
        this.btnSpinAd.node.active = false;
        if(localConfig.instance.checkFreeSpin()){
            this.objFree.active = true;
            this.btnFreeSpin.node.active = true;
            this.btnFreeSpin.node.setScale(new Vec3(0, 0, 0));
            tween(this.btnFreeSpin.node).to(0.5, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' }).start();
        }else{
            this.objNextTime.active = true;
            this.btnSpinCoin.node.active = true;
            this.btnSpinAd.node.active = true;

            if(localConfig.instance.spinFreeCount > 0){
                this.spinAd_disable.active = false;
                this.txtSpinAdCount.string = `(${localConfig.instance.spinFreeCount}/3)`;
            }else{
                this.spinAd_disable.active = true;
                this.txtSpinAdCount.string = "(0/3)";
            }

            this.btnSpinCoin.node.setScale(new Vec3(0, 0, 0));
            tween(this.btnSpinCoin.node).to(0.5, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' }).start();

            this.btnSpinAd.node.setScale(new Vec3(0, 0, 0));
            tween(this.btnSpinAd.node).delay(0.1).to(0.5, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' }).start();
        }
    }

    getItemRewardReceivePrefab(itemShopType:number){
        if(itemShopType == SHOP_ITEM_TYPE.COIN){
            return this.arrItemSpinPrefabs[0];
        }else if(itemShopType == SHOP_ITEM_TYPE.BOOSTER_UNDO){
            return this.arrItemSpinPrefabs[1];
        }else if(itemShopType == SHOP_ITEM_TYPE.BOOSTER_SUGGEST){
            return this.arrItemSpinPrefabs[2];
        }else if(itemShopType == SHOP_ITEM_TYPE.BOOSTER_ADDCOL){
            return this.arrItemSpinPrefabs[3];
        }else if(itemShopType == SHOP_ITEM_TYPE.HEART){
            return this.arrItemSpinPrefabs[4];
        }else if(itemShopType == SHOP_ITEM_TYPE.HEART_UNLIMITED){
            return this.arrItemSpinPrefabs[5];
        }
        return this.arrItemSpinPrefabs[0];
    }

    indexTarget:number = 0;
    tweenRotate:Tween<{}> = null;

    angleStart:number = 0;
    angleTarget:number = 0;
    numberLoop:number = 5;
    timeDelayDoneSpin = 2;
    timeSpin:number = 4;
    setSpinStart(){
        let self = this;
        let indexRotate:number = 0;
        let angleStart:number = this.spinGroup.eulerAngles.z % 360;
        // console.log("angleStart:"+angleStart);
        this.spinGroup.setRotationFromEuler(new Vec3(0,0,angleStart));
        if(this.tweenRotate != null){
            this.tweenRotate.stop();
        }
        this.indexTarget = Utils.getRandombyRatios(this.arrRatios);
        // this.indexTarget = 1;
        let angleTarget:number = this.indexTarget * 45 + lodash.randomFloat(-5, 5) + this.numberLoop * 360;
        // console.log("angleTarget:"+angleTarget);

        this.tweenRotate = tween(this.spinGroup)
            .call(()=>{
                AudioManager2.instance.playSpinStart();
                this.lockGroup.active = true;
                this.lightAnimation.pause();
                this.lightAnimation.play("light_spinning");
            })
            .to(this.timeSpin, { angle: angleTarget }, {
            easing: 'cubicInOut',
            onUpdate(target, ratio) {
                // console.log("ratio:"+ratio);
                // console.log(self.spinGroup);
                // console.log(self.spinGroup.angle);
                let currIndexRotate:number = Math.floor(self.spinGroup.angle / 45);
                if(currIndexRotate != indexRotate){
                    indexRotate = currIndexRotate;
                    self.setSpinUpdateIndex(indexRotate);
                }
            }, onComplete: () => {
               
            }})
            .call(() => {
                AudioManager2.instance.playSpinDone();
                this.lightAnimation.pause();
                this.lightAnimation.play("light_done");
            })
            .delay(this.timeDelayDoneSpin)
            .call(()=>{
                this.lockGroup.active = false;
                this.setSpinFinished();
            })
            .start();
    }

    setSpinUpdateIndex(indexRotate:number){
        // console.log("indexRotate:"+indexRotate);
    }

    setSpinFinished(){
        this.lightAnimation.pause();
        this.lightAnimation.play("light_idle");

        this.showInfo();
        // console.log("this.indexTarget:"+this.indexTarget);
        
        let groupRewardDataInfo:GroupRewardDataInfo = new GroupRewardDataInfo(localConfig.instance.arrSpinRewardDataInfos[(8 - this.indexTarget)%8].items);
        clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"SPIN",groupRewardDataInfo);
    }

    touchFreeSpin(){
        LogEventManager.instance.logButtonClick("freespin","spinpopup");
        localConfig.instance.setSpinLastTime();
        this.hideInfo();
        clientEvent.dispatchEvent(Constants.SPIN_NOTIFY_UPDATE);
        this.setSpinStart();
    }

    priceSpinCoin:number = 100;
    touchSpinCoin(){
        LogEventManager.instance.logButtonClick("spincoin","spinpopup");
        if(localConfig.instance.currCoin - this.priceSpinCoin >= 0){
            localConfig.instance.setCoin(localConfig.instance.currCoin - this.priceSpinCoin);
            LogEventManager.instance.logResourceSpend("currency","coin",this.priceSpinCoin,"spinpopup","spincoin");
            this.setSpinStart();
        }else{
            clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION,"Not Enough Coin!");
        }
    }

    touchSpinAd(){
        LogEventManager.instance.logButtonClick("spinad","spinpopup");
        if(localConfig.instance.spinFreeCount > 0){
            // FBInstantManager.instance.Show_RewardedVideoAsync("spinpopup","spin",(err, success) => {
            //     if (err) {
            //         console.log(err);
            //     }else{
            //         if(localConfig.instance.spinFreeCount == 0){
            //             this.spinAd_disable.active = true;
            //         }
            //         this.txtSpinAdCount.string = `(${localConfig.instance.spinFreeCount - 1}/3)`;
            //         localConfig.instance.setSpinFreeCount(localConfig.instance.spinFreeCount - 1);
            //         this.setSpinStart();
            //     }
            // })

            PokiSDKManager.instance.Show_RewardedVideoAsync("spinpopup","spin",(err, success) => {
                if (err) {
                    console.log(err);
                }else{
                    if(localConfig.instance.spinFreeCount == 0){
                        this.spinAd_disable.active = true;
                    }
                    this.txtSpinAdCount.string = `(${localConfig.instance.spinFreeCount - 1}/3)`;
                    localConfig.instance.setSpinFreeCount(localConfig.instance.spinFreeCount - 1);
                    this.setSpinStart();
                }
            });
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
