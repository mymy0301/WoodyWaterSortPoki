System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, CCInteger, Component, instantiate, Node, Prefab, ScrollView, Size, UITransform, Vec3, ItemLeaderBoard, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp, _crd, ccclass, property, LeaderBoardGroupManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItemRankInfo(extras) {
    _reporterNs.report("ItemRankInfo", "../common/ItemRankInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemLeaderBoard(extras) {
    _reporterNs.report("ItemLeaderBoard", "./ItemLeaderBoard", _context.meta, extras);
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
      ItemLeaderBoard = _unresolved_2.ItemLeaderBoard;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b086dI6TrhOkKcbX/WwwhQ6", "LeaderBoardGroupManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LeaderBoardGroupManager", LeaderBoardGroupManager = (_dec = ccclass('LeaderBoardGroupManager'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(CCInteger), _dec5 = property(CCInteger), _dec6 = property(CCInteger), _dec7 = property(CCInteger), _dec8 = property(CCInteger), _dec9 = property(CCInteger), _dec10 = property(ScrollView), _dec11 = property(_crd && ItemLeaderBoard === void 0 ? (_reportPossibleCrUseOfItemLeaderBoard({
        error: Error()
      }), ItemLeaderBoard) : ItemLeaderBoard), _dec(_class = (_class2 = (_temp = class LeaderBoardGroupManager extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "arrItemRankInfos", []);

          _initializerDefineProperty(this, "contentGroup", _descriptor, this);

          _initializerDefineProperty(this, "itemLeaderBoardPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "countShowItem", _descriptor3, this);

          _initializerDefineProperty(this, "KC_Y", _descriptor4, this);

          _initializerDefineProperty(this, "SIZE_ITEM", _descriptor5, this);

          _initializerDefineProperty(this, "CONTENT_HIGHT", _descriptor6, this);

          _initializerDefineProperty(this, "CONTENT_WIDTH", _descriptor7, this);

          _initializerDefineProperty(this, "posYStart", _descriptor8, this);

          _defineProperty(this, "arrPoolItems", []);

          _defineProperty(this, "mapItemBoards", new Map());

          _initializerDefineProperty(this, "scrollView", _descriptor9, this);

          _initializerDefineProperty(this, "myItemLeaderBoard", _descriptor10, this);

          _defineProperty(this, "indexMyRank", -1);

          _defineProperty(this, "isShowMyRank", false);

          _defineProperty(this, "lastIndexPosCenter", -1);
        }

        onEnable() {
          this.scrollView.node.on(ScrollView.EventType.SCROLLING, this.setScrollEvent, this);
        }

        onDisable() {
          this.scrollView.node.off(ScrollView.EventType.SCROLLING, this.setScrollEvent, this);
        }

        initRankGroup(_arrItemRewardInfos) {
          if (this.myItemLeaderBoard) {
            this.myItemLeaderBoard.node.active = false;
          }

          this.resetRankGroup();
          this.arrItemRankInfos = _arrItemRewardInfos;
          let maxY = (this.SIZE_ITEM + this.KC_Y) * _arrItemRewardInfos.length + 200;
          this.contentGroup.getComponent(UITransform).setContentSize(new Size(this.CONTENT_WIDTH, maxY));
          this.contentGroup.setPosition(new Vec3(0, this.posYStart, 0));
          this.scrollView.scrollToTop();

          if (this.myItemLeaderBoard) {
            this.indexMyRank = this.arrItemRankInfos.findIndex(item => item.isMyRank == true);
          }

          this.showInitRank();
        }

        resetRankGroup() {
          if (this.myItemLeaderBoard) {
            this.myItemLeaderBoard.node.active = false;
          }

          this.contentGroup.destroyAllChildren();
          this.arrPoolItems = [];
          this.mapItemBoards.clear();
          this.scrollView.stopAutoScroll();
          this.arrItemRankInfos = [];
        }

        getPos_byIndex(_index) {
          let posY = -this.SIZE_ITEM / 2 - _index * (this.SIZE_ITEM + this.KC_Y);
          return new Vec3(0, posY, 0);
        }

        showInitRank() {
          for (let i = 0; i < this.countShowItem; i++) {
            if (i < this.arrItemRankInfos.length) {
              let itemLeaderBoard = this.getItemLeaderBoard_Recycle_FromPools();
              itemLeaderBoard.node.setPosition(this.getPos_byIndex(i));
              itemLeaderBoard.init(this.arrItemRankInfos[i], 0.1 * i);
              itemLeaderBoard.setIndexPos(i);
              this.mapItemBoards.set(i, itemLeaderBoard);
            }
          }

          for (let i = 0; i < this.arrItemRankInfos.length; i++) {
            if (this.arrItemRankInfos[i].isMyRank) {
              if (this.myItemLeaderBoard) {
                this.myItemLeaderBoard.init(this.arrItemRankInfos[i]);
                this.myItemLeaderBoard.node.active = true;
              }
            }
          }

          if (this.indexMyRank > -1) {
            if (this.mapItemBoards.has(this.indexMyRank)) {
              this.isShowMyRank = false;
              this.myItemLeaderBoard.node.active = false;
            } else {
              this.isShowMyRank = true;
              this.myItemLeaderBoard.node.active = true;
            }
          }
        }

        updateItemRank(itemLeaderBoard, indexPos) {
          if (indexPos < this.arrItemRankInfos.length) {
            itemLeaderBoard.node.setPosition(this.getPos_byIndex(indexPos));
            itemLeaderBoard.init(this.arrItemRankInfos[indexPos]);
            itemLeaderBoard.setIndexPos(indexPos);
            this.mapItemBoards.set(indexPos, itemLeaderBoard);
            itemLeaderBoard.node.active = true;
          }
        }

        setScrollEvent() {
          // console.log(this.contentGroup.position.y);
          let indexPosCenter = Math.floor((this.contentGroup.position.y - this.posYStart + this.CONTENT_HIGHT / 2) / (this.SIZE_ITEM + this.KC_Y));
          if (this.lastIndexPosCenter == indexPosCenter) return;
          this.lastIndexPosCenter = indexPosCenter;
          this.mapItemBoards.forEach(itemLeaderBoard => {
            // console.log("Check itemLeaderBoard:"+itemLeaderBoard.indexPos);
            if (itemLeaderBoard.node.active) {
              // console.log("Check itemLeaderBoard22222:"+itemLeaderBoard.indexPos);
              // console.log(itemLeaderBoard.indexPos, indexPosCenter - this.countShowItem / 2, indexPosCenter + this.countShowItem / 2, itemLeaderBoard.indexPos < indexPosCenter - this.countShowItem / 2 || itemLeaderBoard.indexPos > indexPosCenter + this.countShowItem / 2);
              if (itemLeaderBoard.indexPos < indexPosCenter - this.countShowItem / 2 || itemLeaderBoard.indexPos > indexPosCenter + this.countShowItem / 2) {
                // console.log("HIDE ITEM:" + itemLeaderBoard.indexPos);
                itemLeaderBoard.node.active = false;
                this.mapItemBoards.delete(itemLeaderBoard.indexPos);
              }
            }
          });
          let value = Math.floor(this.countShowItem / 2);

          for (let i = -value; i < value + 1; i++) {
            let indexPos = i + indexPosCenter; // console.log("Check : i="+i+"    indexPos="+indexPos);

            if (indexPos >= 0 && indexPos < this.arrItemRankInfos.length) {
              if (this.mapItemBoards.has(indexPos)) {
                let itemBoard = this.mapItemBoards.get(indexPos);

                if (!itemBoard.node.active) {
                  itemBoard.node.active = true;
                }
              } else {
                let itemRecycle = this.getItemLeaderBoard_Recycle_FromPools();
                this.updateItemRank(itemRecycle, indexPos);
              }
            }
          }

          if (this.indexMyRank > -1) {
            if (this.mapItemBoards.has(this.indexMyRank) && this.isShowMyRank) {
              // console.log("HIDE");
              this.isShowMyRank = false;
              this.myItemLeaderBoard.node.active = false;
            } else if (!this.mapItemBoards.has(this.indexMyRank) && !this.isShowMyRank) {
              // console.log("SHOW");
              this.isShowMyRank = true;
              this.myItemLeaderBoard.node.active = true;
            }
          }
        }

        getItemLeaderBoard_Recycle_FromPools() {
          for (let i = 0; i < this.arrPoolItems.length; i++) {
            if (!this.arrPoolItems[i].node.active) {
              return this.arrPoolItems[i];
            }
          } // console.error("-------------------------------------------------------------");


          let item = instantiate(this.itemLeaderBoardPrefab);
          item.setParent(this.contentGroup);
          let itemLeaderBoard = item.getComponent(_crd && ItemLeaderBoard === void 0 ? (_reportPossibleCrUseOfItemLeaderBoard({
            error: Error()
          }), ItemLeaderBoard) : ItemLeaderBoard);
          this.arrPoolItems.push(itemLeaderBoard);
          return itemLeaderBoard;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentGroup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemLeaderBoardPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "countShowItem", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 18;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "KC_Y", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "SIZE_ITEM", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 123;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "CONTENT_HIGHT", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 800;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "CONTENT_WIDTH", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1080;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "posYStart", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 400;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "myItemLeaderBoard", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LeaderBoardGroupManager.js.map