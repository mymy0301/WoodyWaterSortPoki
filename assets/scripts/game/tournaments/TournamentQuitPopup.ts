
import { _decorator, Button, Component, Node } from 'cc';
import { BasePopup } from '../../common/basePopup';
import { Constants, GAME_STATE, PLAY_TYPE } from '../../framework/constants';
import { clientEvent } from '../../framework/clientEvent';
import { localConfig } from '../../localConfig';
import { LogEventManager } from '../../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TournamentQuitPopup
 * DateTime = Mon Nov 04 2024 09:17:56 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = TournamentQuitPopup.ts
 * FileBasenameNoExtension = TournamentQuitPopup
 * URL = db://assets/scripts/game/tournaments/TournamentQuitPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('TournamentQuitPopup')
export class TournamentQuitPopup extends BasePopup {

    @property(Button)
    btnQuit: Button = null;

    @property(Button)
    btnContinue: Button = null;


    onEnable(): void {
        super.onEnable();
        this.btnQuit.node.on(Constants.CLICK, this.touchQuit, this);
        this.btnContinue.node.on(Constants.CLICK, this.touchContinue, this);
    }

    onDisable(): void {
        super.onDisable();
        this.btnQuit.node.off(Constants.CLICK, this.touchQuit, this);
        this.btnContinue.node.off(Constants.CLICK, this.touchContinue, this);
    }

    showTournamentQuitPopup(): void {
        super.showPopup();
        localConfig.instance.currGameState = GAME_STATE.PAUSE;
    }

    touchQuit(): void {
        LogEventManager.instance.logButtonClick("quit","tournamentquitpopup");
        LogEventManager.instance.logLevelEnd(localConfig.instance.currIndexLevelTournament,localConfig.instance.getLevelLoopByFromStr(localConfig.instance.currLevelConfigInfo.levelOrder),PLAY_TYPE[localConfig.instance.playType].toLowerCase().toString(),1,0,"tournament",localConfig.instance.playDurationEndTime - localConfig.instance.playDurationStartTime,"exit","");
        super.hidePopup();
        clientEvent.dispatchEvent(Constants.TOURNAMENT_QUIT_YES);
    }

    touchContinue(): void {
        LogEventManager.instance.logButtonClick("continue","tournamentquitpopup");
        super.hidePopup();
        clientEvent.dispatchEvent(Constants.TOURNAMENT_QUIT_CONTINUE);
    }

    touchClose(): void {
        LogEventManager.instance.logButtonClick("close","tournamentquitpopup");
        super.touchClose();
        clientEvent.dispatchEvent(Constants.TOURNAMENT_QUIT_CONTINUE);
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
