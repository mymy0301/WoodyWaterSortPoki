System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, AVATAR_TYPE, _dec, _class, _temp, _crd, ccclass, property, PlayerRaceDataInfo;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfAVATAR_TYPE(extras) {
    _reporterNs.report("AVATAR_TYPE", "../../framework/constants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AVATAR_TYPE = _unresolved_2.AVATAR_TYPE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a060cpNhJpNzrT5YqewJohn", "PlayerRaceDataInfo", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = PlayerRaceDataInfo
       * DateTime = Wed Nov 06 2024 11:18:54 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = PlayerRaceDataInfo.ts
       * FileBasenameNoExtension = PlayerRaceDataInfo
       * URL = db://assets/scripts/game/race/PlayerRaceDataInfo.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("PlayerRaceDataInfo", PlayerRaceDataInfo = (_dec = ccclass('PlayerRaceDataInfo'), _dec(_class = (_temp = class PlayerRaceDataInfo {
        constructor() {
          _defineProperty(this, "avatarType", (_crd && AVATAR_TYPE === void 0 ? (_reportPossibleCrUseOfAVATAR_TYPE({
            error: Error()
          }), AVATAR_TYPE) : AVATAR_TYPE).TYPE_LOCAL);

          _defineProperty(this, "userName", "");

          _defineProperty(this, "avatarURL", "1");

          _defineProperty(this, "playerID", "");

          _defineProperty(this, "raceSkinID", 0);

          _defineProperty(this, "arrTimes", []);
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
//# sourceMappingURL=PlayerRaceDataInfo.js.map