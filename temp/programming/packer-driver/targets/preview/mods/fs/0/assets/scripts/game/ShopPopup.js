System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Label, Node, BasePopup, clientEvent, Constants, IAP_PLACEMENT_TYPE, IAP_SHOW_TYPE, SHOP_PACK_TYPE, localConfig, FBInstantManager, lodash, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, ShopPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasePopup(extras) {
    _reporterNs.report("BasePopup", "../common/basePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAP_PLACEMENT_TYPE(extras) {
    _reporterNs.report("IAP_PLACEMENT_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAP_SHOW_TYPE(extras) {
    _reporterNs.report("IAP_SHOW_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHOP_PACK_TYPE(extras) {
    _reporterNs.report("SHOP_PACK_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "../common/FBInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflodash(extras) {
    _reporterNs.report("lodash", "../framework/lodash", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogEventManager(extras) {
    _reporterNs.report("LogEventManager", "../common/LogEventManager", _context.meta, extras);
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
    }, function (_unresolved_3) {
      clientEvent = _unresolved_3.clientEvent;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.Constants;
      IAP_PLACEMENT_TYPE = _unresolved_4.IAP_PLACEMENT_TYPE;
      IAP_SHOW_TYPE = _unresolved_4.IAP_SHOW_TYPE;
      SHOP_PACK_TYPE = _unresolved_4.SHOP_PACK_TYPE;
    }, function (_unresolved_5) {
      localConfig = _unresolved_5.localConfig;
    }, function (_unresolved_6) {
      FBInstantManager = _unresolved_6.FBInstantManager;
    }, function (_unresolved_7) {
      lodash = _unresolved_7.lodash;
    }, function (_unresolved_8) {
      LogEventManager = _unresolved_8.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b5029Mv61FJhJfN8Cf5zS8k", "ShopPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ShopPopup
       * DateTime = Fri Sep 27 2024 15:04:45 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ShopPopup.ts
       * FileBasenameNoExtension = ShopPopup
       * URL = db://assets/scripts/game/ShopPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ShopPopup", ShopPopup = (_dec = ccclass('ShopPopup'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = (_class2 = (_temp = class ShopPopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "targetCoin", _descriptor, this);

          _initializerDefineProperty(this, "targetHeart", _descriptor2, this);

          _initializerDefineProperty(this, "txtTitle", _descriptor3, this);

          _initializerDefineProperty(this, "groupStarterPack", _descriptor4, this);

          _initializerDefineProperty(this, "groupBundle", _descriptor5, this);

          _initializerDefineProperty(this, "groupSuperBundle", _descriptor6, this);

          _initializerDefineProperty(this, "groupMegaBundle", _descriptor7, this);

          _initializerDefineProperty(this, "groupUltraBundle", _descriptor8, this);
        }

        showShopPopup() {
          var arrPackShows = [];

          if ((_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.checkHaveIAPPack_byProductID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType((_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).BUNDLE_1))) {
            this.groupBundle.active = true;
            arrPackShows.push((_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
              error: Error()
            }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).BUNDLE_1);
            arrPackShows.push((_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
              error: Error()
            }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).BUNDLE_2);
          } else {
            this.groupBundle.active = false;
          }

          var isShowStartPack = false;

          if ((_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.checkHaveIAPPack_byProductID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType((_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).STARTER_PACK))) {
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.isIAPStarterPack) {
              isShowStartPack = false;
            } else {
              isShowStartPack = true;
              arrPackShows.push((_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
                error: Error()
              }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).STARTER_PACK);
            }
          }

          this.groupStarterPack.active = isShowStartPack;

          if (isShowStartPack) {} else {
            this.groupSuperBundle.active = false;
            this.groupMegaBundle.active = false;
            this.groupUltraBundle.active = false;
            var randomShowBundle = (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).random(0, 4);

            if (randomShowBundle == 0) {
              if ((_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                error: Error()
              }), FBInstantManager) : FBInstantManager).instance.checkHaveIAPPack_byProductID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType((_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
                error: Error()
              }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).BUNDLE_3))) {
                this.groupSuperBundle.active = true;
                arrPackShows.push((_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
                  error: Error()
                }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).BUNDLE_3);
              } else {
                this.groupSuperBundle.active = false;
              }
            } else if (randomShowBundle == 1) {
              if ((_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                error: Error()
              }), FBInstantManager) : FBInstantManager).instance.checkHaveIAPPack_byProductID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType((_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
                error: Error()
              }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).BUNDLE_4))) {
                this.groupMegaBundle.active = true;
                arrPackShows.push((_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
                  error: Error()
                }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).BUNDLE_4);
              } else {
                this.groupMegaBundle.active = false;
              }
            } else {
              if ((_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                error: Error()
              }), FBInstantManager) : FBInstantManager).instance.checkHaveIAPPack_byProductID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType((_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
                error: Error()
              }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).BUNDLE_5))) {
                this.groupUltraBundle.active = true;
                arrPackShows.push((_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
                  error: Error()
                }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).BUNDLE_5);
              } else {
                this.groupUltraBundle.active = false;
              }
            }
          }

          var strPacks = "";

          for (var i = 0; i < arrPackShows.length; i++) {
            if (i == arrPackShows.length - 1) {
              strPacks = strPacks + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType(arrPackShows[i]);
            } else {
              strPacks = strPacks + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType(arrPackShows[i]) + ", ";
            }
          }

          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logIAPShow((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_PlacementType((_crd && IAP_PLACEMENT_TYPE === void 0 ? (_reportPossibleCrUseOfIAP_PLACEMENT_TYPE({
            error: Error()
          }), IAP_PLACEMENT_TYPE) : IAP_PLACEMENT_TYPE).INGAME_POPUP), (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_ShowType((_crd && IAP_SHOW_TYPE === void 0 ? (_reportPossibleCrUseOfIAP_SHOW_TYPE({
            error: Error()
          }), IAP_SHOW_TYPE) : IAP_SHOW_TYPE).PACK), strPacks);
          super.showPopup();
        }

        onEnable() {
          super.onEnable();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).UPDATE_COIN_TARGETPOS, this.targetCoin.worldPosition);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).UPDATE_HEART_STARTPOS, this.targetHeart.worldPosition);
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        hidePopup() {
          super.hidePopup();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOP_POPUP_CLOSE);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "targetCoin", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "targetHeart", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txtTitle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "groupStarterPack", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "groupBundle", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "groupSuperBundle", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "groupMegaBundle", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "groupUltraBundle", [_dec9], {
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
//# sourceMappingURL=ShopPopup.js.map