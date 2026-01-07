
import { _decorator, Button, CCInteger, Component, Enum, Node } from 'cc';
import { Constants, TICKET_TYPE } from '../framework/constants';
import { localConfig } from '../localConfig';
import { clientEvent } from '../framework/clientEvent';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemShopExchange
 * DateTime = Fri Sep 20 2024 09:19:00 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemShopExchange.ts
 * FileBasenameNoExtension = ItemShopExchange
 * URL = db://assets/scripts/game/ItemShopExchange.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemShopExchange')
export class ItemShopExchange extends Component {
    @property({type:Enum(TICKET_TYPE)})
    ticketType:TICKET_TYPE = TICKET_TYPE.GOLD;

    @property(CCInteger)
    price:number = 150;

    @property(CCInteger)
    value:number = 3;

    @property(Node)
    startPos:Node;

    @property(Button)
    btnExchange:Button;

    protected onEnable(): void {
        this.btnExchange.node.on(Constants.CLICK,this.touchExchange,this);
    }

    protected onDisable(): void {
        this.btnExchange.node.off(Constants.CLICK,this.touchExchange,this);
    }

    start () {
        // [3]
    }

    touchExchange(){
        if(localConfig.instance.currCoin >= this.price){
            localConfig.instance.setCoin(localConfig.instance.currCoin - this.price);
            if(this.ticketType == TICKET_TYPE.GOLD){
                clientEvent.dispatchEvent(Constants.UPDATE_TICKET_STARTPOS,TICKET_TYPE.GOLD,this.startPos.worldPosition);
                clientEvent.dispatchEvent(Constants.SHOW_ADDTICKET,TICKET_TYPE.GOLD,this.value);
            }else if(this.ticketType == TICKET_TYPE.SILVER){
                clientEvent.dispatchEvent(Constants.UPDATE_TICKET_STARTPOS,TICKET_TYPE.SILVER,this.startPos.worldPosition);
                clientEvent.dispatchEvent(Constants.SHOW_ADDTICKET,TICKET_TYPE.SILVER,this.value);
            }
        }else{
            clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION,"Not Enough Coin!");
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
