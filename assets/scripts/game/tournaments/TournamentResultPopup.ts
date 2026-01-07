
import { _decorator, Button, Component, Label, Node, sp, tween, Tween, UIOpacity, Vec3, Widget } from 'cc';
import { ItemLeaderBoard } from '../ItemLeaderBoard';
import { Constants, GAME_MODE, THEME_TYPE } from '../../framework/constants';
import { BasePopup } from '../../common/basePopup';
import { localConfig } from '../../localConfig';
import { ItemRankInfo } from '../../common/ItemRankInfo';
import { clientEvent } from '../../framework/clientEvent';
import { AudioManager2 } from '../../framework/audioManager2';
import { PGSPlayInstantManager } from '../../common/PGSPlayInstantManager';
import { FBInstantManager } from '../../common/FBInstantManager';
import { LogEventManager } from '../../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TournamentResultPopup
 * DateTime = Mon Nov 04 2024 15:04:26 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = TournamentResultPopup.ts
 * FileBasenameNoExtension = TournamentResultPopup
 * URL = db://assets/scripts/game/tournaments/TournamentResultPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('TournamentResultPopup')
export class TournamentResultPopup extends BasePopup {

    @property(Widget)
    groupAllTopWidget: Widget;
    
    @property(Label)
    txtTitle: Label = null;

    @property(ItemLeaderBoard)
    myItemLeaderBoard: ItemLeaderBoard = null;

    @property(Button)
    btnShare:Button;

    @property(UIOpacity)
    nodeShare_Opacity:UIOpacity;

    @property(Button)
    btnReplay:Button;

    @property(UIOpacity)
    nodeReplay_Opacity:UIOpacity;

    @property(sp.Skeleton)
    character:sp.Skeleton;

    @property(Node)
    titleGroup:Node;

    @property(UIOpacity)
    titleGroup_Opacity:UIOpacity;

    tweenTitleGroup:Tween<{}> = null;
    tweenTitleGroup_Opacity:Tween<{}> = null;


    onEnable(): void {
        super.onEnable();
        this.btnShare.node.on(Constants.CLICK, this.touchShare, this);
        this.btnReplay.node.on(Constants.CLICK, this.touchReplay, this);
    }

    onDisable(): void {
        super.onDisable();
        this.btnShare.node.off(Constants.CLICK, this.touchShare, this);
        this.btnReplay.node.off(Constants.CLICK, this.touchReplay, this);
    }

    start(): void {
        this.initAllTop();
    }
    
    initAllTop(): void {
        if(localConfig.instance.isMobile){
            let posY = (localConfig.instance.scaleBG - 1) * localConfig.instance.DEFAULT_H / 2;
            if(posY > 0){
                this.groupAllTopWidget.top = -posY;
            }else{
                this.groupAllTopWidget.top = 0;
            }
        }else{
            this.groupAllTopWidget.top = 0;
        }
    }

    myItemRankInfo:ItemRankInfo = null;

    myScore:number = 0;
    showTournamentResultPopup(indexRank:number,score:number){ 
        localConfig.instance.setDailyQuest_CompletedTournament();
        AudioManager2.instance.playSound_WIN2();
        this.myScore = score;
        this.txtTitle.string = `${localConfig.instance.currLeaderboardDataInfo.name}`;
        let itemRankInfo:ItemRankInfo = new ItemRankInfo();
        if(indexRank == 0){
            itemRankInfo.indexRank = 1;
            itemRankInfo.isMyRank = true;
        }else{
            itemRankInfo.indexRank = indexRank;
            itemRankInfo.isMyRank = true;
        }
       
        itemRankInfo.userScore = score;
        
        this.myItemRankInfo = itemRankInfo;
        this.btnClose.node.active = false;
        this.myItemLeaderBoard.node.active = false;
        this.btnShare.node.active = false;
        this.btnReplay.node.active = false;
        this.character.node.active = false;
        this.titleGroup_Opacity.opacity = 0;
        this.showPopup();
        let leaderBoardMyScore:number = localConfig.instance.getLeaderBoardMyScore_byTournamentID(localConfig.instance.currLeaderboardDataInfo.tournamentId);
        if(score > leaderBoardMyScore ){
            localConfig.instance.setLeaderBoardMyScore_byTournamentID(localConfig.instance.currLeaderboardDataInfo.tournamentId,score);
            PGSPlayInstantManager.instance.UpdatePlayerScore_byLeaderboardID(localConfig.instance.currLeaderboardDataInfo._id,score);
        }
       
        FBInstantManager.instance.ShareTournament(score,(err,success)=>{
                
        });
    }

    showPoup_ShowView(): void {
        // clientEvent.dispatchEvent(Constants.SHOW_EFX_FIREWORK);
        if(this.tweenTitleGroup){
            this.tweenTitleGroup.stop();
        }
        if(this.tweenTitleGroup_Opacity){
            this.tweenTitleGroup_Opacity.stop();
        }


        if(this.tweenOpacityBG){    
            this.tweenOpacityBG.stop();
        }
        this.tweenOpacityBG = tween(this.bgOpacity).to(0.3, { opacity: 255 }, { easing: 'quadOut' ,onComplete:()=>{
            this.showPoup_ShowView_Finished();
        }}).start();
    }

    showPoup_ShowView_Finished(): void {
        super.showPoup_ShowView_Finished();
        this.character.node.active = true;
        let strAnimation_Appear:string = localConfig.instance.getStrAnimationAppear_byID(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.SKIN));
        this.character.setAnimation(0,strAnimation_Appear,false);

        this.scheduleOnce(()=>{
            this.setCharacter_Appear_Finished();
        },0.7);
    }

    setCharacter_Appear_Finished(){
        this.titleGroup.setScale(new Vec3(1.5, 1.5, 1.5));
        this.titleGroup_Opacity.opacity = 150;
        this.tweenTitleGroup = tween(this.titleGroup).to(0.4, { scale: new Vec3(1, 1, 1)},{ easing: 'backOut' ,onComplete:()=>{
            
        }}).start();
        this.tweenTitleGroup_Opacity = tween(this.titleGroup_Opacity).to(0.3, { opacity: 255 }, { easing: 'quadOut' }).start();

        let strAnimation_Dance:string = localConfig.instance.getStrAnimationDance_byID(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.SKIN));
        this.character.setAnimation(0,strAnimation_Dance,true);
        this.myItemLeaderBoard.node.active = true;
        this.myItemLeaderBoard.init(this.myItemRankInfo,0.1);
        
        this.scheduleOnce(()=>{
            this.showButton_Step1();
        },0.2);

        PGSPlayInstantManager.instance.GetTournament_TopPlayers_byLeaderboardID(localConfig.instance.currLeaderboardDataInfo._id,localConfig.instance.currLeaderboardDataInfo.tournamentId);

        
    }

    showButton_Step1(): void {
        this.btnShare.node.active = true;
        this.nodeShare_Opacity.opacity = 150;
        this.btnShare.node.setScale(new Vec3(0.5, 0.5, 0.5));
        tween(this.btnShare.node).to(0.3, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' }).start();
        tween(this.nodeShare_Opacity).to(0.3, { opacity: 255 }, { easing: 'quadOut' }).start();


        this.scheduleOnce(()=>{
            this.showButton_Step2();
        },0.2);
    }

    showButton_Step2(): void {
        this.btnClose.node.active = true;
        this.btnReplay.node.active = true;
        this.btnReplay.node.setScale(new Vec3(0.5, 0.5, 0.5));
        this.nodeReplay_Opacity.opacity = 150;
        tween(this.btnReplay.node).to(0.3, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' }).start();
        tween(this.nodeReplay_Opacity).to(0.3, { opacity: 255 }, { easing: 'quadOut' }).start();
    }


    touchShare(){
        LogEventManager.instance.logButtonClick("share","tournamentresultpopup");
        clientEvent.dispatchEvent(Constants.SHOW_SHARE_TOURNAMENT_POPUP,localConfig.instance.currLeaderboardDataInfo.name,this.myScore,(err,success)=>{
            
        });
    }

    touchReplay(){
        LogEventManager.instance.logButtonClick("replay","tournamentresultpopup");
        this.hidePopup();
        clientEvent.dispatchEvent(Constants.TOURNAMENT_RESULT_TOUCH_REPLAY);
    }

    touchClose(): void {
        LogEventManager.instance.logButtonClick("close","tournamentresultpopup");
        super.touchClose();
        clientEvent.dispatchEvent(Constants.TOURNAMENT_RESULT_TOUCH_HOME);
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
