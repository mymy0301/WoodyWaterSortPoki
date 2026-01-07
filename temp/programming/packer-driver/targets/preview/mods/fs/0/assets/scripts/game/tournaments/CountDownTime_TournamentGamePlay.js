System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, GAME_STATE, localConfig, Utils, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, CountDownTime_TournamentGamePlay;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGAME_STATE(extras) {
    _reporterNs.report("GAME_STATE", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantCommon_Callback(extras) {
    _reporterNs.report("FBInstantCommon_Callback", "../../common/FBInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../core/utils/Utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      GAME_STATE = _unresolved_2.GAME_STATE;
    }, function (_unresolved_3) {
      localConfig = _unresolved_3.localConfig;
    }, function (_unresolved_4) {
      Utils = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c07f67w7OZJS76Hko0AZ4Hn", "CountDownTime_TournamentGamePlay", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = CountDownTime_TournamentGamePlay
       * DateTime = Mon Nov 04 2024 10:36:18 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = CountDownTime_TournamentGamePlay.ts
       * FileBasenameNoExtension = CountDownTime_TournamentGamePlay
       * URL = db://assets/scripts/game/tournaments/CountDownTime_TournamentGamePlay.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("CountDownTime_TournamentGamePlay", CountDownTime_TournamentGamePlay = (_dec = ccclass('CountDownTime_TournamentGamePlay'), _dec2 = property(Label), _dec(_class = (_class2 = (_temp = class CountDownTime_TournamentGamePlay extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "txtCountDownTime", _descriptor, this);

          _defineProperty(this, "countTime", void 0);

          _defineProperty(this, "isCountDownTime", false);

          _defineProperty(this, "sumTime", 0);

          _defineProperty(this, "cb", null);
        }

        update(deltaTime) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameState == (_crd && GAME_STATE === void 0 ? (_reportPossibleCrUseOfGAME_STATE({
            error: Error()
          }), GAME_STATE) : GAME_STATE).PLAY) {
            if (this.isCountDownTime) {
              this.sumTime += deltaTime;

              if (this.sumTime >= 1) {
                this.sumTime = 0;
                this.countTime--;
                this.showTime();

                if (this.countTime <= 0) {
                  this.isCountDownTime = false;
                  this.cb();
                }
              }
            } else {
              this.sumTime += deltaTime;
            }
          }
        }

        setInitCountTime(_initTime, cb) {
          this.cb = cb;
          this.countTime = _initTime;
          this.isCountDownTime = false;
          this.sumTime = 0;
          this.showTime();
        }

        setStartCountTime() {
          this.isCountDownTime = true;
          this.sumTime = 0;
          this.showTime();
        }

        setEndCountTime() {
          this.isCountDownTime = false;
        }

        showTime() {
          this.txtCountDownTime.string = "" + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).getTimeStrByS_4(this.countTime);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtCountDownTime", [_dec2], {
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
//# sourceMappingURL=CountDownTime_TournamentGamePlay.js.map