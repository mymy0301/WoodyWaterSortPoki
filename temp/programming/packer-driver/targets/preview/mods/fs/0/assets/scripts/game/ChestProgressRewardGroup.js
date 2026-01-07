System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Node, ProgressBar, tween, UIOpacity, localConfig, clientEvent, Constants, AudioManager2, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, ChestProgressRewardGroup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroupRewardDataInfo(extras) {
    _reporterNs.report("GroupRewardDataInfo", "./info/ShopDataInfo", _context.meta, extras);
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
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      localConfig = _unresolved_2.localConfig;
    }, function (_unresolved_3) {
      clientEvent = _unresolved_3.clientEvent;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.Constants;
    }, function (_unresolved_5) {
      AudioManager2 = _unresolved_5.AudioManager2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8ab2bWmVAZNCbOBHd9lbzKJ", "ChestProgressRewardGroup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ChestProgressRewardGroup
       * DateTime = Wed Oct 23 2024 16:46:12 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ChestProgressRewardGroup.ts
       * FileBasenameNoExtension = ChestProgressRewardGroup
       * URL = db://assets/scripts/game/ChestProgressRewardGroup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ChestProgressRewardGroup", ChestProgressRewardGroup = (_dec = ccclass('ChestProgressRewardGroup'), _dec2 = property(UIOpacity), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(ProgressBar), _dec(_class = (_class2 = (_temp = class ChestProgressRewardGroup extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nodeOpacity", _descriptor, this);

          _initializerDefineProperty(this, "txtChestProgress", _descriptor2, this);

          _initializerDefineProperty(this, "iconChest", _descriptor3, this);

          _initializerDefineProperty(this, "progressChest", _descriptor4, this);

          _defineProperty(this, "tweenChest", null);

          _defineProperty(this, "level", -1);
        }

        initChestProgress(level) {
          this.level = level;
          var countLevelUnlock = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getChests_CountLevelUnlock(level);
          var progress = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getChestProgress_byLevel(level);
          this.txtChestProgress.string = progress - 1 + "/" + countLevelUnlock;
          this.progressChest.progress = (progress - 1) / countLevelUnlock;
          if (this.tweenChest) this.tweenChest.stop();
          this.showGroup(progress, countLevelUnlock);
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

        showProgress(progressValue, countLevelUnlock) {
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playSound_progressbar();
          this.tweenChest = tween(this.progressChest).to(0.3, {
            progress: progressValue / countLevelUnlock
          }, {
            easing: 'linear',
            onComplete: () => {
              this.txtChestProgress.string = progressValue + "/" + countLevelUnlock;
              this.showProgressFinished(progressValue, countLevelUnlock);
            }
          }).start();
        }

        showProgressFinished(progressValue, countLevelUnlock) {
          if (progressValue == countLevelUnlock) {
            this.scheduleOnce(() => {
              this.showReward();
            }, 0.2);
          }
        }

        showReward() {
          var indexChest = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getChestIndex_byLevel(this.level);
          var groupRewardDataInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getChests_GroupRewardDataInfo_byIndex(indexChest);
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playPopupOpen2();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_CHEST_REWARD_POPUP, indexChest, groupRewardDataInfo);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeOpacity", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtChestProgress", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconChest", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "progressChest", [_dec5], {
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
//# sourceMappingURL=ChestProgressRewardGroup.js.map