System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, ItemQuestionEfx;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2e46c1vLJJHwZIMw3Jx95C+", "ItemQuestionEfx", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemQuestionEfx
       * DateTime = Mon May 19 2025 15:22:45 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemQuestionEfx.ts
       * FileBasenameNoExtension = ItemQuestionEfx
       * URL = db://assets/scripts/ItemQuestionEfx.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemQuestionEfx", ItemQuestionEfx = (_dec = ccclass('ItemQuestionEfx'), _dec(_class = class ItemQuestionEfx extends Component {
        start() {
          this.scheduleOnce(() => {
            this.node.active = false;
          }, 5);
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
//# sourceMappingURL=ItemQuestionEfx.js.map