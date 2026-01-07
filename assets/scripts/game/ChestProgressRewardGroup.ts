
import { _decorator, Component, Label, Node, ProgressBar, tween, Tween, UIOpacity } from 'cc';
import { localConfig } from '../localConfig';
import { clientEvent } from '../framework/clientEvent';
import { Constants } from '../framework/constants';
import { GroupRewardDataInfo } from './info/ShopDataInfo';
import { AudioManager2 } from '../framework/audioManager2';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ChestProgressRewardGroup
 * DateTime = Wed Oct 23 2024 16:46:12 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ChestProgressRewardGroup.ts
 * FileBasenameNoExtension = ChestProgressRewardGroup
 * URL = db://assets/scripts/game/ChestProgressRewardGroup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ChestProgressRewardGroup')
export class ChestProgressRewardGroup extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(UIOpacity)
    nodeOpacity:UIOpacity = null;

    @property(Label)
    txtChestProgress:Label = null;

    @property(Node)
    iconChest:Node = null;

    @property(ProgressBar)
    progressChest:ProgressBar = null;

    tweenChest:Tween<{}> = null;
    level:number = -1;
    initChestProgress(level:number) {
        this.level = level;
        let countLevelUnlock:number = localConfig.instance.getChests_CountLevelUnlock(level);
        let progress:number = localConfig.instance.getChestProgress_byLevel(level);
        this.txtChestProgress.string = `${progress - 1}/${countLevelUnlock}`;
        this.progressChest.progress = (progress -1) / countLevelUnlock;
        if(this.tweenChest) this.tweenChest.stop();

        this.showGroup(progress,countLevelUnlock);
    }

    showGroup(progressValue:number,countLevelUnlock:number){
        this.nodeOpacity.opacity = 0;
        tween(this.nodeOpacity).to(0.3,{opacity:255},{easing:'quadOut',onComplete:()=>{
            this.showProgress(progressValue,countLevelUnlock);
        }}).start();
    }

    showProgress(progressValue:number,countLevelUnlock:number){
        AudioManager2.instance.playSound_progressbar();
        this.tweenChest = tween(this.progressChest).to(0.3,{progress:(progressValue/countLevelUnlock)},{easing:'linear',onComplete:()=>{
            this.txtChestProgress.string = `${progressValue}/${countLevelUnlock}`;
            this.showProgressFinished(progressValue,countLevelUnlock);
        }}).start();
    }

    showProgressFinished(progressValue:number,countLevelUnlock:number){
        if(progressValue == countLevelUnlock){
            this.scheduleOnce(()=>{
                this.showReward();
            },0.2);
        }
    }

    showReward(){
        let indexChest:number = localConfig.instance.getChestIndex_byLevel(this.level);
        let groupRewardDataInfo:GroupRewardDataInfo = localConfig.instance.getChests_GroupRewardDataInfo_byIndex(indexChest);
        AudioManager2.instance.playPopupOpen2();
        clientEvent.dispatchEvent(Constants.SHOW_CHEST_REWARD_POPUP,indexChest,groupRewardDataInfo);
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
