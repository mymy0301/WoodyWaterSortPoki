
import { _decorator, Component, instantiate, Label, Node, Prefab, Size, tween, Tween, UITransform, Vec3 } from 'cc';
import { GroupRewardDataInfo } from '../info/ShopDataInfo';
import { ItemBoxReward } from '../ItemBoxReward';
import { SHOP_ITEM_TYPE } from '../../framework/constants';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = BoxRaceRewardInfoGroup
 * DateTime = Thu Nov 07 2024 14:49:38 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = BoxRaceRewardInfoGroup.ts
 * FileBasenameNoExtension = BoxRaceRewardInfoGroup
 * URL = db://assets/scripts/game/race/BoxRaceRewardInfoGroup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('BoxRaceRewardInfoGroup')
export class BoxRaceRewardInfoGroup extends Component {
    @property(Prefab)
    arrItemRewardPrefabs:Prefab[] = [];

    @property(Prefab)
    itemPlus:Prefab = null;

    @property(Node)
    contentGroup:Node = null;

    @property(Label)
    txtInfo:Label = null;


    @property(UITransform)
    bgUITransform:UITransform = null;

    tweenShow:Tween<{}> = null;
    tweenHide:Tween<{}> = null;

    showBoxRewardInfoGroup(posStart:Vec3,indexBox:number,groupRewardDataInfo:GroupRewardDataInfo){ 
        this.contentGroup.destroyAllChildren();
        this.node.setWorldPosition(posStart);

        // let sizeX:number = groupRewardDataInfo.items.length * 90 + (groupRewardDataInfo.items.length - 1) * 30;
        // let sizeBGX:number = sizeX + 40;
        // let sizeBGX = 330;

        if(indexBox == 0){
            this.txtInfo.string = `First place will get these rewards!`
        }else if(indexBox == 1){
            this.txtInfo.string = `Second place will get these rewards!`
        }else if(indexBox == 2){
            this.txtInfo.string = `Third place will get these rewards!`
        }

        // let posX:number = (sizeBGX - 215)/2;
        // this.bgUITransform.setContentSize(new Size(sizeBGX,125));
        // this.contentGroup.getComponent(UITransform).setContentSize(new Size(sizeX,-150));
        // this.bgUITransform.node.setPosition(new Vec3(-posX,0,0));
        // if(isBottom){
        //     this.bgUITransform.node.setScale(new Vec3(1,1,1));
        //     this.contentGroup.setPosition(new Vec3(-posX,-65,0));
        // }else{
        //     this.bgUITransform.node.setScale(new Vec3(1,-1,1));
        //     this.contentGroup.setPosition(new Vec3(-posX,90,0));
        // }

        for(let i = 0;i < groupRewardDataInfo.items.length;i++){
            let item = instantiate(this.getItemRewardReceivePrefab(groupRewardDataInfo.items[i].itemShopType));
            item.parent = this.contentGroup;
            let itemBoxReward: ItemBoxReward = item.getComponent(ItemBoxReward);
            itemBoxReward.initValue(groupRewardDataInfo.items[i].itemShopType,groupRewardDataInfo.items[i].value);

            if(i < groupRewardDataInfo.items.length - 1){
                let item = instantiate(this.itemPlus);
                item.parent = this.contentGroup;
            }
        }

        this.node.active = true;
        this.reset();

        this.tweenShow = tween(this.node).to(0.3,{scale: new Vec3(1,1,1)}, { easing: 'backOut',onComplete:()=>{
            this.setTweenShowFinished();
        }}).start();
    }

    getItemRewardReceivePrefab(itemShopType:number){
        // console.log(itemShopType);
        if (itemShopType == SHOP_ITEM_TYPE.COIN) {
            return this.arrItemRewardPrefabs[0];
        } else if (itemShopType == SHOP_ITEM_TYPE.BOOSTER_UNDO) {
            return this.arrItemRewardPrefabs[1];
        } else if (itemShopType == SHOP_ITEM_TYPE.BOOSTER_SUGGEST) {
            return this.arrItemRewardPrefabs[2];
        } else if (itemShopType == SHOP_ITEM_TYPE.BOOSTER_ADDCOL) {
            return this.arrItemRewardPrefabs[3];
        } else if (itemShopType == SHOP_ITEM_TYPE.HEART_UNLIMITED) {
            return this.arrItemRewardPrefabs[4];
        }
    }

    setTweenShowFinished(){
        this.tweenHide = tween(this.node).delay(2).to(0.4,{scale: new Vec3(0,0,0)}, { easing: 'quadOut',onComplete:()=>{
            
        }}).start();
    }

    reset(){
        this.node.setScale(new Vec3(0,0,0));
        if(this.tweenShow != null){
            this.tweenShow.stop();
        }

        if(this.tweenHide != null){
            this.tweenHide.stop();
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
