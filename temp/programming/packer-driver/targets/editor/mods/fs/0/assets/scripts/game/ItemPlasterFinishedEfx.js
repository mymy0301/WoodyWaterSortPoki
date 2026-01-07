System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, ItemPlasterFinishedEfx;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c0880m+6pdIFaxaOxOTZs1I", "ItemPlasterFinishedEfx", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemPlasterFinishedEfx
       * DateTime = Mon Apr 28 2025 10:39:52 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemPlasterFinishedEfx.ts
       * FileBasenameNoExtension = ItemPlasterFinishedEfx
       * URL = db://assets/scripts/game/ItemPlasterFinishedEfx.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemPlasterFinishedEfx", ItemPlasterFinishedEfx = (_dec = ccclass('ItemPlasterFinishedEfx'), _dec(_class = class ItemPlasterFinishedEfx extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {
          // [3]
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
//# sourceMappingURL=ItemPlasterFinishedEfx.js.map