System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, instantiate, Label, Node, Prefab, tween, UIOpacity, Vec3, BasePopup, clientEvent, BOOSTER_TYPE, Constants, SHOP_ITEM_TYPE, ItemRewardReceive, AudioManager2, FBInstantManager, localConfig, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _temp, _crd, ccclass, property, RewardChestsPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasePopup(extras) {
    _reporterNs.report("BasePopup", "../common/basePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroupRewardDataInfo(extras) {
    _reporterNs.report("GroupRewardDataInfo", "./info/ShopDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBOOSTER_TYPE(extras) {
    _reporterNs.report("BOOSTER_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHOP_ITEM_TYPE(extras) {
    _reporterNs.report("SHOP_ITEM_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemRewardReceive(extras) {
    _reporterNs.report("ItemRewardReceive", "./ItemRewardReceive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "../framework/audioManager2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "../common/FBInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
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
      Button = _cc.Button;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BasePopup = _unresolved_2.BasePopup;
    }, function (_unresolved_3) {
      clientEvent = _unresolved_3.clientEvent;
    }, function (_unresolved_4) {
      BOOSTER_TYPE = _unresolved_4.BOOSTER_TYPE;
      Constants = _unresolved_4.Constants;
      SHOP_ITEM_TYPE = _unresolved_4.SHOP_ITEM_TYPE;
    }, function (_unresolved_5) {
      ItemRewardReceive = _unresolved_5.ItemRewardReceive;
    }, function (_unresolved_6) {
      AudioManager2 = _unresolved_6.AudioManager2;
    }, function (_unresolved_7) {
      FBInstantManager = _unresolved_7.FBInstantManager;
    }, function (_unresolved_8) {
      localConfig = _unresolved_8.localConfig;
    }, function (_unresolved_9) {
      LogEventManager = _unresolved_9.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "47254z4kMpOs4u2KAKiz7BF", "RewardChestsPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = RewardChestsPopup
       * DateTime = Thu Oct 24 2024 17:58:14 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = RewardChestsPopup.ts
       * FileBasenameNoExtension = RewardChestsPopup
       * URL = db://assets/scripts/game/RewardChestsPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("RewardChestsPopup", RewardChestsPopup = (_dec = ccclass('RewardChestsPopup'), _dec2 = property(Prefab), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Button), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(UIOpacity), _dec9 = property(Node), _dec10 = property(Button), _dec11 = property(Node), _dec12 = property(UIOpacity), _dec(_class = (_class2 = (_temp = class RewardChestsPopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "arrItemRewardReceivePrefabs", _descriptor, this);

          _initializerDefineProperty(this, "txtTitle", _descriptor2, this);

          _initializerDefineProperty(this, "nodeGroupContent", _descriptor3, this);

          _initializerDefineProperty(this, "btnClaim", _descriptor4, this);

          _initializerDefineProperty(this, "txtClaim", _descriptor5, this);

          _initializerDefineProperty(this, "nodeClaim", _descriptor6, this);

          _initializerDefineProperty(this, "nodeClaim_Opacity", _descriptor7, this);

          _initializerDefineProperty(this, "iconAD", _descriptor8, this);

          _initializerDefineProperty(this, "btnNoThanks", _descriptor9, this);

          _initializerDefineProperty(this, "nodeNoThanks", _descriptor10, this);

          _initializerDefineProperty(this, "nodeNoThanks_Opacity", _descriptor11, this);

          _defineProperty(this, "ticketGold_StartPos", new Vec3(0, 0, 0));

          _defineProperty(this, "ticketSilver_StartPos", new Vec3(0, 0, 0));

          _defineProperty(this, "coin_StartPos", new Vec3(0, 0, 0));

          _defineProperty(this, "arrItemRewardReceives", []);

          _defineProperty(this, "groupRewardDataInfo", void 0);

          _defineProperty(this, "indexChest", -1);
        }

        onEnable() {
          super.onEnable();
          this.btnClaim.node.on(Button.EventType.CLICK, this.touchClaim, this);
          this.btnNoThanks.node.on(Button.EventType.CLICK, this.touchNoThanks, this);
        }

        onDisable() {
          super.onDisable();
          this.btnClaim.node.off(Button.EventType.CLICK, this.touchClaim, this);
          this.btnNoThanks.node.off(Button.EventType.CLICK, this.touchNoThanks, this);
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        showRewardChestsPopup(indexChest, _groupRewardDataInfo) {
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playPopupOpen2();
          this.indexChest = indexChest;
          this.groupRewardDataInfo = _groupRewardDataInfo;
          this.nodeGroupContent.destroyAllChildren();
          this.btnClaim.node.active = false;
          this.btnNoThanks.node.active = false;
          this.arrItemRewardReceives = [];
          this.unschedule(this.showButtons_Step1);
          this.unschedule(this.showButtons_Step2);
          super.showPopup();
        }

        showPoup_ShowView_Finished() {
          super.showPoup_ShowView_Finished();
          this.showRewards();
          this.schedule(this.showButtons_Step1, 1, 0, 0.5);
        }

        showRewards() {
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playPopupReward();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).HOME_UPDATE_TARGET_POS);

          for (let i = 0; i < this.groupRewardDataInfo.items.length; i++) {
            let item = instantiate(this.getItemRewardReceivePrefab(this.groupRewardDataInfo.items[i].itemShopType));
            item.parent = this.nodeGroupContent;
            let posX = (i - this.groupRewardDataInfo.items.length / 2 + 0.5) * 350;
            item.setPosition(new Vec3(posX, 0, 0));
            let itemRewardReceive = item.getComponent(_crd && ItemRewardReceive === void 0 ? (_reportPossibleCrUseOfItemRewardReceive({
              error: Error()
            }), ItemRewardReceive) : ItemRewardReceive);
            itemRewardReceive.showItem(this.groupRewardDataInfo.items[i].itemShopType, this.groupRewardDataInfo.items[i].value, 0.3 * i + 0.2);
            this.arrItemRewardReceives.push(itemRewardReceive);

            if (this.groupRewardDataInfo.items[i].itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
              error: Error()
            }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).COIN) {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).UPDATE_COIN_STARTPOS, item.worldPosition);
            } else if (this.groupRewardDataInfo.items[i].itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
              error: Error()
            }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).BOOSTER_UNDO) {} else if (this.groupRewardDataInfo.items[i].itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
              error: Error()
            }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).BOOSTER_SUGGEST) {} else if (this.groupRewardDataInfo.items[i].itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
              error: Error()
            }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).BOOSTER_ADDCOL) {} else if (this.groupRewardDataInfo.items[i].itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
              error: Error()
            }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).HEART_UNLIMITED) {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).UPDATE_HEART_STARTPOS, item.worldPosition);
            }
          }
        }

        showButtons_Step1() {
          if (this.indexChest == 0) {
            this.iconAD.active = false;
            this.txtClaim.string = "Claim";
          } else {
            this.iconAD.active = true;
            this.txtClaim.string = "Claim x2";
            this.schedule(this.showButtons_Step2, 1, 0, 2);
          }

          this.btnClaim.node.active = true;
          this.nodeClaim.setScale(new Vec3(0.5, 0.5, 0.5));
          this.nodeClaim_Opacity.opacity = 150;
          tween(this.nodeClaim).to(0.5, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut',
            onComplete: () => {}
          }).start();
          tween(this.nodeClaim_Opacity).to(0.4, {
            opacity: 255
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
        }

        showButtons_Step2() {
          this.btnNoThanks.node.active = true;
          this.nodeNoThanks.setScale(new Vec3(0.5, 0.5, 0.5));
          this.nodeNoThanks_Opacity.opacity = 150;
          tween(this.nodeNoThanks).to(0.5, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut',
            onComplete: () => {}
          }).start();
          tween(this.nodeNoThanks_Opacity).to(0.4, {
            opacity: 255
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
        }

        getItemRewardReceivePrefab(itemShopType) {
          if (itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).COIN) {
            return this.arrItemRewardReceivePrefabs[0];
          } else if (itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).BOOSTER_UNDO) {
            return this.arrItemRewardReceivePrefabs[1];
          } else if (itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).BOOSTER_SUGGEST) {
            return this.arrItemRewardReceivePrefabs[2];
          } else if (itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).BOOSTER_ADDCOL) {
            return this.arrItemRewardReceivePrefabs[3];
          } else if (itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).HEART_UNLIMITED) {
            return this.arrItemRewardReceivePrefabs[4];
          }
        }

        touchClaim() {
          if (this.indexChest == 0) {
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logButtonClick("claim", "rewardchestpopup");
            this.setClaimRewards(false);
          } else {
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logButtonClick("claimx2", "rewardchestpopup");
            (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
              error: Error()
            }), FBInstantManager) : FBInstantManager).instance.Show_RewardedVideoAsync("rewardchestpopup", "claimx2", (err, success) => {
              if (err) {} else {
                this.setClaimRewards(true);
              }
            });
          }
        }

        setClaimRewards(isX2) {
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playSound_Coin_Appear();

          for (let i = 0; i < this.arrItemRewardReceives.length; i++) {
            this.arrItemRewardReceives[i].hideItem();
          }

          if (isX2) {
            for (let i = 0; i < this.groupRewardDataInfo.items.length; i++) {
              this.groupRewardDataInfo.items[i].value *= 2;
            }
          }

          for (let i = 0; i < this.groupRewardDataInfo.items.length; i++) {
            if (this.groupRewardDataInfo.items[i].itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
              error: Error()
            }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).COIN) {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_ADDCOIN, this.groupRewardDataInfo.items[i].value);
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logResourceEarned("currency", "coin", this.groupRewardDataInfo.items[i].value, "level_chests", "reward");
            } else if (this.groupRewardDataInfo.items[i].itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
              error: Error()
            }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).BOOSTER_UNDO) {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.setBoosterCount((_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
                error: Error()
              }), BOOSTER_TYPE) : BOOSTER_TYPE).UNDO, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getBoosterCount((_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
                error: Error()
              }), BOOSTER_TYPE) : BOOSTER_TYPE).UNDO) + this.groupRewardDataInfo.items[i].value);
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logResourceEarned("booster", "undo", this.groupRewardDataInfo.items[i].value, "level_chests", "reward");
            } else if (this.groupRewardDataInfo.items[i].itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
              error: Error()
            }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).BOOSTER_SUGGEST) {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.setBoosterCount((_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
                error: Error()
              }), BOOSTER_TYPE) : BOOSTER_TYPE).SUGGEST, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getBoosterCount((_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
                error: Error()
              }), BOOSTER_TYPE) : BOOSTER_TYPE).SUGGEST) + this.groupRewardDataInfo.items[i].value);
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logResourceEarned("booster", "shuffle", this.groupRewardDataInfo.items[i].value, "level_chests", "reward");
            } else if (this.groupRewardDataInfo.items[i].itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
              error: Error()
            }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).BOOSTER_ADDCOL) {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.setBoosterCount((_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
                error: Error()
              }), BOOSTER_TYPE) : BOOSTER_TYPE).ADDCOL, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getBoosterCount((_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
                error: Error()
              }), BOOSTER_TYPE) : BOOSTER_TYPE).ADDCOL) + this.groupRewardDataInfo.items[i].value);
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logResourceEarned("booster", "addcol", this.groupRewardDataInfo.items[i].value, "level_chests", "reward");
            } else if (this.groupRewardDataInfo.items[i].itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
              error: Error()
            }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).HEART_UNLIMITED) {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_ADDHEART_UNLIMITED, this.groupRewardDataInfo.items[i].value);
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logResourceEarned("booster", "heart_unlimited", this.groupRewardDataInfo.items[i].value, "level_chests", "reward");
            }
          }

          this.hidePopup();
        }

        hidePopup() {
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playPopupClose();
          this.lockGroup.active = true;
          this.tweenOpacityPopup = tween(this.popup_UIOpacity).to(0.2, {
            opacity: 0
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
          this.tweenOpacityBG = tween(this.bgOpacity).to(0.3, {
            opacity: 0
          }, {
            easing: 'quadOut',
            onComplete: () => {
              this.hidePopup_Finished();
            }
          }).start();
        }

        touchNoThanks() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("nothanks", "rewardchestpopup");
          this.setClaimRewards(false);
          this.hidePopup();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "arrItemRewardReceivePrefabs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtTitle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeGroupContent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnClaim", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txtClaim", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodeClaim", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "nodeClaim_Opacity", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "iconAD", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "btnNoThanks", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "nodeNoThanks", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "nodeNoThanks_Opacity", [_dec12], {
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
//# sourceMappingURL=RewardChestsPopup.js.map