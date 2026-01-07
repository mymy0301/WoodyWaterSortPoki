System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, AudioSource, game, warn, localConfig, lodash, resourceUtil, _dec, _dec2, _class, _class2, _descriptor, _class3, _temp, _crd, ccclass, property, AudioManager2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOflodash(extras) {
    _reporterNs.report("lodash", "./lodash", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "./resourceUtil", _context.meta, extras);
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
      warn = _cc.warn;
    }, function (_unresolved_2) {
      localConfig = _unresolved_2.localConfig;
    }, function (_unresolved_3) {
      lodash = _unresolved_3.lodash;
    }, function (_unresolved_4) {
      resourceUtil = _unresolved_4.resourceUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ff2a7/7GqFDo6r3pkRudTCv", "audioManager2", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AudioManager2", AudioManager2 = (_dec = ccclass('AudioManager2'), _dec2 = property(AudioSource), _dec(_class = (_class2 = (_temp = _class3 = class AudioManager2 extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "audioSource", _descriptor, this);

          _defineProperty(this, "isPlayingClay", false);

          _defineProperty(this, "isPlayingCurtain", false);
        }

        onLoad() {
          game.addPersistRootNode(this.node);
          this.audioSource = this.node.getComponent(AudioSource);
          AudioManager2.instance = this;
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        playSound(name) {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) return;
          var path = 'audio/sound/';
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip(path + name, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err); //////console.log(path + name);

              return;
            } // NOTE: the second parameter is volume scale.


            this.audioSource.playOneShot(clip, 1);
          });
        }

        playSoundClick() {// if(!localConfig.instance.isSound) return;
          // let path = 'audio/sound/click';
          // resourceUtil.loadAudioClip(path, (err, clip)=> {
          //     if (err) {
          //         warn('load audioClip failed: ', err);
          //         //////console.log(path + name);
          //         return;
          //     }
          //     // NOTE: the second parameter is volume scale.
          //     this.audioSource.playOneShot(clip,1);
          // });
        }

        playPopupOpen() {// if(!localConfig.instance.isSound) return;
          // let path = 'audio/sound/pop_dialog';
          // resourceUtil.loadAudioClip(path, (err, clip)=> {
          //     if (err) {
          //         warn('load audioClip failed: ', err);
          //         //////console.log(path + name);
          //         return;
          //     }
          //     // NOTE: the second parameter is volume scale.
          //     this.audioSource.playOneShot(clip,1);
          // });
        }

        playPopupOpen2() {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) return;
          var path = 'audio/sound/pop_dialog';
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip(path, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err); //////console.log(path + name);

              return;
            } // NOTE: the second parameter is volume scale.


            this.audioSource.playOneShot(clip, 1);
          });
        }

        playPopupClose() {}

        playSound_PickUp() {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) return;
          var path = 'audio/sound/bottle_up';
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip(path, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err); //////console.log(path + name);

              return;
            } // NOTE: the second parameter is volume scale.


            this.audioSource.playOneShot(clip, 1);
          });
        }

        playSound_PickDown() {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) return; // let path = 'audio/sound/pick-down';

          var path = 'audio/sound/bottle_down';
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip(path, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err); //////console.log(path + name);

              return;
            } // NOTE: the second parameter is volume scale.


            this.audioSource.playOneShot(clip, 1);
          });
        }

        playSound_Pour(countPour) {
          // console.log("playSound Pour:"+countPour);
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) return; // let path = 'audio/sound/water'+countPour;

          var path = 'audio/sound/p_mid' + countPour;
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip(path, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err); //////console.log(path + name);

              return;
            } // NOTE: the second parameter is volume scale.


            this.audioSource.playOneShot(clip, 1);
          });
        }

        playSound_BottleDone() {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) return;
          var path = 'audio/sound/waterfull';
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip(path, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err); //////console.log(path + name);

              return;
            } // NOTE: the second parameter is volume scale.


            this.audioSource.playOneShot(clip, 1);
          });
        }

        playSound_WIN() {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) return;
          var path = 'audio/sound/win_effect';
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip(path, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err); //////console.log(path + name);

              return;
            } // NOTE: the second parameter is volume scale.


            this.audioSource.playOneShot(clip, 1);
          });
        }

        playSound_WIN2() {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) return;
          var path = 'audio/sound/win';
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip(path, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err); //////console.log(path + name);

              return;
            } // NOTE: the second parameter is volume scale.


            this.audioSource.playOneShot(clip, 1);
          });
        }

        playSound_showItemReward() {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) return;
          var rd = (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
            error: Error()
          }), lodash) : lodash).randomSign();
          var path = 'audio/sound/cap_eff_1';
          if (rd < 0) path = 'audio/sound/cap_eff_2';
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip(path, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err); //////console.log(path + name);

              return;
            } // NOTE: the second parameter is volume scale.


            this.audioSource.playOneShot(clip, 1);
          });
        }

        playSound_progressbar() {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) return;
          var path = 'audio/sound/progressbar';
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip(path, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err); //////console.log(path + name);

              return;
            } // NOTE: the second parameter is volume scale.


            this.audioSource.playOneShot(clip, 1);
          });
        }

        playSound_Coin_Appear() {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) return;
          var path = 'audio/sound/coin_appear';
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip(path, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err); //////console.log(path + name);

              return;
            } // NOTE: the second parameter is volume scale.


            this.audioSource.playOneShot(clip, 1);
          });
        }

        playSound_Coin_Receive() {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) return;
          var path = 'audio/sound/coin_receive';
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip(path, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err); //////console.log(path + name);

              return;
            } // NOTE: the second parameter is volume scale.


            this.audioSource.playOneShot(clip, 1);
          });
        }

        playSound_Chest_Open() {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) return;
          var path = 'audio/sound/chest_open';
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip(path, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err); //////console.log(path + name);

              return;
            } // NOTE: the second parameter is volume scale.


            this.audioSource.playOneShot(clip, 1);
          });
        }

        playPhaohoa() {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) return;
          var path = 'audio/sound/phaohoa';
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip(path, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err);
              return;
            } // NOTE: the second parameter is volume scale.


            this.audioSource.playOneShot(clip, 1);
          });
        }

        playNotification() {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) return;
          var path = 'audio/sound/notification-alert';
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip(path, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err);
              return;
            } // NOTE: the second parameter is volume scale.


            this.audioSource.playOneShot(clip, 1);
          });
        }

        playSpinItemShow() {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) return;
          var path = 'audio/sound/Wheel_Spin';
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip(path, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err);
              return;
            } // NOTE: the second parameter is volume scale.


            this.audioSource.playOneShot(clip, 1);
          });
        }

        playSpinStart() {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) return;
          var path = 'audio/sound/Wheel_Spin';
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip(path, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err);
              return;
            } // NOTE: the second parameter is volume scale.


            this.audioSource.playOneShot(clip, 1);
          });
        }

        playSpinDone() {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) return;
          var path = 'audio/sound/Wheel_Done';
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip(path, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err);
              return;
            } // NOTE: the second parameter is volume scale.


            this.audioSource.playOneShot(clip, 1);
          });
        }

        playPopupReward() {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) return;
          var path = 'audio/sound/sfx_getRew';
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip(path, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err);
              return;
            } // NOTE: the second parameter is volume scale.


            this.audioSource.playOneShot(clip, 1);
          });
        }

        playGetReward() {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) return;
          var path = 'audio/sound/sfx_getRew';
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip(path, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err);
              return;
            } // NOTE: the second parameter is volume scale.


            this.audioSource.playOneShot(clip, 1);
          });
        }

        playJump() {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) return;
          var path = 'audio/sound/jump';
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip(path, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err);
              return;
            } // NOTE: the second parameter is volume scale.


            this.audioSource.playOneShot(clip, 1);
          });
        }

        playClay() {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) return;
          if (this.isPlayingClay) return;
          this.isPlayingClay = true;
          this.scheduleOnce(() => {
            this.isPlayingClay = false;
          }, 0.5);
          var path = 'audio/sound/clay_break_v2'; // console.log(path);

          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip(path, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err);
              return;
            } // NOTE: the second parameter is volume scale.


            this.audioSource.playOneShot(clip, 1);
          });
        }

        playCurrtain() {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) return;
          if (this.isPlayingCurtain) return;
          this.isPlayingCurtain = true;
          this.scheduleOnce(() => {
            this.isPlayingCurtain = false;
          }, 0.5);
          var path = 'audio/sound/curtain'; // console.log(path);

          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip(path, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err);
              return;
            } // NOTE: the second parameter is volume scale.


            this.audioSource.playOneShot(clip, 1);
          });
        }

        playNoMoves() {
          if (!(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isSound) return;
          var path = 'audio/sound/fail2';
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadAudioClip(path, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err);
              return;
            } // NOTE: the second parameter is volume scale.


            this.audioSource.playOneShot(clip, 1);
          });
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
//# sourceMappingURL=audioManager2.js.map