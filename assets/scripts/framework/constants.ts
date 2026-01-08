import { Enum } from "cc";

export class Constants {
    public static GAME_NAME:string = 'WaterSortWoodyPuzzlePoki';

    public static GAME_NAME_TITLE:string = 'Water Sort Woody Puzzle';

    public static SOUND:string = "sound";
    public static MUSIC:string = "music";
    public static VIBRATION:string = "vibration";
    public static TOPS:string = "tops";

    public static SHOW_LOADING_NOW:string = 'showLoadingNow';
    public static HIDE_LOADING:string = 'hideloading';
    public static HIDE_LOADING2:string = 'hideloading2';
    public static SHOW_NOTIFICATION:string = 'showNotification';


    public static FBINSTANT_INIT_SUCCESS:string = "fbInstant_Init_Success";

    public static BUNDLE_ITEMS:string = "items";
    public static BUNDLE_AUDIOS:string = "audios";

    //LIVE
    public static PGS_GAMEID:string = "6759037cb77d323bd9f2e34c";
    public static PLAYFAB_TITLE:string = "E4AE4";
    public static FB_BANNER_PLACEMENT_ID: string = "1523780215196018_1523787905195249"; 
    public static FB_INTERSTITIAL_PLACEMENT_ID: string = "1523780215196018_1566842380889801";
    public static FB_REWARDED_PLACEMENT_ID: string = "1523780215196018_1566842310889808"; 
    
    public static FB_INTERSTITIAL_CALLBACK_SUCCESS:string = "fb_interstitial_callback_success";
    public static FB_INTERSTITIAL_CALLBACK_FAIL:string = "fb_interstitial_callback_fail";
    public static FB_REWARD_CALLBACK_SUCCESS:string = "fb_reward_callback_success";
    public static FB_REWARD_CALLBACK_FAIL:string = "fb_reward_callback_fail";
    public static FB_REWARD_CALLBACK_NOTFINISH:string = "fb_reward_callback_notFinish";

    public static COIN:string = "coin";
    public static COIN_UPDATE:string = "coin_update";

    public static ADDCOIN:string = "addCoin";
    public static SHOW_ADDCOIN:string = "showAddCoin";
    public static UPDATE_COIN_TARGETPOS:string = "update_Coin_TargetPos";
    public static UPDATE_COIN_STARTPOS:string = "update_Coin_StartPos";

    public static AVATAR_LOAD_FINISHED:string = "avatar_load_Finished";

    public static SCORE:string = "score";
    public static SCORE_UPDATE:string = "score_update";

    public static CONFIRM_OK:string = "confirm_ok";

    public static SHAKE_CAMERA:string = "shake_camera";

    public static CLICK:string = "click";
    
    public static LOG_CAMPID:string = "log_campID";
    public static LOG_ADSET:string = "log_adset";
    public static LOG_ADS:string = "log_ads";
    public static LOG_TOUR:string = "log_tour";

    public static COUNTDOWNTIME_NEXTDAY_FINISHED:string = "countdowntime_nextDay_finished";

    public static SHOW_LOADING_POPUP:string = "showLoadingPopup";
    public static HIDE_LOADING_POPUP:string = "hideLoadingPopup";

    public static SHOW_LOADING_AD_POPUP:string = "showLoadingAdPopup";
    public static HIDE_LOADING_AD_POPUP:string = "hideLoadingAdPopup";

    public static SHOW_LOADING_START_POPUP:string = "showLoadingStartPopup";
    public static SHOW_LOADING_START_NOW_POPUP:string = "showLoadingStartNowPopup";
    public static HIDE_LOADING_START_POPUP:string = "hideLoadingStartPopup";
    public static HIDE_LOADING_START_NOW_POPUP:string = "hideLoadingStartNowPopup";
    

    public static GET_DATA_PLAYER_SUCCESS:string = "get_data_player_success";
    public static GET_DATA_PAYLOAD_SUCCESS: string = "get_data_payload_success";

    public static FB_CALLBACK_SUCCESS:string = "fb_callback_success";
    public static FB_CALLBACK_FAIL:string = "fb_callback_success";
    

    public static BLACK_FIRDAY:string = "black_friday";
    public static SHOW_BLACKRIDAY_COIN_POPUP:string = "show_blackfriday_coin_popup";

    public static TUBE_MOVETARGET_FINISHED = "tube_moveTarget_finished";
    public static TUBE_WATEROFF_FINISHED = "tube_waterOFF_finished";
    public static TUBE_SELECT = "tube_select";
    public static CURR_TUBE_UPDATE:string = "currtube_update";
    public static TUBE_MOVEBACK_FINISHED = "tube_moveback_finished";

    public static SHOW_EFX_TUBE_FINSIHED = "showEfxTubeFinished";
    public static TUBE_DONE = "tubeDone";

    public static TUBE_OBIM_DONE = "tubeObimDone";
    public static TUBE_PLASER_DONE = "tubePlasterDone";

    public static BOOSTER_COUNT:string = "bc";
    public static BOOSTER_COUNT_UPDATE:string = "booster_count_update";
    public static BOOSTER_CLICK:string = "booster_click";

    public static TICKET:string = "tk";
    public static TICKET_UPDATE:string = "ticket_update";
    

    public static ADDTICKET:string = "addTicket";
    public static SHOW_ADDTICKET:string = "showAddTicket";
    public static UPDATE_TICKET_TARGETPOS:string = "update_Ticket_TargetPos";
    public static UPDATE_TICKET_STARTPOS:string = "update_Ticket_StartPos";

    public static SHOW_SHOP_POPUP:string = "showShopPopup";
    public static SHOP_POPUP_CLOSE:string = "shop_popup_close";
    public static SHOW_SHOP_GROUP:string = "showShopGroup";

    public static TOUCH_NEXT_LEVEL:string = "touchNextLevel";
    public static PAUSE_TOUCH_HOME:string = "pause_touch_home";
    public static SHOW_WIN_POPUP:string = "show_win_popup";
    public static SHOW_WIN_DAILYCHALLENGE_POPUP:string = "show_win_dailychallenge_popup";

    public static LEVEL_UNLOCK:string = "lv";
    public static LEVEL_UNLOCK_UPDATE:string = "level_unlock_update";

    public static TOUCH_TAB:string = "touch_tab";
    public static TAB_UPDATE:string = "tab_update";

    public static TOUCH_TABTHEME:string = "touch_tabtheme";
    public static TABTHEME_UPDATE:string = "tabtheme_update";

    public static TOUCH_TABDAILYTASK:string = "touch_tabdailytask";
    public static TABDAILYTASK_UPDATE:string = "tabdailytask_update";

    public static IAP_INIT_SUCCESS:string = "iap_init_success";

    public static REMOVE_AD:string = "rad";
    public static REMOVE_AD_UPDATE:string = "remove_ad_update";
    public static BUY_REMOVEAD_SUCCESS:string = "buy_removead_success";
    public static SHOW_REMOVEAD_POPUP:string = "show_removead_popup";

    public static STARTER_PACK:string = "iasp";
    public static STARTER_PACK_UPDATE:string = "starter_pack_update";
    public static BUY_STARTER_PACK_SUCCESS:string = "buy_starter_pack_success";

    public static SHOP_FREE_LASTTIME:string = "sflt";

    public static SHOP_FREE_LASTTIME_UPDATE:string = "shop_free_lasttime_update";

    public static VIP_UPDATE:string = "vip_update";
    public static VIP:string = "v";
    public static VIP_LASTDAY_REWARD:string = "vldr";
    public static VIP_LASTDAY:string = "vld";   
    public static SHOW_VIP_POPUP:string = "show_vip_popup";

    public static SHOW_SUMMER_PACK_POPUP:string = "show_summer_pack_popup";

    public static SHOP_PACK_UPDATE:string = "shop_pack_update";
    public static SHOW_DAILY_CHALLENGE_POPUP:string = "show_daily_challenge_popup";

    public static TOUCH_LEVEL:string = "touch_level";
    public static SHOW_LANGUAGE_POPUP:string = "show_language_popup";

    public static SHOW_SETTING_POPUP:string = "show_setting_popup";
    public static SHOW_PAUSE_POPUP:string = "show_pause_popup";

    public static SETTING_TOUCH_CONTINUE:string = "setting_touch_continue";

    public static WELLDONE_FINISHED:string = "welldone_finished";

    public static DATA_INFODAY_FINISHED:string = "day_finished";
    public static DATA_INFOMONTH_REWARD:string = "month_reward";
    public static DAILYCHALLENGE_TOUCH_SELECT_DAY: string = "dailychallenge_touch_select_day";
    public static DAILYCHALLENGE_SELECT_DAY_UPDATE: string = "dailychallenge_select_day_update";

    public static DAILYCHALLENGE_PLAY_LEVEL:string = "dailychallenge_play_level";
    public static DAILYCHALLENGE_LEVEL_FINISHED:string = "dailychallenge_level_finished";

    public static DAILYCHALLENGE_NOMOVES_TOUCHCLOSE:string = "dailychallenge_nomoves_touchclose";

    public static DAILYCHALLENGE_TOUCH_BOXREWARD:string = "dailychallenge_touch_boxreward";
    public static SHOW_BOXREWARD_RECEIVE_POPUP:string = "show_boxreward_receive_popup";


    public static HOME_UPDATE_TARGET_POS:string = "home_update_target_pos";


    public static TUT_LEVEL5:string = "tutlv5";
    
    public static THEME_SELECTED:string = "tsl";
    public static THEME_UNLOCKED:string = "tsu";


    public static THEME_SELECT_UPDATE:string = "theme_select_update";
    public static THEME_UNSELECT_UPDATE:string = "theme_unselect_update";
    public static THEME_SELECTED_UPDATE:string = "theme_selected_update";

    public static DAILY_LOGIN_INDEX:string = "dli";
    public static DAILY_LOGIN_LASTDAY:string = "dld";
    public static DAILY_LOGIN_AD_LASTDAY:string = "dald";

    public static DAILY_LOGIN_INDEX_SETFINISHED:string = "daily_login_index_setfinished";

    public static SHOW_DAILYTASK_POPUP:string = "show_dailytask_popup";
    public static SHOW_REWARDRECEIVE_POPUP:string = "show_rewardreceive_popup";

    public static DAILY_QUEST_RECEIVES:string = "dqr";
    public static DAILY_QUEST_LASTDAY:string = "dqld";
    public static DAILY_QUEST_DATA:string = "dqd";

    public static DAILY_QUEST_TOUCH_CLAIM:string = "daily_quest_touch_claim";
    public static DAILY_QUEST_TOUCH_GOTO:string = "daily_quest_touch_goto";

    public static DAILY_QUEST_CLAIM_UPDATE_STARTPOS:string = "daily_quest_claim_update_startpos";

    public static PGS_RECEIVE_LISTRANK_LEADERBOARD:string = "pgs_receiveListRank_LeaderBoard";
    public static PGS_REMOTECONFIG_SUCCESS: string = "pgs_remoteconfig_success";

    public static TOUCH_TABLEADERBOARD:string = "touch_tableaderboard";
    public static TABLEARDBOARD_UPDATE:string = "tableaderboard_update";
    public static SHOW_LEVELCHEST_POPUP:string = "show_levelchest_popup";

    public static SHOW_EFX_FIREWORK:string = "show_efx_firework";
    public static WINPOPUP_TOUCH_HOME:string = "winpopup_touch_home";

    public static SHOW_CHEST_REWARD_POPUP:string = "show_chest_reward_popup";
    public static SHOW_THEME_REWARD_POPUP:string = "show_theme_reward_popup";

    public static LEVEL_CHEST_TOUCH_CONTINUE:string = "level_chest_touch_continue";
    
    public static SHOW_TOURNAMENT_POPUP:string = "show_tournament_popup";

    public static SET_TOURNAMENT_LOSE:string = "set_tournament_lose";

    public static TOURNAMENT_TOUCH_PLAY:string = "tournament_touch_play";

    public static SHOW_TOURNAMENTQUIT_POPUP:string = "show_tournamentquit_popup";
    public static TOURNAMENT_QUIT_YES:string = "tournament_quit_yes";
    public static TOURNAMENT_QUIT_CONTINUE:string = "tournament_quit_continue";

    public static SHOW_TOURNAMENT_RESULT_POPUP:string = "show_tournament_result_popup";
    public static TOURNAMENT_RESULT_TOUCH_REPLAY:string = "tournament_result_touch_replay";
    public static TOURNAMENT_RESULT_TOUCH_HOME:string = "tournament_result_touch_home";

    public static SHOW_TOURNAMENT_REVIVE_POPUP:string = "show_tournament_revive_popup";

    public static TOURNAMENT_REVIVE_YES:string = "tournament_revive_yes";
    public static TOURNAMENT_REVIVE_NO:string = "tournament_revive_no";


    public static SHOW_SHOP_ITEM_POPUP:string = "show_shop_item_popup";

    public static SHOW_TUBERACE_JOIN_POPUP:string = "show_tuberace_join_popup";
    public static TUBERACE_TOUCH_JOIN:string = "tuberace_touch_join";

    public static TUBERACE_INFOS:string = "ri";
    public static TUBERACE_OPPONENTS:string = "ro";
    public static SHOW_TUBERACE_POPUP:string = "show_tuberace_popup";
    public static TUBERACE_OPPONENTS_FINISHED:string = "tuberace_opponents_finished";

    public static SHOW_TUBERACE_WIN_POPUP:string = "show_tuberace_win_popup";
    public static TUBERACE_PLAYER_FINISHED:string = "tuberace_player_finished";

    public static SHOW_TUBERACE_LOSE_POPUP:string = "show_tuberace_lose_popup";

    public static TUBERACE_CLAIM_FINISHED:string = "tuberace_claim_finished";
    public static TUBERACE_UPDATE:string = "tuberace_update";


    public static PASS_INFOS:string = "pi";
    public static PASS_ACTIVATED:string = "pa";
    public static PASS_TUTORIAL:string = "pt";

    public static SHOW_MASSTERPASS_POPUP:string = "show_masterpass_popup";
    public static SHOW_MASSTERPASS_ACTIVATE_POPUP:string = "show_masterpass_activate_popup";
    public static SHOW_MASSTERPASS_INFO_POPUP:string = "show_masterpass_info_popup";    
    public static PASS_ACTIVATED_UPDATE:string = "pass_activated_update";
    public static PASS_UPDATE:string = "pass_update";

    public static SHOW_SPIN_POPUP:string = "show_spin_popup";
    public static SPIN_LASTTIME:string = "spl";
    public static SPIN_FREECOUNT:string = "spfc";

    public static SHOW_SHARE_INFOLEVEL_POPUP:string = "show_shareinfo_level_popup";
    public static SHOW_SHARE_INFOSCORE_POPUP:string = "show_shareinfo_score_popup";
    public static SHOW_SHARE_TOURNAMENT_POPUP:string = "show_share_torunament_popup";
    public static SHOW_INVITE_POPUP: string = "show_invite_popup";

    public static SHOW_SHARECONTEXT_POPUP:string = "show_sharecontext_popup";

    public static GOTO_TOURNAMENT:string = "goto_tournament";


    public static FREEVIDEO_LASTTIME:string = "sflt";
    public static FREEVIDEO_LASTTIME_UPDATE:string = "freevideo_lasttime_update";

    public static WITHFRIEND_TOUCH_PLAY:string = "withfriend_touch_play";

    public static WITHFRIEND_PLAY_START:string = "withfriend_play_start";
    public static SHOW_UPDATECONTEXT_WITHFRIEND_POPUP: string = "show_updateContext_withfriend_popup";
    public static SHOW_WIN_WITHFRIEND_POPUP: string = "show_win_withfriend_popup";

    public static SHOW_SHARE_WITHFRIEND_POPUP: string = "show_share_withfriend_popup";
    public static WITHFRIEND_TOUCH_REPLAY:string = "withfriend_touch_replay";

    public static WITHFRIEND_NOMOVES_TOUCH_CLOSE:string = "withfriend_nomoves_touch_close";

    public static WINPOPUP_WITHFRIEND_TOUCH_HOME:string = "winpopup_withfriend_touch_home";

    public static WINPOPUP_DAILYCHALLENGE_TOUCH_HOME:string = "winpopup_dailychallenge_touch_home";

    public static SHOW_FRIENDS_POPUP:string = "show_friends_popup";

    public static SHOPITEM_BUYSUCESS:string = "shopitem_buy_success";

    public static SHOW_EFX_OBIM_FINSIHED = "showEfxOBIMFinished";
    public static SHOW_EFX_CLAY_FINSIHED = "showEfxClayFinished";
    public static SHOW_EFX_PLASTER_FINSIHED = "showEfxPlasterFinished";
    public static SHOW_EFX_QUESTION = "showEfxQuestion";


    public static HEART_COUNT:string = "hc";
    public static HEART_COUNT_UPDATE:string = "heart_count_update";
    public static HEART_LASTTIME:string = "hlt";
    public static HEART_UNLIMITED_COUNTTIME:string = "huct";
    public static HEART_UNLIMITED_LASTTIME:string = "hult";
    public static HEART_UNLIMITED_UPDATE:string = "heart_unlimited_update";

    public static HEART_UPDATE:string = "heart_update";

    public static SHOW_HEART_POPUP:string = "showHeartPopup";

    public static SHOW_ADDHEART_UNLIMITED:string = "showAddHeartUnlimited";
    public static UPDATE_HEART_TARGETPOS:string = "update_Heart_TargetPos";
    public static UPDATE_HEART_STARTPOS:string = "update_Heart_StartPos";

    public static SHUFFLE_TUBE_FINISHED:string = "shuffle_tube_finished";

    public static SHOW_QUITCONFIRM_POPUP:string = "show_quitconfirm_popup";
    public static QUITCONFIRM_TOUCH_YES:string = "quitconfirm_touch_yes";
    public static QUITCONFIRM_TOUCH_CONTINUE:string = "quitconfirm_touch_continue";


    public static SHOW_LEVELFAILED_POPUP:string = "show_levelfailed_popup";
    public static LEVELFAILED_TOUCH_RETRY:string = "levelfailed_touch_retry";

    public static BACK_TO_HOME:string = "back_to_home";

    public static SHOW_MORELIVES_POPUP:string = "show_morelives_popup";

    public static NOMOVES_TOUCH_PLAYON:string = "nomoves_touch_playon";
    public static NOMOVES_TOUCH_GIVEUP:string = "nomoves_touch_giveup";
    public static NOMOVES_TOUCH_REPLAY:string = "nomoves_touch_replay";

    public static SHOP_DAILY_FREE_LASTDAY:string = "sdfld";
    public static SHOP_DAILY_FREE_LASTDAY_UPDATE:string = "shop_daily_free_lastday_update";

    public static SHOW_TUT_CURTAIN_POPUP:string = "show_tut_curtain_popup";
    public static TUT_CURTAION:string = "t_curtain";
    

    public static SHOW_TUT_CLAY_POPUP:string = "show_tut_clay_popup";
    public static TUT_CLAY:string = "t_clay";

    public static SHOW_TUT_PLASTER_POPUP:string = "show_tut_plaster_popup";
    public static TUT_PLASTER:string = "t_plaster";

    public static DAILYTASK_NOTIFY_UPDATE:string = "dailytask_notify_update";
    public static DAILYCHALLENGE_NOTIFY_UPDATE:string = "dailychallenge_notify_update";
    public static SPIN_NOTIFY_UPDATE:string = "spin_notify_update";

    public static IAP_COUNT:string = "iap_c";
    public static WIN_STREAK:string = "win_s";
    public static LOSE_STREAK:string = "lose_s";

    public static TOURNAMENT_PAGEHOST_TOUCH_REPLAY:string = "tournament_pagehost_touch_replay";
    public static TOURNAMENT_PAGEHOST_TOUCH_HOME:string = "tournament_pagehost_touch_home";
    public static SHOW_WIN_TOURNAMENT_PAGEHOST_POPUP: string = "show_win_tournament_pagehost_popup";

    public static RECEIVE_LISTRANK_TOURNAMENT_PAGEHOST:string = "receive_listrank_tournament_pagehost";

    public static SHOW_THEME_POPUP:string = "show_theme_popup";
    public static POKI_INIT_SUCCESS:string = "poki_init_success";
}

export const enum GAME_STATE {
    PRE_START,
    PLAY,
    ENDGAME,
    WIN,
    LOSE,
    PAUSE,
    GAME_OVER,
    SHUFFLE,
    NO_MOVES
}

export const enum ENV_TYPE {
    FB,
    TEST_AD,
}


export const enum AVATAR_TYPE{
    TYPE_WEB,
    TYPE_LOCAL
}


export const enum GAME_MODE{
    NORMAL,
    DAILY_CHALLENGE,
    TOURNAMENT,
    WITH_FRIEND,
    TOURNAMENT_PAGEHOST
}


export enum PLAY_TYPE{
    HOME,
    NEXT,
    RESTART
}

export enum ITEM_TUBE_STATE{
    NONE,
    SELECT,
    UNSELECT,
    DONE,
    ON,
    OFF,
    UNLOCK,
    ADDCOL,
    WAITTING,
    OBIM,//Đang bị che
    PLASTER,//Đang bị che
}

Enum(ITEM_TUBE_STATE);

export enum WATER_STATE{
    NONE,
    LOCK
}

Enum(WATER_STATE);


export enum BOOSTER_TYPE{
    UNDO,
    SUGGEST,
    ADDCOL
}
Enum(BOOSTER_TYPE);

export enum TICKET_TYPE{
    GOLD,
    SILVER
}
Enum(TICKET_TYPE);

export enum TAB_TYPE{
    SHOP,
    THEME,
    HOME,
    TOURNAMENT,
    LEADERBOARD
}
Enum(TAB_TYPE);

export enum SHOP_PACK_TYPE{
    TICKET_GOLD_10,
    TICKET_GOLD_30,
    TICKET_GOLD_60,
    TICKET_GOLD_130,
    TICKET_GOLD_250,
    TICKET_GOLD_600,
    TICKET_SILVER_10,
    TICKET_SILVER_30,
    TICKET_SILVER_60,
    VIP_30,
    VIP_7,
    VIP_3,
    REMOVE_AD,
    REMOVE_AD_PACK,
    PACK_1,
    PACK_2,
    PACK_3,
    SUMMER_PACK,
    MASTER_PASS,
    BUNDLE_1,
    BUNDLE_2,
    BUNDLE_3,
    BUNDLE_4,
    BUNDLE_5,
    BUNDLE_6,
    COIN_1,
    COIN_2,
    COIN_3,
    COIN_4,
    COIN_5,
    COIN_6,
    STARTER_PACK,

}
Enum(TAB_TYPE);

export enum IAP_PLACEMENT_TYPE{
    HOME_SHOP,
    HOME_POPUP,
    INGAME_POPUP
}
Enum(IAP_PLACEMENT_TYPE);

export enum IAP_SHOW_TYPE{
    SHOP,
    PACK
}
Enum(IAP_SHOW_TYPE);


export enum SHOP_ITEM_TYPE{
    TICKET_GOLD,  //0
    TICKET_SILVER,  //11
    COIN,  //2
    REMOVE_AD,  //3
    BOOSTER_UNDO,  //4
    BOOSTER_SUGGEST,  //5
    BOOSTER_ADDCOL,  //6
    HEART,  //7
    HEART_UNLIMITED //8
}
Enum(SHOP_ITEM_TYPE);

export enum SCENE_TYPE{
    MENU,
    GAME
}
Enum(SCENE_TYPE);

export enum BOX_STATE{
    IDLE,
    OPEN,
    READY,
    OPENING,
    OPENED
}

Enum(BOX_STATE);

export enum BOX_TYPE{
    NONE,
    BOX_1,
    BOX_2,
    BOX_3,
    BOX_4
}
Enum(BOX_TYPE);

export enum THEME_TYPE{
    TUBE,
    BG,
    SKIN
}
Enum(THEME_TYPE);

export enum UNLOCK_TYPE{
    NONE,
    TICKET_GOLD,
    TICKET_SILVER,
    COIN,
    WATCH_AD
}
Enum(UNLOCK_TYPE);

export enum DAILYTASK_TYPE{
    LOGIN,
    QUEST
}
Enum(DAILYTASK_TYPE);

export enum QUEST_TYPE{
    NONE,
    RECEIVE_DAILY_REWARD,
    WIN,
    WIN_STREAK,
    COMPLETED_TORNAMENT,
    COMPLETED_DAILY_CHALLENGE,
    BOOSTER
}
Enum(QUEST_TYPE);

export enum LEVEL_STATE{
    LOCK,
    FINISHED,
    ACTIVE
}
Enum(LEVEL_STATE);

export enum LEADERBOARD_TYPE{
    WORLD,
    FRIEND
}

Enum(LEADERBOARD_TYPE);

export enum AD_FORMAT_TYPE{
    BANNER,
    INTERSTITIAL,
    REWARDED_VIDEO
}
Enum(AD_FORMAT_TYPE);

export enum AD_END_TYPE{
    QUIT,
    DONE
}
Enum(AD_END_TYPE);

export enum TOURNAMENT_TYPE {
    NONE,
    PAGE_HOST
 }
 Enum(TOURNAMENT_TYPE);