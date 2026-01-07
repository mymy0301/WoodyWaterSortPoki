System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, UIOpacity, Vec3, tween, lodash, localConfig, AudioManager2, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, ItemCoin;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOflodash(extras) {
    _reporterNs.report("lodash", "../framework/lodash", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "../framework/audioManager2", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      lodash = _unresolved_2.lodash;
    }, function (_unresolved_3) {
      localConfig = _unresolved_3.localConfig;
    }, function (_unresolved_4) {
      AudioManager2 = _unresolved_4.AudioManager2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7593frunGRClrX58KTQLBie", "ItemCoin", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemCoin
       * DateTime = Tue Feb 08 2022 09:12:50 GMT+0700 (Indochina Time)
       * Author = tuzkekizer
       * FileBasename = ItemCoin.ts
       * FileBasenameNoExtension = ItemCoin
       * URL = db://assets/scripts/scene/Item/ItemCoin.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemCoin", ItemCoin = (_dec = ccclass('ItemCoin'), _dec2 = property(Node), _dec3 = property(UIOpacity), _dec(_class = (_class2 = (_temp = class ItemCoin extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "iconCoin", _descriptor, this);

          _initializerDefineProperty(this, "iconCoin_UIOpacity", _descriptor2, this);

          _defineProperty(this, "targetPos", new Vec3(0, 0, 0));

          _defineProperty(this, "indexStar", void 0);

          _defineProperty(this, "coinValue", void 0);

          _defineProperty(this, "delayTimetoTagert", void 0);
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        initCoin(_coinValue, _posStart, _targetPos, _delayTimeToTarget) {
          this.coinValue = _coinValue;
          this.targetPos = _targetPos;
          this.delayTimetoTagert = _delayTimeToTarget; // console.log("this.targetPos:"+this.targetPos);

          this.node.setPosition(_posStart);
          this.node.active = true;
          this.showCoin();
        }

        showCoin() {
          var self = this;
          this.iconCoin_UIOpacity.opacity = 0;
          this.node.setScale(new Vec3(0, 0, 0));
          tween(this.iconCoin_UIOpacity).to(0.2, {
            opacity: 255
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
          tween(this.node).to(0.3, {
            scale: new Vec3(1, 1, 1),
            position: new Vec3(this.node.position.x + (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).random(-150, 150), this.node.position.y + (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).random(-150, 150), 0)
          }, {
            easing: 'backOut',
            onComplete: () => {
              self.moveToTarget();
            }
          }).start();
        }

        initCoin2(_coinValue, _posStart, _targetPos, _delayTimeToTarget) {
          this.coinValue = _coinValue;
          this.targetPos = _targetPos;
          this.delayTimetoTagert = _delayTimeToTarget; // console.log("this.targetPos:"+this.targetPos);

          this.node.setPosition(_posStart);
          this.node.active = true;
          this.showCoin2();
        }

        showCoin2() {
          var self = this;
          this.iconCoin_UIOpacity.opacity = 0;
          this.node.setScale(new Vec3(0, 0, 0));
          this.node.setRotationFromEuler(new Vec3(0, 0, 45));
          tween(this.iconCoin_UIOpacity).to(0.3, {
            opacity: 255
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
          tween(this.node).to(0.3, {
            eulerAngles: new Vec3(0, 0, 0)
          }, {
            easing: 'bounceOut',
            onComplete: () => {}
          }).start();
          tween(this.node).to(0.3, {
            scale: new Vec3(0.8, 0.8, 0.8)
          }, {
            easing: 'backOut',
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
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.setCoin((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currCoin + this.coinValue);
            }
          }).start();
          tween(this.iconCoin_UIOpacity).delay(this.delayTimetoTagert).to(0.5, {
            opacity: 200
          }, {
            easing: 'linear',
            onComplete: () => {}
          }).start();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "iconCoin", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconCoin_UIOpacity", [_dec3], {
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
//# sourceMappingURL=ItemCoin.js.map