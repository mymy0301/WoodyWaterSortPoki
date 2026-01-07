System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, oneToMultiListener, _dec, _class, _class2, _temp, _crd, ccclass, property, clientEvent;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfoneToMultiListener(extras) {
    _reporterNs.report("oneToMultiListener", "./oneToMultiListener", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      oneToMultiListener = _unresolved_2.oneToMultiListener;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "61133gXPjxCno7RFHHNkqew", "clientEvent", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("clientEvent", clientEvent = (_dec = ccclass("clientEvent"), _dec(_class = (_temp = _class2 = class clientEvent extends (_crd && oneToMultiListener === void 0 ? (_reportPossibleCrUseOfoneToMultiListener({
        error: Error()
      }), oneToMultiListener) : oneToMultiListener) {}, _defineProperty(_class2, "handlers", {}), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=clientEvent.js.map