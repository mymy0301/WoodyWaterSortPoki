System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Node, ProgressBar, Sprite, SpriteFrame, tween, FBInstantManager, localConfig, AVATAR_TYPE, resourceUtil, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, ItemPlayerRaceProgress;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayerRaceDataInfo(extras) {
    _reporterNs.report("PlayerRaceDataInfo", "./PlayerRaceDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "../../common/FBInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAVATAR_TYPE(extras) {
    _reporterNs.report("AVATAR_TYPE", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../../framework/resourceUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      FBInstantManager = _unresolved_2.FBInstantManager;
    }, function (_unresolved_3) {
      localConfig = _unresolved_3.localConfig;
    }, function (_unresolved_4) {
      AVATAR_TYPE = _unresolved_4.AVATAR_TYPE;
    }, function (_unresolved_5) {
      resourceUtil = _unresolved_5.resourceUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8c950PINbJAn51i9QTuObNb", "ItemPlayerRaceProgress", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemPlayerRaceProgress
       * DateTime = Tue Nov 12 2024 15:59:30 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemPlayerRaceProgress.ts
       * FileBasenameNoExtension = ItemPlayerRaceProgress
       * URL = db://assets/scripts/game/race/ItemPlayerRaceProgress.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemPlayerRaceProgress", ItemPlayerRaceProgress = (_dec = ccclass('ItemPlayerRaceProgress'), _dec2 = property(Sprite), _dec3 = property(Node), _dec4 = property(SpriteFrame), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(ProgressBar), _dec8 = property(Boolean), _dec(_class = (_class2 = (_temp = class ItemPlayerRaceProgress extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "avatar", _descriptor, this);

          _initializerDefineProperty(this, "iconLoading", _descriptor2, this);

          _initializerDefineProperty(this, "sfAvatarDefault", _descriptor3, this);

          _initializerDefineProperty(this, "txtName", _descriptor4, this);

          _initializerDefineProperty(this, "txtProgress", _descriptor5, this);

          _initializerDefineProperty(this, "progressBar", _descriptor6, this);

          _initializerDefineProperty(this, "isMyPlayer", _descriptor7, this);

          _defineProperty(this, "playerRaceDataInfo", null);
        }

        onEnable() {
          if (this.isMyPlayer) {
            this.showProgressMyPlayer();
          } else if (this.playerRaceDataInfo) {
            this.showProgressOpponent();
          }
        }

        initMyPlayer() {
          this.reset();
          this.txtName.string = `${(_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.getName()}`;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.myAvatarSpriteFrame) {
            this.avatar.spriteFrame = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.myAvatarSpriteFrame;
            this.iconLoading.active = false;
          }
        }

        showProgressMyPlayer() {
          this.progressBar.progress = ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.raceScore - 1) / 10;
          this.txtProgress.string = `${(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.raceScore - 1}/10`;
          tween(this.progressBar).delay(0.5).to(0.3, {
            progress: (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.raceScore / 10
          }, {
            easing: 'linear',
            onComplete: () => {
              this.txtProgress.string = `${(_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.raceScore}/10`;
            }
          }).start();
        }

        initPlayerOpponent(_playerRaceDataInfo) {
          // console.log(_playerRaceDataInfo);
          this.reset();
          this.playerRaceDataInfo = _playerRaceDataInfo;
          this.txtName.string = `${this.playerRaceDataInfo.userName}`; // console.log(this.playerRaceDataInfo.avatarURL);

          if (this.playerRaceDataInfo.avatarURL) {
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.mapCacheAvatars.has(this.playerRaceDataInfo.playerID)) {
              this.iconLoading.active = false;
              this.avatar.spriteFrame = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.mapCacheAvatars.get(this.playerRaceDataInfo.playerID);
            } else if (this.playerRaceDataInfo.avatarType == (_crd && AVATAR_TYPE === void 0 ? (_reportPossibleCrUseOfAVATAR_TYPE({
              error: Error()
            }), AVATAR_TYPE) : AVATAR_TYPE).TYPE_WEB) {
              this.iconLoading.active = true;
              (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
                error: Error()
              }), resourceUtil) : resourceUtil).setRemoteImage(this.playerRaceDataInfo.avatarURL, this.avatar, (err, spriteFrame) => {
                if (err) {
                  // console.log(err);
                  return;
                }

                (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.mapCacheAvatars.set(this.playerRaceDataInfo.playerID, spriteFrame);
                this.iconLoading.active = false;
              });
            } else if (this.playerRaceDataInfo.avatarType == (_crd && AVATAR_TYPE === void 0 ? (_reportPossibleCrUseOfAVATAR_TYPE({
              error: Error()
            }), AVATAR_TYPE) : AVATAR_TYPE).TYPE_LOCAL) {
              this.iconLoading.active = false;
              this.avatar.spriteFrame = this.sfAvatarDefault;
            }
          }

          this.showProgressOpponent();
        }

        showProgressOpponent() {
          // console.log("showProgressOpponent");
          let timePlayed = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrTime() - (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.raceLastTime; // console.log("timePlayed",timePlayed);

          let currScoreOpponent = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getRaceScore_Opponent(timePlayed, this.playerRaceDataInfo.arrTimes); // console.log("currScoreOpponent",currScoreOpponent);

          this.progressBar.progress = currScoreOpponent / 10;
          this.txtProgress.string = `${currScoreOpponent}/10`;
        }

        reset() {
          if (this.isMyPlayer) {
            this.progressBar.progress = 0;
            this.txtProgress.string = `0/10`;
          } else {
            this.progressBar.progress = 0;
            this.txtProgress.string = `0/10`;
            this.txtName.string = "";
            this.avatar.spriteFrame = this.sfAvatarDefault;
            this.iconLoading.active = true;
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "avatar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconLoading", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sfAvatarDefault", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txtName", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txtProgress", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "isMyPlayer", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
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
//# sourceMappingURL=ItemPlayerRaceProgress.js.map