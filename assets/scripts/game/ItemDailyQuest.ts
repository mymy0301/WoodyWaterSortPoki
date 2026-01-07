
import { _decorator, Button, Component, Label, Node, ProgressBar, tween, Vec3 } from 'cc';
import { QuestDataInfo } from './info/QuestDataInfo';
import { localConfig } from '../localConfig';
import { Constants } from '../framework/constants';
import { clientEvent } from '../framework/clientEvent';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemDailyQuest
 * DateTime = Tue Oct 15 2024 05:45:46 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemDailyQuest.ts
 * FileBasenameNoExtension = ItemDailyQuest
 * URL = db://assets/scripts/game/ItemDailyQuest.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemDailyQuest')
export class ItemDailyQuest extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    questDataInfo:QuestDataInfo = null;

    @property(Button)
    btnClaim:Button = null;

    @property(Button)
    btnGoto:Button = null;

    @property(Node)
    nodeFinished:Node = null;

    @property(Node)
    iconFinished:Node = null;

    @property(Node)
    iconAchievement:Node = null;

    @property(Label)
    txtValue:Label = null;

    @property(ProgressBar)
    progress:ProgressBar = null;

    @property(Label)
    txtProgress:Label = null;


    @property(Label)
    txtDesc:Label = null;

    protected onEnable(): void {
        this.btnClaim.node.on(Constants.CLICK,this.touchClaim,this);
        this.btnGoto.node.on(Constants.CLICK,this.touchGoto,this);

        if(this.questDataInfo != null){
            this.showInfo();
        }
    }

    protected onDisable(): void {
        this.btnClaim.node.off(Constants.CLICK,this.touchClaim,this);
        this.btnGoto.node.off(Constants.CLICK,this.touchGoto,this);
    }


    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    isClaimAvailable():boolean{
        if(localConfig.instance.checkDailyQuestReceive_byID(this.questDataInfo.id)){
            return false;
        }
        let progressValue:number = localConfig.instance.getDailyQuestProgress_byID(this.questDataInfo.id);
        if(progressValue >= this.questDataInfo.count){
            return true;
        }
        return false;
    }
    initQuest(_questDataInfo:QuestDataInfo){
        this.questDataInfo = _questDataInfo;
        this.txtDesc.string = `${this.questDataInfo.des}`;
        this.txtValue.string = `x${this.questDataInfo.value}`;
        this.showInfo();
    }

    showInfo(){
        let progressValue:number = localConfig.instance.getDailyQuestProgress_byID(this.questDataInfo.id);
        if(progressValue >= this.questDataInfo.count){
            progressValue = this.questDataInfo.count;
        }
        this.progress.progress = progressValue/this.questDataInfo.count;
        this.txtProgress.string = `${progressValue}/${this.questDataInfo.count}`;

        if(progressValue < this.questDataInfo.count){
            this.btnClaim.node.active = false;
            this.btnGoto.node.active = true;
            this.nodeFinished.active = false;
        }else{
            if(localConfig.instance.checkDailyQuestReceive_byID(this.questDataInfo.id)){
                this.nodeFinished.active = true;
                this.btnClaim.node.active = false;
                this.btnGoto.node.active = false;
            }else{
                this.nodeFinished.active = false;
                this.btnClaim.node.active = true;
                this.btnGoto.node.active = false;
            }
        }

        // this.btnClaim.node.active = true;
        // this.btnGoto.node.active = false;
        // this.nodeFinished.active = false;
    }

    touchClaim(){
        LogEventManager.instance.logButtonClick("questclaim","dailytaskpopup");
        clientEvent.dispatchEvent(Constants.DAILY_QUEST_CLAIM_UPDATE_STARTPOS,this.iconAchievement.worldPosition);
        this.setItemQuestClaim();
        clientEvent.dispatchEvent(Constants.DAILY_QUEST_TOUCH_CLAIM,this);
    }

    setItemQuestClaim(){
        // console.log("setItemQuestClaim",this.questDataInfo);
        localConfig.instance.setDailyQuestReceive_byID(this.questDataInfo.id);
        this.nodeFinished.active = true;
        this.btnClaim.node.active = false;
        this.btnGoto.node.active = false;

        this.iconFinished.setScale(new Vec3(0,0,0));
        tween(this.iconFinished).to(0.3, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut', onComplete: () => { } }).start();

        this.scheduleOnce(()=>{
            this.node.setSiblingIndex(999);
        },0.5);
    }

    touchGoto(){
        LogEventManager.instance.logButtonClick("questgoto","dailytaskpopup");
        clientEvent.dispatchEvent(Constants.DAILY_QUEST_TOUCH_GOTO,this.questDataInfo);
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
