System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, instantiate, Label, Node, Prefab, sp, tween, UIOpacity, Vec3, BasePopup, BOOSTER_TYPE, BOX_STATE, BOX_TYPE, Constants, SHOP_ITEM_TYPE, ItemRewardReceive, AudioManager2, clientEvent, localConfig, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, BoxRewardReceivePopup;

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

  function _reportPossibleCrUseOfBOOSTER_TYPE(extras) {
    _reporterNs.report("BOOSTER_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBOX_STATE(extras) {
    _reporterNs.report("BOX_STATE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBOX_TYPE(extras) {
    _reporterNs.report("BOX_TYPE", "../framework/constants", _context.meta, extras);
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

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
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
      sp = _cc.sp;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BasePopup = _unresolved_2.BasePopup;
    }, function (_unresolved_3) {
      BOOSTER_TYPE = _unresolved_3.BOOSTER_TYPE;
      BOX_STATE = _unresolved_3.BOX_STATE;
      BOX_TYPE = _unresolved_3.BOX_TYPE;
      Constants = _unresolved_3.Constants;
      SHOP_ITEM_TYPE = _unresolved_3.SHOP_ITEM_TYPE;
    }, function (_unresolved_4) {
      ItemRewardReceive = _unresolved_4.ItemRewardReceive;
    }, function (_unresolved_5) {
      AudioManager2 = _unresolved_5.AudioManager2;
    }, function (_unresolved_6) {
      clientEvent = _unresolved_6.clientEvent;
    }, function (_unresolved_7) {
      localConfig = _unresolved_7.localConfig;
    }, function (_unresolved_8) {
      LogEventManager = _unresolved_8.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "28133HGLJ1MkrpPnqO13b1i", "BoxRewardReceivePopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = BoxRewardReceivePopup
       * DateTime = Tue Oct 08 2024 14:24:48 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = BoxRewardReceivePopup.ts
       * FileBasenameNoExtension = BoxRewardReceivePopup
       * URL = db://assets/scripts/game/BoxRewardReceivePopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("BoxRewardReceivePopup", BoxRewardReceivePopup = (_dec = ccclass('BoxRewardReceivePopup'), _dec2 = property(Prefab), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(sp.Skeleton), _dec6 = property(Button), _dec7 = property(Node), _dec8 = property(UIOpacity), _dec(_class = (_class2 = (_temp = class BoxRewardReceivePopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "arrItemRewardReceivePrefabs", _descriptor, this);

          _initializerDefineProperty(this, "txtTitle", _descriptor2, this);

          _initializerDefineProperty(this, "nodeGroupContent", _descriptor3, this);

          _initializerDefineProperty(this, "chestBox", _descriptor4, this);

          _initializerDefineProperty(this, "btnClaim", _descriptor5, this);

          _initializerDefineProperty(this, "nodeClaim", _descriptor6, this);

          _initializerDefineProperty(this, "nodeClaim_Opacity", _descriptor7, this);

          _defineProperty(this, "ticketGold_StartPos", new Vec3(0, 0, 0));

          _defineProperty(this, "ticketSilver_StartPos", new Vec3(0, 0, 0));

          _defineProperty(this, "coin_StartPos", new Vec3(0, 0, 0));

          _defineProperty(this, "boxType", (_crd && BOX_TYPE === void 0 ? (_reportPossibleCrUseOfBOX_TYPE({
            error: Error()
          }), BOX_TYPE) : BOX_TYPE).NONE);

          _defineProperty(this, "groupRewardDataInfo", void 0);
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        onEnable() {
          super.onEnable();
          this.btnClaim.node.on(Button.EventType.CLICK, this.touchClaim, this);
        }

        onDisable() {
          super.onDisable();
          this.btnClaim.node.off(Button.EventType.CLICK, this.touchClaim, this);
        }

        showDailyChallenge_BoxRewardReceivePopup(_boxType, _groupRewardDataInfo) {
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playPopupOpen2();
          this.txtTitle.string = "DAIILY CHALLENGE";
          this.nodeGroupContent.destroyAllChildren();
          this.boxType = _boxType;
          this.groupRewardDataInfo = _groupRewardDataInfo;
          let strAnimReady = this.getAnimationName_byState((_crd && BOX_STATE === void 0 ? (_reportPossibleCrUseOfBOX_STATE({
            error: Error()
          }), BOX_STATE) : BOX_STATE).READY);
          this.chestBox.setAnimation(0, strAnimReady, true);
          this.btnClaim.node.active = false;
          super.showPopup();
        }

        showPoup_ShowView_Finished() {
          super.showPoup_ShowView_Finished();
          this.setBoxReward_Open();
        }

        hidePopup() {
          this.hidePopup_Finished();
        }

        setBoxReward_Open() {
          let strAnimOpen = this.getAnimationName_byState((_crd && BOX_STATE === void 0 ? (_reportPossibleCrUseOfBOX_STATE({
            error: Error()
          }), BOX_STATE) : BOX_STATE).OPENING);
          this.chestBox.setAnimation(0, strAnimOpen, false);
          this.scheduleOnce(() => {
            (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager2) : AudioManager2).instance.playSound_Chest_Open();
          }, 0.2);
          this.scheduleOnce(() => {
            this.setBoxReward_Opened();
          }, 1.5);
          this.scheduleOnce(() => {
            this.showRewards();
          }, 1);
        }

        setBoxReward_Opened() {
          let strAnimOpened = this.getAnimationName_byState((_crd && BOX_STATE === void 0 ? (_reportPossibleCrUseOfBOX_STATE({
            error: Error()
          }), BOX_STATE) : BOX_STATE).OPENED);
          this.chestBox.setAnimation(0, strAnimOpened, true);
          this.btnClaim.node.active = true;
          this.nodeClaim.setScale(new Vec3(0.8, 0.8, 0.8));
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

        getAnimationName_byState(state) {
          let strAnim = "box";

          if (state == (_crd && BOX_STATE === void 0 ? (_reportPossibleCrUseOfBOX_STATE({
            error: Error()
          }), BOX_STATE) : BOX_STATE).READY) {
            strAnim = "idle_box";

            if (this.boxType == (_crd && BOX_TYPE === void 0 ? (_reportPossibleCrUseOfBOX_TYPE({
              error: Error()
            }), BOX_TYPE) : BOX_TYPE).BOX_1) {
              strAnim += "2";
            } else if (this.boxType == (_crd && BOX_TYPE === void 0 ? (_reportPossibleCrUseOfBOX_TYPE({
              error: Error()
            }), BOX_TYPE) : BOX_TYPE).BOX_2) {
              strAnim += "3";
            } else if (this.boxType == (_crd && BOX_TYPE === void 0 ? (_reportPossibleCrUseOfBOX_TYPE({
              error: Error()
            }), BOX_TYPE) : BOX_TYPE).BOX_3) {
              strAnim += "4";
            } else if (this.boxType == (_crd && BOX_TYPE === void 0 ? (_reportPossibleCrUseOfBOX_TYPE({
              error: Error()
            }), BOX_TYPE) : BOX_TYPE).BOX_4) {
              strAnim += "5";
            }
          } else if (state == (_crd && BOX_STATE === void 0 ? (_reportPossibleCrUseOfBOX_STATE({
            error: Error()
          }), BOX_STATE) : BOX_STATE).OPENING) {
            if (this.boxType == (_crd && BOX_TYPE === void 0 ? (_reportPossibleCrUseOfBOX_TYPE({
              error: Error()
            }), BOX_TYPE) : BOX_TYPE).BOX_1) {
              strAnim += "2";
            } else if (this.boxType == (_crd && BOX_TYPE === void 0 ? (_reportPossibleCrUseOfBOX_TYPE({
              error: Error()
            }), BOX_TYPE) : BOX_TYPE).BOX_2) {
              strAnim += "3";
            } else if (this.boxType == (_crd && BOX_TYPE === void 0 ? (_reportPossibleCrUseOfBOX_TYPE({
              error: Error()
            }), BOX_TYPE) : BOX_TYPE).BOX_3) {
              strAnim += "4";
            } else if (this.boxType == (_crd && BOX_TYPE === void 0 ? (_reportPossibleCrUseOfBOX_TYPE({
              error: Error()
            }), BOX_TYPE) : BOX_TYPE).BOX_4) {
              strAnim += "5";
            }
          } else if (state == (_crd && BOX_STATE === void 0 ? (_reportPossibleCrUseOfBOX_STATE({
            error: Error()
          }), BOX_STATE) : BOX_STATE).OPENED) {
            if (this.boxType == (_crd && BOX_TYPE === void 0 ? (_reportPossibleCrUseOfBOX_TYPE({
              error: Error()
            }), BOX_TYPE) : BOX_TYPE).BOX_1) {
              strAnim += "2_2";
            } else if (this.boxType == (_crd && BOX_TYPE === void 0 ? (_reportPossibleCrUseOfBOX_TYPE({
              error: Error()
            }), BOX_TYPE) : BOX_TYPE).BOX_2) {
              strAnim += "3_2";
            } else if (this.boxType == (_crd && BOX_TYPE === void 0 ? (_reportPossibleCrUseOfBOX_TYPE({
              error: Error()
            }), BOX_TYPE) : BOX_TYPE).BOX_3) {
              strAnim += "4_2";
            } else if (this.boxType == (_crd && BOX_TYPE === void 0 ? (_reportPossibleCrUseOfBOX_TYPE({
              error: Error()
            }), BOX_TYPE) : BOX_TYPE).BOX_4) {
              strAnim += "5_2";
            }
          }

          console.log(strAnim);
          return strAnim;
        }

        showRewards() {
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
            itemRewardReceive.showItem(this.groupRewardDataInfo.items[i].itemShopType, this.groupRewardDataInfo.items[i].value, 0.1 * i);

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
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("claim", "boxrewardreceivepopup");
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playSound_Coin_Appear();

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
              }), LogEventManager) : LogEventManager).instance.logResourceEarned("currency", "coin", this.groupRewardDataInfo.items[i].value, "daily_challenge", "reward");
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
              }), LogEventManager) : LogEventManager).instance.logResourceEarned("booster", "undo", this.groupRewardDataInfo.items[i].value, "daily_challenge", "reward");
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
              }), LogEventManager) : LogEventManager).instance.logResourceEarned("booster", "shuffle", this.groupRewardDataInfo.items[i].value, "daily_challenge", "reward");
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
              }), LogEventManager) : LogEventManager).instance.logResourceEarned("booster", "addcol", this.groupRewardDataInfo.items[i].value, "daily_challenge", "reward");
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
              }), LogEventManager) : LogEventManager).instance.logResourceEarned("booster", "heart_unlimited", this.groupRewardDataInfo.items[i].value, "daily_challenge", "reward");
            }
          }

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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "chestBox", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnClaim", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
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
//# sourceMappingURL=BoxRewardReceivePopup.js.map