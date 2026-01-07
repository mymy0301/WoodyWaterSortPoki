System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _temp, _crd, ccclass, property, InfoMonth;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "245aeFKyDdFJbC9gykeMlYM", "InfoMonth", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = InfoMonth
       * DateTime = Tue Oct 01 2024 14:40:48 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = InfoMonth.ts
       * FileBasenameNoExtension = InfoMonth
       * URL = db://assets/scripts/common/InfoMonth.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("InfoMonth", InfoMonth = (_dec = ccclass('InfoMonth'), _dec(_class = (_temp = class InfoMonth {
        constructor(_month, _year) {
          _defineProperty(this, "month", 1);

          _defineProperty(this, "year", 2024);

          this.month = _month;
          this.year = _year;
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
//# sourceMappingURL=InfoMonth.js.map