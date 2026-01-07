
import { _decorator, Button, Component, Label, Node, tween, Tween, UIOpacity, Vec3 } from 'cc';
import { CountDownToNextTime } from '../../common/CountDownToNextTime';
import { Constants } from '../../framework/constants';
import { clientEvent } from '../../framework/clientEvent';
import { localConfig } from '../../localConfig';
import { AudioManager2 } from '../../framework/audioManager2';
import { LogEventManager } from '../../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ButtonMassterPassManager
 * DateTime = Fri Nov 15 2024 12:00:16 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ButtonMassterPassManager.ts
 * FileBasenameNoExtension = ButtonMassterPassManager
 * URL = db://assets/scripts/game/masterpass/ButtonMassterPassManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ButtonMassterPassManager')
export class ButtonMassterPassManager extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Button)
    btnMassterPass:Button = null;

    @property(Node)
    nodeActive:Node = null;

    @property(Node)
    nodeGroup:Node = null;

    @property(Node)
    nodeCount:Node = null;

    @property(Label)
    txtCount:Label = null;

    @property(Node)
    nodeNotify:Node = null;

    @property(CountDownToNextTime)
    countDownTime:CountDownToNextTime = null;

    @property(Node)
    nodeLock:Node = null;

    @property(Label)
    txtUnlock:Label = null;

    @property(Node)
    nodeFinished:Node = null;

    protected onEnable(): void {
        this.btnMassterPass.node.on(Constants.CLICK, this.touchMassterPass, this);

        clientEvent.on(Constants.PASS_UPDATE, this.showInfo, this);
        this.showInfo();
    }

    protected onDisable(): void {
        this.btnMassterPass.node.off(Constants.CLICK, this.touchMassterPass, this);

        clientEvent.off(Constants.PASS_UPDATE, this.showInfo, this);
    }

    showInfo(){
        if(localConfig.instance.currLevelUnlock < localConfig.instance.PASS_LEVEL_UNLOCK){
            this.nodeGroup.active = false;
            this.nodeLock.active = true;
            this.txtUnlock.string = `Lv.${localConfig.instance.PASS_LEVEL_UNLOCK}`;
            return;
        }
        this.nodeActive.active = true;
        this.nodeLock.active = false;
        let timeLeft:number = localConfig.instance.passLastTime + localConfig.instance.PASS_TIME - localConfig.instance.getCurrTime();
        // console.log(timeLeft);
        if(timeLeft > 0){
             this.countDownTime.node.active = true;
            this.countDownTime.initCountDownTime(timeLeft,()=>{
                this.showInfo();
            });
            this.nodeFinished.active = false;
            
        }else{
            this.countDownTime.node.active = false;
            this.nodeFinished.active = true;
        }

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
            this.nodeNotify.active = false;
            this.nodeCount.active = true;
            this.txtCount.string = `${countClaimAvailable}`;
        }else{
            this.nodeNotify.active = true;
            this.nodeCount.active = false;
        }

    }

    touchMassterPass(): void {
        LogEventManager.instance.logButtonClick("massterpass","home");
        if(localConfig.instance.currLevelUnlock < localConfig.instance.PASS_LEVEL_UNLOCK){
            clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION,"Unlock at Level "+localConfig.instance.PASS_LEVEL_UNLOCK);
            return;
        }
        clientEvent.dispatchEvent(Constants.SHOW_MASSTERPASS_POPUP);
    }

    //#region KEY RECEIVE
    @property(Node)
    nodeKey:Node = null;
    @property(UIOpacity)
    nodeKeyOpacity:UIOpacity = null;

    tweenShow:Tween<{}> = null;
    tweenShowOpacity:Tween<{}> = null;

    @property(Node)
    nodeAll:Node = null;

    tweenNode:Tween<{}> = null;

    initReceiveKey(){
        if(this.tweenShow){
            this.tweenShow.stop();
        }
        if(this.tweenShowOpacity){
            this.tweenShowOpacity.stop();
        }
        if(this.tweenNode){
            this.tweenNode.stop();
        }

        this.nodeGroup.active = false;


        this.nodeKey.setScale(new Vec3(0,0,0));
        this.nodeKeyOpacity.opacity = 0;
        this.nodeKey.setPosition(new Vec3(250,0,0));
        this.nodeAll.setScale(new Vec3(1,1,1));
    }

    showReceiveKey(){
        if(localConfig.instance.currLevelUnlock < localConfig.instance.PASS_LEVEL_UNLOCK){
            return;
        }
        this.nodeKey.active = true;

        this.tweenShow = tween(this.nodeKey).to(0.5,{scale:new Vec3(1,1,1)},{easing:'bounceOut',onComplete:()=>{
            this.showReceiveKey_Step2();
        }}).start();

        this.tweenShowOpacity = tween(this.nodeKeyOpacity).to(0.4,{opacity: 255}, { easing: 'quadOut',onComplete:()=>{

        }}).start();
    }

    showReceiveKey_Step2(){
        AudioManager2.instance.playGetReward();
        this.tweenShow = tween(this.nodeKey).delay(0.3).to(0.3,{position:new Vec3(0,0,0)},{easing:'smooth',onComplete:()=>{
            this.showReceiveKey_Step3();
        }}).start();

        this.tweenShowOpacity = tween(this.nodeKeyOpacity).delay(0.3).to(0.3,{opacity: 0}, { easing: 'smooth',onComplete:()=>{
            
        }}).start();

        this.tweenNode = tween(this.nodeAll).delay(0.5).to(0.05,{scale: new Vec3(1.1,1.1,1.1)},{easing:'linear'})
                                        .to(0.1,{scale: new Vec3(1,1,1)},{easing:'linear'})
                                        .to(0.05,{scale: new Vec3(1.05,1.05,1)},{easing:'linear'})
                                        .to(0.05,{scale: new Vec3(1,1,1)},{easing:'linear'})
                                        .union().start();
    }

    showReceiveKey_Step3(){
        this.nodeKey.active = false;
        this.nodeGroup.active = true;
    }
    //#endregion
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
