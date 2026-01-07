System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _temp, _dec2, _class3, _temp2, _crd, ccclass, property, LevelDataInfo, TubeInfo;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc037ApEDtItaP4xV4T4CVe", "LevelDataInfo", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = LevelDataInfo
       * DateTime = Thu Aug 22 2024 11:58:48 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = LevelDataInfo.ts
       * FileBasenameNoExtension = LevelDataInfo
       * URL = db://assets/scripts/game/info/LevelDataInfo.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("LevelDataInfo", LevelDataInfo = (_dec = ccclass('LevelDataInfo'), _dec(_class = (_temp = class LevelDataInfo {
        constructor() {
          _defineProperty(this, "arrTubeInfo_1", []);

          _defineProperty(this, "arrTubeInfo_2", []);

          _defineProperty(this, "isTwoRows", false);

          _defineProperty(this, "maxCol", 1);

          _defineProperty(this, "maxRow", 1);
        }

      }, _temp)) || _class));

      _export("TubeInfo", TubeInfo = (_dec2 = ccclass('TubeInfo'), _dec2(_class3 = (_temp2 = class TubeInfo {
        constructor() {
          _defineProperty(this, "arrIndexColors", []);

          _defineProperty(this, "indexLock", 0);
        }

      }, _temp2)) || _class3));
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
//# sourceMappingURL=LevelDataInfo.js.map