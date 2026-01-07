System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Component, RichText, Vec3, Constants, THEME_TYPE, ItemTube, localConfig, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, TestScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTHEME_TYPE(extras) {
    _reporterNs.report("THEME_TYPE", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemTube(extras) {
    _reporterNs.report("ItemTube", "./game/ItemTube", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "./localConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      RichText = _cc.RichText;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
      THEME_TYPE = _unresolved_2.THEME_TYPE;
    }, function (_unresolved_3) {
      ItemTube = _unresolved_3.ItemTube;
    }, function (_unresolved_4) {
      localConfig = _unresolved_4.localConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b0adeoKM4NHe5Ij2MzmJgab", "TestScene", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TestScene", TestScene = (_dec = ccclass('TestScene'), _dec2 = property(RichText), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(_crd && ItemTube === void 0 ? (_reportPossibleCrUseOfItemTube({
        error: Error()
      }), ItemTube) : ItemTube), _dec8 = property(_crd && ItemTube === void 0 ? (_reportPossibleCrUseOfItemTube({
        error: Error()
      }), ItemTube) : ItemTube), _dec(_class = (_class2 = (_temp = class TestScene extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "text", _descriptor, this);

          _initializerDefineProperty(this, "btnTest_1", _descriptor2, this);

          _initializerDefineProperty(this, "btnTest_2", _descriptor3, this);

          _initializerDefineProperty(this, "btnTest_3", _descriptor4, this);

          _initializerDefineProperty(this, "btnTest_4", _descriptor5, this);

          _defineProperty(this, "arrIndexColor", [0, 1, 2, 3]);

          _initializerDefineProperty(this, "itemTubeTest", _descriptor6, this);

          _initializerDefineProperty(this, "itemTubeTestON", _descriptor7, this);
        }

        onEnable() {
          this.btnTest_1.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchTest_1, this);
          this.btnTest_2.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchTest_2, this);
          this.btnTest_3.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchTest_3, this);
          this.btnTest_4.node.on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CLICK, this.touchTest_4, this);
        }

        start() {
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelDataInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getLevelDataInfo_byIndexLevel(1);
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.setThemeSelected((_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).TUBE, 2);
        }

        update(deltaTime) {}

        touchTest_1() {
          this.itemTubeTest.initItemTube(0, 0, [0, 1, 2, 3]);
          this.itemTubeTestON.initItemTube(1, 0, []);
          var posTarget = new Vec3(300, 282, 0);
          this.itemTubeTest.setMoveToTarget(this.itemTubeTestON, 0, posTarget, true, 0, 0);
        }

        touchTest_2() {
          this.itemTubeTest.initItemTube(0, 0, [0, 1, 2]);
          this.itemTubeTestON.initItemTube(1, 0, []);
          var posTarget = new Vec3(300, 282, 0);
          this.itemTubeTest.setMoveToTarget(this.itemTubeTestON, 1, posTarget, true, 0, 0);
        }

        touchTest_3() {
          this.itemTubeTest.initItemTube(0, 0, [0, 1]);
          this.itemTubeTestON.initItemTube(1, 0, []);
          var posTarget = new Vec3(300, 282, 0);
          this.itemTubeTest.setMoveToTarget(this.itemTubeTestON, 2, posTarget, true, 0, 0);
        }

        touchTest_4() {
          this.itemTubeTest.initItemTube(0, 0, [0]);
          this.itemTubeTestON.initItemTube(1, 0, []);
          var posTarget = new Vec3(300, 282, 0);
          this.itemTubeTest.setMoveToTarget(this.itemTubeTestON, 3, posTarget, true, 0, 0);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "text", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnTest_1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnTest_2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnTest_3", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnTest_4", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "itemTubeTest", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "itemTubeTestON", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TestScene.js.map