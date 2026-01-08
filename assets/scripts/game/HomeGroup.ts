
import { _decorator, Button, Color, Component, Label, LabelOutline, Node, sp, Sprite, SpriteFrame, Tween, tween, UIOpacity, Vec3, Widget } from 'cc';
import { clientEvent } from '../framework/clientEvent';
import { Constants, DAILYTASK_TYPE, LEVEL_STATE, SHOP_PACK_TYPE, THEME_TYPE, TICKET_TYPE } from '../framework/constants';
import { InfoDay } from '../common/InfoDay';
import { localConfig } from '../localConfig';
import { ItemLevel } from './ItemLevel';
import { ButtonMassterPassManager } from './masterpass/ButtonMassterPassManager';
import { AudioManager2 } from '../framework/audioManager2';
import { FBInstantManager } from '../common/FBInstantManager';
import { ButtonVIPManager } from './ButtonVIPManager';
import { ButtonSaleManager } from './ButtonSaleManager';
import { ButtonRemoveAdManager } from './ButtonRemoveAdManager';
import { LevelConfigInfo } from '../newlevel/LevelConfigInfo';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = HomeGroup
 * DateTime = Mon Sep 23 2024 15:46:40 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = HomeGroup.ts
 * FileBasenameNoExtension = HomeGroup
 * URL = db://assets/scripts/game/HomeGroup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('HomeGroup')
export class HomeGroup extends Component {
    @property(Widget)
    groupAllTopWidget:Widget;

    @property(Widget)
    groupBGTopWidget:Widget;

    @property(Widget)
    groupHoverWidget:Widget;

    @property(Widget)
    groupScrollWidget:Widget;

    @property(Node)
    groupHover:Node;

    @property(UIOpacity)
    groupOpacity:UIOpacity = null;

    tweenGroup:Tween<{}> = null;

    @property(Button)
    btnAvatar:Button;

    @property(Button)
    btnSetting:Button;

    @property(Button)
    btnTheme:Button;


    @property(Button)
    btnLevel:Button;

    @property(SpriteFrame) arrSfIconPlays:SpriteFrame[] = [];
    @property(Sprite)
    iconBtnPlay:Sprite = null;

    @property(SpriteFrame) arrSfBGPlays:SpriteFrame[] = [];
    @property(Sprite)
    bgBtnPlay:Sprite = null;

    @property(Color) arrColorOutlinePlays:Color[] = [];
    @property(LabelOutline) txtPlayOutline:LabelOutline = null;

    @property(Node)
    targetCoin:Node = null;

    @property(Node)
    targetHeart:Node = null;

    @property(ItemLevel)
    arrItemLevels:ItemLevel[] = [];

    @property(sp.Skeleton)
    character:sp.Skeleton;

    @property(ButtonMassterPassManager)
    buttonMassterPassManager:ButtonMassterPassManager;


    @property(Node)
    contentGroup:Node;


    @property(Node)
    lockGroup:Node;

    @property(Label)
    txtInfo:Label;

    @property(ButtonRemoveAdManager)
    btnRemoveAdManager:ButtonRemoveAdManager;

    @property(ButtonMassterPassManager)
    btnMasterPassManager:ButtonMassterPassManager;

    tweenButtonPlay:Tween<{}> = null;
    @property(sp.Skeleton)
    fx_Button:sp.Skeleton;

    protected onEnable(): void {
        this.btnAvatar.node.on(Button.EventType.CLICK, this.touchAvatar, this);
        this.btnSetting.node.on(Button.EventType.CLICK, this.touchSetting, this);
        this.btnLevel.node.on(Button.EventType.CLICK, this.touchLevel, this);

        clientEvent.on(Constants.HOME_UPDATE_TARGET_POS, this.updateTargetPos, this);
        clientEvent.on(Constants.IAP_INIT_SUCCESS, this.setIAPInitSuccess, this);
        clientEvent.on(Constants.THEME_SELECTED_UPDATE, this.setThemeSelected, this);
        
        this.btnTheme.node.on(Button.EventType.CLICK, this.touchTheme, this);

        this.initAllTop();
        this.showInfo();
        this.showInfoCharacter();
        // this.showButtonPlay();

        this.updateTargetPos();
    }

    protected onDisable(): void {
        this.btnAvatar.node.off(Button.EventType.CLICK, this.touchAvatar, this);
        this.btnSetting.node.off(Button.EventType.CLICK, this.touchSetting, this);
        this.btnLevel.node.off(Button.EventType.CLICK, this.touchLevel, this);

        this.btnTheme.node.off(Button.EventType.CLICK, this.touchTheme, this);
        
        clientEvent.off(Constants.HOME_UPDATE_TARGET_POS,this.updateTargetPos,this);
        clientEvent.off(Constants.IAP_INIT_SUCCESS,this.setIAPInitSuccess,this);
        clientEvent.off(Constants.THEME_SELECTED_UPDATE, this.setThemeSelected, this);
    }

    setIAPInitSuccess(){
        this.btnRemoveAdManager.showInfo();
    }

    initAllTop(){
        // let kc_banner:number = 0;
        // if(localConfig.instance.isRemoveAd){
        //     kc_banner = 150;
        // }
        if(localConfig.instance.isMobile){
            this.groupHover.setScale(new Vec3(localConfig.instance.scaleBG,localConfig.instance.scaleBG,localConfig.instance.scaleBG));
            let posY = (localConfig.instance.scaleBG - 1) * localConfig.instance.DEFAULT_H / 2;
            // console.log("posY:"+posY);
            if(posY <= 0) {
                this.groupHoverWidget.top = 0;
                this.groupBGTopWidget.top = 0;
                this.groupAllTopWidget.top = 0;
                this.groupScrollWidget.bottom = 360;
                this.groupScrollWidget.top = 160;
                return;
            }
            // this.groupAllTop.setPosition(new Vec3(0,posY + 180,0));
            this.groupHoverWidget.top = -posY;
            this.groupBGTopWidget.top = -posY;
            this.groupAllTopWidget.top = -posY;
            this.groupScrollWidget.bottom = 360;
            this.groupScrollWidget.top = 160 - posY;
        }else{
            this.groupHoverWidget.top = 0;
            this.groupBGTopWidget.top = 0;
            this.groupAllTopWidget.top = 0;
            this.groupScrollWidget.bottom = 360;
            this.groupScrollWidget.top = 160;
        }
    }

    updateTargetPos(){
        clientEvent.dispatchEvent(Constants.UPDATE_COIN_TARGETPOS,this.targetCoin.worldPosition);
        clientEvent.dispatchEvent(Constants.UPDATE_HEART_TARGETPOS,this.targetHeart.worldPosition);
    }

    start () {
        // [3]
        this.updateTargetPos();
        this.showButtonPlay();
    }

    showGroup(){
        this.lockGroup.active = false;
        //Kiểm tra VIP REWARD
        // if(localConfig.instance.vipType != 0){
        //     if(localConfig.instance.getCurrDay() > localConfig.instance.vipLastDayReward){
        //         localConfig.instance.setVIPLastDayReward();
        //         if(localConfig.instance.vipType == SHOP_PACK_TYPE.VIP_3){
        //             clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"3-DAY VIP PASS",localConfig.instance.vipDailyRewards);
        //         }else if(localConfig.instance.vipType == SHOP_PACK_TYPE.VIP_7){
        //             clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"7-DAY VIP PASS",localConfig.instance.vipDailyRewards);
        //         }else if(localConfig.instance.vipType == SHOP_PACK_TYPE.VIP_30){
        //             clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"30-DAY VIP PASS",localConfig.instance.vipDailyRewards);
        //         }
        //     }
        // }

        if(!this.isShowGroupFirstTime){
            this.showGroupFirstTime();
        }
    }

    isShowGroupFirstTime:boolean = false;
    showGroupFirstTime(){
        this.isShowGroupFirstTime = true;
        this.lockGroup.active = false;
        if(localConfig.instance.currLevelUnlock > 3 && localConfig.instance.currLevelUnlock % 3 == 1){
            FBInstantManager.instance.SubscribeBot();
        }
        if(localConfig.instance.currLevelUnlock % 3 == 2){
            FBInstantManager.instance.Create_Shortcut((err,succuss)=>{});
        }
        

        this.initLevels();
        let isShowPopup:boolean = false;

        if (localConfig.instance.checkShowBlackFriday()) {
            AudioManager2.instance.playPopupOpen2();
            clientEvent.dispatchEvent(Constants.SHOW_BLACKRIDAY_COIN_POPUP);
            isShowPopup = true;
        }

        if(!isShowPopup && localConfig.instance.raceActive == 1 && localConfig.instance.checkRaceFinished()){
            AudioManager2.instance.playPopupOpen2();
            clientEvent.dispatchEvent(Constants.SHOW_TUBERACE_POPUP,false);
            isShowPopup = true;
        }


       
        if(!isShowPopup && localConfig.instance.getCurrDay() > localConfig.instance.currDailyLoginLastDay){
            AudioManager2.instance.playPopupOpen2();
            clientEvent.dispatchEvent(Constants.SHOW_DAILYTASK_POPUP,DAILYTASK_TYPE.LOGIN);
            isShowPopup = true;
        }

        if(!isShowPopup && localConfig.instance.currLevelUnlock >= localConfig.instance.SPIN_LEVEL_UNLOCK){
            if(localConfig.instance.checkFreeSpin()){
                AudioManager2.instance.playPopupOpen2();
                clientEvent.dispatchEvent(Constants.SHOW_SPIN_POPUP);
                isShowPopup = true;
            }
        }

        if(!isShowPopup && localConfig.instance.currLevelUnlock >= localConfig.instance.RACE_LEVEL_UNLOCK){
            if(localConfig.instance.raceActive == 0){
                AudioManager2.instance.playPopupOpen2();
                clientEvent.dispatchEvent(Constants.SHOW_TUBERACE_JOIN_POPUP);
                isShowPopup = true;
            }
        }

        if(!isShowPopup && localConfig.instance.currLevelUnlock >= localConfig.instance.PASS_LEVEL_UNLOCK){
            let indexPass:number = localConfig.instance.passIndexAvailable;
            // console.log("indexPass:"+indexPass);
            let countFreeClaim:number = indexPass - localConfig.instance.arrPassFreeClaims.length + 1;
            // console.log("countFreeClaim:"+countFreeClaim);
            let countPassClaim:number = 0;
            if(localConfig.instance.passActivated){
                countPassClaim = indexPass - localConfig.instance.arrPassMasterClaims.length + 1;
            }

            let countClaimAvailable:number = countFreeClaim + countPassClaim;
            if(countClaimAvailable > 0){
                AudioManager2.instance.playPopupOpen2();
                clientEvent.dispatchEvent(Constants.SHOW_MASSTERPASS_POPUP);
                isShowPopup = true;
            }
        }

        if(!isShowPopup && localConfig.instance.currLevelUnlock > 10){
            let isFinished:boolean = localConfig.instance.checkInfoDailyChallengeFinished(localConfig.instance.currInfoDay);
            if(!isFinished){
                AudioManager2.instance.playPopupOpen2();
                clientEvent.dispatchEvent(Constants.SHOW_DAILY_CHALLENGE_POPUP);
                isShowPopup = true;
            }
        }
    }

    isInitLevel:boolean = false;
    initLevels(){
        if(this.isInitLevel) return;
        this.isInitLevel = true;
        // console.error("initLevels",localConfig.instance.currLevelUnlock);
        this.contentGroup.setPosition(new Vec3(0,-600,0));
        let level:number = localConfig.instance.currLevelUnlock;
        for(let i = 0;i < this.arrItemLevels.length;i++){
            let state:LEVEL_STATE = LEVEL_STATE.FINISHED;
            if( i== 2){
                state = LEVEL_STATE.ACTIVE;
            }else if( i> 2){
                state = LEVEL_STATE.LOCK;
            }
            this.arrItemLevels[i].initLevel(level - 2+ i,state);
        }
        let posX:number = this.arrItemLevels[2].objGroup.position.x;
        let posY:number = this.arrItemLevels[2].node.position.y -20;
        let strAnimationIdle:string = localConfig.instance.getStrAnimationIdle_byID(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.SKIN));
        this.character.setAnimation(0,strAnimationIdle,true);
        this.character.node.setPosition(new Vec3(posX,posY,0));
        // console.log(this.character);
    }

    setNextLevel(rewardCoin:number){
        this.lockGroup.active = true;
        this.contentGroup.setPosition(new Vec3(0,-600,0));
        this.buttonMassterPassManager.initReceiveKey();
        // console.log("setNextLevel");
        this.isInitLevel = true;
        let level:number = localConfig.instance.currLevelUnlock - 1;
        for(let i = 0;i < this.arrItemLevels.length;i++){
            let state:LEVEL_STATE = LEVEL_STATE.FINISHED;
            if( i== 2){
                state = LEVEL_STATE.ACTIVE;
            }else if( i> 2){
                state = LEVEL_STATE.LOCK;
            }
            this.arrItemLevels[i].initLevel(level - 2+ i,state);
        }
        
        let posX:number = this.arrItemLevels[2].objGroup.position.x;
        let posY:number = this.arrItemLevels[2].node.position.y -20;
        this.character.node.setPosition(new Vec3(posX,posY,0));

        let posX_New:number = this.arrItemLevels[3].objGroup.position.x;
        let posY_New:number = this.arrItemLevels[3].node.position.y - 20;
        let strAnimationIdle:string = localConfig.instance.getStrAnimationIdle_byID(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.SKIN));
        this.character.setAnimation(0,strAnimationIdle,true);

        let isJumpRight:boolean = true;
        if(posX_New < posX){
            isJumpRight = false;
        }

        if(this.tweenButtonPlay) this.tweenButtonPlay.stop();
        this.btnLevel.node.setScale(new Vec3(1,1,1));
        this.tweenButtonPlay = tween(this.btnLevel.node).delay(0.5)
                                                        .to(0.2,{scale:new Vec3(0.9,0.9,0.9)},{easing:'linear',onComplete:()=>{}})
                                                        .to(0.4,{scale:new Vec3(1.3,1.3,1.3)},{easing:'quadIn',onComplete:()=>{}})
                                                        .to(0.3,{scale:new Vec3(1,1,1)},{easing:'backOut',onComplete:()=>{}})
                                                        .union()
                                                        .call(()=>{
                                                            
                                                        })
                                                        .start();

        this.scheduleOnce(()=>{
            let strAnimationJump:string = localConfig.instance.getStrAnimationJump_byID(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.SKIN),isJumpRight);//strAnimationIdle
            this.character.setAnimation(0,strAnimationJump,false);
        },0.2);

        this.scheduleOnce(()=>{
            tween(this.character.node).to(0.66,{position:new Vec3(posX_New,posY_New,0)},{easing:'quadOut'}).start();
            AudioManager2.instance.playJump();
        },0.5);

        this.scheduleOnce(()=>{
            this.arrItemLevels[2].setFinsihed();
        },0.6);

        this.scheduleOnce(()=>{
            this.fx_Button.setAnimation(0,"FX_star",false);
        },1.1);

        this.scheduleOnce(()=>{
            this.showButtonPlay();
        },1.3);

        this.scheduleOnce(()=>{
            this.arrItemLevels[3].setActive();
            let strAnimationIdle:string = localConfig.instance.getStrAnimationIdle_byID(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.SKIN));
            this.character.setAnimation(0,strAnimationIdle,true);
        },1.5);

        this.scheduleOnce(()=>{
            this.updateTargetPos();
            
            clientEvent.dispatchEvent(Constants.SHOW_ADDCOIN,rewardCoin);
            LogEventManager.instance.logResourceEarned("currency","coin",rewardCoin,"home","win_level");
            let timeDelay:number = 0;
            if(localConfig.instance.currLevelUnlock > localConfig.instance.PASS_LEVEL_UNLOCK){
                let timeLeft:number = localConfig.instance.passLastTime + localConfig.instance.PASS_TIME - localConfig.instance.getCurrTime();
                if(timeLeft > 0){
                    timeDelay = 1;
                    this.buttonMassterPassManager.showReceiveKey();
                }
            }
           
            this.setNextLevel_Finished_Delay(timeDelay);
        },2);
       
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    setNextLevel_Finished_Delay(timeDelay:number) {
        this.scheduleOnce(()=>{
            this.setNextLevel_Finished();
        },timeDelay);
    }


    isShowRemoveAdPopup:boolean = false;
    setNextLevel_Finished(){
        this.lockGroup.active = false;

        this.showGroup();
        if(localConfig.instance.currLevelUnlock > 5 && localConfig.instance.currLevelUnlock % 5 == 1){
            FBInstantManager.instance.SubscribeBot();
        }

        if(localConfig.instance.raceActive == 1 && localConfig.instance.checkRaceFinished()){
            AudioManager2.instance.playPopupOpen2();
            clientEvent.dispatchEvent(Constants.SHOW_TUBERACE_POPUP,false);
            return;
        }

        if(localConfig.instance.currLevelUnlock == 4 && localConfig.instance.getCurrDay() > localConfig.instance.currDailyLoginLastDay){
            FBInstantManager.instance.Create_Shortcut((err,succuss)=>{});
            AudioManager2.instance.playPopupOpen2();
            clientEvent.dispatchEvent(Constants.SHOW_DAILYTASK_POPUP,DAILYTASK_TYPE.LOGIN);
            return;
        }

        if(localConfig.instance.currLevelUnlock >= 5 && !this.isShowRemoveAdPopup && !localConfig.instance.isRemoveAd && 
            (FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(SHOP_PACK_TYPE.REMOVE_AD)) || FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(SHOP_PACK_TYPE.REMOVE_AD_PACK)))){
            this.isShowRemoveAdPopup = true;
            AudioManager2.instance.playPopupOpen2();
            clientEvent.dispatchEvent(Constants.SHOW_REMOVEAD_POPUP);
            return;
        }

        if(localConfig.instance.currLevelUnlock == localConfig.instance.SPIN_LEVEL_UNLOCK){
            AudioManager2.instance.playPopupOpen2();
            clientEvent.dispatchEvent(Constants.SHOW_SPIN_POPUP);
            return;
        }

        if(localConfig.instance.currLevelUnlock == localConfig.instance.RACE_LEVEL_UNLOCK){
            AudioManager2.instance.playPopupOpen2();
            clientEvent.dispatchEvent(Constants.SHOW_TUBERACE_JOIN_POPUP);
            return;
        }

        if(localConfig.instance.currLevelUnlock == localConfig.instance.PASS_LEVEL_UNLOCK){
            localConfig.instance.activeNewPassDataInfos();
            AudioManager2.instance.playPopupOpen2();
            clientEvent.dispatchEvent(Constants.SHOW_MASSTERPASS_POPUP);
            return;
        }

        if(localConfig.instance.currLevelUnlock > localConfig.instance.PASS_LEVEL_UNLOCK && localConfig.instance.currLevelUnlock % 10 == 1){
            FBInstantManager.instance.Create_Shortcut((err,succuss)=>{});
        }
    }



    touchAvatar(){
        // console.log("touchAvatar");
    }

    touchSetting(){
        LogEventManager.instance.logButtonClick("setting","home");
        // console.log("touchSetting");
        clientEvent.dispatchEvent(Constants.SHOW_SETTING_POPUP);
    }

    touchTheme(){
        LogEventManager.instance.logButtonClick("theme","home");
        // console.log("touchSetting");
        clientEvent.dispatchEvent(Constants.SHOW_THEME_POPUP);
    }

    touchLevel(){
        LogEventManager.instance.logButtonClick("play","home");
        // console.log("touchLevel");
        if(localConfig.instance.currHeartUnlimited_CountTime > 0 || localConfig.instance.currHeart > 0){
            clientEvent.dispatchEvent(Constants.TOUCH_LEVEL);
        }else{
            clientEvent.dispatchEvent(Constants.SHOW_MORELIVES_POPUP,()=>{});
        }
       
        // clientEvent.dispatchEvent(Constants.SHOW_TUBERACE_WIN_POPUP,1);
    }


    setShow(){
        if(this.tweenGroup != null){    
            this.tweenGroup.stop();
        }
        this.tweenGroup = tween(this.groupOpacity).to(0.4,{opacity:255},{easing:'linear',onComplete:()=>{}}).start();
    }

    setHide(){
        if(this.tweenGroup != null){
            this.tweenGroup.stop();
        }
        this.tweenGroup = tween(this.groupOpacity).to(0.2,{opacity:0},{easing:'linear',onComplete:()=>{
            
        }}).start();
    }


    // //#region CHARACTER
    // getStrAnimationIdle_byID(id:number){
    //     return "idle_character"+id;
    // }

    // getStrAnimationJump_byID(id:number,isJumpRight:boolean){
    //     if(isJumpRight){
    //         return "jumd_R_character"+id;
    //     }else{
    //         return "jumd_L_character"+id;
    //     }
    // }
    // //#endregion

    showButtonPlay(){
        let levelConfigInfo:LevelConfigInfo = localConfig.instance.getMagicLevelConfigInfo_byLevelIndex(localConfig.instance.currLevelUnlock);
        if(levelConfigInfo != null && levelConfigInfo.isSuperHard){
            // console.log("star");
            this.iconBtnPlay.spriteFrame = this.arrSfIconPlays[2];
            this.bgBtnPlay.spriteFrame = this.arrSfBGPlays[2];
            this.txtPlayOutline.color = this.arrColorOutlinePlays[2];
        }else if(levelConfigInfo != null && levelConfigInfo.isHard){
            this.iconBtnPlay.spriteFrame = this.arrSfIconPlays[1];
            this.bgBtnPlay.spriteFrame = this.arrSfBGPlays[1];
            this.txtPlayOutline.color = this.arrColorOutlinePlays[1];
        }else{
            this.iconBtnPlay.spriteFrame = this.arrSfIconPlays[0];
            this.bgBtnPlay.spriteFrame = this.arrSfBGPlays[0];
            this.txtPlayOutline.color = this.arrColorOutlinePlays[0];
        }
    }

    showInfo(){
        let w:number = window.innerWidth;//screen.availWidth;
        let h:number = window.innerHeight;//screen.availHeight;
        this.txtInfo.string = "w:"+w+" h:"+h + "scaleBG:"+localConfig.instance.scaleBG;
    }


    setThemeSelected(themeType:THEME_TYPE,itemID:number){
        // console.log("setThemeSelected",themeType,itemID);
        if(themeType == THEME_TYPE.SKIN){
            this.showInfoCharacter();
        }
    }

    showInfoCharacter(){
        let strAnimationIdle:string = localConfig.instance.getStrAnimationIdle_byID(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.SKIN));
        this.character.setAnimation(0,strAnimationIdle,true);
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
