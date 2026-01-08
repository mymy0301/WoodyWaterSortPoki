System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Label, Node, BasePopup, CountDownTimeHeart, localConfig, Constants, SCENE_TYPE, configuration, clientEvent, LogEventManager, PokiSDKManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, MoreLivesPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasePopup(extras) {
    _reporterNs.report("BasePopup", "../common/basePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCountDownTimeHeart(extras) {
    _reporterNs.report("CountDownTimeHeart", "../common/CountDownTimeHeart", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSCENE_TYPE(extras) {
    _reporterNs.report("SCENE_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfiguration(extras) {
    _reporterNs.report("configuration", "../framework/configuration", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
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
      Button = _cc.Button;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BasePopup = _unresolved_2.BasePopup;
    }, function (_unresolved_3) {
      CountDownTimeHeart = _unresolved_3.CountDownTimeHeart;
    }, function (_unresolved_4) {
      localConfig = _unresolved_4.localConfig;
    }, function (_unresolved_5) {
      Constants = _unresolved_5.Constants;
      SCENE_TYPE = _unresolved_5.SCENE_TYPE;
    }, function (_unresolved_6) {
      configuration = _unresolved_6.configuration;
    }, function (_unresolved_7) {
      clientEvent = _unresolved_7.clientEvent;
    }, function (_unresolved_8) {
      LogEventManager = _unresolved_8.LogEventManager;
    }, function (_unresolved_9) {
      PokiSDKManager = _unresolved_9.PokiSDKManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "91807+ClABNG6b/SRCy5QHG", "MoreLivesPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = MoreLivesPopup
       * DateTime = Fri May 09 2025 10:49:08 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = MoreLivesPopup.ts
       * FileBasenameNoExtension = MoreLivesPopup
       * URL = db://assets/scripts/game/MoreLivesPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("MoreLivesPopup", MoreLivesPopup = (_dec = ccclass('MoreLivesPopup'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(_crd && CountDownTimeHeart === void 0 ? (_reportPossibleCrUseOfCountDownTimeHeart({
        error: Error()
      }), CountDownTimeHeart) : CountDownTimeHeart), _dec6 = property(Button), _dec7 = property(Button), _dec(_class = (_class2 = (_temp = class MoreLivesPopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nodeNextLife", _descriptor, this);

          _initializerDefineProperty(this, "nodeMaxLife", _descriptor2, this);

          _initializerDefineProperty(this, "txtCountLife", _descriptor3, this);

          _initializerDefineProperty(this, "countDownTimeHeart", _descriptor4, this);

          _initializerDefineProperty(this, "btnRefill", _descriptor5, this);

          _initializerDefineProperty(this, "btnWatchAd", _descriptor6, this);

          _defineProperty(this, "cbMoreLives", null);
        }

        onEnable() {
          super.onEnable();
          this.btnRefill.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchRefill, this);
          this.btnWatchAd.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchWatchAd, this);
          this.showInfo();
        }

        onDisable() {
          super.onDisable();
          this.btnRefill.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchRefill, this);
          this.btnWatchAd.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchWatchAd, this);
        }

        showMoreLivesPopup(cb) {
          this.cbMoreLives = cb;
          this.showPopup();
        }

        showInfo() {
          this.txtCountLife.string = `${(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currHeart}`;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currHeart >= (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.HEART_MAX_COUNT) {
            this.nodeNextLife.active = false;
            this.nodeMaxLife.active = true;
            this.countDownTimeHeart.node.active = false;
            this.btnRefill.node.active = false;
            this.btnWatchAd.node.active = false;
          } else {
            this.nodeNextLife.active = true;
            this.nodeMaxLife.active = false;
            this.countDownTimeHeart.node.active = true;
            this.countDownTimeHeart.initCountDownTime((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currHeart_CountTime, () => {
              this.showInfo();
            });
            this.btnRefill.node.active = true;
            this.btnWatchAd.node.active = true;
          }
        }

        touchRefill() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("refill", "morelivespopup");

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currCoin >= (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.HEARE_PRICE) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setCoin((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currCoin - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.HEARE_PRICE);
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logResourceSpend("currency", "coin", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.HEARE_PRICE, "morelivespopup", "refill");
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currHeart++;
            (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
              error: Error()
            }), configuration) : configuration).instance.setData_HeartCount((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currHeart);
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logResourceEarned("booster", "heart", 1, "morelivespopup", "exchange");
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).HEART_UPDATE);
            this.showInfo();
            this.hidePopup();
            this.cbMoreLives();
          } else {
            this.hidePopup();

            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currSceneType == (_crd && SCENE_TYPE === void 0 ? (_reportPossibleCrUseOfSCENE_TYPE({
              error: Error()
            }), SCENE_TYPE) : SCENE_TYPE).MENU) {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_SHOP_GROUP);
            } else {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_SHOP_POPUP);
            }

            this.cbMoreLives();
          }
        }

        touchWatchAd() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("watchad", "masterpasspopup"); // FBInstantManager.instance.Show_RewardedVideoAsync("morelivespopup","watchad",(err, success) => {
          //     if(err){
          //     }else{
          //         localConfig.instance.currHeart ++;
          //         configuration.instance.setData_HeartCount(localConfig.instance.currHeart);
          //         LogEventManager.instance.logResourceEarned("booster","heart",1,"morelivespopup","watchad");
          //         clientEvent.dispatchEvent(Constants.HEART_UPDATE);
          //         this.showInfo();
          //         this.hidePopup();
          //         this.cbMoreLives();
          //     }
          // });

          (_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
            error: Error()
          }), PokiSDKManager) : PokiSDKManager).instance.Show_RewardedVideoAsync("morelivespopup", "watchad", (err, success) => {
            if (err) {} else {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currHeart++;
              (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
                error: Error()
              }), configuration) : configuration).instance.setData_HeartCount((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currHeart);
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logResourceEarned("booster", "heart", 1, "morelivespopup", "watchad");
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).HEART_UPDATE);
              this.showInfo();
              this.hidePopup();
              this.cbMoreLives();
            }
          });
        }

        touchClose() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("close", "morelivespopup");
          super.touchClose();
          this.cbMoreLives();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeNextLife", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeMaxLife", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txtCountLife", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "countDownTimeHeart", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnRefill", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnWatchAd", [_dec7], {
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
//# sourceMappingURL=MoreLivesPopup.js.map