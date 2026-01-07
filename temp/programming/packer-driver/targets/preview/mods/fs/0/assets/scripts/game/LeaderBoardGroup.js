System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, tween, UIOpacity, Widget, CountDownToNextTime, LeaderBoardGroupManager, AVATAR_TYPE, Constants, ENV_TYPE, LEADERBOARD_TYPE, clientEvent, localConfig, ItemRankInfo, FBInstantManager, lodash, PGSPlayInstantManager, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, LeaderBoardGroup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCountDownToNextTime(extras) {
    _reporterNs.report("CountDownToNextTime", "../common/CountDownToNextTime", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLeaderBoardGroupManager(extras) {
    _reporterNs.report("LeaderBoardGroupManager", "./LeaderBoardGroupManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAVATAR_TYPE(extras) {
    _reporterNs.report("AVATAR_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENV_TYPE(extras) {
    _reporterNs.report("ENV_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLEADERBOARD_TYPE(extras) {
    _reporterNs.report("LEADERBOARD_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemRankInfo(extras) {
    _reporterNs.report("ItemRankInfo", "../common/ItemRankInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "../common/FBInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLeaderboardDataInfo(extras) {
    _reporterNs.report("LeaderboardDataInfo", "../common/LeaderboardDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOflodash(extras) {
    _reporterNs.report("lodash", "../framework/lodash", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPGSPlayInstantManager(extras) {
    _reporterNs.report("PGSPlayInstantManager", "../common/PGSPlayInstantManager", _context.meta, extras);
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
      Component = _cc.Component;
      Node = _cc.Node;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      CountDownToNextTime = _unresolved_2.CountDownToNextTime;
    }, function (_unresolved_3) {
      LeaderBoardGroupManager = _unresolved_3.LeaderBoardGroupManager;
    }, function (_unresolved_4) {
      AVATAR_TYPE = _unresolved_4.AVATAR_TYPE;
      Constants = _unresolved_4.Constants;
      ENV_TYPE = _unresolved_4.ENV_TYPE;
      LEADERBOARD_TYPE = _unresolved_4.LEADERBOARD_TYPE;
    }, function (_unresolved_5) {
      clientEvent = _unresolved_5.clientEvent;
    }, function (_unresolved_6) {
      localConfig = _unresolved_6.localConfig;
    }, function (_unresolved_7) {
      ItemRankInfo = _unresolved_7.ItemRankInfo;
    }, function (_unresolved_8) {
      FBInstantManager = _unresolved_8.FBInstantManager;
    }, function (_unresolved_9) {
      lodash = _unresolved_9.lodash;
    }, function (_unresolved_10) {
      PGSPlayInstantManager = _unresolved_10.PGSPlayInstantManager;
    }, function (_unresolved_11) {
      LogEventManager = _unresolved_11.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6093cAkX0NHpZSq1w4gWBoa", "LeaderBoardGroup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = LeaderBoardGroup
       * DateTime = Thu Oct 17 2024 15:36:38 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = LeaderBoardGroup.ts
       * FileBasenameNoExtension = LeaderBoardGroup
       * URL = db://assets/scripts/game/LeaderBoardGroup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("LeaderBoardGroup", LeaderBoardGroup = (_dec = ccclass('LeaderBoardGroup'), _dec2 = property(Widget), _dec3 = property(Widget), _dec4 = property(UIOpacity), _dec5 = property(_crd && CountDownToNextTime === void 0 ? (_reportPossibleCrUseOfCountDownToNextTime({
        error: Error()
      }), CountDownToNextTime) : CountDownToNextTime), _dec6 = property(_crd && LeaderBoardGroupManager === void 0 ? (_reportPossibleCrUseOfLeaderBoardGroupManager({
        error: Error()
      }), LeaderBoardGroupManager) : LeaderBoardGroupManager), _dec7 = property(Node), _dec(_class = (_class2 = (_temp = class LeaderBoardGroup extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "groupAllTopWidget", _descriptor, this);

          _initializerDefineProperty(this, "groupAllContentWidget", _descriptor2, this);

          _initializerDefineProperty(this, "groupOpacity", _descriptor3, this);

          _defineProperty(this, "tweenGroup", null);

          _initializerDefineProperty(this, "countDownNextTime", _descriptor4, this);

          _initializerDefineProperty(this, "leaderBoardGroupManager", _descriptor5, this);

          _defineProperty(this, "currLeaderBoardType", null);

          _initializerDefineProperty(this, "iconLoading", _descriptor6, this);
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOUCH_TABLEADERBOARD, this.touchTabTheme, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PGS_RECEIVE_LISTRANK_LEADERBOARD, this.receiveListRankLeaderboard, this);
          this.showTime();
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOUCH_TABLEADERBOARD, this.touchTabTheme, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PGS_RECEIVE_LISTRANK_LEADERBOARD, this.receiveListRankLeaderboard, this);
        }

        initAllTop() {
          // console.error("initAllTop LeaderBoardGroup");
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isMobile) {
            var posY = ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.scaleBG - 1) * (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.DEFAULT_H / 2; // console.log("posY:"+posY);

            if (posY <= 0) {
              this.groupAllTopWidget.top = 0;
              this.groupAllContentWidget.top = 400;
              return;
            }

            this.groupAllTopWidget.top = -posY;
            this.groupAllContentWidget.top = 400 - posY;
          } else {
            this.groupAllTopWidget.top = 0;
            this.groupAllContentWidget.top = 400;
          }
        }

        start() {
          // [3]
          this.initAllTop();
        }

        showGroup() {
          if (this.currLeaderBoardType == null) {
            this.currLeaderBoardType = (_crd && LEADERBOARD_TYPE === void 0 ? (_reportPossibleCrUseOfLEADERBOARD_TYPE({
              error: Error()
            }), LEADERBOARD_TYPE) : LEADERBOARD_TYPE).WORLD;
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TABLEARDBOARD_UPDATE, (_crd && LEADERBOARD_TYPE === void 0 ? (_reportPossibleCrUseOfLEADERBOARD_TYPE({
              error: Error()
            }), LEADERBOARD_TYPE) : LEADERBOARD_TYPE).WORLD);
            this.showTab();
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }


        showTime() {
          var countTimeNextWeek = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getTimeToNextWeek();
          this.countDownNextTime.initCountDownTime(countTimeNextWeek, () => {});
        }

        touchTabTheme(leaderBoardType) {
          if (leaderBoardType == (_crd && LEADERBOARD_TYPE === void 0 ? (_reportPossibleCrUseOfLEADERBOARD_TYPE({
            error: Error()
          }), LEADERBOARD_TYPE) : LEADERBOARD_TYPE).WORLD) {
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logButtonClick("world", "leaderboardpopup");
          } else {
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logButtonClick("friend", "leaderboardpopup");
          }

          if (this.currLeaderBoardType != leaderBoardType) {
            this.currLeaderBoardType = leaderBoardType;
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TABLEARDBOARD_UPDATE, this.currLeaderBoardType);
            this.showTab();
          }
        }

        showTab() {
          this.leaderBoardGroupManager.resetRankGroup();

          if (this.currLeaderBoardType == (_crd && LEADERBOARD_TYPE === void 0 ? (_reportPossibleCrUseOfLEADERBOARD_TYPE({
            error: Error()
          }), LEADERBOARD_TYPE) : LEADERBOARD_TYPE).WORLD) {
            this.countDownNextTime.node.active = true;
            var strWorldContextID = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getWorldContextID_byWeek((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currWeek);
            var leaderboardDataInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getLeaderBoardDataInfo_byContextID(strWorldContextID);

            if (leaderboardDataInfo != null) {
              if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.mapLeaderBoard_ItemRankInfos.has(leaderboardDataInfo._id)) {
                this.receiveListRankLeaderboard((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.mapLeaderBoard_ItemRankInfos.get(leaderboardDataInfo._id));
              } else {
                this.iconLoading.active = true;
                (_crd && PGSPlayInstantManager === void 0 ? (_reportPossibleCrUseOfPGSPlayInstantManager({
                  error: Error()
                }), PGSPlayInstantManager) : PGSPlayInstantManager).instance.GetTopPlayers_byLeaderboardID(leaderboardDataInfo._id, leaderboardDataInfo.tournamentId);
              }
            } else {
              if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
                error: Error()
              }), ENV_TYPE) : ENV_TYPE).TEST_AD) {
                var arrListLeaderboard_Ranks = [];

                for (var i = 0; i < 50; i++) {
                  var itemRankInfo = new (_crd && ItemRankInfo === void 0 ? (_reportPossibleCrUseOfItemRankInfo({
                    error: Error()
                  }), ItemRankInfo) : ItemRankInfo)();
                  itemRankInfo.userName = "" + (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                    error: Error()
                  }), FBInstantManager) : FBInstantManager).instance.getName() + i;
                  itemRankInfo.avatarType = (_crd && AVATAR_TYPE === void 0 ? (_reportPossibleCrUseOfAVATAR_TYPE({
                    error: Error()
                  }), AVATAR_TYPE) : AVATAR_TYPE).TYPE_LOCAL;
                  itemRankInfo.userScore = 800 - i;
                  itemRankInfo.avatarURL = "" + (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
                    error: Error()
                  }), lodash) : lodash).random(1, 20);
                  itemRankInfo.indexRank = i + 1;

                  if (i == 60) {
                    itemRankInfo.isMyRank = true;
                  } else {
                    itemRankInfo.isMyRank = false;
                  }

                  itemRankInfo.playerID = "" + (i + 1);
                  arrListLeaderboard_Ranks.push(itemRankInfo);
                }

                (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                  error: Error()
                }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).PGS_RECEIVE_LISTRANK_LEADERBOARD, arrListLeaderboard_Ranks);
              } else {
                this.receiveListRankLeaderboard([]);
              }
            }
          } else if (this.currLeaderBoardType == (_crd && LEADERBOARD_TYPE === void 0 ? (_reportPossibleCrUseOfLEADERBOARD_TYPE({
            error: Error()
          }), LEADERBOARD_TYPE) : LEADERBOARD_TYPE).FRIEND) {
            this.countDownNextTime.node.active = false;
            var _arrListLeaderboard_Ranks = [];

            for (var _i = 0; _i < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrConnectedPlayerInfos.length; _i++) {
              var friendInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrConnectedPlayerInfos[_i];

              var _itemRankInfo = new (_crd && ItemRankInfo === void 0 ? (_reportPossibleCrUseOfItemRankInfo({
                error: Error()
              }), ItemRankInfo) : ItemRankInfo)();

              _itemRankInfo.userName = friendInfo.name;
              _itemRankInfo.avatarType = (_crd && AVATAR_TYPE === void 0 ? (_reportPossibleCrUseOfAVATAR_TYPE({
                error: Error()
              }), AVATAR_TYPE) : AVATAR_TYPE).TYPE_WEB;
              _itemRankInfo.userScore = friendInfo.level;
              _itemRankInfo.avatarURL = friendInfo.avatarUrl;
              _itemRankInfo.indexRank = _i + 1;
              _itemRankInfo.isMyRank = false;

              _arrListLeaderboard_Ranks.push(_itemRankInfo);
            }

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
            myItemRankInfo.indexRank = 100;
            myItemRankInfo.isMyRank = true;
            myItemRankInfo.userName = (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
              error: Error()
            }), FBInstantManager) : FBInstantManager).instance.getName();
            myItemRankInfo.userScore = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevelUnlock;

            _arrListLeaderboard_Ranks.push(myItemRankInfo);

            _arrListLeaderboard_Ranks.sort((a, b) => {
              return b.userScore - a.userScore;
            });

            for (var _i2 = 0; _i2 < _arrListLeaderboard_Ranks.length; _i2++) {
              _arrListLeaderboard_Ranks[_i2].indexRank = _i2 + 1;
            }

            this.receiveListRankLeaderboard(_arrListLeaderboard_Ranks);
          }
        }

        receiveListRankLeaderboard(arrListRankInfos) {
          var myItemRankInfo = null;
          var indeMyRank = arrListRankInfos.findIndex(item => item.isMyRank == true);

          if (indeMyRank > -1) {
            myItemRankInfo = arrListRankInfos[indeMyRank];
            myItemRankInfo.userScore = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevelUnlock;
          } else {
            myItemRankInfo = new (_crd && ItemRankInfo === void 0 ? (_reportPossibleCrUseOfItemRankInfo({
              error: Error()
            }), ItemRankInfo) : ItemRankInfo)();
            myItemRankInfo.avatarType = (_crd && AVATAR_TYPE === void 0 ? (_reportPossibleCrUseOfAVATAR_TYPE({
              error: Error()
            }), AVATAR_TYPE) : AVATAR_TYPE).TYPE_WEB;
            myItemRankInfo.avatarURL = "";
            myItemRankInfo.idFB = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.playerID;
            myItemRankInfo.indexRank = 100;
            myItemRankInfo.isMyRank = true;
            myItemRankInfo.userName = (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
              error: Error()
            }), FBInstantManager) : FBInstantManager).instance.getName();
            myItemRankInfo.userScore = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currLevelUnlock;
            arrListRankInfos.push(myItemRankInfo);
          }

          arrListRankInfos.sort((a, b) => {
            return b.userScore - a.userScore;
          });

          for (var i = 0; i < arrListRankInfos.length; i++) {
            arrListRankInfos[i].indexRank = i + 1;
          }

          this.iconLoading.active = false;
          this.leaderBoardGroupManager.initRankGroup(arrListRankInfos);
        }

        setShow() {
          if (this.tweenGroup != null) {
            this.tweenGroup.stop();
          }

          this.tweenGroup = tween(this.groupOpacity).to(0.2, {
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
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "groupAllTopWidget", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "groupAllContentWidget", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "groupOpacity", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "countDownNextTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "leaderBoardGroupManager", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "iconLoading", [_dec7], {
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
//# sourceMappingURL=LeaderBoardGroup.js.map