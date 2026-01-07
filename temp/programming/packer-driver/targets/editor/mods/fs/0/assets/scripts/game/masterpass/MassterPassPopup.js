System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Label, ProgressBar, BasePopup, PassScrollViewGroupManager, localConfig, CountDownToNextTime, Constants, SHOP_PACK_TYPE, clientEvent, AudioManager2, FBInstantManager, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, _crd, ccclass, property, MassterPassPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasePopup(extras) {
    _reporterNs.report("BasePopup", "../../common/basePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPassScrollViewGroupManager(extras) {
    _reporterNs.report("PassScrollViewGroupManager", "./PassScrollViewGroupManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCountDownToNextTime(extras) {
    _reporterNs.report("CountDownToNextTime", "../../common/CountDownToNextTime", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHOP_PACK_TYPE(extras) {
    _reporterNs.report("SHOP_PACK_TYPE", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "../../framework/audioManager2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "../../common/FBInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogEventManager(extras) {
    _reporterNs.report("LogEventManager", "../../common/LogEventManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Label = _cc.Label;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      BasePopup = _unresolved_2.BasePopup;
    }, function (_unresolved_3) {
      PassScrollViewGroupManager = _unresolved_3.PassScrollViewGroupManager;
    }, function (_unresolved_4) {
      localConfig = _unresolved_4.localConfig;
    }, function (_unresolved_5) {
      CountDownToNextTime = _unresolved_5.CountDownToNextTime;
    }, function (_unresolved_6) {
      Constants = _unresolved_6.Constants;
      SHOP_PACK_TYPE = _unresolved_6.SHOP_PACK_TYPE;
    }, function (_unresolved_7) {
      clientEvent = _unresolved_7.clientEvent;
    }, function (_unresolved_8) {
      AudioManager2 = _unresolved_8.AudioManager2;
    }, function (_unresolved_9) {
      FBInstantManager = _unresolved_9.FBInstantManager;
    }, function (_unresolved_10) {
      LogEventManager = _unresolved_10.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b5bacqCOxtCGotQR8UC98en", "MassterPassPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = MassterPassPopup
       * DateTime = Thu Nov 14 2024 17:55:17 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = MassterPassPopup.ts
       * FileBasenameNoExtension = MassterPassPopup
       * URL = db://assets/scripts/game/masterpass/MassterPassPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("MassterPassPopup", MassterPassPopup = (_dec = ccclass('MassterPassPopup'), _dec2 = property(Button), _dec3 = property(_crd && CountDownToNextTime === void 0 ? (_reportPossibleCrUseOfCountDownToNextTime({
        error: Error()
      }), CountDownToNextTime) : CountDownToNextTime), _dec4 = property(Label), _dec5 = property(Button), _dec6 = property(Label), _dec7 = property(Button), _dec8 = property(Label), _dec9 = property(ProgressBar), _dec10 = property(_crd && PassScrollViewGroupManager === void 0 ? (_reportPossibleCrUseOfPassScrollViewGroupManager({
        error: Error()
      }), PassScrollViewGroupManager) : PassScrollViewGroupManager), _dec(_class = (_class2 = (_temp = class MassterPassPopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "btnInfo", _descriptor, this);

          _initializerDefineProperty(this, "countDownTime", _descriptor2, this);

          _initializerDefineProperty(this, "txtFinished", _descriptor3, this);

          _initializerDefineProperty(this, "btnActivace", _descriptor4, this);

          _initializerDefineProperty(this, "txtActivaced", _descriptor5, this);

          _initializerDefineProperty(this, "btnMassterPass", _descriptor6, this);

          _initializerDefineProperty(this, "txtIndexPass", _descriptor7, this);

          _initializerDefineProperty(this, "progressBar", _descriptor8, this);

          _initializerDefineProperty(this, "passScrollViewGroupManager", _descriptor9, this);
        }

        onEnable() {
          super.onEnable();
          this.btnActivace.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchActivace, this);
          this.btnMassterPass.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchActivace, this);
          this.btnInfo.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchInfo, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PASS_ACTIVATED_UPDATE, this.setMasterPassActivedUpdate, this);
        }

        onDisable() {
          super.onDisable();
          this.btnActivace.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchActivace, this);
          this.btnMassterPass.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchActivace, this);
          this.btnInfo.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchInfo, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PASS_ACTIVATED_UPDATE, this.setMasterPassActivedUpdate, this);
        }

        showMassterPassPopup() {
          this.passScrollViewGroupManager.node.active = false;
          this.txtIndexPass.string = `${(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.passIndexAvailable + 1}`;
          this.progressBar.progress = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.passProgess / (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.passCountLevel;
          this.txtFinished.node.active = false;
          let timeLeft = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.passLastTime + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.PASS_TIME - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrTime();

          if (timeLeft > 0) {
            this.countDownTime.initCountDownTime(timeLeft, () => {
              this.countDownTime.node.active = false;
              this.txtFinished.node.active = true;
            });
          } else {
            this.countDownTime.resetCountDownTime();
            this.countDownTime.node.active = false;
            this.txtFinished.node.active = true;
          }

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.passActivated) {
            this.btnActivace.node.active = false;
            this.btnMassterPass.interactable = false;
            this.txtActivaced.node.active = true;
          } else {
            if ((_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
              error: Error()
            }), FBInstantManager) : FBInstantManager).instance.checkHaveIAPPack_byProductID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType((_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
              error: Error()
            }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).MASTER_PASS))) {
              this.btnActivace.node.active = true;
              this.btnMassterPass.interactable = true;
              this.txtActivaced.node.active = false;
            } else {
              this.btnActivace.node.active = false;
              this.btnMassterPass.interactable = false;
              this.txtActivaced.node.active = false;
            }
          }

          super.showPopup();
        }

        setMasterPassActivedUpdate() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.passActivated) {
            this.btnActivace.node.active = false;
            this.btnMassterPass.interactable = false;
            this.txtActivaced.node.active = true;
          } else {
            if ((_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
              error: Error()
            }), FBInstantManager) : FBInstantManager).instance.checkHaveIAPPack_byProductID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType((_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
              error: Error()
            }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).MASTER_PASS))) {
              this.btnActivace.node.active = true;
              this.btnMassterPass.interactable = true;
              this.txtActivaced.node.active = false;
            } else {
              this.btnActivace.node.active = false;
              this.btnMassterPass.interactable = false;
              this.txtActivaced.node.active = false;
            }
          }
        }

        showPoup_ShowView_Finished() {
          super.showPoup_ShowView_Finished();
          let arrIndexPass = [];

          for (let i = 0; i < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.arrPassRewardDataInfos.length; i++) {
            arrIndexPass.push(i);
          }

          this.passScrollViewGroupManager.initPass(arrIndexPass);
          this.passScrollViewGroupManager.node.active = true;

          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.passTutorial) {
            (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager2) : AudioManager2).instance.playPopupOpen2();
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_MASSTERPASS_INFO_POPUP);
          }
        }

        touchActivace() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("activate", "masterpasspopup");
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_MASSTERPASS_ACTIVATE_POPUP, false);
        }

        touchInfo() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("info", "masterpasspopup");
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_MASSTERPASS_INFO_POPUP);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnInfo", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "countDownTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txtFinished", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnActivace", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txtActivaced", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnMassterPass", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "txtIndexPass", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "passScrollViewGroupManager", [_dec10], {
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
//# sourceMappingURL=MassterPassPopup.js.map