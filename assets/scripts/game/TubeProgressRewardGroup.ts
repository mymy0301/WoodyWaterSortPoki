
import { _decorator, Component, Label, Node, ProgressBar, Sprite, tween, Tween, UIOpacity } from 'cc';
import { localConfig } from '../localConfig';
import { UnlockProgressInfo } from './info/UnlockProgressInfo';
import { clientEvent } from '../framework/clientEvent';
import { Constants, THEME_TYPE } from '../framework/constants';
import { resourceUtil } from '../framework/resourceUtil';
import { AudioManager2 } from '../framework/audioManager2';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TubeProgressRewardGroup
 * DateTime = Thu Oct 24 2024 05:54:22 GMT+0700 (Indochina Time)
 * Author = MyTom2k17
 * FileBasename = TubeProgressRewardGroup.ts
 * FileBasenameNoExtension = TubeProgressRewardGroup
 * URL = db://assets/scripts/game/TubeProgressRewardGroup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('TubeProgressRewardGroup')
export class TubeProgressRewardGroup extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(UIOpacity)
    nodeOpacity:UIOpacity = null;

    @property(Label)
    txtInfo:Label = null;

    @property(Label)
    txtProgress:Label = null;

    @property(Sprite)
    icon:Sprite = null;

    @property(ProgressBar)
    progressTube:ProgressBar = null;

    @property(Node)
    iconLoading:Node = null;

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
    tweenTube:Tween<{}> = null;
    level:number = -1;
    unlockProgressInfos:UnlockProgressInfo[] = null;
    initTubeProgress(level:number){
        this.level = level;
        let isAvailable:boolean = localConfig.instance.checkUnlockProgressInfo_Tubes_Available(level);
        if(!isAvailable){
            this.node.active = false;
            return;
        }

        this.unlockProgressInfos = localConfig.instance.getUnlockProgressInfo_Tubes_byLevel(level);
        // console.log(this.unlockProgressInfos);
        if(this.unlockProgressInfos == null){
            this.node.active = false;
            return;
        }
        this.iconLoading.active = true;
        this.node.active = true;
        this.loadIcon(this.unlockProgressInfos[1].itemID);
        let countLevelUnlock:number = this.unlockProgressInfos[1].level - this.unlockProgressInfos[0].level;
        let progressValue:number = level - this.unlockProgressInfos[0].level;
        this.txtProgress.string = `${progressValue - 1}/${countLevelUnlock}`;
        this.progressTube.progress = (progressValue - 1) / countLevelUnlock;
        this.txtInfo.string = `Reach level ${this.unlockProgressInfos[1].level}`;
        this.showGroup(progressValue,countLevelUnlock);
        // this.showProgress(progressValue,countLevelUnlock);
    }

    showGroup(progressValue:number,countLevelUnlock:number){
        this.nodeOpacity.opacity = 0;
        tween(this.nodeOpacity).to(0.3,{opacity:255},{easing:'quadOut',onComplete:()=>{
            this.showProgress(progressValue,countLevelUnlock);
        }}).start();
    }

    loadIcon(itemID:number){
        let strPath: string = localConfig.instance.getThemePath_byItemID(THEME_TYPE.TUBE, itemID);
        resourceUtil.loadSpriteFrame_Bundle(strPath, (err, spriteFrame) => {
            if (err) {
                console.error(err);
                return;
            }
            if(!this.node || !this.icon){
                // console.log("33333333333");
                return;
            } 

            this.icon.spriteFrame = spriteFrame;
            this.iconLoading.active = false;
        });
    }

    showProgress(progressValue:number,countLevelUnlock:number){
        AudioManager2.instance.playSound_progressbar();
        this.tweenTube = tween(this.progressTube).to(0.3,{progress:(progressValue/countLevelUnlock)},{easing:'linear',onComplete:()=>{
            this.txtProgress.string = `${progressValue}/${countLevelUnlock}`;
            this.showProgressFinished(progressValue,countLevelUnlock);
        }}).start();
    }

    showProgressFinished(progressValue:number,countLevelUnlock:number){
        if(progressValue == countLevelUnlock){
            AudioManager2.instance.playPopupOpen2();
            clientEvent.dispatchEvent(Constants.SHOW_THEME_REWARD_POPUP,THEME_TYPE.TUBE,this.unlockProgressInfos[1].itemID);
        }
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
