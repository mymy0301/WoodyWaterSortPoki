System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Color, Component, Graphics, Mask, Node, ProgressBar, Sprite, SpriteFrame, tween, UIOpacity, UITransform, Vec2, Vec3, ItemWater, localConfig, Utils, Constants, GAME_MODE, GAME_STATE, ITEM_TUBE_STATE, THEME_TYPE, WATER_STATE, clientEvent, AudioManager2, FBInstantManager, ItemTubeOBIMObj, ItemTubeClayObj, ItemTubePlasterObj, lodash, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _temp, _crd, ccclass, property, ItemTube;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItemWater(extras) {
    _reporterNs.report("ItemWater", "./ItemWater", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemTubeConfig(extras) {
    _reporterNs.report("ItemTubeConfig", "./info/ItemTubeConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemTubePolygonConfig(extras) {
    _reporterNs.report("ItemTubePolygonConfig", "./info/ItemTubePolygonConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../core/utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGAME_MODE(extras) {
    _reporterNs.report("GAME_MODE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGAME_STATE(extras) {
    _reporterNs.report("GAME_STATE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfITEM_TUBE_STATE(extras) {
    _reporterNs.report("ITEM_TUBE_STATE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTHEME_TYPE(extras) {
    _reporterNs.report("THEME_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWATER_STATE(extras) {
    _reporterNs.report("WATER_STATE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager2", "../framework/audioManager2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "../common/FBInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemTubeOBIMObj(extras) {
    _reporterNs.report("ItemTubeOBIMObj", "./ItemTubeOBIMObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMagicBInfo(extras) {
    _reporterNs.report("MagicBInfo", "../newlevel/MagicLevelDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMagicOBIMInfo(extras) {
    _reporterNs.report("MagicOBIMInfo", "../newlevel/MagicLevelDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemTubeClayObj(extras) {
    _reporterNs.report("ItemTubeClayObj", "./ItemTubeClayObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemTubePlasterObj(extras) {
    _reporterNs.report("ItemTubePlasterObj", "./ItemTubePlasterObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOflodash(extras) {
    _reporterNs.report("lodash", "../framework/lodash", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Color = _cc.Color;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
      Mask = _cc.Mask;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ItemWater = _unresolved_2.ItemWater;
    }, function (_unresolved_3) {
      localConfig = _unresolved_3.localConfig;
    }, function (_unresolved_4) {
      Utils = _unresolved_4.default;
    }, function (_unresolved_5) {
      Constants = _unresolved_5.Constants;
      GAME_MODE = _unresolved_5.GAME_MODE;
      GAME_STATE = _unresolved_5.GAME_STATE;
      ITEM_TUBE_STATE = _unresolved_5.ITEM_TUBE_STATE;
      THEME_TYPE = _unresolved_5.THEME_TYPE;
      WATER_STATE = _unresolved_5.WATER_STATE;
    }, function (_unresolved_6) {
      clientEvent = _unresolved_6.clientEvent;
    }, function (_unresolved_7) {
      AudioManager2 = _unresolved_7.AudioManager2;
    }, function (_unresolved_8) {
      FBInstantManager = _unresolved_8.FBInstantManager;
    }, function (_unresolved_9) {
      ItemTubeOBIMObj = _unresolved_9.ItemTubeOBIMObj;
    }, function (_unresolved_10) {
      ItemTubeClayObj = _unresolved_10.ItemTubeClayObj;
    }, function (_unresolved_11) {
      ItemTubePlasterObj = _unresolved_11.ItemTubePlasterObj;
    }, function (_unresolved_12) {
      lodash = _unresolved_12.lodash;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e8490z8UxVLwY2ArhmcESKV", "ItemTube", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemTube
       * DateTime = Tue Jul 23 2024 17:21:29 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemTube.ts
       * FileBasenameNoExtension = ItemTube
       * URL = db://assets/scripts/game/ItemTube.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemTube", ItemTube = (_dec = ccclass('ItemTube'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Mask), _dec5 = property(Sprite), _dec6 = property(Button), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(_crd && ItemWater === void 0 ? (_reportPossibleCrUseOfItemWater({
        error: Error()
      }), ItemWater) : ItemWater), _dec12 = property(Sprite), _dec13 = property(ProgressBar), _dec14 = property(Sprite), _dec15 = property(UIOpacity), _dec16 = property(SpriteFrame), _dec17 = property(SpriteFrame), _dec18 = property(Node), _dec19 = property(Sprite), _dec20 = property(_crd && ItemTubeOBIMObj === void 0 ? (_reportPossibleCrUseOfItemTubeOBIMObj({
        error: Error()
      }), ItemTubeOBIMObj) : ItemTubeOBIMObj), _dec21 = property(_crd && ItemTubeClayObj === void 0 ? (_reportPossibleCrUseOfItemTubeClayObj({
        error: Error()
      }), ItemTubeClayObj) : ItemTubeClayObj), _dec22 = property(_crd && ItemTubePlasterObj === void 0 ? (_reportPossibleCrUseOfItemTubePlasterObj({
        error: Error()
      }), ItemTubePlasterObj) : ItemTubePlasterObj), _dec(_class = (_class2 = (_temp = class ItemTube extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "tubeX", 0);

          _defineProperty(this, "tubeY", 0);

          _initializerDefineProperty(this, "iconHover_Bottom", _descriptor, this);

          _initializerDefineProperty(this, "iconHover_Top", _descriptor2, this);

          _initializerDefineProperty(this, "iconMask", _descriptor3, this);

          _initializerDefineProperty(this, "iconTop", _descriptor4, this);

          _initializerDefineProperty(this, "btnTube", _descriptor5, this);

          _initializerDefineProperty(this, "groupTube", _descriptor6, this);

          _initializerDefineProperty(this, "groupPivot", _descriptor7, this);

          _initializerDefineProperty(this, "groupAllItemRotate", _descriptor8, this);

          _initializerDefineProperty(this, "groupAllItemMove", _descriptor9, this);

          _initializerDefineProperty(this, "arrItemWaters", _descriptor10, this);

          _initializerDefineProperty(this, "waterLine", _descriptor11, this);

          _initializerDefineProperty(this, "progressBar_waterON", _descriptor12, this);

          _defineProperty(this, "TIME_MOVE_TO_TARGET", .4);

          _defineProperty(this, "TIME_POUR_INDDEX", .3);

          _defineProperty(this, "TIME_MOVE_BACK", .4);

          _defineProperty(this, "posPivot_Right", new Vec3(-68, -191, 0));

          _defineProperty(this, "posPivot_Left", new Vec3(68, -191, 0));

          _defineProperty(this, "tweenPivot", null);

          _defineProperty(this, "tweenTube", null);

          _defineProperty(this, "tweenAllItemRotate", null);

          _defineProperty(this, "tweenAllItemMove", null);

          _defineProperty(this, "tweenProgressON", null);

          _defineProperty(this, "currState", (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).NONE);

          _defineProperty(this, "arrPoints", []);

          _initializerDefineProperty(this, "iconCover", _descriptor13, this);

          _initializerDefineProperty(this, "coverOpacity", _descriptor14, this);

          _defineProperty(this, "tweenIconCover", null);

          _defineProperty(this, "tweenCoverOpacity", null);

          _defineProperty(this, "tweenAddCol", null);

          _defineProperty(this, "magicBInfo", null);

          _defineProperty(this, "countItemWaterActive", 0);

          _defineProperty(this, "graphics", null);

          _defineProperty(this, "isOnStepbyStep", false);

          _initializerDefineProperty(this, "tut_v_SpriteFrame", _descriptor15, this);

          _initializerDefineProperty(this, "tut_x_SpriteFrame", _descriptor16, this);

          _initializerDefineProperty(this, "tutCheck", _descriptor17, this);

          _initializerDefineProperty(this, "tutCheck_Sprite", _descriptor18, this);

          _initializerDefineProperty(this, "itemTubeOBIMObj", _descriptor19, this);

          _initializerDefineProperty(this, "itemTubeClayObj", _descriptor20, this);

          _defineProperty(this, "isTubeClay", false);

          _initializerDefineProperty(this, "itemTubePlasterObj", _descriptor21, this);

          _defineProperty(this, "tweenShuffle", null);
        }

        start() {// this.drawPolygon();
        } // update (deltaTime: number) {
        //     // [4]
        // }


        onEnable() {
          this.btnTube.node.on(Node.EventType.TOUCH_START, this.touchItemTube, this); // this.btnTube.node.on(Node.EventType.TOUCH_CANCEL,this.touchEndItemTube,this);
          // this.btnTube.node.on(Node.EventType.TOUCH_END, this.touchEndItemTube, this);
          // this.btnTube.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMoveItemTube, this);
        }

        onDisable() {
          this.btnTube.node.on(Node.EventType.TOUCH_START, this.touchItemTube, this); // this.btnTube.node.off(Node.EventType.TOUCH_CANCEL,this.touchEndItemTube,this);
          // this.btnTube.node.off(Node.EventType.TOUCH_END, this.touchEndItemTube, this);
          // this.btnTube.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMoveItemTube, this);
        }

        initItemTube(_tubeX, _tubeY, _arrIndexColors) {
          this.loadTube();
          this.tubeX = _tubeX;
          this.tubeY = _tubeY;
          var posTube = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getPosTube_byXY((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelDataInfo, this.tubeX, this.tubeY);
          this.node.setPosition(new Vec3(posTube.x, posTube.y, 0)); // console.log("_arrIndexColors:",_arrIndexColors);

          var countIndexColor_SameHeadIndexColor = this.getCountIndexColor_SameHeadIndexColor(_arrIndexColors); // console.log("countIndexColor_SameHeadIndexColor:",countIndexColor_SameHeadIndexColor);

          for (var i = 0; i < this.arrItemWaters.length; i++) {
            var waterState = (_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
              error: Error()
            }), WATER_STATE) : WATER_STATE).NONE;

            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.isWaterLock && i < 3 - countIndexColor_SameHeadIndexColor) {
              waterState = (_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
                error: Error()
              }), WATER_STATE) : WATER_STATE).LOCK;
            }

            if (i < _arrIndexColors.length) {
              this.arrItemWaters[i].initIndexColor(_arrIndexColors[i]);
              this.arrItemWaters[i].initWaterLock(waterState);
              this.arrItemWaters[i].node.active = true;
            } else {
              this.arrItemWaters[i].initIndexColor(-1);
              this.arrItemWaters[i].initWaterLock((_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
                error: Error()
              }), WATER_STATE) : WATER_STATE).NONE);
              this.arrItemWaters[i].node.active = false;
            }
          }

          this.initItemWaterScale();
          this.waterLine.node.active = false;
          this.iconCover.node.active = false;
          this.coverOpacity.opacity = 0;
          this.updateCountItemWater(_arrIndexColors.length);
          this.setBottle_Touch_Available(true);
        }

        initMagicItemTube(_magicBInfo, _tubeX, _tubeY, _arrIndexColors, _arrWaterLocks) {
          // console.error("_arrWaterLocks:",_arrWaterLocks);
          // console.error("_arrIndexColors:",_arrIndexColors);
          this.magicBInfo = _magicBInfo;
          this.loadTube();
          this.tubeX = _tubeX;
          this.tubeY = _tubeY;
          var posTube = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getMagicPosTube_byXY((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currMagicLevelConfigInfo, this.tubeX, this.tubeY);
          this.node.setPosition(new Vec3(posTube.x, posTube.y, 0));

          for (var i = 0; i < this.arrItemWaters.length; i++) {
            if (i < _arrIndexColors.length) {
              this.arrItemWaters[i].initMagicIndexColor(_arrIndexColors[i]);
              this.arrItemWaters[i].initWaterLock(_arrWaterLocks[i]);
              this.arrItemWaters[i].node.active = true;
            } else {
              this.arrItemWaters[i].initMagicIndexColor(-1);
              this.arrItemWaters[i].initWaterLock((_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
                error: Error()
              }), WATER_STATE) : WATER_STATE).NONE);
              this.arrItemWaters[i].node.active = false;
            }
          }

          this.initItemWaterScale();
          this.waterLine.node.active = false;
          this.iconCover.node.active = false;
          this.coverOpacity.opacity = 0;
          this.updateCountItemWater(_arrIndexColors.length);
          this.setBottle_Touch_Available(true);
          this.itemTubeOBIMObj.node.active = false;
          this.itemTubeClayObj.node.active = false;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameMode == (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).TOURNAMENT) {} else {
            if (this.magicBInfo.OBIM && this.magicBInfo.OBIM.length > 0) {
              var magicOBIMInfo = this.magicBInfo.OBIM[0];

              if (magicOBIMInfo.CI == -1) {
                this.initMagicClayObj(magicOBIMInfo);
              } else if (magicOBIMInfo.Obj) {
                this.initMagicOBIMObj(magicOBIMInfo);
              } else if (magicOBIMInfo.CI == 0) {
                this.initMagicPlasterObj(magicOBIMInfo);
              }
            }
          }
        }

        loadTube() {// let pathHoverBottom:string = localConfig.instance.getPathHoverBottom_byIndexTube(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.TUBE));
          // // console.log("pathHoverBottom",pathHoverBottom);
          // resourceUtil.loadSpriteFrame_Bundle(pathHoverBottom, (err, spriteFrame) => {
          //     if (err) {
          //         console.error(err);
          //     } else {
          //         this.iconHover_Bottom.spriteFrame = spriteFrame;
          //     }
          // });
          // let patchHoverTop:string = localConfig.instance.getPathHoverTop_byIndexTube(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.TUBE));
          // resourceUtil.loadSpriteFrame_Bundle(patchHoverTop, (err, spriteFrame) => {
          //     if (err) {
          //         console.error(err);
          //     } else {
          //         this.iconHover_Top.spriteFrame = spriteFrame;
          //     }
          // });
          // let pathCover:string = localConfig.instance.getPathTop_byIndexTube(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.TUBE));    
          // resourceUtil.loadSpriteFrame_Bundle(pathCover, (err, spriteFrame) => {
          //     if (err) {
          //         console.error(err);
          //     } else {                
          //         this.iconCover.spriteFrame = spriteFrame;
          //     }
          // });
          // let pathMask:string = localConfig.instance.getPathMask_byIndexTube(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.TUBE));    
          // resourceUtil.loadSpriteFrame_Bundle(pathMask, (err, spriteFrame) => {
          //     if (err) {
          //         console.error(err);
          //     } else {                
          //         this.iconMask.spriteFrame = spriteFrame;
          //     }
          // });
        }

        updatePos() {
          var posTube = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getPosTube_byXY((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelDataInfo, this.tubeX, this.tubeY);
          this.node.setPosition(new Vec3(posTube.x, posTube.y, 0));
        }

        updateMagicPos() {
          var posTube = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getMagicPosTube_byXY((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currMagicLevelConfigInfo, this.tubeX, this.tubeY);
          this.node.setPosition(new Vec3(posTube.x, posTube.y, 0));
        }

        updateCountItemWater(countItemWater) {
          this.countItemWaterActive = countItemWater; // console.log("updateCountItemWater:"+this.countItemWaterActive);

          for (var i = 0; i < this.arrItemWaters.length; i++) {
            if (i < countItemWater) {
              this.arrItemWaters[i].node.active = true;

              if (i == countItemWater - 1) {
                this.arrItemWaters[i].showIconTOP(true);
              } else {
                this.arrItemWaters[i].showIconTOP(false);
              }
            } else {
              this.arrItemWaters[i].node.active = false;
              this.arrItemWaters[i].setWaterOFF_Now();
            }
          }
        }

        initItemWaterScale() {
          var itemTubePolygonConfig = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getItemTubePolygonConfig_byIndexTube((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getThemeSelected_byThemeType((_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).TUBE) - 1);

          for (var i = 0; i < itemTubePolygonConfig.arrPoints.length - 1; i++) {
            this.arrPoints.push(itemTubePolygonConfig.arrPoints[i]);
          }

          this.arrPoints.push(itemTubePolygonConfig.arrPoints[itemTubePolygonConfig.arrPoints.length - 1]);

          for (var _i = itemTubePolygonConfig.arrPoints.length - 2; _i >= 0; _i--) {
            var point = itemTubePolygonConfig.arrPoints[_i];
            this.arrPoints.push(new Vec2(-point.x, point.y));
          }

          for (var _i2 = 0; _i2 < this.arrItemWaters.length; _i2++) {
            var pointCheckTOP = new Vec2(0, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getItemWater_TOP_PosY(_i2));
            var pointCheckBOTTOM = new Vec2(0, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getItemWater_PosY(_i2));
            var intersectionsTOP = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).getPolygonIntersection(pointCheckTOP, 0, this.arrPoints);
            var scaleTOP = 1; // console.log(intersectionsTOP);

            if (intersectionsTOP.length >= 2) {
              scaleTOP = Math.abs(intersectionsTOP[1].x - intersectionsTOP[0].x) / (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.ITEMWATER_WIDTH;
            }

            var intersectionsBOTTOM = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).getPolygonIntersection(pointCheckBOTTOM, 0, this.arrPoints);
            var scaleBOTTOM = 1; // console.log(intersectionsBOTTOM);

            if (intersectionsBOTTOM.length >= 2) {
              scaleBOTTOM = Math.abs(intersectionsBOTTOM[1].x - intersectionsBOTTOM[0].x) / (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.ITEMWATER_WIDTH;
            }

            var itemTubeConfig = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getItemTubeConfig_byIndexTube((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getThemeSelected_byThemeType((_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
              error: Error()
            }), THEME_TYPE) : THEME_TYPE).TUBE) - 1);
            var scaleInitTop = itemTubeConfig.arrScaleInitTops[_i2];

            this.arrItemWaters[_i2].initScale(scaleTOP, scaleBOTTOM, scaleInitTop);
          }
        }

        drawPolygon() {
          var itemTubePolygonConfig = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getItemTubePolygonConfig_byIndexTube((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getThemeSelected_byThemeType((_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).TUBE) - 1);
          var arrPoints = [];

          for (var i = 0; i < itemTubePolygonConfig.arrPoints.length - 1; i++) {
            arrPoints.push(itemTubePolygonConfig.arrPoints[i]);
          }

          arrPoints.push(itemTubePolygonConfig.arrPoints[itemTubePolygonConfig.arrPoints.length - 1]);

          for (var _i3 = itemTubePolygonConfig.arrPoints.length - 2; _i3 >= 0; _i3--) {
            var point = itemTubePolygonConfig.arrPoints[_i3];
            arrPoints.push(new Vec2(-point.x, point.y));
          } // console.log(arrPoints);


          var arrRotatePoints = [];

          for (var _i4 = 0; _i4 < arrPoints.length; _i4++) {
            var newPoint = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).rotatePointBack(arrPoints[_i4], new Vec2(0, 0), 44);
            arrRotatePoints.push(newPoint);
          }

          this.graphics = this.node.addComponent(Graphics);
          this.graphics.strokeColor = new Color(255, 0, 0);
          this.graphics.lineWidth = 10; // Xóa bất kỳ hình dạng nào trước đó

          this.graphics.clear();
          this.graphics.moveTo(arrRotatePoints[0].x, arrRotatePoints[0].y);

          for (var _i5 = 1; _i5 < arrRotatePoints.length; _i5++) {
            this.graphics.lineTo(arrRotatePoints[_i5].x, arrRotatePoints[_i5].y);
          } // Kết thúc và vẽ đường


          this.graphics.close(); // Nếu muốn khép kín hình dạng

          this.graphics.stroke();
          var pointCheck = new Vec2(0, 95); // let newPointCheck:Vec2 = Utils.rotatePointBack(pointCheck,new Vec2(0,0),44);
          // console.log(newPointCheck);

          pointCheck.y = (110 + 3) * 0.81; // console.log(pointCheck);

          this.graphics.moveTo(-1000, pointCheck.y);
          this.graphics.lineTo(1000, pointCheck.y);
          this.graphics.stroke();
          var intersections = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).getPolygonIntersection(pointCheck, 0, arrRotatePoints); // console.log(intersections);

          if (intersections.length >= 2) {
            var scaleX = Math.abs(intersections[1].x - intersections[0].x) / 126;
            var posX = (intersections[1].x - intersections[0].x) / 2; // console.log(scaleX,posX);
          } // for(let i=0; i< intersections.length;i++){
          //     console.log(Utils.rotatePointBack(intersections[i],new Vec2(0,0),44));
          // }

        }

        initGraphicsTest() {
          this.graphics = this.node.addComponent(Graphics);
          this.graphics.strokeColor = new Color(255, 0, 0);
          this.graphics.lineWidth = 10; // Xóa bất kỳ hình dạng nào trước đó

          this.graphics.clear();
        }

        drawGraphicsTest(pointCheck, arrPoints) {
          this.graphics.moveTo(arrPoints[0].x, arrPoints[0].y);

          for (var i = 1; i < arrPoints.length; i++) {
            this.graphics.lineTo(arrPoints[i].x, arrPoints[i].y);
          }

          this.graphics.stroke();
          this.graphics.moveTo(-1000, pointCheck.y);
          this.graphics.lineTo(1000, pointCheck.y);
          this.graphics.stroke();
        }

        stopAlllTween() {
          if (this.tweenAllItemMove) {
            this.tweenAllItemMove.stop();
          }

          if (this.tweenAllItemRotate) {
            this.tweenAllItemRotate.stop();
          }

          if (this.tweenTube) {
            this.tweenTube.stop();
          }

          if (this.tweenPivot) {
            this.tweenPivot.stop();
          }

          if (this.tweenProgressON) {
            // console.log("stopAlllTweenstopAlllTweenstopAlllTween");
            this.tweenProgressON.stop();
          }

          if (this.tweenIconCover) {
            this.tweenIconCover.stop();
          }
        }

        setStartWaterOFF(itemTubeTarget, indexStep, posTarget, isRight, indexStepON, countWaterOFF) {
          this.currState = (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).OFF;
          this.btnTube.interactable = false;

          for (var i = 0; i < this.arrItemWaters.length; i++) {
            if (i < this.countItemWaterActive) {
              this.arrItemWaters[i].initMoveToTarget();
            }
          }

          this.setMoveToTarget(itemTubeTarget, indexStep, posTarget, isRight, indexStepON, countWaterOFF);
        }

        setMoveToTarget(itemTubeTarget, indexStep, posTarget, isRight, indexStepON, countWaterOFF) {
          // this.initGraphicsTest();
          var itemTubeConfig = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getItemTubeConfig_byIndexTube((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getThemeSelected_byThemeType((_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).TUBE) - 1); // console.log(itemTubeConfig);

          this.posPivot_Right = itemTubeConfig.pivotRight;
          this.posPivot_Left = itemTubeConfig.pivotLeft;
          var angleRotateTube = itemTubeConfig.arrRotateConfigs[indexStep];

          if (isRight) {} else {
            angleRotateTube = -itemTubeConfig.arrRotateConfigs[indexStep];
          } //Tube


          this.tweenTube = tween(this.groupTube).to(this.TIME_MOVE_TO_TARGET, {
            position: posTarget,
            eulerAngles: new Vec3(0, 0, -angleRotateTube)
          }, {
            easing: 'linear',
            onComplete: () => {}
          }).start(); //Change Pivot

          if (isRight) {
            this.tweenPivot = tween(this.groupPivot).to(this.TIME_MOVE_TO_TARGET, {
              position: this.posPivot_Right
            }, {
              easing: 'linear',
              onComplete: () => {}
            }).start();
          } else {
            this.tweenPivot = tween(this.groupPivot).to(this.TIME_MOVE_TO_TARGET, {
              position: this.posPivot_Left
            }, {
              easing: 'linear',
              onComplete: () => {}
            }).start();
          } //All Item


          var posY = itemTubeConfig.arrMoveConfigs[indexStep]; // console.log("posY"+posY);

          var scaleY = itemTubeConfig.arrScaleConfigs[indexStep]; // console.log("scaleY"+scaleY);

          var scaleWater = itemTubeConfig.arrScaleWaterConfigs[indexStep];
          this.tweenAllItemMove = tween(this.groupAllItemMove).to(this.TIME_MOVE_TO_TARGET, {
            position: new Vec3(0, posY, 0),
            scale: new Vec3(1, scaleY, 1)
          }, {
            easing: 'linear',
            onComplete: () => {// console.log("AAAAAAAAAAAAAA");
            }
          }).start();
          this.tweenAllItemRotate = tween(this.groupAllItemRotate).to(this.TIME_MOVE_TO_TARGET, {
            eulerAngles: new Vec3(0, 0, angleRotateTube)
          }, {
            easing: 'linear',
            onUpdate: (target, ratio) => {
              var angleRotate = this.groupAllItemRotate.eulerAngles.z; // console.log("angleRotate:"+angleRotate);

              var posY = this.groupAllItemMove.position.y;
              var scaleY = this.groupAllItemMove.scale.y; // console.log("posY:"+angleRotate);
              // console.log("scaleY:"+scaleY);

              var arrRotatePoints = [];

              for (var i = 0; i < this.arrPoints.length; i++) {
                var newPoint = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).rotatePointBack(this.arrPoints[i], new Vec2(0, 0), angleRotate);
                arrRotatePoints.push(newPoint);
              }

              for (var _i6 = 0; _i6 < this.arrItemWaters.length; _i6++) {
                // console.log("i===="+i);
                var pointCheckTOP = new Vec2(0, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.getItemWater_TOP_PosY(_i6));
                pointCheckTOP.y = pointCheckTOP.y * scaleY + posY; // console.log("pointCheckTOP:"+pointCheckTOP);

                var pointCheckBOTTOM = new Vec2(0, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.getItemWater_PosY(_i6));
                pointCheckBOTTOM.y = pointCheckBOTTOM.y * scaleY + posY; // console.log("pointCheckBOTTOM:"+pointCheckBOTTOM);

                var scaleTOP = 1;
                var posTOP_x = 0;
                var intersectionsTOP = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).getPolygonIntersection(pointCheckTOP, 0, arrRotatePoints); // console.log(intersectionsTOP);

                if (intersectionsTOP.length >= 2) {
                  scaleTOP = Math.abs(intersectionsTOP[intersectionsTOP.length - 1].x - intersectionsTOP[0].x) / (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.ITEMWATER_WIDTH;
                  posTOP_x = (intersectionsTOP[intersectionsTOP.length - 1].x + intersectionsTOP[0].x) / 2; // console.log(posTOP_x);
                }

                var intersectionsBOTTOM = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).getPolygonIntersection(pointCheckBOTTOM, 0, arrRotatePoints);
                var scaleBOTTOM = 1;
                var posBOTTOM_x = 0; // console.log(intersectionsBOTTOM);

                if (intersectionsBOTTOM.length >= 2) {
                  scaleBOTTOM = Math.abs(intersectionsBOTTOM[intersectionsBOTTOM.length - 1].x - intersectionsBOTTOM[0].x) / (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.ITEMWATER_WIDTH;
                  posBOTTOM_x = (intersectionsBOTTOM[intersectionsBOTTOM.length - 1].x + intersectionsBOTTOM[0].x) / 2; // console.log(posBOTTOM_x);
                } // if(ratio >= 1){
                //     this.drawGraphicsTest(pointCheckTOP,arrRotatePoints);
                // }


                var scaleWaterY = (scaleWater - 1) * ratio + 1;

                this.arrItemWaters[_i6].updateMoveToTarget(scaleTOP, posTOP_x, scaleBOTTOM, posBOTTOM_x, scaleWaterY);
              }
            },
            onComplete: () => {
              this.setMoveToTarget_Finished(itemTubeTarget, indexStep, isRight, indexStepON, countWaterOFF);
            }
          }).start();
        }

        setMoveToTarget_Finished(itemTubeTarget, indexStep, isRight, indexStepON, countWaterOFF) {
          var indexStepOFF = indexStep + 1; // console.log("setMoveToTarget_Finished:",countWaterOFF);

          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playSound_Pour(countWaterOFF + 1);
          this.setTubeOFF_StepbyStep(itemTubeTarget, indexStepOFF, isRight, indexStepON, countWaterOFF, true);
        }

        setTubeOFF_StepbyStep(itemTubeTarget, indexStepOFF, isRight, indexStepON, countWaterOFF, isStartOFF) {
          // console.error("setTubeOFF_StepbyStep:",indexStepOFF,isRight,indexStepON,countWaterOFF);
          this.arrItemWaters[4 - indexStepOFF].resetIndexColor();
          var itemTubeConfig = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getItemTubeConfig_byIndexTube((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getThemeSelected_byThemeType((_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).TUBE) - 1);
          var angleRotateTube = itemTubeConfig.arrRotateConfigs[indexStepOFF];

          if (isRight) {} else {
            angleRotateTube = -itemTubeConfig.arrRotateConfigs[indexStepOFF];
          } //Tube


          this.tweenTube = tween(this.groupTube).to(this.TIME_POUR_INDDEX, {
            eulerAngles: new Vec3(0, 0, -angleRotateTube)
          }, {
            easing: 'linear',
            onComplete: () => {}
          }).start(); //All Item

          var posY = itemTubeConfig.arrMoveConfigs[indexStepOFF];
          var scaleY = itemTubeConfig.arrScaleConfigs[indexStepOFF];
          var scaleWater = itemTubeConfig.arrScaleWaterConfigs[indexStepOFF];
          var scaleWaterPrev = itemTubeConfig.arrScaleWaterConfigs[indexStepOFF - 1]; // console.log("scaleWater:",scaleWater,scaleWaterPrev);

          this.tweenAllItemMove = tween(this.groupAllItemMove).to(this.TIME_POUR_INDDEX, {
            position: new Vec3(0, posY, 0),
            scale: new Vec3(1, scaleY, 1)
          }, {
            easing: 'linear',
            onUpdate: (target, ratio) => {// console.log("groupAllItemMove",this.groupAllItemMove.position.y,this.groupAllItemMove.scale.y);
            },
            onComplete: () => {// console.log("AAAAAAAAAAAAAA");
            }
          }).start();
          this.tweenAllItemRotate = tween(this.groupAllItemRotate).to(this.TIME_POUR_INDDEX, {
            eulerAngles: new Vec3(0, 0, angleRotateTube)
          }, {
            easing: 'linear',
            onUpdate: (target, ratio) => {
              // console.log(this);
              var angleRotate = this.groupAllItemRotate.eulerAngles.z; // console.log("angleRotate:"+angleRotate);

              var posY = this.groupAllItemMove.position.y;
              var scaleY = this.groupAllItemMove.scale.y; // console.log("posY:"+angleRotate);
              // console.log("scaleY:"+scaleY);

              var arrRotatePoints = [];

              for (var i = 0; i < this.arrPoints.length; i++) {
                var newPoint = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).rotatePointBack(this.arrPoints[i], new Vec2(0, 0), angleRotate);
                arrRotatePoints.push(newPoint);
              }

              for (var _i7 = 0; _i7 < this.arrItemWaters.length; _i7++) {
                // console.log("i===="+i);
                var pointCheckTOP = new Vec2(0, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.getItemWater_TOP_PosY(_i7));

                if (_i7 == 4 - indexStepOFF) {
                  pointCheckTOP.y = ((1 - ratio) * (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.ITEMWATER_HIGHT + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.getItemWater_PosY(_i7)) * scaleY + posY;
                } else {
                  pointCheckTOP.y = pointCheckTOP.y * scaleY + posY;
                } // console.log("pointCheckTOP:"+pointCheckTOP);


                var pointCheckBOTTOM = new Vec2(0, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.getItemWater_PosY(_i7));
                pointCheckBOTTOM.y = pointCheckBOTTOM.y * scaleY + posY; // console.log("pointCheckBOTTOM:"+pointCheckBOTTOM);

                var scaleTOP = 1;
                var posTOP_x = 0;
                var intersectionsTOP = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).getPolygonIntersection(pointCheckTOP, 0, arrRotatePoints); // console.log(intersectionsTOP);

                if (intersectionsTOP.length >= 2) {
                  scaleTOP = Math.abs(intersectionsTOP[intersectionsTOP.length - 1].x - intersectionsTOP[0].x) / (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.ITEMWATER_WIDTH;
                  posTOP_x = (intersectionsTOP[intersectionsTOP.length - 1].x + intersectionsTOP[0].x) / 2; // console.log(posTOP_x);
                }

                var intersectionsBOTTOM = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).getPolygonIntersection(pointCheckBOTTOM, 0, arrRotatePoints);
                var scaleBOTTOM = 1;
                var posBOTTOM_x = 0; // console.log(intersectionsBOTTOM);

                if (intersectionsBOTTOM.length >= 2) {
                  scaleBOTTOM = Math.abs(intersectionsBOTTOM[intersectionsBOTTOM.length - 1].x - intersectionsBOTTOM[0].x) / (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.ITEMWATER_WIDTH;
                  posBOTTOM_x = (intersectionsBOTTOM[intersectionsBOTTOM.length - 1].x + intersectionsBOTTOM[0].x) / 2; // console.log(posBOTTOM_x);
                } // if(ratio >= 1){
                //     this.drawGraphicsTest(pointCheckTOP,arrRotatePoints);
                // }


                var scaleWaterY = (scaleWater - scaleWaterPrev) * ratio + scaleWaterPrev; // console.log("scaleWaterY:",scaleWaterY);

                this.arrItemWaters[_i7].updateWaterOFF(scaleTOP, posTOP_x, scaleBOTTOM, posBOTTOM_x, scaleWaterY, indexStepOFF, 1 - ratio);
              }
            },
            onComplete: () => {
              this.setTubeOFFStep_Finished(itemTubeTarget, indexStepOFF, isRight, indexStepON, countWaterOFF);
            }
          }).start();

          if (isStartOFF) {
            itemTubeTarget.setStart_WaterON(indexStepON, countWaterOFF);
          }
        }

        setTubeOFFStep_Finished(itemTubeTarget, indexStepOFF, isRight, indexStepON, countWaterOFF) {
          // console.error("setPourIndex_FinishedsetPourIndex_FinishedsetPourIndex_Finished",indexStepOFF,countWaterOFF);
          this.countItemWaterActive--;
          this.updateCountItemWater(this.countItemWaterActive);

          if (countWaterOFF > 0) {
            this.setTubeOFF_StepbyStep(itemTubeTarget, indexStepOFF + 1, isRight, indexStepON + 1, countWaterOFF - 1, false);
            return;
          } else {
            this.setTubeMoveBack(indexStepOFF);
          }
        }

        setTubeMoveBack(indexStep) {
          var itemTubeConfig = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getItemTubeConfig_byIndexTube((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getThemeSelected_byThemeType((_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).TUBE) - 1);
          var scaleWater = itemTubeConfig.arrScaleWaterConfigs[indexStep];
          this.tweenPivot = tween(this.groupPivot).to(this.TIME_MOVE_BACK, {
            position: new Vec3(0, 0, 0)
          }, {
            easing: 'linear',
            onComplete: () => {}
          }).start(); //Tube

          this.tweenTube = tween(this.groupTube).to(this.TIME_MOVE_BACK, {
            position: new Vec3(0, 0, 0),
            eulerAngles: new Vec3(0, 0, 0)
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
          this.tweenAllItemMove = tween(this.groupAllItemMove).to(this.TIME_MOVE_BACK, {
            position: new Vec3(0, 0, 0),
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'quadOut',
            onComplete: () => {// console.log("AAAAAAAAAAAAAA");
            }
          }).start();
          this.tweenAllItemRotate = tween(this.groupAllItemRotate).to(this.TIME_MOVE_BACK, {
            eulerAngles: new Vec3(0, 0, 0)
          }, {
            easing: 'quadOut',
            onUpdate: (target, ratio) => {
              var angleRotate = this.groupAllItemRotate.eulerAngles.z; // console.log("angleRotate:"+angleRotate);

              var posY = this.groupAllItemMove.position.y;
              var scaleY = this.groupAllItemMove.scale.y; // console.log("posY:"+angleRotate);
              // console.log("scaleY:"+scaleY);

              var arrRotatePoints = [];

              for (var i = 0; i < this.arrPoints.length; i++) {
                var newPoint = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).rotatePointBack(this.arrPoints[i], new Vec2(0, 0), angleRotate);
                arrRotatePoints.push(newPoint);
              }

              for (var _i8 = 0; _i8 < this.arrItemWaters.length; _i8++) {
                // console.log("i===="+i);
                var pointCheckTOP = new Vec2(0, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.getItemWater_TOP_PosY(_i8));
                pointCheckTOP.y = pointCheckTOP.y * scaleY + posY; // console.log("pointCheckTOP:"+pointCheckTOP);

                var pointCheckBOTTOM = new Vec2(0, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.getItemWater_PosY(_i8));
                pointCheckBOTTOM.y = pointCheckBOTTOM.y * scaleY + posY; // console.log("pointCheckBOTTOM:"+pointCheckBOTTOM);

                var scaleTOP = 1;
                var posTOP_x = 0;
                var intersectionsTOP = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).getPolygonIntersection(pointCheckTOP, 0, arrRotatePoints); // console.log(intersectionsTOP);

                if (intersectionsTOP.length >= 2) {
                  scaleTOP = Math.abs(intersectionsTOP[intersectionsTOP.length - 1].x - intersectionsTOP[0].x) / (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.ITEMWATER_WIDTH;
                  posTOP_x = (intersectionsTOP[intersectionsTOP.length - 1].x + intersectionsTOP[0].x) / 2; // console.log(posTOP_x);
                }

                var intersectionsBOTTOM = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).getPolygonIntersection(pointCheckBOTTOM, 0, arrRotatePoints);
                var scaleBOTTOM = 1;
                var posBOTTOM_x = 0; // console.log(intersectionsBOTTOM);

                if (intersectionsBOTTOM.length >= 2) {
                  scaleBOTTOM = Math.abs(intersectionsBOTTOM[intersectionsBOTTOM.length - 1].x - intersectionsBOTTOM[0].x) / (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.ITEMWATER_WIDTH;
                  posBOTTOM_x = (intersectionsBOTTOM[intersectionsBOTTOM.length - 1].x + intersectionsBOTTOM[0].x) / 2; // console.log(posBOTTOM_x);
                } // if(ratio >= 1){
                //     this.drawGraphicsTest(pointCheckTOP,arrRotatePoints);
                // }


                var scaleWaterY = (1 - ratio) * (scaleWater - 1) + 1;

                this.arrItemWaters[_i8].updateMoveToTarget(scaleTOP, posTOP_x, scaleBOTTOM, posBOTTOM_x, scaleWaterY);
              }
            },
            onComplete: () => {
              this.setTubeMoveBack_Finished();
            }
          }).start();
        }

        setTubeMoveBack_Finished() {
          // console.log("setTubeMoveBack_FinishedsetTubeMoveBack_Finished",this.arrItemWaters[0].indexColor,this.arrItemWaters[1].indexColor,this.arrItemWaters[2].indexColor,this.arrItemWaters[3].indexColor);    
          this.currState = (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).NONE;
          this.btnTube.interactable = true;
          var isWaterUnlock = false;
          var countItemWater_SameHeadIndexColor_LOCK = this.getCountItemWater_SameHeadIndexColor_LOCK(); // console.log("countItemWater_SameHeadIndexColor_LOCK:"+countItemWater_SameHeadIndexColor_LOCK);

          for (var i = 0; i < this.arrItemWaters.length; i++) {
            if (i < this.countItemWaterActive) {
              if (i >= this.countItemWaterActive - countItemWater_SameHeadIndexColor_LOCK) {
                if (this.arrItemWaters[i].waterState == (_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
                  error: Error()
                }), WATER_STATE) : WATER_STATE).LOCK) {
                  // console.log("AAAAAAAAAAAAA");
                  isWaterUnlock = true;
                  this.arrItemWaters[i].setWaterUnlock();
                  (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                    error: Error()
                  }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).SHOW_EFX_QUESTION, new Vec3(this.node.position.x, -270 + i * 110 + this.node.position.y + 55 + 120, this.node.position.z), (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.scaleTube);
                } else {
                  this.arrItemWaters[i].setWaterOFF_Finished();
                }
              } else {
                this.arrItemWaters[i].setWaterOFF_Finished();
              }
            }
          }

          if (isWaterUnlock) {
            this.setTube_WaterUnlock();
          } else {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TUBE_MOVEBACK_FINISHED);
          }
        }

        setTube_WaterUnlock() {
          this.currState = (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).UNLOCK;
          this.scheduleOnce(() => {
            this.currState = (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
              error: Error()
            }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).NONE;
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TUBE_MOVEBACK_FINISHED);
          }, 0.25);
        } //#region WATER ON


        setWaitting_WaterON() {
          this.currState = (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).WAITTING;
        }

        setStart_WaterON(indexWater, countWaterON) {
          this.setUnselect_ItemTube_Now();
          this.currState = (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).ON;

          if (this.isOnStepbyStep) {
            var countItemWater_Available = this.getCount_ItemWater_Available();
            var indexONNow = countItemWater_Available - countWaterON - 1;
            this.setTubeON_Now(indexONNow);
          }

          this.setTubeON_StepbyStep(indexWater, countWaterON);
        }

        setTubeON_Now(indexONNow) {
          // console.log("setTubeON_Now",indexONNow);
          this.countItemWaterActive = indexONNow; // console.log(this.arrItemWaters[0].indexColor,this.arrItemWaters[1].indexColor,this.arrItemWaters[2].indexColor,this.arrItemWaters[3].indexColor);

          if (this.tweenProgressON) {
            // console.log("setTubeON_NowsetTubeON_NowsetTubeON_NowsetTubeON_Now");
            this.tweenProgressON.stop();
          }

          for (var i = 0; i < this.arrItemWaters.length; i++) {
            if (i < indexONNow) {
              this.arrItemWaters[i].node.active = true;
              this.arrItemWaters[i].setWaterON_Now();
            }
          }
        }

        setTubeON_StepbyStep(indexWater, countWaterON) {
          // console.log("setTubeONIndex:",indexWater,countWaterON);
          this.isOnStepbyStep = true; // this.node.active = true;

          this.waterLine.node.active = true;
          var itemWaterON = this.arrItemWaters[indexWater];
          this.progressBar_waterON.progress = 0;
          itemWaterON.setWaterOFF_Now();
          itemWaterON.node.active = true;
          this.tweenProgressON = tween(this.progressBar_waterON).to(this.TIME_POUR_INDDEX, {
            progress: 1
          }, {
            easing: 'linear',
            onUpdate: (target, ratio) => {
              // console.log(ratio);
              var pointCheckTOP = new Vec2(0, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.getItemWater_PosY(indexWater));
              pointCheckTOP.y = pointCheckTOP.y + ratio * (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.ITEMWATER_HIGHT;
              var intersectionsTOP = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).getPolygonIntersection(pointCheckTOP, 0, this.arrPoints); // console.log(intersectionsTOP);

              if (intersectionsTOP.length >= 2) {
                var scaleTOP = Math.abs(intersectionsTOP[intersectionsTOP.length - 1].x - intersectionsTOP[0].x) / (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.ITEMWATER_WIDTH;
                var posTOP_y = ratio * 95;
                itemWaterON.updateWaterON(scaleTOP, posTOP_y, ratio);
              }
            },
            onComplete: () => {
              this.setTubeONIndex_Finished(indexWater, countWaterON);
            }
          }).start();
        }

        setTubeONIndex_Finished(indexWater, countWaterON) {
          // console.log("setTubeONIndex_FinishedsetTubeONIndex_Finished"+indexWater,countWaterON);
          this.countItemWaterActive++;
          this.updateCountItemWater(this.countItemWaterActive);

          if (countWaterON == 0) {
            this.isOnStepbyStep = false;
            this.waterLine.node.active = false;

            if (this.checkTube_Finished() && indexWater == 3) {
              // console.log("TUBE DONE");
              if (this.isTubeClay) {
                this.setMagicClayFinished();
              }

              this.currState = (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
                error: Error()
              }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).DONE;
              this.showIconCover();
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).TUBE_DONE, new Vec3(this.node.position.x, this.node.position.y + 150, this.node.position.z));
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).TUBE_OBIM_DONE, this.arrItemWaters[0].indexColor);
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).TUBE_PLASER_DONE, this.tubeX, this.tubeY);
              (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                error: Error()
              }), FBInstantManager) : FBInstantManager).instance.setHaptic();
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SHOW_EFX_TUBE_FINSIHED, new Vec3(this.node.position.x, this.node.position.y - 50, this.node.position.z), (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.scaleTube);
            } else if (this.currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
              error: Error()
            }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).WAITTING) {} else {
              this.currState = (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
                error: Error()
              }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).NONE;
            }
          } else {
            this.setTubeON_StepbyStep(indexWater + 1, countWaterON - 1);
          }
        } //#endregion


        touchItemTube() {
          // console.log("touchItemTube:",this.currState);
          // console.log(this.arrItemWaters[0].indexColor,this.arrItemWaters[1].indexColor,this.arrItemWaters[2].indexColor,this.arrItemWaters[3].indexColor);
          // let countItem_Available:number = this.getCountItemWater_SameHeadIndexColor();
          // console.log("countItem_Available:",countItem_Available);
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameState == (_crd && GAME_STATE === void 0 ? (_reportPossibleCrUseOfGAME_STATE({
            error: Error()
          }), GAME_STATE) : GAME_STATE).NO_MOVES) return;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currGameState == (_crd && GAME_STATE === void 0 ? (_reportPossibleCrUseOfGAME_STATE({
            error: Error()
          }), GAME_STATE) : GAME_STATE).SHUFFLE) {
            this.setShuffle();
          } else {
            if (this.currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
              error: Error()
            }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).NONE || this.currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
              error: Error()
            }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).SELECT || this.currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
              error: Error()
            }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).ON || this.currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
              error: Error()
            }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).UNSELECT) {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).TUBE_SELECT, this);
            } else if (this.currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
              error: Error()
            }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).WAITTING || this.currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
              error: Error()
            }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).DONE) {} else {
              this.setSelectTube_Fail();
            }
          }
        }

        touchEndItemTube() {
          console.log("touchEndItemTube");
        }

        onTouchMoveItemTube(event) {
          console.log("onTouchMoveItemTube");
          var touches_Check = event.getTouches();
          var locationUI_Check = touches_Check[0].getUILocation();
          var posCheck = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(locationUI_Check.x, locationUI_Check.y));
          console.log("posCheck:", posCheck, locationUI_Check);
        }

        setSelectTube_Fail() {}

        setSelect_ItemTube() {
          // console.log("setSelect_ItemTube");
          this.currState = (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).SELECT;
          this.stopAlllTween();
          this.tweenTube = tween(this.groupTube).to(0.15, {
            position: new Vec3(0, 60, 0)
          }, {
            easing: 'backOut',
            onComplete: () => {
              this.setSelect_ItemTube_Finished();
            }
          }).start();
          (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager2) : AudioManager2).instance.playSound_PickUp();
        }

        setSelect_ItemTube_Finished() {}

        setUnselect_ItemTube(isPlaySound) {
          if (isPlaySound === void 0) {
            isPlaySound = true;
          }

          // console.log("setUnselect_ItemTube");
          this.currState = (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).UNSELECT;
          this.stopAlllTween();
          this.tweenTube = tween(this.groupTube).to(0.15, {
            position: new Vec3(0, 0, 0)
          }, {
            easing: 'backOut',
            onComplete: () => {
              this.setUnselect_ItemTube_Finished();
            }
          }).start();

          if (isPlaySound) {
            (_crd && AudioManager2 === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager2) : AudioManager2).instance.playSound_PickDown();
          }
        }

        setUnselect_ItemTube_Now() {
          if (this.currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).SELECT) {
            this.stopAlllTween();
            this.currState = (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
              error: Error()
            }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).NONE;
          }
        }

        setUnselect_ItemTube_Now_ResetPos() {
          if (this.currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).SELECT) {
            this.stopAlllTween();
            this.currState = (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
              error: Error()
            }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).NONE;
            this.groupTube.setPosition(0, 0, 0);
          }
        }

        setUnselect_ItemTube_Finished() {
          if (this.currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).UNSELECT) {
            this.currState = (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
              error: Error()
            }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).NONE;
          }
        }

        setItemTube_beSelected() {
          // this.groupTube.setPosition(0,0,0);
          this.currState = (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).WAITTING;
        }

        checkTube_None() {
          for (var i = 0; i < this.arrItemWaters.length; i++) {
            if (this.arrItemWaters[i].indexColor != -1) {
              return false;
            }
          }

          return true;
        }

        checkTube_Done() {
          if (this.currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).DONE) {
            return true;
          }

          if (this.checkTube_None()) {
            return true;
          }

          return false;
        }

        checkTube_Finished() {
          var checkIndexColor = this.arrItemWaters[0].indexColor;
          if (this.arrItemWaters[0].waterState == (_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
            error: Error()
          }), WATER_STATE) : WATER_STATE).LOCK) return false;
          if (checkIndexColor == -1) return false;

          for (var i = 1; i < this.arrItemWaters.length; i++) {
            if (this.arrItemWaters[i].waterState == (_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
              error: Error()
            }), WATER_STATE) : WATER_STATE).LOCK) return false;

            if (this.arrItemWaters[i].indexColor == -1 || this.arrItemWaters[i].indexColor != checkIndexColor) {
              return false;
            }
          }

          return true;
        }

        getHeadIndexColor() {
          for (var i = this.arrItemWaters.length - 1; i >= 0; i--) {
            if (this.arrItemWaters[i].indexColor != -1) {
              return this.arrItemWaters[i].indexColor;
            }
          }
        }

        getCount_ItemWater_Available() {
          var countItemWater_Available = 0;

          for (var i = 0; i < this.arrItemWaters.length; i++) {
            if (this.arrItemWaters[i].indexColor != -1) {
              countItemWater_Available++;
            } else {
              break;
            }
          }

          return countItemWater_Available;
        }

        getCountItemWater_SameHeadIndexColor() {
          if (this.checkTube_None()) return 0;
          var headIndexColor = this.getHeadIndexColor();
          var countItemWater_SameHeadIndexColor = 0;

          for (var i = this.arrItemWaters.length - 1; i >= 0; i--) {
            if (this.arrItemWaters[i].indexColor != -1) {
              if (this.arrItemWaters[i].indexColor == headIndexColor && this.arrItemWaters[i].waterState == (_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
                error: Error()
              }), WATER_STATE) : WATER_STATE).NONE) {
                countItemWater_SameHeadIndexColor++;
              } else {
                break;
              }
            }
          }

          return countItemWater_SameHeadIndexColor;
        }

        getCountItemWater_SameHeadIndexColor_LOCK() {
          if (this.checkTube_None()) return 0;
          var headIndexColor = this.getHeadIndexColor();
          var countItemWater_SameHeadIndexColor = 0;

          for (var i = this.arrItemWaters.length - 1; i >= 0; i--) {
            if (this.arrItemWaters[i].indexColor != -1) {
              if (this.arrItemWaters[i].indexColor == headIndexColor) {
                countItemWater_SameHeadIndexColor++;
              } else {
                break;
              }
            }
          }

          return countItemWater_SameHeadIndexColor;
        }

        getCountIndexColor_SameHeadIndexColor(arrIndexColors) {
          if (arrIndexColors.length == 0) return 0;
          var countIndexColor_SameHeadIndexColor = 0;
          var headIndexColor = arrIndexColors[arrIndexColors.length - 1];

          for (var i = arrIndexColors.length - 2; i >= 0; i--) {
            if (arrIndexColors[i] == headIndexColor) {
              countIndexColor_SameHeadIndexColor++;
            } else {
              break;
            }
          }

          return countIndexColor_SameHeadIndexColor;
        }

        checkAllItemWater_SameIndexColor() {
          var countItemWater_SameHeadIndexColor = this.getCountItemWater_SameHeadIndexColor();
          var countItemWater_Available = this.getCount_ItemWater_Available();

          if (countItemWater_Available == countItemWater_SameHeadIndexColor) {
            return true;
          }

          return false;
        }

        getCountItemWater_ON_Available() {
          var countItemWater_Avaliable = this.getCount_ItemWater_Available();
          return 4 - countItemWater_Avaliable;
        }

        updateHeadColorIndex_Now(_indexWater, _indexColor, _countItemWaterON) {
          for (var i = 0; i < _countItemWaterON; i++) {
            this.arrItemWaters[_indexWater + i].updateIndexColor(_indexColor);
          }

          this.waterLine.color = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getWaterColor_byID(_indexColor);
        }

        updateMagicHeadColorIndex_Now(_indexWater, _indexColor, _countItemWaterON) {
          for (var i = 0; i < _countItemWaterON; i++) {
            this.arrItemWaters[_indexWater + i].updateMagicIndexColor(_indexColor);
          }

          this.waterLine.color = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getMagicColor_byID(_indexColor);
        }

        showIconCover() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isTops == false) return;
          this.iconCover.node.active = true;
          this.iconCover.node.setPosition(new Vec3(0, 60, 0));
          this.coverOpacity.opacity = 0;
          this.tweenIconCover = tween(this.iconCover.node).delay(0.1).to(0.5, {
            position: new Vec3(0, 0, 0)
          }, {
            easing: 'quadOut'
          }).start();
          this.tweenCoverOpacity = tween(this.coverOpacity).to(0.2, {
            opacity: 255
          }, {
            easing: 'quadOut'
          }).start();
        } //#region UNDO


        setUndo(_arrIndexColors, indexLock) {
          for (var i = 0; i < this.arrItemWaters.length; i++) {
            this.arrItemWaters[i].setUndoIndexColor_Update(_arrIndexColors[i], i < indexLock);
          }

          var countActive = 0;

          for (var _i9 = 0; _i9 < _arrIndexColors.length; _i9++) {
            if (_arrIndexColors[_i9] > -1) {
              countActive++;
            }
          }

          this.updateCountItemWater(countActive);

          if (this.currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).SELECT) {
            this.setUnselect_ItemTube(false);
          }
        }

        setUndoMagic(_arrIndexColors, _arrWaterLocks) {
          for (var i = 0; i < this.arrItemWaters.length; i++) {
            // console.log("setUndoMagic",this.tubeX,this.tubeY);
            this.arrItemWaters[i].setUndoMagicIndexColor_Update(_arrIndexColors[i], _arrWaterLocks[i] == (_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
              error: Error()
            }), WATER_STATE) : WATER_STATE).LOCK);
          }

          var countActive = 0;

          for (var _i10 = 0; _i10 < _arrIndexColors.length; _i10++) {
            if (_arrIndexColors[_i10] > -1) {
              countActive++;
            }
          }

          this.updateCountItemWater(countActive);

          if (this.currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).SELECT) {
            this.setUnselect_ItemTube(false);
          }
        } //#endregion
        //#region ADDCOL


        initItemTube_AddCol(_tubeX, _tubeY) {
          this.loadTube();
          this.tubeX = _tubeX;
          this.tubeY = _tubeY;
          var posTube = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getPosTube_byXY((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelDataInfo, this.tubeX, this.tubeY);
          this.node.setPosition(new Vec3(posTube.x + 300, posTube.y, 0));

          for (var i = 0; i < this.arrItemWaters.length; i++) {
            this.arrItemWaters[i].initIndexColor(-1);
            this.arrItemWaters[i].initWaterLock((_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
              error: Error()
            }), WATER_STATE) : WATER_STATE).NONE);
            this.arrItemWaters[i].node.active = false;
          }

          this.initItemWaterScale();
          this.waterLine.node.active = false;
          this.iconCover.node.active = false;
          this.coverOpacity.opacity = 0;
          this.updateCountItemWater(0);
          this.currState = (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).ADDCOL;
          this.showAddCol();
        }

        initMagicItemTube_AddCol(_tubeX, _tubeY) {
          this.loadTube();
          this.tubeX = _tubeX;
          this.tubeY = _tubeY;
          var posTube = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getMagicPosTube_byXY((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currMagicLevelConfigInfo, this.tubeX, this.tubeY); // console.log("posTube:",posTube,this.tubeX,this.tubeY);

          this.node.setPosition(new Vec3(posTube.x + 300, posTube.y, 0));

          for (var i = 0; i < this.arrItemWaters.length; i++) {
            this.arrItemWaters[i].initMagicIndexColor(-1);
            this.arrItemWaters[i].initWaterLock((_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
              error: Error()
            }), WATER_STATE) : WATER_STATE).NONE);
            this.arrItemWaters[i].node.active = false;
          }

          this.initItemWaterScale();
          this.waterLine.node.active = false;
          this.iconCover.node.active = false;
          this.coverOpacity.opacity = 0;
          this.updateCountItemWater(0);
          this.currState = (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).ADDCOL;
          this.showMagicAddCol();
        }

        showAddCol() {
          var posTube = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getPosTube_byXY((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currLevelDataInfo, this.tubeX, this.tubeY);
          this.tweenAddCol = tween(this.node).to(0.2, {
            position: new Vec3(posTube.x, posTube.y, 0)
          }, {
            easing: 'quadOut',
            onComplete: () => {
              this.showAddCol_Finished();
            }
          }).start();
        }

        showMagicAddCol() {
          var posTube = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getMagicPosTube_byXY((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currMagicLevelConfigInfo, this.tubeX, this.tubeY);
          this.tweenAddCol = tween(this.node).to(0.2, {
            position: new Vec3(posTube.x, posTube.y, 0)
          }, {
            easing: 'quadOut',
            onComplete: () => {
              this.showAddCol_Finished();
            }
          }).start();
        }

        showAddCol_Finished() {
          // console.log("showAddCol_Finished");
          // console.log(this.node);
          this.currState = (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).NONE;
        } //#endregion


        setBottle_Touch_Available(isAvailable) {
          this.btnTube.node.active = isAvailable;
        } //#region TUT


        showTut_Level2(isCorrect) {
          this.tutCheck.active = true;

          if (isCorrect) {
            this.tutCheck_Sprite.spriteFrame = this.tut_v_SpriteFrame;
          } else {
            this.tutCheck_Sprite.spriteFrame = this.tut_x_SpriteFrame;
          }
        }

        hideTut_Level2() {
          this.tutCheck.active = false;
        } //#endregion
        //#region OBIMOBJ


        initMagicOBIMObj(_magicOBIMInfo) {
          this.currState = (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).OBIM;
          this.itemTubeOBIMObj.node.active = true;
          this.itemTubeOBIMObj.setInit(_magicOBIMInfo, cb => {
            console.error("cbOBIMDone");
            this.currState = (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
              error: Error()
            }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).NONE;
          }, cb => {
            this.setOBIMShowEfx();
          });
        }

        setOBIMShowEfx() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_EFX_OBIM_FINSIHED, new Vec3(this.node.position.x, this.node.position.y + 100, this.node.position.z), (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.scaleTube);
        } //#endregion
        //#region CLAY


        initMagicClayObj(_magicOBIMInfo) {
          this.isTubeClay = true;
          this.itemTubeClayObj.node.active = true;
        }

        setMagicClayFinished() {
          this.isTubeClay = false;
          this.itemTubeClayObj.setShowClayFinished();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_EFX_CLAY_FINSIHED, new Vec3(this.node.position.x, this.node.position.y - 100, this.node.position.z), (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.scaleTube);
        } //#endregion
        //#region PLASTER


        initMagicPlasterObj(_magicOBIMInfo) {
          this.currState = (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).PLASTER;
          this.itemTubePlasterObj.node.active = true;
          this.itemTubePlasterObj.setInit(_magicOBIMInfo, this.tubeX, this.tubeY, cb => {
            this.currState = (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
              error: Error()
            }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).NONE;
            this.setPlasterShowEfx();
          });
        }

        setPlasterShowEfx() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_EFX_PLASTER_FINSIHED, new Vec3(this.node.position.x, this.node.position.y - 100, this.node.position.z), (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.scaleTube);
        } //#endregion
        //#region Shuffle


        checkTube_Shuffle_Available() {
          if (this.currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).PLASTER) return false;
          if (this.currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).OBIM) return false;
          if (this.isTubeClay) return false;
          if (this.currState == (_crd && ITEM_TUBE_STATE === void 0 ? (_reportPossibleCrUseOfITEM_TUBE_STATE({
            error: Error()
          }), ITEM_TUBE_STATE) : ITEM_TUBE_STATE).DONE) return false;
          if (this.checkTube_None()) return false;
          if (this.getCount_ItemWater_Available() <= 1) return false;
          return true;
        }

        setShuffle() {
          var arrShuffleIndexs = [];
          var arrIndexColors_Temp2 = [];
          var arrWaterStates_Temp2 = [];

          for (var i = 0; i < this.arrItemWaters.length; i++) {
            if (this.arrItemWaters[i].indexColor == -1) continue; // console.log(this.arrItemWaters[i].indexColor,this.arrItemWaters[i].waterState);

            arrIndexColors_Temp2.push(this.arrItemWaters[i].indexColor);
            arrWaterStates_Temp2.push(this.arrItemWaters[i].waterState);
            arrShuffleIndexs.push(i);
          }

          var arrIndexColors_Temp = (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
            error: Error()
          }), lodash) : lodash).cloneDeep(arrIndexColors_Temp2);
          var arrWaterStates_Temp = (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
            error: Error()
          }), lodash) : lodash).cloneDeep(arrWaterStates_Temp2);
          arrShuffleIndexs.sort(function (a, b) {
            return 0.5 - Math.random();
          }); // console.log("11111",arrShuffleIndexs);

          var isShuffled = false;

          for (var _i11 = 0; _i11 < arrShuffleIndexs.length; _i11++) {
            if (arrShuffleIndexs[_i11] != _i11) isShuffled = true;
          }

          if (!isShuffled) {
            // console.log("Shuffled reversereversereverse");
            arrShuffleIndexs.reverse();
          } // console.log("22222",arrShuffleIndexs);


          if (this.tweenShuffle) {
            this.tweenShuffle.stop();
          }

          this.groupTube.setRotationFromEuler(new Vec3(0, 0, 0));
          this.tweenShuffle = tween(this.groupTube).to(0.05, {
            eulerAngles: new Vec3(0, 0, 10)
          }, {
            easing: 'quadOut'
          }).to(0.1, {
            eulerAngles: new Vec3(0, 0, -10)
          }, {
            easing: 'quadOut'
          }).to(0.05, {
            eulerAngles: new Vec3(0, 0, 0)
          }, {
            easing: 'quadOut'
          }).to(0.025, {
            eulerAngles: new Vec3(0, 0, 5)
          }, {
            easing: 'quadOut'
          }).to(0.05, {
            eulerAngles: new Vec3(0, 0, -5)
          }, {
            easing: 'quadOut'
          }).to(0.025, {
            eulerAngles: new Vec3(0, 0, 0)
          }, {
            easing: 'quadOut'
          }).union().call(() => {
            for (var _i12 = 0; _i12 < arrShuffleIndexs.length; _i12++) {
              this.arrItemWaters[_i12].initMagicIndexColor(arrIndexColors_Temp[arrShuffleIndexs[_i12]]);

              if (this.arrItemWaters[_i12].waterState == (_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
                error: Error()
              }), WATER_STATE) : WATER_STATE).LOCK) {
                if (arrWaterStates_Temp[arrShuffleIndexs[_i12]] == (_crd && WATER_STATE === void 0 ? (_reportPossibleCrUseOfWATER_STATE({
                  error: Error()
                }), WATER_STATE) : WATER_STATE).NONE) {
                  this.arrItemWaters[_i12].setWaterUnlock();

                  (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                    error: Error()
                  }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).SHOW_EFX_QUESTION, new Vec3(this.node.position.x, -270 + _i12 * 110 + this.node.position.y + 55, this.node.position.z), (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.scaleTube);
                }
              }
            }

            this.groupTube.setRotationFromEuler(new Vec3(0, 0, 0));
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHUFFLE_TUBE_FINISHED);
          }).start();
        } //#endregion


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "iconHover_Bottom", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconHover_Top", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconMask", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "iconTop", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnTube", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "groupTube", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "groupPivot", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "groupAllItemRotate", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "groupAllItemMove", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "arrItemWaters", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "waterLine", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "progressBar_waterON", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "iconCover", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "coverOpacity", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "tut_v_SpriteFrame", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "tut_x_SpriteFrame", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "tutCheck", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "tutCheck_Sprite", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "itemTubeOBIMObj", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "itemTubeClayObj", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "itemTubePlasterObj", [_dec22], {
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
//# sourceMappingURL=ItemTube.js.map