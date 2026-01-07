System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Color, Component, Label, Node, sp, Sprite, tween, Vec3, LEVEL_STATE, localConfig, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, ItemLevel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLEVEL_STATE(extras) {
    _reporterNs.report("LEVEL_STATE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelConfigInfo(extras) {
    _reporterNs.report("LevelConfigInfo", "../newlevel/LevelConfigInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      LEVEL_STATE = _unresolved_2.LEVEL_STATE;
    }, function (_unresolved_3) {
      localConfig = _unresolved_3.localConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "854e2j+rGNA858cnZZfK2Dk", "ItemLevel", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemLevel
       * DateTime = Wed Oct 16 2024 05:14:04 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemLevel.ts
       * FileBasenameNoExtension = ItemLevel
       * URL = db://assets/scripts/game/ItemLevel.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemLevel", ItemLevel = (_dec = ccclass('ItemLevel'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Sprite), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(sp.Skeleton), _dec(_class = (_class2 = (_temp = class ItemLevel extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "objGroup", _descriptor, this);

          _initializerDefineProperty(this, "objLock", _descriptor2, this);

          _initializerDefineProperty(this, "iconLock", _descriptor3, this);

          _initializerDefineProperty(this, "txtLevel", _descriptor4, this);

          _initializerDefineProperty(this, "objFinsihed", _descriptor5, this);

          _initializerDefineProperty(this, "skeleton", _descriptor6, this);

          _defineProperty(this, "level", 0);
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        initLevel(level, state) {
          this.level = level; // console.log("level",level);

          if (level < 1) {
            this.objGroup.active = false;
            return;
          }

          this.txtLevel.string = "" + this.level; // console.log("level",level);

          var levelConfigInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getMagicLevelConfigInfo_byLevelIndex(level);

          if (levelConfigInfo != null && levelConfigInfo.isSuperHard) {
            // console.log("star");
            this.skeleton.node.active = true;
            this.skeleton.setAnimation(0, "star", true);
          } else if (levelConfigInfo != null && levelConfigInfo.isHard) {
            this.skeleton.node.active = true;
            this.skeleton.setAnimation(0, "fire", true);
          } else {
            this.skeleton.node.active = false;
          }

          var posX = 0;

          if (this.level % 2 == 1) {
            posX = 0;
          } else if (this.level % 4 == 0) {
            posX = -180;
          } else {
            posX = 180;
          }

          this.objGroup.setPosition(new Vec3(posX, 0, 0));

          if (state == (_crd && LEVEL_STATE === void 0 ? (_reportPossibleCrUseOfLEVEL_STATE({
            error: Error()
          }), LEVEL_STATE) : LEVEL_STATE).ACTIVE) {
            this.txtLevel.color = new Color(214, 255, 0, 255);
          } else {
            this.txtLevel.color = new Color(255, 137, 58, 150);
          }

          this.objLock.active = false;
          this.objFinsihed.active = false;

          if (state == (_crd && LEVEL_STATE === void 0 ? (_reportPossibleCrUseOfLEVEL_STATE({
            error: Error()
          }), LEVEL_STATE) : LEVEL_STATE).FINISHED) {
            this.objFinsihed.active = true;
          } else if (state == (_crd && LEVEL_STATE === void 0 ? (_reportPossibleCrUseOfLEVEL_STATE({
            error: Error()
          }), LEVEL_STATE) : LEVEL_STATE).LOCK) {
            this.objLock.active = true;
            this.iconLock.node.active = false;
          }
        }

        setFinsihed() {
          this.objFinsihed.active = true;
          this.objFinsihed.setScale(new Vec3(0, 0, 0));
          tween(this.objFinsihed).to(0.3, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut',
            onComplete: () => {
              this.txtLevel.color = new Color(255, 137, 58, 255);
            }
          }).start();
        }

        setActive() {
          this.objLock.active = false;
          this.objFinsihed.active = false;
          this.txtLevel.color = new Color(214, 255, 0, 255);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "objGroup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "objLock", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconLock", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txtLevel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "objFinsihed", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "skeleton", [_dec7], {
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
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ItemLevel.js.map