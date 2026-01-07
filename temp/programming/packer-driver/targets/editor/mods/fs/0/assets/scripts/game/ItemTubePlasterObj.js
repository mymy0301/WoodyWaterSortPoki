System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, tween, UIOpacity, clientEvent, Constants, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, ItemTubePlasterObj;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMagicOBIMInfo(extras) {
    _reporterNs.report("MagicOBIMInfo", "../newlevel/MagicLevelDataInfo", _context.meta, extras);
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
    }, function (_unresolved_2) {
      clientEvent = _unresolved_2.clientEvent;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3815anb6mFISbL3NU/9QHnp", "ItemTubePlasterObj", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemTubePlasterObj
       * DateTime = Mon Apr 28 2025 10:07:54 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemTubePlasterObj.ts
       * FileBasenameNoExtension = ItemTubePlasterObj
       * URL = db://assets/scripts/game/ItemTubePlasterObj.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemTubePlasterObj", ItemTubePlasterObj = (_dec = ccclass('ItemTubePlasterObj'), _dec2 = property(Node), _dec3 = property(UIOpacity), _dec(_class = (_class2 = (_temp = class ItemTubePlasterObj extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bg", _descriptor, this);

          _initializerDefineProperty(this, "bg_Opacity", _descriptor2, this);

          _defineProperty(this, "isPlasterDone", false);

          _defineProperty(this, "tweenBgOpacity", null);

          _defineProperty(this, "magicOBIMInfo", null);

          _defineProperty(this, "cbPlasterShowEfx", null);

          _defineProperty(this, "tubeX", -1);

          _defineProperty(this, "tubeY", -1);
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUBE_PLASER_DONE, this.setPlasterDone, this);
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUBE_PLASER_DONE, this.setPlasterDone, this);
        }

        setShowPlasterFinished() {
          if (this.tweenBgOpacity != null) this.tweenBgOpacity.stop();
          this.tweenBgOpacity = tween(this.bg_Opacity).to(0.2, {
            opacity: 0
          }, {
            easing: 'linear',
            onComplete: () => {
              this.node.active = false;
            }
          }).start();
        }

        setInit(_magicOBIMInfo, _tubeX, _tubeY, _cbPlasterShowEfx) {
          this.cbPlasterShowEfx = _cbPlasterShowEfx;
          this.tubeX = _tubeX;
          this.tubeY = _tubeY;
          this.isPlasterDone = false;
          this.magicOBIMInfo = _magicOBIMInfo;
          this.bg_Opacity.opacity = 255;
        }

        setPlasterDone(_tubeXDone, _tubeYDone) {
          if (_tubeYDone == this.tubeY && Math.abs(_tubeXDone - this.tubeX) == 1) {
            this.setShowPlasterFinished();

            if (this.cbPlasterShowEfx != null) {
              this.cbPlasterShowEfx();
              this.cbPlasterShowEfx = null;
            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bg_Opacity", [_dec3], {
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
//# sourceMappingURL=ItemTubePlasterObj.js.map