System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, tween, Vec3, CCFloat, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, ItemSpriteRotate;

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
      CCFloat = _cc.CCFloat;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6eb4dxmN+ZDM7p+F8G3h1sY", "ItemSpriteRotate", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemSpriteRotate
       * DateTime = Tue Feb 15 2022 11:23:37 GMT+0700 (Indochina Time)
       * Author = tuzkekizer
       * FileBasename = ItemSpriteRotate.ts
       * FileBasenameNoExtension = ItemSpriteRotate
       * URL = db://assets/scripts/scene/play/ItemSpriteRotate.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemSpriteRotate", ItemSpriteRotate = (_dec = ccclass('ItemSpriteRotate'), _dec2 = property(CCFloat), _dec(_class = (_class2 = (_temp = class ItemSpriteRotate extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "timeRotate", _descriptor, this);
        }

        start() {
          // [3]
          tween(this.node).by(this.timeRotate, {
            eulerAngles: new Vec3(0, 0, -90)
          }, {
            easing: 'linear',
            onComplete: () => {}
          }).repeatForever().start();
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "timeRotate", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
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
//# sourceMappingURL=ItemSpriteRotate.js.map