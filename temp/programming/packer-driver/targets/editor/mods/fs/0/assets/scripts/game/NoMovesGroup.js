System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, tween, UIOpacity, Vec3, BOOSTER_TYPE, Constants, GAME_MODE, PLAY_TYPE, localConfig, clientEvent, FBInstantManager, AudioManager2, LogEventManager, PokiSDKManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, _crd, ccclass, property, NoMovesGroup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBOOSTER_TYPE(extras) {
    _reporterNs.report("BOOSTER_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGAME_MODE(extras) {
    _reporterNs.report("GAME_MODE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPLAY_TYPE(extras) {
    _reporterNs.report("PLAY_TYPE", "../framework/constants", _context.meta, extras);
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

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "../framework/audioManager2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogEventManager(extras) {
    _reporterNs.report("LogEventManager", "../common/LogEventManager", _context.meta, extras);
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
      Component = _cc.Component;
      Node = _cc.Node;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BOOSTER_TYPE = _unresolved_2.BOOSTER_TYPE;
      Constants = _unresolved_2.Constants;
      GAME_MODE = _unresolved_2.GAME_MODE;
      PLAY_TYPE = _unresolved_2.PLAY_TYPE;
    }, function (_unresolved_3) {
      localConfig = _unresolved_3.localConfig;
    }, function (_unresolved_4) {
      clientEvent = _unresolved_4.clientEvent;
    }, function (_unresolved_5) {
      FBInstantManager = _unresolved_5.FBInstantManager;
    }, function (_unresolved_6) {
      AudioManager2 = _unresolved_6.AudioManager2;
    }, function (_unresolved_7) {
      LogEventManager = _unresolved_7.LogEventManager;
    }, function (_unresolved_8) {
      PokiSDKManager = _unresolved_8.PokiSDKManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "218baxmWhJH7LAIqanSOWMj", "NoMovesGroup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("NoMovesGroup", NoMovesGroup = (_dec = ccclass('NoMovesGroup'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(UIOpacity), _dec10 = property(Node), _dec(_class = (_class2 = (_temp = class NoMovesGroup extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "btnPlayOn", _descriptor, this);

          _initializerDefineProperty(this, "btnClose", _descriptor2, this);

          _initializerDefineProperty(this, "btnAddColAd", _descriptor3, this);

          _initializerDefineProperty(this, "groupRight", _descriptor4, this);

          _initializerDefineProperty(this, "nodeTitle", _descriptor5, this);

          _initializerDefineProperty(this, "nodeTitle2", _descriptor6, this);

          _initializerDefineProperty(this, "nodeCoinGroup", _descriptor7, this);

          _initializerDefineProperty(this, "bgOpacity", _descriptor8, this);

          _defineProperty(this, "tweenBGOpacity", null);

          _defineProperty(this, "twennPlayOn", null);

          _defineProperty(this, "tweenRightGroup", null);

          _defineProperty(this, "tweenTitle", null);

          _defineProperty(this, "tweenTitle2", null);

          _initializerDefineProperty(this, "lockGroup", _descriptor9, this);
        }

        onEnable() {
          this.btnPlayOn.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchPlayOn, this); // this.btnGiveUp.on(Constants.CLICK, this.touchGiveUp, this);
          // this.btnReplay.on(Constants.CLICK, this.touchReplay, this);

          this.btnAddColAd.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchAddColAd, this); // this.btnQuitTournament.on(Constants.CLICK, this.touchQuitTournament, this);

          this.btnClose.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchClose, this);
        }

        onDisable() {
          this.btnPlayOn.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchPlayOn, this); // this.btnGiveUp.off(Constants.CLICK, this.touchGiveUp, this);
          // this.btnReplay.off(Constants.CLICK, this.touchReplay, this);

          this.btnAddColAd.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchAddColAd, this); // this.btnQuitTournament.off(Constants.CLICK, this.touchQuitTournament, this);

          this.btnClose.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchClose, this);
        }

        showNoMovesGroup() {
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playNoMoves();
          this.lockGroup.active = true;
          this.bgOpacity.opacity = 0; // Vị trí đích

          const playOnTarget = new Vec3(-260, -680, 0);
          const playOnTarget2 = new Vec3(0, -680, 0);
          const rightGroupTarget = new Vec3(260, -680, 0);
          const titleTarget = this.nodeTitle.position.clone();
          const title2Target = this.nodeTitle2.position.clone(); // Vị trí bắt đầu

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isNoMoves_AddCol_byAD) {
            this.groupRight.active = false;
            this.btnPlayOn.setPosition(new Vec3(0, -1200, 0));
          } else {
            this.groupRight.active = true;
            this.btnPlayOn.setPosition(new Vec3(-600, -680, 0));
          }

          this.groupRight.setPosition(new Vec3(600, rightGroupTarget.y));
          this.nodeTitle.setPosition(new Vec3(titleTarget.x, 1200));
          this.nodeTitle2.setPosition(new Vec3(title2Target.x, 1200));
          this.nodeCoinGroup.active = false;
          this.btnClose.active = false; // this.btnGiveUp.active = false;
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

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currMagicLevelConfigInfo.maxRow > 2) {
            this.nodeTitle2.active = false;
            this.nodeTitle.active = true;
            this.tweenTitle = tween(this.nodeTitle).to(0.5, {
              position: titleTarget
            }, {
              easing: 'backOut',
              onComplete: () => {
                this.nodeCoinGroup.active = true;
                this.btnClose.active = true;
                this.lockGroup.active = false;
              }
            }).start();
          } else {
            this.nodeTitle2.active = true;
            this.nodeTitle.active = false;
            this.tweenTitle2 = tween(this.nodeTitle2).to(0.5, {
              position: title2Target
            }, {
              easing: 'backOut',
              onComplete: () => {
                this.nodeCoinGroup.active = true;
                this.btnClose.active = true;
                this.lockGroup.active = false;
              }
            }).start();
          }

          this.tweenBGOpacity = tween(this.bgOpacity).to(0.3, {
            opacity: 255
          }, {
            easing: 'linear',
            onComplete: () => {}
          }).start();

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isNoMoves_AddCol_byAD) {
            this.twennPlayOn = tween(this.btnPlayOn).to(0.5, {
              position: playOnTarget2
            }, {
              easing: 'backOut',
              onComplete: () => {}
            }).start();
          } else {
            this.twennPlayOn = tween(this.btnPlayOn).to(0.5, {
              position: playOnTarget
            }, {
              easing: 'backOut',
              onComplete: () => {}
            }).start();
            this.tweenRightGroup = tween(this.groupRight).to(0.5, {
              position: rightGroupTarget
            }, {
              easing: 'backOut',
              onComplete: () => {}
            }).start();
          }
        }

        touchPlayOn() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("playon", "nomoves");

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currCoin >= (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getBoosterPrice((_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
            error: Error()
          }), BOOSTER_TYPE) : BOOSTER_TYPE).ADDCOL)) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setCoin((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currCoin - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getBoosterPrice((_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
              error: Error()
            }), BOOSTER_TYPE) : BOOSTER_TYPE).ADDCOL));
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logResourceSpend("currency", "coin", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getBoosterPrice((_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
              error: Error()
            }), BOOSTER_TYPE) : BOOSTER_TYPE).ADDCOL), "nomoves", "playon");
            this.node.active = false;
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).NOMOVES_TOUCH_PLAYON);
          } else {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_SHOP_POPUP);
          }
        }

        touchGiveUp() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("giveup", "nomoves"); // FBInstantManager.instance.Show_InterstitialAdAsync("nomoves","giveup",(err,success)=>{
          // });

          this.node.active = false;
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).NOMOVES_TOUCH_GIVEUP);
        }

        touchReplay() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("replay", "nomoves"); // FBInstantManager.instance.Show_InterstitialAdAsync("nomoves","replay",(err, success) => {
          //     this.node.active = false;
          //     clientEvent.dispatchEvent(Constants.NOMOVES_TOUCH_REPLAY);
          // });

          (_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
            error: Error()
          }), PokiSDKManager) : PokiSDKManager).instance.Show_InterstitialAdAsync("nomoves", "replay", (err, success) => {
            this.node.active = false;
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).NOMOVES_TOUCH_REPLAY);
          });
        }

        touchQuitTournament() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("quittournament", "nomoves"); // FBInstantManager.instance.Show_InterstitialAdAsync("nomoves","quittournament",(err, success) => {
          //     this.node.active = false;
          //     LogEventManager.instance.logLevelEnd(localConfig.instance.currIndexLevelTournament,localConfig.instance.getLevelLoopByFromStr(localConfig.instance.currLevelConfigInfo.levelOrder),PLAY_TYPE[localConfig.instance.playType].toLowerCase().toString(),1,0,"tournament",localConfig.instance.playDurationEndTime - localConfig.instance.playDurationStartTime,"lose","out_of_move");
          //     clientEvent.dispatchEvent(Constants.TOURNAMENT_QUIT_YES);
          // });

          (_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
            error: Error()
          }), PokiSDKManager) : PokiSDKManager).instance.Show_InterstitialAdAsync("nomoves", "quittournament", (err, success) => {
            this.node.active = false;
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logLevelEnd((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currIndexLevelTournament, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getLevelLoopByFromStr((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevelConfigInfo.levelOrder), (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
              error: Error()
            }), PLAY_TYPE) : PLAY_TYPE)[(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.playType].toLowerCase().toString(), 1, 0, "tournament", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.playDurationEndTime - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.playDurationStartTime, "lose", "out_of_move");
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TOURNAMENT_QUIT_YES);
          });
        }

        touchAddColAd() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("addcolad", "nomoves"); // FBInstantManager.instance.Show_RewardedVideoAsync("nomoves","addcolad",(err, success) => {
          //     if (err) {
          //     } else {
          //         localConfig.instance.isNoMoves_AddCol_byAD = true;
          //         this.node.active = false;
          //         clientEvent.dispatchEvent(Constants.NOMOVES_TOUCH_PLAYON);
          //     }
          // });

          (_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
            error: Error()
          }), PokiSDKManager) : PokiSDKManager).instance.Show_RewardedVideoAsync("nomoves", "addcolad", (err, success) => {
            if (err) {} else {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.isNoMoves_AddCol_byAD = true;
              this.node.active = false;
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).NOMOVES_TOUCH_PLAYON);
            }
          });
        }

        touchClose() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("close", "nomoves");

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).NORMAL) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_QUITCONFIRM_POPUP);
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
            }), localConfig) : localConfig).instance.playDurationStartTime, "exit", "");
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).DAILYCHALLENGE_NOMOVES_TOUCHCLOSE);
          } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).TOURNAMENT) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_TOURNAMENTQUIT_POPUP);
          } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).WITH_FRIEND) {
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logLevelEnd((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevelConfigInfo.levelIndex, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getLevelLoopByFromStr((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevelConfigInfo.levelOrder), (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
              error: Error()
            }), PLAY_TYPE) : PLAY_TYPE)[(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.playType].toLowerCase().toString(), 1, 0, "withfriend", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.playDurationEndTime - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.playDurationStartTime, "exit", "");
            (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
              error: Error()
            }), FBInstantManager) : FBInstantManager).instance.resetContext(() => {});
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currWithFriendDataInfo = null;
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).WITHFRIEND_NOMOVES_TOUCH_CLOSE);
          } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).TOURNAMENT_PAGEHOST) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_TOURNAMENTQUIT_POPUP);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnPlayOn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnAddColAd", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "groupRight", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeTitle", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodeTitle2", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "nodeCoinGroup", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bgOpacity", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lockGroup", [_dec10], {
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
//# sourceMappingURL=NoMovesGroup.js.map