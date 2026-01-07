System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Node, sp, tween, Vec3, localConfig, Constants, THEME_TYPE, clientEvent, FBInstantManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _temp, _crd, ccclass, property, ItemPlayerRace;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayerRaceDataInfo(extras) {
    _reporterNs.report("PlayerRaceDataInfo", "./PlayerRaceDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTHEME_TYPE(extras) {
    _reporterNs.report("THEME_TYPE", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "../../common/FBInstantManager", _context.meta, extras);
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
      sp = _cc.sp;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      localConfig = _unresolved_2.localConfig;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
      THEME_TYPE = _unresolved_3.THEME_TYPE;
    }, function (_unresolved_4) {
      clientEvent = _unresolved_4.clientEvent;
    }, function (_unresolved_5) {
      FBInstantManager = _unresolved_5.FBInstantManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "65a8c47V2NPtrRi09fRZZa3", "ItemPlayerRace", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemPlayerRace
       * DateTime = Thu Nov 07 2024 15:43:25 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemPlayerRace.ts
       * FileBasenameNoExtension = ItemPlayerRace
       * URL = db://assets/scripts/game/race/ItemPlayerRace.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemPlayerRace", ItemPlayerRace = (_dec = ccclass('ItemPlayerRace'), _dec2 = property(Vec3), _dec3 = property(Vec3), _dec4 = property(Vec3), _dec5 = property(Vec3), _dec6 = property(Vec3), _dec7 = property(Vec3), _dec8 = property(Vec3), _dec9 = property(sp.Skeleton), _dec10 = property(Node), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Boolean), _dec15 = property(Node), _dec(_class = (_class2 = (_temp = class ItemPlayerRace extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "posPreStart", _descriptor, this);

          _initializerDefineProperty(this, "posStart", _descriptor2, this);

          _initializerDefineProperty(this, "posEnd", _descriptor3, this);

          _initializerDefineProperty(this, "posFinished", _descriptor4, this);

          _initializerDefineProperty(this, "scalePreStart", _descriptor5, this);

          _initializerDefineProperty(this, "scaleStart", _descriptor6, this);

          _initializerDefineProperty(this, "scaleEnd", _descriptor7, this);

          _initializerDefineProperty(this, "character", _descriptor8, this);

          _initializerDefineProperty(this, "nodeInfo", _descriptor9, this);

          _initializerDefineProperty(this, "txtScore", _descriptor10, this);

          _initializerDefineProperty(this, "txtScore2", _descriptor11, this);

          _initializerDefineProperty(this, "txtName", _descriptor12, this);

          _initializerDefineProperty(this, "isMyPlayer", _descriptor13, this);

          _initializerDefineProperty(this, "nodeFindding", _descriptor14, this);

          _defineProperty(this, "playerRaceDataInfo", null);

          _defineProperty(this, "tweenMovePlayer", null);

          _defineProperty(this, "currScore", 0);

          _defineProperty(this, "scoreCheck", 0);
        }

        start() {// [3]
        }

        onEnable() {}

        onDisable() {
          this.unschedule(this.checkMoveToNextScore);
        } // update (deltaTime: number) {
        //     // [4]
        // }


        initPlayerFindding(_playerRaceDataInfo, delayTime = 0) {
          this.playerRaceDataInfo = _playerRaceDataInfo;
          this.resetPlayer();
          this.nodeFindding.active = true;
          this.character.node.active = false;
          this.schedule(this.setPlayerFindding_Finished, delayTime, 1, 0);
        }

        setPlayerFindding_Finished() {
          this.resetPlayer();
          this.nodeFindding.active = false;
          this.txtName.string = `${this.playerRaceDataInfo.userName}`;
          this.setMoveToStart();
        }

        initPlayer(_playerRaceDataInfo) {
          this.resetPlayer();
          this.playerRaceDataInfo = _playerRaceDataInfo;
          this.txtName.string = `${this.playerRaceDataInfo.userName}`;
          this.setMoveToStart();
        }

        initMyPlayer() {
          this.resetPlayer();
          this.txtName.string = `${(_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.getName()}`;
          this.currScore = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.raceScore;
          this.setMoveToStart();
        }

        resetPlayer() {
          if (this.tweenMovePlayer) {
            this.tweenMovePlayer.stop();
          }

          this.currScore = 0;
          this.txtScore.string = `0`;
          this.txtScore2.string = `0`;
          this.nodeInfo.active = false;
          this.txtScore2.node.active = false;
          this.character.node.setPosition(this.posPreStart);
          this.character.node.setScale(this.scalePreStart);
          this.nodeFindding.active = false;
          this.unschedule(this.checkMoveToNextScore);
          this.unschedule(this.setAnimationDace_Finished);
          this.unschedule(this.setPlayerFindding_Finished);
        }

        setMoveToStart() {
          this.txtScore2.node.active = false;
          this.character.node.active = true;
          this.setAnimationRun();

          if (this.tweenMovePlayer) {
            this.tweenMovePlayer.stop();
          }

          this.tweenMovePlayer = tween(this.character.node).to(0.8, {
            position: this.posStart
          }, {
            easing: 'linear',
            onComplete: () => {
              this.setMoveToStart_Finished();
            }
          }).start();
        }

        setMoveToStart_Finished() {
          this.nodeFindding.active = false;
          this.nodeInfo.active = true;
          this.setAnimationIdle();
          this.nodeInfo.active = true;
        }

        checkMoveToCurrScore() {
          if (!this.isMyPlayer) {
            let timePlayed = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getCurrTime() - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.raceLastTime;
            this.currScore = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getRaceScore_Opponent(timePlayed, this.playerRaceDataInfo.arrTimes); // console.log("this.currScore",this.currScore);
          }
        }

        setMoveToCurrScore(indexRank) {
          // console.log("setMoveToCurrScore",indexRank,this.currScore);
          if (this.currScore == 0) {
            if (!this.isMyPlayer) {
              // console.log("setMoveToCurrScore22222",this.currScore);
              this.schedule(this.checkMoveToNextScore, 5);
            }

            return;
          }

          this.setAnimationRun();
          this.scoreCheck = 0;
          this.txtScore2.node.active = true;
          this.txtScore2.string = `${this.scoreCheck}`;
          let timeMove = this.currScore / 10 * 2 + 0.1 * indexRank;
          let posX = (this.posEnd.x - this.posStart.x) * (this.currScore / 10) + this.posStart.x;
          let posY = (this.posEnd.y - this.posStart.y) * (this.currScore / 10) + this.posStart.y;
          let scale = (this.scaleEnd.x - this.scaleStart.x) * (this.currScore / 10) + this.scaleStart.x;

          if (this.tweenMovePlayer) {
            this.tweenMovePlayer.stop();
          }

          this.tweenMovePlayer = tween(this.character.node).to(timeMove, {
            position: new Vec3(posX, posY, 0),
            scale: new Vec3(scale, scale, 1)
          }, {
            easing: 'linear',
            onUpdate: (target, ratio) => {
              let score = Math.floor(ratio * this.currScore);

              if (score != this.scoreCheck) {
                this.scoreCheck = score;
                this.txtScore.string = `${this.scoreCheck}`;
                this.txtScore2.string = `${this.scoreCheck}`;
              }
            },
            onComplete: () => {
              this.setMoveToCurrScore_Finished();
            }
          }).start();
          0;
        }

        setMoveToCurrScore_Finished() {
          // console.log("setMoveToCurrScore_Finished",this.currScore);
          if (this.currScore == 10) {
            this.setMoveToEnd();
          } else {
            this.scheduleOnce(() => {
              if (!this.isMyPlayer) {
                this.schedule(this.checkMoveToNextScore, 5);
              }

              this.txtScore2.node.active = false;
              this.setAnimationIdle();
            }, 0.2);
          }
        }

        setMoveToEnd() {
          // console.log("setMoveToEnd");
          this.unschedule(this.checkMoveToNextScore); // this.txtScore2.node.active = false;

          if (this.tweenMovePlayer) {
            this.tweenMovePlayer.stop();
          }

          this.tweenMovePlayer = tween(this.character.node).to(0.5, {
            position: this.posFinished
          }, {
            easing: 'linear',
            onComplete: () => {
              this.setMoveToEnd_Finished();
            }
          }).start();
        }

        setMoveToEnd_Finished() {
          this.txtScore2.node.active = false;
          this.setAnimationDance();
          this.schedule(this.setAnimationDace_Finished, 2.67, 1, 0);
        }

        setAnimationDace_Finished() {
          // clientEvent.dispatchEvent(Constants.TUBERACE_PLAYER_FINISHED);
          this.setAnimationIdle();
        }

        checkMoveToNextScore() {
          if (!this.isMyPlayer && !(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.checkRaceFinished()) {
            let timePlayed = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getCurrTime() - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.raceLastTime; // console.log("timePlayed",timePlayed);

            let scoreOpponent = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getRaceScore_Opponent(timePlayed, this.playerRaceDataInfo.arrTimes); // console.log("scoreOpponent",scoreOpponent,this.currScore);

            if (scoreOpponent > this.currScore) {
              this.currScore = scoreOpponent;
              this.setMoveToNextScore();
            }
          }
        }

        setMoveToNextScore() {
          let posX = (this.posEnd.x - this.posStart.x) * (this.currScore / 10) + this.posStart.x;
          let posY = (this.posEnd.y - this.posStart.y) * (this.currScore / 10) + this.posStart.y;
          let scale = (this.scaleEnd.x - this.scaleStart.x) * (this.currScore / 10) + this.scaleStart.x;

          if (this.tweenMovePlayer) {
            this.tweenMovePlayer.stop();
          }

          this.setAnimationRun();
          this.tweenMovePlayer = tween(this.character.node).delay(0.2).to(0.5, {
            position: new Vec3(posX, posY, 0),
            scale: new Vec3(scale, scale, 1)
          }, {
            easing: 'linear',
            onUpdate: (target, ratio) => {
              if (this.scoreCheck != this.currScore) {
                this.scoreCheck = this.currScore;
                this.txtScore.string = `${this.scoreCheck}`;
                this.txtScore2.string = `${this.scoreCheck}`;
              }
            },
            onComplete: () => {
              this.setMoveToNextScore_Finished();
            }
          }).start();
        }

        setMoveToNextScore_Finished() {
          // this.txtScore2.node.active = false;
          // console.log("setMoveToNextScore_Finished",this.currScore);
          if (this.currScore == 10) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TUBERACE_OPPONENTS_FINISHED);
            this.setMoveToEnd();
          } else {
            this.scheduleOnce(() => {
              this.txtScore2.node.active = false;
              this.setAnimationIdle();
            }, 0.2);
          }
        }

        setAnimationIdle() {
          let strAnimIdle = "";

          if (this.isMyPlayer) {
            strAnimIdle = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getStrAnimationIdle_byID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getThemeSelected_byThemeType((_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
              error: Error()
            }), THEME_TYPE) : THEME_TYPE).SKIN));
          } else {
            strAnimIdle = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getStrAnimationIdle_byID(this.playerRaceDataInfo.raceSkinID);
          }

          this.character.setAnimation(0, strAnimIdle, true);
        }

        setAnimationRun() {
          let strAnimRun = "";

          if (this.isMyPlayer) {
            strAnimRun = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getStrAnimationRun_byID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getThemeSelected_byThemeType((_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
              error: Error()
            }), THEME_TYPE) : THEME_TYPE).SKIN));
          } else {
            strAnimRun = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getStrAnimationRun_byID(this.playerRaceDataInfo.raceSkinID);
          }

          this.character.setAnimation(0, strAnimRun, true);
        }

        setAnimationDance() {
          let strAnimRun = "";

          if (this.isMyPlayer) {
            strAnimRun = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getStrAnimationDance_byID((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getThemeSelected_byThemeType((_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
              error: Error()
            }), THEME_TYPE) : THEME_TYPE).SKIN));
          } else {
            strAnimRun = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getStrAnimationDance_byID(this.playerRaceDataInfo.raceSkinID);
          }

          this.character.setAnimation(0, strAnimRun, false);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "posPreStart", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(0, 0, 0);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "posStart", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(0, 0, 0);
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "posEnd", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(0, 0, 0);
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "posFinished", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(0, 0, 0);
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "scalePreStart", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(1, 1, 1);
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "scaleStart", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(1, 1, 1);
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "scaleEnd", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(1, 1, 1);
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "character", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nodeInfo", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "txtScore", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "txtScore2", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "txtName", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "isMyPlayer", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "nodeFindding", [_dec15], {
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
//# sourceMappingURL=ItemPlayerRace.js.map