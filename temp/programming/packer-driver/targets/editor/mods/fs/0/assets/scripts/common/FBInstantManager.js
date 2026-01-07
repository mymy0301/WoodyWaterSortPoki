System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, game, clientEvent, configuration, AD_END_TYPE, AD_FORMAT_TYPE, AVATAR_TYPE, Constants, ENV_TYPE, TOURNAMENT_TYPE, lodash, MusicManager, resourceUtil, localConfig, FriendAvatarInfo, A2uData, ItemRankInfo, LogEventManager, PGSPlayInstantManager, LeaderboardDataInfo, TournamentPageHostDataInfo, _dec, _class, _class2, _temp, _dec2, _class3, _temp2, _dec3, _class5, _temp3, _crd, ccclass, property, FBInstantManager, CatalogInfo, PurchaseInfo;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfiguration(extras) {
    _reporterNs.report("configuration", "../framework/configuration", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAD_END_TYPE(extras) {
    _reporterNs.report("AD_END_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAD_FORMAT_TYPE(extras) {
    _reporterNs.report("AD_FORMAT_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAVATAR_TYPE(extras) {
    _reporterNs.report("AVATAR_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENV_TYPE(extras) {
    _reporterNs.report("ENV_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTOURNAMENT_TYPE(extras) {
    _reporterNs.report("TOURNAMENT_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOflodash(extras) {
    _reporterNs.report("lodash", "../framework/lodash", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMusicManager(extras) {
    _reporterNs.report("MusicManager", "../framework/musicManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFriendAvatarInfo(extras) {
    _reporterNs.report("FriendAvatarInfo", "./FriendAvatarInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfA2uData(extras) {
    _reporterNs.report("A2uData", "./message-data", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemRankInfo(extras) {
    _reporterNs.report("ItemRankInfo", "./ItemRankInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogEventManager(extras) {
    _reporterNs.report("LogEventManager", "./LogEventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPGSPlayInstantManager(extras) {
    _reporterNs.report("PGSPlayInstantManager", "./PGSPlayInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLeaderboardDataInfo(extras) {
    _reporterNs.report("LeaderboardDataInfo", "./LeaderboardDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWithFriendDataInfo(extras) {
    _reporterNs.report("WithFriendDataInfo", "../game/withFriends/WithFriendDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTournamentPageHostDataInfo(extras) {
    _reporterNs.report("TournamentPageHostDataInfo", "../game/info/TournamentPageHostDataInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      game = _cc.game;
    }, function (_unresolved_2) {
      clientEvent = _unresolved_2.clientEvent;
    }, function (_unresolved_3) {
      configuration = _unresolved_3.configuration;
    }, function (_unresolved_4) {
      AD_END_TYPE = _unresolved_4.AD_END_TYPE;
      AD_FORMAT_TYPE = _unresolved_4.AD_FORMAT_TYPE;
      AVATAR_TYPE = _unresolved_4.AVATAR_TYPE;
      Constants = _unresolved_4.Constants;
      ENV_TYPE = _unresolved_4.ENV_TYPE;
      TOURNAMENT_TYPE = _unresolved_4.TOURNAMENT_TYPE;
    }, function (_unresolved_5) {
      lodash = _unresolved_5.lodash;
    }, function (_unresolved_6) {
      MusicManager = _unresolved_6.MusicManager;
    }, function (_unresolved_7) {
      resourceUtil = _unresolved_7.resourceUtil;
    }, function (_unresolved_8) {
      localConfig = _unresolved_8.localConfig;
    }, function (_unresolved_9) {
      FriendAvatarInfo = _unresolved_9.FriendAvatarInfo;
    }, function (_unresolved_10) {
      A2uData = _unresolved_10.A2uData;
    }, function (_unresolved_11) {
      ItemRankInfo = _unresolved_11.ItemRankInfo;
    }, function (_unresolved_12) {
      LogEventManager = _unresolved_12.LogEventManager;
    }, function (_unresolved_13) {
      PGSPlayInstantManager = _unresolved_13.PGSPlayInstantManager;
    }, function (_unresolved_14) {
      LeaderboardDataInfo = _unresolved_14.LeaderboardDataInfo;
    }, function (_unresolved_15) {
      TournamentPageHostDataInfo = _unresolved_15.TournamentPageHostDataInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6259fSNjGRN/YB+LuH0aZ6b", "FBInstantManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FBInstantManager", FBInstantManager = (_dec = ccclass('FBInstantManager'), _dec(_class = (_temp = _class2 = class FBInstantManager extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "preloadedRewardedVideo", null);

          _defineProperty(this, "preloadedInterstitial", null);

          _defineProperty(this, "TIME_NEXT_INTERSTITIAL", 45);

          _defineProperty(this, "isShowInterstitialAd", true);

          _defineProperty(this, "isCreateShortcutAvailable", false);

          _defineProperty(this, "isInitializeAsync", false);

          _defineProperty(this, "isFinishedLoadScene", false);

          _defineProperty(this, "entryPointData", void 0);

          _defineProperty(this, "isShowAds", false);

          _defineProperty(this, "isFinishedLoad_InterstitialAd", false);

          _defineProperty(this, "fb_InterstitialAd_CallBack", null);

          _defineProperty(this, "TIMEWAIT_INTERSTITIAL_AD", 2);

          _defineProperty(this, "preloadAttemptCount_RewardVideo", 0);

          _defineProperty(this, "maxPreloadAttempts_RewardVideo", 3);

          _defineProperty(this, "isFinishedLoad_RewardedVideo", false);

          _defineProperty(this, "isLoading_RewardedVideo", false);

          _defineProperty(this, "fb_RewardVideo_CallBack", null);

          _defineProperty(this, "TIMEWAIT_REWARDVIDEO_AD", 6);

          _defineProperty(this, "TIMEWAIT_LOADING_REWARDVIDEO_AD", 6);

          _defineProperty(this, "TIME_NEXT_RELOAD_BANNER", 30);

          _defineProperty(this, "isReloadBanner", true);

          _defineProperty(this, "tournamentID", "");

          _defineProperty(this, "contextID", "");

          _defineProperty(this, "asID", "");

          _defineProperty(this, "dataA2U", {});

          _defineProperty(this, "arrCatalogInfos", []);

          _defineProperty(this, "isIAPInitSuccess", true);

          _defineProperty(this, "arrPurchaseInfos", []);
        }

        onLoad() {
          game.addPersistRootNode(this.node);
          FBInstantManager.instance = this; // localConfig.instance.envType = ENV_TYPE.TEST_AD;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            // this.InitFBInstant();
            if (window.mobileCheck() == 1) {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.isMobile = true;
            } else {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.isMobile = false;
            }
          } else {
            console.log("myTestPhotomyTestPhotomyTestPhoto"); // let myTestPhoto:string = "https://i.imgur.com/HnBxgfS.png";

            let myTestPhoto = "https://i.imgur.com/MhuKnur.png";
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).setAvatarSpriteFrame(myTestPhoto, (err, spriteFrame) => {
              console.log("myTestPhotomyTestPhotomyTestPhoto FINISHED"); // FBInstantManager.instance.testShareImage();
            });
          } //performance.now();
          //console.log(renderer.drawCalls);

        }

        testShareImage() {}

        start() {// [3]
          // FBInstant.onPause(function () {
          //     ////////console.log("FBInstant.onPause");
          //   });
          //   FBInstant.shareAsync()
          //console.log("FBInstantManagerFBInstantManagerFBInstantManager");
          //console.log("TIME:"+new Date().getTime());
        }

        update(deltaTime) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            if (!this.isInitializeAsync) {
              ////console.log("isInitializeAsync:" + this.isInitializeAsync);
              // [4]
              if (window["phase"] === "fb_init") {
                this.isInitializeAsync = true; ////console.log("isInitializeAsync:" + this.isInitializeAsync);

                this.setStartGame();
              }
            }
          }
        }

        onDestroy() {
          if (this.isInitializeAsync) {
            FBInstant.quit();
          }
        }

        InitFBInstant_Finished() {
          //console.log("Time:"+new Date().getTime());
          ////console.log("InitFBInstantInitFBInstantInitFBInstantInitFBInstantInitFBInstant");
          // Many properties will be null until the initialization completes.
          // This is a good place to fetch them:
          var locale = FBInstant.getLocale(); // 'en_US'

          var platform = FBInstant.getPlatform(); // 'IOS'
          //console.log(platform);

          var sdkVersion = FBInstant.getSDKVersion(); // '3.0'

          var playerID = FBInstant.player.getID();
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.playerID = playerID;
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).setAvatarSpriteFrame(FBInstant.player.getPhoto(), (err, spriteFrame) => {});

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.FAN_enable) {
            this.Load_Ad_SheduleOne();
          }

          FBInstant.getSupportedAPIs(); // this.Create_Shortcut();

          let entryPointData = FBInstant.getEntryPointData();
          console.log(entryPointData);

          if (entryPointData != null) {
            try {
              let entryPointDataPayLoad = JSON.parse(entryPointData);
              let campID = entryPointDataPayLoad.fb_instant_game_campaign_id;

              if (campID) {
                (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.campID_session = campID;
              }

              let adsetID = entryPointDataPayLoad.fb_instant_game_adset_id;

              if (adsetID) {
                (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.adsetID_session = adsetID;
              }

              let ads = entryPointDataPayLoad.fb_instant_game_ad_id;

              if (ads) {
                (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.adsID_session = ads;
              }
            } catch (error) {
              if ((_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
                error: Error()
              }), lodash) : lodash).isObject(entryPointData)) {
                // console.log(entryPointData.ad_id);
                let campID = entryPointData.fb_instant_game_campaign_id;

                if (campID) {
                  (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.campID_session = campID;
                }

                let adsetID = entryPointData.fb_instant_game_adset_id;

                if (adsetID) {
                  (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.adsetID_session = adsetID;
                }

                let ads = entryPointData.fb_instant_game_ad_id;

                if (ads) {
                  (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.adsID_session = ads;
                }
              }
            }

            if (typeof entryPointData.withfriendData !== 'undefined') {
              if (entryPointData.withfriendData.length > 0) {
                try {
                  (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.currWithFriendDataInfo = JSON.parse(entryPointData.withfriendData);
                  console.log((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.currWithFriendDataInfo);

                  if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.currWithFriendDataInfo.levelIndex) {
                    (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.currWithFriendDataInfo.levelIndex = (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
                      error: Error()
                    }), lodash) : lodash).random(20, 150);
                  }

                  if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.currWithFriendDataInfo.senderID != FBInstantManager.instance.getID()) {
                    (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.currWithFriendDataInfo.receiverID = FBInstantManager.instance.getID();
                    (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.currWithFriendDataInfo.receiverAvatarURL = FBInstantManager.instance.getPhotoUrl();
                    (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.currWithFriendDataInfo.receiverName = FBInstantManager.instance.getName();
                  }
                } catch (error) {
                  (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.currWithFriendDataInfo = null;
                }
              }
            }
          }

          FBInstant.getEntryPointAsync().then(function (n) {
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logInitUserPropertysID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.playerID, n, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.campID_session, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.adsetID_session, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.adsID_session);
          }).catch(function () {
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logInitUserPropertysID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.playerID, "no_entry", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.campID_session, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.adsetID_session, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.adsID_session);
          });
          FBInstant.player.getSignedPlayerInfoAsync('metadata').then(signedPlayerInfo => {
            const playerID = signedPlayerInfo.getPlayerID();
            const signature = signedPlayerInfo.getSignature(); //console.log(signature);
            // PlayFabManager.instance.LoginWithFBInstant(signature);
            // PGSPlayInstantManager.instance.LoginFBInstant();
          }); // this.SubscribeBot();

          this.getAllCatalogs();
          this.getTournament();
          this.GetListConnectPlayers();
          this.GetDataPlayer();
          this.GetASID();
          this.getIAP_AllPack();
        }

        Create_Shortcut(cb) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType != (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) return;
          let self = this;
          FBInstant.canCreateShortcutAsync().then(canCreateShortcut => {
            self.isCreateShortcutAvailable = canCreateShortcut;

            if (canCreateShortcut) {
              FBInstant.createShortcutAsync().then(() => {
                // Shortcut created
                cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_CALLBACK_SUCCESS);
              }).catch(e => {
                cb(e, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_CALLBACK_FAIL);
              });
            }
          });
        }

        CheckCanCreateShortcut(cb) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType != (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) return true;
          let self = this;
          FBInstant.canCreateShortcutAsync().then(canCreateShortcut => {
            self.isCreateShortcutAvailable = canCreateShortcut;
            cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_CALLBACK_SUCCESS);
          });
        }

        CreateShortcut(cb) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType != (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) return;
          FBInstant.createShortcutAsync().then(() => {
            // Shortcut created
            cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_CALLBACK_SUCCESS);
          }).catch(e => {
            console.error(e);
            cb(e, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_CALLBACK_FAIL);
          });
        }

        SubscribeBot() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType != (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) return;
          FBInstant.player.canSubscribeBotAsync().then(can_subscribe => {
            FBInstant.player.subscribeBotAsync().then().catch(function (e) {// Handle subscription failure
            });
          });
        }

        Preload_InterstitialAdAsync() {
          this.preloadedInterstitial = null;
          let self = this;
          self.isFinishedLoad_InterstitialAd = false;
          let startTimeLoadInterstitial = new Date().getTime();
          FBInstant.getInterstitialAdAsync((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).FB_INTERSTITIAL_PLACEMENT_ID).then(function (interstitial) {
            self.preloadedInterstitial = interstitial;
            return self.preloadedInterstitial.loadAsync();
          }).then(function () {
            // Ad noT loaded
            self.isFinishedLoad_InterstitialAd = true;
            let endTimeLoadInterstitial = new Date().getTime();
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logAdRequest((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getAD_FormatType((_crd && AD_FORMAT_TYPE === void 0 ? (_reportPossibleCrUseOfAD_FORMAT_TYPE({
              error: Error()
            }), AD_FORMAT_TYPE) : AD_FORMAT_TYPE).INTERSTITIAL), "", 1, endTimeLoadInterstitial - startTimeLoadInterstitial);
          }).catch(function () {
            self.preloadedInterstitial = null;
            self.isFinishedLoad_InterstitialAd = false;
            let endTimeLoadInterstitial = new Date().getTime();
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logAdRequest((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getAD_FormatType((_crd && AD_FORMAT_TYPE === void 0 ? (_reportPossibleCrUseOfAD_FORMAT_TYPE({
              error: Error()
            }), AD_FORMAT_TYPE) : AD_FORMAT_TYPE).INTERSTITIAL), "", 0, endTimeLoadInterstitial - startTimeLoadInterstitial);
          });
        }

        Show_InterstitialAdAsync(location, button_name, cb) {
          let self = this;
          self.fb_InterstitialAd_CallBack = cb;
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LOADING_AD_POPUP);

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isRemoveAd) {
            self.fb_InterstitialAd_CallBack(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_INTERSTITIAL_CALLBACK_SUCCESS);
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).HIDE_LOADING_AD_POPUP);
            self.SetNextTime_ShowInterstitialAd();
          } // this.unschedule(this.timeWait_InterstitialAd_Callback);


          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.FAN_enable) {
            self.fb_InterstitialAd_CallBack(new Error("ERROR"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_INTERSTITIAL_CALLBACK_FAIL);
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).HIDE_LOADING_AD_POPUP);
          } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).TEST_AD) {
            if (this.isShowInterstitialAd) {
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logAdImpression((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getAD_FormatType((_crd && AD_FORMAT_TYPE === void 0 ? (_reportPossibleCrUseOfAD_FORMAT_TYPE({
                error: Error()
              }), AD_FORMAT_TYPE) : AD_FORMAT_TYPE).INTERSTITIAL), location + "_" + button_name, 1);
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logAd_Interstitial_Success(location, button_name);
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logAdComplete((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getAD_FormatType((_crd && AD_FORMAT_TYPE === void 0 ? (_reportPossibleCrUseOfAD_FORMAT_TYPE({
                error: Error()
              }), AD_FORMAT_TYPE) : AD_FORMAT_TYPE).INTERSTITIAL), location + "_" + button_name, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getAd_EndType((_crd && AD_END_TYPE === void 0 ? (_reportPossibleCrUseOfAD_END_TYPE({
                error: Error()
              }), AD_END_TYPE) : AD_END_TYPE).DONE));

              if (self.fb_InterstitialAd_CallBack) {
                self.fb_InterstitialAd_CallBack(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_INTERSTITIAL_CALLBACK_SUCCESS);
                (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                  error: Error()
                }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).HIDE_LOADING_AD_POPUP);
                self.SetNextTime_ShowInterstitialAd();
              }
            } else {
              if (self.fb_InterstitialAd_CallBack) {
                (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                  error: Error()
                }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).HIDE_LOADING_AD_POPUP);
                self.fb_InterstitialAd_CallBack(new Error("next TIME!"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_INTERSTITIAL_CALLBACK_FAIL);
              }
            }
          } else {
            if (this.isInitializeAsync) {
              if (this.isShowInterstitialAd) {
                if (this.preloadedInterstitial && this.isFinishedLoad_InterstitialAd) {
                  (_crd && MusicManager === void 0 ? (_reportPossibleCrUseOfMusicManager({
                    error: Error()
                  }), MusicManager) : MusicManager).instance.pauseMusic();
                  (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                    error: Error()
                  }), LogEventManager) : LogEventManager).instance.logAd_Interstitial_Show(location, button_name);
                  this.preloadedInterstitial.showAsync().then(function () {
                    (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                      error: Error()
                    }), LogEventManager) : LogEventManager).instance.logAdImpression((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.getAD_FormatType((_crd && AD_FORMAT_TYPE === void 0 ? (_reportPossibleCrUseOfAD_FORMAT_TYPE({
                      error: Error()
                    }), AD_FORMAT_TYPE) : AD_FORMAT_TYPE).INTERSTITIAL), location + "_" + button_name, 1);
                    (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                      error: Error()
                    }), LogEventManager) : LogEventManager).instance.logAd_Interstitial_Success(location, button_name);
                    (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                      error: Error()
                    }), LogEventManager) : LogEventManager).instance.logAdComplete((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.getAD_FormatType((_crd && AD_FORMAT_TYPE === void 0 ? (_reportPossibleCrUseOfAD_FORMAT_TYPE({
                      error: Error()
                    }), AD_FORMAT_TYPE) : AD_FORMAT_TYPE).INTERSTITIAL), location + "_" + button_name, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.getAd_EndType((_crd && AD_END_TYPE === void 0 ? (_reportPossibleCrUseOfAD_END_TYPE({
                      error: Error()
                    }), AD_END_TYPE) : AD_END_TYPE).DONE));
                    (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                      error: Error()
                    }), LogEventManager) : LogEventManager).instance.logEvent_InterAd();

                    if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.isPaidUser) {
                      (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                        error: Error()
                      }), LogEventManager) : LogEventManager).instance.logEvent_InterAd_Paid();
                    } else {
                      (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                        error: Error()
                      }), LogEventManager) : LogEventManager).instance.logEvent_InterAd_Organic();
                    }

                    (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                      error: Error()
                    }), LogEventManager) : LogEventManager).instance.logCAMPID_INTER((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.log_CAMP_ID);
                    (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                      error: Error()
                    }), LogEventManager) : LogEventManager).instance.logADSETID_INTER((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.log_ADSET_ID);
                    (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                      error: Error()
                    }), LogEventManager) : LogEventManager).instance.logADSID_INTER((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.log_ADS_ID);
                    (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                      error: Error()
                    }), LogEventManager) : LogEventManager).instance.logTOURID_INTER((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.tourID_session);
                    (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                      error: Error()
                    }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).HIDE_LOADING_AD_POPUP); //////console.log("Interstitial ad finished successfully");

                    (_crd && MusicManager === void 0 ? (_reportPossibleCrUseOfMusicManager({
                      error: Error()
                    }), MusicManager) : MusicManager).instance.resumeMusic();
                    self.SetNextTime_ShowInterstitialAd();
                    cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).FB_INTERSTITIAL_CALLBACK_SUCCESS);
                    self.Preload_InterstitialAdAsync();
                  }).catch(function (e) {
                    (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                      error: Error()
                    }), LogEventManager) : LogEventManager).instance.logAdImpression((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.getAD_FormatType((_crd && AD_FORMAT_TYPE === void 0 ? (_reportPossibleCrUseOfAD_FORMAT_TYPE({
                      error: Error()
                    }), AD_FORMAT_TYPE) : AD_FORMAT_TYPE).INTERSTITIAL), location + "_" + button_name, 0);
                    (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                      error: Error()
                    }), LogEventManager) : LogEventManager).instance.logAd_Interstitial_Fail(location, button_name);
                    (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                      error: Error()
                    }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).HIDE_LOADING_AD_POPUP); //////console.log("FB_INTERSTITIAL_CALLBACK_FAILFB_INTERSTITIAL_CALLBACK_FAILFB_INTERSTITIAL_CALLBACK_FAIL");

                    console.error(e.message);
                    (_crd && MusicManager === void 0 ? (_reportPossibleCrUseOfMusicManager({
                      error: Error()
                    }), MusicManager) : MusicManager).instance.resumeMusic();
                    cb(e.message, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).FB_INTERSTITIAL_CALLBACK_FAIL);
                    self.Preload_InterstitialAdAsync();
                  });
                } else {
                  (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                    error: Error()
                  }), LogEventManager) : LogEventManager).instance.logAd_Interstitial_Fail(location, button_name);
                  (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                    error: Error()
                  }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).HIDE_LOADING_AD_POPUP); //////console.log("Show_InterstitialAdAsync preload fail!preload fail!preload fail!");

                  cb(new Error("preload fail!"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).FB_INTERSTITIAL_CALLBACK_FAIL);
                  this.Preload_InterstitialAdAsync();
                }
              } else {
                //////console.log("Show_InterstitialAdAsync next TIME!next TIME!next TIME!");
                (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                  error: Error()
                }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).HIDE_LOADING_AD_POPUP);
                self.fb_InterstitialAd_CallBack(new Error("next TIME!"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_INTERSTITIAL_CALLBACK_FAIL);
              }
            } else {
              //////console.log("Show_InterstitialAdAsync INIT FAIL!INIT FAIL!INIT FAIL!INIT FAIL!INIT FAIL!");
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).HIDE_LOADING_AD_POPUP);
              self.fb_InterstitialAd_CallBack(new Error("INIT FAIL!"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).FB_INTERSTITIAL_CALLBACK_FAIL);
            }
          }
        }

        timeWait_InterstitialAd_Callback() {// this.fb_InterstitialAd_CallBack(new Error("load FAIL"), Constants.FB_INTERSTITIAL_CALLBACK_FAIL);
          // clientEvent.dispatchEvent(Constants.HIDE_LOADING_AD_POPUP);
          // MusicManager.instance.resumeMusic();
          // this.fb_InterstitialAd_CallBack = null;
        } //#region reward video


        Preload_RewardAdAsync() {
          if (this.isLoading_RewardedVideo) {
            this.schedule(this.timeWait_Loading_RewardVideoAd, 1, 0, this.TIMEWAIT_LOADING_REWARDVIDEO_AD);
            return;
          }

          this.isLoading_RewardedVideo = true;
          this.preloadedRewardedVideo = null;
          let self = this;
          self.isFinishedLoad_RewardedVideo = false;

          if (this.preloadAttemptCount_RewardVideo >= this.maxPreloadAttempts_RewardVideo) {
            console.error('Đã đạt đến số lần preload tối đa. Không cố gắng preload nữa.');
            return;
          }

          let startTimeLoadRewardVideo = new Date().getTime();
          FBInstant.getRewardedVideoAsync((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).FB_REWARDED_PLACEMENT_ID).then(function (rewardedVideo) {
            self.preloadedRewardedVideo = rewardedVideo;
            return self.preloadedRewardedVideo.loadAsync();
          }).then(function () {
            //Ad loaded
            self.unschedule(self.timeWait_Loading_RewardVideoAd);
            self.isLoading_RewardedVideo = false;
            self.isFinishedLoad_RewardedVideo = true;
            self.preloadAttemptCount_RewardVideo = 0;
            let endTimeLoadRewardVideo = new Date().getTime();
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logAdRequest((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getAD_FormatType((_crd && AD_FORMAT_TYPE === void 0 ? (_reportPossibleCrUseOfAD_FORMAT_TYPE({
              error: Error()
            }), AD_FORMAT_TYPE) : AD_FORMAT_TYPE).REWARDED_VIDEO), "", 1, endTimeLoadRewardVideo - startTimeLoadRewardVideo);
          }).catch(function (err) {
            self.unschedule(self.timeWait_Loading_RewardVideoAd);
            self.isLoading_RewardedVideo = false;
            self.preloadAttemptCount_RewardVideo++;
            self.preloadedRewardedVideo = null;
            self.isFinishedLoad_RewardedVideo = false;
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logAd_Reward_PreloadFail(err.message);
            let endTimeLoadRewardVideo = new Date().getTime();
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logAdRequest((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getAD_FormatType((_crd && AD_FORMAT_TYPE === void 0 ? (_reportPossibleCrUseOfAD_FORMAT_TYPE({
              error: Error()
            }), AD_FORMAT_TYPE) : AD_FORMAT_TYPE).REWARDED_VIDEO), "", 0, endTimeLoadRewardVideo - startTimeLoadRewardVideo);
            self.Preload_RewardAdAsync();
          });
        }

        SetNextTime_ShowInterstitialAd() {
          // console.log(this.TIME_NEXT_INTERSTITIAL);
          this.isShowInterstitialAd = false;
          this.scheduleOnce(function () {
            // Here `this` is referring to the component
            this.isShowInterstitialAd = true;
          }, this.TIME_NEXT_INTERSTITIAL);
        }

        // Show_RewardedVideoAsync(location: string, button_name: string, cb?: FBIntanstAd_Callback){
        //     LogEventManager.instance.logAd_Reward_Click(location, button_name);
        //     let self = this;
        //     self.fb_RewardVideo_CallBack = cb;
        //     clientEvent.dispatchEvent(Constants.SHOW_LOADING_AD_POPUP);
        //     this.unschedule(this.timeWait_RewardVideoAd_Callback);
        //     if(!localConfig.instance.FAN_enable){
        //         clientEvent.dispatchEvent(Constants.HIDE_LOADING_AD_POPUP);
        //         self.fb_RewardVideo_CallBack(new Error("load FAIL"), Constants.FB_REWARD_CALLBACK_FAIL);
        //         clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION, "No Ads Available!");
        //     }
        //     else if(localConfig.instance.envType == ENV_TYPE.TEST_AD ){
        //         // this.scheduleOnce(this.timeWait_RewardVideoAd_Callback,this.TIMEWAIT_REWARDVIDEO_AD);
        //         // clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION, LanguageManager.instance.getText_byKey(ITEM_LANGUAGE_KEY_TYPE.no_ad));
        //         // this.schedule(this.timeWait_RewardVideoAd_Callback,1,0,this.TIMEWAIT_REWARDVIDEO_AD);
        //         clientEvent.dispatchEvent(Constants.HIDE_LOADING_AD_POPUP);
        //         cb(null, Constants.FB_REWARD_CALLBACK_SUCCESS);
        //     } else {
        //         if (this.isInitializeAsync) {
        //             MusicManager.instance.pauseMusic();
        //             this.schedule(this.timeWait_RewardVideoAd_Callback,1,0,this.TIMEWAIT_REWARDVIDEO_AD);
        //             FBInstant.getRewardedVideoAsync(
        //                 Constants.FB_REWARDED_PLACEMENT_ID,
        //             ).then(function (rewardedVideo) {
        //                 if (self.fb_RewardVideo_CallBack) {
        //                     self.preloadedRewardedVideo = rewardedVideo;
        //                     return self.preloadedRewardedVideo.loadAsync();
        //                 }
        //             }).then(function () {
        //                 self.preloadedRewardedVideo.showAsync()
        //                     .then(function () {
        //                         LogEventManager.instance.logAd_Reward_Scuccess(location, button_name);
        //                         LogEventManager.instance.logEvent_RewardAd();
        //                         LogEventManager.instance.logEvent_RewardAd_Completed();
        //                         if (localConfig.instance.isPaidUser) {
        //                             LogEventManager.instance.logEvent_RewardAd_Paid();
        //                         } else {
        //                             LogEventManager.instance.logEvent_RewardAd_Organic();
        //                         }
        //                         LogEventManager.instance.logCAMPID_REWARDED(localConfig.instance.log_CAMP_ID);
        //                         LogEventManager.instance.logADSETID_REWARDED(localConfig.instance.log_ADSET_ID);
        //                         LogEventManager.instance.logADSID_REWARDED(localConfig.instance.log_ADS_ID);
        //                         LogEventManager.instance.logTOURID_REWARDED(localConfig.instance.tourID_session);
        //                         if (self.fb_RewardVideo_CallBack) {
        //                             self.unschedule(self.timeWait_RewardVideoAd_Callback);
        //                             // Ad watched
        //                             self.SetNextTime_ShowInterstitialAd();
        //                             clientEvent.dispatchEvent(Constants.HIDE_LOADING_AD_POPUP);
        //                             self.fb_RewardVideo_CallBack(null, Constants.FB_REWARD_CALLBACK_SUCCESS);
        //                             MusicManager.instance.resumeMusic();
        //                             LogEventManager.instance.logEvent_RewardAd_Completed();
        //                             self.fb_RewardVideo_CallBack = null;
        //                         }
        //                     }).catch(function (err) {
        //                         self.unschedule(self.timeWait_RewardVideoAd_Callback);
        //                         if (err.code == "USER_INPUT") {
        //                             LogEventManager.instance.logAd_Reward_Skip(location, button_name);
        //                             LogEventManager.instance.logEvent_RewardAd();
        //                             if (localConfig.instance.isPaidUser) {
        //                                 LogEventManager.instance.logEvent_RewardAd_Paid();
        //                             } else {
        //                                 LogEventManager.instance.logEvent_RewardAd_Organic();
        //                             }
        //                             LogEventManager.instance.logCAMPID_REWARDED(localConfig.instance.log_CAMP_ID);
        //                             LogEventManager.instance.logADSETID_REWARDED(localConfig.instance.log_ADSET_ID);
        //                             LogEventManager.instance.logADSID_REWARDED(localConfig.instance.log_ADS_ID);
        //                             LogEventManager.instance.logTOURID_REWARDED(localConfig.instance.tourID_session);
        //                         } else {
        //                             LogEventManager.instance.logAd_Reward_Show_Fail(location, button_name,err.message);
        //                             clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION, "No Ads Available!");
        //                         }
        //                         if (self.fb_RewardVideo_CallBack) {
        //                             MusicManager.instance.resumeMusic();
        //                             clientEvent.dispatchEvent(Constants.HIDE_LOADING_AD_POPUP);
        //                             self.fb_RewardVideo_CallBack(new Error("load FAIL"), Constants.FB_REWARD_CALLBACK_FAIL);
        //                             self.fb_RewardVideo_CallBack = null;
        //                         }
        //                     });
        //             }).catch(function (err) {
        //                 LogEventManager.instance.logAd_Reward_Fail(location, button_name,err.message);
        //                 if (self.fb_RewardVideo_CallBack) {
        //                     self.unschedule(self.timeWait_RewardVideoAd_Callback);
        //                     MusicManager.instance.resumeMusic();
        //                     clientEvent.dispatchEvent(Constants.HIDE_LOADING_AD_POPUP);
        //                     self.fb_RewardVideo_CallBack(new Error("load FAIL"), Constants.FB_REWARD_CALLBACK_FAIL);
        //                     clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION, "No Ads Available!");
        //                     self.fb_RewardVideo_CallBack = null;
        //                 }
        //             });
        //         } else {
        //             LogEventManager.instance.logAd_Reward_InitFail(location, button_name);
        //             //////console.log("Show_RewardedVideoAsync INIT FAIL!INIT FAIL!INIT FAIL!INIT FAIL!INIT FAIL!");
        //             clientEvent.dispatchEvent(Constants.HIDE_LOADING_AD_POPUP);
        //             cb(new Error("INIT FAIL!"), Constants.FB_REWARD_CALLBACK_FAIL);
        //             clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION, "No Ads Available!");
        //         }
        //     }
        // }
        Show_RewardedVideoAsync(location, button_name, cb) {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logAd_Reward_Click(location, button_name);
          let self = this;
          self.fb_RewardVideo_CallBack = cb;
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LOADING_AD_POPUP);
          this.unschedule(this.timeWait_RewardVideoAd_Callback);

          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.FAN_enable) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).HIDE_LOADING_AD_POPUP);
            self.fb_RewardVideo_CallBack(new Error("load FAIL"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_REWARD_CALLBACK_FAIL);
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_NOTIFICATION, "No Ads Available!");
          } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).TEST_AD) {
            // this.scheduleOnce(this.timeWait_RewardVideoAd_Callback,this.TIMEWAIT_REWARDVIDEO_AD);
            // clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION, LanguageManager.instance.getText_byKey(ITEM_LANGUAGE_KEY_TYPE.no_ad));
            // this.schedule(this.timeWait_RewardVideoAd_Callback,1,0,this.TIMEWAIT_REWARDVIDEO_AD);
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).HIDE_LOADING_AD_POPUP);
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logAdImpression((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getAD_FormatType((_crd && AD_FORMAT_TYPE === void 0 ? (_reportPossibleCrUseOfAD_FORMAT_TYPE({
              error: Error()
            }), AD_FORMAT_TYPE) : AD_FORMAT_TYPE).REWARDED_VIDEO), location + "_" + button_name, 1);
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logAd_Reward_Scuccess(location, button_name);
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logAdComplete((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getAD_FormatType((_crd && AD_FORMAT_TYPE === void 0 ? (_reportPossibleCrUseOfAD_FORMAT_TYPE({
              error: Error()
            }), AD_FORMAT_TYPE) : AD_FORMAT_TYPE).REWARDED_VIDEO), location + "_" + button_name, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getAd_EndType((_crd && AD_END_TYPE === void 0 ? (_reportPossibleCrUseOfAD_END_TYPE({
              error: Error()
            }), AD_END_TYPE) : AD_END_TYPE).DONE));
            cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_REWARD_CALLBACK_SUCCESS);
          } else {
            if (this.isInitializeAsync) {
              (_crd && MusicManager === void 0 ? (_reportPossibleCrUseOfMusicManager({
                error: Error()
              }), MusicManager) : MusicManager).instance.pauseMusic();
              this.schedule(this.timeWait_RewardVideoAd_Callback, 1, 0, this.TIMEWAIT_REWARDVIDEO_AD);

              if (this.preloadedRewardedVideo && this.isFinishedLoad_RewardedVideo) {
                self.preloadedRewardedVideo.showAsync().then(function () {
                  (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                    error: Error()
                  }), LogEventManager) : LogEventManager).instance.logAdImpression((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.getAD_FormatType((_crd && AD_FORMAT_TYPE === void 0 ? (_reportPossibleCrUseOfAD_FORMAT_TYPE({
                    error: Error()
                  }), AD_FORMAT_TYPE) : AD_FORMAT_TYPE).REWARDED_VIDEO), location + "_" + button_name, 1);
                  (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                    error: Error()
                  }), LogEventManager) : LogEventManager).instance.logAd_Reward_Scuccess(location, button_name);
                  (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                    error: Error()
                  }), LogEventManager) : LogEventManager).instance.logAdComplete((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.getAD_FormatType((_crd && AD_FORMAT_TYPE === void 0 ? (_reportPossibleCrUseOfAD_FORMAT_TYPE({
                    error: Error()
                  }), AD_FORMAT_TYPE) : AD_FORMAT_TYPE).REWARDED_VIDEO), location + "_" + button_name, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.getAd_EndType((_crd && AD_END_TYPE === void 0 ? (_reportPossibleCrUseOfAD_END_TYPE({
                    error: Error()
                  }), AD_END_TYPE) : AD_END_TYPE).DONE));
                  (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                    error: Error()
                  }), LogEventManager) : LogEventManager).instance.logEvent_RewardAd();
                  (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                    error: Error()
                  }), LogEventManager) : LogEventManager).instance.logEvent_RewardAd_Completed();

                  if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.isPaidUser) {
                    (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                      error: Error()
                    }), LogEventManager) : LogEventManager).instance.logEvent_RewardAd_Paid();
                  } else {
                    (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                      error: Error()
                    }), LogEventManager) : LogEventManager).instance.logEvent_RewardAd_Organic();
                  }

                  (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                    error: Error()
                  }), LogEventManager) : LogEventManager).instance.logCAMPID_REWARDED((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.log_CAMP_ID);
                  (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                    error: Error()
                  }), LogEventManager) : LogEventManager).instance.logADSETID_REWARDED((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.log_ADSET_ID);
                  (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                    error: Error()
                  }), LogEventManager) : LogEventManager).instance.logADSID_REWARDED((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.log_ADS_ID);
                  (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                    error: Error()
                  }), LogEventManager) : LogEventManager).instance.logTOURID_REWARDED((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.tourID_session);

                  if (self.fb_RewardVideo_CallBack) {
                    self.unschedule(self.timeWait_RewardVideoAd_Callback); // Ad watched

                    self.SetNextTime_ShowInterstitialAd();
                    (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                      error: Error()
                    }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).HIDE_LOADING_AD_POPUP);
                    self.fb_RewardVideo_CallBack(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).FB_REWARD_CALLBACK_SUCCESS);
                    (_crd && MusicManager === void 0 ? (_reportPossibleCrUseOfMusicManager({
                      error: Error()
                    }), MusicManager) : MusicManager).instance.resumeMusic();
                    (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                      error: Error()
                    }), LogEventManager) : LogEventManager).instance.logEvent_RewardAd_Completed();
                    self.fb_RewardVideo_CallBack = null;
                  }

                  self.preloadAttemptCount_RewardVideo = 0;
                  self.Preload_RewardAdAsync();
                }).catch(function (err) {
                  (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                    error: Error()
                  }), LogEventManager) : LogEventManager).instance.logAdImpression((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.getAD_FormatType((_crd && AD_FORMAT_TYPE === void 0 ? (_reportPossibleCrUseOfAD_FORMAT_TYPE({
                    error: Error()
                  }), AD_FORMAT_TYPE) : AD_FORMAT_TYPE).REWARDED_VIDEO), location + "_" + button_name, 0);
                  self.unschedule(self.timeWait_RewardVideoAd_Callback);

                  if (err.code == "USER_INPUT") {
                    (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                      error: Error()
                    }), LogEventManager) : LogEventManager).instance.logAdComplete((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.getAD_FormatType((_crd && AD_FORMAT_TYPE === void 0 ? (_reportPossibleCrUseOfAD_FORMAT_TYPE({
                      error: Error()
                    }), AD_FORMAT_TYPE) : AD_FORMAT_TYPE).REWARDED_VIDEO), location + "_" + button_name, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.getAd_EndType((_crd && AD_END_TYPE === void 0 ? (_reportPossibleCrUseOfAD_END_TYPE({
                      error: Error()
                    }), AD_END_TYPE) : AD_END_TYPE).QUIT));
                    (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                      error: Error()
                    }), LogEventManager) : LogEventManager).instance.logAd_Reward_Skip(location, button_name);
                    (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                      error: Error()
                    }), LogEventManager) : LogEventManager).instance.logEvent_RewardAd();

                    if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.isPaidUser) {
                      (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                        error: Error()
                      }), LogEventManager) : LogEventManager).instance.logEvent_RewardAd_Paid();
                    } else {
                      (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                        error: Error()
                      }), LogEventManager) : LogEventManager).instance.logEvent_RewardAd_Organic();
                    }

                    (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                      error: Error()
                    }), LogEventManager) : LogEventManager).instance.logCAMPID_REWARDED((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.log_CAMP_ID);
                    (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                      error: Error()
                    }), LogEventManager) : LogEventManager).instance.logADSETID_REWARDED((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.log_ADSET_ID);
                    (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                      error: Error()
                    }), LogEventManager) : LogEventManager).instance.logADSID_REWARDED((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.log_ADS_ID);
                    (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                      error: Error()
                    }), LogEventManager) : LogEventManager).instance.logTOURID_REWARDED((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.tourID_session);
                  } else {
                    (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                      error: Error()
                    }), LogEventManager) : LogEventManager).instance.logAd_Reward_Show_Fail(location, button_name, err.message);
                    (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                      error: Error()
                    }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).SHOW_NOTIFICATION, "No Ads Available!");
                  }

                  if (self.fb_RewardVideo_CallBack) {
                    (_crd && MusicManager === void 0 ? (_reportPossibleCrUseOfMusicManager({
                      error: Error()
                    }), MusicManager) : MusicManager).instance.resumeMusic();
                    (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                      error: Error()
                    }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).HIDE_LOADING_AD_POPUP);
                    self.fb_RewardVideo_CallBack(new Error("load FAIL"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).FB_REWARD_CALLBACK_FAIL);
                    self.fb_RewardVideo_CallBack = null;
                  }

                  self.preloadAttemptCount_RewardVideo = 0;
                  self.Preload_RewardAdAsync();
                });
              } else {
                (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                  error: Error()
                }), LogEventManager) : LogEventManager).instance.logAd_Reward_Fail(location, button_name, "preload RewardedVideo FAIL!");

                if (self.fb_RewardVideo_CallBack) {
                  self.unschedule(self.timeWait_RewardVideoAd_Callback);
                  (_crd && MusicManager === void 0 ? (_reportPossibleCrUseOfMusicManager({
                    error: Error()
                  }), MusicManager) : MusicManager).instance.resumeMusic();
                  (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                    error: Error()
                  }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).HIDE_LOADING_AD_POPUP);
                  self.fb_RewardVideo_CallBack(new Error("load FAIL"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).FB_REWARD_CALLBACK_FAIL);
                  (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                    error: Error()
                  }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).SHOW_NOTIFICATION, "No Ads Available!");
                  self.fb_RewardVideo_CallBack = null;
                }

                self.preloadAttemptCount_RewardVideo = 0;
                self.Preload_RewardAdAsync();
              }
            } else {
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logAd_Reward_InitFail(location, button_name); //////console.log("Show_RewardedVideoAsync INIT FAIL!INIT FAIL!INIT FAIL!INIT FAIL!INIT FAIL!");

              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).HIDE_LOADING_AD_POPUP);
              cb(new Error("INIT FAIL!"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).FB_REWARD_CALLBACK_FAIL);
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_NOTIFICATION, "No Ads Available!");
            }
          }
        }

        timeWait_RewardVideoAd_Callback() {
          this.fb_RewardVideo_CallBack(new Error("load FAIL"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).FB_REWARD_CALLBACK_FAIL);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_NOTIFICATION, "No Ads Available!");
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).HIDE_LOADING_AD_POPUP);
          (_crd && MusicManager === void 0 ? (_reportPossibleCrUseOfMusicManager({
            error: Error()
          }), MusicManager) : MusicManager).instance.resumeMusic();
          this.fb_RewardVideo_CallBack = null;
        }

        timeWait_Loading_RewardVideoAd() {
          this.isLoading_RewardedVideo = false;
        }

        Load_BannerAdAsync() {
          ////console.log("Load_BannerAdAsyncLoad_BannerAdAsync");
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isRemoveAd) return;
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.FAN_enable) return;
          let strartTimeLoadBanner = new Date().getTime();
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logAd_Banner_Show("");
          FBInstant.loadBannerAdAsync((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).FB_BANNER_PLACEMENT_ID).then(function (banner) {
            ////console.log("Load_Banner SUCCESS");
            let endTimeLoadBanner = new Date().getTime();
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logAd_Banner_Success("");
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logEvent_BannerAd();

            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.isPaidUser) {
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logEvent_BannerAd_Paid();
            } else {
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logEvent_BannerAd_Organic();
            }

            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logCAMPID_BANNER((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.log_CAMP_ID);
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logADSETID_BANNER((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.log_ADSET_ID);
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logADSID_BANNER((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.log_ADS_ID);
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logTOURID_BANNER((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.tourID_session);
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logAdRequest((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getAD_FormatType((_crd && AD_FORMAT_TYPE === void 0 ? (_reportPossibleCrUseOfAD_FORMAT_TYPE({
              error: Error()
            }), AD_FORMAT_TYPE) : AD_FORMAT_TYPE).BANNER), "", 1, endTimeLoadBanner - strartTimeLoadBanner);
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logAdImpression((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getAD_FormatType((_crd && AD_FORMAT_TYPE === void 0 ? (_reportPossibleCrUseOfAD_FORMAT_TYPE({
              error: Error()
            }), AD_FORMAT_TYPE) : AD_FORMAT_TYPE).BANNER), "", 1);
          }).catch(function (err) {
            ////console.log("Load_Banner FAIL");
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logAd_Banner_Fail("");
            let endTimeLoadBanner = new Date().getTime();
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logAdRequest((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getAD_FormatType((_crd && AD_FORMAT_TYPE === void 0 ? (_reportPossibleCrUseOfAD_FORMAT_TYPE({
              error: Error()
            }), AD_FORMAT_TYPE) : AD_FORMAT_TYPE).BANNER), "", 0, endTimeLoadBanner - strartTimeLoadBanner);
          });
        }

        Load_BannerAdAsync_SheduleOne() {
          // console.log("Load_BannerAdAsync_SheduleOneLoad_BannerAdAsync_SheduleOneLoad_BannerAdAsync_SheduleOne");
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType != (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) return;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.playerID) {
            var platform = FBInstant.getPlatform(); // if(platform === "IOS"){
            // }else{
            // } 

            if (this.isReloadBanner) {
              this.scheduleOnce(function () {
                // Here `this` is referring to the component
                this.Load_BannerAdAsync();
              }, 3);
              this.SetNextTime_ReloadBanner();
            } else {
              console.log("NOT RELOAD!");
            }
          }
        }

        HideBanner() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType != (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) return;
          FBInstant.hideBannerAdAsync();
        }

        SetNextTime_ReloadBanner() {
          this.isReloadBanner = false;
          this.scheduleOnce(function () {
            // Here `this` is referring to the component
            this.isReloadBanner = true;
            this.Load_BannerAdAsync_SheduleOne();
          }, this.TIME_NEXT_RELOAD_BANNER);
        }

        Load_Ad_SheduleOne() {
          let self = this; // this.SetNextTime_ShowInterstitialAd();

          this.scheduleOnce(() => {
            // Here `this` is referring to the component
            self.Preload_InterstitialAdAsync();
            self.Preload_RewardAdAsync();
            self.Load_BannerAdAsync_SheduleOne();
          }, 3);
        }

        shareImage(entryPointData, base64Image, cb) {
          FBInstant.shareAsync({
            intent: 'REQUEST',
            image: base64Image,
            text: "Play " + (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).GAME_NAME_TITLE + " with me!",
            data: {
              entryPointData
            }
          }).then(function () {
            // continue with the game.
            cb();
          });
        }

        setStartGame() {
          let self = this; ////console.log("setStartGame");
          ////console.log(this.isInitializeAsync);
          //console.log("Time setStartGame:"+new Date().getTime());

          FBInstant.startGameAsync().then(function () {
            //console.log("Time setStartGame Finished:"+new Date().getTime());
            //console.log("FBInstant.startGameAsyncFBInstant.startGameAsyncFBInstant.startGameAsync");
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FBINSTANT_INIT_SUCCESS);
            self.InitFBInstant_Finished();
          }).catch(e => {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FBINSTANT_INIT_SUCCESS);
            self.InitFBInstant_Finished();
          });
        }

        getPhotoUrl() {
          ////console.log("getPhotoUrlgetPhotoUrlgetPhotoUrlgetPhotoUrl");
          ////console.log(FBInstant.player.getPhoto());
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            return FBInstant.player.getPhoto();
          } else {
            return "";
          }
        }

        getName() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            return FBInstant.player.getName();
          } else {
            return "Water";
          }
        }

        getID() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            return FBInstant.player.getID();
          } else {
            return "";
          }
        }

        getTournament() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            FBInstant.getTournamentAsync().then(tournament => {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.isStartTournament = true;
              FBInstantManager.instance.tournamentID = tournament.getID();
              FBInstantManager.instance.contextID = tournament.getContextID();
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.tourID_session = tournament.getID();
              let tournamentPayLoad = tournament.getPayload();
              console.log(tournamentPayLoad);

              if (tournamentPayLoad && tournamentPayLoad.length > 0) {
                let payloadData = JSON.parse(tournament.getPayload());

                if (payloadData.typeHost && payloadData.typeHost == (_crd && TOURNAMENT_TYPE === void 0 ? (_reportPossibleCrUseOfTOURNAMENT_TYPE({
                  error: Error()
                }), TOURNAMENT_TYPE) : TOURNAMENT_TYPE).PAGE_HOST) {
                  (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.currTournamentPageHostDataInfo = new (_crd && TournamentPageHostDataInfo === void 0 ? (_reportPossibleCrUseOfTournamentPageHostDataInfo({
                    error: Error()
                  }), TournamentPageHostDataInfo) : TournamentPageHostDataInfo)();
                  (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.currTournamentPageHostDataInfo.tournamentID = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.tourID_session;
                  (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.currTournamentPageHostDataInfo.title = tournament.getTitle();
                  (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.currTournamentPageHostDataInfo.typeHost = (_crd && TOURNAMENT_TYPE === void 0 ? (_reportPossibleCrUseOfTOURNAMENT_TYPE({
                    error: Error()
                  }), TOURNAMENT_TYPE) : TOURNAMENT_TYPE).PAGE_HOST;
                  (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.currTournamentPageHostDataInfo.levelIndex = payloadData.levelIndex;

                  if (payloadData.eventURL) {
                    (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.currTournamentPageHostDataInfo.eventURL = payloadData.eventURL;
                  }
                } else {
                  (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.currSessionLeaderboardDataInfo = new (_crd && LeaderboardDataInfo === void 0 ? (_reportPossibleCrUseOfLeaderboardDataInfo({
                    error: Error()
                  }), LeaderboardDataInfo) : LeaderboardDataInfo)();
                  (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.currSessionLeaderboardDataInfo._id = "";
                  (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.currSessionLeaderboardDataInfo.name = tournament.getTitle();
                  (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.currSessionLeaderboardDataInfo.tournamentId = tournament.getID();
                  (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.currSessionLeaderboardDataInfo.contextId = tournament.getContextID();
                  (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.currSessionLeaderboardDataInfo.expireTime = tournament.getEndTime();
                  (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.currSessionLeaderboardDataInfo.type = 1;
                }
              }

              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.isGetPayloadDataSuccess = true;
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).GET_DATA_PAYLOAD_SUCCESS);
            }).catch(function (e) {
              // console.log("tournament Not Found");
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.isGetPayloadDataSuccess = true;
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).GET_DATA_PAYLOAD_SUCCESS);
            });
          } else {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.isGetPayloadDataSuccess = true;
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).GET_DATA_PAYLOAD_SUCCESS);
          }
        }

        getTournament_AfterJoinTournament(cb) {
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isStartTournament = false;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            FBInstant.getTournamentAsync().then(tournament => {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.isStartTournament = true; // console.log("getTournament_AfterJoinTournament",tournament);

              let tournamentPayLoad = tournament.getPayload(); // console.log("tournamentPayLoad",tournamentPayLoad);

              if (tournamentPayLoad && tournamentPayLoad.length > 0) {
                FBInstantManager.instance.tournamentID = tournament.getID();
                let payloadData = JSON.parse(tournament.getPayload());
                cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_CALLBACK_SUCCESS);
              } else {
                cb(new Error("FAIL"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_CALLBACK_FAIL);
              }
            }).catch(function (e) {
              cb(new Error("FAIL"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).FB_CALLBACK_FAIL);
            });
          } else {
            cb(new Error("FAIL"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_CALLBACK_FAIL);
          }
        }

        createTournament(score, cb) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            let createTournamentConfig = {
              title: (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).GAME_NAME_TITLE + " Tournament"
            };
            const createTournamentPayload = {
              initialScore: score,
              config: createTournamentConfig,
              data: {}
            };
            FBInstant.tournament.createAsync(createTournamentPayload).then(tournament => {
              // const contextId: string = tournament.getContextID();
              // const endTime: number = tournament.getEndTime();
              // const title: string = tournament.getTitle()!;
              // const payload: any = tournament.getPayload();
              const id = tournament.getID(); // console.log(id);

              FBInstantManager.instance.tournamentID = id;
              cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).FB_CALLBACK_SUCCESS);
            }).catch(function (e) {
              cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).FB_CALLBACK_FAIL);
            });
          }
        }

        GetLeaderBoard_TournamentPageHost(cb) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).TEST_AD) {
            let arrListLeaderboard_Ranks = [];

            for (let i = 0; i < 100; i++) {
              let itemRankInfo = new (_crd && ItemRankInfo === void 0 ? (_reportPossibleCrUseOfItemRankInfo({
                error: Error()
              }), ItemRankInfo) : ItemRankInfo)();
              itemRankInfo.userName = "" + FBInstantManager.instance.getName() + i;
              itemRankInfo.avatarType = (_crd && AVATAR_TYPE === void 0 ? (_reportPossibleCrUseOfAVATAR_TYPE({
                error: Error()
              }), AVATAR_TYPE) : AVATAR_TYPE).TYPE_LOCAL;
              itemRankInfo.userScore = 1000 - i;
              itemRankInfo.avatarURL = "" + (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
                error: Error()
              }), lodash) : lodash).random(1, 20);
              itemRankInfo.indexRank = i + 1;

              if (i == 99) {
                itemRankInfo.isMyRank = true;
              } else {
                itemRankInfo.isMyRank = false;
              }

              arrListLeaderboard_Ranks.push(itemRankInfo);
            }

            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).RECEIVE_LISTRANK_TOURNAMENT_PAGEHOST, arrListLeaderboard_Ranks);
          } // console.log("GetLeaderBoard");


          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            if (FBInstant.context && FBInstant.context.getID()) {
              FBInstant.getLeaderboardAsync('score.' + FBInstant.context.getID()).then(leaderboard => leaderboard.getEntriesAsync(100, 0)).then(entries => {
                let arrListLeaderboard_Ranks = [];

                for (var i = 0; i < entries.length; i++) {
                  // console.log(
                  //     entries[i].getRank() + '. ' +
                  //     entries[i].getPlayer().getPhoto() + ': ' +
                  //     entries[i].getScore()
                  // );
                  let itemRankInfo = new (_crd && ItemRankInfo === void 0 ? (_reportPossibleCrUseOfItemRankInfo({
                    error: Error()
                  }), ItemRankInfo) : ItemRankInfo)();
                  itemRankInfo.userName = entries[i].getPlayer().getName();
                  itemRankInfo.avatarType = (_crd && AVATAR_TYPE === void 0 ? (_reportPossibleCrUseOfAVATAR_TYPE({
                    error: Error()
                  }), AVATAR_TYPE) : AVATAR_TYPE).TYPE_WEB;
                  itemRankInfo.userScore = entries[i].getScore();
                  itemRankInfo.avatarURL = entries[i].getPlayer().getPhoto();
                  itemRankInfo.indexRank = entries[i].getRank();
                  itemRankInfo.isMyRank = entries[i].getPlayer().getID() == (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.playerID;
                  itemRankInfo.idFB = entries[i].getPlayer().getID();
                  arrListLeaderboard_Ranks.push(itemRankInfo);
                }

                (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                  error: Error()
                }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).RECEIVE_LISTRANK_TOURNAMENT_PAGEHOST, arrListLeaderboard_Ranks);
              }).catch(error => {
                // console.log(error);
                (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                  error: Error()
                }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).RECEIVE_LISTRANK_TOURNAMENT_PAGEHOST, null);
              });
            }
          }
        }

        UpdateContextLeaderBoard() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            FBInstant.updateAsync({
              action: 'LEADERBOARD',
              name: 'score.' + FBInstant.context.getID()
            }).then(() => console.log('Update Posted')).catch(error => console.error(error));
          }
        }

        resetContext(cb) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            FBInstantManager.instance.tournamentID = ""; // console.log("joinTournamentjoinTournamentjoinTournament"+contextID);

            if (FBInstant.context && FBInstant.context.getID() != null) {
              // console.log("switchAsync SOLO");
              FBInstant.context.switchAsync('SOLO', true).then(() => {
                // console.log("SOLO SUCCESS");
                // console.log(FBInstant.context);
                // console.log(FBInstant.context.getID());
                cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_CALLBACK_SUCCESS);
              }).catch(function (e) {// console.log("SOLO ERROR");
                // console.log(e);
              });
            }
          } else {
            cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_CALLBACK_SUCCESS);
          }
        }

        joinTournament(contextID, cb) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            // console.log("joinTournamentjoinTournamentjoinTournament"+contextID);
            FBInstant.context.switchAsync(contextID).then(() => {
              // console.log("joinTournament SUCCESS");
              cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).FB_CALLBACK_SUCCESS);
            }).catch(function (e) {
              // console.log("joinTournament FAIL");
              // console.log(e);
              if (e.code == "SAME_CONTEXT" || e.code == "CLIENT_UNSUPPORTED_OPERATION") {
                cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_CALLBACK_SUCCESS);
              } else {
                cb(new Error("FAIL"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_CALLBACK_FAIL);
              }
            });
          } else {
            cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_CALLBACK_SUCCESS);
          }
        }

        shareTournament(score) {
          // console.log("shareTournamentshareTournamentshareTournament");
          if (FBInstantManager.instance.tournamentID == "") {
            FBInstantManager.instance.createTournament(score, (err, success) => {});
          } else {
            let shareTournamentPayload = {
              score: score,
              data: {}
            };
            FBInstant.tournament.shareAsync(shareTournamentPayload).catch(() => {});
          }
        }

        PostSessionScore(score) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            FBInstant.postSessionScoreAsync(score);
          } else {}
        }

        PostScoreTournament(score) {
          // console.log("PostScoreTournamentPostScoreTournament");
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            if (FBInstantManager.instance.tournamentID == "") {
              FBInstantManager.instance.shareTournament(score);
            } else {
              FBInstant.tournament.postScoreAsync(score);
            }
          } else {}
        }

        PostScoreShareTournament(score, cb) {
          // console.log("PostScoreTournamentPostScoreTournament",score);
          // console.log("tournamentID",FBInstantManager.instance.tournamentID);
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            if (FBInstantManager.instance.tournamentID == "") {
              FBInstantManager.instance.createTournament(score, cb);
            } else {
              let shareTournamentPayload = {
                score: score
              };
              FBInstant.tournament.shareAsync(shareTournamentPayload).then(() => {
                console.log("PostScoreShareTournament Success!!!!");
                cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_CALLBACK_SUCCESS);
              }).catch(err => {
                console.log(err);
                cb(err, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_CALLBACK_FAIL);
              });
            }
          } else {
            cb(new Error("A"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_CALLBACK_FAIL);
          }
        }

        ShareTournament(score, cb) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            let shareTournamentPayload = {
              score: score
            };
            FBInstant.tournament.shareAsync(shareTournamentPayload).then(() => {
              console.log("PostScoreShareTournament Success!!!!");
              cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).FB_CALLBACK_SUCCESS);
            }).catch(err => {
              console.log(err);
              cb(err, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).FB_CALLBACK_FAIL);
            });
          } else {
            cb(new Error("A"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_CALLBACK_FAIL);
          }
        } // PostSessionScore(score:number){
        //     if(localConfig.instance.envType == ENV_TYPE.FB){
        //         FBInstant.postSessionScoreAsync(score);
        //     }else{
        //     }
        // }
        // PostScoreTournament(score:number){
        //     if(localConfig.instance.envType == ENV_TYPE.FB){
        //         FBInstant.tournament.postScoreAsync(score);
        //     }else{
        //     }
        // }


        PlayWithFriend(cb) {
          let self = this; // console.log("PlayWithFriendPlayWithFriendPlayWithFriend");

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrConnectedPlayerInfos.length > 0) {
              let id = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrConnectedPlayerInfos[(_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
                error: Error()
              }), lodash) : lodash).random(0, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrConnectedPlayerInfos.length)].id; // console.log("FBInstant.context.getID():"+FBInstant.context.getID());
              // console.log("id:"+id);

              FBInstant.context.createAsync(id).then(() => {
                cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_CALLBACK_SUCCESS);
              }).catch(() => {
                // console.log("PlayWithFriend 2222222222");
                FBInstant.context.chooseAsync().then(function () {
                  // console.log("PlayWithFriend 333333333");
                  cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).FB_CALLBACK_SUCCESS);
                }).catch(function (e) {
                  // console.log("PlayWithFriend 44444444444");
                  cb(new Error("FAIL"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).FB_CALLBACK_FAIL);
                });
              });
            } else {
              FBInstant.context.chooseAsync().then(function () {
                cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_CALLBACK_SUCCESS);
              }).catch(function (e) {
                cb(new Error("FAIL"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_CALLBACK_FAIL);
              });
            }
          } else {
            cb(new Error("FAIL"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_CALLBACK_FAIL);
          }
        }

        PlayWithFriend_ID(idFB, cb) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            FBInstant.context.createAsync(idFB).then(() => {
              cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).FB_CALLBACK_SUCCESS);
            }).catch(() => {
              cb(new Error("FAIL"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).FB_CALLBACK_FAIL);
            });
          } else {
            cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_CALLBACK_SUCCESS);
          }
        }

        PlayWithFriend_ChooseAsync(cb) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            FBInstant.context.chooseAsync().then(() => {
              cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).FB_CALLBACK_SUCCESS);
            }).catch(e => {
              if (e.code == "SAME_CONTEXT" || e.code == "CLIENT_UNSUPPORTED_OPERATION") {
                cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_CALLBACK_SUCCESS);
              } else {
                cb(new Error("FAIL"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_CALLBACK_FAIL);
              }
            });
          } else {
            cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_CALLBACK_SUCCESS);
          }
        }

        UpdateContext(base64Picture) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            FBInstant.updateAsync({
              action: 'CUSTOM',
              cta: "▶️ Play Now!",
              image: base64Picture,
              text: {
                default: 'Can you do better?',
                localizations: {
                  ar_AR: 'هل يمكنك فعل ما هو أفضل؟',
                  ca_ES: '¿Puedes hacerlo mejor?',
                  pt_PT: 'Você pode fazer melhor?',
                  fr_FR: 'Peux-tu faire mieux ?',
                  id_ID: 'Bisakah Anda melakukan yang lebih baik?',
                  vi_VN: 'Bạn có thể làm tốt hơn không?',
                  th_TH: 'คุณทำได้ดีกว่านี้ไหม',
                  tr_TR: 'Daha iyisini yapabilir misin?',
                  de_DE: 'Kannst du es besser?'
                }
              },
              template: 'test_template',
              strategy: 'IMMEDIATE',
              notification: 'PUSH'
            }).then(function () {// closes the game after the update is posted.
              //console.log("updateContext FINISHED");
            }).catch(function (e) {//console.log("updateContext FAIL");
            });
          } else {}
        }

        ShareInfoPlayerContext(base64Picture, cb) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            FBInstant.shareAsync({
              intent: "INVITE",
              image: base64Picture,
              text: "▶️ PLAY NOW!" // text: {
              //     default: "Play "+Constants.GAME_NAME_TITLE+" with me!",
              //     localizations: {
              //         ar_AR: 'هل يمكنك فعل ما هو أفضل؟',
              //         ca_ES: '¿Puedes hacerlo mejor?',
              //         pt_PT: 'Você pode fazer melhor?',
              //         fr_FR: 'Peux-tu faire mieux ?',
              //         id_ID: 'Bisakah Anda melakukan yang lebih baik?',
              //         vi_VN: 'Bạn có thể làm tốt hơn không?',
              //         th_TH: 'คุณทำได้ดีกว่านี้ไหม',
              //         tr_TR: 'Daha iyisini yapabilir misin?',
              //         de_DE: 'Kannst du es besser?',
              //     }
              // },

            }).then(function () {
              // closes the game after the update is posted.
              //console.log("ShareMyScore FINISHED");
              cb();
            }).catch(function (e) {
              //console.log("ShareMyScore FAIL");
              cb();
            });
          } else {
            cb();
          }
        }

        UpdateContext_WithFriend(base64Picture, withFriendDataInfo, cb) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            let withfriendData = JSON.stringify(withFriendDataInfo); // console.log("UpdateContext_WithFriend",withfriendData);

            if (FBInstant.context != null) {
              FBInstant.updateAsync({
                action: 'CUSTOM',
                cta: "Play",
                image: base64Picture,
                text: {
                  default: "Can you beat " + FBInstantManager.instance.getName() + " score?",
                  localizations: {}
                },
                template: 'test_template',
                strategy: 'IMMEDIATE',
                notification: 'PUSH',
                data: {
                  withfriendData
                }
              }).then(() => {
                // closes the game after the update is posted.
                //console.log("updateContext FINISHED");
                cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_CALLBACK_SUCCESS);
              }).catch(e => {
                console.log("updateContext FAIL", e);
                cb(new Error("Error!"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_CALLBACK_FAIL);
              });
            } else {
              cb(new Error("Error!"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).FB_CALLBACK_FAIL);
            }
          } else {
            cb(new Error("Error!"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_CALLBACK_FAIL);
          }
        }

        ShareInfoPlayer(base64Picture, cb) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            FBInstant.shareAsync({
              intent: "INVITE",
              image: base64Picture,
              text: "▶️ PLAY NOW!"
            }).then(function () {
              // closes the game after the update is posted.
              //console.log("ShareMyScore FINISHED");
              cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).FB_CALLBACK_SUCCESS);
            }).catch(function (e) {
              //console.log("ShareMyScore FAIL");
              cb(new Error("Error!"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).FB_CALLBACK_FAIL);
            });
          } else {
            cb(new Error("Error!"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_CALLBACK_FAIL);
          }
        }

        ShareBestLevel(base64Picture, cb) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            FBInstant.shareAsync({
              intent: "INVITE",
              image: base64Picture,
              text: "Play " + (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).GAME_NAME_TITLE + " with me!"
            }).then(function () {
              // closes the game after the update is posted.
              //console.log("ShareMyScore FINISHED");
              cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).FB_CALLBACK_SUCCESS);
            }).catch(function (e) {
              //console.log("ShareMyScore FAIL");
              cb(new Error("Error!"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).FB_CALLBACK_FAIL);
            });
          } else {
            cb(new Error("Error!"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_CALLBACK_FAIL);
          }
        }

        UpdateContext_Invite_222(base64Picture, cb) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            if (FBInstant.context != null) {
              FBInstant.updateAsync({
                action: 'CUSTOM',
                cta: "▶️ Play Now!",
                image: base64Picture,
                text: {
                  default: "Can you beat " + FBInstantManager.instance.getName() + " level?",
                  //namePlayer + ' sloved your word!',
                  localizations: {}
                },
                template: 'test_template',
                strategy: 'IMMEDIATE',
                notification: 'PUSH'
              }).then(function () {
                // closes the game after the update is posted.
                //console.log("updateContext FINISHED");
                cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_CALLBACK_SUCCESS);
              }).catch(function (e) {
                //console.log("updateContext FAIL");
                cb(new Error("Error!"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_CALLBACK_FAIL);
              });
            } else {
              cb(new Error("Error!"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).FB_CALLBACK_FAIL);
            }
          } else {
            cb(new Error("Error!"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_CALLBACK_FAIL);
          }
        }

        // arrConnectedPlayers:FriendAvatarInfo[] = [];
        GetListConnectPlayers() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            FBInstant.player.getConnectedPlayersAsync().then(connectedPlayers => {
              // const connectedPlayer: FBInstant.ConnectedPlayer = connectedPlayers[0];
              // const id: string = connectedPlayer.getID();
              // const name: string = connectedPlayer.getName()!;
              // const photo: string = connectedPlayer.getPhoto()!;
              //console.log(connectedPlayers);
              let arrFriendIDs = [];
              let arrFriendInfos = [];

              for (let i = 0; i < connectedPlayers.length; i++) {
                let connectedPlayer = connectedPlayers[i]; //console.log(connectedPlayer.getPhoto());

                let friendInfo = new (_crd && FriendAvatarInfo === void 0 ? (_reportPossibleCrUseOfFriendAvatarInfo({
                  error: Error()
                }), FriendAvatarInfo) : FriendAvatarInfo)();
                friendInfo.id = connectedPlayer.getID();
                friendInfo.type = (_crd && AVATAR_TYPE === void 0 ? (_reportPossibleCrUseOfAVATAR_TYPE({
                  error: Error()
                }), AVATAR_TYPE) : AVATAR_TYPE).TYPE_WEB;
                friendInfo.avatarUrl = connectedPlayer.getPhoto();
                friendInfo.name = connectedPlayer.getName();
                arrFriendInfos.push(friendInfo);
                arrFriendIDs.push(friendInfo.id);
              }

              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrConnectedPlayerInfos = arrFriendInfos;
              (_crd && PGSPlayInstantManager === void 0 ? (_reportPossibleCrUseOfPGSPlayInstantManager({
                error: Error()
              }), PGSPlayInstantManager) : PGSPlayInstantManager).instance.GetPlayer_byPlayerIds(arrFriendIDs);
            });
          }
        } //#region INVITE


        inviteFriend_222(base64Picture, cb) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            FBInstant.inviteAsync({
              action: 'CUSTOM',
              cta: "▶️ Play Now!",
              image: base64Picture,
              text: {
                default: 'Can you beat ' + FBInstantManager.instance.getName() + " level?",
                localizations: {}
              }
            }).then(function () {
              cb();
            }).catch(function (e) {
              cb();
            });
          } else {
            cb();
          }
        } //#endregion
        // FBInstant.matchPlayerAsync("matchTag", false, false).then(() => {});
        // FBInstant.checkCanPlayerMatchAsync().then((canPlayerMatchAsync: boolean) => {});


        SetDataPlayer(content) {
          // console.log("SetDataPlayerSetDataPlayerSetDataPlayerSetDataPlayer");
          // console.log(content);
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType != (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) return;
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isGetPlayerDataSuccess) return;
          FBInstant.player.setDataAsync({
            data: content
          }).then(() => {// console.log("SetDataPlayer Finished");
          });
        }

        GetDataPlayer() {
          // console.log("GetDataPlayer"+new Date().getTime());
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType != (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) return;
          FBInstant.player.getDataAsync(["data"]).then(result => {
            // console.log("GetDataPlayer Finished");
            let data = result["data"]; // console.log(data);

            if (typeof data === 'undefined') {
              //console.log("undefinedundefinedundefinedundefinedundefined");
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.updatePlayerData_Finished();
            } else {
              (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
                error: Error()
              }), configuration) : configuration).instance.updateDataPlayer(data);
            }
          });
        }

        SendBotData() {}

        AddScoreToLeaderBoard(score, cb) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            if (FBInstant.context.getID()) {
              FBInstant.getLeaderboardAsync('score.' + FBInstant.context.getID()).then(leaderboard => {
                // console.log(leaderboard.getName());
                return leaderboard.setScoreAsync(score);
              }).then(() => {
                // console.log('AddScoreToLeaderBoard Score saved');
                cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_CALLBACK_SUCCESS);
              }).catch(error => {
                // console.error(error);
                cb(new Error("Error!"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).FB_CALLBACK_FAIL);
              });
            }
          }
        }

        GetLeaderBoard(cb) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).TEST_AD) {
            let arrListLeaderboard_Ranks = [];

            for (let i = 0; i < 50; i++) {
              let itemRankInfo = new (_crd && ItemRankInfo === void 0 ? (_reportPossibleCrUseOfItemRankInfo({
                error: Error()
              }), ItemRankInfo) : ItemRankInfo)();
              itemRankInfo.userName = "" + FBInstantManager.instance.getName() + i;
              itemRankInfo.avatarType = (_crd && AVATAR_TYPE === void 0 ? (_reportPossibleCrUseOfAVATAR_TYPE({
                error: Error()
              }), AVATAR_TYPE) : AVATAR_TYPE).TYPE_LOCAL;
              itemRankInfo.userScore = 1000 - i;
              itemRankInfo.avatarURL = "" + (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
                error: Error()
              }), lodash) : lodash).random(1, 20);
              itemRankInfo.indexRank = i + 1;

              if (i == 99) {
                itemRankInfo.isMyRank = true;
              } else {
                itemRankInfo.isMyRank = false;
              }

              arrListLeaderboard_Ranks.push(itemRankInfo);
            }
          } // console.log("GetLeaderBoard");


          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            if (FBInstant.context && FBInstant.context.getID()) {
              FBInstant.getLeaderboardAsync('score.' + FBInstant.context.getID()).then(leaderboard => leaderboard.getEntriesAsync(100, 0)).then(entries => {
                let arrListLeaderboard_Ranks = [];

                for (var i = 0; i < entries.length; i++) {
                  // console.log(
                  //     entries[i].getRank() + '. ' +
                  //     entries[i].getPlayer().getPhoto() + ': ' +
                  //     entries[i].getScore()
                  // );
                  let itemRankInfo = new (_crd && ItemRankInfo === void 0 ? (_reportPossibleCrUseOfItemRankInfo({
                    error: Error()
                  }), ItemRankInfo) : ItemRankInfo)();
                  itemRankInfo.userName = entries[i].getPlayer().getName();
                  itemRankInfo.avatarType = (_crd && AVATAR_TYPE === void 0 ? (_reportPossibleCrUseOfAVATAR_TYPE({
                    error: Error()
                  }), AVATAR_TYPE) : AVATAR_TYPE).TYPE_WEB;
                  itemRankInfo.userScore = entries[i].getScore();
                  itemRankInfo.avatarURL = entries[i].getPlayer().getPhoto();
                  itemRankInfo.indexRank = entries[i].getRank();
                  itemRankInfo.isMyRank = entries[i].getPlayer().getID() == (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.playerID;
                  itemRankInfo.idFB = entries[i].getPlayer().getID();
                  arrListLeaderboard_Ranks.push(itemRankInfo);
                }
              }).catch(error => {// console.log(error);
              });
            }
          }
        }

        GetASID() {
          FBInstant.player.getASIDAsync().then(_asid => {
            console.log(_asid);
            let data = {
              a2u: {
                id: this.getID(),
                asid: _asid,
                index: -1,
                page_key: "18"
              }
            };
            console.log(data); //this.sendA2U(JSON.stringify(data));

            this.cancel_all_notifications(_asid);
            this.asID = _asid;
            (_crd && PGSPlayInstantManager === void 0 ? (_reportPossibleCrUseOfPGSPlayInstantManager({
              error: Error()
            }), PGSPlayInstantManager) : PGSPlayInstantManager).instance.LoginFBInstant();
          });
        }

        sendA2U(data) {
          let request = new XMLHttpRequest();
          let path = "https://game3f.com:8000/webhook";
          request.open("POST", path, true);
          request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
          request.send(data);
        }

        cancel_all_notifications(asid) {
          FBInstant.graphApi.requestAsync("/" + asid + "/cancel_all_notifications", "POST").then(result => {
            console.log("resetSendA2u: ", result);
            this.sendNewA2U(asid);
          }).catch(error => {
            console.log("error send a2u : ", error);
            this.sendNewA2U(asid);
          });
        }

        sendNewA2U(asid) {
          let DAYS = [0, 1, 2, 4, 6];

          for (let i = 0; i < DAYS.length; i++) {
            let delayTime = 60 * 60 * 1;

            if (DAYS[i] > 0) {
              delayTime = 86400 * DAYS[i];
            }

            ; // let messageData = {
            //     message: {
            //         title: "",
            //         body: "",
            //         media_url: "",
            //     },
            //     schedule_interval: delayTime
            // };

            let messageData = (_crd && A2uData === void 0 ? (_reportPossibleCrUseOfA2uData({
              error: Error()
            }), A2uData) : A2uData).a2uNotification(delayTime);
            FBInstant.graphApi.requestAsync("/" + asid + "/notifications", "POST", messageData).then(result => {
              console.log("result send a2u : ", result);
            }).catch(error => {
              console.log("error send a2u : ", error);
            });
          }
        } //#region COMMUNITY


        followOfficialPage() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            FBInstant.community.canFollowOfficialPageAsync().then(function (canFollowOfficialPageAsync) {
              if (canFollowOfficialPageAsync) {
                // console.log(data);
                FBInstant.community.followOfficialPageAsync();
              }
            }).catch(e => {// console.log(e);
            });
          }
        }

        joinOfficialGroup() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            FBInstant.community.canJoinOfficialGroupAsync().then(function (canJoinOfficialGroupAsync) {
              // console.log("joinOfficialGroup 1111");
              if (canJoinOfficialGroupAsync) {
                FBInstant.community.joinOfficialGroupAsync();
              }
            }).catch(e => {// console.log(e);
              // console.log("joinOfficialGroup 4444");
            });
          }
        } //#endregion


        //#region IAP
        getIAP_AllPack() {
          FBInstantManager.instance.arrCatalogInfos = [];
          FBInstant.payments.getCatalogAsync().then(products => {
            console.log(products);

            for (let i = 0; i < products.length; i++) {
              let productID = products[i].productID;
              let price = products[i].price;
              let catalogInfo = new CatalogInfo(productID, price); // console.log(productID);
              // console.log(price);

              FBInstantManager.instance.arrCatalogInfos.push(catalogInfo);
            }

            FBInstantManager.instance.isIAPInitSuccess = true;
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).IAP_INIT_SUCCESS);
          });
        }

        checkHaveIAPPack_byProductID(packID) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType != (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) return true; // console.log("packID:"+packID);
          // console.log("isIAPInitSuccess:"+FBInstantManager.instance.isIAPInitSuccess);
          // console.log("FBInstantManager.instance.arrCatalogInfos",FBInstantManager.instance.arrCatalogInfos);

          if (!FBInstantManager.instance.isIAPInitSuccess) return false;

          for (let i = 0; i < FBInstantManager.instance.arrCatalogInfos.length; i++) {
            if (FBInstantManager.instance.arrCatalogInfos[i].productID == packID) {
              return true;
            }
          }

          return false;
        }

        getIAPPack_Price_byProductID(packID) {
          if (!FBInstantManager.instance.isIAPInitSuccess) return "Loading..."; // var platform = FBInstant.getPlatform();
          // if(platform === "IOS"){
          //     return "Unsupported";
          // }

          for (let i = 0; i < FBInstantManager.instance.arrCatalogInfos.length; i++) {
            if (FBInstantManager.instance.arrCatalogInfos[i].productID == packID) {
              return FBInstantManager.instance.arrCatalogInfos[i].price;
            }
          }
        }

        buyIAP_consumePackID(packID, placement, shop_type, cb) {
          if (!FBInstantManager.instance.isIAPInitSuccess) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).HIDE_LOADING_POPUP);
            cb(new Error("IAP Fail!"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_CALLBACK_FAIL);
            return;
          }

          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LOADING_POPUP);
          FBInstant.payments.purchaseAsync({
            productID: packID,
            developerPayload: 'pegasus'
          }).then(function (purchase) {
            // console.log(purchase);
            // {productID: '12345', purchaseToken: '54321', developerPayload: 'foobar', ...}
            const valueIAP = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getValuePriceIAPPack_byProductID(packID);
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setIAPCount((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.iapCount + 1);
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logEventIAP(purchase.paymentID, packID, valueIAP);
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logIAPPurchase(placement, shop_type, packID, valueIAP, "USD");
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).HIDE_LOADING_POPUP);
            cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_CALLBACK_SUCCESS);
            FBInstant.payments.consumePurchaseAsync(purchase.purchaseToken).then(function () {// Purchase successfully consumed!
              // Game should now provision the product to the player
              // clientEvent.dispatchEvent(Constants.HIDE_LOADING_POPUP);
              // cb(null,Constants.FB_CALLBACK_SUCCESS);
            }).catch(function (e) {// Handle subscription failure
              // clientEvent.dispatchEvent(Constants.HIDE_LOADING_POPUP);
              // cb(new Error("IAP Fail!"),Constants.FB_CALLBACK_FAIL);
            });
          }).catch(function (e) {
            // Handle subscription failure
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).HIDE_LOADING_POPUP);
            cb(new Error("IAP Fail!"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_CALLBACK_FAIL);
          });
        }

        iap_consumePackID(purchaseToken, cb) {
          if (!FBInstantManager.instance.isIAPInitSuccess) {
            cb(new Error("IAP Fail!"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_CALLBACK_FAIL);
            return;
          }

          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LOADING_POPUP);
          FBInstant.payments.consumePurchaseAsync(purchaseToken).then(function () {
            // Purchase successfully consumed!
            // Game should now provision the product to the player
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).HIDE_LOADING_POPUP);
            cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_CALLBACK_SUCCESS);
          }).catch(function (e) {
            // Handle subscription failure
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).HIDE_LOADING_POPUP);
            cb(new Error("IAP Fail!"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_CALLBACK_FAIL);
          });
        }

        iap_checkPurchaseInfo(packID) {
          for (let i = 0; i < FBInstantManager.instance.arrPurchaseInfos.length; i++) {
            if (FBInstantManager.instance.arrPurchaseInfos[i].productID == packID) {
              return FBInstantManager.instance.arrPurchaseInfos[i].purchaseToken;
            }
          }

          return "";
        }

        getListIAP_Purchase(cb) {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LOADING_POPUP);
          FBInstantManager.instance.arrPurchaseInfos = [];
          FBInstant.payments.getPurchasesAsync().then(function (purchases) {
            for (let i = 0; i < purchases.length; i++) {
              let productID = purchases[i].productID;
              let purchaseToken = purchases[i].purchaseToken;
              let purchaseInfo = new PurchaseInfo(productID, purchaseToken);
              FBInstantManager.instance.arrPurchaseInfos.push(purchaseInfo);
            }

            cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_CALLBACK_SUCCESS);
          }).catch(function (e) {
            cb(new Error("IAP Fail!"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_CALLBACK_FAIL);
          });
        } //#endregion


        setHaptic() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.isVibration == false) return;
            FBInstant.performHapticFeedbackAsync().then(() => {});
          }
        }

        checkPlatformWEB() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            return false;
          } else {
            return true;
          }
        }

        getAllCatalogs() {
          FBInstantManager.instance.arrCatalogInfos = [];
          FBInstant.graphApi.requestAsync("/app/products?fields=id,product_id,name,price,price_amount_cents", "GET").then(result => {
            // console.log("getAllCatalogs: ", result);
            let products = result.data;

            for (let i = 0; i < products.length; i++) {
              // console.log(products[i]);
              let productID = products[i].product_id;
              let price = products[i].price;
              let price_amount_cents = products[i].price_amount_cents;
              let catalogInfo = new CatalogInfo(productID, price); // console.log(productID);
              // console.log(price);

              FBInstantManager.instance.arrCatalogInfos.push(catalogInfo);
            }

            FBInstantManager.instance.isIAPInitSuccess = true;
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).IAP_INIT_SUCCESS); // console.log(FBInstantManager.instance.arrCatalogInfos);
          }).catch(error => {
            console.log("getAllCatalogs: ", error);
          });
        }

      }, _defineProperty(_class2, "instance", void 0), _temp)) || _class));

      _export("CatalogInfo", CatalogInfo = (_dec2 = ccclass('CatalogInfo'), _dec2(_class3 = (_temp2 = class CatalogInfo {
        constructor(_productID, _price) {
          _defineProperty(this, "productID", "");

          _defineProperty(this, "price", "");

          _defineProperty(this, "price_amount_cents", 0);

          this.productID = _productID;
          this.price = _price;
        }

      }, _temp2)) || _class3));

      _export("PurchaseInfo", PurchaseInfo = (_dec3 = ccclass('PurchaseInfo'), _dec3(_class5 = (_temp3 = class PurchaseInfo {
        constructor(_productID, _purchaseToken) {
          _defineProperty(this, "productID", "");

          _defineProperty(this, "purchaseToken", "");

          this.productID = _productID;
          this.purchaseToken = _purchaseToken;
        }

      }, _temp3)) || _class5));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FBInstantManager.js.map