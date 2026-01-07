System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, tween, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, ItemSpriteMove;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "462d1JOqkxF0IycO0HETisA", "ItemSpriteMove", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ItemSpriteMove", ItemSpriteMove = (_dec = ccclass('ItemSpriteMove'), _dec2 = property(Vec3), _dec3 = property(Vec3), _dec(_class = (_class2 = (_temp = class ItemSpriteMove extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "tweenMove", null);

          _initializerDefineProperty(this, "posStart", _descriptor, this);

          _initializerDefineProperty(this, "posEnd", _descriptor2, this);
        }

        start() {
          if (this.tweenMove) {
            this.tweenMove.stop();
          }

          this.node.setPosition(this.posStart);
          this.tweenMove = tween(this.node).to(0.5, {
            position: this.posEnd
          }, {
            easing: 'linear'
          }).to(0.5, {
            position: this.posStart
          }, {
            easing: 'linear'
          }).union().repeatForever();
          this.tweenMove.start();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "posStart", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(0, 0, 0);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "posEnd", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(0, 0, 0);
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ItemSpriteMove.js.map