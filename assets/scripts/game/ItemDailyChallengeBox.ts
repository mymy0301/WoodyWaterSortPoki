
import { _decorator, Button, Component, Enum, Label, Node, Skeleton, sp, tween, Tween, Vec3 } from 'cc';
import { BOX_STATE, BOX_TYPE, Constants } from '../framework/constants';
import { clientEvent } from '../framework/clientEvent';
import { localConfig } from '../localConfig';
import { InfoMonthReward } from '../common/InfoMonthReward';
import { InfoMonth } from '../common/InfoMonth';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemDailyChallengeBox
 * DateTime = Mon Sep 30 2024 17:53:41 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemDailyChallengeBox.ts
 * FileBasenameNoExtension = ItemDailyChallengeBox
 * URL = db://assets/scripts/game/ItemDailyChallengeBox.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemDailyChallengeBox')
export class ItemDailyChallengeBox extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Button)
    btnBox:Button = null;

    @property(Label)
    txtBox:Label = null;

    @property({type:Enum(BOX_TYPE)})
    boxType:BOX_TYPE = BOX_TYPE.NONE;

    @property(Node)
    nodeLight:Node = null;

    // @property(sp.Skeleton)
    // chest:sp.Skeleton = null;

    @property(Node)
    objLock:Node = null;

    @property(Node)
    objUnlock:Node;

    tweeenShow:Tween<{}> = null;
    tweeenHide:Tween<{}> = null;

    indexReward_byMonth:number = -1;

    infoMonthReward:InfoMonthReward = null;

    protected onEnable(): void {
        this.btnBox.node.on(Button.EventType.CLICK, this.touchBox, this);
    }

    protected onDisable(): void {
        this.btnBox.node.off(Button.EventType.CLICK, this.touchBox, this);
    }
    initInfoBox(_countDayOfMonth:number,_infoMonth:InfoMonth){
        this.infoMonthReward = new InfoMonthReward(_infoMonth,this.boxType);
        if(this.boxType == BOX_TYPE.BOX_1){
            this.txtBox.string = `5`;
        }else if(this.boxType == BOX_TYPE.BOX_2){
            this.txtBox.string = `12`;
        }else if(this.boxType == BOX_TYPE.BOX_3){
            this.txtBox.string = `20`;
        }else if(this.boxType == BOX_TYPE.BOX_4){
            this.txtBox.string = `${_countDayOfMonth}`;
        }

        let posX:number = 0;
        if(this.boxType == BOX_TYPE.BOX_1){
            posX = 5 / _countDayOfMonth * 640 - 320;
        }else if(this.boxType == BOX_TYPE.BOX_2){
            posX = 12 / _countDayOfMonth * 640 - 320;
        }else if(this.boxType == BOX_TYPE.BOX_3){
            posX = 20 / _countDayOfMonth * 640 - 320;
        }else if(this.boxType == BOX_TYPE.BOX_4){
            posX = 310;
        }
        this.node.setPosition(new Vec3(posX,10,0));
        this.showInfoBox();
        // this.showChestBox(0.3);
    }


    showInfoBox(){
        this.nodeLight.active = false;
        // console.log(this.boxType + "   " + this.indexReward_byMonth);
        // console.log(this.infoMonthReward);

        let isReceiveReward:boolean = localConfig.instance.checkReceivedInfoMonthReward(this.infoMonthReward);
        if(!isReceiveReward){
            this.objUnlock.active = false;
            this.objLock.active = true;
        }else{
            this.objUnlock.active = true;
            this.objLock.active = false;
        }
        
    }

    touchBox(){
        // console.log("touchBox",this.boxType);
        clientEvent.dispatchEvent(Constants.DAILYCHALLENGE_TOUCH_BOXREWARD,this);
    }

    setBoxOpenend(){
        this.objUnlock.active = true;
        this.objLock.active = false;
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
