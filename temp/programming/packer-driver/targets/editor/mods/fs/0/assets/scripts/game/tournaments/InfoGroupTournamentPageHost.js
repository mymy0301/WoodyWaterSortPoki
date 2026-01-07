System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, tween, Vec3, Utils, localConfig, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, InfoGroupTournamentPageHost;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../core/utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../localConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Utils = _unresolved_2.default;
    }, function (_unresolved_3) {
      localConfig = _unresolved_3.localConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "36f7e6Xx75NeYcNnIiECaNs", "InfoGroupTournamentPageHost", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = InfoGroupTournamentPageHost
       * DateTime = Wed Jul 16 2025 10:55:46 GMT+0700 (Indochina Time)
       * Author = MyTom2k17
       * FileBasename = InfoGroupTournamentPageHost.ts
       * FileBasenameNoExtension = InfoGroupTournamentPageHost
       * URL = db://assets/scripts/game/tournaments/InfoGroupTournamentPageHost.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("InfoGroupTournamentPageHost", InfoGroupTournamentPageHost = (_dec = ccclass('InfoGroupTournamentPageHost'), _dec2 = property(Label), _dec3 = property(Label), _dec(_class = (_class2 = (_temp = class InfoGroupTournamentPageHost extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "txtInfoTournament", _descriptor, this);

          _initializerDefineProperty(this, "txtScore", _descriptor2, this);

          _defineProperty(this, "scoreValue", 0);

          _defineProperty(this, "tweenScoreUpdate", null);
        }

        initGroup() {
          this.scoreValue = 0;
          this.txtScore.string = `${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).formatNumber(this.scoreValue)}`;
          this.txtInfoTournament.string = `${(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currTournamentPageHostDataInfo.title}`;
        }

        setAddScore(scoreAdd) {
          // console.log('setAddScore');
          this.scoreValue += scoreAdd;
          this.txtScore.string = `${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).formatNumber(this.scoreValue)}`;
          if (this.tweenScoreUpdate) this.tweenScoreUpdate.stop();
          this.tweenScoreUpdate = tween(this.txtScore.node).to(0.1, {
            scale: new Vec3(1.1, 1.1, 1.1)
          }, {
            easing: 'linear'
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'linear'
          }).union().repeat(2).start();
        }

        resetScore() {
          // console.log('resetScore');
          if (this.tweenScoreUpdate) this.tweenScoreUpdate.stop();
          this.scoreValue = 0;
          this.txtScore.string = `${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).formatNumber(this.scoreValue)}`;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtInfoTournament", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtScore", [_dec3], {
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
//# sourceMappingURL=InfoGroupTournamentPageHost.js.map