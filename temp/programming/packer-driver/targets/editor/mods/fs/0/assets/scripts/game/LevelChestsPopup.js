System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Label, Node, tween, UIOpacity, Vec3, Widget, BasePopup, Constants, ChestProgressRewardGroup, BGProgressRewardGroup, localConfig, clientEvent, Utils, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _temp, _crd, ccclass, property, LevelChestsPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasePopup(extras) {
    _reporterNs.report("BasePopup", "../common/basePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChestProgressRewardGroup(extras) {
    _reporterNs.report("ChestProgressRewardGroup", "./ChestProgressRewardGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBGProgressRewardGroup(extras) {
    _reporterNs.report("BGProgressRewardGroup", "./BGProgressRewardGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../core/utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogEventManager(extras) {
    _reporterNs.report("LogEventManager", "../common/LogEventManager", _context.meta, extras);
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
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      BasePopup = _unresolved_2.BasePopup;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
    }, function (_unresolved_4) {
      ChestProgressRewardGroup = _unresolved_4.ChestProgressRewardGroup;
    }, function (_unresolved_5) {
      BGProgressRewardGroup = _unresolved_5.BGProgressRewardGroup;
    }, function (_unresolved_6) {
      localConfig = _unresolved_6.localConfig;
    }, function (_unresolved_7) {
      clientEvent = _unresolved_7.clientEvent;
    }, function (_unresolved_8) {
      Utils = _unresolved_8.default;
    }, function (_unresolved_9) {
      LogEventManager = _unresolved_9.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "76e25LB7jJNZ4OGK4q82lPo", "LevelChestsPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = LevelChestsPopup
       * DateTime = Wed Oct 23 2024 15:45:20 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = LevelChestsPopup.ts
       * FileBasenameNoExtension = LevelChestsPopup
       * URL = db://assets/scripts/game/LevelChestsPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("LevelChestsPopup", LevelChestsPopup = (_dec = ccclass('LevelChestsPopup'), _dec2 = property(Widget), _dec3 = property(Button), _dec4 = property(UIOpacity), _dec5 = property(_crd && ChestProgressRewardGroup === void 0 ? (_reportPossibleCrUseOfChestProgressRewardGroup({
        error: Error()
      }), ChestProgressRewardGroup) : ChestProgressRewardGroup), _dec6 = property(_crd && BGProgressRewardGroup === void 0 ? (_reportPossibleCrUseOfBGProgressRewardGroup({
        error: Error()
      }), BGProgressRewardGroup) : BGProgressRewardGroup), _dec7 = property(Node), _dec8 = property(UIOpacity), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Label), _dec(_class = (_class2 = (_temp = class LevelChestsPopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "groupAllTopWidget", _descriptor, this);

          _initializerDefineProperty(this, "btnContinue", _descriptor2, this);

          _initializerDefineProperty(this, "nodeContinue_Opacity", _descriptor3, this);

          _defineProperty(this, "tweenContinue", null);

          _defineProperty(this, "tweenContinue_Opacity", null);

          _initializerDefineProperty(this, "chestGroup", _descriptor4, this);

          _initializerDefineProperty(this, "bgGroup", _descriptor5, this);

          _initializerDefineProperty(this, "groupRewards", _descriptor6, this);

          _initializerDefineProperty(this, "groupRewards_Opacity", _descriptor7, this);

          _initializerDefineProperty(this, "nodeLight0", _descriptor8, this);

          _initializerDefineProperty(this, "nodeLight1", _descriptor9, this);

          _initializerDefineProperty(this, "nodeEfx", _descriptor10, this);

          _defineProperty(this, "tweenRewards", null);

          _defineProperty(this, "tweenRewards_Opacity", null);

          _initializerDefineProperty(this, "txtValue", _descriptor11, this);

          _defineProperty(this, "rewardCoin", 20);
        }

        onEnable() {
          super.onEnable();
          this.btnContinue.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchContinue, this);
        }

        onDisable() {
          super.onDisable();
          this.btnContinue.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchContinue, this);
        }

        start() {
          this.initAllTop();
        }

        initAllTop() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isMobile) {
            let posY = ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.scaleBG - 1) * (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.DEFAULT_H / 2;

            if (posY > 0) {
              this.groupAllTopWidget.top = -posY;
            } else {
              this.groupAllTopWidget.top = 0;
            }
          } else {
            this.groupAllTopWidget.top = 0;
          }
        }

        showLevelChestsPopup() {
          this.nodeLight0.active = false;
          this.nodeLight1.active = false;
          this.chestGroup.node.active = false; // this.tubeGroup.node.active = false;

          this.bgGroup.node.active = false;
          this.btnContinue.node.active = false;
          this.rewardCoin = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getRewardCoinby_LevelConfigInfo((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelConfigInfo);
          this.txtValue.string = `x${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).formatNumber(this.rewardCoin)}`;
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.setCoin((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currCoin + this.rewardCoin);
          this.groupRewards_Opacity.opacity = 0;
          this.groupRewards.setScale(new Vec3(1.5, 1.5, 1.5));
          this.nodeEfx.active = false;
          super.showPopup();
        }

        showPoup_ShowView() {
          this.tweenOpacityBG = tween(this.bgOpacity).to(0.2, {
            opacity: 255
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
          this.tweenOpacityPopup = tween(this.popup_UIOpacity).to(0.4, {
            opacity: 255
          }, {
            easing: 'quadOut',
            onComplete: () => {
              this.showPoup_ShowView_Finished();
            }
          }).start();
        }

        showPoup_ShowView_Finished() {
          super.showPoup_ShowView_Finished();
          this.lockGroup.active = true;
          this.showGroupRewards();
        }

        showGroupRewards() {
          if (this.tweenRewards) this.tweenRewards.stop();
          if (this.tweenRewards_Opacity) this.tweenRewards_Opacity.stop();
          this.groupRewards_Opacity.opacity = 0;
          this.groupRewards.setScale(new Vec3(1.5, 1.5, 1.5));
          this.tweenRewards = tween(this.groupRewards).to(0.2, {
            scale: new Vec3(0.8, 0.8, 1)
          }, {
            easing: 'quadOut',
            onComplete: () => {
              this.nodeLight0.active = true;
              this.nodeLight1.active = true;
            }
          }).to(0.2, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'bounceOut',
            onComplete: () => {}
          }).union().call(() => {
            this.showProgress();
          }).start();
          this.tweenRewards_Opacity = tween(this.groupRewards_Opacity).to(0.2, {
            opacity: 255
          }, {
            easing: 'quadOut'
          }).start();
        }

        showProgress() {
          this.nodeEfx.active = true;
          this.scheduleOnce(() => {
            this.chestGroup.node.active = true;
            this.chestGroup.initChestProgress((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevel);
          }, 0.1); // this.scheduleOnce(()=>{
          //     this.tubeGroup.node.active = true;
          //     this.tubeGroup.initTubeProgress(localConfig.instance.currLevel);
          // },0.5);

          this.scheduleOnce(() => {
            this.bgGroup.node.active = true;
            this.bgGroup.initBGProgress((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevel);
          }, 0.9);
          this.scheduleOnce(() => {
            this.lockGroup.active = false;
            this.showButton_Step1();
          }, 2);
        }

        showButton_Step1() {
          if (this.tweenContinue) this.tweenContinue.stop();
          if (this.tweenContinue_Opacity) this.tweenContinue_Opacity.stop();
          this.btnContinue.node.active = true;
          this.btnContinue.node.setScale(new Vec3(0.5, 0.5, 0.5));
          this.nodeContinue_Opacity.opacity = 150;
          this.tweenContinue = tween(this.btnContinue.node).to(0.2, {
            scale: new Vec3(1.2, 1.2, 1)
          }, {
            easing: 'quadOut'
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut'
          }).union().start();
          this.tweenContinue_Opacity = tween(this.nodeContinue_Opacity).to(0.3, {
            opacity: 255
          }, {
            easing: 'quadOut'
          }).start();
        }

        touchContinue() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("continue", "levelchestpopup");
          this.hidePopup();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOUCH_NEXT_LEVEL); // clientEvent.dispatchEvent(Constants.LEVEL_CHEST_TOUCH_CONTINUE,this.rewardCoin);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "groupAllTopWidget", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnContinue", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeContinue_Opacity", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "chestGroup", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bgGroup", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "groupRewards", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "groupRewards_Opacity", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "nodeLight0", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nodeLight1", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "nodeEfx", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "txtValue", [_dec12], {
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
//# sourceMappingURL=LevelChestsPopup.js.map