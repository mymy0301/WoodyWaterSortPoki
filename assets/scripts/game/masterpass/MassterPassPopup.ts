
import { _decorator, Button, Component, Label, Node, ProgressBar } from 'cc';
import { BasePopup } from '../../common/basePopup';
import { PassScrollViewGroupManager } from './PassScrollViewGroupManager';
import { localConfig } from '../../localConfig';
import { CountDownToNextTime } from '../../common/CountDownToNextTime';
import { Constants, SHOP_PACK_TYPE } from '../../framework/constants';
import { clientEvent } from '../../framework/clientEvent';
import { AudioManager2 } from '../../framework/audioManager2';
import { FBInstantManager } from '../../common/FBInstantManager';
import { LogEventManager } from '../../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = MassterPassPopup
 * DateTime = Thu Nov 14 2024 17:55:17 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = MassterPassPopup.ts
 * FileBasenameNoExtension = MassterPassPopup
 * URL = db://assets/scripts/game/masterpass/MassterPassPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('MassterPassPopup')
export class MassterPassPopup extends BasePopup {
    
    @property(Button)
    btnInfo:Button;

    @property(CountDownToNextTime)
    countDownTime:CountDownToNextTime;

    @property(Label)
    txtFinished:Label;

    @property(Button)
    btnActivace:Button;

    @property(Label)
    txtActivaced:Label;

    @property(Button)
    btnMassterPass:Button;

    @property(Label)
    txtIndexPass:Label;

    @property(ProgressBar)
    progressBar:ProgressBar;

    @property(PassScrollViewGroupManager)
    passScrollViewGroupManager:PassScrollViewGroupManager;

    onEnable(): void {
        super.onEnable();
        this.btnActivace.node.on(Constants.CLICK, this.touchActivace, this);
        this.btnMassterPass.node.on(Constants.CLICK, this.touchActivace, this);
        this.btnInfo.node.on(Constants.CLICK, this.touchInfo, this);
        clientEvent.on(Constants.PASS_ACTIVATED_UPDATE, this.setMasterPassActivedUpdate, this);
    }

    onDisable(): void {
        super.onDisable();
        this.btnActivace.node.off(Constants.CLICK, this.touchActivace, this);
        this.btnMassterPass.node.off(Constants.CLICK, this.touchActivace, this);
        this.btnInfo.node.off(Constants.CLICK, this.touchInfo, this);
        clientEvent.off(Constants.PASS_ACTIVATED_UPDATE, this.setMasterPassActivedUpdate, this);
    }

    showMassterPassPopup(){
        this.passScrollViewGroupManager.node.active = false;
        this.txtIndexPass.string = `${localConfig.instance.passIndexAvailable + 1}`;
        this.progressBar.progress = localConfig.instance.passProgess / localConfig.instance.passCountLevel;
        this.txtFinished.node.active = false;
        let timeLeft:number = localConfig.instance.passLastTime + localConfig.instance.PASS_TIME - localConfig.instance.getCurrTime();
        if(timeLeft > 0){
            this.countDownTime.initCountDownTime(timeLeft,()=>{
                this.countDownTime.node.active = false;
                this.txtFinished.node.active = true;
            });
        }else{
            this.countDownTime.resetCountDownTime();
            this.countDownTime.node.active = false;
            this.txtFinished.node.active = true;
        }
        if(localConfig.instance.passActivated){
            this.btnActivace.node.active = false;
            this.btnMassterPass.interactable = false;
            this.txtActivaced.node.active = true;
        }else{
            if(FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(SHOP_PACK_TYPE.MASTER_PASS))){
                this.btnActivace.node.active = true;
                this.btnMassterPass.interactable = true;
                this.txtActivaced.node.active = false;
            }else{
                this.btnActivace.node.active = false;
                this.btnMassterPass.interactable = false;
                this.txtActivaced.node.active = false;
            }
        }
        super.showPopup();
    }

    setMasterPassActivedUpdate(){
        if(localConfig.instance.passActivated){
            this.btnActivace.node.active = false;
            this.btnMassterPass.interactable = false;
            this.txtActivaced.node.active = true;
        }else{
            if(FBInstantManager.instance.checkHaveIAPPack_byProductID(localConfig.instance.getIAP_PackID_bShopPackType(SHOP_PACK_TYPE.MASTER_PASS))){
                this.btnActivace.node.active = true;
                this.btnMassterPass.interactable = true;
                this.txtActivaced.node.active = false;
            }else{
                this.btnActivace.node.active = false;
                this.btnMassterPass.interactable = false;
                this.txtActivaced.node.active = false;
            }
        }
    }

    showPoup_ShowView_Finished(): void {
        super.showPoup_ShowView_Finished();
        let arrIndexPass:number[] = [];
        for(let i = 0;i < localConfig.instance.arrPassRewardDataInfos.length;i++){
            arrIndexPass.push(i);
        }

        this.passScrollViewGroupManager.initPass(arrIndexPass);
        this.passScrollViewGroupManager.node.active = true;

        if(!localConfig.instance.passTutorial){
            AudioManager2.instance.playPopupOpen2();
            clientEvent.dispatchEvent(Constants.SHOW_MASSTERPASS_INFO_POPUP);
        }
    }

    touchActivace(){
        LogEventManager.instance.logButtonClick("activate","masterpasspopup");
        clientEvent.dispatchEvent(Constants.SHOW_MASSTERPASS_ACTIVATE_POPUP,false);
    }

    touchInfo(){
        LogEventManager.instance.logButtonClick("info","masterpasspopup");
        clientEvent.dispatchEvent(Constants.SHOW_MASSTERPASS_INFO_POPUP);
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
