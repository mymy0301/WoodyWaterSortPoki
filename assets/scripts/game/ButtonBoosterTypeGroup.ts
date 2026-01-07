
import { _decorator, Button, Component, Enum, Label, Node } from 'cc';
import { BOOSTER_TYPE, Constants } from '../framework/constants';
import { localConfig } from '../localConfig';
import { clientEvent } from '../framework/clientEvent';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ButtonBoosterTypeGroup
 * DateTime = Fri Sep 06 2024 10:11:08 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ButtonBoosterTypeGroup.ts
 * FileBasenameNoExtension = ButtonBoosterTypeGroup
 * URL = db://assets/scripts/game/ButtonBoosterTypeGroup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ButtonBoosterTypeGroup')
export class ButtonBoosterTypeGroup extends Component {
    
    @property({type:Enum(BOOSTER_TYPE)})
    boosterType:BOOSTER_TYPE = BOOSTER_TYPE.UNDO;

    @property(Button)
    btnBooster:Button;

    @property(Node)
    objDisable:Node;

    @property(Node)
    objCount:Node;

    @property(Label)
    txtCount:Label;

    @property(Node)
    objAdd:Node;

    protected onEnable(): void {
        this.btnBooster.node.on(Constants.CLICK,this.touchBooster,this);
        clientEvent.on(Constants.BOOSTER_COUNT_UPDATE,this.setBoosterCountUpdate,this);
        this.showButtonBooster();
    }

    protected onDisable(): void {
        this.btnBooster.node.off(Constants.CLICK,this.touchBooster,this);
        clientEvent.off(Constants.BOOSTER_COUNT_UPDATE,this.setBoosterCountUpdate,this);
    }

    start () {
        // [3]
    }

    isTutorial:boolean = false;
    setButtonTutorial(){
        this.isTutorial = true;
        this.objAdd.active = false;
        this.objCount.active = false;         
    }

    showButtonBooster(){
        this.objCount.active = false;
        this.objAdd.active = false;
        let boosterCount:number = localConfig.instance.getBoosterCount(this.boosterType);
        if(boosterCount > 0){
            this.objCount.active = true;
            this.txtCount.string = `${boosterCount}`;
        }else{
            this.objAdd.active = true;
        }
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    touchBooster(){
        if(this.boosterType == BOOSTER_TYPE.UNDO){
            LogEventManager.instance.logButtonClick("booster_undo","play");
        }else if(this.boosterType == BOOSTER_TYPE.SUGGEST){
            LogEventManager.instance.logButtonClick("booster_shuffle","play");
        }else if(this.boosterType == BOOSTER_TYPE.ADDCOL){
            LogEventManager.instance.logButtonClick("booster_addcol","play");
        }
        
        clientEvent.dispatchEvent(Constants.BOOSTER_CLICK,this.boosterType,this.isTutorial);
    }

    setBoosterAvailable(isAvailable:boolean){
        this.objDisable.active = !isAvailable;
    }

    setBoosterCountUpdate(_boosterType:BOOSTER_TYPE){
        if(this.boosterType == _boosterType){
            this.showButtonBooster();
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
