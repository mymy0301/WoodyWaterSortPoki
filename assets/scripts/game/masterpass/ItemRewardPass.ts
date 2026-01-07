
import { _decorator, Component, Label, Node, tween, Tween, UIOpacity, Vec3 } from 'cc';
import Utils from '../../core/utils/Utils';
import { SHOP_ITEM_TYPE } from '../../framework/constants';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemRewardPass
 * DateTime = Thu Nov 14 2024 11:58:43 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemRewardPass.ts
 * FileBasenameNoExtension = ItemRewardPass
 * URL = db://assets/scripts/game/masterpass/ItemRewardPass.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemRewardPass')
export class ItemRewardPass extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(UIOpacity)
    nodeOpacity: UIOpacity = null;

    @property(Label)
    txtValue:Label = null;

    @property(Node)
    nodeLight:Node = null;

    tweenShow:Tween<{}> = null;
    tweenShowOpcity:Tween<{}> = null;

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    initRewardPass(itemShopType:SHOP_ITEM_TYPE,isPass:boolean,value:number){
        if(itemShopType == SHOP_ITEM_TYPE.HEART_UNLIMITED){
            this.txtValue.string = `${Utils.getTimeStrByS_5(value)}`;
        }else{
            this.txtValue.string = `x${Utils.formatNumber(value)}`;
        }
        
        if(isPass){
            this.nodeLight.active = true;
        }else{
            this.nodeLight.active = false;
        }
    }


   


    initRewardPassRecive(value:number){
        this.txtValue.string = `x${Utils.formatNumber(value)}`;
        this.nodeLight.active = false;
        this.node.setPosition(new Vec3(0,0,0));
        this.node.setScale(new Vec3(0,0,0));
        this.nodeOpacity.opacity = 0;

        if(this.tweenShow != null){
            this.tweenShow.stop();
        }
        if(this.tweenShowOpcity != null){
            this.tweenShowOpcity.stop();
        }

        this.tweenShow = tween(this.node).to(0.5,{scale:new Vec3(0.6,0.6,0.6)},{easing:'bounceOut',onComplete:()=>{
            this.setShowRewardPassReceive_Step2();
        }}).start();

        this.tweenShowOpcity = tween(this.nodeOpacity).to(0.4,{opacity: 255}, { easing: 'quadOut',onComplete:()=>{

        }}).start();
    }

    setShowRewardPassReceive_Step2(){
        this.tweenShow = tween(this.node).delay(0.1).to(0.6,{position:new Vec3(0,75,0)},{easing:'smooth',onComplete:()=>{
            this.setShowRewardPassReceive_Step3();
        }}).start();

        this.tweenShowOpcity = tween(this.nodeOpacity).delay(0.1).to(0.6,{opacity: 0}, { easing: 'smooth',onComplete:()=>{
            
        }}).start();
    }

    setShowRewardPassReceive_Step3(){
        this.node.destroy();
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
