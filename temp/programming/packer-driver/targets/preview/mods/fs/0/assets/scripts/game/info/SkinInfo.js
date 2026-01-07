System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, UNLOCK_TYPE, _dec, _class, _temp, _crd, ccclass, property, SkinInfo;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfUNLOCK_TYPE(extras) {
    _reporterNs.report("UNLOCK_TYPE", "../../framework/constants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      UNLOCK_TYPE = _unresolved_2.UNLOCK_TYPE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0cd5cNCo15JbZI/8UFgrooG", "SkinInfo", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = SkinInfo
       * DateTime = Fri Oct 11 2024 10:21:20 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = SkinInfo.ts
       * FileBasenameNoExtension = SkinInfo
       * URL = db://assets/scripts/game/info/SkinInfo.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("SkinInfo", SkinInfo = (_dec = ccclass('SkinInfo'), _dec(_class = (_temp = class SkinInfo {
        constructor() {
          _defineProperty(this, "id", 0);

          _defineProperty(this, "unlockType", (_crd && UNLOCK_TYPE === void 0 ? (_reportPossibleCrUseOfUNLOCK_TYPE({
            error: Error()
          }), UNLOCK_TYPE) : UNLOCK_TYPE).NONE);

          _defineProperty(this, "price", 0);
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
//# sourceMappingURL=SkinInfo.js.map