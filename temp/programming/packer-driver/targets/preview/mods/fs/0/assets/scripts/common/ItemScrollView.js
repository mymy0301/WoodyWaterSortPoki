System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _temp, _crd, ccclass, property, ItemScrollView;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "30450+kgJ1NYo6zODCpbmtb", "ItemScrollView", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemScrollView
       * DateTime = Thu Nov 14 2024 17:23:10 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemScrollView.ts
       * FileBasenameNoExtension = ItemScrollView
       * URL = db://assets/scripts/common/ItemScrollView.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemScrollView", ItemScrollView = (_dec = ccclass('ItemScrollView'), _dec(_class = (_temp = class ItemScrollView extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "indexPos", void 0);
        }

        setIndexPos(_indexPos) {
          this.indexPos = _indexPos;
        }

        init(_data, _timeDelay) {// console.log(_data,_timeDelay);

          if (_timeDelay === void 0) {
            _timeDelay = 0;
          }
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
//# sourceMappingURL=ItemScrollView.js.map