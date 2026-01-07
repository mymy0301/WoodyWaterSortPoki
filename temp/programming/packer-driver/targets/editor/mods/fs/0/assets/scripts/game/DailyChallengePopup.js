System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, instantiate, Label, Node, Prefab, ProgressBar, Sprite, tween, UIOpacity, Vec3, BasePopup, localConfig, InfoDay, ItemDailyChallengeBox, ItemDailyChallenge, lodash, clientEvent, Constants, FBInstantManager, AudioManager2, BoxRewardInfoGroup, InfoMonth, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _temp, _crd, ccclass, property, DailyChallengePopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasePopup(extras) {
    _reporterNs.report("BasePopup", "../common/basePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfoDay(extras) {
    _reporterNs.report("InfoDay", "../common/InfoDay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemDailyChallengeBox(extras) {
    _reporterNs.report("ItemDailyChallengeBox", "./ItemDailyChallengeBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemDailyChallenge(extras) {
    _reporterNs.report("ItemDailyChallenge", "./ItemDailyChallenge", _context.meta, extras);
  }

  function _reportPossibleCrUseOflodash(extras) {
    _reporterNs.report("lodash", "../framework/lodash", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "../common/FBInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "../framework/audioManager2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoxRewardInfoGroup(extras) {
    _reporterNs.report("BoxRewardInfoGroup", "./BoxRewardInfoGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroupRewardDataInfo(extras) {
    _reporterNs.report("GroupRewardDataInfo", "./info/ShopDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfoMonth(extras) {
    _reporterNs.report("InfoMonth", "../common/InfoMonth", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfoMonthReward(extras) {
    _reporterNs.report("InfoMonthReward", "../common/InfoMonthReward", _context.meta, extras);
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
      Button = _cc.Button;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BasePopup = _unresolved_2.BasePopup;
    }, function (_unresolved_3) {
      localConfig = _unresolved_3.localConfig;
    }, function (_unresolved_4) {
      InfoDay = _unresolved_4.InfoDay;
    }, function (_unresolved_5) {
      ItemDailyChallengeBox = _unresolved_5.ItemDailyChallengeBox;
    }, function (_unresolved_6) {
      ItemDailyChallenge = _unresolved_6.ItemDailyChallenge;
    }, function (_unresolved_7) {
      lodash = _unresolved_7.lodash;
    }, function (_unresolved_8) {
      clientEvent = _unresolved_8.clientEvent;
    }, function (_unresolved_9) {
      Constants = _unresolved_9.Constants;
    }, function (_unresolved_10) {
      FBInstantManager = _unresolved_10.FBInstantManager;
    }, function (_unresolved_11) {
      AudioManager2 = _unresolved_11.AudioManager2;
    }, function (_unresolved_12) {
      BoxRewardInfoGroup = _unresolved_12.BoxRewardInfoGroup;
    }, function (_unresolved_13) {
      InfoMonth = _unresolved_13.InfoMonth;
    }, function (_unresolved_14) {
      LogEventManager = _unresolved_14.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "94579SSVLxIk5bQuGLZocaZ", "DailyChallengePopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = DailyChallengePopup
       * DateTime = Mon Sep 30 2024 17:16:16 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = DailyChallengePopup.ts
       * FileBasenameNoExtension = DailyChallengePopup
       * URL = db://assets/scripts/game/DailyChallengePopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("DailyChallengePopup", DailyChallengePopup = (_dec = ccclass('DailyChallengePopup'), _dec2 = property(Label), _dec3 = property(Button), _dec4 = property(Sprite), _dec5 = property(Button), _dec6 = property(Sprite), _dec7 = property(Node), _dec8 = property(ProgressBar), _dec9 = property(Label), _dec10 = property(_crd && ItemDailyChallengeBox === void 0 ? (_reportPossibleCrUseOfItemDailyChallengeBox({
        error: Error()
      }), ItemDailyChallengeBox) : ItemDailyChallengeBox), _dec11 = property(Node), _dec12 = property(Prefab), _dec13 = property(Button), _dec14 = property(Label), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(UIOpacity), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(_crd && BoxRewardInfoGroup === void 0 ? (_reportPossibleCrUseOfBoxRewardInfoGroup({
        error: Error()
      }), BoxRewardInfoGroup) : BoxRewardInfoGroup), _dec(_class = (_class2 = (_temp = class DailyChallengePopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "txtInfoMonth", _descriptor, this);

          _initializerDefineProperty(this, "btnNext", _descriptor2, this);

          _initializerDefineProperty(this, "iconNext", _descriptor3, this);

          _initializerDefineProperty(this, "btnPrev", _descriptor4, this);

          _initializerDefineProperty(this, "iconPrev", _descriptor5, this);

          _initializerDefineProperty(this, "iconAchievement", _descriptor6, this);

          _initializerDefineProperty(this, "progressInMonth", _descriptor7, this);

          _initializerDefineProperty(this, "txtCountDayFinished", _descriptor8, this);

          _initializerDefineProperty(this, "arrItemDailyChallengeBox", _descriptor9, this);

          _defineProperty(this, "currYear", 2023);

          _defineProperty(this, "currMonth", 9);

          _defineProperty(this, "countDayOfMonth", 0);

          _defineProperty(this, "countDayOfMonth_Finished", 0);

          _defineProperty(this, "currInfoDaySelect", null);

          _initializerDefineProperty(this, "contentCalendarGroup", _descriptor10, this);

          _initializerDefineProperty(this, "itemDailyChallengePrefab", _descriptor11, this);

          _initializerDefineProperty(this, "btnPlay", _descriptor12, this);

          _initializerDefineProperty(this, "txtPlay", _descriptor13, this);

          _initializerDefineProperty(this, "nodeObjPlay", _descriptor14, this);

          _initializerDefineProperty(this, "nodeObjReplay", _descriptor15, this);

          _initializerDefineProperty(this, "iconAd", _descriptor16, this);

          _defineProperty(this, "itemDailyChallengeSelect", null);

          _initializerDefineProperty(this, "nodeEfxFinished", _descriptor17, this);

          _initializerDefineProperty(this, "nodeEfxFinished_Opacity", _descriptor18, this);

          _initializerDefineProperty(this, "nodeStartPos_EfxFinished", _descriptor19, this);

          _initializerDefineProperty(this, "nodeEndPos_EfxFinished", _descriptor20, this);

          _initializerDefineProperty(this, "boxRewardInfoGroup", _descriptor21, this);
        }

        onEnable() {
          super.onEnable();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILYCHALLENGE_TOUCH_SELECT_DAY, this.touchItemDailyChallenge, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILYCHALLENGE_TOUCH_BOXREWARD, this.touchBoxReward, this);
          this.btnNext.node.on(Button.EventType.CLICK, this.touchNext, this);
          this.btnPrev.node.on(Button.EventType.CLICK, this.touchPrev, this);
          this.btnPlay.node.on(Button.EventType.CLICK, this.touchPlay, this);
        }

        onDisable() {
          super.onDisable();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILYCHALLENGE_TOUCH_SELECT_DAY, this.touchItemDailyChallenge, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILYCHALLENGE_TOUCH_BOXREWARD, this.touchBoxReward, this);
          this.btnNext.node.off(Button.EventType.CLICK, this.touchNext, this);
          this.btnPrev.node.off(Button.EventType.CLICK, this.touchPrev, this);
          this.btnPlay.node.off(Button.EventType.CLICK, this.touchPlay, this);
        }

        showDailyChallengePopup() {
          this.boxRewardInfoGroup.reset(); // console.log(localConfig.instance.currInfoDay);

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currInfoDaySelect == null) {
            this.currInfoDaySelect = (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).cloneDeep((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currInfoDay);
          } else {
            this.currInfoDaySelect = (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).cloneDeep((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currInfoDaySelect);
          }

          this.initCalendarGroup(this.currInfoDaySelect.year, this.currInfoDaySelect.month);
          super.showPopup();
        }

        showDailyChallengePopup2() {
          this.boxRewardInfoGroup.reset();
          super.showPopup();
        }

        hidePopup() {
          tween(this.popup_UIOpacity).to(0.2, {
            opacity: 0
          }, {
            easing: 'quadOut',
            onComplete: () => {
              super.hidePopup_Finished();
            }
          }).start();

          if (this.bgOpacity) {
            tween(this.bgOpacity).to(0.2, {
              opacity: 0
            }, {
              easing: 'quadOut',
              onComplete: () => {}
            }).start();
          } // this.hidePopup_Finished();

        }

        showHeader(year, month) {
          // console.log(localConfig.instance.currInfoDay);
          // console.log("year:"+year+"   month:"+month);
          // console.log(localConfig.instance.minInfoDay);
          this.txtInfoMonth.string = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getNameMonthOfYear(month, year);

          if (year == (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currInfoDay.year && month == (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currInfoDay.month) {
            this.btnNext.interactable = false;
            this.iconNext.grayscale = true;
          } else {
            this.btnNext.interactable = true;
            this.iconNext.grayscale = false;
          }

          if (year == (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.minInfoDay.year && month == (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.minInfoDay.month) {
            this.btnPrev.interactable = false;
            this.iconPrev.grayscale = true;
          } else {
            this.btnPrev.interactable = true;
            this.iconPrev.grayscale = false;
          }
        }

        touchNext() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("next", "dailychallengepopup");
          let nextMonth = this.currMonth + 1;
          let nextYear = this.currYear;

          if (nextMonth >= 12) {
            nextMonth = 0;
            nextYear++;
          }

          this.initCalendarGroup(nextYear, nextMonth);
        }

        touchPrev() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("prev", "dailychallengepopup");
          let prevMonth = this.currMonth - 1;
          let prevYear = this.currYear;

          if (prevMonth < 0) {
            prevMonth = 11;
            prevYear--;
          }

          this.initCalendarGroup(prevYear, prevMonth);
        }

        initCalendarGroup(year, month) {
          this.currMonth = month;
          this.currYear = year;
          this.countDayOfMonth = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getDaysInMonth(month, year);
          this.countDayOfMonth_Finished = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCountFinished_InMonth(month, year);
          this.currInfoDaySelect.month = month;
          this.currInfoDaySelect.year = year;
          this.contentCalendarGroup.destroyAllChildren();

          if (this.currInfoDaySelect.day > this.countDayOfMonth) {
            this.currInfoDaySelect.day = this.countDayOfMonth;
          }

          if (this.currInfoDaySelect.year == (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currInfoDay.year && this.currInfoDaySelect.month == (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currInfoDay.month) {
            if (this.currInfoDaySelect.day > (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currInfoDay.day) {
              this.currInfoDaySelect.day = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.currInfoDay.day;
            }

            if (this.currInfoDaySelect.day > this.countDayOfMonth) {
              this.currInfoDaySelect.day = this.countDayOfMonth;
            }
          }

          for (let i = 0; i < this.countDayOfMonth; i++) {
            let item = instantiate(this.itemDailyChallengePrefab);
            item.setParent(this.contentCalendarGroup);
            let itemDay = item.getComponent(_crd && ItemDailyChallenge === void 0 ? (_reportPossibleCrUseOfItemDailyChallenge({
              error: Error()
            }), ItemDailyChallenge) : ItemDailyChallenge);
            itemDay.initItemDailyChallenge(new (_crd && InfoDay === void 0 ? (_reportPossibleCrUseOfInfoDay({
              error: Error()
            }), InfoDay) : InfoDay)(i + 1, month, year));
            itemDay.setSelectDay(this.currInfoDaySelect);

            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.checkSameInfoDay(this.currInfoDaySelect, itemDay.infoDay)) {
              this.itemDailyChallengeSelect = itemDay;
            }
          }

          this.showHeader(year, month);
          this.initBox(this.countDayOfMonth, this.countDayOfMonth_Finished);
          this.showButtonPlay();
        }

        initBox(countDayOfMonth, countDayOfMonth_Finished) {
          let infoMonthReward = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getInfoMonthReward_byInfoMonth(new (_crd && InfoMonth === void 0 ? (_reportPossibleCrUseOfInfoMonth({
            error: Error()
          }), InfoMonth) : InfoMonth)(this.currMonth, this.currYear)); // let indexReward_byMonth:number = -1;
          // if(infoMonthReward != null){
          //     indexReward_byMonth = infoMonthReward.indexReward;
          // }

          let infoMonth = new (_crd && InfoMonth === void 0 ? (_reportPossibleCrUseOfInfoMonth({
            error: Error()
          }), InfoMonth) : InfoMonth)(this.currMonth, this.currYear);

          for (let i = 0; i < this.arrItemDailyChallengeBox.length; i++) {
            this.arrItemDailyChallengeBox[i].initInfoBox(countDayOfMonth, infoMonth);
          }

          this.showProgress(countDayOfMonth, countDayOfMonth_Finished);
        }

        showProgress(countDayOfMonth, countDayOfMonth_Finished) {
          this.progressInMonth.progress = countDayOfMonth_Finished / countDayOfMonth;
          this.txtCountDayFinished.string = `${countDayOfMonth_Finished}`;
        }

        touchItemDailyChallenge(_infoDay, itemDailyChallenge) {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("itemdailychallenge", "dailychallengepopup");
          this.currInfoDaySelect = _infoDay;
          this.itemDailyChallengeSelect.setSelectDay(this.currInfoDaySelect);
          this.itemDailyChallengeSelect = itemDailyChallenge;
          this.itemDailyChallengeSelect.setSelectDay(this.currInfoDaySelect);
          this.showButtonPlay();
        } //#region PLAY


        showButtonPlay() {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.checkInfoDailyChallengeFinished(this.currInfoDaySelect)) {
            // this.txtPlay.string = "PLAY";
            this.nodeObjPlay.active = true;
            this.nodeObjReplay.active = false;
          } else {
            // this.txtPlay.string = "REPLAY";
            this.nodeObjPlay.active = false;
            this.nodeObjReplay.active = true;
          }

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.checkSameInfoDay((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currInfoDay, this.currInfoDaySelect) && !(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.checkInfoDailyChallengeFinished(this.currInfoDaySelect)) {
            this.iconAd.active = false;
          } else {
            this.iconAd.active = true;
          }
        }

        touchPlay() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("play", "dailychallengepopup");

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.checkSameInfoDay((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currInfoDay, this.currInfoDaySelect) && !(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.checkInfoDailyChallengeFinished(this.currInfoDaySelect)) {
            this.hidePopup();
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).DAILYCHALLENGE_PLAY_LEVEL, this.currInfoDaySelect);
          } else {
            (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
              error: Error()
            }), FBInstantManager) : FBInstantManager).instance.Show_RewardedVideoAsync("dailychallengepopup", "play", (err, success) => {
              if (err) {} else {
                this.hidePopup();
                (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                  error: Error()
                }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).DAILYCHALLENGE_PLAY_LEVEL, this.currInfoDaySelect);
              }
            });
          }
        } //#endregion
        //#region DAILY CHALLENGE FINISHED


        setDailyChallengeFinished() {
          this.showPopup_Now();
          this.boxRewardInfoGroup.reset();

          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.checkInfoDailyChallengeFinished(this.currInfoDaySelect)) {
            this.setDailyChallengeFinished_step1();
          }
        }

        setDailyChallengeFinished_step1() {
          this.lockGroup.active = true;
          this.scheduleOnce(() => {
            this.setDailyChallengeFinished_step2();
          }, 0.6);
        }

        setDailyChallengeFinished_step2() {
          this.itemDailyChallengeSelect.setFinished();
          this.scheduleOnce(() => {
            this.setDailyChallengeFinished_step3();
          }, 0.5);
          this.scheduleOnce(() => {
            (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager2) : AudioManager2).instance.playSound_showItemReward();
          }, 0.3);
        }

        setDailyChallengeFinished_step3() {
          this.nodeStartPos_EfxFinished.worldPosition = this.itemDailyChallengeSelect.node.worldPosition;
          this.nodeEfxFinished.position = this.nodeStartPos_EfxFinished.position;
          this.nodeEfxFinished.active = true;
          this.nodeEfxFinished_Opacity.opacity = 0;
          this.nodeEfxFinished.setScale(new Vec3(0, 0, 0));
          tween(this.nodeEfxFinished).to(0.5, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut',
            onComplete: () => {
              this.setDailyChallengeFinished_step4();
            }
          }).start();
          tween(this.nodeEfxFinished_Opacity).to(0.2, {
            opacity: 255
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
        }

        setDailyChallengeFinished_step4() {
          tween(this.nodeEfxFinished).delay(0.3).to(0.5, {
            position: new Vec3(this.nodeEndPos_EfxFinished.position.x, this.nodeEndPos_EfxFinished.position.y, 0)
          }, {
            easing: 'quadOut',
            onComplete: () => {
              this.setDailyChallengeFinished_step5();
            }
          }).start();
        }

        setDailyChallengeFinished_step5() {
          this.nodeEfxFinished.active = false;
          tween(this.iconAchievement).to(0.05, {
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
          }).start();
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playSound_progressbar();
          this.countDayOfMonth_Finished++;
          let progressValue = this.countDayOfMonth_Finished / this.countDayOfMonth; // console.log("progressValue",progressValue);

          tween(this.progressInMonth).to(0.2, {
            progress: progressValue
          }, {
            easing: 'linear',
            onComplete: () => {
              this.setDailyChallengeFinished_step6();
            }
          }).start();
        }

        setDailyChallengeFinished_step6() {
          this.txtCountDayFinished.string = `${this.countDayOfMonth_Finished}`;
          this.lockGroup.active = false;

          if (this.countDayOfMonth_Finished == 5) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.addInfoMonthReward(new (_crd && InfoMonth === void 0 ? (_reportPossibleCrUseOfInfoMonth({
              error: Error()
            }), InfoMonth) : InfoMonth)(this.currMonth, this.currYear), 1);
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_REWARDRECEIVE_POPUP, "DAILY CHALLENGE", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrDailyChallengeRewards[0]);
            this.arrItemDailyChallengeBox[0].setBoxOpenend();
          } else if (this.countDayOfMonth_Finished == 12) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.addInfoMonthReward(new (_crd && InfoMonth === void 0 ? (_reportPossibleCrUseOfInfoMonth({
              error: Error()
            }), InfoMonth) : InfoMonth)(this.currMonth, this.currYear), 2);
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_REWARDRECEIVE_POPUP, "DAILY CHALLENGE", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrDailyChallengeRewards[1]);
            this.arrItemDailyChallengeBox[1].setBoxOpenend();
          } else if (this.countDayOfMonth_Finished == 20) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.addInfoMonthReward(new (_crd && InfoMonth === void 0 ? (_reportPossibleCrUseOfInfoMonth({
              error: Error()
            }), InfoMonth) : InfoMonth)(this.currMonth, this.currYear), 3);
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_REWARDRECEIVE_POPUP, "DAILY CHALLENGE", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrDailyChallengeRewards[2]);
            this.arrItemDailyChallengeBox[2].setBoxOpenend();
          } else if (this.countDayOfMonth_Finished == this.countDayOfMonth) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.addInfoMonthReward(new (_crd && InfoMonth === void 0 ? (_reportPossibleCrUseOfInfoMonth({
              error: Error()
            }), InfoMonth) : InfoMonth)(this.currMonth, this.currYear), 4);
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_REWARDRECEIVE_POPUP, "DAILY CHALLENGE", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrDailyChallengeRewards[3]);
            this.arrItemDailyChallengeBox[3].setBoxOpenend();
          }

          this.showButtonPlay();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILYCHALLENGE_NOTIFY_UPDATE);
        }

        showBoxReward_Unlocked() {// console.log("showBoxReward_Unlocked");
        } //#endregion
        //#region BOX REWARD INFO GROUP


        showBoxRewardInfoGroup(posStart, isBottom, groupRewardDataInfo) {
          this.boxRewardInfoGroup.showBoxRewardInfoGroup(posStart, isBottom, groupRewardDataInfo);
        }

        touchBoxReward(itemDailyChallengeBox) {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("boxreward", "dailychallengepopup"); //Kiem tra xem nguoi choi da nhan box chua
          //Neu chua nhan thi cho nhan reward
          // console.log(itemDailyChallengeBox.boxType);

          if (itemDailyChallengeBox.boxType == 1) {
            if (this.countDayOfMonth_Finished >= 5 && !(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.checkReceivedInfoMonthReward(itemDailyChallengeBox.infoMonthReward)) {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.addInfoMonthReward(new (_crd && InfoMonth === void 0 ? (_reportPossibleCrUseOfInfoMonth({
                error: Error()
              }), InfoMonth) : InfoMonth)(this.currMonth, this.currYear), 1);
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_REWARDRECEIVE_POPUP, "DAILY CHALLENGE", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrDailyChallengeRewards[0]);
              this.arrItemDailyChallengeBox[0].setBoxOpenend();
            }
          } else if (itemDailyChallengeBox.boxType == 2) {
            if (this.countDayOfMonth_Finished >= 12 && !(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.checkReceivedInfoMonthReward(itemDailyChallengeBox.infoMonthReward)) {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.addInfoMonthReward(new (_crd && InfoMonth === void 0 ? (_reportPossibleCrUseOfInfoMonth({
                error: Error()
              }), InfoMonth) : InfoMonth)(this.currMonth, this.currYear), 2);
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_REWARDRECEIVE_POPUP, "DAILY CHALLENGE", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrDailyChallengeRewards[1]);
              this.arrItemDailyChallengeBox[1].setBoxOpenend();
            }
          } else if (itemDailyChallengeBox.boxType == 3) {
            if (this.countDayOfMonth_Finished >= 20 && !(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.checkReceivedInfoMonthReward(itemDailyChallengeBox.infoMonthReward)) {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.addInfoMonthReward(new (_crd && InfoMonth === void 0 ? (_reportPossibleCrUseOfInfoMonth({
                error: Error()
              }), InfoMonth) : InfoMonth)(this.currMonth, this.currYear), 3);
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_REWARDRECEIVE_POPUP, "DAILY CHALLENGE", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrDailyChallengeRewards[2]);
              this.arrItemDailyChallengeBox[2].setBoxOpenend();
            }
          } else if (itemDailyChallengeBox.boxType == 4) {
            if (this.countDayOfMonth_Finished >= this.countDayOfMonth && !(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.checkReceivedInfoMonthReward(itemDailyChallengeBox.infoMonthReward)) {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.addInfoMonthReward(new (_crd && InfoMonth === void 0 ? (_reportPossibleCrUseOfInfoMonth({
                error: Error()
              }), InfoMonth) : InfoMonth)(this.currMonth, this.currYear), 4);
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_REWARDRECEIVE_POPUP, "DAILY CHALLENGE", (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrDailyChallengeRewards[3]);
              this.arrItemDailyChallengeBox[3].setBoxOpenend();
            }
          }

          this.showBoxRewardInfoGroup(itemDailyChallengeBox.node.worldPosition, true, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.arrDailyChallengeRewards[itemDailyChallengeBox.boxType - 1]);
        } //#endregion


        touchClose() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("close", "dailychallengepopup");
          super.touchClose();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtInfoMonth", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnNext", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconNext", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnPrev", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "iconPrev", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "iconAchievement", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "progressInMonth", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "txtCountDayFinished", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "arrItemDailyChallengeBox", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "contentCalendarGroup", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "itemDailyChallengePrefab", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "btnPlay", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "txtPlay", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "nodeObjPlay", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "nodeObjReplay", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "iconAd", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "nodeEfxFinished", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "nodeEfxFinished_Opacity", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "nodeStartPos_EfxFinished", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "nodeEndPos_EfxFinished", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "boxRewardInfoGroup", [_dec22], {
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
//# sourceMappingURL=DailyChallengePopup.js.map