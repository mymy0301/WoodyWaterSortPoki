System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, THEME_TYPE, _dec, _class, _temp, _crd, ccclass, property, UnlockProgressInfo;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfTHEME_TYPE(extras) {
    _reporterNs.report("THEME_TYPE", "../../framework/constants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      THEME_TYPE = _unresolved_2.THEME_TYPE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1d8cb/Inj9OtJ34CERNxTr4", "UnlockProgressInfo", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = UnlockProgressInfo
       * DateTime = Thu Oct 10 2024 16:03:14 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = UnlockProgressInfo.ts
       * FileBasenameNoExtension = UnlockProgressInfo
       * URL = db://assets/scripts/game/info/UnlockProgressInfo.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("UnlockProgressInfo", UnlockProgressInfo = (_dec = ccclass('UnlockProgressInfo'), _dec(_class = (_temp = class UnlockProgressInfo {
        constructor() {
          _defineProperty(this, "level", 1);

          _defineProperty(this, "type", (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).TUBE);

          _defineProperty(this, "itemID", 1);
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
//# sourceMappingURL=UnlockProgressInfo.js.map