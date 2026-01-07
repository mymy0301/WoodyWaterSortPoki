System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, Node, Prefab, clientEvent, Constants, localConfig, ItemTicket, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, TicketPoolManager;

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

  function _reportPossibleCrUseOfTICKET_TYPE(extras) {
    _reporterNs.report("TICKET_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemTicket(extras) {
    _reporterNs.report("ItemTicket", "./ItemTicket", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      clientEvent = _unresolved_2.clientEvent;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
    }, function (_unresolved_4) {
      localConfig = _unresolved_4.localConfig;
    }, function (_unresolved_5) {
      ItemTicket = _unresolved_5.ItemTicket;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8ce84DLH6xLAL6uG/OKIkTT", "TicketPoolManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = TicketPoolManager
       * DateTime = Wed Sep 11 2024 11:09:05 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = TicketPoolManager.ts
       * FileBasenameNoExtension = TicketPoolManager
       * URL = db://assets/scripts/game/TicketPoolManager.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("TicketPoolManager", TicketPoolManager = (_dec = ccclass('TicketPoolManager'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = class TicketPoolManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "arrItemTicketPrefab", _descriptor, this);

          _initializerDefineProperty(this, "poolParentNode", _descriptor2, this);

          _initializerDefineProperty(this, "arrTargetNodes", _descriptor3, this);

          _initializerDefineProperty(this, "arrStartNodes", _descriptor4, this);

          _defineProperty(this, "mapItemPools", new Map());
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_ADDTICKET, this.showAddTicket, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).UPDATE_TICKET_TARGETPOS, this.updateTargetPos, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).UPDATE_TICKET_STARTPOS, this.updateStartPos, this);
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_ADDTICKET, this.showAddTicket, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).UPDATE_TICKET_TARGETPOS, this.updateTargetPos, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).UPDATE_TICKET_STARTPOS, this.updateStartPos, this);
        }

        start() {// [3]
        }

        updateTargetPos(ticketType, posTarget) {
          console.log("updateTargetPos", ticketType, posTarget);
          this.arrTargetNodes[ticketType].setWorldPosition(posTarget);
        }

        updateStartPos(ticketType, posStart) {
          this.arrStartNodes[ticketType].setWorldPosition(posStart);
        }

        showAddTicket(ticketType, totalCoinAdd) {
          var listCoinValue = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.generateListCoinValue_fromTotalCoin(totalCoinAdd, 10);

          for (var i = 0; i < listCoinValue.length; i++) {
            var itemCoin = this.getItem(ticketType);
            itemCoin.getComponent(_crd && ItemTicket === void 0 ? (_reportPossibleCrUseOfItemTicket({
              error: Error()
            }), ItemTicket) : ItemTicket).initTicket(listCoinValue[i], this.arrStartNodes[ticketType].position, this.arrTargetNodes[ticketType].position, i * 0.05);
          }
        }

        getItem(ticketType) {
          if (this.mapItemPools.has(ticketType)) {
            var arrItemPools = this.mapItemPools.get(ticketType);

            for (var i = 0; i < arrItemPools.length; i++) {
              if (!arrItemPools[i].active) {
                return arrItemPools[i];
              }
            }
          }

          var obj = instantiate(this.arrItemTicketPrefab[ticketType]);
          obj.parent = this.poolParentNode;

          if (!this.mapItemPools.has(ticketType)) {
            this.mapItemPools.set(ticketType, []);
          }

          this.mapItemPools.get(ticketType).push(obj);
          return obj;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "arrItemTicketPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "poolParentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "arrTargetNodes", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "arrStartNodes", [_dec5], {
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
//# sourceMappingURL=TicketPoolManager.js.map