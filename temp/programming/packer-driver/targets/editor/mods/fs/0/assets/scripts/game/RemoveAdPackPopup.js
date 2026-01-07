System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, BasePopup, clientEvent, Constants, IAP_PLACEMENT_TYPE, IAP_SHOW_TYPE, SHOP_PACK_TYPE, LogEventManager, localConfig, _dec, _class, _crd, ccclass, property, RemoveAdPackPopup;

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

  function _reportPossibleCrUseOfLogEventManager(extras) {
    _reporterNs.report("LogEventManager", "../common/LogEventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
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
      LogEventManager = _unresolved_5.LogEventManager;
    }, function (_unresolved_6) {
      localConfig = _unresolved_6.localConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d42bany6PdGQ7kSXvNhi7mu", "RemoveAdPackPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = RemoveAdPackPopup
       * DateTime = Mon Sep 23 2024 15:34:00 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = RemoveAdPackPopup.ts
       * FileBasenameNoExtension = RemoveAdPackPopup
       * URL = db://assets/scripts/game/RemoveAdPackPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("RemoveAdPackPopup", RemoveAdPackPopup = (_dec = ccclass('RemoveAdPackPopup'), _dec(_class = class RemoveAdPackPopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        onEnable() {
          super.onEnable();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BUY_REMOVEAD_SUCCESS, this.buyRemoveAdSuccess, this);
        }

        onDisable() {
          super.onDisable();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BUY_REMOVEAD_SUCCESS, this.buyRemoveAdSuccess, this);
        }

        showRemoveAdPackPopup() {
          let arrPackShows = [];
          arrPackShows.push((_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).REMOVE_AD);
          arrPackShows.push((_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).REMOVE_AD_PACK);
          let strPacks = "";

          for (let i = 0; i < arrPackShows.length; i++) {
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
          }), IAP_PLACEMENT_TYPE) : IAP_PLACEMENT_TYPE).HOME_POPUP), (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_ShowType((_crd && IAP_SHOW_TYPE === void 0 ? (_reportPossibleCrUseOfIAP_SHOW_TYPE({
            error: Error()
          }), IAP_SHOW_TYPE) : IAP_SHOW_TYPE).PACK), strPacks);
          this.showPopup();
        }

        buyRemoveAdSuccess() {
          this.hidePopup();
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
//# sourceMappingURL=RemoveAdPackPopup.js.map