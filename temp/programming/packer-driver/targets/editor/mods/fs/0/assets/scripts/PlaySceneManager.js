System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "__unresolved_26", "__unresolved_27", "__unresolved_28", "__unresolved_29", "__unresolved_30", "__unresolved_31", "__unresolved_32", "__unresolved_33", "__unresolved_34", "__unresolved_35", "__unresolved_36", "__unresolved_37", "__unresolved_38", "__unresolved_39", "__unresolved_40", "__unresolved_41", "__unresolved_42", "__unresolved_43", "__unresolved_44", "__unresolved_45", "__unresolved_46", "__unresolved_47", "__unresolved_48", "__unresolved_49", "__unresolved_50", "__unresolved_51", "__unresolved_52"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, Node, ParticleSystem, Vec3, WinPopup, LoadingPopup, resourceUtil, clientEvent, BOOSTER_TYPE, Constants, PLAY_TYPE, LoadingStartPopup, SummerPackPopup, RemoveAdPackPopup, MenuManager, localConfig, SettingPopup, ShopPopup, DailyChallengePopup, BoxRewardReceivePopup, DailyTaskPopup, RewardReceivePopup, AudioManager2, LevelChestsPopup, RewardChestsPopup, ThemeUnlockPopup, TournamentPopup, lodash, TournamentQuitPopup, TournamentResultPopup, TournamentRevivePopup, ShopItemPopup, TubeRaceJoinPopup, TubeRacePopup, TubeRaceWinPopup, TubeRaceLosePopup, MassterPassPopup, MasterPassDetailPopup, MasterPassInfoPopup, SpinPopup, FBInstantManager, ShareInfoPopup, ShareContextPopup, VIPPopup, WinWithFriendPopup, ShareContextWithFriendPopup, FriendsPopup, PlayMagicManager, QuitConfirmPopup, LevelFailedPopup, MoreLivesPopup, TutCurtainPopup, TutPlasterPopup, TutClayPopup, LogEventManager, WinTournamentPageHostPopup, BlackFridayPopup, ThemePopup, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _temp, _crd, ccclass, property, PlaySceneManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfWinPopup(extras) {
    _reporterNs.report("WinPopup", "./game/WinPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingPopup(extras) {
    _reporterNs.report("LoadingPopup", "./LoadingPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "./framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "./framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBOOSTER_TYPE(extras) {
    _reporterNs.report("BOOSTER_TYPE", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBOX_TYPE(extras) {
    _reporterNs.report("BOX_TYPE", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDAILYTASK_TYPE(extras) {
    _reporterNs.report("DAILYTASK_TYPE", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPLAY_TYPE(extras) {
    _reporterNs.report("PLAY_TYPE", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTHEME_TYPE(extras) {
    _reporterNs.report("THEME_TYPE", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingStartPopup(extras) {
    _reporterNs.report("LoadingStartPopup", "./game/LoadingStartPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSummerPackPopup(extras) {
    _reporterNs.report("SummerPackPopup", "./game/SummerPackPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRemoveAdPackPopup(extras) {
    _reporterNs.report("RemoveAdPackPopup", "./game/RemoveAdPackPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMenuManager(extras) {
    _reporterNs.report("MenuManager", "./game/MenuManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "./localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingPopup(extras) {
    _reporterNs.report("SettingPopup", "./game/SettingPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopPopup(extras) {
    _reporterNs.report("ShopPopup", "./game/ShopPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDailyChallengePopup(extras) {
    _reporterNs.report("DailyChallengePopup", "./game/DailyChallengePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfoDay(extras) {
    _reporterNs.report("InfoDay", "./common/InfoDay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoxRewardReceivePopup(extras) {
    _reporterNs.report("BoxRewardReceivePopup", "./game/BoxRewardReceivePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroupRewardDataInfo(extras) {
    _reporterNs.report("GroupRewardDataInfo", "./game/info/ShopDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDailyTaskPopup(extras) {
    _reporterNs.report("DailyTaskPopup", "./game/DailyTaskPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRewardReceivePopup(extras) {
    _reporterNs.report("RewardReceivePopup", "./game/RewardReceivePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "./framework/audioManager2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelChestsPopup(extras) {
    _reporterNs.report("LevelChestsPopup", "./game/LevelChestsPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRewardChestsPopup(extras) {
    _reporterNs.report("RewardChestsPopup", "./game/RewardChestsPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThemeUnlockPopup(extras) {
    _reporterNs.report("ThemeUnlockPopup", "./game/ThemeUnlockPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTournamentPopup(extras) {
    _reporterNs.report("TournamentPopup", "./game/tournaments/TournamentPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLeaderboardDataInfo(extras) {
    _reporterNs.report("LeaderboardDataInfo", "./common/LeaderboardDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOflodash(extras) {
    _reporterNs.report("lodash", "./framework/lodash", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTournamentQuitPopup(extras) {
    _reporterNs.report("TournamentQuitPopup", "./game/tournaments/TournamentQuitPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTournamentResultPopup(extras) {
    _reporterNs.report("TournamentResultPopup", "./game/tournaments/TournamentResultPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTournamentRevivePopup(extras) {
    _reporterNs.report("TournamentRevivePopup", "./game/tournaments/TournamentRevivePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopItemPopup(extras) {
    _reporterNs.report("ShopItemPopup", "./game/ShopItemPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTubeRaceJoinPopup(extras) {
    _reporterNs.report("TubeRaceJoinPopup", "./game/race/TubeRaceJoinPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTubeRacePopup(extras) {
    _reporterNs.report("TubeRacePopup", "./game/race/TubeRacePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTubeRaceWinPopup(extras) {
    _reporterNs.report("TubeRaceWinPopup", "./game/race/TubeRaceWinPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTubeRaceLosePopup(extras) {
    _reporterNs.report("TubeRaceLosePopup", "./game/race/TubeRaceLosePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMassterPassPopup(extras) {
    _reporterNs.report("MassterPassPopup", "./game/masterpass/MassterPassPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMasterPassDetailPopup(extras) {
    _reporterNs.report("MasterPassDetailPopup", "./game/masterpass/MasterPassDetailPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMasterPassInfoPopup(extras) {
    _reporterNs.report("MasterPassInfoPopup", "./game/masterpass/MasterPassInfoPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpinPopup(extras) {
    _reporterNs.report("SpinPopup", "./game/spin/SpinPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantCommon_Callback(extras) {
    _reporterNs.report("FBInstantCommon_Callback222", "./common/FBInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "./common/FBInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShareInfoPopup(extras) {
    _reporterNs.report("ShareInfoPopup", "./game/share/ShareInfoPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShareContextPopup(extras) {
    _reporterNs.report("ShareContextPopup", "./game/share/ShareContextPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVIPPopup(extras) {
    _reporterNs.report("VIPPopup", "./game/vip/VIPPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinWithFriendPopup(extras) {
    _reporterNs.report("WinWithFriendPopup", "./game/withFriends/WinWithFriendPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWithFriendDataInfo(extras) {
    _reporterNs.report("WithFriendDataInfo", "./game/withFriends/WithFriendDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShareContextWithFriendPopup(extras) {
    _reporterNs.report("ShareContextWithFriendPopup", "./game/withFriends/ShareContextWithFriendPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFriendsPopup(extras) {
    _reporterNs.report("FriendsPopup", "./game/withFriends/FriendsPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayMagicManager(extras) {
    _reporterNs.report("PlayMagicManager", "./game/PlayMagicManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQuitConfirmPopup(extras) {
    _reporterNs.report("QuitConfirmPopup", "./game/QuitConfirmPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelFailedPopup(extras) {
    _reporterNs.report("LevelFailedPopup", "./game/LevelFailedPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoreLivesPopup(extras) {
    _reporterNs.report("MoreLivesPopup", "./game/MoreLivesPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTutCurtainPopup(extras) {
    _reporterNs.report("TutCurtainPopup", "./game/TutCurtainPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTutPlasterPopup(extras) {
    _reporterNs.report("TutPlasterPopup", "./game/TutPlasterPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTutClayPopup(extras) {
    _reporterNs.report("TutClayPopup", "./game/TutClayPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogEventManager(extras) {
    _reporterNs.report("LogEventManager", "./common/LogEventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinTournamentPageHostPopup(extras) {
    _reporterNs.report("WinTournamentPageHostPopup", "./game/WinTournamentPageHostPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlackFridayPopup(extras) {
    _reporterNs.report("BlackFridayPopup", "./game/blackfriday/BlackFridayPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThemePopup(extras) {
    _reporterNs.report("ThemePopup", "./game/ThemePopup", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      ParticleSystem = _cc.ParticleSystem;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      WinPopup = _unresolved_2.WinPopup;
    }, function (_unresolved_3) {
      LoadingPopup = _unresolved_3.LoadingPopup;
    }, function (_unresolved_4) {
      resourceUtil = _unresolved_4.resourceUtil;
    }, function (_unresolved_5) {
      clientEvent = _unresolved_5.clientEvent;
    }, function (_unresolved_6) {
      BOOSTER_TYPE = _unresolved_6.BOOSTER_TYPE;
      Constants = _unresolved_6.Constants;
      PLAY_TYPE = _unresolved_6.PLAY_TYPE;
    }, function (_unresolved_7) {
      LoadingStartPopup = _unresolved_7.LoadingStartPopup;
    }, function (_unresolved_8) {
      SummerPackPopup = _unresolved_8.SummerPackPopup;
    }, function (_unresolved_9) {
      RemoveAdPackPopup = _unresolved_9.RemoveAdPackPopup;
    }, function (_unresolved_10) {
      MenuManager = _unresolved_10.MenuManager;
    }, function (_unresolved_11) {
      localConfig = _unresolved_11.localConfig;
    }, function (_unresolved_12) {
      SettingPopup = _unresolved_12.SettingPopup;
    }, function (_unresolved_13) {
      ShopPopup = _unresolved_13.ShopPopup;
    }, function (_unresolved_14) {
      DailyChallengePopup = _unresolved_14.DailyChallengePopup;
    }, function (_unresolved_15) {
      BoxRewardReceivePopup = _unresolved_15.BoxRewardReceivePopup;
    }, function (_unresolved_16) {
      DailyTaskPopup = _unresolved_16.DailyTaskPopup;
    }, function (_unresolved_17) {
      RewardReceivePopup = _unresolved_17.RewardReceivePopup;
    }, function (_unresolved_18) {
      AudioManager2 = _unresolved_18.AudioManager2;
    }, function (_unresolved_19) {
      LevelChestsPopup = _unresolved_19.LevelChestsPopup;
    }, function (_unresolved_20) {
      RewardChestsPopup = _unresolved_20.RewardChestsPopup;
    }, function (_unresolved_21) {
      ThemeUnlockPopup = _unresolved_21.ThemeUnlockPopup;
    }, function (_unresolved_22) {
      TournamentPopup = _unresolved_22.TournamentPopup;
    }, function (_unresolved_23) {
      lodash = _unresolved_23.lodash;
    }, function (_unresolved_24) {
      TournamentQuitPopup = _unresolved_24.TournamentQuitPopup;
    }, function (_unresolved_25) {
      TournamentResultPopup = _unresolved_25.TournamentResultPopup;
    }, function (_unresolved_26) {
      TournamentRevivePopup = _unresolved_26.TournamentRevivePopup;
    }, function (_unresolved_27) {
      ShopItemPopup = _unresolved_27.ShopItemPopup;
    }, function (_unresolved_28) {
      TubeRaceJoinPopup = _unresolved_28.TubeRaceJoinPopup;
    }, function (_unresolved_29) {
      TubeRacePopup = _unresolved_29.TubeRacePopup;
    }, function (_unresolved_30) {
      TubeRaceWinPopup = _unresolved_30.TubeRaceWinPopup;
    }, function (_unresolved_31) {
      TubeRaceLosePopup = _unresolved_31.TubeRaceLosePopup;
    }, function (_unresolved_32) {
      MassterPassPopup = _unresolved_32.MassterPassPopup;
    }, function (_unresolved_33) {
      MasterPassDetailPopup = _unresolved_33.MasterPassDetailPopup;
    }, function (_unresolved_34) {
      MasterPassInfoPopup = _unresolved_34.MasterPassInfoPopup;
    }, function (_unresolved_35) {
      SpinPopup = _unresolved_35.SpinPopup;
    }, function (_unresolved_36) {
      FBInstantManager = _unresolved_36.FBInstantManager;
    }, function (_unresolved_37) {
      ShareInfoPopup = _unresolved_37.ShareInfoPopup;
    }, function (_unresolved_38) {
      ShareContextPopup = _unresolved_38.ShareContextPopup;
    }, function (_unresolved_39) {
      VIPPopup = _unresolved_39.VIPPopup;
    }, function (_unresolved_40) {
      WinWithFriendPopup = _unresolved_40.WinWithFriendPopup;
    }, function (_unresolved_41) {
      ShareContextWithFriendPopup = _unresolved_41.ShareContextWithFriendPopup;
    }, function (_unresolved_42) {
      FriendsPopup = _unresolved_42.FriendsPopup;
    }, function (_unresolved_43) {
      PlayMagicManager = _unresolved_43.PlayMagicManager;
    }, function (_unresolved_44) {
      QuitConfirmPopup = _unresolved_44.QuitConfirmPopup;
    }, function (_unresolved_45) {
      LevelFailedPopup = _unresolved_45.LevelFailedPopup;
    }, function (_unresolved_46) {
      MoreLivesPopup = _unresolved_46.MoreLivesPopup;
    }, function (_unresolved_47) {
      TutCurtainPopup = _unresolved_47.TutCurtainPopup;
    }, function (_unresolved_48) {
      TutPlasterPopup = _unresolved_48.TutPlasterPopup;
    }, function (_unresolved_49) {
      TutClayPopup = _unresolved_49.TutClayPopup;
    }, function (_unresolved_50) {
      LogEventManager = _unresolved_50.LogEventManager;
    }, function (_unresolved_51) {
      WinTournamentPageHostPopup = _unresolved_51.WinTournamentPageHostPopup;
    }, function (_unresolved_52) {
      BlackFridayPopup = _unresolved_52.BlackFridayPopup;
    }, function (_unresolved_53) {
      ThemePopup = _unresolved_53.ThemePopup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1f629t1HuxKdZY1YBUqevYJ", "PlaySceneManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("PlaySceneManager", PlaySceneManager = (_dec = ccclass('PlaySceneManager'), _dec2 = property(_crd && MenuManager === void 0 ? (_reportPossibleCrUseOfMenuManager({
        error: Error()
      }), MenuManager) : MenuManager), _dec3 = property(_crd && PlayMagicManager === void 0 ? (_reportPossibleCrUseOfPlayMagicManager({
        error: Error()
      }), PlayMagicManager) : PlayMagicManager), _dec4 = property(Node), _dec5 = property(_crd && LoadingPopup === void 0 ? (_reportPossibleCrUseOfLoadingPopup({
        error: Error()
      }), LoadingPopup) : LoadingPopup), _dec6 = property(_crd && LoadingPopup === void 0 ? (_reportPossibleCrUseOfLoadingPopup({
        error: Error()
      }), LoadingPopup) : LoadingPopup), _dec7 = property(Node), _dec8 = property(_crd && LoadingStartPopup === void 0 ? (_reportPossibleCrUseOfLoadingStartPopup({
        error: Error()
      }), LoadingStartPopup) : LoadingStartPopup), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(ParticleSystem), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(Node), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(Node), _dec31 = property(Node), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(Node), _dec35 = property(Node), _dec36 = property(Node), _dec37 = property(Node), _dec38 = property(Node), _dec39 = property(Node), _dec40 = property(Node), _dec41 = property(Node), _dec42 = property(Node), _dec43 = property(Node), _dec44 = property(Node), _dec45 = property(Node), _dec46 = property(Node), _dec47 = property(Node), _dec48 = property(Node), _dec49 = property(Node), _dec(_class = (_class2 = (_temp = class PlaySceneManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "menuManager", _descriptor, this);

          _initializerDefineProperty(this, "playManager", _descriptor2, this);

          _initializerDefineProperty(this, "nodeEfx", _descriptor3, this);

          _initializerDefineProperty(this, "loadingPopup", _descriptor4, this);

          _initializerDefineProperty(this, "loadingAdPopup", _descriptor5, this);

          _initializerDefineProperty(this, "nodeWinPopup", _descriptor6, this);

          _defineProperty(this, "winPopup", void 0);

          _initializerDefineProperty(this, "loadingStartPopup", _descriptor7, this);

          _initializerDefineProperty(this, "nodeSummerPackPopup", _descriptor8, this);

          _defineProperty(this, "summerPackPopup", void 0);

          _initializerDefineProperty(this, "nodeRemoveAdPackPopup", _descriptor9, this);

          _defineProperty(this, "removeAdPackPopup", void 0);

          _initializerDefineProperty(this, "nodeSettingPopup", _descriptor10, this);

          _defineProperty(this, "settingPopup", void 0);

          _initializerDefineProperty(this, "nodePausePopup", _descriptor11, this);

          _defineProperty(this, "pausePopup", void 0);

          _initializerDefineProperty(this, "nodeShopPopup", _descriptor12, this);

          _defineProperty(this, "shopPopup", void 0);

          _initializerDefineProperty(this, "nodeDailyChallengePopup", _descriptor13, this);

          _defineProperty(this, "dailyChallengePopup", void 0);

          _initializerDefineProperty(this, "nodeBoxRewardReceivePopup", _descriptor14, this);

          _defineProperty(this, "boxRewardReceivePopup", void 0);

          _initializerDefineProperty(this, "nodeDailyTaskPopup", _descriptor15, this);

          _defineProperty(this, "dailyTaskPopup", void 0);

          _initializerDefineProperty(this, "nodeRewardReceivePopup", _descriptor16, this);

          _defineProperty(this, "rewardReceivePopup", void 0);

          _initializerDefineProperty(this, "arrEfxFireWorks", _descriptor17, this);

          _initializerDefineProperty(this, "nodeLevelChestsPopup", _descriptor18, this);

          _defineProperty(this, "levelChestsPopup", void 0);

          _initializerDefineProperty(this, "nodeRewardChestsPopup", _descriptor19, this);

          _defineProperty(this, "rewardChestsPopup", void 0);

          _initializerDefineProperty(this, "nodeThemeUnlockedPopup", _descriptor20, this);

          _defineProperty(this, "themeUnlockedPopup", void 0);

          _initializerDefineProperty(this, "nodeTournamentPopup", _descriptor21, this);

          _defineProperty(this, "tournamentPopup", void 0);

          _initializerDefineProperty(this, "nodeTournamentQuitPopup", _descriptor22, this);

          _defineProperty(this, "tournamentQuitPopup", void 0);

          _initializerDefineProperty(this, "nodeTournamentResultPopup", _descriptor23, this);

          _defineProperty(this, "tournamentResultPopup", void 0);

          _initializerDefineProperty(this, "nodeTournamentRevivePopup", _descriptor24, this);

          _defineProperty(this, "tournamentRevivePopup", void 0);

          _initializerDefineProperty(this, "nodeShopItemPopup", _descriptor25, this);

          _defineProperty(this, "shopItemPopup", void 0);

          _initializerDefineProperty(this, "nodeTubeRaceJoinPopup", _descriptor26, this);

          _defineProperty(this, "tubeRaceJoinPopup", void 0);

          _initializerDefineProperty(this, "nodeTubeRacePopup", _descriptor27, this);

          _defineProperty(this, "tubeRacePopup", void 0);

          _initializerDefineProperty(this, "nodeTubeRaceWinPopup", _descriptor28, this);

          _defineProperty(this, "tubeRaceWinPopup", void 0);

          _initializerDefineProperty(this, "nodeTubeRaceLosePopup", _descriptor29, this);

          _defineProperty(this, "tubeRaceLosePopup", void 0);

          _initializerDefineProperty(this, "nodeMasterPassPopup", _descriptor30, this);

          _defineProperty(this, "massterPassPopup", void 0);

          _initializerDefineProperty(this, "nodeMasterPassActivatePopup", _descriptor31, this);

          _defineProperty(this, "massterPassActivatePopup", void 0);

          _initializerDefineProperty(this, "nodeMasterPassInfoPopup", _descriptor32, this);

          _defineProperty(this, "massterPassInfoPopup", void 0);

          _initializerDefineProperty(this, "nodeSpinPopup", _descriptor33, this);

          _defineProperty(this, "spinPopup", void 0);

          _initializerDefineProperty(this, "nodeVIPPopup", _descriptor34, this);

          _defineProperty(this, "vipPopup", void 0);

          _initializerDefineProperty(this, "nodeShareInfoPopup", _descriptor35, this);

          _defineProperty(this, "shareInfoPopup", void 0);

          _initializerDefineProperty(this, "nodeShareContextPopup", _descriptor36, this);

          _defineProperty(this, "shareContextPopup", void 0);

          _initializerDefineProperty(this, "nodeWinWithFriendPopup", _descriptor37, this);

          _defineProperty(this, "winWithFriendPopup", void 0);

          _initializerDefineProperty(this, "nodeShareContextWithFriendPopup", _descriptor38, this);

          _defineProperty(this, "shareContextWithFriendPopup", void 0);

          _initializerDefineProperty(this, "nodeFriendsPopup", _descriptor39, this);

          _defineProperty(this, "friendsPopup", void 0);

          _initializerDefineProperty(this, "nodeQuitConfirmPopup", _descriptor40, this);

          _defineProperty(this, "quitConfirmPopup", void 0);

          _initializerDefineProperty(this, "nodeLevelFailedPopup", _descriptor41, this);

          _defineProperty(this, "levelFailedPopup", void 0);

          _initializerDefineProperty(this, "nodeMoreLivesPopup", _descriptor42, this);

          _defineProperty(this, "moreLivesPopup", void 0);

          _initializerDefineProperty(this, "nodeTutCurtainPopup", _descriptor43, this);

          _defineProperty(this, "tutCurtainPopup", void 0);

          _initializerDefineProperty(this, "nodeTutPlasterPopup", _descriptor44, this);

          _defineProperty(this, "tutPlasterPopup", void 0);

          _initializerDefineProperty(this, "nodeTutClayPopup", _descriptor45, this);

          _defineProperty(this, "tutClayPopup", void 0);

          _initializerDefineProperty(this, "nodeWinTournamentPageHostPopup", _descriptor46, this);

          _defineProperty(this, "winTournamentPageHostPopup", void 0);

          _initializerDefineProperty(this, "nodeBlackFridayPopup", _descriptor47, this);

          _defineProperty(this, "blackFridayPopup", void 0);

          _initializerDefineProperty(this, "nodeThemePopup", _descriptor48, this);

          _defineProperty(this, "themePopup", void 0);
        }

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LOADING_POPUP, this.showLoadingPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).HIDE_LOADING_POPUP, this.hideLoadingPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LOADING_AD_POPUP, this.showLoadingAdPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).HIDE_LOADING_AD_POPUP, this.hideLoadingAdPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_WIN_POPUP, this.showWinPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_WIN_DAILYCHALLENGE_POPUP, this.showWinPopup_DailyChallenge, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LOADING_START_POPUP, this.showLoadingStartPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LOADING_START_NOW_POPUP, this.showLoadingStartNowPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).HIDE_LOADING_START_POPUP, this.hideLoadingStartPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).HIDE_LOADING_START_NOW_POPUP, this.hideLoadingStartNowPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SUMMER_PACK_POPUP, this.showSummerPackPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOUCH_LEVEL, this.touchLevel, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILYCHALLENGE_PLAY_LEVEL, this.touchLevelChallenge, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SETTING_POPUP, this.showSettingPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_PAUSE_POPUP, this.showPausePopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SHOP_POPUP, this.showShopPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_DAILY_CHALLENGE_POPUP, this.showDailyChallengePopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILYCHALLENGE_LEVEL_FINISHED, this.setDailyChallengeFinished, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_BOXREWARD_RECEIVE_POPUP, this.showBoxRewardReceivePopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_REMOVEAD_POPUP, this.showRemoveAdPackPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_DAILYTASK_POPUP, this.showDailyTaskPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_REWARDRECEIVE_POPUP, this.showRewardReceivePopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_EFX_FIREWORK, this.showEfxFireWorks, this); // clientEvent.on(Constants.TOUCH_NEXT_LEVEL,this.setNextLevel,this);

          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PAUSE_TOUCH_HOME, this.setPauseTouchHome, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LEVELCHEST_POPUP, this.showLevelChestsPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).LEVEL_CHEST_TOUCH_CONTINUE, this.setLevelChestsPopup_TouchContinue, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_CHEST_REWARD_POPUP, this.showRewardChestsPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_THEME_REWARD_POPUP, this.showThemeUnlockedPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).WINPOPUP_TOUCH_HOME, this.setWinPopupTouchHome, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TOURNAMENT_POPUP, this.showTournamentPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOURNAMENT_TOUCH_PLAY, this.setPlayTournament, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TOURNAMENTQUIT_POPUP, this.showTournamentQuitPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TOURNAMENT_RESULT_POPUP, this.showTournamentResultPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TOURNAMENT_REVIVE_POPUP, this.showTournamentRevivePopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOURNAMENT_RESULT_TOUCH_HOME, this.setTournamentResultTouchHome, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SHOP_ITEM_POPUP, this.showShopItemPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOP_POPUP_CLOSE, this.setShopPopupClose, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TUBERACE_JOIN_POPUP, this.showTubeRaceJoinPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TUBERACE_POPUP, this.showTubeRacePopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TUBERACE_WIN_POPUP, this.showTubeRaceWinPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TUBERACE_LOSE_POPUP, this.showTubeRaceLosePopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_MASSTERPASS_POPUP, this.showMassterPassPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_MASSTERPASS_ACTIVATE_POPUP, this.showMassterPassActivatePopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_MASSTERPASS_INFO_POPUP, this.showMassterPassInfoPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SPIN_POPUP, this.showSpinPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SHARECONTEXT_POPUP, this.showShareContextPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SHARE_INFOLEVEL_POPUP, this.showShareInfoLevelPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SHARE_INFOSCORE_POPUP, this.showShareInfoScorePopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SHARE_TOURNAMENT_POPUP, this.showShareTournamentScorePopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_INVITE_POPUP, this.showInvitePopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_VIP_POPUP, this.showVIPPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_WIN_WITHFRIEND_POPUP, this.showWinWithFriendPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SHARE_WITHFRIEND_POPUP, this.showShareWithFriendPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_UPDATECONTEXT_WITHFRIEND_POPUP, this.showShareContextWithFriendPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_FRIENDS_POPUP, this.showFriendsPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).WITHFRIEND_PLAY_START, this.setWithFriendPlayStart, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).WINPOPUP_WITHFRIEND_TOUCH_HOME, this.setWinPopupWithFriendTouchHome, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).WINPOPUP_DAILYCHALLENGE_TOUCH_HOME, this.setWinPopupDailyChallengeTouchHome, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_QUITCONFIRM_POPUP, this.showQuitConfirmPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LEVELFAILED_POPUP, this.showLevelFailedPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BACK_TO_HOME, this.setBackToHome, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_MORELIVES_POPUP, this.showMoreLivesPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TUT_CURTAIN_POPUP, this.showTutCurtainPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TUT_CLAY_POPUP, this.showTutClayPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TUT_PLASTER_POPUP, this.showTutPlasterPopup, this); // clientEvent.on(Constants.LEVEL_CHEST_NEXTLEVEL,this.setLevelChestNextLevel,this);

          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILYCHALLENGE_NOMOVES_TOUCHCLOSE, this.setDailyChallengeNoMovesTouchClose, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).WITHFRIEND_NOMOVES_TOUCH_CLOSE, this.setWithFriendNoMovesTouchClose, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_WIN_TOURNAMENT_PAGEHOST_POPUP, this.showWinTournamentPageHostPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOURNAMENT_PAGEHOST_TOUCH_HOME, this.setTournamentPageHostTouchHome, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_BLACKRIDAY_COIN_POPUP, this.showBlackFridayPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_THEME_POPUP, this.showThemePopup, this);
          this.nodeEfx.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchEfx, this);
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LOADING_POPUP, this.showLoadingPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).HIDE_LOADING_POPUP, this.hideLoadingPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LOADING_AD_POPUP, this.showLoadingAdPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).HIDE_LOADING_AD_POPUP, this.hideLoadingAdPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_WIN_POPUP, this.showWinPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_WIN_DAILYCHALLENGE_POPUP, this.showWinPopup_DailyChallenge, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LOADING_START_POPUP, this.showLoadingStartPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LOADING_START_NOW_POPUP, this.showLoadingStartNowPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).HIDE_LOADING_START_POPUP, this.hideLoadingStartPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).HIDE_LOADING_START_NOW_POPUP, this.hideLoadingStartNowPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SUMMER_PACK_POPUP, this.showSummerPackPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOUCH_LEVEL, this.touchLevel, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILYCHALLENGE_PLAY_LEVEL, this.touchLevelChallenge, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SETTING_POPUP, this.showSettingPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_PAUSE_POPUP, this.showPausePopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SHOP_POPUP, this.showShopPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_DAILY_CHALLENGE_POPUP, this.showDailyChallengePopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILYCHALLENGE_LEVEL_FINISHED, this.setDailyChallengeFinished, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_BOXREWARD_RECEIVE_POPUP, this.showBoxRewardReceivePopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_REMOVEAD_POPUP, this.showRemoveAdPackPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_DAILYTASK_POPUP, this.showDailyTaskPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_REWARDRECEIVE_POPUP, this.showRewardReceivePopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_EFX_FIREWORK, this.showEfxFireWorks, this); // clientEvent.off(Constants.TOUCH_NEXT_LEVEL,this.setNextLevel,this);

          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PAUSE_TOUCH_HOME, this.setPauseTouchHome, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LEVELCHEST_POPUP, this.showLevelChestsPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).LEVEL_CHEST_TOUCH_CONTINUE, this.setLevelChestsPopup_TouchContinue, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_CHEST_REWARD_POPUP, this.showRewardChestsPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_THEME_REWARD_POPUP, this.showThemeUnlockedPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).WINPOPUP_TOUCH_HOME, this.setWinPopupTouchHome, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TOURNAMENT_POPUP, this.showTournamentPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOURNAMENT_TOUCH_PLAY, this.setPlayTournament, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TOURNAMENTQUIT_POPUP, this.showTournamentQuitPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TOURNAMENT_RESULT_POPUP, this.showTournamentResultPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TOURNAMENT_REVIVE_POPUP, this.showTournamentRevivePopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOURNAMENT_RESULT_TOUCH_HOME, this.setTournamentResultTouchHome, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SHOP_ITEM_POPUP, this.showShopItemPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOP_POPUP_CLOSE, this.setShopPopupClose, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TUBERACE_JOIN_POPUP, this.showTubeRaceJoinPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TUBERACE_POPUP, this.showTubeRacePopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TUBERACE_WIN_POPUP, this.showTubeRaceWinPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TUBERACE_LOSE_POPUP, this.showTubeRaceLosePopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_MASSTERPASS_POPUP, this.showMassterPassPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_MASSTERPASS_ACTIVATE_POPUP, this.showMassterPassActivatePopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_MASSTERPASS_INFO_POPUP, this.showMassterPassInfoPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SPIN_POPUP, this.showSpinPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SHARECONTEXT_POPUP, this.showShareContextPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SHARE_INFOLEVEL_POPUP, this.showShareInfoLevelPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SHARE_INFOSCORE_POPUP, this.showShareInfoScorePopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SHARE_TOURNAMENT_POPUP, this.showShareTournamentScorePopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_INVITE_POPUP, this.showInvitePopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_VIP_POPUP, this.showVIPPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_WIN_WITHFRIEND_POPUP, this.showWinWithFriendPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SHARE_WITHFRIEND_POPUP, this.showShareWithFriendPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_UPDATECONTEXT_WITHFRIEND_POPUP, this.showShareContextWithFriendPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_FRIENDS_POPUP, this.showFriendsPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).WITHFRIEND_PLAY_START, this.setWithFriendPlayStart, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).WINPOPUP_WITHFRIEND_TOUCH_HOME, this.setWinPopupWithFriendTouchHome, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).WINPOPUP_DAILYCHALLENGE_TOUCH_HOME, this.setWinPopupDailyChallengeTouchHome, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_QUITCONFIRM_POPUP, this.showQuitConfirmPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LEVELFAILED_POPUP, this.showLevelFailedPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BACK_TO_HOME, this.setBackToHome, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_MORELIVES_POPUP, this.showMoreLivesPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TUT_CURTAIN_POPUP, this.showTutCurtainPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TUT_CLAY_POPUP, this.showTutClayPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TUT_PLASTER_POPUP, this.showTutPlasterPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILYCHALLENGE_NOMOVES_TOUCHCLOSE, this.setDailyChallengeNoMovesTouchClose, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).WITHFRIEND_NOMOVES_TOUCH_CLOSE, this.setWithFriendNoMovesTouchClose, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_WIN_TOURNAMENT_PAGEHOST_POPUP, this.showWinTournamentPageHostPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOURNAMENT_PAGEHOST_TOUCH_HOME, this.setTournamentPageHostTouchHome, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_BLACKRIDAY_COIN_POPUP, this.showBlackFridayPopup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_THEME_POPUP, this.showThemePopup, this);
          this.nodeEfx.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchEfx, this);
        }

        start() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logSplashToHome((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrTime() - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.splashStartTime);
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logInitUserPropertys((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAPUser(), (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.iapCount, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.winStreak, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.loseStreak, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currCoin, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getBoosterCount((_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
            error: Error()
          }), BOOSTER_TYPE) : BOOSTER_TYPE).UNDO), (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getBoosterCount((_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
            error: Error()
          }), BOOSTER_TYPE) : BOOSTER_TYPE).SUGGEST), (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getBoosterCount((_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
            error: Error()
          }), BOOSTER_TYPE) : BOOSTER_TYPE).ADDCOL)); // [3]

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isStartTournament) {
            this.menuManager.node.active = false;
            this.playManager.node.active = false;

            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currTournamentPageHostDataInfo != null) {
              this.setPlayTournamentPageHost();
            } else {
              let leaderboardDataInfo = null;

              for (let i = 0; i < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrTournament_LeaderBoardDataInfos.length; i++) {
                if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.arrTournament_LeaderBoardDataInfos[i].tournamentId == (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                  error: Error()
                }), FBInstantManager) : FBInstantManager).instance.tournamentID && (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.arrTournament_LeaderBoardDataInfos[i].contextId == (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                  error: Error()
                }), FBInstantManager) : FBInstantManager).instance.contextID) {
                  leaderboardDataInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.arrTournament_LeaderBoardDataInfos[i];
                }
              } // console.log("START",leaderboardDataInfo);


              if (leaderboardDataInfo == null) {
                // console.log(localConfig.instance.currSessionLeaderboardDataInfo);
                if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.currSessionLeaderboardDataInfo != null) {
                  this.setPlayTournament((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.currSessionLeaderboardDataInfo);
                } else {
                  this.menuManager.node.active = true;
                  this.menuManager.showTabTournament();
                }
              } else {
                this.setPlayTournament(leaderboardDataInfo);
              }
            }
          } else {
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currWithFriendDataInfo != null) {
              this.menuManager.node.active = false;
              this.playManager.node.active = true;
              this.updateContextWithFriend();
              this.playManager.preloadLevelwithFriend();
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.playType = (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
                error: Error()
              }), PLAY_TYPE) : PLAY_TYPE).HOME;
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logLevelStart((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currWithFriendDataInfo.levelIndex, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getLevelLoopByFromStr((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currLevelConfigInfo.levelOrder), (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
                error: Error()
              }), PLAY_TYPE) : PLAY_TYPE)[(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.playType].toLowerCase().toString(), 1, 0, "withfriend");
            } else {
              if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currLevelUnlock == 1) {
                (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                  error: Error()
                }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).SHOW_LOADING_START_NOW_POPUP);
                this.menuManager.node.active = false;
                this.playManager.node.active = true;
                (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.currLevel = 1;
                this.playManager.preloadLevel((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.currLevel);
                (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.playType = (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
                  error: Error()
                }), PLAY_TYPE) : PLAY_TYPE).HOME;
                (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                  error: Error()
                }), LogEventManager) : LogEventManager).instance.logLevelStart((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.currLevel, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.getLevelLoopByFromStr((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.currLevelConfigInfo.levelOrder), (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
                  error: Error()
                }), PLAY_TYPE) : PLAY_TYPE)[(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.playType].toLowerCase().toString(), (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.loseStreak + 1, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.loseStreak, "normal");
              } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currLevelUnlock <= (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.LEVEL_SHOW_HOME) {
                (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                  error: Error()
                }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).SHOW_LOADING_START_NOW_POPUP);
                this.menuManager.node.active = false;
                this.playManager.node.active = true;
                (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.currLevel = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.currLevelUnlock;
                this.playManager.preloadLevel((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.currLevel);
                (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.playType = (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
                  error: Error()
                }), PLAY_TYPE) : PLAY_TYPE).HOME;
                (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                  error: Error()
                }), LogEventManager) : LogEventManager).instance.logLevelStart((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.currLevel, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.getLevelLoopByFromStr((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.currLevelConfigInfo.levelOrder), (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
                  error: Error()
                }), PLAY_TYPE) : PLAY_TYPE)[(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.playType].toLowerCase().toString(), (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.loseStreak + 1, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.loseStreak, "normal");
              } else {
                this.menuManager.node.active = true;
                this.playManager.node.active = false;
                this.menuManager.showTabHome();
                this.menuManager.homeGroup.showGroupFirstTime();
              }
            }
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }


        updateContextWithFriend() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_UPDATECONTEXT_WITHFRIEND_POPUP, (errr, success) => {});
        }

        touchLevel() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LOADING_START_NOW_POPUP);
          this.menuManager.node.active = false;
          this.playManager.node.active = true;
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevel = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock;
          this.playManager.preloadLevel((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevel);
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.playType = (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
            error: Error()
          }), PLAY_TYPE) : PLAY_TYPE).HOME;
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logLevelStart((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevel, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getLevelLoopByFromStr((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelConfigInfo.levelOrder), "home", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.loseStreak + 1, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.loseStreak, "normal");
        }

        touchLevelChallenge(infoDayChallenge) {
          // console.log("setDailyChallenge_PlayLevel",infoDayChallenge);
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currInfoDaySelect = infoDayChallenge;
          let indexDay = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCountDay_From_Start(infoDayChallenge) + 1; // console.log("indexDay",indexDay);

          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LOADING_START_NOW_POPUP);
          this.menuManager.node.active = false;
          this.playManager.node.active = true;
          this.playManager.preloadLevelChallenge(indexDay);
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.playType = (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
            error: Error()
          }), PLAY_TYPE) : PLAY_TYPE).HOME;
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logLevelStart(indexDay, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getLevelLoopByFromStr((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelConfigInfo.levelOrder), (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
            error: Error()
          }), PLAY_TYPE) : PLAY_TYPE)[(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.playType].toLowerCase().toString(), 1, 0, "dailychallenge");
        }

        setPlayTournament(leaderboardDataInfo) {
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLeaderboardDataInfo = leaderboardDataInfo; // console.log("setPlayTournament",leaderboardDataInfo);

          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currIndexLevelTournament = 1;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock > 1) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevelStartTournament = (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).random(5, 22);
          } else {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevelStartTournament = 0;
          }

          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LOADING_START_NOW_POPUP);
          this.menuManager.node.active = false;
          this.playManager.node.active = true;
          this.playManager.preloadLevelTournament();
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.playType = (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
            error: Error()
          }), PLAY_TYPE) : PLAY_TYPE).HOME;
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logLevelStart((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currIndexLevelTournament, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getLevelLoopByFromStr((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelConfigInfo.levelOrder), (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
            error: Error()
          }), PLAY_TYPE) : PLAY_TYPE)[(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.playType].toLowerCase().toString(), 1, 0, "tournament");
        }

        setPlayTournamentPageHost() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LOADING_START_NOW_POPUP);
          this.menuManager.node.active = false;
          this.playManager.node.active = true;
          this.playManager.preloadLevelTournamentPageHost();
        }

        setWithFriendPlayStart() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LOADING_START_NOW_POPUP);
          this.menuManager.node.active = false;
          this.playManager.node.active = true;
          this.playManager.preloadLevelwithFriend();
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.playType = (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
            error: Error()
          }), PLAY_TYPE) : PLAY_TYPE).HOME;
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logLevelStart((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelConfigInfo.levelIndex, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getLevelLoopByFromStr((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelConfigInfo.levelOrder), (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
            error: Error()
          }), PLAY_TYPE) : PLAY_TYPE)[(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.playType].toLowerCase().toString(), 1, 0, "withfriend");
        } // setNextLevel(){
        //     clientEvent.dispatchEvent(Constants.HIDE_LOADING_START_POPUP);
        //     this.menuManager.node.active = true;
        //     this.playManager.node.active = false;
        //     this.menuManager.homeGroup.setNextLevel();
        // }
        //#region LOADING POPUP


        showLoadingPopup() {
          this.loadingPopup.showLoading();
        }

        hideLoadingPopup() {
          this.loadingPopup.hideLoading();
        } //#endregion
        //#region LOADING AD POPUP


        showLoadingAdPopup() {
          this.loadingAdPopup.showLoading();
        }

        hideLoadingAdPopup() {
          this.loadingAdPopup.hideLoading();
        } //#endregion
        //#region TOURNAMENT REWARD POPUP


        showWinPopup(level) {
          let self = this;

          if (this.winPopup) {
            this.winPopup.showWinPopup(level);
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("WinPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeWinPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.winPopup = uiPopup.getComponent(_crd && WinPopup === void 0 ? (_reportPossibleCrUseOfWinPopup({
                error: Error()
              }), WinPopup) : WinPopup);
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
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("WinPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeWinPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.winPopup = uiPopup.getComponent(_crd && WinPopup === void 0 ? (_reportPossibleCrUseOfWinPopup({
                error: Error()
              }), WinPopup) : WinPopup);
              self.winPopup.showWinPopup_DailyChallenge();
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region LOADING START POPUP


        showLoadingStartPopup() {
          this.loadingStartPopup.showLoadingStart();
        }

        showLoadingStartNowPopup() {
          this.loadingStartPopup.showLoadingStartNow();
        }

        hideLoadingStartPopup() {
          this.loadingStartPopup.hideLoadingStart();
        }

        hideLoadingStartNowPopup() {
          this.loadingStartPopup.hideLoadingStartNow();
        } //#endregion
        //#region SUMMER PACK POPUP


        showSummerPackPopup() {
          let self = this;

          if (this.summerPackPopup) {
            this.summerPackPopup.showSummerPack();
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("SummerPackPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeSummerPackPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.summerPackPopup = uiPopup.getComponent(_crd && SummerPackPopup === void 0 ? (_reportPossibleCrUseOfSummerPackPopup({
                error: Error()
              }), SummerPackPopup) : SummerPackPopup);
              self.summerPackPopup.showSummerPack();
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region REMOVE AD POPUP


        showRemoveAdPackPopup() {
          // console.log("showRemoveAdPackPopup");
          let self = this;

          if (this.removeAdPackPopup) {
            this.removeAdPackPopup.showRemoveAdPackPopup();
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("RemoveAdPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeRemoveAdPackPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.removeAdPackPopup = uiPopup.getComponent(_crd && RemoveAdPackPopup === void 0 ? (_reportPossibleCrUseOfRemoveAdPackPopup({
                error: Error()
              }), RemoveAdPackPopup) : RemoveAdPackPopup);
              self.removeAdPackPopup.showRemoveAdPackPopup();
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region SETTING POPUP


        showSettingPopup() {
          let self = this;

          if (this.settingPopup) {
            this.settingPopup.showSettingPopup();
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("SettingPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeSettingPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.settingPopup = uiPopup.getComponent(_crd && SettingPopup === void 0 ? (_reportPossibleCrUseOfSettingPopup({
                error: Error()
              }), SettingPopup) : SettingPopup);
              self.settingPopup.showSettingPopup();
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region PAUSE POPUP


        showPausePopup() {
          let self = this;

          if (this.pausePopup) {
            this.pausePopup.showPausePopup();
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("PausePopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodePausePopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.pausePopup = uiPopup.getComponent(_crd && SettingPopup === void 0 ? (_reportPossibleCrUseOfSettingPopup({
                error: Error()
              }), SettingPopup) : SettingPopup);
              self.pausePopup.showPausePopup();
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region  SHOP POPUP


        showShopPopup() {
          if (this.shopItemPopup && this.shopItemPopup.node.active) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currShopItemPopup_BoosterType = this.shopItemPopup.boosterType;
            this.shopItemPopup.hidePopup();
          } else {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currShopItemPopup_BoosterType = null;
          }

          let self = this;

          if (this.shopPopup) {
            this.shopPopup.showShopPopup();
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("ShopPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeShopPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.shopPopup = uiPopup.getComponent(_crd && ShopPopup === void 0 ? (_reportPossibleCrUseOfShopPopup({
                error: Error()
              }), ShopPopup) : ShopPopup);
              self.shopPopup.showShopPopup();
              self.hideLoadingPopup();
            });
          }
        }

        setShopPopupClose() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currShopItemPopup_BoosterType != null) {
            this.showShopItemPopup((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currShopItemPopup_BoosterType);
          }
        } //#endregion


        setWinPopupTouchHome(rewardCoin) {
          this.playManager.resetLevel();
          this.playManager.node.active = false;
          this.menuManager.node.active = true;
          this.menuManager.homeGroup.setNextLevel(rewardCoin);
          this.menuManager.showTabHome();
        }

        setWinPopupDailyChallengeTouchHome() {
          this.playManager.resetLevel();
          this.playManager.node.active = false;
          this.menuManager.node.active = true;
          this.menuManager.showTabHome();
        }

        setDailyChallengeNoMovesTouchClose() {
          this.playManager.resetLevel();
          this.playManager.node.active = false;
          this.menuManager.node.active = true;
          this.menuManager.showTabHome();
          this.showDailyChallengePopup();
        }

        setWinPopupWithFriendTouchHome() {
          this.playManager.resetLevel();
          this.playManager.node.active = false;
          this.menuManager.node.active = true;
          this.menuManager.showTabHome();
        }

        setWithFriendNoMovesTouchClose() {
          this.playManager.resetLevel();
          this.playManager.node.active = false;
          this.menuManager.node.active = true;
          this.menuManager.showTabHome();
          this.showFriendsPopup();
        }

        setPauseTouchHome() {
          // console.log("setPauseTouchHome");
          this.playManager.resetLevel();
          this.playManager.node.active = false;
          this.menuManager.node.active = true;
          this.menuManager.showTabHome();
        }

        setTournamentPageHostTouchHome() {
          this.playManager.resetLevel();
          this.playManager.node.active = false;
          this.menuManager.node.active = true;
          this.menuManager.showTabHome();
        }

        setBackToHome() {
          // console.log("setBackToHome");
          this.playManager.resetLevel();
          this.playManager.node.active = false;
          this.menuManager.node.active = true;
          this.menuManager.showTabHome();
        }

        setLevelChestsPopup_TouchContinue(rewardCoin) {
          // console.log("setLevelChestsPopup_TouchContinue");
          this.menuManager.node.active = true;
          this.playManager.resetLevel();
          this.playManager.node.active = false;
          this.menuManager.homeGroup.setNextLevel(rewardCoin); // clientEvent.dispatchEvent(Constants.SHOW_ADDCOIN,rewardCoin);
        } //#region DAILY CHALLENGE POPUP


        showDailyChallengePopup() {
          let self = this;

          if (this.dailyChallengePopup) {
            this.dailyChallengePopup.showDailyChallengePopup2();
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("DailyChallengePopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeDailyChallengePopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.dailyChallengePopup = uiPopup.getComponent(_crd && DailyChallengePopup === void 0 ? (_reportPossibleCrUseOfDailyChallengePopup({
                error: Error()
              }), DailyChallengePopup) : DailyChallengePopup);
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
        } //#endregion
        //#region BOX REWARD RECEIVE POPUP


        showBoxRewardReceivePopup(_boxType, _groupRewardDataInfo) {
          let self = this;

          if (this.boxRewardReceivePopup) {
            this.boxRewardReceivePopup.showDailyChallenge_BoxRewardReceivePopup(_boxType, _groupRewardDataInfo);
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("BoxRewardReceivePopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeBoxRewardReceivePopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.boxRewardReceivePopup = uiPopup.getComponent(_crd && BoxRewardReceivePopup === void 0 ? (_reportPossibleCrUseOfBoxRewardReceivePopup({
                error: Error()
              }), BoxRewardReceivePopup) : BoxRewardReceivePopup);
              self.boxRewardReceivePopup.showDailyChallenge_BoxRewardReceivePopup(_boxType, _groupRewardDataInfo);
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region DAILY TASK POPUP


        showDailyTaskPopup(dailyTaskType) {
          let self = this;

          if (this.dailyTaskPopup) {
            this.dailyTaskPopup.showDailyTaskPopup(dailyTaskType);
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("DailyTaskPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeDailyTaskPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.dailyTaskPopup = uiPopup.getComponent(_crd && DailyTaskPopup === void 0 ? (_reportPossibleCrUseOfDailyTaskPopup({
                error: Error()
              }), DailyTaskPopup) : DailyTaskPopup);
              self.dailyTaskPopup.showDailyTaskPopup(dailyTaskType);
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region REWARD RECEIVE POPUP


        showRewardReceivePopup(_title, _groupRewardDataInfo) {
          let self = this;

          if (this.rewardReceivePopup) {
            this.rewardReceivePopup.showRewardReceivePopup(_title, _groupRewardDataInfo);
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("RewardReceivePopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeRewardReceivePopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.rewardReceivePopup = uiPopup.getComponent(_crd && RewardReceivePopup === void 0 ? (_reportPossibleCrUseOfRewardReceivePopup({
                error: Error()
              }), RewardReceivePopup) : RewardReceivePopup);
              self.rewardReceivePopup.showRewardReceivePopup(_title, _groupRewardDataInfo);
              self.hideLoadingPopup();
            });
          }
        } //#endregion


        showEfxFireWorks() {
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playPhaohoa();

          for (let index = 0; index < this.arrEfxFireWorks.length; index++) {
            this.arrEfxFireWorks[index].clear();
            this.arrEfxFireWorks[index].play();
          }
        } //#region LEVEL CHESTS POPUP


        showLevelChestsPopup() {
          let self = this;

          if (this.levelChestsPopup) {
            this.levelChestsPopup.showLevelChestsPopup();
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("LevelChestsPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeLevelChestsPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.levelChestsPopup = uiPopup.getComponent(_crd && LevelChestsPopup === void 0 ? (_reportPossibleCrUseOfLevelChestsPopup({
                error: Error()
              }), LevelChestsPopup) : LevelChestsPopup);
              self.levelChestsPopup.showLevelChestsPopup();
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region REWARD CHESTS POPUP


        showRewardChestsPopup(indexChest, _groupRewardDataInfo) {
          let self = this;

          if (this.rewardChestsPopup) {
            this.rewardChestsPopup.showRewardChestsPopup(indexChest, _groupRewardDataInfo);
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("RewardChestsPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeRewardChestsPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.rewardChestsPopup = uiPopup.getComponent(_crd && RewardChestsPopup === void 0 ? (_reportPossibleCrUseOfRewardChestsPopup({
                error: Error()
              }), RewardChestsPopup) : RewardChestsPopup);
              self.rewardChestsPopup.showRewardChestsPopup(indexChest, _groupRewardDataInfo);
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region THEME UNLOCKED POPUP


        showThemeUnlockedPopup(themeType, itemID) {
          let self = this;

          if (this.themeUnlockedPopup) {
            this.themeUnlockedPopup.showThemeUnlockPopup(themeType, itemID);
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("ThemeUnlockPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeThemeUnlockedPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.themeUnlockedPopup = uiPopup.getComponent(_crd && ThemeUnlockPopup === void 0 ? (_reportPossibleCrUseOfThemeUnlockPopup({
                error: Error()
              }), ThemeUnlockPopup) : ThemeUnlockPopup);
              self.themeUnlockedPopup.showThemeUnlockPopup(themeType, itemID);
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region TOURNAMENT POPUP


        showTournamentPopup(_leaderboardDataInfo) {
          let self = this;

          if (this.tournamentPopup) {
            this.tournamentPopup.showTournamentPopup(_leaderboardDataInfo);
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TournamentPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeTournamentPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.tournamentPopup = uiPopup.getComponent(_crd && TournamentPopup === void 0 ? (_reportPossibleCrUseOfTournamentPopup({
                error: Error()
              }), TournamentPopup) : TournamentPopup);
              self.tournamentPopup.showTournamentPopup(_leaderboardDataInfo);
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region TOURNAMENT QUIT POPUP


        showTournamentQuitPopup() {
          let self = this;

          if (this.tournamentQuitPopup) {
            this.tournamentQuitPopup.showTournamentQuitPopup();
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TournamentQuitPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeTournamentQuitPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.tournamentQuitPopup = uiPopup.getComponent(_crd && TournamentQuitPopup === void 0 ? (_reportPossibleCrUseOfTournamentQuitPopup({
                error: Error()
              }), TournamentQuitPopup) : TournamentQuitPopup);
              self.tournamentQuitPopup.showTournamentQuitPopup();
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region TOURNAMENT RESULT POPUP


        showTournamentResultPopup(indexRank, score) {
          let self = this;

          if (this.tournamentResultPopup) {
            this.tournamentResultPopup.showTournamentResultPopup(indexRank, score);
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TournamentResultPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeTournamentResultPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.tournamentResultPopup = uiPopup.getComponent(_crd && TournamentResultPopup === void 0 ? (_reportPossibleCrUseOfTournamentResultPopup({
                error: Error()
              }), TournamentResultPopup) : TournamentResultPopup);
              self.tournamentResultPopup.showTournamentResultPopup(indexRank, score);
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region TOURNAMENT RESULT POPUP


        showTournamentRevivePopup() {
          let self = this;

          if (this.tournamentRevivePopup) {
            this.tournamentRevivePopup.showTournamentRevivePopup();
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TournamentRevivePopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeTournamentRevivePopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.tournamentRevivePopup = uiPopup.getComponent(_crd && TournamentRevivePopup === void 0 ? (_reportPossibleCrUseOfTournamentRevivePopup({
                error: Error()
              }), TournamentRevivePopup) : TournamentRevivePopup);
              self.tournamentRevivePopup.showTournamentRevivePopup();
              self.hideLoadingPopup();
            });
          }
        }

        setTournamentResultTouchHome() {
          // console.log("setTournamentResultTouchHome");
          (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.resetContext((err, success) => {});
          this.menuManager.node.active = true;
          this.playManager.resetLevel();
          this.playManager.node.active = false;
          this.menuManager.showTabTournament();
        } //#endregion
        //#region SHOP ITEM POPUP


        showShopItemPopup(boosterType) {
          let self = this;

          if (this.shopItemPopup) {
            this.shopItemPopup.showShopItemPopup(boosterType);
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("ShopItemPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeShopItemPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.shopItemPopup = uiPopup.getComponent(_crd && ShopItemPopup === void 0 ? (_reportPossibleCrUseOfShopItemPopup({
                error: Error()
              }), ShopItemPopup) : ShopItemPopup);
              self.shopItemPopup.showShopItemPopup(boosterType);
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region TUBE RACE JOIN POPUP


        showTubeRaceJoinPopup() {
          let self = this;

          if (this.tubeRaceJoinPopup) {
            this.tubeRaceJoinPopup.showTubeRaceJoinPopup();
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TubeRaceJoinPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeTubeRaceJoinPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.tubeRaceJoinPopup = uiPopup.getComponent(_crd && TubeRaceJoinPopup === void 0 ? (_reportPossibleCrUseOfTubeRaceJoinPopup({
                error: Error()
              }), TubeRaceJoinPopup) : TubeRaceJoinPopup);
              self.tubeRaceJoinPopup.showTubeRaceJoinPopup();
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region TUBE RACE POPUP


        showTubeRacePopup(isFinddingOpponent) {
          let self = this;

          if (this.tubeRacePopup) {
            this.tubeRacePopup.showTubeRacePopup(isFinddingOpponent);
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TubeRacePopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeTubeRacePopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.tubeRacePopup = uiPopup.getComponent(_crd && TubeRacePopup === void 0 ? (_reportPossibleCrUseOfTubeRacePopup({
                error: Error()
              }), TubeRacePopup) : TubeRacePopup);
              self.tubeRacePopup.showTubeRacePopup(isFinddingOpponent);
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region TUBE RACE WINPOPUP


        showTubeRaceWinPopup(indexRank) {
          let self = this;

          if (this.tubeRaceWinPopup) {
            this.tubeRaceWinPopup.showTubeRaceWinPopup(indexRank);
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TubeRaceWinPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeTubeRaceWinPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.tubeRaceWinPopup = uiPopup.getComponent(_crd && TubeRaceWinPopup === void 0 ? (_reportPossibleCrUseOfTubeRaceWinPopup({
                error: Error()
              }), TubeRaceWinPopup) : TubeRaceWinPopup);
              self.tubeRaceWinPopup.showTubeRaceWinPopup(indexRank);
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region TUBE RACE LOSE POPUP


        showTubeRaceLosePopup(indexRank) {
          let self = this;

          if (this.tubeRaceLosePopup) {
            this.tubeRaceLosePopup.showTubeRaceLosePopup(indexRank);
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TubeRaceLosePopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeTubeRaceLosePopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.tubeRaceLosePopup = uiPopup.getComponent(_crd && TubeRaceLosePopup === void 0 ? (_reportPossibleCrUseOfTubeRaceLosePopup({
                error: Error()
              }), TubeRaceLosePopup) : TubeRaceLosePopup);
              self.tubeRaceLosePopup.showTubeRaceLosePopup(indexRank);
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region MASSTER PASS POPUP


        showMassterPassPopup() {
          let self = this;

          if (this.massterPassPopup) {
            this.massterPassPopup.showMassterPassPopup();
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("MasterPassPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeMasterPassPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.massterPassPopup = uiPopup.getComponent(_crd && MassterPassPopup === void 0 ? (_reportPossibleCrUseOfMassterPassPopup({
                error: Error()
              }), MassterPassPopup) : MassterPassPopup);
              self.massterPassPopup.showMassterPassPopup();
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region MASSTER PASS POPUP


        showMassterPassActivatePopup() {
          let self = this;

          if (this.massterPassActivatePopup) {
            this.massterPassActivatePopup.showMaterPassDetailPopup();
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("MasterPassDetailPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeMasterPassActivatePopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.massterPassActivatePopup = uiPopup.getComponent(_crd && MasterPassDetailPopup === void 0 ? (_reportPossibleCrUseOfMasterPassDetailPopup({
                error: Error()
              }), MasterPassDetailPopup) : MasterPassDetailPopup);
              self.massterPassActivatePopup.showMaterPassDetailPopup();
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region MASSTER PASS INFO POPUP


        showMassterPassInfoPopup() {
          let self = this;

          if (this.massterPassInfoPopup) {
            this.massterPassInfoPopup.showMasterPassInfoPopup();
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("MasterPassInfoPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeMasterPassInfoPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.massterPassInfoPopup = uiPopup.getComponent(_crd && MasterPassInfoPopup === void 0 ? (_reportPossibleCrUseOfMasterPassInfoPopup({
                error: Error()
              }), MasterPassInfoPopup) : MasterPassInfoPopup);
              self.massterPassInfoPopup.showMasterPassInfoPopup();
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region SPIN POPUP


        showSpinPopup() {
          let self = this;

          if (this.spinPopup) {
            this.spinPopup.showSpinPopup();
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("SpinPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeSpinPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.spinPopup = uiPopup.getComponent(_crd && SpinPopup === void 0 ? (_reportPossibleCrUseOfSpinPopup({
                error: Error()
              }), SpinPopup) : SpinPopup);
              self.spinPopup.showSpinPopup();
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region VIP POPUP


        showVIPPopup() {
          let self = this;

          if (this.vipPopup) {
            this.vipPopup.showPopup();
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("VIPPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeVIPPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.vipPopup = uiPopup.getComponent(_crd && VIPPopup === void 0 ? (_reportPossibleCrUseOfVIPPopup({
                error: Error()
              }), VIPPopup) : VIPPopup);
              self.vipPopup.showPopup();
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region SHARE INFO POPUP


        showShareInfoLevelPopup(level, cb) {
          let self = this;

          if (this.shareInfoPopup) {
            this.shareInfoPopup.showShareInfoLevelPopup(level, base64Image => {
              if (base64Image.length > 0) {
                (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                  error: Error()
                }), FBInstantManager) : FBInstantManager).instance.ShareInfoPlayer(base64Image, () => {
                  cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).FB_CALLBACK_SUCCESS);
                });
              } else {
                cb(new Error("FAIL"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_CALLBACK_FAIL);
              }
            });
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("ShareInfoPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeShareInfoPopup);
              uiPopup.setPosition(new Vec3(-20000, 0, 0));
              self.shareInfoPopup = uiPopup.getComponent(_crd && ShareInfoPopup === void 0 ? (_reportPossibleCrUseOfShareInfoPopup({
                error: Error()
              }), ShareInfoPopup) : ShareInfoPopup);
              self.shareInfoPopup.showShareInfoLevelPopup(level, base64Image => {
                if (base64Image.length > 0) {
                  (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                    error: Error()
                  }), FBInstantManager) : FBInstantManager).instance.ShareInfoPlayer(base64Image, () => {
                    cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).FB_CALLBACK_SUCCESS);
                  });
                } else {
                  cb(new Error("FAIL"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).FB_CALLBACK_FAIL);
                }
              });
              self.hideLoadingPopup();
            });
          }
        }

        showShareInfoScorePopup(score, cb) {
          let self = this;

          if (this.shareInfoPopup) {
            this.shareInfoPopup.showShareInfoScorePopup(score, base64Image => {
              if (base64Image.length > 0) {
                (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                  error: Error()
                }), FBInstantManager) : FBInstantManager).instance.ShareInfoPlayer(base64Image, () => {
                  cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).FB_CALLBACK_SUCCESS);
                });
              } else {
                cb(new Error("FAIL"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_CALLBACK_FAIL);
              }
            });
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("ShareInfoPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeShareInfoPopup);
              uiPopup.setPosition(new Vec3(-20000, 0, 0));
              self.shareInfoPopup = uiPopup.getComponent(_crd && ShareInfoPopup === void 0 ? (_reportPossibleCrUseOfShareInfoPopup({
                error: Error()
              }), ShareInfoPopup) : ShareInfoPopup);
              self.shareInfoPopup.showShareInfoScorePopup(score, base64Image => {
                if (base64Image.length > 0) {
                  (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                    error: Error()
                  }), FBInstantManager) : FBInstantManager).instance.ShareInfoPlayer(base64Image, () => {
                    cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).FB_CALLBACK_SUCCESS);
                  });
                } else {
                  cb(new Error("FAIL"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).FB_CALLBACK_FAIL);
                }
              });
              self.hideLoadingPopup();
            });
          }
        }

        showShareTournamentScorePopup(tittle, score, cb) {
          let self = this;

          if (this.shareInfoPopup) {
            this.shareInfoPopup.showShareTournamentPopup(tittle, score, base64Image => {
              if (base64Image.length > 0) {
                (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                  error: Error()
                }), FBInstantManager) : FBInstantManager).instance.ShareInfoPlayer(base64Image, () => {
                  cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).FB_CALLBACK_SUCCESS);
                });
              } else {
                cb(new Error("FAIL"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_CALLBACK_FAIL);
              }
            });
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("ShareInfoPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeShareInfoPopup);
              uiPopup.setPosition(new Vec3(-20000, 0, 0));
              self.shareInfoPopup = uiPopup.getComponent(_crd && ShareInfoPopup === void 0 ? (_reportPossibleCrUseOfShareInfoPopup({
                error: Error()
              }), ShareInfoPopup) : ShareInfoPopup);
              self.shareInfoPopup.showShareTournamentPopup(tittle, score, base64Image => {
                if (base64Image.length > 0) {
                  (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                    error: Error()
                  }), FBInstantManager) : FBInstantManager).instance.ShareInfoPlayer(base64Image, () => {
                    cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).FB_CALLBACK_SUCCESS);
                  });
                } else {
                  cb(new Error("FAIL"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).FB_CALLBACK_FAIL);
                }
              });
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region SHARE CONTEXT POPUP


        showShareContextPopup(level) {
          let self = this;

          if (this.shareContextPopup) {
            this.shareContextPopup.showShareContextPopup(level, base64Image => {
              if (base64Image.length > 0) {
                (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                  error: Error()
                }), FBInstantManager) : FBInstantManager).instance.UpdateContext(base64Image);
              }
            });
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("ShareContextPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeShareContextPopup);
              uiPopup.setPosition(new Vec3(-20000, 0, 0));
              self.shareContextPopup = uiPopup.getComponent(_crd && ShareContextPopup === void 0 ? (_reportPossibleCrUseOfShareContextPopup({
                error: Error()
              }), ShareContextPopup) : ShareContextPopup);
              self.shareContextPopup.showShareContextPopup(level, base64Image => {
                if (base64Image.length > 0) {
                  (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                    error: Error()
                  }), FBInstantManager) : FBInstantManager).instance.UpdateContext(base64Image);
                }
              });
              self.hideLoadingPopup();
            });
          }
        }

        showInvitePopup(level) {
          let self = this;

          if (this.shareContextPopup) {
            this.shareContextPopup.showShareContextPopup(level, base64Image => {
              if (base64Image.length > 0) {
                (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                  error: Error()
                }), FBInstantManager) : FBInstantManager).instance.inviteFriend_222(base64Image);
              }
            });
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("ShareContextPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeShareContextPopup);
              uiPopup.setPosition(new Vec3(-20000, 0, 0));
              self.shareContextPopup = uiPopup.getComponent(_crd && ShareContextPopup === void 0 ? (_reportPossibleCrUseOfShareContextPopup({
                error: Error()
              }), ShareContextPopup) : ShareContextPopup);
              self.shareContextPopup.showShareContextPopup(level, base64Image => {
                if (base64Image.length > 0) {
                  (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                    error: Error()
                  }), FBInstantManager) : FBInstantManager).instance.inviteFriend_222(base64Image);
                }
              });
              self.hideLoadingPopup();
            });
          }
        }

        showWinWithFriendPopup(_withFriendDataInfo, _score) {
          let self = this;

          if (this.winWithFriendPopup) {
            this.winWithFriendPopup.showWinWithFriendPopup(_withFriendDataInfo, _score);
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("WinWithFriendPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeWinWithFriendPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.winWithFriendPopup = uiPopup.getComponent(_crd && WinWithFriendPopup === void 0 ? (_reportPossibleCrUseOfWinWithFriendPopup({
                error: Error()
              }), WinWithFriendPopup) : WinWithFriendPopup);
              self.winWithFriendPopup.showWinWithFriendPopup(_withFriendDataInfo, _score);
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region UPDATE CONTEXT WITH FRIEND POPUP


        showShareContextWithFriendPopup(cb) {
          let self = this;

          if (this.shareContextWithFriendPopup) {
            this.shareContextWithFriendPopup.showUpdateContextWithFriendPopup((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currWithFriendDataInfo, base64Image => {
              if (base64Image.length > 0) {
                (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                  error: Error()
                }), FBInstantManager) : FBInstantManager).instance.UpdateContext_WithFriend(base64Image, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.currWithFriendDataInfo, cb);
              }
            });
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("ShareContextWithFriendPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeShareContextWithFriendPopup);
              uiPopup.setPosition(new Vec3(-20000, 0, 0));
              self.shareContextWithFriendPopup = uiPopup.getComponent(_crd && ShareContextWithFriendPopup === void 0 ? (_reportPossibleCrUseOfShareContextWithFriendPopup({
                error: Error()
              }), ShareContextWithFriendPopup) : ShareContextWithFriendPopup);
              self.shareContextWithFriendPopup.showUpdateContextWithFriendPopup((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currWithFriendDataInfo, base64Image => {
                if (base64Image.length > 0) {
                  (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                    error: Error()
                  }), FBInstantManager) : FBInstantManager).instance.UpdateContext_WithFriend(base64Image, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.currWithFriendDataInfo, cb);
                }
              });
              self.hideLoadingPopup();
            });
          }
        }

        showShareWithFriendPopup() {
          let self = this;

          if (this.shareContextWithFriendPopup) {
            this.shareContextWithFriendPopup.showUpdateContextWithFriendPopup((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currWithFriendDataInfo, base64Image => {
              if (base64Image.length > 0) {
                (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                  error: Error()
                }), FBInstantManager) : FBInstantManager).instance.ShareInfoPlayer(base64Image, (err, success) => {});
              }
            });
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("UpdateContextWithFriendPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeShareContextWithFriendPopup);
              uiPopup.setPosition(new Vec3(-20000, 0, 0));
              self.shareContextWithFriendPopup = uiPopup.getComponent(_crd && ShareContextWithFriendPopup === void 0 ? (_reportPossibleCrUseOfShareContextWithFriendPopup({
                error: Error()
              }), ShareContextWithFriendPopup) : ShareContextWithFriendPopup);
              self.shareContextWithFriendPopup.showUpdateContextWithFriendPopup((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currWithFriendDataInfo, base64Image => {
                if (base64Image.length > 0) {
                  (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                    error: Error()
                  }), FBInstantManager) : FBInstantManager).instance.ShareInfoPlayer(base64Image, (err, success) => {});
                }
              });
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region FRIENDS POPUP


        showFriendsPopup() {
          let self = this;

          if (this.friendsPopup) {
            this.friendsPopup.showFriendsPopup();
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("FriendsPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeFriendsPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.friendsPopup = uiPopup.getComponent(_crd && FriendsPopup === void 0 ? (_reportPossibleCrUseOfFriendsPopup({
                error: Error()
              }), FriendsPopup) : FriendsPopup);
              self.friendsPopup.showFriendsPopup();
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region QUIT CONFIRM POPUP


        showQuitConfirmPopup() {
          let self = this;

          if (this.quitConfirmPopup) {
            this.quitConfirmPopup.showQuitConfirmPopup();
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("QuitConfirmPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeQuitConfirmPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.quitConfirmPopup = uiPopup.getComponent(_crd && QuitConfirmPopup === void 0 ? (_reportPossibleCrUseOfQuitConfirmPopup({
                error: Error()
              }), QuitConfirmPopup) : QuitConfirmPopup);
              self.quitConfirmPopup.showQuitConfirmPopup();
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region LEVEL FAILED POPUP


        showLevelFailedPopup(value) {
          let self = this;

          if (this.levelFailedPopup) {
            this.levelFailedPopup.showLevelFailedPopup(value);
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("LevelFailedPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeLevelFailedPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.levelFailedPopup = uiPopup.getComponent(_crd && LevelFailedPopup === void 0 ? (_reportPossibleCrUseOfLevelFailedPopup({
                error: Error()
              }), LevelFailedPopup) : LevelFailedPopup);
              self.levelFailedPopup.showLevelFailedPopup(value);
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region MORE LIVES POPUP


        showMoreLivesPopup(cb) {
          let self = this;

          if (this.moreLivesPopup) {
            this.moreLivesPopup.showMoreLivesPopup(cb);
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("MoreLivesPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeMoreLivesPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.moreLivesPopup = uiPopup.getComponent(_crd && MoreLivesPopup === void 0 ? (_reportPossibleCrUseOfMoreLivesPopup({
                error: Error()
              }), MoreLivesPopup) : MoreLivesPopup);
              self.moreLivesPopup.showMoreLivesPopup(cb);
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region TUT CURTAIN POPUP


        showTutCurtainPopup() {
          let self = this;

          if (this.tutCurtainPopup) {
            this.tutCurtainPopup.showTutCurtainPopup();
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TutCurtainPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeTutCurtainPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.tutCurtainPopup = uiPopup.getComponent(_crd && TutCurtainPopup === void 0 ? (_reportPossibleCrUseOfTutCurtainPopup({
                error: Error()
              }), TutCurtainPopup) : TutCurtainPopup);
              self.tutCurtainPopup.showTutCurtainPopup();
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region TUT PLASTER POPUP


        showTutPlasterPopup() {
          let self = this;

          if (this.tutPlasterPopup) {
            this.tutPlasterPopup.showTutPlasterPopup();
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TutPlasterPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeTutPlasterPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.tutPlasterPopup = uiPopup.getComponent(_crd && TutPlasterPopup === void 0 ? (_reportPossibleCrUseOfTutPlasterPopup({
                error: Error()
              }), TutPlasterPopup) : TutPlasterPopup);
              self.tutPlasterPopup.showTutPlasterPopup();
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region TUT CLAY POPUP


        showTutClayPopup() {
          // console.log("showTutClayPopup");
          let self = this;

          if (this.tutClayPopup) {
            this.tutClayPopup.showTutClayPopup();
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TutClayPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeTutClayPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.tutClayPopup = uiPopup.getComponent(_crd && TutClayPopup === void 0 ? (_reportPossibleCrUseOfTutClayPopup({
                error: Error()
              }), TutClayPopup) : TutClayPopup);
              self.tutClayPopup.showTutClayPopup();
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region WIN TOURNAMENT PAGEHOST POPUP


        showWinTournamentPageHostPopup(_score) {
          let self = this;

          if (this.winTournamentPageHostPopup) {
            this.winTournamentPageHostPopup.showWinTournamentPageHostPopup(_score);
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("WinTournamentPageHostPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeWinTournamentPageHostPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.winTournamentPageHostPopup = uiPopup.getComponent(_crd && WinTournamentPageHostPopup === void 0 ? (_reportPossibleCrUseOfWinTournamentPageHostPopup({
                error: Error()
              }), WinTournamentPageHostPopup) : WinTournamentPageHostPopup);
              self.winTournamentPageHostPopup.showWinTournamentPageHostPopup(_score);
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region BLACK FRIDAY POPUP


        showBlackFridayPopup() {
          let self = this;

          if (this.blackFridayPopup) {
            this.blackFridayPopup.showBlackFridayCoinPopup();
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("BlackFridayPopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeBlackFridayPopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.blackFridayPopup = uiPopup.getComponent(_crd && BlackFridayPopup === void 0 ? (_reportPossibleCrUseOfBlackFridayPopup({
                error: Error()
              }), BlackFridayPopup) : BlackFridayPopup);
              self.blackFridayPopup.showBlackFridayCoinPopup();
              self.hideLoadingPopup();
            });
          }
        } //#endregion
        //#region THEME POPUP


        showThemePopup() {
          let self = this;

          if (this.themePopup) {
            this.themePopup.showThemePopup();
          } else {
            this.showLoadingPopup();
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("ThemePopup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeThemePopup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.themePopup = uiPopup.getComponent(_crd && ThemePopup === void 0 ? (_reportPossibleCrUseOfThemePopup({
                error: Error()
              }), ThemePopup) : ThemePopup);
              self.themePopup.showThemePopup();
              self.hideLoadingPopup();
            });
          }
        }

        touchEfx() {// console.log("touchEfx");
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "menuManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playManager", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeEfx", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "loadingPopup", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "loadingAdPopup", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodeWinPopup", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "loadingStartPopup", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "nodeSummerPackPopup", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nodeRemoveAdPackPopup", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "nodeSettingPopup", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "nodePausePopup", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "nodeShopPopup", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "nodeDailyChallengePopup", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "nodeBoxRewardReceivePopup", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "nodeDailyTaskPopup", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "nodeRewardReceivePopup", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "arrEfxFireWorks", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "nodeLevelChestsPopup", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "nodeRewardChestsPopup", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "nodeThemeUnlockedPopup", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "nodeTournamentPopup", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "nodeTournamentQuitPopup", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "nodeTournamentResultPopup", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "nodeTournamentRevivePopup", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "nodeShopItemPopup", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "nodeTubeRaceJoinPopup", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "nodeTubeRacePopup", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "nodeTubeRaceWinPopup", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "nodeTubeRaceLosePopup", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "nodeMasterPassPopup", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "nodeMasterPassActivatePopup", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "nodeMasterPassInfoPopup", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "nodeSpinPopup", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "nodeVIPPopup", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "nodeShareInfoPopup", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "nodeShareContextPopup", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "nodeWinWithFriendPopup", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "nodeShareContextWithFriendPopup", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "nodeFriendsPopup", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "nodeQuitConfirmPopup", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "nodeLevelFailedPopup", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "nodeMoreLivesPopup", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "nodeTutCurtainPopup", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "nodeTutPlasterPopup", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "nodeTutClayPopup", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "nodeWinTournamentPageHostPopup", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "nodeBlackFridayPopup", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "nodeThemePopup", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
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


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PlaySceneManager.js.map