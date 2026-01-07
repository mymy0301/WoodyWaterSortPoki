System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Component, Enum, Label, Node, BOOSTER_TYPE, Constants, ENV_TYPE, IAP_PLACEMENT_TYPE, IAP_SHOW_TYPE, SHOP_ITEM_TYPE, SHOP_PACK_TYPE, FBInstantManager, localConfig, clientEvent, AudioManager2, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, ItemShopPack;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBOOSTER_TYPE(extras) {
    _reporterNs.report("BOOSTER_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENV_TYPE(extras) {
    _reporterNs.report("ENV_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAP_PLACEMENT_TYPE(extras) {
    _reporterNs.report("IAP_PLACEMENT_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAP_SHOW_TYPE(extras) {
    _reporterNs.report("IAP_SHOW_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHOP_ITEM_TYPE(extras) {
    _reporterNs.report("SHOP_ITEM_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHOP_PACK_TYPE(extras) {
    _reporterNs.report("SHOP_PACK_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRewardDataInfo(extras) {
    _reporterNs.report("RewardDataInfo", "./info/ShopDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopDataInfo(extras) {
    _reporterNs.report("ShopDataInfo", "./info/ShopDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "../common/FBInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "../framework/audioManager2", _context.meta, extras);
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
      Component = _cc.Component;
      Enum = _cc.Enum;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BOOSTER_TYPE = _unresolved_2.BOOSTER_TYPE;
      Constants = _unresolved_2.Constants;
      ENV_TYPE = _unresolved_2.ENV_TYPE;
      IAP_PLACEMENT_TYPE = _unresolved_2.IAP_PLACEMENT_TYPE;
      IAP_SHOW_TYPE = _unresolved_2.IAP_SHOW_TYPE;
      SHOP_ITEM_TYPE = _unresolved_2.SHOP_ITEM_TYPE;
      SHOP_PACK_TYPE = _unresolved_2.SHOP_PACK_TYPE;
    }, function (_unresolved_3) {
      FBInstantManager = _unresolved_3.FBInstantManager;
    }, function (_unresolved_4) {
      localConfig = _unresolved_4.localConfig;
    }, function (_unresolved_5) {
      clientEvent = _unresolved_5.clientEvent;
    }, function (_unresolved_6) {
      AudioManager2 = _unresolved_6.AudioManager2;
    }, function (_unresolved_7) {
      LogEventManager = _unresolved_7.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ad873bF0mlDD7qHakCFdy+q", "ItemShopPack", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemShopPack
       * DateTime = Mon Sep 16 2024 16:52:26 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemShopPack.ts
       * FileBasenameNoExtension = ItemShopPack
       * URL = db://assets/scripts/game/ItemShopPack.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemShopPack", ItemShopPack = (_dec = ccclass('ItemShopPack'), _dec2 = property({
        type: Enum(_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
          error: Error()
        }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE)
      }), _dec3 = property({
        type: Enum(_crd && IAP_PLACEMENT_TYPE === void 0 ? (_reportPossibleCrUseOfIAP_PLACEMENT_TYPE({
          error: Error()
        }), IAP_PLACEMENT_TYPE) : IAP_PLACEMENT_TYPE)
      }), _dec4 = property({
        type: Enum(_crd && IAP_SHOW_TYPE === void 0 ? (_reportPossibleCrUseOfIAP_SHOW_TYPE({
          error: Error()
        }), IAP_SHOW_TYPE) : IAP_SHOW_TYPE)
      }), _dec5 = property(Button), _dec6 = property(Label), _dec7 = property(Node), _dec(_class = (_class2 = (_temp = class ItemShopPack extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "shopPackType", _descriptor, this);

          _initializerDefineProperty(this, "iapPlacementType", _descriptor2, this);

          _initializerDefineProperty(this, "iapShowType", _descriptor3, this);

          _initializerDefineProperty(this, "btnBuy", _descriptor4, this);

          _initializerDefineProperty(this, "txtPrice", _descriptor5, this);

          _initializerDefineProperty(this, "arrStartPos", _descriptor6, this);

          _defineProperty(this, "shopDataInfo", null);
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).STARTER_PACK_UPDATE, this.showActive, this);
          this.btnBuy.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchBuy, this);
          this.shopDataInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getItemShopDataInfo_byPackID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType(this.shopPackType));
          this.showActive();
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).STARTER_PACK_UPDATE, this.showActive, this);
          this.btnBuy.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchBuy, this);
        }

        start() {// [3]
        }

        showActive() {
          if ((_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.checkHaveIAPPack_byProductID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType(this.shopPackType))) {
            // console.log("AAAAAAAAAAAAAA");
            this.node.active = true;
            this.txtPrice.string = `${this.shopDataInfo.price}`;

            if (this.shopPackType == (_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
              error: Error()
            }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).STARTER_PACK) {
              if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.isIAPStarterPack) {
                this.node.active = false;
              }
            }
          } else {
            // console.log("BBBBBBBBBBBBBBBBBB");
            this.node.active = false;
          }
        }

        touchBuy() {
          // let placement:string = "home_shop";
          // if(localConfig.instance.currSceneType == SCENE_TYPE.GAME){
          //     placement = "ingame_booster";
          // }
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("buy", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType(this.shopPackType));
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logIAPClick((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_PlacementType(this.iapPlacementType), (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_ShowType(this.iapShowType), (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType(this.shopPackType));
          let self = this;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).TEST_AD) {
            let packID = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType(this.shopPackType);
            const valueIAP = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getValuePriceIAPPack_byProductID(packID);
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logEventIAP("" + packID, packID, valueIAP);
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logIAPPurchase((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getIAP_PlacementType(this.iapPlacementType), (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getIAP_ShowType(this.iapShowType), (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType(this.shopPackType), valueIAP, "USD");
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
              }), FBInstantManager) : FBInstantManager).instance.buyIAP_consumePackID(packID, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getIAP_PlacementType(this.iapPlacementType), (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getIAP_ShowType(this.iapShowType), (err, success) => {
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
                }), FBInstantManager) : FBInstantManager).instance.buyIAP_consumePackID(packID, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.getIAP_PlacementType(this.iapPlacementType), (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.getIAP_ShowType(this.iapShowType), (err, success) => {
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
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playSound_Coin_Appear();
          (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.SetNextTime_ShowInterstitialAd();
          let shopDataInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getItemShopDataInfo_byPackID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType(this.shopPackType));

          for (let i = 0; i < shopDataInfo.items.length; i++) {
            let itemShopDataInfo = shopDataInfo.items[i]; // if(itemShopDataInfo.itemShopType == SHOP_ITEM_TYPE.TICKET_GOLD){
            //     clientEvent.dispatchEvent(Constants.UPDATE_TICKET_STARTPOS,TICKET_TYPE.GOLD,this.arrStartPos[i].worldPosition);
            //     clientEvent.dispatchEvent(Constants.SHOW_ADDTICKET,TICKET_TYPE.GOLD,shopDataInfo.items[i].value);
            // }else if(itemShopDataInfo.itemShopType == SHOP_ITEM_TYPE.TICKET_SILVER){
            //     clientEvent.dispatchEvent(Constants.UPDATE_TICKET_STARTPOS,TICKET_TYPE.SILVER,this.arrStartPos[i].worldPosition);
            //     clientEvent.dispatchEvent(Constants.SHOW_ADDTICKET,TICKET_TYPE.SILVER,shopDataInfo.items[i].value);
            // }else 

            if (itemShopDataInfo.itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
              error: Error()
            }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).COIN) {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).UPDATE_COIN_STARTPOS, this.arrStartPos[0].worldPosition);
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_ADDCOIN, shopDataInfo.items[i].value);
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logResourceEarned("currency", "coin", shopDataInfo.items[i].value, "shop", "purchase");
            } else if (itemShopDataInfo.itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
              error: Error()
            }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).HEART_UNLIMITED) {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).UPDATE_HEART_STARTPOS, this.arrStartPos[1].worldPosition);
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_ADDHEART_UNLIMITED, shopDataInfo.items[i].value);
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logResourceEarned("booster", "heart_unlimited", shopDataInfo.items[i].value, "shop", "purchase");
            } else if (itemShopDataInfo.itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
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
              }), BOOSTER_TYPE) : BOOSTER_TYPE).UNDO) + shopDataInfo.items[i].value);
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logResourceEarned("booster", "undo", shopDataInfo.items[i].value, "shop", "purchase");
            } else if (itemShopDataInfo.itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
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
              }), BOOSTER_TYPE) : BOOSTER_TYPE).SUGGEST) + shopDataInfo.items[i].value);
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logResourceEarned("booster", "shuffle", shopDataInfo.items[i].value, "shop", "purchase");
            } else if (itemShopDataInfo.itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
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
              }), BOOSTER_TYPE) : BOOSTER_TYPE).ADDCOL) + shopDataInfo.items[i].value);
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logResourceEarned("booster", "addcol", shopDataInfo.items[i].value, "shop", "purchase");
            } else if (itemShopDataInfo.itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
              error: Error()
            }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).REMOVE_AD) {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.setData_RemoveAd();
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).BUY_REMOVEAD_SUCCESS);
            }
          }

          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOP_PACK_UPDATE, this.shopPackType);

          if (this.shopPackType == (_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).REMOVE_AD) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setData_RemoveAd();
          } else if (this.shopPackType == (_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).REMOVE_AD_PACK) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setData_RemoveAd();
          } else if (this.shopPackType == (_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).STARTER_PACK) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setData_IAPStarterPack();
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "shopPackType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).TICKET_GOLD_10;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iapPlacementType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && IAP_PLACEMENT_TYPE === void 0 ? (_reportPossibleCrUseOfIAP_PLACEMENT_TYPE({
            error: Error()
          }), IAP_PLACEMENT_TYPE) : IAP_PLACEMENT_TYPE).HOME_SHOP;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iapShowType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && IAP_SHOW_TYPE === void 0 ? (_reportPossibleCrUseOfIAP_SHOW_TYPE({
            error: Error()
          }), IAP_SHOW_TYPE) : IAP_SHOW_TYPE).SHOP;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnBuy", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txtPrice", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "arrStartPos", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
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
//# sourceMappingURL=ItemShopPack.js.map