System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, game, localConfig, ENV_TYPE, _dec, _class, _class2, _temp, _crd, ccclass, property, LogEventManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENV_TYPE(extras) {
    _reporterNs.report("ENV_TYPE", "../framework/constants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      game = _cc.game;
    }, function (_unresolved_2) {
      localConfig = _unresolved_2.localConfig;
    }, function (_unresolved_3) {
      ENV_TYPE = _unresolved_3.ENV_TYPE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "16895hndIJBIrGpiCFlJq84", "LogEventManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = LogEventManager
       * DateTime = Wed Mar 30 2022 14:49:41 GMT+0700 (Indochina Time)
       * Author = tuzkekizer
       * FileBasename = LogEventManager.ts
       * FileBasenameNoExtension = LogEventManager
       * URL = db://assets/scripts/logEvent/LogEventManager.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("LogEventManager", LogEventManager = (_dec = ccclass('LogEventManager'), _dec(_class = (_temp = _class2 = class LogEventManager extends Component {
        onLoad() {
          game.addPersistRootNode(this.node);
          LogEventManager.instance = this;
        } // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;


        start() {}

        update(deltaTime) {}

        logEvent_BannerAd() {
          let str = "BANNER";
          LogEventManager.instance.logEvent(str);
        }

        logEvent_InterAd() {
          let str = "INTER";
          LogEventManager.instance.logEvent(str);
        }

        logEvent_RewardAd() {
          let str = "REWARD";
          LogEventManager.instance.logEvent(str);
        }

        logEvent_RewardAd_Completed() {
          let str = "REWARD_COMPLETED";
          LogEventManager.instance.logEvent(str);
        }

        logEvent_BannerAd_Paid() {
          let str = "BANNER_PAID";
          LogEventManager.instance.logEvent(str);
        }

        logEvent_InterAd_Paid() {
          let str = "INTER_PAID";
          LogEventManager.instance.logEvent(str);
        }

        logEvent_RewardAd_Paid() {
          let str = "REWARD_PAID";
          LogEventManager.instance.logEvent(str);
        }

        logEvent_RewardAd_Completed_Paid() {
          let str = "REWARD_COMPLETED_PAID";
          LogEventManager.instance.logEvent(str);
        }

        logEvent_BannerAd_Organic() {
          let str = "BANNER_ORGANIC";
          LogEventManager.instance.logEvent(str);
        }

        logEvent_InterAd_Organic() {
          let str = "INTER_ORGANIC";
          LogEventManager.instance.logEvent(str);
        }

        logEvent_RewardAd_Organic() {
          let str = "REWARD_ORGANIC";
          LogEventManager.instance.logEvent(str);
        }

        logEvent_RewardAd_Completed_ORGANIC() {
          let str = "REWARD_COMPLETED_ORGANIC";
          LogEventManager.instance.logEvent(str);
        }

        logCAMP_ID(campID) {
          let str = "CAMP_" + campID;
          LogEventManager.instance.logEvent(str);
        }

        logADSET_ID(adsetID) {
          let str = "ADSET_" + adsetID;
          LogEventManager.instance.logEvent(str);
        }

        logADS_ID(adsID) {
          let str = "ADS_" + adsID;
          LogEventManager.instance.logEvent(str);
        }

        logCAMPID_BANNER(logCampID) {
          if (logCampID && logCampID.length > 0) {
            let str = "CAMP_" + logCampID + "_BANNER";
            LogEventManager.instance.logEvent(str);
          }
        }

        logCAMPID_INTER(logCampID) {
          if (logCampID && logCampID.length > 0) {
            let str = "CAMP_" + logCampID + "_INTER";
            LogEventManager.instance.logEvent(str);
          }
        }

        logCAMPID_REWARDED(logCampID) {
          if (logCampID && logCampID.length > 0) {
            let str = "CAMP_" + logCampID + "_REWARDED";
            LogEventManager.instance.logEvent(str);
          }
        }

        logADSETID_BANNER(logAdsetID) {
          if (logAdsetID && logAdsetID.length > 0) {
            let str = "ADSET_" + logAdsetID + "_BANNER";
            LogEventManager.instance.logEvent(str);
          }
        }

        logADSETID_INTER(logAdsetID) {
          if (logAdsetID && logAdsetID.length > 0) {
            let str = "ADSET_" + logAdsetID + "_INTER";
            LogEventManager.instance.logEvent(str);
          }
        }

        logADSETID_REWARDED(logAdsetID) {
          if (logAdsetID && logAdsetID.length > 0) {
            let str = "ADSET_" + logAdsetID + "_REWARDED";
            LogEventManager.instance.logEvent(str);
          }
        }

        logADSETID_SESSION_REWARDED(adSession) {
          let str = adSession + "_REWARDED";
          LogEventManager.instance.logEvent(str);
        }

        logADSID_BANNER(logAdsID) {
          if (logAdsID && logAdsID.length > 0) {
            let str = "ADS_" + logAdsID + "_BANNER";
            LogEventManager.instance.logEvent(str);
          }
        }

        logADSID_INTER(logAdsID) {
          if (logAdsID && logAdsID.length > 0) {
            let str = "ADS_" + logAdsID + "_INTER";
            LogEventManager.instance.logEvent(str);
          }
        }

        logADSID_REWARDED(logAdsID) {
          if (logAdsID && logAdsID.length > 0) {
            let str = "ADS_" + logAdsID + "_REWARDED";
            LogEventManager.instance.logEvent(str);
          }
        }

        logTour_ID(tourID_session) {
          if (tourID_session && tourID_session.length > 0) {
            let str = "TOUR_" + tourID_session;
            LogEventManager.instance.logEvent(str);
          }
        }

        logTOURID_BANNER(tourID_session) {
          if (tourID_session && tourID_session.length > 0) {
            let str = "TOUR_" + tourID_session + "_BANNER";
            LogEventManager.instance.logEvent(str);
          }
        }

        logTOURID_INTER(tourID_session) {
          if (tourID_session && tourID_session.length > 0) {
            let str = "TOUR_" + tourID_session + "_INTER";
            LogEventManager.instance.logEvent(str);
          }
        }

        logTOURID_REWARDED(tourID_session) {
          if (tourID_session && tourID_session.length > 0) {
            let str = "TOUR_" + tourID_session + "_REWARDED";
            LogEventManager.instance.logEvent(str);
          }
        }

        logEvent(str) {
          // console.log("LOGEVENT:"+str);
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) {
            FBInstant.logEvent(str);
            FB.AppEvents.logEvent(str);
          }

          if (typeof gtag !== 'undefined') {
            gtag('event', str);
          }

          if (window.analyticsDataBuckets) {
            window.analyticsDataBuckets.track(str);
          }
        }

        logEventIAP(_transaction_id, _item_id, _value) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).TEST_AD) {
            console.error("LOG EVENT IAP", _transaction_id, _item_id, _value);
            return;
          }

          let parameters = {
            transaction_id: _transaction_id,
            value: _value,
            currency: 'USD',
            items: [{
              item_name: _item_id,
              item_id: _item_id,
              quantity: 1
            }]
          };

          if (typeof gtag !== 'undefined') {
            gtag('event', 'purchase', {
              transaction_id: _transaction_id,
              value: _value,
              currency: 'USD',
              items: [{
                item_name: _item_id,
                item_id: _item_id,
                quantity: 1
              }]
            });

            if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.isPaidUser) {
              gtag('event', 'purchase_paid', {
                transaction_id: _transaction_id,
                value: _value,
                currency: 'USD',
                items: [{
                  item_name: _item_id,
                  item_id: _item_id,
                  quantity: 1
                }]
              });
            } else {
              gtag('event', 'purchase_organic', {
                transaction_id: _transaction_id,
                value: _value,
                currency: 'USD',
                items: [{
                  item_name: _item_id,
                  item_id: _item_id,
                  quantity: 1
                }]
              });
            }
          }

          if (window.analyticsDataBuckets) {
            window.analyticsDataBuckets.track('purchase', parameters);
          }
        }

        static logEventParameters(eventName, parameters) {
          // console.error("LOG EVENT",eventName,parameters);
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).TEST_AD) {
            console.log("LOG EVENT", eventName, parameters);
            return;
          }

          if (typeof gtag !== 'undefined') {
            gtag('event', eventName, parameters);
          }

          if (window.analyticsDataBuckets) {
            window.analyticsDataBuckets.track(eventName, parameters);
          }
        }

        logSplashToHome(time) {
          let str = "splash_to_home";
          let parameters = {
            "loading_time": "" + time
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logButtonClick(ui_name, location) {
          let str = "button_click";
          let parameters = {
            "button_name": ui_name,
            "location": location
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logUserProperty(property_name, property_value) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType == (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).TEST_AD) {
            console.log("LOG EVENT", property_name, property_value);
            return;
          }

          let parameters = {
            [property_name]: property_value
          };

          if (typeof gtag !== 'undefined') {
            gtag("set", "user_properties", parameters);
          }

          if (window.analyticsDataBuckets) {
            window.analyticsDataBuckets.track('user_properties', parameters);
          }
        }

        logCurrentLevel(level) {
          let property_name = "current_level";
          this.logUserProperty(property_name, level);
        }

        logCurrentMode(mode) {
          let property_name = "current_mode";
          this.logUserProperty(property_name, mode);
        }

        logIsIAPUser(isIAPUser) {
          let property_name = "is_iap_user_n";
          this.logUserProperty(property_name, isIAPUser);
        }

        logIAPCount(count) {
          let property_name = "iap_count_n";
          this.logUserProperty(property_name, count);
        }

        logWinStreak(streak) {
          let property_name = "win_streak_n";
          this.logUserProperty(property_name, streak);
        }

        logLoseStreak(streak) {
          let property_name = "lose_streak_n";
          this.logUserProperty(property_name, streak);
        }

        logBalanceCoin(balance) {
          let property_name = "balance_coin_n";
          this.logUserProperty(property_name, balance);
        }

        logBoosterUndoCount(count) {
          let property_name = "undo_count_n";
          this.logUserProperty(property_name, count);
        }

        logBoosterShuffleCount(count) {
          let property_name = "shuffle_count_n";
          this.logUserProperty(property_name, count);
        }

        logBoosterAddColCount(count) {
          let property_name = "add_col_count_n";
          this.logUserProperty(property_name, count);
        }
        /**
            user_id: n,
            traffic_source: t,
            campaign_id: c,
            adset_id: o,
            ad_id: s
         */


        logInitUserPropertysID(_user_id, _traffic_source, _campaign_id, _adset_id, _ad_id) {
          //ONLY DATABUCKETS
          let parameters = {
            user_id: _user_id,
            user_id_str: _user_id,
            traffic_source: _traffic_source,
            campaign_id: _campaign_id,
            adset_id: _adset_id,
            ad_id: _ad_id
          };
        }

        logInitUserPropertys(_current_level, _isIAPUser, _iap_count, _win_streak, _lose_streak, _balance_coin, _undo_count, _shuffle_count, _add_col_count) {
          let parameters = {
            current_level: _current_level,
            is_iap_user_n: _isIAPUser,
            iap_count_n: _iap_count,
            win_streak_n: _win_streak,
            lose_streak_n: _lose_streak,
            balance_coin_n: _balance_coin,
            undo_count_n: _undo_count,
            shuffle_count_n: _shuffle_count,
            add_col_count_n: _add_col_count
          };
          console.log("logInitUserPropertys", parameters);

          if (typeof gtag !== 'undefined') {
            gtag("set", "user_properties", parameters);
          }

          if (window.analyticsDataBuckets) {
            window.analyticsDataBuckets.track('user_properties', parameters);
          }
        }
        /*
        level	Level	Level mà user chơi là level bao nhiêu	1 | 2 | 3 | 4 | 5 | ...
        loop_by	Loop by	"Level này lấy content từ level bao nhiêu (trong trường hợp level cao lấy content từ level cũ)"	1 | 2 | 3 | 4 | 5 | ...
        play_type	Play type	User chơi level này trong hoàn cảnh nào	home,next,"restart(trong trường hợp game cho phép restart luôn sau khi thua)"
        play_index	Play index	User chơi level này lần thứ mấy	1 | 2 | 3 | 4 | 5 | ...
        lose_index	Lose index	User đã thua level này mấy lần (trước khi bắt đầu lần chơi này)	0 | 1 | 2 | 3 | 4 | 5 | ...
        total_duration_start	Total duration start	Thời gian cho phép chơi ban đầu của level (nếu game play không cho phép tăng thời gian chơi thì chỉ cần tên là total_duration)	{tổng thời gian}
        mode	Mode	Mode chơi của level là gì	"(Ví dụ)
        normal | challenge | endless | ..."
        */


        logLevelStart(level, loop_by, play_type, play_index, lose_index, mode) {
          let str = "level_start";
          let parameters = {
            "level": level,
            "loop_by": loop_by,
            "play_type": play_type,
            "play_index": play_index,
            "lose_index": lose_index,
            "mode": mode
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logLevelEnd(level, loop_by, play_type, play_index, lose_index, mode, play_duration, result, lose_by) {
          let str = "level_end";
          let parameters = {
            "level": level,
            "loop_by": loop_by,
            "play_type": play_type,
            "play_index": play_index,
            "lose_index": lose_index,
            "mode": mode,
            "play_duration": play_duration,
            "result": result,
            "lose_by": lose_by
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logLevelExit(level, loop_by, play_type, play_index, lose_index, mode, play_duration) {
          let str = "level_exit";
          let parameters = {
            "level": level,
            "loop_by": loop_by,
            "play_type": play_type,
            "play_index": play_index,
            "lose_index": lose_index,
            "mode": mode,
            "play_duration": play_duration
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logLevelReopen(level, loop_by, play_type, play_index, lose_index, mode) {
          let str = "level_reopen";
          let parameters = {
            "level": level,
            "loop_by": loop_by,
            "play_type": play_type,
            "play_index": play_index,
            "lose_index": lose_index,
            "mode": mode
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logResourceEarned(resource_type, resource_name, resource_amount, placement, reason) {
          let str = "resource_earn";
          let parameters = {
            "resource_type": resource_type,
            "resource_name": resource_name,
            "resource_amount": resource_amount,
            "placement": placement,
            "reason": reason
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logResourceSpend(resource_type, resource_name, resource_amount, placement, reason) {
          let str = "resource_spend";
          let parameters = {
            "resource_type": resource_type,
            "resource_name": resource_name,
            "resource_amount": resource_amount,
            "placement": placement,
            "reason": reason
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logIAPShow(placement, show_type, pack_name) {
          let str = "iap_show";
          let parameters = {
            "placement": placement,
            "show_type": show_type,
            "pack_name": pack_name
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logIAPClick(placement, show_type, pack_name) {
          let str = "iap_click";
          let parameters = {
            "placement": placement,
            "show_type": show_type,
            "pack_name": pack_name
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logIAPPurchase(placement, show_type, pack_name, price, currency) {
          let str = "iap_purchase";
          let parameters = {
            "placement": placement,
            "pack_name": pack_name,
            "show_type": show_type,
            "price": price,
            "currency": currency
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logAdRequest(ad_format, placement, is_load, load_time) {
          let str = "ad_request";
          let parameters = {
            "ad_format": ad_format,
            "ad_platform": "facebook",
            "ad_network": "facebook",
            "placement": placement,
            "is_load": is_load,
            "load_time": load_time
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logAdImpression(ad_format, placement, is_show) {
          let str = "ad_impression";
          let parameters = {
            "ad_format": ad_format,
            "ad_platform": "facebook",
            "ad_network": "facebook",
            "placement": placement,
            "is_show": is_show
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logAdComplete(ad_format, placement, end_type) {
          let str = "ad_complete";
          let parameters = {
            "ad_format": ad_format,
            "placement": placement,
            "ad_platform": "facebook",
            "ad_network": "facebook",
            "end_type": end_type
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logFeatureFirstShow(feature_name, placement) {
          let str = "feature_first_show";
          let parameters = {
            "feature_name": feature_name,
            "placement": placement
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logFeatureOpen(feature_name, placement, open_index) {
          let str = "feature_open";
          let parameters = {
            "feature_name": feature_name,
            "placement": placement,
            "open_index": open_index
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logFeatureClose(feature_name, placement, open_index, feature_duration) {
          let str = "feature_close";
          let parameters = {
            "feature_name": feature_name,
            "placement": placement,
            "open_index": open_index,
            "feature_duration": feature_duration
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logAd_Reward_Click(location, button_name) {
          let str = "ad_rv_click";
          let parameters = {
            "location": location,
            "button_name": button_name
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logAd_Reward_Scuccess(location, button_name) {
          let str = "ad_rv_success";
          let parameters = {
            "location": location,
            "button_name": button_name
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logAd_Reward_Fail(location, button_name, _reseaon) {
          let str = "ad_rv_fail";
          let parameters = {
            "location": location,
            "button_name": button_name,
            "reseaon": _reseaon
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logAd_Reward_InitFail(location, button_name) {
          let str = "ad_rv_initfail";
          let parameters = {
            "location": location,
            "button_name": button_name
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logAd_Reward_Show_Fail(location, button_name, _reseaon) {
          let str = "ad_rv_show_fail";
          let parameters = {
            "location": location,
            "button_name": button_name,
            "reseaon": _reseaon
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logAd_Reward_Skip(location, button_name) {
          let str = "ad_rv_skip";
          let parameters = {
            "location": location,
            "button_name": button_name
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logAd_Reward_PreloadFail(_reseaon) {
          let str = "ad_rv_preload_fail";
          let parameters = {
            "reseaon": _reseaon
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logAd_Interstitial_Show(location, button_name) {
          let str = "ad_interstitial_show";
          let parameters = {
            "location": location,
            "button_name": button_name
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logAd_Interstitial_Success(location, button_name) {
          let str = "ad_interstitial_success";
          let parameters = {
            "location": location,
            "button_name": button_name
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logAd_Interstitial_Fail(location, button_name) {
          let str = "ad_interstitial_fail";
          let parameters = {
            "location": location,
            "button_name": button_name
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logAd_Banner_Show(nameScene) {
          let str = "ad_banner_show";
          let parameters = {
            "location": nameScene
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logAd_Banner_Success(nameScene) {
          let str = "ad_banner_success";
          let parameters = {
            "location": nameScene
          };
          LogEventManager.logEventParameters(str, parameters);
        }

        logAd_Banner_Fail(nameScene) {
          let str = "ad_banner_fail";
          let parameters = {
            "location": nameScene
          };
          LogEventManager.logEventParameters(str, parameters);
        }

      }, _defineProperty(_class2, "instance", void 0), _temp)) || _class));
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
//# sourceMappingURL=LogEventManager.js.map