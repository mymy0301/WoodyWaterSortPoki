
import { _decorator, Button, Component, Node, Vec3 } from 'cc';
import { ItemDailyLogin } from './ItemDailyLogin';
import { localConfig } from '../localConfig';
import { clientEvent } from '../framework/clientEvent';
import { Constants, SHOP_ITEM_TYPE, TICKET_TYPE } from '../framework/constants';
import { GroupRewardDataInfo } from './info/ShopDataInfo';
import { FBInstantManager } from '../common/FBInstantManager';
import { LogEventManager } from '../common/LogEventManager';
import { PokiSDKManager } from '../common/PokiSDKManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = DailyTaskLoginGroup
 * DateTime = Sun Oct 13 2024 20:29:17 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = DailyTaskLoginGroup.ts
 * FileBasenameNoExtension = DailyTaskLoginGroup
 * URL = db://assets/scripts/game/DailyTaskLoginGroup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('DailyTaskLoginGroup')
export class DailyTaskLoginGroup extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Button)
    btnClaim: Button = null;

    @property(Button)
    btnBonus:Button = null;

    @property(ItemDailyLogin)
    arrDailyLogins:ItemDailyLogin[] = [];

    @property(Node)
    nodeNotify:Node = null;

    protected onEnable(): void {
        this.btnClaim.node.on(Button.EventType.CLICK, this.touchClaim, this);
        this.btnBonus.node.on(Button.EventType.CLICK, this.touchBonus, this);

        this.showGroup();
    }

    protected onDisable(): void {
        this.btnClaim.node.off(Button.EventType.CLICK, this.touchClaim, this);
        this.btnBonus.node.off(Button.EventType.CLICK, this.touchBonus, this);
    }

    showGroup(){
        if(localConfig.instance.getCurrDay() > localConfig.instance.currDailyLoginLastDay){
            this.btnClaim.node.active = true;
        }else{
            this.btnClaim.node.active = false;
        }

        if(localConfig.instance.getCurrDay() > localConfig.instance.currDailyLoginAdLastDay){
            if(this.btnClaim.node.active){
                
                this.btnBonus.node.setPosition(new Vec3(200,-396,0));
            }else{
                this.btnBonus.node.setPosition(new Vec3(0,-396,0));
            }
            this.btnBonus.node.active = true;
        }else{
            this.btnBonus.node.active = false;
        }

        if(localConfig.instance.getCurrDay() > localConfig.instance.currDailyLoginLastDay){
            if(this.btnBonus.node.active){
                this.btnClaim.node.setPosition(new Vec3(-200,-396,0));
            }else{
                this.btnClaim.node.setPosition(new Vec3(0,-396,0));
            }
        }

        this.showNotify();
    }

    showNotify(): void {
        if(localConfig.instance.getCurrDay() > localConfig.instance.currDailyLoginLastDay){
            this.nodeNotify.active = true;
        }else{
            this.nodeNotify.active = false;
        }
    }

    touchClaim(){
        LogEventManager.instance.logButtonClick("loginclaim","dailytaskpopup");
        // console.log("touchClaim",localConfig.instance.currDailyLoginIndex);
        this.arrDailyLogins[localConfig.instance.currDailyLoginIndex].setClaim();
        this.btnClaim.node.active = false;
        this.showGroup();
        
        clientEvent.dispatchEvent(Constants.DAILYTASK_NOTIFY_UPDATE);
    }

    touchBonus(){
        LogEventManager.instance.logButtonClick("loginbonus","dailytaskpopup");
        // FBInstantManager.instance.Show_RewardedVideoAsync("dailytaskpopup","loginbonus",(err, success) => {
        //     if (err) {
        //         console.log(err);
        //     }else{
        //         let groupRewardDataInfo:GroupRewardDataInfo = new GroupRewardDataInfo([]);
        //         groupRewardDataInfo.items = [];
        //         groupRewardDataInfo.items.push({itemShopType:SHOP_ITEM_TYPE.COIN,value:200});
        //         localConfig.instance.setDailyLogin_AdReceiveReward();
        //         clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"DAILY LOGIN",groupRewardDataInfo);
        //         this.btnBonus.node.active = false;
        //         this.showGroup();
        //     }
        // });

        PokiSDKManager.instance.Show_RewardedVideoAsync("dailytaskpopup","loginbonus",(err, success) => {
            if (err) {
                console.log(err);
            }else{
                let groupRewardDataInfo:GroupRewardDataInfo = new GroupRewardDataInfo([]);
                groupRewardDataInfo.items = [];
                groupRewardDataInfo.items.push({itemShopType:SHOP_ITEM_TYPE.COIN,value:200});
                localConfig.instance.setDailyLogin_AdReceiveReward();
                clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"DAILY LOGIN",groupRewardDataInfo);
                this.btnBonus.node.active = false;
                this.showGroup();
            }
        });
        
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
