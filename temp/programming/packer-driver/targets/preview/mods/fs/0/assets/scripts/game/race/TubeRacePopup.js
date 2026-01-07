System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, tween, BoxRaceRewardInfoGroup, BasePopup, Constants, localConfig, CountDownToNextTime, ItemPlayerRace, lodash, PlayerRaceScore, clientEvent, AudioManager2, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, TubeRacePopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBoxRaceRewardInfoGroup(extras) {
    _reporterNs.report("BoxRaceRewardInfoGroup", "./BoxRaceRewardInfoGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasePopup(extras) {
    _reporterNs.report("BasePopup", "../../common/basePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroupRewardDataInfo(extras) {
    _reporterNs.report("GroupRewardDataInfo", "../info/ShopDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCountDownToNextTime(extras) {
    _reporterNs.report("CountDownToNextTime", "../../common/CountDownToNextTime", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPlayerRace(extras) {
    _reporterNs.report("ItemPlayerRace", "./ItemPlayerRace", _context.meta, extras);
  }

  function _reportPossibleCrUseOflodash(extras) {
    _reporterNs.report("lodash", "../../framework/lodash", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerRaceScore(extras) {
    _reporterNs.report("PlayerRaceScore", "./PlayerRaceScore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "../../framework/audioManager2", _context.meta, extras);
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
      tween = _cc.tween;
    }, function (_unresolved_2) {
      BoxRaceRewardInfoGroup = _unresolved_2.BoxRaceRewardInfoGroup;
    }, function (_unresolved_3) {
      BasePopup = _unresolved_3.BasePopup;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.Constants;
    }, function (_unresolved_5) {
      localConfig = _unresolved_5.localConfig;
    }, function (_unresolved_6) {
      CountDownToNextTime = _unresolved_6.CountDownToNextTime;
    }, function (_unresolved_7) {
      ItemPlayerRace = _unresolved_7.ItemPlayerRace;
    }, function (_unresolved_8) {
      lodash = _unresolved_8.lodash;
    }, function (_unresolved_9) {
      PlayerRaceScore = _unresolved_9.PlayerRaceScore;
    }, function (_unresolved_10) {
      clientEvent = _unresolved_10.clientEvent;
    }, function (_unresolved_11) {
      AudioManager2 = _unresolved_11.AudioManager2;
    }, function (_unresolved_12) {
      LogEventManager = _unresolved_12.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0674aJu3dBK+btYj9nk2JPR", "TubeRacePopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = TubeRacePopup
       * DateTime = Thu Nov 07 2024 14:42:13 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = TubeRacePopup.ts
       * FileBasenameNoExtension = TubeRacePopup
       * URL = db://assets/scripts/game/race/TubeRacePopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("TubeRacePopup", TubeRacePopup = (_dec = ccclass('TubeRacePopup'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(_crd && BoxRaceRewardInfoGroup === void 0 ? (_reportPossibleCrUseOfBoxRaceRewardInfoGroup({
        error: Error()
      }), BoxRaceRewardInfoGroup) : BoxRaceRewardInfoGroup), _dec6 = property(_crd && CountDownToNextTime === void 0 ? (_reportPossibleCrUseOfCountDownToNextTime({
        error: Error()
      }), CountDownToNextTime) : CountDownToNextTime), _dec7 = property(_crd && ItemPlayerRace === void 0 ? (_reportPossibleCrUseOfItemPlayerRace({
        error: Error()
      }), ItemPlayerRace) : ItemPlayerRace), _dec8 = property(_crd && ItemPlayerRace === void 0 ? (_reportPossibleCrUseOfItemPlayerRace({
        error: Error()
      }), ItemPlayerRace) : ItemPlayerRace), _dec(_class = (_class2 = (_temp = class TubeRacePopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "btnBox1", _descriptor, this);

          _initializerDefineProperty(this, "btnBox2", _descriptor2, this);

          _initializerDefineProperty(this, "btnBox3", _descriptor3, this);

          _initializerDefineProperty(this, "boxRaceRewardInfoGroup", _descriptor4, this);

          _initializerDefineProperty(this, "countDownTime", _descriptor5, this);

          _initializerDefineProperty(this, "myPlayer", _descriptor6, this);

          _initializerDefineProperty(this, "arrPlayerOpponents", _descriptor7, this);

          _defineProperty(this, "myIndexRank", 0);

          _defineProperty(this, "isFinddingOpponent", false);

          _defineProperty(this, "isTubeRace_ShowFinished", false);
        }

        // @property(Label)
        // txtInfoRank:Label = null;
        // @property(Node)
        // groupTryAgain:Node = null;
        // @property(Button)
        // btnTryAgain:Button = null;
        onEnable() {
          super.onEnable();
          this.btnBox1.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchBox1, this);
          this.btnBox2.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchBox2, this);
          this.btnBox3.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchBox3, this); // this.btnTryAgain.node.on(Constants.CLICK,this.touchTryAgain,this);

          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUBERACE_PLAYER_FINISHED, this.setTubeRacePlayerFinished, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUBERACE_CLAIM_FINISHED, this.setClaimFinished, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TUBERACE_JOIN_POPUP, this.setShowTubeRaceJoinPopup, this);
        }

        onDisable() {
          super.onDisable();
          this.btnBox1.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchBox1, this);
          this.btnBox2.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchBox2, this);
          this.btnBox3.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchBox3, this); // this.btnTryAgain.node.off(Constants.CLICK,this.touchTryAgain,this);

          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUBERACE_PLAYER_FINISHED, this.setTubeRacePlayerFinished, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUBERACE_CLAIM_FINISHED, this.setClaimFinished, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TUBERACE_JOIN_POPUP, this.setShowTubeRaceJoinPopup, this);
        }

        showTubeRacePopup(_isFinddingOpponent) {
          this.isTubeRace_ShowFinished = false;
          this.btnClose.node.active = false;
          this.isFinddingOpponent = _isFinddingOpponent;
          this.boxRaceRewardInfoGroup.reset();
          this.myPlayer.resetPlayer();

          for (var i = 0; i < this.arrPlayerOpponents.length; i++) {
            this.arrPlayerOpponents[i].resetPlayer();
          }

          if (this.isFinddingOpponent) {
            this.countDownTime.initTime((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.RACE_TIME);
          } else {
            this.showInfo();
          }

          super.showPopup();
        }

        showInfo() {
          var countTime = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.raceLastTime + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.RACE_TIME - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrTime();

          if (countTime > 0) {
            this.countDownTime.initCountDownTime(countTime, () => {});
          } else {
            this.countDownTime.resetCountDownTime();
          }
        }

        showPoup_ShowView() {
          this.tweenOpacityBG = tween(this.bgOpacity).to(0.2, {
            opacity: 255
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
          this.tweenOpacityPopup = tween(this.popup_UIOpacity).to(0.2, {
            opacity: 255
          }, {
            easing: 'quadOut',
            onComplete: () => {
              this.showPoup_ShowView_Finished();
            }
          }).start();
        }

        showPoup_ShowView_Finished() {
          super.showPoup_ShowView_Finished(); // console.log("showPoup_ShowView_Finished",this.isFinddingOpponent);

          var maxTimeFindding = 0;

          if (this.isFinddingOpponent) {
            this.lockGroup.active = false;
            this.btnClose.node.active = true;
            this.myPlayer.initMyPlayer();

            for (var i = 0; i < this.arrPlayerOpponents.length; i++) {
              var timeFindding = 0.5 + (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
                error: Error()
              }), lodash) : lodash).randomFloat(i, i + 1);

              if (i == 3) {
                maxTimeFindding = timeFindding;
              }

              this.arrPlayerOpponents[i].initPlayerFindding((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrPlayerRaceDataInfos[i], timeFindding);
            }

            this.scheduleOnce(() => {
              this.setAllPlayerRace_MoveToTarget_Finished(true);
            }, maxTimeFindding + 0.8 + 0.3);
          } else {
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.checkRaceFinished()) {
              this.lockGroup.active = true;
            } else {
              this.lockGroup.active = false;
            }

            this.myPlayer.initMyPlayer();

            for (var _i = 0; _i < this.arrPlayerOpponents.length; _i++) {
              this.arrPlayerOpponents[_i].initPlayer((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrPlayerRaceDataInfos[_i]);
            }

            this.scheduleOnce(() => {
              this.setAllPlayerRace_MoveToTarget_Finished();
            }, 1.5);
          }
        }

        setAllPlayerRace_MoveToTarget_Finished(isFinddingOpponent) {
          if (isFinddingOpponent === void 0) {
            isFinddingOpponent = false;
          }

          if (isFinddingOpponent) {
            this.btnClose.node.active = true;
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.updateRaceLastTime();
            this.countDownTime.initCountDownTime((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.RACE_TIME, () => {});
          } else if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.checkRaceFinished()) {
            this.btnClose.node.active = true;
          }

          for (var i = 0; i < this.arrPlayerOpponents.length; i++) {
            this.arrPlayerOpponents[i].checkMoveToCurrScore();
          }

          var arrPlayerRaceScores = [];
          var myPlayer = new (_crd && PlayerRaceScore === void 0 ? (_reportPossibleCrUseOfPlayerRaceScore({
            error: Error()
          }), PlayerRaceScore) : PlayerRaceScore)();
          myPlayer.indexID = 5;
          myPlayer.isMyPlayer = true;
          myPlayer.score = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.raceScore;

          if (myPlayer.score == 10) {
            myPlayer.timeFinished = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.raceFinishedTime - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.raceLastTime;
          } else {
            myPlayer.timeFinished = 2 * 60 * 60;
          }

          arrPlayerRaceScores.push(myPlayer);

          for (var _i2 = 0; _i2 < this.arrPlayerOpponents.length; _i2++) {
            var playerOpponent = new (_crd && PlayerRaceScore === void 0 ? (_reportPossibleCrUseOfPlayerRaceScore({
              error: Error()
            }), PlayerRaceScore) : PlayerRaceScore)();
            playerOpponent.indexID = _i2;
            playerOpponent.isMyPlayer = false;
            playerOpponent.score = this.arrPlayerOpponents[_i2].currScore;

            if (playerOpponent.score == 10) {
              playerOpponent.timeFinished = this.arrPlayerOpponents[_i2].playerRaceDataInfo.arrTimes[9];
            } else {
              playerOpponent.timeFinished = 2 * 60 * 60;
            }

            arrPlayerRaceScores.push(playerOpponent);
          }

          arrPlayerRaceScores.sort(function (a, b) {
            if (a.score > b.score) {
              return -1;
            } else if (a.score < b.score) {
              return 1;
            } else if (a.timeFinished <= b.timeFinished) {
              return -1;
            }
          });

          for (var _i3 = 0; _i3 < arrPlayerRaceScores.length; _i3++) {
            arrPlayerRaceScores[_i3].indexRank = _i3;
          } // console.log(arrPlayerRaceScores);


          var indexRankMyPlayer = -1;

          for (var _i4 = 0; _i4 < arrPlayerRaceScores.length; _i4++) {
            if (arrPlayerRaceScores[_i4].isMyPlayer) {
              indexRankMyPlayer = arrPlayerRaceScores[_i4].indexRank;
            }
          }

          this.myPlayer.setMoveToCurrScore(indexRankMyPlayer);

          for (var _i5 = 0; _i5 < this.arrPlayerOpponents.length; _i5++) {
            var indexRankOpponent = -1;

            for (var j = 0; j < arrPlayerRaceScores.length; j++) {
              if (arrPlayerRaceScores[j].indexID == _i5) {
                indexRankOpponent = arrPlayerRaceScores[j].indexRank;
              }
            }

            this.arrPlayerOpponents[_i5].setMoveToCurrScore(indexRankOpponent);
          }

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.checkRaceFinished()) {
            this.scheduleOnce(() => {
              this.setTubeRacePlayerFinished();
            }, 4);
          }
        }

        touchBox1() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("box1", "tuberacepopup");
          this.showRewardBoxInfo(this.btnBox1.node.worldPosition, 0);
        }

        touchBox2() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("box2", "tuberacepopup");
          this.showRewardBoxInfo(this.btnBox2.node.worldPosition, 1);
        }

        touchBox3() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("box3", "tuberacepopup");
          this.showRewardBoxInfo(this.btnBox3.node.worldPosition, 2);
        }

        showRewardBoxInfo(posStart, indexBox) {
          var groupRewardDataInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.arrRace_GroupRewardDataInfos[indexBox];
          this.boxRaceRewardInfoGroup.showBoxRewardInfoGroup(posStart, indexBox, groupRewardDataInfo);
        }

        setTubeRacePlayerFinished() {
          if (!this.isTubeRace_ShowFinished && (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.checkRaceFinished()) {
            this.countDownTime.setStopCountDownTime();
            this.isTubeRace_ShowFinished = true;
            this.myIndexRank = this.getIndexMyRank();

            if (this.myIndexRank < 3) {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_TUBERACE_WIN_POPUP, this.myIndexRank);
            } else {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.resetRaceDatas();
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_TUBERACE_LOSE_POPUP, this.myIndexRank);
            }
          }
        }

        getIndexMyRank() {
          var arrPlayerRaceScores = [];
          var myPlayer = new (_crd && PlayerRaceScore === void 0 ? (_reportPossibleCrUseOfPlayerRaceScore({
            error: Error()
          }), PlayerRaceScore) : PlayerRaceScore)();
          myPlayer.indexID = 5;
          myPlayer.isMyPlayer = true;
          myPlayer.score = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.raceScore;

          if (myPlayer.score == 10) {
            myPlayer.timeFinished = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.raceFinishedTime - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.raceLastTime;
          } else {
            myPlayer.timeFinished = 2 * 60 * 60;
          }

          arrPlayerRaceScores.push(myPlayer);

          for (var i = 0; i < this.arrPlayerOpponents.length; i++) {
            var playerOpponent = new (_crd && PlayerRaceScore === void 0 ? (_reportPossibleCrUseOfPlayerRaceScore({
              error: Error()
            }), PlayerRaceScore) : PlayerRaceScore)();
            playerOpponent.indexID = i;
            playerOpponent.isMyPlayer = false;
            playerOpponent.score = this.arrPlayerOpponents[i].currScore;

            if (playerOpponent.score == 10) {
              playerOpponent.timeFinished = this.arrPlayerOpponents[i].playerRaceDataInfo.arrTimes[9];
            } else {
              playerOpponent.timeFinished = 2 * 60 * 60;
            }

            arrPlayerRaceScores.push(playerOpponent);
          }

          arrPlayerRaceScores.sort(function (a, b) {
            if (a.score > b.score) {
              return -1;
            } else if (a.score < b.score) {
              return 1;
            } else if (a.timeFinished <= b.timeFinished) {
              return -1;
            }
          });

          for (var _i6 = 0; _i6 < arrPlayerRaceScores.length; _i6++) {
            arrPlayerRaceScores[_i6].indexRank = _i6;
          } // console.log(arrPlayerRaceScores);


          var indexRankMyPlayer = -1;

          for (var _i7 = 0; _i7 < arrPlayerRaceScores.length; _i7++) {
            if (arrPlayerRaceScores[_i7].isMyPlayer) {
              indexRankMyPlayer = arrPlayerRaceScores[_i7].indexRank;
              return indexRankMyPlayer;
            }
          }
        }

        setClaimFinished() {
          this.hidePopup_Finished();
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.resetRaceDatas();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_TUBERACE_JOIN_POPUP);
        }

        setShowTubeRaceJoinPopup() {
          this.hidePopup_Finished();
        }

        hidePopup() {
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playPopupClose(); // this.lockGroup.active = true;
          // this.tweenOpacityPopup = tween(this.popup_UIOpacity).to(0.2,{opacity:0},{easing:'quadOut',onComplete:()=>{
          // }}).start();
          // this.tweenOpacityBG = tween(this.bgOpacity).to(0.3,{opacity:0},{easing:'quadOut',onComplete:()=>{       
          //     this.hidePopup_Finished();
          // }}).start();

          this.hidePopup_Finished();
        }

        touchClose() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("close", "tuberacepopup");
          super.touchClose();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnBox1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnBox2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnBox3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "boxRaceRewardInfoGroup", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "countDownTime", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "myPlayer", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "arrPlayerOpponents", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
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
//# sourceMappingURL=TubeRacePopup.js.map