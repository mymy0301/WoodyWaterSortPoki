System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Label, Node, Sprite, SpriteFrame, tween, UIOpacity, Vec3, Widget, BasePopup, Constants, AudioManager2, FBInstantManager, localConfig, Utils, resourceUtil, clientEvent, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _temp, _crd, ccclass, property, WinWithFriendPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasePopup(extras) {
    _reporterNs.report("BasePopup", "../../common/basePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWithFriendDataInfo(extras) {
    _reporterNs.report("WithFriendDataInfo", "./WithFriendDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "../../framework/audioManager2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "../../common/FBInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../core/utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      BasePopup = _unresolved_2.BasePopup;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
    }, function (_unresolved_4) {
      AudioManager2 = _unresolved_4.AudioManager2;
    }, function (_unresolved_5) {
      FBInstantManager = _unresolved_5.FBInstantManager;
    }, function (_unresolved_6) {
      localConfig = _unresolved_6.localConfig;
    }, function (_unresolved_7) {
      Utils = _unresolved_7.default;
    }, function (_unresolved_8) {
      resourceUtil = _unresolved_8.resourceUtil;
    }, function (_unresolved_9) {
      clientEvent = _unresolved_9.clientEvent;
    }, function (_unresolved_10) {
      LogEventManager = _unresolved_10.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc2d3z6VkRCn7ll99hurLlB", "WinWithFriendPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = WinWithFriendPopup
       * DateTime = Mon Mar 24 2025 09:49:20 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = WinWithFriendPopup.ts
       * FileBasenameNoExtension = WinWithFriendPopup
       * URL = db://assets/scripts/game/withFriends/WinWithFriendPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("WinWithFriendPopup", WinWithFriendPopup = (_dec = ccclass('WinWithFriendPopup'), _dec2 = property(Widget), _dec3 = property(Node), _dec4 = property(Sprite), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Sprite), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Node), _dec12 = property(SpriteFrame), _dec13 = property(Button), _dec14 = property(UIOpacity), _dec15 = property(Button), _dec16 = property(Button), _dec17 = property(UIOpacity), _dec18 = property(Node), _dec19 = property(UIOpacity), _dec(_class = (_class2 = (_temp = class WinWithFriendPopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "groupAllTopWidget", _descriptor, this);

          _initializerDefineProperty(this, "groupWithFriend", _descriptor2, this);

          _initializerDefineProperty(this, "playerAvatar", _descriptor3, this);

          _initializerDefineProperty(this, "playerName", _descriptor4, this);

          _initializerDefineProperty(this, "playerScore", _descriptor5, this);

          _initializerDefineProperty(this, "nodePlayerWin", _descriptor6, this);

          _initializerDefineProperty(this, "friendAvatar", _descriptor7, this);

          _initializerDefineProperty(this, "friendName", _descriptor8, this);

          _initializerDefineProperty(this, "friendScore", _descriptor9, this);

          _initializerDefineProperty(this, "nodeFriendWin", _descriptor10, this);

          _initializerDefineProperty(this, "sfAvatarDefault", _descriptor11, this);

          _initializerDefineProperty(this, "btnShare", _descriptor12, this);

          _initializerDefineProperty(this, "nodeShare_Opacity", _descriptor13, this);

          _initializerDefineProperty(this, "btnHome", _descriptor14, this);

          _initializerDefineProperty(this, "btnReplay", _descriptor15, this);

          _initializerDefineProperty(this, "nodeReplay_Opacity", _descriptor16, this);

          _defineProperty(this, "withFriendDataInfo", null);

          _initializerDefineProperty(this, "titleGroup", _descriptor17, this);

          _initializerDefineProperty(this, "titleGroup_Opacity", _descriptor18, this);

          _defineProperty(this, "tweenTitleGroup", null);

          _defineProperty(this, "tweenTitleGroup_Opacity", null);
        }

        onEnable() {
          super.onEnable();
          this.btnShare.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchShare, this);
          this.btnHome.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchHome, this);
          this.btnReplay.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchReplay, this);
        }

        onDisable() {
          super.onDisable();
          this.btnShare.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchShare, this);
          this.btnHome.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchHome, this);
          this.btnReplay.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchReplay, this);
        }

        start() {
          this.initAllTop();
        }

        initAllTop() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isMobile) {
            var posY = ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.scaleBG - 1) * (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.DEFAULT_H / 2;

            if (posY > 0) {
              this.groupAllTopWidget.top = -posY;
            } else {
              this.groupAllTopWidget.top = 0;
            }
          } else {
            this.groupAllTopWidget.top = 0;
          }
        }

        showWinWithFriendPopup(_withFriendDataInfo, _score) {
          this.withFriendDataInfo = _withFriendDataInfo;
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playSound_WIN2();
          this.btnShare.node.active = false;
          this.btnReplay.node.active = false;
          this.groupWithFriend.active = false;
          this.titleGroup_Opacity.opacity = 0;
          this.nodePlayerWin.active = false;
          this.nodeFriendWin.active = false;
          this.playerName.string = "" + (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.getName();

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.myAvatarSpriteFrame) {
            this.playerAvatar.spriteFrame = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.myAvatarSpriteFrame;
          }

          this.friendAvatar.spriteFrame = this.sfAvatarDefault;
          this.playerScore.string = "" + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).formatNumber(Math.floor(_score)); // console.log("initWithFriendGroupinitWithFriendGroup",this.withFriendDataInfo);

          if (this.withFriendDataInfo.senderID == (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.getID()) {
            //SENDER == PLAYER
            if (this.withFriendDataInfo.receiverName.length == 0) {
              this.friendName.string = "Your Friend";
            } else {
              this.friendName.string = "" + this.withFriendDataInfo.receiverName;
            }

            if (this.withFriendDataInfo.receiverScore == 0) {
              this.friendScore.string = "???";
              this.nodePlayerWin.active = false;
            } else {
              this.friendScore.string = "" + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).formatNumber(Math.floor(this.withFriendDataInfo.receiverScore));

              if (this.withFriendDataInfo.receiverScore > _score) {
                this.nodeFriendWin.active = true;
              } else {
                this.nodePlayerWin.active = true;
              }
            }

            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.mapCacheAvatars.has(this.withFriendDataInfo.receiverID)) {
              if (this.friendAvatar) {
                this.friendAvatar.spriteFrame = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.mapCacheAvatars.get(this.withFriendDataInfo.receiverID);
              }
            } else {
              if (this.withFriendDataInfo.receiverAvatarURL.length == 0) {} else {
                (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
                  error: Error()
                }), resourceUtil) : resourceUtil).setRemoteImage(this.withFriendDataInfo.receiverAvatarURL, this.friendAvatar, (err, sf) => {
                  if (err) {
                    this.friendAvatar.spriteFrame = null;
                  } else {
                    (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.mapCacheAvatars.set(this.withFriendDataInfo.receiverID, sf);
                  }
                });
              }
            }
          } else if (this.withFriendDataInfo.receiverID == (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.getID()) {
            //RECEIVER == PLAYER
            if (this.withFriendDataInfo.senderName.length == 0) {
              this.friendName.string = "Your Friend";
            } else {
              this.friendName.string = "" + this.withFriendDataInfo.senderName;
            }

            if (this.withFriendDataInfo.senderScore == 0) {
              this.friendScore.string = "???";
              this.nodePlayerWin.active = true;
            } else {
              this.friendScore.string = "" + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).formatNumber(Math.floor(this.withFriendDataInfo.senderScore));

              if (this.withFriendDataInfo.senderScore > _score) {
                this.nodeFriendWin.active = true;
              } else {
                this.nodePlayerWin.active = true;
              }
            }

            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.mapCacheAvatars.has(this.withFriendDataInfo.senderID)) {
              if (this.friendAvatar) {
                this.friendAvatar.spriteFrame = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.mapCacheAvatars.get(this.withFriendDataInfo.senderID);
              }
            } else {
              if (this.withFriendDataInfo.senderAvatarURL.length == 0) {} else {
                (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
                  error: Error()
                }), resourceUtil) : resourceUtil).setRemoteImage(this.withFriendDataInfo.senderAvatarURL, this.friendAvatar, (err, sf) => {
                  if (err) {
                    this.friendAvatar.spriteFrame = null;
                  } else {
                    (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.mapCacheAvatars.set(this.withFriendDataInfo.senderID, sf);
                  }
                });
              }
            }
          }

          super.showPopup();
        }

        showPoup_ShowView() {
          // clientEvent.dispatchEvent(Constants.SHOW_EFX_FIREWORK);
          if (this.tweenOpacityBG) {
            this.tweenOpacityBG.stop();
          }

          this.tweenOpacityBG = tween(this.bgOpacity).to(0.3, {
            opacity: 255
          }, {
            easing: 'quadOut',
            onComplete: () => {
              this.showPoup_ShowView_Finished();
            }
          }).start();
        }

        showPoup_ShowView_Finished() {
          super.showPoup_ShowView_Finished();

          if (this.tweenTitleGroup) {
            this.tweenTitleGroup.stop();
          }

          if (this.tweenTitleGroup_Opacity) {
            this.tweenTitleGroup_Opacity.stop();
          }

          this.titleGroup.setScale(new Vec3(1.5, 1.5, 1.5));
          this.titleGroup_Opacity.opacity = 150;
          this.tweenTitleGroup = tween(this.titleGroup).to(0.4, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut',
            onComplete: () => {}
          }).start();
          this.tweenTitleGroup_Opacity = tween(this.titleGroup_Opacity).to(0.3, {
            opacity: 255
          }, {
            easing: 'quadOut'
          }).start();
          this.scheduleOnce(() => {
            this.groupWithFriend.active = true;
            this.showButton_Step1();
          }, 0.2);
        }

        showButton_Step1() {
          this.btnShare.node.active = true;
          this.nodeShare_Opacity.opacity = 150;
          this.btnShare.node.setScale(new Vec3(0.5, 0.5, 0.5));
          tween(this.btnShare.node).to(0.3, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut'
          }).start();
          tween(this.nodeShare_Opacity).to(0.3, {
            opacity: 255
          }, {
            easing: 'quadOut'
          }).start();
          this.scheduleOnce(() => {
            this.showButton_Step2();
          }, 0.2);
        }

        showButton_Step2() {
          this.btnReplay.node.active = true;
          this.btnReplay.node.setScale(new Vec3(0.5, 0.5, 0.5));
          this.nodeReplay_Opacity.opacity = 150;
          tween(this.btnReplay.node).to(0.3, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut'
          }).start();
          tween(this.nodeReplay_Opacity).to(0.3, {
            opacity: 255
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
        }

        touchShare() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("share", "winwithfriendpopup");
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SHARE_WITHFRIEND_POPUP);
        }

        touchHome() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("home", "winwithfriendpopup");
          this.hidePopup();
          (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.resetContext(() => {});
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currWithFriendDataInfo = null;
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).WINPOPUP_WITHFRIEND_TOUCH_HOME);
        }

        touchReplay() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("replay", "winwithfriendpopup");
          this.hidePopup();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).WITHFRIEND_TOUCH_REPLAY);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "groupAllTopWidget", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "groupWithFriend", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "playerAvatar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "playerName", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "playerScore", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodePlayerWin", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "friendAvatar", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "friendName", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "friendScore", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "nodeFriendWin", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "sfAvatarDefault", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "btnShare", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "nodeShare_Opacity", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "btnHome", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "btnReplay", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "nodeReplay_Opacity", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "titleGroup", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "titleGroup_Opacity", [_dec19], {
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
//# sourceMappingURL=WinWithFriendPopup.js.map