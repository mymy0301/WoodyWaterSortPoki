System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Sprite, tween, UIOpacity, Vec3, localConfig, clientEvent, Constants, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, ItemTubeOBIMObj;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMagicOBIMInfo(extras) {
    _reporterNs.report("MagicOBIMInfo", "../newlevel/MagicLevelDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      localConfig = _unresolved_2.localConfig;
    }, function (_unresolved_3) {
      clientEvent = _unresolved_3.clientEvent;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cb99ejjVW5OLoR8XqlHWs/g", "ItemTubeOBIMObj", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemTubeOBIMObj
       * DateTime = Wed Apr 23 2025 09:55:04 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemTubeOBIMObj.ts
       * FileBasenameNoExtension = ItemTubeOBIMObj
       * URL = db://assets/scripts/game/ItemTubeOBIMObj.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemTubeOBIMObj", ItemTubeOBIMObj = (_dec = ccclass('ItemTubeOBIMObj'), _dec2 = property(Node), _dec3 = property(UIOpacity), _dec4 = property(Node), _dec5 = property(UIOpacity), _dec6 = property(Node), _dec7 = property(Sprite), _dec(_class = (_class2 = (_temp = class ItemTubeOBIMObj extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bg", _descriptor, this);

          _initializerDefineProperty(this, "bg_Opacity", _descriptor2, this);

          _initializerDefineProperty(this, "obj", _descriptor3, this);

          _initializerDefineProperty(this, "obj_Opacity", _descriptor4, this);

          _initializerDefineProperty(this, "nodeFinished", _descriptor5, this);

          _initializerDefineProperty(this, "iconColor", _descriptor6, this);

          _defineProperty(this, "isOBIMDone", false);

          _defineProperty(this, "magicOBIMInfo", null);

          _defineProperty(this, "cbOBIMDone", null);

          _defineProperty(this, "cbOBIMShowEfx", null);

          _defineProperty(this, "tweenTickScale", null);

          _defineProperty(this, "tweenObjScale", null);

          _defineProperty(this, "tweenObjOpacity", null);

          _defineProperty(this, "tweenBgMove", null);

          _defineProperty(this, "tweenBgOpacity", null);
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUBE_OBIM_DONE, this.setOBIMDone, this);
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUBE_OBIM_DONE, this.setOBIMDone, this);
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        setInit(_magicOBIMInfo, _cbOBIMDone, _cbShowEfx) {
          this.cbOBIMDone = _cbOBIMDone;
          this.cbOBIMShowEfx = _cbShowEfx;
          this.isOBIMDone = false;
          this.magicOBIMInfo = _magicOBIMInfo;
          this.iconColor.color = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getMagicColor_byID(this.magicOBIMInfo.Obj.CI);
          this.bg.setPosition(new Vec3(0, 0, 0));
          this.bg_Opacity.opacity = 255;
          this.obj.active = true;
          this.obj_Opacity.opacity = 255;
          this.nodeFinished.active = false;
        }

        setOBIMDone(_indexColor) {
          // console.log("setOBIMDone",_indexColor);
          if (this.isOBIMDone) return;

          if (this.magicOBIMInfo.Obj.CI == _indexColor) {
            this.isOBIMDone = true;
            this.setShowOBIMObj_Step1();
          }
        }

        setShowOBIMObj_Step1() {
          this.nodeFinished.active = true;
          this.nodeFinished.scale = new Vec3(2.5, 2.5, 2.5);
          if (this.tweenTickScale != null) this.tweenTickScale.stop();
          this.tweenTickScale = tween(this.nodeFinished).to(0.4, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut',
            onComplete: () => {
              this.setShowOBIMObj_Step2();
            }
          }).start();
        }

        setShowOBIMObj_Step2() {
          if (this.cbOBIMShowEfx != null) {
            this.cbOBIMShowEfx();
            this.cbOBIMShowEfx = null;
          }

          if (this.tweenObjScale != null) this.tweenObjScale.stop();
          if (this.tweenObjOpacity != null) this.tweenObjOpacity.stop();
          this.tweenObjScale = tween(this.obj).delay(0.1).to(0.5, {
            scale: new Vec3(0, 0, 0)
          }, {
            easing: 'backIn',
            onComplete: () => {}
          }).start();
          this.tweenObjOpacity = tween(this.obj_Opacity).delay(0.2).to(0.2, {
            opacity: 0
          }, {
            easing: 'linear',
            onComplete: () => {}
          }).start();
          if (this.tweenBgMove != null) this.tweenBgMove.stop();
          if (this.tweenBgOpacity != null) this.tweenBgOpacity.stop();
          this.tweenBgMove = tween(this.bg).delay(0.5).to(0.4, {
            position: new Vec3(0, 600, 0)
          }, {
            easing: 'quadOut',
            onComplete: () => {
              this.setShowOBIMObj_Step3();
            }
          }).start();
          this.tweenBgOpacity = tween(this.bg_Opacity).delay(0.5).to(0.3, {
            opacity: 0
          }, {
            easing: 'linear',
            onComplete: () => {}
          }).start();
        }

        setShowOBIMObj_Step3() {
          this.node.active = false;

          if (this.cbOBIMDone != null) {
            this.cbOBIMDone();
            this.cbOBIMDone = null;
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bg_Opacity", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "obj", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "obj_Opacity", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeFinished", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "iconColor", [_dec7], {
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
//# sourceMappingURL=ItemTubeOBIMObj.js.map