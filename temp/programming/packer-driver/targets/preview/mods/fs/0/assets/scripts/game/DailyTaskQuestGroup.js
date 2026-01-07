System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, Label, Node, Prefab, ProgressBar, tween, Vec3, ItemDailyQuest, localConfig, ItemDailyQuestBoxReward, clientEvent, Constants, AudioManager2, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _temp, _crd, ccclass, property, DailyTaskQuestGroup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItemDailyQuest(extras) {
    _reporterNs.report("ItemDailyQuest", "./ItemDailyQuest", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemDailyQuestBoxReward(extras) {
    _reporterNs.report("ItemDailyQuestBoxReward", "./ItemDailyQuestBoxReward", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQuestDataInfo(extras) {
    _reporterNs.report("QuestDataInfo", "./info/QuestDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroupRewardDataInfo(extras) {
    _reporterNs.report("GroupRewardDataInfo", "./info/ShopDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "../framework/audioManager2", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ProgressBar = _cc.ProgressBar;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ItemDailyQuest = _unresolved_2.ItemDailyQuest;
    }, function (_unresolved_3) {
      localConfig = _unresolved_3.localConfig;
    }, function (_unresolved_4) {
      ItemDailyQuestBoxReward = _unresolved_4.ItemDailyQuestBoxReward;
    }, function (_unresolved_5) {
      clientEvent = _unresolved_5.clientEvent;
    }, function (_unresolved_6) {
      Constants = _unresolved_6.Constants;
    }, function (_unresolved_7) {
      AudioManager2 = _unresolved_7.AudioManager2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c57b5oP3IJF0L1BBzELIpLl", "DailyTaskQuestGroup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = DailyTaskQuestGroup
       * DateTime = Sun Oct 13 2024 20:29:28 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = DailyTaskQuestGroup.ts
       * FileBasenameNoExtension = DailyTaskQuestGroup
       * URL = db://assets/scripts/game/DailyTaskQuestGroup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("DailyTaskQuestGroup", DailyTaskQuestGroup = (_dec = ccclass('DailyTaskQuestGroup'), _dec2 = property(_crd && ItemDailyQuestBoxReward === void 0 ? (_reportPossibleCrUseOfItemDailyQuestBoxReward({
        error: Error()
      }), ItemDailyQuestBoxReward) : ItemDailyQuestBoxReward), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(ProgressBar), _dec6 = property(Prefab), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec(_class = (_class2 = (_temp = class DailyTaskQuestGroup extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "arrBoxRewards", _descriptor, this);

          _initializerDefineProperty(this, "nodeAchievement", _descriptor2, this);

          _initializerDefineProperty(this, "txtAchievement", _descriptor3, this);

          _initializerDefineProperty(this, "achivementProgress", _descriptor4, this);

          _initializerDefineProperty(this, "itemDailyQuestPrefab", _descriptor5, this);

          _initializerDefineProperty(this, "contentGroup", _descriptor6, this);

          _defineProperty(this, "arrItemDailyQuests", []);

          _initializerDefineProperty(this, "itemAchievement", _descriptor7, this);

          _initializerDefineProperty(this, "achievementStartPos", _descriptor8, this);

          _initializerDefineProperty(this, "achievementEndPos", _descriptor9, this);

          _initializerDefineProperty(this, "nodeNotify", _descriptor10, this);

          _defineProperty(this, "countAchievement", 0);

          _defineProperty(this, "currIndexBoxReward", 0);

          _defineProperty(this, "countAchievementTarget", 0);

          _defineProperty(this, "isUnlockNewBoxReward", false);

          _initializerDefineProperty(this, "lockGroup", _descriptor11, this);

          _defineProperty(this, "tweenMoveAchievement", null);

          _defineProperty(this, "tweenProgressAchievement", null);

          _defineProperty(this, "tweenIconAchievement", null);

          _defineProperty(this, "currAchievementValue", 0);
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILY_QUEST_TOUCH_CLAIM, this.setItemQuestClaim, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILY_QUEST_CLAIM_UPDATE_STARTPOS, this.setQuestClaim_UpdateStartPos, this);
          this.showInfo();
          this.lockGroup.active = false;
          this.countAchievementTarget = 0;
          this.isUnlockNewBoxReward = false;
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILY_QUEST_TOUCH_CLAIM, this.setItemQuestClaim, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILY_QUEST_CLAIM_UPDATE_STARTPOS, this.setQuestClaim_UpdateStartPos, this);
        }

        start() {
          // [3]
          this.initQuests();
        } // update (deltaTime: number) {
        //     // [4]
        // }


        initQuests() {
          // console.log("initQuests");
          var countClaim = -1;
          var countAchievement = 0;

          for (var i = 0; i < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.arrDailyQuestDataInfos.length; i++) {
            var item = instantiate(this.itemDailyQuestPrefab);
            item.setParent(this.contentGroup);
            var itemDailyQuest = item.getComponent(_crd && ItemDailyQuest === void 0 ? (_reportPossibleCrUseOfItemDailyQuest({
              error: Error()
            }), ItemDailyQuest) : ItemDailyQuest);
            itemDailyQuest.initQuest((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrDailyQuestDataInfos[i]);
            this.arrItemDailyQuests.push(itemDailyQuest);
            var progressValue = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getDailyQuestProgress_byID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrDailyQuestDataInfos[i].id);

            if (progressValue >= (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrDailyQuestDataInfos[i].count) {
              progressValue = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrDailyQuestDataInfos[i].count;
            }

            if (progressValue < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrDailyQuestDataInfos[i].count) {} else {
              if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.checkDailyQuestReceive_byID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrDailyQuestDataInfos[i].id)) {
                countAchievement += (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.arrDailyQuestDataInfos[i].value;
              } else {
                countClaim++; // console.log(countClaim);

                itemDailyQuest.node.setSiblingIndex(countClaim);
              }
            }
          }

          for (var _i = 0; _i < this.arrItemDailyQuests.length; _i++) {
            var _itemDailyQuest = this.arrItemDailyQuests[_i];

            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.checkDailyQuestReceive_byID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrDailyQuestDataInfos[_i].id)) {
              _itemDailyQuest.node.setSiblingIndex(999);
            }
          }

          this.showNotify();
        }

        showInfo() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.arrDailyQuest_Receives.length > 0) {
            var countAchievement = 0;

            for (var i = 0; i < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrDailyQuest_Receives.length; i++) {
              var questDataInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getDailyQuestDataInfo_byID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrDailyQuest_Receives[i]);
              countAchievement += questDataInfo.value;
            }

            this.countAchievement = countAchievement;
            this.txtAchievement.string = "x" + countAchievement;
            this.achivementProgress.progress = countAchievement / 100; // console.log("countAchievement",countAchievement);

            this.currIndexBoxReward = 0;

            for (var _i2 = 0; _i2 < this.arrBoxRewards.length; _i2++) {
              var boxValue = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getDailyQuest_BoxRewadValue_byIndexBox(this.arrBoxRewards[_i2].indexBoxReward); // console.log("boxValue",boxValue);

              if (boxValue <= countAchievement) {
                this.currIndexBoxReward = this.arrBoxRewards[_i2].indexBoxReward; // console.log("this.currIndexBoxReward",this.currIndexBoxReward);

                this.arrBoxRewards[_i2].setBoxFinished();
              } else {
                this.arrBoxRewards[_i2].setBoxLock();
              }
            }
          } else {
            this.countAchievement = 0;
            this.txtAchievement.string = "0";
            this.achivementProgress.progress = 0;

            for (var _i3 = 0; _i3 < this.arrBoxRewards.length; _i3++) {
              this.arrBoxRewards[_i3].setBoxLock();
            }
          }

          this.showNotify();
        }

        showNotify() {
          var isShowNotify = false;

          if (this.arrItemDailyQuests.length > 0) {
            for (var i = 0; i < this.arrItemDailyQuests.length; i++) {
              var itemDailyQuest = this.arrItemDailyQuests[i];

              if (itemDailyQuest.isClaimAvailable()) {
                isShowNotify = true;
              }
            }
          }

          this.nodeNotify.active = isShowNotify;
        }

        setItemQuestClaim(itemDailyQuest) {
          this.lockGroup.active = true;
          this.countAchievementTarget = this.countAchievement + itemDailyQuest.questDataInfo.value;
          this.isUnlockNewBoxReward = false;

          if (this.countAchievementTarget >= (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getDailyQuest_BoxRewadValue_byIndexBox(this.currIndexBoxReward + 1)) {
            this.isUnlockNewBoxReward = true;
          }

          this.setMoveAchievement_toTarget();
          this.showNotify();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILYTASK_NOTIFY_UPDATE);
        }

        setMoveAchievement_toTarget() {
          this.itemAchievement.position = this.achievementStartPos.position;
          this.itemAchievement.setScale(new Vec3(1, 1, 1));
          this.itemAchievement.active = true;

          if (this.tweenMoveAchievement) {
            this.tweenMoveAchievement.stop();
          }

          this.tweenMoveAchievement = tween(this.itemAchievement).to(0.3, {
            position: this.achievementEndPos.position,
            scale: new Vec3(0.8, 0.8, 0.8)
          }, {
            easing: 'quadOut',
            onComplete: () => {
              this.itemAchievement.active = false;
              this.setProgressAchievement_toTarget();
            }
          }).start();
        }

        setProgressAchievement_toTarget() {
          if (this.tweenProgressAchievement) {
            this.tweenProgressAchievement.stop();
          }

          if (this.tweenIconAchievement) {
            this.tweenIconAchievement.stop();
          }

          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playSound_progressbar();
          this.tweenIconAchievement = tween(this.nodeAchievement).to(0.05, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }, {
            easing: 'linear'
          }).to(0.05, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'linear'
          }).to(0.05, {
            scale: new Vec3(1.1, 1.1, 1.1)
          }, {
            easing: 'linear'
          }).to(0.05, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'linear'
          }).union().start(); //.repeat(2);

          this.tweenProgressAchievement = tween(this.achivementProgress).to(0.3, {
            progress: this.countAchievementTarget / 100
          }, {
            easing: 'linear',
            onComplete: () => {
              this.countAchievement = this.countAchievementTarget;
              this.txtAchievement.string = "x" + this.countAchievement;
              this.lockGroup.active = false;
            },
            onUpdate: (target, ratio) => {
              var countAchievement = Math.floor(ratio * this.countAchievementTarget);

              if (this.countAchievement < countAchievement) {
                this.countAchievement = countAchievement;
                this.txtAchievement.string = "x" + countAchievement;
              }

              if (this.isUnlockNewBoxReward) {
                if (countAchievement >= (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.getDailyQuest_BoxRewadValue_byIndexBox(this.currIndexBoxReward + 1)) {
                  this.currIndexBoxReward++;
                  this.arrBoxRewards[this.currIndexBoxReward - 1].setBoxFinished();
                  this.isUnlockNewBoxReward = false;
                  this.showClaimBoxReward();
                }
              }
            }
          }).start();
        }

        showClaimBoxReward() {
          var groupRewardDataInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getDailyQuest_GroupRewardDataInfo_byIndex(this.currIndexBoxReward);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_REWARDRECEIVE_POPUP, "DAILY QUEST", groupRewardDataInfo);
        }

        setQuestClaim_UpdateStartPos(startPos) {
          this.achievementStartPos.worldPosition = startPos;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "arrBoxRewards", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeAchievement", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txtAchievement", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "achivementProgress", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "itemDailyQuestPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "contentGroup", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "itemAchievement", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "achievementStartPos", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "achievementEndPos", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "nodeNotify", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lockGroup", [_dec12], {
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
//# sourceMappingURL=DailyTaskQuestGroup.js.map