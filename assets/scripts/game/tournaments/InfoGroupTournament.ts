
import { _decorator, Component, Label, labelAssembler, Node, ProgressBar, Sprite, tween, Tween, Vec3 } from 'cc';
import { CountDownToNextTime } from '../../common/CountDownToNextTime';
import { clientEvent } from '../../framework/clientEvent';
import { Constants } from '../../framework/constants';
import { ItemRankInfo } from '../../common/ItemRankInfo';
import { localConfig } from '../../localConfig';
import { CountDownNextTimeMS } from '../../common/CountDownNextTimeMS';
import Utils from '../../core/utils/Utils';
import { CountDownToNextTime_Tournament } from '../../common/CountDownToNextTime_Tournament';
import { CountDownTime_TournamentGamePlay } from './CountDownTime_TournamentGamePlay';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = InfoGroupTournament
 * DateTime = Wed Oct 30 2024 16:43:13 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = InfoGroupTournament.ts
 * FileBasenameNoExtension = InfoGroupTournament
 * URL = db://assets/scripts/game/tournaments/InfoGroupTournament.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('InfoGroupTournament')
export class InfoGroupTournament extends Component {
    @property(Label)
    txtLevel: Label = null;

    @property(CountDownTime_TournamentGamePlay)
    countDownTime: CountDownTime_TournamentGamePlay = null;

    @property(Node)
    groupPlayer: Node = null;

    @property(Sprite)
    avatar: Sprite = null;

    @property(Label)
    txtScore: Label = null;

    @property(ProgressBar)
    progressBar: ProgressBar = null;

    @property(Label)
    txtTargetIndex: Label = null;

    @property(Node)
    nodeTarget:Node;

    tweenNodeTarget:Tween<{}> = null;

    scoreValue:number = 0;
    scoreProgress:number = 0;
    levelValue:number = 1;

    targetScore:number = 0;

    arrItemRankInfos:ItemRankInfo[] = [];
    indexTarget:number = -1;
    scoreTarget:number = 0;
    scoreMin:number = 0;

    protected onEnable(): void {
        clientEvent.on(Constants.AVATAR_LOAD_FINISHED,this.showAvatar,this);
    }

    protected onDisable(): void {
        clientEvent.off(Constants.AVATAR_LOAD_FINISHED,this.showAvatar,this);
    }
    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    showAvatar(){
        if(localConfig.instance.myAvatarSpriteFrame){
            this.avatar.spriteFrame = localConfig.instance.myAvatarSpriteFrame;
        }
    }

    initGroup() {
        this.showAvatar();
        this.arrItemRankInfos = localConfig.instance.getListItemRankInfos_byLeaderboardId(localConfig.instance.currLeaderboardDataInfo._id);
        console.log(this.arrItemRankInfos);
        this.txtLevel.string = `Level 1`;
        this.countDownTime.setInitCountTime(15 * 60,()=>{
            clientEvent.dispatchEvent(Constants.SET_TOURNAMENT_LOSE);
        });
        this.scoreValue = 0;
        this.txtScore.string = `${this.scoreValue}`;
        if(this.arrItemRankInfos.length == 0){
            this.indexTarget = 0;
            this.progressBar.progress = 1;
            this.txtTargetIndex.string = localConfig.instance.ordinal_suffix_of(1);
            this.groupPlayer.setPosition(new Vec3(375,0,0));
            this.scoreTarget = 0;
        }else{
            this.progressBar.progress = 0;
            this.indexTarget = this.arrItemRankInfos.length - 1;
            this.scoreValue = 0;
            this.scoreProgress = 0;
            this.scoreMin = 0;
            this.scoreTarget = this.arrItemRankInfos[this.indexTarget].userScore;
            if(this.indexTarget == 0){
                this.txtTargetIndex.string = localConfig.instance.ordinal_suffix_of(1);
            }else{
                this.txtTargetIndex.string = localConfig.instance.ordinal_suffix_of(this.indexTarget);
            }
            this.groupPlayer.setPosition(new Vec3(-375,0,0));
            console.log(this.scoreTarget);
        }
    }

    setStartCountDown(){
        this.countDownTime.setStartCountTime();
    }
    setNextLevel(timePlay:number){
        this.txtLevel.string = `Level ${localConfig.instance.currIndexLevelTournament}`;
        if(localConfig.instance.currIndexLevelTournament <= 2){
            this.countDownTime.setInitCountTime(15 * 60,()=>{
                clientEvent.dispatchEvent(Constants.SET_TOURNAMENT_LOSE);
            });
        }else{
            this.countDownTime.setInitCountTime(timePlay,()=>{
                clientEvent.dispatchEvent(Constants.SET_TOURNAMENT_LOSE);
            });
        }
    }

    setRevive(){
        this.countDownTime.setInitCountTime(60,()=>{
            clientEvent.dispatchEvent(Constants.SET_TOURNAMENT_LOSE);
        });
        this.countDownTime.setStartCountTime();
    }

    tweenProgress:Tween<{}> = null;
    tweenScoreUpdate:Tween<{}> = null;
    isNextTarget = false;
    setAddScore(scoreAdd:number){
        // if(this.indexTarget > -1){
        //     this.scoreValue += scoreAdd;
        //     this.txtScore.string = `${Utils.formatNumber(this.scoreValue)}`;
        //     if(this.tweenScoreUpdate) this.tweenScoreUpdate.stop();
        //     this.tweenScoreUpdate = tween(this.txtScore.node).to(0.1,{scale: new Vec3(1.1,1.1,1.1)},{easing:'linear'}).to(0.1,{scale: new Vec3(1,1,1)},{easing:'linear'}).union().repeat(2).start();
        // }else{
            
        // }

        this.scoreProgress = this.scoreValue;
        this.scoreValue += scoreAdd;
        this.showUpdateScore();
    }

    showUpdateScore(){
        let progressValue: number = 0;
        if (this.scoreValue < this.scoreTarget) {
            progressValue = (this.scoreValue - this.scoreMin) / (this.scoreTarget - this.scoreMin);
            if (this.tweenProgress) this.tweenProgress.stop();
            this.tweenProgress = tween(this.progressBar).to(0.2, { progress: progressValue }, {
                easing: 'linear',
                onUpdate: (target, ratio) => {
                    this.setUpdateScore();
                }, onComplete: () => {

                }
            }).start();
        } else {
            progressValue = 1;
            if(!this.isNextTarget){
                this.isNextTarget = true;
                if (this.tweenProgress) this.tweenProgress.stop();
                this.tweenProgress = tween(this.progressBar).to(0.2, { progress: progressValue }, {
                    easing: 'linear',
                    onUpdate: (target, ratio) => {
                        this.setUpdateScore();
                    }, onComplete: () => {
                        this.setNextTarget();
                    }
                }).start();
            }else{
                this.txtScore.string = `${Utils.formatNumber(this.scoreValue)}`;
                if (this.tweenScoreUpdate) this.tweenScoreUpdate.stop();
                this.tweenScoreUpdate = tween(this.txtScore.node).to(0.1,{scale: new Vec3(1.1,1.1,1.1)},{easing:'linear'}).to(0.1,{scale: new Vec3(1,1,1)},{easing:'linear'}).union().repeat(2).start();
            }
        }
    }

    setUpdateScore(){
        let scoreCheck = Math.floor(this.scoreMin + (this.scoreTarget - this.scoreMin) * this.progressBar.progress);
        if(scoreCheck != this.scoreProgress){
            this.scoreProgress = scoreCheck;
            this.txtScore.string = `${Utils.formatNumber(this.scoreProgress)}`;
        }
        let posX:number = -375 + 750 * this.progressBar.progress;
        this.groupPlayer.setPosition(new Vec3(posX,0,0));
    }

    tweenNextTarget:Tween<{}> = null;
    tweenNextTargetGroupPlayer:Tween<{}> = null;
    setNextTarget(){
        if(this.indexTarget == 0){
            this.indexTarget = 0;
            this.txtScore.string = `${Utils.formatNumber(this.scoreValue)}`;
            if (this.tweenScoreUpdate) this.tweenScoreUpdate.stop();
            this.tweenScoreUpdate = tween(this.txtScore.node).to(0.1,{scale: new Vec3(1.1,1.1,1.1)},{easing:'linear'}).to(0.1,{scale: new Vec3(1,1,1)},{easing:'linear'}).union().repeat(2).start();                        
        }else{
           
            if(this.tweenProgress) this.tweenProgress.stop();
            this.tweenProgress = tween(this.progressBar).to(0, { progress: 0 }, {
                easing: 'linear',onComplete: () => {
                    
                }}).start();
            if(this.tweenNextTargetGroupPlayer) this.tweenNextTargetGroupPlayer.stop();
            this.tweenNextTargetGroupPlayer = tween(this.groupPlayer).to(0,{position:new Vec3(-375,0,0)},{easing:'linear',onComplete: () => {
                this.setNextTarget_Finished();
            }}).start();    
        }                 
        
        if(this.tweenNextTarget) this.tweenNextTarget.stop();
        this.tweenNextTarget = tween(this.nodeTarget).to(0.1, { scale: new Vec3(1.1, 1.1, 1.1) }, { easing: 'linear' }).to(0.1, { scale: new Vec3(1, 1, 1) }, { easing: 'linear' })
            .union().repeat(2).call(() => {
                
            }).start();
    }

    setNextTarget_Finished(){
        this.isNextTarget = false;
        this.indexTarget = 0;
        for(let i = 0;i < this.arrItemRankInfos.length -1;i++){
            if(this.scoreValue < this.arrItemRankInfos[i].userScore && this.scoreValue >= this.arrItemRankInfos[i + 1].userScore){
                this.indexTarget = i;
                break;
            }
        }
        if(this.indexTarget == 0){
            this.txtTargetIndex.string = localConfig.instance.ordinal_suffix_of(1);
            this.tweenProgress = tween(this.progressBar).to(0.2, { progress: 1 }, {
                easing: 'linear',
            }).start();
            this.tweenNextTargetGroupPlayer = tween(this.groupPlayer).to(0.2,{position:new Vec3(375,0,0)},{easing:'linear',onComplete: () => {
                
            }}).start();    
            this.txtScore.string = `${Utils.formatNumber(this.scoreValue)}`;
        }else{
            this.scoreMin = this.arrItemRankInfos[this.indexTarget + 1].userScore;
            this.scoreTarget = this.arrItemRankInfos[this.indexTarget].userScore;

            this.txtTargetIndex.string = localConfig.instance.ordinal_suffix_of(this.indexTarget);
            if(this.scoreValue > this.scoreMin){
                this.scoreProgress = this.scoreMin;
                this.txtScore.string = `${Utils.formatNumber(this.scoreMin)}`;
                this.showUpdateScore();
            }
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
