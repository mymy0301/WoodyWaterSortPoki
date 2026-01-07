System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Component, Label, Node, Sprite, SpriteFrame, tween, UIOpacity, Vec3, localConfig, Constants, clientEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp, _crd, ccclass, property, ItemDailyChallenge;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfInfoDay(extras) {
    _reporterNs.report("InfoDay", "../common/InfoDay", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      localConfig = _unresolved_2.localConfig;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
    }, function (_unresolved_4) {
      clientEvent = _unresolved_4.clientEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "45ed0SK8g5LZagvpkdRIbO9", "ItemDailyChallenge", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemDailyChallenge
       * DateTime = Tue Oct 01 2024 09:28:40 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemDailyChallenge.ts
       * FileBasenameNoExtension = ItemDailyChallenge
       * URL = db://assets/scripts/game/ItemDailyChallenge.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemDailyChallenge", ItemDailyChallenge = (_dec = ccclass('ItemDailyChallenge'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Button), _dec6 = property(Sprite), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec9 = property(Node), _dec10 = property(UIOpacity), _dec11 = property(Node), _dec(_class = (_class2 = (_temp = class ItemDailyChallenge extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "txtInfo", _descriptor, this);

          _initializerDefineProperty(this, "txtInfoDisable", _descriptor2, this);

          _initializerDefineProperty(this, "txtInfoSelect", _descriptor3, this);

          _initializerDefineProperty(this, "btn", _descriptor4, this);

          _initializerDefineProperty(this, "bg", _descriptor5, this);

          _initializerDefineProperty(this, "sf_select", _descriptor6, this);

          _initializerDefineProperty(this, "sf_nonselect", _descriptor7, this);

          _initializerDefineProperty(this, "nodeFinished", _descriptor8, this);

          _initializerDefineProperty(this, "nodeFinished_Opacity", _descriptor9, this);

          _initializerDefineProperty(this, "nodeNotify", _descriptor10, this);

          _defineProperty(this, "infoDay", null);

          _defineProperty(this, "isSelect", false);
        }

        onEnable() {
          this.btn.node.on(Button.EventType.CLICK, this.touchItemDailyChallenge, this);
        }

        onDisable() {
          this.btn.node.off(Button.EventType.CLICK, this.touchItemDailyChallenge, this);
        }

        initItemDailyChallenge(info) {
          this.infoDay = info;
          this.txtInfo.string = "" + this.infoDay.day;
          this.txtInfoDisable.string = "" + this.infoDay.day;
          this.txtInfoSelect.string = "" + this.infoDay.day;
          var dateCheck = new Date(this.infoDay.year, this.infoDay.month, this.infoDay.day);
          var dayOfWeek = dateCheck.getDay();
          var weekofMonth = Math.ceil((this.infoDay.day - 1 - dayOfWeek) / 7);
          var posX = (dayOfWeek - 3) * (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.CALENDAR_X;
          var posY = -50 - weekofMonth * (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.CALENDAR_Y;
          this.node.setPosition(new Vec3(posX, posY, 0));
        }

        showItem() {
          var isFinished = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.checkInfoDailyChallengeFinished(this.infoDay);

          if (isFinished) {
            this.nodeFinished.active = true;
          } else {
            this.nodeFinished.active = false;
          }

          this.nodeNotify.active = false;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.checkSameInfoDay((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currInfoDay, this.infoDay)) {
            if (!isFinished) {
              this.nodeNotify.active = true;
            }
          }

          if (this.infoDay.year == (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currInfoDay.year && this.infoDay.month == (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currInfoDay.month && this.infoDay.day > (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currInfoDay.day) {
            this.btn.interactable = false;
            this.bg.grayscale = true;

            if (!this.isSelect) {
              this.txtInfoDisable.node.active = true;
              this.txtInfo.node.active = false;
            }
          } else {
            this.btn.interactable = true;
            this.bg.grayscale = false;

            if (!this.isSelect) {
              this.txtInfoDisable.node.active = false;
              this.txtInfo.node.active = true;
            }
          }
        }

        setSelectDay(_infoDay) {
          // console.log(_infoDay,this.infoDay);
          if (this.infoDay.year == _infoDay.year && this.infoDay.month == _infoDay.month && this.infoDay.day == _infoDay.day) {
            this.isSelect = true;
            this.bg.spriteFrame = this.sf_select;
          } else {
            this.bg.spriteFrame = this.sf_nonselect;
            this.isSelect = false;
          }

          this.txtInfoSelect.node.active = this.isSelect;
          this.txtInfoDisable.node.active = false;
          this.txtInfo.node.active = false;
          this.showItem();
        }

        touchItemDailyChallenge() {
          // console.log(this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILYCHALLENGE_TOUCH_SELECT_DAY, this.infoDay, this);
        }

        setFinished() {
          this.node.setSiblingIndex(999);
          this.nodeNotify.active = false;
          this.nodeFinished.active = true;
          this.nodeFinished.setScale(new Vec3(3, 3, 3));
          this.nodeFinished_Opacity.opacity = 0;
          tween(this.nodeFinished).to(0.3, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'bounceOut',
            onComplete: () => {}
          }).start();
          tween(this.nodeFinished_Opacity).to(0.1, {
            opacity: 255
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.addInfoDayFinished(this.infoDay);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtInfo", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtInfoDisable", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txtInfoSelect", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sf_select", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "sf_nonselect", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "nodeFinished", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nodeFinished_Opacity", [_dec10], {
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
//# sourceMappingURL=ItemDailyChallenge.js.map