
import { _decorator, Button, Component, Node, Vec3 } from 'cc';
import { BasePopup } from '../../common/basePopup';
import { Constants, GAME_STATE, TICKET_TYPE } from '../../framework/constants';
import { localConfig } from '../../localConfig';
import { clientEvent } from '../../framework/clientEvent';
import { FBInstantManager } from '../../common/FBInstantManager';
import { AudioManager2 } from '../../framework/audioManager2';
import { LogEventManager } from '../../common/LogEventManager';
import { PokiSDKManager } from '../../common/PokiSDKManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TournamentRevivePopup
 * DateTime = Mon Nov 04 2024 17:23:05 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = TournamentRevivePopup.ts
 * FileBasenameNoExtension = TournamentRevivePopup
 * URL = db://assets/scripts/game/tournaments/TournamentRevivePopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('TournamentRevivePopup')
export class TournamentRevivePopup extends BasePopup {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Button)
    btnReviveTicket:Button = null;

    @property(Button)
    btnReviveAd:Button = null;

    onEnable(): void {
        super.onEnable();
        this.btnReviveTicket.node.on(Constants.CLICK, this.touchReviveCoin, this);
        this.btnReviveAd.node.on(Constants.CLICK, this.touchReviveAD, this);
    }

    onDisable(): void {
        super.onDisable();
        this.btnReviveTicket.node.off(Constants.CLICK, this.touchReviveCoin, this);
        this.btnReviveAd.node.off(Constants.CLICK, this.touchReviveAD, this);
    }

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    showTournamentRevivePopup(){
        AudioManager2.instance.playPopupOpen2();
        localConfig.instance.currGameState = GAME_STATE.PAUSE;
        if(localConfig.instance.isTournamentRevivebyAd){
            this.btnReviveAd.node.active = false;
            this.btnReviveTicket.node.active = true;
            this.btnReviveTicket.node.setPosition(new Vec3(0,-444,0));   
        }else{
            this.btnReviveAd.node.active = true;
            this.btnReviveTicket.node.active = true;
            this.btnReviveTicket.node.setPosition(new Vec3(220,-444,0));   
        }
        super.showPopup();
    }

    touchReviveCoin(){
        LogEventManager.instance.logButtonClick("revivecoin","tournamentrevivepopup");
        if(localConfig.instance.currCoin >= localConfig.instance.TOURNAMENT_PRICE_REVIVE){
            localConfig.instance.setCoin(localConfig.instance.currCoin - localConfig.instance.TOURNAMENT_PRICE_REVIVE);
            LogEventManager.instance.logResourceSpend("currency","coin",localConfig.instance.TOURNAMENT_PRICE_REVIVE,"tournamentrevivepopup","revive");
            this.hidePopup();
            clientEvent.dispatchEvent(Constants.TOURNAMENT_REVIVE_YES);
        }else{
            clientEvent.dispatchEvent(Constants.SHOW_SHOP_POPUP);
        }
    }

    touchReviveAD(){
        LogEventManager.instance.logButtonClick("revivead","tournamentrevivepopup");
        // FBInstantManager.instance.Show_RewardedVideoAsync("tournamentrevivepopup","revivead",(err, success) => {
        //     if(err){

        //     }else{
        //         this.hidePopup();
        //         localConfig.instance.isTournamentRevivebyAd = true;
        //         clientEvent.dispatchEvent(Constants.TOURNAMENT_REVIVE_YES);
        //     }
        // })

        PokiSDKManager.instance.Show_RewardedVideoAsync("tournamentrevivepopup","revivead",(err, success) => {
            if(err){

            }else{
                this.hidePopup();
                localConfig.instance.isTournamentRevivebyAd = true;
                clientEvent.dispatchEvent(Constants.TOURNAMENT_REVIVE_YES);
            }
        });
    }

    touchClose(): void {
        LogEventManager.instance.logButtonClick("close","tournamentrevivepopup");
        super.touchClose();
        clientEvent.dispatchEvent(Constants.TOURNAMENT_REVIVE_NO);
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
