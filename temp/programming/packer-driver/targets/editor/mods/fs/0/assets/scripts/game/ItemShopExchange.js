System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, CCInteger, Component, Enum, Node, Constants, TICKET_TYPE, localConfig, clientEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, ItemShopExchange;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTICKET_TYPE(extras) {
    _reporterNs.report("TICKET_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
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
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      Enum = _cc.Enum;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
      TICKET_TYPE = _unresolved_2.TICKET_TYPE;
    }, function (_unresolved_3) {
      localConfig = _unresolved_3.localConfig;
    }, function (_unresolved_4) {
      clientEvent = _unresolved_4.clientEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3a6f8u+/H9OlrVEUPXCxgtY", "ItemShopExchange", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemShopExchange
       * DateTime = Fri Sep 20 2024 09:19:00 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemShopExchange.ts
       * FileBasenameNoExtension = ItemShopExchange
       * URL = db://assets/scripts/game/ItemShopExchange.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemShopExchange", ItemShopExchange = (_dec = ccclass('ItemShopExchange'), _dec2 = property({
        type: Enum(_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
          error: Error()
        }), TICKET_TYPE) : TICKET_TYPE)
      }), _dec3 = property(CCInteger), _dec4 = property(CCInteger), _dec5 = property(Node), _dec6 = property(Button), _dec(_class = (_class2 = (_temp = class ItemShopExchange extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ticketType", _descriptor, this);

          _initializerDefineProperty(this, "price", _descriptor2, this);

          _initializerDefineProperty(this, "value", _descriptor3, this);

          _initializerDefineProperty(this, "startPos", _descriptor4, this);

          _initializerDefineProperty(this, "btnExchange", _descriptor5, this);
        }

        onEnable() {
          this.btnExchange.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchExchange, this);
        }

        onDisable() {
          this.btnExchange.node.off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchExchange, this);
        }

        start() {// [3]
        }

        touchExchange() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currCoin >= this.price) {
            (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.setCoin((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.currCoin - this.price);

            if (this.ticketType == (_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
              error: Error()
            }), TICKET_TYPE) : TICKET_TYPE).GOLD) {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).UPDATE_TICKET_STARTPOS, (_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
                error: Error()
              }), TICKET_TYPE) : TICKET_TYPE).GOLD, this.startPos.worldPosition);
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_ADDTICKET, (_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
                error: Error()
              }), TICKET_TYPE) : TICKET_TYPE).GOLD, this.value);
            } else if (this.ticketType == (_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
              error: Error()
            }), TICKET_TYPE) : TICKET_TYPE).SILVER) {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).UPDATE_TICKET_STARTPOS, (_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
                error: Error()
              }), TICKET_TYPE) : TICKET_TYPE).SILVER, this.startPos.worldPosition);
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_ADDTICKET, (_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
                error: Error()
              }), TICKET_TYPE) : TICKET_TYPE).SILVER, this.value);
            }
          } else {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOW_NOTIFICATION, "Not Enough Coin!");
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ticketType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && TICKET_TYPE === void 0 ? (_reportPossibleCrUseOfTICKET_TYPE({
            error: Error()
          }), TICKET_TYPE) : TICKET_TYPE).GOLD;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "price", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 150;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "value", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 3;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "startPos", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnExchange", [_dec6], {
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
//# sourceMappingURL=ItemShopExchange.js.map