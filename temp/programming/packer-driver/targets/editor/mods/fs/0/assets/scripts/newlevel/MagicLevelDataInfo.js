System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _temp, _dec2, _class3, _temp2, _dec3, _class5, _temp3, _dec4, _class7, _temp4, _dec5, _class9, _temp5, _dec6, _class11, _temp6, _dec7, _class13, _temp7, _crd, ccclass, property, MagicLevelDataInfo, MagicBInfo, MagicPInfo, MagicCInfo, MagicBIMInfo, MagicOBIMInfo, MagicOBIMObjInfo;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fd369KKG5ZKCa5aamBR8OCi", "MagicLevelDataInfo", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = MagicLevelDataInfo
       * DateTime = Mon Apr 14 2025 15:58:20 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = MagicLevelDataInfo.ts
       * FileBasenameNoExtension = MagicLevelDataInfo
       * URL = db://assets/scripts/newlevel/MagicLevelDataInfo.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("MagicLevelDataInfo", MagicLevelDataInfo = (_dec = ccclass('MagicLevelDataInfo'), _dec(_class = (_temp = class MagicLevelDataInfo {
        constructor() {
          _defineProperty(this, "UCCC", 0);

          _defineProperty(this, "CC", 0);

          _defineProperty(this, "LId", "");

          _defineProperty(this, "B", []);

          _defineProperty(this, "maxCol", 0);

          _defineProperty(this, "maxRow", 0);
        }

      }, _temp)) || _class));

      _export("MagicBInfo", MagicBInfo = (_dec2 = ccclass('MagicBInfo'), _dec2(_class3 = (_temp2 = class MagicBInfo {
        constructor() {
          _defineProperty(this, "Id", 0);

          _defineProperty(this, "P", new MagicPInfo());

          _defineProperty(this, "C", []);

          _defineProperty(this, "OBIM", []);

          _defineProperty(this, "indexX", 0);

          _defineProperty(this, "indexY", 0);
        }

      }, _temp2)) || _class3));

      _export("MagicPInfo", MagicPInfo = (_dec3 = ccclass('MagicPInfo'), _dec3(_class5 = (_temp3 = class MagicPInfo {
        constructor() {
          _defineProperty(this, "x", 0);

          _defineProperty(this, "y", 0);

          _defineProperty(this, "z", 0);
        }

      }, _temp3)) || _class5));

      _export("MagicCInfo", MagicCInfo = (_dec4 = ccclass('MagicCInfo'), _dec4(_class7 = (_temp4 = class MagicCInfo {
        constructor() {
          _defineProperty(this, "LP", new MagicPInfo());

          _defineProperty(this, "BIM", new MagicBIMInfo());
        }

      }, _temp4)) || _class7));

      _export("MagicBIMInfo", MagicBIMInfo = (_dec5 = ccclass('MagicBIMInfo'), _dec5(_class9 = (_temp5 = class MagicBIMInfo {
        constructor() {
          _defineProperty(this, "Id", 0);

          _defineProperty(this, "CI", 0);

          _defineProperty(this, "V", true);
        }

      }, _temp5)) || _class9));

      _export("MagicOBIMInfo", MagicOBIMInfo = (_dec6 = ccclass('MagicOBIMInfo'), _dec6(_class11 = (_temp6 = class MagicOBIMInfo {
        constructor() {
          _defineProperty(this, "Id", 0);

          _defineProperty(this, "CI", 0);

          _defineProperty(this, "Obj", null);
        }

      }, _temp6)) || _class11));

      _export("MagicOBIMObjInfo", MagicOBIMObjInfo = (_dec7 = ccclass('MagicOBIMObjInfo'), _dec7(_class13 = (_temp7 = class MagicOBIMObjInfo {
        constructor() {
          _defineProperty(this, "Id", 0);

          _defineProperty(this, "TA", 0);

          _defineProperty(this, "CI", 0);
        }

      }, _temp7)) || _class13));
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
//# sourceMappingURL=MagicLevelDataInfo.js.map