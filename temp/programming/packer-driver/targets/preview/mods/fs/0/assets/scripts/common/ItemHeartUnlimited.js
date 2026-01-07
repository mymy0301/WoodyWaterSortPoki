System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, tween, UIOpacity, Vec3, AudioManager2, lodash, clientEvent, Constants, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, ItemHeartUnlimited;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "../framework/audioManager2", _context.meta, extras);
  }

  function _reportPossibleCrUseOflodash(extras) {
    _reporterNs.report("lodash", "../framework/lodash", _context.meta, extras);
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
      Label = _cc.Label;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      AudioManager2 = _unresolved_2.AudioManager2;
    }, function (_unresolved_3) {
      lodash = _unresolved_3.lodash;
    }, function (_unresolved_4) {
      clientEvent = _unresolved_4.clientEvent;
    }, function (_unresolved_5) {
      Constants = _unresolved_5.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c2b15esTW5A5oZpVrbs3Dgm", "ItemHeartUnlimited", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemHeartUnlimited
       * DateTime = Wed May 07 2025 15:51:25 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemHeartUnlimited.ts
       * FileBasenameNoExtension = ItemHeartUnlimited
       * URL = db://assets/scripts/common/ItemHeartUnlimited.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemHeartUnlimited", ItemHeartUnlimited = (_dec = ccclass('ItemHeartUnlimited'), _dec2 = property(Label), _dec3 = property(UIOpacity), _dec(_class = (_class2 = (_temp = class ItemHeartUnlimited extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "txtCountTime", _descriptor, this);

          _initializerDefineProperty(this, "groupOpacity", _descriptor2, this);

          _defineProperty(this, "targetPos", new Vec3(0, 0, 0));

          _defineProperty(this, "delayTimetoTagert", 0);

          _defineProperty(this, "countTime", void 0);
        }

        initHeartUnlimited(_countTime, _posStart, _targetPos, _delayTimeToTarget) {
          this.countTime = _countTime;
          this.targetPos = _targetPos;
          this.delayTimetoTagert = _delayTimeToTarget; // console.log("this.targetPos:"+this.targetPos);

          this.node.setPosition(_posStart);
          this.node.active = true;
          this.showHeartUnlimited();
        }

        showHeartUnlimited() {
          var self = this;
          this.groupOpacity.opacity = 0;
          this.node.setScale(new Vec3(0, 0, 0));
          tween(this.groupOpacity).to(0.3, {
            opacity: 255
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
          tween(this.node).to(0.3, {
            scale: new Vec3(1, 1, 1),
            position: new Vec3(this.node.position.x, this.node.position.y + (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).random(80, 200), 0)
          }, {
            easing: 'quadOut',
            onComplete: () => {
              self.moveToTarget();
            }
          }).start();
        }

        moveToTarget() {
          var self = this; // console.log("moveToTargetmoveToTarget");

          tween(this.node).delay(this.delayTimetoTagert).to((_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
            error: Error()
          }), lodash) : lodash).randomFloat(0.5, 0.6), {
            position: this.targetPos
          }, {
            easing: 'quadOut',
            onComplete: () => {
              (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager2) : AudioManager2).instance.playSound_Coin_Receive();
              self.node.active = false;
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).HEART_UNLIMITED_UPDATE, this.countTime);
            }
          }).start();
          tween(this.groupOpacity).delay(this.delayTimetoTagert).to(0.5, {
            opacity: 200
          }, {
            easing: 'linear',
            onComplete: () => {}
          }).start();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtCountTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "groupOpacity", [_dec3], {
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
//# sourceMappingURL=ItemHeartUnlimited.js.map