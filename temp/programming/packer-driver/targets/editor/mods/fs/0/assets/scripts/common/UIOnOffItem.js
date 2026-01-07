System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, CCInteger, Component, Node, Sprite, SpriteFrame, tween, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, UIOnOffItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8ff63m/sspBqJgqsEbp1Hj1", "UIOnOffItem", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = UIOnOffItem
       * DateTime = Wed Feb 09 2022 15:57:32 GMT+0700 (Indochina Time)
       * Author = tuzkekizer
       * FileBasename = UIOnOffItem.ts
       * FileBasenameNoExtension = UIOnOffItem
       * URL = db://assets/scripts/common/UIOnOffItem.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("UIOnOffItem", UIOnOffItem = (_dec = ccclass('UIOnOffItem'), _dec2 = property(Node), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(CCInteger), _dec(_class = (_class2 = (_temp = class UIOnOffItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "iconSwtich", _descriptor, this);

          _initializerDefineProperty(this, "bg", _descriptor2, this);

          _initializerDefineProperty(this, "bg_ON", _descriptor3, this);

          _initializerDefineProperty(this, "bg_OFF", _descriptor4, this);

          _initializerDefineProperty(this, "posX", _descriptor5, this);
        }

        setItemON() {
          this.bg.spriteFrame = this.bg_ON;
          this.iconSwtich.setPosition(new Vec3(this.posX, -9, 0));
        }

        switchItemON() {
          this.bg.spriteFrame = this.bg_ON;
          this.iconSwtich.setPosition(new Vec3(-this.posX, -9, 0));
          tween(this.iconSwtich).to(0.2, {
            position: new Vec3(this.posX, -9, 0)
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
        }

        setItemOFF() {
          this.bg.spriteFrame = this.bg_OFF;
          this.iconSwtich.setPosition(new Vec3(-this.posX, -9, 0));
        }

        switchItemOFF() {
          this.bg.spriteFrame = this.bg_OFF;
          this.iconSwtich.setPosition(new Vec3(this.posX, -9, 0));
          tween(this.iconSwtich).to(0.2, {
            position: new Vec3(-this.posX, -9, 0)
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "iconSwtich", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bg_ON", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bg_OFF", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "posX", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
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
//# sourceMappingURL=UIOnOffItem.js.map