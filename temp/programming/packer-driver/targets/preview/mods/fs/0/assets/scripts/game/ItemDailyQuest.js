System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Component, Label, Node, ProgressBar, tween, Vec3, localConfig, Constants, clientEvent, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, _crd, ccclass, property, ItemDailyQuest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfQuestDataInfo(extras) {
    _reporterNs.report("QuestDataInfo", "./info/QuestDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
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
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      localConfig = _unresolved_2.localConfig;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
    }, function (_unresolved_4) {
      clientEvent = _unresolved_4.clientEvent;
    }, function (_unresolved_5) {
      LogEventManager = _unresolved_5.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a892eW+3p1HWILK33iYNBnr", "ItemDailyQuest", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemDailyQuest
       * DateTime = Tue Oct 15 2024 05:45:46 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemDailyQuest.ts
       * FileBasenameNoExtension = ItemDailyQuest
       * URL = db://assets/scripts/game/ItemDailyQuest.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemDailyQuest", ItemDailyQuest = (_dec = ccclass('ItemDailyQuest'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(ProgressBar), _dec9 = property(Label), _dec10 = property(Label), _dec(_class = (_class2 = (_temp = class ItemDailyQuest extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "questDataInfo", null);

          _initializerDefineProperty(this, "btnClaim", _descriptor, this);

          _initializerDefineProperty(this, "btnGoto", _descriptor2, this);

          _initializerDefineProperty(this, "nodeFinished", _descriptor3, this);

          _initializerDefineProperty(this, "iconFinished", _descriptor4, this);

          _initializerDefineProperty(this, "iconAchievement", _descriptor5, this);

          _initializerDefineProperty(this, "txtValue", _descriptor6, this);

          _initializerDefineProperty(this, "progress", _descriptor7, this);

          _initializerDefineProperty(this, "txtProgress", _descriptor8, this);

          _initializerDefineProperty(this, "txtDesc", _descriptor9, this);
        }

        onEnable() {
          this.btnClaim.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchClaim, this);
          this.btnGoto.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchGoto, this);

          if (this.questDataInfo != null) {
            this.showInfo();
          }
        }

        onDisable() {
          this.btnClaim.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchClaim, this);
          this.btnGoto.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchGoto, this);
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        isClaimAvailable() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.checkDailyQuestReceive_byID(this.questDataInfo.id)) {
            return false;
          }

          var progressValue = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getDailyQuestProgress_byID(this.questDataInfo.id);

          if (progressValue >= this.questDataInfo.count) {
            return true;
          }

          return false;
        }

        initQuest(_questDataInfo) {
          this.questDataInfo = _questDataInfo;
          this.txtDesc.string = "" + this.questDataInfo.des;
          this.txtValue.string = "x" + this.questDataInfo.value;
          this.showInfo();
        }

        showInfo() {
          var progressValue = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getDailyQuestProgress_byID(this.questDataInfo.id);

          if (progressValue >= this.questDataInfo.count) {
            progressValue = this.questDataInfo.count;
          }

          this.progress.progress = progressValue / this.questDataInfo.count;
          this.txtProgress.string = progressValue + "/" + this.questDataInfo.count;

          if (progressValue < this.questDataInfo.count) {
            this.btnClaim.node.active = false;
            this.btnGoto.node.active = true;
            this.nodeFinished.active = false;
          } else {
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.checkDailyQuestReceive_byID(this.questDataInfo.id)) {
              this.nodeFinished.active = true;
              this.btnClaim.node.active = false;
              this.btnGoto.node.active = false;
            } else {
              this.nodeFinished.active = false;
              this.btnClaim.node.active = true;
              this.btnGoto.node.active = false;
            }
          } // this.btnClaim.node.active = true;
          // this.btnGoto.node.active = false;
          // this.nodeFinished.active = false;

        }

        touchClaim() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("questclaim", "dailytaskpopup");
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILY_QUEST_CLAIM_UPDATE_STARTPOS, this.iconAchievement.worldPosition);
          this.setItemQuestClaim();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILY_QUEST_TOUCH_CLAIM, this);
        }

        setItemQuestClaim() {
          // console.log("setItemQuestClaim",this.questDataInfo);
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.setDailyQuestReceive_byID(this.questDataInfo.id);
          this.nodeFinished.active = true;
          this.btnClaim.node.active = false;
          this.btnGoto.node.active = false;
          this.iconFinished.setScale(new Vec3(0, 0, 0));
          tween(this.iconFinished).to(0.3, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut',
            onComplete: () => {}
          }).start();
          this.scheduleOnce(() => {
            this.node.setSiblingIndex(999);
          }, 0.5);
        }

        touchGoto() {
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logButtonClick("questgoto", "dailytaskpopup");
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILY_QUEST_TOUCH_GOTO, this.questDataInfo);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnClaim", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnGoto", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeFinished", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "iconFinished", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "iconAchievement", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "txtValue", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "progress", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "txtProgress", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "txtDesc", [_dec10], {
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
//# sourceMappingURL=ItemDailyQuest.js.map