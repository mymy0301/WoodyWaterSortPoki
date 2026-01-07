System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, CCFloat, Component, macro, Sprite, SpriteFrame, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, ItemChangeSprite;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
      macro = _cc.macro;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "836132fdWtKNpVYS6I00CaD", "ItemChangeSprite", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemChangeSprite
       * DateTime = Wed Dec 04 2024 06:13:53 GMT+0700 (Indochina Time)
       * Author = MyTom2k17
       * FileBasename = ItemChangeSprite.ts
       * FileBasenameNoExtension = ItemChangeSprite
       * URL = db://assets/scripts/common/ItemChangeSprite.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemChangeSprite", ItemChangeSprite = (_dec = ccclass('ItemChangeSprite'), _dec2 = property(Sprite), _dec3 = property(SpriteFrame), _dec4 = property(CCFloat), _dec(_class = (_class2 = (_temp = class ItemChangeSprite extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "icon", _descriptor, this);

          _initializerDefineProperty(this, "arrSpriteFrame", _descriptor2, this);

          _initializerDefineProperty(this, "timeChangeAuto", _descriptor3, this);

          _defineProperty(this, "indexChangeSpriteAuto", 0);
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        setChangeSprite(_index) {
          this.icon.spriteFrame = this.arrSpriteFrame[_index % this.arrSpriteFrame.length];
        }

        setChangeAuto() {
          this.schedule(this.setChangeSpriteAuto, this.timeChangeAuto, macro.REPEAT_FOREVER);
        }

        setChangeSpriteAuto() {
          this.indexChangeSpriteAuto++;

          if (this.indexChangeSpriteAuto >= this.arrSpriteFrame.length) {
            this.indexChangeSpriteAuto = 0;
          }

          this.setChangeSprite(this.indexChangeSpriteAuto);
        }

        stopChangeAuto() {
          this.unschedule(this.setChangeSpriteAuto);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "arrSpriteFrame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "timeChangeAuto", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
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
//# sourceMappingURL=ItemChangeSprite.js.map