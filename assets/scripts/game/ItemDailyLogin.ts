
import { _decorator, CCInteger, Component, Node, Sprite, SpriteFrame, tween, Vec3 } from 'cc';
import { localConfig } from '../localConfig';
import { GroupRewardDataInfo } from './info/ShopDataInfo';
import { clientEvent } from '../framework/clientEvent';
import { BOOSTER_TYPE, Constants, SHOP_ITEM_TYPE, TICKET_TYPE } from '../framework/constants';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemDailyLogin
 * DateTime = Sat Oct 12 2024 15:01:21 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemDailyLogin.ts
 * FileBasenameNoExtension = ItemDailyLogin
 * URL = db://assets/scripts/game/ItemDailyLogin.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemDailyLogin')
export class ItemDailyLogin extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Sprite)
    bg:Sprite = null;

    @property(SpriteFrame)
    sfON:SpriteFrame = null;

    @property(SpriteFrame)
    sfOFF:SpriteFrame = null;

    @property(CCInteger)
    indexDailyLogin:number = 0;

    @property(Node)
    objFinished:Node = null;

    @property(Node)
    iconFinished:Node = null;

    @property(Node)
    nodeActive:Node = null;

    @property(Node)
    arrStartPos:Node[] = [];

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    protected onEnable(): void {
        this.showInfo();
    }

    showInfo() {
        this.bg.spriteFrame = this.sfOFF;
        this.nodeActive.active = false;
        if(localConfig.instance.getCurrDay() == localConfig.instance.currDailyLoginLastDay){
            //Hom nay da nhan qua rùi
            if(this.indexDailyLogin < localConfig.instance.currDailyLoginIndex){
                this.objFinished.active = true;
            }else{
                this.objFinished.active = false;
            }
        }else{
            if(this.indexDailyLogin < localConfig.instance.currDailyLoginIndex){
                this.objFinished.active = true;
            }else if(this.indexDailyLogin == localConfig.instance.currDailyLoginIndex){
                this.objFinished.active = false;
                this.nodeActive.active = true;
                this.bg.spriteFrame = this.sfON;
            }else{
                this.objFinished.active = false;
            }
        }
        // console.log(this.indexDailyLogin,localConfig.instance.currDailyLoginIndex);
        // if(this.indexDailyLogin < localConfig.instance.currDailyLoginIndex){
        //     this.objFinished.active = true;
        // }else if(this.indexDailyLogin == localConfig.instance.currDailyLoginIndex){
        //     console.log(localConfig.instance.currDailyLoginLastDay,localConfig.instance.getCurrDay(),this.indexDailyLogin,localConfig.instance.currDailyLoginIndex);
        //     if(localConfig.instance.getCurrDay() == localConfig.instance.currDailyLoginLastDay){
        //         this.objFinished.active = true;
        //     }else{
        //         this.objFinished.active = false;
        //         this.nodeActive.active = true;
        //         this.bg.spriteFrame = this.sfON;
        //     }
        // }else{
        //     this.objFinished.active = false;
        // }
    }

    

    setClaim() {
        let groupRewardDataInfo:GroupRewardDataInfo = localConfig.instance.getDailyLogin_GroupRewardDataInfo_byIndex(this.indexDailyLogin);
        // console.log(groupRewardDataInfo);
        clientEvent.dispatchEvent(Constants.HOME_UPDATE_TARGET_POS);
        // for(let i = 0;i < groupRewardDataInfo.items.length;i++){
        //     if (groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.COIN) {
        //         clientEvent.dispatchEvent(Constants.UPDATE_COIN_STARTPOS, this.arrStartPos[i].worldPosition);
        //         clientEvent.dispatchEvent(Constants.SHOW_ADDCOIN, groupRewardDataInfo.items[i].value);
        //     }else if (groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_UNDO) {
        //         localConfig.instance.setBoosterCount(BOOSTER_TYPE.UNDO,localConfig.instance.getBoosterCount(BOOSTER_TYPE.UNDO) + groupRewardDataInfo.items[i].value);
        //     }else if (groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_SUGGEST) {
        //         localConfig.instance.setBoosterCount(BOOSTER_TYPE.SUGGEST,localConfig.instance.getBoosterCount(BOOSTER_TYPE.SUGGEST) + groupRewardDataInfo.items[i].value);
        //     }else if (groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_ADDCOL) {
        //         localConfig.instance.setBoosterCount(BOOSTER_TYPE.ADDCOL,localConfig.instance.getBoosterCount(BOOSTER_TYPE.ADDCOL) + groupRewardDataInfo.items[i].value);
        //     }else if (groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.HEART_UNLIMITED) {
        //         clientEvent.dispatchEvent(Constants.UPDATE_HEART_STARTPOS, this.arrStartPos[i].worldPosition);
        //         clientEvent.dispatchEvent(Constants.SHOW_ADDHEART_UNLIMITED, groupRewardDataInfo.items[i].value);
        //     }
        // }

        localConfig.instance.setDailyLogin_ReceiveReward();
        clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"DAILY LOGIN",groupRewardDataInfo);
        this.setDailyLoginFinished();
    }

    setDailyLoginFinished() {
        this.nodeActive.active = false;
        this.objFinished.active = true;
        this.iconFinished.active = true;
        this.iconFinished.setScale(new Vec3(0,0,0));
        this.bg.spriteFrame = this.sfOFF;
        tween(this.iconFinished).to(0.3, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut', onComplete: () => { } }).start();
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
