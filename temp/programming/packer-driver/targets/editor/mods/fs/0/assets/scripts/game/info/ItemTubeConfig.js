System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Vec3, _dec, _class, _temp, _crd, ccclass, property, ItemTubeConfig;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "559d0laXENNR6oHfxNzGd/D", "ItemTubeConfig", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ItemTubeConfig
       * DateTime = Tue Aug 06 2024 09:23:39 GMT+0700 (Indochina Time)
       * Author = MoonMoon246
       * FileBasename = ItemTubeConfig.ts
       * FileBasenameNoExtension = ItemTubeConfig
       * URL = db://assets/scripts/game/info/ItemTubeConfig.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ItemTubeConfig", ItemTubeConfig = (_dec = ccclass('ItemTubeConfig'), _dec(_class = (_temp = class ItemTubeConfig {
        constructor(_pivotRight, _pivotLeft, _arrRotateConfigs, _arrScaleConfigs, _arrMoveConfigs, _arrScaleWaterConfigs, _arrScaleInitTops) {
          _defineProperty(this, "pivotRight", new Vec3(-68, -191, 0));

          _defineProperty(this, "pivotLeft", new Vec3(68, -191, 0));

          _defineProperty(this, "arrRotateConfigs", []);

          _defineProperty(this, "arrScaleConfigs", []);

          _defineProperty(this, "arrMoveConfigs", []);

          _defineProperty(this, "arrScaleWaterConfigs", []);

          _defineProperty(this, "arrScaleInitTops", []);

          this.pivotRight = _pivotRight;
          this.pivotLeft = _pivotLeft;
          this.arrRotateConfigs = _arrRotateConfigs;
          this.arrScaleConfigs = _arrScaleConfigs;
          this.arrMoveConfigs = _arrMoveConfigs;
          this.arrScaleWaterConfigs = _arrScaleWaterConfigs;
          this.arrScaleInitTops = _arrScaleInitTops; // this.arrItemWaterConfigs_Step1 = _arrItemWaterConfigs_Step1;
          // this.arrItemWaterConfigs_Step2 = _arrItemWaterConfigs_Step2;
          // this.arrItemWaterConfigs_Step3 = _arrItemWaterConfigs_Step3;
          // this.arrItemWaterConfigs_Step4 = _arrItemWaterConfigs_Step4;
        } // getItemWaterConfigs_byIndexStep(indexStep:number){
        //     if(indexStep == 0){
        //         return this.arrItemWaterConfigs_Step1;
        //     }else if(indexStep == 1){
        //         return this.arrItemWaterConfigs_Step2;
        //     }else if(indexStep == 2){
        //         return this.arrItemWaterConfigs_Step3;
        //     }else if(indexStep == 3){
        //         return this.arrItemWaterConfigs_Step4;
        //     }
        //     return this.arrItemWaterConfigs_Step1;
        // }


      }, _temp)) || _class));
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
//# sourceMappingURL=ItemTubeConfig.js.map