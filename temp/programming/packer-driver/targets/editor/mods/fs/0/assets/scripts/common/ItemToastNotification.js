System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Label, UIOpacity, Vec3, tween, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, ItemToastNotification;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "79154hEDO5BeIPSY9cLPFvW", "ItemToastNotification", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemToastNotification
       * DateTime = Thu Feb 10 2022 10:07:15 GMT+0700 (Indochina Time)
       * Author = tuzkekizer
       * FileBasename = ItemToastNotification.ts
       * FileBasenameNoExtension = ItemToastNotification
       * URL = db://assets/scripts/common/ItemToastNotification.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemToastNotification", ItemToastNotification = (_dec = ccclass('ItemToastNotification'), _dec2 = property(Label), _dec3 = property(UIOpacity), _dec(_class = (_class2 = (_temp = class ItemToastNotification extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "txtContent", _descriptor, this);

          _initializerDefineProperty(this, "opactityNode", _descriptor2, this);
        }

        showItemToastNotification(_content) {
          this.txtContent.string = `${_content}`;
          this.node.setPosition(new Vec3(0, 280, 0));
          this.opactityNode.opacity = 255;
          this.moveToFinished();
        }

        moveToFinished() {
          tween(this.node).delay(0.1).to(0.8, {
            position: new Vec3(0, 550, 0)
          }, {
            easing: 'quadIn',
            onComplete: () => {
              this.node.destroy();
            }
          }).start();
          tween(this.opactityNode).delay(0.1).to(1, {
            opacity: 0
          }, {
            easing: 'quadIn',
            onComplete: () => {}
          }).start();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtContent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "opactityNode", [_dec3], {
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
//# sourceMappingURL=ItemToastNotification.js.map