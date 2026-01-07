System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Node, ProgressBar, Sprite, tween, Vec3, clientEvent, Constants, localConfig, Utils, CountDownTime_TournamentGamePlay, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, InfoGroupTournament;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemRankInfo(extras) {
    _reporterNs.report("ItemRankInfo", "../../common/ItemRankInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../core/utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCountDownTime_TournamentGamePlay(extras) {
    _reporterNs.report("CountDownTime_TournamentGamePlay", "./CountDownTime_TournamentGamePlay", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      clientEvent = _unresolved_2.clientEvent;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
    }, function (_unresolved_4) {
      localConfig = _unresolved_4.localConfig;
    }, function (_unresolved_5) {
      Utils = _unresolved_5.default;
    }, function (_unresolved_6) {
      CountDownTime_TournamentGamePlay = _unresolved_6.CountDownTime_TournamentGamePlay;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7bee1RpacJCCbFWFg5S3CD2", "InfoGroupTournament", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = InfoGroupTournament
       * DateTime = Wed Oct 30 2024 16:43:13 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = InfoGroupTournament.ts
       * FileBasenameNoExtension = InfoGroupTournament
       * URL = db://assets/scripts/game/tournaments/InfoGroupTournament.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("InfoGroupTournament", InfoGroupTournament = (_dec = ccclass('InfoGroupTournament'), _dec2 = property(Label), _dec3 = property(_crd && CountDownTime_TournamentGamePlay === void 0 ? (_reportPossibleCrUseOfCountDownTime_TournamentGamePlay({
        error: Error()
      }), CountDownTime_TournamentGamePlay) : CountDownTime_TournamentGamePlay), _dec4 = property(Node), _dec5 = property(Sprite), _dec6 = property(Label), _dec7 = property(ProgressBar), _dec8 = property(Label), _dec9 = property(Node), _dec(_class = (_class2 = (_temp = class InfoGroupTournament extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "txtLevel", _descriptor, this);

          _initializerDefineProperty(this, "countDownTime", _descriptor2, this);

          _initializerDefineProperty(this, "groupPlayer", _descriptor3, this);

          _initializerDefineProperty(this, "avatar", _descriptor4, this);

          _initializerDefineProperty(this, "txtScore", _descriptor5, this);

          _initializerDefineProperty(this, "progressBar", _descriptor6, this);

          _initializerDefineProperty(this, "txtTargetIndex", _descriptor7, this);

          _initializerDefineProperty(this, "nodeTarget", _descriptor8, this);

          _defineProperty(this, "tweenNodeTarget", null);

          _defineProperty(this, "scoreValue", 0);

          _defineProperty(this, "scoreProgress", 0);

          _defineProperty(this, "levelValue", 1);

          _defineProperty(this, "targetScore", 0);

          _defineProperty(this, "arrItemRankInfos", []);

          _defineProperty(this, "indexTarget", -1);

          _defineProperty(this, "scoreTarget", 0);

          _defineProperty(this, "scoreMin", 0);

          _defineProperty(this, "tweenProgress", null);

          _defineProperty(this, "tweenScoreUpdate", null);

          _defineProperty(this, "isNextTarget", false);

          _defineProperty(this, "tweenNextTarget", null);

          _defineProperty(this, "tweenNextTargetGroupPlayer", null);
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).AVATAR_LOAD_FINISHED, this.showAvatar, this);
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).AVATAR_LOAD_FINISHED, this.showAvatar, this);
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        showAvatar() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.myAvatarSpriteFrame) {
            this.avatar.spriteFrame = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.myAvatarSpriteFrame;
          }
        }

        initGroup() {
          this.showAvatar();
          this.arrItemRankInfos = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getListItemRankInfos_byLeaderboardId((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLeaderboardDataInfo._id);
          console.log(this.arrItemRankInfos);
          this.txtLevel.string = `Level 1`;
          this.countDownTime.setInitCountTime(15 * 60, () => {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SET_TOURNAMENT_LOSE);
          });
          this.scoreValue = 0;
          this.txtScore.string = `${this.scoreValue}`;

          if (this.arrItemRankInfos.length == 0) {
            this.indexTarget = 0;
            this.progressBar.progress = 1;
            this.txtTargetIndex.string = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.ordinal_suffix_of(1);
            this.groupPlayer.setPosition(new Vec3(375, 0, 0));
            this.scoreTarget = 0;
          } else {
            this.progressBar.progress = 0;
            this.indexTarget = this.arrItemRankInfos.length - 1;
            this.scoreValue = 0;
            this.scoreProgress = 0;
            this.scoreMin = 0;
            this.scoreTarget = this.arrItemRankInfos[this.indexTarget].userScore;

            if (this.indexTarget == 0) {
              this.txtTargetIndex.string = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.ordinal_suffix_of(1);
            } else {
              this.txtTargetIndex.string = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.ordinal_suffix_of(this.indexTarget);
            }

            this.groupPlayer.setPosition(new Vec3(-375, 0, 0));
            console.log(this.scoreTarget);
          }
        }

        setStartCountDown() {
          this.countDownTime.setStartCountTime();
        }

        setNextLevel(timePlay) {
          this.txtLevel.string = `Level ${(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currIndexLevelTournament}`;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currIndexLevelTournament <= 2) {
            this.countDownTime.setInitCountTime(15 * 60, () => {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SET_TOURNAMENT_LOSE);
            });
          } else {
            this.countDownTime.setInitCountTime(timePlay, () => {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SET_TOURNAMENT_LOSE);
            });
          }
        }

        setRevive() {
          this.countDownTime.setInitCountTime(60, () => {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SET_TOURNAMENT_LOSE);
          });
          this.countDownTime.setStartCountTime();
        }

        setAddScore(scoreAdd) {
          // if(this.indexTarget > -1){
          //     this.scoreValue += scoreAdd;
          //     this.txtScore.string = `${Utils.formatNumber(this.scoreValue)}`;
          //     if(this.tweenScoreUpdate) this.tweenScoreUpdate.stop();
          //     this.tweenScoreUpdate = tween(this.txtScore.node).to(0.1,{scale: new Vec3(1.1,1.1,1.1)},{easing:'linear'}).to(0.1,{scale: new Vec3(1,1,1)},{easing:'linear'}).union().repeat(2).start();
          // }else{
          // }
          this.scoreProgress = this.scoreValue;
          this.scoreValue += scoreAdd;
          this.showUpdateScore();
        }

        showUpdateScore() {
          let progressValue = 0;

          if (this.scoreValue < this.scoreTarget) {
            progressValue = (this.scoreValue - this.scoreMin) / (this.scoreTarget - this.scoreMin);
            if (this.tweenProgress) this.tweenProgress.stop();
            this.tweenProgress = tween(this.progressBar).to(0.2, {
              progress: progressValue
            }, {
              easing: 'linear',
              onUpdate: (target, ratio) => {
                this.setUpdateScore();
              },
              onComplete: () => {}
            }).start();
          } else {
            progressValue = 1;

            if (!this.isNextTarget) {
              this.isNextTarget = true;
              if (this.tweenProgress) this.tweenProgress.stop();
              this.tweenProgress = tween(this.progressBar).to(0.2, {
                progress: progressValue
              }, {
                easing: 'linear',
                onUpdate: (target, ratio) => {
                  this.setUpdateScore();
                },
                onComplete: () => {
                  this.setNextTarget();
                }
              }).start();
            } else {
              this.txtScore.string = `${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).formatNumber(this.scoreValue)}`;
              if (this.tweenScoreUpdate) this.tweenScoreUpdate.stop();
              this.tweenScoreUpdate = tween(this.txtScore.node).to(0.1, {
                scale: new Vec3(1.1, 1.1, 1.1)
              }, {
                easing: 'linear'
              }).to(0.1, {
                scale: new Vec3(1, 1, 1)
              }, {
                easing: 'linear'
              }).union().repeat(2).start();
            }
          }
        }

        setUpdateScore() {
          let scoreCheck = Math.floor(this.scoreMin + (this.scoreTarget - this.scoreMin) * this.progressBar.progress);

          if (scoreCheck != this.scoreProgress) {
            this.scoreProgress = scoreCheck;
            this.txtScore.string = `${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).formatNumber(this.scoreProgress)}`;
          }

          let posX = -375 + 750 * this.progressBar.progress;
          this.groupPlayer.setPosition(new Vec3(posX, 0, 0));
        }

        setNextTarget() {
          if (this.indexTarget == 0) {
            this.indexTarget = 0;
            this.txtScore.string = `${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).formatNumber(this.scoreValue)}`;
            if (this.tweenScoreUpdate) this.tweenScoreUpdate.stop();
            this.tweenScoreUpdate = tween(this.txtScore.node).to(0.1, {
              scale: new Vec3(1.1, 1.1, 1.1)
            }, {
              easing: 'linear'
            }).to(0.1, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'linear'
            }).union().repeat(2).start();
          } else {
            if (this.tweenProgress) this.tweenProgress.stop();
            this.tweenProgress = tween(this.progressBar).to(0, {
              progress: 0
            }, {
              easing: 'linear',
              onComplete: () => {}
            }).start();
            if (this.tweenNextTargetGroupPlayer) this.tweenNextTargetGroupPlayer.stop();
            this.tweenNextTargetGroupPlayer = tween(this.groupPlayer).to(0, {
              position: new Vec3(-375, 0, 0)
            }, {
              easing: 'linear',
              onComplete: () => {
                this.setNextTarget_Finished();
              }
            }).start();
          }

          if (this.tweenNextTarget) this.tweenNextTarget.stop();
          this.tweenNextTarget = tween(this.nodeTarget).to(0.1, {
            scale: new Vec3(1.1, 1.1, 1.1)
          }, {
            easing: 'linear'
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'linear'
          }).union().repeat(2).call(() => {}).start();
        }

        setNextTarget_Finished() {
          this.isNextTarget = false;
          this.indexTarget = 0;

          for (let i = 0; i < this.arrItemRankInfos.length - 1; i++) {
            if (this.scoreValue < this.arrItemRankInfos[i].userScore && this.scoreValue >= this.arrItemRankInfos[i + 1].userScore) {
              this.indexTarget = i;
              break;
            }
          }

          if (this.indexTarget == 0) {
            this.txtTargetIndex.string = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.ordinal_suffix_of(1);
            this.tweenProgress = tween(this.progressBar).to(0.2, {
              progress: 1
            }, {
              easing: 'linear'
            }).start();
            this.tweenNextTargetGroupPlayer = tween(this.groupPlayer).to(0.2, {
              position: new Vec3(375, 0, 0)
            }, {
              easing: 'linear',
              onComplete: () => {}
            }).start();
            this.txtScore.string = `${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).formatNumber(this.scoreValue)}`;
          } else {
            this.scoreMin = this.arrItemRankInfos[this.indexTarget + 1].userScore;
            this.scoreTarget = this.arrItemRankInfos[this.indexTarget].userScore;
            this.txtTargetIndex.string = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.ordinal_suffix_of(this.indexTarget);

            if (this.scoreValue > this.scoreMin) {
              this.scoreProgress = this.scoreMin;
              this.txtScore.string = `${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).formatNumber(this.scoreMin)}`;
              this.showUpdateScore();
            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtLevel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "countDownTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "groupPlayer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "avatar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txtScore", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "txtTargetIndex", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "nodeTarget", [_dec9], {
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
//# sourceMappingURL=InfoGroupTournament.js.map