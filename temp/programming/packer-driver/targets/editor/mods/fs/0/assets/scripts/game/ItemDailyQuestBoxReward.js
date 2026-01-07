System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, CCInteger, Component, Node, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, ItemDailyQuestBoxReward;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e375ZfWg9KU4MlMRzS52N2", "ItemDailyQuestBoxReward", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemDailyQuestBoxReward
       * DateTime = Tue Oct 15 2024 09:36:33 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemDailyQuestBoxReward.ts
       * FileBasenameNoExtension = ItemDailyQuestBoxReward
       * URL = db://assets/scripts/game/ItemDailyQuestBoxReward.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemDailyQuestBoxReward", ItemDailyQuestBoxReward = (_dec = ccclass('ItemDailyQuestBoxReward'), _dec2 = property(CCInteger), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = class ItemDailyQuestBoxReward extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "indexBoxReward", _descriptor, this);

          _initializerDefineProperty(this, "nodeLock", _descriptor2, this);

          _initializerDefineProperty(this, "nodeFinished", _descriptor3, this);
        }

        start() {// [3]
        }

        setBoxLock() {
          this.nodeLock.active = true;
          this.nodeFinished.active = false;
        }

        setBoxFinished() {
          this.nodeLock.active = false;
          this.nodeFinished.active = true;
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "indexBoxReward", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeLock", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeFinished", [_dec4], {
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
//# sourceMappingURL=ItemDailyQuestBoxReward.js.map