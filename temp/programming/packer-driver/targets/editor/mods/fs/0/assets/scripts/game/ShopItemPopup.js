System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Label, Sprite, SpriteFrame, Vec3, BasePopup, BOOSTER_TYPE, Constants, localConfig, clientEvent, LogEventManager, PokiSDKManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, _crd, ccclass, property, ShopItemPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasePopup(extras) {
    _reporterNs.report("BasePopup", "../common/basePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBOOSTER_TYPE(extras) {
    _reporterNs.report("BOOSTER_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogEventManager(extras) {
    _reporterNs.report("LogEventManager", "../common/LogEventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPokiSDKManager(extras) {
    _reporterNs.report("PokiSDKManager", "../common/PokiSDKManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BasePopup = _unresolved_2.BasePopup;
    }, function (_unresolved_3) {
      BOOSTER_TYPE = _unresolved_3.BOOSTER_TYPE;
      Constants = _unresolved_3.Constants;
    }, function (_unresolved_4) {
      localConfig = _unresolved_4.localConfig;
    }, function (_unresolved_5) {
      clientEvent = _unresolved_5.clientEvent;
    }, function (_unresolved_6) {
      LogEventManager = _unresolved_6.LogEventManager;
    }, function (_unresolved_7) {
      PokiSDKManager = _unresolved_7.PokiSDKManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ef604uj6XtO0oQ4BKglLA4O", "ShopItemPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ShopItemPopup
       * DateTime = Tue Nov 05 2024 09:45:35 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ShopItemPopup.ts
       * FileBasenameNoExtension = ShopItemPopup
       * URL = db://assets/scripts/game/ShopItemPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ShopItemPopup", ShopItemPopup = (_dec = ccclass('ShopItemPopup'), _dec2 = property(Button), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(Button), _dec8 = property(Sprite), _dec9 = property(Label), _dec10 = property(Label), _dec(_class = (_class2 = (_temp = class ShopItemPopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "btnWatchAd", _descriptor, this);

          _initializerDefineProperty(this, "iconBooster", _descriptor2, this);

          _initializerDefineProperty(this, "sfUndo", _descriptor3, this);

          _initializerDefineProperty(this, "sfSuggest", _descriptor4, this);

          _initializerDefineProperty(this, "sfAddCol", _descriptor5, this);

          _initializerDefineProperty(this, "btnCoin", _descriptor6, this);

          _initializerDefineProperty(this, "bgBtnCoin", _descriptor7, this);

          _initializerDefineProperty(this, "txtPriceCoin", _descriptor8, this);

          _initializerDefineProperty(this, "txtInfo", _descriptor9, this);

          _defineProperty(this, "countItem", 1);

          _defineProperty(this, "boosterType", null);
        }

        showShopItemPopup(boosterType) {
          let isWatchAd = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getShopItem_Free_byBoosterType(boosterType);
          this.boosterType = boosterType;
          this.txtPriceCoin.string = `${(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getBoosterPrice(boosterType)}`;

          if (boosterType == (_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
            error: Error()
          }), BOOSTER_TYPE) : BOOSTER_TYPE).UNDO) {
            this.iconBooster.spriteFrame = this.sfUndo; // this.txtInfo.string = "Undo";
          } else if (boosterType == (_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
            error: Error()
          }), BOOSTER_TYPE) : BOOSTER_TYPE).SUGGEST) {
            this.iconBooster.spriteFrame = this.sfSuggest; // this.txtInfo.string = "Suggest";
          } else if (boosterType == (_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
            error: Error()
          }), BOOSTER_TYPE) : BOOSTER_TYPE).ADDCOL) {
            this.iconBooster.spriteFrame = this.sfAddCol; // this.txtInfo.string = "Add Column";
          }

          if (!isWatchAd) {
            this.btnWatchAd.node.active = true;
            this.btnWatchAd.node.setPosition(new Vec3(-220, -444, 0));
            this.btnCoin.node.setPosition(new Vec3(220, -444, 0));
          } else {
            this.btnWatchAd.node.active = false;
            this.btnCoin.node.setPosition(new Vec3(0, -444, 0));
          }

          this.showButtonCoin();
          super.showPopup();
        }

        showButtonCoin() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currCoin >= (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getBoosterPrice(this.boosterType)) {
            this.bgBtnCoin.grayscale = false;
            this.btnCoin.interactable = true;
          } else {
            this.bgBtnCoin.grayscale = true;
            this.btnCoin.interactable = false;
          }
        }

        onEnable() {
          super.onEnable();
          this.btnWatchAd.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchWatchAd, this);
          this.btnCoin.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchCoin, this);
        }

        onDisable() {
          super.onDisable();
          this.btnWatchAd.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchWatchAd, this);
          this.btnCoin.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchCoin, this);
        }

        touchWatchAd() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("watchad", "shopitempopup"); // FBInstantManager.instance.Show_RewardedVideoAsync("shopitempopup","watchad",(err, success) => {
          //     if (err) {
          //     } else {
          //         localConfig.instance.setShopItem_Free_byBoosterType(this.boosterType);
          //         this.receiveBooster("watchad");
          //         this.hidePopup();
          //     }
          // })

          (_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
            error: Error()
          }), PokiSDKManager) : PokiSDKManager).instance.Show_RewardedVideoAsync("shopitempopup", "watchad", (err, success) => {
            if (err) {} else {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.setShopItem_Free_byBoosterType(this.boosterType);
              this.receiveBooster("watchad");
              this.hidePopup();
            }
          });
        }

        touchCoin() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("coin", "shopitempopup");

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currCoin >= (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getBoosterPrice(this.boosterType)) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setCoin((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currCoin - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getBoosterPrice(this.boosterType));
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logResourceSpend("currency", "coin", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getBoosterPrice(this.boosterType), "shopitempopup", "exchange");
            this.receiveBooster("exchange");
            this.hidePopup();
          } else {
            // this.hidePopup();
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_SHOP_POPUP);
          }
        }

        receiveBooster(reason) {
          if (this.boosterType == (_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
            error: Error()
          }), BOOSTER_TYPE) : BOOSTER_TYPE).UNDO) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setBoosterCount((_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
              error: Error()
            }), BOOSTER_TYPE) : BOOSTER_TYPE).UNDO, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getBoosterCount((_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
              error: Error()
            }), BOOSTER_TYPE) : BOOSTER_TYPE).UNDO) + this.countItem);
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logResourceEarned("booster", "undo", this.countItem, "shopitem", reason);
          } else if (this.boosterType == (_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
            error: Error()
          }), BOOSTER_TYPE) : BOOSTER_TYPE).SUGGEST) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setBoosterCount((_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
              error: Error()
            }), BOOSTER_TYPE) : BOOSTER_TYPE).SUGGEST, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getBoosterCount((_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
              error: Error()
            }), BOOSTER_TYPE) : BOOSTER_TYPE).SUGGEST) + this.countItem);
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logResourceEarned("booster", "shuffle", this.countItem, "shopitem", reason);
          } else if (this.boosterType == (_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
            error: Error()
          }), BOOSTER_TYPE) : BOOSTER_TYPE).ADDCOL) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setBoosterCount((_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
              error: Error()
            }), BOOSTER_TYPE) : BOOSTER_TYPE).ADDCOL, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getBoosterCount((_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
              error: Error()
            }), BOOSTER_TYPE) : BOOSTER_TYPE).ADDCOL) + this.countItem);
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logResourceEarned("booster", "addcol", this.countItem, "shopitem", reason);
          }

          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOPITEM_BUYSUCESS, this.boosterType);
        }

        touchClose() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("close", "shopitempopup");
          super.touchClose();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnWatchAd", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconBooster", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sfUndo", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sfSuggest", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sfAddCol", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnCoin", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bgBtnCoin", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "txtPriceCoin", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "txtInfo", [_dec10], {
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
//# sourceMappingURL=ShopItemPopup.js.map