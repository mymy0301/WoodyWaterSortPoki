
import { _decorator, Button, Component, Node } from 'cc';
import { Constants } from '../framework/constants';
import { clientEvent } from '../framework/clientEvent';
import { localConfig } from '../localConfig';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ButtonDailyChallengeManager
 * DateTime = Wed Sep 25 2024 15:43:27 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ButtonDailyChallengeManager.ts
 * FileBasenameNoExtension = ButtonDailyChallengeManager
 * URL = db://assets/scripts/game/ButtonDailyChallengeManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ButtonDailyChallengeManager')
export class ButtonDailyChallengeManager extends Component {
    @property(Button)
    btnDailyChallenge: Button = null;

    @property(Node)
    nodeNotify:Node = null;
    

    protected onEnable(): void {
        this.btnDailyChallenge.node.on(Constants.CLICK,this.touchDailyChallenge,this);
        clientEvent.on(Constants.DAILYCHALLENGE_NOTIFY_UPDATE,this.showNotify,this);
        this.showNotify();
    }

    protected onDisable(): void {
        this.btnDailyChallenge.node.off(Constants.CLICK,this.touchDailyChallenge,this);
        clientEvent.off(Constants.DAILYCHALLENGE_NOTIFY_UPDATE,this.showNotify,this);
    }

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    showNotify(){
        if(localConfig.instance.checkInfoDailyChallengeFinished(localConfig.instance.currInfoDay) ){
            this.nodeNotify.active = false;
        }else{
            this.nodeNotify.active = true;
        }
    }

    touchDailyChallenge() {
        LogEventManager.instance.logButtonClick("dailychallenge","home");
        clientEvent.dispatchEvent(Constants.SHOW_DAILY_CHALLENGE_POPUP);
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
