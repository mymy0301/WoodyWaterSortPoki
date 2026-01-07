System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Color, Component, Label, Node, Sprite, SpriteFrame, tween, UIOpacity, Vec3, localConfig, AVATAR_TYPE, resourceUtil, Utils, FBInstantManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _temp, _crd, ccclass, property, ItemLeaderBoard;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItemRankInfo(extras) {
    _reporterNs.report("ItemRankInfo", "../common/ItemRankInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAVATAR_TYPE(extras) {
    _reporterNs.report("AVATAR_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../core/utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "../common/FBInstantManager", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      localConfig = _unresolved_2.localConfig;
    }, function (_unresolved_3) {
      AVATAR_TYPE = _unresolved_3.AVATAR_TYPE;
    }, function (_unresolved_4) {
      resourceUtil = _unresolved_4.resourceUtil;
    }, function (_unresolved_5) {
      Utils = _unresolved_5.default;
    }, function (_unresolved_6) {
      FBInstantManager = _unresolved_6.FBInstantManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8f804Ozx8lOVZQ1kr40Tb+p", "ItemLeaderBoard", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemLeaderBoard
       * DateTime = Thu Oct 17 2024 09:44:39 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemLeaderBoard.ts
       * FileBasenameNoExtension = ItemLeaderBoard
       * URL = db://assets/scripts/game/ItemLeaderBoard.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemLeaderBoard", ItemLeaderBoard = (_dec = ccclass('ItemLeaderBoard'), _dec2 = property(Node), _dec3 = property(UIOpacity), _dec4 = property(Sprite), _dec5 = property(SpriteFrame), _dec6 = property(Sprite), _dec7 = property(SpriteFrame), _dec8 = property(Sprite), _dec9 = property(SpriteFrame), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec(_class = (_class2 = (_temp = class ItemLeaderBoard extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "itemRankInfo", void 0);

          _initializerDefineProperty(this, "nodeGroup", _descriptor, this);

          _initializerDefineProperty(this, "nodeGroupOpacity", _descriptor2, this);

          _defineProperty(this, "tweenGroup", null);

          _defineProperty(this, "tweenGroupOpacity", null);

          _initializerDefineProperty(this, "iconAvatar", _descriptor3, this);

          _initializerDefineProperty(this, "sfAvatarDefault", _descriptor4, this);

          _initializerDefineProperty(this, "frameRank", _descriptor5, this);

          _initializerDefineProperty(this, "arrSfFrameRanks", _descriptor6, this);

          _initializerDefineProperty(this, "iconRank", _descriptor7, this);

          _initializerDefineProperty(this, "arrSfIconRanks", _descriptor8, this);

          _initializerDefineProperty(this, "txtRank", _descriptor9, this);

          _initializerDefineProperty(this, "txtName", _descriptor10, this);

          _initializerDefineProperty(this, "txtScore", _descriptor11, this);

          _defineProperty(this, "indexPos", void 0);

          _defineProperty(this, "timeDelayShow", 0);
        }

        setIndexPos(_indexPos) {
          this.indexPos = _indexPos;
        }

        init(_itemRankInfo, _timeDelay = 0) {
          this.timeDelayShow = _timeDelay; // console.log("init itemRankInfo:",_itemRankInfo);

          this.itemRankInfo = _itemRankInfo;
          this.loadAvatar();

          if (this.itemRankInfo.userName != null && this.itemRankInfo.userName != 'undefined') {
            this.txtName.string = `${this.itemRankInfo.userName}`;
          }

          if (this.itemRankInfo.isMyRank) {
            this.txtName.string = `${(_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
              error: Error()
            }), FBInstantManager) : FBInstantManager).instance.getName()}`;
            this.txtName.color = new Color(22, 182, 0, 255);
          } else {
            this.txtName.color = new Color(156, 53, 4, 255);
          }

          this.txtScore.string = `${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).formatNumber(this.itemRankInfo.userScore)}`;

          if (this.itemRankInfo.indexRank >= 100) {
            this.txtRank.string = `99+`;
          } else {
            this.txtRank.string = `${this.itemRankInfo.indexRank}`;
          }

          if (this.itemRankInfo.indexRank <= 3) {
            this.iconRank.node.active = true;
            this.iconRank.spriteFrame = this.arrSfIconRanks[this.itemRankInfo.indexRank - 1];
            this.frameRank.spriteFrame = this.arrSfFrameRanks[this.itemRankInfo.indexRank - 1];
          } else {
            this.iconRank.node.active = false;
            this.frameRank.spriteFrame = this.arrSfFrameRanks[3];
          }

          this.showItem();
        }

        showItem() {
          if (this.tweenGroup != null) {
            this.tweenGroup.stop();
            this.tweenGroup = null;
          }

          if (this.tweenGroupOpacity != null) {
            this.tweenGroupOpacity.stop();
            this.tweenGroupOpacity = null;
          }

          this.nodeGroupOpacity.opacity = 0;
          this.nodeGroup.active = true;
          this.nodeGroup.setScale(new Vec3(0.8, 0.8, 1));
          this.tweenGroup = tween(this.nodeGroup).delay(this.timeDelayShow).to(0.3, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'quadOut',
            onComplete: () => {}
          }).start();
          this.tweenGroupOpacity = tween(this.nodeGroupOpacity).delay(this.timeDelayShow).to(0.3, {
            opacity: 255
          }, {
            easing: 'linear',
            onComplete: () => {}
          }).start();
        }

        loadAvatar() {
          this.iconAvatar.spriteFrame = this.sfAvatarDefault;

          if (this.itemRankInfo.isMyRank) {
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.myAvatarSpriteFrame != null) {
              this.iconAvatar.spriteFrame = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.myAvatarSpriteFrame;
            }
          } else if (this.itemRankInfo.avatarType == (_crd && AVATAR_TYPE === void 0 ? (_reportPossibleCrUseOfAVATAR_TYPE({
            error: Error()
          }), AVATAR_TYPE) : AVATAR_TYPE).TYPE_WEB) {
            // console.log(localConfig.instance.mapCacheAvatars);
            // console.log(this.itemRankInfo.playerID);
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.mapCacheAvatars.has(this.itemRankInfo.playerID)) {
              this.iconAvatar.spriteFrame = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.mapCacheAvatars.get(this.itemRankInfo.playerID);
            } else {
              // console.log("load avatar: " + this.itemRankInfo.playerID);
              this.iconAvatar.spriteFrame = this.sfAvatarDefault;
              (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
                error: Error()
              }), resourceUtil) : resourceUtil).setRemoteImage(this.itemRankInfo.avatarURL, this.iconAvatar, (err, spriteFrame) => {
                if (err) {} else {
                  (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.mapCacheAvatars.set(this.itemRankInfo.playerID, spriteFrame);
                }
              });
            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeGroup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeGroupOpacity", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconAvatar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sfAvatarDefault", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "frameRank", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "arrSfFrameRanks", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "iconRank", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "arrSfIconRanks", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "txtRank", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "txtName", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "txtScore", [_dec12], {
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
//# sourceMappingURL=ItemLeaderBoard.js.map