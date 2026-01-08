System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Label, Node, Sprite, SpriteFrame, tween, UIOpacity, Vec3, BasePopup, THEME_TYPE, localConfig, resourceUtil, AudioManager2, LogEventManager, PokiSDKManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _temp, _crd, ccclass, property, ThemeUnlockPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasePopup(extras) {
    _reporterNs.report("BasePopup", "../common/basePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTHEME_TYPE(extras) {
    _reporterNs.report("THEME_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "../framework/audioManager2", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BasePopup = _unresolved_2.BasePopup;
    }, function (_unresolved_3) {
      THEME_TYPE = _unresolved_3.THEME_TYPE;
    }, function (_unresolved_4) {
      localConfig = _unresolved_4.localConfig;
    }, function (_unresolved_5) {
      resourceUtil = _unresolved_5.resourceUtil;
    }, function (_unresolved_6) {
      AudioManager2 = _unresolved_6.AudioManager2;
    }, function (_unresolved_7) {
      LogEventManager = _unresolved_7.LogEventManager;
    }, function (_unresolved_8) {
      PokiSDKManager = _unresolved_8.PokiSDKManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9b1efe32oFIrqeAE0Q/Q6kh", "ThemeUnlockPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ThemeUnlockPopup
       * DateTime = Fri Oct 25 2024 10:10:08 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ThemeUnlockPopup.ts
       * FileBasenameNoExtension = ThemeUnlockPopup
       * URL = db://assets/scripts/game/ThemeUnlockPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ThemeUnlockPopup", ThemeUnlockPopup = (_dec = ccclass('ThemeUnlockPopup'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(Node), _dec7 = property(Button), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(UIOpacity), _dec11 = property(Node), _dec12 = property(Button), _dec13 = property(Node), _dec14 = property(UIOpacity), _dec(_class = (_class2 = (_temp = class ThemeUnlockPopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "iconTheme", _descriptor, this);

          _initializerDefineProperty(this, "bgTheme", _descriptor2, this);

          _initializerDefineProperty(this, "sfBGThemeBG", _descriptor3, this);

          _initializerDefineProperty(this, "sfBGThemeTube", _descriptor4, this);

          _initializerDefineProperty(this, "iconLoading", _descriptor5, this);

          _initializerDefineProperty(this, "btnClaim", _descriptor6, this);

          _initializerDefineProperty(this, "txtClaim", _descriptor7, this);

          _initializerDefineProperty(this, "nodeClaim", _descriptor8, this);

          _initializerDefineProperty(this, "nodeClaim_Opacity", _descriptor9, this);

          _initializerDefineProperty(this, "iconAD", _descriptor10, this);

          _initializerDefineProperty(this, "btnNoThanks", _descriptor11, this);

          _initializerDefineProperty(this, "nodeNoThanks", _descriptor12, this);

          _initializerDefineProperty(this, "nodeNoThanks_Opacity", _descriptor13, this);

          _defineProperty(this, "themeType", null);

          _defineProperty(this, "itemID", -1);
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

        showThemeUnlockPopup(themeType, itemID) {
          this.themeType = themeType;
          this.itemID = itemID;
          this.iconLoading.active = true;
          this.iconTheme.node.active = false;
          this.btnClaim.node.active = false;
          this.btnNoThanks.node.active = false;

          if (themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).TUBE) {
            this.bgTheme.spriteFrame = this.sfBGThemeTube;
          } else if (themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).BG) {
            this.bgTheme.spriteFrame = this.sfBGThemeBG;
          }

          this.unschedule(this.showButtons_Step1);
          this.unschedule(this.showButtons_Step2);
          this.loadIconTheme(this.themeType, this.itemID);
          super.showPopup();
        }

        showPoup_ShowView_Finished() {
          super.showPoup_ShowView_Finished();
          this.schedule(this.showButtons_Step1, 1, 0, 0.5);
        }

        showButtons_Step1() {
          this.schedule(this.showButtons_Step2, 1, 0, 2);
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

        loadIconTheme(themeType, itemID) {
          var strPath = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
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
            }), THEME_TYPE) : THEME_TYPE).TUBE) {
              if (!this.iconTheme) {
                return;
              }

              this.iconTheme.spriteFrame = spriteFrame;
              this.iconTheme.node.active = true;
            } else if (themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
              error: Error()
            }), THEME_TYPE) : THEME_TYPE).BG) {
              if (!this.bgTheme) {
                return;
              }

              this.bgTheme.spriteFrame = spriteFrame;
            }

            this.iconLoading.active = false;
          });
        }

        touchClaim() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("claim", "themeunlockpopup"); // FBInstantManager.instance.Show_RewardedVideoAsync("themeunlockpopup","claim",(err, success) => {
          //    if(err){
          //    }else{
          //         this.setClaimRewards();
          //    } 
          // });

          (_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
            error: Error()
          }), PokiSDKManager) : PokiSDKManager).instance.Show_RewardedVideoAsync("themeunlockpopup", "claim", (err, success) => {
            if (err) {} else {
              this.setClaimRewards();
            }
          });
        }

        setClaimRewards() {
          this.hidePopup();
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.setThemeUnlocked(this.themeType, this.itemID);
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.setThemeSelected(this.themeType, this.itemID);
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logResourceEarned("theme", "bg", this.itemID, "themeunlockpopup", "watchad");
        }

        touchClose() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("close", "themeunlockpopup");
          this.hidePopup();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "iconTheme", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bgTheme", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sfBGThemeBG", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sfBGThemeTube", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "iconLoading", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnClaim", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "txtClaim", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "nodeClaim", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nodeClaim_Opacity", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "iconAD", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "btnNoThanks", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "nodeNoThanks", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "nodeNoThanks_Opacity", [_dec14], {
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
//# sourceMappingURL=ThemeUnlockPopup.js.map