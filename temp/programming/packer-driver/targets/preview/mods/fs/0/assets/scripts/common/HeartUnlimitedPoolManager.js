System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, Node, Prefab, clientEvent, Constants, ItemHeartUnlimited, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, HeartUnlimitedPoolManager;

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

  function _reportPossibleCrUseOfItemHeartUnlimited(extras) {
    _reporterNs.report("ItemHeartUnlimited", "./ItemHeartUnlimited", _context.meta, extras);
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
      ItemHeartUnlimited = _unresolved_4.ItemHeartUnlimited;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "02e9br9C55DFodZtCfffMTS", "HeartUnlimitedPoolManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = HeartUnlimitedPoolManager
       * DateTime = Wed May 07 2025 15:47:00 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = HeartUnlimitedPoolManager.ts
       * FileBasenameNoExtension = HeartUnlimitedPoolManager
       * URL = db://assets/scripts/common/HeartUnlimitedPoolManager.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("HeartUnlimitedPoolManager", HeartUnlimitedPoolManager = (_dec = ccclass('HeartUnlimitedPoolManager'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = class HeartUnlimitedPoolManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "itemPoolPrefab", _descriptor, this);

          _initializerDefineProperty(this, "poolParentNode", _descriptor2, this);

          _initializerDefineProperty(this, "target_Node", _descriptor3, this);

          _initializerDefineProperty(this, "start_Node", _descriptor4, this);

          _defineProperty(this, "arrPools", []);
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_ADDHEART_UNLIMITED, this.showAddHeartUnlimited, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).UPDATE_HEART_TARGETPOS, this.updateTargetPos, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).UPDATE_HEART_STARTPOS, this.updateStartPos, this);
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_ADDHEART_UNLIMITED, this.showAddHeartUnlimited, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).UPDATE_HEART_TARGETPOS, this.updateTargetPos, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).UPDATE_HEART_STARTPOS, this.updateStartPos, this);
        }

        start() {// [3]
        }

        updateTargetPos(posTarget) {
          console.log("updateHEART StartPos", posTarget);
          this.target_Node.setWorldPosition(posTarget);
        }

        updateStartPos(posStart) {
          this.start_Node.setWorldPosition(posStart);
        }

        showAddHeartUnlimited(countTime) {
          var itemHeartUnlimited = this.getItem();
          itemHeartUnlimited.getComponent(_crd && ItemHeartUnlimited === void 0 ? (_reportPossibleCrUseOfItemHeartUnlimited({
            error: Error()
          }), ItemHeartUnlimited) : ItemHeartUnlimited).initHeartUnlimited(countTime, this.start_Node.getWorldPosition(), this.target_Node.getWorldPosition(), 0);
        }

        getItem() {
          for (var i = 0; i < this.arrPools.length; i++) {
            if (!this.arrPools[i].active) {
              return this.arrPools[i];
            }
          }

          var obj = instantiate(this.itemPoolPrefab);
          obj.parent = this.poolParentNode;
          this.arrPools.push(obj);
          return obj;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemPoolPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "poolParentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "target_Node", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "start_Node", [_dec5], {
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
//# sourceMappingURL=HeartUnlimitedPoolManager.js.map