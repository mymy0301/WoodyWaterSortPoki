
import { _decorator, Component, instantiate, Node, ParticleSystem, Vec3 } from 'cc';
import { WinPopup } from './game/WinPopup';
import { LoadingPopup } from './LoadingPopup';
import { resourceUtil } from './framework/resourceUtil';
import { clientEvent } from './framework/clientEvent';
import { BOOSTER_TYPE, BOX_TYPE, Constants, DAILYTASK_TYPE, GAME_MODE, PLAY_TYPE, SHOP_PACK_TYPE, THEME_TYPE, TICKET_TYPE } from './framework/constants';
import { LoadingStartPopup } from './game/LoadingStartPopup';
import { SummerPackPopup } from './game/SummerPackPopup';
import { RemoveAdPackPopup } from './game/RemoveAdPackPopup';
import { MenuManager } from './game/MenuManager';
import { localConfig } from './localConfig';
import { SettingPopup } from './game/SettingPopup';
import { ShopPopup } from './game/ShopPopup';
import { DailyChallengePopup } from './game/DailyChallengePopup';
import { InfoDay } from './common/InfoDay';
import { BoxRewardReceivePopup } from './game/BoxRewardReceivePopup';
import { GroupRewardDataInfo } from './game/info/ShopDataInfo';
import { DailyTaskPopup } from './game/DailyTaskPopup';
import { RewardReceivePopup } from './game/RewardReceivePopup';
import { AudioManager2 } from './framework/audioManager2';
import { LevelChestsPopup } from './game/LevelChestsPopup';
import { RewardChestsPopup } from './game/RewardChestsPopup';
import { ThemeUnlockPopup } from './game/ThemeUnlockPopup';
import { TournamentPopup } from './game/tournaments/TournamentPopup';
import { LeaderboardDataInfo } from './common/LeaderboardDataInfo';
import { lodash } from './framework/lodash';
import { TournamentQuitPopup } from './game/tournaments/TournamentQuitPopup';
import { TournamentResultPopup } from './game/tournaments/TournamentResultPopup';
import { TournamentRevivePopup } from './game/tournaments/TournamentRevivePopup';
import { ShopItemPopup } from './game/ShopItemPopup';
import { TubeRaceJoinPopup } from './game/race/TubeRaceJoinPopup';
import { TubeRacePopup } from './game/race/TubeRacePopup';
import { TubeRaceWinPopup } from './game/race/TubeRaceWinPopup';
import { TubeRaceLosePopup } from './game/race/TubeRaceLosePopup';
import { MassterPassPopup } from './game/masterpass/MassterPassPopup';
import { MasterPassDetailPopup } from './game/masterpass/MasterPassDetailPopup';
import { MasterPassInfoPopup } from './game/masterpass/MasterPassInfoPopup';
import { SpinPopup } from './game/spin/SpinPopup';
import { FBInstantCommon_Callback222, FBInstantManager } from './common/FBInstantManager';
import { ShareInfoPopup } from './game/share/ShareInfoPopup';
import { ShareContextPopup } from './game/share/ShareContextPopup';
import { VIPPopup } from './game/vip/VIPPopup';
import { WinWithFriendPopup } from './game/withFriends/WinWithFriendPopup';
import { WithFriendDataInfo } from './game/withFriends/WithFriendDataInfo';
import { ShareContextWithFriendPopup } from './game/withFriends/ShareContextWithFriendPopup';
import { FriendsPopup } from './game/withFriends/FriendsPopup';
import { PlayMagicManager } from './game/PlayMagicManager';
import { QuitConfirmPopup } from './game/QuitConfirmPopup';
import { LevelFailedPopup } from './game/LevelFailedPopup';
import { MoreLivesPopup } from './game/MoreLivesPopup';
import { TutCurtainPopup } from './game/TutCurtainPopup';
import { TutPlasterPopup } from './game/TutPlasterPopup';
import { TutClayPopup } from './game/TutClayPopup';
import { LogEventManager } from './common/LogEventManager';
import { WinTournamentPageHostPopup } from './game/WinTournamentPageHostPopup';
import { BlackFridayPopup } from './game/blackfriday/BlackFridayPopup';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PlaySceneManager
 * DateTime = Wed Sep 11 2024 15:38:37 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = PlaySceneManager.ts
 * FileBasenameNoExtension = PlaySceneManager
 * URL = db://assets/scripts/PlaySceneManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('PlaySceneManager')
export class PlaySceneManager extends Component {

    @property(MenuManager)
    menuManager: MenuManager = null;

    @property(PlayMagicManager)
    playManager: PlayMagicManager = null;

    @property(Node)
    nodeEfx:Node;
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    protected onEnable(): void {
        clientEvent.on(Constants.SHOW_LOADING_POPUP,this.showLoadingPopup,this);
        clientEvent.on(Constants.HIDE_LOADING_POPUP,this.hideLoadingPopup,this);
        clientEvent.on(Constants.SHOW_LOADING_AD_POPUP,this.showLoadingAdPopup,this);
        clientEvent.on(Constants.HIDE_LOADING_AD_POPUP,this.hideLoadingAdPopup,this);
        clientEvent.on(Constants.SHOW_WIN_POPUP,this.showWinPopup,this);
        clientEvent.on(Constants.SHOW_WIN_DAILYCHALLENGE_POPUP,this.showWinPopup_DailyChallenge,this);
        clientEvent.on(Constants.SHOW_LOADING_START_POPUP,this.showLoadingStartPopup,this);
        clientEvent.on(Constants.SHOW_LOADING_START_NOW_POPUP,this.showLoadingStartNowPopup,this);
        clientEvent.on(Constants.HIDE_LOADING_START_POPUP,this.hideLoadingStartPopup,this);
        clientEvent.on(Constants.HIDE_LOADING_START_NOW_POPUP,this.hideLoadingStartNowPopup,this);


        clientEvent.on(Constants.SHOW_SUMMER_PACK_POPUP,this.showSummerPackPopup,this);
        clientEvent.on(Constants.TOUCH_LEVEL,this.touchLevel,this);
        clientEvent.on(Constants.DAILYCHALLENGE_PLAY_LEVEL,this.touchLevelChallenge,this);

        clientEvent.on(Constants.SHOW_SETTING_POPUP,this.showSettingPopup,this);
        clientEvent.on(Constants.SHOW_PAUSE_POPUP,this.showPausePopup,this);
        clientEvent.on(Constants.SHOW_SHOP_POPUP,this.showShopPopup,this);
        clientEvent.on(Constants.SHOW_DAILY_CHALLENGE_POPUP,this.showDailyChallengePopup,this);
        clientEvent.on(Constants.DAILYCHALLENGE_LEVEL_FINISHED,this.setDailyChallengeFinished,this);
        clientEvent.on(Constants.SHOW_BOXREWARD_RECEIVE_POPUP,this.showBoxRewardReceivePopup,this);
        clientEvent.on(Constants.SHOW_REMOVEAD_POPUP,this.showRemoveAdPackPopup,this);
        clientEvent.on(Constants.SHOW_DAILYTASK_POPUP,this.showDailyTaskPopup,this);
        clientEvent.on(Constants.SHOW_REWARDRECEIVE_POPUP,this.showRewardReceivePopup,this);
        clientEvent.on(Constants.SHOW_EFX_FIREWORK,this.showEfxFireWorks,this);
        // clientEvent.on(Constants.TOUCH_NEXT_LEVEL,this.setNextLevel,this);
        clientEvent.on(Constants.PAUSE_TOUCH_HOME,this.setPauseTouchHome,this);
        clientEvent.on(Constants.SHOW_LEVELCHEST_POPUP,this.showLevelChestsPopup,this);
        clientEvent.on(Constants.LEVEL_CHEST_TOUCH_CONTINUE,this.setLevelChestsPopup_TouchContinue,this);
        clientEvent.on(Constants.SHOW_CHEST_REWARD_POPUP,this.showRewardChestsPopup,this);
        clientEvent.on(Constants.SHOW_THEME_REWARD_POPUP,this.showThemeUnlockedPopup,this);

        clientEvent.on(Constants.WINPOPUP_TOUCH_HOME,this.setWinPopupTouchHome,this);
        clientEvent.on(Constants.SHOW_TOURNAMENT_POPUP,this.showTournamentPopup,this);
        clientEvent.on(Constants.TOURNAMENT_TOUCH_PLAY,this.setPlayTournament,this);
        clientEvent.on(Constants.SHOW_TOURNAMENTQUIT_POPUP,this.showTournamentQuitPopup,this);
        clientEvent.on(Constants.SHOW_TOURNAMENT_RESULT_POPUP,this.showTournamentResultPopup,this);
        clientEvent.on(Constants.SHOW_TOURNAMENT_REVIVE_POPUP,this.showTournamentRevivePopup,this);

        clientEvent.on(Constants.TOURNAMENT_RESULT_TOUCH_HOME,this.setTournamentResultTouchHome,this);

        clientEvent.on(Constants.SHOW_SHOP_ITEM_POPUP,this.showShopItemPopup,this);
        clientEvent.on(Constants.SHOP_POPUP_CLOSE,this.setShopPopupClose,this);
        clientEvent.on(Constants.SHOW_TUBERACE_JOIN_POPUP,this.showTubeRaceJoinPopup,this);
        clientEvent.on(Constants.SHOW_TUBERACE_POPUP,this.showTubeRacePopup,this);
        clientEvent.on(Constants.SHOW_TUBERACE_WIN_POPUP,this.showTubeRaceWinPopup,this);
        clientEvent.on(Constants.SHOW_TUBERACE_LOSE_POPUP,this.showTubeRaceLosePopup,this);
        clientEvent.on(Constants.SHOW_MASSTERPASS_POPUP,this.showMassterPassPopup,this);
        clientEvent.on(Constants.SHOW_MASSTERPASS_ACTIVATE_POPUP,this.showMassterPassActivatePopup,this);
        clientEvent.on(Constants.SHOW_MASSTERPASS_INFO_POPUP,this.showMassterPassInfoPopup,this);

        clientEvent.on(Constants.SHOW_SPIN_POPUP,this.showSpinPopup,this);
        clientEvent.on(Constants.SHOW_SHARECONTEXT_POPUP,this.showShareContextPopup,this);
        clientEvent.on(Constants.SHOW_SHARE_INFOLEVEL_POPUP,this.showShareInfoLevelPopup,this);
        clientEvent.on(Constants.SHOW_SHARE_INFOSCORE_POPUP,this.showShareInfoScorePopup,this);
        clientEvent.on(Constants.SHOW_SHARE_TOURNAMENT_POPUP,this.showShareTournamentScorePopup,this);
        clientEvent.on(Constants.SHOW_INVITE_POPUP,this.showInvitePopup,this);

        clientEvent.on(Constants.SHOW_VIP_POPUP,this.showVIPPopup,this);

        clientEvent.on(Constants.SHOW_WIN_WITHFRIEND_POPUP,this.showWinWithFriendPopup,this);
        clientEvent.on(Constants.SHOW_SHARE_WITHFRIEND_POPUP,this.showShareWithFriendPopup,this);
        clientEvent.on(Constants.SHOW_UPDATECONTEXT_WITHFRIEND_POPUP,this.showShareContextWithFriendPopup,this);
        clientEvent.on(Constants.SHOW_FRIENDS_POPUP,this.showFriendsPopup,this);
        clientEvent.on(Constants.WITHFRIEND_PLAY_START,this.setWithFriendPlayStart,this);

        clientEvent.on(Constants.WINPOPUP_WITHFRIEND_TOUCH_HOME,this.setWinPopupWithFriendTouchHome,this);
        clientEvent.on(Constants.WINPOPUP_DAILYCHALLENGE_TOUCH_HOME,this.setWinPopupDailyChallengeTouchHome,this);


        clientEvent.on(Constants.SHOW_QUITCONFIRM_POPUP,this.showQuitConfirmPopup,this);
        clientEvent.on(Constants.SHOW_LEVELFAILED_POPUP,this.showLevelFailedPopup,this);

        clientEvent.on(Constants.BACK_TO_HOME,this.setBackToHome,this);
        clientEvent.on(Constants.SHOW_MORELIVES_POPUP,this.showMoreLivesPopup,this);

        clientEvent.on(Constants.SHOW_TUT_CURTAIN_POPUP,this.showTutCurtainPopup,this);
        clientEvent.on(Constants.SHOW_TUT_CLAY_POPUP,this.showTutClayPopup,this);
        clientEvent.on(Constants.SHOW_TUT_PLASTER_POPUP,this.showTutPlasterPopup,this);

        // clientEvent.on(Constants.LEVEL_CHEST_NEXTLEVEL,this.setLevelChestNextLevel,this);

        clientEvent.on(Constants.DAILYCHALLENGE_NOMOVES_TOUCHCLOSE,this.setDailyChallengeNoMovesTouchClose,this);
        clientEvent.on(Constants.WITHFRIEND_NOMOVES_TOUCH_CLOSE,this.setWithFriendNoMovesTouchClose,this);

        clientEvent.on(Constants.SHOW_WIN_TOURNAMENT_PAGEHOST_POPUP,this.showWinTournamentPageHostPopup,this);
        clientEvent.on(Constants.TOURNAMENT_PAGEHOST_TOUCH_HOME,this.setTournamentPageHostTouchHome,this);

        clientEvent.on(Constants.SHOW_BLACKRIDAY_COIN_POPUP,this.showBlackFridayPopup,this);

        this.nodeEfx.on(Constants.CLICK,this.touchEfx,this);
    }

    protected onDisable(): void {
        clientEvent.off(Constants.SHOW_LOADING_POPUP,this.showLoadingPopup,this);
        clientEvent.off(Constants.HIDE_LOADING_POPUP,this.hideLoadingPopup,this);
        clientEvent.off(Constants.SHOW_LOADING_AD_POPUP,this.showLoadingAdPopup,this);
        clientEvent.off(Constants.HIDE_LOADING_AD_POPUP,this.hideLoadingAdPopup,this);
        clientEvent.off(Constants.SHOW_WIN_POPUP,this.showWinPopup,this);
        clientEvent.off(Constants.SHOW_WIN_DAILYCHALLENGE_POPUP,this.showWinPopup_DailyChallenge,this);
        clientEvent.off(Constants.SHOW_LOADING_START_POPUP,this.showLoadingStartPopup,this);
        clientEvent.off(Constants.SHOW_LOADING_START_NOW_POPUP,this.showLoadingStartNowPopup,this);
        clientEvent.off(Constants.HIDE_LOADING_START_POPUP,this.hideLoadingStartPopup,this);
        clientEvent.off(Constants.HIDE_LOADING_START_NOW_POPUP,this.hideLoadingStartNowPopup,this);

        clientEvent.off(Constants.SHOW_SUMMER_PACK_POPUP,this.showSummerPackPopup,this);
        clientEvent.off(Constants.TOUCH_LEVEL,this.touchLevel,this);
        clientEvent.off(Constants.DAILYCHALLENGE_PLAY_LEVEL,this.touchLevelChallenge,this);

        clientEvent.off(Constants.SHOW_SETTING_POPUP,this.showSettingPopup,this);
        clientEvent.off(Constants.SHOW_PAUSE_POPUP,this.showPausePopup,this);
        clientEvent.off(Constants.SHOW_SHOP_POPUP,this.showShopPopup,this);
        clientEvent.off(Constants.SHOW_DAILY_CHALLENGE_POPUP,this.showDailyChallengePopup,this);
        clientEvent.off(Constants.DAILYCHALLENGE_LEVEL_FINISHED,this.setDailyChallengeFinished,this);
        clientEvent.off(Constants.SHOW_BOXREWARD_RECEIVE_POPUP,this.showBoxRewardReceivePopup,this);
        clientEvent.off(Constants.SHOW_REMOVEAD_POPUP,this.showRemoveAdPackPopup,this);
        clientEvent.off(Constants.SHOW_DAILYTASK_POPUP,this.showDailyTaskPopup,this);
        clientEvent.off(Constants.SHOW_REWARDRECEIVE_POPUP,this.showRewardReceivePopup,this);
        clientEvent.off(Constants.SHOW_EFX_FIREWORK,this.showEfxFireWorks,this);

        // clientEvent.off(Constants.TOUCH_NEXT_LEVEL,this.setNextLevel,this);
        clientEvent.off(Constants.PAUSE_TOUCH_HOME,this.setPauseTouchHome,this);
        clientEvent.off(Constants.SHOW_LEVELCHEST_POPUP,this.showLevelChestsPopup,this);
        clientEvent.off(Constants.LEVEL_CHEST_TOUCH_CONTINUE,this.setLevelChestsPopup_TouchContinue,this);
        clientEvent.off(Constants.SHOW_CHEST_REWARD_POPUP,this.showRewardChestsPopup,this);
        clientEvent.off(Constants.SHOW_THEME_REWARD_POPUP,this.showThemeUnlockedPopup,this);

        clientEvent.off(Constants.WINPOPUP_TOUCH_HOME,this.setWinPopupTouchHome,this);
        clientEvent.off(Constants.SHOW_TOURNAMENT_POPUP,this.showTournamentPopup,this);
        clientEvent.off(Constants.TOURNAMENT_TOUCH_PLAY,this.setPlayTournament,this);
        clientEvent.off(Constants.SHOW_TOURNAMENTQUIT_POPUP,this.showTournamentQuitPopup,this);
        clientEvent.off(Constants.SHOW_TOURNAMENT_RESULT_POPUP,this.showTournamentResultPopup,this);
        clientEvent.off(Constants.SHOW_TOURNAMENT_REVIVE_POPUP,this.showTournamentRevivePopup,this);

        clientEvent.off(Constants.TOURNAMENT_RESULT_TOUCH_HOME,this.setTournamentResultTouchHome,this);

        clientEvent.off(Constants.SHOW_SHOP_ITEM_POPUP,this.showShopItemPopup,this);
        clientEvent.off(Constants.SHOP_POPUP_CLOSE,this.setShopPopupClose,this);
        clientEvent.off(Constants.SHOW_TUBERACE_JOIN_POPUP,this.showTubeRaceJoinPopup,this);
        clientEvent.off(Constants.SHOW_TUBERACE_POPUP,this.showTubeRacePopup,this);
        clientEvent.off(Constants.SHOW_TUBERACE_WIN_POPUP,this.showTubeRaceWinPopup,this);
        clientEvent.off(Constants.SHOW_TUBERACE_LOSE_POPUP,this.showTubeRaceLosePopup,this);
        clientEvent.off(Constants.SHOW_MASSTERPASS_POPUP,this.showMassterPassPopup,this);
        clientEvent.off(Constants.SHOW_MASSTERPASS_ACTIVATE_POPUP,this.showMassterPassActivatePopup,this);
        clientEvent.off(Constants.SHOW_MASSTERPASS_INFO_POPUP,this.showMassterPassInfoPopup,this);

        clientEvent.off(Constants.SHOW_SPIN_POPUP,this.showSpinPopup,this);

        clientEvent.off(Constants.SHOW_SHARECONTEXT_POPUP,this.showShareContextPopup,this);
        clientEvent.off(Constants.SHOW_SHARE_INFOLEVEL_POPUP,this.showShareInfoLevelPopup,this);
        clientEvent.off(Constants.SHOW_SHARE_INFOSCORE_POPUP,this.showShareInfoScorePopup,this);
        clientEvent.off(Constants.SHOW_SHARE_TOURNAMENT_POPUP,this.showShareTournamentScorePopup,this);
        clientEvent.off(Constants.SHOW_INVITE_POPUP,this.showInvitePopup,this);

        clientEvent.off(Constants.SHOW_VIP_POPUP,this.showVIPPopup,this);

        clientEvent.off(Constants.SHOW_WIN_WITHFRIEND_POPUP,this.showWinWithFriendPopup,this);
        clientEvent.off(Constants.SHOW_SHARE_WITHFRIEND_POPUP,this.showShareWithFriendPopup,this);
        clientEvent.off(Constants.SHOW_UPDATECONTEXT_WITHFRIEND_POPUP,this.showShareContextWithFriendPopup,this);
        clientEvent.off(Constants.SHOW_FRIENDS_POPUP,this.showFriendsPopup,this);

        clientEvent.off(Constants.WITHFRIEND_PLAY_START,this.setWithFriendPlayStart,this);

        clientEvent.off(Constants.WINPOPUP_WITHFRIEND_TOUCH_HOME,this.setWinPopupWithFriendTouchHome,this);
        clientEvent.off(Constants.WINPOPUP_DAILYCHALLENGE_TOUCH_HOME,this.setWinPopupDailyChallengeTouchHome,this);

        clientEvent.off(Constants.SHOW_QUITCONFIRM_POPUP,this.showQuitConfirmPopup,this);
        clientEvent.off(Constants.SHOW_LEVELFAILED_POPUP,this.showLevelFailedPopup,this);

        clientEvent.off(Constants.BACK_TO_HOME,this.setBackToHome,this);

        clientEvent.off(Constants.SHOW_MORELIVES_POPUP,this.showMoreLivesPopup,this);

        clientEvent.off(Constants.SHOW_TUT_CURTAIN_POPUP,this.showTutCurtainPopup,this);
        clientEvent.off(Constants.SHOW_TUT_CLAY_POPUP,this.showTutClayPopup,this);
        clientEvent.off(Constants.SHOW_TUT_PLASTER_POPUP,this.showTutPlasterPopup,this);

        clientEvent.off(Constants.DAILYCHALLENGE_NOMOVES_TOUCHCLOSE,this.setDailyChallengeNoMovesTouchClose,this);
        clientEvent.off(Constants.WITHFRIEND_NOMOVES_TOUCH_CLOSE,this.setWithFriendNoMovesTouchClose,this);

        clientEvent.off(Constants.SHOW_WIN_TOURNAMENT_PAGEHOST_POPUP,this.showWinTournamentPageHostPopup,this);
        clientEvent.off(Constants.TOURNAMENT_PAGEHOST_TOUCH_HOME,this.setTournamentPageHostTouchHome,this);

        clientEvent.off(Constants.SHOW_BLACKRIDAY_COIN_POPUP,this.showBlackFridayPopup,this);

        this.nodeEfx.off(Constants.CLICK,this.touchEfx,this);
    }

    start () {
        LogEventManager.instance.logSplashToHome(localConfig.instance.getCurrTime() - localConfig.instance.splashStartTime);
        LogEventManager.instance.logInitUserPropertys(localConfig.instance.currLevelUnlock,localConfig.instance.getIAPUser(),
                                                        localConfig.instance.iapCount,localConfig.instance.winStreak,
                                                        localConfig.instance.loseStreak,localConfig.instance.currCoin,
                                                        localConfig.instance.getBoosterCount(BOOSTER_TYPE.UNDO),
                                                        localConfig.instance.getBoosterCount(BOOSTER_TYPE.SUGGEST),
                                                        localConfig.instance.getBoosterCount(BOOSTER_TYPE.ADDCOL));
        // [3]
        if(localConfig.instance.isStartTournament){
            this.menuManager.node.active = false;
            this.playManager.node.active = false;
            if(localConfig.instance.currTournamentPageHostDataInfo != null){
                this.setPlayTournamentPageHost();
            }else{
                let leaderboardDataInfo:LeaderboardDataInfo = null;
                for(let i=0; i< localConfig.instance.arrTournament_LeaderBoardDataInfos.length;i++){
                    if(localConfig.instance.arrTournament_LeaderBoardDataInfos[i].tournamentId == FBInstantManager.instance.tournamentID 
                        && localConfig.instance.arrTournament_LeaderBoardDataInfos[i].contextId == FBInstantManager.instance.contextID){
                        leaderboardDataInfo = localConfig.instance.arrTournament_LeaderBoardDataInfos[i];
                    }
                }
                // console.log("START",leaderboardDataInfo);
                if(leaderboardDataInfo == null){
                    // console.log(localConfig.instance.currSessionLeaderboardDataInfo);
                    if(localConfig.instance.currSessionLeaderboardDataInfo != null){
                        this.setPlayTournament(localConfig.instance.currSessionLeaderboardDataInfo);
                    }else{
                        this.menuManager.node.active = true;
                        this.menuManager.showTabTournament();
                    }
                }else{
                    this.setPlayTournament(leaderboardDataInfo);
                }
            }
            
        }else{
            if(localConfig.instance.currWithFriendDataInfo != null){
                this.menuManager.node.active = false;
                this.playManager.node.active = true;
                this.updateContextWithFriend();
                this.playManager.preloadLevelwithFriend();
                localConfig.instance.playType = PLAY_TYPE.HOME;
                LogEventManager.instance.logLevelStart(localConfig.instance.currWithFriendDataInfo.levelIndex,localConfig.instance.getLevelLoopByFromStr(localConfig.instance.currLevelConfigInfo.levelOrder),PLAY_TYPE[localConfig.instance.playType].toLowerCase().toString(),1,0,"withfriend");
            }else{
                if(localConfig.instance.currLevelUnlock == 1){
                    clientEvent.dispatchEvent(Constants.SHOW_LOADING_START_NOW_POPUP);
                    this.menuManager.node.active = false;
                    this.playManager.node.active = true;
                    localConfig.instance.currLevel = 1;
                    this.playManager.preloadLevel(localConfig.instance.currLevel);
                    localConfig.instance.playType = PLAY_TYPE.HOME;
                    LogEventManager.instance.logLevelStart(localConfig.instance.currLevel,localConfig.instance.getLevelLoopByFromStr(localConfig.instance.currLevelConfigInfo.levelOrder),PLAY_TYPE[localConfig.instance.playType].toLowerCase().toString(),localConfig.instance.loseStreak + 1,localConfig.instance.loseStreak,"normal");
                }else if(localConfig.instance.currLevelUnlock <= localConfig.instance.LEVEL_SHOW_HOME){
                    clientEvent.dispatchEvent(Constants.SHOW_LOADING_START_NOW_POPUP);
                    this.menuManager.node.active = false;
                    this.playManager.node.active = true;
                    localConfig.instance.currLevel = localConfig.instance.currLevelUnlock;
                    this.playManager.preloadLevel(localConfig.instance.currLevel);
                    localConfig.instance.playType = PLAY_TYPE.HOME;
                    LogEventManager.instance.logLevelStart(localConfig.instance.currLevel,localConfig.instance.getLevelLoopByFromStr(localConfig.instance.currLevelConfigInfo.levelOrder),PLAY_TYPE[localConfig.instance.playType].toLowerCase().toString(),localConfig.instance.loseStreak + 1,localConfig.instance.loseStreak,"normal");
                }else{
                    this.menuManager.node.active = true;
                    this.playManager.node.active = false;
                    this.menuManager.showTabHome();
                    this.menuManager.homeGroup.showGroupFirstTime();
                }
            }
        }
       
        
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    updateContextWithFriend(){
        clientEvent.dispatchEvent(Constants.SHOW_UPDATECONTEXT_WITHFRIEND_POPUP,(errr,success)=>{});
    }

    touchLevel() {
        clientEvent.dispatchEvent(Constants.SHOW_LOADING_START_NOW_POPUP);
        this.menuManager.node.active = false;
        this.playManager.node.active = true;
        localConfig.instance.currLevel = localConfig.instance.currLevelUnlock;
        this.playManager.preloadLevel(localConfig.instance.currLevel);

        localConfig.instance.playType = PLAY_TYPE.HOME;
        LogEventManager.instance.logLevelStart(localConfig.instance.currLevel,localConfig.instance.getLevelLoopByFromStr(localConfig.instance.currLevelConfigInfo.levelOrder),"home",localConfig.instance.loseStreak + 1,localConfig.instance.loseStreak,"normal");
    }

    touchLevelChallenge(infoDayChallenge:InfoDay){
        // console.log("setDailyChallenge_PlayLevel",infoDayChallenge);
        localConfig.instance.currInfoDaySelect = infoDayChallenge;
        let indexDay:number = localConfig.instance.getCountDay_From_Start(infoDayChallenge) + 1;
        // console.log("indexDay",indexDay);

        clientEvent.dispatchEvent(Constants.SHOW_LOADING_START_NOW_POPUP);
        this.menuManager.node.active = false;
        this.playManager.node.active = true;
        this.playManager.preloadLevelChallenge(indexDay);

        localConfig.instance.playType = PLAY_TYPE.HOME;
        LogEventManager.instance.logLevelStart(indexDay,localConfig.instance.getLevelLoopByFromStr(localConfig.instance.currLevelConfigInfo.levelOrder),PLAY_TYPE[localConfig.instance.playType].toLowerCase().toString(),1,0,"dailychallenge");
    }

    setPlayTournament(leaderboardDataInfo:LeaderboardDataInfo){
        localConfig.instance.currLeaderboardDataInfo = leaderboardDataInfo;
        // console.log("setPlayTournament",leaderboardDataInfo);
        localConfig.instance.currIndexLevelTournament = 1;
        if(localConfig.instance.currLevelUnlock > 1){
            localConfig.instance.currLevelStartTournament = lodash.random(5,22);
        }else{
            localConfig.instance.currLevelStartTournament = 0;
        }
        clientEvent.dispatchEvent(Constants.SHOW_LOADING_START_NOW_POPUP);
        this.menuManager.node.active = false;
        this.playManager.node.active = true;
        this.playManager.preloadLevelTournament();

        localConfig.instance.playType = PLAY_TYPE.HOME;
        LogEventManager.instance.logLevelStart(localConfig.instance.currIndexLevelTournament,localConfig.instance.getLevelLoopByFromStr(localConfig.instance.currLevelConfigInfo.levelOrder),PLAY_TYPE[localConfig.instance.playType].toLowerCase().toString(),1,0,"tournament");
    }

    setPlayTournamentPageHost(){
        clientEvent.dispatchEvent(Constants.SHOW_LOADING_START_NOW_POPUP);
        this.menuManager.node.active = false;
        this.playManager.node.active = true;
        this.playManager.preloadLevelTournamentPageHost();
    }

    setWithFriendPlayStart(){
        clientEvent.dispatchEvent(Constants.SHOW_LOADING_START_NOW_POPUP);
        this.menuManager.node.active = false;
        this.playManager.node.active = true;
        this.playManager.preloadLevelwithFriend();
        localConfig.instance.playType = PLAY_TYPE.HOME;
        LogEventManager.instance.logLevelStart(localConfig.instance.currLevelConfigInfo.levelIndex,localConfig.instance.getLevelLoopByFromStr(localConfig.instance.currLevelConfigInfo.levelOrder),PLAY_TYPE[localConfig.instance.playType].toLowerCase().toString(),1,0,"withfriend");
    }

    // setNextLevel(){
    //     clientEvent.dispatchEvent(Constants.HIDE_LOADING_START_POPUP);
    //     this.menuManager.node.active = true;
    //     this.playManager.node.active = false;
    //     this.menuManager.homeGroup.setNextLevel();
    // }


    //#region LOADING POPUP
    @property(LoadingPopup)
    loadingPopup: LoadingPopup;

    showLoadingPopup() {
        this.loadingPopup.showLoading();
    }

    hideLoadingPopup() {
        this.loadingPopup.hideLoading();
    }
    //#endregion

    //#region LOADING AD POPUP
    @property(LoadingPopup)
    loadingAdPopup: LoadingPopup;

    showLoadingAdPopup() {
        this.loadingAdPopup.showLoading();
    }

    hideLoadingAdPopup() {
        this.loadingAdPopup.hideLoading();
    }
    //#endregion
    

    //#region TOURNAMENT REWARD POPUP
    @property(Node)
    nodeWinPopup: Node;

    winPopup: WinPopup;

    showWinPopup(level:number) {
        let self = this;
        if (this.winPopup) {
            this.winPopup.showWinPopup(level);
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("WinPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeWinPopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.winPopup = uiPopup.getComponent(WinPopup);
                self.winPopup.showWinPopup(level);
                self.hideLoadingPopup();
            });
        }
    }

    showWinPopup_DailyChallenge() {
        let self = this;
        if (this.winPopup) {
            this.winPopup.showWinPopup_DailyChallenge();
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("WinPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeWinPopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.winPopup = uiPopup.getComponent(WinPopup);
                self.winPopup.showWinPopup_DailyChallenge();
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion

    //#region LOADING START POPUP
    @property(LoadingStartPopup)
    loadingStartPopup:LoadingStartPopup;

    showLoadingStartPopup(){
        this.loadingStartPopup.showLoadingStart();
    }

    showLoadingStartNowPopup(){
        this.loadingStartPopup.showLoadingStartNow();
    }

    hideLoadingStartPopup(){
        this.loadingStartPopup.hideLoadingStart();
    }

    hideLoadingStartNowPopup(){
        this.loadingStartPopup.hideLoadingStartNow();
    }
    //#endregion

    //#region SUMMER PACK POPUP
    @property(Node)
    nodeSummerPackPopup: Node;

    summerPackPopup: SummerPackPopup;

    showSummerPackPopup() {
        let self = this;
        if (this.summerPackPopup) {
            this.summerPackPopup.showSummerPack();
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("SummerPackPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeSummerPackPopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.summerPackPopup = uiPopup.getComponent(SummerPackPopup);
                self.summerPackPopup.showSummerPack();
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion

    //#region REMOVE AD POPUP
    @property(Node)
    nodeRemoveAdPackPopup: Node;

    removeAdPackPopup: RemoveAdPackPopup;

    showRemoveAdPackPopup() {
        // console.log("showRemoveAdPackPopup");
        let self = this;
        if (this.removeAdPackPopup) {
            this.removeAdPackPopup.showRemoveAdPackPopup();
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("RemoveAdPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeRemoveAdPackPopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.removeAdPackPopup = uiPopup.getComponent(RemoveAdPackPopup);
                self.removeAdPackPopup.showRemoveAdPackPopup();
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion

    //#region SETTING POPUP
    @property(Node)
    nodeSettingPopup: Node;

    settingPopup: SettingPopup;

    showSettingPopup() {
        let self = this;
        if (this.settingPopup) {
            this.settingPopup.showSettingPopup();
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("SettingPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeSettingPopup);
                uiPopup.setPosition(new Vec3(0, 0, 0)); 

                self.settingPopup = uiPopup.getComponent(SettingPopup);
                self.settingPopup.showSettingPopup();
                self.hideLoadingPopup();
            });
        }
    }

    //#endregion

    //#region PAUSE POPUP
    @property(Node)
    nodePausePopup: Node;   

    pausePopup: SettingPopup;

    showPausePopup() {
        let self = this;
        if (this.pausePopup) {
            this.pausePopup.showPausePopup();
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("PausePopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodePausePopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));     

                self.pausePopup = uiPopup.getComponent(SettingPopup);
                self.pausePopup.showPausePopup();
                self.hideLoadingPopup();        
            });
        }
    }   
    //#endregion

    //#region  SHOP POPUP
    @property(Node)
    nodeShopPopup: Node;    

    shopPopup: ShopPopup;

    showShopPopup() {
        if(this.shopItemPopup && this.shopItemPopup.node.active){
            localConfig.instance.currShopItemPopup_BoosterType = this.shopItemPopup.boosterType;
            this.shopItemPopup.hidePopup();
        }else{
            localConfig.instance.currShopItemPopup_BoosterType = null;
        }
        let self = this;
        if (this.shopPopup) {
            this.shopPopup.showShopPopup();
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("ShopPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeShopPopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.shopPopup = uiPopup.getComponent(ShopPopup);
                self.shopPopup.showShopPopup();
                self.hideLoadingPopup();
            });
        }
    }

    setShopPopupClose(){
        if(localConfig.instance.currShopItemPopup_BoosterType != null){
            this.showShopItemPopup(localConfig.instance.currShopItemPopup_BoosterType);
        }
    }
    //#endregion


    setWinPopupTouchHome(rewardCoin: number){
        this.playManager.resetLevel();
        this.playManager.node.active = false;

        this.menuManager.node.active = true;
        this.menuManager.homeGroup.setNextLevel(rewardCoin);

        this.menuManager.showTabHome();
    }

    setWinPopupDailyChallengeTouchHome(){
        this.playManager.resetLevel();
        this.playManager.node.active = false;

        this.menuManager.node.active = true;

        this.menuManager.showTabHome();
    }

    setDailyChallengeNoMovesTouchClose(){
        this.playManager.resetLevel();
        this.playManager.node.active = false;

        this.menuManager.node.active = true;
        this.menuManager.showTabHome();

        this.showDailyChallengePopup();
    }

    setWinPopupWithFriendTouchHome(){
        this.playManager.resetLevel();
        this.playManager.node.active = false;

        this.menuManager.node.active = true;

        this.menuManager.showTabHome();
    }

    setWithFriendNoMovesTouchClose(){
        this.playManager.resetLevel();
        this.playManager.node.active = false;

        this.menuManager.node.active = true;
        this.menuManager.showTabHome();

        this.showFriendsPopup();
    }

    setPauseTouchHome(){
        // console.log("setPauseTouchHome");
        this.playManager.resetLevel();
        this.playManager.node.active = false;

        this.menuManager.node.active = true;
        this.menuManager.showTabHome();
    }


    setTournamentPageHostTouchHome(){
        this.playManager.resetLevel();
        this.playManager.node.active = false;

        this.menuManager.node.active = true;

        this.menuManager.showTabHome();
    }



    setBackToHome(){
        // console.log("setBackToHome");
        this.playManager.resetLevel();
        this.playManager.node.active = false;

        this.menuManager.node.active = true;
        this.menuManager.showTabHome();
    }

    setLevelChestsPopup_TouchContinue(rewardCoin:number){
        // console.log("setLevelChestsPopup_TouchContinue");
        this.menuManager.node.active = true;
        this.playManager.resetLevel();
        this.playManager.node.active = false;
        this.menuManager.homeGroup.setNextLevel(rewardCoin);
        // clientEvent.dispatchEvent(Constants.SHOW_ADDCOIN,rewardCoin);
    }

    //#region DAILY CHALLENGE POPUP
    @property(Node)
    nodeDailyChallengePopup: Node;  

    dailyChallengePopup: DailyChallengePopup;

    showDailyChallengePopup() {  
        let self = this;
        if (this.dailyChallengePopup) {
            this.dailyChallengePopup.showDailyChallengePopup2();
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("DailyChallengePopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeDailyChallengePopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.dailyChallengePopup = uiPopup.getComponent(DailyChallengePopup);
                self.dailyChallengePopup.showDailyChallengePopup();
                self.hideLoadingPopup();
            });
        }
    }

    setDailyChallengeFinished() {
        this.hideLoadingStartPopup();
        this.menuManager.node.active = true;
        this.playManager.node.active = false;
        this.menuManager.showTabHome();
        this.dailyChallengePopup.setDailyChallengeFinished();
    }
    //#endregion

    //#region BOX REWARD RECEIVE POPUP
    @property(Node)
    nodeBoxRewardReceivePopup: Node;    

    boxRewardReceivePopup: BoxRewardReceivePopup;

    showBoxRewardReceivePopup(_boxType:BOX_TYPE,_groupRewardDataInfo:GroupRewardDataInfo) {
        let self = this;
        if (this.boxRewardReceivePopup) {
            this.boxRewardReceivePopup.showDailyChallenge_BoxRewardReceivePopup(_boxType,_groupRewardDataInfo);
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("BoxRewardReceivePopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeBoxRewardReceivePopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.boxRewardReceivePopup = uiPopup.getComponent(BoxRewardReceivePopup);
                self.boxRewardReceivePopup.showDailyChallenge_BoxRewardReceivePopup(_boxType,_groupRewardDataInfo);
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion


    //#region DAILY TASK POPUP
    @property(Node)
    nodeDailyTaskPopup: Node;

    dailyTaskPopup: DailyTaskPopup;

    showDailyTaskPopup(dailyTaskType:DAILYTASK_TYPE) {
        let self = this;
        if (this.dailyTaskPopup) {
            this.dailyTaskPopup.showDailyTaskPopup(dailyTaskType);
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("DailyTaskPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeDailyTaskPopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.dailyTaskPopup = uiPopup.getComponent(DailyTaskPopup);
                self.dailyTaskPopup.showDailyTaskPopup(dailyTaskType);
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion

    //#region REWARD RECEIVE POPUP
    @property(Node)
    nodeRewardReceivePopup: Node;

    rewardReceivePopup: RewardReceivePopup; 

    showRewardReceivePopup(_title:string,_groupRewardDataInfo:GroupRewardDataInfo) {
        let self = this;
        if (this.rewardReceivePopup) {
            this.rewardReceivePopup.showRewardReceivePopup(_title,_groupRewardDataInfo);
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("RewardReceivePopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeRewardReceivePopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.rewardReceivePopup = uiPopup.getComponent(RewardReceivePopup);
                self.rewardReceivePopup.showRewardReceivePopup(_title,_groupRewardDataInfo);
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion

    @property(ParticleSystem)
    arrEfxFireWorks:ParticleSystem[] = [];

    showEfxFireWorks() {
        AudioManager2.instance.playPhaohoa();
        for (let index = 0; index < this.arrEfxFireWorks.length; index++) {
            this.arrEfxFireWorks[index].clear();
            this.arrEfxFireWorks[index].play();
        }
    }

    //#region LEVEL CHESTS POPUP
    @property(Node)
    nodeLevelChestsPopup: Node;

    levelChestsPopup: LevelChestsPopup;

    showLevelChestsPopup() {
        let self = this;
        if (this.levelChestsPopup) {
            this.levelChestsPopup.showLevelChestsPopup();
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("LevelChestsPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeLevelChestsPopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.levelChestsPopup = uiPopup.getComponent(LevelChestsPopup);
                self.levelChestsPopup.showLevelChestsPopup();
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion

    //#region REWARD CHESTS POPUP
    @property(Node)
    nodeRewardChestsPopup: Node;

    rewardChestsPopup: RewardChestsPopup;

    showRewardChestsPopup(indexChest:number,_groupRewardDataInfo:GroupRewardDataInfo) {
        let self = this;
        if (this.rewardChestsPopup) {
            this.rewardChestsPopup.showRewardChestsPopup(indexChest,_groupRewardDataInfo);
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("RewardChestsPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeRewardChestsPopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.rewardChestsPopup = uiPopup.getComponent(RewardChestsPopup);
                self.rewardChestsPopup.showRewardChestsPopup(indexChest,_groupRewardDataInfo);
                self.hideLoadingPopup();
            });
        }    
    }
    //#endregion

    //#region THEME UNLOCKED POPUP
    @property(Node)
    nodeThemeUnlockedPopup: Node;

    themeUnlockedPopup: ThemeUnlockPopup;

    showThemeUnlockedPopup(themeType:THEME_TYPE,itemID:number) {
        let self = this;
        if (this.themeUnlockedPopup) {
            this.themeUnlockedPopup.showThemeUnlockPopup(themeType,itemID);    
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("ThemeUnlockPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeThemeUnlockedPopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.themeUnlockedPopup = uiPopup.getComponent(ThemeUnlockPopup);
                self.themeUnlockedPopup.showThemeUnlockPopup(themeType,itemID);    
                self.hideLoadingPopup();
            });
        }
    }

    //#endregion

    //#region TOURNAMENT POPUP
    @property(Node)
    nodeTournamentPopup: Node;

    tournamentPopup: TournamentPopup;

    showTournamentPopup(_leaderboardDataInfo:LeaderboardDataInfo) {
        let self = this;
        if (this.tournamentPopup) {
            this.tournamentPopup.showTournamentPopup(_leaderboardDataInfo);
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("TournamentPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeTournamentPopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.tournamentPopup = uiPopup.getComponent(TournamentPopup);
                self.tournamentPopup.showTournamentPopup(_leaderboardDataInfo);
                self.hideLoadingPopup();
            }); 
        }
    }
    //#endregion

    //#region TOURNAMENT QUIT POPUP
    @property(Node)
    nodeTournamentQuitPopup: Node;

    tournamentQuitPopup: TournamentQuitPopup;

    showTournamentQuitPopup() {
        let self = this;
        if (this.tournamentQuitPopup) {
            this.tournamentQuitPopup.showTournamentQuitPopup();
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("TournamentQuitPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeTournamentQuitPopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.tournamentQuitPopup = uiPopup.getComponent(TournamentQuitPopup);
                self.tournamentQuitPopup.showTournamentQuitPopup();
                self.hideLoadingPopup();
            }); 
        }
    }
    //#endregion

    //#region TOURNAMENT RESULT POPUP
    @property(Node)
    nodeTournamentResultPopup: Node;

    tournamentResultPopup: TournamentResultPopup;

    showTournamentResultPopup(indexRank:number,score:number) {
        let self = this;
        if (this.tournamentResultPopup) {
            this.tournamentResultPopup.showTournamentResultPopup(indexRank,score);
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("TournamentResultPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeTournamentResultPopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.tournamentResultPopup = uiPopup.getComponent(TournamentResultPopup);
                self.tournamentResultPopup.showTournamentResultPopup(indexRank,score);
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion


    //#region TOURNAMENT RESULT POPUP
    @property(Node)
    nodeTournamentRevivePopup: Node;

    tournamentRevivePopup: TournamentRevivePopup;

    showTournamentRevivePopup() {
        let self = this;
        if (this.tournamentRevivePopup) {
            this.tournamentRevivePopup.showTournamentRevivePopup();
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("TournamentRevivePopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeTournamentRevivePopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.tournamentRevivePopup = uiPopup.getComponent(TournamentRevivePopup);
                self.tournamentRevivePopup.showTournamentRevivePopup();
                self.hideLoadingPopup();
            });
        }
    }

    setTournamentResultTouchHome(){
        // console.log("setTournamentResultTouchHome");
        FBInstantManager.instance.resetContext((err,success) => {});
        this.menuManager.node.active = true;
        this.playManager.resetLevel();
        this.playManager.node.active = false;
        this.menuManager.showTabTournament();
    }
    //#endregion


    //#region SHOP ITEM POPUP
    @property(Node)
    nodeShopItemPopup: Node;

    shopItemPopup: ShopItemPopup;

    showShopItemPopup(boosterType: BOOSTER_TYPE) {
        let self = this;
        if (this.shopItemPopup) {
            this.shopItemPopup.showShopItemPopup(boosterType);
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("ShopItemPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeShopItemPopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.shopItemPopup = uiPopup.getComponent(ShopItemPopup);
                self.shopItemPopup.showShopItemPopup(boosterType);
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion


    //#region TUBE RACE JOIN POPUP
    @property(Node)
    nodeTubeRaceJoinPopup: Node;

    tubeRaceJoinPopup: TubeRaceJoinPopup;

    showTubeRaceJoinPopup() {
        let self = this;
        if (this.tubeRaceJoinPopup) {
            this.tubeRaceJoinPopup.showTubeRaceJoinPopup();
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("TubeRaceJoinPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeTubeRaceJoinPopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.tubeRaceJoinPopup = uiPopup.getComponent(TubeRaceJoinPopup);
                self.tubeRaceJoinPopup.showTubeRaceJoinPopup();
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion

    //#region TUBE RACE POPUP
    @property(Node)
    nodeTubeRacePopup: Node;

    tubeRacePopup: TubeRacePopup;

    showTubeRacePopup(isFinddingOpponent:boolean) {
        let self = this;
        if (this.tubeRacePopup) {
            this.tubeRacePopup.showTubeRacePopup(isFinddingOpponent);
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("TubeRacePopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeTubeRacePopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.tubeRacePopup = uiPopup.getComponent(TubeRacePopup);
                self.tubeRacePopup.showTubeRacePopup(isFinddingOpponent);
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion

    //#region TUBE RACE WINPOPUP
    @property(Node)
    nodeTubeRaceWinPopup: Node;

    tubeRaceWinPopup: TubeRaceWinPopup;

    showTubeRaceWinPopup(indexRank:number) {
        let self = this;
        if (this.tubeRaceWinPopup) {
            this.tubeRaceWinPopup.showTubeRaceWinPopup(indexRank);
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("TubeRaceWinPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeTubeRaceWinPopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.tubeRaceWinPopup = uiPopup.getComponent(TubeRaceWinPopup);
                self.tubeRaceWinPopup.showTubeRaceWinPopup(indexRank);
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion

    //#region TUBE RACE LOSE POPUP
    @property(Node)
    nodeTubeRaceLosePopup: Node;

    tubeRaceLosePopup: TubeRaceLosePopup;

    showTubeRaceLosePopup(indexRank:number) {
        let self = this;
        if (this.tubeRaceLosePopup) {
            this.tubeRaceLosePopup.showTubeRaceLosePopup(indexRank);
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("TubeRaceLosePopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeTubeRaceLosePopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.tubeRaceLosePopup = uiPopup.getComponent(TubeRaceLosePopup);
                self.tubeRaceLosePopup.showTubeRaceLosePopup(indexRank);
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion


    //#region MASSTER PASS POPUP
    @property(Node)
    nodeMasterPassPopup: Node;

    massterPassPopup: MassterPassPopup;

    showMassterPassPopup() {
        let self = this;
        if (this.massterPassPopup) {
            this.massterPassPopup.showMassterPassPopup();
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("MasterPassPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeMasterPassPopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.massterPassPopup = uiPopup.getComponent(MassterPassPopup);
                self.massterPassPopup.showMassterPassPopup();
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion

    //#region MASSTER PASS POPUP
    @property(Node)
    nodeMasterPassActivatePopup: Node;

    massterPassActivatePopup: MasterPassDetailPopup;

    showMassterPassActivatePopup() {
        let self = this;
        if (this.massterPassActivatePopup) {
            this.massterPassActivatePopup.showMaterPassDetailPopup();
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("MasterPassDetailPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeMasterPassActivatePopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.massterPassActivatePopup = uiPopup.getComponent(MasterPassDetailPopup);
                self.massterPassActivatePopup.showMaterPassDetailPopup();
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion

    //#region MASSTER PASS INFO POPUP
    @property(Node)
    nodeMasterPassInfoPopup: Node;

    massterPassInfoPopup: MasterPassInfoPopup;

    showMassterPassInfoPopup() {
        let self = this;
        if (this.massterPassInfoPopup) {
            this.massterPassInfoPopup.showMasterPassInfoPopup();
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("MasterPassInfoPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeMasterPassInfoPopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.massterPassInfoPopup = uiPopup.getComponent(MasterPassInfoPopup);
                self.massterPassInfoPopup.showMasterPassInfoPopup();
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion

    //#region SPIN POPUP
    @property(Node)
    nodeSpinPopup: Node;

    spinPopup: SpinPopup;

    showSpinPopup() {
        let self = this;
        if (this.spinPopup) {
            this.spinPopup.showSpinPopup();
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("SpinPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeSpinPopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.spinPopup = uiPopup.getComponent(SpinPopup);
                self.spinPopup.showSpinPopup();
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion

    //#region VIP POPUP
    @property(Node)
    nodeVIPPopup: Node;

    vipPopup: VIPPopup;

    showVIPPopup() {
        let self = this;
        if (this.vipPopup) {
            this.vipPopup.showPopup();
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("VIPPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeVIPPopup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.vipPopup = uiPopup.getComponent(VIPPopup);
                self.vipPopup.showPopup();
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion

    //#region SHARE INFO POPUP
    @property(Node)
    nodeShareInfoPopup: Node;

    shareInfoPopup: ShareInfoPopup;

    showShareInfoLevelPopup(level:number,cb:FBInstantCommon_Callback222) {
        let self = this;
        if (this.shareInfoPopup) {
            this.shareInfoPopup.showShareInfoLevelPopup(level,(base64Image:string)=>{
                if(base64Image.length > 0){
                    
                    FBInstantManager.instance.ShareInfoPlayer(base64Image,()=>{
                       cb(null,Constants.FB_CALLBACK_SUCCESS);
                    });
                }else{
                    cb(new Error("FAIL"),Constants.FB_CALLBACK_FAIL);
                }
            });
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("ShareInfoPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeShareInfoPopup);
                uiPopup.setPosition(new Vec3(-20000, 0, 0));

                self.shareInfoPopup = uiPopup.getComponent(ShareInfoPopup);
                self.shareInfoPopup.showShareInfoLevelPopup(level,(base64Image:string)=>{
                    if(base64Image.length > 0){
                        FBInstantManager.instance.ShareInfoPlayer(base64Image,()=>{
                            cb(null,Constants.FB_CALLBACK_SUCCESS);
                        });
                    }else{
                        cb(new Error("FAIL"),Constants.FB_CALLBACK_FAIL);
                    }
                });
                self.hideLoadingPopup();
            });
        }
    }

    showShareInfoScorePopup(score:number,cb:FBInstantCommon_Callback222) {
        let self = this;
        if (this.shareInfoPopup) {
            this.shareInfoPopup.showShareInfoScorePopup(score,(base64Image:string)=>{
                if(base64Image.length > 0){
                    
                    FBInstantManager.instance.ShareInfoPlayer(base64Image,()=>{
                       cb(null,Constants.FB_CALLBACK_SUCCESS);
                    });
                }else{
                    cb(new Error("FAIL"),Constants.FB_CALLBACK_FAIL);
                }
            });
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("ShareInfoPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeShareInfoPopup);
                uiPopup.setPosition(new Vec3(-20000, 0, 0));

                self.shareInfoPopup = uiPopup.getComponent(ShareInfoPopup);
                self.shareInfoPopup.showShareInfoScorePopup(score,(base64Image:string)=>{
                    if(base64Image.length > 0){
                        FBInstantManager.instance.ShareInfoPlayer(base64Image,()=>{
                            cb(null,Constants.FB_CALLBACK_SUCCESS);
                        });
                    }else{
                        cb(new Error("FAIL"),Constants.FB_CALLBACK_FAIL);
                    }
                });
                self.hideLoadingPopup();
            });
        }
    }

    showShareTournamentScorePopup(tittle:string,score:number,cb:FBInstantCommon_Callback222) {
        let self = this;
        if (this.shareInfoPopup) {
            this.shareInfoPopup.showShareTournamentPopup(tittle,score,(base64Image:string)=>{
                if(base64Image.length > 0){
                    
                    FBInstantManager.instance.ShareInfoPlayer(base64Image,()=>{
                       cb(null,Constants.FB_CALLBACK_SUCCESS);
                    });
                }else{
                    cb(new Error("FAIL"),Constants.FB_CALLBACK_FAIL);
                }
            });
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("ShareInfoPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeShareInfoPopup);
                uiPopup.setPosition(new Vec3(-20000, 0, 0));

                self.shareInfoPopup = uiPopup.getComponent(ShareInfoPopup);
                self.shareInfoPopup.showShareTournamentPopup(tittle,score,(base64Image:string)=>{
                    if(base64Image.length > 0){
                        FBInstantManager.instance.ShareInfoPlayer(base64Image,()=>{
                            cb(null,Constants.FB_CALLBACK_SUCCESS);
                        });
                    }else{
                        cb(new Error("FAIL"),Constants.FB_CALLBACK_FAIL);
                    }
                });
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion

    //#region SHARE CONTEXT POPUP
    @property(Node)
    nodeShareContextPopup: Node;

    shareContextPopup: ShareContextPopup;

    showShareContextPopup(level:number) {
        let self = this;
        if (this.shareContextPopup) {
            this.shareContextPopup.showShareContextPopup(level,(base64Image:string)=>{
                if(base64Image.length > 0){
                    
                    FBInstantManager.instance.UpdateContext(base64Image);
                }
            });
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("ShareContextPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeShareContextPopup);
                uiPopup.setPosition(new Vec3(-20000, 0, 0));

                self.shareContextPopup = uiPopup.getComponent(ShareContextPopup);
                self.shareContextPopup.showShareContextPopup(level,(base64Image:string)=>{
                    if(base64Image.length > 0){
                        FBInstantManager.instance.UpdateContext(base64Image);
                    }
                });
                self.hideLoadingPopup();
            });
        }
    }

    showInvitePopup(level:number) {
        let self = this;
        if (this.shareContextPopup) {
            this.shareContextPopup.showShareContextPopup(level,(base64Image:string)=>{
                if(base64Image.length > 0){
                    
                    FBInstantManager.instance.inviteFriend_222(base64Image);
                }
            });
        } else {
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("ShareContextPopup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeShareContextPopup);
                uiPopup.setPosition(new Vec3(-20000, 0, 0));

                self.shareContextPopup = uiPopup.getComponent(ShareContextPopup);
                self.shareContextPopup.showShareContextPopup(level,(base64Image:string)=>{
                    if(base64Image.length > 0){
                        FBInstantManager.instance.inviteFriend_222(base64Image);
                    }
                });
                self.hideLoadingPopup();
            });
        }
    }

    @property(Node)
    nodeWinWithFriendPopup:Node;

    winWithFriendPopup:WinWithFriendPopup;

    showWinWithFriendPopup(_withFriendDataInfo:WithFriendDataInfo,_score:number){
        let self = this;
        if(this.winWithFriendPopup){
            this.winWithFriendPopup.showWinWithFriendPopup(_withFriendDataInfo,_score);
        }else{
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("WinWithFriendPopup",(err,uiPrefab)=>{
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeWinWithFriendPopup);
                uiPopup.setPosition(new Vec3(0,0,0));

                self.winWithFriendPopup = uiPopup.getComponent(WinWithFriendPopup);
                self.winWithFriendPopup.showWinWithFriendPopup(_withFriendDataInfo,_score);
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion

    //#region UPDATE CONTEXT WITH FRIEND POPUP
    @property(Node)
    nodeShareContextWithFriendPopup:Node;

    shareContextWithFriendPopup:ShareContextWithFriendPopup;

    showShareContextWithFriendPopup(cb:FBInstantCommon_Callback222){
        let self = this;
        if(this.shareContextWithFriendPopup){
            this.shareContextWithFriendPopup.showUpdateContextWithFriendPopup(localConfig.instance.currWithFriendDataInfo,(base64Image: string) => {
                if (base64Image.length > 0) {
                    FBInstantManager.instance.UpdateContext_WithFriend(base64Image,localConfig.instance.currWithFriendDataInfo, cb);
                }
            });
        }else{
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("ShareContextWithFriendPopup",(err,uiPrefab)=>{
                let uiPopup = instantiate(uiPrefab);    
                uiPopup.setParent(self.nodeShareContextWithFriendPopup);
                uiPopup.setPosition(new Vec3(-20000,0,0));

                self.shareContextWithFriendPopup = uiPopup.getComponent(ShareContextWithFriendPopup);
                self.shareContextWithFriendPopup.showUpdateContextWithFriendPopup(localConfig.instance.currWithFriendDataInfo,(base64Image: string) => {
                    if (base64Image.length > 0) {
                        FBInstantManager.instance.UpdateContext_WithFriend(base64Image,localConfig.instance.currWithFriendDataInfo, cb);
                    }
                });
                self.hideLoadingPopup();
            });
        }
    }

    showShareWithFriendPopup(){
        let self = this;
        if(this.shareContextWithFriendPopup){
            this.shareContextWithFriendPopup.showUpdateContextWithFriendPopup(localConfig.instance.currWithFriendDataInfo,(base64Image: string) => {
                if (base64Image.length > 0) {
                    FBInstantManager.instance.ShareInfoPlayer(base64Image, (err,success) => {

                    });
                }
            });
        }else{
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("UpdateContextWithFriendPopup",(err,uiPrefab)=>{
                let uiPopup = instantiate(uiPrefab);    
                uiPopup.setParent(self.nodeShareContextWithFriendPopup);
                uiPopup.setPosition(new Vec3(-20000,0,0));

                self.shareContextWithFriendPopup = uiPopup.getComponent(ShareContextWithFriendPopup);
                self.shareContextWithFriendPopup.showUpdateContextWithFriendPopup(localConfig.instance.currWithFriendDataInfo,(base64Image: string) => {
                    if (base64Image.length > 0) {
                        FBInstantManager.instance.ShareInfoPlayer(base64Image, (err,success) => {

                        });
                    }
                });
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion

    //#region FRIENDS POPUP
    @property(Node)
    nodeFriendsPopup:Node;

    friendsPopup:FriendsPopup;

    showFriendsPopup(){
        let self = this;
        if(this.friendsPopup){
            this.friendsPopup.showFriendsPopup();
        }else{
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("FriendsPopup",(err,uiPrefab)=>{
                let uiPopup = instantiate(uiPrefab);    
                uiPopup.setParent(self.nodeFriendsPopup);
                uiPopup.setPosition(new Vec3(0,0,0));

                self.friendsPopup = uiPopup.getComponent(FriendsPopup);
                self.friendsPopup.showFriendsPopup();
                self.hideLoadingPopup();
            });
        }   
    }

    //#endregion


    //#region QUIT CONFIRM POPUP
    @property(Node)
    nodeQuitConfirmPopup:Node;

    quitConfirmPopup:QuitConfirmPopup;

    showQuitConfirmPopup(){
        let self = this;
        if(this.quitConfirmPopup){
            this.quitConfirmPopup.showQuitConfirmPopup();
        }else{
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("QuitConfirmPopup",(err,uiPrefab)=>{
                let uiPopup = instantiate(uiPrefab);    
                uiPopup.setParent(self.nodeQuitConfirmPopup);
                uiPopup.setPosition(new Vec3(0,0,0));

                self.quitConfirmPopup = uiPopup.getComponent(QuitConfirmPopup);
                self.quitConfirmPopup.showQuitConfirmPopup();
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion

    //#region LEVEL FAILED POPUP
    @property(Node)
    nodeLevelFailedPopup:Node;

    levelFailedPopup:LevelFailedPopup;

    showLevelFailedPopup(value: number){
        let self = this;
        if(this.levelFailedPopup){
            this.levelFailedPopup.showLevelFailedPopup(value);
        }else{
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("LevelFailedPopup",(err,uiPrefab)=>{
                let uiPopup = instantiate(uiPrefab);    
                uiPopup.setParent(self.nodeLevelFailedPopup);
                uiPopup.setPosition(new Vec3(0,0,0));

                self.levelFailedPopup = uiPopup.getComponent(LevelFailedPopup);
                self.levelFailedPopup.showLevelFailedPopup(value);
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion

    //#region MORE LIVES POPUP
    @property(Node)
    nodeMoreLivesPopup:Node;

    moreLivesPopup:MoreLivesPopup;

    showMoreLivesPopup(cb:any){
        let self = this;
        if(this.moreLivesPopup){
            this.moreLivesPopup.showMoreLivesPopup(cb);
        }else{
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("MoreLivesPopup",(err,uiPrefab)=>{
                let uiPopup = instantiate(uiPrefab);    
                uiPopup.setParent(self.nodeMoreLivesPopup);
                uiPopup.setPosition(new Vec3(0,0,0));

                self.moreLivesPopup = uiPopup.getComponent(MoreLivesPopup);
                self.moreLivesPopup.showMoreLivesPopup(cb);
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion


    //#region TUT CURTAIN POPUP
    @property(Node)
    nodeTutCurtainPopup:Node;

    tutCurtainPopup:TutCurtainPopup;

    showTutCurtainPopup(){
        let self = this;
        if(this.tutCurtainPopup){
            this.tutCurtainPopup.showTutCurtainPopup();
        }else{
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("TutCurtainPopup",(err,uiPrefab)=>{
                let uiPopup = instantiate(uiPrefab);    
                uiPopup.setParent(self.nodeTutCurtainPopup);
                uiPopup.setPosition(new Vec3(0,0,0));

                self.tutCurtainPopup = uiPopup.getComponent(TutCurtainPopup);
                self.tutCurtainPopup.showTutCurtainPopup();
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion

    //#region TUT PLASTER POPUP
    @property(Node)
    nodeTutPlasterPopup:Node;

    tutPlasterPopup:TutPlasterPopup;

    showTutPlasterPopup(){
        let self = this;
        if(this.tutPlasterPopup){
            this.tutPlasterPopup.showTutPlasterPopup();
        }else{
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("TutPlasterPopup",(err,uiPrefab)=>{
                let uiPopup = instantiate(uiPrefab);    
                uiPopup.setParent(self.nodeTutPlasterPopup);
                uiPopup.setPosition(new Vec3(0,0,0));

                self.tutPlasterPopup = uiPopup.getComponent(TutPlasterPopup);
                self.tutPlasterPopup.showTutPlasterPopup();
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion

    //#region TUT CLAY POPUP
    @property(Node)
    nodeTutClayPopup:Node;

    tutClayPopup:TutClayPopup;

    showTutClayPopup(){
        // console.log("showTutClayPopup");
        let self = this;
        if(this.tutClayPopup){
            this.tutClayPopup.showTutClayPopup();
        }else{
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("TutClayPopup",(err,uiPrefab)=>{
                let uiPopup = instantiate(uiPrefab);    
                uiPopup.setParent(self.nodeTutClayPopup);
                uiPopup.setPosition(new Vec3(0,0,0));

                self.tutClayPopup = uiPopup.getComponent(TutClayPopup);
                self.tutClayPopup.showTutClayPopup();
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion

    //#region WIN TOURNAMENT PAGEHOST POPUP
    @property(Node)
    nodeWinTournamentPageHostPopup:Node;

    winTournamentPageHostPopup:WinTournamentPageHostPopup;

    showWinTournamentPageHostPopup(_score:number){
        let self = this;
        if(this.winTournamentPageHostPopup){
            this.winTournamentPageHostPopup.showWinTournamentPageHostPopup(_score);
        }else{
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("WinTournamentPageHostPopup",(err,uiPrefab)=>{
                let uiPopup = instantiate(uiPrefab);    
                uiPopup.setParent(self.nodeWinTournamentPageHostPopup);
                uiPopup.setPosition(new Vec3(0,0,0));

                self.winTournamentPageHostPopup = uiPopup.getComponent(WinTournamentPageHostPopup);
                self.winTournamentPageHostPopup.showWinTournamentPageHostPopup(_score);
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion

    //#region BLACK FRIDAY POPUP
    @property(Node)
    nodeBlackFridayPopup:Node;

    blackFridayPopup:BlackFridayPopup;

    showBlackFridayPopup(){
        let self = this;
        if(this.blackFridayPopup){
            this.blackFridayPopup.showBlackFridayCoinPopup();
        }else{
            this.showLoadingPopup();
            resourceUtil.loadPrefabUI_Bundle("BlackFridayPopup",(err,uiPrefab)=>{
                let uiPopup = instantiate(uiPrefab);    
                uiPopup.setParent(self.nodeBlackFridayPopup);
                uiPopup.setPosition(new Vec3(0,0,0));

                self.blackFridayPopup = uiPopup.getComponent(BlackFridayPopup);
                self.blackFridayPopup.showBlackFridayCoinPopup();
                self.hideLoadingPopup();
            });
        }
    }
    //#endregion



    touchEfx() {
        // console.log("touchEfx");
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
