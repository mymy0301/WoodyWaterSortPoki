System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, instantiate, Node, Prefab, BasePopup, Constants, THEME_TYPE, clientEvent, LogEventManager, localConfig, ItemTheme, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, ThemePopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasePopup(extras) {
    _reporterNs.report("BasePopup", "../common/basePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTHEME_TYPE(extras) {
    _reporterNs.report("THEME_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogEventManager(extras) {
    _reporterNs.report("LogEventManager", "../common/LogEventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemTheme(extras) {
    _reporterNs.report("ItemTheme", "./ItemTheme", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      BasePopup = _unresolved_2.BasePopup;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
      THEME_TYPE = _unresolved_3.THEME_TYPE;
    }, function (_unresolved_4) {
      clientEvent = _unresolved_4.clientEvent;
    }, function (_unresolved_5) {
      LogEventManager = _unresolved_5.LogEventManager;
    }, function (_unresolved_6) {
      localConfig = _unresolved_6.localConfig;
    }, function (_unresolved_7) {
      ItemTheme = _unresolved_7.ItemTheme;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e16d3JbpmNICKrY2kxRp3En", "ThemePopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ThemePopup
       * DateTime = Thu Jan 08 2026 11:32:39 GMT+0700 (Indochina Time)
       * Author = MyTom2k17
       * FileBasename = ThemePopup.ts
       * FileBasenameNoExtension = ThemePopup
       * URL = db://assets/scripts/game/ThemePopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ThemePopup", ThemePopup = (_dec = ccclass('ThemePopup'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class ThemePopup extends (_crd && BasePopup === void 0 ? (_reportPossibleCrUseOfBasePopup({
        error: Error()
      }), BasePopup) : BasePopup) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "itemThemePrefab", _descriptor, this);

          _initializerDefineProperty(this, "contentGroup", _descriptor2, this);

          _defineProperty(this, "currThemeType", null);
        }

        onEnable() {
          super.onEnable();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOUCH_TABTHEME, this.touchTabTheme, this);
        }

        onDisable() {
          super.onDisable();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOUCH_TABTHEME, this.touchTabTheme, this);
        }

        start() {
          // [3]
          this.currThemeType = (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).SKIN;
          this.showTab();
        }

        showThemePopup() {
          super.showPopup();
        } // update (deltaTime: number) {
        //     // [4]
        // }


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

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemThemePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "contentGroup", [_dec3], {
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
//# sourceMappingURL=ThemePopup.js.map