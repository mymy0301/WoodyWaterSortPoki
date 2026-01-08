System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Enum, Constants, _crd, GAME_STATE, ENV_TYPE, AVATAR_TYPE, GAME_MODE, PLAY_TYPE, ITEM_TUBE_STATE, WATER_STATE, BOOSTER_TYPE, TICKET_TYPE, TAB_TYPE, SHOP_PACK_TYPE, IAP_PLACEMENT_TYPE, IAP_SHOW_TYPE, SHOP_ITEM_TYPE, SCENE_TYPE, BOX_STATE, BOX_TYPE, THEME_TYPE, UNLOCK_TYPE, DAILYTASK_TYPE, QUEST_TYPE, LEVEL_STATE, LEADERBOARD_TYPE, AD_FORMAT_TYPE, AD_END_TYPE, TOURNAMENT_TYPE;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export({
    Constants: void 0,
    PLAY_TYPE: void 0,
    ITEM_TUBE_STATE: void 0,
    WATER_STATE: void 0,
    BOOSTER_TYPE: void 0,
    TICKET_TYPE: void 0,
    TAB_TYPE: void 0,
    SHOP_PACK_TYPE: void 0,
    IAP_PLACEMENT_TYPE: void 0,
    IAP_SHOW_TYPE: void 0,
    SHOP_ITEM_TYPE: void 0,
    SCENE_TYPE: void 0,
    BOX_STATE: void 0,
    BOX_TYPE: void 0,
    THEME_TYPE: void 0,
    UNLOCK_TYPE: void 0,
    DAILYTASK_TYPE: void 0,
    QUEST_TYPE: void 0,
    LEVEL_STATE: void 0,
    LEADERBOARD_TYPE: void 0,
    AD_FORMAT_TYPE: void 0,
    AD_END_TYPE: void 0,
    TOURNAMENT_TYPE: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Enum = _cc.Enum;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9df06Mrn1REsq+SKNgtZUwx", "constants", undefined);

      _export("Constants", Constants = class Constants {});

      _defineProperty(Constants, "GAME_NAME", 'WaterSortWoodyPuzzle');

      _defineProperty(Constants, "GAME_NAME_TITLE", 'Water Sort Woody Puzzle');

      _defineProperty(Constants, "SOUND", "sound");

      _defineProperty(Constants, "MUSIC", "music");

      _defineProperty(Constants, "VIBRATION", "vibration");

      _defineProperty(Constants, "TOPS", "tops");

      _defineProperty(Constants, "SHOW_LOADING_NOW", 'showLoadingNow');

      _defineProperty(Constants, "HIDE_LOADING", 'hideloading');

      _defineProperty(Constants, "HIDE_LOADING2", 'hideloading2');

      _defineProperty(Constants, "SHOW_NOTIFICATION", 'showNotification');

      _defineProperty(Constants, "FBINSTANT_INIT_SUCCESS", "fbInstant_Init_Success");

      _defineProperty(Constants, "BUNDLE_ITEMS", "items");

      _defineProperty(Constants, "BUNDLE_AUDIOS", "audios");

      _defineProperty(Constants, "PGS_GAMEID", "6759037cb77d323bd9f2e34c");

      _defineProperty(Constants, "PLAYFAB_TITLE", "E4AE4");

      _defineProperty(Constants, "FB_BANNER_PLACEMENT_ID", "1523780215196018_1523787905195249");

      _defineProperty(Constants, "FB_INTERSTITIAL_PLACEMENT_ID", "1523780215196018_1566842380889801");

      _defineProperty(Constants, "FB_REWARDED_PLACEMENT_ID", "1523780215196018_1566842310889808");

      _defineProperty(Constants, "FB_INTERSTITIAL_CALLBACK_SUCCESS", "fb_interstitial_callback_success");

      _defineProperty(Constants, "FB_INTERSTITIAL_CALLBACK_FAIL", "fb_interstitial_callback_fail");

      _defineProperty(Constants, "FB_REWARD_CALLBACK_SUCCESS", "fb_reward_callback_success");

      _defineProperty(Constants, "FB_REWARD_CALLBACK_FAIL", "fb_reward_callback_fail");

      _defineProperty(Constants, "FB_REWARD_CALLBACK_NOTFINISH", "fb_reward_callback_notFinish");

      _defineProperty(Constants, "COIN", "coin");

      _defineProperty(Constants, "COIN_UPDATE", "coin_update");

      _defineProperty(Constants, "ADDCOIN", "addCoin");

      _defineProperty(Constants, "SHOW_ADDCOIN", "showAddCoin");

      _defineProperty(Constants, "UPDATE_COIN_TARGETPOS", "update_Coin_TargetPos");

      _defineProperty(Constants, "UPDATE_COIN_STARTPOS", "update_Coin_StartPos");

      _defineProperty(Constants, "AVATAR_LOAD_FINISHED", "avatar_load_Finished");

      _defineProperty(Constants, "SCORE", "score");

      _defineProperty(Constants, "SCORE_UPDATE", "score_update");

      _defineProperty(Constants, "CONFIRM_OK", "confirm_ok");

      _defineProperty(Constants, "SHAKE_CAMERA", "shake_camera");

      _defineProperty(Constants, "CLICK", "click");

      _defineProperty(Constants, "LOG_CAMPID", "log_campID");

      _defineProperty(Constants, "LOG_ADSET", "log_adset");

      _defineProperty(Constants, "LOG_ADS", "log_ads");

      _defineProperty(Constants, "LOG_TOUR", "log_tour");

      _defineProperty(Constants, "COUNTDOWNTIME_NEXTDAY_FINISHED", "countdowntime_nextDay_finished");

      _defineProperty(Constants, "SHOW_LOADING_POPUP", "showLoadingPopup");

      _defineProperty(Constants, "HIDE_LOADING_POPUP", "hideLoadingPopup");

      _defineProperty(Constants, "SHOW_LOADING_AD_POPUP", "showLoadingAdPopup");

      _defineProperty(Constants, "HIDE_LOADING_AD_POPUP", "hideLoadingAdPopup");

      _defineProperty(Constants, "SHOW_LOADING_START_POPUP", "showLoadingStartPopup");

      _defineProperty(Constants, "SHOW_LOADING_START_NOW_POPUP", "showLoadingStartNowPopup");

      _defineProperty(Constants, "HIDE_LOADING_START_POPUP", "hideLoadingStartPopup");

      _defineProperty(Constants, "HIDE_LOADING_START_NOW_POPUP", "hideLoadingStartNowPopup");

      _defineProperty(Constants, "GET_DATA_PLAYER_SUCCESS", "get_data_player_success");

      _defineProperty(Constants, "GET_DATA_PAYLOAD_SUCCESS", "get_data_payload_success");

      _defineProperty(Constants, "FB_CALLBACK_SUCCESS", "fb_callback_success");

      _defineProperty(Constants, "FB_CALLBACK_FAIL", "fb_callback_success");

      _defineProperty(Constants, "BLACK_FIRDAY", "black_friday");

      _defineProperty(Constants, "SHOW_BLACKRIDAY_COIN_POPUP", "show_blackfriday_coin_popup");

      _defineProperty(Constants, "TUBE_MOVETARGET_FINISHED", "tube_moveTarget_finished");

      _defineProperty(Constants, "TUBE_WATEROFF_FINISHED", "tube_waterOFF_finished");

      _defineProperty(Constants, "TUBE_SELECT", "tube_select");

      _defineProperty(Constants, "CURR_TUBE_UPDATE", "currtube_update");

      _defineProperty(Constants, "TUBE_MOVEBACK_FINISHED", "tube_moveback_finished");

      _defineProperty(Constants, "SHOW_EFX_TUBE_FINSIHED", "showEfxTubeFinished");

      _defineProperty(Constants, "TUBE_DONE", "tubeDone");

      _defineProperty(Constants, "TUBE_OBIM_DONE", "tubeObimDone");

      _defineProperty(Constants, "TUBE_PLASER_DONE", "tubePlasterDone");

      _defineProperty(Constants, "BOOSTER_COUNT", "bc");

      _defineProperty(Constants, "BOOSTER_COUNT_UPDATE", "booster_count_update");

      _defineProperty(Constants, "BOOSTER_CLICK", "booster_click");

      _defineProperty(Constants, "TICKET", "tk");

      _defineProperty(Constants, "TICKET_UPDATE", "ticket_update");

      _defineProperty(Constants, "ADDTICKET", "addTicket");

      _defineProperty(Constants, "SHOW_ADDTICKET", "showAddTicket");

      _defineProperty(Constants, "UPDATE_TICKET_TARGETPOS", "update_Ticket_TargetPos");

      _defineProperty(Constants, "UPDATE_TICKET_STARTPOS", "update_Ticket_StartPos");

      _defineProperty(Constants, "SHOW_SHOP_POPUP", "showShopPopup");

      _defineProperty(Constants, "SHOP_POPUP_CLOSE", "shop_popup_close");

      _defineProperty(Constants, "SHOW_SHOP_GROUP", "showShopGroup");

      _defineProperty(Constants, "TOUCH_NEXT_LEVEL", "touchNextLevel");

      _defineProperty(Constants, "PAUSE_TOUCH_HOME", "pause_touch_home");

      _defineProperty(Constants, "SHOW_WIN_POPUP", "show_win_popup");

      _defineProperty(Constants, "SHOW_WIN_DAILYCHALLENGE_POPUP", "show_win_dailychallenge_popup");

      _defineProperty(Constants, "LEVEL_UNLOCK", "lv");

      _defineProperty(Constants, "LEVEL_UNLOCK_UPDATE", "level_unlock_update");

      _defineProperty(Constants, "TOUCH_TAB", "touch_tab");

      _defineProperty(Constants, "TAB_UPDATE", "tab_update");

      _defineProperty(Constants, "TOUCH_TABTHEME", "touch_tabtheme");

      _defineProperty(Constants, "TABTHEME_UPDATE", "tabtheme_update");

      _defineProperty(Constants, "TOUCH_TABDAILYTASK", "touch_tabdailytask");

      _defineProperty(Constants, "TABDAILYTASK_UPDATE", "tabdailytask_update");

      _defineProperty(Constants, "IAP_INIT_SUCCESS", "iap_init_success");

      _defineProperty(Constants, "REMOVE_AD", "rad");

      _defineProperty(Constants, "REMOVE_AD_UPDATE", "remove_ad_update");

      _defineProperty(Constants, "BUY_REMOVEAD_SUCCESS", "buy_removead_success");

      _defineProperty(Constants, "SHOW_REMOVEAD_POPUP", "show_removead_popup");

      _defineProperty(Constants, "STARTER_PACK", "iasp");

      _defineProperty(Constants, "STARTER_PACK_UPDATE", "starter_pack_update");

      _defineProperty(Constants, "BUY_STARTER_PACK_SUCCESS", "buy_starter_pack_success");

      _defineProperty(Constants, "SHOP_FREE_LASTTIME", "sflt");

      _defineProperty(Constants, "SHOP_FREE_LASTTIME_UPDATE", "shop_free_lasttime_update");

      _defineProperty(Constants, "VIP_UPDATE", "vip_update");

      _defineProperty(Constants, "VIP", "v");

      _defineProperty(Constants, "VIP_LASTDAY_REWARD", "vldr");

      _defineProperty(Constants, "VIP_LASTDAY", "vld");

      _defineProperty(Constants, "SHOW_VIP_POPUP", "show_vip_popup");

      _defineProperty(Constants, "SHOW_SUMMER_PACK_POPUP", "show_summer_pack_popup");

      _defineProperty(Constants, "SHOP_PACK_UPDATE", "shop_pack_update");

      _defineProperty(Constants, "SHOW_DAILY_CHALLENGE_POPUP", "show_daily_challenge_popup");

      _defineProperty(Constants, "TOUCH_LEVEL", "touch_level");

      _defineProperty(Constants, "SHOW_LANGUAGE_POPUP", "show_language_popup");

      _defineProperty(Constants, "SHOW_SETTING_POPUP", "show_setting_popup");

      _defineProperty(Constants, "SHOW_PAUSE_POPUP", "show_pause_popup");

      _defineProperty(Constants, "SETTING_TOUCH_CONTINUE", "setting_touch_continue");

      _defineProperty(Constants, "WELLDONE_FINISHED", "welldone_finished");

      _defineProperty(Constants, "DATA_INFODAY_FINISHED", "day_finished");

      _defineProperty(Constants, "DATA_INFOMONTH_REWARD", "month_reward");

      _defineProperty(Constants, "DAILYCHALLENGE_TOUCH_SELECT_DAY", "dailychallenge_touch_select_day");

      _defineProperty(Constants, "DAILYCHALLENGE_SELECT_DAY_UPDATE", "dailychallenge_select_day_update");

      _defineProperty(Constants, "DAILYCHALLENGE_PLAY_LEVEL", "dailychallenge_play_level");

      _defineProperty(Constants, "DAILYCHALLENGE_LEVEL_FINISHED", "dailychallenge_level_finished");

      _defineProperty(Constants, "DAILYCHALLENGE_NOMOVES_TOUCHCLOSE", "dailychallenge_nomoves_touchclose");

      _defineProperty(Constants, "DAILYCHALLENGE_TOUCH_BOXREWARD", "dailychallenge_touch_boxreward");

      _defineProperty(Constants, "SHOW_BOXREWARD_RECEIVE_POPUP", "show_boxreward_receive_popup");

      _defineProperty(Constants, "HOME_UPDATE_TARGET_POS", "home_update_target_pos");

      _defineProperty(Constants, "TUT_LEVEL5", "tutlv5");

      _defineProperty(Constants, "THEME_SELECTED", "tsl");

      _defineProperty(Constants, "THEME_UNLOCKED", "tsu");

      _defineProperty(Constants, "THEME_SELECT_UPDATE", "theme_select_update");

      _defineProperty(Constants, "THEME_UNSELECT_UPDATE", "theme_unselect_update");

      _defineProperty(Constants, "THEME_SELECTED_UPDATE", "theme_selected_update");

      _defineProperty(Constants, "DAILY_LOGIN_INDEX", "dli");

      _defineProperty(Constants, "DAILY_LOGIN_LASTDAY", "dld");

      _defineProperty(Constants, "DAILY_LOGIN_AD_LASTDAY", "dald");

      _defineProperty(Constants, "DAILY_LOGIN_INDEX_SETFINISHED", "daily_login_index_setfinished");

      _defineProperty(Constants, "SHOW_DAILYTASK_POPUP", "show_dailytask_popup");

      _defineProperty(Constants, "SHOW_REWARDRECEIVE_POPUP", "show_rewardreceive_popup");

      _defineProperty(Constants, "DAILY_QUEST_RECEIVES", "dqr");

      _defineProperty(Constants, "DAILY_QUEST_LASTDAY", "dqld");

      _defineProperty(Constants, "DAILY_QUEST_DATA", "dqd");

      _defineProperty(Constants, "DAILY_QUEST_TOUCH_CLAIM", "daily_quest_touch_claim");

      _defineProperty(Constants, "DAILY_QUEST_TOUCH_GOTO", "daily_quest_touch_goto");

      _defineProperty(Constants, "DAILY_QUEST_CLAIM_UPDATE_STARTPOS", "daily_quest_claim_update_startpos");

      _defineProperty(Constants, "PGS_RECEIVE_LISTRANK_LEADERBOARD", "pgs_receiveListRank_LeaderBoard");

      _defineProperty(Constants, "PGS_REMOTECONFIG_SUCCESS", "pgs_remoteconfig_success");

      _defineProperty(Constants, "TOUCH_TABLEADERBOARD", "touch_tableaderboard");

      _defineProperty(Constants, "TABLEARDBOARD_UPDATE", "tableaderboard_update");

      _defineProperty(Constants, "SHOW_LEVELCHEST_POPUP", "show_levelchest_popup");

      _defineProperty(Constants, "SHOW_EFX_FIREWORK", "show_efx_firework");

      _defineProperty(Constants, "WINPOPUP_TOUCH_HOME", "winpopup_touch_home");

      _defineProperty(Constants, "SHOW_CHEST_REWARD_POPUP", "show_chest_reward_popup");

      _defineProperty(Constants, "SHOW_THEME_REWARD_POPUP", "show_theme_reward_popup");

      _defineProperty(Constants, "LEVEL_CHEST_TOUCH_CONTINUE", "level_chest_touch_continue");

      _defineProperty(Constants, "SHOW_TOURNAMENT_POPUP", "show_tournament_popup");

      _defineProperty(Constants, "SET_TOURNAMENT_LOSE", "set_tournament_lose");

      _defineProperty(Constants, "TOURNAMENT_TOUCH_PLAY", "tournament_touch_play");

      _defineProperty(Constants, "SHOW_TOURNAMENTQUIT_POPUP", "show_tournamentquit_popup");

      _defineProperty(Constants, "TOURNAMENT_QUIT_YES", "tournament_quit_yes");

      _defineProperty(Constants, "TOURNAMENT_QUIT_CONTINUE", "tournament_quit_continue");

      _defineProperty(Constants, "SHOW_TOURNAMENT_RESULT_POPUP", "show_tournament_result_popup");

      _defineProperty(Constants, "TOURNAMENT_RESULT_TOUCH_REPLAY", "tournament_result_touch_replay");

      _defineProperty(Constants, "TOURNAMENT_RESULT_TOUCH_HOME", "tournament_result_touch_home");

      _defineProperty(Constants, "SHOW_TOURNAMENT_REVIVE_POPUP", "show_tournament_revive_popup");

      _defineProperty(Constants, "TOURNAMENT_REVIVE_YES", "tournament_revive_yes");

      _defineProperty(Constants, "TOURNAMENT_REVIVE_NO", "tournament_revive_no");

      _defineProperty(Constants, "SHOW_SHOP_ITEM_POPUP", "show_shop_item_popup");

      _defineProperty(Constants, "SHOW_TUBERACE_JOIN_POPUP", "show_tuberace_join_popup");

      _defineProperty(Constants, "TUBERACE_TOUCH_JOIN", "tuberace_touch_join");

      _defineProperty(Constants, "TUBERACE_INFOS", "ri");

      _defineProperty(Constants, "TUBERACE_OPPONENTS", "ro");

      _defineProperty(Constants, "SHOW_TUBERACE_POPUP", "show_tuberace_popup");

      _defineProperty(Constants, "TUBERACE_OPPONENTS_FINISHED", "tuberace_opponents_finished");

      _defineProperty(Constants, "SHOW_TUBERACE_WIN_POPUP", "show_tuberace_win_popup");

      _defineProperty(Constants, "TUBERACE_PLAYER_FINISHED", "tuberace_player_finished");

      _defineProperty(Constants, "SHOW_TUBERACE_LOSE_POPUP", "show_tuberace_lose_popup");

      _defineProperty(Constants, "TUBERACE_CLAIM_FINISHED", "tuberace_claim_finished");

      _defineProperty(Constants, "TUBERACE_UPDATE", "tuberace_update");

      _defineProperty(Constants, "PASS_INFOS", "pi");

      _defineProperty(Constants, "PASS_ACTIVATED", "pa");

      _defineProperty(Constants, "PASS_TUTORIAL", "pt");

      _defineProperty(Constants, "SHOW_MASSTERPASS_POPUP", "show_masterpass_popup");

      _defineProperty(Constants, "SHOW_MASSTERPASS_ACTIVATE_POPUP", "show_masterpass_activate_popup");

      _defineProperty(Constants, "SHOW_MASSTERPASS_INFO_POPUP", "show_masterpass_info_popup");

      _defineProperty(Constants, "PASS_ACTIVATED_UPDATE", "pass_activated_update");

      _defineProperty(Constants, "PASS_UPDATE", "pass_update");

      _defineProperty(Constants, "SHOW_SPIN_POPUP", "show_spin_popup");

      _defineProperty(Constants, "SPIN_LASTTIME", "spl");

      _defineProperty(Constants, "SPIN_FREECOUNT", "spfc");

      _defineProperty(Constants, "SHOW_SHARE_INFOLEVEL_POPUP", "show_shareinfo_level_popup");

      _defineProperty(Constants, "SHOW_SHARE_INFOSCORE_POPUP", "show_shareinfo_score_popup");

      _defineProperty(Constants, "SHOW_SHARE_TOURNAMENT_POPUP", "show_share_torunament_popup");

      _defineProperty(Constants, "SHOW_INVITE_POPUP", "show_invite_popup");

      _defineProperty(Constants, "SHOW_SHARECONTEXT_POPUP", "show_sharecontext_popup");

      _defineProperty(Constants, "GOTO_TOURNAMENT", "goto_tournament");

      _defineProperty(Constants, "FREEVIDEO_LASTTIME", "sflt");

      _defineProperty(Constants, "FREEVIDEO_LASTTIME_UPDATE", "freevideo_lasttime_update");

      _defineProperty(Constants, "WITHFRIEND_TOUCH_PLAY", "withfriend_touch_play");

      _defineProperty(Constants, "WITHFRIEND_PLAY_START", "withfriend_play_start");

      _defineProperty(Constants, "SHOW_UPDATECONTEXT_WITHFRIEND_POPUP", "show_updateContext_withfriend_popup");

      _defineProperty(Constants, "SHOW_WIN_WITHFRIEND_POPUP", "show_win_withfriend_popup");

      _defineProperty(Constants, "SHOW_SHARE_WITHFRIEND_POPUP", "show_share_withfriend_popup");

      _defineProperty(Constants, "WITHFRIEND_TOUCH_REPLAY", "withfriend_touch_replay");

      _defineProperty(Constants, "WITHFRIEND_NOMOVES_TOUCH_CLOSE", "withfriend_nomoves_touch_close");

      _defineProperty(Constants, "WINPOPUP_WITHFRIEND_TOUCH_HOME", "winpopup_withfriend_touch_home");

      _defineProperty(Constants, "WINPOPUP_DAILYCHALLENGE_TOUCH_HOME", "winpopup_dailychallenge_touch_home");

      _defineProperty(Constants, "SHOW_FRIENDS_POPUP", "show_friends_popup");

      _defineProperty(Constants, "SHOPITEM_BUYSUCESS", "shopitem_buy_success");

      _defineProperty(Constants, "SHOW_EFX_OBIM_FINSIHED", "showEfxOBIMFinished");

      _defineProperty(Constants, "SHOW_EFX_CLAY_FINSIHED", "showEfxClayFinished");

      _defineProperty(Constants, "SHOW_EFX_PLASTER_FINSIHED", "showEfxPlasterFinished");

      _defineProperty(Constants, "SHOW_EFX_QUESTION", "showEfxQuestion");

      _defineProperty(Constants, "HEART_COUNT", "hc");

      _defineProperty(Constants, "HEART_COUNT_UPDATE", "heart_count_update");

      _defineProperty(Constants, "HEART_LASTTIME", "hlt");

      _defineProperty(Constants, "HEART_UNLIMITED_COUNTTIME", "huct");

      _defineProperty(Constants, "HEART_UNLIMITED_LASTTIME", "hult");

      _defineProperty(Constants, "HEART_UNLIMITED_UPDATE", "heart_unlimited_update");

      _defineProperty(Constants, "HEART_UPDATE", "heart_update");

      _defineProperty(Constants, "SHOW_HEART_POPUP", "showHeartPopup");

      _defineProperty(Constants, "SHOW_ADDHEART_UNLIMITED", "showAddHeartUnlimited");

      _defineProperty(Constants, "UPDATE_HEART_TARGETPOS", "update_Heart_TargetPos");

      _defineProperty(Constants, "UPDATE_HEART_STARTPOS", "update_Heart_StartPos");

      _defineProperty(Constants, "SHUFFLE_TUBE_FINISHED", "shuffle_tube_finished");

      _defineProperty(Constants, "SHOW_QUITCONFIRM_POPUP", "show_quitconfirm_popup");

      _defineProperty(Constants, "QUITCONFIRM_TOUCH_YES", "quitconfirm_touch_yes");

      _defineProperty(Constants, "QUITCONFIRM_TOUCH_CONTINUE", "quitconfirm_touch_continue");

      _defineProperty(Constants, "SHOW_LEVELFAILED_POPUP", "show_levelfailed_popup");

      _defineProperty(Constants, "LEVELFAILED_TOUCH_RETRY", "levelfailed_touch_retry");

      _defineProperty(Constants, "BACK_TO_HOME", "back_to_home");

      _defineProperty(Constants, "SHOW_MORELIVES_POPUP", "show_morelives_popup");

      _defineProperty(Constants, "NOMOVES_TOUCH_PLAYON", "nomoves_touch_playon");

      _defineProperty(Constants, "NOMOVES_TOUCH_GIVEUP", "nomoves_touch_giveup");

      _defineProperty(Constants, "NOMOVES_TOUCH_REPLAY", "nomoves_touch_replay");

      _defineProperty(Constants, "SHOP_DAILY_FREE_LASTDAY", "sdfld");

      _defineProperty(Constants, "SHOP_DAILY_FREE_LASTDAY_UPDATE", "shop_daily_free_lastday_update");

      _defineProperty(Constants, "SHOW_TUT_CURTAIN_POPUP", "show_tut_curtain_popup");

      _defineProperty(Constants, "TUT_CURTAION", "t_curtain");

      _defineProperty(Constants, "SHOW_TUT_CLAY_POPUP", "show_tut_clay_popup");

      _defineProperty(Constants, "TUT_CLAY", "t_clay");

      _defineProperty(Constants, "SHOW_TUT_PLASTER_POPUP", "show_tut_plaster_popup");

      _defineProperty(Constants, "TUT_PLASTER", "t_plaster");

      _defineProperty(Constants, "DAILYTASK_NOTIFY_UPDATE", "dailytask_notify_update");

      _defineProperty(Constants, "DAILYCHALLENGE_NOTIFY_UPDATE", "dailychallenge_notify_update");

      _defineProperty(Constants, "SPIN_NOTIFY_UPDATE", "spin_notify_update");

      _defineProperty(Constants, "IAP_COUNT", "iap_c");

      _defineProperty(Constants, "WIN_STREAK", "win_s");

      _defineProperty(Constants, "LOSE_STREAK", "lose_s");

      _defineProperty(Constants, "TOURNAMENT_PAGEHOST_TOUCH_REPLAY", "tournament_pagehost_touch_replay");

      _defineProperty(Constants, "TOURNAMENT_PAGEHOST_TOUCH_HOME", "tournament_pagehost_touch_home");

      _defineProperty(Constants, "SHOW_WIN_TOURNAMENT_PAGEHOST_POPUP", "show_win_tournament_pagehost_popup");

      _defineProperty(Constants, "RECEIVE_LISTRANK_TOURNAMENT_PAGEHOST", "receive_listrank_tournament_pagehost");

      _defineProperty(Constants, "SHOW_THEME_POPUP", "show_theme_popup");

      _defineProperty(Constants, "POKI_INIT_SUCCESS", "poki_init_success");

      _export("GAME_STATE", GAME_STATE = {
        PRE_START: 0,
        PLAY: 1,
        ENDGAME: 2,
        WIN: 3,
        LOSE: 4,
        PAUSE: 5,
        GAME_OVER: 6,
        SHUFFLE: 7,
        NO_MOVES: 8
      });

      _export("ENV_TYPE", ENV_TYPE = {
        FB: 0,
        TEST_AD: 1
      });

      _export("AVATAR_TYPE", AVATAR_TYPE = {
        TYPE_WEB: 0,
        TYPE_LOCAL: 1
      });

      _export("GAME_MODE", GAME_MODE = {
        NORMAL: 0,
        DAILY_CHALLENGE: 1,
        TOURNAMENT: 2,
        WITH_FRIEND: 3,
        TOURNAMENT_PAGEHOST: 4
      });

      (function (PLAY_TYPE) {
        PLAY_TYPE[PLAY_TYPE["HOME"] = 0] = "HOME";
        PLAY_TYPE[PLAY_TYPE["NEXT"] = 1] = "NEXT";
        PLAY_TYPE[PLAY_TYPE["RESTART"] = 2] = "RESTART";
      })(PLAY_TYPE || _export("PLAY_TYPE", PLAY_TYPE = {}));

      (function (ITEM_TUBE_STATE) {
        ITEM_TUBE_STATE[ITEM_TUBE_STATE["NONE"] = 0] = "NONE";
        ITEM_TUBE_STATE[ITEM_TUBE_STATE["SELECT"] = 1] = "SELECT";
        ITEM_TUBE_STATE[ITEM_TUBE_STATE["UNSELECT"] = 2] = "UNSELECT";
        ITEM_TUBE_STATE[ITEM_TUBE_STATE["DONE"] = 3] = "DONE";
        ITEM_TUBE_STATE[ITEM_TUBE_STATE["ON"] = 4] = "ON";
        ITEM_TUBE_STATE[ITEM_TUBE_STATE["OFF"] = 5] = "OFF";
        ITEM_TUBE_STATE[ITEM_TUBE_STATE["UNLOCK"] = 6] = "UNLOCK";
        ITEM_TUBE_STATE[ITEM_TUBE_STATE["ADDCOL"] = 7] = "ADDCOL";
        ITEM_TUBE_STATE[ITEM_TUBE_STATE["WAITTING"] = 8] = "WAITTING";
        ITEM_TUBE_STATE[ITEM_TUBE_STATE["OBIM"] = 9] = "OBIM";
        ITEM_TUBE_STATE[ITEM_TUBE_STATE["PLASTER"] = 10] = "PLASTER";
      })(ITEM_TUBE_STATE || _export("ITEM_TUBE_STATE", ITEM_TUBE_STATE = {}));

      Enum(ITEM_TUBE_STATE);

      (function (WATER_STATE) {
        WATER_STATE[WATER_STATE["NONE"] = 0] = "NONE";
        WATER_STATE[WATER_STATE["LOCK"] = 1] = "LOCK";
      })(WATER_STATE || _export("WATER_STATE", WATER_STATE = {}));

      Enum(WATER_STATE);

      (function (BOOSTER_TYPE) {
        BOOSTER_TYPE[BOOSTER_TYPE["UNDO"] = 0] = "UNDO";
        BOOSTER_TYPE[BOOSTER_TYPE["SUGGEST"] = 1] = "SUGGEST";
        BOOSTER_TYPE[BOOSTER_TYPE["ADDCOL"] = 2] = "ADDCOL";
      })(BOOSTER_TYPE || _export("BOOSTER_TYPE", BOOSTER_TYPE = {}));

      Enum(BOOSTER_TYPE);

      (function (TICKET_TYPE) {
        TICKET_TYPE[TICKET_TYPE["GOLD"] = 0] = "GOLD";
        TICKET_TYPE[TICKET_TYPE["SILVER"] = 1] = "SILVER";
      })(TICKET_TYPE || _export("TICKET_TYPE", TICKET_TYPE = {}));

      Enum(TICKET_TYPE);

      (function (TAB_TYPE) {
        TAB_TYPE[TAB_TYPE["SHOP"] = 0] = "SHOP";
        TAB_TYPE[TAB_TYPE["THEME"] = 1] = "THEME";
        TAB_TYPE[TAB_TYPE["HOME"] = 2] = "HOME";
        TAB_TYPE[TAB_TYPE["TOURNAMENT"] = 3] = "TOURNAMENT";
        TAB_TYPE[TAB_TYPE["LEADERBOARD"] = 4] = "LEADERBOARD";
      })(TAB_TYPE || _export("TAB_TYPE", TAB_TYPE = {}));

      Enum(TAB_TYPE);

      (function (SHOP_PACK_TYPE) {
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["TICKET_GOLD_10"] = 0] = "TICKET_GOLD_10";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["TICKET_GOLD_30"] = 1] = "TICKET_GOLD_30";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["TICKET_GOLD_60"] = 2] = "TICKET_GOLD_60";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["TICKET_GOLD_130"] = 3] = "TICKET_GOLD_130";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["TICKET_GOLD_250"] = 4] = "TICKET_GOLD_250";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["TICKET_GOLD_600"] = 5] = "TICKET_GOLD_600";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["TICKET_SILVER_10"] = 6] = "TICKET_SILVER_10";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["TICKET_SILVER_30"] = 7] = "TICKET_SILVER_30";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["TICKET_SILVER_60"] = 8] = "TICKET_SILVER_60";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["VIP_30"] = 9] = "VIP_30";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["VIP_7"] = 10] = "VIP_7";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["VIP_3"] = 11] = "VIP_3";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["REMOVE_AD"] = 12] = "REMOVE_AD";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["REMOVE_AD_PACK"] = 13] = "REMOVE_AD_PACK";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["PACK_1"] = 14] = "PACK_1";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["PACK_2"] = 15] = "PACK_2";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["PACK_3"] = 16] = "PACK_3";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["SUMMER_PACK"] = 17] = "SUMMER_PACK";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["MASTER_PASS"] = 18] = "MASTER_PASS";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["BUNDLE_1"] = 19] = "BUNDLE_1";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["BUNDLE_2"] = 20] = "BUNDLE_2";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["BUNDLE_3"] = 21] = "BUNDLE_3";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["BUNDLE_4"] = 22] = "BUNDLE_4";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["BUNDLE_5"] = 23] = "BUNDLE_5";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["BUNDLE_6"] = 24] = "BUNDLE_6";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["COIN_1"] = 25] = "COIN_1";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["COIN_2"] = 26] = "COIN_2";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["COIN_3"] = 27] = "COIN_3";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["COIN_4"] = 28] = "COIN_4";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["COIN_5"] = 29] = "COIN_5";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["COIN_6"] = 30] = "COIN_6";
        SHOP_PACK_TYPE[SHOP_PACK_TYPE["STARTER_PACK"] = 31] = "STARTER_PACK";
      })(SHOP_PACK_TYPE || _export("SHOP_PACK_TYPE", SHOP_PACK_TYPE = {}));

      Enum(TAB_TYPE);

      (function (IAP_PLACEMENT_TYPE) {
        IAP_PLACEMENT_TYPE[IAP_PLACEMENT_TYPE["HOME_SHOP"] = 0] = "HOME_SHOP";
        IAP_PLACEMENT_TYPE[IAP_PLACEMENT_TYPE["HOME_POPUP"] = 1] = "HOME_POPUP";
        IAP_PLACEMENT_TYPE[IAP_PLACEMENT_TYPE["INGAME_POPUP"] = 2] = "INGAME_POPUP";
      })(IAP_PLACEMENT_TYPE || _export("IAP_PLACEMENT_TYPE", IAP_PLACEMENT_TYPE = {}));

      Enum(IAP_PLACEMENT_TYPE);

      (function (IAP_SHOW_TYPE) {
        IAP_SHOW_TYPE[IAP_SHOW_TYPE["SHOP"] = 0] = "SHOP";
        IAP_SHOW_TYPE[IAP_SHOW_TYPE["PACK"] = 1] = "PACK";
      })(IAP_SHOW_TYPE || _export("IAP_SHOW_TYPE", IAP_SHOW_TYPE = {}));

      Enum(IAP_SHOW_TYPE);

      (function (SHOP_ITEM_TYPE) {
        SHOP_ITEM_TYPE[SHOP_ITEM_TYPE["TICKET_GOLD"] = 0] = "TICKET_GOLD";
        SHOP_ITEM_TYPE[SHOP_ITEM_TYPE["TICKET_SILVER"] = 1] = "TICKET_SILVER";
        SHOP_ITEM_TYPE[SHOP_ITEM_TYPE["COIN"] = 2] = "COIN";
        SHOP_ITEM_TYPE[SHOP_ITEM_TYPE["REMOVE_AD"] = 3] = "REMOVE_AD";
        SHOP_ITEM_TYPE[SHOP_ITEM_TYPE["BOOSTER_UNDO"] = 4] = "BOOSTER_UNDO";
        SHOP_ITEM_TYPE[SHOP_ITEM_TYPE["BOOSTER_SUGGEST"] = 5] = "BOOSTER_SUGGEST";
        SHOP_ITEM_TYPE[SHOP_ITEM_TYPE["BOOSTER_ADDCOL"] = 6] = "BOOSTER_ADDCOL";
        SHOP_ITEM_TYPE[SHOP_ITEM_TYPE["HEART"] = 7] = "HEART";
        SHOP_ITEM_TYPE[SHOP_ITEM_TYPE["HEART_UNLIMITED"] = 8] = "HEART_UNLIMITED";
      })(SHOP_ITEM_TYPE || _export("SHOP_ITEM_TYPE", SHOP_ITEM_TYPE = {}));

      Enum(SHOP_ITEM_TYPE);

      (function (SCENE_TYPE) {
        SCENE_TYPE[SCENE_TYPE["MENU"] = 0] = "MENU";
        SCENE_TYPE[SCENE_TYPE["GAME"] = 1] = "GAME";
      })(SCENE_TYPE || _export("SCENE_TYPE", SCENE_TYPE = {}));

      Enum(SCENE_TYPE);

      (function (BOX_STATE) {
        BOX_STATE[BOX_STATE["IDLE"] = 0] = "IDLE";
        BOX_STATE[BOX_STATE["OPEN"] = 1] = "OPEN";
        BOX_STATE[BOX_STATE["READY"] = 2] = "READY";
        BOX_STATE[BOX_STATE["OPENING"] = 3] = "OPENING";
        BOX_STATE[BOX_STATE["OPENED"] = 4] = "OPENED";
      })(BOX_STATE || _export("BOX_STATE", BOX_STATE = {}));

      Enum(BOX_STATE);

      (function (BOX_TYPE) {
        BOX_TYPE[BOX_TYPE["NONE"] = 0] = "NONE";
        BOX_TYPE[BOX_TYPE["BOX_1"] = 1] = "BOX_1";
        BOX_TYPE[BOX_TYPE["BOX_2"] = 2] = "BOX_2";
        BOX_TYPE[BOX_TYPE["BOX_3"] = 3] = "BOX_3";
        BOX_TYPE[BOX_TYPE["BOX_4"] = 4] = "BOX_4";
      })(BOX_TYPE || _export("BOX_TYPE", BOX_TYPE = {}));

      Enum(BOX_TYPE);

      (function (THEME_TYPE) {
        THEME_TYPE[THEME_TYPE["TUBE"] = 0] = "TUBE";
        THEME_TYPE[THEME_TYPE["BG"] = 1] = "BG";
        THEME_TYPE[THEME_TYPE["SKIN"] = 2] = "SKIN";
      })(THEME_TYPE || _export("THEME_TYPE", THEME_TYPE = {}));

      Enum(THEME_TYPE);

      (function (UNLOCK_TYPE) {
        UNLOCK_TYPE[UNLOCK_TYPE["NONE"] = 0] = "NONE";
        UNLOCK_TYPE[UNLOCK_TYPE["TICKET_GOLD"] = 1] = "TICKET_GOLD";
        UNLOCK_TYPE[UNLOCK_TYPE["TICKET_SILVER"] = 2] = "TICKET_SILVER";
        UNLOCK_TYPE[UNLOCK_TYPE["COIN"] = 3] = "COIN";
        UNLOCK_TYPE[UNLOCK_TYPE["WATCH_AD"] = 4] = "WATCH_AD";
      })(UNLOCK_TYPE || _export("UNLOCK_TYPE", UNLOCK_TYPE = {}));

      Enum(UNLOCK_TYPE);

      (function (DAILYTASK_TYPE) {
        DAILYTASK_TYPE[DAILYTASK_TYPE["LOGIN"] = 0] = "LOGIN";
        DAILYTASK_TYPE[DAILYTASK_TYPE["QUEST"] = 1] = "QUEST";
      })(DAILYTASK_TYPE || _export("DAILYTASK_TYPE", DAILYTASK_TYPE = {}));

      Enum(DAILYTASK_TYPE);

      (function (QUEST_TYPE) {
        QUEST_TYPE[QUEST_TYPE["NONE"] = 0] = "NONE";
        QUEST_TYPE[QUEST_TYPE["RECEIVE_DAILY_REWARD"] = 1] = "RECEIVE_DAILY_REWARD";
        QUEST_TYPE[QUEST_TYPE["WIN"] = 2] = "WIN";
        QUEST_TYPE[QUEST_TYPE["WIN_STREAK"] = 3] = "WIN_STREAK";
        QUEST_TYPE[QUEST_TYPE["COMPLETED_TORNAMENT"] = 4] = "COMPLETED_TORNAMENT";
        QUEST_TYPE[QUEST_TYPE["COMPLETED_DAILY_CHALLENGE"] = 5] = "COMPLETED_DAILY_CHALLENGE";
        QUEST_TYPE[QUEST_TYPE["BOOSTER"] = 6] = "BOOSTER";
      })(QUEST_TYPE || _export("QUEST_TYPE", QUEST_TYPE = {}));

      Enum(QUEST_TYPE);

      (function (LEVEL_STATE) {
        LEVEL_STATE[LEVEL_STATE["LOCK"] = 0] = "LOCK";
        LEVEL_STATE[LEVEL_STATE["FINISHED"] = 1] = "FINISHED";
        LEVEL_STATE[LEVEL_STATE["ACTIVE"] = 2] = "ACTIVE";
      })(LEVEL_STATE || _export("LEVEL_STATE", LEVEL_STATE = {}));

      Enum(LEVEL_STATE);

      (function (LEADERBOARD_TYPE) {
        LEADERBOARD_TYPE[LEADERBOARD_TYPE["WORLD"] = 0] = "WORLD";
        LEADERBOARD_TYPE[LEADERBOARD_TYPE["FRIEND"] = 1] = "FRIEND";
      })(LEADERBOARD_TYPE || _export("LEADERBOARD_TYPE", LEADERBOARD_TYPE = {}));

      Enum(LEADERBOARD_TYPE);

      (function (AD_FORMAT_TYPE) {
        AD_FORMAT_TYPE[AD_FORMAT_TYPE["BANNER"] = 0] = "BANNER";
        AD_FORMAT_TYPE[AD_FORMAT_TYPE["INTERSTITIAL"] = 1] = "INTERSTITIAL";
        AD_FORMAT_TYPE[AD_FORMAT_TYPE["REWARDED_VIDEO"] = 2] = "REWARDED_VIDEO";
      })(AD_FORMAT_TYPE || _export("AD_FORMAT_TYPE", AD_FORMAT_TYPE = {}));

      Enum(AD_FORMAT_TYPE);

      (function (AD_END_TYPE) {
        AD_END_TYPE[AD_END_TYPE["QUIT"] = 0] = "QUIT";
        AD_END_TYPE[AD_END_TYPE["DONE"] = 1] = "DONE";
      })(AD_END_TYPE || _export("AD_END_TYPE", AD_END_TYPE = {}));

      Enum(AD_END_TYPE);

      (function (TOURNAMENT_TYPE) {
        TOURNAMENT_TYPE[TOURNAMENT_TYPE["NONE"] = 0] = "NONE";
        TOURNAMENT_TYPE[TOURNAMENT_TYPE["PAGE_HOST"] = 1] = "PAGE_HOST";
      })(TOURNAMENT_TYPE || _export("TOURNAMENT_TYPE", TOURNAMENT_TYPE = {}));

      Enum(TOURNAMENT_TYPE);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=constants.js.map