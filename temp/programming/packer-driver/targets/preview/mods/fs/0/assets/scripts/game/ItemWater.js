System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, CCInteger, Component, Node, ProgressBar, Sprite, tween, UIOpacity, Vec3, localConfig, WATER_STATE, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _temp, _crd, ccclass, property, ItemWater;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWATER_STATE(extras) {
    _reporterNs.report("WATER_STATE", "../framework/constants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      localConfig = _unresolved_2.localConfig;
    }, function (_unresolved_3) {
      WATER_STATE = _unresolved_3.WATER_STATE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57ccb1Zs59FoYpxCAujj6IK", "ItemWater", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemWater
       * DateTime = Tue Jul 23 2024 17:22:06 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemWater.ts
       * FileBasenameNoExtension = ItemWater
       * URL = db://assets/scripts/game/ItemWater.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemWater", ItemWater = (_dec = ccclass('ItemWater'), _dec2 = property(CCInteger), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(UIOpacity), _dec6 = property(Sprite), _dec7 = property(Sprite), _dec8 = property(Sprite), _dec9 = property(Sprite), _dec10 = property(UIOpacity), _dec11 = property(Sprite), _dec12 = property(Sprite), _dec13 = property(UIOpacity), _dec14 = property(Node), _dec15 = property(ProgressBar), _dec16 = property(typeof (_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
        error: Error()
      }), WATER_STATE) : WATER_STATE)), _dec(_class = (_class2 = (_temp = class ItemWater extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "indexColor", -1);

          _initializerDefineProperty(this, "indexWater", _descriptor, this);

          _initializerDefineProperty(this, "icon", _descriptor2, this);

          _initializerDefineProperty(this, "iconLock", _descriptor3, this);

          _initializerDefineProperty(this, "iconLock_Opacity", _descriptor4, this);

          _initializerDefineProperty(this, "iconFix", _descriptor5, this);

          _initializerDefineProperty(this, "iconFixLock", _descriptor6, this);

          _initializerDefineProperty(this, "iconBottom", _descriptor7, this);

          _initializerDefineProperty(this, "iconBottomLock", _descriptor8, this);

          _initializerDefineProperty(this, "iconBottomLock_Opactity", _descriptor9, this);

          _initializerDefineProperty(this, "iconTop", _descriptor10, this);

          _initializerDefineProperty(this, "iconTopLock", _descriptor11, this);

          _initializerDefineProperty(this, "iconTopLock_Opactity", _descriptor12, this);

          _initializerDefineProperty(this, "nodeLock", _descriptor13, this);

          _defineProperty(this, "tween_Scale", null);

          _defineProperty(this, "tween_Move", null);

          _defineProperty(this, "tweenOpacity_Unlock", null);

          _defineProperty(this, "tweenBOTTOM_Scale", null);

          _defineProperty(this, "tweenBOTTOM_Move", null);

          _defineProperty(this, "tweenBOTTOMOpacity_Unlock", null);

          _defineProperty(this, "tweenTOP_Scale", null);

          _defineProperty(this, "tweenTOP_Move", null);

          _defineProperty(this, "tweenTOPOpacity_Unlock", null);

          _initializerDefineProperty(this, "waterProgressBar", _descriptor14, this);

          _initializerDefineProperty(this, "waterState", _descriptor15, this);

          _defineProperty(this, "TIME_MOVE_TO_TARGET", 2);

          _defineProperty(this, "initScaleTOP", 1);

          _defineProperty(this, "initScaleBOTTOM", 1);

          _defineProperty(this, "initScaleTOPY", 1);
        }

        initIndexColor(_indexColor) {
          // console.log("initIndexColor:"+_indexColor);
          this.indexColor = _indexColor;
          this.icon.color = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getWaterColor_byID(this.indexColor);

          if (this.iconFix) {
            this.iconFix.color = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getWaterColor_byID(this.indexColor);
          }

          if (this.iconBottom) {
            this.iconBottom.color = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getWaterColor_byID(this.indexColor);
          }

          this.iconTop.color = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getWaterTOPColor_byID(this.indexColor);
        }

        initMagicIndexColor(_indexColor) {
          if (_indexColor == -1) return; // console.log("initMagicIndexColor:"+_indexColor,localConfig.instance.getMagicColor_byID(_indexColor));

          this.indexColor = _indexColor;
          this.icon.color = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getMagicColor_byID(this.indexColor);

          if (this.iconFix) {
            this.iconFix.color = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getMagicColor_byID(this.indexColor);
          }

          if (this.iconBottom) {
            this.iconBottom.color = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getMagicColor_byID(this.indexColor);
          }

          this.iconTop.color = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getMagicTOPColor_byID(this.indexColor);
        }

        initWaterLock(_waterState) {
          // if(localConfig.instance.isWaterLock && this.indexWater < 3 && this.indexColor != -1){
          //     this.waterState = WATER_STATE.LOCK;
          // }else{
          //     this.waterState = WATER_STATE.NONE;
          // }
          this.waterState = _waterState;
          this.showWaterLock();
        }

        showWaterLock() {
          if (this.waterState == (_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
            error: Error()
          }), WATER_STATE) : WATER_STATE).NONE) {
            if (this.iconBottomLock) {
              this.iconBottomLock.node.active = false;
            }

            this.iconLock.node.active = false;

            if (this.iconFixLock) {
              this.iconFixLock.node.active = false;
            }

            this.iconTopLock.node.active = false;
            this.nodeLock.active = false;
          } else {
            if (this.iconBottomLock) {
              this.iconBottomLock.node.active = true;
            }

            this.iconLock.node.active = true;

            if (this.iconFixLock) {
              this.iconFixLock.node.active = true;
            }

            this.iconTopLock.node.active = true;
            this.nodeLock.active = true;
          }
        }

        updateIndexColor(_indexColor) {
          // console.log("updateIndexColor:"+_indexColor);
          this.indexColor = _indexColor;
          this.icon.color = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getWaterColor_byID(this.indexColor);

          if (this.iconFix) {
            this.iconFix.color = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getWaterColor_byID(this.indexColor);
          }

          if (this.iconBottom) {
            this.iconBottom.color = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getWaterColor_byID(this.indexColor);
          }

          this.iconTop.color = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getWaterTOPColor_byID(this.indexColor);
        }

        updateMagicIndexColor(_indexColor) {
          // console.log("updateIndexColor:"+_indexColor);
          this.indexColor = _indexColor;
          this.icon.color = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getMagicColor_byID(this.indexColor);

          if (this.iconFix) {
            this.iconFix.color = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getMagicColor_byID(this.indexColor);
          }

          if (this.iconBottom) {
            this.iconBottom.color = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getMagicColor_byID(this.indexColor);
          }

          this.iconTop.color = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getMagicTOPColor_byID(this.indexColor);
        }

        setUndoIndexColor_Update(_indexColor, _isWaterLock) {
          if (_indexColor != this.indexColor) {
            this.updateIndexColor(_indexColor);

            if (this.indexColor == -1) {
              this.setWaterOFF_Now();
            } else {
              this.setWaterON_Now();
            }

            if (_isWaterLock) {
              this.waterState = (_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
                error: Error()
              }), WATER_STATE) : WATER_STATE).LOCK;
              this.showWaterLock();
            }
          }
        }

        setUndoMagicIndexColor_Update(_indexColor, _isWaterLock) {
          // console.log("setUndoMagicIndexColor_Update",_indexColor,_isWaterLock);
          if (_indexColor != this.indexColor) {
            this.updateMagicIndexColor(_indexColor);

            if (this.indexColor == -1) {
              this.setWaterOFF_Now();
            } else {
              // console.error("setWaterON_NowsetWaterON_NowsetWaterON_Now");
              this.setWaterON_Now();

              if (_isWaterLock) {
                this.waterState = (_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
                  error: Error()
                }), WATER_STATE) : WATER_STATE).LOCK;
                this.showWaterLock();
              }
            }
          }
        }

        resetIndexColor() {
          this.indexColor = -1;
        }

        initScale(scaleTOP, scaleBOTTOM, scaleInitTop) {
          // console.log(scaleTOP,scaleBOTTOM)
          this.initScaleTOP = scaleTOP;
          this.initScaleBOTTOM = scaleBOTTOM;
          this.initScaleTOPY = scaleInitTop;
          this.iconTop.node.setScale(new Vec3(scaleTOP, this.initScaleTOPY, 1));
          this.iconTopLock.node.setScale(new Vec3(scaleTOP, this.initScaleTOPY, 1));

          if (this.iconBottom) {
            this.iconBottom.node.setScale(new Vec3(scaleBOTTOM, this.initScaleTOPY, 1));
          }

          if (this.iconBottomLock) {
            this.iconBottomLock.node.setScale(new Vec3(scaleBOTTOM, this.initScaleTOPY, 1));
          }
        }

        showIconTOP(isShow) {
          this.iconTop.node.active = isShow;

          if (this.waterState == (_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
            error: Error()
          }), WATER_STATE) : WATER_STATE).LOCK) {
            this.iconTopLock.node.active = true;
          }
        }

        initMoveToTarget() {
          if (this.waterState == (_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
            error: Error()
          }), WATER_STATE) : WATER_STATE).LOCK) {
            this.nodeLock.active = false;
          }
        } //#region MOVE TO TARGET


        updateMoveToTarget(scaleTOP, posTOP_x, scaleBOTTOM, posBOTTOM_x, scaleWaterY) {
          if (this.node.active) {
            // console.log(this.indexWater);
            this.iconTop.node.setScale(new Vec3(scaleTOP, scaleWaterY, 0));
            this.iconTop.node.setPosition(posTOP_x, 95, 0);

            if (this.iconBottom) {
              this.iconBottom.node.setScale(new Vec3(scaleBOTTOM, scaleWaterY, 0));
              this.iconBottom.node.setPosition(posBOTTOM_x, 0, 0);
            }

            if (this.waterState == (_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
              error: Error()
            }), WATER_STATE) : WATER_STATE).LOCK) {}
          }
        } //#endregion
        //#region WATER CHANGE


        updateWaterChange(scaleTOP, posTOP_x, scaleBOTTOM, posBOTTOM_x, scaleWaterY) {
          if (this.node.active) {
            // console.log(this.indexWater);
            this.iconTop.node.setScale(new Vec3(scaleTOP, scaleWaterY, 0));
            this.iconTop.node.setPosition(posTOP_x, 95, 0);

            if (this.iconBottom) {
              this.iconBottom.node.setScale(new Vec3(scaleBOTTOM, scaleWaterY, 0));
              this.iconBottom.node.setPosition(posBOTTOM_x, 0, 0);
            }

            if (this.waterState == (_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
              error: Error()
            }), WATER_STATE) : WATER_STATE).LOCK) {}
          }
        } //#endregion
        //#region OFF


        updateWaterOFF(scaleTOP, posTOP_x, scaleBOTTOM, posBOTTOM_x, scaleWaterY, indexTubeON, progress) {
          if (this.node.active) {
            // console.log("updateWaterOFF",this.indexWater,scaleTOP,posTOP_x,scaleBOTTOM,posBOTTOM_x,scaleWaterY,indexTubeON,progress);
            this.iconTop.node.setScale(new Vec3(scaleTOP, scaleWaterY, 0));

            if (this.indexWater == 4 - indexTubeON) {
              this.waterProgressBar.progress = progress;
              this.iconTop.node.setPosition(posTOP_x, 95 * progress, 0); // console.log("iconTop",this.iconTop.node.position.y);
            } else {
              this.iconTop.node.setPosition(posTOP_x, 95, 0);
            }

            if (this.iconBottom) {
              this.iconBottom.node.setScale(new Vec3(scaleBOTTOM, scaleWaterY, 0));
              this.iconBottom.node.setPosition(posBOTTOM_x, 0, 0);
            }
          }
        }

        setWaterOFF_Finished() {
          if (this.waterState == (_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
            error: Error()
          }), WATER_STATE) : WATER_STATE).LOCK) {
            this.nodeLock.active = true;
          }
        } //#endregion
        //#region OFF NOW


        setWaterOFF_Now() {
          // console.log("setWaterOFF_Now",this.initScaleBOTTOM);
          // this.indexColor = -1;
          this.iconTop.node.setScale(new Vec3(this.initScaleBOTTOM, this.initScaleTOPY, 1));
          this.iconTop.node.setPosition(0, 0, 0);

          if (this.iconBottom) {
            this.iconBottom.node.setScale(new Vec3(this.initScaleBOTTOM, this.initScaleTOPY, 1));
            this.iconBottom.node.setPosition(0, 0, 0);
          }

          this.waterProgressBar.progress = 0; // console.log("setWaterOFF_Now",this.iconTop.node.position);
        } //#endregion
        //#region WATER ON


        setWaterON_Now() {
          this.iconTop.node.setScale(new Vec3(this.initScaleTOP, this.initScaleTOPY, 1));
          this.iconTop.node.setPosition(0, 95, 0);

          if (this.iconBottom) {
            this.iconBottom.node.setScale(new Vec3(this.initScaleBOTTOM, this.initScaleTOPY, 1));
            this.iconBottom.node.setPosition(0, 0, 0);
          }

          this.waterProgressBar.progress = 1;
        }

        updateWaterON(scaleTOP, posTOP_y, progress) {
          this.iconTop.node.setScale(new Vec3(scaleTOP, this.initScaleTOPY, 0));
          this.iconTop.node.setPosition(0, posTOP_y, 0);
          this.waterProgressBar.progress = progress;
        } //#endregion


        setWaterUnlock() {
          this.nodeLock.active = false;

          if (this.iconFixLock) {
            this.iconFixLock.node.active = false;
          }

          this.tweenOpacity_Unlock = tween(this.iconLock_Opacity).delay(0.1).to(0.2, {
            opacity: 0
          }, {
            easing: 'quadOut',
            onComplete: () => {
              this.setWaterUnlock_Finished();
            }
          }).start();
          this.tweenTOPOpacity_Unlock = tween(this.iconTopLock_Opactity).delay(0.1).to(0.2, {
            opacity: 0
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();

          if (this.iconBottomLock_Opactity) {
            this.tweenBOTTOMOpacity_Unlock = tween(this.iconBottomLock_Opactity).delay(0.1).to(0.2, {
              opacity: 0
            }, {
              easing: 'quadOut',
              onComplete: () => {}
            }).start();
          }
        }

        setWaterUnlock_Finished() {
          this.nodeLock.active = false;

          if (this.iconBottomLock) {
            this.iconBottomLock.node.active = false;
          }

          this.iconTopLock.node.active = false;
          this.iconLock.node.active = false;

          if (this.iconFixLock) {
            this.iconFixLock.node.active = false;
          }

          this.iconLock_Opacity.opacity = 255;
          this.iconTopLock_Opactity.opacity = 255;
          this.waterState = (_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
            error: Error()
          }), WATER_STATE) : WATER_STATE).NONE;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "indexWater", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconLock", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "iconLock_Opacity", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "iconFix", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "iconFixLock", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "iconBottom", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "iconBottomLock", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "iconBottomLock_Opactity", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "iconTop", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "iconTopLock", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "iconTopLock_Opactity", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "nodeLock", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "waterProgressBar", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "waterState", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
            error: Error()
          }), WATER_STATE) : WATER_STATE).NONE;
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
//# sourceMappingURL=ItemWater.js.map