System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Color, Component, Label, LabelOutline, Node, sp, Sprite, SpriteFrame, tween, UIOpacity, Vec3, Widget, clientEvent, Constants, DAILYTASK_TYPE, LEVEL_STATE, SHOP_PACK_TYPE, THEME_TYPE, localConfig, ItemLevel, ButtonMassterPassManager, AudioManager2, FBInstantManager, ButtonRemoveAdManager, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _temp, _crd, ccclass, property, HomeGroup;

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

  function _reportPossibleCrUseOfDAILYTASK_TYPE(extras) {
    _reporterNs.report("DAILYTASK_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLEVEL_STATE(extras) {
    _reporterNs.report("LEVEL_STATE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHOP_PACK_TYPE(extras) {
    _reporterNs.report("SHOP_PACK_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTHEME_TYPE(extras) {
    _reporterNs.report("THEME_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemLevel(extras) {
    _reporterNs.report("ItemLevel", "./ItemLevel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonMassterPassManager(extras) {
    _reporterNs.report("ButtonMassterPassManager", "./masterpass/ButtonMassterPassManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "../framework/audioManager2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "../common/FBInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonRemoveAdManager(extras) {
    _reporterNs.report("ButtonRemoveAdManager", "./ButtonRemoveAdManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelConfigInfo(extras) {
    _reporterNs.report("LevelConfigInfo", "../newlevel/LevelConfigInfo", _context.meta, extras);
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
      Color = _cc.Color;
      Component = _cc.Component;
      Label = _cc.Label;
      LabelOutline = _cc.LabelOutline;
      Node = _cc.Node;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      clientEvent = _unresolved_2.clientEvent;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
      DAILYTASK_TYPE = _unresolved_3.DAILYTASK_TYPE;
      LEVEL_STATE = _unresolved_3.LEVEL_STATE;
      SHOP_PACK_TYPE = _unresolved_3.SHOP_PACK_TYPE;
      THEME_TYPE = _unresolved_3.THEME_TYPE;
    }, function (_unresolved_4) {
      localConfig = _unresolved_4.localConfig;
    }, function (_unresolved_5) {
      ItemLevel = _unresolved_5.ItemLevel;
    }, function (_unresolved_6) {
      ButtonMassterPassManager = _unresolved_6.ButtonMassterPassManager;
    }, function (_unresolved_7) {
      AudioManager2 = _unresolved_7.AudioManager2;
    }, function (_unresolved_8) {
      FBInstantManager = _unresolved_8.FBInstantManager;
    }, function (_unresolved_9) {
      ButtonRemoveAdManager = _unresolved_9.ButtonRemoveAdManager;
    }, function (_unresolved_10) {
      LogEventManager = _unresolved_10.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6c104i8RXFL0LlGYCPe+5mT", "HomeGroup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = HomeGroup
       * DateTime = Mon Sep 23 2024 15:46:40 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = HomeGroup.ts
       * FileBasenameNoExtension = HomeGroup
       * URL = db://assets/scripts/game/HomeGroup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("HomeGroup", HomeGroup = (_dec = ccclass('HomeGroup'), _dec2 = property(Widget), _dec3 = property(Widget), _dec4 = property(Widget), _dec5 = property(Widget), _dec6 = property(Node), _dec7 = property(UIOpacity), _dec8 = property(Button), _dec9 = property(Button), _dec10 = property(Button), _dec11 = property(Button), _dec12 = property(SpriteFrame), _dec13 = property(Sprite), _dec14 = property(SpriteFrame), _dec15 = property(Sprite), _dec16 = property(Color), _dec17 = property(LabelOutline), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(_crd && ItemLevel === void 0 ? (_reportPossibleCrUseOfItemLevel({
        error: Error()
      }), ItemLevel) : ItemLevel), _dec21 = property(sp.Skeleton), _dec22 = property(_crd && ButtonMassterPassManager === void 0 ? (_reportPossibleCrUseOfButtonMassterPassManager({
        error: Error()
      }), ButtonMassterPassManager) : ButtonMassterPassManager), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Label), _dec26 = property(_crd && ButtonRemoveAdManager === void 0 ? (_reportPossibleCrUseOfButtonRemoveAdManager({
        error: Error()
      }), ButtonRemoveAdManager) : ButtonRemoveAdManager), _dec27 = property(_crd && ButtonMassterPassManager === void 0 ? (_reportPossibleCrUseOfButtonMassterPassManager({
        error: Error()
      }), ButtonMassterPassManager) : ButtonMassterPassManager), _dec28 = property(sp.Skeleton), _dec(_class = (_class2 = (_temp = class HomeGroup extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "groupAllTopWidget", _descriptor, this);

          _initializerDefineProperty(this, "groupBGTopWidget", _descriptor2, this);

          _initializerDefineProperty(this, "groupHoverWidget", _descriptor3, this);

          _initializerDefineProperty(this, "groupScrollWidget", _descriptor4, this);

          _initializerDefineProperty(this, "groupHover", _descriptor5, this);

          _initializerDefineProperty(this, "groupOpacity", _descriptor6, this);

          _defineProperty(this, "tweenGroup", null);

          _initializerDefineProperty(this, "btnAvatar", _descriptor7, this);

          _initializerDefineProperty(this, "btnSetting", _descriptor8, this);

          _initializerDefineProperty(this, "btnTheme", _descriptor9, this);

          _initializerDefineProperty(this, "btnLevel", _descriptor10, this);

          _initializerDefineProperty(this, "arrSfIconPlays", _descriptor11, this);

          _initializerDefineProperty(this, "iconBtnPlay", _descriptor12, this);

          _initializerDefineProperty(this, "arrSfBGPlays", _descriptor13, this);

          _initializerDefineProperty(this, "bgBtnPlay", _descriptor14, this);

          _initializerDefineProperty(this, "arrColorOutlinePlays", _descriptor15, this);

          _initializerDefineProperty(this, "txtPlayOutline", _descriptor16, this);

          _initializerDefineProperty(this, "targetCoin", _descriptor17, this);

          _initializerDefineProperty(this, "targetHeart", _descriptor18, this);

          _initializerDefineProperty(this, "arrItemLevels", _descriptor19, this);

          _initializerDefineProperty(this, "character", _descriptor20, this);

          _initializerDefineProperty(this, "buttonMassterPassManager", _descriptor21, this);

          _initializerDefineProperty(this, "contentGroup", _descriptor22, this);

          _initializerDefineProperty(this, "lockGroup", _descriptor23, this);

          _initializerDefineProperty(this, "txtInfo", _descriptor24, this);

          _initializerDefineProperty(this, "btnRemoveAdManager", _descriptor25, this);

          _initializerDefineProperty(this, "btnMasterPassManager", _descriptor26, this);

          _defineProperty(this, "tweenButtonPlay", null);

          _initializerDefineProperty(this, "fx_Button", _descriptor27, this);

          _defineProperty(this, "isShowGroupFirstTime", false);

          _defineProperty(this, "isInitLevel", false);

          _defineProperty(this, "isShowRemoveAdPopup", false);
        }

        onEnable() {
          this.btnAvatar.node.on(Button.EventType.CLICK, this.touchAvatar, this);
          this.btnSetting.node.on(Button.EventType.CLICK, this.touchSetting, this);
          this.btnLevel.node.on(Button.EventType.CLICK, this.touchLevel, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).HOME_UPDATE_TARGET_POS, this.updateTargetPos, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).IAP_INIT_SUCCESS, this.setIAPInitSuccess, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).THEME_SELECTED_UPDATE, this.setThemeSelected, this);
          this.btnTheme.node.on(Button.EventType.CLICK, this.touchTheme, this);
          this.initAllTop();
          this.showInfo();
          this.showInfoCharacter(); // this.showButtonPlay();

          this.updateTargetPos();
        }

        onDisable() {
          this.btnAvatar.node.off(Button.EventType.CLICK, this.touchAvatar, this);
          this.btnSetting.node.off(Button.EventType.CLICK, this.touchSetting, this);
          this.btnLevel.node.off(Button.EventType.CLICK, this.touchLevel, this);
          this.btnTheme.node.off(Button.EventType.CLICK, this.touchTheme, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).HOME_UPDATE_TARGET_POS, this.updateTargetPos, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).IAP_INIT_SUCCESS, this.setIAPInitSuccess, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).THEME_SELECTED_UPDATE, this.setThemeSelected, this);
        }

        setIAPInitSuccess() {
          this.btnRemoveAdManager.showInfo();
        }

        initAllTop() {
          // let kc_banner:number = 0;
          // if(localConfig.instance.isRemoveAd){
          //     kc_banner = 150;
          // }
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isMobile) {
            this.groupHover.setScale(new Vec3((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.scaleBG, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.scaleBG, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.scaleBG));
            let posY = ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.scaleBG - 1) * (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.DEFAULT_H / 2; // console.log("posY:"+posY);

            if (posY <= 0) {
              this.groupHoverWidget.top = 0;
              this.groupBGTopWidget.top = 0;
              this.groupAllTopWidget.top = 0;
              this.groupScrollWidget.bottom = 360;
              this.groupScrollWidget.top = 160;
              return;
            } // this.groupAllTop.setPosition(new Vec3(0,posY + 180,0));


            this.groupHoverWidget.top = -posY;
            this.groupBGTopWidget.top = -posY;
            this.groupAllTopWidget.top = -posY;
            this.groupScrollWidget.bottom = 360;
            this.groupScrollWidget.top = 160 - posY;
          } else {
            this.groupHoverWidget.top = 0;
            this.groupBGTopWidget.top = 0;
            this.groupAllTopWidget.top = 0;
            this.groupScrollWidget.bottom = 360;
            this.groupScrollWidget.top = 160;
          }
        }

        updateTargetPos() {
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
        }

        start() {
          // [3]
          this.updateTargetPos();
          this.showButtonPlay();
        }

        showGroup() {
          this.lockGroup.active = false; //Kiểm tra VIP REWARD
          // if(localConfig.instance.vipType != 0){
          //     if(localConfig.instance.getCurrDay() > localConfig.instance.vipLastDayReward){
          //         localConfig.instance.setVIPLastDayReward();
          //         if(localConfig.instance.vipType == SHOP_PACK_TYPE.VIP_3){
          //             clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"3-DAY VIP PASS",localConfig.instance.vipDailyRewards);
          //         }else if(localConfig.instance.vipType == SHOP_PACK_TYPE.VIP_7){
          //             clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"7-DAY VIP PASS",localConfig.instance.vipDailyRewards);
          //         }else if(localConfig.instance.vipType == SHOP_PACK_TYPE.VIP_30){
          //             clientEvent.dispatchEvent(Constants.SHOW_REWARDRECEIVE_POPUP,"30-DAY VIP PASS",localConfig.instance.vipDailyRewards);
          //         }
          //     }
          // }

          if (!this.isShowGroupFirstTime) {
            this.showGroupFirstTime();
          }
        }

        showGroupFirstTime() {
          this.isShowGroupFirstTime = true;
          this.lockGroup.active = false;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock > 3 && (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock % 3 == 1) {
            (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
              error: Error()
            }), FBInstantManager) : FBInstantManager).instance.SubscribeBot();
          }

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock % 3 == 2) {
            (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
              error: Error()
            }), FBInstantManager) : FBInstantManager).instance.Create_Shortcut((err, succuss) => {});
          }

          this.initLevels();
          let isShowPopup = false;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.checkShowBlackFriday()) {
            (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager2) : AudioManager2).instance.playPopupOpen2();
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_BLACKRIDAY_COIN_POPUP);
            isShowPopup = true;
          }

          if (!isShowPopup && (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.raceActive == 1 && (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.checkRaceFinished()) {
            (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager2) : AudioManager2).instance.playPopupOpen2();
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_TUBERACE_POPUP, false);
            isShowPopup = true;
          }

          if (!isShowPopup && (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrDay() > (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currDailyLoginLastDay) {
            (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager2) : AudioManager2).instance.playPopupOpen2();
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_DAILYTASK_POPUP, (_crd && DAILYTASK_TYPE === void 0 ? (_reportPossibleCrUseOfDAILYTASK_TYPE({
              error: Error()
            }), DAILYTASK_TYPE) : DAILYTASK_TYPE).LOGIN);
            isShowPopup = true;
          }

          if (!isShowPopup && (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock >= (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.SPIN_LEVEL_UNLOCK) {
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.checkFreeSpin()) {
              (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager2) : AudioManager2).instance.playPopupOpen2();
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_SPIN_POPUP);
              isShowPopup = true;
            }
          }

          if (!isShowPopup && (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock >= (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.RACE_LEVEL_UNLOCK) {
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.raceActive == 0) {
              (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager2) : AudioManager2).instance.playPopupOpen2();
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_TUBERACE_JOIN_POPUP);
              isShowPopup = true;
            }
          }

          if (!isShowPopup && (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock >= (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.PASS_LEVEL_UNLOCK) {
            let indexPass = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.passIndexAvailable; // console.log("indexPass:"+indexPass);

            let countFreeClaim = indexPass - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrPassFreeClaims.length + 1; // console.log("countFreeClaim:"+countFreeClaim);

            let countPassClaim = 0;

            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.passActivated) {
              countPassClaim = indexPass - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrPassMasterClaims.length + 1;
            }

            let countClaimAvailable = countFreeClaim + countPassClaim;

            if (countClaimAvailable > 0) {
              (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager2) : AudioManager2).instance.playPopupOpen2();
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_MASSTERPASS_POPUP);
              isShowPopup = true;
            }
          }

          if (!isShowPopup && (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock > 10) {
            let isFinished = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.checkInfoDailyChallengeFinished((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currInfoDay);

            if (!isFinished) {
              (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager2) : AudioManager2).instance.playPopupOpen2();
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_DAILY_CHALLENGE_POPUP);
              isShowPopup = true;
            }
          }
        }

        initLevels() {
          if (this.isInitLevel) return;
          this.isInitLevel = true; // console.error("initLevels",localConfig.instance.currLevelUnlock);

          this.contentGroup.setPosition(new Vec3(0, -600, 0));
          let level = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock;

          for (let i = 0; i < this.arrItemLevels.length; i++) {
            let state = (_crd && LEVEL_STATE === void 0 ? (_reportPossibleCrUseOfLEVEL_STATE({
              error: Error()
            }), LEVEL_STATE) : LEVEL_STATE).FINISHED;

            if (i == 2) {
              state = (_crd && LEVEL_STATE === void 0 ? (_reportPossibleCrUseOfLEVEL_STATE({
                error: Error()
              }), LEVEL_STATE) : LEVEL_STATE).ACTIVE;
            } else if (i > 2) {
              state = (_crd && LEVEL_STATE === void 0 ? (_reportPossibleCrUseOfLEVEL_STATE({
                error: Error()
              }), LEVEL_STATE) : LEVEL_STATE).LOCK;
            }

            this.arrItemLevels[i].initLevel(level - 2 + i, state);
          }

          let posX = this.arrItemLevels[2].objGroup.position.x;
          let posY = this.arrItemLevels[2].node.position.y - 20;
          let strAnimationIdle = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getStrAnimationIdle_byID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getThemeSelected_byThemeType((_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).SKIN));
          this.character.setAnimation(0, strAnimationIdle, true);
          this.character.node.setPosition(new Vec3(posX, posY, 0)); // console.log(this.character);
        }

        setNextLevel(rewardCoin) {
          this.lockGroup.active = true;
          this.contentGroup.setPosition(new Vec3(0, -600, 0));
          this.buttonMassterPassManager.initReceiveKey(); // console.log("setNextLevel");

          this.isInitLevel = true;
          let level = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock - 1;

          for (let i = 0; i < this.arrItemLevels.length; i++) {
            let state = (_crd && LEVEL_STATE === void 0 ? (_reportPossibleCrUseOfLEVEL_STATE({
              error: Error()
            }), LEVEL_STATE) : LEVEL_STATE).FINISHED;

            if (i == 2) {
              state = (_crd && LEVEL_STATE === void 0 ? (_reportPossibleCrUseOfLEVEL_STATE({
                error: Error()
              }), LEVEL_STATE) : LEVEL_STATE).ACTIVE;
            } else if (i > 2) {
              state = (_crd && LEVEL_STATE === void 0 ? (_reportPossibleCrUseOfLEVEL_STATE({
                error: Error()
              }), LEVEL_STATE) : LEVEL_STATE).LOCK;
            }

            this.arrItemLevels[i].initLevel(level - 2 + i, state);
          }

          let posX = this.arrItemLevels[2].objGroup.position.x;
          let posY = this.arrItemLevels[2].node.position.y - 20;
          this.character.node.setPosition(new Vec3(posX, posY, 0));
          let posX_New = this.arrItemLevels[3].objGroup.position.x;
          let posY_New = this.arrItemLevels[3].node.position.y - 20;
          let strAnimationIdle = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getStrAnimationIdle_byID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getThemeSelected_byThemeType((_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).SKIN));
          this.character.setAnimation(0, strAnimationIdle, true);
          let isJumpRight = true;

          if (posX_New < posX) {
            isJumpRight = false;
          }

          if (this.tweenButtonPlay) this.tweenButtonPlay.stop();
          this.btnLevel.node.setScale(new Vec3(1, 1, 1));
          this.tweenButtonPlay = tween(this.btnLevel.node).delay(0.5).to(0.2, {
            scale: new Vec3(0.9, 0.9, 0.9)
          }, {
            easing: 'linear',
            onComplete: () => {}
          }).to(0.4, {
            scale: new Vec3(1.3, 1.3, 1.3)
          }, {
            easing: 'quadIn',
            onComplete: () => {}
          }).to(0.3, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut',
            onComplete: () => {}
          }).union().call(() => {}).start();
          this.scheduleOnce(() => {
            let strAnimationJump = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getStrAnimationJump_byID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getThemeSelected_byThemeType((_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
              error: Error()
            }), THEME_TYPE) : THEME_TYPE).SKIN), isJumpRight); //strAnimationIdle

            this.character.setAnimation(0, strAnimationJump, false);
          }, 0.2);
          this.scheduleOnce(() => {
            tween(this.character.node).to(0.66, {
              position: new Vec3(posX_New, posY_New, 0)
            }, {
              easing: 'quadOut'
            }).start();
            (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager2) : AudioManager2).instance.playJump();
          }, 0.5);
          this.scheduleOnce(() => {
            this.arrItemLevels[2].setFinsihed();
          }, 0.6);
          this.scheduleOnce(() => {
            this.fx_Button.setAnimation(0, "FX_star", false);
          }, 1.1);
          this.scheduleOnce(() => {
            this.showButtonPlay();
          }, 1.3);
          this.scheduleOnce(() => {
            this.arrItemLevels[3].setActive();
            let strAnimationIdle = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getStrAnimationIdle_byID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getThemeSelected_byThemeType((_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
              error: Error()
            }), THEME_TYPE) : THEME_TYPE).SKIN));
            this.character.setAnimation(0, strAnimationIdle, true);
          }, 1.5);
          this.scheduleOnce(() => {
            this.updateTargetPos();
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_ADDCOIN, rewardCoin);
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logResourceEarned("currency", "coin", rewardCoin, "home", "win_level");
            let timeDelay = 0;

            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevelUnlock > (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.PASS_LEVEL_UNLOCK) {
              let timeLeft = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.passLastTime + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.PASS_TIME - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getCurrTime();

              if (timeLeft > 0) {
                timeDelay = 1;
                this.buttonMassterPassManager.showReceiveKey();
              }
            }

            this.setNextLevel_Finished_Delay(timeDelay);
          }, 2);
        } // update (deltaTime: number) {
        //     // [4]
        // }


        setNextLevel_Finished_Delay(timeDelay) {
          this.scheduleOnce(() => {
            this.setNextLevel_Finished();
          }, timeDelay);
        }

        setNextLevel_Finished() {
          this.lockGroup.active = false;
          this.showGroup();

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock > 5 && (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock % 5 == 1) {
            (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
              error: Error()
            }), FBInstantManager) : FBInstantManager).instance.SubscribeBot();
          }

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.raceActive == 1 && (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.checkRaceFinished()) {
            (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager2) : AudioManager2).instance.playPopupOpen2();
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_TUBERACE_POPUP, false);
            return;
          }

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock == 4 && (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrDay() > (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currDailyLoginLastDay) {
            (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
              error: Error()
            }), FBInstantManager) : FBInstantManager).instance.Create_Shortcut((err, succuss) => {});
            (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager2) : AudioManager2).instance.playPopupOpen2();
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_DAILYTASK_POPUP, (_crd && DAILYTASK_TYPE === void 0 ? (_reportPossibleCrUseOfDAILYTASK_TYPE({
              error: Error()
            }), DAILYTASK_TYPE) : DAILYTASK_TYPE).LOGIN);
            return;
          }

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock >= 5 && !this.isShowRemoveAdPopup && !(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isRemoveAd && ((_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.checkHaveIAPPack_byProductID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType((_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).REMOVE_AD)) || (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.checkHaveIAPPack_byProductID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getIAP_PackID_bShopPackType((_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).REMOVE_AD_PACK)))) {
            this.isShowRemoveAdPopup = true;
            (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager2) : AudioManager2).instance.playPopupOpen2();
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_REMOVEAD_POPUP);
            return;
          }

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock == (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.SPIN_LEVEL_UNLOCK) {
            (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager2) : AudioManager2).instance.playPopupOpen2();
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_SPIN_POPUP);
            return;
          }

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock == (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.RACE_LEVEL_UNLOCK) {
            (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager2) : AudioManager2).instance.playPopupOpen2();
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_TUBERACE_JOIN_POPUP);
            return;
          }

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock == (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.PASS_LEVEL_UNLOCK) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.activeNewPassDataInfos();
            (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager2) : AudioManager2).instance.playPopupOpen2();
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_MASSTERPASS_POPUP);
            return;
          }

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock > (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.PASS_LEVEL_UNLOCK && (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock % 10 == 1) {
            (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
              error: Error()
            }), FBInstantManager) : FBInstantManager).instance.Create_Shortcut((err, succuss) => {});
          }
        }

        touchAvatar() {// console.log("touchAvatar");
        }

        touchSetting() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("setting", "home"); // console.log("touchSetting");

          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SETTING_POPUP);
        }

        touchTheme() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("theme", "home"); // console.log("touchSetting");

          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_THEME_POPUP);
        }

        touchLevel() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("play", "home"); // console.log("touchLevel");

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currHeartUnlimited_CountTime > 0 || (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currHeart > 0) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TOUCH_LEVEL);
          } else {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_MORELIVES_POPUP, () => {});
          } // clientEvent.dispatchEvent(Constants.SHOW_TUBERACE_WIN_POPUP,1);

        }

        setShow() {
          if (this.tweenGroup != null) {
            this.tweenGroup.stop();
          }

          this.tweenGroup = tween(this.groupOpacity).to(0.4, {
            opacity: 255
          }, {
            easing: 'linear',
            onComplete: () => {}
          }).start();
        }

        setHide() {
          if (this.tweenGroup != null) {
            this.tweenGroup.stop();
          }

          this.tweenGroup = tween(this.groupOpacity).to(0.2, {
            opacity: 0
          }, {
            easing: 'linear',
            onComplete: () => {}
          }).start();
        } // //#region CHARACTER
        // getStrAnimationIdle_byID(id:number){
        //     return "idle_character"+id;
        // }
        // getStrAnimationJump_byID(id:number,isJumpRight:boolean){
        //     if(isJumpRight){
        //         return "jumd_R_character"+id;
        //     }else{
        //         return "jumd_L_character"+id;
        //     }
        // }
        // //#endregion


        showButtonPlay() {
          let levelConfigInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getMagicLevelConfigInfo_byLevelIndex((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock);

          if (levelConfigInfo != null && levelConfigInfo.isSuperHard) {
            // console.log("star");
            this.iconBtnPlay.spriteFrame = this.arrSfIconPlays[2];
            this.bgBtnPlay.spriteFrame = this.arrSfBGPlays[2];
            this.txtPlayOutline.color = this.arrColorOutlinePlays[2];
          } else if (levelConfigInfo != null && levelConfigInfo.isHard) {
            this.iconBtnPlay.spriteFrame = this.arrSfIconPlays[1];
            this.bgBtnPlay.spriteFrame = this.arrSfBGPlays[1];
            this.txtPlayOutline.color = this.arrColorOutlinePlays[1];
          } else {
            this.iconBtnPlay.spriteFrame = this.arrSfIconPlays[0];
            this.bgBtnPlay.spriteFrame = this.arrSfBGPlays[0];
            this.txtPlayOutline.color = this.arrColorOutlinePlays[0];
          }
        }

        showInfo() {
          let w = window.innerWidth; //screen.availWidth;

          let h = window.innerHeight; //screen.availHeight;

          this.txtInfo.string = "w:" + w + " h:" + h + "scaleBG:" + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.scaleBG;
        }

        setThemeSelected(themeType, itemID) {
          // console.log("setThemeSelected",themeType,itemID);
          if (themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).SKIN) {
            this.showInfoCharacter();
          }
        }

        showInfoCharacter() {
          let strAnimationIdle = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getStrAnimationIdle_byID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getThemeSelected_byThemeType((_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).SKIN));
          this.character.setAnimation(0, strAnimationIdle, true);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "groupAllTopWidget", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "groupBGTopWidget", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "groupHoverWidget", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "groupScrollWidget", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "groupHover", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "groupOpacity", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btnAvatar", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btnSetting", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "btnTheme", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "btnLevel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "arrSfIconPlays", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "iconBtnPlay", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "arrSfBGPlays", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "bgBtnPlay", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "arrColorOutlinePlays", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "txtPlayOutline", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "targetCoin", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "targetHeart", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "arrItemLevels", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "character", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "buttonMassterPassManager", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "contentGroup", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "lockGroup", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "txtInfo", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "btnRemoveAdManager", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "btnMasterPassManager", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "fx_Button", [_dec28], {
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
//# sourceMappingURL=HomeGroup.js.map