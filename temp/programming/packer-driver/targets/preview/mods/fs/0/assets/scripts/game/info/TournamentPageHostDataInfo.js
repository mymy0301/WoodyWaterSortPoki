System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, TOURNAMENT_TYPE, _dec, _class, _temp, _crd, ccclass, property, TournamentPageHostDataInfo;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfTOURNAMENT_TYPE(extras) {
    _reporterNs.report("TOURNAMENT_TYPE", "../../framework/constants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      TOURNAMENT_TYPE = _unresolved_2.TOURNAMENT_TYPE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0a38arE995DlqTS5V7tv/IP", "TournamentPageHostDataInfo", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = TournamentPageHostDataInfo
       * DateTime = Wed Jul 16 2025 10:28:04 GMT+0700 (Indochina Time)
       * Author = MyTom2k17
       * FileBasename = TournamentPageHostDataInfo.ts
       * FileBasenameNoExtension = TournamentPageHostDataInfo
       * URL = db://assets/scripts/game/info/TournamentPageHostDataInfo.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("TournamentPageHostDataInfo", TournamentPageHostDataInfo = (_dec = ccclass('TournamentPageHostDataInfo'), _dec(_class = (_temp = class TournamentPageHostDataInfo {
        constructor() {
          _defineProperty(this, "contextID", void 0);

          _defineProperty(this, "tournamentID", void 0);

          _defineProperty(this, "endTime", void 0);

          _defineProperty(this, "title", void 0);

          _defineProperty(this, "eventName", void 0);

          _defineProperty(this, "typeHost", (_crd && TOURNAMENT_TYPE === void 0 ? (_reportPossibleCrUseOfTOURNAMENT_TYPE({
            error: Error()
          }), TOURNAMENT_TYPE) : TOURNAMENT_TYPE).PAGE_HOST);

          _defineProperty(this, "levelIndex", void 0);

          _defineProperty(this, "eventType", 0);

          _defineProperty(this, "eventURL", "");
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
//# sourceMappingURL=TournamentPageHostDataInfo.js.map