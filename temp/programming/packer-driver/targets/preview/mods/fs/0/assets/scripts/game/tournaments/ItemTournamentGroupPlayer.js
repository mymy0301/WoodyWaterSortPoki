System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Color, Component, Label, LabelOutline, Node, Sprite, SpriteFrame, localConfig, AVATAR_TYPE, resourceUtil, Utils, FBInstantManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, ItemTournamentGroupPlayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItemRankInfo(extras) {
    _reporterNs.report("ItemRankInfo", "../../common/ItemRankInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAVATAR_TYPE(extras) {
    _reporterNs.report("AVATAR_TYPE", "../../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../core/utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "../../common/FBInstantManager", _context.meta, extras);
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
      LabelOutline = _cc.LabelOutline;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
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

      _cclegacy._RF.push({}, "57a23QMNDlL6Z7ILnb+obe2", "ItemTournamentGroupPlayer", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemTournamentGroupPlayer
       * DateTime = Tue Oct 29 2024 10:44:06 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemTournamentGroupPlayer.ts
       * FileBasenameNoExtension = ItemTournamentGroupPlayer
       * URL = db://assets/scripts/game/tournaments/ItemTournamentGroupPlayer.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemTournamentGroupPlayer", ItemTournamentGroupPlayer = (_dec = ccclass('ItemTournamentGroupPlayer'), _dec2 = property(Node), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec5 = property(Label), _dec6 = property(LabelOutline), _dec7 = property(Label), _dec8 = property(Node), _dec(_class = (_class2 = (_temp = class ItemTournamentGroupPlayer extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "groupPlayer", _descriptor, this);

          _initializerDefineProperty(this, "avatar", _descriptor2, this);

          _initializerDefineProperty(this, "avatarDefault", _descriptor3, this);

          _initializerDefineProperty(this, "txtName", _descriptor4, this);

          _initializerDefineProperty(this, "txtNameOutline", _descriptor5, this);

          _initializerDefineProperty(this, "txtScore", _descriptor6, this);

          _initializerDefineProperty(this, "iconLoading", _descriptor7, this);

          _defineProperty(this, "itemRankInfo", null);
        }

        initPlayer(_itemRankInfo) {
          this.itemRankInfo = _itemRankInfo;

          if (this.itemRankInfo.isMyRank) {
            this.txtName.string = "" + (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
              error: Error()
            }), FBInstantManager) : FBInstantManager).instance.getName(); // this.txtName.color = new Color(22,182,0,255);

            this.txtNameOutline.color = new Color(0, 102, 0, 255);
          } else {
            // this.txtName.color = new Color(255,255,255,255);
            this.txtNameOutline.color = new Color(0, 57, 102, 255);
          }

          this.txtName.string = "" + this.itemRankInfo.userName;
          this.avatar.spriteFrame = this.avatarDefault;

          if (this.txtScore) {
            this.txtScore.string = "" + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).formatNumber(this.itemRankInfo.userScore);
          }

          this.iconLoading.active = false;
          this.loadAvatar();
          this.node.active = true;
        }

        reset() {
          this.avatar.spriteFrame = this.avatarDefault;
          this.txtName.string = "";
          this.txtScore.string = "";
          this.iconLoading.active = false;
          this.node.active = false;
        }

        loadAvatar() {
          if (this.itemRankInfo.isMyRank) {
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.myAvatarSpriteFrame != null) {
              this.avatar.spriteFrame = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.myAvatarSpriteFrame;
            }
          } else if (this.itemRankInfo.avatarType == (_crd && AVATAR_TYPE === void 0 ? (_reportPossibleCrUseOfAVATAR_TYPE({
            error: Error()
          }), AVATAR_TYPE) : AVATAR_TYPE).TYPE_WEB) {
            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.mapCacheAvatars.has(this.itemRankInfo.playerID)) {
              this.avatar.spriteFrame = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.mapCacheAvatars.get(this.itemRankInfo.playerID);
            } else {
              this.iconLoading.active = true;
              (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
                error: Error()
              }), resourceUtil) : resourceUtil).setRemoteImage(this.itemRankInfo.avatarURL, this.avatar, (err, spriteFrame) => {
                if (err) {
                  console.log(err);
                  return;
                }

                (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.mapCacheAvatars.set(this.itemRankInfo.playerID, spriteFrame);
                this.iconLoading.active = false;
              });
            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "groupPlayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "avatar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "avatarDefault", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txtName", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txtNameOutline", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "txtScore", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "iconLoading", [_dec8], {
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
//# sourceMappingURL=ItemTournamentGroupPlayer.js.map