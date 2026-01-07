
import { _decorator, Button, Component, Label, Node, ProgressBar, Sprite, SpriteFrame, tween } from 'cc';
import { PlayerRaceDataInfo } from './PlayerRaceDataInfo';
import { FBInstantManager } from '../../common/FBInstantManager';
import { localConfig } from '../../localConfig';
import { AVATAR_TYPE } from '../../framework/constants';
import { resourceUtil } from '../../framework/resourceUtil';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemPlayerRaceProgress
 * DateTime = Tue Nov 12 2024 15:59:30 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemPlayerRaceProgress.ts
 * FileBasenameNoExtension = ItemPlayerRaceProgress
 * URL = db://assets/scripts/game/race/ItemPlayerRaceProgress.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemPlayerRaceProgress')
export class ItemPlayerRaceProgress extends Component {
    
    @property(Sprite)
    avatar: Sprite = null;

    @property(Node)
    iconLoading: Node = null;

    @property(SpriteFrame)
    sfAvatarDefault: SpriteFrame = null;

    @property(Label)
    txtName: Label = null;



    @property(Label)
    txtProgress: Label = null;

    @property(ProgressBar)
    progressBar: ProgressBar = null;

    @property(Boolean)
    isMyPlayer:boolean = false;


    playerRaceDataInfo:PlayerRaceDataInfo = null;

    protected onEnable(): void {
        if(this.isMyPlayer){
            this.showProgressMyPlayer();
        }else if(this.playerRaceDataInfo){
            this.showProgressOpponent();
        }

    }

    initMyPlayer(){
        this.reset();
        this.txtName.string = `${FBInstantManager.instance.getName()}`;
        if(localConfig.instance.myAvatarSpriteFrame){
            this.avatar.spriteFrame = localConfig.instance.myAvatarSpriteFrame;
            this.iconLoading.active = false;
        }
    }

    showProgressMyPlayer(){
        this.progressBar.progress = (localConfig.instance.raceScore - 1) / 10;
        this.txtProgress.string = `${localConfig.instance.raceScore - 1}/10`;
        tween(this.progressBar).delay(0.5).to(0.3, {progress: localConfig.instance.raceScore / 10},{easing: 'linear',onComplete: () => {
            this.txtProgress.string = `${localConfig.instance.raceScore}/10`;
        }}).start();
    }

    initPlayerOpponent(_playerRaceDataInfo:PlayerRaceDataInfo){
        // console.log(_playerRaceDataInfo);
        this.reset();
        this.playerRaceDataInfo = _playerRaceDataInfo;
        this.txtName.string = `${this.playerRaceDataInfo.userName}`;
        // console.log(this.playerRaceDataInfo.avatarURL);
        if(this.playerRaceDataInfo.avatarURL){
            if(localConfig.instance.mapCacheAvatars.has(this.playerRaceDataInfo.playerID)){
                this.iconLoading.active = false;
                this.avatar.spriteFrame = localConfig.instance.mapCacheAvatars.get(this.playerRaceDataInfo.playerID);
            }else if(this.playerRaceDataInfo.avatarType == AVATAR_TYPE.TYPE_WEB){
                this.iconLoading.active = true;
                resourceUtil.setRemoteImage(this.playerRaceDataInfo.avatarURL,this.avatar,(err,spriteFrame)=>{
                    if(err){
                        // console.log(err);
                        return;
                    }
                    localConfig.instance.mapCacheAvatars.set(this.playerRaceDataInfo.playerID,spriteFrame);
                    this.iconLoading.active = false;
                });
            }else if(this.playerRaceDataInfo.avatarType == AVATAR_TYPE.TYPE_LOCAL){
                this.iconLoading.active = false;
                this.avatar.spriteFrame = this.sfAvatarDefault;
            }
        }

        this.showProgressOpponent();
    }

    showProgressOpponent(){
        // console.log("showProgressOpponent");
        let timePlayed:number = localConfig.instance.getCurrTime() - localConfig.instance.raceLastTime;
        // console.log("timePlayed",timePlayed);
        let currScoreOpponent:number = localConfig.instance.getRaceScore_Opponent(timePlayed, this.playerRaceDataInfo.arrTimes);
        // console.log("currScoreOpponent",currScoreOpponent);
        this.progressBar.progress = (currScoreOpponent) / 10;
        this.txtProgress.string = `${currScoreOpponent}/10`;
    }

    reset(){
        if(this.isMyPlayer){
            this.progressBar.progress = 0;
            this.txtProgress.string = `0/10`;
        }else {
            this.progressBar.progress = 0;
            this.txtProgress.string = `0/10`;
            this.txtName.string = "";
            this.avatar.spriteFrame = this.sfAvatarDefault;
            this.iconLoading.active = true;
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
