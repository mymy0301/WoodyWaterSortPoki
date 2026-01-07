System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _temp, _crd, ccclass, property, ItemTubePolygonConfig;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f3226rMaYBPWrQsjGIwSO+2", "ItemTubePolygonConfig", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemTubePolygonConfig
       * DateTime = Thu Aug 08 2024 11:11:11 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemTubePolygonConfig.ts
       * FileBasenameNoExtension = ItemTubePolygonConfig
       * URL = db://assets/scripts/game/info/ItemTubePolygonConfig.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemTubePolygonConfig", ItemTubePolygonConfig = (_dec = ccclass('ItemTubePolygonConfig'), _dec(_class = (_temp = class ItemTubePolygonConfig {
        constructor(_arrPoints) {
          _defineProperty(this, "arrPoints", []);

          this.arrPoints = _arrPoints;
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
//# sourceMappingURL=ItemTubePolygonConfig.js.map