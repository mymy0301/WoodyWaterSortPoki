System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Label, Node, Sprite, BasePopup, ItemTournamentGroupPlayer, CountDownToNextTime_Tournament, AVATAR_TYPE, Constants, ENV_TYPE, LeaderBoardGroupManager, resourceUtil, localConfig, clientEvent, ItemRankInfo, FBInstantManager, PGSPlayInstantManager, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _temp, _crd, ccclass, property, TournamentPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasePopup(extras) {
    _reporterNs.report("BasePopup", "../../common/basePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemTournamentGroupPlayer(extras) {
    _reporterNs.report("ItemTournamentGroupPlayer", "./ItemTournamentGroupPlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCountDownToNextTime_Tournament(extras) {
    _reporterNs.report("CountDownToNextTime_Tournament", "../../common/CountDownToNextTime_Tournament", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAVATAR_TYPE(extras) {
    _reporterNs.report("AVATAR_TYPE", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENV_TYPE(extras) {
    _reporterNs.report("ENV_TYPE", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLeaderboardDataInfo(extras) {
    _reporterNs.report("LeaderboardDataInfo", "../../common/LeaderboardDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLeaderBoardGroupManager(extras) {
    _reporterNs.report("LeaderBoardGroupManager", "../LeaderBoardGroupManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemRankInfo(extras) {
    _reporterNs.report("ItemRankInfo", "../../common/ItemRankInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "../../common/FBInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPGSPlayInstantManager(extras) {
    _reporterNs.report("PGSPlayInstantManager", "../../common/PGSPlayInstantManager", _context.meta, extras);
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
    }, function (_unresolved_2) {
      BasePopup = _unresolved_2.BasePopup;
    }, function (_unresolved_3) {
      ItemTournamentGroupPlayer = _unresolved_3.ItemTournamentGroupPlayer;
    }, function (_unresolved_4) {
      CountDownToNextTime_Tournament = _unresolved_4.CountDownToNextTime_Tournament;
    }, function (_unresolved_5) {
      AVATAR_TYPE = _unresolved_5.AVATAR_TYPE;
      Constants = _unresolved_5.Constants;
      ENV_TYPE = _unresolved_5.ENV_TYPE;
    }, function (_unresolved_6) {
      LeaderBoardGroupManager = _unresolved_6.LeaderBoardGroupManager;
    }, function (_unresolved_7) {
      resourceUtil = _unresolved_7.resourceUtil;
    }, function (_unresolved_8) {
      localConfig = _unresolved_8.localConfig;
    }, function (_unresolved_9) {
      clientEvent = _unresolved_9.clientEvent;
    }, function (_unresolved_10) {
      ItemRankInfo = _unresolved_10.ItemRankInfo;
    }, function (_unresolved_11) {
      FBInstantManager = _unresolved_11.FBInstantManager;
    }, function (_unresolved_12) {
      PGSPlayInstantManager = _unresolved_12.PGSPlayInstantManager;
    }, function (_unresolved_13) {
      LogEventManager = _unresolved_13.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "822a6hJisBP/6PsN29fmBxf", "TournamentPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = TournamentPopup
       * DateTime = Wed Oct 30 2024 09:03:28 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = TournamentPopup.ts
       * FileBasenameNoExtension = TournamentPopup
       * URL = db://assets/scripts/game/tournaments/TournamentPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("TournamentPopup", TournamentPopup = (_dec = ccclass('TournamentPopup'), _dec2 = property(Label), _dec3 = property(_crd && ItemTournamentGroupPlayer === void 0 ? (_reportPossibleCrUseOfItemTournamentGroupPlayer({
        error: Error()
      }), ItemTournamentGroupPlayer) : ItemTournamentGroupPlayer), _dec4 = property(Sprite), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(_crd && CountDownToNextTime_Tournament === void 0 ? (_reportPossibleCrUseOfCountDownToNextTime_Tournament({
        error: Error()
      }), CountDownToNextTime_Tournament) : CountDownToNextTime_Tournament), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(_crd && LeaderBoardGroupManager === void 0 ? (_reportPossibleCrUseOfLeaderBoardGroupManager({
        error: Error()
      }), LeaderBoardGroupManager) : LeaderBoardGroupManager), _dec11 = property(Node), _dec12 = property(Button), _dec13 = property(Button), _dec(_class = (_class2 = (_temp = class TournamentPopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "txtTitle", _descriptor, this);

          _initializerDefineProperty(this, "arrPlayers", _descriptor2, this);

          _initializerDefineProperty(this, "iconTournament", _descriptor3, this);

          _initializerDefineProperty(this, "nodeLoadingIconTournament", _descriptor4, this);

          _initializerDefineProperty(this, "nodeTime", _descriptor5, this);

          _initializerDefineProperty(this, "countDownTime", _descriptor6, this);

          _initializerDefineProperty(this, "nodeTimeEnded", _descriptor7, this);

          _initializerDefineProperty(this, "txtCountPlayers", _descriptor8, this);

          _initializerDefineProperty(this, "leaderboardGroupManager", _descriptor9, this);

          _initializerDefineProperty(this, "nodeLoadingLeaderboard", _descriptor10, this);

          _initializerDefineProperty(this, "btnPlay", _descriptor11, this);

          _initializerDefineProperty(this, "btnOK", _descriptor12, this);

          _defineProperty(this, "leaderboardDataInfo", null);
        }

        onEnable() {
          super.onEnable();
          this.btnPlay.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchPlay, this);
          this.btnOK.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchOK, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PGS_RECEIVE_LISTRANK_LEADERBOARD, this.receiveListRankLeaderboard, this);
        }

        onDisable() {
          super.onDisable();
          this.btnPlay.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchPlay, this);
          this.btnOK.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchOK, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PGS_RECEIVE_LISTRANK_LEADERBOARD, this.receiveListRankLeaderboard, this);
        }

        showTournamentPopup(_leaderboardDataInfo) {
          this.leaderboardGroupManager.resetRankGroup();

          for (var i = 0; i < this.arrPlayers.length; i++) {
            this.arrPlayers[i].reset();
          }

          if (this.leaderboardDataInfo && this.leaderboardDataInfo._id == _leaderboardDataInfo._id) {} else {
            this.leaderboardDataInfo = _leaderboardDataInfo;
            this.resetPopup();
            this.initTournamentDataInfo();
          }

          super.showPopup();
        }

        resetPopup() {
          this.iconTournament.spriteFrame = null;
          this.nodeLoadingIconTournament.active = true;
          this.nodeTime.active = false;
          this.nodeTimeEnded.active = false;
          this.txtCountPlayers.string = "";
          this.btnPlay.node.active = false;
          this.btnOK.node.active = false;
          this.nodeLoadingLeaderboard.active = true;
        }

        showPoup_ShowView_Finished() {
          super.showPoup_ShowView_Finished();

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).TEST_AD) {
            var arrListLeaderboard_Ranks = [];
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).PGS_RECEIVE_LISTRANK_LEADERBOARD, arrListLeaderboard_Ranks);
          } else if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.mapLeaderBoard_ItemRankInfos.has(this.leaderboardDataInfo._id)) {
            this.receiveListRankLeaderboard();
          } else {
            (_crd && PGSPlayInstantManager === void 0 ? (_reportPossibleCrUseOfPGSPlayInstantManager({
              error: Error()
            }), PGSPlayInstantManager) : PGSPlayInstantManager).instance.GetTournament_TopPlayers_byLeaderboardID(this.leaderboardDataInfo._id, this.leaderboardDataInfo.tournamentId);
          }
        }

        initTournamentDataInfo() {
          this.txtTitle.string = "" + this.leaderboardDataInfo.name;
          this.loadBackground();

          if (this.leaderboardDataInfo.expireTime < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrTime()) {
            this.nodeTimeEnded.active = true;
            this.btnOK.node.active = true;
          } else {
            this.nodeTime.active = true;
            this.btnPlay.node.active = true;
            this.countDownTime.initCountDownTime(this.leaderboardDataInfo.expireTime - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getCurrTime(), () => {
              this.initTournamentDataInfo();
            });
          }
        }

        showPlayers() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.mapLeaderBoard_Totals.has(this.leaderboardDataInfo._id)) {
            this.txtCountPlayers.string = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.mapLeaderBoard_Totals.get(this.leaderboardDataInfo._id).toString() + " players";
            this.txtCountPlayers.node.active = true;
          } else {
            this.txtCountPlayers.string = "??? players";
            this.txtCountPlayers.node.active = true;
          }
        }

        loadBackground() {
          var pathIcon = "tournament/" + this.leaderboardDataInfo.type + "_1";
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadSpriteFrame_Bundle(pathIcon, (err, spriteFrame) => {
            if (err) {
              console.error(err);
              this.iconTournament.spriteFrame = null;
              return;
            }

            if (!this.node || !this.iconTournament) {
              return;
            }

            this.nodeLoadingIconTournament.active = false;
            this.iconTournament.spriteFrame = spriteFrame;
          });
        }

        receiveListRankLeaderboard() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.mapLeaderBoard_ItemRankInfos.has(this.leaderboardDataInfo._id)) {
            this.showPlayers();
            var arrItemRankInfos = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.mapLeaderBoard_ItemRankInfos.get(this.leaderboardDataInfo._id);
            var indeMyRank = arrItemRankInfos.findIndex(item => item.isMyRank == true);

            if (indeMyRank > -1) {} else {
              var myItemRankInfo = new (_crd && ItemRankInfo === void 0 ? (_reportPossibleCrUseOfItemRankInfo({
                error: Error()
              }), ItemRankInfo) : ItemRankInfo)();
              myItemRankInfo.avatarType = (_crd && AVATAR_TYPE === void 0 ? (_reportPossibleCrUseOfAVATAR_TYPE({
                error: Error()
              }), AVATAR_TYPE) : AVATAR_TYPE).TYPE_WEB;
              myItemRankInfo.avatarURL = "";
              myItemRankInfo.idFB = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.playerID;
              myItemRankInfo.indexRank = arrItemRankInfos.length + 1;
              myItemRankInfo.isMyRank = true;
              myItemRankInfo.userName = (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                error: Error()
              }), FBInstantManager) : FBInstantManager).instance.getName();
              myItemRankInfo.userScore = 0;
              arrItemRankInfos.push(myItemRankInfo);
            }

            for (var i = 0; i < this.arrPlayers.length; i++) {
              var itemRankInfo = arrItemRankInfos[i];

              if (itemRankInfo) {
                this.arrPlayers[i].initPlayer(itemRankInfo);
              }
            }

            this.nodeLoadingLeaderboard.active = false;
            this.leaderboardGroupManager.initRankGroup(arrItemRankInfos);
          } else {
            var _arrItemRankInfos = [];

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
            _myItemRankInfo.indexRank = _arrItemRankInfos.length + 1;
            _myItemRankInfo.isMyRank = true;
            _myItemRankInfo.userName = (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
              error: Error()
            }), FBInstantManager) : FBInstantManager).instance.getName();
            _myItemRankInfo.userScore = 0;

            _arrItemRankInfos.push(_myItemRankInfo);

            this.showPlayers();
            this.nodeLoadingLeaderboard.active = false;
            this.leaderboardGroupManager.initRankGroup(_arrItemRankInfos);

            for (var _i = 0; _i < this.arrPlayers.length; _i++) {
              var _itemRankInfo = _arrItemRankInfos[_i];

              if (_itemRankInfo) {
                this.arrPlayers[_i].initPlayer(_itemRankInfo);
              }
            }
          }
        }

        touchPlay() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("play", "tournamentpopup");
          (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.joinTournament(this.leaderboardDataInfo.contextId, (err, success) => {
            if (err) {} else {
              this.hidePopup();
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).TOURNAMENT_TOUCH_PLAY, this.leaderboardDataInfo);
            }
          });
        }

        touchOK() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("ok", "tournamentpopup");
          this.hidePopup();
        }

        touchClose() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("close", "tournamentpopup");
          super.touchClose();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtTitle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "arrPlayers", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconTournament", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeLoadingIconTournament", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeTime", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "countDownTime", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "nodeTimeEnded", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "txtCountPlayers", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "leaderboardGroupManager", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "nodeLoadingLeaderboard", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "btnPlay", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "btnOK", [_dec13], {
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
//# sourceMappingURL=TournamentPopup.js.map