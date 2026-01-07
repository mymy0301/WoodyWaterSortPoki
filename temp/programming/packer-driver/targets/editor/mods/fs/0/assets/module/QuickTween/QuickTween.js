System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Node, Vec3, tween, Sprite, Color, easing, Camera, calcPunchData, calcShakeData, _crd;

  function _reportPossibleCrUseOfcalcPunchData(extras) {
    _reporterNs.report("calcPunchData", "./Util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcalcShakeData(extras) {
    _reporterNs.report("calcShakeData", "./Util", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      Sprite = _cc.Sprite;
      Color = _cc.Color;
      easing = _cc.easing;
      Camera = _cc.Camera;
    }, function (_unresolved_2) {
      calcPunchData = _unresolved_2.calcPunchData;
      calcShakeData = _unresolved_2.calcShakeData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "20531fqbcBMdYAOqZjdFtlj", "QuickTween", undefined);

      //////////////////////
      // Transform
      //////////////////////
      Node.prototype.qtPosition = function (to, duration, opts) {
        return tween(this).to(duration, {
          position: to
        }, opts);
      };

      Node.prototype.qtPositionX = function (to, duration, opts) {
        const startPos = this.position;
        return tween(this).to(duration, {
          position: new Vec3(to, startPos.y, startPos.z)
        }, opts);
      };

      Node.prototype.qtPositionY = function (to, duration, opts) {
        const startPos = this.position;
        return tween(this).to(duration, {
          position: new Vec3(startPos.x, to, startPos.z)
        }, opts);
      };

      Node.prototype.qtPositionZ = function (to, duration, opts) {
        const startPos = this.position;
        return tween(this).to(duration, {
          position: new Vec3(startPos.x, startPos.y, to)
        }, opts);
      };

      Node.prototype.qtWorldPosition = function (to, duration, opts) {
        return tween(this).to(duration, {
          worldPosition: to
        }, opts);
      };

      Node.prototype.qtWorldPositionX = function (to, duration, opts) {
        const startPos = this.worldPosition;
        return tween(this).to(duration, {
          worldPosition: new Vec3(to, startPos.y, startPos.z)
        }, opts);
      };

      Node.prototype.qtWorldPositionY = function (to, duration, opts) {
        const startPos = this.worldPosition;
        return tween(this).to(duration, {
          worldPosition: new Vec3(startPos.x, to, startPos.z)
        }, opts);
      };

      Node.prototype.qtWorldPositionZ = function (to, duration, opts) {
        const startPos = this.worldPosition;
        return tween(this).to(duration, {
          worldPosition: new Vec3(startPos.x, startPos.y, to)
        }, opts);
      };

      Node.prototype.qtRotation = function (to, duration, opts) {
        return tween(this).to(duration, {
          eulerAngles: to
        }, opts);
      };

      Node.prototype.qtRotationQuat = function (to, duration, opts) {
        return tween(this).to(duration, {
          rotation: to
        }, opts);
      };

      Node.prototype.qtScale = function (to, duration, opts) {
        let toScale = to;

        if (!(to instanceof Vec3)) {
          toScale = new Vec3(to, to, to);
        }

        return tween(this).to(duration, {
          scale: toScale
        }, opts);
      };

      Node.prototype.qtScaleX = function (to, duration, opts) {
        const startScale = this.scale;
        return tween(this).to(duration, {
          scale: new Vec3(to, startScale.y, startScale.z)
        }, opts);
      };

      Node.prototype.qtScaleY = function (to, duration, opts) {
        const startScale = this.scale;
        return tween(this).to(duration, {
          scale: new Vec3(startScale.x, to, startScale.z)
        }, opts);
      };

      Node.prototype.qtScaleZ = function (to, duration, opts) {
        const startScale = this.scale;
        return tween(this).to(duration, {
          scale: new Vec3(startScale.x, startScale.y, to)
        }, opts);
      };

      Node.prototype.qtPunchPosition = function (punch, duration, opts) {
        var _opts$vibrato, _opts$elasticity;

        const vibrato = (_opts$vibrato = opts === null || opts === void 0 ? void 0 : opts.vibrato) !== null && _opts$vibrato !== void 0 ? _opts$vibrato : 3;
        const elasticity = (_opts$elasticity = opts === null || opts === void 0 ? void 0 : opts.elasticity) !== null && _opts$elasticity !== void 0 ? _opts$elasticity : 0.5;
        const {
          tos,
          durations
        } = (_crd && calcPunchData === void 0 ? (_reportPossibleCrUseOfcalcPunchData({
          error: Error()
        }), calcPunchData) : calcPunchData)(this.position.clone(), punch, duration, vibrato, elasticity);
        const punchTween = tween(this);
        tos.forEach((to, index) => {
          const d = durations[index];
          let tweenOpts;

          if (index === 0) {
            tweenOpts = {
              onStart: opts.onStart
            };
          } else if (index === tos.length - 1) {
            tweenOpts = {
              onComplete: opts.onComplete
            };
          }

          punchTween.then(tween().to(d, {
            position: to
          }, tweenOpts));
        });
        return punchTween.union();
      };

      Node.prototype.qtPunchRotation = function (punch, duration, opts) {
        var _opts$vibrato2, _opts$elasticity2;

        const vibrato = (_opts$vibrato2 = opts === null || opts === void 0 ? void 0 : opts.vibrato) !== null && _opts$vibrato2 !== void 0 ? _opts$vibrato2 : 3;
        const elasticity = (_opts$elasticity2 = opts === null || opts === void 0 ? void 0 : opts.elasticity) !== null && _opts$elasticity2 !== void 0 ? _opts$elasticity2 : 0.5;
        const {
          tos,
          durations
        } = (_crd && calcPunchData === void 0 ? (_reportPossibleCrUseOfcalcPunchData({
          error: Error()
        }), calcPunchData) : calcPunchData)(this.rotation.clone(), punch, duration, vibrato, elasticity);
        const punchTween = tween(this);
        tos.forEach((to, index) => {
          const d = durations[index];
          let tweenOpts;

          if (index === 0) {
            tweenOpts = {
              onStart: opts.onStart
            };
          } else if (index === tos.length - 1) {
            tweenOpts = {
              onComplete: opts.onComplete
            };
          }

          punchTween.then(tween().to(d, {
            eulerAngles: to
          }, tweenOpts));
        });
        return punchTween.union();
      };

      Node.prototype.qtPunchScale = function (punch, duration, opts) {
        var _opts$vibrato3, _opts$elasticity3;

        const vibrato = (_opts$vibrato3 = opts === null || opts === void 0 ? void 0 : opts.vibrato) !== null && _opts$vibrato3 !== void 0 ? _opts$vibrato3 : 3;
        const elasticity = (_opts$elasticity3 = opts === null || opts === void 0 ? void 0 : opts.elasticity) !== null && _opts$elasticity3 !== void 0 ? _opts$elasticity3 : 0.5;
        const {
          tos,
          durations
        } = (_crd && calcPunchData === void 0 ? (_reportPossibleCrUseOfcalcPunchData({
          error: Error()
        }), calcPunchData) : calcPunchData)(this.scale.clone(), punch, duration, vibrato, elasticity);
        const punchTween = tween(this);
        tos.forEach((to, index) => {
          const d = durations[index];
          let tweenOpts;

          if (index === 0) {
            tweenOpts = {
              onStart: opts.onStart
            };
          } else if (index === tos.length - 1) {
            tweenOpts = {
              onComplete: opts.onComplete
            };
          }

          punchTween.then(tween().to(d, {
            scale: to
          }, tweenOpts));
        });
        return punchTween.union();
      };

      Node.prototype.qtJumpPosition = function (to, jumpHeight, jumpNum, duration, opts) {
        const tweenPos = new Vec3();
        const jumpTween = tween(this);
        const totalNum = jumpNum * 2;
        this.jumpY = 0;
        let startPosY = 0;
        const yUpTween = tween().to(duration / totalNum, {
          jumpY: jumpHeight
        }, {
          onStart: target => {
            startPosY = target.position.y;
            target.jumpY = 0;
          },
          onUpdate: (target, ratio) => {
            tweenPos.set(target.position);
            tweenPos.y = startPosY + target.jumpY;
            target.position = tweenPos;
          },
          onComplete: target => {
            target.jumpY = 0;
          },
          easing: 'quadOut'
        }).to(duration / totalNum, {
          jumpY: jumpHeight
        }, {
          onStart: target => {
            startPosY = target.position.y;
          },
          onUpdate: (target, ratio) => {
            tweenPos.set(target.position);
            tweenPos.y = startPosY - target.jumpY;
            target.position = tweenPos;
          },
          onComplete: target => {
            target.jumpY = 0;
          },
          easing: 'quadIn'
        }).union().repeat(jumpNum);
        this.jumpOffsetY = 0;
        let offsetY = 0;
        const offsetYTween = tween().to(duration, {
          jumpOffsetY: to.y - this.position.y
        }, {
          onStart: target => {
            offsetY = to.y - target.position.y;
            target.jumpOffsetY = 0;
          },
          onUpdate: (target, ratio) => {
            const interpOffsetY = easing.quadOut(ratio) * offsetY;
            tweenPos.set(target.position);
            tweenPos.y += interpOffsetY;
            target.position = tweenPos;
          },
          onComplete: target => {
            target.jumpOffsetY = 0;
          },
          easing: 'quadOut'
        });
        this.jumpX = this.position.x;
        this.jumpZ = this.position.z;
        const xzTween = tween().to(duration, {
          jumpX: to.x,
          jumpZ: to.z
        }, {
          onStart: opts.onStart,
          onUpdate: (target, ratio) => {
            var _opts$onUpdate;

            tweenPos.set(target.position);
            tweenPos.x = target.jumpX;
            tweenPos.z = target.jumpZ;
            target.position = tweenPos;
            (_opts$onUpdate = opts.onUpdate) === null || _opts$onUpdate === void 0 ? void 0 : _opts$onUpdate.call(opts);
          },
          onComplete: target => {
            var _opts$onComplete;

            // delete target.jumpX;
            // delete target.jumpY;
            // delete target.jumpZ;
            // delete target.jumpOffsetY;
            target.jumpX = target.position.x;
            target.jumpZ = target.position.z;
            (_opts$onComplete = opts.onComplete) === null || _opts$onComplete === void 0 ? void 0 : _opts$onComplete.call(opts);
          }
        });
        jumpTween.parallel(yUpTween, offsetYTween, xzTween);
        return jumpTween;
      };

      Node.prototype.qtShakePosition = function (strength, duration, opts) {
        var _opts$vibrato4, _opts$randomness, _opts$fadeOut;

        const vibrato = (_opts$vibrato4 = opts === null || opts === void 0 ? void 0 : opts.vibrato) !== null && _opts$vibrato4 !== void 0 ? _opts$vibrato4 : 10;
        const randomness = (_opts$randomness = opts === null || opts === void 0 ? void 0 : opts.randomness) !== null && _opts$randomness !== void 0 ? _opts$randomness : 90;
        const fadeOut = (_opts$fadeOut = opts === null || opts === void 0 ? void 0 : opts.fadeOut) !== null && _opts$fadeOut !== void 0 ? _opts$fadeOut : true;
        let toStrength;
        let vectorBased = false;

        if (!(strength instanceof Vec3)) {
          toStrength = new Vec3(strength, strength, strength);
        } else {
          toStrength = strength;
          vectorBased = true;
        }

        const {
          tos,
          durations
        } = (_crd && calcShakeData === void 0 ? (_reportPossibleCrUseOfcalcShakeData({
          error: Error()
        }), calcShakeData) : calcShakeData)(this.position.clone(), duration, toStrength, vibrato, randomness, false, vectorBased, fadeOut);
        const shakeTween = tween(this);
        tos.forEach((to, index) => {
          const d = durations[index];
          let tweenOpts;

          if (index === 0) {
            tweenOpts = {
              onStart: opts.onStart
            };
          } else if (index === tos.length - 1) {
            tweenOpts = {
              onComplete: opts.onComplete
            };
          }

          shakeTween.then(tween().to(d, {
            position: to
          }, tweenOpts));
        });
        return shakeTween.union();
      };

      Node.prototype.qtShakeRotation = function (strength, duration, opts) {
        var _opts$vibrato5, _opts$randomness2, _opts$fadeOut2;

        const vibrato = (_opts$vibrato5 = opts === null || opts === void 0 ? void 0 : opts.vibrato) !== null && _opts$vibrato5 !== void 0 ? _opts$vibrato5 : 10;
        const randomness = (_opts$randomness2 = opts === null || opts === void 0 ? void 0 : opts.randomness) !== null && _opts$randomness2 !== void 0 ? _opts$randomness2 : 90;
        const fadeOut = (_opts$fadeOut2 = opts === null || opts === void 0 ? void 0 : opts.fadeOut) !== null && _opts$fadeOut2 !== void 0 ? _opts$fadeOut2 : true;
        let toStrength;
        let vectorBased = false;

        if (!(strength instanceof Vec3)) {
          toStrength = new Vec3(strength, strength, strength);
        } else {
          toStrength = strength;
          vectorBased = true;
        }

        const {
          tos,
          durations
        } = (_crd && calcShakeData === void 0 ? (_reportPossibleCrUseOfcalcShakeData({
          error: Error()
        }), calcShakeData) : calcShakeData)(this.eulerAngles.clone(), duration, toStrength, vibrato, randomness, false, vectorBased, fadeOut);
        const shakeTween = tween(this);
        tos.forEach((to, index) => {
          const d = durations[index];
          let tweenOpts;

          if (index === 0) {
            tweenOpts = {
              onStart: opts.onStart
            };
          } else if (index === tos.length - 1) {
            tweenOpts = {
              onComplete: opts.onComplete
            };
          }

          shakeTween.then(tween().to(d, {
            eulerAngles: to
          }, tweenOpts));
        });
        return shakeTween.union();
      };

      Node.prototype.qtShakeScale = function (strength, duration, opts) {
        var _opts$vibrato6, _opts$randomness3, _opts$fadeOut3;

        const vibrato = (_opts$vibrato6 = opts === null || opts === void 0 ? void 0 : opts.vibrato) !== null && _opts$vibrato6 !== void 0 ? _opts$vibrato6 : 10;
        const randomness = (_opts$randomness3 = opts === null || opts === void 0 ? void 0 : opts.randomness) !== null && _opts$randomness3 !== void 0 ? _opts$randomness3 : 90;
        const fadeOut = (_opts$fadeOut3 = opts === null || opts === void 0 ? void 0 : opts.fadeOut) !== null && _opts$fadeOut3 !== void 0 ? _opts$fadeOut3 : true;
        let toStrength;
        let vectorBased = false;

        if (!(strength instanceof Vec3)) {
          toStrength = new Vec3(strength, strength, strength);
        } else {
          toStrength = strength;
          vectorBased = true;
        }

        const {
          tos,
          durations
        } = (_crd && calcShakeData === void 0 ? (_reportPossibleCrUseOfcalcShakeData({
          error: Error()
        }), calcShakeData) : calcShakeData)(this.scale.clone(), duration, toStrength, vibrato, randomness, false, vectorBased, fadeOut);
        const shakeTween = tween(this);
        tos.forEach((to, index) => {
          const d = durations[index];
          let tweenOpts;

          if (index === 0) {
            tweenOpts = {
              onStart: opts.onStart
            };
          } else if (index === tos.length - 1) {
            tweenOpts = {
              onComplete: opts.onComplete
            };
          }

          shakeTween.then(tween().to(d, {
            scale: to
          }, tweenOpts));
        });
        return shakeTween.union();
      }; //////////////////////
      // Sprite
      //////////////////////
      // good color lerp
      // https://www.alanzucconi.com/2016/01/06/colour-interpolation/


      Sprite.prototype.qtColor = function (to, duration, opts) {
        return tween(this).to(duration, {
          color: to
        }, opts);
      };

      Sprite.prototype.qtOpacity = function (to, duration, opts) {
        const startColor = this.color.clone();
        const tempColor = new Color();
        return tween(this).to(duration, {
          color: new Color(startColor.r, startColor.g, startColor.b, to)
        }, {
          onStart: opts.onStart,
          onUpdate: (target, ratio) => {
            var _opts$onUpdate2;

            const lerpA = startColor.a + (to - startColor.a) * ratio;
            tempColor.set(startColor.r, startColor.g, startColor.b, lerpA);
            this.color = tempColor;
            (_opts$onUpdate2 = opts.onUpdate) === null || _opts$onUpdate2 === void 0 ? void 0 : _opts$onUpdate2.call(opts);
          },
          onComplete: opts.onComplete
        });
      }; //////////////////////
      // Camera
      //////////////////////


      Camera.prototype.qtShakePosition = function (strength, duration, opts) {
        var _opts$vibrato7, _opts$randomness4, _opts$fadeOut4;

        const vibrato = (_opts$vibrato7 = opts === null || opts === void 0 ? void 0 : opts.vibrato) !== null && _opts$vibrato7 !== void 0 ? _opts$vibrato7 : 10;
        const randomness = (_opts$randomness4 = opts === null || opts === void 0 ? void 0 : opts.randomness) !== null && _opts$randomness4 !== void 0 ? _opts$randomness4 : 90;
        const fadeOut = (_opts$fadeOut4 = opts === null || opts === void 0 ? void 0 : opts.fadeOut) !== null && _opts$fadeOut4 !== void 0 ? _opts$fadeOut4 : true;
        let toStrength;
        let vectorBased = false;

        if (!(strength instanceof Vec3)) {
          toStrength = new Vec3(strength, strength, strength);
        } else {
          toStrength = strength;
          vectorBased = true;
        }

        const {
          tos,
          durations
        } = (_crd && calcShakeData === void 0 ? (_reportPossibleCrUseOfcalcShakeData({
          error: Error()
        }), calcShakeData) : calcShakeData)(this.node.position.clone(), duration, toStrength, vibrato, randomness, true, vectorBased, fadeOut);
        const shakeTween = tween(this.node);
        tos.forEach((to, index) => {
          const d = durations[index];
          let tweenOpts;

          if (index === 0) {
            tweenOpts = {
              onStart: opts.onStart
            };
          } else if (index === tos.length - 1) {
            tweenOpts = {
              onComplete: opts.onComplete
            };
          }

          shakeTween.then(tween().to(d, {
            position: to
          }, tweenOpts));
        });
        return shakeTween.union();
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=QuickTween.js.map