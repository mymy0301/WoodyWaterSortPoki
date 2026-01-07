System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Vec3, clientEvent, Constants, lodash, localConfig, _dec, _class, _temp, _crd, ccclass, property, CameraShakeManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOflodash(extras) {
    _reporterNs.report("lodash", "../framework/lodash", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      clientEvent = _unresolved_2.clientEvent;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
    }, function (_unresolved_4) {
      lodash = _unresolved_4.lodash;
    }, function (_unresolved_5) {
      localConfig = _unresolved_5.localConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41fa02hNnpFFY22gvs5DSMr", "CameraShakeManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = CameraShakeManager
       * DateTime = Thu Feb 24 2022 23:57:58 GMT+0700 (Indochina Time)
       * Author = tuzkekizer
       * FileBasename = CameraShakeManager.ts
       * FileBasenameNoExtension = CameraShakeManager
       * URL = db://assets/scripts/common/CameraShakeManager.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("CameraShakeManager", CameraShakeManager = (_dec = ccclass('CameraShakeManager'), _dec(_class = (_temp = class CameraShakeManager extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "shakeDuration", 0.2);

          _defineProperty(this, "shakeAmount", 20);

          _defineProperty(this, "canShake", false);

          _defineProperty(this, "_shakeTimer", 0);
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHAKE_CAMERA, this.shakeCamera, this);
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHAKE_CAMERA, this.shakeCamera, this);
        }

        start() {// [3]
        }

        update(deltaTime) {
          // [4]
          if (this.canShake) {
            this.StartCameraShakeEffect(deltaTime);
          }
        }

        shakeCamera() {
          // console.log("shakeCamerashakeCamerashakeCamera");
          // console.log(localConfig.instance.isVibration);
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isVibration) {
            this.canShake = true;
            this._shakeTimer = this.shakeDuration;
          }
        }

        StartCameraShakeEffect(deltaTime) {
          if (this._shakeTimer > 0) {
            let rdRadius = (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).randomFloat(0, 1);
            let rdAngle = (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).random(0, 360);
            let newPos = new Vec3(0, 0, 1000);
            newPos.x = rdRadius * Math.sin(rdAngle) * this.shakeAmount;
            newPos.y = rdRadius * Math.cos(rdAngle) * this.shakeAmount;
            this.node.setPosition(newPos);
            this._shakeTimer -= deltaTime;
          } else {
            this._shakeTimer = 0;
            this.canShake = false;
            this.node.setPosition(new Vec3(0, 0, 1000));
          }
        }

      }, _temp)) || _class));
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
//# sourceMappingURL=CameraShakeManager.js.map