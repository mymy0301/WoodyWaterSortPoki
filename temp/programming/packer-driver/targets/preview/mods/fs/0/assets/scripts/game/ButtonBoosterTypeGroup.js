System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Component, Enum, Label, Node, BOOSTER_TYPE, Constants, localConfig, clientEvent, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, ButtonBoosterTypeGroup;

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

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
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
      Component = _cc.Component;
      Enum = _cc.Enum;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BOOSTER_TYPE = _unresolved_2.BOOSTER_TYPE;
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      localConfig = _unresolved_3.localConfig;
    }, function (_unresolved_4) {
      clientEvent = _unresolved_4.clientEvent;
    }, function (_unresolved_5) {
      LogEventManager = _unresolved_5.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "148202dldBOQI6twlx8r2vc", "ButtonBoosterTypeGroup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ButtonBoosterTypeGroup
       * DateTime = Fri Sep 06 2024 10:11:08 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ButtonBoosterTypeGroup.ts
       * FileBasenameNoExtension = ButtonBoosterTypeGroup
       * URL = db://assets/scripts/game/ButtonBoosterTypeGroup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ButtonBoosterTypeGroup", ButtonBoosterTypeGroup = (_dec = ccclass('ButtonBoosterTypeGroup'), _dec2 = property({
        type: Enum(_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
          error: Error()
        }), BOOSTER_TYPE) : BOOSTER_TYPE)
      }), _dec3 = property(Button), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Node), _dec(_class = (_class2 = (_temp = class ButtonBoosterTypeGroup extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "boosterType", _descriptor, this);

          _initializerDefineProperty(this, "btnBooster", _descriptor2, this);

          _initializerDefineProperty(this, "objDisable", _descriptor3, this);

          _initializerDefineProperty(this, "objCount", _descriptor4, this);

          _initializerDefineProperty(this, "txtCount", _descriptor5, this);

          _initializerDefineProperty(this, "objAdd", _descriptor6, this);

          _defineProperty(this, "isTutorial", false);
        }

        onEnable() {
          this.btnBooster.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchBooster, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOOSTER_COUNT_UPDATE, this.setBoosterCountUpdate, this);
          this.showButtonBooster();
        }

        onDisable() {
          this.btnBooster.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchBooster, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOOSTER_COUNT_UPDATE, this.setBoosterCountUpdate, this);
        }

        start() {// [3]
        }

        setButtonTutorial() {
          this.isTutorial = true;
          this.objAdd.active = false;
          this.objCount.active = false;
        }

        showButtonBooster() {
          this.objCount.active = false;
          this.objAdd.active = false;
          var boosterCount = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getBoosterCount(this.boosterType);

          if (boosterCount > 0) {
            this.objCount.active = true;
            this.txtCount.string = "" + boosterCount;
          } else {
            this.objAdd.active = true;
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }


        touchBooster() {
          if (this.boosterType == (_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
            error: Error()
          }), BOOSTER_TYPE) : BOOSTER_TYPE).UNDO) {
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logButtonClick("booster_undo", "play");
          } else if (this.boosterType == (_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
            error: Error()
          }), BOOSTER_TYPE) : BOOSTER_TYPE).SUGGEST) {
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logButtonClick("booster_shuffle", "play");
          } else if (this.boosterType == (_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
            error: Error()
          }), BOOSTER_TYPE) : BOOSTER_TYPE).ADDCOL) {
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logButtonClick("booster_addcol", "play");
          }

          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOOSTER_CLICK, this.boosterType, this.isTutorial);
        }

        setBoosterAvailable(isAvailable) {
          this.objDisable.active = !isAvailable;
        }

        setBoosterCountUpdate(_boosterType) {
          if (this.boosterType == _boosterType) {
            this.showButtonBooster();
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "boosterType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
            error: Error()
          }), BOOSTER_TYPE) : BOOSTER_TYPE).UNDO;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnBooster", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "objDisable", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "objCount", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txtCount", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "objAdd", [_dec7], {
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
//# sourceMappingURL=ButtonBoosterTypeGroup.js.map