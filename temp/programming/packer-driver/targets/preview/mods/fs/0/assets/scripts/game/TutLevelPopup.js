System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Label, Node, BasePopup, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, TutLevelPopup;

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
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BasePopup = _unresolved_2.BasePopup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f7fcd3YrulIkZ2shjBsg13Q", "TutLevelPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = TutLevelPopup
       * DateTime = Thu Oct 10 2024 06:32:15 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = TutLevelPopup.ts
       * FileBasenameNoExtension = TutLevelPopup
       * URL = db://assets/scripts/game/TutLevelPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("TutLevelPopup", TutLevelPopup = (_dec = ccclass('TutLevelPopup'), _dec2 = property(Node), _dec3 = property(Label), _dec(_class = (_class2 = (_temp = class TutLevelPopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "objHand", _descriptor, this);

          _initializerDefineProperty(this, "txtInfo", _descriptor2, this);
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        showPopup() {
          this.showPoup_ShowView_Finished();
        }

        hidePopup() {
          this.hidePopup_Finished();
        }

        showTutLevel1_step1(posHand) {
          this.txtInfo.node.active = true;
          this.objHand.active = true;
          this.txtInfo.string = "Click left tube to pick up";
          this.objHand.position = posHand;
        }

        showTutLevel1_step2(posHand) {
          this.txtInfo.node.active = true;
          this.objHand.active = true;
          this.txtInfo.string = "Click right tube to pour";
          this.objHand.position = posHand;
        }

        showTutLevel2() {
          this.txtInfo.node.active = true;
          this.objHand.active = false;
          this.txtInfo.string = "Only pour water into the same color";
        }

        hideTut() {
          this.txtInfo.node.active = false;
          this.objHand.active = false;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "objHand", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtInfo", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
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
//# sourceMappingURL=TutLevelPopup.js.map