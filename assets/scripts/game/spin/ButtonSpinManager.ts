
import { _decorator, Button, Component, Label, Node } from 'cc';
import { clientEvent } from '../../framework/clientEvent';
import { Constants } from '../../framework/constants';
import { localConfig } from '../../localConfig';
import { LogEventManager } from '../../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ButtonSpinManager
 * DateTime = Wed Dec 04 2024 05:47:16 GMT+0700 (Indochina Time)
 * Author = MyTom2k17
 * FileBasename = ButtonSpinManager.ts
 * FileBasenameNoExtension = ButtonSpinManager
 * URL = db://assets/scripts/game/spin/ButtonSpinManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ButtonSpinManager')
export class ButtonSpinManager extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Button)
    btnSpin:Button = null;

    @property(Node)
    nodeActive:Node = null;

    @property(Node)
    nodeNotify:Node = null;

    @property(Node)
    nodeLock:Node = null;

    @property(Label)
    txtUnLock:Label = null;

    protected onEnable(): void {
        this.btnSpin.node.on(Button.EventType.CLICK, this.touchSpin, this);
        clientEvent.on(Constants.SPIN_NOTIFY_UPDATE, this.showInfo, this);
        this.showInfo();
    }

    protected onDisable(): void {
        this.btnSpin.node.off(Button.EventType.CLICK, this.touchSpin, this);
        clientEvent.off(Constants.SPIN_NOTIFY_UPDATE, this.showInfo, this);
    }

    showInfo() {
        if(localConfig.instance.currLevelUnlock < localConfig.instance.SPIN_LEVEL_UNLOCK) {
            this.nodeActive.active = false;
            this.nodeNotify.active = true;
            this.nodeLock.active = true;
            this.txtUnLock.string = `Lv.${localConfig.instance.SPIN_LEVEL_UNLOCK}`;
            return;
        }
        this.nodeLock.active = false;
        this.nodeActive.active = true;
        if(localConfig.instance.checkFreeSpin()){
            this.nodeNotify.active = true;
        }else{
            this.nodeNotify.active = false;
        }
        
    }
    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    touchSpin() {
        LogEventManager.instance.logButtonClick("spin","home");
        if(localConfig.instance.currLevelUnlock < localConfig.instance.SPIN_LEVEL_UNLOCK){
            clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION,"Unlock at Level "+localConfig.instance.SPIN_LEVEL_UNLOCK);
            return;
        }
        clientEvent.dispatchEvent(Constants.SHOW_SPIN_POPUP);
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
