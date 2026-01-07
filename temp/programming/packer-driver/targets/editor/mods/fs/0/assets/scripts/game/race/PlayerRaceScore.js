System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _temp, _crd, ccclass, property, PlayerRaceScore;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cb083B2bIpARZfETH+Z8gta", "PlayerRaceScore", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = PlayerRaceScore
       * DateTime = Mon Nov 11 2024 09:56:25 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = PlayerRaceScore.ts
       * FileBasenameNoExtension = PlayerRaceScore
       * URL = db://assets/scripts/game/race/PlayerRaceScore.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("PlayerRaceScore", PlayerRaceScore = (_dec = ccclass('PlayerRaceScore'), _dec(_class = (_temp = class PlayerRaceScore {
        constructor() {
          _defineProperty(this, "indexID", 0);

          _defineProperty(this, "isMyPlayer", false);

          _defineProperty(this, "score", 0);

          _defineProperty(this, "timeFinished", 2 * 60 * 60);

          _defineProperty(this, "indexRank", 0);
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
//# sourceMappingURL=PlayerRaceScore.js.map