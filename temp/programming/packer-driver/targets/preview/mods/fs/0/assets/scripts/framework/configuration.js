System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, sys, _decorator, FBInstantManager, localConfig, Constants, ENV_TYPE, lodash, InfoDay, _dec, _class, _class2, _temp, _crd, ccclass, configuration;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "../common/FBInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "./constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENV_TYPE(extras) {
    _reporterNs.report("ENV_TYPE", "./constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHOP_PACK_TYPE(extras) {
    _reporterNs.report("SHOP_PACK_TYPE", "./constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOflodash(extras) {
    _reporterNs.report("lodash", "./lodash", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfoDay(extras) {
    _reporterNs.report("InfoDay", "../common/InfoDay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerRaceDataInfo(extras) {
    _reporterNs.report("PlayerRaceDataInfo", "../game/race/PlayerRaceDataInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      sys = _cc.sys;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      FBInstantManager = _unresolved_2.FBInstantManager;
    }, function (_unresolved_3) {
      localConfig = _unresolved_3.localConfig;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.Constants;
      ENV_TYPE = _unresolved_4.ENV_TYPE;
    }, function (_unresolved_5) {
      lodash = _unresolved_5.lodash;
    }, function (_unresolved_6) {
      InfoDay = _unresolved_6.InfoDay;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "43570G1uHdHO61o49heHAqk", "configuration", undefined);

      ({
        ccclass
      } = _decorator);

      _export("configuration", configuration = (_dec = ccclass("configuration"), _dec(_class = (_temp = _class2 = class configuration {
        constructor() {
          _defineProperty(this, "jsonData", {});

          _defineProperty(this, "path", null);

          _defineProperty(this, "KEY_CONFIG", (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GAME_NAME);

          _defineProperty(this, "markSave", false);

          _defineProperty(this, "saveTimer", -1);

          _defineProperty(this, "mySaveInterval", null);

          _defineProperty(this, "isCheckSaveInterval", true);
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new configuration(); // this._instance.start();

          return this._instance;
        }

        start() {
          // sys.localStorage.clear();
          this.jsonData = {};

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).TEST_AD) {
            this.path = this.getConfigPath();
            var content;

            if (sys.isNative) {
              var valueObject = jsb.fileUtils.getValueMapFromFile(this.path);
              content = valueObject[this.KEY_CONFIG];
            } else {
              content = sys.localStorage.getItem(this.KEY_CONFIG);
            } // console.log("configurationconfigurationconfiguration");


            console.log(content);

            if (content && content.length) {
              if (content.startsWith('@')) {
                content = content.substring(1);
              }

              try {
                //初始化操作
                // const jsonData = JSON.parse(content);
                // // console.log(jsonData);
                // this.jsonData = jsonData;
                this.updateDataPlayer(content);
              } catch (excepaiton) {}
            } else {
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.updatePlayerData_Finished();
            } // //启动无限定时器，每1秒保存一次数据，而不是无限保存数据
            // this.saveTimer = setInterval(() =>{
            //     this.scheduleSave();
            // }, 500);

          }
        } // getAllDataJson(){
        //     let content;
        //     if (sys.isNative) {
        //         const valueObject = jsb.fileUtils.getValueMapFromFile(this.path);
        //         content = valueObject[this.KEY_CONFIG];
        //     } else {
        //         content = sys.localStorage.getItem(this.KEY_CONFIG);
        //     }
        //     if (content && content.length) {
        //         if (content.startsWith('@')) {
        //             content = content.substring(1);
        //         }
        //     }
        //     return content;
        // }


        updateDataPlayer(content) {
          try {
            this.jsonData = JSON.parse(content);
          } catch (error) {
            console.error(error);

            if ((_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).isObject(content)) {
              this.jsonData = content;
            }
          }

          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.updatePlayerData_Finished();
        }

        setGlobalData(key, value) {
          this.jsonData[key] = value;
          this.save();
        }

        scheduleSave() {
          if (!this.markSave) {
            return;
          }

          this.save();
        }
        /**
         * 标记为已修改
         */


        markModified() {
          this.markSave = true;
        }

        save() {
          // 写入文件
          // const str = JSON.stringify(this.jsonData);
          // FBInstantManager.instance.SetDataPlayer(str);
          // let zipStr = str;
          // this.markSave = false;
          // if (!sys.isNative) {
          //     const ls = sys.localStorage;
          //     ls.setItem(this.KEY_CONFIG, zipStr);
          //     FBInstantManager.instance.SetDataPlayer(str);
          //     return;
          // }
          // const valueObj: ValueObj = {};
          // valueObj[this.KEY_CONFIG] = zipStr;
          // jsb.fileUtils.writeToFile(valueObj, this.path);
          if (configuration.instance.mySaveInterval) {
            clearInterval(configuration.instance.mySaveInterval);
          }

          if (configuration.instance.isCheckSaveInterval) {
            configuration.instance.isCheckSaveInterval = false;
          }

          configuration.instance.mySaveInterval = setInterval(configuration.instance.saveInterval, 300);
        }

        saveInterval() {
          clearInterval(configuration.instance.mySaveInterval);
          configuration.instance.mySaveInterval = null;
          var str = JSON.stringify(configuration.instance.jsonData);

          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).TEST_AD) {
            // console.log(str);
            var zipStr = str;
            configuration.instance.markSave = false;

            if (!sys.isNative) {
              var ls = sys.localStorage;
              ls.setItem(configuration.instance.KEY_CONFIG, zipStr);
              return;
            }

            var valueObj = {};
            valueObj[configuration.instance.KEY_CONFIG] = zipStr;
            jsb.fileUtils.writeToFile(valueObj, configuration.instance.path);
          }

          (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.SetDataPlayer(str);
        }

        getConfigPath() {
          var platform = sys.platform;
          var path = "";

          if (sys.isNative) {
            path = jsb.fileUtils.getWritablePath();
            path = path + "conf";
          } else {
            path = "src/conf";
          }

          return path;
        }

        parseUrl(paramStr) {
          if (!paramStr || typeof paramStr === 'string' && paramStr.length <= 0) {
            // 没有带参数，直接忽略
            return;
          }

          var dictParam = {};

          if (typeof paramStr === 'string') {
            paramStr = paramStr.split('?')[1]; // 去除掉 ？号

            var arrParam = paramStr.split("&");
            arrParam.forEach(function (paramValue) {
              var idxEqual = paramValue.indexOf("=");

              if (idxEqual !== -1) {
                var key = paramValue.substring(0, idxEqual);
                dictParam[key] = paramValue.substring(idxEqual + 1);
              }
            });
          } else {
            dictParam = paramStr;
          }

          if (dictParam.action) {
            this.setGlobalData('urlParams', dictParam);
          } // todo：记录来源，以后用到


          if (dictParam.source) {
            this.setGlobalData('source', dictParam.source);
          }

          if (dictParam.adchannelid) {
            this.setGlobalData('adchannelid', dictParam.adchannelid);
          }
        }

        getGlobalData(key) {
          return this.jsonData[key];
        }

        hasGlobalData(key) {
          return this.jsonData.hasOwnProperty(key);
        }

        setData_Sound(isSound) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SOUND] = isSound ? 1 : 0;
          this.save();
        }

        getData_Sound() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SOUND)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SOUND];
          }

          return 1;
        }

        setData_Music(isMusic) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).MUSIC] = isMusic ? 1 : 0;
          this.save();
        }

        getData_Music() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).MUSIC)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).MUSIC];
          }

          return 0;
        }

        setData_Vibration(isVibration) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).VIBRATION] = isVibration ? 1 : 0;
          this.save();
        }

        getData_Vibration() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).VIBRATION)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).VIBRATION];
          }

          return 1;
        }

        setData_Tops(isTops) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOPS] = isTops ? 1 : 0;
          this.save();
        }

        getData_Tops() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TOPS)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TOPS];
          }

          return 1;
        }

        setGlobalData_Tutorial_Finished(_indexTut) {
          var key = "tutorial_" + (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GAME_NAME + "_" + _indexTut;
          this.jsonData[key] = true;
          this.save();
        }

        getGlobalData_Tutorial_Finished(_indexTut) {
          var key = "tutorial_" + (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GAME_NAME + "_" + _indexTut;

          if (this.jsonData.hasOwnProperty(key)) {
            return true;
          }

          return false;
        } //#region COIN


        setGlobalData_COIN(coin) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).COIN] = coin;
          this.save();
        }

        getGlobalData_COIN() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).COIN)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).COIN];
          }

          return 0;
        } //#endregion
        //#region LOG CAMPID


        setData_CampID(logCampID) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).LOG_CAMPID] = logCampID;
          this.save();
        }

        getData_CampID() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).LOG_CAMPID)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).LOG_CAMPID];
          }

          return "";
        } //#endregion
        //#region LOG ADSET


        setData_AdsetID(logAdsetID) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).LOG_ADSET] = logAdsetID;
          this.save();
        }

        getData_AdsetID() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).LOG_ADSET)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).LOG_ADSET];
          }

          return "";
        } //#endregion
        //#region LOG ADS


        setData_AdsID(logAdsID) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).LOG_ADS] = logAdsID;
          this.save();
        }

        getData_AdsID() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).LOG_ADS)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).LOG_ADS];
          }

          return "";
        } //#endregion
        //#region LOG TOUR


        setData_TourID(logTourID) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).LOG_TOUR] = logTourID;
          this.save();
        }

        getData_TourID() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).LOG_TOUR)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).LOG_TOUR];
          }

          return "";
        } //#endregion
        //#region BLACK FRIDAY


        setData_BlackFriday(infoDay) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BLACK_FIRDAY] = infoDay;
          this.save();
        }

        getData_BlackFriday() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BLACK_FIRDAY)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BLACK_FIRDAY];
          }

          return new (_crd && InfoDay === void 0 ? (_reportPossibleCrUseOfInfoDay({
            error: Error()
          }), InfoDay) : InfoDay)(1, 1, 2023);
        } //#endregion
        //#region BOOSTER COUNT


        setData_BoosterCount(arrBoosterCount) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOOSTER_COUNT] = arrBoosterCount;
          this.save();
        }

        getData_BoosterCount() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOOSTER_COUNT)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BOOSTER_COUNT];
          }

          return [3, 3, 3];
        } //#endregion
        //#region TICKET


        setData_Ticket(arrTickets) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TICKET] = arrTickets;
          this.save();
        }

        getData_Ticket() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TICKET)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TICKET];
          }

          return [0, 0];
        } //#endregion
        //#region LEVEL UNLOCK


        setData_LevelUnlock(level) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).LEVEL_UNLOCK] = level;
          this.save();
        }

        getData_LevelUnlock() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).LEVEL_UNLOCK)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).LEVEL_UNLOCK];
          }

          return 1;
        } //#endregion
        //#region REMOVE AD


        setData_RemoveAd(isRemoveAd) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).REMOVE_AD] = isRemoveAd;
          this.save();
        }

        getData_RemoveAd() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).REMOVE_AD)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).REMOVE_AD];
          }

          return false;
        } //#endregion
        //#region SHOP FREE LAST DAY


        setData_ShopFreeLastTime() {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOP_FREE_LASTTIME] = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrTime();
          this.save();
        }

        getData_ShopFreeLastTime() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOP_FREE_LASTTIME)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOP_FREE_LASTTIME];
          }

          return 0;
        } //#endregion
        //#region VIP


        setData_VIP(vipType) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).VIP] = vipType;
          this.save();
        }

        getData_VIP() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).VIP)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).VIP];
          }

          return 0;
        } //#endregion
        //#region VIP LAST DAY


        setData_VipLastDay() {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).VIP_LASTDAY] = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrTime();
          this.save();
        }

        getData_VipLastDay() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).VIP_LASTDAY)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).VIP_LASTDAY];
          }

          return 0;
        }

        setData_VipLastDay_Reward() {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).VIP_LASTDAY_REWARD] = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCurrDay();
          this.save();
        }

        getData_VipLastDay_Reward() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).VIP_LASTDAY_REWARD)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).VIP_LASTDAY_REWARD];
          }

          return 0;
        } //#endregion
        //#region DATA_INFODAY_FINISHED


        setDataInfoDay_Finished(strDataInfoDay_Finished) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DATA_INFODAY_FINISHED] = strDataInfoDay_Finished;
          this.save();
        }

        getData_InfoDay_Finished() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DATA_INFODAY_FINISHED)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).DATA_INFODAY_FINISHED];
          }

          return "";
        } //#endregion
        //#region DATA_INFOMONTH_REWARD


        setDataInfoMonth_Reward(strDataInfoMonthReward) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DATA_INFOMONTH_REWARD] = strDataInfoMonthReward;
          this.save();
        }

        getData_InfoMonth_Reward() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DATA_INFOMONTH_REWARD)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).DATA_INFOMONTH_REWARD];
          }

          return "";
        } //#endregion
        //#region TUT LEVEL 5


        setData_TutLevel5(isTutLevel5) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUT_LEVEL5] = isTutLevel5 ? 1 : 0;
          this.save();
        }

        getData_TutLevel5() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUT_LEVEL5)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TUT_LEVEL5];
          }

          return 0;
        } //#endregion
        //#region THEME SELECTED


        setData_ThemeSelected(themeSelected) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).THEME_SELECTED] = themeSelected;
          this.save();
        }

        getData_ThemeSelected() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).THEME_SELECTED)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).THEME_SELECTED];
          }

          return "1|1|1";
        } //#endregion
        //#region THEME UNLOCKED


        setData_ThemeUnlocked(themeUnlocked) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).THEME_UNLOCKED] = themeUnlocked;
          this.save();
        }

        getData_ThemeUnlocked() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).THEME_UNLOCKED)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).THEME_UNLOCKED];
          }

          return "1|1|1";
        } //#endregion
        //#region DAILY LOGIN INDEX


        setData_DailyLoginIndex(index) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILY_LOGIN_INDEX] = index;
          this.save();
        }

        getData_DailyLoginIndex() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILY_LOGIN_INDEX)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).DAILY_LOGIN_INDEX];
          }

          return 0;
        } //#endregion
        //#region DAILY LOGIN LAST DAY


        setData_DailyLoginLastDay(lastDay) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILY_LOGIN_LASTDAY] = lastDay;
          this.save();
        }

        getData_DailyLoginLastDay() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILY_LOGIN_LASTDAY)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).DAILY_LOGIN_LASTDAY];
          }

          return 0;
        } //#endregion
        //#region DAILY LOGIN AD LAST DAY


        setData_DailyLoginAdLastDay(lastDay) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILY_LOGIN_AD_LASTDAY] = lastDay;
          this.save();
        }

        getData_DailyLoginAdLastDay() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILY_LOGIN_AD_LASTDAY)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).DAILY_LOGIN_AD_LASTDAY];
          }

          return 0;
        } //#endregion
        //#region DAILY QUEST RECEIVES


        setData_DailyQuestReceives(receiveIDs) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILY_QUEST_RECEIVES] = receiveIDs;
          this.save();
        }

        getData_DailyQuestReceives() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILY_QUEST_RECEIVES)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).DAILY_QUEST_RECEIVES];
          }

          return [];
        } //#endregion
        //#region DAILY QUEST LAST DAY


        setData_DailyQuestLastDay(lastDay) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILY_QUEST_LASTDAY] = lastDay;
          this.save();
        }

        getData_DailyQuestLastDay() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILY_QUEST_LASTDAY)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).DAILY_QUEST_LASTDAY];
          }

          return 0;
        } //#endregion
        //#region DAILY QUEST DATA


        setData_DailyQuestData(data) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILY_QUEST_DATA] = data;
          this.save();
        }

        getData_DailyQuestData() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DAILY_QUEST_DATA)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).DAILY_QUEST_DATA];
          }

          return "";
        } //#endregion
        //#region RACE


        setData_RaceInfos(strRaceInfos) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUBERACE_INFOS] = strRaceInfos;
          this.save();
        }

        getData_RaceInfos() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUBERACE_INFOS)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TUBERACE_INFOS];
          }

          return "";
        }

        setData_RaceOpponents(arrPlayerRaceDataInfos) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUBERACE_OPPONENTS] = arrPlayerRaceDataInfos;
          this.save();
        }

        getData_RaceOpponents() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUBERACE_OPPONENTS)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TUBERACE_OPPONENTS];
          }

          return [];
        } //#endregion
        //#region MASTERPASS


        setData_MasterPassInfos(strMasterPassInfos) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PASS_INFOS] = strMasterPassInfos;
          this.save();
        }

        getData_MasterPassInfos() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PASS_INFOS)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).PASS_INFOS];
          }

          return "";
        }

        setData_MasterPassActivated(activated) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PASS_ACTIVATED] = activated;
          this.save();
        }

        getData_MasterPassActivated() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PASS_ACTIVATED)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).PASS_ACTIVATED];
          }

          return false;
        }

        setData_MasterPassTutorial() {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PASS_TUTORIAL] = 1;
          this.save();
        }

        getData_MasterPassTutorial() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PASS_TUTORIAL)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).PASS_TUTORIAL] == 1;
          }

          return false;
        } //#endregion
        //#region SPIN


        setData_SpinLastTime(lastTime) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SPIN_LASTTIME] = lastTime;
          this.save();
        }

        getData_SpinLastTime() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SPIN_LASTTIME)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SPIN_LASTTIME];
          }

          return 0;
        }

        setData_SpinFreeCount(count) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SPIN_FREECOUNT] = count;
          this.save();
        }

        getData_SpinFreeCount() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SPIN_FREECOUNT)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SPIN_FREECOUNT];
          }

          return 3;
        } //#endregion
        //#region HEART


        setData_HeartCount(count) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).HEART_COUNT] = count;
          this.save();
        }

        getData_HeartCount() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).HEART_COUNT)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).HEART_COUNT];
          }

          return 5;
        }

        setData_HeartLastTime(lastTime) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).HEART_LASTTIME] = lastTime;
          this.save();
        }

        getData_HeartLastTime() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).HEART_LASTTIME)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).HEART_LASTTIME];
          }

          return 0;
        }

        setData_HeartUnlimited(countTime) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).HEART_UNLIMITED_COUNTTIME] = countTime;
          this.save();
        }

        getData_HeartUnlimited() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).HEART_UNLIMITED_COUNTTIME)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).HEART_UNLIMITED_COUNTTIME];
          }

          return 0;
        }

        setData_HeartUnlimited_LastTime(lastTime) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).HEART_UNLIMITED_LASTTIME] = lastTime;
          this.save();
        }

        getData_HeartUnlimited_LastTime() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).HEART_UNLIMITED_LASTTIME)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).HEART_UNLIMITED_LASTTIME];
          }

          return 0;
        } //#endregion
        //#region SHOP DAILY FREE LAST DAY


        setData_ShopDailyFreeLastDay(lastDay) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOP_DAILY_FREE_LASTDAY] = lastDay;
          this.save();
        }

        getData_ShopDailyFreeLastDay() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOP_DAILY_FREE_LASTDAY)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SHOP_DAILY_FREE_LASTDAY];
          }

          return 0;
        } //#endregion
        //#region TUT CURTAIN


        setData_TutCurtain(isTutCurtain) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUT_CURTAION] = isTutCurtain ? 1 : 0;
          this.save();
        }

        getData_TutCurtain() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUT_CURTAION)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TUT_CURTAION] == 1;
          }

          return false;
        } //#endregion
        //#region TUT CLAY


        setData_TutClay(isTutClay) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUT_CLAY] = isTutClay ? 1 : 0;
          this.save();
        }

        getData_TutClay() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUT_CLAY)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TUT_CLAY] == 1;
          }

          return false;
        } //#endregion
        //#region TUT PLASTER


        setData_TutPlaster(isTutPlaster) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUT_PLASTER] = isTutPlaster ? 1 : 0;
          this.save();
        }

        getData_TutPlaster() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUT_PLASTER)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).TUT_PLASTER] == 1;
          }

          return false;
        } //#endregion
        //#region IAP COUNT


        setData_IAPCount(count) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).IAP_COUNT] = count;
          this.save();
        }

        getData_IAPCount() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).IAP_COUNT)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).IAP_COUNT];
          }

          return 0;
        } //#endregion
        //#region WIN STREAK


        setData_WinStreak(streak) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).WIN_STREAK] = streak;
          this.save();
        }

        getData_WinStreak() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).WIN_STREAK)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).WIN_STREAK];
          }

          return 0;
        } //#endregion
        //#region LOSE STREAK


        setData_LoseStreak(streak) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).LOSE_STREAK] = streak;
          this.save();
        }

        getData_LoseStreak() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).LOSE_STREAK)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).LOSE_STREAK];
          }

          return 0;
        } //#endregion
        //#region  IAP STARTER PACK


        setData_IAPStarterPack(isIAPStarterPack) {
          this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).STARTER_PACK] = isIAPStarterPack ? 1 : 0;
          this.save();
        }

        getData_IAPStarterPack() {
          if (this.jsonData.hasOwnProperty((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).STARTER_PACK)) {
            return this.jsonData[(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).STARTER_PACK] == 1;
          }

          return false;
        } //#endregion


      }, _defineProperty(_class2, "_instance", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=configuration.js.map