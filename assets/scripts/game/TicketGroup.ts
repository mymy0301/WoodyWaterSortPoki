
import { _decorator, Button, Component, Enum, Label, Node, tween, Tween, Vec3 } from 'cc';
import { clientEvent } from '../framework/clientEvent';
import { Constants, SCENE_TYPE, TICKET_TYPE } from '../framework/constants';
import Utils from '../core/utils/Utils';
import { localConfig } from '../localConfig';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TicketGroup
 * DateTime = Wed Sep 11 2024 10:52:45 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = TicketGroup.ts
 * FileBasenameNoExtension = TicketGroup
 * URL = db://assets/scripts/game/TicketGroup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('TicketGroup')
export class TicketGroup extends Component {

    @property({type:Enum(TICKET_TYPE)})
    ticketType:TICKET_TYPE = TICKET_TYPE.GOLD;

    @property(Label)
    txtValue: Label;

    @property(Node)
    icon: Node;

    @property(Button)
    btnAdd:Button;


    tweenUpdate:Tween<{}> = null;
    onLoad(){
        this.tweenUpdate = tween(this.node).to(0.05,{scale: new Vec3(1.2,1.2,1.2)},{easing:'linear'}).to(0.05,{scale: new Vec3(1,1,1)},{easing:'linear'})
                                           .to(0.05,{scale: new Vec3(1.1,1.1,1.1)},{easing:'linear'}).to(0.05,{scale: new Vec3(1,1,1)},{easing:'linear'}).union();//.repeat(2);
    }

    onEnable(){
        clientEvent.on(Constants.TICKET_UPDATE,this.setUpdate,this);
        if(this.btnAdd){
            this.btnAdd.node.on(Constants.CLICK,this.touchAdd,this);
        }

        this.txtValue.string = `${Utils.formatNumber(Math.floor(localConfig.instance.getTicketCount(this.ticketType)))}`;
    }   

    onDisable(){
        clientEvent.off(Constants.COIN_UPDATE,this.setUpdate,this);
        if(this.btnAdd){
            this.btnAdd.node.off(Constants.CLICK,this.touchAdd,this);
        }
    }

    start () {
        // [3]
        this.txtValue.string = `${Utils.formatNumber(Math.floor(localConfig.instance.getTicketCount(this.ticketType)))}`;
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    setUpdate(ticketType:TICKET_TYPE){
        if(this.ticketType != ticketType) return;
        this.txtValue.string = `${Utils.formatNumber(Math.floor(localConfig.instance.getTicketCount(this.ticketType)))}`;
        this.txtValue.node.setScale(new Vec3(1,1,1));
        this.tweenUpdate.stop();
        this.tweenUpdate.start().call(()=>{
            this.txtValue.node.setScale(new Vec3(1,1,1));
        });
    }

    touchAdd(){
        if(localConfig.instance.currSceneType == SCENE_TYPE.MENU){
            clientEvent.dispatchEvent(Constants.SHOW_SHOP_GROUP);
        } else {
            clientEvent.dispatchEvent(Constants.SHOW_SHOP_POPUP,this.ticketType);
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
