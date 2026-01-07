
import { _decorator, Button, Component, instantiate, Label, Node, Prefab, ProgressBar, Sprite, tween, UIOpacity, Vec3 } from 'cc';
import { BasePopup } from '../common/basePopup';
import { localConfig } from '../localConfig';
import { InfoDay } from '../common/InfoDay';
import { ItemDailyChallengeBox } from './ItemDailyChallengeBox';
import { ItemDailyChallenge } from './ItemDailyChallenge';
import { lodash } from '../framework/lodash';
import { clientEvent } from '../framework/clientEvent';
import { BOX_TYPE, Constants } from '../framework/constants';
import { FBInstantManager } from '../common/FBInstantManager';
import { AudioManager2 } from '../framework/audioManager2';
import { BoxRewardInfoGroup } from './BoxRewardInfoGroup';
import { GroupRewardDataInfo } from './info/ShopDataInfo';
import { InfoMonth } from '../common/InfoMonth';
import { InfoMonthReward } from '../common/InfoMonthReward';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = DailyChallengePopup
 * DateTime = Mon Sep 30 2024 17:16:16 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = DailyChallengePopup.ts
 * FileBasenameNoExtension = DailyChallengePopup
 * URL = db://assets/scripts/game/DailyChallengePopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('DailyChallengePopup')
export class DailyChallengePopup extends BasePopup {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Label)
    txtInfoMonth:Label;

    @property(Button)
    btnNext:Button;

    @property(Sprite)
    iconNext:Sprite;

    @property(Button)
    btnPrev:Button;

    @property(Sprite)
    iconPrev:Sprite;

    @property(Node)
    iconAchievement:Node = null;

    @property(ProgressBar)
    progressInMonth:ProgressBar;

    @property(Label)
    txtCountDayFinished:Label= null;

    @property(ItemDailyChallengeBox)
    arrItemDailyChallengeBox:ItemDailyChallengeBox[] = [];

    

    currYear:number = 2023;
    currMonth:number = 9;
    countDayOfMonth:number = 0;
    countDayOfMonth_Finished:number = 0;
    currInfoDaySelect:InfoDay = null;

    @property(Node)
    contentCalendarGroup:Node = null;

    @property(Prefab)
    itemDailyChallengePrefab:Prefab = null;

    @property(Button)
    btnPlay:Button = null;

    @property(Label)
    txtPlay:Label = null;

    @property(Node)
    nodeObjPlay:Node = null;

    @property(Node)
    nodeObjReplay:Node = null;

    @property(Node)
    iconAd:Node = null;

    itemDailyChallengeSelect:ItemDailyChallenge = null;

    onEnable(): void {
        super.onEnable();
        clientEvent.on(Constants.DAILYCHALLENGE_TOUCH_SELECT_DAY,this.touchItemDailyChallenge,this);
        clientEvent.on(Constants.DAILYCHALLENGE_TOUCH_BOXREWARD,this.touchBoxReward,this);
        this.btnNext.node.on(Button.EventType.CLICK,this.touchNext,this);
        this.btnPrev.node.on(Button.EventType.CLICK,this.touchPrev,this);

        this.btnPlay.node.on(Button.EventType.CLICK,this.touchPlay,this);
    }

    onDisable(): void {
        super.onDisable();
        clientEvent.off(Constants.DAILYCHALLENGE_TOUCH_SELECT_DAY,this.touchItemDailyChallenge,this);
        clientEvent.off(Constants.DAILYCHALLENGE_TOUCH_BOXREWARD,this.touchBoxReward,this);
        this.btnNext.node.off(Button.EventType.CLICK,this.touchNext,this);
        this.btnPrev.node.off(Button.EventType.CLICK,this.touchPrev,this);

        this.btnPlay.node.off(Button.EventType.CLICK,this.touchPlay,this);
    }

    
    showDailyChallengePopup(){
        this.boxRewardInfoGroup.reset();
        // console.log(localConfig.instance.currInfoDay);
        if(localConfig.instance.currInfoDaySelect == null){
            this.currInfoDaySelect = lodash.cloneDeep(localConfig.instance.currInfoDay);
        }else{
            this.currInfoDaySelect = lodash.cloneDeep(localConfig.instance.currInfoDaySelect);
        }
        this.initCalendarGroup(this.currInfoDaySelect.year,this.currInfoDaySelect.month);
        super.showPopup();
    }
    showDailyChallengePopup2(){
        this.boxRewardInfoGroup.reset();
        super.showPopup();
    }


    hidePopup(): void {
        tween(this.popup_UIOpacity).to(0.2,{opacity:0},{easing:'quadOut',onComplete:()=>{
            super.hidePopup_Finished();
        }}).start();

        if(this.bgOpacity){
            tween(this.bgOpacity).to(0.2,{opacity:0},{easing:'quadOut',onComplete:()=>{}}).start();
        }
        // this.hidePopup_Finished();
    }


    showHeader(year:number,month:number){
        // console.log(localConfig.instance.currInfoDay);
        // console.log("year:"+year+"   month:"+month);
        // console.log(localConfig.instance.minInfoDay);
        this.txtInfoMonth.string = localConfig.instance.getNameMonthOfYear(month,year);
        if(year == localConfig.instance.currInfoDay.year && month == localConfig.instance.currInfoDay.month){
            this.btnNext.interactable = false;
            this.iconNext.grayscale = true;
        }else{
            this.btnNext.interactable = true;
            this.iconNext.grayscale = false;
        }

        if(year == localConfig.instance.minInfoDay.year && month == localConfig.instance.minInfoDay.month){
            this.btnPrev.interactable = false;
            this.iconPrev.grayscale = true;
        }else{
            this.btnPrev.interactable = true;
            this.iconPrev.grayscale = false;
        }
    }

    touchNext(){
        LogEventManager.instance.logButtonClick("next","dailychallengepopup");
        let nextMonth = this.currMonth +1;
        let nextYear = this.currYear;
        if(nextMonth >= 12){
            nextMonth = 0;
            nextYear ++;
        }

        this.initCalendarGroup(nextYear,nextMonth);
    }

    touchPrev(){
        LogEventManager.instance.logButtonClick("prev","dailychallengepopup");
        let prevMonth = this.currMonth -1;
        let prevYear = this.currYear;
        if(prevMonth < 0){
            prevMonth = 11;
            prevYear --;
        }

        this.initCalendarGroup(prevYear,prevMonth);
    }


    initCalendarGroup(year:number,month:number){
        this.currMonth = month;
        this.currYear = year;
        this.countDayOfMonth = localConfig.instance.getDaysInMonth(month,year);
        this.countDayOfMonth_Finished = localConfig.instance.getCountFinished_InMonth(month,year);

        
        this.currInfoDaySelect.month = month;
        this.currInfoDaySelect.year = year;

        this.contentCalendarGroup.destroyAllChildren();

        if(this.currInfoDaySelect.day > this.countDayOfMonth){
            this.currInfoDaySelect.day = this.countDayOfMonth;
        }
        if(this.currInfoDaySelect.year == localConfig.instance.currInfoDay.year && this.currInfoDaySelect.month == localConfig.instance.currInfoDay.month){
            
            if(this.currInfoDaySelect.day > localConfig.instance.currInfoDay.day){
                this.currInfoDaySelect.day = localConfig.instance.currInfoDay.day;
            }

            if(this.currInfoDaySelect.day > this.countDayOfMonth){
                this.currInfoDaySelect.day = this.countDayOfMonth;
            }
        }

        for(let i=0; i< this.countDayOfMonth;i++){
            let item:Node = instantiate(this.itemDailyChallengePrefab);
            item.setParent(this.contentCalendarGroup);
            let itemDay:ItemDailyChallenge = item.getComponent(ItemDailyChallenge);
            itemDay.initItemDailyChallenge(new InfoDay(i+1,month,year));
            itemDay.setSelectDay(this.currInfoDaySelect);
            if(localConfig.instance.checkSameInfoDay(this.currInfoDaySelect,itemDay.infoDay)){
                this.itemDailyChallengeSelect = itemDay;
            }
        }
        this.showHeader(year,month);
        this.initBox(this.countDayOfMonth,this.countDayOfMonth_Finished);
        this.showButtonPlay();
    }

    


    initBox(countDayOfMonth:number,countDayOfMonth_Finished:number){
        let infoMonthReward:InfoMonthReward = localConfig.instance.getInfoMonthReward_byInfoMonth(new InfoMonth(this.currMonth,this.currYear));
        // let indexReward_byMonth:number = -1;
        // if(infoMonthReward != null){
        //     indexReward_byMonth = infoMonthReward.indexReward;
        // }
        let infoMonth:InfoMonth = new InfoMonth(this.currMonth,this.currYear);
        for(let i=0; i< this.arrItemDailyChallengeBox.length;i++){
            this.arrItemDailyChallengeBox[i].initInfoBox(countDayOfMonth,infoMonth);
        }
        this.showProgress(countDayOfMonth,countDayOfMonth_Finished);
    }

    showProgress(countDayOfMonth:number,countDayOfMonth_Finished:number){
        this.progressInMonth.progress = countDayOfMonth_Finished / countDayOfMonth;
        this.txtCountDayFinished.string = `${countDayOfMonth_Finished}`;
    }

    touchItemDailyChallenge(_infoDay:InfoDay,itemDailyChallenge:ItemDailyChallenge){
        LogEventManager.instance.logButtonClick("itemdailychallenge","dailychallengepopup");
        this.currInfoDaySelect = _infoDay;
        this.itemDailyChallengeSelect.setSelectDay(this.currInfoDaySelect);
        this.itemDailyChallengeSelect = itemDailyChallenge;
        this.itemDailyChallengeSelect.setSelectDay(this.currInfoDaySelect);
        this.showButtonPlay();
    }

   
    //#region PLAY
    showButtonPlay(){
        if(!localConfig.instance.checkInfoDailyChallengeFinished(this.currInfoDaySelect)){
            // this.txtPlay.string = "PLAY";
            this.nodeObjPlay.active = true;
            this.nodeObjReplay.active = false;
        }else{
            // this.txtPlay.string = "REPLAY";
            this.nodeObjPlay.active = false;
            this.nodeObjReplay.active = true;
        }

        if(localConfig.instance.checkSameInfoDay(localConfig.instance.currInfoDay,this.currInfoDaySelect) && !localConfig.instance.checkInfoDailyChallengeFinished(this.currInfoDaySelect)){
            this.iconAd.active = false;
        }else{
            this.iconAd.active = true;
        }
    }
    touchPlay(){
         LogEventManager.instance.logButtonClick("play","dailychallengepopup");
        if(localConfig.instance.checkSameInfoDay(localConfig.instance.currInfoDay,this.currInfoDaySelect) && !localConfig.instance.checkInfoDailyChallengeFinished(this.currInfoDaySelect)){
            this.hidePopup();
            clientEvent.dispatchEvent(Constants.DAILYCHALLENGE_PLAY_LEVEL,this.currInfoDaySelect);
        }else{
            FBInstantManager.instance.Show_RewardedVideoAsync("dailychallengepopup","play",(err,success)=>{
                if(err){

                }else{
                    this.hidePopup();
                    clientEvent.dispatchEvent(Constants.DAILYCHALLENGE_PLAY_LEVEL,this.currInfoDaySelect);
                }
            });
        }
    }
    //#endregion

    //#region DAILY CHALLENGE FINISHED
    @property(Node)
    nodeEfxFinished:Node = null;

    @property(UIOpacity)
    nodeEfxFinished_Opacity:UIOpacity = null;

    @property(Node)
    nodeStartPos_EfxFinished:Node = null;

    @property(Node)
    nodeEndPos_EfxFinished:Node = null;

    setDailyChallengeFinished(){
        this.showPopup_Now();
        this.boxRewardInfoGroup.reset();
        if(!localConfig.instance.checkInfoDailyChallengeFinished(this.currInfoDaySelect)){
            this.setDailyChallengeFinished_step1();
        }
    }

    setDailyChallengeFinished_step1(){
        this.lockGroup.active = true;
        this.scheduleOnce(()=>{
            this.setDailyChallengeFinished_step2();
        },0.6);
    }

    setDailyChallengeFinished_step2(){
        this.itemDailyChallengeSelect.setFinished();
        this.scheduleOnce(()=>{
            this.setDailyChallengeFinished_step3();
        },0.5);

        this.scheduleOnce(()=>{
            AudioManager2.instance.playSound_showItemReward();
        },0.3);
    }

    setDailyChallengeFinished_step3(){
        this.nodeStartPos_EfxFinished.worldPosition = this.itemDailyChallengeSelect.node.worldPosition;
        this.nodeEfxFinished.position = this.nodeStartPos_EfxFinished.position;
        this.nodeEfxFinished.active = true;
        this.nodeEfxFinished_Opacity.opacity = 0;
        this.nodeEfxFinished.setScale(new Vec3(0,0,0));
        
        tween(this.nodeEfxFinished).to(0.5, { scale: new Vec3(1, 1, 1) }, {
            easing: 'backOut', onComplete: () => {
                this.setDailyChallengeFinished_step4();
            }
        }).start();
        tween(this.nodeEfxFinished_Opacity).to(0.2, { opacity: 255 }, { easing: 'quadOut', onComplete: () => { } }).start();
    }

    setDailyChallengeFinished_step4(){
        tween(this.nodeEfxFinished).delay(0.3).to(0.5, { position: new Vec3(this.nodeEndPos_EfxFinished.position.x, this.nodeEndPos_EfxFinished.position.y, 0) }, { easing: 'quadOut', onComplete: () => { 
            this.setDailyChallengeFinished_step5();
        } }).start();
    }

    setDailyChallengeFinished_step5(){
        this.nodeEfxFinished.active = false;
        tween(this.iconAchievement).to(0.05, { scale: new Vec3(1.2, 1.2, 1.2) }, { easing: 'linear' }).to(0.05, { scale: new Vec3(1, 1, 1) }, { easing: 'linear' })
            .to(0.05, { scale: new Vec3(1.1, 1.1, 1.1) }, { easing: 'linear' }).to(0.05, { scale: new Vec3(1, 1, 1) }, { easing: 'linear' }).start();

        AudioManager2.instance.playSound_progressbar();
        this.countDayOfMonth_Finished++;
        let progressValue:number = this.countDayOfMonth_Finished / this.countDayOfMonth;
        // console.log("progressValue",progressValue);
        tween(this.progressInMonth).to(0.2, { progress: progressValue }, {
            easing: 'linear', onComplete: () => {
                this.setDailyChallengeFinished_step6();
            }
        }).start();
    }

    setDailyChallengeFinished_step6(){
        this.txtCountDayFinished.string = `${this.countDayOfMonth_Finished}`;
        this.lockGroup.active = false;
        if(this.countDayOfMonth_Finished == 5){
            localConfig.instance.addInfoMonthReward(new InfoMonth(this.currMonth,this.currYear),1);
            clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"DAILY CHALLENGE",localConfig.instance.arrDailyChallengeRewards[0]);
            this.arrItemDailyChallengeBox[0].setBoxOpenend();
        }else if(this.countDayOfMonth_Finished == 12){
            localConfig.instance.addInfoMonthReward(new InfoMonth(this.currMonth,this.currYear),2);
            clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"DAILY CHALLENGE",localConfig.instance.arrDailyChallengeRewards[1]);
            this.arrItemDailyChallengeBox[1].setBoxOpenend();
        }else if(this.countDayOfMonth_Finished == 20){
            localConfig.instance.addInfoMonthReward(new InfoMonth(this.currMonth,this.currYear),3);
            clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"DAILY CHALLENGE",localConfig.instance.arrDailyChallengeRewards[2]);
            this.arrItemDailyChallengeBox[2].setBoxOpenend();
        }else if(this.countDayOfMonth_Finished == this.countDayOfMonth){
            localConfig.instance.addInfoMonthReward(new InfoMonth(this.currMonth,this.currYear),4);
            clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"DAILY CHALLENGE",localConfig.instance.arrDailyChallengeRewards[3]);
            this.arrItemDailyChallengeBox[3].setBoxOpenend();
        }
        this.showButtonPlay();

        clientEvent.dispatchEvent(Constants.DAILYCHALLENGE_NOTIFY_UPDATE);
    }

    showBoxReward_Unlocked(){
        // console.log("showBoxReward_Unlocked");
    }

    //#endregion

    //#region BOX REWARD INFO GROUP
    @property(BoxRewardInfoGroup)
    boxRewardInfoGroup:BoxRewardInfoGroup = null;

    showBoxRewardInfoGroup(posStart:Vec3,isBottom:boolean,groupRewardDataInfo:GroupRewardDataInfo){
        this.boxRewardInfoGroup.showBoxRewardInfoGroup(posStart,isBottom,groupRewardDataInfo);
    }

    touchBoxReward(itemDailyChallengeBox:ItemDailyChallengeBox){
        LogEventManager.instance.logButtonClick("boxreward","dailychallengepopup");
        //Kiem tra xem nguoi choi da nhan box chua
        //Neu chua nhan thi cho nhan reward
        // console.log(itemDailyChallengeBox.boxType);
        if(itemDailyChallengeBox.boxType == 1){
            if(this.countDayOfMonth_Finished >= 5 && !localConfig.instance.checkReceivedInfoMonthReward(itemDailyChallengeBox.infoMonthReward)){
                localConfig.instance.addInfoMonthReward(new InfoMonth(this.currMonth,this.currYear),1);
                clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"DAILY CHALLENGE",localConfig.instance.arrDailyChallengeRewards[0]);
                this.arrItemDailyChallengeBox[0].setBoxOpenend();
            }
        }else if(itemDailyChallengeBox.boxType == 2){
            if(this.countDayOfMonth_Finished >= 12 && !localConfig.instance.checkReceivedInfoMonthReward(itemDailyChallengeBox.infoMonthReward)){
                localConfig.instance.addInfoMonthReward(new InfoMonth(this.currMonth,this.currYear),2);
                clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"DAILY CHALLENGE",localConfig.instance.arrDailyChallengeRewards[1]);
                this.arrItemDailyChallengeBox[1].setBoxOpenend();
            }
        }else if(itemDailyChallengeBox.boxType == 3){
            if(this.countDayOfMonth_Finished >= 20 && !localConfig.instance.checkReceivedInfoMonthReward(itemDailyChallengeBox.infoMonthReward)){
                localConfig.instance.addInfoMonthReward(new InfoMonth(this.currMonth,this.currYear),3);
                clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"DAILY CHALLENGE",localConfig.instance.arrDailyChallengeRewards[2]);
                this.arrItemDailyChallengeBox[2].setBoxOpenend();
            }
        }else if(itemDailyChallengeBox.boxType == 4){
            if(this.countDayOfMonth_Finished >= this.countDayOfMonth && !localConfig.instance.checkReceivedInfoMonthReward(itemDailyChallengeBox.infoMonthReward)){
                localConfig.instance.addInfoMonthReward(new InfoMonth(this.currMonth,this.currYear),4);
                clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"DAILY CHALLENGE",localConfig.instance.arrDailyChallengeRewards[3]);
                this.arrItemDailyChallengeBox[3].setBoxOpenend();
            }
        }
        this.showBoxRewardInfoGroup(itemDailyChallengeBox.node.worldPosition,true,localConfig.instance.arrDailyChallengeRewards[itemDailyChallengeBox.boxType-1]);
        
    }
    //#endregion

    touchClose(): void {
        LogEventManager.instance.logButtonClick("close","dailychallengepopup");
        super.touchClose();
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
