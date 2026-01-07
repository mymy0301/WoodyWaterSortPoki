System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Component, Enum, Label, Node, Vec3, BOX_TYPE, Constants, clientEvent, localConfig, InfoMonthReward, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, ItemDailyChallengeBox;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBOX_TYPE(extras) {
    _reporterNs.report("BOX_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfoMonthReward(extras) {
    _reporterNs.report("InfoMonthReward", "../common/InfoMonthReward", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfoMonth(extras) {
    _reporterNs.report("InfoMonth", "../common/InfoMonth", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BOX_TYPE = _unresolved_2.BOX_TYPE;
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      clientEvent = _unresolved_3.clientEvent;
    }, function (_unresolved_4) {
      localConfig = _unresolved_4.localConfig;
    }, function (_unresolved_5) {
      InfoMonthReward = _unresolved_5.InfoMonthReward;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c1a05WboU5Bwao4h98hq6jk", "ItemDailyChallengeBox", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemDailyChallengeBox
       * DateTime = Mon Sep 30 2024 17:53:41 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemDailyChallengeBox.ts
       * FileBasenameNoExtension = ItemDailyChallengeBox
       * URL = db://assets/scripts/game/ItemDailyChallengeBox.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemDailyChallengeBox", ItemDailyChallengeBox = (_dec = ccclass('ItemDailyChallengeBox'), _dec2 = property(Button), _dec3 = property(Label), _dec4 = property({
        type: Enum(_crd && BOX_TYPE === void 0 ? (_reportPossibleCrUseOfBOX_TYPE({
          error: Error()
        }), BOX_TYPE) : BOX_TYPE)
      }), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = (_temp = class ItemDailyChallengeBox extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "btnBox", _descriptor, this);

          _initializerDefineProperty(this, "txtBox", _descriptor2, this);

          _initializerDefineProperty(this, "boxType", _descriptor3, this);

          _initializerDefineProperty(this, "nodeLight", _descriptor4, this);

          _initializerDefineProperty(this, "objLock", _descriptor5, this);

          _initializerDefineProperty(this, "objUnlock", _descriptor6, this);

          _defineProperty(this, "tweeenShow", null);

          _defineProperty(this, "tweeenHide", null);

          _defineProperty(this, "indexReward_byMonth", -1);

          _defineProperty(this, "infoMonthReward", null);
        }

        onEnable() {
          this.btnBox.node.on(Button.EventType.CLICK, this.touchBox, this);
        }

        onDisable() {
          this.btnBox.node.off(Button.EventType.CLICK, this.touchBox, this);
        }

        initInfoBox(_countDayOfMonth, _infoMonth) {
          this.infoMonthReward = new (_crd && InfoMonthReward === void 0 ? (_reportPossibleCrUseOfInfoMonthReward({
            error: Error()
          }), InfoMonthReward) : InfoMonthReward)(_infoMonth, this.boxType);

          if (this.boxType == (_crd && BOX_TYPE === void 0 ? (_reportPossibleCrUseOfBOX_TYPE({
            error: Error()
          }), BOX_TYPE) : BOX_TYPE).BOX_1) {
            this.txtBox.string = `5`;
          } else if (this.boxType == (_crd && BOX_TYPE === void 0 ? (_reportPossibleCrUseOfBOX_TYPE({
            error: Error()
          }), BOX_TYPE) : BOX_TYPE).BOX_2) {
            this.txtBox.string = `12`;
          } else if (this.boxType == (_crd && BOX_TYPE === void 0 ? (_reportPossibleCrUseOfBOX_TYPE({
            error: Error()
          }), BOX_TYPE) : BOX_TYPE).BOX_3) {
            this.txtBox.string = `20`;
          } else if (this.boxType == (_crd && BOX_TYPE === void 0 ? (_reportPossibleCrUseOfBOX_TYPE({
            error: Error()
          }), BOX_TYPE) : BOX_TYPE).BOX_4) {
            this.txtBox.string = `${_countDayOfMonth}`;
          }

          let posX = 0;

          if (this.boxType == (_crd && BOX_TYPE === void 0 ? (_reportPossibleCrUseOfBOX_TYPE({
            error: Error()
          }), BOX_TYPE) : BOX_TYPE).BOX_1) {
            posX = 5 / _countDayOfMonth * 640 - 320;
          } else if (this.boxType == (_crd && BOX_TYPE === void 0 ? (_reportPossibleCrUseOfBOX_TYPE({
            error: Error()
          }), BOX_TYPE) : BOX_TYPE).BOX_2) {
            posX = 12 / _countDayOfMonth * 640 - 320;
          } else if (this.boxType == (_crd && BOX_TYPE === void 0 ? (_reportPossibleCrUseOfBOX_TYPE({
            error: Error()
          }), BOX_TYPE) : BOX_TYPE).BOX_3) {
            posX = 20 / _countDayOfMonth * 640 - 320;
          } else if (this.boxType == (_crd && BOX_TYPE === void 0 ? (_reportPossibleCrUseOfBOX_TYPE({
            error: Error()
          }), BOX_TYPE) : BOX_TYPE).BOX_4) {
            posX = 310;
          }

          this.node.setPosition(new Vec3(posX, 10, 0));
          this.showInfoBox(); // this.showChestBox(0.3);
        }

        showInfoBox() {
          this.nodeLight.active = false; // console.log(this.boxType + "   " + this.indexReward_byMonth);
          // console.log(this.infoMonthReward);

          let isReceiveReward = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.checkReceivedInfoMonthReward(this.infoMonthReward);

          if (!isReceiveReward) {
            this.objUnlock.active = false;
            this.objLock.active = true;
          } else {
            this.objUnlock.active = true;
            this.objLock.active = false;
          }
        }

        touchBox() {
          // console.log("touchBox",this.boxType);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILYCHALLENGE_TOUCH_BOXREWARD, this);
        }

        setBoxOpenend() {
          this.objUnlock.active = true;
          this.objLock.active = false;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnBox", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtBox", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "boxType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && BOX_TYPE === void 0 ? (_reportPossibleCrUseOfBOX_TYPE({
            error: Error()
          }), BOX_TYPE) : BOX_TYPE).NONE;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeLight", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "objLock", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "objUnlock", [_dec7], {
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
//# sourceMappingURL=ItemDailyChallengeBox.js.map