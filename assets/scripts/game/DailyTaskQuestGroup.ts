
import { _decorator, Component, instantiate, Label, Node, Prefab, ProgressBar, tween, Tween, Vec3 } from 'cc';
import { ItemDailyQuest } from './ItemDailyQuest';
import { localConfig } from '../localConfig';
import { ItemDailyQuestBoxReward } from './ItemDailyQuestBoxReward';
import { QuestDataInfo } from './info/QuestDataInfo';
import { clientEvent } from '../framework/clientEvent';
import { Constants } from '../framework/constants';
import { GroupRewardDataInfo } from './info/ShopDataInfo';
import { AudioManager2 } from '../framework/audioManager2';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = DailyTaskQuestGroup
 * DateTime = Sun Oct 13 2024 20:29:28 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = DailyTaskQuestGroup.ts
 * FileBasenameNoExtension = DailyTaskQuestGroup
 * URL = db://assets/scripts/game/DailyTaskQuestGroup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('DailyTaskQuestGroup')
export class DailyTaskQuestGroup extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(ItemDailyQuestBoxReward)
    arrBoxRewards:ItemDailyQuestBoxReward[] = [];

    @property(Node)
    nodeAchievement:Node = null;

    @property(Label)
    txtAchievement:Label = null;

    @property(ProgressBar)
    achivementProgress:ProgressBar = null;

    @property(Prefab)
    itemDailyQuestPrefab:Prefab = null

    @property(Node)
    contentGroup:Node = null;

    arrItemDailyQuests:ItemDailyQuest[] = [];

    @property(Node)
    itemAchievement:Node = null;

    @property(Node)
    achievementStartPos:Node = null;

    @property(Node)
    achievementEndPos:Node = null;

    @property(Node)
    nodeNotify:Node = null;

    countAchievement:number = 0;
    currIndexBoxReward:number = 0;

    countAchievementTarget:number = 0;
    isUnlockNewBoxReward:boolean = false;

    @property(Node)
    lockGroup:Node = null;

    protected onEnable(): void {
        clientEvent.on(Constants.DAILY_QUEST_TOUCH_CLAIM,this.setItemQuestClaim,this);
        clientEvent.on(Constants.DAILY_QUEST_CLAIM_UPDATE_STARTPOS,this.setQuestClaim_UpdateStartPos,this);
        this.showInfo();
        this.lockGroup.active = false;
        this.countAchievementTarget = 0;
        this.isUnlockNewBoxReward = false;
    }

    protected onDisable(): void {
        clientEvent.off(Constants.DAILY_QUEST_TOUCH_CLAIM,this.setItemQuestClaim,this);
        clientEvent.off(Constants.DAILY_QUEST_CLAIM_UPDATE_STARTPOS,this.setQuestClaim_UpdateStartPos,this);
    }

    start () {
        // [3]
        this.initQuests();
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    initQuests(){
        // console.log("initQuests");
        let countClaim:number = -1;
        let countAchievement:number = 0;
        for(let i=0; i< localConfig.instance.arrDailyQuestDataInfos.length;i++){
            let item:Node = instantiate(this.itemDailyQuestPrefab);
            item.setParent(this.contentGroup);
            let itemDailyQuest:ItemDailyQuest = item.getComponent(ItemDailyQuest);
            itemDailyQuest.initQuest(localConfig.instance.arrDailyQuestDataInfos[i]);
            this.arrItemDailyQuests.push(itemDailyQuest);

            let progressValue:number = localConfig.instance.getDailyQuestProgress_byID(localConfig.instance.arrDailyQuestDataInfos[i].id);
            if(progressValue >=localConfig.instance.arrDailyQuestDataInfos[i].count){
                progressValue = localConfig.instance.arrDailyQuestDataInfos[i].count;

            }

            if(progressValue < localConfig.instance.arrDailyQuestDataInfos[i].count){

            }else{
                if(localConfig.instance.checkDailyQuestReceive_byID(localConfig.instance.arrDailyQuestDataInfos[i].id)){
                    countAchievement += localConfig.instance.arrDailyQuestDataInfos[i].value;
                }else{
                    countClaim ++;
                    // console.log(countClaim);
                    itemDailyQuest.node.setSiblingIndex(countClaim);
                }
            }
        }

        for(let i = 0; i < this.arrItemDailyQuests.length; i++){
            let itemDailyQuest:ItemDailyQuest = this.arrItemDailyQuests[i];
            if(localConfig.instance.checkDailyQuestReceive_byID(localConfig.instance.arrDailyQuestDataInfos[i].id)){
                itemDailyQuest.node.setSiblingIndex(999);
            }
        }

        this.showNotify();
    }

    showInfo(){
        if(localConfig.instance.arrDailyQuest_Receives.length > 0){
            let countAchievement:number = 0;
            for(let i=0; i< localConfig.instance.arrDailyQuest_Receives.length;i++){
                let questDataInfo:QuestDataInfo = localConfig.instance.getDailyQuestDataInfo_byID(localConfig.instance.arrDailyQuest_Receives[i]);
                countAchievement += questDataInfo.value;
            }

            this.countAchievement = countAchievement;
            this.txtAchievement.string = `x${countAchievement}`;
            this.achivementProgress.progress = countAchievement/100;
            // console.log("countAchievement",countAchievement);
            this.currIndexBoxReward = 0;
            for(let i = 0; i < this.arrBoxRewards.length; i++){
                let boxValue:number = localConfig.instance.getDailyQuest_BoxRewadValue_byIndexBox(this.arrBoxRewards[i].indexBoxReward);
                // console.log("boxValue",boxValue);
                if(boxValue <= countAchievement){
                    this.currIndexBoxReward = this.arrBoxRewards[i].indexBoxReward;
                    // console.log("this.currIndexBoxReward",this.currIndexBoxReward);
                    this.arrBoxRewards[i].setBoxFinished();
                }else{
                    this.arrBoxRewards[i].setBoxLock();
                }
            }
        }else{
            this.countAchievement = 0;
            this.txtAchievement.string = `0`;
            this.achivementProgress.progress = 0;

            for(let i = 0; i < this.arrBoxRewards.length; i++){
                this.arrBoxRewards[i].setBoxLock();
            }
        }

        this.showNotify();
    }

    showNotify(){
        let isShowNotify:boolean = false;
        if(this.arrItemDailyQuests.length > 0){
            for(let i = 0; i < this.arrItemDailyQuests.length; i++){
                let itemDailyQuest:ItemDailyQuest = this.arrItemDailyQuests[i];
                if(itemDailyQuest.isClaimAvailable()){
                    isShowNotify = true;
                }
            }
        }
        this.nodeNotify.active = isShowNotify;
    }

    setItemQuestClaim(itemDailyQuest:ItemDailyQuest){
        this.lockGroup.active = true;
        this.countAchievementTarget = this.countAchievement + itemDailyQuest.questDataInfo.value;
        this.isUnlockNewBoxReward = false;
        if(this.countAchievementTarget  >= localConfig.instance.getDailyQuest_BoxRewadValue_byIndexBox(this.currIndexBoxReward + 1)){
            this.isUnlockNewBoxReward = true;
        }
        this.setMoveAchievement_toTarget();

        this.showNotify();

        clientEvent.dispatchEvent(Constants.DAILYTASK_NOTIFY_UPDATE);
    }


    tweenMoveAchievement:Tween<{}> = null;
    setMoveAchievement_toTarget(){
        this.itemAchievement.position = this.achievementStartPos.position;
        this.itemAchievement.setScale(new Vec3(1,1,1));
        this.itemAchievement.active = true;

        if(this.tweenMoveAchievement){
            this.tweenMoveAchievement.stop();   
        }
        this.tweenMoveAchievement = tween(this.itemAchievement).to(0.3,{position: this.achievementEndPos.position,scale:new Vec3(0.8,0.8,0.8)},{easing:'quadOut',onComplete:()=>{
            this.itemAchievement.active = false;
            this.setProgressAchievement_toTarget();
        }}).start();
    }

    tweenProgressAchievement:Tween<{}> = null;
    tweenIconAchievement:Tween<{}> = null;

    currAchievementValue:number = 0;
    setProgressAchievement_toTarget(){
        if(this.tweenProgressAchievement){
            this.tweenProgressAchievement.stop();
        }
        if(this.tweenIconAchievement){
            this.tweenIconAchievement.stop();
        }
        AudioManager2.instance.playSound_progressbar();
        this.tweenIconAchievement = tween(this.nodeAchievement).to(0.05,{scale: new Vec3(1.2,1.2,1.2)},{easing:'linear'}).to(0.05,{scale: new Vec3(1,1,1)},{easing:'linear'})
                                           .to(0.05,{scale: new Vec3(1.1,1.1,1.1)},{easing:'linear'}).to(0.05,{scale: new Vec3(1,1,1)},{easing:'linear'}).union().start();//.repeat(2);
        this.tweenProgressAchievement = tween(this.achivementProgress).to(0.3, { progress: this.countAchievementTarget / 100 }, {
            easing: 'linear', onComplete: () => {
                this.countAchievement = this.countAchievementTarget;
                this.txtAchievement.string = `x${this.countAchievement}`;
                this.lockGroup.active = false;
                
            }, onUpdate: (target, ratio) => {
                let countAchievement: number = Math.floor(ratio * this.countAchievementTarget);
                if (this.countAchievement < countAchievement) {
                    this.countAchievement = countAchievement;
                    this.txtAchievement.string = `x${countAchievement}`;
                }

                if(this.isUnlockNewBoxReward){
                    if(countAchievement >= localConfig.instance.getDailyQuest_BoxRewadValue_byIndexBox(this.currIndexBoxReward + 1)){
                        this.currIndexBoxReward ++;
                        this.arrBoxRewards[this.currIndexBoxReward - 1].setBoxFinished();
                        this.isUnlockNewBoxReward = false;
                        this.showClaimBoxReward();
                    }
                }
            }
        }).start();
        
    }

    showClaimBoxReward(){
        let groupRewardDataInfo:GroupRewardDataInfo = localConfig.instance.getDailyQuest_GroupRewardDataInfo_byIndex(this.currIndexBoxReward);
        clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"DAILY QUEST",groupRewardDataInfo);
    }

    setQuestClaim_UpdateStartPos(startPos:Vec3){
        this.achievementStartPos.worldPosition = startPos;
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
