System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, macro, Label, CCString, lodash, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, TextLoading;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOflodash(extras) {
    _reporterNs.report("lodash", "../framework/lodash", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      macro = _cc.macro;
      Label = _cc.Label;
      CCString = _cc.CCString;
    }, function (_unresolved_2) {
      lodash = _unresolved_2.lodash;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7fef2T24+xJxY6UUfmbXp2V", "TextLoading", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TextLoading", TextLoading = (_dec = ccclass('TextLoading'), _dec2 = property(Label), _dec3 = property(CCString), _dec4 = property(Boolean), _dec(_class = (_class2 = (_temp = class TextLoading extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "txtLoading", _descriptor, this);

          _initializerDefineProperty(this, "contentText", _descriptor2, this);

          _defineProperty(this, "indexLoading", -1);

          _initializerDefineProperty(this, "isRandomTime", _descriptor3, this);
        }

        start() {}

        update(deltaTime) {}

        onEnable() {
          if (this.isRandomTime) {
            this.txtLoading.string = "" + this.contentText;
            this.scheduleOnce(() => {
              this.schedule(this.showTextLoading, 0.2, macro.REPEAT_FOREVER);
            }, (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).randomFloat(0, 0.3));
          } else {
            this.schedule(this.showTextLoading, 0.2, macro.REPEAT_FOREVER);
          }
        }

        onDisable() {
          this.unschedule(this.showTextLoading);
        }

        showTextLoading() {
          this.indexLoading++;
          if (this.indexLoading == 4) this.indexLoading = 0;

          if (this.indexLoading == 0) {
            this.txtLoading.string = "" + this.contentText;
          } else if (this.indexLoading == 1) {
            this.txtLoading.string = this.contentText + ".";
          } else if (this.indexLoading == 2) {
            this.txtLoading.string = this.contentText + "..";
          } else if (this.indexLoading == 3) {
            this.txtLoading.string = this.contentText + "...";
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtLoading", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "contentText", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "Loading";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isRandomTime", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TextLoading.js.map