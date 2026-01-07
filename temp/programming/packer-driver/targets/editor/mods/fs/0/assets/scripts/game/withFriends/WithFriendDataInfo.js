System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _temp, _crd, ccclass, property, WithFriendDataInfo;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f6c7ae5agBEXoofQ5ARMLA+", "WithFriendDataInfo", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = WithFriendDataInfo
       * DateTime = Fri Mar 21 2025 17:04:07 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = WithFriendDataInfo.ts
       * FileBasenameNoExtension = WithFriendDataInfo
       * URL = db://assets/scripts/game/withFriends/WithFriendDataInfo.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("WithFriendDataInfo", WithFriendDataInfo = (_dec = ccclass('WithFriendDataInfo'), _dec(_class = (_temp = class WithFriendDataInfo {
        constructor() {
          _defineProperty(this, "senderID", "");

          _defineProperty(this, "senderAvatarURL", "");

          _defineProperty(this, "senderName", "");

          _defineProperty(this, "senderScore", 0);

          _defineProperty(this, "receiverID", "");

          _defineProperty(this, "receiverAvatarURL", "");

          _defineProperty(this, "receiverName", "");

          _defineProperty(this, "receiverScore", 0);

          _defineProperty(this, "levelIndex", 0);
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
//# sourceMappingURL=WithFriendDataInfo.js.map