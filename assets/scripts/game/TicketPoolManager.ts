
import { _decorator, Component, instantiate, Node, Prefab, Vec3 } from 'cc';
import { clientEvent } from '../framework/clientEvent';
import { Constants, TICKET_TYPE } from '../framework/constants';
import { localConfig } from '../localConfig';
import { ItemTicket } from './ItemTicket';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TicketPoolManager
 * DateTime = Wed Sep 11 2024 11:09:05 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = TicketPoolManager.ts
 * FileBasenameNoExtension = TicketPoolManager
 * URL = db://assets/scripts/game/TicketPoolManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('TicketPoolManager')
export class TicketPoolManager extends Component {
    @property(Prefab)
    arrItemTicketPrefab:Prefab[] = [];

    @property(Node)
    poolParentNode:Node;


    @property(Node)
    arrTargetNodes:Node[] = [];

    @property(Node)
    arrStartNodes:Node[] = [];

    // arrPools:Node[] = [];

    mapItemPools:Map<number,Node[]> = new Map<number,Node[]>();
    

    onEnable(){
        clientEvent.on(Constants.SHOW_ADDTICKET,this.showAddTicket,this);
        clientEvent.on(Constants.UPDATE_TICKET_TARGETPOS,this.updateTargetPos,this);
        clientEvent.on(Constants.UPDATE_TICKET_STARTPOS,this.updateStartPos,this);
    }

    onDisable(){
        clientEvent.off(Constants.SHOW_ADDTICKET,this.showAddTicket,this);
        clientEvent.off(Constants.UPDATE_TICKET_TARGETPOS,this.updateTargetPos,this);
        clientEvent.off(Constants.UPDATE_TICKET_STARTPOS,this.updateStartPos,this);
    }

    start () {
        // [3]
    }

    updateTargetPos(ticketType:TICKET_TYPE,posTarget:Vec3){
        console.log("updateTargetPos",ticketType,posTarget);
        this.arrTargetNodes[ticketType].setWorldPosition(posTarget);
    }

    updateStartPos(ticketType:TICKET_TYPE,posStart:Vec3){
        this.arrStartNodes[ticketType].setWorldPosition(posStart);
    }

    showAddTicket(ticketType:TICKET_TYPE,totalCoinAdd:number){
        let listCoinValue:number[] = localConfig.instance.generateListCoinValue_fromTotalCoin(totalCoinAdd,10);

        for(let i=0; i < listCoinValue.length;i++){
            let itemCoin = this.getItem(ticketType);
            itemCoin.getComponent(ItemTicket).initTicket(listCoinValue[i],this.arrStartNodes[ticketType].position,this.arrTargetNodes[ticketType].position,i * 0.05);

        }
    }


    getItem(ticketType:TICKET_TYPE){
        if(this.mapItemPools.has(ticketType)){
            let arrItemPools:Node[] = this.mapItemPools.get(ticketType);
            for(let i=0; i< arrItemPools.length;i++){
                if(!arrItemPools[i].active){
                    return arrItemPools[i];
                }
            }
        }

        let obj = instantiate(this.arrItemTicketPrefab[ticketType]);
        obj.parent = this.poolParentNode;
        if(!this.mapItemPools.has(ticketType)){
            this.mapItemPools.set(ticketType,[]);
        }
        this.mapItemPools.get(ticketType).push(obj);
        return obj;
        
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
