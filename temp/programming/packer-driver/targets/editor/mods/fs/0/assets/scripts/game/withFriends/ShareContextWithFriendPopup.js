System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Camera, Component, Label, Node, Sprite, SpriteFrame, localConfig, FBInstantManager, Utils, resourceUtil, captureNode, getBase64, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp, _crd, ccclass, property, ShareContextWithFriendPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfWithFriendDataInfo(extras) {
    _reporterNs.report("WithFriendDataInfo", "./WithFriendDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetBase64Image_Callback(extras) {
    _reporterNs.report("GetBase64Image_Callback", "../../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "../../common/FBInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../core/utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcaptureNode(extras) {
    _reporterNs.report("captureNode", "../../common/capture-screen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetBase(extras) {
    _reporterNs.report("getBase64", "../../common/capture-screen", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      localConfig = _unresolved_2.localConfig;
    }, function (_unresolved_3) {
      FBInstantManager = _unresolved_3.FBInstantManager;
    }, function (_unresolved_4) {
      Utils = _unresolved_4.default;
    }, function (_unresolved_5) {
      resourceUtil = _unresolved_5.resourceUtil;
    }, function (_unresolved_6) {
      captureNode = _unresolved_6.captureNode;
      getBase64 = _unresolved_6.getBase64;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99d1aCIDVZMWKKsEGrD+PGg", "ShareContextWithFriendPopup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ShareContextWithFriendPopup
       * DateTime = Mon Mar 24 2025 14:34:44 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ShareContextWithFriendPopup.ts
       * FileBasenameNoExtension = ShareContextWithFriendPopup
       * URL = db://assets/scripts/game/withFriends/ShareContextWithFriendPopup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ShareContextWithFriendPopup", ShareContextWithFriendPopup = (_dec = ccclass('ShareContextWithFriendPopup'), _dec2 = property(Camera), _dec3 = property(Sprite), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Sprite), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = class ShareContextWithFriendPopup extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nodeCamera", _descriptor, this);

          _initializerDefineProperty(this, "playerAvatar", _descriptor2, this);

          _initializerDefineProperty(this, "playerName", _descriptor3, this);

          _initializerDefineProperty(this, "playerScore", _descriptor4, this);

          _initializerDefineProperty(this, "nodePlayerWin", _descriptor5, this);

          _initializerDefineProperty(this, "friendAvatar", _descriptor6, this);

          _initializerDefineProperty(this, "friendName", _descriptor7, this);

          _initializerDefineProperty(this, "friendScore", _descriptor8, this);

          _initializerDefineProperty(this, "nodeFriendWin", _descriptor9, this);

          _initializerDefineProperty(this, "sfAvatarDefault", _descriptor10, this);
        }

        showUpdateContextWithFriendPopup(withFriendDataInfo, cb) {
          this.node.active = true;
          this.nodeCamera.node.active = true; // console.log("showUpdateContextWithFriendPopup",withFriendDataInfo);

          this.playerName.string = `${(_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.getName()}`;

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.myAvatarSpriteFrame) {
            this.playerAvatar.spriteFrame = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.myAvatarSpriteFrame;
          }

          this.nodePlayerWin.active = false;
          this.nodeFriendWin.active = false;
          this.friendAvatar.spriteFrame = this.sfAvatarDefault;

          if (withFriendDataInfo.senderID == (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.getID()) {
            //SENDER == PLAYER
            if (withFriendDataInfo.senderScore == 0) {
              this.playerScore.string = `???`;
            } else {
              this.playerScore.string = `${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).formatNumber(Math.floor(withFriendDataInfo.senderScore))}`;
            }

            if (withFriendDataInfo.receiverName.length == 0) {
              this.friendName.string = `Your Friend`;
            } else {
              this.friendName.string = `${withFriendDataInfo.receiverName}`;
            }

            if (withFriendDataInfo.receiverScore == 0) {
              this.friendScore.string = `???`;
              this.nodePlayerWin.active = true;
            } else {
              this.friendScore.string = `${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).formatNumber(Math.floor(withFriendDataInfo.receiverScore))}`;

              if (withFriendDataInfo.senderScore >= withFriendDataInfo.receiverScore) {
                this.nodePlayerWin.active = true;
              } else {
                this.nodeFriendWin.active = true;
              }
            }

            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.mapCacheAvatars.has(withFriendDataInfo.receiverID)) {
              if (this.friendAvatar) {
                this.friendAvatar.spriteFrame = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.mapCacheAvatars.get(withFriendDataInfo.receiverID);
              }
            } else {
              if (withFriendDataInfo.receiverAvatarURL.length == 0) {} else {
                (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
                  error: Error()
                }), resourceUtil) : resourceUtil).setRemoteImage(withFriendDataInfo.receiverAvatarURL, this.friendAvatar, (err, sf) => {
                  if (err) {
                    this.friendAvatar.spriteFrame = null;
                  } else {
                    (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.mapCacheAvatars.set(withFriendDataInfo.receiverID, sf);
                  }
                });
              }
            }
          } else if (withFriendDataInfo.receiverID == (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.getID()) {
            //RECEIVER == PLAYER
            if (withFriendDataInfo.receiverScore == 0) {
              this.playerScore.string = `???`;
            } else {
              this.playerScore.string = `${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).formatNumber(Math.floor(withFriendDataInfo.receiverScore))}`;
            }

            if (withFriendDataInfo.senderName.length == 0) {
              this.friendName.string = `Your Friend`;
            } else {
              this.friendName.string = `${withFriendDataInfo.senderName}`;
            }

            if (withFriendDataInfo.senderScore == 0) {
              this.friendScore.string = `???`;
              this.nodePlayerWin.active = true;
            } else {
              this.friendScore.string = `${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).formatNumber(Math.floor(withFriendDataInfo.senderScore))}`;

              if (withFriendDataInfo.receiverScore >= withFriendDataInfo.senderScore) {
                this.nodePlayerWin.active = true;
              } else {
                this.nodeFriendWin.active = false;
              }
            }

            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.mapCacheAvatars.has(withFriendDataInfo.senderID)) {
              if (this.friendAvatar) {
                this.friendAvatar.spriteFrame = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                  error: Error()
                }), localConfig) : localConfig).instance.mapCacheAvatars.get(withFriendDataInfo.senderID);
              }
            } else {
              if (withFriendDataInfo.senderAvatarURL.length == 0) {} else {
                (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
                  error: Error()
                }), resourceUtil) : resourceUtil).setRemoteImage(withFriendDataInfo.senderAvatarURL, this.friendAvatar, (err, sf) => {
                  if (err) {
                    this.friendAvatar.spriteFrame = null;
                  } else {
                    (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                      error: Error()
                    }), localConfig) : localConfig).instance.mapCacheAvatars.set(withFriendDataInfo.senderID, sf);
                  }
                });
              }
            }
          }

          this.captureNode_Invite(cb);
        }

        captureNode_Invite(cb) {
          let self = this;
          (_crd && captureNode === void 0 ? (_reportPossibleCrUseOfcaptureNode({
            error: Error()
          }), captureNode) : captureNode)(this.node, this.nodeCamera).then(() => {
            let base64 = (_crd && getBase64 === void 0 ? (_reportPossibleCrUseOfgetBase({
              error: Error()
            }), getBase64) : getBase64)(this.nodeCamera, 800, 450); // console.log("base : ", base64)

            self.node.active = false;
            self.nodeCamera.node.active = false;
            cb(base64);
          }).catch(() => {
            cb("");
          });
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerAvatar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "playerName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "playerScore", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodePlayerWin", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "friendAvatar", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "friendName", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "friendScore", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nodeFriendWin", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "sfAvatarDefault", [_dec11], {
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
//# sourceMappingURL=ShareContextWithFriendPopup.js.map