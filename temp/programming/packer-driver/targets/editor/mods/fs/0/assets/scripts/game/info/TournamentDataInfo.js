System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _temp, _crd, ccclass, property, TournamentDataInfo;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ea478oXS25EqK/4tYi7pwCF", "TournamentDataInfo", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = TournamentDataInfo
       * DateTime = Tue Oct 29 2024 10:44:40 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = TournamentDataInfo.ts
       * FileBasenameNoExtension = TournamentDataInfo
       * URL = db://assets/scripts/game/info/TournamentDataInfo.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("TournamentDataInfo", TournamentDataInfo = (_dec = ccclass('TournamentDataInfo'), _dec(_class = (_temp = class TournamentDataInfo {
        constructor() {
          _defineProperty(this, "tournamentId", "");

          _defineProperty(this, "contextId", "");

          _defineProperty(this, "expireTime", 0);

          _defineProperty(this, "name", "");
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
//# sourceMappingURL=TournamentDataInfo.js.map