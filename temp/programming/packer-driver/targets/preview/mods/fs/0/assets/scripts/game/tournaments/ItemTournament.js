System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Component, Label, Node, Sprite, tween, UIOpacity, Vec3, ItemTournamentGroupPlayer, AVATAR_TYPE, Constants, ENV_TYPE, localConfig, clientEvent, ItemRankInfo, PGSPlayInstantManager, CountDownToNextTime_Tournament, resourceUtil, FBInstantManager, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _temp, _crd, ccclass, property, ItemTournament;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLeaderboardDataInfo(extras) {
    _reporterNs.report("LeaderboardDataInfo", "../../common/LeaderboardDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemTournamentGroupPlayer(extras) {
    _reporterNs.report("ItemTournamentGroupPlayer", "./ItemTournamentGroupPlayer", _context.meta, extras);
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

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemRankInfo(extras) {
    _reporterNs.report("ItemRankInfo", "../../common/ItemRankInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPGSPlayInstantManager(extras) {
    _reporterNs.report("PGSPlayInstantManager", "../../common/PGSPlayInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCountDownToNextTime_Tournament(extras) {
    _reporterNs.report("CountDownToNextTime_Tournament", "../../common/CountDownToNextTime_Tournament", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../../framework/resourceUtil", _context.meta, extras);
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
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ItemTournamentGroupPlayer = _unresolved_2.ItemTournamentGroupPlayer;
    }, function (_unresolved_3) {
      AVATAR_TYPE = _unresolved_3.AVATAR_TYPE;
      Constants = _unresolved_3.Constants;
      ENV_TYPE = _unresolved_3.ENV_TYPE;
    }, function (_unresolved_4) {
      localConfig = _unresolved_4.localConfig;
    }, function (_unresolved_5) {
      clientEvent = _unresolved_5.clientEvent;
    }, function (_unresolved_6) {
      ItemRankInfo = _unresolved_6.ItemRankInfo;
    }, function (_unresolved_7) {
      PGSPlayInstantManager = _unresolved_7.PGSPlayInstantManager;
    }, function (_unresolved_8) {
      CountDownToNextTime_Tournament = _unresolved_8.CountDownToNextTime_Tournament;
    }, function (_unresolved_9) {
      resourceUtil = _unresolved_9.resourceUtil;
    }, function (_unresolved_10) {
      FBInstantManager = _unresolved_10.FBInstantManager;
    }, function (_unresolved_11) {
      LogEventManager = _unresolved_11.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d0f107/GQRKppzX0GHD/mmp", "ItemTournament", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemTournament
       * DateTime = Tue Oct 29 2024 11:09:24 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemTournament.ts
       * FileBasenameNoExtension = ItemTournament
       * URL = db://assets/scripts/game/tournaments/ItemTournament.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemTournament", ItemTournament = (_dec = ccclass('ItemTournament'), _dec2 = property(UIOpacity), _dec3 = property(Node), _dec4 = property(Sprite), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(_crd && CountDownToNextTime_Tournament === void 0 ? (_reportPossibleCrUseOfCountDownToNextTime_Tournament({
        error: Error()
      }), CountDownToNextTime_Tournament) : CountDownToNextTime_Tournament), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(_crd && ItemTournamentGroupPlayer === void 0 ? (_reportPossibleCrUseOfItemTournamentGroupPlayer({
        error: Error()
      }), ItemTournamentGroupPlayer) : ItemTournamentGroupPlayer), _dec12 = property(Button), _dec13 = property(Button), _dec(_class = (_class2 = (_temp = class ItemTournament extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "leaderboarDataInfo", null);

          _initializerDefineProperty(this, "nodeGroupOpacity", _descriptor, this);

          _initializerDefineProperty(this, "nodeGroup", _descriptor2, this);

          _initializerDefineProperty(this, "bg", _descriptor3, this);

          _initializerDefineProperty(this, "iconLoadingBG", _descriptor4, this);

          _initializerDefineProperty(this, "txtName", _descriptor5, this);

          _initializerDefineProperty(this, "txtTime", _descriptor6, this);

          _initializerDefineProperty(this, "countTime", _descriptor7, this);

          _initializerDefineProperty(this, "txtTimeEnded", _descriptor8, this);

          _initializerDefineProperty(this, "txtCountPlayers", _descriptor9, this);

          _initializerDefineProperty(this, "arrPlayers", _descriptor10, this);

          _initializerDefineProperty(this, "btnJoin", _descriptor11, this);

          _initializerDefineProperty(this, "btnView", _descriptor12, this);

          _defineProperty(this, "tweenOpacity", null);

          _defineProperty(this, "tweenShow", null);

          _defineProperty(this, "index", 0);
        }

        onEnable() {
          this.btnJoin.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchJoin, this);
          this.btnView.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchView, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PGS_RECEIVE_LISTRANK_LEADERBOARD, this.receiveListRankLeaderboard, this);

          if (this.leaderboarDataInfo) {
            this.showCountTime();

            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.mapLeaderBoard_ItemRankInfos.has(this.leaderboarDataInfo._id)) {
              this.receiveListRankLeaderboard();
            }
          }
        }

        onDisable() {
          this.btnJoin.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchJoin, this);
          this.btnView.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchView, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PGS_RECEIVE_LISTRANK_LEADERBOARD, this.receiveListRankLeaderboard, this);
        }

        init(_index, _leaderboarDataInfo) {
          // console.log(_leaderboarDataInfo);
          this.index = _index;
          this.leaderboarDataInfo = _leaderboarDataInfo;
          this.txtName.string = this.leaderboarDataInfo.name;
          this.txtCountPlayers.node.active = false;

          for (var i = 0; i < this.arrPlayers.length; i++) {
            this.arrPlayers[i].node.active = false;
          }

          this.iconLoadingBG.active = true;
          this.loadBackground();
          this.showCountTime();

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).TEST_AD) {
            var arrListLeaderboard_Ranks = []; // for (let i = 0; i < 1; i++) {
            //     let itemRankInfo: ItemRankInfo = new ItemRankInfo();
            //     itemRankInfo.userName = "" + FBInstantManager.instance.getName() + i;
            //     itemRankInfo.avatarType = AVATAR_TYPE.TYPE_LOCAL;
            //     itemRankInfo.userScore = 8000 - 500 * i;
            //     itemRankInfo.avatarURL = "" + lodash.random(1, 20);
            //     itemRankInfo.indexRank = i + 1;
            //     if (i == 60) {
            //         itemRankInfo.isMyRank = true;
            //     } else {
            //         itemRankInfo.isMyRank = false;
            //     }
            //     itemRankInfo.playerID = "" + (i + 1);
            //     arrListLeaderboard_Ranks.push(itemRankInfo);
            // }
            // localConfig.instance.mapLeaderBoard_Totals.set(_leaderboarDataInfo._id,10);
            // localConfig.instance.mapLeaderBoard_ItemRankInfos.set(_leaderboarDataInfo._id,arrListLeaderboard_Ranks);

            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).PGS_RECEIVE_LISTRANK_LEADERBOARD, arrListLeaderboard_Ranks);
          } else {
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.mapLeaderBoard_ItemRankInfos.has(this.leaderboarDataInfo._id)) {
              this.receiveListRankLeaderboard();
            } else {
              (_crd && PGSPlayInstantManager === void 0 ? (_reportPossibleCrUseOfPGSPlayInstantManager({
                error: Error()
              }), PGSPlayInstantManager) : PGSPlayInstantManager).instance.GetTournament_TopPlayers_byLeaderboardID(this.leaderboarDataInfo._id, this.leaderboarDataInfo.tournamentId);
            }
          }

          this.showGroup();
        }

        showGroup() {
          if (this.tweenOpacity != null) {
            this.tweenOpacity.stop();
          }

          if (this.tweenShow != null) {
            this.tweenShow.stop();
          }

          var delayTime = this.index * 0.15 + 0.2;
          this.nodeGroup.setPosition(new Vec3(0, -60, 0));
          this.nodeGroupOpacity.opacity = 0;
          this.tweenOpacity = tween(this.nodeGroupOpacity).delay(delayTime).to(0.3, {
            opacity: 255
          }, {
            easing: 'linear',
            onComplete: () => {}
          }).start();
          this.tweenShow = tween(this.nodeGroup).delay(delayTime).to(0.3, {
            position: new Vec3(0, 0, 0)
          }, {
            easing: 'linear',
            onComplete: () => {}
          }).start();
        }

        hideGroup() {
          if (this.tweenOpacity != null) {
            this.tweenOpacity.stop();
          }

          if (this.tweenShow != null) {
            this.tweenShow.stop();
          }

          this.nodeGroupOpacity.opacity = 0;
          this.nodeGroup.setPosition(new Vec3(0, -60, 0));
        }

        showCountTime() {
          this.iconLoadingBG.active = true;
          this.loadBackground();
          this.txtTime.node.active = false;
          this.txtTimeEnded.node.active = false;
          this.btnJoin.node.active = false;
          this.btnView.node.active = false;

          if (this.leaderboarDataInfo.expireTime < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrTime()) {
            this.txtTimeEnded.node.active = true;
            this.btnView.node.active = true;
          } else {
            this.txtTime.node.active = true;
            this.btnJoin.node.active = true;
            this.countTime.initCountDownTime(this.leaderboarDataInfo.expireTime - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getCurrTime(), () => {
              this.showCountTime();
            });
          }
        }

        receiveListRankLeaderboard() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.mapLeaderBoard_ItemRankInfos.has(this.leaderboarDataInfo._id)) {
            this.showPlayers();
            var arrItemRankInfos = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.mapLeaderBoard_ItemRankInfos.get(this.leaderboarDataInfo._id);
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
          } else {
            this.showPlayers();
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

            for (var _i = 0; _i < this.arrPlayers.length; _i++) {
              var _itemRankInfo = _arrItemRankInfos[_i];

              if (_itemRankInfo) {
                this.arrPlayers[_i].initPlayer(_itemRankInfo);
              }
            }
          }
        }

        showPlayers() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.mapLeaderBoard_Totals.has(this.leaderboarDataInfo._id)) {
            this.txtCountPlayers.string = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.mapLeaderBoard_Totals.get(this.leaderboarDataInfo._id).toString() + " players";
            this.txtCountPlayers.node.active = true;
          } else {
            this.txtCountPlayers.string = "??? players";
            this.txtCountPlayers.node.active = true;
          }
        }

        loadBackground() {
          var pathIcon = "tournament/" + this.leaderboarDataInfo.type + "_2";
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadSpriteFrame_Bundle(pathIcon, (err, spriteFrame) => {
            if (err) {
              console.error(err);
              this.bg.spriteFrame = null;
              return;
            }

            if (!this.node || !this.bg) {
              return;
            }

            this.iconLoadingBG.active = false;
            this.bg.spriteFrame = spriteFrame;
          });
        }

        touchJoin() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("join", "tournamentpopup");
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TOURNAMENT_POPUP, this.leaderboarDataInfo);
        }

        touchView() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("view", "tournamentpopup");
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TOURNAMENT_POPUP, this.leaderboarDataInfo);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeGroupOpacity", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeGroup", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "iconLoadingBG", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txtName", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "txtTime", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "countTime", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "txtTimeEnded", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "txtCountPlayers", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "arrPlayers", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "btnJoin", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "btnView", [_dec13], {
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
//# sourceMappingURL=ItemTournament.js.map