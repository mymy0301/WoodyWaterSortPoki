System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, Node, Prefab, tween, UIOpacity, Widget, Constants, THEME_TYPE, clientEvent, localConfig, ItemTheme, LogEventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, ThemeGroup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTHEME_TYPE(extras) {
    _reporterNs.report("THEME_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemTheme(extras) {
    _reporterNs.report("ItemTheme", "./ItemTheme", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogEventManager(extras) {
    _reporterNs.report("LogEventManager", "../common/LogEventManager", _context.meta, extras);
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
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
      THEME_TYPE = _unresolved_2.THEME_TYPE;
    }, function (_unresolved_3) {
      clientEvent = _unresolved_3.clientEvent;
    }, function (_unresolved_4) {
      localConfig = _unresolved_4.localConfig;
    }, function (_unresolved_5) {
      ItemTheme = _unresolved_5.ItemTheme;
    }, function (_unresolved_6) {
      LogEventManager = _unresolved_6.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "86427mF9ylPv5qLbqHQfpnK", "ThemeGroup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ThemeGroup
       * DateTime = Fri Oct 11 2024 17:22:49 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ThemeGroup.ts
       * FileBasenameNoExtension = ThemeGroup
       * URL = db://assets/scripts/game/ThemeGroup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ThemeGroup", ThemeGroup = (_dec = ccclass('ThemeGroup'), _dec2 = property(Widget), _dec3 = property(Widget), _dec4 = property(Widget), _dec5 = property(UIOpacity), _dec6 = property(Prefab), _dec7 = property(Node), _dec(_class = (_class2 = (_temp = class ThemeGroup extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "groupAllTopWidget", _descriptor, this);

          _initializerDefineProperty(this, "groupAllContentWidget", _descriptor2, this);

          _initializerDefineProperty(this, "scrollViewWidget", _descriptor3, this);

          _initializerDefineProperty(this, "groupOpacity", _descriptor4, this);

          _defineProperty(this, "tweenGroup", null);

          _initializerDefineProperty(this, "itemThemePrefab", _descriptor5, this);

          _initializerDefineProperty(this, "contentGroup", _descriptor6, this);

          _defineProperty(this, "currThemeType", null);
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOUCH_TABTHEME, this.touchTabTheme, this);
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOUCH_TABTHEME, this.touchTabTheme, this); // clientEvent.dispatchEvent(Constants.THEME_SELECTED_UPDATE);

          this.contentGroup.active = false;
        }

        initAllTop() {
          // console.log("initAllTop ThemeGroup");
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.isMobile) {
            var posY = ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.scaleBG - 1) * (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.DEFAULT_H / 2; // console.log("posY:"+posY);

            if (posY <= 0) {
              this.groupAllTopWidget.top = 0;
              this.groupAllContentWidget.top = 0;
              this.scrollViewWidget.bottom = 372.25;
              return;
            }

            this.groupAllTopWidget.top = -posY;
            this.groupAllContentWidget.top = -posY;
            this.scrollViewWidget.bottom = 372.25 - posY;
          } else {
            this.groupAllTopWidget.top = 0;
            this.groupAllContentWidget.top = 0;
            this.scrollViewWidget.bottom = 372.25;
          }
        }

        start() {
          // [3]
          this.initAllTop();
        } // update (deltaTime: number) {
        //     // [4]
        // }


        showGroup() {
          this.contentGroup.active = true;

          if (this.currThemeType == null) {
            this.currThemeType = (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
              error: Error()
            }), THEME_TYPE) : THEME_TYPE).SKIN;
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TABTHEME_UPDATE, (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
              error: Error()
            }), THEME_TYPE) : THEME_TYPE).SKIN);
            this.showTab();
          }
        }

        touchTabTheme(themeType) {
          if (themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).SKIN) {
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logButtonClick("tabskin", "themepopup");
          } else if (themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).BG) {
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logButtonClick("tabbg", "themepopup");
          }

          if (this.currThemeType != themeType) {
            this.currThemeType = themeType;
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TABTHEME_UPDATE, this.currThemeType);
            this.showTab();
          }
        }

        showTab() {
          this.contentGroup.destroyAllChildren(); // if(this.currThemeType == THEME_TYPE.TUBE){
          //     for(let i= 0; i< localConfig.instance.arrUnlockProgressInfo_Tubes.length;i++){
          //         let item = instantiate(this.itemThemePrefab);
          //         item.setParent(this.contentGroup);
          //         let itemTheme:ItemTheme = item.getComponent(ItemTheme);
          //         itemTheme.initInfo(THEME_TYPE.TUBE,localConfig.instance.arrUnlockProgressInfo_Tubes[i].itemID);
          //     }
          // }else 

          if (this.currThemeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).BG) {
            for (var i = 0; i < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrUnlockProgressInfo_BGs.length; i++) {
              var item = instantiate(this.itemThemePrefab);
              item.setParent(this.contentGroup);
              var itemTheme = item.getComponent(_crd && ItemTheme === void 0 ? (_reportPossibleCrUseOfItemTheme({
                error: Error()
              }), ItemTheme) : ItemTheme);
              itemTheme.initInfo((_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
                error: Error()
              }), THEME_TYPE) : THEME_TYPE).BG, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrUnlockProgressInfo_BGs[i].itemID);
            }
          } else if (this.currThemeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).SKIN) {
            for (var _i = 0; _i < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrSkinInfos.length; _i++) {
              var _item = instantiate(this.itemThemePrefab);

              _item.setParent(this.contentGroup);

              var _itemTheme = _item.getComponent(_crd && ItemTheme === void 0 ? (_reportPossibleCrUseOfItemTheme({
                error: Error()
              }), ItemTheme) : ItemTheme);

              _itemTheme.initInfo((_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
                error: Error()
              }), THEME_TYPE) : THEME_TYPE).SKIN, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrSkinInfos[_i].id);
            }
          }
        }

        setShow() {
          if (this.tweenGroup != null) {
            this.tweenGroup.stop();
          }

          this.tweenGroup = tween(this.groupOpacity).to(0.2, {
            opacity: 255
          }, {
            easing: 'linear',
            onComplete: () => {}
          }).start();
        }

        setHide() {
          if (this.tweenGroup != null) {
            this.tweenGroup.stop();
          }

          this.tweenGroup = tween(this.groupOpacity).to(0.2, {
            opacity: 0
          }, {
            easing: 'linear',
            onComplete: () => {}
          }).start();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "groupAllTopWidget", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "groupAllContentWidget", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scrollViewWidget", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "groupOpacity", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "itemThemePrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "contentGroup", [_dec7], {
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
//# sourceMappingURL=ThemeGroup.js.map