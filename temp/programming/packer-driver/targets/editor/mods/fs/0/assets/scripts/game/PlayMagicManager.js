System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Component, instantiate, Label, Node, Prefab, tween, Vec3, Widget, ItemTube, ButtonBoosterTypeGroup, InfoGroupTournament, InfoGroupWithFriend, BOOSTER_TYPE, Constants, GAME_MODE, GAME_STATE, ITEM_TUBE_STATE, PLAY_TYPE, SCENE_TYPE, WATER_STATE, localConfig, clientEvent, FBInstantManager, Utils, lodash, WellDoneGroup, PGSPlayInstantManager, TutLevelPopup, resourceUtil, AudioManager2, ComboGroup, MagicBIMInfo, MagicBInfo, MagicCInfo, MagicLevelDataInfo, NoMovesGroup, LogEventManager, InfoGroupTournamentPageHost, BackGroundGameManager, PokiSDKManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _temp, _dec29, _class4, _temp2, _crd, ccclass, property, PlayMagicManager, TubeSuggest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItemTube(extras) {
    _reporterNs.report("ItemTube", "./ItemTube", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonBoosterTypeGroup(extras) {
    _reporterNs.report("ButtonBoosterTypeGroup", "./ButtonBoosterTypeGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfoGroupTournament(extras) {
    _reporterNs.report("InfoGroupTournament", "./tournaments/InfoGroupTournament", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfoGroupWithFriend(extras) {
    _reporterNs.report("InfoGroupWithFriend", "./withFriends/InfoGroupWithFriend", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBOOSTER_TYPE(extras) {
    _reporterNs.report("BOOSTER_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGAME_MODE(extras) {
    _reporterNs.report("GAME_MODE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGAME_STATE(extras) {
    _reporterNs.report("GAME_STATE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfITEM_TUBE_STATE(extras) {
    _reporterNs.report("ITEM_TUBE_STATE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPLAY_TYPE(extras) {
    _reporterNs.report("PLAY_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSCENE_TYPE(extras) {
    _reporterNs.report("SCENE_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWATER_STATE(extras) {
    _reporterNs.report("WATER_STATE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "../common/FBInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../core/utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOflodash(extras) {
    _reporterNs.report("lodash", "../framework/lodash", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWellDoneGroup(extras) {
    _reporterNs.report("WellDoneGroup", "../WellDoneGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPGSPlayInstantManager(extras) {
    _reporterNs.report("PGSPlayInstantManager", "../common/PGSPlayInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLeaderboardDataInfo(extras) {
    _reporterNs.report("LeaderboardDataInfo", "../common/LeaderboardDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTutLevelPopup(extras) {
    _reporterNs.report("TutLevelPopup", "./TutLevelPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "../framework/audioManager2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComboGroup(extras) {
    _reporterNs.report("ComboGroup", "./ComboGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMagicBIMInfo(extras) {
    _reporterNs.report("MagicBIMInfo", "../newlevel/MagicLevelDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMagicBInfo(extras) {
    _reporterNs.report("MagicBInfo", "../newlevel/MagicLevelDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMagicCInfo(extras) {
    _reporterNs.report("MagicCInfo", "../newlevel/MagicLevelDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMagicLevelDataInfo(extras) {
    _reporterNs.report("MagicLevelDataInfo", "../newlevel/MagicLevelDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNoMovesGroup(extras) {
    _reporterNs.report("NoMovesGroup", "./NoMovesGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogEventManager(extras) {
    _reporterNs.report("LogEventManager", "../common/LogEventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfoGroupTournamentPageHost(extras) {
    _reporterNs.report("InfoGroupTournamentPageHost", "./tournaments/InfoGroupTournamentPageHost", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBackGroundGameManager(extras) {
    _reporterNs.report("BackGroundGameManager", "./BackGroundGameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPokiSDKManager(extras) {
    _reporterNs.report("PokiSDKManager", "../common/PokiSDKManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      ItemTube = _unresolved_2.ItemTube;
    }, function (_unresolved_3) {
      ButtonBoosterTypeGroup = _unresolved_3.ButtonBoosterTypeGroup;
    }, function (_unresolved_4) {
      InfoGroupTournament = _unresolved_4.InfoGroupTournament;
    }, function (_unresolved_5) {
      InfoGroupWithFriend = _unresolved_5.InfoGroupWithFriend;
    }, function (_unresolved_6) {
      BOOSTER_TYPE = _unresolved_6.BOOSTER_TYPE;
      Constants = _unresolved_6.Constants;
      GAME_MODE = _unresolved_6.GAME_MODE;
      GAME_STATE = _unresolved_6.GAME_STATE;
      ITEM_TUBE_STATE = _unresolved_6.ITEM_TUBE_STATE;
      PLAY_TYPE = _unresolved_6.PLAY_TYPE;
      SCENE_TYPE = _unresolved_6.SCENE_TYPE;
      WATER_STATE = _unresolved_6.WATER_STATE;
    }, function (_unresolved_7) {
      localConfig = _unresolved_7.localConfig;
    }, function (_unresolved_8) {
      clientEvent = _unresolved_8.clientEvent;
    }, function (_unresolved_9) {
      FBInstantManager = _unresolved_9.FBInstantManager;
    }, function (_unresolved_10) {
      Utils = _unresolved_10.default;
    }, function (_unresolved_11) {
      lodash = _unresolved_11.lodash;
    }, function (_unresolved_12) {
      WellDoneGroup = _unresolved_12.WellDoneGroup;
    }, function (_unresolved_13) {
      PGSPlayInstantManager = _unresolved_13.PGSPlayInstantManager;
    }, function (_unresolved_14) {
      TutLevelPopup = _unresolved_14.TutLevelPopup;
    }, function (_unresolved_15) {
      resourceUtil = _unresolved_15.resourceUtil;
    }, function (_unresolved_16) {
      AudioManager2 = _unresolved_16.AudioManager2;
    }, function (_unresolved_17) {
      ComboGroup = _unresolved_17.ComboGroup;
    }, function (_unresolved_18) {
      MagicBIMInfo = _unresolved_18.MagicBIMInfo;
      MagicBInfo = _unresolved_18.MagicBInfo;
      MagicCInfo = _unresolved_18.MagicCInfo;
      MagicLevelDataInfo = _unresolved_18.MagicLevelDataInfo;
    }, function (_unresolved_19) {
      NoMovesGroup = _unresolved_19.NoMovesGroup;
    }, function (_unresolved_20) {
      LogEventManager = _unresolved_20.LogEventManager;
    }, function (_unresolved_21) {
      InfoGroupTournamentPageHost = _unresolved_21.InfoGroupTournamentPageHost;
    }, function (_unresolved_22) {
      BackGroundGameManager = _unresolved_22.BackGroundGameManager;
    }, function (_unresolved_23) {
      PokiSDKManager = _unresolved_23.PokiSDKManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "91a5aPhy5dGJ7WHI1bGiZ+U", "PlayMagicManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = PlayMagicManager
       * DateTime = Fri Apr 18 2025 09:42:25 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = PlayMagicManager.ts
       * FileBasenameNoExtension = PlayMagicManager
       * URL = db://assets/scripts/game/PlayMagicManager.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("PlayMagicManager", PlayMagicManager = (_dec = ccclass('PlayMagicManager'), _dec2 = property(Node), _dec3 = property(Widget), _dec4 = property(_crd && BackGroundGameManager === void 0 ? (_reportPossibleCrUseOfBackGroundGameManager({
        error: Error()
      }), BackGroundGameManager) : BackGroundGameManager), _dec5 = property(Prefab), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(_crd && ButtonBoosterTypeGroup === void 0 ? (_reportPossibleCrUseOfButtonBoosterTypeGroup({
        error: Error()
      }), ButtonBoosterTypeGroup) : ButtonBoosterTypeGroup), _dec10 = property(_crd && ButtonBoosterTypeGroup === void 0 ? (_reportPossibleCrUseOfButtonBoosterTypeGroup({
        error: Error()
      }), ButtonBoosterTypeGroup) : ButtonBoosterTypeGroup), _dec11 = property(_crd && ButtonBoosterTypeGroup === void 0 ? (_reportPossibleCrUseOfButtonBoosterTypeGroup({
        error: Error()
      }), ButtonBoosterTypeGroup) : ButtonBoosterTypeGroup), _dec12 = property(Node), _dec13 = property(Label), _dec14 = property(_crd && InfoGroupTournament === void 0 ? (_reportPossibleCrUseOfInfoGroupTournament({
        error: Error()
      }), InfoGroupTournament) : InfoGroupTournament), _dec15 = property(_crd && InfoGroupTournamentPageHost === void 0 ? (_reportPossibleCrUseOfInfoGroupTournamentPageHost({
        error: Error()
      }), InfoGroupTournamentPageHost) : InfoGroupTournamentPageHost), _dec16 = property(_crd && InfoGroupWithFriend === void 0 ? (_reportPossibleCrUseOfInfoGroupWithFriend({
        error: Error()
      }), InfoGroupWithFriend) : InfoGroupWithFriend), _dec17 = property(Button), _dec18 = property(Button), _dec19 = property(Button), _dec20 = property(_crd && NoMovesGroup === void 0 ? (_reportPossibleCrUseOfNoMovesGroup({
        error: Error()
      }), NoMovesGroup) : NoMovesGroup), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Button), _dec26 = property(_crd && WellDoneGroup === void 0 ? (_reportPossibleCrUseOfWellDoneGroup({
        error: Error()
      }), WellDoneGroup) : WellDoneGroup), _dec27 = property(Node), _dec28 = property(_crd && ComboGroup === void 0 ? (_reportPossibleCrUseOfComboGroup({
        error: Error()
      }), ComboGroup) : ComboGroup), _dec(_class = (_class2 = (_temp = class PlayMagicManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "groupAllTop", _descriptor, this);

          _initializerDefineProperty(this, "groupAllTopWidget", _descriptor2, this);

          _initializerDefineProperty(this, "backGroundGameManager", _descriptor3, this);

          _initializerDefineProperty(this, "tubePrefab", _descriptor4, this);

          _defineProperty(this, "arrItemTubes", []);

          _initializerDefineProperty(this, "groupAllTubes", _descriptor5, this);

          _initializerDefineProperty(this, "lockScene", _descriptor6, this);

          _initializerDefineProperty(this, "boosterGroup", _descriptor7, this);

          _defineProperty(this, "tweenBoosterGroup", null);

          _initializerDefineProperty(this, "btnBoosterUndo", _descriptor8, this);

          _initializerDefineProperty(this, "btnBoosterSuggest", _descriptor9, this);

          _initializerDefineProperty(this, "btnBoosterAddCol", _descriptor10, this);

          _initializerDefineProperty(this, "infoGroupNormal", _descriptor11, this);

          _initializerDefineProperty(this, "txtInfoNormal", _descriptor12, this);

          _initializerDefineProperty(this, "infoGroupTournament", _descriptor13, this);

          _initializerDefineProperty(this, "infoGroupTournamentPageHost", _descriptor14, this);

          _initializerDefineProperty(this, "infoGroupWithFriend", _descriptor15, this);

          _initializerDefineProperty(this, "btnSetting", _descriptor16, this);

          _initializerDefineProperty(this, "btnHome", _descriptor17, this);

          _initializerDefineProperty(this, "btnPause", _descriptor18, this);

          _defineProperty(this, "lastItemTubeSelect", null);

          _defineProperty(this, "isHaveNewTubeDone", false);

          _defineProperty(this, "arrUndo_Infos", []);

          _defineProperty(this, "arrTubeSuggests_Temp", []);

          _initializerDefineProperty(this, "noMovesGroup", _descriptor19, this);

          _initializerDefineProperty(this, "noMovesGroupAllTubes", _descriptor20, this);

          _defineProperty(this, "isShowNoMovesGroup", false);

          _defineProperty(this, "isAddCol", false);

          _initializerDefineProperty(this, "objTut_AddCol", _descriptor21, this);

          _initializerDefineProperty(this, "shuffleGroup", _descriptor22, this);

          _initializerDefineProperty(this, "shuffleGroupAllTubes", _descriptor23, this);

          _initializerDefineProperty(this, "btnShuffleCancel", _descriptor24, this);

          _initializerDefineProperty(this, "wellDoneGroup", _descriptor25, this);

          _initializerDefineProperty(this, "nodeTutLevelPopup", _descriptor26, this);

          _defineProperty(this, "tutLevel", void 0);

          _initializerDefineProperty(this, "comboGroup", _descriptor27, this);
        }

        onEnable() {
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currSceneType = (_crd && SCENE_TYPE === void 0 ? (_reportPossibleCrUseOfSCENE_TYPE({
            error: Error()
          }), SCENE_TYPE) : SCENE_TYPE).GAME;
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUBE_SELECT, this.selectTubeItem, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUBE_MOVEBACK_FINISHED, this.setTubeMoveBack_Finished, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUBE_DONE, this.setTubeDone, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOOSTER_CLICK, this.setBoosterClick, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOURNAMENT_QUIT_YES, this.setTournamentQuit, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOURNAMENT_QUIT_CONTINUE, this.setTournamentContinue, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).WELLDONE_FINISHED, this.setWellDoneFinished, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SETTING_TOUCH_CONTINUE, this.setSettingTouchContinue, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOUCH_NEXT_LEVEL, this.setNextLevel, this);
          this.btnSetting.node.on(Button.EventType.CLICK, this.touchSetting, this); // this.btnReplay.node.on(Button.EventType.CLICK,this.touchReplay,this);

          this.btnHome.node.on(Button.EventType.CLICK, this.touchHome, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOURNAMENT_REVIVE_YES, this.setTournamentReviveYes, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOURNAMENT_REVIVE_NO, this.setTournamentReviveNo, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SET_TOURNAMENT_LOSE, this.setTournamentLose, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOURNAMENT_RESULT_TOUCH_REPLAY, this.setTournamentReplay, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOPITEM_BUYSUCESS, this.setShopItem_BuySuccess, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).WITHFRIEND_TOUCH_REPLAY, this.setWithFriendReplay, this);
          this.btnShuffleCancel.node.on(Button.EventType.CLICK, this.touchShuffleCancel, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHUFFLE_TUBE_FINISHED, this.setShuffleTube_Finished, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).QUITCONFIRM_TOUCH_YES, this.setQuitConfirmTouchYes, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).LEVELFAILED_TOUCH_RETRY, this.touchTryAgain, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).NOMOVES_TOUCH_PLAYON, this.setNoMoves_Touch_PlayOn, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).NOMOVES_TOUCH_GIVEUP, this.setNoMoves_Touch_GiveUp, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).NOMOVES_TOUCH_REPLAY, this.setNoMoves_Touch_Replay, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOURNAMENT_PAGEHOST_TOUCH_REPLAY, this.setTournamentPageHostReplay, this);
          this.initAllTop();
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUBE_SELECT, this.selectTubeItem, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUBE_MOVEBACK_FINISHED, this.setTubeMoveBack_Finished, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUBE_DONE, this.setTubeDone, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOOSTER_CLICK, this.setBoosterClick, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOURNAMENT_QUIT_YES, this.setTournamentQuit, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOURNAMENT_QUIT_CONTINUE, this.setTournamentContinue, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).WELLDONE_FINISHED, this.setWellDoneFinished, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SETTING_TOUCH_CONTINUE, this.setSettingTouchContinue, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOUCH_NEXT_LEVEL, this.setNextLevel, this);
          this.btnSetting.node.off(Button.EventType.CLICK, this.touchSetting, this); // this.btnReplay.node.off(Button.EventType.CLICK,this.touchReplay,this);

          this.btnHome.node.off(Button.EventType.CLICK, this.touchHome, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOURNAMENT_REVIVE_YES, this.setTournamentReviveYes, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOURNAMENT_REVIVE_NO, this.setTournamentReviveNo, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SET_TOURNAMENT_LOSE, this.setTournamentLose, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOURNAMENT_RESULT_TOUCH_REPLAY, this.setTournamentReplay, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOPITEM_BUYSUCESS, this.setShopItem_BuySuccess, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).WITHFRIEND_TOUCH_REPLAY, this.setWithFriendReplay, this);
          this.btnShuffleCancel.node.off(Button.EventType.CLICK, this.touchShuffleCancel, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHUFFLE_TUBE_FINISHED, this.setShuffleTube_Finished, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).QUITCONFIRM_TOUCH_YES, this.setQuitConfirmTouchYes, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).LEVELFAILED_TOUCH_RETRY, this.touchTryAgain, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).NOMOVES_TOUCH_PLAYON, this.setNoMoves_Touch_PlayOn, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).NOMOVES_TOUCH_GIVEUP, this.setNoMoves_Touch_GiveUp, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).NOMOVES_TOUCH_REPLAY, this.setNoMoves_Touch_Replay, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOURNAMENT_PAGEHOST_TOUCH_REPLAY, this.setTournamentPageHostReplay, this);
        }

        start() {// [3]
          // localConfig.instance.currLevel = 9;
          // this.preloadLevel(localConfig.instance.currLevel);
        }

        initAllTop() {
          // let kc_banner:number = 0;
          // if(localConfig.instance.isRemoveAd){
          //     kc_banner = 150;
          // }
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isMobile) {
            let posY = ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.scaleBG - 1) * (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.DEFAULT_H / 2; // console.log("posY:"+posY);

            if (posY <= 0) {
              this.groupAllTopWidget.top = 0;
              return;
            } // this.groupAllTop.setPosition(new Vec3(0,posY + 180,0));


            this.groupAllTopWidget.top = -posY;
          } else {
            this.groupAllTopWidget.top = 0;
          }
        }

        touchSetting() {
          (_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
            error: Error()
          }), PokiSDKManager) : PokiSDKManager).instance.setGameStop();
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("setting", "play");
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.playDurationEndTime = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrTime();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_PAUSE_POPUP); // localConfig.instance.setLevelUnlock(localConfig.instance.currLevel + 1);
          // this.setNextLevel();
          // this.setWin();
        }

        touchReplay() {
          // FBInstantManager.instance.Show_InterstitialAdAsync("play","replay",(err,success)=>{
          //     this.setReplay();
          // });
          (_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
            error: Error()
          }), PokiSDKManager) : PokiSDKManager).instance.Show_InterstitialAdAsync("play", "replay", (err, success) => {
            this.setReplay();
          });
        }

        setWithFriendReplay() {
          this.setReplay();
        }

        touchTryAgain() {
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.playType = (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
            error: Error()
          }), PLAY_TYPE) : PLAY_TYPE).RESTART;
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
          this.setReplay();
        }

        setReplay() {
          (_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
            error: Error()
          }), PokiSDKManager) : PokiSDKManager).instance.setGameStart();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LOADING_START_NOW_POPUP);

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).NORMAL) {
            this.preloadLevel((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevel);
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.playType = (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
              error: Error()
            }), PLAY_TYPE) : PLAY_TYPE).RESTART;
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
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).DAILY_CHALLENGE) {
            let indexDay = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getCountDay_From_Start((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currInfoDaySelect) + 1;
            this.preloadLevelChallenge(indexDay);
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.playType = (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
              error: Error()
            }), PLAY_TYPE) : PLAY_TYPE).RESTART;
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
          } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).WITH_FRIEND) {
            this.preloadLevelwithFriend();
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.playType = (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
              error: Error()
            }), PLAY_TYPE) : PLAY_TYPE).RESTART;
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
          }
        }

        touchHome() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("home", "play");
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.playDurationEndTime = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrTime();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TOURNAMENTQUIT_POPUP);
        }

        resetLevel() {
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currMagicLevelConfigInfo = null;
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.setResetShopItem_Free();

          if (this.tweenBoosterGroup) {
            this.tweenBoosterGroup.stop();
          } // this.btnPause.node.active = false;
          // this.btnReplay.node.active = false;


          this.btnHome.node.active = false;
          this.infoGroupNormal.active = false;
          this.infoGroupTournament.node.active = false;
          this.infoGroupTournamentPageHost.node.active = false;
          this.infoGroupWithFriend.node.active = false;
          this.comboGroup.node.active = false;
          this.boosterGroup.setPosition(new Vec3(0, -686, 0));
          this.arrItemTubes = [];
          this.arrTubeSuggests_Temp = [];
          this.arrUndo_Infos = [];
          this.lastItemTubeSelect = null;
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameState = (_crd && GAME_STATE === void 0 ? (_reportPossibleCrUseOfGAME_STATE({
            error: Error()
          }), GAME_STATE) : GAME_STATE).PRE_START;
          this.wellDoneGroup.node.active = false;
          this.groupAllTubes.destroyAllChildren();
          this.shuffleGroupAllTubes.destroyAllChildren();
          this.shuffleGroup.active = false;
          this.noMovesGroupAllTubes.destroyAllChildren();
          this.noMovesGroup.node.active = false;
          this.hideTutAddCol();
          this.isAddCol = false;
          this.btnBoosterAddCol.setBoosterAvailable(true);
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isWaterLock = false;
          this.isShowNoMovesGroup = false;
          this.resetTut();
        }

        preloadLevel(indexLevel) {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logCurrentMode("normal");
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode = (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).NORMAL;
          this.resetLevel();
          this.backGroundGameManager.hideTournamentPageHostBG();
          this.groupAllTubes.setPosition(new Vec3(0, 120, 0));
          this.shuffleGroupAllTubes.setPosition(new Vec3(0, 120, 0));
          this.noMovesGroupAllTubes.setPosition(new Vec3(0, 120, 0)); // if(indexLevel <= localConfig.instance.LEVEL_SHOW_HOME){
          //     // this.btnReplay.node.active = false;
          //     this.btnPause.node.active = false;
          // }else{
          //     // this.btnReplay.node.active = true;
          //     this.btnPause.node.active = true;
          // }

          this.txtInfoNormal.string = `Level ${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).formatNumber((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevel)}`;
          this.infoGroupNormal.active = true;
          this.lockScene.active = true;
          let levelLoadData = indexLevel;
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelConfigInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getMagicLevelConfigInfo_byLevelIndex(levelLoadData);
          let indexSeed = 0;

          if (levelLoadData > 4) {
            indexSeed = (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).random(0, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevelConfigInfo.seeds.length - 1);
          } // indexSeed = 4;
          // console.log(indexSeed);
          // indexSeed = 4;


          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getJsonData_Promise("levelnew2/" + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelConfigInfo.seeds[indexSeed], (err, content) => {
            // console.log(content);
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currMagicLevelConfigInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getMagicLevelConfigInfo((_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).cloneDeep(content)); // console.log(localConfig.instance.currMagicLevelConfigInfo);

            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setMagicMappingColorIndex((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currMagicLevelConfigInfo);
            this.initLevel();
          }); // console.log(indexLevel);
          // if(indexLevel % 10 == 0){
          //     localConfig.instance.isWaterLock = true;
          // }else{
          //     localConfig.instance.isWaterLock = false;
          // }
          // this.initLevel();
        }

        preloadLevelChallenge(indexLevelChallenge) {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logCurrentMode("daily_challenge");
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode = (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).DAILY_CHALLENGE;
          this.resetLevel();
          this.backGroundGameManager.hideTournamentPageHostBG();
          this.groupAllTubes.setPosition(new Vec3(0, 120, 0));
          this.shuffleGroupAllTubes.setPosition(new Vec3(0, 120, 0)); // this.btnReplay.node.active = true;
          // this.btnPause.node.active = true;

          this.txtInfoNormal.string = `${(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getInfoDayStr_2((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currInfoDaySelect)}`;
          this.infoGroupNormal.active = true;
          this.lockScene.active = true;
          let levelLoadData = indexLevelChallenge;

          if (levelLoadData >= 150) {
            levelLoadData = levelLoadData % 150;
          }

          levelLoadData = levelLoadData + 30; // console.log("preloadLevelChallenge",levelLoadData);

          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelConfigInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getMagicLevelConfigInfo_byLevelIndex(levelLoadData);
          let indexSeed = 0;
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getJsonData_Promise("levelnew2/" + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelConfigInfo.seeds[indexSeed], (err, content) => {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currMagicLevelConfigInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getMagicLevelConfigInfo((_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).cloneDeep(content)); // console.log(localConfig.instance.currMagicLevelConfigInfo);

            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setMagicMappingColorIndex((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currMagicLevelConfigInfo);
            this.initLevel();
          });
        }

        preloadLevelTournament() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logCurrentMode("tournament");
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode = (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).TOURNAMENT;
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isTournamentRevivebyAd = false;
          this.resetLevel();
          this.backGroundGameManager.hideTournamentPageHostBG();
          this.groupAllTubes.setPosition(new Vec3(0, 60, 0));
          this.shuffleGroupAllTubes.setPosition(new Vec3(0, 60, 0));
          this.noMovesGroupAllTubes.setPosition(new Vec3(0, 60, 0));
          this.btnHome.node.active = true; // this.btnPause.node.active = true;

          this.lockScene.active = true;
          this.infoGroupTournament.node.active = true;
          this.infoGroupTournament.initGroup();
          this.comboGroup.node.active = true;
          this.comboGroup.init();
          let levelLoadData = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelStartTournament + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currIndexLevelTournament;

          if (levelLoadData >= 150) {
            levelLoadData = levelLoadData % 150 + 30;
          }

          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelConfigInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getMagicLevelConfigInfo_byLevelIndex(levelLoadData);
          let indexSeed = 0;

          if (levelLoadData > 4) {
            indexSeed = (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).random(0, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevelConfigInfo.seeds.length - 1);
          }

          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getJsonData_Promise("levelnew2/" + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelConfigInfo.seeds[indexSeed], (err, content) => {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currMagicLevelConfigInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getMagicLevelConfigInfo((_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).cloneDeep(content)); // console.log(localConfig.instance.currMagicLevelConfigInfo);

            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setMagicMappingColorIndex((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currMagicLevelConfigInfo);
            this.initLevel();
          });
        }

        preloadLevelTournamentPageHost() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logCurrentMode("tournament_pagehost");
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode = (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).TOURNAMENT_PAGEHOST;
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isTournamentRevivebyAd = false;
          this.resetLevel();
          this.backGroundGameManager.showTournamentPageHostBG();
          this.groupAllTubes.setPosition(new Vec3(0, 60, 0));
          this.shuffleGroupAllTubes.setPosition(new Vec3(0, 60, 0));
          this.noMovesGroupAllTubes.setPosition(new Vec3(0, 60, 0)); //this.btnHome.node.active = true;

          this.btnPause.node.active = true;
          this.lockScene.active = true;
          this.infoGroupTournamentPageHost.node.active = true;
          this.infoGroupTournamentPageHost.initGroup();
          this.comboGroup.node.active = true;
          this.comboGroup.init();
          let levelLoadData = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currTournamentPageHostDataInfo.levelIndex;

          if (levelLoadData >= 150) {
            levelLoadData = levelLoadData % 150 + 30;
          }

          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelConfigInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getMagicLevelConfigInfo_byLevelIndex(levelLoadData);
          let indexSeed = 0;

          if (levelLoadData > 4) {
            indexSeed = (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).random(0, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevelConfigInfo.seeds.length - 1);
          }

          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getJsonData_Promise("levelnew2/" + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelConfigInfo.seeds[indexSeed], (err, content) => {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currMagicLevelConfigInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getMagicLevelConfigInfo((_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).cloneDeep(content)); // console.log(localConfig.instance.currMagicLevelConfigInfo);

            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setMagicMappingColorIndex((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currMagicLevelConfigInfo);
            this.initLevel();
          });
        }

        setWithFriendPlayStart() {}

        preloadLevelwithFriend() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logCurrentMode("with_friend");
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode = (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).WITH_FRIEND;
          this.resetLevel();
          this.infoGroupWithFriend.resetScore();
          this.groupAllTubes.setPosition(new Vec3(0, 60, 0));
          this.shuffleGroupAllTubes.setPosition(new Vec3(0, 60, 0));
          this.noMovesGroupAllTubes.setPosition(new Vec3(0, 60, 0)); // this.btnReplay.node.active = true;
          // this.btnPause.node.active = true;

          this.lockScene.active = true;
          this.infoGroupWithFriend.node.active = true;
          this.infoGroupWithFriend.initWithFriendGroup((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currWithFriendDataInfo);
          this.comboGroup.node.active = true;
          this.comboGroup.init();
          let levelLoadData = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currWithFriendDataInfo.levelIndex;

          if (levelLoadData >= 150) {
            levelLoadData = levelLoadData % 150;
          }

          levelLoadData = levelLoadData + 30;
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelConfigInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getMagicLevelConfigInfo_byLevelIndex(levelLoadData);
          let indexSeed = 0;
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getJsonData_Promise("levelnew2/" + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelConfigInfo.seeds[indexSeed], (err, content) => {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currMagicLevelConfigInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getMagicLevelConfigInfo((_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).cloneDeep(content)); // console.log(localConfig.instance.currMagicLevelConfigInfo);

            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setMagicMappingColorIndex((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currMagicLevelConfigInfo);
            this.initLevel();
          });
        }

        initLevel() {
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isNoMoves_AddCol_byAD = false;
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.playDurationStartTime = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrTime();
          this.showButtonBoosterUndo_Available();
          this.showButtonBoosterAddCol_Available();
          this.setShowButtonBooster();
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.initPos_byMagicLevelDataInfo((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currMagicLevelConfigInfo);
          this.groupAllTubes.setScale(new Vec3((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.scaleTube, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.scaleTube, 1));
          this.shuffleGroupAllTubes.setScale(new Vec3((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.scaleTube, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.scaleTube, 1));
          this.noMovesGroupAllTubes.setScale(new Vec3((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.scaleTube, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.scaleTube, 1));
          this.initAllTubes();
          this.initTutorials();
          this.lockScene.active = false;
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).HIDE_LOADING_START_POPUP);
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameState = (_crd && GAME_STATE === void 0 ? (_reportPossibleCrUseOfGAME_STATE({
            error: Error()
          }), GAME_STATE) : GAME_STATE).PLAY;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).TOURNAMENT) {
            this.infoGroupTournament.setStartCountDown();
          } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).WITH_FRIEND) {} // this.addUndo_Info();

        }

        initAllTubes() {
          for (let i = 0; i < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currMagicLevelConfigInfo.B.length; i++) {
            let item = instantiate(this.tubePrefab);
            item.setParent(this.groupAllTubes);
            let itemTube = item.getComponent(_crd && ItemTube === void 0 ? (_reportPossibleCrUseOfItemTube({
              error: Error()
            }), ItemTube) : ItemTube);
            let indexX = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currMagicLevelConfigInfo.B[i].indexX;
            let indexY = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currMagicLevelConfigInfo.B[i].indexY;
            let arrIndexColors = [];
            let arrWaterVisibles = [];
            let magicBInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currMagicLevelConfigInfo.B[i];

            for (let j = 0; j < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currMagicLevelConfigInfo.B[i].C.length; j++) {
              if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currMagicLevelConfigInfo.B[i].C[j].BIM) {
                arrIndexColors.push((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.currMagicLevelConfigInfo.B[i].C[j].BIM.CI);

                if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.currMagicLevelConfigInfo.B[i].C[j].BIM.V) {
                  arrWaterVisibles.push((_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
                    error: Error()
                  }), WATER_STATE) : WATER_STATE).NONE);
                } else {
                  arrWaterVisibles.push((_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
                    error: Error()
                  }), WATER_STATE) : WATER_STATE).LOCK);
                }
              }
            } // console.log(indexX,indexY,arrIndexColors,arrWaterVisibles);


            itemTube.initMagicItemTube(magicBInfo, indexX, indexY, arrIndexColors, arrWaterVisibles);
            this.arrItemTubes.push(itemTube);
          }
        }

        selectTubeItem(itemTube) {
          this.isHaveNewTubeDone = false;

          if (!(_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
            error: Error()
          }), PokiSDKManager) : PokiSDKManager).instance.isFirstUserInteraction) {
            (_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
              error: Error()
            }), PokiSDKManager) : PokiSDKManager).instance.isFirstUserInteraction = true;
            (_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
              error: Error()
            }), PokiSDKManager) : PokiSDKManager).instance.setGameStart();
          }

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameState == (_crd && GAME_STATE === void 0 ? (_reportPossibleCrUseOfGAME_STATE({
            error: Error()
          }), GAME_STATE) : GAME_STATE).PRE_START) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currGameState = (_crd && GAME_STATE === void 0 ? (_reportPossibleCrUseOfGAME_STATE({
              error: Error()
            }), GAME_STATE) : GAME_STATE).PLAY;
          }

          if (itemTube.isTubeClay) {
            if (this.lastItemTubeSelect == null) return;
          }

          if (itemTube.currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).DONE) {
            return;
          }

          if (itemTube.currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).SELECT) {
            itemTube.setUnselect_ItemTube(true);

            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
              error: Error()
            }), GAME_MODE) : GAME_MODE).NORMAL) {
              if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currLevel == 2) {
                this.checkLevel2_TutTubes_HideTut();
              }
            } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
              error: Error()
            }), GAME_MODE) : GAME_MODE).TOURNAMENT) {
              if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currIndexLevelTournament + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currLevelStartTournament == 2) {
                this.checkLevel2_TutTubes_HideTut();
              }
            }

            this.lastItemTubeSelect = null;
            return;
          }

          if (itemTube.checkTube_None()) {
            if (this.lastItemTubeSelect == null) {
              itemTube.setSelectTube_Fail();
              return;
            }
          }

          if (itemTube.currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).ON) {
            // console.log(this.lastItemTubeSelect);
            if (this.lastItemTubeSelect == null) return;
          }

          if (this.lastItemTubeSelect == null) {
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
              error: Error()
            }), GAME_MODE) : GAME_MODE).NORMAL) {
              if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currLevel == 1) {
                this.hideTutLevel1_Step1();
              }
            } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
              error: Error()
            }), GAME_MODE) : GAME_MODE).TOURNAMENT) {
              if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currIndexLevelTournament + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currLevelStartTournament == 1) {
                this.hideTutLevel1_Step1();
              }
            }

            this.lastItemTubeSelect = itemTube;
            this.lastItemTubeSelect.setSelect_ItemTube();
            this.lastItemTubeSelect.node.setSiblingIndex(999);

            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
              error: Error()
            }), GAME_MODE) : GAME_MODE).NORMAL) {
              if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currLevel == 2) {
                this.checkTutLevel2_TutTubes(this.lastItemTubeSelect.tubeX);
              }
            } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
              error: Error()
            }), GAME_MODE) : GAME_MODE).TOURNAMENT) {
              if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currIndexLevelTournament + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currLevelStartTournament == 2) {
                this.checkTutLevel2_TutTubes(this.lastItemTubeSelect.tubeX);
              }
            }
          } else {
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
              error: Error()
            }), GAME_MODE) : GAME_MODE).NORMAL) {
              if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currLevel == 1) {
                this.hideTutLevel1_Step2();
              }
            } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
              error: Error()
            }), GAME_MODE) : GAME_MODE).TOURNAMENT) {
              if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currIndexLevelTournament + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currLevelStartTournament == 1) {
                this.hideTutLevel1_Step2();
              }
            }

            let countTubeTarget_ItemWater_Avaliable = itemTube.getCount_ItemWater_Available();

            if (countTubeTarget_ItemWater_Avaliable < 4 && (this.lastItemTubeSelect.getHeadIndexColor() == itemTube.getHeadIndexColor() || countTubeTarget_ItemWater_Avaliable == 0)) {
              this.unschedule(this.scheduleCheckNoMoves);
              this.addUndo_Info();
              let isRight = true;

              if (itemTube.node.position.x < 0) {
                isRight = false;
              }

              let isAddScore = true;
              let isCombo = true;
              let countItem_Available = this.lastItemTubeSelect.getCountItemWater_SameHeadIndexColor();
              let countItem_ON_Available = itemTube.getCountItemWater_ON_Available();

              if (countItem_Available > countItem_ON_Available) {
                countItem_Available = countItem_ON_Available;
                isAddScore = false;
              }

              if (!itemTube.checkAllItemWater_SameIndexColor()) {
                // isAddScore = false;
                isCombo = false;
              }

              if (itemTube.checkTube_None()) {
                if (this.lastItemTubeSelect.checkAllItemWater_SameIndexColor()) {
                  isAddScore = false;
                  isCombo = false;
                }
              } // if(localConfig.instance.isWaterLock){
              //     countItem_Available = 1;
              // }


              itemTube.updateMagicHeadColorIndex_Now(countTubeTarget_ItemWater_Avaliable, this.lastItemTubeSelect.getHeadIndexColor(), countItem_Available); // itemTube.currState = ITEM_TUBE_STATE.ON;

              let countTubeLast_ItemWater_Avaiable = this.lastItemTubeSelect.getCount_ItemWater_Available();
              let indexStep = 4 - countTubeLast_ItemWater_Avaiable; // console.log("indexStep",indexStep);

              let posTube = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getMagicPosTube_byXY((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currMagicLevelConfigInfo, itemTube.tubeX, itemTube.tubeY);
              let posLastTube = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getMagicPosTube_byXY((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currMagicLevelConfigInfo, this.lastItemTubeSelect.tubeX, this.lastItemTubeSelect.tubeY);
              let posTarget = new Vec3(posTube.x - posLastTube.x, posTube.y + 282 - posLastTube.y, 0); // console.log(posTarget);

              let indexStepON = countTubeTarget_ItemWater_Avaliable; // console.log("countItem_Available:"+countItem_Available);

              this.lastItemTubeSelect.setStartWaterOFF(itemTube, indexStep, posTarget, isRight, indexStepON, countItem_Available - 1);
              this.lastItemTubeSelect.node.setSiblingIndex(999);
              itemTube.setItemTube_beSelected();
              this.lastItemTubeSelect = null;
              this.setHideButtonBooster();

              if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
                error: Error()
              }), GAME_MODE) : GAME_MODE).NORMAL) {
                if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.currLevel == 2) {
                  this.checkLevel2_TutTubes_HideTut();
                }
              } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
                error: Error()
              }), GAME_MODE) : GAME_MODE).TOURNAMENT) {
                if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.currIndexLevelTournament + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.currLevelStartTournament == 2) {
                  this.checkLevel2_TutTubes_HideTut();
                }
              }

              if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
                error: Error()
              }), GAME_MODE) : GAME_MODE).TOURNAMENT) {
                if (isCombo) {
                  this.addCombo(0.8 * countItem_Available + 0.6);
                }

                if (isAddScore) {
                  this.scheduleOnce(() => {
                    let scoreValue = 10 * this.comboGroup.getComboValue();
                    this.infoGroupTournament.setAddScore(scoreValue);
                  }, 0.8 * countItem_Available + 0.6);
                }
              } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
                error: Error()
              }), GAME_MODE) : GAME_MODE).TOURNAMENT_PAGEHOST) {
                if (isCombo) {
                  this.addCombo(0.8 * countItem_Available + 0.6);
                }

                if (isAddScore) {
                  this.scheduleOnce(() => {
                    let scoreValue = 10 * this.comboGroup.getComboValue();
                    this.infoGroupTournamentPageHost.setAddScore(scoreValue);
                  }, 0.8 * countItem_Available + 0.6);
                }
              } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
                error: Error()
              }), GAME_MODE) : GAME_MODE).WITH_FRIEND) {
                if (isCombo) {
                  this.addCombo(0.8 * countItem_Available + 0.6);
                }

                if (isAddScore) {
                  this.scheduleOnce(() => {
                    let scoreValue = 10 * this.comboGroup.getComboValue();
                    this.infoGroupWithFriend.setAddScore(scoreValue);
                  }, 0.8 * countItem_Available + 0.6);
                }
              }
            } else {
              if (itemTube.currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
                error: Error()
              }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).ON || itemTube.currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
                error: Error()
              }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).WAITTING) {
                this.lastItemTubeSelect.setUnselect_ItemTube(false);
                this.lastItemTubeSelect = null;
              } else {
                this.lastItemTubeSelect.setUnselect_ItemTube(false);
                this.lastItemTubeSelect = itemTube;

                if (itemTube.isTubeClay) {
                  this.lastItemTubeSelect = null;
                  return;
                } else {
                  this.lastItemTubeSelect.setSelect_ItemTube();
                  this.lastItemTubeSelect.node.setSiblingIndex(999);
                }
              }

              if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
                error: Error()
              }), GAME_MODE) : GAME_MODE).NORMAL) {
                if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.currLevel == 2) {
                  this.checkLevel2_TutTubes_HideTut();
                }
              } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
                error: Error()
              }), GAME_MODE) : GAME_MODE).TOURNAMENT) {
                if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.currIndexLevelTournament + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.currLevelStartTournament == 2) {
                  this.checkLevel2_TutTubes_HideTut();
                }
              }
            }
          }
        }

        setTubeMoveBack_Finished() {
          this.unschedule(this.scheduleCheckNoMoves); // console.log("setTubeMoveBack_Finished");

          let isShowButtonBooster = true;

          for (let i = 0; i < this.arrItemTubes.length; i++) {
            if (this.arrItemTubes[i].currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
              error: Error()
            }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).OFF) {
              isShowButtonBooster = false;
            }
          } // this.addUndo_Info();


          if (isShowButtonBooster) {
            this.setShowButtonBooster();

            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currGameState == (_crd && GAME_STATE === void 0 ? (_reportPossibleCrUseOfGAME_STATE({
              error: Error()
            }), GAME_STATE) : GAME_STATE).PLAY) {
              if (!this.checkWinAvaiable()) {
                this.schedule(this.scheduleCheckNoMoves, 0, 1, 2);
              }
            }
          }
        }

        scheduleCheckNoMoves() {
          // console.log("scheduleCheckNoMoves");
          if (this.checkNoMoves()) {
            this.showNoMovesGroup();
          }
        } //#region END GAME


        setTubeDone(posBottleFinished) {
          this.isHaveNewTubeDone = true; // console.log("---------------------------setTubeDone-------------------------");

          this.unschedule(this.scheduleCheckNoMoves);

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).TOURNAMENT) {
            let scoreValue = 100 * this.comboGroup.getComboValue();
            this.infoGroupTournament.setAddScore(scoreValue);
          } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).WITH_FRIEND) {
            let scoreValue = 100 * this.comboGroup.getComboValue();
            this.infoGroupWithFriend.setAddScore(scoreValue);
          }

          this.resetUndo();
          this.checkFinishedGame_2(1);
        }

        checkFinishedGame_2(timeCheckDelay) {
          this.scheduleOnce(() => {
            // console.log("checkFinishedGamecheckFinishedGame");
            let isWin = true;

            for (let i = 0; i < this.arrItemTubes.length; i++) {
              // console.log(this.arrBottles[i]);
              if (!this.arrItemTubes[i].checkTube_Done()) {
                // console.log("IS DONE === FALSE:"+i);
                isWin = false;
                break;
              }
            }

            if (isWin) {
              this.setWin();
            }
          }, timeCheckDelay);
        }

        checkWinAvaiable() {
          let isWin = true;

          for (let i = 0; i < this.arrItemTubes.length; i++) {
            // console.log(this.arrBottles[i]);
            if (!this.arrItemTubes[i].checkTube_Done()) {
              // console.log("IS DONE === FALSE:"+i);
              isWin = false;
              break;
            }
          }

          return isWin;
        } //#endregion
        //#region BOOSTER


        setShowButtonBooster() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).NORMAL) {
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevel < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.TUTORIAL_LEVEL_SHOW_BOOSTER) {
              this.btnBoosterUndo.node.active = false;
              this.btnBoosterSuggest.node.active = false;
              this.btnBoosterAddCol.node.active = false;
            } else {
              this.btnBoosterUndo.node.active = true;
              this.btnBoosterSuggest.node.active = true;
              this.btnBoosterAddCol.node.active = true;
            }
          } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).TOURNAMENT) {
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevelStartTournament + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currIndexLevelTournament < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.TUTORIAL_LEVEL_SHOW_BOOSTER) {
              this.btnBoosterUndo.node.active = false;
              this.btnBoosterSuggest.node.active = false;
              this.btnBoosterAddCol.node.active = false;
            } else {
              this.btnBoosterUndo.node.active = true;
              this.btnBoosterSuggest.node.active = true;
              this.btnBoosterAddCol.node.active = true;
            }
          } else {
            this.btnBoosterUndo.node.active = true;
            this.btnBoosterSuggest.node.active = true;
            this.btnBoosterAddCol.node.active = true;
          }
        }

        setHideButtonBooster() {
          this.btnBoosterUndo.node.active = false;
          this.btnBoosterSuggest.node.active = false;
          this.btnBoosterAddCol.node.active = false;
        }

        setBoosterClick(boosterType, isTutorial) {
          let boosterCount = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getBoosterCount(boosterType);

          if (boosterCount > 0 || isTutorial) {
            this.setUseBooster(boosterType);
          } else {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_SHOP_ITEM_POPUP, boosterType);
          }
        }

        setUseBooster(boosterType) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).TOURNAMENT) {
            this.resetCombo();
          } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).WITH_FRIEND) {
            this.resetCombo();
          }

          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.setDailyQuest_UseBooster();
          let boosterCount = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getBoosterCount(boosterType);

          if (boosterType == (_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
            error: Error()
          }), BOOSTER_TYPE) : BOOSTER_TYPE).UNDO) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setBoosterCount(boosterType, boosterCount - 1);
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logResourceSpend("booster", "undo", 1, "play", "use");
            this.setUseBooster_Undo();
            this.hideTutAddCol();
          } else if (boosterType == (_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
            error: Error()
          }), BOOSTER_TYPE) : BOOSTER_TYPE).SUGGEST) {
            // if(localConfig.instance.currGameMode == GAME_MODE.NORMAL){
            //     if(localConfig.instance.currLevel == 5 && !localConfig.instance.isTutLevel5){
            //         this.setTutLevel5_Finished();
            //     }
            // }
            // this.arrTubeSuggests_Temp = this.findAll_Suggest_Available();
            // if(this.arrTubeSuggests_Temp.length > 0){
            //     localConfig.instance.setBoosterCount(boosterType,boosterCount - 1);
            //     this.setUseBooster_Suggest();
            // }else{
            //     console.error("NO MOVE!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            //     clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION,"No more possible moves!");
            //     if(!this.isAddCol){
            //         this.showTutAddCol();
            //     }
            // }
            this.showShuffleGroup();
          } else if (boosterType == (_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
            error: Error()
          }), BOOSTER_TYPE) : BOOSTER_TYPE).ADDCOL) {
            // if(!this.isAddCol){
            // this.isAddCol = true;
            // this.btnBoosterAddCol.setBoosterAvailable(false);
            this.hideTutAddCol();
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setBoosterCount(boosterType, boosterCount - 1);
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logResourceSpend("booster", "addcol", 1, "play", "use");
            this.setUseBooster_AddCol(); // }
          }
        }

        setShopItem_BuySuccess(boosterType) {
          this.setUseBooster(boosterType);
        } //#endregion
        //#region UNDO


        setUseBooster_Undo() {
          if (this.lastItemTubeSelect != null) {
            this.lastItemTubeSelect.setUnselect_ItemTube_Now_ResetPos();
            this.lastItemTubeSelect = null;
          }

          if (this.arrUndo_Infos.length > 0) {
            let undoLevelDataInfo = this.arrUndo_Infos[this.arrUndo_Infos.length - 1];

            for (let i = 0; i < undoLevelDataInfo.B.length; i++) {
              let arrIndexColors = [];
              let arrWaterVisibles = [];

              for (let j = 0; j < undoLevelDataInfo.B[i].C.length; j++) {
                if (undoLevelDataInfo.B[i].C[j].BIM) {
                  arrIndexColors.push(undoLevelDataInfo.B[i].C[j].BIM.CI);

                  if (undoLevelDataInfo.B[i].C[j].BIM.V) {
                    arrWaterVisibles.push((_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
                      error: Error()
                    }), WATER_STATE) : WATER_STATE).NONE);
                  } else {
                    arrWaterVisibles.push((_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
                      error: Error()
                    }), WATER_STATE) : WATER_STATE).LOCK);
                  }
                }
              }

              this.arrItemTubes[i].setUndoMagic(arrIndexColors, arrWaterVisibles);
            }

            this.arrUndo_Infos.splice(this.arrUndo_Infos.length - 1, 1);
            this.showButtonBoosterUndo_Available();
          }
        }

        showButtonBoosterUndo_Available() {
          this.btnBoosterUndo.setBoosterAvailable(this.arrUndo_Infos.length > 0);
        }

        addUndo_Info() {
          let levelDataInfo = new (_crd && MagicLevelDataInfo === void 0 ? (_reportPossibleCrUseOfMagicLevelDataInfo({
            error: Error()
          }), MagicLevelDataInfo) : MagicLevelDataInfo)();

          for (let i = 0; i < this.arrItemTubes.length; i++) {
            let itemTube = this.arrItemTubes[i];

            if (this.arrItemTubes[i].currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
              error: Error()
            }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).ON || this.arrItemTubes[i].currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
              error: Error()
            }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).OFF || this.arrItemTubes[i].currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
              error: Error()
            }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).WAITTING) {
              return;
            }

            let magicBInfo = new (_crd && MagicBInfo === void 0 ? (_reportPossibleCrUseOfMagicBInfo({
              error: Error()
            }), MagicBInfo) : MagicBInfo)();
            magicBInfo.indexX = this.arrItemTubes[i].tubeX;
            magicBInfo.indexY = this.arrItemTubes[i].tubeY;

            if (itemTube.magicBInfo && itemTube.magicBInfo.OBIM && itemTube.magicBInfo.OBIM.length > 0) {
              magicBInfo.OBIM = itemTube.magicBInfo.OBIM;
            }

            magicBInfo.C = [];

            for (let j = 0; j < 4; j++) {
              let magicCInfo = new (_crd && MagicCInfo === void 0 ? (_reportPossibleCrUseOfMagicCInfo({
                error: Error()
              }), MagicCInfo) : MagicCInfo)();
              magicCInfo.BIM = new (_crd && MagicBIMInfo === void 0 ? (_reportPossibleCrUseOfMagicBIMInfo({
                error: Error()
              }), MagicBIMInfo) : MagicBIMInfo)();
              magicCInfo.BIM.CI = itemTube.arrItemWaters[j].indexColor;
              magicCInfo.BIM.V = itemTube.arrItemWaters[j].waterState == (_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
                error: Error()
              }), WATER_STATE) : WATER_STATE).NONE ? true : false;
              magicBInfo.C.push(magicCInfo);
            }

            levelDataInfo.B.push(magicBInfo);
          } // console.log("addUndo_Info",levelDataInfo);


          this.arrUndo_Infos.push(levelDataInfo);
          this.showButtonBoosterUndo_Available();
        }

        resetUndo() {
          this.arrUndo_Infos = [];
          this.showButtonBoosterUndo_Available();
        } //#endregion
        //#region SUGGEST


        setUseBooster_Suggest() {
          // console.log("setUseBooster_Suggest",this.lastItemTubeSelect);
          if (this.lastItemTubeSelect != null) {
            this.lastItemTubeSelect.setUnselect_ItemTube_Now_ResetPos();
            this.lastItemTubeSelect = null;
          }

          this.arrTubeSuggests_Temp.sort((a, b) => b.expecte_value - a.expecte_value);
          let arrTubeSuggests = [];
          arrTubeSuggests.push(this.arrTubeSuggests_Temp[0]);

          for (let i = 1; i < this.arrTubeSuggests_Temp.length; i++) {
            if (this.arrTubeSuggests_Temp[i].expecte_value == arrTubeSuggests[0].expecte_value) {
              arrTubeSuggests.push(this.arrTubeSuggests_Temp[i]);
            }
          }

          let tubeSuggest = arrTubeSuggests[(_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
            error: Error()
          }), lodash) : lodash).random(0, arrTubeSuggests.length)];
          let tube1 = this.arrItemTubes[tubeSuggest.tube_index_1];
          let tube2 = this.arrItemTubes[tubeSuggest.tube_index_2];
          this.addUndo_Info();
          let isRight = true;

          if (tube2.node.position.x < 0) {
            isRight = false;
          }

          let countTubeTarget_ItemWater_Avaliable = tube2.getCount_ItemWater_Available();
          let countItem_Available = tube1.getCountItemWater_SameHeadIndexColor();
          let countItem_ON_Available = tube2.getCountItemWater_ON_Available();

          if (countItem_Available > countItem_ON_Available) {
            countItem_Available = countItem_ON_Available;
          } // if(localConfig.instance.isWaterLock){
          //     countItem_Available = 1;
          // }


          tube2.updateMagicHeadColorIndex_Now(countTubeTarget_ItemWater_Avaliable, tube1.getHeadIndexColor(), countItem_Available); // tube2.currState = ITEM_TUBE_STATE.ON;

          let countTubeLast_ItemWater_Avaiable = tube1.getCount_ItemWater_Available();
          let indexStep = 4 - countTubeLast_ItemWater_Avaiable; // console.log("indexStep",indexStep);

          let posTube = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getMagicPosTube_byXY((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currMagicLevelConfigInfo, tube2.tubeX, tube2.tubeY);
          let posLastTube = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getMagicPosTube_byXY((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currMagicLevelConfigInfo, tube1.tubeX, tube1.tubeY);
          let posTarget = new Vec3(posTube.x - posLastTube.x, posTube.y + 282 - posLastTube.y, 0); // console.log(posTarget);

          let indexStepON = countTubeTarget_ItemWater_Avaliable; // console.log("countItem_Available:"+countItem_Available);

          tube1.setStartWaterOFF(tube2, indexStep, posTarget, isRight, indexStepON, countItem_Available - 1);
          tube1.node.setSiblingIndex(999);
          tube2.setItemTube_beSelected();
          this.setHideButtonBooster();
        }

        findAll_Suggest_Available() {
          let arrTubeSuggests = [];

          for (let i = 0; i < this.arrItemTubes.length; i++) {
            for (let j = 0; j < this.arrItemTubes.length; j++) {
              if (this.checkTube_Suggest_Available(i, j)) {
                let tubeSuggest = new TubeSuggest();
                tubeSuggest.tube_index_1 = i;
                tubeSuggest.tube_index_2 = j;
                let countItem_Available_Tube_1 = this.arrItemTubes[i].getCountItemWater_SameHeadIndexColor();
                let countItem_SameHeadIndexColor_Tube_2 = this.arrItemTubes[j].getCountItemWater_SameHeadIndexColor();
                tubeSuggest.expecte_value = countItem_Available_Tube_1 + countItem_SameHeadIndexColor_Tube_2;
                if (this.arrItemTubes[j].checkAllItemWater_SameIndexColor()) tubeSuggest.expecte_value++;
                arrTubeSuggests.push(tubeSuggest);
              }
            }
          }

          return arrTubeSuggests;
        }

        checkAll_Suggest_Available() {
          for (let i = 0; i < this.arrItemTubes.length; i++) {
            for (let j = 0; j < this.arrItemTubes.length; j++) {
              if (this.checkTube_Suggest_Available(i, j)) {
                // console.log("tube_index_1:"+i+",tube_index_2:"+j);
                return true;
              }
            }
          }
        }

        checkTube_Suggest_Available(tube_index_1, tube_index_2) {
          if (tube_index_1 == tube_index_2) return false;
          if (this.arrItemTubes[tube_index_1].currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).OBIM || this.arrItemTubes[tube_index_2].currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).OBIM) return false;
          if (this.arrItemTubes[tube_index_1].currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).PLASTER || this.arrItemTubes[tube_index_2].currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).PLASTER) return false;
          if (this.arrItemTubes[tube_index_1].currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).DONE || this.arrItemTubes[tube_index_2].currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).DONE) return false;
          if (this.arrItemTubes[tube_index_1].currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).OFF) return false;
          if (this.arrItemTubes[tube_index_1].currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).ON) return false;
          if (this.arrItemTubes[tube_index_2].checkTube_None() && this.arrItemTubes[tube_index_1].checkAllItemWater_SameIndexColor()) return false;

          if (this.arrItemTubes[tube_index_2].checkTube_None()) {
            return true;
          }

          if (this.arrItemTubes[tube_index_2].getCount_ItemWater_Available() == 4) {
            return false;
          }

          let headIndexColor_Bottle_1 = this.arrItemTubes[tube_index_1].getHeadIndexColor();
          let headIndexColor_Bottle_2 = this.arrItemTubes[tube_index_2].getHeadIndexColor();

          if (headIndexColor_Bottle_1 == headIndexColor_Bottle_2) {
            //Nếu ko chuyển đc hết các color cùng màu headIndexColor từ bottle1 sang bottle2 thì cũng false
            let countItem_OFF_Available = this.arrItemTubes[tube_index_1].getCountItemWater_SameHeadIndexColor();
            let countItem_ON_Available = this.arrItemTubes[tube_index_2].getCountItemWater_ON_Available();

            if (countItem_OFF_Available > countItem_ON_Available) {
              return false;
            }

            return true;
          }

          return false;
        } //#endregion
        //#region NO MOVE


        checkNoMoves() {
          // this.arrTubeSuggests_Temp = this.findAll_Suggest_Available();
          if (this.checkAll_Suggest_Available()) {
            return false;
          }

          return true;
        }

        showNoMovesGroup() {
          if (this.isShowNoMovesGroup) return;
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.playDurationEndTime = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrTime();
          this.isShowNoMovesGroup = true; // console.log("showNoMovesGroupshowNoMovesGroupshowNoMovesGroupshowNoMovesGroup");

          this.noMovesGroup.node.active = true;
          this.noMovesGroup.showNoMovesGroup();
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameState = (_crd && GAME_STATE === void 0 ? (_reportPossibleCrUseOfGAME_STATE({
            error: Error()
          }), GAME_STATE) : GAME_STATE).NO_MOVES;
          let children = this.groupAllTubes.children.slice(); // clone để tránh thay đổi khi move

          for (const child of children) {
            child.setParent(this.noMovesGroupAllTubes);
          }
        }

        setNoMoves_Touch_PlayOn() {
          this.isShowNoMovesGroup = false;
          (_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
            error: Error()
          }), PokiSDKManager) : PokiSDKManager).instance.setGameStart();
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameState = (_crd && GAME_STATE === void 0 ? (_reportPossibleCrUseOfGAME_STATE({
            error: Error()
          }), GAME_STATE) : GAME_STATE).PLAY;
          let children = this.noMovesGroupAllTubes.children.slice(); // clone để tránh thay đổi khi move

          for (const child of children) {
            child.setParent(this.groupAllTubes);
          }

          this.lockScene.active = false;
          this.setUseBooster_AddCol();
        }

        setNoMoves_Touch_GiveUp() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logLevelEnd((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
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
          }), localConfig) : localConfig).instance.loseStreak, "normal", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.playDurationEndTime - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.playDurationStartTime, "lose", "out_of_move"); //Only Normal

          this.isShowNoMovesGroup = false;
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameState = (_crd && GAME_STATE === void 0 ? (_reportPossibleCrUseOfGAME_STATE({
            error: Error()
          }), GAME_STATE) : GAME_STATE).PLAY;
          let children = this.noMovesGroupAllTubes.children.slice(); // clone để tránh thay đổi khi move

          for (const child of children) {
            child.setParent(this.groupAllTubes);
          }

          this.lockScene.active = false; // if(localConfig.instance.currHeartUnlimited_CountTime <= 0){
          //     clientEvent.dispatchEvent(Constants.HEART_COUNT_UPDATE,-1);
          // }

          let rewardCoin = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getRewardCoinby_LevelConfigInfo((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelConfigInfo);
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.setAddLoseStreak(); // if (localConfig.instance.currHeart <= 0) {
          //     clientEvent.dispatchEvent(Constants.SHOW_MORELIVES_POPUP, () => {
          //         if (localConfig.instance.currHeart > 0) {
          //             let rewardCoin: number = localConfig.instance.getRewardCoinby_LevelConfigInfo(localConfig.instance.currLevelConfigInfo);
          //             clientEvent.dispatchEvent(Constants.SHOW_LEVELFAILED_POPUP, rewardCoin);
          //         } else {
          //             clientEvent.dispatchEvent(Constants.BACK_TO_HOME);
          //         }
          //     });
          // } else {
          //     clientEvent.dispatchEvent(Constants.SHOW_LEVELFAILED_POPUP, rewardCoin);
          // }

          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LEVELFAILED_POPUP, rewardCoin);
        }

        setNoMoves_Touch_Replay() {
          this.setReplay();
        } //#endregion
        //#region ADD COL


        showButtonBoosterAddCol_Available() {
          let isAvailable = false;

          for (let i = 0; i < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currMagicLevelConfigInfo.maxRow; i++) {
            let arrItemTubes_byTubeY = this.arrItemTubes.filter(itemTube => itemTube.tubeY == i);

            if (arrItemTubes_byTubeY.length < 8) {
              isAvailable = true;
            }
          }

          this.btnBoosterAddCol.setBoosterAvailable(isAvailable);
        }

        setUseBooster_AddCol() {
          let indexAddColY = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currMagicLevelConfigInfo.maxRow - 1;
          let maxTubebyY = 0;
          let arrItemTubes_byTubeY = this.arrItemTubes.filter(itemTube => itemTube.tubeY == indexAddColY);
          maxTubebyY = arrItemTubes_byTubeY.length; // console.log(indexAddColY,maxTubebyY);

          for (let i = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currMagicLevelConfigInfo.maxRow - 2; i >= 0; i--) {
            let arrItemTubes_byTubeY = this.arrItemTubes.filter(itemTube => itemTube.tubeY == i); // console.log(i,arrItemTubes_byTubeY.length);

            if (arrItemTubes_byTubeY.length < maxTubebyY) {
              indexAddColY = i;
              maxTubebyY = arrItemTubes_byTubeY.length;
            } // console.log("check::::::",i,maxTubebyY);

          } // console.log(indexAddColY);


          let newMagicTubeInfo = new (_crd && MagicBInfo === void 0 ? (_reportPossibleCrUseOfMagicBInfo({
            error: Error()
          }), MagicBInfo) : MagicBInfo)();
          newMagicTubeInfo.indexY = indexAddColY;
          let countTubebyY = this.arrItemTubes.filter(itemTube => itemTube.tubeY == indexAddColY).length;
          newMagicTubeInfo.indexX = countTubebyY;
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currMagicLevelConfigInfo.B.push(newMagicTubeInfo);
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.mapMagicCountColbyIndexY.set(indexAddColY, newMagicTubeInfo.indexX + 1);

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currMagicLevelConfigInfo.maxCol < countTubebyY + 1) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currMagicLevelConfigInfo.maxCol = countTubebyY + 1;
          } // console.log(localConfig.instance.currMagicLevelConfigInfo);


          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.initPos_byMagicLevelDataInfo((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currMagicLevelConfigInfo);
          this.groupAllTubes.setScale(new Vec3((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.scaleTube, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.scaleTube, 1));
          this.shuffleGroupAllTubes.setScale(new Vec3((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.scaleTube, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.scaleTube, 1));
          this.noMovesGroupAllTubes.setScale(new Vec3((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.scaleTube, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.scaleTube, 1));

          for (let i = 0; i < this.arrItemTubes.length; i++) {
            this.arrItemTubes[i].updateMagicPos();
          }

          let item = instantiate(this.tubePrefab);
          item.setParent(this.groupAllTubes);
          let itemTube = item.getComponent(_crd && ItemTube === void 0 ? (_reportPossibleCrUseOfItemTube({
            error: Error()
          }), ItemTube) : ItemTube);
          itemTube.initMagicItemTube_AddCol(countTubebyY, indexAddColY);
          this.arrItemTubes.push(itemTube);
          this.showButtonBoosterAddCol_Available();
        } //#endregion
        //Hien thi khi No Move


        showTutAddCol() {
          if (this.isAddCol) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_NOTIFICATION, "No Move!");
          } else {
            this.objTut_AddCol.active = true;
          }
        }

        hideTutAddCol() {
          this.objTut_AddCol.active = false;
        } //#endregion
        //#region SHUFFLE


        showShuffleGroup() {
          // for(let i=0; i< this.arrItemTubes.length;i++){
          //     if(this.arrItemTubes[i].currState == ITEM_TUBE_STATE.OBIM){
          //         this.arrItemTubes[i].itemTubeOBIMObj.setShowOBIMObj_Step1();
          //     }
          //     if(this.arrItemTubes[i].currState == ITEM_TUBE_STATE.PLASTER){
          //         this.arrItemTubes[i].itemTubePlasterObj.setShowPlasterFinished();
          //     }
          // }
          // return;
          this.shuffleGroup.active = true;
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameState = (_crd && GAME_STATE === void 0 ? (_reportPossibleCrUseOfGAME_STATE({
            error: Error()
          }), GAME_STATE) : GAME_STATE).SHUFFLE;
          this.shuffleGroupAllTubes.destroyAllChildren();

          for (let i = 0; i < this.arrItemTubes.length; i++) {
            let itemTube = this.arrItemTubes[i];

            if (itemTube.checkTube_Shuffle_Available()) {
              itemTube.node.setParent(this.shuffleGroupAllTubes);
            }
          }
        }

        touchShuffleCancel() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("shufflecancel", "play");
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameState = (_crd && GAME_STATE === void 0 ? (_reportPossibleCrUseOfGAME_STATE({
            error: Error()
          }), GAME_STATE) : GAME_STATE).PLAY;
          let children = this.shuffleGroupAllTubes.children.slice(); // clone để tránh thay đổi khi move

          for (const child of children) {
            child.setParent(this.groupAllTubes);
          }

          this.shuffleGroup.active = false;
        }

        setShuffleTube_Finished() {
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.setBoosterCount((_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
            error: Error()
          }), BOOSTER_TYPE) : BOOSTER_TYPE).SUGGEST, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getBoosterCount((_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
            error: Error()
          }), BOOSTER_TYPE) : BOOSTER_TYPE).SUGGEST) - 1);
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logResourceSpend("booster", "shuffle", 1, "play", "use");
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameState = (_crd && GAME_STATE === void 0 ? (_reportPossibleCrUseOfGAME_STATE({
            error: Error()
          }), GAME_STATE) : GAME_STATE).PLAY;
          let children = this.shuffleGroupAllTubes.children.slice(); // clone để tránh thay đổi khi move

          for (const child of children) {
            child.setParent(this.groupAllTubes);
          }

          this.lockScene.active = false;
          this.shuffleGroup.active = false;
          this.addUndo_Info();
        } //#endregion
        //#region WIN


        setWin() {
          this.unschedule(this.scheduleCheckNoMoves);

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameState != (_crd && GAME_STATE === void 0 ? (_reportPossibleCrUseOfGAME_STATE({
            error: Error()
          }), GAME_STATE) : GAME_STATE).WIN) {
            (_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
              error: Error()
            }), PokiSDKManager) : PokiSDKManager).instance.setGameStop();
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currGameState = (_crd && GAME_STATE === void 0 ? (_reportPossibleCrUseOfGAME_STATE({
              error: Error()
            }), GAME_STATE) : GAME_STATE).WIN;
            this.tweenBoosterGroup = tween(this.boosterGroup).to(0.5, {
              position: new Vec3(0, -786, 0)
            }, {
              easing: 'quadOut'
            }).start();
            this.wellDoneGroup.showWellDoneGroup();
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.playDurationEndTime = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getCurrTime();
          }
        }

        setWellDoneFinished() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).DAILY_CHALLENGE) {
            let indexDay = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getCountDay_From_Start((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currInfoDaySelect) + 1;
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logLevelEnd(indexDay, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getLevelLoopByFromStr((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevelConfigInfo.levelOrder), (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
              error: Error()
            }), PLAY_TYPE) : PLAY_TYPE)[(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.playType].toLowerCase().toString(), 1, 0, "dailychallenge", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.playDurationEndTime - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.playDurationStartTime, "win", ""); // FBInstantManager.instance.Show_InterstitialAdAsync("dailychallenge","win",(err,success)=>{
            //     clientEvent.dispatchEvent(Constants.SHOW_WIN_DAILYCHALLENGE_POPUP);
            // });

            (_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
              error: Error()
            }), PokiSDKManager) : PokiSDKManager).instance.Show_InterstitialAdAsync("dailychallenge", "win", (err, success) => {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_WIN_DAILYCHALLENGE_POPUP);
            });
          } // else if(localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT){
          //     LogEventManager.instance.logLevelEnd(localConfig.instance.currIndexLevelTournament,localConfig.instance.getLevelLoopByFromStr(localConfig.instance.currLevelConfigInfo.levelOrder),
          //                                          PLAY_TYPE[localConfig.instance.playType].toLowerCase().toString(),1,0,"tournament",
          //                                          localConfig.instance.playDurationEndTime - localConfig.instance.playDurationStartTime,
          //                                         "win","");
          //     if(localConfig.instance.currIndexLevelTournament + localConfig.instance.currLevelStartTournament == 2){
          //         localConfig.instance.setLevelUnlock(3);
          //         this.hideTutLevel2();
          //     }
          //     localConfig.instance.setLevelUnlock(2);
          //     if(localConfig.instance.currIndexLevelTournament + localConfig.instance.currLevelStartTournament > 2){
          //         FBInstantManager.instance.Show_InterstitialAdAsync("tournament","win",(err,success)=>{
          //             this.setWinTournament();
          //         });
          //     }else{
          //         this.setWinTournament();
          //     }
          // }else if(localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT_PAGEHOST){
          //     LogEventManager.instance.logLevelEnd(localConfig.instance.currTournamentPageHostDataInfo.levelIndex,localConfig.instance.getLevelLoopByFromStr(localConfig.instance.currLevelConfigInfo.levelOrder),
          //                                          PLAY_TYPE[localConfig.instance.playType].toLowerCase().toString(),1,0,"tournament_pagehost",
          //                                          localConfig.instance.playDurationEndTime - localConfig.instance.playDurationStartTime,
          //                                         "win","");
          //     this.setWinTournamentPageHost();
          // }else if(localConfig.instance.currGameMode == GAME_MODE.WITH_FRIEND){
          //     LogEventManager.instance.logLevelEnd(localConfig.instance.currWithFriendDataInfo.levelIndex,localConfig.instance.getLevelLoopByFromStr(localConfig.instance.currLevelConfigInfo.levelOrder),
          //                                          PLAY_TYPE[localConfig.instance.playType].toLowerCase().toString(),1,0,"withfriend",
          //                                          localConfig.instance.playDurationEndTime - localConfig.instance.playDurationStartTime,
          //                                         "win","");
          //     if(localConfig.instance.currWithFriendDataInfo.senderID == FBInstantManager.instance.getID()){
          //         localConfig.instance.currWithFriendDataInfo.senderScore = this.infoGroupWithFriend.scoreValue;
          //         this.updateContextWithFriend();
          //     }else{
          //         localConfig.instance.currWithFriendDataInfo.receiverScore = this.infoGroupWithFriend.scoreValue;
          //         this.updateContextWithFriend();
          //     }
          //     FBInstantManager.instance.Show_InterstitialAdAsync("withfriend","win",()=>{
          //         // this.showWinWithFriendPopup(this.scoreGroupWithFriend.currScore);
          //         clientEvent.dispatchEvent(Constants.SHOW_WIN_WITHFRIEND_POPUP, localConfig.instance.currWithFriendDataInfo, this.infoGroupWithFriend.scoreValue);
          //     });
          // }
          else {
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logLevelEnd((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
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
              }), localConfig) : localConfig).instance.loseStreak, "normal", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.playDurationEndTime - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.playDurationStartTime, "win", "");

              if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currLevel == 2) {
                this.hideTutLevel2();
              }

              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.setLevelUnlock((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currLevel + 1);
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.addPassLevel();
              (_crd && PGSPlayInstantManager === void 0 ? (_reportPossibleCrUseOfPGSPlayInstantManager({
                error: Error()
              }), PGSPlayInstantManager) : PGSPlayInstantManager).instance.UpdatePlayerScore((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currLevelUnlock);
              let strWorldContextID = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getWorldContextID_byWeek((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currWeek);
              let leaderboardDataInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getLeaderBoardDataInfo_byContextID(strWorldContextID);

              if (leaderboardDataInfo != null) {
                (_crd && PGSPlayInstantManager === void 0 ? (_reportPossibleCrUseOfPGSPlayInstantManager({
                  error: Error()
                }), PGSPlayInstantManager) : PGSPlayInstantManager).instance.UpdatePlayerScore_byLeaderboardID(leaderboardDataInfo._id, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.currLevelUnlock);
              }

              if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.raceActive) {
                (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.addRaceScore();
              }

              if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currLevelUnlock >= 4) {
                // FBInstantManager.instance.Show_InterstitialAdAsync("normal","win",(err,success)=>{
                //     clientEvent.dispatchEvent(Constants.SHOW_WIN_POPUP,localConfig.instance.currLevel);
                // });
                (_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
                  error: Error()
                }), PokiSDKManager) : PokiSDKManager).instance.Show_InterstitialAdAsync("normal", "win", (err, success) => {
                  (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                    error: Error()
                  }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).SHOW_WIN_POPUP, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.currLevel);
                });
              } else {
                (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                  error: Error()
                }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).SHOW_WIN_POPUP, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.currLevel);
              }
            }
        } //#endregion


        setNextLevel() {
          (_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
            error: Error()
          }), PokiSDKManager) : PokiSDKManager).instance.setGameStart();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LOADING_START_NOW_POPUP);
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevel++;
          this.preloadLevel((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevel);
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.playType = (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
            error: Error()
          }), PLAY_TYPE) : PLAY_TYPE).NEXT;
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
        } //#region TUTORIAL


        initTutorials() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).NORMAL) {
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevel == 1) {
              this.initTutorial_Level1();
            } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevel == 2) {
              this.initTutorial_Level2();
            } // else if(localConfig.instance.currLevel == 5){
            //     if(!localConfig.instance.isTutLevel5){
            //         this.initTutorial_Level5();
            //     }
            // }


            if (this.checkShowTutCurtain()) {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_TUT_CURTAIN_POPUP);
            } else if (this.checkShowTutClay()) {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_TUT_CLAY_POPUP);
            } else if (this.checkShowTutPlaster()) {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_TUT_PLASTER_POPUP);
            }
          } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).TOURNAMENT) {
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevelStartTournament + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currIndexLevelTournament == 1) {
              this.initTutorial_Level1();
            } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevelStartTournament + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currIndexLevelTournament == 2) {
              this.initTutorial_Level2();
            }
          }
        }

        checkShowTutCurtain() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).NORMAL) {
            if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.isTutCurtain) {
              for (let i = 0; i < this.arrItemTubes.length; i++) {
                let itemTube = this.arrItemTubes[i];

                if (itemTube.currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
                  error: Error()
                }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).OBIM) {
                  return true;
                }
              }
            }
          }

          return false;
        }

        checkShowTutClay() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).NORMAL) {
            if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.isTutClay) {
              for (let i = 0; i < this.arrItemTubes.length; i++) {
                let itemTube = this.arrItemTubes[i];

                if (itemTube.isTubeClay) {
                  return true;
                }
              }
            }
          }

          return false;
        }

        checkShowTutPlaster() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).NORMAL) {
            if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.isTutPlaster) {
              for (let i = 0; i < this.arrItemTubes.length; i++) {
                let itemTube = this.arrItemTubes[i];

                if (itemTube.currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
                  error: Error()
                }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).PLASTER) {
                  return true;
                }
              }
            }
          }
        }
        /**
        * TUT LEVEL 1
        */


        initTutorial_Level1() {
          this.lockScene.active = false;
          let self = this;

          if (this.tutLevel) {
            this.tutLevel.showPopup();
            let posTube = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getMagicPosTube_byXY((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currMagicLevelConfigInfo, 0, 0);
            this.showTutLevel1_Step1(new Vec3(posTube.x, posTube.y - 50, 0));
          } else {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_LOADING_POPUP);
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TutLevelPopup", (err, uiPrefab) => {
              let tutlevel1Prefab = instantiate(uiPrefab);
              tutlevel1Prefab.setParent(self.nodeTutLevelPopup);
              tutlevel1Prefab.setPosition(new Vec3(0, 0, 0));
              self.tutLevel = tutlevel1Prefab.getComponent(_crd && TutLevelPopup === void 0 ? (_reportPossibleCrUseOfTutLevelPopup({
                error: Error()
              }), TutLevelPopup) : TutLevelPopup);
              self.tutLevel.showPopup();
              let posTube = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getMagicPosTube_byXY((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currMagicLevelConfigInfo, 0, 0);
              self.showTutLevel1_Step1(new Vec3(posTube.x, posTube.y - 50, 0));
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).HIDE_LOADING_POPUP);
            });
          }
        }

        showTutLevel1_Step1(pos) {
          if (this.tutLevel) {
            this.tutLevel.showTutLevel1_step1(pos);
            this.arrItemTubes[1].setBottle_Touch_Available(false);
          }
        }

        hideTutLevel1_Step1() {
          this.arrItemTubes[0].setBottle_Touch_Available(false);

          if (this.tutLevel) {
            this.tutLevel.hideTut();
          }

          this.initTutLevel1_Step2();
        }

        initTutLevel1_Step2() {
          let self = this;
          this.scheduleOnce(() => {
            let posTube = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getMagicPosTube_byXY((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currMagicLevelConfigInfo, 1, 0);
            self.showTutLevel1_Step2(new Vec3(posTube.x, posTube.y - 50, 0));
          }, 0.3);
        }

        showTutLevel1_Step2(pos) {
          this.arrItemTubes[1].setBottle_Touch_Available(true);

          if (this.tutLevel) {
            this.tutLevel.showTutLevel1_step2(pos);
          }
        }

        hideTutLevel1_Step2() {
          if (this.tutLevel) {
            this.tutLevel.hidePopup();
          }
        }
        /**
        * TUT LEVEL 2
        */


        initTutorial_Level2() {
          this.lockScene.active = false;
          let self = this;

          if (this.tutLevel) {
            this.tutLevel.showPopup();
            this.tutLevel.showTutLevel2();
          } else {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_LOADING_POPUP);
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TutLevelPopup", (err, uiPrefab) => {
              let tutlevel1Prefab = instantiate(uiPrefab);
              tutlevel1Prefab.setParent(self.nodeTutLevelPopup);
              tutlevel1Prefab.setPosition(new Vec3(0, 0, 0));
              self.tutLevel = tutlevel1Prefab.getComponent(_crd && TutLevelPopup === void 0 ? (_reportPossibleCrUseOfTutLevelPopup({
                error: Error()
              }), TutLevelPopup) : TutLevelPopup);
              self.tutLevel.showPopup();
              self.tutLevel.showTutLevel2();
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).HIDE_LOADING_POPUP);
            });
          }
        }

        checkTutLevel2_TutTubes(indexTube) {
          let indexHeadColor_Selected = this.arrItemTubes[indexTube].getHeadIndexColor();

          for (let i = 0; i < this.arrItemTubes.length; i++) {
            if (i != indexTube) {
              let indexHeadColor = this.arrItemTubes[i].getHeadIndexColor();
              let countWaterInBottle = this.arrItemTubes[i].getCount_ItemWater_Available();
              let isCorrect = true;

              if (indexHeadColor != indexHeadColor_Selected) {
                isCorrect = false;
              }

              if (countWaterInBottle >= 4) {
                isCorrect = false;
              } else {
                this.arrItemTubes[i].showTut_Level2(isCorrect);
              }
            } else {
              this.arrItemTubes[i].hideTut_Level2();
            }
          }
        }

        checkLevel2_TutTubes_HideTut() {
          for (let i = 0; i < this.arrItemTubes.length; i++) {
            this.arrItemTubes[i].hideTut_Level2();
          }
        }

        hideTutLevel2() {
          if (this.tutLevel) {
            this.tutLevel.hidePopup();
          }
        } // /**
        // * TUT LEVEL 5
        // */
        // @property(Node)
        // nodeTutLevel5Popup: Node;
        // tutLevel5: TutLevel5Popup;
        // initTutorial_Level5() {
        //     this.lockScene.active = false;
        //     let self = this;
        //     if (this.tutLevel5) {
        //         this.tutLevel5.showPopup();
        //     } else {
        //         clientEvent.dispatchEvent(Constants.SHOW_LOADING_POPUP);
        //         resourceUtil.loadPrefabUI_Bundle("TutLevel5Popup", (err, uiPrefab) => {
        //             let tutlevel5Prefab = instantiate(uiPrefab);
        //             tutlevel5Prefab.setParent(self.nodeTutLevel5Popup);
        //             tutlevel5Prefab.setPosition(new Vec3(0, 0, 0))
        //             self.tutLevel5 = tutlevel5Prefab.getComponent(TutLevel5Popup);
        //             self.tutLevel5.showPopup();
        //             clientEvent.dispatchEvent(Constants.HIDE_LOADING_POPUP);
        //         });
        //     }
        // }
        // setTutLevel5_Finished() {
        //     localConfig.instance.setTutLevel5_Finshed();
        //     if (this.tutLevel5) {
        //         this.tutLevel5.hidePopup();
        //     }
        // }


        resetTut() {
          if (this.tutLevel) {
            this.tutLevel.hidePopup();
          } // if (this.tutLevel5) {
          //     this.tutLevel5.hidePopup();
          // }

        } //#endregion
        //#region COMBO


        addCombo(delayTime) {
          let self = this;
          this.scheduleOnce(() => {
            self.comboGroup.addCombo();
          }, delayTime);
        }

        resetCombo() {
          this.comboGroup.resetCombo();
        } //#endregion


        setWinTournament() {
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.playDurationStartTime = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrTime();
          let score = this.infoGroupTournament.scoreValue;
          let leaderBoardMyScore = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getLeaderBoardMyScore_byTournamentID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLeaderboardDataInfo.tournamentId);

          if (score > leaderBoardMyScore) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setLeaderBoardMyScore_byTournamentID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLeaderboardDataInfo.tournamentId, score);
            (_crd && PGSPlayInstantManager === void 0 ? (_reportPossibleCrUseOfPGSPlayInstantManager({
              error: Error()
            }), PGSPlayInstantManager) : PGSPlayInstantManager).instance.UpdatePlayerScore_byLeaderboardID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLeaderboardDataInfo._id, score);
          } // console.log("setWinTournament",localConfig.instance.currIndexLevelTournament + localConfig.instance.currLevelStartTournament);


          if (((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currIndexLevelTournament + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelStartTournament) % 3 == 1) {
            (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
              error: Error()
            }), FBInstantManager) : FBInstantManager).instance.ShareTournament(this.infoGroupTournament.scoreValue, (err, success) => {});
          }

          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LOADING_START_NOW_POPUP);
          this.resetLevel();
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currIndexLevelTournament++;
          this.lockScene.active = true;
          let levelLoadData = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelStartTournament + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currIndexLevelTournament;

          if (levelLoadData >= 150) {
            levelLoadData = levelLoadData % 150 + 30;
          }

          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelConfigInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getMagicLevelConfigInfo_byLevelIndex(levelLoadData);
          let indexSeed = 0;

          if (levelLoadData > 4) {
            indexSeed = (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).random(0, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevelConfigInfo.seeds.length - 1);
          }

          this.comboGroup.node.active = true;
          this.comboGroup.init();
          this.btnHome.node.active = true;
          this.btnPause.node.active = true;
          this.infoGroupTournament.node.active = true;
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getJsonData_Promise("levelnew2/" + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelConfigInfo.seeds[indexSeed], (err, content) => {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currMagicLevelConfigInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getMagicLevelConfigInfo((_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).cloneDeep(content)); // console.log(localConfig.instance.currMagicLevelConfigInfo);

            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setMagicMappingColorIndex((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currMagicLevelConfigInfo);
            let timePlay = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currMagicLevelConfigInfo.B.length * 15 + (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).random(1, 9) * 5;
            this.infoGroupTournament.setNextLevel(timePlay);
            this.initLevel();
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.playType = (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
              error: Error()
            }), PLAY_TYPE) : PLAY_TYPE).NEXT;
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
          });
        }

        setWinTournamentPageHost() {
          let score = this.infoGroupTournamentPageHost.scoreValue;
          (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.AddScoreToLeaderBoard(score, (err, success) => {
            (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
              error: Error()
            }), FBInstantManager) : FBInstantManager).instance.UpdateContextLeaderBoard();
          });
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_WIN_TOURNAMENT_PAGEHOST_POPUP, score);
        }

        setWinWithFriend() {
          let score = this.infoGroupWithFriend.scoreValue;
        } //#region TOURNAMENT QUIT


        setTournamentQuit() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).TOURNAMENT) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_TOURNAMENT_RESULT_POPUP, this.infoGroupTournament.indexTarget, this.infoGroupTournament.scoreValue);
          } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).TOURNAMENT_PAGEHOST) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currTournamentPageHostDataInfo = null;
            (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
              error: Error()
            }), FBInstantManager) : FBInstantManager).instance.resetContext(() => {});
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BACK_TO_HOME);
          }
        }

        setTournamentContinue() {
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameState = (_crd && GAME_STATE === void 0 ? (_reportPossibleCrUseOfGAME_STATE({
            error: Error()
          }), GAME_STATE) : GAME_STATE).PLAY;
        } //#endregion
        //#region TOURNAMENT REVIVE


        setTournamentLose() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TOURNAMENT_REVIVE_POPUP);
        }

        setTournamentReviveYes() {
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playGetReward();
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameState = (_crd && GAME_STATE === void 0 ? (_reportPossibleCrUseOfGAME_STATE({
            error: Error()
          }), GAME_STATE) : GAME_STATE).PLAY;
          this.infoGroupTournament.setRevive();
        }

        setTournamentReviveNo() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TOURNAMENT_RESULT_POPUP, this.infoGroupTournament.indexTarget, this.infoGroupTournament.scoreValue);
        } //#endregion


        setTournamentReplay() {
          this.preloadLevelTournament();
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.playType = (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
            error: Error()
          }), PLAY_TYPE) : PLAY_TYPE).RESTART;
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

        setTournamentPageHostReplay() {
          this.preloadLevelTournamentPageHost();
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.playType = (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
            error: Error()
          }), PLAY_TYPE) : PLAY_TYPE).RESTART;
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logLevelStart((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currTournamentPageHostDataInfo.levelIndex, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getLevelLoopByFromStr((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelConfigInfo.levelOrder), (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
            error: Error()
          }), PLAY_TYPE) : PLAY_TYPE)[(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.playType].toLowerCase().toString(), 1, 0, "tournament_pagehost");
        }

        setSettingTouchContinue() {
          (_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
            error: Error()
          }), PokiSDKManager) : PokiSDKManager).instance.setGameStart();
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameState = (_crd && GAME_STATE === void 0 ? (_reportPossibleCrUseOfGAME_STATE({
            error: Error()
          }), GAME_STATE) : GAME_STATE).PLAY;
        }

        updateContextWithFriend() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_UPDATECONTEXT_WITHFRIEND_POPUP, (errr, success) => {});
        }

        setQuitConfirmTouchYes() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currHeartUnlimited_CountTime <= 0) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).HEART_COUNT_UPDATE, -1);
          }

          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logLevelEnd((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
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
          }), localConfig) : localConfig).instance.loseStreak, "normal", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.playDurationEndTime - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.playDurationStartTime, "exit", "");
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.setAddLoseStreak();

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currHeart <= 0) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_MORELIVES_POPUP, () => {
              if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currHeart > 0) {
                let rewardCoin = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.getRewardCoinby_LevelConfigInfo((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.currLevelConfigInfo);
                (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                  error: Error()
                }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).SHOW_LEVELFAILED_POPUP, rewardCoin);
              } else {
                (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                  error: Error()
                }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).BACK_TO_HOME);
              }
            });
          } else {
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
              error: Error()
            }), GAME_MODE) : GAME_MODE).NORMAL) {
              let rewardCoin = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getRewardCoinby_LevelConfigInfo((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currLevelConfigInfo);
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_LEVELFAILED_POPUP, rewardCoin);
            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "groupAllTop", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "groupAllTopWidget", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "backGroundGameManager", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tubePrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "groupAllTubes", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lockScene", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "boosterGroup", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btnBoosterUndo", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "btnBoosterSuggest", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "btnBoosterAddCol", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "infoGroupNormal", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "txtInfoNormal", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "infoGroupTournament", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "infoGroupTournamentPageHost", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "infoGroupWithFriend", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "btnSetting", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "btnHome", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "btnPause", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "noMovesGroup", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "noMovesGroupAllTubes", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "objTut_AddCol", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "shuffleGroup", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "shuffleGroupAllTubes", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "btnShuffleCancel", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "wellDoneGroup", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "nodeTutLevelPopup", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "comboGroup", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _export("TubeSuggest", TubeSuggest = (_dec29 = ccclass('TubSuggest'), _dec29(_class4 = (_temp2 = class TubeSuggest {
        constructor() {
          _defineProperty(this, "tube_index_1", void 0);

          _defineProperty(this, "tube_index_2", void 0);

          _defineProperty(this, "expecte_value", void 0);
        }

      }, _temp2)) || _class4));
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
//# sourceMappingURL=PlayMagicManager.js.map