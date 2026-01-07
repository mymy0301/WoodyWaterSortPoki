System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Label, BasePopup, Constants, GAME_MODE, Utils, clientEvent, localConfig, LogEventManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, LevelFailedPopup;

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

  function _reportPossibleCrUseOfGAME_MODE(extras) {
    _reporterNs.report("GAME_MODE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../core/utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
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
    }, function (_unresolved_2) {
      BasePopup = _unresolved_2.BasePopup;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
      GAME_MODE = _unresolved_3.GAME_MODE;
    }, function (_unresolved_4) {
      Utils = _unresolved_4.default;
    }, function (_unresolved_5) {
      clientEvent = _unresolved_5.clientEvent;
    }, function (_unresolved_6) {
      localConfig = _unresolved_6.localConfig;
    }, function (_unresolved_7) {
      LogEventManager = _unresolved_7.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "62fc0tRfX1Hlqt4ZXn+9E7K", "LevelFailedPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = LevelFailedPopup
       * DateTime = Thu May 08 2025 17:33:08 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = LevelFailedPopup.ts
       * FileBasenameNoExtension = LevelFailedPopup
       * URL = db://assets/scripts/game/LevelFailedPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("LevelFailedPopup", LevelFailedPopup = (_dec = ccclass('LevelFailedPopup'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Button), _dec(_class = (_class2 = (_temp = class LevelFailedPopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "txtLevel", _descriptor, this);

          _initializerDefineProperty(this, "txtValue", _descriptor2, this);

          _initializerDefineProperty(this, "btnTryAgain", _descriptor3, this);
        }

        onEnable() {
          super.onEnable();
          this.btnTryAgain.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchTryAgain, this);
        }

        onDisable() {
          super.onDisable();
          this.btnTryAgain.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchTryAgain, this);
        }

        showLevelFailedPopup(value) {
          this.txtValue.string = "x" + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).formatNumber(value);

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).NORMAL) {
            this.txtLevel.string = "Level " + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).formatNumber((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevel);
          }

          super.showPopup();
        }

        touchTryAgain() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("retry", "levelfailedpopup");
          this.hidePopup();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).LEVELFAILED_TOUCH_RETRY);
        }

        touchClose() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("close", "levelfailedpopup");
          super.touchClose();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BACK_TO_HOME);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtLevel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtValue", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnTryAgain", [_dec4], {
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
//# sourceMappingURL=LevelFailedPopup.js.map