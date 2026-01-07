System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, _dec, _class, _temp, _crd, ccclass, property, FriendAvatarInfo;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2f342DkY1tDo7LcXQf+eggU", "FriendAvatarInfo", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = FriendAvatarInfo
       * DateTime = Wed Mar 02 2022 17:05:40 GMT+0700 (Indochina Time)
       * Author = tuzkekizer
       * FileBasename = FriendAvatarInfo.ts
       * FileBasenameNoExtension = FriendAvatarInfo
       * URL = db://assets/scripts/scene/play/FriendAvatarInfo.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("FriendAvatarInfo", FriendAvatarInfo = (_dec = ccclass('FriendAvatarInfo'), _dec(_class = (_temp = class FriendAvatarInfo {
        constructor() {
          _defineProperty(this, "id", void 0);

          _defineProperty(this, "type", void 0);

          _defineProperty(this, "avatarUrl", void 0);

          _defineProperty(this, "name", void 0);

          _defineProperty(this, "level", 1);
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
//# sourceMappingURL=FriendAvatarInfo.js.map