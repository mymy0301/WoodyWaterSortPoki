System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Node, tween, UIOpacity, Vec3, Utils, SHOP_ITEM_TYPE, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, ItemRewardPass;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../core/utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHOP_ITEM_TYPE(extras) {
    _reporterNs.report("SHOP_ITEM_TYPE", "../../framework/constants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Utils = _unresolved_2.default;
    }, function (_unresolved_3) {
      SHOP_ITEM_TYPE = _unresolved_3.SHOP_ITEM_TYPE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fd1bes1H6BKupDS4XZenKGA", "ItemRewardPass", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemRewardPass
       * DateTime = Thu Nov 14 2024 11:58:43 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemRewardPass.ts
       * FileBasenameNoExtension = ItemRewardPass
       * URL = db://assets/scripts/game/masterpass/ItemRewardPass.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemRewardPass", ItemRewardPass = (_dec = ccclass('ItemRewardPass'), _dec2 = property(UIOpacity), _dec3 = property(Label), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = class ItemRewardPass extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nodeOpacity", _descriptor, this);

          _initializerDefineProperty(this, "txtValue", _descriptor2, this);

          _initializerDefineProperty(this, "nodeLight", _descriptor3, this);

          _defineProperty(this, "tweenShow", null);

          _defineProperty(this, "tweenShowOpcity", null);
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        initRewardPass(itemShopType, isPass, value) {
          if (itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
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

          if (isPass) {
            this.nodeLight.active = true;
          } else {
            this.nodeLight.active = false;
          }
        }

        initRewardPassRecive(value) {
          this.txtValue.string = "x" + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).formatNumber(value);
          this.nodeLight.active = false;
          this.node.setPosition(new Vec3(0, 0, 0));
          this.node.setScale(new Vec3(0, 0, 0));
          this.nodeOpacity.opacity = 0;

          if (this.tweenShow != null) {
            this.tweenShow.stop();
          }

          if (this.tweenShowOpcity != null) {
            this.tweenShowOpcity.stop();
          }

          this.tweenShow = tween(this.node).to(0.5, {
            scale: new Vec3(0.6, 0.6, 0.6)
          }, {
            easing: 'bounceOut',
            onComplete: () => {
              this.setShowRewardPassReceive_Step2();
            }
          }).start();
          this.tweenShowOpcity = tween(this.nodeOpacity).to(0.4, {
            opacity: 255
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
        }

        setShowRewardPassReceive_Step2() {
          this.tweenShow = tween(this.node).delay(0.1).to(0.6, {
            position: new Vec3(0, 75, 0)
          }, {
            easing: 'smooth',
            onComplete: () => {
              this.setShowRewardPassReceive_Step3();
            }
          }).start();
          this.tweenShowOpcity = tween(this.nodeOpacity).delay(0.1).to(0.6, {
            opacity: 0
          }, {
            easing: 'smooth',
            onComplete: () => {}
          }).start();
        }

        setShowRewardPassReceive_Step3() {
          this.node.destroy();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeOpacity", [_dec2], {
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
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeLight", [_dec4], {
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
//# sourceMappingURL=ItemRewardPass.js.map