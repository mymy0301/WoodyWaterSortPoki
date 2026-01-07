System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, tween, UIOpacity, Widget, clientEvent, Constants, IAP_PLACEMENT_TYPE, IAP_SHOW_TYPE, SHOP_PACK_TYPE, localConfig, FBInstantManager, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _temp, _crd, ccclass, property, ShopGroup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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

  function _reportPossibleCrUseOfLogEventManager(extras) {
    _reporterNs.report("LogEventManager", "../common/LogEventManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      clientEvent = _unresolved_2.clientEvent;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
      IAP_PLACEMENT_TYPE = _unresolved_3.IAP_PLACEMENT_TYPE;
      IAP_SHOW_TYPE = _unresolved_3.IAP_SHOW_TYPE;
      SHOP_PACK_TYPE = _unresolved_3.SHOP_PACK_TYPE;
    }, function (_unresolved_4) {
      localConfig = _unresolved_4.localConfig;
    }, function (_unresolved_5) {
      FBInstantManager = _unresolved_5.FBInstantManager;
    }, function (_unresolved_6) {
      LogEventManager = _unresolved_6.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "71189+V9e1JU7ZuD3wGRoBX", "ShopGroup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ShopGroup
       * DateTime = Wed Sep 25 2024 16:54:45 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ShopGroup.ts
       * FileBasenameNoExtension = ShopGroup
       * URL = db://assets/scripts/game/ShopGroup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ShopGroup", ShopGroup = (_dec = ccclass('ShopGroup'), _dec2 = property(Widget), _dec3 = property(Widget), _dec4 = property(Widget), _dec5 = property(UIOpacity), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec(_class = (_class2 = (_temp = class ShopGroup extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "groupAllTopWidget", _descriptor, this);

          _initializerDefineProperty(this, "groupAllContentWidget", _descriptor2, this);

          _initializerDefineProperty(this, "scrollViewWidget", _descriptor3, this);

          _initializerDefineProperty(this, "groupOpacity", _descriptor4, this);

          _defineProperty(this, "tweenGroup", null);

          _initializerDefineProperty(this, "targetCoin", _descriptor5, this);

          _initializerDefineProperty(this, "targetHeart", _descriptor6, this);

          _initializerDefineProperty(this, "groupPackCoin1", _descriptor7, this);

          _initializerDefineProperty(this, "groupPackCoin2", _descriptor8, this);

          _initializerDefineProperty(this, "groupRemoveAd", _descriptor9, this);

          _initializerDefineProperty(this, "groupBundle", _descriptor10, this);

          _initializerDefineProperty(this, "groupSuperBundle", _descriptor11, this);

          _initializerDefineProperty(this, "groupMegaBundle", _descriptor12, this);

          _initializerDefineProperty(this, "groupUltraBundle", _descriptor13, this);

          _initializerDefineProperty(this, "contentGroup", _descriptor14, this);
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).STARTER_PACK_UPDATE, this.showInfo, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).UPDATE_COIN_TARGETPOS, this.targetCoin.worldPosition);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).UPDATE_HEART_TARGETPOS, this.targetHeart.worldPosition);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).IAP_INIT_SUCCESS, this.showInfo, this);
          this.showInfo();
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).STARTER_PACK_UPDATE, this.showInfo, this);
          this.contentGroup.active = false;
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).IAP_INIT_SUCCESS, this.showInfo, this);
        }

        showInfo() {
          if ((_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.checkHaveIAPPack_byProductID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType((_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).COIN_1))) {
            this.groupPackCoin1.active = true;
            this.groupPackCoin2.active = true;
          } else {
            this.groupPackCoin1.active = false;
            this.groupPackCoin2.active = false;
          }

          if ((_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.checkHaveIAPPack_byProductID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType((_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).BUNDLE_1))) {
            this.groupBundle.active = true;
          } else {
            this.groupBundle.active = false;
          }

          if ((_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.checkHaveIAPPack_byProductID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType((_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).REMOVE_AD))) {
            this.groupRemoveAd.active = true;
          } else {
            this.groupRemoveAd.active = false;
          }

          if ((_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.checkHaveIAPPack_byProductID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType((_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).BUNDLE_3))) {
            this.groupSuperBundle.active = true;
          } else {
            this.groupSuperBundle.active = false;
          }

          if ((_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.checkHaveIAPPack_byProductID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType((_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).BUNDLE_4))) {
            this.groupMegaBundle.active = true;
          } else {
            this.groupMegaBundle.active = false;
          }

          if ((_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.checkHaveIAPPack_byProductID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType((_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).BUNDLE_5))) {
            this.groupUltraBundle.active = true;
          } else {
            this.groupUltraBundle.active = false;
          }
        }

        initAllTop() {
          // console.error("initAllTop ShopGroup");
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isMobile) {
            let posY = ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.scaleBG - 1) * (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.DEFAULT_H / 2; // console.log("posY:"+posY);

            if (posY <= 0) {
              this.groupAllTopWidget.top = 0;
              this.groupAllContentWidget.top = 0;
              this.scrollViewWidget.bottom = 372.25;
              return;
            }

            this.groupAllTopWidget.top = -posY;
            this.groupAllContentWidget.top = -posY;
            this.scrollViewWidget.bottom = 372.25 - posY; // console.log("this.scrollViewWidget.bottom:"+this.scrollViewWidget.bottom);
          } else {
            this.groupAllTopWidget.top = 0;
            this.groupAllContentWidget.top = 0;
            this.scrollViewWidget.bottom = 372.25;
          }
        }

        start() {
          // [3]
          this.initAllTop();
        } // update (deltaTime: number) {
        //     // [4]
        // 


        showGroup() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logIAPShow((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_PlacementType((_crd && IAP_PLACEMENT_TYPE === void 0 ? (_reportPossibleCrUseOfIAP_PLACEMENT_TYPE({
            error: Error()
          }), IAP_PLACEMENT_TYPE) : IAP_PLACEMENT_TYPE).HOME_SHOP), (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_ShowType((_crd && IAP_SHOW_TYPE === void 0 ? (_reportPossibleCrUseOfIAP_SHOW_TYPE({
            error: Error()
          }), IAP_SHOW_TYPE) : IAP_SHOW_TYPE).SHOP), "null");
          this.contentGroup.active = true; // if(this.tweenGroup != null){    
          //     this.tweenGroup.stop();
          // }
          // this.tweenGroup = tween(this.groupOpacity).to(0.2,{opacity:255},{easing:'linear',onComplete:()=>{}}).start();
        }

        setShow() {
          if (this.tweenGroup != null) {
            this.tweenGroup.stop();
          }

          this.tweenGroup = tween(this.groupOpacity).to(0.2, {
            opacity: 255
          }, {
            easing: 'linear',
            onComplete: () => {}
          }).start();
        }

        setHide() {
          this.contentGroup.active = false;

          if (this.tweenGroup != null) {
            this.tweenGroup.stop();
          }

          this.tweenGroup = tween(this.groupOpacity).to(0.2, {
            opacity: 0
          }, {
            easing: 'linear',
            onComplete: () => {}
          }).start();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "groupAllTopWidget", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "groupAllContentWidget", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scrollViewWidget", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "groupOpacity", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "targetCoin", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "targetHeart", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "groupPackCoin1", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "groupPackCoin2", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "groupRemoveAd", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "groupBundle", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "groupSuperBundle", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "groupMegaBundle", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "groupUltraBundle", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "contentGroup", [_dec15], {
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
//# sourceMappingURL=ShopGroup.js.map