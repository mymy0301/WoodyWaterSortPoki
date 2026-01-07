
import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
import { clientEvent } from '../framework/clientEvent';
import { Constants } from '../framework/constants';
import { ItemToastNotification } from './ItemToastNotification';
import { AudioManager2 } from '../framework/audioManager2';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ToastNotificationPopup
 * DateTime = Thu Feb 10 2022 10:16:33 GMT+0700 (Indochina Time)
 * Author = tuzkekizer
 * FileBasename = ToastNotificationPopup.ts
 * FileBasenameNoExtension = ToastNotificationPopup
 * URL = db://assets/scripts/common/ToastNotificationPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ToastNotificationPopup')
export class ToastNotificationPopup extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Prefab)
    itemToastNotificationPrefab:Prefab;

    onEnable(){
        clientEvent.on(Constants.SHOW_NOTIFICATION,this.showNotification,this);
    }

    onDisable(){
        clientEvent.off(Constants.SHOW_NOTIFICATION,this.showNotification,this);
    }

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    showNotification(content:string){
        AudioManager2.instance.playNotification();
        let itemNotifi = instantiate(this.itemToastNotificationPrefab);
        itemNotifi.setParent(this.node);
        itemNotifi.getComponent(ItemToastNotification).showItemToastNotification(content);
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
