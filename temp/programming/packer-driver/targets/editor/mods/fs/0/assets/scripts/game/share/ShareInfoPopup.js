System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Camera, Component, Label, RichText, Sprite, localConfig, Utils, FBInstantManager, captureNode, getBase64, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, ShareInfoPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGetBase64Image_Callback(extras) {
    _reporterNs.report("GetBase64Image_Callback", "../../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../core/utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "../../common/FBInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcaptureNode(extras) {
    _reporterNs.report("captureNode", "../../common/capture-screen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetBase(extras) {
    _reporterNs.report("getBase64", "../../common/capture-screen", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      Component = _cc.Component;
      Label = _cc.Label;
      RichText = _cc.RichText;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      localConfig = _unresolved_2.localConfig;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.default;
    }, function (_unresolved_4) {
      FBInstantManager = _unresolved_4.FBInstantManager;
    }, function (_unresolved_5) {
      captureNode = _unresolved_5.captureNode;
      getBase64 = _unresolved_5.getBase64;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3fe9UQFINPcIxv8/UB7pql", "ShareInfoPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ShareInfoPopup
       * DateTime = Wed Dec 04 2024 17:16:18 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ShareInfoPopup.ts
       * FileBasenameNoExtension = ShareInfoPopup
       * URL = db://assets/scripts/game/share/ShareInfoPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ShareInfoPopup", ShareInfoPopup = (_dec = ccclass('ShareInfoPopup'), _dec2 = property(Camera), _dec3 = property(RichText), _dec4 = property(Label), _dec5 = property(Sprite), _dec(_class = (_class2 = (_temp = class ShareInfoPopup extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nodeCamera", _descriptor, this);

          _initializerDefineProperty(this, "txtDes", _descriptor2, this);

          _initializerDefineProperty(this, "txtInfo", _descriptor3, this);

          _initializerDefineProperty(this, "iconAvatar", _descriptor4, this);
        }

        showShareInfoLevelPopup(level, cb) {
          this.node.active = true;
          this.nodeCamera.node.active = true;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.myAvatarSpriteFrame) {
            this.iconAvatar.spriteFrame = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.myAvatarSpriteFrame;
          }

          this.txtDes.string = `<outline color=#ad3501 width=1.5><color=#FFFFFF>Can you beat</color> </outline><outline color=#00545b width=1.5><color=#00e9ff>${(_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.getName()}</color></outline> <outline color=#ad3501 width=1.5><color=#FFFFFF>level?</color></outline>`;
          this.txtInfo.string = `Lv.${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).formatNumber(level)}`;
          this.captureNode_Context(cb);
        }

        showShareInfoScorePopup(score, cb) {
          this.node.active = true;
          this.nodeCamera.node.active = true;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.myAvatarSpriteFrame) {
            this.iconAvatar.spriteFrame = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.myAvatarSpriteFrame;
          }

          this.txtDes.string = `<outline color=#ad3501 width=1.5><color=#FFFFFF>Can you beat</color> </outline><outline color=#00545b width=1.5><color=#00e9ff>${(_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.getName()}</color></outline> <outline color=#ad3501 width=1.5><color=#FFFFFF>score?</color></outline>`;
          this.txtInfo.string = `${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).formatNumber(score)}`;
          this.captureNode_Context(cb);
        }

        showShareTournamentPopup(tittle, score, cb) {
          this.node.active = true;
          this.nodeCamera.node.active = true;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.myAvatarSpriteFrame) {
            this.iconAvatar.spriteFrame = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.myAvatarSpriteFrame;
          }

          this.txtDes.string = `<outline color=#00e9ff width=2><color=#00e9ff>${tittle}</color></outline>`;
          this.txtInfo.string = `${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).formatNumber(score)}`;
          this.captureNode_Context(cb);
        }

        captureNode_Context(cb) {
          let self = this;
          (_crd && captureNode === void 0 ? (_reportPossibleCrUseOfcaptureNode({
            error: Error()
          }), captureNode) : captureNode)(this.node, this.nodeCamera).then(() => {
            let base64 = (_crd && getBase64 === void 0 ? (_reportPossibleCrUseOfgetBase({
              error: Error()
            }), getBase64) : getBase64)(this.nodeCamera, 800, 800);
            self.node.active = false;
            self.nodeCamera.node.active = false; // console.log(base64);

            cb(base64);
          }).catch(() => {
            cb("");
          });
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtDes", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txtInfo", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "iconAvatar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
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
//# sourceMappingURL=ShareInfoPopup.js.map