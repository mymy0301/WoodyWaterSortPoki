
import { _decorator, Component, Node, LayoutComponent, Label, Tween, tween, Vec3, Button } from 'cc';
import { clientEvent } from '../framework/clientEvent';
import { Constants, SCENE_TYPE, TICKET_TYPE } from '../framework/constants';
import { localConfig } from '../localConfig';
import Utils from '../core/utils/Utils';
const { ccclass, property } = _decorator;

@ccclass('CoinGroup')
export class CoinGroup extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Label)
    txtCoin: Label;

    @property(Node)
    iconCoin: Node;

    @property(Button)
    btnAddCoin:Button;


    tweenCoinUpdate:Tween<{}> = null;
    onLoad(){
        this.tweenCoinUpdate = tween(this.iconCoin).to(0.1,{scale: new Vec3(1.1,1.1,1.1)},{easing:'linear'}).to(0.1,{scale: new Vec3(1,1,1)},{easing:'linear'}).union().repeat(3);
    }

    onEnable(){
        clientEvent.on(Constants.COIN_UPDATE,this.coinUpdate,this);
        this.btnAddCoin.node.on(Constants.CLICK,this.touchAddCoin,this);

        this.txtCoin.string = `${Utils.formatNumber(Math.floor(localConfig.instance.currCoin))}`;
    }   

    onDisable(){
        clientEvent.off(Constants.COIN_UPDATE,this.coinUpdate,this);
        this.btnAddCoin.node.off(Constants.CLICK,this.touchAddCoin,this);
    }

    start () {
        // [3]
        this.txtCoin.string = `${Utils.formatNumber(Math.floor(localConfig.instance.currCoin))}`;
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    coinUpdate(){
        this.txtCoin.string = `${Utils.formatNumber(Math.floor(localConfig.instance.currCoin))}`;
        this.txtCoin.node.setScale(new Vec3(1,1,1));
        this.tweenCoinUpdate.stop();
        this.tweenCoinUpdate.start().call(()=>{
            this.txtCoin.node.setScale(new Vec3(1,1,1));
        });
    }

    touchAddCoin(){
        if(localConfig.instance.currSceneType == SCENE_TYPE.MENU){
            clientEvent.dispatchEvent(Constants.SHOW_SHOP_GROUP);
        }else{
            clientEvent.dispatchEvent(Constants.SHOW_SHOP_POPUP);
        }
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
