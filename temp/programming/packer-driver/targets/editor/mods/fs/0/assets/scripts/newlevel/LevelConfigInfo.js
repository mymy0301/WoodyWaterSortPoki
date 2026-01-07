System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _temp, _dec2, _class3, _temp2, _crd, ccclass, property, LevelConfigInfo, LevelConfigInfoModels;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "62f01LAgJxPVpDaUZV2iR40", "LevelConfigInfo", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = LevelConfigInfo
       * DateTime = Mon Apr 14 2025 15:31:56 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = LevelConfigInfo.ts
       * FileBasenameNoExtension = LevelConfigInfo
       * URL = db://assets/scripts/newlevel/LevelConfigInfo.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("LevelConfigInfo", LevelConfigInfo = (_dec = ccclass('LevelConfigInfo'), _dec(_class = (_temp = class LevelConfigInfo {
        constructor() {
          _defineProperty(this, "levelOrder", "");

          _defineProperty(this, "levelIndex", 1);

          _defineProperty(this, "seeds", []);

          _defineProperty(this, "isHard", false);

          _defineProperty(this, "isSuperHard", false);

          _defineProperty(this, "isTutorial", false);
        }

      }, _temp)) || _class));

      _export("LevelConfigInfoModels", LevelConfigInfoModels = (_dec2 = ccclass('LevelConfigInfoModels'), _dec2(_class3 = (_temp2 = class LevelConfigInfoModels {
        constructor() {
          _defineProperty(this, "levelConfigModels", []);
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
//# sourceMappingURL=LevelConfigInfo.js.map