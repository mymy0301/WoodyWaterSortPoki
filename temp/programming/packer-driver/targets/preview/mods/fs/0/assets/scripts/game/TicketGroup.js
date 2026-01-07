System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Component, Enum, Label, Node, tween, Vec3, clientEvent, Constants, SCENE_TYPE, TICKET_TYPE, Utils, localConfig, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, TicketGroup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSCENE_TYPE(extras) {
    _reporterNs.report("SCENE_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTICKET_TYPE(extras) {
    _reporterNs.report("TICKET_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../core/utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      clientEvent = _unresolved_2.clientEvent;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
      SCENE_TYPE = _unresolved_3.SCENE_TYPE;
      TICKET_TYPE = _unresolved_3.TICKET_TYPE;
    }, function (_unresolved_4) {
      Utils = _unresolved_4.default;
    }, function (_unresolved_5) {
      localConfig = _unresolved_5.localConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a1a4FAIUBNeIdZRHNCiiYd", "TicketGroup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = TicketGroup
       * DateTime = Wed Sep 11 2024 10:52:45 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = TicketGroup.ts
       * FileBasenameNoExtension = TicketGroup
       * URL = db://assets/scripts/game/TicketGroup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("TicketGroup", TicketGroup = (_dec = ccclass('TicketGroup'), _dec2 = property({
        type: Enum(_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
          error: Error()
        }), TICKET_TYPE) : TICKET_TYPE)
      }), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Button), _dec(_class = (_class2 = (_temp = class TicketGroup extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "ticketType", _descriptor, this);

          _initializerDefineProperty(this, "txtValue", _descriptor2, this);

          _initializerDefineProperty(this, "icon", _descriptor3, this);

          _initializerDefineProperty(this, "btnAdd", _descriptor4, this);

          _defineProperty(this, "tweenUpdate", null);
        }

        onLoad() {
          this.tweenUpdate = tween(this.node).to(0.05, {
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
          }).union(); //.repeat(2);
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TICKET_UPDATE, this.setUpdate, this);

          if (this.btnAdd) {
            this.btnAdd.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).CLICK, this.touchAdd, this);
          }

          this.txtValue.string = "" + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).formatNumber(Math.floor((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getTicketCount(this.ticketType)));
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).COIN_UPDATE, this.setUpdate, this);

          if (this.btnAdd) {
            this.btnAdd.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).CLICK, this.touchAdd, this);
          }
        }

        start() {
          // [3]
          this.txtValue.string = "" + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).formatNumber(Math.floor((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getTicketCount(this.ticketType)));
        } // update (deltaTime: number) {
        //     // [4]
        // }


        setUpdate(ticketType) {
          if (this.ticketType != ticketType) return;
          this.txtValue.string = "" + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).formatNumber(Math.floor((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getTicketCount(this.ticketType)));
          this.txtValue.node.setScale(new Vec3(1, 1, 1));
          this.tweenUpdate.stop();
          this.tweenUpdate.start().call(() => {
            this.txtValue.node.setScale(new Vec3(1, 1, 1));
          });
        }

        touchAdd() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currSceneType == (_crd && SCENE_TYPE === void 0 ? (_reportPossibleCrUseOfSCENE_TYPE({
            error: Error()
          }), SCENE_TYPE) : SCENE_TYPE).MENU) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_SHOP_GROUP);
          } else {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_SHOP_POPUP, this.ticketType);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ticketType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
            error: Error()
          }), TICKET_TYPE) : TICKET_TYPE).GOLD;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtValue", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnAdd", [_dec5], {
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
//# sourceMappingURL=TicketGroup.js.map