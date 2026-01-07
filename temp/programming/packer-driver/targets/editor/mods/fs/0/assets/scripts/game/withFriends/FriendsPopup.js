System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Node, BasePopup, localConfig, ItemRankInfo, AVATAR_TYPE, Constants, clientEvent, FBInstantManager, WithFriendDataInfo, lodash, LeaderBoardGroupFriendManager, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, FriendsPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasePopup(extras) {
    _reporterNs.report("BasePopup", "../../common/basePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemRankInfo(extras) {
    _reporterNs.report("ItemRankInfo", "../../common/ItemRankInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAVATAR_TYPE(extras) {
    _reporterNs.report("AVATAR_TYPE", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "../../common/FBInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWithFriendDataInfo(extras) {
    _reporterNs.report("WithFriendDataInfo", "./WithFriendDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOflodash(extras) {
    _reporterNs.report("lodash", "../../framework/lodash", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLeaderBoardGroupFriendManager(extras) {
    _reporterNs.report("LeaderBoardGroupFriendManager", "../tournaments/LeaderBoardGroupFriendManager", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BasePopup = _unresolved_2.BasePopup;
    }, function (_unresolved_3) {
      localConfig = _unresolved_3.localConfig;
    }, function (_unresolved_4) {
      ItemRankInfo = _unresolved_4.ItemRankInfo;
    }, function (_unresolved_5) {
      AVATAR_TYPE = _unresolved_5.AVATAR_TYPE;
      Constants = _unresolved_5.Constants;
    }, function (_unresolved_6) {
      clientEvent = _unresolved_6.clientEvent;
    }, function (_unresolved_7) {
      FBInstantManager = _unresolved_7.FBInstantManager;
    }, function (_unresolved_8) {
      WithFriendDataInfo = _unresolved_8.WithFriendDataInfo;
    }, function (_unresolved_9) {
      lodash = _unresolved_9.lodash;
    }, function (_unresolved_10) {
      LeaderBoardGroupFriendManager = _unresolved_10.LeaderBoardGroupFriendManager;
    }, function (_unresolved_11) {
      LogEventManager = _unresolved_11.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "244d079WV5NMZ1U4ULhx/Vl", "FriendsPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = FriendsPopup
       * DateTime = Fri Mar 21 2025 15:10:43 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = FriendsPopup.ts
       * FileBasenameNoExtension = FriendsPopup
       * URL = db://assets/scripts/game/withFriends/FriendsPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("FriendsPopup", FriendsPopup = (_dec = ccclass('FriendsPopup'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(_crd && LeaderBoardGroupFriendManager === void 0 ? (_reportPossibleCrUseOfLeaderBoardGroupFriendManager({
        error: Error()
      }), LeaderBoardGroupFriendManager) : LeaderBoardGroupFriendManager), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = (_temp = class FriendsPopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "btnInvite", _descriptor, this);

          _initializerDefineProperty(this, "btnPlayWithFriends", _descriptor2, this);

          _initializerDefineProperty(this, "leaderBoardGroupFriendManager", _descriptor3, this);

          _initializerDefineProperty(this, "groupNonFriends", _descriptor4, this);

          _initializerDefineProperty(this, "nodeLoading", _descriptor5, this);
        }

        onEnable() {
          super.onEnable();
          this.btnPlayWithFriends.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchPlayWithFriend, this);
          this.btnInvite.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchInvite, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).WITHFRIEND_TOUCH_PLAY, this.setPlayWithFriend, this);
        }

        onDisable() {
          super.onDisable();
          this.btnPlayWithFriends.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchPlayWithFriend, this);
          this.btnInvite.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchInvite, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).WITHFRIEND_TOUCH_PLAY, this.setPlayWithFriend, this);
        }

        showFriendsPopup() {
          this.groupNonFriends.active = false;
          this.leaderBoardGroupFriendManager.resetRankGroup();
          this.leaderBoardGroupFriendManager.node.active = false;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.arrConnectedPlayerInfos.length > 0) {
            this.nodeLoading.active = true;
          } else {
            this.nodeLoading.active = false;
            this.groupNonFriends.active = true;
          }

          super.showPopup();
        }

        showPoup_ShowView_Finished() {
          super.showPoup_ShowView_Finished();
          this.nodeLoading.active = false;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.arrConnectedPlayerInfos.length > 0) {
            this.groupNonFriends.active = false;
            this.leaderBoardGroupFriendManager.node.active = true;
            let arrListLeaderboard_Ranks = [];

            for (let i = 0; i < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrConnectedPlayerInfos.length; i++) {
              let friendInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrConnectedPlayerInfos[i];
              let itemRankInfo = new (_crd && ItemRankInfo === void 0 ? (_reportPossibleCrUseOfItemRankInfo({
                error: Error()
              }), ItemRankInfo) : ItemRankInfo)();
              itemRankInfo.userName = friendInfo.name;
              itemRankInfo.avatarType = (_crd && AVATAR_TYPE === void 0 ? (_reportPossibleCrUseOfAVATAR_TYPE({
                error: Error()
              }), AVATAR_TYPE) : AVATAR_TYPE).TYPE_WEB;
              itemRankInfo.userScore = friendInfo.level;
              itemRankInfo.avatarURL = friendInfo.avatarUrl;
              itemRankInfo.indexRank = i + 1;
              itemRankInfo.idFB = friendInfo.id;
              itemRankInfo.isMyRank = false;
              itemRankInfo.playerID = friendInfo.id;
              arrListLeaderboard_Ranks.push(itemRankInfo);
            }

            arrListLeaderboard_Ranks.sort((a, b) => b.userScore - a.userScore);

            for (let i = 0; i < arrListLeaderboard_Ranks.length; i++) {
              arrListLeaderboard_Ranks[i].indexRank = i + 1;
            }

            this.leaderBoardGroupFriendManager.initRankGroup(arrListLeaderboard_Ranks);
          } else {
            this.groupNonFriends.active = true;
            this.leaderBoardGroupFriendManager.node.active = false;
          }
        }

        touchPlayWithFriend() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("playwithfriend", "friendspopup");
          (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.PlayWithFriend_ChooseAsync((err, success) => {
            if (err) {} else {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currWithFriendDataInfo = new (_crd && WithFriendDataInfo === void 0 ? (_reportPossibleCrUseOfWithFriendDataInfo({
                error: Error()
              }), WithFriendDataInfo) : WithFriendDataInfo)();
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currWithFriendDataInfo.senderAvatarURL = (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                error: Error()
              }), FBInstantManager) : FBInstantManager).instance.getPhotoUrl();
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currWithFriendDataInfo.senderName = (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                error: Error()
              }), FBInstantManager) : FBInstantManager).instance.getName();
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currWithFriendDataInfo.senderID = (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                error: Error()
              }), FBInstantManager) : FBInstantManager).instance.getID();
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currWithFriendDataInfo.senderScore = 0;
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currWithFriendDataInfo.receiverScore = 0;
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currWithFriendDataInfo.levelIndex = (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
                error: Error()
              }), lodash) : lodash).random(20, 150);
              this.updateContextWithFriend();
              this.hidePopup();
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).WITHFRIEND_PLAY_START);
            }
          });
        }

        setPlayWithFriend(itemRankInfo) {
          // console.log("setPlayWithFriend",itemRankInfo);
          (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.PlayWithFriend_ID(itemRankInfo.idFB, (err, success) => {
            if (err) {} else {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currWithFriendDataInfo = new (_crd && WithFriendDataInfo === void 0 ? (_reportPossibleCrUseOfWithFriendDataInfo({
                error: Error()
              }), WithFriendDataInfo) : WithFriendDataInfo)();
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currWithFriendDataInfo.senderAvatarURL = (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                error: Error()
              }), FBInstantManager) : FBInstantManager).instance.getPhotoUrl();
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currWithFriendDataInfo.senderName = (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                error: Error()
              }), FBInstantManager) : FBInstantManager).instance.getName();
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currWithFriendDataInfo.senderID = (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                error: Error()
              }), FBInstantManager) : FBInstantManager).instance.getID();
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currWithFriendDataInfo.senderScore = 0;
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currWithFriendDataInfo.receiverAvatarURL = itemRankInfo.avatarURL;
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currWithFriendDataInfo.receiverName = itemRankInfo.userName;
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currWithFriendDataInfo.receiverID = itemRankInfo.idFB;
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currWithFriendDataInfo.receiverScore = 0;
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currWithFriendDataInfo.levelIndex = (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
                error: Error()
              }), lodash) : lodash).random(20, 150);
              this.hidePopup();
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).WITHFRIEND_PLAY_START);
              this.updateContextWithFriend();
            }
          });
        }

        touchInvite() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("invite", "friendspopup");
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_INVITE_POPUP, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock, (err, content) => {});
        }

        updateContextWithFriend() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_UPDATECONTEXT_WITHFRIEND_POPUP, (errr, success) => {});
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnInvite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnPlayWithFriends", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "leaderBoardGroupFriendManager", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "groupNonFriends", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeLoading", [_dec6], {
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
//# sourceMappingURL=FriendsPopup.js.map