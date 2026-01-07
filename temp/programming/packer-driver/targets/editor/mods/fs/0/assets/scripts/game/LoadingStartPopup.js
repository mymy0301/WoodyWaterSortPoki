System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, tween, UIOpacity, Vec3, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, LoadingStartPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cb0b1kn0U9PAbXRNuESG07t", "LoadingStartPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = LoadingStartPopup
       * DateTime = Thu Sep 12 2024 11:59:02 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = LoadingStartPopup.ts
       * FileBasenameNoExtension = LoadingStartPopup
       * URL = db://assets/scripts/game/LoadingStartPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("LoadingStartPopup", LoadingStartPopup = (_dec = ccclass('LoadingStartPopup'), _dec2 = property(UIOpacity), _dec3 = property(Node), _dec4 = property(UIOpacity), _dec(_class = (_class2 = (_temp = class LoadingStartPopup extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nodeOpacity", _descriptor, this);

          _defineProperty(this, "tweenOpacity", null);

          _initializerDefineProperty(this, "nodeIcon", _descriptor2, this);

          _initializerDefineProperty(this, "nodeIconOpacity", _descriptor3, this);

          _defineProperty(this, "tweenIcon", null);

          _defineProperty(this, "tweenIconOpacity", null);
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        showLoadingStart() {
          // console.log("showLoadingStart");
          if (this.tweenOpacity != null) {
            this.tweenOpacity.stop();
          }

          this.node.active = true;
          this.nodeOpacity.opacity = 0;
          this.tweenOpacity = tween(this.nodeOpacity).to(0.2, {
            opacity: 255
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();

          if (this.tweenIcon != null) {
            this.tweenIcon.stop();
          }

          this.nodeIcon.scale = new Vec3(0.5, 0.5, 0.5);
          this.nodeIcon.active = true;
          this.tweenIcon = tween(this.nodeIcon).to(0.2, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut',
            onComplete: () => {}
          }).start();

          if (this.tweenIconOpacity != null) {
            this.tweenIconOpacity.stop();
          }

          this.nodeIconOpacity.opacity = 0;
          this.tweenIconOpacity = tween(this.nodeIconOpacity).to(0.2, {
            opacity: 255
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
        }

        showLoadingStartNow() {
          // console.log("showLoadingStartNow");
          this.node.active = true;
          this.nodeOpacity.opacity = 255;

          if (this.tweenIcon != null) {
            this.tweenIcon.stop();
          }

          this.nodeIcon.scale = new Vec3(0.5, 0.5, 0.5);
          this.nodeIcon.active = true;
          this.tweenIcon = tween(this.nodeIcon).to(0.4, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut',
            onComplete: () => {}
          }).start();

          if (this.tweenIconOpacity != null) {
            this.tweenIconOpacity.stop();
          }

          this.nodeIconOpacity.opacity = 0;
          this.tweenIconOpacity = tween(this.nodeIconOpacity).to(0.2, {
            opacity: 255
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
        }

        hideLoadingStart() {
          // console.log("hideLoadingStart");
          this.scheduleOnce(() => {
            this.hideLoadingStart_scheduleOnce();
          }, 0.3);
        }

        hideLoadingStart_scheduleOnce() {
          if (this.tweenOpacity != null) {
            this.tweenOpacity.stop();
          }

          this.nodeOpacity.opacity = 255;
          this.tweenOpacity = tween(this.nodeOpacity).to(0.6, {
            opacity: 0
          }, {
            easing: 'expoIn',
            onComplete: () => {
              this.node.active = false;
            }
          }).start();

          if (this.tweenIconOpacity != null) {
            this.tweenIconOpacity.stop();
          }

          this.tweenIconOpacity = tween(this.nodeIconOpacity).to(0.6, {
            opacity: 0
          }, {
            easing: 'expoIn',
            onComplete: () => {}
          }).start();
        }

        hideLoadingStartNow() {
          // console.log("hideLoadingStartNow");
          this.nodeOpacity.opacity = 0;
          this.node.active = false;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeOpacity", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeIcon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeIconOpacity", [_dec4], {
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
//# sourceMappingURL=LoadingStartPopup.js.map