System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Sprite, UIOpacity, tween, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, LoadingGroup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      UIOpacity = _cc.UIOpacity;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "958bcGqckhOLItUxLB8YEdZ", "loadingGroup", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoadingGroup", LoadingGroup = (_dec = ccclass('LoadingGroup'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec(_class = (_class2 = (_temp = class LoadingGroup extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bgLoading", _descriptor, this);

          _initializerDefineProperty(this, "iconLoading", _descriptor2, this);

          _defineProperty(this, "tweenHideLoading", void 0);

          _defineProperty(this, "tweenIconLoading", void 0);

          _defineProperty(this, "tweenIconHideLoading", void 0);

          _defineProperty(this, "tweenHideLoading2", void 0);

          _defineProperty(this, "tweenIconHideLoading2", void 0);
        }

        onLoad() {
          this.tweenIconLoading = tween(this.iconLoading.node).by(1, {
            eulerAngles: new Vec3(0, 0, 360)
          }, {
            easing: 'linear'
          }).repeatForever();
          this.tweenHideLoading = tween(this.bgLoading.getComponent(UIOpacity)).delay(1).to(1, {
            opacity: 200
          }, {
            easing: 'quadOut'
          });
          this.tweenIconHideLoading = tween(this.iconLoading.getComponent(UIOpacity)).delay(1).to(0.8, {
            opacity: 100
          }, {
            easing: 'quadOut'
          });
          this.tweenHideLoading2 = tween(this.bgLoading.getComponent(UIOpacity)).delay(0.5).to(0.5, {
            opacity: 200
          }, {
            easing: 'quadOut'
          });
          this.tweenIconHideLoading2 = tween(this.iconLoading.getComponent(UIOpacity)).delay(0.5).to(0.4, {
            opacity: 100
          }, {
            easing: 'quadOut'
          });
        }

        start() {// [3]
        }

        onEnable() {
          this.showIconLoading();
        } // update (deltaTime: number) {
        //     // [4]
        // }


        showLoadingNow() {
          this.node.active = true;
          this.bgLoading.getComponent(UIOpacity).opacity = 255;
        }

        hideLoading() {
          this.node.active = true;
          this.bgLoading.getComponent(UIOpacity).opacity = 255;
          this.iconLoading.getComponent(UIOpacity).opacity = 255;
          this.tweenIconHideLoading.start();
          this.tweenHideLoading.call(() => {
            //////console.log('All tweens finished.');
            this.node.active = false;
          }).start();
        }

        hideLoading2() {
          this.node.active = true;
          this.bgLoading.getComponent(UIOpacity).opacity = 255;
          this.iconLoading.getComponent(UIOpacity).opacity = 255;
          this.tweenIconHideLoading2.start();
          this.tweenHideLoading2.call(() => {
            //////console.log('All tweens finished.');
            this.node.active = false;
          }).start();
        }

        showIconLoading() {
          // tween(this.iconLoading.node).stop();
          this.tweenIconLoading.stop();
          this.tweenIconLoading.start();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgLoading", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconLoading", [_dec3], {
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
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=loadingGroup.js.map