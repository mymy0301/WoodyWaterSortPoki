System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _temp, _crd, ccclass, property, ItemWaterConfig;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "16638THeRJAxrn9jZUDSpqb", "ItemWaterConfig", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemWaterConfig
       * DateTime = Tue Aug 06 2024 09:10:26 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemWaterConfig.ts
       * FileBasenameNoExtension = ItemWaterConfig
       * URL = db://assets/scripts/game/info/ItemWaterConfig.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemWaterConfig", ItemWaterConfig = (_dec = ccclass('ItemWaterConfig'), _dec(_class = (_temp = class ItemWaterConfig {
        constructor(_target_scaleTOP, _target_moveTOP, _target_scaleBOTTOM, _target_moveBOTTOM) {
          _defineProperty(this, "TARGET_scaleTOP", void 0);

          _defineProperty(this, "TARGET_moveTOP", void 0);

          _defineProperty(this, "TARGET_scaleBOTTOM", void 0);

          _defineProperty(this, "TARGET_moveBOTTOM", void 0);

          this.TARGET_scaleTOP = _target_scaleTOP;
          this.TARGET_moveTOP = _target_moveTOP;
          this.TARGET_scaleBOTTOM = _target_scaleBOTTOM;
          this.TARGET_moveBOTTOM = _target_moveBOTTOM;
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
//# sourceMappingURL=ItemWaterConfig.js.map