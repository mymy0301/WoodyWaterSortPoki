System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Component, Label, Node, Sprite, SpriteFrame, tween, Vec3, Constants, THEME_TYPE, TICKET_TYPE, UNLOCK_TYPE, localConfig, resourceUtil, clientEvent, LogEventManager, PokiSDKManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _temp, _crd, ccclass, property, ItemTheme;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTHEME_TYPE(extras) {
    _reporterNs.report("THEME_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTICKET_TYPE(extras) {
    _reporterNs.report("TICKET_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUNLOCK_TYPE(extras) {
    _reporterNs.report("UNLOCK_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
      THEME_TYPE = _unresolved_2.THEME_TYPE;
      TICKET_TYPE = _unresolved_2.TICKET_TYPE;
      UNLOCK_TYPE = _unresolved_2.UNLOCK_TYPE;
    }, function (_unresolved_3) {
      localConfig = _unresolved_3.localConfig;
    }, function (_unresolved_4) {
      resourceUtil = _unresolved_4.resourceUtil;
    }, function (_unresolved_5) {
      clientEvent = _unresolved_5.clientEvent;
    }, function (_unresolved_6) {
      LogEventManager = _unresolved_6.LogEventManager;
    }, function (_unresolved_7) {
      PokiSDKManager = _unresolved_7.PokiSDKManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "064d2zJ6q5MLLaF8e2rRNC0", "ItemTheme", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemTheme
       * DateTime = Fri Oct 11 2024 09:55:31 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemTheme.ts
       * FileBasenameNoExtension = ItemTheme
       * URL = db://assets/scripts/game/ItemTheme.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemTheme", ItemTheme = (_dec = ccclass('ItemTheme'), _dec2 = property(Sprite), _dec3 = property(Node), _dec4 = property(Button), _dec5 = property(Sprite), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Button), _dec14 = property(Button), _dec15 = property(Label), _dec16 = property(Button), _dec17 = property(Label), _dec18 = property(Button), _dec19 = property(Label), _dec(_class = (_class2 = (_temp = class ItemTheme extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "themeType", (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).TUBE);

          _defineProperty(this, "itemID", -1);

          _initializerDefineProperty(this, "icon", _descriptor, this);

          _initializerDefineProperty(this, "iconLoading", _descriptor2, this);

          _initializerDefineProperty(this, "btnItemTheme", _descriptor3, this);

          _initializerDefineProperty(this, "bg", _descriptor4, this);

          _initializerDefineProperty(this, "bgSkin", _descriptor5, this);

          _initializerDefineProperty(this, "bgTube", _descriptor6, this);

          _initializerDefineProperty(this, "objLock", _descriptor7, this);

          _initializerDefineProperty(this, "txtLevel", _descriptor8, this);

          _initializerDefineProperty(this, "objSelected", _descriptor9, this);

          _initializerDefineProperty(this, "iconSelected", _descriptor10, this);

          _initializerDefineProperty(this, "objUnlock", _descriptor11, this);

          _initializerDefineProperty(this, "btnUnlock_Ad", _descriptor12, this);

          _initializerDefineProperty(this, "btnUnlock_TicketGold", _descriptor13, this);

          _initializerDefineProperty(this, "txtUnlock_TicketGold", _descriptor14, this);

          _initializerDefineProperty(this, "btnUnlock_TicketSilver", _descriptor15, this);

          _initializerDefineProperty(this, "txtUnlock_TicketSilver", _descriptor16, this);

          _initializerDefineProperty(this, "btnUnlock_Coin", _descriptor17, this);

          _initializerDefineProperty(this, "txtUnlock_Coin", _descriptor18, this);

          _defineProperty(this, "tweenSelected", null);
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).THEME_SELECT_UPDATE, this.setThemeSelect_Update, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).THEME_UNSELECT_UPDATE, this.setThemeUnselect_Update, this);
          this.btnItemTheme.node.on(Button.EventType.CLICK, this.touchItemTheme, this);
          this.btnUnlock_Ad.node.on(Button.EventType.CLICK, this.touchUnlock_Ad, this);
          this.btnUnlock_TicketGold.node.on(Button.EventType.CLICK, this.touchUnlock_TicketGold, this);
          this.btnUnlock_TicketSilver.node.on(Button.EventType.CLICK, this.touchUnlock_TicketSilver, this);
          this.btnUnlock_Coin.node.on(Button.EventType.CLICK, this.touchUnlock_Coin, this);
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).THEME_SELECT_UPDATE, this.setThemeSelect_Update, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).THEME_UNSELECT_UPDATE, this.setThemeUnselect_Update, this);
          this.btnItemTheme.node.off(Button.EventType.CLICK, this.touchItemTheme, this);
          this.btnUnlock_Ad.node.off(Button.EventType.CLICK, this.touchUnlock_Ad, this);
          this.btnUnlock_TicketGold.node.off(Button.EventType.CLICK, this.touchUnlock_TicketGold, this);
          this.btnUnlock_TicketSilver.node.off(Button.EventType.CLICK, this.touchUnlock_TicketSilver, this);
          this.btnUnlock_Coin.node.off(Button.EventType.CLICK, this.touchUnlock_Coin, this);
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        initInfo(themeType, itemID) {
          this.iconLoading.active = false;
          this.themeType = themeType;
          this.itemID = itemID;

          if (themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).TUBE) {
            this.bg.spriteFrame = this.bgSkin;
          } else if (themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).BG) {
            this.bg.spriteFrame = this.bgTube;
          } else if (themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).SKIN) {
            this.bg.spriteFrame = this.bgSkin;
          }

          this.iconLoading.active = true;
          let strPath = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getThemePath_byItemID(themeType, itemID);
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadSpriteFrame_Bundle(strPath, (err, spriteFrame) => {
            if (err) {
              console.error(err);
              return;
            }

            if (!this.node) {
              return;
            }

            if (themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
              error: Error()
            }), THEME_TYPE) : THEME_TYPE).BG) {
              if (!this.bg) {
                return;
              }

              this.bg.spriteFrame = spriteFrame;
            } else {
              if (!this.icon) {
                return;
              }

              this.icon.spriteFrame = spriteFrame;
              this.icon.node.active = true;
            }

            this.iconLoading.active = false;
          });
          this.showInfo();
        }

        setThemeSelect_Update(themeType, itemID) {
          if (themeType == this.themeType && itemID == this.itemID) {
            if (this.tweenSelected) {
              this.tweenSelected.stop();
            }

            this.iconSelected.setScale(new Vec3(0, 0, 0));
            this.tweenSelected = tween(this.iconSelected).to(0.2, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'backOut'
            }).start();
            this.objSelected.active = true;
            this.btnItemTheme.node.active = false;
            this.objLock.active = false;
            this.objUnlock.active = false;
          }
        }

        setThemeUnselect_Update(themeType, itemID) {
          if (themeType == this.themeType && itemID == this.itemID) {
            this.objSelected.active = false;
            this.btnItemTheme.node.active = true;
          }
        }

        showInfo() {
          this.objLock.active = false;
          this.objSelected.active = false;
          this.objUnlock.active = false;
          this.btnUnlock_TicketGold.node.active = false;
          this.btnUnlock_TicketSilver.node.active = false;
          this.btnUnlock_Coin.node.active = false;
          this.btnUnlock_Ad.node.active = false;
          this.btnItemTheme.node.active = true;

          if (this.itemID == (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getThemeSelected_byThemeType(this.themeType)) {
            if (this.tweenSelected) {
              this.tweenSelected.stop();
            }

            this.iconSelected.setScale(new Vec3(0, 0, 0));
            this.tweenSelected = tween(this.iconSelected).to(0.2, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'backOut'
            }).start();
            this.objSelected.active = true;
            this.btnItemTheme.node.active = false;
          } else {
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.checkThemeUnlocked(this.themeType, this.itemID)) {
              this.btnItemTheme.node.active = true;
            } else {
              if (this.themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
                error: Error()
              }), THEME_TYPE) : THEME_TYPE).TUBE || this.themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
                error: Error()
              }), THEME_TYPE) : THEME_TYPE).BG) {
                let unlockInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.getUnlockProgressInfo_byThemeType(this.themeType, this.itemID);

                if (unlockInfo && (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.currLevelUnlock >= unlockInfo.level) {
                  this.objUnlock.active = true;
                  this.btnUnlock_Ad.node.active = true;
                  this.btnItemTheme.node.active = true;
                } else {
                  this.objLock.active = true;

                  if (unlockInfo) {
                    this.txtLevel.string = `Level ${unlockInfo.level}`;
                  } else {
                    this.txtLevel.string = ``;
                  }

                  this.btnItemTheme.node.active = false;
                }
              } else if (this.themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
                error: Error()
              }), THEME_TYPE) : THEME_TYPE).SKIN) {
                let skinInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.getSkinInfo(this.itemID);

                if (skinInfo) {
                  this.objUnlock.active = true;

                  if (skinInfo.unlockType == (_crd && UNLOCK_TYPE === void 0 ? (_reportPossibleCrUseOfUNLOCK_TYPE({
                    error: Error()
                  }), UNLOCK_TYPE) : UNLOCK_TYPE).TICKET_GOLD) {
                    this.btnUnlock_TicketGold.node.active = true;
                    this.txtUnlock_TicketGold.string = `${skinInfo.price}`;
                  } else if (skinInfo.unlockType == (_crd && UNLOCK_TYPE === void 0 ? (_reportPossibleCrUseOfUNLOCK_TYPE({
                    error: Error()
                  }), UNLOCK_TYPE) : UNLOCK_TYPE).TICKET_SILVER) {
                    this.btnUnlock_TicketSilver.node.active = true;
                    this.txtUnlock_TicketSilver.string = `${skinInfo.price}`;
                  } else if (skinInfo.unlockType == (_crd && UNLOCK_TYPE === void 0 ? (_reportPossibleCrUseOfUNLOCK_TYPE({
                    error: Error()
                  }), UNLOCK_TYPE) : UNLOCK_TYPE).COIN) {
                    this.btnUnlock_Coin.node.active = true;
                    this.txtUnlock_Coin.string = `${skinInfo.price}`;
                  } else if (skinInfo.unlockType == (_crd && UNLOCK_TYPE === void 0 ? (_reportPossibleCrUseOfUNLOCK_TYPE({
                    error: Error()
                  }), UNLOCK_TYPE) : UNLOCK_TYPE).WATCH_AD) {
                    this.btnUnlock_Ad.node.active = true;
                  }

                  this.btnItemTheme.node.active = true;
                } else {
                  this.objLock.active = true;
                  this.txtLevel.string = ``;
                  this.btnItemTheme.node.active = false;
                }
              }
            }
          }
        }

        touchItemTheme() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("itemtheme", "themepopup");

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.checkThemeUnlocked(this.themeType, this.itemID)) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).THEME_UNSELECT_UPDATE, this.themeType, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getThemeSelected_byThemeType(this.themeType));
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setThemeSelected(this.themeType, this.itemID);
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).THEME_SELECT_UPDATE, this.themeType, this.itemID);
          } else {
            if (this.themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
              error: Error()
            }), THEME_TYPE) : THEME_TYPE).TUBE || this.themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
              error: Error()
            }), THEME_TYPE) : THEME_TYPE).BG) {
              // FBInstantManager.instance.Show_RewardedVideoAsync("themepopup","unlock",(err, success) => {
              //     if (err) {
              //     } else {
              //         localConfig.instance.setThemeUnlocked(this.themeType, this.itemID);
              //         LogEventManager.instance.logResourceEarned("theme","bg",this.itemID,"themepopup","watchad");
              //         clientEvent.dispatchEvent(Constants.THEME_UNSELECT_UPDATE, this.themeType, localConfig.instance.getThemeSelected_byThemeType(this.themeType));
              //         localConfig.instance.setThemeSelected(this.themeType, this.itemID);
              //         clientEvent.dispatchEvent(Constants.THEME_SELECT_UPDATE, this.themeType, this.itemID);
              //     }
              // });
              (_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
                error: Error()
              }), PokiSDKManager) : PokiSDKManager).instance.Show_RewardedVideoAsync("themepopup", "unlock", (err, success) => {
                if (err) {} else {
                  (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.setThemeUnlocked(this.themeType, this.itemID);
                  (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                    error: Error()
                  }), LogEventManager) : LogEventManager).instance.logResourceEarned("theme", "bg", this.itemID, "themepopup", "watchad");
                  (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                    error: Error()
                  }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).THEME_UNSELECT_UPDATE, this.themeType, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.getThemeSelected_byThemeType(this.themeType));
                  (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.setThemeSelected(this.themeType, this.itemID);
                  (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                    error: Error()
                  }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).THEME_SELECT_UPDATE, this.themeType, this.itemID);
                }
              });
            } else if (this.themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
              error: Error()
            }), THEME_TYPE) : THEME_TYPE).SKIN) {
              let skinInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getSkinInfo(this.itemID);

              if (skinInfo) {
                if (skinInfo.unlockType == (_crd && UNLOCK_TYPE === void 0 ? (_reportPossibleCrUseOfUNLOCK_TYPE({
                  error: Error()
                }), UNLOCK_TYPE) : UNLOCK_TYPE).WATCH_AD) {
                  // FBInstantManager.instance.Show_RewardedVideoAsync("themepopup","unlock",(err, success) => {
                  //     if (err) {
                  //     } else {
                  //         localConfig.instance.setThemeUnlocked(this.themeType, this.itemID);
                  //         LogEventManager.instance.logResourceEarned("theme","skin",this.itemID,"themepopup","watchad");
                  //         clientEvent.dispatchEvent(Constants.THEME_UNSELECT_UPDATE, this.themeType, localConfig.instance.getThemeSelected_byThemeType(this.themeType));
                  //         localConfig.instance.setThemeSelected(this.themeType, this.itemID);
                  //         clientEvent.dispatchEvent(Constants.THEME_SELECT_UPDATE, this.themeType, this.itemID);
                  //     }
                  // });
                  (_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
                    error: Error()
                  }), PokiSDKManager) : PokiSDKManager).instance.Show_RewardedVideoAsync("themepopup", "unlock", (err, success) => {
                    if (err) {} else {
                      (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                        error: Error()
                      }), localConfig) : localConfig).instance.setThemeUnlocked(this.themeType, this.itemID);
                      (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                        error: Error()
                      }), LogEventManager) : LogEventManager).instance.logResourceEarned("theme", "skin", this.itemID, "themepopup", "watchad");
                      (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                        error: Error()
                      }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                        error: Error()
                      }), Constants) : Constants).THEME_UNSELECT_UPDATE, this.themeType, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                        error: Error()
                      }), localConfig) : localConfig).instance.getThemeSelected_byThemeType(this.themeType));
                      (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                        error: Error()
                      }), localConfig) : localConfig).instance.setThemeSelected(this.themeType, this.itemID);
                      (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                        error: Error()
                      }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                        error: Error()
                      }), Constants) : Constants).THEME_SELECT_UPDATE, this.themeType, this.itemID);
                    }
                  });
                } else if (skinInfo.unlockType == (_crd && UNLOCK_TYPE === void 0 ? (_reportPossibleCrUseOfUNLOCK_TYPE({
                  error: Error()
                }), UNLOCK_TYPE) : UNLOCK_TYPE).TICKET_GOLD) {
                  if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.getTicketCount((_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
                    error: Error()
                  }), TICKET_TYPE) : TICKET_TYPE).GOLD) >= skinInfo.price) {
                    (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.setTicketCount((_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
                      error: Error()
                    }), TICKET_TYPE) : TICKET_TYPE).GOLD, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.getTicketCount((_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
                      error: Error()
                    }), TICKET_TYPE) : TICKET_TYPE).GOLD) - skinInfo.price); // console.log(this.themeType, this.itemID);

                    (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.setThemeUnlocked(this.themeType, this.itemID);
                    (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                      error: Error()
                    }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).THEME_UNSELECT_UPDATE, this.themeType, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.getThemeSelected_byThemeType(this.themeType));
                    (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.setThemeSelected(this.themeType, this.itemID);
                    (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                      error: Error()
                    }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).THEME_SELECT_UPDATE, this.themeType, this.itemID);
                  } else {
                    (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                      error: Error()
                    }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).SHOW_NOTIFICATION, "Not Enough Ticket!");
                  }
                } else if (skinInfo.unlockType == (_crd && UNLOCK_TYPE === void 0 ? (_reportPossibleCrUseOfUNLOCK_TYPE({
                  error: Error()
                }), UNLOCK_TYPE) : UNLOCK_TYPE).TICKET_SILVER) {
                  if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.getTicketCount((_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
                    error: Error()
                  }), TICKET_TYPE) : TICKET_TYPE).SILVER) >= skinInfo.price) {
                    (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.setTicketCount((_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
                      error: Error()
                    }), TICKET_TYPE) : TICKET_TYPE).SILVER, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.getTicketCount((_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
                      error: Error()
                    }), TICKET_TYPE) : TICKET_TYPE).SILVER) - skinInfo.price);
                    (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.setThemeUnlocked(this.themeType, this.itemID);
                    (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                      error: Error()
                    }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).THEME_UNSELECT_UPDATE, this.themeType, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.getThemeSelected_byThemeType(this.themeType));
                    (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.setThemeSelected(this.themeType, this.itemID);
                    (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                      error: Error()
                    }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).THEME_SELECT_UPDATE, this.themeType, this.itemID);
                  } else {
                    (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                      error: Error()
                    }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).SHOW_NOTIFICATION, "Not Enough Ticket!");
                  }
                } else if (skinInfo.unlockType == (_crd && UNLOCK_TYPE === void 0 ? (_reportPossibleCrUseOfUNLOCK_TYPE({
                  error: Error()
                }), UNLOCK_TYPE) : UNLOCK_TYPE).COIN) {
                  if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.currCoin >= skinInfo.price) {
                    (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.setCoin((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.currCoin - skinInfo.price);
                    (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                      error: Error()
                    }), LogEventManager) : LogEventManager).instance.logResourceSpend("currency", "coin", skinInfo.price, "themepopup", "unlock");
                    (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.setThemeUnlocked(this.themeType, this.itemID);
                    (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                      error: Error()
                    }), LogEventManager) : LogEventManager).instance.logResourceEarned("theme", "skin", this.itemID, "themepopup", "exchange");
                    (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                      error: Error()
                    }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).THEME_UNSELECT_UPDATE, this.themeType, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.getThemeSelected_byThemeType(this.themeType));
                    (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.setThemeSelected(this.themeType, this.itemID);
                    (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                      error: Error()
                    }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).THEME_SELECT_UPDATE, this.themeType, this.itemID);
                  } else {
                    (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                      error: Error()
                    }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                      error: Error()
                    }), Constants) : Constants).SHOW_NOTIFICATION, "Not Enough Coin!");
                  }
                }
              }
            }
          }
        }

        touchUnlock_Ad() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("unlockad", "themepopup"); // FBInstantManager.instance.Show_RewardedVideoAsync("themepopup","unlock",(err, success) => {
          //     if (err) {
          //     } else {
          //         localConfig.instance.setThemeUnlocked(this.themeType, this.itemID);
          //         if (this.themeType == THEME_TYPE.BG) {
          //             LogEventManager.instance.logResourceEarned("theme", "bg", this.itemID, "themepopup", "watchad");
          //         } else if (this.themeType == THEME_TYPE.SKIN) {
          //             LogEventManager.instance.logResourceEarned("theme", "skin", this.itemID, "themepopup", "watchad");
          //         }
          //         clientEvent.dispatchEvent(Constants.THEME_UNSELECT_UPDATE, this.themeType, localConfig.instance.getThemeSelected_byThemeType(this.themeType));
          //         localConfig.instance.setThemeSelected(this.themeType, this.itemID);
          //         clientEvent.dispatchEvent(Constants.THEME_SELECT_UPDATE, this.themeType, this.itemID);
          //     }
          // });

          (_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
            error: Error()
          }), PokiSDKManager) : PokiSDKManager).instance.Show_RewardedVideoAsync("themepopup", "unlock", (err, success) => {
            if (err) {} else {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.setThemeUnlocked(this.themeType, this.itemID);

              if (this.themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
                error: Error()
              }), THEME_TYPE) : THEME_TYPE).BG) {
                (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                  error: Error()
                }), LogEventManager) : LogEventManager).instance.logResourceEarned("theme", "bg", this.itemID, "themepopup", "watchad");
              } else if (this.themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
                error: Error()
              }), THEME_TYPE) : THEME_TYPE).SKIN) {
                (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                  error: Error()
                }), LogEventManager) : LogEventManager).instance.logResourceEarned("theme", "skin", this.itemID, "themepopup", "watchad");
              }

              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).THEME_UNSELECT_UPDATE, this.themeType, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getThemeSelected_byThemeType(this.themeType));
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.setThemeSelected(this.themeType, this.itemID);
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).THEME_SELECT_UPDATE, this.themeType, this.itemID);
            }
          });
        }

        touchUnlock_TicketGold() {
          let skinInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getSkinInfo(this.itemID);

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getTicketCount((_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
            error: Error()
          }), TICKET_TYPE) : TICKET_TYPE).GOLD) >= skinInfo.price) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setThemeUnlocked(this.themeType, this.itemID);
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setTicketCount((_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
              error: Error()
            }), TICKET_TYPE) : TICKET_TYPE).GOLD, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getTicketCount((_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
              error: Error()
            }), TICKET_TYPE) : TICKET_TYPE).GOLD) - skinInfo.price);
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).THEME_UNSELECT_UPDATE, this.themeType, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getThemeSelected_byThemeType(this.themeType));
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setThemeSelected(this.themeType, this.itemID);
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).THEME_SELECT_UPDATE, this.themeType, this.itemID);
          } else {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_NOTIFICATION, "Not Enough Ticket!");
          }
        }

        touchUnlock_TicketSilver() {
          let skinInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getSkinInfo(this.itemID);

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getTicketCount((_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
            error: Error()
          }), TICKET_TYPE) : TICKET_TYPE).SILVER) >= skinInfo.price) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setThemeUnlocked(this.themeType, this.itemID);
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setTicketCount((_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
              error: Error()
            }), TICKET_TYPE) : TICKET_TYPE).SILVER, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getTicketCount((_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
              error: Error()
            }), TICKET_TYPE) : TICKET_TYPE).SILVER) - skinInfo.price);
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).THEME_UNSELECT_UPDATE, this.themeType, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getThemeSelected_byThemeType(this.themeType));
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setThemeSelected(this.themeType, this.itemID);
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).THEME_SELECT_UPDATE, this.themeType, this.itemID);
          } else {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_NOTIFICATION, "Not Enough Ticket!");
          }
        }

        touchUnlock_Coin() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("unlockcoin", "themepopup");
          let skinInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getSkinInfo(this.itemID);

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currCoin >= skinInfo.price) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setThemeUnlocked(this.themeType, this.itemID);

            if (this.themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
              error: Error()
            }), THEME_TYPE) : THEME_TYPE).BG) {
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logResourceEarned("theme", "bg", this.itemID, "themepopup", "exchange");
            } else if (this.themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
              error: Error()
            }), THEME_TYPE) : THEME_TYPE).SKIN) {
              (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
                error: Error()
              }), LogEventManager) : LogEventManager).instance.logResourceEarned("theme", "skin", this.itemID, "themepopup", "exchange");
            }

            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setCoin((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currCoin - skinInfo.price);
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logResourceSpend("currency", "coin", skinInfo.price, "themepopup", "unlock");
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).THEME_UNSELECT_UPDATE, this.themeType, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getThemeSelected_byThemeType(this.themeType));
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setThemeSelected(this.themeType, this.itemID);
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).THEME_SELECT_UPDATE, this.themeType, this.itemID);
          } else {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_NOTIFICATION, "Not Enough Coin!");
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconLoading", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnItemTheme", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bgSkin", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bgTube", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "objLock", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "txtLevel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "objSelected", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "iconSelected", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "objUnlock", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "btnUnlock_Ad", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "btnUnlock_TicketGold", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "txtUnlock_TicketGold", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "btnUnlock_TicketSilver", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "txtUnlock_TicketSilver", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "btnUnlock_Coin", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "txtUnlock_Coin", [_dec19], {
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
//# sourceMappingURL=ItemTheme.js.map