System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, _dec, _class, _temp, _crd, ccclass, property, InfoMonthReward;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfInfoMonth(extras) {
    _reporterNs.report("InfoMonth", "./InfoMonth", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9740cLZaqBJ7LQrptfW1AiR", "InfoMonthReward", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = InfoMonthReward
       * DateTime = Tue Oct 01 2024 14:45:56 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = InfoMonthReward.ts
       * FileBasenameNoExtension = InfoMonthReward
       * URL = db://assets/scripts/common/InfoMonthReward.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("InfoMonthReward", InfoMonthReward = (_dec = ccclass('InfoMonthReward'), _dec(_class = (_temp = class InfoMonthReward {
        constructor(_infoMonth, _indexReward) {
          _defineProperty(this, "infoMonth", null);

          _defineProperty(this, "indexReward", 0);

          this.infoMonth = _infoMonth;
          this.indexReward = _indexReward;
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
//# sourceMappingURL=InfoMonthReward.js.map