System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Size, UITransform, Vec2, Vec3, ScrollViewGroupManager, localConfig, _dec, _class, _crd, ccclass, property, PassScrollViewGroupManager;

  function _reportPossibleCrUseOfScrollViewGroupManager(extras) {
    _reporterNs.report("ScrollViewGroupManager", "../../common/ScrollViewGroupManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemScrollView(extras) {
    _reporterNs.report("ItemScrollView", "../../common/ItemScrollView", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Size = _cc.Size;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ScrollViewGroupManager = _unresolved_2.ScrollViewGroupManager;
    }, function (_unresolved_3) {
      localConfig = _unresolved_3.localConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f3247aCWGxKO4tICqWZmYye", "PassScrollViewGroupManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PassScrollViewGroupManager", PassScrollViewGroupManager = (_dec = ccclass('PassScrollViewGroupManager'), _dec(_class = class PassScrollViewGroupManager extends (_crd && ScrollViewGroupManager === void 0 ? (_reportPossibleCrUseOfScrollViewGroupManager({
        error: Error()
      }), ScrollViewGroupManager) : ScrollViewGroupManager) {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        initPass(arrIndexPass) {
          // super.initDataInfos(arrIndexPass);
          this.reset();
          this.arrDataInfos = arrIndexPass;
          var maxY = (this.SIZE_ITEM + this.KC_Y) * this.arrDataInfos.length + 200;
          this.contentGroup.getComponent(UITransform).setContentSize(new Size(this.CONTENT_WIDTH, maxY));
          var indexPassStart = 0;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.passIndexAvailable > 2) {
            indexPassStart = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.passIndexAvailable - 2;
          }

          var posYStart = this.posYStart + indexPassStart * (this.SIZE_ITEM + this.KC_Y); // console.log("posYStart:"+posYStart);

          this.contentGroup.setPosition(new Vec3(0, posYStart, 0));
          this.showInitScrowView();
          var posYOffset = 0;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.passIndexAvailable >= 2) {
            posYOffset = ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.passIndexAvailable - 1) * (this.SIZE_ITEM + this.KC_Y);
          } // console.log("posYOffset:"+posYOffset);


          this.scrollView.scrollToOffset(new Vec2(0, posYOffset), 0.8);
        }

        showInitScrowView() {
          var indexPassStart = 0;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.passIndexAvailable > 2) {
            indexPassStart = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.passIndexAvailable - 2;
          }

          for (var i = indexPassStart; i < this.countShowItem + indexPassStart; i++) {
            if (i < this.arrDataInfos.length) {
              var itemScrollView = this.getItemLeaderBoard_Recycle_FromPools();
              itemScrollView.node.setPosition(this.getPos_byIndex(i));
              itemScrollView.init(this.arrDataInfos[i], 0.1 * i);
              itemScrollView.setIndexPos(i);
              this.mapItemBoards.set(i, itemScrollView);
            }
          }
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
//# sourceMappingURL=PassScrollViewGroupManager.js.map