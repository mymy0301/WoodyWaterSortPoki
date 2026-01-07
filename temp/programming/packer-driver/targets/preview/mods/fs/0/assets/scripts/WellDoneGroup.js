System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, ParticleSystem, sp, tween, UIOpacity, clientEvent, Constants, AudioManager2, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, WellDoneGroup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "./framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "./framework/audioManager2", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ParticleSystem = _cc.ParticleSystem;
      sp = _cc.sp;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      clientEvent = _unresolved_2.clientEvent;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
    }, function (_unresolved_4) {
      AudioManager2 = _unresolved_4.AudioManager2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1201bJKkMxObJ4F2baL7NHF", "WellDoneGroup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = WellDoneGroup
       * DateTime = Tue Sep 10 2024 15:18:39 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = WellDoneGroup.ts
       * FileBasenameNoExtension = WellDoneGroup
       * URL = db://assets/scripts/WellDoneGroup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("WellDoneGroup", WellDoneGroup = (_dec = ccclass('WellDoneGroup'), _dec2 = property(ParticleSystem), _dec3 = property(UIOpacity), _dec4 = property(sp.Skeleton), _dec(_class = (_class2 = (_temp = class WellDoneGroup extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "arrEfxs", _descriptor, this);

          _initializerDefineProperty(this, "nodeOpacity", _descriptor2, this);

          _defineProperty(this, "tweenOpacity", null);

          _initializerDefineProperty(this, "wellDone", _descriptor3, this);
        }

        start() {// [3]
        }

        showWellDoneGroup() {
          this.wellDone.node.active = false;
          this.nodeOpacity.opacity = 0;
          this.node.active = true;
          this.tweenOpacity = tween(this.nodeOpacity).to(0.3, {
            opacity: 160
          }, {
            easing: 'quadOut',
            onComplete: () => {
              this.showStep2();
            }
          }).start();
        }

        showStep2() {
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playSound_WIN();

          for (var i = 0; i < this.arrEfxs.length; i++) {
            this.arrEfxs[i].play();
          }

          this.scheduleOnce(() => {
            this.wellDone.node.active = true;
            this.wellDone.setAnimation(0, 'appear', false);
          }, 0.5);
          this.scheduleOnce(() => {
            this.showWellDoneFinished();
          }, 2);
        }

        showWellDoneFinished() {
          this.node.active = false;
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).WELLDONE_FINISHED);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "arrEfxs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeOpacity", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "wellDone", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
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
//# sourceMappingURL=WellDoneGroup.js.map