
import { _decorator, Component, Label, Node, tween, Tween, UIOpacity, Vec3 } from 'cc';
import Utils from '../../core/utils/Utils';
import { SHOP_ITEM_TYPE } from '../../framework/constants';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemSpin
 * DateTime = Tue Dec 03 2024 15:18:13 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemSpin.ts
 * FileBasenameNoExtension = ItemSpin
 * URL = db://assets/scripts/game/spin/ItemSpin.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemSpin')
export class ItemSpin extends Component {
    @property(Node)
    nodeAll:Node = null;

    @property(UIOpacity)
    nodeAllOpacity: UIOpacity = null;

    @property(Label)
    txtValue:Label = null;

    tweenShow:Tween<{}> = null;
    tweenShowOpcity:Tween<{}> = null;
    index:number = 0;
    initItem(_index:number,value:number,shopItemType:SHOP_ITEM_TYPE){
        this.index = _index;
        if(shopItemType == SHOP_ITEM_TYPE.HEART_UNLIMITED){
            console.log("HEART_UNLIMITED",Utils.getTimeStrByS_5(value),value);
            this.txtValue.string = `${Utils.getTimeStrByS_5(value)}`;
        }else{
            this.txtValue.string = `x${Utils.formatNumber(value)}`;
        }
        
        this.reset();
        this.showItem();
    }

    reset(){
        this.nodeAll.setPosition(new Vec3(0,200,0));
        this.nodeAll.setScale(new Vec3(0,0,0));
        this.nodeAllOpacity.opacity = 0;

        if(this.tweenShow != null){
            this.tweenShow.stop();
        }
        if(this.tweenShowOpcity != null){
            this.tweenShowOpcity.stop();
        }
    }

    showItem(){
        this.tweenShow = tween(this.nodeAll).delay(this.index * 0.1).to(0.5,{scale:new Vec3(1,1,1)},{easing:'backOut',onComplete:()=>{

        }}).start();

        this.tweenShowOpcity = tween(this.nodeAllOpacity).delay(this.index * 0.1).to(0.4,{opacity: 255}, { easing: 'quadOut',onComplete:()=>{

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
