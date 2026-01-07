System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, ProgressBar, tween, UIOpacity, Vec3, localConfig, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, ComboGroup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      ProgressBar = _cc.ProgressBar;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      localConfig = _unresolved_2.localConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67ca1xeZfZOIIEr4wIxUEOq", "ComboGroup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ComboGroup
       * DateTime = Wed Oct 30 2024 16:59:38 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ComboGroup.ts
       * FileBasenameNoExtension = ComboGroup
       * URL = db://assets/scripts/game/ComboGroup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ComboGroup", ComboGroup = (_dec = ccclass('ComboGroup'), _dec2 = property(Label), _dec3 = property(UIOpacity), _dec4 = property(ProgressBar), _dec5 = property(UIOpacity), _dec(_class = (_class2 = (_temp = class ComboGroup extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "txtCombo", _descriptor, this);

          _initializerDefineProperty(this, "comboOpacity", _descriptor2, this);

          _initializerDefineProperty(this, "comboProgress", _descriptor3, this);

          _initializerDefineProperty(this, "groupOpacity", _descriptor4, this);

          _defineProperty(this, "comboValue", 0);

          _defineProperty(this, "tweenText", null);

          _defineProperty(this, "tweenTextOpacity", null);

          _defineProperty(this, "tweenProgress", null);

          _defineProperty(this, "tweenHideGroup", null);
        }

        onLoad() {
          let self = this;
          this.tweenText = tween(this.txtCombo.node).to(0.12, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'quadOut'
          }).to(0.06, {
            scale: new Vec3(1.5, 1.5, 1.5)
          }, {
            easing: 'quadOut'
          }).to(0.06, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'quadOut'
          }).to(0.06, {
            scale: new Vec3(1.25, 1.25, 1.25)
          }, {
            easing: 'quadOut'
          }).to(0.06, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'quadOut'
          }).union();
          this.tweenTextOpacity = tween(this.comboOpacity).to(0.1, {
            opacity: 255
          }, {
            easing: 'quadOut'
          });
          this.tweenProgress = tween(this.comboProgress).to((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.TIME_COMBO, {
            progress: 0
          }, {
            easing: 'linear',
            onComplete: () => {
              self.resetCombo();
            }
          });
          this.tweenHideGroup = tween(this.groupOpacity).to(0.3, {
            opacity: 0
          }, {
            easing: 'quadOut',
            onComplete: () => {
              self.hideComboGroup_Finished();
            }
          });
        }

        start() {// [3]
        }

        // update (deltaTime: number) {
        //     // [4]
        // }
        init() {
          this.comboValue = 0;
          this.groupOpacity.opacity = 0;
        }

        addCombo() {
          //console.log("ADD COMBO");
          this.comboValue++; //console.log(this.comboValue);

          if (this.comboValue >= 2) {
            this.groupOpacity.opacity = 255;
            this.showTextCombo();
          } else {
            this.groupOpacity.opacity = 0;

            if (this.tweenProgress != null) {
              this.tweenProgress.stop();
            }

            this.tweenProgress.start();
          }
        }

        showTextCombo() {
          if (this.tweenText != null) {
            this.tweenText.stop();
          }

          if (this.tweenTextOpacity != null) {
            this.tweenTextOpacity.stop();
          }

          if (this.tweenProgress != null) {
            this.tweenProgress.stop();
          }

          this.txtCombo.string = `x${this.comboValue}`;
          this.comboOpacity.opacity = 0;
          this.txtCombo.node.setScale(new Vec3(3, 3, 3));
          this.comboProgress.progress = 1;
          this.tweenText.start();
          this.tweenTextOpacity.start();
          this.tweenProgress.start();
        }

        resetCombo() {
          this.comboValue = 0;
          this.hideComboGroup();
        }

        hideComboGroup() {
          if (this.tweenHideGroup != null) {
            this.tweenHideGroup.stop();
          }

          this.tweenHideGroup.start();
          ;
        }

        hideComboGroup_Finished() {}

        getComboValue() {
          if (this.comboValue >= 2) return this.comboValue;
          return 1;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtCombo", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "comboOpacity", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "comboProgress", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "groupOpacity", [_dec5], {
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
//# sourceMappingURL=ComboGroup.js.map