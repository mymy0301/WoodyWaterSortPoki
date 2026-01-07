System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, Node, Prefab, Size, tween, UITransform, Vec3, ItemBoxReward, SHOP_ITEM_TYPE, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, BoxRewardInfoGroup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItemBoxReward(extras) {
    _reporterNs.report("ItemBoxReward", "./ItemBoxReward", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroupRewardDataInfo(extras) {
    _reporterNs.report("GroupRewardDataInfo", "./info/ShopDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHOP_ITEM_TYPE(extras) {
    _reporterNs.report("SHOP_ITEM_TYPE", "../framework/constants", _context.meta, extras);
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
      Size = _cc.Size;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ItemBoxReward = _unresolved_2.ItemBoxReward;
    }, function (_unresolved_3) {
      SHOP_ITEM_TYPE = _unresolved_3.SHOP_ITEM_TYPE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fd190K8o4BCtbJ+g8fPXza5", "BoxRewardInfoGroup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = BoxRewardInfoGroup
       * DateTime = Fri Oct 04 2024 17:21:46 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = BoxRewardInfoGroup.ts
       * FileBasenameNoExtension = BoxRewardInfoGroup
       * URL = db://assets/scripts/game/BoxRewardInfoGroup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("BoxRewardInfoGroup", BoxRewardInfoGroup = (_dec = ccclass('BoxRewardInfoGroup'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(UITransform), _dec(_class = (_class2 = (_temp = class BoxRewardInfoGroup extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "arrItemRewardPrefabs", _descriptor, this);

          _initializerDefineProperty(this, "itemPlus", _descriptor2, this);

          _initializerDefineProperty(this, "contentGroup", _descriptor3, this);

          _initializerDefineProperty(this, "bgUITransform", _descriptor4, this);

          _defineProperty(this, "tweenShow", null);

          _defineProperty(this, "tweenHide", null);
        }

        showBoxRewardInfoGroup(posStart, isBottom, groupRewardDataInfo) {
          this.contentGroup.destroyAllChildren();
          this.node.setWorldPosition(posStart);
          let sizeX = groupRewardDataInfo.items.length * 90 + (groupRewardDataInfo.items.length - 1) * 30;
          let sizeBGX = sizeX + 40;
          let posX = (sizeBGX - 215) / 2;
          this.bgUITransform.setContentSize(new Size(sizeBGX, 155));
          this.contentGroup.getComponent(UITransform).setContentSize(new Size(sizeX, 100));
          this.bgUITransform.node.setPosition(new Vec3(-posX, 0, 0));

          if (isBottom) {
            this.bgUITransform.node.setScale(new Vec3(1, 1, 1));
            this.contentGroup.setPosition(new Vec3(-posX, -65, 0));
          } else {
            this.bgUITransform.node.setScale(new Vec3(1, -1, 1));
            this.contentGroup.setPosition(new Vec3(-posX, 90, 0));
          }

          for (let i = 0; i < groupRewardDataInfo.items.length; i++) {
            let item = instantiate(this.getItemRewardReceivePrefab(groupRewardDataInfo.items[i].itemShopType));
            item.parent = this.contentGroup;
            let itemBoxReward = item.getComponent(_crd && ItemBoxReward === void 0 ? (_reportPossibleCrUseOfItemBoxReward({
              error: Error()
            }), ItemBoxReward) : ItemBoxReward);
            itemBoxReward.initValue(groupRewardDataInfo.items[i].itemShopType, groupRewardDataInfo.items[i].value);

            if (i < groupRewardDataInfo.items.length - 1) {
              let item = instantiate(this.itemPlus);
              item.parent = this.contentGroup;
            }
          }

          this.node.active = true;
          this.reset();
          this.tweenShow = tween(this.node).to(0.3, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut',
            onComplete: () => {
              this.setTweenShowFinished();
            }
          }).start();
        }

        getItemRewardReceivePrefab(itemShopType) {
          // console.log(itemShopType);
          if (itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).COIN) {
            return this.arrItemRewardPrefabs[0];
          } else if (itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).BOOSTER_UNDO) {
            return this.arrItemRewardPrefabs[1];
          } else if (itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).BOOSTER_SUGGEST) {
            return this.arrItemRewardPrefabs[2];
          } else if (itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).BOOSTER_ADDCOL) {
            return this.arrItemRewardPrefabs[3];
          } else if (itemShopType == (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).HEART_UNLIMITED) {
            return this.arrItemRewardPrefabs[4];
          }
        }

        setTweenShowFinished() {
          this.tweenHide = tween(this.node).delay(2).to(0.4, {
            scale: new Vec3(0, 0, 0)
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
        }

        reset() {
          this.node.setScale(new Vec3(0, 0, 0));

          if (this.tweenShow != null) {
            this.tweenShow.stop();
          }

          if (this.tweenHide != null) {
            this.tweenHide.stop();
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "arrItemRewardPrefabs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemPlus", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "contentGroup", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bgUITransform", [_dec5], {
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
//# sourceMappingURL=BoxRewardInfoGroup.js.map