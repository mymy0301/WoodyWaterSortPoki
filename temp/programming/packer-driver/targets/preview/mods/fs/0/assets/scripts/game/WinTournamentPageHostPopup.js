System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Label, Node, Widget, BasePopup, AVATAR_TYPE, Constants, localConfig, AudioManager2, LeaderBoardGroupManager, clientEvent, LogEventManager, FBInstantManager, ItemRankInfo, PokiSDKManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, WinTournamentPageHostPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasePopup(extras) {
    _reporterNs.report("BasePopup", "../common/basePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAVATAR_TYPE(extras) {
    _reporterNs.report("AVATAR_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "../framework/audioManager2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLeaderBoardGroupManager(extras) {
    _reporterNs.report("LeaderBoardGroupManager", "./LeaderBoardGroupManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogEventManager(extras) {
    _reporterNs.report("LogEventManager", "../common/LogEventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "../common/FBInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemRankInfo(extras) {
    _reporterNs.report("ItemRankInfo", "../common/ItemRankInfo", _context.meta, extras);
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
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      BasePopup = _unresolved_2.BasePopup;
    }, function (_unresolved_3) {
      AVATAR_TYPE = _unresolved_3.AVATAR_TYPE;
      Constants = _unresolved_3.Constants;
    }, function (_unresolved_4) {
      localConfig = _unresolved_4.localConfig;
    }, function (_unresolved_5) {
      AudioManager2 = _unresolved_5.AudioManager2;
    }, function (_unresolved_6) {
      LeaderBoardGroupManager = _unresolved_6.LeaderBoardGroupManager;
    }, function (_unresolved_7) {
      clientEvent = _unresolved_7.clientEvent;
    }, function (_unresolved_8) {
      LogEventManager = _unresolved_8.LogEventManager;
    }, function (_unresolved_9) {
      FBInstantManager = _unresolved_9.FBInstantManager;
    }, function (_unresolved_10) {
      ItemRankInfo = _unresolved_10.ItemRankInfo;
    }, function (_unresolved_11) {
      PokiSDKManager = _unresolved_11.PokiSDKManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ac6f3PSHvFHeLicnQOenReV", "WinTournamentPageHostPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = WinTournamentPageHostPopup
       * DateTime = Wed Jul 16 2025 10:05:04 GMT+0700 (Indochina Time)
       * Author = MyTom2k17
       * FileBasename = WinTournamentPageHostPopup.ts
       * FileBasenameNoExtension = WinTournamentPageHostPopup
       * URL = db://assets/scripts/game/WinTournamentPageHostPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("WinTournamentPageHostPopup", WinTournamentPageHostPopup = (_dec = ccclass('WinTournamentPageHostPopup'), _dec2 = property(Widget), _dec3 = property(Label), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Node), _dec8 = property(_crd && LeaderBoardGroupManager === void 0 ? (_reportPossibleCrUseOfLeaderBoardGroupManager({
        error: Error()
      }), LeaderBoardGroupManager) : LeaderBoardGroupManager), _dec(_class = (_class2 = (_temp = class WinTournamentPageHostPopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "groupAllTopWidget", _descriptor, this);

          _initializerDefineProperty(this, "txtInfoTournament", _descriptor2, this);

          _initializerDefineProperty(this, "btnHome", _descriptor3, this);

          _initializerDefineProperty(this, "btnShare", _descriptor4, this);

          _initializerDefineProperty(this, "btnReplay", _descriptor5, this);

          _initializerDefineProperty(this, "iconLoading", _descriptor6, this);

          _initializerDefineProperty(this, "leaderboardGroupManager", _descriptor7, this);

          _defineProperty(this, "score", 0);
        }

        onEnable() {
          super.onEnable();
          this.btnShare.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchShare, this);
          this.btnReplay.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchReplay, this);
          this.btnHome.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchHome, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).RECEIVE_LISTRANK_TOURNAMENT_PAGEHOST, this.receiveListRankTournamentPageHost, this);
        }

        onDisable() {
          super.onDisable();
          this.btnShare.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchShare, this);
          this.btnReplay.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchReplay, this);
          this.btnHome.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchHome, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).RECEIVE_LISTRANK_TOURNAMENT_PAGEHOST, this.receiveListRankTournamentPageHost, this);
        }

        start() {
          // [3]
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

        showWinTournamentPageHostPopup(_score) {
          this.iconLoading.active = true;
          this.score = _score;
          this.leaderboardGroupManager.resetRankGroup();
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playSound_WIN2();
          this.txtInfoTournament.string = "" + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currTournamentPageHostDataInfo.title;
          super.showPopup();
        }

        showPoup_ShowView_Finished() {
          super.showPoup_ShowView_Finished();
          (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.GetLeaderBoard_TournamentPageHost();
        }

        receiveListRankTournamentPageHost(arrListRankInfos) {
          (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.PostScoreShareTournament(this.score, (err, success) => {}); // console.log("receiveListRankTournament",arrListRankInfos);

          if (arrListRankInfos != null) {
            var indeMyRank = arrListRankInfos.findIndex(item => item.isMyRank == true);

            if (indeMyRank > -1) {
              var myItemRankInfo = arrListRankInfos[indeMyRank];

              if (myItemRankInfo.userScore < this.score) {
                myItemRankInfo.userScore = this.score;
              }
            } else {
              var _myItemRankInfo = new (_crd && ItemRankInfo === void 0 ? (_reportPossibleCrUseOfItemRankInfo({
                error: Error()
              }), ItemRankInfo) : ItemRankInfo)();

              _myItemRankInfo.avatarType = (_crd && AVATAR_TYPE === void 0 ? (_reportPossibleCrUseOfAVATAR_TYPE({
                error: Error()
              }), AVATAR_TYPE) : AVATAR_TYPE).TYPE_WEB;
              _myItemRankInfo.avatarURL = "";
              _myItemRankInfo.idFB = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.playerID;
              _myItemRankInfo.indexRank = arrListRankInfos.length + 1;
              _myItemRankInfo.isMyRank = true;
              _myItemRankInfo.userName = (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                error: Error()
              }), FBInstantManager) : FBInstantManager).instance.getName();
              _myItemRankInfo.userScore = this.score;
              arrListRankInfos.push(_myItemRankInfo);
            }

            this.iconLoading.active = false;
            this.leaderboardGroupManager.initRankGroup(arrListRankInfos);
          } else {
            var myRankInfo = new (_crd && ItemRankInfo === void 0 ? (_reportPossibleCrUseOfItemRankInfo({
              error: Error()
            }), ItemRankInfo) : ItemRankInfo)();
            myRankInfo.avatarType = (_crd && AVATAR_TYPE === void 0 ? (_reportPossibleCrUseOfAVATAR_TYPE({
              error: Error()
            }), AVATAR_TYPE) : AVATAR_TYPE).TYPE_LOCAL;
            myRankInfo.userName = (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
              error: Error()
            }), FBInstantManager) : FBInstantManager).instance.getName();
            myRankInfo.avatarURL = (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
              error: Error()
            }), FBInstantManager) : FBInstantManager).instance.getPhotoUrl();
            myRankInfo.userScore = this.score;
            myRankInfo.indexRank = 1;
            myRankInfo.isMyRank = true;
            var arrRankInfos = [];
            arrRankInfos.push(myRankInfo);
            this.iconLoading.active = false;
            this.leaderboardGroupManager.initRankGroup(arrRankInfos);
          }
        }

        touchShare() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("share", "wintournamentpagehostpopup");
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SHARE_INFOSCORE_POPUP, this.score, (err, success) => {});
        }

        touchReplay() {
          // FBInstantManager.instance.Show_InterstitialAdAsync("tournament_pagehost_popup", "replay", (err, success) => {
          //     LogEventManager.instance.logButtonClick("replay", "wintournamentpagehostpopup");
          //     this.hidePopup();
          //     clientEvent.dispatchEvent(Constants.TOURNAMENT_PAGEHOST_TOUCH_REPLAY);
          // });
          (_crd && PokiSDKManager === void 0 ? (_reportPossibleCrUseOfPokiSDKManager({
            error: Error()
          }), PokiSDKManager) : PokiSDKManager).instance.Show_InterstitialAdAsync("tournament_pagehost_popup", "replay", (err, success) => {
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logButtonClick("replay", "wintournamentpagehostpopup");
            this.hidePopup();
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TOURNAMENT_PAGEHOST_TOUCH_REPLAY);
          });
        } // touchClose(): void {
        //     FBInstantManager.instance.Show_InterstitialAdAsync("tournament_pagehost_popup", "close", (err, success) => {
        //         LogEventManager.instance.logButtonClick("close","wintournamentpagehostpopup");
        //         super.touchClose();
        //     });
        // }


        touchHome() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("home", "tournament_pagehost_popup");
          this.hidePopup();
          (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.resetContext(() => {});
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currTournamentPageHostDataInfo = null;
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOURNAMENT_PAGEHOST_TOUCH_HOME);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "groupAllTopWidget", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtInfoTournament", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnHome", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnShare", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnReplay", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "iconLoading", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "leaderboardGroupManager", [_dec8], {
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
//# sourceMappingURL=WinTournamentPageHostPopup.js.map