System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _temp, _crd, ccclass, property, LeaderboardDataInfo;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3ef617ik3FPBKqKROvrwR7b", "LeaderboardDataInfo", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = LeaderboardDataInfo
       * DateTime = Thu Oct 17 2024 11:07:06 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = LeaderboardDataInfo.ts
       * FileBasenameNoExtension = LeaderboardDataInfo
       * URL = db://assets/scripts/common/LeaderboardDataInfo.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("LeaderboardDataInfo", LeaderboardDataInfo = (_dec = ccclass('LeaderboardDataInfo'), _dec(_class = (_temp = class LeaderboardDataInfo {
        constructor() {
          _defineProperty(this, "_id", "");

          _defineProperty(this, "tournamentId", void 0);

          _defineProperty(this, "contextId", void 0);

          _defineProperty(this, "expireTime", void 0);

          _defineProperty(this, "name", void 0);

          _defineProperty(this, "type", 0);
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
//# sourceMappingURL=LeaderboardDataInfo.js.map