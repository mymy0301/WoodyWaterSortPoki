System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, Node, Prefab, ScrollView, tween, UIOpacity, Widget, localConfig, ItemTournament, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, TournamentsGroup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemTournament(extras) {
    _reporterNs.report("ItemTournament", "./tournaments/ItemTournament", _context.meta, extras);
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
      ScrollView = _cc.ScrollView;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      localConfig = _unresolved_2.localConfig;
    }, function (_unresolved_3) {
      ItemTournament = _unresolved_3.ItemTournament;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e3193NNp3NDAIFl/VBpTL6j", "TournamentsGroup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = TournamentsGroup
       * DateTime = Tue Oct 29 2024 15:42:34 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = TournamentsGroup.ts
       * FileBasenameNoExtension = TournamentsGroup
       * URL = db://assets/scripts/game/TournamentsGroup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("TournamentsGroup", TournamentsGroup = (_dec = ccclass('TournamentsGroup'), _dec2 = property(Widget), _dec3 = property(Widget), _dec4 = property(UIOpacity), _dec5 = property(ScrollView), _dec6 = property(Node), _dec7 = property(Prefab), _dec(_class = (_class2 = (_temp = class TournamentsGroup extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "groupAllTopWidget", _descriptor, this);

          _initializerDefineProperty(this, "scrollViewWidget", _descriptor2, this);

          _initializerDefineProperty(this, "groupOpacity", _descriptor3, this);

          _defineProperty(this, "tweenGroup", null);

          _initializerDefineProperty(this, "scrollViewTournaments", _descriptor4, this);

          _initializerDefineProperty(this, "contentGroup", _descriptor5, this);

          _initializerDefineProperty(this, "itemTournamentPrefab", _descriptor6, this);

          _defineProperty(this, "arrItemTournaments", []);
        }

        onEnable() {}

        onDisable() {
          for (var i = 0; i < this.arrItemTournaments.length; i++) {
            this.arrItemTournaments[i].hideGroup();
          }

          this.contentGroup.active = false;
        }

        initAllTop() {
          // console.log("initAllTop TournamentsGroup");
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
              this.scrollViewWidget.top = 160;
              this.scrollViewWidget.bottom = 372.25;
              return;
            }

            this.groupAllTopWidget.top = -posY;
            this.scrollViewWidget.top = 160 - posY;
            this.scrollViewWidget.bottom = 372.25;
          } else {
            this.groupAllTopWidget.top = 0;
            this.scrollViewWidget.top = 160;
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

          if (this.arrItemTournaments.length > 0) {
            for (var i = 0; i < this.arrItemTournaments.length; i++) {
              this.arrItemTournaments[i].showGroup();
            }
          } else {
            for (var _i = 0; _i < (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.arrTournament_LeaderBoardDataInfos.length; _i++) {
              var item = instantiate(this.itemTournamentPrefab);
              item.setParent(this.contentGroup);
              var itemTournament = item.getComponent(_crd && ItemTournament === void 0 ? (_reportPossibleCrUseOfItemTournament({
                error: Error()
              }), ItemTournament) : ItemTournament);
              itemTournament.init(_i, (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.arrTournament_LeaderBoardDataInfos[_i]);
              this.arrItemTournaments.push(itemTournament);
            }
          }

          this.scrollViewTournaments.scrollToTop();
        }

        hideGroup() {
          this.contentGroup.active = false;

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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scrollViewWidget", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "groupOpacity", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scrollViewTournaments", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "contentGroup", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "itemTournamentPrefab", [_dec7], {
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
//# sourceMappingURL=TournamentsGroup.js.map