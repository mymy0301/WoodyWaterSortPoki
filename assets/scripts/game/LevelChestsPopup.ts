
import { _decorator, Button, Component, Label, Node, Tween, tween, UIOpacity, Vec3, Widget } from 'cc';
import { BasePopup } from '../common/basePopup';
import { Constants } from '../framework/constants';
import { ChestProgressRewardGroup } from './ChestProgressRewardGroup';
import { TubeProgressRewardGroup } from './TubeProgressRewardGroup';
import { BGProgressRewardGroup } from './BGProgressRewardGroup';
import { localConfig } from '../localConfig';
import { clientEvent } from '../framework/clientEvent';
import Utils from '../core/utils/Utils';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = LevelChestsPopup
 * DateTime = Wed Oct 23 2024 15:45:20 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = LevelChestsPopup.ts
 * FileBasenameNoExtension = LevelChestsPopup
 * URL = db://assets/scripts/game/LevelChestsPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('LevelChestsPopup')
export class LevelChestsPopup extends BasePopup {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Widget)
    groupAllTopWidget:Widget;

    @property(Button)
    btnContinue: Button = null;

    @property(UIOpacity)
    nodeContinue_Opacity: UIOpacity = null;

    tweenContinue: Tween<{}> = null;
    tweenContinue_Opacity: Tween<{}> = null;

    @property(ChestProgressRewardGroup)
    chestGroup: ChestProgressRewardGroup = null;

    // @property(TubeProgressRewardGroup)
    // tubeGroup: TubeProgressRewardGroup = null;

    @property(BGProgressRewardGroup)
    bgGroup: BGProgressRewardGroup = null;

    @property(Node)
    groupRewards: Node = null;

    @property(UIOpacity)
    groupRewards_Opacity: UIOpacity = null;

    @property(Node)
    nodeLight0: Node = null;

    @property(Node)
    nodeLight1: Node = null;

    @property(Node)
    nodeEfx: Node = null;

    tweenRewards: Tween<{}> = null;
    tweenRewards_Opacity: Tween<{}> = null;

    @property(Label)
    txtValue: Label = null;

    onEnable(): void {
        super.onEnable();
        this.btnContinue.node.on(Constants.CLICK, this.touchContinue, this);
    }

    onDisable(): void {
        super.onDisable();
        this.btnContinue.node.off(Constants.CLICK, this.touchContinue, this);
    }

    start(): void {
        this.initAllTop();
    }
    initAllTop(){
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
    rewardCoin:number = 20;
    showLevelChestsPopup(): void {
        this.nodeLight0.active = false;
        this.nodeLight1.active = false;
        this.chestGroup.node.active = false;
        // this.tubeGroup.node.active = false;
        this.bgGroup.node.active = false;
        this.btnContinue.node.active = false;

        this.rewardCoin = localConfig.instance.getRewardCoinby_LevelConfigInfo(localConfig.instance.currLevelConfigInfo);
        this.txtValue.string = `x${Utils.formatNumber(this.rewardCoin)}`;

        localConfig.instance.setCoin(localConfig.instance.currCoin + this.rewardCoin);

        this.groupRewards_Opacity.opacity = 0;
        this.groupRewards.setScale(new Vec3(1.5,1.5,1.5));
        this.nodeEfx.active = false;
        super.showPopup();   
    }

    showPoup_ShowView(): void {
        this.tweenOpacityBG = tween(this.bgOpacity).to(0.2,{opacity:255},{easing:'quadOut',onComplete:()=>{       

        }}).start();

        this.tweenOpacityPopup = tween(this.popup_UIOpacity).to(0.4,{opacity:255},{easing:'quadOut',onComplete:()=>{
            this.showPoup_ShowView_Finished();
        }}).start();
    }

    showPoup_ShowView_Finished(): void {
        super.showPoup_ShowView_Finished();
        this.lockGroup.active = true;

       this.showGroupRewards();
        
    }

    showGroupRewards(): void {
        if(this.tweenRewards) this.tweenRewards.stop();
        if(this.tweenRewards_Opacity) this.tweenRewards_Opacity.stop();
        this.groupRewards_Opacity.opacity = 0;
        this.groupRewards.setScale(new Vec3(1.5,1.5,1.5));
        this.tweenRewards = tween(this.groupRewards).to(0.2, { scale: new Vec3(0.8, 0.8, 1) }, { easing: 'quadOut' ,onComplete:()=>{
                                                        this.nodeLight0.active = true;
                                                        this.nodeLight1.active = true;
                                                    }})
                                                    .to(0.2, { scale: new Vec3(1, 1, 1) }, { easing: 'bounceOut' ,onComplete:()=>{
                                                        
                                                    }}).union().call(() => {
                                                        this.showProgress();
                                                     }).start();
        this.tweenRewards_Opacity = tween(this.groupRewards_Opacity).to(0.2, { opacity: 255 }, { easing: 'quadOut' }).start();
    }

    showProgress(){
        
        this.nodeEfx.active = true;
        this.scheduleOnce(() => {
            this.chestGroup.node.active = true;
            this.chestGroup.initChestProgress(localConfig.instance.currLevel);
        }, 0.1);

        // this.scheduleOnce(()=>{
        //     this.tubeGroup.node.active = true;
        //     this.tubeGroup.initTubeProgress(localConfig.instance.currLevel);
        // },0.5);

        this.scheduleOnce(() => {
            this.bgGroup.node.active = true;
            this.bgGroup.initBGProgress(localConfig.instance.currLevel);
        }, 0.9);

        this.scheduleOnce(() => {
            this.lockGroup.active = false;
            this.showButton_Step1();
        }, 2);
    }

    showButton_Step1(): void {
        if(this.tweenContinue) this.tweenContinue.stop();
        if(this.tweenContinue_Opacity) this.tweenContinue_Opacity.stop();
        this.btnContinue.node.active = true;
        this.btnContinue.node.setScale(new Vec3(0.5, 0.5, 0.5));
        this.nodeContinue_Opacity.opacity = 150;
        this.tweenContinue = tween(this.btnContinue.node).to(0.2, { scale: new Vec3(1.2, 1.2, 1) }, { easing: 'quadOut' })
                                                            .to(0.1, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' })
                                                            .union().start();
        this.tweenContinue_Opacity = tween(this.nodeContinue_Opacity).to(0.3, { opacity: 255 }, { easing: 'quadOut' }).start();
    }


    touchContinue(): void {
        LogEventManager.instance.logButtonClick("continue","levelchestpopup");
        this.hidePopup();

        

        clientEvent.dispatchEvent(Constants.TOUCH_NEXT_LEVEL);
        // clientEvent.dispatchEvent(Constants.LEVEL_CHEST_TOUCH_CONTINUE,this.rewardCoin);

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
