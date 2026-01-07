System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Prefab, Vec3, instantiate, AudioManager2, clientEvent, Constants, localConfig, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, EfxBottleFinishManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "../framework/audioManager2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
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
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      AudioManager2 = _unresolved_2.AudioManager2;
    }, function (_unresolved_3) {
      clientEvent = _unresolved_3.clientEvent;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.Constants;
    }, function (_unresolved_5) {
      localConfig = _unresolved_5.localConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2ea4euv3TdKAZQcqZzdCppA", "EfxBottleFinishManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = EfxBottleFinishManager
       * DateTime = Tue Mar 15 2022 13:40:20 GMT+0700 (Indochina Time)
       * Author = tuzkekizer
       * FileBasename = EfxBottleFinishManager.ts
       * FileBasenameNoExtension = EfxBottleFinishManager
       * URL = db://assets/scripts/waters/EfxBottleFinishManager.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("EfxBottleFinishManager", EfxBottleFinishManager = (_dec = ccclass('EfxBottleFinishManager'), _dec2 = property(Prefab), _dec(_class = (_class2 = (_temp = class EfxBottleFinishManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "itemEfx", _descriptor, this);

          _defineProperty(this, "arrPools", []);
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_EFX_TUBE_FINSIHED, this.showEfxBottleFinished, this);
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_EFX_TUBE_FINSIHED, this.showEfxBottleFinished, this);
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        showEfxBottleFinished(posWorld, scale) {
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playSound_BottleDone();
          var efx = this.getItem();
          efx.active = true;
          efx.setParent(this.node);
          var pos = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getPos_PosWord_WorldSpace(posWorld, scale);
          efx.setWorldPosition(new Vec3(pos.x, pos.y, 999));
          efx.setScale(new Vec3(scale, scale, scale));
        }

        getItem() {
          for (var i = 0; i < this.arrPools.length; i++) {
            if (!this.arrPools[i].active) {
              return this.arrPools[i];
            }
          }

          var obj = instantiate(this.itemEfx);
          obj.parent = this.node;
          this.arrPools.push(obj);
          return obj;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemEfx", [_dec2], {
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
//# sourceMappingURL=EfxBottleFinishManager.js.map