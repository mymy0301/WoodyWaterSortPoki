
import { _decorator, Button, Component, Node, Vec3 } from 'cc';
import { BasePopup } from '../common/basePopup';
import { UIOnOffItem } from '../common/UIOnOffItem';
import { localConfig } from '../localConfig';
import { MusicManager } from '../framework/musicManager';
import { clientEvent } from '../framework/clientEvent';
import { Constants, GAME_MODE, GAME_STATE, PLAY_TYPE } from '../framework/constants';
import { FBInstantManager } from '../common/FBInstantManager';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = SettingPopup
 * DateTime = Thu Sep 26 2024 17:33:34 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = SettingPopup.ts
 * FileBasenameNoExtension = SettingPopup
 * URL = db://assets/scripts/game/SettingPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('SettingPopup')
export class SettingPopup extends BasePopup {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Button)
    btnMusic:Button;

    @property(UIOnOffItem)
    itemMusic: UIOnOffItem;

    @property(Button)
    btnSound:Button;

    @property(UIOnOffItem)
    itemSound: UIOnOffItem;

    // @property(Node)
    // objVibration:Node;

    // @property(Button)
    // btnVibrate:Button;  

    // @property(UIOnOffItem)
    // itemVibrate: UIOnOffItem;

    @property(Button)
    btnTops:Button;

    @property(UIOnOffItem)
    itemTops: UIOnOffItem;

    @property(Button)
    btnLanguage:Button;

    // @property(Button)
    // btnJoinGroup:Button;

    @property(Button)
    btnHome:Button;

    @property(Button)
    btnContinue:Button;

    // @property(Button)
    // btnShare: Button;

    // @property(Button)
    // btnLike: Button;

    // @property(Button)
    // btnJoinGroup: Button;

    // @property(Button)
    // btnCreatShortcut: Button;

    // @property(Button)
    // btnInviteFriend: Button;

    onEnable(): void {
        super.onEnable();

        this.btnMusic.node.on(Button.EventType.CLICK, this.touchMusic, this);
        this.btnSound.node.on(Button.EventType.CLICK, this.touchSound, this);
        // this.btnVibrate.node.on(Button.EventType.CLICK, this.touchVibrate, this);
        this.btnTops.node.on(Button.EventType.CLICK, this.touchTops, this);
        this.btnLanguage.node.on(Button.EventType.CLICK, this.touchLanguage, this);

        // if(this.btnJoinGroup){
        //     this.btnJoinGroup.node.on(Button.EventType.CLICK, this.touchJoinGroup, this);
        // }

        // if(this.btnShare){
        //     this.btnShare.node.on(Button.EventType.CLICK, this.touchShare, this);
        // }

        // if(this.btnLike){
        //     this.btnLike.node.on(Button.EventType.CLICK, this.touchLike, this);
        // }

        // if(this.btnInviteFriend){
        //     this.btnInviteFriend.node.on(Button.EventType.CLICK, this.touchInvite, this);
        // }

        // if(this.btnCreatShortcut){
        //     this.btnCreatShortcut.node.on(Button.EventType.CLICK, this.touchCreateShortcut, this);
        // }

        if(this.btnHome){
            this.btnHome.node.on(Button.EventType.CLICK, this.touchHome, this);
        }
        
        if(this.btnContinue){
            this.btnContinue.node.on(Button.EventType.CLICK, this.touchContinue, this);
        }

        // this.objVibration.active = false;

        // this.showCreateShortcut();
    }

    onDisable(): void {
        super.onDisable();

        this.btnMusic.node.off(Button.EventType.CLICK, this.touchMusic, this);
        this.btnSound.node.off(Button.EventType.CLICK, this.touchSound, this);
        // this.btnVibrate.node.off(Button.EventType.CLICK, this.touchVibrate, this);
        this.btnTops.node.off(Button.EventType.CLICK, this.touchTops, this);
        this.btnLanguage.node.off(Button.EventType.CLICK, this.touchLanguage, this);
        if(this.btnClose2){
            this.btnClose2.node.off(Button.EventType.CLICK, this.touchClose, this);
        }

        // if(this.btnJoinGroup){
        //     this.btnJoinGroup.node.off(Button.EventType.CLICK, this.touchJoinGroup, this);
        // }

        // if(this.btnShare){
        //     this.btnShare.node.off(Button.EventType.CLICK, this.touchShare, this);
        // }

        // if(this.btnLike){
        //     this.btnLike.node.off(Button.EventType.CLICK, this.touchLike, this);
        // }

        // if(this.btnInviteFriend){
        //     this.btnInviteFriend.node.off(Button.EventType.CLICK, this.touchInvite, this);
        // }

        // if(this.btnCreatShortcut){
        //     this.btnCreatShortcut.node.off(Button.EventType.CLICK, this.touchCreateShortcut, this);
        // }

        if(this.btnHome){
            this.btnHome.node.off(Button.EventType.CLICK, this.touchHome, this);
        }
        
        if(this.btnContinue){
            this.btnContinue.node.off(Button.EventType.CLICK, this.touchContinue, this);
        }
    }

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    showSettingPopup() {
        localConfig.instance.currGameState = GAME_STATE.PAUSE;
        this.showInfo();
        super.showPopup();
    }

    showPausePopup() {
        localConfig.instance.currGameState = GAME_STATE.PAUSE;
        this.showInfo();
        if(localConfig.instance.currGameMode == GAME_MODE.NORMAL){
             if(localConfig.instance.currLevelUnlock <= localConfig.instance.LEVEL_SHOW_HOME){
                this.btnHome.node.active = false;
                this.btnContinue.node.active = true;
                this.btnContinue.node.setPosition(new Vec3(0,-402,0));
            }else{
                this.btnHome.node.active = true;
                this.btnContinue.node.active = true;
                this.btnContinue.node.setPosition(new Vec3(194,-402,0));
            }
        }else{
            this.btnHome.node.active = true;
            this.btnContinue.node.active = true;
        }
        super.showPopup();
    }


    showInfo() {
        if(localConfig.instance.isMusic){
            this.itemMusic.setItemON();
        }else{
            this.itemMusic.setItemOFF();
        }

        if(localConfig.instance.isSound){
            this.itemSound.setItemON();
        }else{
            this.itemSound.setItemOFF();
        }

        // if(localConfig.instance.isVibration){
        //     this.itemVibrate.setItemON();
        // }else{
        //     this.itemVibrate.setItemOFF();
        // }

        if(localConfig.instance.isTops){
            this.itemTops.setItemON();
        }else{
            this.itemTops.setItemOFF();
        }

        
    }

    touchMusic() {
        LogEventManager.instance.logButtonClick("music","settingpopup");
        if(localConfig.instance.isMusic){
            localConfig.instance.setMusic(false);
            this.itemMusic.switchItemOFF();
            MusicManager.instance.pauseMusic();
        }else{
            localConfig.instance.setMusic(true);
            this.itemMusic.switchItemON();
            MusicManager.instance.resumeMusic();
        }
    }

    touchSound() {
        LogEventManager.instance.logButtonClick("sound","settingpopup");
        if(localConfig.instance.isSound){
            localConfig.instance.setSound(false);
            this.itemSound.switchItemOFF();
        }else{
            localConfig.instance.setSound(true);
            this.itemSound.switchItemON();
        }
    }

    // touchVibrate() {
    //     LogEventManager.instance.logButtonClick("vibration","settingpopup");
    //     if(localConfig.instance.isVibration){
    //         localConfig.instance.setVibration(false);
    //         this.itemVibrate.switchItemOFF();
    //     }else{
    //         localConfig.instance.setVibration(true);
    //         this.itemVibrate.switchItemON();
    //     }
    // }

    touchTops() {
        LogEventManager.instance.logButtonClick("tops","settingpopup");
        if(localConfig.instance.isTops){
            localConfig.instance.setTops(false);
            this.itemTops.switchItemOFF();
        }else{
            localConfig.instance.setTops(true);
            this.itemTops.switchItemON();
        }
    }

    touchLanguage() {
        // console.log("touchLanguage");
        clientEvent.dispatchEvent(Constants.SHOW_LANGUAGE_POPUP);
    }

    touchJoinGroup(){
        LogEventManager.instance.logButtonClick("joinGroup","settingpopup");
        // console.log("touchJoinGroup");
        FBInstantManager.instance.joinOfficialGroup();
    }

    touchHome(){
        LogEventManager.instance.logButtonClick("home","settingpopup");
        // console.log("touchHome");
        this.hidePopup();
        if(localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT || localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT_PAGEHOST){
            clientEvent.dispatchEvent(Constants.SHOW_TOURNAMENTQUIT_POPUP);
        }else if(localConfig.instance.currGameMode == GAME_MODE.DAILY_CHALLENGE){
            let indexDay:number = localConfig.instance.getCountDay_From_Start(localConfig.instance.currInfoDaySelect) + 1;
            LogEventManager.instance.logLevelEnd(indexDay,localConfig.instance.getLevelLoopByFromStr(localConfig.instance.currLevelConfigInfo.levelOrder),
                                            PLAY_TYPE[localConfig.instance.playType].toLowerCase().toString(),1,0,
                                            "dailychallenge",localConfig.instance.playDurationEndTime - localConfig.instance.playDurationStartTime,"exit","");
            clientEvent.dispatchEvent(Constants.PAUSE_TOUCH_HOME);
        }else if(localConfig.instance.currGameMode == GAME_MODE.WITH_FRIEND){
            // console.log("touchHome",localConfig.instance.currWithFriendDataInfo);
            LogEventManager.instance.logLevelEnd(localConfig.instance.currLevelConfigInfo.levelIndex,localConfig.instance.getLevelLoopByFromStr(localConfig.instance.currLevelConfigInfo.levelOrder),
                                            PLAY_TYPE[localConfig.instance.playType].toLowerCase().toString(),1,0,
                                            "withfriend",localConfig.instance.playDurationEndTime - localConfig.instance.playDurationStartTime,"exit","");
            FBInstantManager.instance.resetContext(() => { });
            localConfig.instance.currWithFriendDataInfo = null;
            clientEvent.dispatchEvent(Constants.PAUSE_TOUCH_HOME);
        }else{
            clientEvent.dispatchEvent(Constants.SHOW_QUITCONFIRM_POPUP);
        }
    }

    touchContinue(){
        LogEventManager.instance.logButtonClick("continue","settingpopup");
        // console.log("touchContinue");
        this.hidePopup();
        clientEvent.dispatchEvent(Constants.SETTING_TOUCH_CONTINUE);
    }

    touchClose(): void {
        LogEventManager.instance.logButtonClick("close","settingpopup");
        super.touchClose();
        clientEvent.dispatchEvent(Constants.SETTING_TOUCH_CONTINUE);
    }

    // touchShare(): void {
    //     LogEventManager.instance.logButtonClick("share","settingpopup");
    //     clientEvent.dispatchEvent(Constants.SHOW_SHARE_INFOLEVEL_POPUP,localConfig.instance.currLevelUnlock,(err,success)=>{});
    // }

    // touchLike(): void {
    //     LogEventManager.instance.logButtonClick("like","settingpopup");
    //     FBInstantManager.instance.followOfficialPage();
    // }

    // touchInvite(): void {
    //     LogEventManager.instance.logButtonClick("invite","settingpopup");
    //     clientEvent.dispatchEvent(Constants.SHOW_INVITE_POPUP,localConfig.instance.currLevelUnlock,(err,content)=>{
            
    //     });
    // }

    // touchCreateShortcut(): void {
    //     LogEventManager.instance.logButtonClick("createshortcut","settingpopup");
    //     FBInstantManager.instance.Create_Shortcut((err,success)=>{
    //         if(err){
                
    //         }else{
    //             FBInstantManager.instance.isCreateShortcutAvailable = false;
    //             // if(this.btnCreatShortcut){
    //             //     this.btnCreatShortcut.node.active = false;
    //             // }
    //         }
    //     });
    // }

    // showCreateShortcut(){

    //     // if (FBInstantManager.instance.isCreateShortcutAvailable) {
    //     //     if(this.btnCreatShortcut){
    //     //         this.btnCreatShortcut.node.active = true;
    //     //     }
    //     // } else {
    //     //     if(this.btnCreatShortcut){
    //     //         this.btnCreatShortcut.node.active = false;
    //     //     }
    //     // }
    // }

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
