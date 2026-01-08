System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Component, Node, Vec3, ItemDailyLogin, localConfig, clientEvent, Constants, SHOP_ITEM_TYPE, GroupRewardDataInfo, LogEventManager, PokiSDKManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, DailyTaskLoginGroup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItemDailyLogin(extras) {
    _reporterNs.report("ItemDailyLogin", "./ItemDailyLogin", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHOP_ITEM_TYPE(extras) {
    _reporterNs.report("SHOP_ITEM_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroupRewardDataInfo(extras) {
    _reporterNs.report("GroupRewardDataInfo", "./info/ShopDataInfo", _context.meta, extras);
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
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ItemDailyLogin = _unresolved_2.ItemDailyLogin;
    }, function (_unresolved_3) {
      localConfig = _unresolved_3.localConfig;
    }, function (_unresolved_4) {
      clientEvent = _unresolved_4.clientEvent;
    }, function (_unresolved_5) {
      Constants = _unresolved_5.Constants;
      SHOP_ITEM_TYPE = _unresolved_5.SHOP_ITEM_TYPE;
    }, function (_unresolved_6) {
      GroupRewardDataInfo = _unresolved_6.GroupRewardDataInfo;
    }, function (_unresolved_7) {
      LogEventManager = _unresolved_7.LogEventManager;
    }, function (_unresolved_8) {
      PokiSDKManager = _unresolved_8.PokiSDKManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "40a12WrMnFDoadHy57BZfF1", "DailyTaskLoginGroup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = DailyTaskLoginGroup
       * DateTime = Sun Oct 13 2024 20:29:17 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = DailyTaskLoginGroup.ts
       * FileBasenameNoExtension = DailyTaskLoginGroup
       * URL = db://assets/scripts/game/DailyTaskLoginGroup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("DailyTaskLoginGroup", DailyTaskLoginGroup = (_dec = ccclass('DailyTaskLoginGroup'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(_crd && ItemDailyLogin === void 0 ? (_reportPossibleCrUseOfItemDailyLogin({
        error: Error()
      }), ItemDailyLogin) : ItemDailyLogin), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = class DailyTaskLoginGroup extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "btnClaim", _descriptor, this);

          _initializerDefineProperty(this, "btnBonus", _descriptor2, this);

          _initializerDefineProperty(this, "arrDailyLogins", _descriptor3, this);

          _initializerDefineProperty(this, "nodeNotify", _descriptor4, this);
        }

        onEnable() {
          this.btnClaim.node.on(Button.EventType.CLICK, this.touchClaim, this);
          this.btnBonus.node.on(Button.EventType.CLICK, this.touchBonus, this);
          this.showGroup();
        }

        onDisable() {
          this.btnClaim.node.off(Button.EventType.CLICK, this.touchClaim, this);
          this.btnBonus.node.off(Button.EventType.CLICK, this.touchBonus, this);
        }

        showGroup() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrDay() > (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currDailyLoginLastDay) {
            this.btnClaim.node.active = true;
          } else {
            this.btnClaim.node.active = false;
          }

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrDay() > (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currDailyLoginAdLastDay) {
            if (this.btnClaim.node.active) {
              this.btnBonus.node.setPosition(new Vec3(200, -396, 0));
            } else {
              this.btnBonus.node.setPosition(new Vec3(0, -396, 0));
            }

            this.btnBonus.node.active = true;
          } else {
            this.btnBonus.node.active = false;
          }

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrDay() > (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currDailyLoginLastDay) {
            if (this.btnBonus.node.active) {
              this.btnClaim.node.setPosition(new Vec3(-200, -396, 0));
            } else {
              this.btnClaim.node.setPosition(new Vec3(0, -396, 0));
            }
          }

          this.showNotify();
        }

        showNotify() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrDay() > (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currDailyLoginLastDay) {
            this.nodeNotify.active = true;
          } else {
            this.nodeNotify.active = false;
          }
        }

        touchClaim() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("loginclaim", "dailytaskpopup"); // console.log("touchClaim",localConfig.instance.currDailyLoginIndex);

          this.arrDailyLogins[(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currDailyLoginIndex].setClaim();
          this.btnClaim.node.active = false;
          this.showGroup();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILYTASK_NOTIFY_UPDATE);
        }

        touchBonus() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("loginbonus", "dailytaskpopup"); // FBInstantManager.instance.Show_RewardedVideoAsync("dailytaskpopup","loginbonus",(err, success) => {
          //     if (err) {
          //         console.log(err);
          //     }else{
          //         let groupRewardDataInfo:GroupRewardDataInfo = new GroupRewardDataInfo([]);
          //         groupRewardDataInfo.items = [];
          //         groupRewardDataInfo.items.push({itemShopType:SHOP_ITEM_TYPE.COIN,value:200});
          //         localConfig.instance.setDailyLogin_AdReceiveReward();
          //         clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"DAILY LOGIN",groupRewardDataInfo);
          //         this.btnBonus.node.active = false;
          //         this.showGroup();
          //     }
          // });

          (_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
            error: Error()
          }), PokiSDKManager) : PokiSDKManager).instance.Show_RewardedVideoAsync("dailytaskpopup", "loginbonus", (err, success) => {
            if (err) {
              console.log(err);
            } else {
              var groupRewardDataInfo = new (_crd && GroupRewardDataInfo === void 0 ? (_reportPossibleCrUseOfGroupRewardDataInfo({
                error: Error()
              }), GroupRewardDataInfo) : GroupRewardDataInfo)([]);
              groupRewardDataInfo.items = [];
              groupRewardDataInfo.items.push({
                itemShopType: (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
                  error: Error()
                }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).COIN,
                value: 200
              });
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.setDailyLogin_AdReceiveReward();
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_REWARDRECEIVE_POPUP, "DAILY LOGIN", groupRewardDataInfo);
              this.btnBonus.node.active = false;
              this.showGroup();
            }
          });
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnClaim", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnBonus", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "arrDailyLogins", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeNotify", [_dec5], {
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
//# sourceMappingURL=DailyTaskLoginGroup.js.map