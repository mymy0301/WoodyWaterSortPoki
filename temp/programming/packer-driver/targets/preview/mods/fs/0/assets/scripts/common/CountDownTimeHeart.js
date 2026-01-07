System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Utils, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, CountDownTimeHeart;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFBInstantCommon_Callback(extras) {
    _reporterNs.report("FBInstantCommon_Callback", "./FBInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../core/utils/Utils", _context.meta, extras);
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
      Utils = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68cc9fqaQZMGarSIy6ALDzt", "CountDownTimeHeart", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = CountDownTimeHeart
       * DateTime = Wed May 07 2025 14:44:21 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = CountDownTimeHeart.ts
       * FileBasenameNoExtension = CountDownTimeHeart
       * URL = db://assets/scripts/common/CountDownTimeHeart.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("CountDownTimeHeart", CountDownTimeHeart = (_dec = ccclass('CountDownTimeHeart'), _dec2 = property(Label), _dec(_class = (_class2 = (_temp = class CountDownTimeHeart extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "txtCountDownTime", _descriptor, this);

          _defineProperty(this, "countTime", 0);

          _defineProperty(this, "cb", null);
        }

        initTime(_time) {
          this.countTime = _time;
          this.txtCountDownTime.string = "" + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).getTimeStrByS_4(this.countTime);
        }

        initCountDownTime(_time, _callback) {
          this.cb = _callback;
          this.countTime = _time;
          this.txtCountDownTime.string = "" + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).getTimeStrByS_4(this.countTime);
          this.unschedule(this.showTime);
          this.schedule(this.showTime, 1);
          this.node.active = true;
        }

        onDisable() {
          this.unschedule(this.showTime);
        }

        showTime() {
          this.countTime--;

          if (this.countTime > 0) {
            this.txtCountDownTime.string = "" + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).getTimeStrByS_4(this.countTime);
          } else {
            this.countTime = 0;
            this.txtCountDownTime.string = "" + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).getTimeStrByS_4(this.countTime);
            this.unschedule(this.showTime);
            this.cb();
          }
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
//# sourceMappingURL=CountDownTimeHeart.js.map