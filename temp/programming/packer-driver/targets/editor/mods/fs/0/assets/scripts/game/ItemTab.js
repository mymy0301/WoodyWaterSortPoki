System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Component, Enum, Node, Sprite, SpriteFrame, tween, Vec3, Constants, TAB_TYPE, clientEvent, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, _crd, ccclass, property, ItemTab;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTAB_TYPE(extras) {
    _reporterNs.report("TAB_TYPE", "../framework/constants", _context.meta, extras);
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
      Enum = _cc.Enum;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
      TAB_TYPE = _unresolved_2.TAB_TYPE;
    }, function (_unresolved_3) {
      clientEvent = _unresolved_3.clientEvent;
    }, function (_unresolved_4) {
      LogEventManager = _unresolved_4.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5934c7Fa5dFx4IzfN3R05Si", "ItemTab", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemTab
       * DateTime = Thu Sep 12 2024 17:18:39 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemTab.ts
       * FileBasenameNoExtension = ItemTab
       * URL = db://assets/scripts/game/ItemTab.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemTab", ItemTab = (_dec = ccclass('ItemTab'), _dec2 = property({
        type: Enum(_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
          error: Error()
        }), TAB_TYPE) : TAB_TYPE)
      }), _dec3 = property(Button), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(SpriteFrame), _dec8 = property(Sprite), _dec9 = property(SpriteFrame), _dec10 = property(Vec3), _dec(_class = (_class2 = (_temp = class ItemTab extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "tabType", _descriptor, this);

          _initializerDefineProperty(this, "btnTab", _descriptor2, this);

          _initializerDefineProperty(this, "nodeON", _descriptor3, this);

          _initializerDefineProperty(this, "nodeOFF", _descriptor4, this);

          _initializerDefineProperty(this, "bg", _descriptor5, this);

          _initializerDefineProperty(this, "arrSfBgs", _descriptor6, this);

          _initializerDefineProperty(this, "icon", _descriptor7, this);

          _initializerDefineProperty(this, "arrSfIcons", _descriptor8, this);

          _initializerDefineProperty(this, "arrPos", _descriptor9, this);

          _defineProperty(this, "tweenBG_ON", null);

          _defineProperty(this, "tweenBG_OFF", null);

          _defineProperty(this, "tweenICON_ON", null);

          _defineProperty(this, "tweenICON_OFF", null);

          _defineProperty(this, "tweenMove", null);

          _defineProperty(this, "isTabON", false);
        }

        onEnable() {
          this.btnTab.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchTab, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TAB_UPDATE, this.showTab, this);
        }

        onDisable() {
          this.btnTab.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchTab, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TAB_UPDATE, this.showTab, this);
        }

        resetTween() {
          var _this$tweenBG_ON, _this$tweenBG_OFF, _this$tweenICON_ON, _this$tweenICON_OFF, _this$tweenMove;

          (_this$tweenBG_ON = this.tweenBG_ON) === null || _this$tweenBG_ON === void 0 ? void 0 : _this$tweenBG_ON.stop();
          (_this$tweenBG_OFF = this.tweenBG_OFF) === null || _this$tweenBG_OFF === void 0 ? void 0 : _this$tweenBG_OFF.stop();
          (_this$tweenICON_ON = this.tweenICON_ON) === null || _this$tweenICON_ON === void 0 ? void 0 : _this$tweenICON_ON.stop();
          (_this$tweenICON_OFF = this.tweenICON_OFF) === null || _this$tweenICON_OFF === void 0 ? void 0 : _this$tweenICON_OFF.stop();
          (_this$tweenMove = this.tweenMove) === null || _this$tweenMove === void 0 ? void 0 : _this$tweenMove.stop();
        }

        setItemON() {
          this.isTabON = true; // this.nodeON.active = true;
          // this.nodeOFF.active = false;

          this.resetTween();
          this.bg.spriteFrame = this.arrSfBgs[1];
          this.bg.node.setScale(new Vec3(0.7, 0.9, 1));
          this.icon.spriteFrame = this.arrSfIcons[1];
          this.icon.node.setScale(new Vec3(0.68, 0.68, 1));
          this.icon.node.setPosition(new Vec3(0, 5, 0));
          this.tweenBG_ON = tween(this.bg.node).to(0.15, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
          this.tweenICON_ON = tween(this.icon.node).to(0.15, {
            scale: new Vec3(1, 1, 1),
            position: new Vec3(0, 40, 0)
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
        }

        setItemOff() {
          // this.nodeON.active = false;
          // this.nodeOFF.active = true;
          if (this.isTabON) {
            this.isTabON = false;
            this.resetTween();
            this.bg.spriteFrame = this.arrSfBgs[0];
            this.bg.node.setScale(new Vec3(1.3, 1.1, 1));
            this.icon.spriteFrame = this.arrSfIcons[0];
            this.icon.node.setScale(new Vec3(1.5, 1.5, 1));
            this.icon.node.setPosition(new Vec3(0, 40, 0));
            this.tweenBG_OFF = tween(this.bg.node).to(0.15, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'quadOut',
              onComplete: () => {}
            }).start();
            this.tweenICON_OFF = tween(this.icon.node).to(0.15, {
              scale: new Vec3(1, 1, 1),
              position: new Vec3(0, 5, 0)
            }, {
              easing: 'quadOut',
              onComplete: () => {}
            }).start();
          }
        }

        touchTab() {
          if (this.tabType == (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
            error: Error()
          }), TAB_TYPE) : TAB_TYPE).HOME) {
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logButtonClick("home", "home");
          } else if (this.tabType == (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
            error: Error()
          }), TAB_TYPE) : TAB_TYPE).SHOP) {
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logButtonClick("shop", "home");
          } else if (this.tabType == (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
            error: Error()
          }), TAB_TYPE) : TAB_TYPE).THEME) {
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logButtonClick("theme", "home");
          } else if (this.tabType == (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
            error: Error()
          }), TAB_TYPE) : TAB_TYPE).LEADERBOARD) {
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logButtonClick("leaderboard", "home");
          } else if (this.tabType == (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
            error: Error()
          }), TAB_TYPE) : TAB_TYPE).TOURNAMENT) {
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logButtonClick("tournament", "home");
          }

          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOUCH_TAB, this.tabType);
        }

        showTab(currTab) {
          if (this.tabType == currTab) {
            this.setItemON();
          } else {
            this.setItemOff();
          } // this.updatePos(currTab);


          this.tweenMove = tween(this.node).to(0.2, {
            position: this.arrPos[currTab]
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
        }

        updatePos(indexTab) {
          this.node.setPosition(this.arrPos[indexTab]);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tabType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
            error: Error()
          }), TAB_TYPE) : TAB_TYPE).HOME;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnTab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeON", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeOFF", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "arrSfBgs", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "arrSfIcons", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "arrPos", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
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
//# sourceMappingURL=ItemTab.js.map