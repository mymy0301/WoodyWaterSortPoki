
import { _decorator, Component, Node, game, director, log } from 'cc';
import Utils from '../core/utils/Utils';
import { configuration } from '../framework/configuration';
import { localConfig } from '../localConfig';
import { ENV_TYPE } from '../framework/constants';
const { ccclass, property } = _decorator;

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
 
@ccclass('LogEventManager')
export class LogEventManager extends Component {
    public static instance: LogEventManager;
    onLoad(){
        game.addPersistRootNode(this.node);
        LogEventManager.instance = this; 
    }
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    start(){
        
    }

    update (deltaTime: number) {

    }
    

    logEvent_BannerAd(){
        let str:string = "BANNER";
        LogEventManager.instance.logEvent(str);
    }

    logEvent_InterAd(){
        let str:string = "INTER";
        LogEventManager.instance.logEvent(str);
    }

    logEvent_RewardAd(){
        let str:string = "REWARD";
        LogEventManager.instance.logEvent(str);
    }

    logEvent_RewardAd_Completed(){
        let str:string = "REWARD_COMPLETED";
        LogEventManager.instance.logEvent(str);
    }

    logEvent_BannerAd_Paid(){
        let str:string = "BANNER_PAID";
        LogEventManager.instance.logEvent(str);
    }

    logEvent_InterAd_Paid(){
        let str:string = "INTER_PAID";
        LogEventManager.instance.logEvent(str);
    }

    logEvent_RewardAd_Paid(){
        let str:string = "REWARD_PAID";
        LogEventManager.instance.logEvent(str);
    }

    logEvent_RewardAd_Completed_Paid(){
        let str:string = "REWARD_COMPLETED_PAID";
        LogEventManager.instance.logEvent(str);
    }

    logEvent_BannerAd_Organic(){
        let str:string = "BANNER_ORGANIC";
        LogEventManager.instance.logEvent(str);
    }

    logEvent_InterAd_Organic(){
        let str:string = "INTER_ORGANIC";
        LogEventManager.instance.logEvent(str);
    }

    logEvent_RewardAd_Organic(){
        let str:string = "REWARD_ORGANIC";
        LogEventManager.instance.logEvent(str);
    }

    logEvent_RewardAd_Completed_ORGANIC(){
        let str:string = "REWARD_COMPLETED_ORGANIC";
        LogEventManager.instance.logEvent(str);
    }

    

    logCAMP_ID(campID:string){
        let str:string = "CAMP_"+campID;
        LogEventManager.instance.logEvent(str);
    }

    logADSET_ID(adsetID:string){
        let str:string = "ADSET_"+adsetID;
        LogEventManager.instance.logEvent(str);
    }

    logADS_ID(adsID:string){
        let str:string = "ADS_"+adsID;
        LogEventManager.instance.logEvent(str);
    }

    logCAMPID_BANNER(logCampID:string){
        if(logCampID && logCampID.length > 0){
            let str:string = "CAMP_"+logCampID+"_BANNER";
            LogEventManager.instance.logEvent(str);
        }
    }

    logCAMPID_INTER(logCampID:string){
        if(logCampID && logCampID.length > 0){
            let str:string = "CAMP_"+logCampID+"_INTER";
            LogEventManager.instance.logEvent(str);
        }
    }

    logCAMPID_REWARDED(logCampID:string){
        if(logCampID && logCampID.length > 0){
            let str:string = "CAMP_"+logCampID+"_REWARDED";
            LogEventManager.instance.logEvent(str);
        }
    }

    logADSETID_BANNER(logAdsetID:string){
        if(logAdsetID && logAdsetID.length > 0){
            let str:string = "ADSET_"+logAdsetID+"_BANNER";
            LogEventManager.instance.logEvent(str);
        }
    }

    logADSETID_INTER(logAdsetID:string){
        if(logAdsetID && logAdsetID.length > 0){
            let str:string = "ADSET_"+logAdsetID+"_INTER";
            LogEventManager.instance.logEvent(str);
        }
    }

    logADSETID_REWARDED(logAdsetID:string){
        if(logAdsetID && logAdsetID.length > 0){
            let str:string = "ADSET_"+logAdsetID+"_REWARDED";
            LogEventManager.instance.logEvent(str);
        }
    }

    logADSETID_SESSION_REWARDED(adSession:string){
        let str:string = adSession+"_REWARDED";
        LogEventManager.instance.logEvent(str);
    }


    logADSID_BANNER(logAdsID:string){
        if(logAdsID && logAdsID.length > 0){
            let str:string = "ADS_"+logAdsID+"_BANNER";
            LogEventManager.instance.logEvent(str);
        }
    }

    logADSID_INTER(logAdsID:string){
        if(logAdsID && logAdsID.length > 0){
            let str:string = "ADS_"+logAdsID+"_INTER";
            LogEventManager.instance.logEvent(str);
        }
    }

    logADSID_REWARDED(logAdsID:string){
        if(logAdsID && logAdsID.length > 0){
            let str:string = "ADS_"+logAdsID+"_REWARDED";
            LogEventManager.instance.logEvent(str);
        }
    }


    logTour_ID(tourID_session:string){
        if(tourID_session && tourID_session.length > 0){
            let str:string = "TOUR_"+tourID_session;
            LogEventManager.instance.logEvent(str);
        }
    }


    logTOURID_BANNER(tourID_session:string){
        if(tourID_session && tourID_session.length > 0){
            let str:string = "TOUR_"+tourID_session+"_BANNER";
            LogEventManager.instance.logEvent(str);
        }
    }

    logTOURID_INTER(tourID_session:string){
        if(tourID_session && tourID_session.length > 0){
            let str:string = "TOUR_"+tourID_session+"_INTER";
            LogEventManager.instance.logEvent(str);
        }
    }

    logTOURID_REWARDED(tourID_session:string){
        if(tourID_session && tourID_session.length > 0){
            let str:string = "TOUR_"+tourID_session+"_REWARDED";
            LogEventManager.instance.logEvent(str);
        }
    }

    

    logEvent(str:string){
        // console.log("LOGEVENT:"+str);
        if(localConfig.instance.envType == ENV_TYPE.FB){
            FBInstant.logEvent(str);
            FB.AppEvents.logEvent(str);
        }
        if(typeof gtag !== 'undefined'){
            gtag('event',str);
        }

        if(window.analyticsDataBuckets){
            window.analyticsDataBuckets.track(str);
        }
    }

    logEventIAP(_transaction_id: string, _item_id: string, _value: number) {
        
        if (localConfig.instance.envType == ENV_TYPE.TEST_AD) { 
            console.error("LOG EVENT IAP",_transaction_id,_item_id,_value);
            return; 
        }
        let parameters = {
                transaction_id: _transaction_id,
                value: _value,
                currency: 'USD',
                items: [
                  {
                    item_name: _item_id,
                    item_id: _item_id,
                    quantity: 1
                  }
                ]
              };
        if (typeof gtag !== 'undefined') {
            gtag('event', 'purchase', {
                transaction_id: _transaction_id,
                value: _value,
                currency: 'USD',
                items: [
                  {
                    item_name: _item_id,
                    item_id: _item_id,
                    quantity: 1
                  }
                ]
              });

            if (localConfig.instance.isPaidUser) {
                gtag('event', 'purchase_paid', {
                    transaction_id: _transaction_id,
                    value: _value,
                    currency: 'USD',
                    items: [
                        {
                            item_name: _item_id,
                            item_id: _item_id,
                            quantity: 1
                        }
                    ]
                });
            } else {
                gtag('event', 'purchase_organic', {
                    transaction_id: _transaction_id,
                    value: _value,
                    currency: 'USD',
                    items: [
                        {
                            item_name: _item_id,
                            item_id: _item_id,
                            quantity: 1
                        }
                    ]
                });
            }
        }

        if(window.analyticsDataBuckets){
            window.analyticsDataBuckets.track('purchase',parameters);
        }
    }

    public static logEventParameters(eventName: string, parameters?: any) {
        // console.error("LOG EVENT",eventName,parameters);
        if (localConfig.instance.envType == ENV_TYPE.TEST_AD) { 
            console.log("LOG EVENT", eventName, parameters);
            return; 
        }
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, parameters);
        }

        if(window.analyticsDataBuckets){
            window.analyticsDataBuckets.track(eventName, parameters);
        }

    }

    public logSplashToHome(time: number) {
        let str: string = "splash_to_home";
        let parameters = { "loading_time": "" + time };
        LogEventManager.logEventParameters(str, parameters);
    }

    public logButtonClick(ui_name: string, location: string) {
        let str: string = "button_click";
        let parameters = {
            "button_name": ui_name,
            "location": location
        };
        LogEventManager.logEventParameters(str, parameters);
    }
    
    public logUserProperty(property_name: string, property_value: any) {
        if (localConfig.instance.envType == ENV_TYPE.TEST_AD) { 
            console.log("LOG EVENT", property_name, property_value);
            return;
        }
        let parameters = { [property_name]: property_value };
        if (typeof gtag !== 'undefined') {
            gtag("set", "user_properties", parameters)
        }

        if(window.analyticsDataBuckets){
            window.analyticsDataBuckets.track('user_properties', parameters);
        }
    }

    



    public logCurrentLevel(level: number) {
        let property_name: string = "current_level";
        this.logUserProperty(property_name, level);
    }

    public logCurrentMode(mode: string) {
        let property_name: string = "current_mode";
        this.logUserProperty(property_name, mode);
    }

    public logIsIAPUser(isIAPUser: number) {
        let property_name: string = "is_iap_user_n";
        this.logUserProperty(property_name, isIAPUser);
    }

    public logIAPCount(count: number) {
        let property_name: string = "iap_count_n";
        this.logUserProperty(property_name, count);
    }

    public logWinStreak(streak: number) {
        let property_name: string = "win_streak_n";
        this.logUserProperty(property_name, streak);
    }

    public logLoseStreak(streak: number) {
        let property_name: string = "lose_streak_n";
        this.logUserProperty(property_name, streak);
    }

    public logBalanceCoin(balance: number) {
        let property_name: string = "balance_coin_n";
        this.logUserProperty(property_name, balance);
    }

    public logBoosterUndoCount(count: number) {
        let property_name: string = "undo_count_n";
        this.logUserProperty(property_name, count);
    }

    public logBoosterShuffleCount(count: number) {
        let property_name: string = "shuffle_count_n";
        this.logUserProperty(property_name, count);
    }

    public logBoosterAddColCount(count: number) {
        let property_name: string = "add_col_count_n";
        this.logUserProperty(property_name, count);
    }

    /**
        user_id: n,
        traffic_source: t,
        campaign_id: c,
        adset_id: o,
        ad_id: s
     */

    public logInitUserPropertysID(_user_id: string, _traffic_source: string, _campaign_id: string, _adset_id: string, _ad_id: string) {
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

    public logInitUserPropertys(_current_level: number, _isIAPUser: number, _iap_count: number, _win_streak: number, _lose_streak: number, _balance_coin: number, _undo_count: number, _shuffle_count: number, _add_col_count: number) {
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
            
            gtag("set", "user_properties", parameters)
        }

        if(window.analyticsDataBuckets){
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
    public logLevelStart(level: number,loop_by:number,play_type:string,play_index:number,lose_index:number,mode:string) {
        let str: string = "level_start";
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

    public logLevelEnd(level: number,loop_by:number,play_type:string,play_index:number,lose_index:number,mode:string,play_duration:number,result:string,lose_by:string) {
        let str: string = "level_end";
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

    public logLevelExit(level: number,loop_by:number,play_type:string,play_index:number,lose_index:number,mode:string,play_duration:number) {
        let str: string = "level_exit";
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

    public logLevelReopen(level: number,loop_by:number,play_type:string,play_index:number,lose_index:number,mode:string) {
        let str: string = "level_reopen";
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

    public logResourceEarned(resource_type: string,resource_name: string,resource_amount: number,placement: string,reason: string) {
        let str: string = "resource_earn";
        let parameters = {
            "resource_type": resource_type,
            "resource_name": resource_name,
            "resource_amount": resource_amount,
            "placement": placement,
            "reason": reason
        };
        LogEventManager.logEventParameters(str, parameters);
    }

    public logResourceSpend(resource_type: string,resource_name: string,resource_amount: number,placement: string,reason: string) {
        let str: string = "resource_spend";
        let parameters = {
            "resource_type": resource_type,
            "resource_name": resource_name,
            "resource_amount": resource_amount,
            "placement": placement,
            "reason": reason
        };
        LogEventManager.logEventParameters(str, parameters);
    }

    public logIAPShow(placement: string,show_type: string,pack_name: string) {
        let str: string = "iap_show";
        let parameters = {
            "placement": placement,
            "show_type": show_type,
            "pack_name": pack_name
        };
        LogEventManager.logEventParameters(str, parameters);
    }

    public logIAPClick(placement: string,show_type: string,pack_name: string) {
        let str: string = "iap_click";
        let parameters = {
            "placement": placement,
            "show_type": show_type,
            "pack_name": pack_name
        };
        LogEventManager.logEventParameters(str, parameters);
    }

    public logIAPPurchase(placement: string,show_type: string,pack_name: string,price: number,currency: string) {
        let str: string = "iap_purchase";
        let parameters = {
            "placement": placement,
            "pack_name": pack_name,
            "show_type": show_type,
            "price": price,
            "currency": currency
        };
        LogEventManager.logEventParameters(str, parameters);
    }

    public logAdRequest(ad_format: string,placement:string,is_load:number,load_time:number) {
        let str: string = "ad_request";
        let parameters = {
            "ad_format": ad_format,
            "ad_platform":"facebook",
            "ad_network":"facebook",
            "placement": placement,
            "is_load": is_load,
            "load_time": load_time
        };
        LogEventManager.logEventParameters(str, parameters);
    }

    public logAdImpression(ad_format: string,placement:string,is_show:number) {
        let str: string = "ad_impression";
        let parameters = {
            "ad_format": ad_format,
            "ad_platform":"facebook",
            "ad_network":"facebook",
            "placement": placement,
            "is_show": is_show
        };
        LogEventManager.logEventParameters(str, parameters);
    }

    public logAdComplete(ad_format: string,placement:string,end_type:string) {
        let str: string = "ad_complete";
        let parameters = {
            "ad_format": ad_format,
            "placement": placement,
            "ad_platform":"facebook",
            "ad_network":"facebook",
            "end_type": end_type
        };
        LogEventManager.logEventParameters(str, parameters);
    }

    public logFeatureFirstShow(feature_name: string,placement:string) { 
        let str: string = "feature_first_show";
        let parameters = {
            "feature_name": feature_name,
            "placement": placement
        };
        LogEventManager.logEventParameters(str, parameters);
    }

    public logFeatureOpen(feature_name: string,placement:string,open_index:number) {
        let str: string = "feature_open";
        let parameters = {
            "feature_name": feature_name,
            "placement": placement,
            "open_index": open_index
        };
        LogEventManager.logEventParameters(str, parameters);
    }

    public logFeatureClose(feature_name: string,placement:string,open_index:number,feature_duration:number) {
        let str: string = "feature_close";
        let parameters = {
            "feature_name": feature_name,
            "placement": placement,
            "open_index": open_index,
            "feature_duration": feature_duration
        };
        LogEventManager.logEventParameters(str, parameters);
    }
    

    public logAd_Reward_Click(location: string, button_name: string) {
        let str: string = "ad_rv_click";
        let parameters = {
            "location": location,
            "button_name": button_name
        };
        LogEventManager.logEventParameters(str, parameters);
    }

    public logAd_Reward_Scuccess(location: string, button_name: string) {
        let str: string = "ad_rv_success";
        let parameters = {
            "location": location,
            "button_name": button_name
        };
        LogEventManager.logEventParameters(str, parameters);
    }

    public logAd_Reward_Fail(location: string, button_name: string,_reseaon: string) {
        let str: string = "ad_rv_fail";
        let parameters = {
            "location": location,
            "button_name": button_name,
            "reseaon": _reseaon
        };
        LogEventManager.logEventParameters(str, parameters);
    }

    public logAd_Reward_InitFail(location: string, button_name: string) {
        let str: string = "ad_rv_initfail";
        let parameters = {
            "location": location,
            "button_name": button_name
        };
        LogEventManager.logEventParameters(str, parameters);
    }

    public logAd_Reward_Show_Fail(location: string, button_name: string,_reseaon: string) {
        let str: string = "ad_rv_show_fail";
        let parameters = {
            "location": location,
            "button_name": button_name,
            "reseaon": _reseaon
        };
        LogEventManager.logEventParameters(str, parameters);
    }

    public logAd_Reward_Skip(location: string, button_name: string) {
        let str: string = "ad_rv_skip";
        let parameters = {
            "location": location,
            "button_name": button_name
        };
        LogEventManager.logEventParameters(str, parameters);
    }

    public logAd_Reward_PreloadFail(_reseaon: string) {
        let str: string = "ad_rv_preload_fail";
        let parameters = {
            "reseaon": _reseaon
        };
        LogEventManager.logEventParameters(str, parameters);
    }


    public logAd_Interstitial_Show(location: string, button_name: string) {
        let str: string = "ad_interstitial_show";
        let parameters = {
            "location": location,
            "button_name": button_name
        };
        LogEventManager.logEventParameters(str, parameters);
    }

    public logAd_Interstitial_Success(location: string, button_name: string) {
        let str: string = "ad_interstitial_success";
        let parameters = {
            "location": location,
            "button_name": button_name
        };
        LogEventManager.logEventParameters(str, parameters);
    }

    public logAd_Interstitial_Fail(location: string, button_name: string) {
        let str: string = "ad_interstitial_fail";
        let parameters = {
            "location": location,
            "button_name": button_name
        };
        LogEventManager.logEventParameters(str, parameters);
    }

    public logAd_Banner_Show(nameScene: string) {
        let str: string = "ad_banner_show";
        let parameters = {
            "location": nameScene,
        };
        LogEventManager.logEventParameters(str, parameters);
    }

    public logAd_Banner_Success(nameScene: string) {
        let str: string = "ad_banner_success";
        let parameters = {
            "location": nameScene,
        };
        LogEventManager.logEventParameters(str, parameters);
    }

    public logAd_Banner_Fail(nameScene) {
        let str: string = "ad_banner_fail";
        let parameters = {
            "location": nameScene,
        };
        LogEventManager.logEventParameters(str, parameters);
    }


}

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
