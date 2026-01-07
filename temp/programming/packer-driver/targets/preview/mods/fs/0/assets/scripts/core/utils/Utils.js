System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, log, assetManager, error, Node, Vec3, sp, tween, Layers, Sprite, Button, Label, ProgressBar, ScrollView, EventHandler, js, ToggleContainer, Toggle, SpriteFrame, Vec2, Utils, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      log = _cc.log;
      assetManager = _cc.assetManager;
      error = _cc.error;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      sp = _cc.sp;
      tween = _cc.tween;
      Layers = _cc.Layers;
      Sprite = _cc.Sprite;
      Button = _cc.Button;
      Label = _cc.Label;
      ProgressBar = _cc.ProgressBar;
      ScrollView = _cc.ScrollView;
      EventHandler = _cc.EventHandler;
      js = _cc.js;
      ToggleContainer = _cc.ToggleContainer;
      Toggle = _cc.Toggle;
      SpriteFrame = _cc.SpriteFrame;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d0788kA+CpAb7fGbF4Gj2lV", "Utils", undefined);

      _export("default", Utils = class Utils {
        static checkIsToDay(time) {
          var date = new Date(time);
          var dateNow = new Date(Utils.getServerTime());
          var bSameDay = false;

          if (date.getFullYear() == dateNow.getFullYear() && date.getMonth() == dateNow.getMonth() && date.getDate() == dateNow.getDate()) {
            bSameDay = true;
          }

          return bSameDay;
        }

        static getRandom(lower, upper) {
          return Math.random() * (upper - lower) + lower;
        }

        static getRandomInt(lower, upper) {
          return Math.floor(Math.random() * (upper - lower)) + lower;
        }

        static seedRandom() {
          return Utils.getRandom(0, 1);
        }

        static seedRandomInt(lower, upper) {
          return Utils.getRandomInt(lower, upper);
        }
        /**
        * Random 1 index theo tỷ lệ cho trước
        * @param ratios Mảng xác suất (VD: [50, 30, 20])
        * @returns index đã random
        */


        static getRandombyRatios(ratios) {
          var total = ratios.reduce((sum, w) => sum + w, 0);
          var rand = Math.random() * total;
          var cumulative = 0;

          for (var i = 0; i < ratios.length; i++) {
            cumulative += ratios[i];

            if (rand < cumulative) {
              return i;
            }
          }

          return ratios.length - 1; // fallback
        }

        static getPowNum(p) {
          return Math.pow(10, p);
        }

        static setServerTime(time) {
          Utils.timeOffset = time - new Date().getTime();
          log("timeOffset:", Utils.timeOffset);
        }

        static getServerTime() {
          return new Date().getTime() + Utils.timeOffset;
        }

        static formatDate(t) {
          var date = new Date(t);
          var YY = date.getFullYear() + '-';
          var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
          var DD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
          var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
          var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
          var ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
          return YY + MM + DD + " " + hh + mm + ss;
        }

        static cloneObj(obj) {
          obj = JSON.stringify(obj);
          obj = JSON.parse(obj);
          return obj;
        }

        static getTimeStrByS(second) {
          second = Math.floor(second);
          if (second < 0) second = 0;
          var d = Math.floor(second / 3600 / 24);
          second -= d * 3600 * 24;
          var h = Math.floor(second / 3600);
          second -= h * 3600;
          var m = Math.floor(second / 60);
          second -= m * 60;
          var front = "00";

          if (h > 9) {
            front = "" + h;
          } else {
            front = "0" + h;
          }

          var mid = "00";

          if (m > 9) {
            mid = "" + m;
          } else {
            mid = "0" + m;
          }

          var back = "00";

          if (second > 9) {
            back = "" + second;
          } else {
            back = "0" + second;
          }

          if (d > 0) {
            return d + "天" + h + "时" + m + "分";
          } else {
            var longTime = h > 0;

            if (longTime) {
              return front + ":" + mid;
            } else {
              return mid + ":" + back; //+ '秒';
            }
          }
        }

        static getTimeStrByS_2(second) {
          second = Math.ceil(second);
          var m = Math.floor(second / 60);
          second -= m * 60;
          var mid = "00";

          if (m > 9) {
            mid = "" + m;
          } else {
            mid = "0" + m;
          }

          var sec = "00";

          if (second > 9) {
            sec = "" + second;
          } else {
            sec = "0" + second;
          }

          return mid + ":" + sec;
        }

        static getTimeStrByS_3(second) {
          second = Math.ceil(second);
          var h = Math.floor(second / 3600);
          second -= h * 3600;
          var m = Math.floor(second / 60);
          second -= m * 60;
          var front = "00";

          if (h > 9) {
            front = "" + h;
          } else {
            front = "0" + h;
          }

          var mid = "00";

          if (m > 9) {
            mid = "" + m;
          } else {
            mid = "0" + m;
          }

          var sec = "00";

          if (second > 9) {
            sec = "" + second;
          } else {
            sec = "0" + second;
          }

          return front + ":" + mid + ":" + sec;
        }

        static getClockStrByS(second, showsecond, showhour) {
          if (showsecond === void 0) {
            showsecond = true;
          }

          if (showhour === void 0) {
            showhour = true;
          }

          second = Math.floor(second);
          if (second < 0) second = 0;
          var h = Math.floor(second / 3600);
          second -= h * 3600;
          var m = Math.floor(second / 60);
          second -= m * 60;
          var front = "00";

          if (h > 9) {
            front = "" + h;
          } else {
            front = "0" + h;
          }

          var mid = "00";

          if (m > 9) {
            mid = "" + m;
          } else {
            mid = "0" + m;
          }

          var str = "";

          if (showhour) {
            str += front;
            str += ":";
          }

          str += mid;
          if (showsecond) str += ":" + (second < 10 ? "0" : "") + second;
          return str;
        }

        static checkObjEmpty(obj) {
          if (obj) {
            for (var i in obj) {
              return false;
            }

            return true;
          } else {
            return true;
          }
        }

        static checkOrderOver(orderTime) {
          var date = new Date(orderTime);
          var dateNow = new Date(Utils.getServerTime());

          if (date.getFullYear() == dateNow.getFullYear() && date.getMonth() == dateNow.getMonth() && date.getDate() == dateNow.getDate()) {
            return false;
          } else {
            return true;
          }
        }

        static loadBundler(name) {
          //console.log("loadBundler:"+name);
          return new Promise((resolve, reject) => {
            assetManager.loadBundle(name, (err, ret) => {
              //console.log(ret)
              resolve(null);
            });
          });
        }

        static loadRes(path, type, callback) {
          if (callback === void 0) {
            callback = null;
          }

          return new Promise((resolve, reject) => {
            var bundel = "resources";
            var arr = path.split(":");

            if (arr.length == 2) {
              bundel = arr[0];
              path = arr[1];
            }

            if (type == SpriteFrame) {
              path += "/spriteFrame";
            }

            var ret = assetManager.getBundle(bundel).get(path, type);

            if (ret) {
              if (callback) callback(null, ret);
              resolve(ret);
              return;
            } // //console.log(bundel,path);


            assetManager.getBundle(bundel).load(path, type, (err, ret) => {
              if (err) {
                error(path, err);
                callback(err, null);
                reject(null);
              } else {
                if (callback) callback(null, ret);
                resolve(ret);
              }
            });
          });
        }

        static weight(v) {
          var mTotalWeight = 0;

          for (var i = 0; i < v.length; ++i) {
            mTotalWeight += v[i];
          }

          if (mTotalWeight <= 0) return -1;
          var randnum = Math.round(Math.random() * Number.MAX_VALUE) % mTotalWeight;

          for (var i = 0; i < v.length; ++i) {
            if (randnum < v[i]) {
              return i;
            } else {
              randnum -= v[i];
            }
          }

          return -1;
        }

        static shuffle(arr) {
          for (var i = arr.length - 1; i >= 0; i--) {
            var rIndex = Math.floor(Math.random() * (i + 1));
            var temp = arr[rIndex];
            arr[rIndex] = arr[i];
            arr[i] = temp;
          }

          return arr;
        }

        static getDate(time) {
          var now = new Date(time),
              y = now.getFullYear(),
              m = now.getMonth() + 1,
              d = now.getDate();
          return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
        } //货币进位


        static goldCrarryBit(gold) {
          var array = [[100000000, 'N'], [10000000, 'T'], [1000000, 'G'], [100000, 'M'], [10000, 'K'], [1000, 'B']];

          for (var i = 0; i < array.length; i++) {
            var value = gold / array[i][0];

            if (value > 1) {
              return '' + value.toFixed(1) + array[i][1];
            }
          }

          return gold.toString();
        } //定点数


        static fixFloat(val, count) {
          if (count === void 0) {
            count = 2;
          }

          var a = Math.pow(10, count);
          return Math.floor(val * a) / a;
        }

        static WorldToScreen2(camera, point) {
          var p = new Vec3();
          camera.worldToScreen(point, p);
          return p;
        } // public static flyGemAnim(poition:Vec3,targetNode: Node){
        //     let out:Vec3 = this.WorldToScreen2(find("CameraNode/Main Camera").getComponent(Camera),poition)
        //     var gold = PoolMgr.Instance().get(ITEM_TYPE.Gem)
        //     gold.parent = find("Canvas")
        //     gold.setWorldPosition(out);
        //     if(!targetNode)
        //     {
        //         debugger;
        //     }
        //     let dstPos = targetNode.worldPosition;
        //     if(!dstPos)
        //     {
        //         debugger;
        //     }
        //     tween(gold).to(0.7,{worldPosition:v3(dstPos.x,dstPos.y,1)}).call(()=>{
        //         tween(targetNode).to(0.1,{scale:v3(2,2,2)}).to(0.1,{scale:v3(1,1,1)}).call(()=>{
        //         }).start()
        //         PoolMgr.Instance().put(gold.name, gold);
        //     }).start()
        // }
        // public static flyAnim(type:ITEM_TYPE, starNode: Node|Vec3, targetNode: Node, count: number, radius: number, callback: Function) {
        //     let getPoint = (r, ox, oy, count) => {
        //         var point = []; //结果
        //         var radians = (Math.PI / 180) * Math.round(360 / count), //弧度
        //             i = 0;
        //         for (; i < count; i++) {
        //             var x = ox + r * Math.sin(radians * i),
        //                 y = oy + r * Math.cos(radians * i);
        //             point.unshift(v2(x, y)); //为保持数据顺时针
        //         }
        //         return point;
        //     }
        //     let start = starNode instanceof Vec3?starNode:starNode.worldPosition;
        //     var array = getPoint(radius, start.x, start.y, count);
        //     var nodeArray = new Array();
        //     for (var i = 0; i < array.length; i++) {
        //         var gold = PoolMgr.Instance().get(type)
        //         // gold.zIndex = GameConst.WIN_LAYER.TIP;
        //         gold.parent = find("Canvas")
        //         var randPos = v3(array[i].x + Utils.getRandomInt(0, 50), array[i].y + Utils.getRandomInt(0, 50),1);
        //         gold.setWorldPosition(start);
        //         nodeArray.push({ gold, randPos });
        //     }
        //     var notPlay = false;
        //     let dstPos = targetNode.worldPosition;
        //     for (let i = 0; i < nodeArray.length; i++) {
        //         let pos = nodeArray[i].randPos;
        //         let node = nodeArray[i].gold;
        //         nodeArray[i].gold.id = i;
        //         tween(node).to(0.2,{worldPosition:pos}).delay(i * 0.03).to(0.7,{worldPosition:v3(dstPos.x,dstPos.y,1)}).call(()=>{
        //             if (!notPlay) {
        //                 notPlay = true;
        //                 tween(targetNode).to(0.1,{scale:v3(2,2,2)}).to(0.1,{scale:v3(1,1,1)}).call(()=>{
        //                     notPlay = false;
        //                 }).start()
        //             }
        //             callback(node.id == nodeArray.length - 1);
        //             PoolMgr.Instance().put(node.name, node);
        //         }).start()
        //     }
        // }


        static formatString(s) {
          for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
            var reg = new RegExp("\\{" + i + "\\}", "gm");
            s = s.replace(reg, i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]);
          }

          return s;
        }

        static count(obj) {
          if (!obj) return 0;
          var num = 0;

          for (var k in obj) {
            num++;
          }

          return num;
        }

        static getStrNum(str) {
          var num = str.replace(/[^0-9]/ig, "");
          return parseInt(num);
        }

        static copy(obj) {
          var newObj = Object.create(obj);
          Object.assign(newObj, obj);
          return newObj;
        }

        static playSkAni(file, name, parent, pos, removetime) {
          return _asyncToGenerator(function* () {
            if (removetime === void 0) {
              removetime = -1;
            }

            var node = new Node();
            node.parent = parent;
            node.position = pos;
            node.layer = Layers.BitMask.UI_2D;
            var skd = node.addComponent(sp.Skeleton);
            var data = yield Utils.loadRes(file, sp.SkeletonData);
            skd.skeletonData = data;
            skd.setAnimation(0, name, false);

            if (removetime != -1) {
              tween(node).delay(removetime).call(() => {
                node.removeFromParent();
                node.destroy();
              }).start();
            }

            return node;
          })();
        } //自动绑定属性
        //组件前缀Sprite-sp,Label-txt,Button-btn,ScrollView-sv,ProgressBar-progress,


        static autoBindProperty(node, context) {
          var name = node.name;
          var nameList = name.split('_');

          if (nameList.length > 1) {
            var prex = nameList[0];

            if (prex == 'sp') {
              context[name] = node.getComponent(Sprite);
            } else if (prex == 'txt') {
              context[name] = node.getComponent(Label);
            } else if (prex == 'btn') {
              //console.log(name)
              context[name] = node.getComponent(Button);

              if (context[name]) {
                var eventHandler = new EventHandler();
                eventHandler.target = context.node;
                eventHandler.component = js.getClassName(context);
                eventHandler.handler = 'onButtonClick';
                eventHandler.customEventData = name;
                var clickEvents = node.getComponent(Button).clickEvents;
                clickEvents.push(eventHandler);
              }
            } else if (prex == 'progress') {
              context[name] = node.getComponent(ProgressBar);
            } else if (prex == 'sv') {
              context[name] = node.getComponent(ScrollView);
            } else if (prex == 'skel') {
              context[name] = node.getComponent(sp.Skeleton);
            } else if (prex == "tgc") {
              context[name] = node.getComponent(ToggleContainer);
            } else if (prex == "tg") {
              context[name] = node.getComponent(Toggle);

              if (context[name]) {
                var _eventHandler = new EventHandler();

                _eventHandler.target = context.node;
                _eventHandler.component = js.getClassName(context);
                _eventHandler.handler = 'onButtonClick';
                _eventHandler.customEventData = name;
                var checkEvents = node.getComponent(Toggle).checkEvents;
                checkEvents.push(_eventHandler);
              }
            } else if (prex == 'node') {
              context[name] = node;
            }
          } else {//this[name] = node
          }

          if (node.children.length == 0) return;

          for (var i = 0; i < node.children.length; ++i) {
            var tmp = node.children[i];
            Utils.autoBindProperty(tmp, context);
          }
        }

        static getNumberStr(index) {
          if (index >= 100) {
            return "" + index;
          } else if (index >= 10) {
            return "0" + index;
          } else if (index >= 1) {
            return "00" + index;
          }

          return "" + index;
        }

        static getTimeStrByS_HaveDay_Event(second) {
          second = Math.ceil(second);
          var d = Math.floor(second / 86400);
          second -= d * 86400;
          var h = Math.floor(second / 3600);
          second -= h * 3600;
          var m = Math.floor(second / 60);
          second -= m * 60;
          var day = "00";

          if (d > 9) {
            day = "" + d;
          } else {
            day = "0" + d;
          }

          var front = "00";

          if (h > 9) {
            front = "" + h;
          } else {
            front = "0" + h;
          }

          var mid = "00";

          if (m > 9) {
            mid = "" + m;
          } else {
            mid = "0" + m;
          }

          var sec = "00";

          if (second > 9) {
            sec = "" + second;
          } else {
            sec = "0" + second;
          }

          if (d > 0) {
            return day + "d " + front + "h";
          } else {
            return front + ":" + mid + ":" + sec;
          }
        }

        static getTimeStrByS_HaveDay_Tournament(second) {
          second = Math.ceil(second);
          var d = Math.floor(second / 86400);
          second -= d * 86400;
          var h = Math.floor(second / 3600);
          second -= h * 3600;
          var m = Math.floor(second / 60);
          second -= m * 60;
          var day = "00";

          if (d > 9) {
            day = "" + d;
          } else {
            day = "0" + d;
          }

          var front = "00";

          if (h > 9) {
            front = "" + h;
          } else {
            front = "0" + h;
          }

          var mid = "00";

          if (m > 9) {
            mid = "" + m;
          } else {
            mid = "0" + m;
          }

          var sec = "00";

          if (second > 9) {
            sec = "" + second;
          } else {
            sec = "0" + second;
          }

          if (d > 0) {
            return day + " days";
          } else {
            return front + ":" + mid + ":" + sec;
          }
        }

        static getTimeStrByS_4(second) {
          second = Math.ceil(second);
          var h = Math.floor(second / 3600);
          second -= h * 3600;
          var m = Math.floor(second / 60);
          second -= m * 60;
          var front = "00";

          if (h > 9) {
            front = "" + h;
          } else {
            front = "0" + h;
          }

          var mid = "00";

          if (m > 9) {
            mid = "" + m;
          } else {
            mid = "0" + m;
          }

          var sec = "00";

          if (second > 9) {
            sec = "" + second;
          } else {
            sec = "0" + second;
          }

          if (h > 0) {
            return front + ":" + mid + ":" + sec;
          } else {
            return mid + ":" + sec;
          }
        }

        static getTimeStrByS_5(second) {
          second = Math.ceil(second);
          var h = Math.floor(second / 3600);
          second -= h * 3600;
          var m = Math.floor(second / 60);
          second -= m * 60;
          var front = "00";

          if (h > 9) {
            front = "" + h;
          } else {
            front = "" + h;
          }

          var mid = "00";

          if (m > 9) {
            mid = "" + m;
          } else {
            mid = "" + m;
          }

          var sec = "00";

          if (second > 9) {
            sec = "" + second;
          } else {
            sec = "0" + second;
          }

          var strTime = "";

          if (h > 0) {
            strTime = front + "h";
          }

          if (m > 0) {
            if (strTime.length > 0) {
              strTime += ":" + mid + "m";
            } else {
              strTime += mid + "m";
            }
          }

          if (second > 0) {
            if (strTime.length > 0) {
              strTime += ":" + sec;
            } else {
              strTime += sec;
            }
          }

          return strTime;
        }

        static formatNumber(num) {
          return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        } // Hàm để tính giao điểm của hai đoạn thẳng


        static getIntersection(p1, p2, q1, q2) {
          var x1 = p1.x,
              y1 = p1.y;
          var x2 = p2.x,
              y2 = p2.y;
          var x3 = q1.x,
              y3 = q1.y;
          var x4 = q2.x,
              y4 = q2.y;
          var denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);

          if (denom === 0) {
            return null; // Đoạn thẳng song song, không giao nhau
          }

          var ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom;
          var ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denom;
          var intersectionX = x1 + ua * (x2 - x1);
          var intersectionY = y1 + ua * (y2 - y1);

          if (ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1) {
            return {
              x: intersectionX,
              y: intersectionY
            };
          }

          return null;
        } // Hàm để tính giao điểm giữa đường thẳng và đa giác


        static getPolygonIntersection(point, angle, polygon) {
          var intersections = []; // Chuyển đổi góc từ độ sang radian

          var angleRad = angle * (Math.PI / 180); // Xác định hệ số góc của đường thẳng

          var slope = Math.tan(angleRad); // Tạo một đối tượng điểm đầu và điểm cuối của đoạn thẳng dài đủ để cắt toàn bộ đa giác

          var lineStart = new Vec2(point.x - 1000, point.y - 1000 * slope);
          var lineEnd = new Vec2(point.x + 1000, point.y + 1000 * slope); // Duyệt qua từng cạnh của đa giác

          for (var i = 0; i < polygon.length; i++) {
            var nextIndex = (i + 1) % polygon.length;
            var intersection = this.getIntersection(lineStart, lineEnd, polygon[i], polygon[nextIndex]);

            if (intersection) {
              intersections.push(intersection);
            }
          }

          return intersections;
        }

        static rotatePointBack(point, center, angle) {
          var angleRad = angle * (Math.PI / 180); // Góc đã xoay

          var dx = point.x - center.x;
          var dy = point.y - center.y;
          var xNew = center.x + dx * Math.cos(angleRad) + dy * Math.sin(angleRad);
          var yNew = center.y - dx * Math.sin(angleRad) + dy * Math.cos(angleRad);
          return new Vec2(xNew, yNew);
        }

      });

      _defineProperty(Utils, "seed", 5);

      _defineProperty(Utils, "timeOffset", 0);

      ;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Utils.js.map