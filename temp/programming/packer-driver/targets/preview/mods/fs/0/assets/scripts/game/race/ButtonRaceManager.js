System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Component, Label, Node, Constants, clientEvent, CountDownToNextTime, localConfig, PlayerRaceScore, AudioManager2, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, ButtonRaceManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCountDownToNextTime(extras) {
    _reporterNs.report("CountDownToNextTime", "../../common/CountDownToNextTime", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerRaceScore(extras) {
    _reporterNs.report("PlayerRaceScore", "./PlayerRaceScore", _context.meta, extras);
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
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      clientEvent = _unresolved_3.clientEvent;
    }, function (_unresolved_4) {
      CountDownToNextTime = _unresolved_4.CountDownToNextTime;
    }, function (_unresolved_5) {
      localConfig = _unresolved_5.localConfig;
    }, function (_unresolved_6) {
      PlayerRaceScore = _unresolved_6.PlayerRaceScore;
    }, function (_unresolved_7) {
      AudioManager2 = _unresolved_7.AudioManager2;
    }, function (_unresolved_8) {
      LogEventManager = _unresolved_8.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "73336JUPzxAx4K10x9OOQG+", "ButtonRaceManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ButtonRaceManager
       * DateTime = Wed Nov 06 2024 10:21:15 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ButtonRaceManager.ts
       * FileBasenameNoExtension = ButtonRaceManager
       * URL = db://assets/scripts/game/race/ButtonRaceManager.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ButtonRaceManager", ButtonRaceManager = (_dec = ccclass('ButtonRaceManager'), _dec2 = property(Button), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(_crd && CountDownToNextTime === void 0 ? (_reportPossibleCrUseOfCountDownToNextTime({
        error: Error()
      }), CountDownToNextTime) : CountDownToNextTime), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Label), _dec(_class = (_class2 = (_temp = class ButtonRaceManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "btnRace", _descriptor, this);

          _initializerDefineProperty(this, "nodeJoin", _descriptor2, this);

          _initializerDefineProperty(this, "nodeActive", _descriptor3, this);

          _initializerDefineProperty(this, "countDownTime", _descriptor4, this);

          _initializerDefineProperty(this, "txtIndexRank", _descriptor5, this);

          _initializerDefineProperty(this, "nodeLock", _descriptor6, this);

          _initializerDefineProperty(this, "txtUnLock", _descriptor7, this);
        }

        onEnable() {
          this.btnRace.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchRace, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUBERACE_UPDATE, this.showInfo, this);
          this.showInfo();
        }

        onDisable() {
          this.btnRace.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchRace, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUBERACE_UPDATE, this.showInfo, this);
        }

        showInfo() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.RACE_LEVEL_UNLOCK) {
            this.nodeActive.active = false;
            this.nodeJoin.active = false;
            this.nodeLock.active = true;
            this.txtUnLock.string = "Lv." + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.RACE_LEVEL_UNLOCK;
            return;
          }

          this.nodeLock.active = false;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.raceActive == 0 || (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.checkRaceFinished()) {
            this.nodeActive.active = false;
            this.nodeJoin.active = true;
          } else {
            this.nodeActive.active = true;
            this.nodeJoin.active = false;
            var indexMyRank = this.getIndexMyRank();
            this.txtIndexRank.string = "" + (indexMyRank + 1);
            var timeLeft = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.raceLastTime + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.RACE_TIME - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getCurrTime();

            if (timeLeft > 0) {
              this.countDownTime.initCountDownTime(timeLeft, () => {
                (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
                  error: Error()
                }), AudioManager2) : AudioManager2).instance.playPopupOpen2();
                (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                  error: Error()
                }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).SHOW_TUBERACE_POPUP, false);
              });
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
          var timePlayed = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrTime() - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.raceLastTime;

          for (var i = 0; i < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.arrPlayerRaceDataInfos.length; i++) {
            var playerOpponent = new (_crd && PlayerRaceScore === void 0 ? (_reportPossibleCrUseOfPlayerRaceScore({
              error: Error()
            }), PlayerRaceScore) : PlayerRaceScore)();
            playerOpponent.indexID = i;
            playerOpponent.isMyPlayer = false;
            playerOpponent.score = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getRaceScore_Opponent(timePlayed, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrPlayerRaceDataInfos[i].arrTimes);

            if (playerOpponent.score == 10) {
              playerOpponent.timeFinished = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrPlayerRaceDataInfos[i].arrTimes[9];
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

          for (var _i = 0; _i < arrPlayerRaceScores.length; _i++) {
            arrPlayerRaceScores[_i].indexRank = _i;
          } // console.log(arrPlayerRaceScores);


          var indexRankMyPlayer = -1;

          for (var _i2 = 0; _i2 < arrPlayerRaceScores.length; _i2++) {
            if (arrPlayerRaceScores[_i2].isMyPlayer) {
              indexRankMyPlayer = arrPlayerRaceScores[_i2].indexRank;
              return indexRankMyPlayer;
            }
          }
        }

        touchRace() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("race", "home");

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelUnlock < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.RACE_LEVEL_UNLOCK) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_NOTIFICATION, "Unlock at Level " + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.RACE_LEVEL_UNLOCK);
            return;
          }

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.raceActive == 0) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_TUBERACE_JOIN_POPUP);
          } else {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_TUBERACE_POPUP, false);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnRace", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeJoin", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeActive", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "countDownTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txtIndexRank", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodeLock", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "txtUnLock", [_dec8], {
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
//# sourceMappingURL=ButtonRaceManager.js.map