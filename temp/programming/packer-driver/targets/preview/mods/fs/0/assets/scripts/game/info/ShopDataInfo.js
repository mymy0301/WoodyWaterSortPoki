System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Enum, SHOP_ITEM_TYPE, _dec, _class, _temp, _dec2, _dec3, _class3, _class4, _descriptor, _temp2, _dec4, _class6, _temp3, _dec5, _class8, _temp4, _dec6, _class10, _temp5, _crd, ccclass, property, ShopDataInfo, RewardDataInfo, GroupRewardDataInfo, SpinRewardDataInfo, PassRewardDataInfo;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSHOP_ITEM_TYPE(extras) {
    _reporterNs.report("SHOP_ITEM_TYPE", "../../framework/constants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Enum = _cc.Enum;
    }, function (_unresolved_2) {
      SHOP_ITEM_TYPE = _unresolved_2.SHOP_ITEM_TYPE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "913c53vx59IRLbO6PTUBGnK", "ShopDataInfo", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ShopDataInfo
       * DateTime = Mon Sep 16 2024 16:52:43 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ShopDataInfo.ts
       * FileBasenameNoExtension = ShopDataInfo
       * URL = db://assets/scripts/game/info/ShopDataInfo.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ShopDataInfo", ShopDataInfo = (_dec = ccclass('ShopDataInfo'), _dec(_class = (_temp = class ShopDataInfo {
        constructor() {
          _defineProperty(this, "packID", void 0);

          _defineProperty(this, "price", void 0);

          _defineProperty(this, "price_amount_cents", 0);

          _defineProperty(this, "items", []);
        }

      }, _temp)) || _class));

      _export("RewardDataInfo", RewardDataInfo = (_dec2 = ccclass('RewardDataInfo'), _dec3 = property({
        type: Enum(_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
          error: Error()
        }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE)
      }), _dec2(_class3 = (_class4 = (_temp2 = class RewardDataInfo {
        constructor(itemShopType, value) {
          _initializerDefineProperty(this, "itemShopType", _descriptor, this);

          _defineProperty(this, "value", 0);

          this.itemShopType = itemShopType;
          this.value = value;
        }

      }, _temp2), (_descriptor = _applyDecoratedDescriptor(_class4.prototype, "itemShopType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).TICKET_GOLD;
        }
      })), _class4)) || _class3));

      _export("GroupRewardDataInfo", GroupRewardDataInfo = (_dec4 = ccclass('GroupRewardDataInfo'), _dec4(_class6 = (_temp3 = class GroupRewardDataInfo {
        constructor(items) {
          _defineProperty(this, "items", []);

          this.items = items;
        }

      }, _temp3)) || _class6));

      _export("SpinRewardDataInfo", SpinRewardDataInfo = (_dec5 = ccclass('SpinRewardDataInfo'), _dec5(_class8 = (_temp4 = class SpinRewardDataInfo {
        constructor(items, ratio) {
          _defineProperty(this, "items", []);

          _defineProperty(this, "ratio", 1);

          this.items = items;
          this.ratio = ratio;
        }

      }, _temp4)) || _class8));

      _export("PassRewardDataInfo", PassRewardDataInfo = (_dec6 = ccclass('PassRewardDataInfo'), _dec6(_class10 = (_temp5 = class PassRewardDataInfo {
        constructor(items, itemsPass) {
          _defineProperty(this, "items", []);

          _defineProperty(this, "itemsPass", []);

          this.items = items;
          this.itemsPass = itemsPass;
        }

      }, _temp5)) || _class10));
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
//# sourceMappingURL=ShopDataInfo.js.map