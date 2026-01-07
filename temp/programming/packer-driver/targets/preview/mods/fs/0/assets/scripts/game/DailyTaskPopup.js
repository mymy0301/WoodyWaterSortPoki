System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, BasePopup, Constants, DAILYTASK_TYPE, clientEvent, AudioManager2, LogEventManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, DailyTaskPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasePopup(extras) {
    _reporterNs.report("BasePopup", "../common/basePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDAILYTASK_TYPE(extras) {
    _reporterNs.report("DAILYTASK_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQuestDataInfo(extras) {
    _reporterNs.report("QuestDataInfo", "./info/QuestDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "../framework/audioManager2", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BasePopup = _unresolved_2.BasePopup;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
      DAILYTASK_TYPE = _unresolved_3.DAILYTASK_TYPE;
    }, function (_unresolved_4) {
      clientEvent = _unresolved_4.clientEvent;
    }, function (_unresolved_5) {
      AudioManager2 = _unresolved_5.AudioManager2;
    }, function (_unresolved_6) {
      LogEventManager = _unresolved_6.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f4e91FkZ3ZIR5dFI7KBZs/0", "DailyTaskPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = DailyTaskPopup
       * DateTime = Sun Oct 13 2024 21:22:25 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = DailyTaskPopup.ts
       * FileBasenameNoExtension = DailyTaskPopup
       * URL = db://assets/scripts/game/DailyTaskPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("DailyTaskPopup", DailyTaskPopup = (_dec = ccclass('DailyTaskPopup'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class DailyTaskPopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "loginGroup", _descriptor, this);

          _initializerDefineProperty(this, "questGroup", _descriptor2, this);

          _defineProperty(this, "dailyTaskType", null);
        }

        onEnable() {
          super.onEnable();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOUCH_TABDAILYTASK, this.touchTabDailyTask, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILY_QUEST_TOUCH_GOTO, this.setDailyQuestTouchGoto, this);
        }

        onDisable() {
          super.onDisable();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOUCH_TABDAILYTASK, this.touchTabDailyTask, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILY_QUEST_TOUCH_GOTO, this.setDailyQuestTouchGoto, this);
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        showDailyTaskPopup(dailyTaskType) {
          // console.log("showDailyTaskPopup:"+dailyTaskType);
          this.dailyTaskType = dailyTaskType;
          super.showPopup();
          this.showTab();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TABDAILYTASK_UPDATE, this.dailyTaskType);
        }

        touchTabDailyTask(tabType) {
          if (tabType == (_crd && DAILYTASK_TYPE === void 0 ? (_reportPossibleCrUseOfDAILYTASK_TYPE({
            error: Error()
          }), DAILYTASK_TYPE) : DAILYTASK_TYPE).LOGIN) {
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logButtonClick("tablogin", "dailytaskpopup");
          } else if (tabType == (_crd && DAILYTASK_TYPE === void 0 ? (_reportPossibleCrUseOfDAILYTASK_TYPE({
            error: Error()
          }), DAILYTASK_TYPE) : DAILYTASK_TYPE).QUEST) {
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logButtonClick("tabquest", "dailytaskpopup");
          }

          if (this.dailyTaskType != tabType) {
            this.dailyTaskType = tabType;
            this.showTab();
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TABDAILYTASK_UPDATE, this.dailyTaskType);
          }
        }

        showTab() {
          // console.log("showTab:"+this.dailyTaskType);
          if (this.dailyTaskType == (_crd && DAILYTASK_TYPE === void 0 ? (_reportPossibleCrUseOfDAILYTASK_TYPE({
            error: Error()
          }), DAILYTASK_TYPE) : DAILYTASK_TYPE).LOGIN) {
            this.loginGroup.active = true;
            this.questGroup.active = false;
          } else if (this.dailyTaskType == (_crd && DAILYTASK_TYPE === void 0 ? (_reportPossibleCrUseOfDAILYTASK_TYPE({
            error: Error()
          }), DAILYTASK_TYPE) : DAILYTASK_TYPE).QUEST) {
            this.loginGroup.active = false;
            this.questGroup.active = true;
          }
        }

        setDailyQuestTouchGoto(questDataInfo) {
          if (questDataInfo.id == 1) {
            this.dailyTaskType = (_crd && DAILYTASK_TYPE === void 0 ? (_reportPossibleCrUseOfDAILYTASK_TYPE({
              error: Error()
            }), DAILYTASK_TYPE) : DAILYTASK_TYPE).LOGIN;
            this.showTab();
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TABDAILYTASK_UPDATE, this.dailyTaskType);
          } else if (questDataInfo.id == 2 || questDataInfo.id == 3 || questDataInfo.id == 4 || questDataInfo.id == 5 || questDataInfo.id == 8 || questDataInfo.id == 9 || questDataInfo.id == 10) {
            this.hidePopup();
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TOUCH_LEVEL);
          } else if (questDataInfo.id == 6) {
            this.hidePopup();
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).GOTO_TOURNAMENT);
          } else if (questDataInfo.id == 7) {
            this.hidePopup();
            (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager2) : AudioManager2).instance.playPopupOpen2();
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_DAILY_CHALLENGE_POPUP);
          }
        }

        touchClose() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("close", "dailytaskpopup");
          super.touchClose();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loginGroup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "questGroup", [_dec3], {
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
//# sourceMappingURL=DailyTaskPopup.js.map