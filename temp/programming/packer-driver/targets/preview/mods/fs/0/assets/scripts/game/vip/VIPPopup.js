System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Enum, Label, Node, BasePopup, Constants, ENV_TYPE, SHOP_ITEM_TYPE, SHOP_PACK_TYPE, TICKET_TYPE, localConfig, FBInstantManager, clientEvent, AudioManager2, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, VIPPopup;

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

  function _reportPossibleCrUseOfSHOP_ITEM_TYPE(extras) {
    _reporterNs.report("SHOP_ITEM_TYPE", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHOP_PACK_TYPE(extras) {
    _reporterNs.report("SHOP_PACK_TYPE", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTICKET_TYPE(extras) {
    _reporterNs.report("TICKET_TYPE", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRewardDataInfo(extras) {
    _reporterNs.report("RewardDataInfo", "../info/ShopDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopDataInfo(extras) {
    _reporterNs.report("ShopDataInfo", "../info/ShopDataInfo", _context.meta, extras);
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

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "../../framework/audioManager2", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Enum = _cc.Enum;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BasePopup = _unresolved_2.BasePopup;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
      ENV_TYPE = _unresolved_3.ENV_TYPE;
      SHOP_ITEM_TYPE = _unresolved_3.SHOP_ITEM_TYPE;
      SHOP_PACK_TYPE = _unresolved_3.SHOP_PACK_TYPE;
      TICKET_TYPE = _unresolved_3.TICKET_TYPE;
    }, function (_unresolved_4) {
      localConfig = _unresolved_4.localConfig;
    }, function (_unresolved_5) {
      FBInstantManager = _unresolved_5.FBInstantManager;
    }, function (_unresolved_6) {
      clientEvent = _unresolved_6.clientEvent;
    }, function (_unresolved_7) {
      AudioManager2 = _unresolved_7.AudioManager2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6f4d3P5DHFNM5TDmbYZKmET", "VIPPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = VIPPopup
       * DateTime = Thu Dec 05 2024 15:29:20 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = VIPPopup.ts
       * FileBasenameNoExtension = VIPPopup
       * URL = db://assets/scripts/game/vip/VIPPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("VIPPopup", VIPPopup = (_dec = ccclass('VIPPopup'), _dec2 = property({
        type: Enum(_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
          error: Error()
        }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE)
      }), _dec3 = property(Button), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec(_class = (_class2 = (_temp = class VIPPopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "shopPackType", _descriptor, this);

          _initializerDefineProperty(this, "btnBuy", _descriptor2, this);

          _initializerDefineProperty(this, "txtPrice", _descriptor3, this);

          _initializerDefineProperty(this, "txtTitle", _descriptor4, this);

          _initializerDefineProperty(this, "txtBonus", _descriptor5, this);

          _initializerDefineProperty(this, "arrStartPos", _descriptor6, this);

          _defineProperty(this, "shopDataInfo", null);
        }

        onEnable() {
          super.onEnable();
          this.btnBuy.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchBuy, this);
          this.shopDataInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getItemShopDataInfo_byPackID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType(this.shopPackType));
          this.showInfo();
        }

        onDisable() {
          super.onDisable();
          this.btnBuy.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchBuy, this);
        }

        showInfo() {
          this.txtPrice.string = "" + this.shopDataInfo.price;
        }

        touchBuy() {
          var self = this;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).TEST_AD) {
            this.buyIAP_Success();
            return;
          }

          var packID = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
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
              var purchaseToken = (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
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
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playSound_Coin_Appear();
          (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.SetNextTime_ShowInterstitialAd();
          var shopDataInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getItemShopDataInfo_byPackID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType(this.shopPackType));

          for (var i = 0; i < shopDataInfo.items.length; i++) {
            var itemShopDataInfo = shopDataInfo.items[i];

            if (itemShopDataInfo.itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
              error: Error()
            }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).TICKET_GOLD) {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).UPDATE_TICKET_STARTPOS, (_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
                error: Error()
              }), TICKET_TYPE) : TICKET_TYPE).GOLD, this.arrStartPos[i].worldPosition);
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_ADDTICKET, (_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
                error: Error()
              }), TICKET_TYPE) : TICKET_TYPE).GOLD, shopDataInfo.items[i].value);
            } else if (itemShopDataInfo.itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
              error: Error()
            }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).TICKET_SILVER) {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).UPDATE_TICKET_STARTPOS, (_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
                error: Error()
              }), TICKET_TYPE) : TICKET_TYPE).SILVER, this.arrStartPos[i].worldPosition);
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_ADDTICKET, (_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
                error: Error()
              }), TICKET_TYPE) : TICKET_TYPE).SILVER, shopDataInfo.items[i].value);
            } else if (itemShopDataInfo.itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
              error: Error()
            }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).COIN) {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).UPDATE_COIN_STARTPOS, this.arrStartPos[i].worldPosition);
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_ADDCOIN, shopDataInfo.items[i].value, this.arrStartPos[i].worldPosition);
            }
          }

          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.setVIPType(this.shopPackType);

          if (this.shopPackType == (_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).VIP_3) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_REWARDRECEIVE_POPUP, "3-DAY VIP PASS", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.vipDailyRewards);
          } else if (this.shopPackType == (_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).VIP_7) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_REWARDRECEIVE_POPUP, "7-DAY VIP PASS", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.vipDailyRewards);
          } else if (this.shopPackType == (_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).VIP_30) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_REWARDRECEIVE_POPUP, "30-DAY VIP PASS", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.vipDailyRewards);
          }

          this.hidePopup_Finished();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "shopPackType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).VIP_3;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnBuy", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txtPrice", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txtTitle", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txtBonus", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "arrStartPos", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
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
//# sourceMappingURL=VIPPopup.js.map