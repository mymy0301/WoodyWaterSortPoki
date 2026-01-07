System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, CCInteger, Component, Node, Sprite, SpriteFrame, tween, Vec3, localConfig, clientEvent, Constants, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, ItemDailyLogin;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroupRewardDataInfo(extras) {
    _reporterNs.report("GroupRewardDataInfo", "./info/ShopDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      localConfig = _unresolved_2.localConfig;
    }, function (_unresolved_3) {
      clientEvent = _unresolved_3.clientEvent;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7fb5d4eO+hKh5AdGlEgumfs", "ItemDailyLogin", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemDailyLogin
       * DateTime = Sat Oct 12 2024 15:01:21 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemDailyLogin.ts
       * FileBasenameNoExtension = ItemDailyLogin
       * URL = db://assets/scripts/game/ItemDailyLogin.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemDailyLogin", ItemDailyLogin = (_dec = ccclass('ItemDailyLogin'), _dec2 = property(Sprite), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(CCInteger), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = (_class2 = (_temp = class ItemDailyLogin extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bg", _descriptor, this);

          _initializerDefineProperty(this, "sfON", _descriptor2, this);

          _initializerDefineProperty(this, "sfOFF", _descriptor3, this);

          _initializerDefineProperty(this, "indexDailyLogin", _descriptor4, this);

          _initializerDefineProperty(this, "objFinished", _descriptor5, this);

          _initializerDefineProperty(this, "iconFinished", _descriptor6, this);

          _initializerDefineProperty(this, "nodeActive", _descriptor7, this);

          _initializerDefineProperty(this, "arrStartPos", _descriptor8, this);
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        onEnable() {
          this.showInfo();
        }

        showInfo() {
          this.bg.spriteFrame = this.sfOFF;
          this.nodeActive.active = false;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrDay() == (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currDailyLoginLastDay) {
            //Hom nay da nhan qua rùi
            if (this.indexDailyLogin < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currDailyLoginIndex) {
              this.objFinished.active = true;
            } else {
              this.objFinished.active = false;
            }
          } else {
            if (this.indexDailyLogin < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currDailyLoginIndex) {
              this.objFinished.active = true;
            } else if (this.indexDailyLogin == (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currDailyLoginIndex) {
              this.objFinished.active = false;
              this.nodeActive.active = true;
              this.bg.spriteFrame = this.sfON;
            } else {
              this.objFinished.active = false;
            }
          } // console.log(this.indexDailyLogin,localConfig.instance.currDailyLoginIndex);
          // if(this.indexDailyLogin < localConfig.instance.currDailyLoginIndex){
          //     this.objFinished.active = true;
          // }else if(this.indexDailyLogin == localConfig.instance.currDailyLoginIndex){
          //     console.log(localConfig.instance.currDailyLoginLastDay,localConfig.instance.getCurrDay(),this.indexDailyLogin,localConfig.instance.currDailyLoginIndex);
          //     if(localConfig.instance.getCurrDay() == localConfig.instance.currDailyLoginLastDay){
          //         this.objFinished.active = true;
          //     }else{
          //         this.objFinished.active = false;
          //         this.nodeActive.active = true;
          //         this.bg.spriteFrame = this.sfON;
          //     }
          // }else{
          //     this.objFinished.active = false;
          // }

        }

        setClaim() {
          var groupRewardDataInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getDailyLogin_GroupRewardDataInfo_byIndex(this.indexDailyLogin); // console.log(groupRewardDataInfo);

          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).HOME_UPDATE_TARGET_POS); // for(let i = 0;i < groupRewardDataInfo.items.length;i++){
          //     if (groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.COIN) {
          //         clientEvent.dispatchEvent(Constants.UPDATE_COIN_STARTPOS, this.arrStartPos[i].worldPosition);
          //         clientEvent.dispatchEvent(Constants.SHOW_ADDCOIN, groupRewardDataInfo.items[i].value);
          //     }else if (groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_UNDO) {
          //         localConfig.instance.setBoosterCount(BOOSTER_TYPE.UNDO,localConfig.instance.getBoosterCount(BOOSTER_TYPE.UNDO) + groupRewardDataInfo.items[i].value);
          //     }else if (groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_SUGGEST) {
          //         localConfig.instance.setBoosterCount(BOOSTER_TYPE.SUGGEST,localConfig.instance.getBoosterCount(BOOSTER_TYPE.SUGGEST) + groupRewardDataInfo.items[i].value);
          //     }else if (groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.BOOSTER_ADDCOL) {
          //         localConfig.instance.setBoosterCount(BOOSTER_TYPE.ADDCOL,localConfig.instance.getBoosterCount(BOOSTER_TYPE.ADDCOL) + groupRewardDataInfo.items[i].value);
          //     }else if (groupRewardDataInfo.items[i].itemShopType == SHOP_ITEM_TYPE.HEART_UNLIMITED) {
          //         clientEvent.dispatchEvent(Constants.UPDATE_HEART_STARTPOS, this.arrStartPos[i].worldPosition);
          //         clientEvent.dispatchEvent(Constants.SHOW_ADDHEART_UNLIMITED, groupRewardDataInfo.items[i].value);
          //     }
          // }

          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.setDailyLogin_ReceiveReward();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_REWARDRECEIVE_POPUP, "DAILY LOGIN", groupRewardDataInfo);
          this.setDailyLoginFinished();
        }

        setDailyLoginFinished() {
          this.nodeActive.active = false;
          this.objFinished.active = true;
          this.iconFinished.active = true;
          this.iconFinished.setScale(new Vec3(0, 0, 0));
          this.bg.spriteFrame = this.sfOFF;
          tween(this.iconFinished).to(0.3, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut',
            onComplete: () => {}
          }).start();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sfON", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sfOFF", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "indexDailyLogin", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "objFinished", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "iconFinished", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "nodeActive", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "arrStartPos", [_dec9], {
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
//# sourceMappingURL=ItemDailyLogin.js.map