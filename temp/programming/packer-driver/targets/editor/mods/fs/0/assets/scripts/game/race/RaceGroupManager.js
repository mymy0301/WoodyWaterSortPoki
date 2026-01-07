System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Component, Node, tween, UIOpacity, Vec3, ItemPlayerRaceProgress, localConfig, Constants, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, RaceGroupManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItemPlayerRaceProgress(extras) {
    _reporterNs.report("ItemPlayerRaceProgress", "./ItemPlayerRaceProgress", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../framework/constants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      Node = _cc.Node;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ItemPlayerRaceProgress = _unresolved_2.ItemPlayerRaceProgress;
    }, function (_unresolved_3) {
      localConfig = _unresolved_3.localConfig;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "692cfzVY+ZPt62gyNrCGkJE", "RaceGroupManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = RaceGroupManager
       * DateTime = Wed Nov 13 2024 11:51:18 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = RaceGroupManager.ts
       * FileBasenameNoExtension = RaceGroupManager
       * URL = db://assets/scripts/game/race/RaceGroupManager.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("RaceGroupManager", RaceGroupManager = (_dec = ccclass('RaceGroupManager'), _dec2 = property(Node), _dec3 = property(Button), _dec4 = property(Node), _dec5 = property(_crd && ItemPlayerRaceProgress === void 0 ? (_reportPossibleCrUseOfItemPlayerRaceProgress({
        error: Error()
      }), ItemPlayerRaceProgress) : ItemPlayerRaceProgress), _dec6 = property(_crd && ItemPlayerRaceProgress === void 0 ? (_reportPossibleCrUseOfItemPlayerRaceProgress({
        error: Error()
      }), ItemPlayerRaceProgress) : ItemPlayerRaceProgress), _dec7 = property(UIOpacity), _dec(_class = (_class2 = (_temp = class RaceGroupManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "groupJoin", _descriptor, this);

          _initializerDefineProperty(this, "btnJoin", _descriptor2, this);

          _initializerDefineProperty(this, "groupActive", _descriptor3, this);

          _initializerDefineProperty(this, "myPlayerProgress", _descriptor4, this);

          _initializerDefineProperty(this, "arrPlayerOpponentProgress", _descriptor5, this);

          _initializerDefineProperty(this, "groupAllOpacity", _descriptor6, this);

          _defineProperty(this, "tweenGroupAll", null);

          _defineProperty(this, "tweenGroupAllOpacity", null);
        }

        onEnable() {
          this.btnJoin.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchJoin, this);
          this.showGroup();
          this.showInfoGroup();
        }

        onDisable() {
          this.resetGroup();
          this.btnJoin.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchJoin, this);
        }

        resetGroup() {
          this.groupAllOpacity.opacity = 0;
          this.node.setPosition(new Vec3(0, -650, 0));

          if (this.tweenGroupAll != null) {
            this.tweenGroupAll.stop();
          }

          if (this.tweenGroupAllOpacity != null) {
            this.tweenGroupAllOpacity.stop();
          }
        }

        showGroup() {
          this.node.active = true;
          this.tweenGroupAll = tween(this.node).to(0.5, {
            position: new Vec3(0, -550, 0)
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
          this.tweenGroupAllOpacity = tween(this.groupAllOpacity).to(0.5, {
            opacity: 255
          }, {
            easing: 'linear',
            onComplete: () => {}
          }).start();
        }

        showInfoGroup() {
          // console.log("showInfoGroup",localConfig.instance.raceActive,localConfig.instance.arrPlayerRaceDataInfos);
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.raceActive == 1) {
            this.groupJoin.active = false;
            this.groupActive.active = true;

            if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.isInitRaceGroup) {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.isInitRaceGroup = true;

              for (let i = 0; i < this.arrPlayerOpponentProgress.length; i++) {
                this.arrPlayerOpponentProgress[i].initPlayerOpponent((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.arrPlayerRaceDataInfos[i]);
              }

              this.myPlayerProgress.initMyPlayer();
            }
          } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.raceActive == 0) {
            this.groupJoin.active = true;
            this.groupActive.active = false;
          }
        }

        touchJoin() {
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.setStartRace();
          this.showInfoGroup();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "groupJoin", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnJoin", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "groupActive", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "myPlayerProgress", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "arrPlayerOpponentProgress", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "groupAllOpacity", [_dec7], {
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
//# sourceMappingURL=RaceGroupManager.js.map