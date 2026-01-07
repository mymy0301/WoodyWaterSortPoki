System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Label, Node, sp, tween, UIOpacity, Vec3, Widget, ItemLeaderBoard, Constants, THEME_TYPE, BasePopup, localConfig, ItemRankInfo, clientEvent, AudioManager2, PGSPlayInstantManager, FBInstantManager, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp, _crd, ccclass, property, TournamentResultPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItemLeaderBoard(extras) {
    _reporterNs.report("ItemLeaderBoard", "../ItemLeaderBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTHEME_TYPE(extras) {
    _reporterNs.report("THEME_TYPE", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasePopup(extras) {
    _reporterNs.report("BasePopup", "../../common/basePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemRankInfo(extras) {
    _reporterNs.report("ItemRankInfo", "../../common/ItemRankInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "../../framework/audioManager2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPGSPlayInstantManager(extras) {
    _reporterNs.report("PGSPlayInstantManager", "../../common/PGSPlayInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "../../common/FBInstantManager", _context.meta, extras);
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
      sp = _cc.sp;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      ItemLeaderBoard = _unresolved_2.ItemLeaderBoard;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
      THEME_TYPE = _unresolved_3.THEME_TYPE;
    }, function (_unresolved_4) {
      BasePopup = _unresolved_4.BasePopup;
    }, function (_unresolved_5) {
      localConfig = _unresolved_5.localConfig;
    }, function (_unresolved_6) {
      ItemRankInfo = _unresolved_6.ItemRankInfo;
    }, function (_unresolved_7) {
      clientEvent = _unresolved_7.clientEvent;
    }, function (_unresolved_8) {
      AudioManager2 = _unresolved_8.AudioManager2;
    }, function (_unresolved_9) {
      PGSPlayInstantManager = _unresolved_9.PGSPlayInstantManager;
    }, function (_unresolved_10) {
      FBInstantManager = _unresolved_10.FBInstantManager;
    }, function (_unresolved_11) {
      LogEventManager = _unresolved_11.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "755aa8eieZPwa94RVHn41uZ", "TournamentResultPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = TournamentResultPopup
       * DateTime = Mon Nov 04 2024 15:04:26 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = TournamentResultPopup.ts
       * FileBasenameNoExtension = TournamentResultPopup
       * URL = db://assets/scripts/game/tournaments/TournamentResultPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("TournamentResultPopup", TournamentResultPopup = (_dec = ccclass('TournamentResultPopup'), _dec2 = property(Widget), _dec3 = property(Label), _dec4 = property(_crd && ItemLeaderBoard === void 0 ? (_reportPossibleCrUseOfItemLeaderBoard({
        error: Error()
      }), ItemLeaderBoard) : ItemLeaderBoard), _dec5 = property(Button), _dec6 = property(UIOpacity), _dec7 = property(Button), _dec8 = property(UIOpacity), _dec9 = property(sp.Skeleton), _dec10 = property(Node), _dec11 = property(UIOpacity), _dec(_class = (_class2 = (_temp = class TournamentResultPopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "groupAllTopWidget", _descriptor, this);

          _initializerDefineProperty(this, "txtTitle", _descriptor2, this);

          _initializerDefineProperty(this, "myItemLeaderBoard", _descriptor3, this);

          _initializerDefineProperty(this, "btnShare", _descriptor4, this);

          _initializerDefineProperty(this, "nodeShare_Opacity", _descriptor5, this);

          _initializerDefineProperty(this, "btnReplay", _descriptor6, this);

          _initializerDefineProperty(this, "nodeReplay_Opacity", _descriptor7, this);

          _initializerDefineProperty(this, "character", _descriptor8, this);

          _initializerDefineProperty(this, "titleGroup", _descriptor9, this);

          _initializerDefineProperty(this, "titleGroup_Opacity", _descriptor10, this);

          _defineProperty(this, "tweenTitleGroup", null);

          _defineProperty(this, "tweenTitleGroup_Opacity", null);

          _defineProperty(this, "myItemRankInfo", null);

          _defineProperty(this, "myScore", 0);
        }

        onEnable() {
          super.onEnable();
          this.btnShare.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchShare, this);
          this.btnReplay.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchReplay, this);
        }

        onDisable() {
          super.onDisable();
          this.btnShare.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchShare, this);
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
            let posY = ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
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

        showTournamentResultPopup(indexRank, score) {
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.setDailyQuest_CompletedTournament();
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playSound_WIN2();
          this.myScore = score;
          this.txtTitle.string = `${(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLeaderboardDataInfo.name}`;
          let itemRankInfo = new (_crd && ItemRankInfo === void 0 ? (_reportPossibleCrUseOfItemRankInfo({
            error: Error()
          }), ItemRankInfo) : ItemRankInfo)();

          if (indexRank == 0) {
            itemRankInfo.indexRank = 1;
            itemRankInfo.isMyRank = true;
          } else {
            itemRankInfo.indexRank = indexRank;
            itemRankInfo.isMyRank = true;
          }

          itemRankInfo.userScore = score;
          this.myItemRankInfo = itemRankInfo;
          this.btnClose.node.active = false;
          this.myItemLeaderBoard.node.active = false;
          this.btnShare.node.active = false;
          this.btnReplay.node.active = false;
          this.character.node.active = false;
          this.titleGroup_Opacity.opacity = 0;
          this.showPopup();
          let leaderBoardMyScore = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getLeaderBoardMyScore_byTournamentID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLeaderboardDataInfo.tournamentId);

          if (score > leaderBoardMyScore) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setLeaderBoardMyScore_byTournamentID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLeaderboardDataInfo.tournamentId, score);
            (_crd && PGSPlayInstantManager === void 0 ? (_reportPossibleCrUseOfPGSPlayInstantManager({
              error: Error()
            }), PGSPlayInstantManager) : PGSPlayInstantManager).instance.UpdatePlayerScore_byLeaderboardID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLeaderboardDataInfo._id, score);
          }

          (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.ShareTournament(score, (err, success) => {});
        }

        showPoup_ShowView() {
          // clientEvent.dispatchEvent(Constants.SHOW_EFX_FIREWORK);
          if (this.tweenTitleGroup) {
            this.tweenTitleGroup.stop();
          }

          if (this.tweenTitleGroup_Opacity) {
            this.tweenTitleGroup_Opacity.stop();
          }

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
          this.character.node.active = true;
          let strAnimation_Appear = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getStrAnimationAppear_byID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getThemeSelected_byThemeType((_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).SKIN));
          this.character.setAnimation(0, strAnimation_Appear, false);
          this.scheduleOnce(() => {
            this.setCharacter_Appear_Finished();
          }, 0.7);
        }

        setCharacter_Appear_Finished() {
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
          let strAnimation_Dance = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getStrAnimationDance_byID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getThemeSelected_byThemeType((_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).SKIN));
          this.character.setAnimation(0, strAnimation_Dance, true);
          this.myItemLeaderBoard.node.active = true;
          this.myItemLeaderBoard.init(this.myItemRankInfo, 0.1);
          this.scheduleOnce(() => {
            this.showButton_Step1();
          }, 0.2);
          (_crd && PGSPlayInstantManager === void 0 ? (_reportPossibleCrUseOfPGSPlayInstantManager({
            error: Error()
          }), PGSPlayInstantManager) : PGSPlayInstantManager).instance.GetTournament_TopPlayers_byLeaderboardID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLeaderboardDataInfo._id, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLeaderboardDataInfo.tournamentId);
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
          this.btnClose.node.active = true;
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
            easing: 'quadOut'
          }).start();
        }

        touchShare() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("share", "tournamentresultpopup");
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SHARE_TOURNAMENT_POPUP, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLeaderboardDataInfo.name, this.myScore, (err, success) => {});
        }

        touchReplay() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("replay", "tournamentresultpopup");
          this.hidePopup();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOURNAMENT_RESULT_TOUCH_REPLAY);
        }

        touchClose() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("close", "tournamentresultpopup");
          super.touchClose();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOURNAMENT_RESULT_TOUCH_HOME);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "groupAllTopWidget", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtTitle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "myItemLeaderBoard", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnShare", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeShare_Opacity", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnReplay", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "nodeReplay_Opacity", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "character", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "titleGroup", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "titleGroup_Opacity", [_dec11], {
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
//# sourceMappingURL=TournamentResultPopup.js.map