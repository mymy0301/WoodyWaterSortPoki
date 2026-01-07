
import { _decorator, Component, Node, tween, Tween, UIOpacity, Vec3 } from 'cc';
import { BOOSTER_TYPE, Constants, GAME_MODE, PLAY_TYPE } from '../framework/constants';
import { localConfig } from '../localConfig';
import { clientEvent } from '../framework/clientEvent';
import { FBInstantManager } from '../common/FBInstantManager';
import { AudioManager2 } from '../framework/audioManager2';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = NoMovesGroup
 * DateTime = Fri May 09 2025 13:26:23 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = NoMovesGroup.ts
 * FileBasenameNoExtension = NoMovesGroup
 * URL = db://assets/scripts/game/NoMovesGroup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('NoMovesGroup')
export class NoMovesGroup extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Node)
    btnPlayOn: Node = null;

    // @property(Node)
    // btnGiveUp: Node = null;

    // @property(Node)
    // btnReplay: Node = null;

    // @property(Node)
    // btnQuitTournament: Node = null;

    @property(Node)
    btnClose: Node = null;

    @property(Node)
    btnAddColAd: Node = null;

    @property(Node)
    groupRight: Node = null;

    @property(Node)
    nodeTitle: Node = null;

    @property(Node)
    nodeTitle2: Node = null;

    @property(Node)
    nodeCoinGroup: Node = null;

    @property(UIOpacity)
    bgOpacity: UIOpacity = null;

    tweenBGOpacity: Tween<{}> = null;
    twennPlayOn: Tween<{}> = null;
    tweenRightGroup: Tween<{}> = null;
    tweenTitle: Tween<{}> = null;
    tweenTitle2: Tween<{}> = null;

    @property(Node)
    lockGroup: Node = null;

    protected onEnable(): void {
        this.btnPlayOn.on(Constants.CLICK, this.touchPlayOn, this);
        // this.btnGiveUp.on(Constants.CLICK, this.touchGiveUp, this);
        // this.btnReplay.on(Constants.CLICK, this.touchReplay, this);
        this.btnAddColAd.on(Constants.CLICK, this.touchAddColAd, this);
        // this.btnQuitTournament.on(Constants.CLICK, this.touchQuitTournament, this);
        this.btnClose.on(Constants.CLICK, this.touchClose, this);
    }
    protected onDisable(): void {
        this.btnPlayOn.off(Constants.CLICK, this.touchPlayOn, this);
        // this.btnGiveUp.off(Constants.CLICK, this.touchGiveUp, this);
        // this.btnReplay.off(Constants.CLICK, this.touchReplay, this);
        this.btnAddColAd.off(Constants.CLICK, this.touchAddColAd, this);
        // this.btnQuitTournament.off(Constants.CLICK, this.touchQuitTournament, this);
        this.btnClose.on(Constants.CLICK, this.touchClose, this);

    }
    showNoMovesGroup() {
        AudioManager2.instance.playNoMoves();
        this.lockGroup.active = true;
        this.bgOpacity.opacity = 0;
        // Vị trí đích
        const playOnTarget = new Vec3(-260, -680,0);
        const playOnTarget2 = new Vec3(0, -680,0);
        const rightGroupTarget = new Vec3(260,-680,0);
        const titleTarget = this.nodeTitle.position.clone();
        const title2Target = this.nodeTitle2.position.clone();

        // Vị trí bắt đầu
        if(localConfig.instance.isNoMoves_AddCol_byAD){
            this.groupRight.active = false;
            this.btnPlayOn.setPosition(new Vec3(0,  -1200,0));
        }else{
            this.groupRight.active = true;
            this.btnPlayOn.setPosition(new Vec3(-600,-680,0));
        }
       
        this.groupRight.setPosition(new Vec3(600, rightGroupTarget.y));
        this.nodeTitle.setPosition(new Vec3(titleTarget.x, 1200));
        this.nodeTitle2.setPosition(new Vec3(title2Target.x, 1200));
        this.nodeCoinGroup.active = false;
        this.btnClose.active = false;

        // this.btnGiveUp.active = false;
        // this.btnReplay.active = false;
        // this.btnQuitTournament.active = false;
        // if(localConfig.instance.currGameMode == GAME_MODE.NORMAL){
        //     this.btnGiveUp.active = true;
        // }else if(localConfig.instance.currGameMode == GAME_MODE.DAILY_CHALLENGE){
        //     this.btnReplay.active = true;
        // }else if(localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT){
        //     this.btnQuitTournament.active = true;
        // }



        if (this.tweenBGOpacity) {
            this.tweenBGOpacity.stop();
        }

        if (this.twennPlayOn) {
            this.twennPlayOn.stop();
        }

        if (this.tweenRightGroup) {
            this.tweenRightGroup.stop();
        }

        if (this.tweenTitle) {
            this.tweenTitle.stop();
        }

        if (this.tweenTitle2) {
            this.tweenTitle2.stop();
        }

        if(localConfig.instance.currMagicLevelConfigInfo.maxRow > 2){
            this.nodeTitle2.active = false;
            this.nodeTitle.active = true;
            this.tweenTitle = tween(this.nodeTitle).to(0.5, { position: titleTarget }, { easing: 'backOut', onComplete: () => { 
                this.nodeCoinGroup.active = true;
                this.btnClose.active = true;
                this.lockGroup.active = false;
            } }).start();
        }else{
            this.nodeTitle2.active = true;
            this.nodeTitle.active = false;
            this.tweenTitle2 = tween(this.nodeTitle2).to(0.5, { position: title2Target }, { easing: 'backOut', onComplete: () => { 
                this.nodeCoinGroup.active = true;
                this.btnClose.active = true;
                this.lockGroup.active = false;
            } }).start();
        }

        this.tweenBGOpacity = tween(this.bgOpacity).to(0.3, { opacity: 255 }, { easing: 'linear', onComplete: () => { } }).start();
        if(localConfig.instance.isNoMoves_AddCol_byAD){
           this.twennPlayOn = tween(this.btnPlayOn).to(0.5, { position: playOnTarget2 }, { easing: 'backOut', onComplete: () => { } }).start();
        }else{
            this.twennPlayOn = tween(this.btnPlayOn).to(0.5, { position: playOnTarget }, { easing: 'backOut', onComplete: () => { } }).start();
            this.tweenRightGroup = tween(this.groupRight).to(0.5, { position: rightGroupTarget }, { easing: 'backOut', onComplete: () => { } }).start();
        }
       
    }

    touchPlayOn() {
        LogEventManager.instance.logButtonClick("playon","nomoves");
        if(localConfig.instance.currCoin >= localConfig.instance.getBoosterPrice(BOOSTER_TYPE.ADDCOL)){
            localConfig.instance.setCoin(localConfig.instance.currCoin - localConfig.instance.getBoosterPrice(BOOSTER_TYPE.ADDCOL));
            LogEventManager.instance.logResourceSpend("currency","coin",localConfig.instance.getBoosterPrice(BOOSTER_TYPE.ADDCOL),"nomoves","playon");
            this.node.active = false;
            clientEvent.dispatchEvent(Constants.NOMOVES_TOUCH_PLAYON);
        }else{
            clientEvent.dispatchEvent(Constants.SHOW_SHOP_POPUP);
        }
    }
    touchGiveUp() {
        LogEventManager.instance.logButtonClick("giveup","nomoves");
        FBInstantManager.instance.Show_InterstitialAdAsync("nomoves","giveup",(err,success)=>{
            this.node.active = false;
            clientEvent.dispatchEvent(Constants.NOMOVES_TOUCH_GIVEUP);
        });
        
    }

    touchReplay() {
        LogEventManager.instance.logButtonClick("replay","nomoves");
        FBInstantManager.instance.Show_InterstitialAdAsync("nomoves","replay",(err, success) => {
            this.node.active = false;
            clientEvent.dispatchEvent(Constants.NOMOVES_TOUCH_REPLAY);
        });
    }

    touchQuitTournament() {
        LogEventManager.instance.logButtonClick("quittournament","nomoves");
        FBInstantManager.instance.Show_InterstitialAdAsync("nomoves","quittournament",(err, success) => {
            this.node.active = false;
            LogEventManager.instance.logLevelEnd(localConfig.instance.currIndexLevelTournament,localConfig.instance.getLevelLoopByFromStr(localConfig.instance.currLevelConfigInfo.levelOrder),PLAY_TYPE[localConfig.instance.playType].toLowerCase().toString(),1,0,"tournament",localConfig.instance.playDurationEndTime - localConfig.instance.playDurationStartTime,"lose","out_of_move");
            clientEvent.dispatchEvent(Constants.TOURNAMENT_QUIT_YES);
        });
       
    }

    touchAddColAd() {
        LogEventManager.instance.logButtonClick("addcolad","nomoves");
        FBInstantManager.instance.Show_RewardedVideoAsync("nomoves","addcolad",(err, success) => {
            if (err) {

            } else {
                localConfig.instance.isNoMoves_AddCol_byAD = true;
                this.node.active = false;
                clientEvent.dispatchEvent(Constants.NOMOVES_TOUCH_PLAYON);
            }
        });
    }

    touchClose() {
        LogEventManager.instance.logButtonClick("close","nomoves");
        if(localConfig.instance.currGameMode == GAME_MODE.NORMAL){
            clientEvent.dispatchEvent(Constants.SHOW_QUITCONFIRM_POPUP);
        }else if(localConfig.instance.currGameMode == GAME_MODE.DAILY_CHALLENGE){
            let indexDay:number = localConfig.instance.getCountDay_From_Start(localConfig.instance.currInfoDaySelect) + 1;
            LogEventManager.instance.logLevelEnd(indexDay,localConfig.instance.getLevelLoopByFromStr(localConfig.instance.currLevelConfigInfo.levelOrder),
                                            PLAY_TYPE[localConfig.instance.playType].toLowerCase().toString(),1,0,
                                            "dailychallenge",localConfig.instance.playDurationEndTime - localConfig.instance.playDurationStartTime,"exit","");
            clientEvent.dispatchEvent(Constants.DAILYCHALLENGE_NOMOVES_TOUCHCLOSE);
        }else if(localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT){
            clientEvent.dispatchEvent(Constants.SHOW_TOURNAMENTQUIT_POPUP);
        }else if(localConfig.instance.currGameMode == GAME_MODE.WITH_FRIEND){
            LogEventManager.instance.logLevelEnd(localConfig.instance.currLevelConfigInfo.levelIndex, localConfig.instance.getLevelLoopByFromStr(localConfig.instance.currLevelConfigInfo.levelOrder),
                PLAY_TYPE[localConfig.instance.playType].toLowerCase().toString(), 1, 0,
                "withfriend", localConfig.instance.playDurationEndTime - localConfig.instance.playDurationStartTime, "exit", "");
            FBInstantManager.instance.resetContext(() => { });
            localConfig.instance.currWithFriendDataInfo = null;
            clientEvent.dispatchEvent(Constants.WITHFRIEND_NOMOVES_TOUCH_CLOSE);
        }else if(localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT_PAGEHOST){
            clientEvent.dispatchEvent(Constants.SHOW_TOURNAMENTQUIT_POPUP);
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
