System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Component, Label, Node, tween, Vec3, CountDownTimeHeart, clientEvent, Constants, localConfig, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, HeartGroup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCountDownTimeHeart(extras) {
    _reporterNs.report("CountDownTimeHeart", "../common/CountDownTimeHeart", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      CountDownTimeHeart = _unresolved_2.CountDownTimeHeart;
    }, function (_unresolved_3) {
      clientEvent = _unresolved_3.clientEvent;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.Constants;
    }, function (_unresolved_5) {
      localConfig = _unresolved_5.localConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bf71dQ0D55ANaWGy0Zfyikh", "HeartGroup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = HeartGroup
       * DateTime = Wed May 07 2025 14:39:36 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = HeartGroup.ts
       * FileBasenameNoExtension = HeartGroup
       * URL = db://assets/scripts/game/HeartGroup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("HeartGroup", HeartGroup = (_dec = ccclass('HeartGroup'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(_crd && CountDownTimeHeart === void 0 ? (_reportPossibleCrUseOfCountDownTimeHeart({
        error: Error()
      }), CountDownTimeHeart) : CountDownTimeHeart), _dec7 = property(Node), _dec8 = property(Button), _dec(_class = (_class2 = (_temp = class HeartGroup extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nodeHeart", _descriptor, this);

          _initializerDefineProperty(this, "txtCountHeart", _descriptor2, this);

          _initializerDefineProperty(this, "nodeHeartUnlimited", _descriptor3, this);

          _initializerDefineProperty(this, "nodeFull", _descriptor4, this);

          _initializerDefineProperty(this, "countDownTimeHeart", _descriptor5, this);

          _initializerDefineProperty(this, "groupHeart", _descriptor6, this);

          _initializerDefineProperty(this, "btnAdd", _descriptor7, this);

          _defineProperty(this, "tweenUpdate", null);
        }

        onLoad() {
          this.tweenUpdate = tween(this.groupHeart).to(0.1, {
            scale: new Vec3(1.1, 1.1, 1.1)
          }, {
            easing: 'linear'
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'linear'
          }).union().repeat(3);
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).HEART_UPDATE, this.heartUpdate, this);

          if (this.btnAdd) {
            this.btnAdd.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).CLICK, this.touchAddHeart, this);
          }

          this.initInfo();
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).HEART_UPDATE, this.heartUpdate, this);

          if (this.btnAdd) {
            this.btnAdd.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).CLICK, this.touchAddHeart, this);
          }
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        initInfo() {
          // console.log(localConfig.instance.currHeartUnlimited_CountTime);
          // console.log(localConfig.instance.currHeart,localConfig.instance.currHeart_CountTime);
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currHeartUnlimited_CountTime > 0) {
            this.nodeHeart.active = false;
            this.nodeHeartUnlimited.active = true;
            this.nodeFull.active = false;
            this.countDownTimeHeart.node.active = true;
            this.countDownTimeHeart.initCountDownTime((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currHeartUnlimited_CountTime, () => {});

            if (this.btnAdd) {
              this.btnAdd.node.active = false;
            }
          } else {
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currHeart >= (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.HEART_MAX_COUNT) {
              this.nodeHeart.active = true;
              this.nodeHeartUnlimited.active = false;
              this.nodeFull.active = true;
              this.txtCountHeart.string = "" + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currHeart;
              this.countDownTimeHeart.node.active = false;

              if (this.btnAdd) {
                this.btnAdd.node.active = false;
              }
            } else {
              this.nodeHeart.active = true;
              this.nodeHeartUnlimited.active = false;
              this.nodeFull.active = false;
              this.txtCountHeart.string = "" + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currHeart;
              this.countDownTimeHeart.node.active = true;
              this.countDownTimeHeart.initCountDownTime((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currHeart_CountTime, () => {});

              if (this.btnAdd) {
                this.btnAdd.node.active = true;
              }
            }
          }
        }

        heartUpdate() {
          this.initInfo();
          this.groupHeart.setScale(new Vec3(1, 1, 1));
          this.tweenUpdate.stop();
          this.tweenUpdate.start().call(() => {
            this.groupHeart.setScale(new Vec3(1, 1, 1));
          });
        }

        touchAddHeart() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_MORELIVES_POPUP, () => {});
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeHeart", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtCountHeart", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeHeartUnlimited", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeFull", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "countDownTimeHeart", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "groupHeart", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btnAdd", [_dec8], {
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
//# sourceMappingURL=HeartGroup.js.map