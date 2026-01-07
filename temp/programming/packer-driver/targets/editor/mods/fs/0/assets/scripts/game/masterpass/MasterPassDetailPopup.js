System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Label, Node, BasePopup, Constants, ENV_TYPE, SHOP_PACK_TYPE, CountDownToNextTime, localConfig, FBInstantManager, clientEvent, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, MasterPassDetailPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasePopup(extras) {
    _reporterNs.report("BasePopup", "../../common/basePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENV_TYPE(extras) {
    _reporterNs.report("ENV_TYPE", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHOP_PACK_TYPE(extras) {
    _reporterNs.report("SHOP_PACK_TYPE", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCountDownToNextTime(extras) {
    _reporterNs.report("CountDownToNextTime", "../../common/CountDownToNextTime", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "../../common/FBInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopDataInfo(extras) {
    _reporterNs.report("ShopDataInfo", "../info/ShopDataInfo", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BasePopup = _unresolved_2.BasePopup;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
      ENV_TYPE = _unresolved_3.ENV_TYPE;
      SHOP_PACK_TYPE = _unresolved_3.SHOP_PACK_TYPE;
    }, function (_unresolved_4) {
      CountDownToNextTime = _unresolved_4.CountDownToNextTime;
    }, function (_unresolved_5) {
      localConfig = _unresolved_5.localConfig;
    }, function (_unresolved_6) {
      FBInstantManager = _unresolved_6.FBInstantManager;
    }, function (_unresolved_7) {
      clientEvent = _unresolved_7.clientEvent;
    }, function (_unresolved_8) {
      LogEventManager = _unresolved_8.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1621egHJ/RCgKP2VnSrpeIK", "MasterPassDetailPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = MasterPassDetailPopup
       * DateTime = Thu Nov 21 2024 14:58:17 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = MasterPassDetailPopup.ts
       * FileBasenameNoExtension = MasterPassDetailPopup
       * URL = db://assets/scripts/game/masterpass/MasterPassDetailPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("MasterPassDetailPopup", MasterPassDetailPopup = (_dec = ccclass('MasterPassDetailPopup'), _dec2 = property(Button), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(_crd && CountDownToNextTime === void 0 ? (_reportPossibleCrUseOfCountDownToNextTime({
        error: Error()
      }), CountDownToNextTime) : CountDownToNextTime), _dec6 = property(Node), _dec(_class = (_class2 = (_temp = class MasterPassDetailPopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "btnBuy", _descriptor, this);

          _initializerDefineProperty(this, "txtPrice", _descriptor2, this);

          _initializerDefineProperty(this, "objHover", _descriptor3, this);

          _initializerDefineProperty(this, "countDownTime", _descriptor4, this);

          _initializerDefineProperty(this, "nodeFinished", _descriptor5, this);

          _defineProperty(this, "shopPackType", (_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).MASTER_PASS);

          _defineProperty(this, "shopDataInfo", null);
        }

        onEnable() {
          this.shopDataInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getItemShopDataInfo_byPackID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType(this.shopPackType));
          super.onEnable();
          this.btnBuy.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchBuy, this);
          this.showInfo();
        }

        showInfo() {
          if ((_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.checkHaveIAPPack_byProductID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType(this.shopPackType))) {
            this.btnBuy.interactable = true;
            this.objHover.active = false;
            this.txtPrice.string = `${this.shopDataInfo.price}`;
          } else {
            this.objHover.active = true;
            this.btnBuy.interactable = false;
            this.txtPrice.string = `Loading...`;
          }
        }

        onDisable() {
          super.onDisable();
          this.btnBuy.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchBuy, this);
        }

        showMaterPassDetailPopup() {
          super.showPopup();
          let timeLeft = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.passLastTime + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.PASS_TIME - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrTime();

          if (timeLeft > 0) {
            this.nodeFinished.active = false;
            this.countDownTime.initCountDownTime(timeLeft, () => {});
          } else {
            this.countDownTime.node.active = false;
            this.nodeFinished.active = true;
          }
        }

        touchBuy() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("buy", "masterpassdetailpopup");
          let self = this;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).TEST_AD) {
            this.buyIAP_Success();
            return;
          }

          let packID = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType(this.shopPackType);
          (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.getListIAP_Purchase((err, success) => {
            if (err) {
              (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                error: Error()
              }), FBInstantManager) : FBInstantManager).instance.buyIAP_consumePackID(packID, (err, success) => {
                if (err) {
                  (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                    error: Error()
                  }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).SHOW_NOTIFICATION, "Buy Fail!");
                } else {
                  (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                    error: Error()
                  }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).SHOW_NOTIFICATION, "Buy Success!");
                  self.buyIAP_Success();
                }
              });
            } else {
              let purchaseToken = (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                error: Error()
              }), FBInstantManager) : FBInstantManager).instance.iap_checkPurchaseInfo(packID);

              if (purchaseToken != "") {
                (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                  error: Error()
                }), FBInstantManager) : FBInstantManager).instance.iap_consumePackID(purchaseToken, (err, success) => {
                  if (err) {
                    (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                      error: Error()
                    }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).SHOW_NOTIFICATION, "Buy Fail!");
                  } else {
                    (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                      error: Error()
                    }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).SHOW_NOTIFICATION, "Buy Success!");
                    self.buyIAP_Success();
                  }
                });
              } else {
                (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                  error: Error()
                }), FBInstantManager) : FBInstantManager).instance.buyIAP_consumePackID(packID, (err, success) => {
                  if (err) {
                    (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                      error: Error()
                    }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).SHOW_NOTIFICATION, "Buy Fail!");
                  } else {
                    (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                      error: Error()
                    }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).SHOW_NOTIFICATION, "Buy Success!");
                    self.buyIAP_Success();
                  }
                });
              }
            }
          });
        }

        buyIAP_Success() {
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.setPassActivated();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PASS_ACTIVATED_UPDATE);
          this.hidePopup();
        }

        touchClose() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("close", "masterpassdetailpopup");
          super.touchClose();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnBuy", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtPrice", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "objHover", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "countDownTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeFinished", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
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
//# sourceMappingURL=MasterPassDetailPopup.js.map