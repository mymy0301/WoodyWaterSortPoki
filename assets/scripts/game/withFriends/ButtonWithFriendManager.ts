
import { _decorator, Button, Component, Label, Node } from 'cc';
import { clientEvent } from '../../framework/clientEvent';
import { Constants } from '../../framework/constants';
import { LogEventManager } from '../../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ButtonWithFriendManager
 * DateTime = Mon Mar 24 2025 15:43:31 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ButtonWithFriendManager.ts
 * FileBasenameNoExtension = ButtonWithFriendManager
 * URL = db://assets/scripts/game/withFriends/ButtonWithFriendManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ButtonWithFriendManager')
export class ButtonWithFriendManager extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Button)
    btnWithFriends:Button = null;

    protected onEnable(): void {
        this.btnWithFriends.node.on(Button.EventType.CLICK, this.touchWithFriends, this);
    }

    protected onDisable(): void {
        this.btnWithFriends.node.off(Button.EventType.CLICK, this.touchWithFriends, this);
    }

   

    touchWithFriends() {
        LogEventManager.instance.logButtonClick("withfriends","home");
        clientEvent.dispatchEvent(Constants.SHOW_FRIENDS_POPUP);
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
