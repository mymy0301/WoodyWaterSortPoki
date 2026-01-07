
import { _decorator, Button, Component, Node } from 'cc';
import { CountDownTimeNextDay } from '../../common/CountDownTimeNextDay';
import { BasePopup } from '../../common/basePopup';
import { Constants, SHOP_ITEM_TYPE } from '../../framework/constants';
import { localConfig } from '../../localConfig';
import { FBInstantManager } from '../../common/FBInstantManager';
import { clientEvent } from '../../framework/clientEvent';
import { GroupRewardDataInfo } from '../info/ShopDataInfo';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = BlackFridayPopup
 * DateTime = Tue Nov 25 2025 10:09:40 GMT+0700 (Indochina Time)
 * Author = MyTom2k17
 * FileBasename = BlackFridayPopup.ts
 * FileBasenameNoExtension = BlackFridayPopup
 * URL = db://assets/scripts/game/blackfriday/BlackFridayPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('BlackFridayPopup')
export class BlackFridayPopup extends BasePopup {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Button)
    btnClaim:Button;

    @property(CountDownTimeNextDay)
    countDownTimeNextDay:CountDownTimeNextDay;

    onEnable(){
        super.onEnable();
        this.btnClaim.node.on(Constants.CLICK,this.touchClaim,this);
    }

    onDisable(){
        super.onDisable();
        this.btnClaim.node.off(Constants.CLICK,this.touchClaim,this);
    }
    showBlackFridayCoinPopup(){
        localConfig.instance.isShowBlackFriday = true;
        this.btnClaim.node.active = false;
        super.showPopup();
    }

    showPoup_ShowView_Finished(){
        super.showPoup_ShowView_Finished();
        let self = this;
        self.btnClaim.node.active = true;
    }

    touchClaim(){
        let self = this;
        FBInstantManager.instance.Show_RewardedVideoAsync("blackfridaypopup","claimads",((err,isSuccess)=>{
            if (err) {
                localConfig.instance.isShowBlackFriday = false;
            } else {
                self.rewardFinished();
            }
        }));
    }

    rewardFinished(){
        localConfig.instance.setBackFriday_Received();
        let groupRewardDataInfo: GroupRewardDataInfo = new GroupRewardDataInfo([]);
        groupRewardDataInfo.items = [];
        groupRewardDataInfo.items.push({ itemShopType: SHOP_ITEM_TYPE.COIN, value: 2000 });
        localConfig.instance.setDailyLogin_AdReceiveReward();
        clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP, "BLACK FRIDAY", groupRewardDataInfo);
        this.hidePopup_Finished();
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
