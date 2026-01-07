System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, game, clientEvent, Constants, MusicManager, _dec, _class, _class2, _temp, _crd, ccclass, property, PokiSDKManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMusicManager(extras) {
    _reporterNs.report("MusicManager", "../framework/musicManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBIntanstAd_Callback(extras) {
    _reporterNs.report("FBIntanstAd_Callback", "./FBInstantManager", _context.meta, extras);
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
      Constants = _unresolved_3.Constants;
    }, function (_unresolved_4) {
      MusicManager = _unresolved_4.MusicManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a6967q+8FtMdrUnqNogGpsy", "PokiSDKManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PokiSDKManager", PokiSDKManager = (_dec = ccclass('PokiSDKManager'), _dec(_class = (_temp = _class2 = class PokiSDKManager extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "isInitializeAsync", false);

          _defineProperty(this, "isFirstUserInteraction", false);

          _defineProperty(this, "fb_InterstitialAd_CallBack", null);

          _defineProperty(this, "TIME_NEXT_INTERSTITIAL", 60);

          _defineProperty(this, "isShowInterstitialAd", true);

          _defineProperty(this, "fb_RewardVideo_CallBack", null);

          _defineProperty(this, "TIME_NEXT_INTERSTITIAL_AFTERREWARD", 60);
        }

        onLoad() {
          if (PokiSDKManager.Instance == null) {
            PokiSDKManager.Instance = this;
          }

          game.addPersistRootNode(this.node);
        }

        update(deltaTime) {
          if (typeof PokiSDK === 'undefined') return;

          if (!this.isInitializeAsync) {
            ////console.log("isInitializeAsync:" + this.isInitializeAsync);
            // [4]
            if (window["phase"] === "poki_init_success") {
              this.isInitializeAsync = true; ////console.log("isInitializeAsync:" + this.isInitializeAsync);

              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).POKI_INIT_SUCCESS);
            }
          }
        }

        start() {// clientEvent.dispatchEvent(MConst.POKI_INIT_SUCCESS);
        }

        setGameLoadingFinished() {
          console.error("-----------------------------gameLoadingFinished");
          if (typeof PokiSDK === 'undefined') return;
          PokiSDK.gameLoadingFinished();
        }

        setGameStart() {
          console.error("-----------------------------setGameStart");
          if (typeof PokiSDK === 'undefined') return;
          PokiSDK.gameplayStart();
        }

        setGameStop() {
          console.error("-----------------------------setGameStop");
          if (typeof PokiSDK === 'undefined') return;
          PokiSDK.gameplayStop();
        }

        Show_InterstitialAdAsync(location, cb) {
          if (typeof PokiSDK === 'undefined') {
            cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_INTERSTITIAL_CALLBACK_SUCCESS);
            return;
          }

          ;
          var self = this;
          self.fb_InterstitialAd_CallBack = cb;
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LOADING_AD_POPUP);

          if (this.isShowInterstitialAd) {
            // pause your game here if it isn't already
            PokiSDK.commercialBreak(() => {
              // you can pause any background music or other audio here
              (_crd && MusicManager === void 0 ? (_reportPossibleCrUseOfMusicManager({
                error: Error()
              }), MusicManager) : MusicManager).instance.pauseMusic();
            }).then(() => {
              console.log("Commercial break finished, proceeding to game"); // if the audio was paused you can resume it here (keep in mind that the function above to pause it might not always get called)
              // continue your game here

              (_crd && MusicManager === void 0 ? (_reportPossibleCrUseOfMusicManager({
                error: Error()
              }), MusicManager) : MusicManager).instance.resumeMusic();
              self.SetNextTime_ShowInterstitialAd();
              cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).FB_INTERSTITIAL_CALLBACK_SUCCESS);
            });
          } else {
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

        SetNextTime_ShowInterstitialAd() {
          // console.log(this.TIME_NEXT_INTERSTITIAL);
          this.isShowInterstitialAd = false;
          this.scheduleOnce(function () {
            // Here `this` is referring to the component
            this.isShowInterstitialAd = true;
          }, this.TIME_NEXT_INTERSTITIAL);
        }

        Show_RewardedVideoAsync(location, button_name, cb) {
          if (typeof PokiSDK === 'undefined') {
            console.log("PokiSDK not init");
            cb(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).FB_REWARD_CALLBACK_SUCCESS);
            return;
          }

          ;
          var self = this;
          self.fb_RewardVideo_CallBack = cb;
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LOADING_AD_POPUP); // pause your game here if it isn't already

          PokiSDK.rewardedBreak(() => {
            // you can pause any background music or other audio here
            (_crd && MusicManager === void 0 ? (_reportPossibleCrUseOfMusicManager({
              error: Error()
            }), MusicManager) : MusicManager).instance.pauseMusic();
          }).then(success => {
            (_crd && MusicManager === void 0 ? (_reportPossibleCrUseOfMusicManager({
              error: Error()
            }), MusicManager) : MusicManager).instance.resumeMusic();
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).HIDE_LOADING_AD_POPUP);

            if (success) {
              // video was displayed, give reward
              self.SetNextTime_ShowInterstitialAd_AfterReward();
              self.fb_RewardVideo_CallBack(null, (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).FB_REWARD_CALLBACK_SUCCESS);
            } else {
              // video not displayed, should not give reward
              self.fb_RewardVideo_CallBack(new Error("load FAIL"), (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).FB_REWARD_CALLBACK_FAIL);
            } // if the audio was paused you can resume it here (keep in mind that the function above to pause it might not always get called)


            console.log("Rewarded break finished, proceeding to game"); // continue your game here
          });
        }

        SetNextTime_ShowInterstitialAd_AfterReward() {
          // console.log(this.TIME_NEXT_INTERSTITIAL);
          this.isShowInterstitialAd = false;
          this.scheduleOnce(function () {
            // Here `this` is referring to the component
            this.isShowInterstitialAd = true;
          }, this.TIME_NEXT_INTERSTITIAL_AFTERREWARD);
        }

      }, _defineProperty(_class2, "Instance", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PokiSDKManager.js.map