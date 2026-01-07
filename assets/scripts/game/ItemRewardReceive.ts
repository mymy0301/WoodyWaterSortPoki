
import { _decorator, Component, Label, Node, tween, Tween, Vec3 } from 'cc';
import Utils from '../core/utils/Utils';
import { SHOP_ITEM_TYPE } from '../framework/constants';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemRewardReceive
 * DateTime = Tue Oct 08 2024 11:58:55 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemRewardReceive.ts
 * FileBasenameNoExtension = ItemRewardReceive
 * URL = db://assets/scripts/game/ItemRewardReceive.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemRewardReceive')
export class ItemRewardReceive extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    tweenShow:Tween<{}> = null;
    tweenHide:Tween<{}> = null;
    @property(Label)
    txtValue:Label = null;

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    showItem(shopItemType:SHOP_ITEM_TYPE,value:number,timeDelay:number = 0){
        if(shopItemType == SHOP_ITEM_TYPE.HEART_UNLIMITED){
            this.txtValue.string = `${Utils.getTimeStrByS_5(value)}`;
        }else{
            this.txtValue.string = `x${Utils.formatNumber(value)}`;
        }
        this.reset();
        this.tweenShow = tween(this.node).delay(timeDelay).to(0.3,{scale:new Vec3(1,1,1)},{easing:'backOut',onComplete:()=>{

        }}).start();
    }

    hideItem(){
        if (this.tweenHide) {
            this.tweenHide.stop();
        }
        this.node.setScale(new Vec3(1,1,1));
        this.tweenHide = tween(this.node).to(0.3,{scale:new Vec3(0,0,0)},{easing:'quadOut',onComplete:()=>{
            this.node.active = false;
        }}).start();
    }

    reset(){
        if (this.tweenShow) {
            this.tweenShow.stop();
        }
        this.node.setScale(new Vec3(0,0,0));
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
