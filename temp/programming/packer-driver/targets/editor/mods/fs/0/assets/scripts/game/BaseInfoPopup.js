System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, tween, Vec3, BasePopup, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, BaseInfoPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasePopup(extras) {
    _reporterNs.report("BasePopup", "../common/basePopup", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BasePopup = _unresolved_2.BasePopup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3d6a86iQhpJxYYLrZVCH1Wc", "BaseInfoPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = BaseInfoPopup
       * DateTime = Thu Nov 21 2024 17:04:34 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = BaseInfoPopup.ts
       * FileBasenameNoExtension = BaseInfoPopup
       * URL = db://assets/scripts/game/BaseInfoPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("BaseInfoPopup", BaseInfoPopup = (_dec = ccclass('BaseInfoPopup'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class BaseInfoPopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nodeTitle", _descriptor, this);

          _defineProperty(this, "indexNode", 0);

          _initializerDefineProperty(this, "arrInfoGroups", _descriptor2, this);

          _defineProperty(this, "tweenShow", null);
        }

        showInfoPopup() {
          super.showPopup();
          this.nodeTitle.active = false;
          this.nodeTitle.setScale(new Vec3(0, 0, 0));

          for (let i = 0; i < this.arrInfoGroups.length; i++) {
            this.arrInfoGroups[i].active = false;
            this.arrInfoGroups[i].setScale(new Vec3(0, 0, 0));
          }

          this.btnClose.node.active = false;
          this.indexNode = 0;

          if (this.tweenShow != null) {
            this.tweenShow.stop();
          }
        }

        showPoup_ShowView_Finished() {
          super.showPoup_ShowView_Finished();
          this.showTitle();
        }

        showTitle() {
          this.nodeTitle.active = true;
          this.nodeTitle.setScale(new Vec3(0, 0, 0));
          this.tweenShow = tween(this.nodeTitle).to(0.5, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut',
            onComplete: () => {
              this.showInfoGroup(0);
            }
          }).start();
        }

        showInfoGroup(indexNode) {
          this.indexNode = indexNode;
          this.arrInfoGroups[indexNode].active = true;
          this.arrInfoGroups[indexNode].setScale(new Vec3(0, 0, 0));
          this.tweenShow = tween(this.arrInfoGroups[indexNode]).to(0.4, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut',
            onComplete: () => {
              if (this.indexNode < this.arrInfoGroups.length - 1) {
                this.showInfoGroup(this.indexNode + 1);
              } else {
                this.btnClose.node.active = true;
              }
            }
          }).start();
        }

        hidePopup() {
          this.hidePopup_Finished();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeTitle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "arrInfoGroups", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));
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
//# sourceMappingURL=BaseInfoPopup.js.map