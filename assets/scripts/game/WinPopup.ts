
import { _decorator, Button, Component, Label, Node, sp, tween, Tween, UIOpacity, Vec3, Widget } from 'cc';
import { BasePopup } from '../common/basePopup';
import { Constants, GAME_MODE, THEME_TYPE } from '../framework/constants';
import { AudioManager2 } from '../framework/audioManager2';
import { clientEvent } from '../framework/clientEvent';
import { localConfig } from '../localConfig';
import { RaceGroupManager } from './race/RaceGroupManager';
import { FBInstantManager } from '../common/FBInstantManager';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = WinPopup
 * DateTime = Wed Sep 11 2024 14:50:00 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = WinPopup.ts
 * FileBasenameNoExtension = WinPopup
 * URL = db://assets/scripts/game/WinPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('WinPopup')
export class WinPopup extends BasePopup {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Widget)
    groupAllTopWidget: Widget;

    @property(Label)
    txtLevel:Label;

    // @property(Button)
    // btnShare:Button;

    // @property(UIOpacity)
    // nodeShare_Opacity:UIOpacity;

    @property(Button)
    btnContinue:Button;

    @property(UIOpacity)
    nodeContinue_Opacity:UIOpacity;

    @property(sp.Skeleton)
    character:sp.Skeleton;

    @property(Node)
    titleGroup:Node;

    @property(UIOpacity)
    titleGroup_Opacity:UIOpacity;

    // @property(RaceGroupManager)
    // raceGroupManager:RaceGroupManager = null;

    tweenTitleGroup:Tween<{}> = null;
    tweenTitleGroup_Opacity:Tween<{}> = null;

    

    onEnable(): void {
        super.onEnable();
        // this.btnShare.node.on(Constants.CLICK,this.touchShare,this);
        this.btnContinue.node.on(Constants.CLICK,this.touchContinue,this);
    }

    onDisable(): void {
        super.onDisable();
        // this.btnShare.node.off(Constants.CLICK,this.touchShare,this);
        this.btnContinue.node.off(Constants.CLICK,this.touchContinue,this);
    }

    start(): void {
        this.initAllTop();
    }

    initAllTop(): void {
        if(localConfig.instance.isMobile){
            let posY = (localConfig.instance.scaleBG - 1) * localConfig.instance.DEFAULT_H / 2;
            if(posY > 0){
                this.groupAllTopWidget.top = -posY;
            }else{
                this.groupAllTopWidget.top = 0;
            }
        }else{
            this.groupAllTopWidget.top = 0;
        }
    }

    showWinPopup(level:number){
        AudioManager2.instance.playSound_WIN2();
        this.txtLevel.string = `Level ${level}`;
        // this.btnShare.node.active = false;
        this.btnContinue.node.active = false;
        this.btnClose.node.active = false;
        this.character.node.active = false;
        // this.raceGroupManager.resetGroup();
        // this.raceGroupManager.node.active = false;
        this.titleGroup_Opacity.opacity = 0;


        // if(localConfig.instance.currGameMode == GAME_MODE.NORMAL){
        //     if(localConfig.instance.currLevelUnlock <= localConfig.instance.LEVEL_SHOW_HOME){
        //         // this.btnClose.node.active = false;
        //         this.btnContinue.node.setPosition(new Vec3(0,-350,0));
        //     }else{
        //         // this.btnClose.node.active = true;
        //         if(localConfig.instance.currLevelUnlock > localConfig.instance.RACE_LEVEL_UNLOCK){
        //             this.btnContinue.node.setPosition(new Vec3(225,-250,0));
        //             // this.btnShare.node.setPosition(new Vec3(-225,-250,0));
        //         }else{
        //             this.btnContinue.node.setPosition(new Vec3(225,-350,0));
        //             // this.btnShare.node.setPosition(new Vec3(-225,-350,0));
        //         }
        //     }
        // }else{
        //     // this.btnClose.node.active = true;
        //     this.btnContinue.node.setPosition(new Vec3(225,-350,0));
        //     // this.btnShare.node.setPosition(new Vec3(-225,-350,0));
        // }

        this.btnContinue.node.setPosition(new Vec3(0,-450,0));

        
        
        this.showPopup();
    }

    showPoup_ShowView(): void {
        // clientEvent.dispatchEvent(Constants.SHOW_EFX_FIREWORK);

        if(this.tweenOpacityBG){    
            this.tweenOpacityBG.stop();
        }
        this.tweenOpacityBG = tween(this.bgOpacity).to(0.3, { opacity: 255 }, { easing: 'quadOut' ,onComplete:()=>{
            this.showPoup_ShowView_Finished();
        }}).start();
    }

    showPoup_ShowView_Finished(): void {
        // if(localConfig.instance.currGameMode == GAME_MODE.NORMAL){
        //     if(localConfig.instance.currLevelUnlock <= localConfig.instance.LEVEL_SHOW_HOME){
        //         this.btnClose.node.active = false;
        //     }else{
        //         this.btnClose.node.active = true;
        //     }
        // }else{
        //     this.btnClose.node.active = true;
        // }
        super.showPoup_ShowView_Finished();
        this.character.node.active = true;
        let strAnimation_Appear:string = localConfig.instance.getStrAnimationAppear_byID(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.SKIN));
        this.character.setAnimation(0,strAnimation_Appear,false);

        this.scheduleOnce(()=>{
            this.setCharacter_Appear_Finished();
        },0.7);
    }

    setCharacter_Appear_Finished(){
        let strAnimation_Dance:string = localConfig.instance.getStrAnimationDance_byID(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.SKIN));
        this.character.setAnimation(0,strAnimation_Dance,true);

        
        if(this.tweenTitleGroup){
            this.tweenTitleGroup.stop();
        }
        if(this.tweenTitleGroup_Opacity){
            this.tweenTitleGroup_Opacity.stop();
        }

        this.titleGroup.setScale(new Vec3(1.5, 1.5, 1.5));
        this.titleGroup_Opacity.opacity = 150;
        this.tweenTitleGroup = tween(this.titleGroup).to(0.4, { scale: new Vec3(1, 1, 1)},{ easing: 'backOut' ,onComplete:()=>{
           
        }}).start();
        this.tweenTitleGroup_Opacity = tween(this.titleGroup_Opacity).to(0.3, { opacity: 255 }, { easing: 'quadOut' }).start();

        this.scheduleOnce(()=>{
            // if(localConfig.instance.currGameMode == GAME_MODE.NORMAL){
            //     if(localConfig.instance.currLevelUnlock <= 4){
                    
            //     }else{
            //         this.showButton_Step1();
            //     }
            // }else{
            //     this.showButton_Step1();
            // }

            this.showButton_Step2();
        },0.2);
    }

    showButton_Step1(): void {
        // this.btnShare.node.active = true;
        // this.nodeShare_Opacity.opacity = 150;
        // this.btnShare.node.setScale(new Vec3(0.5, 0.5, 0.5));
        // tween(this.btnShare.node).to(0.3, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' }).start();
        // tween(this.nodeShare_Opacity).to(0.3, { opacity: 255 }, { easing: 'quadOut' }).start();


        // this.scheduleOnce(()=>{
        //     this.showButton_Step2();
        // },0.2);
    }

    showButton_Step2(): void {
        if(localConfig.instance.currGameMode == GAME_MODE.NORMAL){
            if(localConfig.instance.currLevelUnlock <= localConfig.instance.LEVEL_SHOW_HOME){
                this.btnClose.node.active = false;
                
            }else{
                this.btnClose.node.active = true;
            }
        }else{
            this.btnClose.node.active = true;
        }
        this.btnContinue.node.active = true;
        this.btnContinue.node.setScale(new Vec3(0.5, 0.5, 0.5));
        this.nodeContinue_Opacity.opacity = 150;
        tween(this.btnContinue.node).to(0.3, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' }).start();
        tween(this.nodeContinue_Opacity).to(0.3, { opacity: 255 }, { easing: 'quadOut' ,onComplete:()=>{
            // if(localConfig.instance.currGameMode == GAME_MODE.NORMAL){
            //     if(localConfig.instance.currLevelUnlock > localConfig.instance.RACE_LEVEL_UNLOCK){
            //         this.raceGroupManager.node.active = true;
            //     }
            // }
        }}).start();
    }

    showWinPopup_DailyChallenge(){
        AudioManager2.instance.playSound_WIN2();
        this.txtLevel.string = `${localConfig.instance.getInfoDayStr_2(localConfig.instance.currInfoDaySelect)}`;
        // this.btnShare.node.active = false;
        this.btnContinue.node.active = false;
        this.character.node.active = false;
        // this.raceGroupManager.resetGroup();
        // this.raceGroupManager.node.active = false;
        this.btnContinue.node.setPosition(new Vec3(0,-450,0));
        // this.btnShare.node.setPosition(new Vec3(-225,-350,0));
        this.titleGroup_Opacity.opacity = 0;
        this.showPopup();
    }

    touchShare(){
        LogEventManager.instance.logButtonClick("share","winpopup");
        clientEvent.dispatchEvent(Constants.SHOW_SHARE_INFOLEVEL_POPUP,localConfig.instance.currLevelUnlock,(err,success)=>{
            
        });
    }

    touchContinue(){
        LogEventManager.instance.logButtonClick("continue","winpopup");
        this.hidePopup();
        // console.log("currGameMode",localConfig.instance.currGameMode,"currLevelUnlock",localConfig.instance.currLevelUnlock);
        if(localConfig.instance.currGameMode == GAME_MODE.NORMAL){
            if(localConfig.instance.currLevelUnlock <= localConfig.instance.LEVEL_SHOW_HOME){
                clientEvent.dispatchEvent(Constants.TOUCH_NEXT_LEVEL);
            }else{
                clientEvent.dispatchEvent(Constants.SHOW_LEVELCHEST_POPUP);
            }
        }else if(localConfig.instance.currGameMode == GAME_MODE.DAILY_CHALLENGE){
            clientEvent.dispatchEvent(Constants.DAILYCHALLENGE_LEVEL_FINISHED);
        }
    }

    touchClose(): void {
        LogEventManager.instance.logButtonClick("close","winpopup");
        super.touchClose();
        if(localConfig.instance.currGameMode == GAME_MODE.NORMAL){
            let rewardCoin = localConfig.instance.getRewardCoinby_LevelConfigInfo(localConfig.instance.currLevelConfigInfo);
            clientEvent.dispatchEvent(Constants.WINPOPUP_TOUCH_HOME,rewardCoin);
        }else if(localConfig.instance.currGameMode == GAME_MODE.DAILY_CHALLENGE){
            clientEvent.dispatchEvent(Constants.DAILYCHALLENGE_LEVEL_FINISHED);
        }
    }

    hidePopup_Finished(): void {
        super.hidePopup_Finished();
        // this.raceGroupManager.node.active = false;
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
