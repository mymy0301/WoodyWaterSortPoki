System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, tween, Vec3, _dec, _class, _temp, _crd, ccclass, property, IconLoading;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c2600/o0rJAEouj0U3lQoMj", "IconLoading", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("IconLoading", IconLoading = (_dec = ccclass('IconLoading'), _dec(_class = (_temp = class IconLoading extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "tweenIconLoading", void 0);
        }

        onLoad() {
          this.tweenIconLoading = tween(this.node).by(1, {
            eulerAngles: new Vec3(0, 0, 360)
          }, {
            easing: 'linear'
          }).repeatForever();
        }

        start() {// [3]
        }

        onEnable() {
          this.tweenIconLoading.start();
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=IconLoading.js.map