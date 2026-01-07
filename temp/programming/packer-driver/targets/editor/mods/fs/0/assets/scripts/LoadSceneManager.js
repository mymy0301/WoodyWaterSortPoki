System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, director, game, macro, Node, ProgressBar, tween, UIOpacity, Vec3, view, clientEvent, Constants, ENV_TYPE, PLAY_TYPE, resourceUtil, localConfig, configuration, LogEventManager, MusicManager, PGSPlayInstantManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, LoadSceneManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "./framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENV_TYPE(extras) {
    _reporterNs.report("ENV_TYPE", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPLAY_TYPE(extras) {
    _reporterNs.report("PLAY_TYPE", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "./framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "./localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfiguration(extras) {
    _reporterNs.report("configuration", "./framework/configuration", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogEventManager(extras) {
    _reporterNs.report("LogEventManager", "./common/LogEventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMusicManager(extras) {
    _reporterNs.report("MusicManager", "./framework/musicManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPGSPlayInstantManager(extras) {
    _reporterNs.report("PGSPlayInstantManager", "./common/PGSPlayInstantManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      game = _cc.game;
      macro = _cc.macro;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
      view = _cc.view;
    }, function (_unresolved_2) {
      clientEvent = _unresolved_2.clientEvent;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
      ENV_TYPE = _unresolved_3.ENV_TYPE;
      PLAY_TYPE = _unresolved_3.PLAY_TYPE;
    }, function (_unresolved_4) {
      resourceUtil = _unresolved_4.resourceUtil;
    }, function (_unresolved_5) {
      localConfig = _unresolved_5.localConfig;
    }, function (_unresolved_6) {
      configuration = _unresolved_6.configuration;
    }, function (_unresolved_7) {
      LogEventManager = _unresolved_7.LogEventManager;
    }, function (_unresolved_8) {
      MusicManager = _unresolved_8.MusicManager;
    }, function (_unresolved_9) {
      PGSPlayInstantManager = _unresolved_9.PGSPlayInstantManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8ab54Vam01GuKQoDB4REZH4", "LoadSceneManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = LoadSceneManager
       * DateTime = Fri Aug 16 2024 11:45:26 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = LoadSceneManager.ts
       * FileBasenameNoExtension = LoadSceneManager
       * URL = db://assets/scripts/LoadSceneManager.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("LoadSceneManager", LoadSceneManager = (_dec = ccclass('LoadSceneManager'), _dec2 = property(ProgressBar), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(UIOpacity), _dec6 = property(Node), _dec7 = property(UIOpacity), _dec(_class = (_class2 = (_temp = class LoadSceneManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "loadingProgressBar", _descriptor, this);

          _defineProperty(this, "tweenLoading", null);

          _defineProperty(this, "isPreloadScene", false);

          _defineProperty(this, "isDataFinished", false);

          _initializerDefineProperty(this, "bg", _descriptor2, this);

          _initializerDefineProperty(this, "nodeTitle", _descriptor3, this);

          _initializerDefineProperty(this, "nodeTitle_Opacity", _descriptor4, this);

          _initializerDefineProperty(this, "nodeIcon", _descriptor5, this);

          _initializerDefineProperty(this, "nodeIcon_Opacity", _descriptor6, this);

          _defineProperty(this, "indexLevel", 1);

          _defineProperty(this, "mapLevelStr", new Map());

          _defineProperty(this, "isNextScene", false);
        }

        onLoad() {
          game.frameRate = 60;
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GET_DATA_PLAYER_SUCCESS, this.getDataPlayerSuccess, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GET_DATA_PAYLOAD_SUCCESS, this.getDataPayloadSuccess, this);
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GET_DATA_PLAYER_SUCCESS, this.getDataPlayerSuccess, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GET_DATA_PAYLOAD_SUCCESS, this.getDataPayloadSuccess, this);
        }

        start() {
          console.log((_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
            error: Error()
          }), PLAY_TYPE) : PLAY_TYPE)[(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.playType].toLowerCase().toString());
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.splashStartTime = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrTime();
          tween(this.nodeTitle_Opacity).to(3, {
            opacity: 255
          }, {
            easing: 'quadOut'
          }).start();
          tween(this.nodeIcon_Opacity).to(2, {
            opacity: 255
          }, {
            easing: 'quadOut'
          }).start();
          tween(this.nodeTitle).to(3, {
            position: new Vec3(30, 600, 0)
          }, {
            easing: 'bounceOut'
          }).start();
          tween(this.nodeIcon).to(3, {
            position: new Vec3(0, 0, 0)
          }, {
            easing: 'linear'
          }).start();
          let self = this;
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.scaleBG = 1;
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.updateFixRatioScreen();

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isMobile) {
            // let w:number = window.innerWidth;
            // let h:number = window.innerHeight;
            let w = view.getFrameSize().width;
            let h = view.getFrameSize().height;
            console.log(w, h); // if(localConfig.instance.envType == ENV_TYPE.TEST_AD){
            //     w = 414;
            //     h = 896;
            // }
            // console.log(w,h);

            if (w / h < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.DEFAULT_W / (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.DEFAULT_H) {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.scaleBG = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.DEFAULT_W / (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.DEFAULT_H / (w / h);
              this.bg.setScale(new Vec3((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.scaleBG, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.scaleBG, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.scaleBG)); // console.log(localConfig.instance.scaleBG);
            }
          }

          macro.ENABLE_MULTI_TOUCH = false; // [3]

          director.preloadScene("play", (completedCount, totalCount, item) => {}, function () {});
          this.loadingProgressBar.progress = 0;
          this.tweenLoading = tween(this.loadingProgressBar).to(20, {
            progress: 0.99
          }, {
            easing: 'linear'
          });
          this.tweenLoading.start();
          Promise.all([(_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadBundler((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BUNDLE_ITEMS), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadBundler((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BUNDLE_AUDIOS), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getData_Promise("level", (err, content) => {
            // console.log(content);
            content = content.replaceAll("\r", "");
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrLevelDataStrs = content.split("\n"); // console.log(localConfig.instance.arrLevelDataStrs);
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getData_Promise("challenge", (err, content) => {
            // console.log(content);
            content = content.replaceAll("\r", "");
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrLevelChallengeDataStrs = content.split("\n"); // console.log(localConfig.instance.arrLevelChallengeDataStrs);
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getJsonData_Promise("shop", (err, content) => {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrShopDataInfos = content; // console.log(localConfig.instance.arrShopDataInfos);
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getJsonData_Promise("dailychallenge", (err, content) => {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrDailyChallengeRewards = content; // console.log(localConfig.instance.arrDailyChallengeRewards);
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getJsonData_Promise("unlockprogress", (err, content) => {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrUnlockProgressInfos = content;
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.initUnlockProgressInfos();
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getJsonData_Promise("skin", (err, content) => {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrSkinInfos = content; // console.log(localConfig.instance.arrSkinInfos);
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getJsonData_Promise("dailylogin", (err, content) => {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrDailyLogin_GroupRewardDataInfos = content; // console.log(localConfig.instance.arrDailyLogin_GroupRewardDataInfos);
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getJsonData_Promise("dailyquest", (err, content) => {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrDailyQuestDataInfos = content; // console.log(localConfig.instance.arrDailyQuestDataInfos);
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getJsonData_Promise("dailyquestreward", (err, content) => {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrDailyQuest_GroupRewardDataInfos = content; // console.log(localConfig.instance.arrDailyQuest_GroupRewardDataInfos);
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getJsonData_Promise("chestreward", (err, content) => {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrChests_GroupRewardDataInfos = content; // console.log("chestreward",localConfig.instance.arrChests_GroupRewardDataInfos);
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getJsonData_Promise("racereward", (err, content) => {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrRace_GroupRewardDataInfos = content; // console.log("racereward",localConfig.instance.arrRace_GroupRewardDataInfos);
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getJsonData_Promise("masterpass", (err, content) => {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrPassRewardDataInfos = content; // console.log("masterpass",localConfig.instance.arrPassRewardDataInfos);
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getJsonData_Promise("spin", (err, content) => {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrSpinRewardDataInfos = content; // console.log(localConfig.instance.arrSpinRewardDataInfos);
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getJsonData_Promise("LevelsConfigv2", (err, content) => {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrMagicLevelConfigInfos = content.levelConfigModels;
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getJsonData_Promise("LoopLevelsConfig", (err, content) => {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrMagicLoopLevelConfigInfos = content.levelConfigModels;
          }) // resourceUtil.getJsonData_Promise("levelnew2/magicsort_magicsort1_difficulty1-1",(err,content)=>{
          //     let magicLevelDataInfo:MagicLevelDataInfo = content;
          //     console.log(magicLevelDataInfo);
          //     console.log(magicLevelDataInfo.UCCC,magicLevelDataInfo.CC,magicLevelDataInfo.LId,magicLevelDataInfo.B);
          // }),
          ]).then(values => {
            // console.log(values);
            self.setLoad_Step2();
          });
        }

        setLoad_Step2_NoWait() {
          Promise.all([(_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TutLevelPopup", (err, uiPrefab) => {// console.log("TutLevelPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TutLevel5Popup", (err, uiPrefab) => {// console.log("TutLevel5Popup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("ShopGroup", (err, uiPrefab) => {}), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("ThemeGroup", (err, uiPrefab) => {}), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("LeaderBoardGroup", (err, uiPrefab) => {}), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TournamentsGroup", (err, uiPrefab) => {}), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("WinPopup", (err, uiPrefab) => {// console.log("WinPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("PausePopup", (err, uiPrefab) => {// console.log("PausePopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("RemoveAdPopup", (err, uiPrefab) => {// console.log("RemoveAdPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("SettingPopup", (err, uiPrefab) => {// console.log("SettingPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("ShopPopup", (err, uiPrefab) => {// console.log("ShopPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("SummerPackPopup", (err, uiPrefab) => {// console.log("SummerPackPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("DailyChallengePopup", (err, uiPrefab) => {// console.log("DailyChallengePopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("BoxRewardReceivePopup", (err, uiPrefab) => {// console.log("BoxRewardReceivePopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("RewardReceivePopup", (err, uiPrefab) => {// console.log("RewardReceivePopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("DailyTaskPopup", (err, uiPrefab) => {// console.log("DailyTaskPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("RewardReceivePopup", (err, uiPrefab) => {// console.log("RewardReceivePopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("LevelChestsPopup", (err, uiPrefab) => {// console.log("LevelChestsPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TubeRaceJoinPopup", (err, uiPrefab) => {// console.log("TubeRaceJoinPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TubeRacePopup", (err, uiPrefab) => {// console.log("TubeRacePopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("MasterPassDetailPopup", (err, uiPrefab) => {// console.log("MasterPassDetailPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("MasterPassInfoPopup", (err, uiPrefab) => {// console.log("MasterPassInfoPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("MasterPassPopup", (err, uiPrefab) => {// console.log("MasterPassPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("SpinPopup", (err, uiPrefab) => {// console.log("SpinPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("ShareInfoPopup", (err, uiPrefab) => {// console.log("ShareInfoPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("ShareContextPopup", (err, uiPrefab) => {// console.log("ShareContextPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("ShopItemPopup", (err, uiPrefab) => {// console.log("ShopItemPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("ThemeUnlockPopup", (err, uiPrefab) => {// console.log("ThemeUnlockPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TournamentPopup", (err, uiPrefab) => {// console.log("TournamentPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TournamentQuitPopup", (err, uiPrefab) => {// console.log("TournamentQuitPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TournamentResultPopup", (err, uiPrefab) => {// console.log("TournamentResultPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TournamentRevivePopup", (err, uiPrefab) => {// console.log("TournamentRevivePopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TubeRaceJoinPopup", (err, uiPrefab) => {// console.log("TubeRaceJoinPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TubeRaceLosePopup", (err, uiPrefab) => {// console.log("TubeRaceLosePopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TubeRacePopup", (err, uiPrefab) => {// console.log("TubeRacePopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TubeRaceWinPopup", (err, uiPrefab) => {// console.log("TubeRaceWinPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("LevelFailedPopup", (err, uiPrefab) => {// console.log("TubeRaceWinPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("MoreLivesPopup", (err, uiPrefab) => {// console.log("TubeRaceWinPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("QuitConfirmPopup", (err, uiPrefab) => {// console.log("TubeRaceWinPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TutClayPopup", (err, uiPrefab) => {// console.log("TubeRaceWinPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TutCurtainPopup", (err, uiPrefab) => {// console.log("TubeRaceWinPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TutPlasterPopup", (err, uiPrefab) => {// console.log("TubeRaceWinPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("WinTournamentPageHostPopup", (err, uiPrefab) => {// console.log("WinTournamentPageHostPopup");
          }), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip("audio/sound/Button", (err, clip) => {}), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip("audio/sound/water1", (err, clip) => {}), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip("audio/sound/water2", (err, clip) => {}), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip("audio/sound/water3", (err, clip) => {}), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip("audio/sound/bottleselect", (err, clip) => {}), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip("audio/sound/waterfull", (err, clip) => {}), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip("audio/sound/win_effect", (err, clip) => {}), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip("audio/sound/cap_eff_1", (err, clip) => {}), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip("audio/sound/cap_eff_2", (err, clip) => {}), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip("audio/sound/progressbar", (err, clip) => {}), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip("audio/sound/coin_appear", (err, clip) => {}), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip("audio/sound/coin_receive", (err, clip) => {}), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip("audio/sound/coin_receive", (err, clip) => {}), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip("audio/sound/pop_dialog", (err, clip) => {}), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip("audio/sound/win", (err, clip) => {}), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip("audio/sound/notification-alert", (err, clip) => {}), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip("audio/sound/Wheel_Spin", (err, clip) => {}), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip("audio/sound/Wheel_Done", (err, clip) => {}), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip("audio/sound/sfx_getRew", (err, clip) => {}), (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip("audio/sound/jump", (err, clip) => {})]).then(values => {// console.log(values);
          });
        }

        setLoad_Step2() {
          Promise.all([(_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadSpriteFrame_Bundle("tube/1/1", (err, spriteFrame) => {})]).then(values => {
            this.setLoad_Step3();
          });
        } //Read data level


        readDataLevel() {
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getData("level/" + this.indexLevel, (err, content) => {
            // console.log(this.indexLevel,content);
            this.mapLevelStr.set(this.indexLevel, content);
            this.indexLevel++;

            if (this.indexLevel > (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.WATER_MAX_LEVEL) {
              // console.log(this.mapLevelStr);
              let str = "";

              for (let i = 0; i < 500; i++) {
                str += this.mapLevelStr.get(i + 1);
              } // console.log(str);

            } else {
              this.readDataLevel();
            }
          });
        }

        readDataLevel_Challenge() {
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getData("challenge/" + this.indexLevel, (err, content) => {
            // console.log(this.indexLevel,content);
            let strRows = content.split("|");
            let strRow2 = strRows[1]; // console.log(strRow2);

            let strRow2Data = strRow2.split(";"); // console.log(strRow2Data);

            let str1 = strRows[0];

            for (let i = 0; i < 2; i++) {
              str1 += ";" + strRow2Data[i];
            }

            let str2 = "";

            for (let i = 2; i < strRow2Data.length; i++) {
              str2 += strRow2Data[i] + ";";
            }

            str2 += strRows[2];
            let newContent = str1 + "|" + str2; // console.log(this.indexLevel,newContent);

            this.mapLevelStr.set(this.indexLevel, newContent);
            this.indexLevel++;

            if (this.indexLevel > (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.WATER_MAX_CHALLENGE_LEVEL) {
              // console.log(this.mapLevelStr);
              let str = "";

              for (let i = 0; i < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.WATER_MAX_CHALLENGE_LEVEL; i++) {
                str += this.mapLevelStr.get(i + 1);
              } // console.log(str);

            } else {
              this.readDataLevel_Challenge();
            }
          });
        }

        setLoad_Step3() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).TEST_AD) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.isGetPayloadDataSuccess = true;
          }

          let self = this;
          self.isDataFinished = true;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isGetPlayerDataSuccess && (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isGetPayloadDataSuccess) {
            self.setNextScene();
          }
        }

        getDataPlayerSuccess() {
          if (this.isDataFinished && (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isGetPayloadDataSuccess) {
            this.setNextScene();
          }
        }

        getDataPayloadSuccess() {
          if (this.isDataFinished && (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isGetPlayerDataSuccess) {
            this.setNextScene();
          }
        }

        setNextScene() {
          // console.log("LoadSceneManager2222:"+localConfig.instance.isGetPlayerDataSuccess);
          if (this.isNextScene) return;
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isGetPlayerDataSuccess) return;
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isGetPayloadDataSuccess) return;
          if (!this.isDataFinished) return;
          this.isNextScene = true;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            let arrLeaderboard_contextIDs = [];
            let worldContextID = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getWorldContextID_byWeek((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currWeek);
            arrLeaderboard_contextIDs.push(worldContextID); // for(let i=0; i< 20; i++){
            //     let worldContextID:string = localConfig.instance.getWorldContextID_byWeek(i);
            //     arrLeaderboard_contextIDs.push(worldContextID);
            //     let friendContextId:string = localConfig.instance.getFriendContextID_byWeek(i);
            //     arrLeaderboard_contextIDs.push(friendContextId);
            // }

            (_crd && PGSPlayInstantManager === void 0 ? (_reportPossibleCrUseOfPGSPlayInstantManager({
              error: Error()
            }), PGSPlayInstantManager) : PGSPlayInstantManager).instance.GetLeaderboards_byContextIDs(arrLeaderboard_contextIDs);
          }

          let self = this; // let currProgress = this.loadingProgressBar.progress;
          // console.log("setNextScenesetNextScenesetNextScenesetNextScene");

          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.blackFriday_Infoday = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_BlackFriday();

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.campID_session && (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.campID_session.length > 0) {
            if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.checkCampID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.campID_session)) {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.addCampID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.campID_session);
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logCAMP_ID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.campID_session);
            }

            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.isPaidUser = true;
          }

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.adsetID_session && (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.adsetID_session.length > 0) {
            if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.checkAdsetID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.adsetID_session)) {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.addAdsetID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.adsetID_session);
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logADSET_ID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.adsetID_session);
            }

            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.isPaidUser = true;
          }

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.adsID_session && (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.adsID_session.length > 0) {
            if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.checkAdsID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.adsID_session)) {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.addAdsID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.adsID_session);
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logADS_ID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.adsID_session);
            }

            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.isPaidUser = true;
          }

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.tourID_session && (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.tourID_session.length > 0) {
            if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.checkTourID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.tourID_session)) {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.addTourID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.tourID_session);
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logTour_ID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.tourID_session);
            }
          }

          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.initAfterLoadData();

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isMusic) {
            (_crd && MusicManager === void 0 ? (_reportPossibleCrUseOfMusicManager({
              error: Error()
            }), MusicManager) : MusicManager).instance.openMusic();
          }

          this.setLoad_Step4();
        }

        setLoad_Step4() {
          this.setNextScene222();
        }

        setNextScene222() {
          director.loadScene("play"); // this.setLoad_Step2_NoWait();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loadingProgressBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeTitle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeTitle_Opacity", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeIcon", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodeIcon_Opacity", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
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
//# sourceMappingURL=LoadSceneManager.js.map