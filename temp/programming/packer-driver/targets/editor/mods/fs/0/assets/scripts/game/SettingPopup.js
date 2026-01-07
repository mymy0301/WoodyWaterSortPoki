System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Node, Vec3, BasePopup, UIOnOffItem, localConfig, MusicManager, clientEvent, Constants, GAME_MODE, GAME_STATE, PLAY_TYPE, FBInstantManager, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _temp, _crd, ccclass, property, SettingPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasePopup(extras) {
    _reporterNs.report("BasePopup", "../common/basePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIOnOffItem(extras) {
    _reporterNs.report("UIOnOffItem", "../common/UIOnOffItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMusicManager(extras) {
    _reporterNs.report("MusicManager", "../framework/musicManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGAME_MODE(extras) {
    _reporterNs.report("GAME_MODE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGAME_STATE(extras) {
    _reporterNs.report("GAME_STATE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPLAY_TYPE(extras) {
    _reporterNs.report("PLAY_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "../common/FBInstantManager", _context.meta, extras);
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
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BasePopup = _unresolved_2.BasePopup;
    }, function (_unresolved_3) {
      UIOnOffItem = _unresolved_3.UIOnOffItem;
    }, function (_unresolved_4) {
      localConfig = _unresolved_4.localConfig;
    }, function (_unresolved_5) {
      MusicManager = _unresolved_5.MusicManager;
    }, function (_unresolved_6) {
      clientEvent = _unresolved_6.clientEvent;
    }, function (_unresolved_7) {
      Constants = _unresolved_7.Constants;
      GAME_MODE = _unresolved_7.GAME_MODE;
      GAME_STATE = _unresolved_7.GAME_STATE;
      PLAY_TYPE = _unresolved_7.PLAY_TYPE;
    }, function (_unresolved_8) {
      FBInstantManager = _unresolved_8.FBInstantManager;
    }, function (_unresolved_9) {
      LogEventManager = _unresolved_9.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d09fd1XInBMN4nsS4YOAVRJ", "SettingPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = SettingPopup
       * DateTime = Thu Sep 26 2024 17:33:34 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = SettingPopup.ts
       * FileBasenameNoExtension = SettingPopup
       * URL = db://assets/scripts/game/SettingPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("SettingPopup", SettingPopup = (_dec = ccclass('SettingPopup'), _dec2 = property(Button), _dec3 = property(_crd && UIOnOffItem === void 0 ? (_reportPossibleCrUseOfUIOnOffItem({
        error: Error()
      }), UIOnOffItem) : UIOnOffItem), _dec4 = property(Button), _dec5 = property(_crd && UIOnOffItem === void 0 ? (_reportPossibleCrUseOfUIOnOffItem({
        error: Error()
      }), UIOnOffItem) : UIOnOffItem), _dec6 = property(Node), _dec7 = property(Button), _dec8 = property(_crd && UIOnOffItem === void 0 ? (_reportPossibleCrUseOfUIOnOffItem({
        error: Error()
      }), UIOnOffItem) : UIOnOffItem), _dec9 = property(Button), _dec10 = property(_crd && UIOnOffItem === void 0 ? (_reportPossibleCrUseOfUIOnOffItem({
        error: Error()
      }), UIOnOffItem) : UIOnOffItem), _dec11 = property(Button), _dec12 = property(Button), _dec13 = property(Button), _dec14 = property(Button), _dec15 = property(Button), _dec16 = property(Button), _dec17 = property(Button), _dec18 = property(Button), _dec(_class = (_class2 = (_temp = class SettingPopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "btnMusic", _descriptor, this);

          _initializerDefineProperty(this, "itemMusic", _descriptor2, this);

          _initializerDefineProperty(this, "btnSound", _descriptor3, this);

          _initializerDefineProperty(this, "itemSound", _descriptor4, this);

          _initializerDefineProperty(this, "objVibration", _descriptor5, this);

          _initializerDefineProperty(this, "btnVibrate", _descriptor6, this);

          _initializerDefineProperty(this, "itemVibrate", _descriptor7, this);

          _initializerDefineProperty(this, "btnTops", _descriptor8, this);

          _initializerDefineProperty(this, "itemTops", _descriptor9, this);

          _initializerDefineProperty(this, "btnLanguage", _descriptor10, this);

          _initializerDefineProperty(this, "btnHome", _descriptor11, this);

          _initializerDefineProperty(this, "btnContinue", _descriptor12, this);

          _initializerDefineProperty(this, "btnShare", _descriptor13, this);

          _initializerDefineProperty(this, "btnLike", _descriptor14, this);

          _initializerDefineProperty(this, "btnJoinGroup", _descriptor15, this);

          _initializerDefineProperty(this, "btnCreatShortcut", _descriptor16, this);

          _initializerDefineProperty(this, "btnInviteFriend", _descriptor17, this);
        }

        onEnable() {
          super.onEnable();
          this.btnMusic.node.on(Button.EventType.CLICK, this.touchMusic, this);
          this.btnSound.node.on(Button.EventType.CLICK, this.touchSound, this);
          this.btnVibrate.node.on(Button.EventType.CLICK, this.touchVibrate, this);
          this.btnTops.node.on(Button.EventType.CLICK, this.touchTops, this);
          this.btnLanguage.node.on(Button.EventType.CLICK, this.touchLanguage, this);

          if (this.btnJoinGroup) {
            this.btnJoinGroup.node.on(Button.EventType.CLICK, this.touchJoinGroup, this);
          }

          if (this.btnShare) {
            this.btnShare.node.on(Button.EventType.CLICK, this.touchShare, this);
          }

          if (this.btnLike) {
            this.btnLike.node.on(Button.EventType.CLICK, this.touchLike, this);
          }

          if (this.btnInviteFriend) {
            this.btnInviteFriend.node.on(Button.EventType.CLICK, this.touchInvite, this);
          }

          if (this.btnCreatShortcut) {
            this.btnCreatShortcut.node.on(Button.EventType.CLICK, this.touchCreateShortcut, this);
          }

          if (this.btnHome) {
            this.btnHome.node.on(Button.EventType.CLICK, this.touchHome, this);
          }

          if (this.btnContinue) {
            this.btnContinue.node.on(Button.EventType.CLICK, this.touchContinue, this);
          }

          this.objVibration.active = false;
          this.showCreateShortcut();
        }

        onDisable() {
          super.onDisable();
          this.btnMusic.node.off(Button.EventType.CLICK, this.touchMusic, this);
          this.btnSound.node.off(Button.EventType.CLICK, this.touchSound, this);
          this.btnVibrate.node.off(Button.EventType.CLICK, this.touchVibrate, this);
          this.btnTops.node.off(Button.EventType.CLICK, this.touchTops, this);
          this.btnLanguage.node.off(Button.EventType.CLICK, this.touchLanguage, this);

          if (this.btnJoinGroup) {
            this.btnJoinGroup.node.off(Button.EventType.CLICK, this.touchJoinGroup, this);
          }

          if (this.btnShare) {
            this.btnShare.node.off(Button.EventType.CLICK, this.touchShare, this);
          }

          if (this.btnLike) {
            this.btnLike.node.off(Button.EventType.CLICK, this.touchLike, this);
          }

          if (this.btnInviteFriend) {
            this.btnInviteFriend.node.off(Button.EventType.CLICK, this.touchInvite, this);
          }

          if (this.btnCreatShortcut) {
            this.btnCreatShortcut.node.off(Button.EventType.CLICK, this.touchCreateShortcut, this);
          }

          if (this.btnHome) {
            this.btnHome.node.off(Button.EventType.CLICK, this.touchHome, this);
          }

          if (this.btnContinue) {
            this.btnContinue.node.off(Button.EventType.CLICK, this.touchContinue, this);
          }
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        showSettingPopup() {
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameState = (_crd && GAME_STATE === void 0 ? (_reportPossibleCrUseOfGAME_STATE({
            error: Error()
          }), GAME_STATE) : GAME_STATE).PAUSE;
          this.showInfo();
          super.showPopup();
        }

        showPausePopup() {
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameState = (_crd && GAME_STATE === void 0 ? (_reportPossibleCrUseOfGAME_STATE({
            error: Error()
          }), GAME_STATE) : GAME_STATE).PAUSE;
          this.showInfo();

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).NORMAL) {
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevelUnlock <= (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.LEVEL_SHOW_HOME) {
              this.btnHome.node.active = false;
              this.btnContinue.node.active = true;
              this.btnContinue.node.setPosition(new Vec3(0, -402, 0));
            } else {
              this.btnHome.node.active = true;
              this.btnContinue.node.active = true;
              this.btnContinue.node.setPosition(new Vec3(194, -402, 0));
            }
          } else {
            this.btnHome.node.active = true;
            this.btnContinue.node.active = true;
          }

          super.showPopup();
        }

        showInfo() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isMusic) {
            this.itemMusic.setItemON();
          } else {
            this.itemMusic.setItemOFF();
          }

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) {
            this.itemSound.setItemON();
          } else {
            this.itemSound.setItemOFF();
          }

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isVibration) {
            this.itemVibrate.setItemON();
          } else {
            this.itemVibrate.setItemOFF();
          }

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isTops) {
            this.itemTops.setItemON();
          } else {
            this.itemTops.setItemOFF();
          }
        }

        touchMusic() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("music", "settingpopup");

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isMusic) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setMusic(false);
            this.itemMusic.switchItemOFF();
            (_crd && MusicManager === void 0 ? (_reportPossibleCrUseOfMusicManager({
              error: Error()
            }), MusicManager) : MusicManager).instance.pauseMusic();
          } else {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setMusic(true);
            this.itemMusic.switchItemON();
            (_crd && MusicManager === void 0 ? (_reportPossibleCrUseOfMusicManager({
              error: Error()
            }), MusicManager) : MusicManager).instance.resumeMusic();
          }
        }

        touchSound() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("sound", "settingpopup");

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setSound(false);
            this.itemSound.switchItemOFF();
          } else {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setSound(true);
            this.itemSound.switchItemON();
          }
        }

        touchVibrate() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("vibration", "settingpopup");

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isVibration) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setVibration(false);
            this.itemVibrate.switchItemOFF();
          } else {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setVibration(true);
            this.itemVibrate.switchItemON();
          }
        }

        touchTops() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("tops", "settingpopup");

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isTops) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setTops(false);
            this.itemTops.switchItemOFF();
          } else {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setTops(true);
            this.itemTops.switchItemON();
          }
        }

        touchLanguage() {
          // console.log("touchLanguage");
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_LANGUAGE_POPUP);
        }

        touchJoinGroup() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("joinGroup", "settingpopup"); // console.log("touchJoinGroup");

          (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.joinOfficialGroup();
        }

        touchHome() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("home", "settingpopup"); // console.log("touchHome");

          this.hidePopup();

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).TOURNAMENT || (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).TOURNAMENT_PAGEHOST) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_TOURNAMENTQUIT_POPUP);
          } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).DAILY_CHALLENGE) {
            let indexDay = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getCountDay_From_Start((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currInfoDaySelect) + 1;
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logLevelEnd(indexDay, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getLevelLoopByFromStr((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevelConfigInfo.levelOrder), (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
              error: Error()
            }), PLAY_TYPE) : PLAY_TYPE)[(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.playType].toLowerCase().toString(), 1, 0, "dailychallenge", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.playDurationEndTime - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.playDurationStartTime, "exit", "");
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).PAUSE_TOUCH_HOME);
          } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).WITH_FRIEND) {
            // console.log("touchHome",localConfig.instance.currWithFriendDataInfo);
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logLevelEnd((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevelConfigInfo.levelIndex, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getLevelLoopByFromStr((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevelConfigInfo.levelOrder), (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
              error: Error()
            }), PLAY_TYPE) : PLAY_TYPE)[(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.playType].toLowerCase().toString(), 1, 0, "withfriend", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.playDurationEndTime - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.playDurationStartTime, "exit", "");
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
            }), Constants) : Constants).PAUSE_TOUCH_HOME);
          } else {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_QUITCONFIRM_POPUP);
          }
        }

        touchContinue() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("continue", "settingpopup"); // console.log("touchContinue");

          this.hidePopup();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SETTING_TOUCH_CONTINUE);
        }

        touchClose() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("close", "settingpopup");
          super.touchClose();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SETTING_TOUCH_CONTINUE);
        }

        touchShare() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("share", "settingpopup");
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SHARE_INFOLEVEL_POPUP, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock, (err, success) => {});
        }

        touchLike() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("like", "settingpopup");
          (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.followOfficialPage();
        }

        touchInvite() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("invite", "settingpopup");
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_INVITE_POPUP, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock, (err, content) => {});
        }

        touchCreateShortcut() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("createshortcut", "settingpopup");
          (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.Create_Shortcut((err, success) => {
            if (err) {} else {
              (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                error: Error()
              }), FBInstantManager) : FBInstantManager).instance.isCreateShortcutAvailable = false;

              if (this.btnCreatShortcut) {
                this.btnCreatShortcut.node.active = false;
              }
            }
          });
        }

        showCreateShortcut() {
          if ((_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.isCreateShortcutAvailable) {
            if (this.btnCreatShortcut) {
              this.btnCreatShortcut.node.active = true;
            }
          } else {
            if (this.btnCreatShortcut) {
              this.btnCreatShortcut.node.active = false;
            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnMusic", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemMusic", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnSound", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "itemSound", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "objVibration", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnVibrate", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "itemVibrate", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btnTops", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "itemTops", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "btnLanguage", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "btnHome", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "btnContinue", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "btnShare", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "btnLike", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "btnJoinGroup", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "btnCreatShortcut", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "btnInviteFriend", [_dec18], {
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
//# sourceMappingURL=SettingPopup.js.map