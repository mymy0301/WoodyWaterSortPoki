System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Node, ProgressBar, Sprite, tween, UIOpacity, localConfig, clientEvent, Constants, THEME_TYPE, resourceUtil, AudioManager2, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, TubeProgressRewardGroup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUnlockProgressInfo(extras) {
    _reporterNs.report("UnlockProgressInfo", "./info/UnlockProgressInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTHEME_TYPE(extras) {
    _reporterNs.report("THEME_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "../framework/audioManager2", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      localConfig = _unresolved_2.localConfig;
    }, function (_unresolved_3) {
      clientEvent = _unresolved_3.clientEvent;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.Constants;
      THEME_TYPE = _unresolved_4.THEME_TYPE;
    }, function (_unresolved_5) {
      resourceUtil = _unresolved_5.resourceUtil;
    }, function (_unresolved_6) {
      AudioManager2 = _unresolved_6.AudioManager2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7d22alKYEBCX4LKWWQLHDui", "TubeProgressRewardGroup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = TubeProgressRewardGroup
       * DateTime = Thu Oct 24 2024 05:54:22 GMT+0700 (Indochina Time)
       * Author = MyTom2k17
       * FileBasename = TubeProgressRewardGroup.ts
       * FileBasenameNoExtension = TubeProgressRewardGroup
       * URL = db://assets/scripts/game/TubeProgressRewardGroup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("TubeProgressRewardGroup", TubeProgressRewardGroup = (_dec = ccclass('TubeProgressRewardGroup'), _dec2 = property(UIOpacity), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Sprite), _dec6 = property(ProgressBar), _dec7 = property(Node), _dec(_class = (_class2 = (_temp = class TubeProgressRewardGroup extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nodeOpacity", _descriptor, this);

          _initializerDefineProperty(this, "txtInfo", _descriptor2, this);

          _initializerDefineProperty(this, "txtProgress", _descriptor3, this);

          _initializerDefineProperty(this, "icon", _descriptor4, this);

          _initializerDefineProperty(this, "progressTube", _descriptor5, this);

          _initializerDefineProperty(this, "iconLoading", _descriptor6, this);

          _defineProperty(this, "tweenTube", null);

          _defineProperty(this, "level", -1);

          _defineProperty(this, "unlockProgressInfos", null);
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        initTubeProgress(level) {
          this.level = level;
          var isAvailable = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.checkUnlockProgressInfo_Tubes_Available(level);

          if (!isAvailable) {
            this.node.active = false;
            return;
          }

          this.unlockProgressInfos = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getUnlockProgressInfo_Tubes_byLevel(level); // console.log(this.unlockProgressInfos);

          if (this.unlockProgressInfos == null) {
            this.node.active = false;
            return;
          }

          this.iconLoading.active = true;
          this.node.active = true;
          this.loadIcon(this.unlockProgressInfos[1].itemID);
          var countLevelUnlock = this.unlockProgressInfos[1].level - this.unlockProgressInfos[0].level;
          var progressValue = level - this.unlockProgressInfos[0].level;
          this.txtProgress.string = progressValue - 1 + "/" + countLevelUnlock;
          this.progressTube.progress = (progressValue - 1) / countLevelUnlock;
          this.txtInfo.string = "Reach level " + this.unlockProgressInfos[1].level;
          this.showGroup(progressValue, countLevelUnlock); // this.showProgress(progressValue,countLevelUnlock);
        }

        showGroup(progressValue, countLevelUnlock) {
          this.nodeOpacity.opacity = 0;
          tween(this.nodeOpacity).to(0.3, {
            opacity: 255
          }, {
            easing: 'quadOut',
            onComplete: () => {
              this.showProgress(progressValue, countLevelUnlock);
            }
          }).start();
        }

        loadIcon(itemID) {
          var strPath = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getThemePath_byItemID((_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).TUBE, itemID);
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadSpriteFrame_Bundle(strPath, (err, spriteFrame) => {
            if (err) {
              console.error(err);
              return;
            }

            if (!this.node || !this.icon) {
              // console.log("33333333333");
              return;
            }

            this.icon.spriteFrame = spriteFrame;
            this.iconLoading.active = false;
          });
        }

        showProgress(progressValue, countLevelUnlock) {
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playSound_progressbar();
          this.tweenTube = tween(this.progressTube).to(0.3, {
            progress: progressValue / countLevelUnlock
          }, {
            easing: 'linear',
            onComplete: () => {
              this.txtProgress.string = progressValue + "/" + countLevelUnlock;
              this.showProgressFinished(progressValue, countLevelUnlock);
            }
          }).start();
        }

        showProgressFinished(progressValue, countLevelUnlock) {
          if (progressValue == countLevelUnlock) {
            (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager2) : AudioManager2).instance.playPopupOpen2();
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_THEME_REWARD_POPUP, (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
              error: Error()
            }), THEME_TYPE) : THEME_TYPE).TUBE, this.unlockProgressInfos[1].itemID);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeOpacity", [_dec2], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txtProgress", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "progressTube", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "iconLoading", [_dec7], {
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
//# sourceMappingURL=TubeProgressRewardGroup.js.map