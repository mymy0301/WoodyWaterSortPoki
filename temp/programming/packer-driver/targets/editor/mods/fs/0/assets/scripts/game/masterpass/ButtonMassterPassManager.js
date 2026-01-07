System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Component, Label, Node, tween, UIOpacity, Vec3, CountDownToNextTime, Constants, clientEvent, localConfig, AudioManager2, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _temp, _crd, ccclass, property, ButtonMassterPassManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCountDownToNextTime(extras) {
    _reporterNs.report("CountDownToNextTime", "../../common/CountDownToNextTime", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "../../framework/audioManager2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogEventManager(extras) {
    _reporterNs.report("LogEventManager", "../../common/LogEventManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      CountDownToNextTime = _unresolved_2.CountDownToNextTime;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
    }, function (_unresolved_4) {
      clientEvent = _unresolved_4.clientEvent;
    }, function (_unresolved_5) {
      localConfig = _unresolved_5.localConfig;
    }, function (_unresolved_6) {
      AudioManager2 = _unresolved_6.AudioManager2;
    }, function (_unresolved_7) {
      LogEventManager = _unresolved_7.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "433b35iWlJFlISs1Yg2jLDd", "ButtonMassterPassManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ButtonMassterPassManager
       * DateTime = Fri Nov 15 2024 12:00:16 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ButtonMassterPassManager.ts
       * FileBasenameNoExtension = ButtonMassterPassManager
       * URL = db://assets/scripts/game/masterpass/ButtonMassterPassManager.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ButtonMassterPassManager", ButtonMassterPassManager = (_dec = ccclass('ButtonMassterPassManager'), _dec2 = property(Button), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(_crd && CountDownToNextTime === void 0 ? (_reportPossibleCrUseOfCountDownToNextTime({
        error: Error()
      }), CountDownToNextTime) : CountDownToNextTime), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(UIOpacity), _dec14 = property(Node), _dec(_class = (_class2 = (_temp = class ButtonMassterPassManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "btnMassterPass", _descriptor, this);

          _initializerDefineProperty(this, "nodeActive", _descriptor2, this);

          _initializerDefineProperty(this, "nodeGroup", _descriptor3, this);

          _initializerDefineProperty(this, "nodeCount", _descriptor4, this);

          _initializerDefineProperty(this, "txtCount", _descriptor5, this);

          _initializerDefineProperty(this, "nodeNotify", _descriptor6, this);

          _initializerDefineProperty(this, "countDownTime", _descriptor7, this);

          _initializerDefineProperty(this, "nodeLock", _descriptor8, this);

          _initializerDefineProperty(this, "txtUnlock", _descriptor9, this);

          _initializerDefineProperty(this, "nodeFinished", _descriptor10, this);

          _initializerDefineProperty(this, "nodeKey", _descriptor11, this);

          _initializerDefineProperty(this, "nodeKeyOpacity", _descriptor12, this);

          _defineProperty(this, "tweenShow", null);

          _defineProperty(this, "tweenShowOpacity", null);

          _initializerDefineProperty(this, "nodeAll", _descriptor13, this);

          _defineProperty(this, "tweenNode", null);
        }

        onEnable() {
          this.btnMassterPass.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchMassterPass, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PASS_UPDATE, this.showInfo, this);
          this.showInfo();
        }

        onDisable() {
          this.btnMassterPass.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchMassterPass, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PASS_UPDATE, this.showInfo, this);
        }

        showInfo() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.PASS_LEVEL_UNLOCK) {
            this.nodeGroup.active = false;
            this.nodeLock.active = true;
            this.txtUnlock.string = `Lv.${(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.PASS_LEVEL_UNLOCK}`;
            return;
          }

          this.nodeActive.active = true;
          this.nodeLock.active = false;
          let timeLeft = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.passLastTime + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.PASS_TIME - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrTime(); // console.log(timeLeft);

          if (timeLeft > 0) {
            this.countDownTime.node.active = true;
            this.countDownTime.initCountDownTime(timeLeft, () => {
              this.showInfo();
            });
            this.nodeFinished.active = false;
          } else {
            this.countDownTime.node.active = false;
            this.nodeFinished.active = true;
          }

          let indexPass = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.passIndexAvailable; // console.log("indexPass:"+indexPass);

          let countFreeClaim = indexPass - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.arrPassFreeClaims.length + 1; // console.log("countFreeClaim:"+countFreeClaim);

          let countPassClaim = 0;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.passActivated) {
            countPassClaim = indexPass - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrPassMasterClaims.length + 1;
          }

          let countClaimAvailable = countFreeClaim + countPassClaim;

          if (countClaimAvailable > 0) {
            this.nodeNotify.active = false;
            this.nodeCount.active = true;
            this.txtCount.string = `${countClaimAvailable}`;
          } else {
            this.nodeNotify.active = true;
            this.nodeCount.active = false;
          }
        }

        touchMassterPass() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("massterpass", "home");

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.PASS_LEVEL_UNLOCK) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_NOTIFICATION, "Unlock at Level " + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.PASS_LEVEL_UNLOCK);
            return;
          }

          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_MASSTERPASS_POPUP);
        } //#region KEY RECEIVE


        initReceiveKey() {
          if (this.tweenShow) {
            this.tweenShow.stop();
          }

          if (this.tweenShowOpacity) {
            this.tweenShowOpacity.stop();
          }

          if (this.tweenNode) {
            this.tweenNode.stop();
          }

          this.nodeGroup.active = false;
          this.nodeKey.setScale(new Vec3(0, 0, 0));
          this.nodeKeyOpacity.opacity = 0;
          this.nodeKey.setPosition(new Vec3(250, 0, 0));
          this.nodeAll.setScale(new Vec3(1, 1, 1));
        }

        showReceiveKey() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.PASS_LEVEL_UNLOCK) {
            return;
          }

          this.nodeKey.active = true;
          this.tweenShow = tween(this.nodeKey).to(0.5, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'bounceOut',
            onComplete: () => {
              this.showReceiveKey_Step2();
            }
          }).start();
          this.tweenShowOpacity = tween(this.nodeKeyOpacity).to(0.4, {
            opacity: 255
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
        }

        showReceiveKey_Step2() {
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playGetReward();
          this.tweenShow = tween(this.nodeKey).delay(0.3).to(0.3, {
            position: new Vec3(0, 0, 0)
          }, {
            easing: 'smooth',
            onComplete: () => {
              this.showReceiveKey_Step3();
            }
          }).start();
          this.tweenShowOpacity = tween(this.nodeKeyOpacity).delay(0.3).to(0.3, {
            opacity: 0
          }, {
            easing: 'smooth',
            onComplete: () => {}
          }).start();
          this.tweenNode = tween(this.nodeAll).delay(0.5).to(0.05, {
            scale: new Vec3(1.1, 1.1, 1.1)
          }, {
            easing: 'linear'
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'linear'
          }).to(0.05, {
            scale: new Vec3(1.05, 1.05, 1)
          }, {
            easing: 'linear'
          }).to(0.05, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'linear'
          }).union().start();
        }

        showReceiveKey_Step3() {
          this.nodeKey.active = false;
          this.nodeGroup.active = true;
        } //#endregion


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnMassterPass", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeActive", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeGroup", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeCount", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txtCount", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodeNotify", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "countDownTime", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "nodeLock", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "txtUnlock", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "nodeFinished", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "nodeKey", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "nodeKeyOpacity", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "nodeAll", [_dec14], {
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
//# sourceMappingURL=ButtonMassterPassManager.js.map