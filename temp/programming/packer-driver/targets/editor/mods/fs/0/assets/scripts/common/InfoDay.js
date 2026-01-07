System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _temp, _crd, ccclass, property, InfoDay;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2f462FJz79LrZn5+LBRcysP", "InfoDay", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = InfoDay
       * DateTime = Wed Jun 22 2022 11:21:32 GMT+0700 (Indochina Time)
       * Author = tuzkekizer
       * FileBasename = InfoDay.ts
       * FileBasenameNoExtension = InfoDay
       * URL = db://assets/scripts/calendar/InfoDay.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("InfoDay", InfoDay = (_dec = ccclass('InfoDay'), _dec(_class = (_temp = class InfoDay {
        constructor(_day, _month, _year) {
          _defineProperty(this, "day", 1);

          _defineProperty(this, "month", 1);

          _defineProperty(this, "year", 2022);

          this.day = _day;
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
//# sourceMappingURL=InfoDay.js.map