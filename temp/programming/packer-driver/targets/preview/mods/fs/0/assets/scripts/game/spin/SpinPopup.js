System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, AnimationComponent, Button, instantiate, Label, Node, Prefab, tween, Vec3, BasePopup, ItemSpin, Constants, SHOP_ITEM_TYPE, localConfig, lodash, clientEvent, AudioManager2, Utils, GroupRewardDataInfo, LogEventManager, PokiSDKManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _temp, _crd, ccclass, property, SpinPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasePopup(extras) {
    _reporterNs.report("BasePopup", "../../common/basePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemSpin(extras) {
    _reporterNs.report("ItemSpin", "./ItemSpin", _context.meta, extras);
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

  function _reportPossibleCrUseOflodash(extras) {
    _reporterNs.report("lodash", "../../framework/lodash", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "../../framework/audioManager2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../core/utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroupRewardDataInfo(extras) {
    _reporterNs.report("GroupRewardDataInfo", "../info/ShopDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogEventManager(extras) {
    _reporterNs.report("LogEventManager", "../../common/LogEventManager", _context.meta, extras);
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
      AnimationComponent = _cc.AnimationComponent;
      Button = _cc.Button;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BasePopup = _unresolved_2.BasePopup;
    }, function (_unresolved_3) {
      ItemSpin = _unresolved_3.ItemSpin;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.Constants;
      SHOP_ITEM_TYPE = _unresolved_4.SHOP_ITEM_TYPE;
    }, function (_unresolved_5) {
      localConfig = _unresolved_5.localConfig;
    }, function (_unresolved_6) {
      lodash = _unresolved_6.lodash;
    }, function (_unresolved_7) {
      clientEvent = _unresolved_7.clientEvent;
    }, function (_unresolved_8) {
      AudioManager2 = _unresolved_8.AudioManager2;
    }, function (_unresolved_9) {
      Utils = _unresolved_9.default;
    }, function (_unresolved_10) {
      GroupRewardDataInfo = _unresolved_10.GroupRewardDataInfo;
    }, function (_unresolved_11) {
      LogEventManager = _unresolved_11.LogEventManager;
    }, function (_unresolved_12) {
      PokiSDKManager = _unresolved_12.PokiSDKManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "81a79npd5FO9bk4SP8tuWo6", "SpinPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = SpinPopup
       * DateTime = Tue Dec 03 2024 15:51:10 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = SpinPopup.ts
       * FileBasenameNoExtension = SpinPopup
       * URL = db://assets/scripts/game/spin/SpinPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("SpinPopup", SpinPopup = (_dec = ccclass('SpinPopup'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(AnimationComponent), _dec13 = property(Node), _dec(_class = (_class2 = (_temp = class SpinPopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "spinGroup", _descriptor, this);

          _initializerDefineProperty(this, "contentGroup", _descriptor2, this);

          _initializerDefineProperty(this, "arrItemSpinPrefabs", _descriptor3, this);

          _defineProperty(this, "arrItemSpins", []);

          _initializerDefineProperty(this, "btnFreeSpin", _descriptor4, this);

          _initializerDefineProperty(this, "btnSpinCoin", _descriptor5, this);

          _initializerDefineProperty(this, "btnSpinAd", _descriptor6, this);

          _initializerDefineProperty(this, "spinAd_disable", _descriptor7, this);

          _initializerDefineProperty(this, "txtSpinAdCount", _descriptor8, this);

          _initializerDefineProperty(this, "objFree", _descriptor9, this);

          _initializerDefineProperty(this, "objNextTime", _descriptor10, this);

          _initializerDefineProperty(this, "lightAnimation", _descriptor11, this);

          _initializerDefineProperty(this, "targetCoin", _descriptor12, this);

          _defineProperty(this, "arrRatios", []);

          _defineProperty(this, "indexTarget", 0);

          _defineProperty(this, "tweenRotate", null);

          _defineProperty(this, "angleStart", 0);

          _defineProperty(this, "angleTarget", 0);

          _defineProperty(this, "numberLoop", 5);

          _defineProperty(this, "timeDelayDoneSpin", 2);

          _defineProperty(this, "timeSpin", 4);

          _defineProperty(this, "priceSpinCoin", 100);
        }

        onEnable() {
          super.onEnable();
          this.btnFreeSpin.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchFreeSpin, this);
          this.btnSpinCoin.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchSpinCoin, this);
          this.btnSpinAd.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchSpinAd, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).UPDATE_COIN_TARGETPOS, this.targetCoin.worldPosition);
        }

        onDisable() {
          super.onDisable();
          this.btnFreeSpin.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchFreeSpin, this);
          this.btnSpinCoin.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchSpinCoin, this);
          this.btnSpinAd.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchSpinAd, this);
        }

        showSpinPopup() {
          this.spinGroup.setRotationFromEuler(new Vec3(0, 0, 0));

          if (this.arrItemSpins.length > 0) {
            for (var i = 0; i < this.arrItemSpins.length; i++) {
              this.arrItemSpins[i].reset();
              this.arrItemSpins[i].node.active = false;
            }
          } else {
            this.contentGroup.destroyAllChildren();
          }

          this.objFree.active = false;
          this.objNextTime.active = false;
          this.btnFreeSpin.node.active = false;
          this.btnSpinCoin.node.active = false;
          this.btnSpinAd.node.active = false;
          this.spinAd_disable.active = false;
          this.btnClose.node.active = false;
          this.btnClose2.node.active = false;
          this.lightAnimation.play("light_wait");
          super.showPopup();
        }

        showPoup_ShowView_Finished() {
          super.showPoup_ShowView_Finished();

          for (var i = 0; i < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.arrSpinRewardDataInfos.length; i++) {
            this.arrRatios.push((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrSpinRewardDataInfos[i].ratio);
          } // console.log("this.arrRatios",this.arrRatios);


          this.lockGroup.active = true;

          if (this.arrItemSpins.length > 0) {
            for (var _i = 0; _i < this.arrItemSpins.length; _i++) {
              this.arrItemSpins[_i].node.active = true;

              this.arrItemSpins[_i].showItem();
            }
          } else {
            // console.log("localConfig.instance.arrSpin_GroupRewardDataInfos",localConfig.instance.arrSpin_GroupRewardDataInfos);
            for (var _i2 = 0; _i2 < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrSpinRewardDataInfos.length; _i2++) {
              var item = instantiate(this.getItemRewardReceivePrefab((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrSpinRewardDataInfos[_i2].items[0].itemShopType));
              item.parent = this.contentGroup;
              item.setRotationFromEuler(new Vec3(0, 0, _i2 * 45));
              var itemSpin = item.getComponent(_crd && ItemSpin === void 0 ? (_reportPossibleCrUseOfItemSpin({
                error: Error()
              }), ItemSpin) : ItemSpin);
              itemSpin.initItem(_i2, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrSpinRewardDataInfos[_i2].items[0].value, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrSpinRewardDataInfos[_i2].items[0].itemShopType);
              this.arrItemSpins.push(itemSpin);
            }
          }

          this.scheduleOnce(() => {
            this.lockGroup.active = false;
            this.btnClose.node.active = true;
            this.btnClose2.node.active = true;
            this.showInfo();
            this.lightAnimation.pause();
            this.lightAnimation.play("light_idle");
          }, 0.1 * 8 + 0.5);
        }

        hidePopup() {
          this.hidePopup_Finished();
        }

        hideInfo() {
          this.btnFreeSpin.node.active = false;
          this.btnSpinCoin.node.active = false;
          this.btnSpinAd.node.active = false;
          this.objFree.active = false;
          this.objNextTime.active = false;
          this.btnClose2.node.active = false;
        }

        showInfo() {
          this.btnClose2.node.active = true;
          this.btnFreeSpin.node.active = false;
          this.btnSpinCoin.node.active = false;
          this.btnSpinAd.node.active = false;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.checkFreeSpin()) {
            this.objFree.active = true;
            this.btnFreeSpin.node.active = true;
            this.btnFreeSpin.node.setScale(new Vec3(0, 0, 0));
            tween(this.btnFreeSpin.node).to(0.5, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'backOut'
            }).start();
          } else {
            this.objNextTime.active = true;
            this.btnSpinCoin.node.active = true;
            this.btnSpinAd.node.active = true;

            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.spinFreeCount > 0) {
              this.spinAd_disable.active = false;
              this.txtSpinAdCount.string = "(" + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.spinFreeCount + "/3)";
            } else {
              this.spinAd_disable.active = true;
              this.txtSpinAdCount.string = "(0/3)";
            }

            this.btnSpinCoin.node.setScale(new Vec3(0, 0, 0));
            tween(this.btnSpinCoin.node).to(0.5, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'backOut'
            }).start();
            this.btnSpinAd.node.setScale(new Vec3(0, 0, 0));
            tween(this.btnSpinAd.node).delay(0.1).to(0.5, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'backOut'
            }).start();
          }
        }

        getItemRewardReceivePrefab(itemShopType) {
          if (itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).COIN) {
            return this.arrItemSpinPrefabs[0];
          } else if (itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).BOOSTER_UNDO) {
            return this.arrItemSpinPrefabs[1];
          } else if (itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).BOOSTER_SUGGEST) {
            return this.arrItemSpinPrefabs[2];
          } else if (itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).BOOSTER_ADDCOL) {
            return this.arrItemSpinPrefabs[3];
          } else if (itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).HEART) {
            return this.arrItemSpinPrefabs[4];
          } else if (itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).HEART_UNLIMITED) {
            return this.arrItemSpinPrefabs[5];
          }

          return this.arrItemSpinPrefabs[0];
        }

        setSpinStart() {
          var self = this;
          var indexRotate = 0;
          var angleStart = this.spinGroup.eulerAngles.z % 360; // console.log("angleStart:"+angleStart);

          this.spinGroup.setRotationFromEuler(new Vec3(0, 0, angleStart));

          if (this.tweenRotate != null) {
            this.tweenRotate.stop();
          }

          this.indexTarget = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).getRandombyRatios(this.arrRatios); // this.indexTarget = 1;

          var angleTarget = this.indexTarget * 45 + (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
            error: Error()
          }), lodash) : lodash).randomFloat(-5, 5) + this.numberLoop * 360; // console.log("angleTarget:"+angleTarget);

          this.tweenRotate = tween(this.spinGroup).call(() => {
            (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager2) : AudioManager2).instance.playSpinStart();
            this.lockGroup.active = true;
            this.lightAnimation.pause();
            this.lightAnimation.play("light_spinning");
          }).to(this.timeSpin, {
            angle: angleTarget
          }, {
            easing: 'cubicInOut',

            onUpdate(target, ratio) {
              // console.log("ratio:"+ratio);
              // console.log(self.spinGroup);
              // console.log(self.spinGroup.angle);
              var currIndexRotate = Math.floor(self.spinGroup.angle / 45);

              if (currIndexRotate != indexRotate) {
                indexRotate = currIndexRotate;
                self.setSpinUpdateIndex(indexRotate);
              }
            },

            onComplete: () => {}
          }).call(() => {
            (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager2) : AudioManager2).instance.playSpinDone();
            this.lightAnimation.pause();
            this.lightAnimation.play("light_done");
          }).delay(this.timeDelayDoneSpin).call(() => {
            this.lockGroup.active = false;
            this.setSpinFinished();
          }).start();
        }

        setSpinUpdateIndex(indexRotate) {// console.log("indexRotate:"+indexRotate);
        }

        setSpinFinished() {
          this.lightAnimation.pause();
          this.lightAnimation.play("light_idle");
          this.showInfo(); // console.log("this.indexTarget:"+this.indexTarget);

          var groupRewardDataInfo = new (_crd && GroupRewardDataInfo === void 0 ? (_reportPossibleCrUseOfGroupRewardDataInfo({
            error: Error()
          }), GroupRewardDataInfo) : GroupRewardDataInfo)((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.arrSpinRewardDataInfos[(8 - this.indexTarget) % 8].items);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_REWARDRECEIVE_POPUP, "SPIN", groupRewardDataInfo);
        }

        touchFreeSpin() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("freespin", "spinpopup");
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.setSpinLastTime();
          this.hideInfo();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SPIN_NOTIFY_UPDATE);
          this.setSpinStart();
        }

        touchSpinCoin() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("spincoin", "spinpopup");

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currCoin - this.priceSpinCoin >= 0) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setCoin((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currCoin - this.priceSpinCoin);
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logResourceSpend("currency", "coin", this.priceSpinCoin, "spinpopup", "spincoin");
            this.setSpinStart();
          } else {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_NOTIFICATION, "Not Enough Coin!");
          }
        }

        touchSpinAd() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("spinad", "spinpopup");

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.spinFreeCount > 0) {
            // FBInstantManager.instance.Show_RewardedVideoAsync("spinpopup","spin",(err, success) => {
            //     if (err) {
            //         console.log(err);
            //     }else{
            //         if(localConfig.instance.spinFreeCount == 0){
            //             this.spinAd_disable.active = true;
            //         }
            //         this.txtSpinAdCount.string = `(${localConfig.instance.spinFreeCount - 1}/3)`;
            //         localConfig.instance.setSpinFreeCount(localConfig.instance.spinFreeCount - 1);
            //         this.setSpinStart();
            //     }
            // })
            (_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
              error: Error()
            }), PokiSDKManager) : PokiSDKManager).instance.Show_RewardedVideoAsync("spinpopup", "spin", (err, success) => {
              if (err) {
                console.log(err);
              } else {
                if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.spinFreeCount == 0) {
                  this.spinAd_disable.active = true;
                }

                this.txtSpinAdCount.string = "(" + ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.spinFreeCount - 1) + "/3)";
                (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.setSpinFreeCount((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.spinFreeCount - 1);
                this.setSpinStart();
              }
            });
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spinGroup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "contentGroup", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "arrItemSpinPrefabs", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnFreeSpin", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnSpinCoin", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnSpinAd", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "spinAd_disable", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "txtSpinAdCount", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "objFree", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "objNextTime", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lightAnimation", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "targetCoin", [_dec13], {
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
//# sourceMappingURL=SpinPopup.js.map