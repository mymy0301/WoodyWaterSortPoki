System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Component, Enum, Sprite, SpriteFrame, tween, Vec3, Constants, THEME_TYPE, clientEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, ItemTabTheme;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTHEME_TYPE(extras) {
    _reporterNs.report("THEME_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
      THEME_TYPE = _unresolved_2.THEME_TYPE;
    }, function (_unresolved_3) {
      clientEvent = _unresolved_3.clientEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f5a745zmHBD8YHxvzTtv2O9", "ItemTabTheme", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemTabTheme
       * DateTime = Thu Oct 10 2024 17:51:54 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemTabTheme.ts
       * FileBasenameNoExtension = ItemTabTheme
       * URL = db://assets/scripts/game/ItemTabTheme.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemTabTheme", ItemTabTheme = (_dec = ccclass('ItemTabTheme'), _dec2 = property({
        type: Enum(_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
          error: Error()
        }), THEME_TYPE) : THEME_TYPE)
      }), _dec3 = property(Button), _dec4 = property(Sprite), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = class ItemTabTheme extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "tabType", _descriptor, this);

          _initializerDefineProperty(this, "btnTab", _descriptor2, this);

          _initializerDefineProperty(this, "bg", _descriptor3, this);

          _initializerDefineProperty(this, "sfON", _descriptor4, this);

          _initializerDefineProperty(this, "sfOFF", _descriptor5, this);

          _defineProperty(this, "tweenMove", null);
        }

        onEnable() {
          this.btnTab.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchTab, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TABTHEME_UPDATE, this.showTab, this);
        }

        onDisable() {
          this.btnTab.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchTab, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TABTHEME_UPDATE, this.showTab, this);
        }

        setItemON() {
          this.bg.spriteFrame = this.sfON;
          tween(this.node).to(0.15, {
            position: new Vec3(this.node.position.x, 0, 0)
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
        }

        setItemOff() {
          this.bg.spriteFrame = this.sfOFF;
          tween(this.node).to(0.15, {
            position: new Vec3(this.node.position.x, -5, 0)
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
        }

        touchTab() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOUCH_TABTHEME, this.tabType);
        }

        showTab(currTab) {
          if (this.tabType == currTab) {
            this.setItemON();
          } else {
            this.setItemOff();
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tabType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).TUBE;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnTab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sfON", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sfOFF", [_dec6], {
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
//# sourceMappingURL=ItemTabTheme.js.map