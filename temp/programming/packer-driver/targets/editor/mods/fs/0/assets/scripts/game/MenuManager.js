System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, Node, tween, Vec3, ItemTab, Constants, SCENE_TYPE, TAB_TYPE, clientEvent, HomeGroup, ShopGroup, localConfig, ThemeGroup, LeaderBoardGroup, TournamentsGroup, resourceUtil, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, _crd, ccclass, property, MenuManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItemTab(extras) {
    _reporterNs.report("ItemTab", "./ItemTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSCENE_TYPE(extras) {
    _reporterNs.report("SCENE_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTAB_TYPE(extras) {
    _reporterNs.report("TAB_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHomeGroup(extras) {
    _reporterNs.report("HomeGroup", "./HomeGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopGroup(extras) {
    _reporterNs.report("ShopGroup", "./ShopGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThemeGroup(extras) {
    _reporterNs.report("ThemeGroup", "./ThemeGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLeaderBoardGroup(extras) {
    _reporterNs.report("LeaderBoardGroup", "./LeaderBoardGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTournamentsGroup(extras) {
    _reporterNs.report("TournamentsGroup", "./TournamentsGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../framework/resourceUtil", _context.meta, extras);
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
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ItemTab = _unresolved_2.ItemTab;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
      SCENE_TYPE = _unresolved_3.SCENE_TYPE;
      TAB_TYPE = _unresolved_3.TAB_TYPE;
    }, function (_unresolved_4) {
      clientEvent = _unresolved_4.clientEvent;
    }, function (_unresolved_5) {
      HomeGroup = _unresolved_5.HomeGroup;
    }, function (_unresolved_6) {
      ShopGroup = _unresolved_6.ShopGroup;
    }, function (_unresolved_7) {
      localConfig = _unresolved_7.localConfig;
    }, function (_unresolved_8) {
      ThemeGroup = _unresolved_8.ThemeGroup;
    }, function (_unresolved_9) {
      LeaderBoardGroup = _unresolved_9.LeaderBoardGroup;
    }, function (_unresolved_10) {
      TournamentsGroup = _unresolved_10.TournamentsGroup;
    }, function (_unresolved_11) {
      resourceUtil = _unresolved_11.resourceUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa256ebLztARaq/u34+7olV", "MenuManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = MenuManager
       * DateTime = Thu Sep 12 2024 17:33:45 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = MenuManager.ts
       * FileBasenameNoExtension = MenuManager
       * URL = db://assets/scripts/game/MenuManager.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("MenuManager", MenuManager = (_dec = ccclass('MenuManager'), _dec2 = property(_crd && ItemTab === void 0 ? (_reportPossibleCrUseOfItemTab({
        error: Error()
      }), ItemTab) : ItemTab), _dec3 = property(_crd && HomeGroup === void 0 ? (_reportPossibleCrUseOfHomeGroup({
        error: Error()
      }), HomeGroup) : HomeGroup), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec(_class = (_class2 = (_temp = class MenuManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "arrItemTabs", _descriptor, this);

          _defineProperty(this, "currTab", null);

          _initializerDefineProperty(this, "homeGroup", _descriptor2, this);

          _initializerDefineProperty(this, "nodeShopGroup", _descriptor3, this);

          _defineProperty(this, "shopGroup", null);

          _initializerDefineProperty(this, "nodeThemeGroup", _descriptor4, this);

          _defineProperty(this, "themeGroup", null);

          _initializerDefineProperty(this, "nodeLeaderBoardGroup", _descriptor5, this);

          _defineProperty(this, "leaderBoardGroup", null);

          _initializerDefineProperty(this, "nodeTournamentsGroup", _descriptor6, this);

          _defineProperty(this, "tournamentsGroup", null);

          _initializerDefineProperty(this, "contentGroup", _descriptor7, this);

          _initializerDefineProperty(this, "nodeLoading", _descriptor8, this);

          _initializerDefineProperty(this, "lockGroup", _descriptor9, this);

          _defineProperty(this, "tweenMoveContentTab", null);
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOUCH_TAB, this.touchTab, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SHOP_GROUP, this.showShopGroup, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GOTO_TOURNAMENT, this.goToTournament, this);
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.currSceneType = (_crd && SCENE_TYPE === void 0 ? (_reportPossibleCrUseOfSCENE_TYPE({
            error: Error()
          }), SCENE_TYPE) : SCENE_TYPE).MENU;
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOUCH_TAB, this.touchTab, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GOTO_TOURNAMENT, this.goToTournament, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOW_SHOP_GROUP, this.showShopGroup, this);
        }

        start() {
          // [3]
          // clientEvent.dispatchEvent(Constants.TAB_UPDATE,TAB_TYPE.HOME);
          // this.showTab(this.currTab);
          this.lockGroup.active = false;
        }

        touchTab(tabType) {
          if (this.currTab != tabType) {
            if (this.currTab == (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
              error: Error()
            }), TAB_TYPE) : TAB_TYPE).HOME) {
              if (this.homeGroup.node.active) {
                this.homeGroup.setHide();
              }
            } else if (this.currTab == (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
              error: Error()
            }), TAB_TYPE) : TAB_TYPE).SHOP) {
              if (this.shopGroup && this.shopGroup.node.active) {
                this.shopGroup.setHide();
              }
            } else if (this.currTab == (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
              error: Error()
            }), TAB_TYPE) : TAB_TYPE).THEME) {
              if (this.themeGroup && this.themeGroup.node.active) {
                this.themeGroup.setHide();
              }
            } else if (this.currTab == (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
              error: Error()
            }), TAB_TYPE) : TAB_TYPE).LEADERBOARD) {
              if (this.leaderBoardGroup && this.leaderBoardGroup.node.active) {
                this.leaderBoardGroup.setHide();
              }
            } else if (this.currTab == (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
              error: Error()
            }), TAB_TYPE) : TAB_TYPE).TOURNAMENT) {
              if (this.tournamentsGroup && this.tournamentsGroup.node.active) {
                this.tournamentsGroup.setHide();
              }
            }

            this.currTab = tabType;
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TAB_UPDATE, this.currTab);
            this.changeTab();
          }
        }

        showTab(tabType) {
          this.homeGroup.node.active = false;

          if (this.shopGroup) {
            this.shopGroup.node.active = false;
          }

          if (this.themeGroup) {
            this.themeGroup.node.active = false;
          }

          if (this.leaderBoardGroup) {
            this.leaderBoardGroup.node.active = false;
          }

          if (this.tournamentsGroup) {
            this.tournamentsGroup.node.active = false;
          }

          if (tabType == (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
            error: Error()
          }), TAB_TYPE) : TAB_TYPE).HOME) {
            this.homeGroup.node.active = true;
            this.homeGroup.showGroup();
          } else if (tabType == (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
            error: Error()
          }), TAB_TYPE) : TAB_TYPE).SHOP) {
            if (this.shopGroup) {
              this.shopGroup.node.active = true;
              this.shopGroup.showGroup();
            } else {
              this.loadShopGroup();
            }
          } else if (tabType == (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
            error: Error()
          }), TAB_TYPE) : TAB_TYPE).THEME) {
            if (this.themeGroup) {
              this.themeGroup.node.active = true;
              this.themeGroup.showGroup();
            } else {
              this.loadThemeGroup();
            }
          } else if (tabType == (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
            error: Error()
          }), TAB_TYPE) : TAB_TYPE).LEADERBOARD) {
            if (this.leaderBoardGroup) {
              this.leaderBoardGroup.node.active = true;
              this.leaderBoardGroup.showGroup();
            } else {
              this.loadLeaderBoardGroup();
            }
          } else if (tabType == (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
            error: Error()
          }), TAB_TYPE) : TAB_TYPE).TOURNAMENT) {
            if (this.tournamentsGroup) {
              this.tournamentsGroup.node.active = true;
              this.tournamentsGroup.showGroup();
            } else {
              this.loadTournamentsGroup();
            }
          }
        }

        changeTab() {
          this.lockGroup.active = true;

          if (this.currTab == (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
            error: Error()
          }), TAB_TYPE) : TAB_TYPE).HOME) {
            this.homeGroup.node.active = true;
            this.homeGroup.setShow();
          } else if (this.currTab == (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
            error: Error()
          }), TAB_TYPE) : TAB_TYPE).SHOP) {
            if (this.shopGroup) {
              this.shopGroup.node.active = true;
              this.shopGroup.setShow();
            }
          } else if (this.currTab == (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
            error: Error()
          }), TAB_TYPE) : TAB_TYPE).THEME) {
            if (this.themeGroup) {
              this.themeGroup.node.active = true;
              this.themeGroup.setShow();
            }
          } else if (this.currTab == (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
            error: Error()
          }), TAB_TYPE) : TAB_TYPE).LEADERBOARD) {
            if (this.leaderBoardGroup) {
              this.leaderBoardGroup.node.active = true;
              this.leaderBoardGroup.setShow();
            }
          } else if (this.currTab == (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
            error: Error()
          }), TAB_TYPE) : TAB_TYPE).TOURNAMENT) {
            if (this.tournamentsGroup) {
              this.tournamentsGroup.node.active = true;
              this.tournamentsGroup.setShow();
            }
          }

          let posX = (2 - this.currTab) * 1080;
          this.tweenMoveContentTab = tween(this.contentGroup).to(0.5, {
            position: new Vec3(posX, 0, 0)
          }, {
            easing: 'quadOut',
            onComplete: () => {
              this.showTab(this.currTab);
              this.lockGroup.active = false;
            }
          }).start(); // this.scheduleOnce(()=>{
          // },0.2);
        }

        showShopGroup() {
          this.touchTab((_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
            error: Error()
          }), TAB_TYPE) : TAB_TYPE).SHOP);
        }

        showTabHome() {
          if (this.currTab == (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
            error: Error()
          }), TAB_TYPE) : TAB_TYPE).HOME) {
            this.homeGroup.node.active = true;
            this.homeGroup.showGroup();
          } else {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TAB_UPDATE, (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
              error: Error()
            }), TAB_TYPE) : TAB_TYPE).HOME);
            this.touchTab((_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
              error: Error()
            }), TAB_TYPE) : TAB_TYPE).HOME);
          }
        }

        showTableaderBoard() {
          this.touchTab((_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
            error: Error()
          }), TAB_TYPE) : TAB_TYPE).LEADERBOARD);
        }

        showTabTournament() {
          if (this.currTab == (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
            error: Error()
          }), TAB_TYPE) : TAB_TYPE).TOURNAMENT) {
            this.tournamentsGroup.showGroup();
          } else {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TAB_UPDATE, (_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
              error: Error()
            }), TAB_TYPE) : TAB_TYPE).TOURNAMENT);
            this.touchTab((_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
              error: Error()
            }), TAB_TYPE) : TAB_TYPE).TOURNAMENT);
          }
        }

        loadShopGroup() {
          let self = this;

          if (this.shopGroup == null) {
            this.lockGroup.active = true;
            this.nodeLoading.active = true;
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("ShopGroup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeShopGroup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.shopGroup = uiPopup.getComponent(_crd && ShopGroup === void 0 ? (_reportPossibleCrUseOfShopGroup({
                error: Error()
              }), ShopGroup) : ShopGroup);
              self.shopGroup.showGroup();
              self.shopGroup.setShow();
              self.nodeLoading.active = false;
              self.lockGroup.active = false;
            });
          }
        }

        loadThemeGroup() {
          let self = this;

          if (this.themeGroup == null) {
            this.lockGroup.active = true;
            this.nodeLoading.active = true;
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("ThemeGroup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeThemeGroup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.themeGroup = uiPopup.getComponent(_crd && ThemeGroup === void 0 ? (_reportPossibleCrUseOfThemeGroup({
                error: Error()
              }), ThemeGroup) : ThemeGroup);
              self.themeGroup.showGroup();
              self.themeGroup.setShow();
              self.nodeLoading.active = false;
              self.lockGroup.active = false;
            });
          }
        }

        loadLeaderBoardGroup() {
          let self = this;

          if (this.leaderBoardGroup == null) {
            this.lockGroup.active = true;
            this.nodeLoading.active = true;
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("LeaderBoardGroup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeLeaderBoardGroup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.leaderBoardGroup = uiPopup.getComponent(_crd && LeaderBoardGroup === void 0 ? (_reportPossibleCrUseOfLeaderBoardGroup({
                error: Error()
              }), LeaderBoardGroup) : LeaderBoardGroup);
              self.leaderBoardGroup.showGroup();
              self.leaderBoardGroup.setShow();
              self.nodeLoading.active = false;
              self.lockGroup.active = false;
            });
          }
        }

        loadTournamentsGroup() {
          let self = this;

          if (this.tournamentsGroup == null) {
            this.lockGroup.active = true;
            this.nodeLoading.active = true;
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadPrefabUI_Bundle("TournamentsGroup", (err, uiPrefab) => {
              let uiPopup = instantiate(uiPrefab);
              uiPopup.setParent(self.nodeTournamentsGroup);
              uiPopup.setPosition(new Vec3(0, 0, 0));
              self.tournamentsGroup = uiPopup.getComponent(_crd && TournamentsGroup === void 0 ? (_reportPossibleCrUseOfTournamentsGroup({
                error: Error()
              }), TournamentsGroup) : TournamentsGroup);
              self.tournamentsGroup.showGroup();
              self.tournamentsGroup.setShow();
              self.nodeLoading.active = false;
              self.lockGroup.active = false;
            });
          }
        }

        goToTournament() {
          this.touchTab((_crd && TAB_TYPE === void 0 ? (_reportPossibleCrUseOfTAB_TYPE({
            error: Error()
          }), TAB_TYPE) : TAB_TYPE).TOURNAMENT);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "arrItemTabs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "homeGroup", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeShopGroup", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeThemeGroup", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeLeaderBoardGroup", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodeTournamentsGroup", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "contentGroup", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "nodeLoading", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lockGroup", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
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
//# sourceMappingURL=MenuManager.js.map