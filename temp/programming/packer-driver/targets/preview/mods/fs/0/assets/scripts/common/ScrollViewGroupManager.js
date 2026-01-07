System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, CCInteger, Component, instantiate, Node, Prefab, ScrollView, Size, UITransform, Vec3, ItemScrollView, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, _crd, ccclass, property, ScrollViewGroupManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItemScrollView(extras) {
    _reporterNs.report("ItemScrollView", "./ItemScrollView", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
      Size = _cc.Size;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ItemScrollView = _unresolved_2.ItemScrollView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9ce35AkWnFJxLrYtwYXMMax", "ScrollViewGroupManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ScrollViewGroupManager
       * DateTime = Thu Nov 14 2024 17:22:56 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ScrollViewGroupManager.ts
       * FileBasenameNoExtension = ScrollViewGroupManager
       * URL = db://assets/scripts/common/ScrollViewGroupManager.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ScrollViewGroupManager", ScrollViewGroupManager = (_dec = ccclass('ScrollViewGroupManager'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(CCInteger), _dec5 = property(CCInteger), _dec6 = property(CCInteger), _dec7 = property(CCInteger), _dec8 = property(CCInteger), _dec9 = property(CCInteger), _dec10 = property(ScrollView), _dec(_class = (_class2 = (_temp = class ScrollViewGroupManager extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "arrDataInfos", []);

          _initializerDefineProperty(this, "contentGroup", _descriptor, this);

          _initializerDefineProperty(this, "itemScrowViewPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "countShowItem", _descriptor3, this);

          _initializerDefineProperty(this, "KC_Y", _descriptor4, this);

          _initializerDefineProperty(this, "SIZE_ITEM", _descriptor5, this);

          _initializerDefineProperty(this, "CONTENT_HIGHT", _descriptor6, this);

          _initializerDefineProperty(this, "CONTENT_WIDTH", _descriptor7, this);

          _initializerDefineProperty(this, "posYStart", _descriptor8, this);

          _defineProperty(this, "arrPoolItems", []);

          _defineProperty(this, "mapItemBoards", new Map());

          _initializerDefineProperty(this, "scrollView", _descriptor9, this);

          _defineProperty(this, "lastIndexPosCenter", -1);
        }

        onEnable() {
          this.scrollView.node.on(ScrollView.EventType.SCROLLING, this.setScrollEvent, this);
        }

        onDisable() {
          this.scrollView.node.off(ScrollView.EventType.SCROLLING, this.setScrollEvent, this);
        }

        initDataInfos(_arrDataInfos) {
          this.reset();
          this.arrDataInfos = _arrDataInfos;
          var maxY = (this.SIZE_ITEM + this.KC_Y) * _arrDataInfos.length + 200;
          this.contentGroup.getComponent(UITransform).setContentSize(new Size(this.CONTENT_WIDTH, maxY));
          this.contentGroup.setPosition(new Vec3(0, this.posYStart, 0)); // this.scrollView.scrollToTop();

          this.showInitScrowView();
        }

        reset() {
          this.contentGroup.destroyAllChildren();
          this.arrPoolItems = [];
          this.mapItemBoards.clear();
          this.scrollView.stopAutoScroll();
          this.arrDataInfos = [];
        }

        showInitScrowView() {
          for (var i = 0; i < this.countShowItem; i++) {
            if (i < this.arrDataInfos.length) {
              var itemScrollView = this.getItemLeaderBoard_Recycle_FromPools();
              itemScrollView.node.setPosition(this.getPos_byIndex(i));
              itemScrollView.init(this.arrDataInfos[i], 0.1 * i);
              itemScrollView.setIndexPos(i);
              this.mapItemBoards.set(i, itemScrollView);
            }
          }
        }

        getItemLeaderBoard_Recycle_FromPools() {
          for (var i = 0; i < this.arrPoolItems.length; i++) {
            if (!this.arrPoolItems[i].node.active) {
              return this.arrPoolItems[i];
            }
          } // console.error("-------------------------------------------------------------");


          var item = instantiate(this.itemScrowViewPrefab);
          item.setParent(this.contentGroup);
          var itemScrollView = item.getComponent(_crd && ItemScrollView === void 0 ? (_reportPossibleCrUseOfItemScrollView({
            error: Error()
          }), ItemScrollView) : ItemScrollView);
          this.arrPoolItems.push(itemScrollView);
          return itemScrollView;
        }

        setScrollEvent() {
          // console.log(this.contentGroup.position.y);
          var indexPosCenter = Math.floor((this.contentGroup.position.y - this.posYStart + this.CONTENT_HIGHT / 2) / (this.SIZE_ITEM + this.KC_Y));
          if (this.lastIndexPosCenter == indexPosCenter) return;
          this.lastIndexPosCenter = indexPosCenter;
          this.mapItemBoards.forEach(item => {
            // console.log("Check itemLeaderBoard:"+itemLeaderBoard.indexPos);
            if (item.node.active) {
              // console.log("Check itemLeaderBoard22222:"+itemLeaderBoard.indexPos);
              // console.log(itemLeaderBoard.indexPos, indexPosCenter - this.countShowItem / 2, indexPosCenter + this.countShowItem / 2, itemLeaderBoard.indexPos < indexPosCenter - this.countShowItem / 2 || itemLeaderBoard.indexPos > indexPosCenter + this.countShowItem / 2);
              if (item.indexPos < indexPosCenter - this.countShowItem / 2 || item.indexPos > indexPosCenter + this.countShowItem / 2) {
                // console.log("HIDE ITEM:" + itemLeaderBoard.indexPos);
                item.node.active = false;
                this.mapItemBoards.delete(item.indexPos);
              }
            }
          });
          var value = Math.floor(this.countShowItem / 2);

          for (var i = -value; i < value + 1; i++) {
            var indexPos = i + indexPosCenter; // console.log("Check : i="+i+"    indexPos="+indexPos);

            if (indexPos >= 0 && indexPos < this.arrDataInfos.length) {
              if (this.mapItemBoards.has(indexPos)) {
                var itemBoard = this.mapItemBoards.get(indexPos);

                if (!itemBoard.node.active) {
                  itemBoard.node.active = true;
                }
              } else {
                var itemRecycle = this.getItemLeaderBoard_Recycle_FromPools();
                this.updateItem(itemRecycle, indexPos);
              }
            }
          }
        }

        updateItem(itemScrollView, indexPos) {
          if (indexPos < this.arrDataInfos.length) {
            itemScrollView.node.setPosition(this.getPos_byIndex(indexPos));
            itemScrollView.init(this.arrDataInfos[indexPos]);
            itemScrollView.setIndexPos(indexPos);
            this.mapItemBoards.set(indexPos, itemScrollView);
            itemScrollView.node.active = true;
          }
        }

        getPos_byIndex(_index) {
          var posY = -this.SIZE_ITEM / 2 - _index * (this.SIZE_ITEM + this.KC_Y);
          return new Vec3(0, posY, 0);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentGroup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemScrowViewPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "countShowItem", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 18;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "KC_Y", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "SIZE_ITEM", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 123;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "CONTENT_HIGHT", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 800;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "CONTENT_WIDTH", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1080;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "posYStart", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 400;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
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
//# sourceMappingURL=ScrollViewGroupManager.js.map