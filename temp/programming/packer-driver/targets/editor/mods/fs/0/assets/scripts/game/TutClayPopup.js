System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, BasePopup, localConfig, _dec, _class, _crd, ccclass, property, TutClayPopup;

  function _reportPossibleCrUseOfBasePopup(extras) {
    _reporterNs.report("BasePopup", "../common/basePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BasePopup = _unresolved_2.BasePopup;
    }, function (_unresolved_3) {
      localConfig = _unresolved_3.localConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5c774YlYQhB+57n+6BJQUhB", "TutClayPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = TutClayPopup
       * DateTime = Sun May 11 2025 20:59:39 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = TutClayPopup.ts
       * FileBasenameNoExtension = TutClayPopup
       * URL = db://assets/scripts/game/TutClayPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("TutClayPopup", TutClayPopup = (_dec = ccclass('TutClayPopup'), _dec(_class = class TutClayPopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
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


        showTutClayPopup() {
          this.showPopup();
        }

        touchClose() {
          super.touchClose();
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.setTutClayFinished();
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
//# sourceMappingURL=TutClayPopup.js.map