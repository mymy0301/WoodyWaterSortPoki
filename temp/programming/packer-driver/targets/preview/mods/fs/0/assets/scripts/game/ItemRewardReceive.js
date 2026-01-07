System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, tween, Vec3, Utils, SHOP_ITEM_TYPE, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, ItemRewardReceive;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../core/utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHOP_ITEM_TYPE(extras) {
    _reporterNs.report("SHOP_ITEM_TYPE", "../framework/constants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Utils = _unresolved_2.default;
    }, function (_unresolved_3) {
      SHOP_ITEM_TYPE = _unresolved_3.SHOP_ITEM_TYPE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d4feduN/3FGcKVBhM8q8B0e", "ItemRewardReceive", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemRewardReceive
       * DateTime = Tue Oct 08 2024 11:58:55 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemRewardReceive.ts
       * FileBasenameNoExtension = ItemRewardReceive
       * URL = db://assets/scripts/game/ItemRewardReceive.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemRewardReceive", ItemRewardReceive = (_dec = ccclass('ItemRewardReceive'), _dec2 = property(Label), _dec(_class = (_class2 = (_temp = class ItemRewardReceive extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "tweenShow", null);

          _defineProperty(this, "tweenHide", null);

          _initializerDefineProperty(this, "txtValue", _descriptor, this);
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        showItem(shopItemType, value, timeDelay) {
          if (timeDelay === void 0) {
            timeDelay = 0;
          }

          if (shopItemType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).HEART_UNLIMITED) {
            this.txtValue.string = "" + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).getTimeStrByS_5(value);
          } else {
            this.txtValue.string = "x" + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).formatNumber(value);
          }

          this.reset();
          this.tweenShow = tween(this.node).delay(timeDelay).to(0.3, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut',
            onComplete: () => {}
          }).start();
        }

        hideItem() {
          if (this.tweenHide) {
            this.tweenHide.stop();
          }

          this.node.setScale(new Vec3(1, 1, 1));
          this.tweenHide = tween(this.node).to(0.3, {
            scale: new Vec3(0, 0, 0)
          }, {
            easing: 'quadOut',
            onComplete: () => {
              this.node.active = false;
            }
          }).start();
        }

        reset() {
          if (this.tweenShow) {
            this.tweenShow.stop();
          }

          this.node.setScale(new Vec3(0, 0, 0));
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtValue", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
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
//# sourceMappingURL=ItemRewardReceive.js.map