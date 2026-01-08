System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, tween, Vec3, Button, UIOpacity, CCBoolean, AudioManager2, Constants, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, BasePopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "../framework/audioManager2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
      Button = _cc.Button;
      UIOpacity = _cc.UIOpacity;
      CCBoolean = _cc.CCBoolean;
    }, function (_unresolved_2) {
      AudioManager2 = _unresolved_2.AudioManager2;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3de9iFF65OnrK2jG/Jq879", "basePopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BasePopup", BasePopup = (_dec = ccclass('BasePopup'), _dec2 = property(CCBoolean), _dec3 = property(UIOpacity), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(UIOpacity), _dec(_class = (_class2 = (_temp = class BasePopup extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "isTweenPopup", _descriptor, this);

          _initializerDefineProperty(this, "bgOpacity", _descriptor2, this);

          _initializerDefineProperty(this, "popup", _descriptor3, this);

          _initializerDefineProperty(this, "lockGroup", _descriptor4, this);

          _initializerDefineProperty(this, "btnClose", _descriptor5, this);

          _initializerDefineProperty(this, "btnClose2", _descriptor6, this);

          _initializerDefineProperty(this, "popup_UIOpacity", _descriptor7, this);

          _defineProperty(this, "tweenScalePopup", null);

          _defineProperty(this, "tweenOpacityPopup", null);

          _defineProperty(this, "tweenOpacityBG", null);
        }

        onLoad() {
          if (this.popup.getComponent(UIOpacity) == null) {
            this.popup.addComponent(UIOpacity);
          }

          if (this.popup_UIOpacity == null) {
            this.popup_UIOpacity = this.popup.getComponent(UIOpacity);
          }
        }

        start() {// [3].
        }

        onEnable() {
          if (this.btnClose != null) {
            this.btnClose.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).CLICK, this.touchClose, this);
          }

          if (this.btnClose2 != null) {
            this.btnClose2.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).CLICK, this.touchClose, this);
          }
        }

        onDisable() {
          if (this.btnClose != null) {
            this.btnClose.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).CLICK, this.touchClose, this);
          }

          if (this.btnClose2 != null) {
            this.btnClose2.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).CLICK, this.touchClose, this);
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }


        resetPopup() {
          if (this.popup.getComponent(UIOpacity) == null) {
            this.popup.addComponent(UIOpacity);
          }

          if (this.popup_UIOpacity == null) {
            this.popup_UIOpacity = this.popup.getComponent(UIOpacity);
          }

          if (this.isTweenPopup) {
            this.popup_UIOpacity.opacity = 150;
            this.popup.setScale(new Vec3(0.5, 0.5, 0.5));

            if (this.bgOpacity) {
              this.bgOpacity.opacity = 150;
            }
          }

          this.lockGroup.active = true;
        }

        showPopup() {
          if (this.popup.getComponent(UIOpacity) == null) {
            this.popup.addComponent(UIOpacity);
          }

          if (this.popup_UIOpacity == null) {
            this.popup_UIOpacity = this.popup.getComponent(UIOpacity);
          }

          if (this.tweenScalePopup) {
            this.tweenScalePopup.stop();
          }

          if (this.tweenOpacityPopup) {
            this.tweenOpacityPopup.stop();
          }

          if (this.tweenOpacityBG) {
            this.tweenOpacityBG.stop();
          }

          if (this.isTweenPopup) {
            this.popup_UIOpacity.opacity = 150;
            this.popup.setScale(new Vec3(0.5, 0.5, 0.5));

            if (this.bgOpacity) {
              this.bgOpacity.opacity = 150;
            }
          } else {
            this.popup_UIOpacity.opacity = 255;
            this.popup.setScale(new Vec3(1, 1, 1));

            if (this.bgOpacity) {
              this.bgOpacity.opacity = 255;
            }
          }

          this.lockGroup.active = true;
          this.node.active = true;
          this.showPoup_ShowView();
        }

        showPopup_Now() {
          if (this.popup_UIOpacity == null) {
            this.popup_UIOpacity = this.popup.getComponent(UIOpacity);
          }

          this.popup_UIOpacity.opacity = 255;
          this.popup.setScale(new Vec3(1, 1, 1));

          if (this.bgOpacity) {
            this.bgOpacity.opacity = 255;
          }

          this.lockGroup.active = false;
          this.node.active = true;
        }

        showPoup_ShowView() {
          if (this.isTweenPopup) {
            (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager2) : AudioManager2).instance.playPopupOpen();
            this.popup_UIOpacity.opacity = 0;
            this.popup.setScale(new Vec3(0.5, 0.5, 0.5));
            this.tweenScalePopup = tween(this.popup).to(0.4, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'backOut',
              onComplete: () => {
                this.showPoup_ShowView_Finished();
              }
            }).start();
            this.tweenOpacityPopup = tween(this.popup_UIOpacity).to(0.4, {
              opacity: 255
            }, {
              easing: 'quadOut',
              onComplete: () => {}
            }).start();

            if (this.bgOpacity) {
              this.tweenOpacityBG = tween(this.bgOpacity).to(0.2, {
                opacity: 255
              }, {
                easing: 'quadOut',
                onComplete: () => {}
              }).start();
            }
          } else {
            this.showPoup_ShowView_Finished();
          }
        }

        showPoup_ShowView_Finished() {
          // this.popup.setScale(new Vec3(1,1,1));
          if (this.popup.getComponent(UIOpacity) == null) {
            this.popup.addComponent(UIOpacity);
          }

          if (this.popup_UIOpacity == null) {
            this.popup_UIOpacity = this.popup.getComponent(UIOpacity);
          } // this.popup_UIOpacity.opacity = 255;


          this.node.active = true;
          this.lockGroup.active = false; // console.log("showPoup_ShowView_Finished");
        }

        hidePopup() {
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playPopupClose();
          this.lockGroup.active = true;

          if (this.isTweenPopup) {
            this.tweenScalePopup = tween(this.popup).to(0.3, {
              scale: new Vec3(0.5, 0.5, 0.5)
            }, {
              easing: 'quadOut',
              onComplete: () => {
                this.hidePopup_Finished();
              }
            }).start();
            this.tweenOpacityPopup = tween(this.popup_UIOpacity).to(0.2, {
              opacity: 0
            }, {
              easing: 'quadOut',
              onComplete: () => {}
            }).start();

            if (this.bgOpacity) {
              this.tweenOpacityBG = tween(this.bgOpacity).to(0.3, {
                opacity: 0
              }, {
                easing: 'quadOut',
                onComplete: () => {}
              }).start();
            }
          } else {
            this.hidePopup_Finished();
          }
        }

        hidePopup_Finished() {
          this.lockGroup.active = false;
          this.node.active = false;
        }

        touchClose() {
          this.hidePopup();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isTweenPopup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bgOpacity", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "popup", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lockGroup", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnClose2", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "popup_UIOpacity", [_dec8], {
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
//# sourceMappingURL=basePopup.js.map