System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, AudioSource, game, localConfig, _dec, _dec2, _class, _class2, _descriptor, _class3, _temp, _crd, ccclass, property, MusicManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      AudioSource = _cc.AudioSource;
      game = _cc.game;
    }, function (_unresolved_2) {
      localConfig = _unresolved_2.localConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "64b09Xf20lOObb/DTXllE66", "musicManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MusicManager", MusicManager = (_dec = ccclass('MusicManager'), _dec2 = property(AudioSource), _dec(_class = (_class2 = (_temp = _class3 = class MusicManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "audioSource", _descriptor, this);
        }

        onLoad() {
          game.addPersistRootNode(this.node);
          this.audioSource = this.node.getComponent(AudioSource);
          MusicManager.instance = this;
        }

        start() {// [3]
          // this.initMusic();
        }

        initMusic() {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isMusic) {
            this.closeMusic();
          } else {
            this.openMusic();
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }


        openMusic() {
          //////console.log("openMusicopenMusicopenMusicopenMusic");
          // this.setMusicVolume(0.8);
          // configuration.instance.setGlobalData('music', 'true');
          this.audioSource.volume = 1;

          if (!this.audioSource.playing) {
            this.audioSource.play();
          }
        }

        checkMusicPlaying() {
          return this.audioSource.playing;
        }

        closeMusic() {
          //////console.log("closeMusiccloseMusiccloseMusic");
          // this.setMusicVolume(0);
          // configuration.instance.setGlobalData('music', 'false');
          this.audioSource.volume = 0;

          if (this.audioSource.playing) {
            this.audioSource.stop();
          }
        }

        pauseMusic() {
          if (this.audioSource.playing) {
            this.audioSource.pause();
          }
        }

        resumeMusic() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isMusic) {
            this.audioSource.volume = 1;
            this.audioSource.play();
          }
        }

      }, _defineProperty(_class3, "instance", void 0), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "audioSource", [_dec2], {
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
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=musicManager.js.map