System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _temp, _crd, ccclass, property, QuestDataInfo;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f52027JFFxIyqlG/rgQHj1y", "QuestDataInfo", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = QuestDataInfo
       * DateTime = Mon Oct 14 2024 21:21:48 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = QuestDataInfo.ts
       * FileBasenameNoExtension = QuestDataInfo
       * URL = db://assets/scripts/game/info/QuestDataInfo.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("QuestDataInfo", QuestDataInfo = (_dec = ccclass('QuestDataInfo'), _dec(_class = (_temp = class QuestDataInfo {
        constructor() {
          _defineProperty(this, "id", 0);

          _defineProperty(this, "des", "");

          _defineProperty(this, "count", 0);

          _defineProperty(this, "value", 0);
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
//# sourceMappingURL=QuestDataInfo.js.map