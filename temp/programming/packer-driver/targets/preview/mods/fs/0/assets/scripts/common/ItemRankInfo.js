System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, AVATAR_TYPE, _dec, _class, _temp, _crd, ccclass, property, ItemRankInfo;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfAVATAR_TYPE(extras) {
    _reporterNs.report("AVATAR_TYPE", "../framework/constants", _context.meta, extras);
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

      _cclegacy._RF.push({}, "2d170qD5y5LHqqZh4AxdPvz", "ItemRankInfo", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ItemRankInfo", ItemRankInfo = (_dec = ccclass('ItemRankInfo'), _dec(_class = (_temp = class ItemRankInfo {
        constructor() {
          _defineProperty(this, "avatarType", (_crd && AVATAR_TYPE === void 0 ? (_reportPossibleCrUseOfAVATAR_TYPE({
            error: Error()
          }), AVATAR_TYPE) : AVATAR_TYPE).TYPE_LOCAL);

          _defineProperty(this, "userName", "");

          _defineProperty(this, "userScore", 0);

          _defineProperty(this, "avatarURL", "1");

          _defineProperty(this, "isMyRank", false);

          _defineProperty(this, "indexRank", 1);

          _defineProperty(this, "idFB", "");

          _defineProperty(this, "countryCode", "us");

          _defineProperty(this, "playerID", "");
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ItemRankInfo.js.map