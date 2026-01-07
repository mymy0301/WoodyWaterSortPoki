System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, KeyCode, math, Quat, Vec3, _crd;

  function clampLength(vec, maxLength) {
    if (vec.lengthSqr() > maxLength * maxLength) {
      var clampVec = new Vec3();
      Vec3.normalize(clampVec, vec);
      clampVec.multiplyScalar(maxLength);
      return clampVec;
    }

    return vec;
  }

  function vec3FromAngle(degree, length) {
    var radian = math.toRadian(degree);
    return new Vec3(length * Math.cos(radian), length * Math.sin(radian), 0);
  }

  function calcPunchData(start, direction, duration, vibrato, elasticity) {
    math.clamp01(elasticity);
    var strength = direction.length();
    var toIterations = Math.round(vibrato * duration);

    if (toIterations < 2) {
      toIterations = 2;
    }

    var deltaStrength = strength / toIterations;
    var durations = [];
    var sum = 0;

    for (var i = 0; i < toIterations; i++) {
      var iterationPercent = (i + 1) / toIterations;
      var deltaDuration = duration * iterationPercent;
      sum += deltaDuration;
      durations[i] = deltaDuration;
    }

    var durationMultiplier = duration / sum;
    durations = durations.map(d => d * durationMultiplier); // create to vec3 array

    var tos = [];

    for (var _i = 0; _i < toIterations; _i++) {
      if (_i < toIterations - 1) {
        if (_i === 0) {
          tos[_i] = Vec3.add(new Vec3(), start, direction);
        } else if (_i % 2 !== 0) {
          var deltaVec = clampLength(direction, strength * elasticity);
          deltaVec.negative();
          tos[_i] = deltaVec.add(start);
        } else {
          var _deltaVec = clampLength(direction, strength);

          tos[_i] = _deltaVec.add(start);
        }
      } else {
        tos[_i] = start;
      }

      strength -= deltaStrength;
    }

    return {
      tos,
      durations
    };
  }

  function calcShakeData(start, duration, strength, vibrato, randomness, ignoreZAxis, vectorBased, fadeOut) {
    KeyCode;
    var shakeLength = vectorBased ? strength.length() : strength.x;
    var toIterations = Math.floor(vibrato * duration);

    if (toIterations < 2) {
      toIterations = 2;
    }

    var deltaShakeLen = shakeLength / toIterations;
    var durations = [];
    var sum = 0;

    for (var i = 0; i < toIterations; i++) {
      var iterationPercent = (i + 1) / toIterations;
      var deltaDuration = fadeOut ? duration * iterationPercent : duration / toIterations;
      sum += deltaDuration;
      durations[i] = deltaDuration;
    }

    var durationMultiplier = duration / sum;
    durations = durations.map(d => d * durationMultiplier);
    var angle = math.randomRange(0, 360);
    var tos = [];

    for (var _i2 = 0; _i2 < toIterations; _i2++) {
      if (_i2 < toIterations - 1) {
        var randQuat = new Quat();

        if (_i2 > 0) {
          angle = angle - 180 + math.randomRange(-randomness, randomness);
        } // switch(randomnessMode) {
        //     case ShakeRandomnessMode.Harmonic:
        //         if (i > 0) {
        //             angle = angle - 180 + math.randomRange(0, randomness);
        //         }
        //         if (vectorBased || !ignoreZAxis) {
        //             Quat.fromAxisAngle(randQuat, Vec3.UP, math.randomRange(0, randomness));
        //         }
        //         break;
        //     default:
        //         if (i > 0) {
        //             angle = angle - 180 + math.randomRange(-randomness, randomness);
        //         }
        //         if (vectorBased || !ignoreZAxis) {
        //             Quat.fromAxisAngle(randQuat, Vec3.UP, math.randomRange(-randomness, randomness));
        //         }
        //         break;
        // }


        if (vectorBased) {
          var to = vec3FromAngle(angle, shakeLength);
          Vec3.transformQuat(to, to, randQuat);
          to.x = clampLength(to, strength.x).x;
          to.y = clampLength(to, strength.y).y;
          to.z = clampLength(to, strength.z).z;
          to.normalize().multiplyScalar(shakeLength);
          tos[_i2] = to.add(start);

          if (fadeOut) {
            shakeLength -= deltaShakeLen;
          }

          strength = clampLength(strength, shakeLength);
        } else {
          if (ignoreZAxis) {
            tos[_i2] = vec3FromAngle(angle, shakeLength).add(start);
          } else {
            Quat.fromAxisAngle(randQuat, Vec3.UP, math.randomRange(-randomness, randomness));

            var _to = vec3FromAngle(angle, shakeLength);

            Vec3.transformQuat(_to, _to, randQuat);
            tos[_i2] = _to.add(start);
          }

          if (fadeOut) {
            shakeLength -= deltaShakeLen;
          }
        }
      } else {
        tos[_i2] = start;
      }
    }

    return {
      tos,
      durations
    };
  }

  _export({
    clampLength: clampLength,
    vec3FromAngle: vec3FromAngle,
    calcPunchData: calcPunchData,
    calcShakeData: calcShakeData
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      KeyCode = _cc.KeyCode;
      math = _cc.math;
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c427cVKhMtD6bQgnjxsaj+g", "Util", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Util.js.map