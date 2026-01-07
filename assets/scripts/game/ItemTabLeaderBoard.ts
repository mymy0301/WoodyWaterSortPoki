
import { _decorator, Button, Component, Enum, Node } from 'cc';
import { Constants, LEADERBOARD_TYPE } from '../framework/constants';
import { clientEvent } from '../framework/clientEvent';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemTabLeaderBoard
 * DateTime = Thu Oct 17 2024 15:39:43 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemTabLeaderBoard.ts
 * FileBasenameNoExtension = ItemTabLeaderBoard
 * URL = db://assets/scripts/game/ItemTabLeaderBoard.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemTabLeaderBoard')
export class ItemTabLeaderBoard extends Component {
    @property({type:Enum(LEADERBOARD_TYPE)})
    tabType:LEADERBOARD_TYPE = LEADERBOARD_TYPE.WORLD;

    @property(Button)
    btnTab:Button;

    @property(Node)
    nodeActive:Node = null;

    protected onEnable(): void {
        this.btnTab.node.on(Constants.CLICK,this.touchTab,this);
        clientEvent.on(Constants.TABLEARDBOARD_UPDATE,this.showTab,this);
    }

    protected onDisable(): void {
        this.btnTab.node.off(Constants.CLICK,this.touchTab,this);
        clientEvent.off(Constants.TABLEARDBOARD_UPDATE,this.showTab,this);
    }

    setItemON(){
        this.nodeActive.active = true;
    }

    setItemOff(){
        this.nodeActive.active = false;
    }

    touchTab(){
        clientEvent.dispatchEvent(Constants.TOUCH_TABLEADERBOARD,this.tabType);
    }

    showTab(currTab:LEADERBOARD_TYPE){
        if(this.tabType == currTab){
            this.setItemON();
        }else{
            this.setItemOff();
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
