System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, CountDownTimeNextDay, BasePopup, Constants, SHOP_ITEM_TYPE, localConfig, clientEvent, GroupRewardDataInfo, PokiSDKManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, BlackFridayPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCountDownTimeNextDay(extras) {
    _reporterNs.report("CountDownTimeNextDay", "../../common/CountDownTimeNextDay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasePopup(extras) {
    _reporterNs.report("BasePopup", "../../common/basePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHOP_ITEM_TYPE(extras) {
    _reporterNs.report("SHOP_ITEM_TYPE", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroupRewardDataInfo(extras) {
    _reporterNs.report("GroupRewardDataInfo", "../info/ShopDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPokiSDKManager(extras) {
    _reporterNs.report("PokiSDKManager", "../../common/PokiSDKManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Button = _cc.Button;
    }, function (_unresolved_2) {
      CountDownTimeNextDay = _unresolved_2.CountDownTimeNextDay;
    }, function (_unresolved_3) {
      BasePopup = _unresolved_3.BasePopup;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.Constants;
      SHOP_ITEM_TYPE = _unresolved_4.SHOP_ITEM_TYPE;
    }, function (_unresolved_5) {
      localConfig = _unresolved_5.localConfig;
    }, function (_unresolved_6) {
      clientEvent = _unresolved_6.clientEvent;
    }, function (_unresolved_7) {
      GroupRewardDataInfo = _unresolved_7.GroupRewardDataInfo;
    }, function (_unresolved_8) {
      PokiSDKManager = _unresolved_8.PokiSDKManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dac64kwYntKDaj8QqXtJywN", "BlackFridayPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = BlackFridayPopup
       * DateTime = Tue Nov 25 2025 10:09:40 GMT+0700 (Indochina Time)
       * Author = MyTom2k17
       * FileBasename = BlackFridayPopup.ts
       * FileBasenameNoExtension = BlackFridayPopup
       * URL = db://assets/scripts/game/blackfriday/BlackFridayPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("BlackFridayPopup", BlackFridayPopup = (_dec = ccclass('BlackFridayPopup'), _dec2 = property(Button), _dec3 = property(_crd && CountDownTimeNextDay === void 0 ? (_reportPossibleCrUseOfCountDownTimeNextDay({
        error: Error()
      }), CountDownTimeNextDay) : CountDownTimeNextDay), _dec(_class = (_class2 = (_temp = class BlackFridayPopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "btnClaim", _descriptor, this);

          _initializerDefineProperty(this, "countDownTimeNextDay", _descriptor2, this);
        }

        onEnable() {
          super.onEnable();
          this.btnClaim.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchClaim, this);
        }

        onDisable() {
          super.onDisable();
          this.btnClaim.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchClaim, this);
        }

        showBlackFridayCoinPopup() {
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isShowBlackFriday = true;
          this.btnClaim.node.active = false;
          super.showPopup();
        }

        showPoup_ShowView_Finished() {
          super.showPoup_ShowView_Finished();
          let self = this;
          self.btnClaim.node.active = true;
        }

        touchClaim() {
          let self = this; // FBInstantManager.instance.Show_RewardedVideoAsync("blackfridaypopup","claimads",((err,isSuccess)=>{
          //     if (err) {
          //         localConfig.instance.isShowBlackFriday = false;
          //     } else {
          //         self.rewardFinished();
          //     }
          // }));

          (_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
            error: Error()
          }), PokiSDKManager) : PokiSDKManager).instance.Show_RewardedVideoAsync("blackfridaypopup", "claimads", (err, isSuccess) => {
            if (err) {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.isShowBlackFriday = false;
            } else {
              self.rewardFinished();
            }
          });
        }

        rewardFinished() {
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.setBackFriday_Received();
          let groupRewardDataInfo = new (_crd && GroupRewardDataInfo === void 0 ? (_reportPossibleCrUseOfGroupRewardDataInfo({
            error: Error()
          }), GroupRewardDataInfo) : GroupRewardDataInfo)([]);
          groupRewardDataInfo.items = [];
          groupRewardDataInfo.items.push({
            itemShopType: (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
              error: Error()
            }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).COIN,
            value: 2000
          });
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.setDailyLogin_AdReceiveReward();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_REWARDRECEIVE_POPUP, "BLACK FRIDAY", groupRewardDataInfo);
          this.hidePopup_Finished();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnClaim", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "countDownTimeNextDay", [_dec3], {
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
//# sourceMappingURL=BlackFridayPopup.js.map