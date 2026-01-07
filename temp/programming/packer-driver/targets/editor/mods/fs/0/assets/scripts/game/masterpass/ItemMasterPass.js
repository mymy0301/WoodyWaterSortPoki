System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, instantiate, Label, Node, Prefab, tween, BOOSTER_TYPE, Constants, SHOP_ITEM_TYPE, SHOP_PACK_TYPE, localConfig, ItemRewardPass, ItemScrollView, clientEvent, AudioManager2, FBInstantManager, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _temp, _crd, ccclass, property, ItemMasterPass;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBOOSTER_TYPE(extras) {
    _reporterNs.report("BOOSTER_TYPE", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHOP_ITEM_TYPE(extras) {
    _reporterNs.report("SHOP_ITEM_TYPE", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHOP_PACK_TYPE(extras) {
    _reporterNs.report("SHOP_PACK_TYPE", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPassRewardDataInfo(extras) {
    _reporterNs.report("PassRewardDataInfo", "../info/ShopDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRewardDataInfo(extras) {
    _reporterNs.report("RewardDataInfo", "../info/ShopDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemRewardPass(extras) {
    _reporterNs.report("ItemRewardPass", "./ItemRewardPass", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemScrollView(extras) {
    _reporterNs.report("ItemScrollView", "../../common/ItemScrollView", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      BOOSTER_TYPE = _unresolved_2.BOOSTER_TYPE;
      Constants = _unresolved_2.Constants;
      SHOP_ITEM_TYPE = _unresolved_2.SHOP_ITEM_TYPE;
      SHOP_PACK_TYPE = _unresolved_2.SHOP_PACK_TYPE;
    }, function (_unresolved_3) {
      localConfig = _unresolved_3.localConfig;
    }, function (_unresolved_4) {
      ItemRewardPass = _unresolved_4.ItemRewardPass;
    }, function (_unresolved_5) {
      ItemScrollView = _unresolved_5.ItemScrollView;
    }, function (_unresolved_6) {
      clientEvent = _unresolved_6.clientEvent;
    }, function (_unresolved_7) {
      AudioManager2 = _unresolved_7.AudioManager2;
    }, function (_unresolved_8) {
      FBInstantManager = _unresolved_8.FBInstantManager;
    }, function (_unresolved_9) {
      LogEventManager = _unresolved_9.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dedecupLSFMjr52IIrkUmyA", "ItemMasterPass", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemMasterPass
       * DateTime = Thu Nov 14 2024 14:28:06 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemMasterPass.ts
       * FileBasenameNoExtension = ItemMasterPass
       * URL = db://assets/scripts/game/masterpass/ItemMasterPass.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemMasterPass", ItemMasterPass = (_dec = ccclass('ItemMasterPass'), _dec2 = property(Prefab), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Button), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Button), _dec13 = property(Node), _dec14 = property(Node), _dec(_class = (_class2 = (_temp = class ItemMasterPass extends (_crd && ItemScrollView === void 0 ? (_reportPossibleCrUseOfItemScrollView({
        error: Error()
      }), ItemScrollView) : ItemScrollView) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "indexPass", 0);

          _defineProperty(this, "passRewardDataInfo", null);

          _initializerDefineProperty(this, "arrItemPrefabs", _descriptor, this);

          _initializerDefineProperty(this, "txtIndexPass", _descriptor2, this);

          _initializerDefineProperty(this, "passProgress", _descriptor3, this);

          _initializerDefineProperty(this, "nodeItemFree", _descriptor4, this);

          _initializerDefineProperty(this, "nodeItemFreeRecive", _descriptor5, this);

          _initializerDefineProperty(this, "btnFree", _descriptor6, this);

          _initializerDefineProperty(this, "nodeClaimFree", _descriptor7, this);

          _initializerDefineProperty(this, "nodeLockFree", _descriptor8, this);

          _initializerDefineProperty(this, "nodeItemPass", _descriptor9, this);

          _initializerDefineProperty(this, "nodeItemPassRecive", _descriptor10, this);

          _initializerDefineProperty(this, "btnPass", _descriptor11, this);

          _initializerDefineProperty(this, "nodeClaimPass", _descriptor12, this);

          _initializerDefineProperty(this, "nodeLockPass", _descriptor13, this);

          _defineProperty(this, "tweenLock", null);
        }

        onEnable() {
          this.btnFree.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchFree, this);
          this.btnPass.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchPass, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PASS_ACTIVATED_UPDATE, this.setPassActivated, this);
        }

        onDisable() {
          this.btnFree.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchFree, this);
          this.btnPass.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchPass, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PASS_ACTIVATED_UPDATE, this.setPassActivated, this);
        }

        init(_indexPass) {
          // console.log(_indexPass);
          super.init(_indexPass, 0);
          this.indexPass = _indexPass;
          this.nodeItemFree.removeAllChildren();
          this.nodeItemPass.removeAllChildren();
          this.nodeItemFreeRecive.removeAllChildren();
          this.nodeItemPassRecive.removeAllChildren();
          this.passRewardDataInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.arrPassRewardDataInfos[this.indexPass]; // console.log(this.passRewardDataInfo);

          let itemFree = instantiate(this.getItemPrefabbyShopItemType(this.passRewardDataInfo.items[0].itemShopType));
          itemFree.parent = this.nodeItemFree;
          let itemFreeReward = itemFree.getComponent(_crd && ItemRewardPass === void 0 ? (_reportPossibleCrUseOfItemRewardPass({
            error: Error()
          }), ItemRewardPass) : ItemRewardPass);
          itemFreeReward.initRewardPass(this.passRewardDataInfo.items[0].itemShopType, false, this.passRewardDataInfo.items[0].value);
          let itemPass = instantiate(this.getItemPrefabbyShopItemType(this.passRewardDataInfo.itemsPass[0].itemShopType));
          itemPass.parent = this.nodeItemPass;
          let itemPassReward = itemPass.getComponent(_crd && ItemRewardPass === void 0 ? (_reportPossibleCrUseOfItemRewardPass({
            error: Error()
          }), ItemRewardPass) : ItemRewardPass);
          itemPassReward.initRewardPass(this.passRewardDataInfo.itemsPass[0].itemShopType, false, this.passRewardDataInfo.itemsPass[0].value);
          this.txtIndexPass.string = `${this.indexPass}`;
          this.btnFree.interactable = true;
          this.btnPass.interactable = true;
          this.passProgress.active = false;
          this.nodeLockFree.active = false;
          this.nodeLockPass.active = true;
          this.nodeClaimFree.active = false;
          this.nodeClaimPass.active = false; // console.log(this.indexPass);
          // console.log(localConfig.instance.passIndexAvailable);
          // console.log(localConfig.instance.arrPassFreeClaims);

          if (this.indexPass <= (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.passIndexAvailable) {
            this.passProgress.active = true;

            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrPassFreeClaims.indexOf(this.indexPass) == -1) {
              this.nodeClaimFree.active = true;
            } else {
              this.nodeClaimFree.active = false;
              this.btnFree.interactable = false;
            }

            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.passActivated) {
              this.nodeLockPass.active = false;

              if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrPassMasterClaims.indexOf(this.indexPass) == -1) {
                this.nodeClaimPass.active = true;
              } else {
                this.nodeClaimPass.active = false;
                this.btnPass.interactable = false;
              }
            }
          } else {
            this.passProgress.active = false;
            this.nodeLockFree.active = true;
            this.nodeLockPass.active = true;
          }
        }

        setPassActivated() {
          if (this.indexPass <= (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.passIndexAvailable) {
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.passActivated) {
              this.nodeLockPass.active = false;

              if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrPassMasterClaims.indexOf(this.indexPass) == -1) {
                this.nodeClaimPass.active = true;
              } else {
                this.nodeClaimPass.active = false;
                this.btnPass.interactable = false;
              }
            }
          }
        }

        getItemPrefabbyShopItemType(shopItemType) {
          if (shopItemType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).COIN) {
            return this.arrItemPrefabs[0];
          } else if (shopItemType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).BOOSTER_UNDO) {
            return this.arrItemPrefabs[1];
          } else if (shopItemType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).BOOSTER_SUGGEST) {
            return this.arrItemPrefabs[2];
          } else if (shopItemType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).BOOSTER_ADDCOL) {
            return this.arrItemPrefabs[3];
          } else if (shopItemType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).HEART_UNLIMITED) {
            return this.arrItemPrefabs[4];
          }
        }

        touchFree() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("free", "masterpasspopup"); // console.log("touchFree");

          if (this.indexPass <= (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.passIndexAvailable) {
            this.nodeClaimFree.active = false;
            this.btnFree.interactable = false;
            this.setReciveReward(false, this.passRewardDataInfo.items);
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.addPassFreeClaim(this.indexPass);
          } else {
            this.showAnimLock(this.nodeLockFree);

            if (this.indexPass <= (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.passIndexAvailable) {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_MASSTERPASS_ACTIVATE_POPUP);
            }
          }
        }

        touchPass() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("pass", "masterpasspopup"); // console.log("touchPass");

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.passActivated) {
            if (this.indexPass <= (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.passIndexAvailable) {
              this.nodeClaimPass.active = false;
              this.btnPass.interactable = false;
              this.setReciveReward(true, this.passRewardDataInfo.itemsPass);
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.addPassMasterClaim(this.indexPass);
            } else {
              this.showAnimLock(this.nodeLockPass);
            }
          } else {
            if ((_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
              error: Error()
            }), FBInstantManager) : FBInstantManager).instance.checkHaveIAPPack_byProductID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType((_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
              error: Error()
            }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).MASTER_PASS))) {
              if (this.indexPass <= (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.passIndexAvailable) {
                (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                  error: Error()
                }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).SHOW_MASSTERPASS_ACTIVATE_POPUP);
              } else {
                this.showAnimLock(this.nodeLockPass);
              }
            } else {
              this.showAnimLock(this.nodeLockPass);
            }
          }
        }

        showAnimLock(nodeLock) {
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playNotification();
          nodeLock.angle = 0;

          if (this.tweenLock) {
            this.tweenLock.stop();
          }

          this.tweenLock = tween(nodeLock).to(0.025, {
            angle: 20
          }).to(0.05, {
            angle: -20
          }).to(0.05, {
            angle: 20
          }).to(0.05, {
            angle: -20
          }).to(0.05, {
            angle: 20
          }).to(0.05, {
            angle: 0
          }).union().start();
        }

        setReciveReward(isPass, items) {
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playGetReward();

          for (let i = 0; i < items.length; i++) {
            this.showItemRewardClaimed(isPass, items[i]);

            if (items[i].itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
              error: Error()
            }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).COIN) {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.setCoin((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currCoin + items[i].value);
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logResourceEarned("currency", "coin", items[i].value, "masterpass", "reward");
            } else if (items[i].itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
              error: Error()
            }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).HEART_UNLIMITED) {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).HEART_UNLIMITED_UPDATE, items[i].value);
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logResourceEarned("booster", "heart_unlimited", items[i].value, "masterpass", "reward");
            } else if (items[i].itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
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
              }), BOOSTER_TYPE) : BOOSTER_TYPE).UNDO) + items[i].value);
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logResourceEarned("booster", "undo", items[i].value, "masterpass", "reward");
            } else if (items[i].itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
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
              }), BOOSTER_TYPE) : BOOSTER_TYPE).SUGGEST) + items[i].value);
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logResourceEarned("booster", "shuffle", items[i].value, "masterpass", "reward");
            } else if (items[i].itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
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
              }), BOOSTER_TYPE) : BOOSTER_TYPE).ADDCOL) + items[i].value);
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logResourceEarned("booster", "addcol", items[i].value, "masterpass", "reward");
            }
          }
        }

        showItemRewardClaimed(isPass, rewardDataInfo) {
          let item = instantiate(this.getItemPrefabbyShopItemType(rewardDataInfo.itemShopType));

          if (isPass) {
            item.parent = this.nodeItemPassRecive;
          } else {
            item.parent = this.nodeItemFreeRecive;
          }

          let itemRewardPass = item.getComponent(_crd && ItemRewardPass === void 0 ? (_reportPossibleCrUseOfItemRewardPass({
            error: Error()
          }), ItemRewardPass) : ItemRewardPass);
          itemRewardPass.initRewardPassRecive(rewardDataInfo.value);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "arrItemPrefabs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtIndexPass", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "passProgress", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeItemFree", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeItemFreeRecive", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnFree", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "nodeClaimFree", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "nodeLockFree", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nodeItemPass", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "nodeItemPassRecive", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "btnPass", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "nodeClaimPass", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "nodeLockPass", [_dec14], {
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
//# sourceMappingURL=ItemMasterPass.js.map