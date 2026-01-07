
import { _decorator, Button, Component, Label, Node, Sprite, SpriteFrame, tween, UIOpacity, Vec3 } from 'cc';
import { BasePopup } from '../common/basePopup';
import { THEME_TYPE } from '../framework/constants';
import { localConfig } from '../localConfig';
import { resourceUtil } from '../framework/resourceUtil';
import { FBInstantManager } from '../common/FBInstantManager';
import { AudioManager2 } from '../framework/audioManager2';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ThemeUnlockPopup
 * DateTime = Fri Oct 25 2024 10:10:08 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ThemeUnlockPopup.ts
 * FileBasenameNoExtension = ThemeUnlockPopup
 * URL = db://assets/scripts/game/ThemeUnlockPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ThemeUnlockPopup')
export class ThemeUnlockPopup extends BasePopup {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Sprite)
    iconTheme:Sprite = null;

    @property(Sprite)
    bgTheme:Sprite = null;

    @property(SpriteFrame)
    sfBGThemeBG:SpriteFrame = null;

    @property(SpriteFrame)
    sfBGThemeTube:SpriteFrame = null;

    @property(Node)
    iconLoading:Node = null;

    @property(Button)
    btnClaim:Button = null;

    @property(Label)
    txtClaim:Label;

    @property(Node)
    nodeClaim:Node = null;

    @property(UIOpacity)
    nodeClaim_Opacity:UIOpacity = null;



    @property(Node)
    iconAD:Node = null;

    @property(Button)
    btnNoThanks:Button;

    @property(Node)
    nodeNoThanks:Node = null;

    @property(UIOpacity)
    nodeNoThanks_Opacity:UIOpacity = null;

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    onEnable(): void {
        super.onEnable();
        this.btnClaim.node.on(Button.EventType.CLICK, this.touchClaim, this);
    }

    onDisable(): void {
        super.onDisable();
        this.btnClaim.node.off(Button.EventType.CLICK, this.touchClaim, this);
    }

    themeType:THEME_TYPE = null;
    itemID:number = -1;
    showThemeUnlockPopup(themeType:THEME_TYPE,itemID:number){
        this.themeType = themeType;
        this.itemID = itemID;
        this.iconLoading.active = true;
        this.iconTheme.node.active = false;
        this.btnClaim.node.active = false;
        this.btnNoThanks.node.active = false;
        if(themeType == THEME_TYPE.TUBE){
            this.bgTheme.spriteFrame = this.sfBGThemeTube;
        }else if(themeType == THEME_TYPE.BG){
            this.bgTheme.spriteFrame = this.sfBGThemeBG;
        }
        this.unschedule(this.showButtons_Step1);
        this.unschedule(this.showButtons_Step2);
        
        this.loadIconTheme(this.themeType,this.itemID);

        super.showPopup();
    }

    showPoup_ShowView_Finished(): void {
        super.showPoup_ShowView_Finished();
        

        this.schedule(this.showButtons_Step1,1,0,0.5);
    }

    showButtons_Step1(){
        this.schedule(this.showButtons_Step2,1,0,2);

        this.btnClaim.node.active = true;
        this.nodeClaim.setScale(new Vec3(0.5,0.5,0.5));
        this.nodeClaim_Opacity.opacity = 150;
        tween(this.nodeClaim).to(0.5,{scale: new Vec3(1,1,1)}, { easing: 'backOut',onComplete:()=>{

        }}).start();

        tween(this.nodeClaim_Opacity).to(0.4,{opacity: 255}, { easing: 'quadOut',onComplete:()=>{

        }}).start();
    }

    hidePopup(): void {
        AudioManager2.instance.playPopupClose();
        this.lockGroup.active = true;
        this.tweenOpacityPopup = tween(this.popup_UIOpacity).to(0.2,{opacity:0},{easing:'quadOut',onComplete:()=>{

        }}).start();

        this.tweenOpacityBG = tween(this.bgOpacity).to(0.3,{opacity:0},{easing:'quadOut',onComplete:()=>{       
            this.hidePopup_Finished();
        }}).start();
    }
    showButtons_Step2(){
        this.btnNoThanks.node.active = true;
        this.nodeNoThanks.setScale(new Vec3(0.5,0.5,0.5));
        this.nodeNoThanks_Opacity.opacity = 150;
        tween(this.nodeNoThanks).to(0.5,{scale: new Vec3(1,1,1)}, { easing: 'backOut',onComplete:()=>{

        }}).start();

        tween(this.nodeNoThanks_Opacity).to(0.4,{opacity: 255}, { easing: 'quadOut',onComplete:()=>{

        }}).start();
    }
    loadIconTheme(themeType:THEME_TYPE,itemID:number){
        
        let strPath:string = localConfig.instance.getThemePath_byItemID(themeType,itemID);
        resourceUtil.loadSpriteFrame_Bundle(strPath,(err,spriteFrame)=>{
            if(err){
                console.error(err);
                return;
            }
            if(!this.node){
                return;
            }
            if(themeType == THEME_TYPE.TUBE){
                if(!this.iconTheme){
                    return;
                }
                this.iconTheme.spriteFrame = spriteFrame;
                this.iconTheme.node.active = true;
            }else if(themeType == THEME_TYPE.BG){
                if(!this.bgTheme){
                    return;
                }
                this.bgTheme.spriteFrame = spriteFrame;
            }
            this.iconLoading.active = false;
        })
    }

    touchClaim(){
        LogEventManager.instance.logButtonClick("claim","themeunlockpopup");
        FBInstantManager.instance.Show_RewardedVideoAsync("themeunlockpopup","claim",(err, success) => {
           if(err){

           }else{
                this.setClaimRewards();
           } 
        });
    }

    setClaimRewards(){
        this.hidePopup();
        localConfig.instance.setThemeUnlocked(this.themeType,this.itemID);
        localConfig.instance.setThemeSelected(this.themeType, this.itemID);
        LogEventManager.instance.logResourceEarned("theme","bg",this.itemID,"themeunlockpopup","watchad");
    }

    touchClose(): void {
        LogEventManager.instance.logButtonClick("close","themeunlockpopup");
        this.hidePopup();
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
