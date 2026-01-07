System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, BasePopup, _dec, _class, _crd, ccclass, property, TutLevel5Popup;

  function _reportPossibleCrUseOfBasePopup(extras) {
    _reporterNs.report("BasePopup", "../common/basePopup", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BasePopup = _unresolved_2.BasePopup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f72faSGTVFO1KcG+mG7k60l", "TutLevel5Popup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = TutLevel5Popup
       * DateTime = Thu Oct 10 2024 08:25:13 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = TutLevel5Popup.ts
       * FileBasenameNoExtension = TutLevel5Popup
       * URL = db://assets/scripts/game/TutLevel5Popup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("TutLevel5Popup", TutLevel5Popup = (_dec = ccclass('TutLevel5Popup'), _dec(_class = class TutLevel5Popup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        showPopup() {
          super.showPoup_ShowView_Finished();
        }

        hidePopup() {
          super.hidePopup_Finished();
        }

      }) || _class));
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
//# sourceMappingURL=TutLevel5Popup.js.map