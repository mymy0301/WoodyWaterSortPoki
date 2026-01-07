System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Vec3, lodash, _dec, _class, _temp, _crd, ccclass, property, ItemSpriteShake;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOflodash(extras) {
    _reporterNs.report("lodash", "../framework/lodash", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      lodash = _unresolved_2.lodash;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7e0c4s9U1hLIqTvFnWAu8wE", "ItemSpriteShake", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemSpriteShake
       * DateTime = Mon Feb 14 2022 15:55:01 GMT+0700 (Indochina Time)
       * Author = tuzkekizer
       * FileBasename = ItemSpriteShake.ts
       * FileBasenameNoExtension = ItemSpriteShake
       * URL = db://assets/scripts/common/ItemSpriteShake.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemSpriteShake", ItemSpriteShake = (_dec = ccclass('ItemSpriteShake'), _dec(_class = (_temp = class ItemSpriteShake extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "isShakePos", false);

          _defineProperty(this, "amountPos", 0);

          _defineProperty(this, "timeShake_Pos", 0);

          _defineProperty(this, "isShakeScale", false);

          _defineProperty(this, "amount_Scale", 0);

          _defineProperty(this, "timeShake_Scale", 0.2);
        }

        start() {// [3]
        }

        update(deltaTime) {
          // [4]
          if (this.isShakeScale) {
            this.timeShake_Scale -= deltaTime;
            this.amount_Scale -= this.amount_Scale * deltaTime;

            if (this.timeShake_Scale <= 0) {
              this.isShakeScale = false;
              this.node.setScale(new Vec3(1, 1, 1));
              return;
            }

            let scaleValueX = 1 + (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).randomFloat(0, this.amount_Scale);
            let scaleValueY = 1 + (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).randomFloat(0, this.amount_Scale);
            this.node.setScale(new Vec3(scaleValueX, scaleValueY, 1));
          }
        }

        setShake_Scale(_timeShake, _amount) {
          this.timeShake_Scale = _timeShake;
          this.amount_Scale = _amount;
          this.isShakeScale = true;
        }

      }, _temp)) || _class));
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
//# sourceMappingURL=ItemSpriteShake.js.map