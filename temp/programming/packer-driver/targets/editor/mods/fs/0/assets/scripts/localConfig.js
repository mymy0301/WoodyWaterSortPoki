System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Vec3, Color, Vec2, view, clientEvent, configuration, lodash, ItemRankInfo, AD_END_TYPE, AD_FORMAT_TYPE, AVATAR_TYPE, BOOSTER_TYPE, Constants, ENV_TYPE, GAME_MODE, GAME_STATE, IAP_PLACEMENT_TYPE, IAP_SHOW_TYPE, PLAY_TYPE, SCENE_TYPE, SHOP_ITEM_TYPE, SHOP_PACK_TYPE, THEME_TYPE, ItemTubeConfig, ItemTubePolygonConfig, InfoDay, LevelDataInfo, TubeInfo, GroupRewardDataInfo, RewardDataInfo, InfoMonthReward, InfoMonth, PlayerRaceDataInfo, FBInstantManager, LogEventManager, _dec, _class, _class2, _temp, _crd, ccclass, property, localConfig;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "./framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfiguration(extras) {
    _reporterNs.report("configuration", "./framework/configuration", _context.meta, extras);
  }

  function _reportPossibleCrUseOflodash(extras) {
    _reporterNs.report("lodash", "./framework/lodash", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemRankInfo(extras) {
    _reporterNs.report("ItemRankInfo", "./common/ItemRankInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFriendAvatarInfo(extras) {
    _reporterNs.report("FriendAvatarInfo", "./common/FriendAvatarInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAD_END_TYPE(extras) {
    _reporterNs.report("AD_END_TYPE", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAD_FORMAT_TYPE(extras) {
    _reporterNs.report("AD_FORMAT_TYPE", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAVATAR_TYPE(extras) {
    _reporterNs.report("AVATAR_TYPE", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBOOSTER_TYPE(extras) {
    _reporterNs.report("BOOSTER_TYPE", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENV_TYPE(extras) {
    _reporterNs.report("ENV_TYPE", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGAME_MODE(extras) {
    _reporterNs.report("GAME_MODE", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGAME_STATE(extras) {
    _reporterNs.report("GAME_STATE", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAP_PLACEMENT_TYPE(extras) {
    _reporterNs.report("IAP_PLACEMENT_TYPE", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAP_SHOW_TYPE(extras) {
    _reporterNs.report("IAP_SHOW_TYPE", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPLAY_TYPE(extras) {
    _reporterNs.report("PLAY_TYPE", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSCENE_TYPE(extras) {
    _reporterNs.report("SCENE_TYPE", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHOP_ITEM_TYPE(extras) {
    _reporterNs.report("SHOP_ITEM_TYPE", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHOP_PACK_TYPE(extras) {
    _reporterNs.report("SHOP_PACK_TYPE", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTHEME_TYPE(extras) {
    _reporterNs.report("THEME_TYPE", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTICKET_TYPE(extras) {
    _reporterNs.report("TICKET_TYPE", "./framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemTubeConfig(extras) {
    _reporterNs.report("ItemTubeConfig", "./game/info/ItemTubeConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemTubePolygonConfig(extras) {
    _reporterNs.report("ItemTubePolygonConfig", "./game/info/ItemTubePolygonConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfoDay(extras) {
    _reporterNs.report("InfoDay", "./common/InfoDay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelDataInfo(extras) {
    _reporterNs.report("LevelDataInfo", "./game/info/LevelDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTubeInfo(extras) {
    _reporterNs.report("TubeInfo", "./game/info/LevelDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroupRewardDataInfo(extras) {
    _reporterNs.report("GroupRewardDataInfo", "./game/info/ShopDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPassRewardDataInfo(extras) {
    _reporterNs.report("PassRewardDataInfo", "./game/info/ShopDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRewardDataInfo(extras) {
    _reporterNs.report("RewardDataInfo", "./game/info/ShopDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopDataInfo(extras) {
    _reporterNs.report("ShopDataInfo", "./game/info/ShopDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpinRewardDataInfo(extras) {
    _reporterNs.report("SpinRewardDataInfo", "./game/info/ShopDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfoMonthReward(extras) {
    _reporterNs.report("InfoMonthReward", "./common/InfoMonthReward", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfoMonth(extras) {
    _reporterNs.report("InfoMonth", "./common/InfoMonth", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUnlockProgressInfo(extras) {
    _reporterNs.report("UnlockProgressInfo", "./game/info/UnlockProgressInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkinInfo(extras) {
    _reporterNs.report("SkinInfo", "./game/info/SkinInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQuestDataInfo(extras) {
    _reporterNs.report("QuestDataInfo", "./game/info/QuestDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLeaderboardDataInfo(extras) {
    _reporterNs.report("LeaderboardDataInfo", "./common/LeaderboardDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerRaceDataInfo(extras) {
    _reporterNs.report("PlayerRaceDataInfo", "./game/race/PlayerRaceDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "./common/FBInstantManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWithFriendDataInfo(extras) {
    _reporterNs.report("WithFriendDataInfo", "./game/withFriends/WithFriendDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelConfigInfo(extras) {
    _reporterNs.report("LevelConfigInfo", "./newlevel/LevelConfigInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMagicLevelDataInfo(extras) {
    _reporterNs.report("MagicLevelDataInfo", "./newlevel/MagicLevelDataInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogEventManager(extras) {
    _reporterNs.report("LogEventManager", "./common/LogEventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTournamentPageHostDataInfo(extras) {
    _reporterNs.report("TournamentPageHostDataInfo", "./game/info/TournamentPageHostDataInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
      Color = _cc.Color;
      Vec2 = _cc.Vec2;
      view = _cc.view;
    }, function (_unresolved_2) {
      clientEvent = _unresolved_2.clientEvent;
    }, function (_unresolved_3) {
      configuration = _unresolved_3.configuration;
    }, function (_unresolved_4) {
      lodash = _unresolved_4.lodash;
    }, function (_unresolved_5) {
      ItemRankInfo = _unresolved_5.ItemRankInfo;
    }, function (_unresolved_6) {
      AD_END_TYPE = _unresolved_6.AD_END_TYPE;
      AD_FORMAT_TYPE = _unresolved_6.AD_FORMAT_TYPE;
      AVATAR_TYPE = _unresolved_6.AVATAR_TYPE;
      BOOSTER_TYPE = _unresolved_6.BOOSTER_TYPE;
      Constants = _unresolved_6.Constants;
      ENV_TYPE = _unresolved_6.ENV_TYPE;
      GAME_MODE = _unresolved_6.GAME_MODE;
      GAME_STATE = _unresolved_6.GAME_STATE;
      IAP_PLACEMENT_TYPE = _unresolved_6.IAP_PLACEMENT_TYPE;
      IAP_SHOW_TYPE = _unresolved_6.IAP_SHOW_TYPE;
      PLAY_TYPE = _unresolved_6.PLAY_TYPE;
      SCENE_TYPE = _unresolved_6.SCENE_TYPE;
      SHOP_ITEM_TYPE = _unresolved_6.SHOP_ITEM_TYPE;
      SHOP_PACK_TYPE = _unresolved_6.SHOP_PACK_TYPE;
      THEME_TYPE = _unresolved_6.THEME_TYPE;
    }, function (_unresolved_7) {
      ItemTubeConfig = _unresolved_7.ItemTubeConfig;
    }, function (_unresolved_8) {
      ItemTubePolygonConfig = _unresolved_8.ItemTubePolygonConfig;
    }, function (_unresolved_9) {
      InfoDay = _unresolved_9.InfoDay;
    }, function (_unresolved_10) {
      LevelDataInfo = _unresolved_10.LevelDataInfo;
      TubeInfo = _unresolved_10.TubeInfo;
    }, function (_unresolved_11) {
      GroupRewardDataInfo = _unresolved_11.GroupRewardDataInfo;
      RewardDataInfo = _unresolved_11.RewardDataInfo;
    }, function (_unresolved_12) {
      InfoMonthReward = _unresolved_12.InfoMonthReward;
    }, function (_unresolved_13) {
      InfoMonth = _unresolved_13.InfoMonth;
    }, function (_unresolved_14) {
      PlayerRaceDataInfo = _unresolved_14.PlayerRaceDataInfo;
    }, function (_unresolved_15) {
      FBInstantManager = _unresolved_15.FBInstantManager;
    }, function (_unresolved_16) {
      LogEventManager = _unresolved_16.LogEventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ee25bk2iolKHINmJWANqDyL", "localConfig", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("localConfig", localConfig = (_dec = ccclass("localConfig"), _dec(_class = (_temp = _class2 = class localConfig {
        constructor() {
          _defineProperty(this, "isLevelEditor", false);

          _defineProperty(this, "playerID", void 0);

          _defineProperty(this, "envType", (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).TEST_AD);

          _defineProperty(this, "FAN_enable", true);

          _defineProperty(this, "isGetPlayerDataSuccess", false);

          _defineProperty(this, "isGetPayloadDataSuccess", false);

          _defineProperty(this, "isGetRemoteConfigDataSuccess", false);

          _defineProperty(this, "arrConnectedPlayerInfos", []);

          _defineProperty(this, "currGameState", (_crd && GAME_STATE === void 0 ? (_reportPossibleCrUseOfGAME_STATE({
            error: Error()
          }), GAME_STATE) : GAME_STATE).PRE_START);

          _defineProperty(this, "currGameMode", (_crd && GAME_MODE === void 0 ? (_reportPossibleCrUseOfGAME_MODE({
            error: Error()
          }), GAME_MODE) : GAME_MODE).NORMAL);

          _defineProperty(this, "myAvatarImageAsset", null);

          _defineProperty(this, "myAvatarSpriteFrame", null);

          _defineProperty(this, "isSound", true);

          _defineProperty(this, "isMusic", false);

          _defineProperty(this, "isVibration", false);

          _defineProperty(this, "isTops", true);

          _defineProperty(this, "currCoin", 0);

          _defineProperty(this, "log_CAMP_ID", "");

          _defineProperty(this, "log_ADSET_ID", "");

          _defineProperty(this, "log_ADS_ID", "");

          _defineProperty(this, "isPaidUser", false);

          _defineProperty(this, "campID_session", "");

          _defineProperty(this, "adsetID_session", "");

          _defineProperty(this, "adsID_session", "");

          _defineProperty(this, "log_TOUR_ID", "");

          _defineProperty(this, "tourID_session", "");

          _defineProperty(this, "arrWaterColors", [new Color(255, 122, 4), //ff7a04 x 0 //cam
          new Color(13, 75, 254), //0d4bfe x 1 
          new Color(59, 195, 23), //3bc317 x 2
          new Color(244, 46, 37), //F42E25 x 3
          new Color(151, 23, 224), //9717e0 x 4
          new Color(224, 47, 213), //e02fd5 x 5
          new Color(254, 213, 23), //fed517 x 6
          new Color(47, 171, 252), //2FABFC x 7
          new Color(0, 248, 254), //00F8FE x 8
          new Color(164, 239, 54), //A4EF36 x 9
          new Color(240, 204, 176) //F0CCB0 x 10
          ]);

          _defineProperty(this, "arrWaterTOPColors", [new Color(254, 161, 118), //fea176 x 0
          new Color(77, 119, 255), //4d77ff x 1
          new Color(77, 233, 38), //4ddf26 x 2
          new Color(255, 123, 125), //FF7B7D x 3
          new Color(177, 43, 254), //b12bfe x 4
          new Color(229, 112, 216), //b12bfe x 5
          new Color(255, 228, 147), //ffe493 x 6
          new Color(110, 197, 246), //6EC5F6 x 7
          new Color(174, 255, 240), //AEFFF0 x 8
          new Color(222, 255, 163), //DEFFA3 x 9
          new Color(250, 234, 214) //FAEAD6 x 10
          ]);

          _defineProperty(this, "arrItemTubePolygonConfigs", [//1
          new (_crd && ItemTubePolygonConfig === void 0 ? (_reportPossibleCrUseOfItemTubePolygonConfig({
            error: Error()
          }), ItemTubePolygonConfig) : ItemTubePolygonConfig)([new Vec2(-66, 2000), new Vec2(-66, 165), new Vec2(-63, 160), new Vec2(-63, -214), new Vec2(-55.5, -238), new Vec2(-40.5, -256), new Vec2(-24.5, -266), new Vec2(0, -270)]), //2
          new (_crd && ItemTubePolygonConfig === void 0 ? (_reportPossibleCrUseOfItemTubePolygonConfig({
            error: Error()
          }), ItemTubePolygonConfig) : ItemTubePolygonConfig)([new Vec2(-31, 2000), new Vec2(-31, 197), new Vec2(-31, 152), new Vec2(-57, 127), new Vec2(-66, 107), new Vec2(-66, 91), new Vec2(-61, 72), new Vec2(-51, 53), new Vec2(-51, 26), new Vec2(-62, 10), new Vec2(-65, 0), new Vec2(-65, -250), new Vec2(-63, -258), new Vec2(-57, -266), new Vec2(-47, -271), new Vec2(0, -271)]), //3
          new (_crd && ItemTubePolygonConfig === void 0 ? (_reportPossibleCrUseOfItemTubePolygonConfig({
            error: Error()
          }), ItemTubePolygonConfig) : ItemTubePolygonConfig)([new Vec2(-58, 2000), new Vec2(-58, 197), new Vec2(-36, 143), new Vec2(-36, 134), new Vec2(-60, 114), new Vec2(-67, 100), new Vec2(-41, -258), new Vec2(-36, -264), new Vec2(-17, -270.5), new Vec2(-17, -271.5)]), //4
          new (_crd && ItemTubePolygonConfig === void 0 ? (_reportPossibleCrUseOfItemTubePolygonConfig({
            error: Error()
          }), ItemTubePolygonConfig) : ItemTubePolygonConfig)([new Vec2(-46, 2000), new Vec2(-46, 193), new Vec2(-46, 178), new Vec2(-30.5, 134), new Vec2(-26, 107), new Vec2(-26.5, 89), new Vec2(-34, 65), new Vec2(-53, 41), new Vec2(-65, 18), new Vec2(-70, -6), new Vec2(-68, -53), new Vec2(-64, -102), new Vec2(-59, -143), new Vec2(-50, -192), new Vec2(-34, -264), new Vec2(-17, -270.5), new Vec2(0, -271.5)]), //5
          new (_crd && ItemTubePolygonConfig === void 0 ? (_reportPossibleCrUseOfItemTubePolygonConfig({
            error: Error()
          }), ItemTubePolygonConfig) : ItemTubePolygonConfig)([new Vec2(-37, 2000), new Vec2(-37, 189), new Vec2(-37, 174), new Vec2(-32, 170), new Vec2(-27.5, 136.5), new Vec2(-27, 89), new Vec2(-29, 50), new Vec2(-34, 13), new Vec2(-40.5, -17), new Vec2(-55.5, -51.5), new Vec2(-76.5, -90), new Vec2(-91, -126), new Vec2(-94, -149), new Vec2(-90, -173.5), new Vec2(-77, -211), new Vec2(-41.5, -264), new Vec2(-34, -268), new Vec2(-34, -268), new Vec2(-17, -271), new Vec2(0, -271)]), //6
          new (_crd && ItemTubePolygonConfig === void 0 ? (_reportPossibleCrUseOfItemTubePolygonConfig({
            error: Error()
          }), ItemTubePolygonConfig) : ItemTubePolygonConfig)([new Vec2(-31, 2000), new Vec2(-31, 176), new Vec2(-31, 162.5), new Vec2(-27, 157.5), new Vec2(-27, 89), new Vec2(-29, 62), new Vec2(-34, 50), new Vec2(-52.5, 31), new Vec2(-64.5, 12), new Vec2(-68, 0), new Vec2(-62, -256), new Vec2(-56.5, -262), new Vec2(-34.5, -269), new Vec2(0, -271.5)]), //7
          new (_crd && ItemTubePolygonConfig === void 0 ? (_reportPossibleCrUseOfItemTubePolygonConfig({
            error: Error()
          }), ItemTubePolygonConfig) : ItemTubePolygonConfig)([new Vec2(-62, 2000), new Vec2(-62, 184), new Vec2(-62, 160), new Vec2(-59, 156), new Vec2(-59, -171), new Vec2(-56.5, -194), new Vec2(-51.5, -217), new Vec2(-42.5, -240), new Vec2(-28.5, -260), new Vec2(-11.5, -271), new Vec2(0, -271)]), //8
          new (_crd && ItemTubePolygonConfig === void 0 ? (_reportPossibleCrUseOfItemTubePolygonConfig({
            error: Error()
          }), ItemTubePolygonConfig) : ItemTubePolygonConfig)([new Vec2(-73, 2000), new Vec2(-73, 187), new Vec2(-45.5, -255.5), new Vec2(-36, -264.5), new Vec2(-20.5, -269.5), new Vec2(0, -271)]), //9
          new (_crd && ItemTubePolygonConfig === void 0 ? (_reportPossibleCrUseOfItemTubePolygonConfig({
            error: Error()
          }), ItemTubePolygonConfig) : ItemTubePolygonConfig)([new Vec2(-30.5, 2000), new Vec2(-30.5, 189), new Vec2(-30.5, 175), new Vec2(-26, 170), new Vec2(-26, 133.5), new Vec2(-29, 124), new Vec2(-66, 72), new Vec2(-69, 62), new Vec2(-68, -73), new Vec2(-65.5, -81), new Vec2(-53, -117), new Vec2(-52, -159), new Vec2(-55.5, -172), new Vec2(-67.5, -203.5), new Vec2(-71, -219), new Vec2(-69.5, -238), new Vec2(-64, -251), new Vec2(-56.5, -258.5), new Vec2(-45, -264.5), new Vec2(-23.5, -270), new Vec2(0, -271.5)]), //10
          new (_crd && ItemTubePolygonConfig === void 0 ? (_reportPossibleCrUseOfItemTubePolygonConfig({
            error: Error()
          }), ItemTubePolygonConfig) : ItemTubePolygonConfig)([new Vec2(-38, 2000), new Vec2(-38, 184.5), new Vec2(-38, 169), new Vec2(-35, 165), new Vec2(-35, 165), new Vec2(-32, 71), new Vec2(-87.5, 24), new Vec2(-89, 19), new Vec2(-49.5, -256.5), new Vec2(-46, -261.5), new Vec2(-28.5, -269), new Vec2(0, -271.5)]), //11
          new (_crd && ItemTubePolygonConfig === void 0 ? (_reportPossibleCrUseOfItemTubePolygonConfig({
            error: Error()
          }), ItemTubePolygonConfig) : ItemTubePolygonConfig)([new Vec2(-37, 2000), new Vec2(-37, 179), new Vec2(-36.5, 165.5), new Vec2(-32.5, 161), new Vec2(-33, 133.5), new Vec2(-36, 108.5), new Vec2(-40.5, 84.5), new Vec2(-47, 62), new Vec2(-55.5, 38.5), new Vec2(-64, 18), new Vec2(-71, 8), new Vec2(-74, -27), new Vec2(-74.5, -42), new Vec2(-73.5, -56.5), new Vec2(-70.5, -73), new Vec2(-65, -111), new Vec2(-59.5, -151.5), new Vec2(-58.5, -166), new Vec2(-59.3, -172), new Vec2(-67.5, -203.5), new Vec2(-65.5, -219), new Vec2(-68.5, -238), new Vec2(-63, -251), new Vec2(-56.5, -258.5), new Vec2(-46, -261.5), new Vec2(-28.5, -269), new Vec2(0, -271.5)]), //12
          new (_crd && ItemTubePolygonConfig === void 0 ? (_reportPossibleCrUseOfItemTubePolygonConfig({
            error: Error()
          }), ItemTubePolygonConfig) : ItemTubePolygonConfig)([new Vec2(-55.5, 2000), new Vec2(-55.5, 181), new Vec2(-55.5, 158.5), new Vec2(-46, 152), new Vec2(-46, 121), new Vec2(-46, 121), new Vec2(-56.891, -129.287), new Vec2(-67.33, -141.569), new Vec2(-74.815, -154.251), new Vec2(-80.747, -170.698), new Vec2(-83.177, -192.875), new Vec2(-79.643, -212.834), new Vec2(-73.195, -229.721), new Vec2(-62.888, -243.707), new Vec2(-49.071, -256.667), new Vec2(-33.478, -265.607), new Vec2(-14.974, -271.013), new Vec2(0, -271.5)]), //13
          new (_crd && ItemTubePolygonConfig === void 0 ? (_reportPossibleCrUseOfItemTubePolygonConfig({
            error: Error()
          }), ItemTubePolygonConfig) : ItemTubePolygonConfig)([new Vec2(-51, 2000), new Vec2(-51, 178.5), new Vec2(-48.598, 158.077), new Vec2(-40.048, 132.768), new Vec2(-35.602, 112.247), new Vec2(-32.349, 92.099), new Vec2(-29.646, 69.874), new Vec2(-28.053, 47.576), new Vec2(-27.408, 23.287), new Vec2(-27.408, 2.311), new Vec2(-30.96, -39.221), new Vec2(-47.094, -35.053), new Vec2(-60.59, -34.656), new Vec2(-71.308, -36.244), new Vec2(-83.613, -40.213), new Vec2(-94.926, -47.755), new Vec2(-105.048, -58.87), new Vec2(-113.875, -78.158), new Vec2(-118.452, -99.081), new Vec2(-116.666, -125.081), new Vec2(-111.307, -145.325), new Vec2(-100.353, -172.326), new Vec2(-84.051, -199.836), new Vec2(-65.905, -222.229), new Vec2(-45.056, -243.078), new Vec2(-21.504, -262.769), new Vec2(0, -271.5)])]);

          _defineProperty(this, "MAX_THEME_TUBE", 11);

          _defineProperty(this, "arrItemTubeConfigs", [//1
          new (_crd && ItemTubeConfig === void 0 ? (_reportPossibleCrUseOfItemTubeConfig({
            error: Error()
          }), ItemTubeConfig) : ItemTubeConfig)(new Vec3(-68, -191, 0), new Vec3(68, -191, 0), [44, 68, 78, 84, 90], [0.81, 0.54, 0.43, 0.4, 0.4], [3, 1.866, 8.558, 23.81, //23.81
          42], [1.2, 1.8, 1.5, 1, 1], [1, 1, 1, 1]), //2
          new (_crd && ItemTubeConfig === void 0 ? (_reportPossibleCrUseOfItemTubeConfig({
            error: Error()
          }), ItemTubeConfig) : ItemTubeConfig)(new Vec3(-30, -191, 0), new Vec3(30, -191, 0), [44, 68, 82, 89, 110], [0.93, 0.7, 0.68, 0.5, 0.5], [19, 36, 60, 58, 40], [1.2, 1.8, 1.5, 1, 1], [1, 1, 1, 1]), //3
          new (_crd && ItemTubeConfig === void 0 ? (_reportPossibleCrUseOfItemTubeConfig({
            error: Error()
          }), ItemTubeConfig) : ItemTubeConfig)(new Vec3(-58, -196, 0), new Vec3(58, -196, 0), [44, 68, 78, 85, 105], [0.83, 0.55, 0.5, 0.4, 0.5], [10, 12.5, 25, 30, 25], [1.2, 1.8, 1.5, 1, 1], [1, 1, 1, 1]), //4
          new (_crd && ItemTubeConfig === void 0 ? (_reportPossibleCrUseOfItemTubeConfig({
            error: Error()
          }), ItemTubeConfig) : ItemTubeConfig)(new Vec3(-46, -193, 0), new Vec3(46, -193, 0), [44, 68, 78, 85, 105], [0.85, 0.55, 0.48, 0.48, 0.5], [13, 19, 33, 55, 25], [1.2, 1.8, 1.5, 0.6, 0.6], [1, 1, 1, 0.6]), //5
          new (_crd && ItemTubeConfig === void 0 ? (_reportPossibleCrUseOfItemTubeConfig({
            error: Error()
          }), ItemTubeConfig) : ItemTubeConfig)(new Vec3(-37, -189, 0), new Vec3(37, -189, 0), [44, 72, 82, 90, 105], [0.86, 0.6, 0.6, 0.58, 0.5], [15, 15, 36, 68, 35], [1.2, 1.8, 1.5, 0.8, 0.6], [1, 1, 0.8, 0.6]), //6
          new (_crd && ItemTubeConfig === void 0 ? (_reportPossibleCrUseOfItemTubeConfig({
            error: Error()
          }), ItemTubeConfig) : ItemTubeConfig)(new Vec3(-29, -176, 0), new Vec3(29, -176, 0), [44, 72, 82, 90, 105], [0.88, 0.6, 0.5, 0.5, 0.3], [8, 17, 36, 58, 10], [1.2, 1.8, 1.5, 0.8, 0.6], [1, 1, 1, 0.6]), //7
          new (_crd && ItemTubeConfig === void 0 ? (_reportPossibleCrUseOfItemTubeConfig({
            error: Error()
          }), ItemTubeConfig) : ItemTubeConfig)(new Vec3(-62, -184, 0), new Vec3(62, -184, 0), [44, 68, 78, 84, 90], [0.78, 0.54, 0.43, 0.4, 0.4], [3, 3, 12, 28, 40], [1.2, 1.8, 1.5, 1, 1], [1, 1, 1, 1]), //8
          new (_crd && ItemTubeConfig === void 0 ? (_reportPossibleCrUseOfItemTubeConfig({
            error: Error()
          }), ItemTubeConfig) : ItemTubeConfig)(new Vec3(-73, -187, 0), new Vec3(73, -187, 0), [44, 68, 75, 82, 90], [0.8, 0.5, 0.5, 0.45, 0.4], [-5, -5, 17, 32, 35], [1.2, 1.8, 1.5, 1, 1], [1, 1, 1, 1]), //9
          new (_crd && ItemTubeConfig === void 0 ? (_reportPossibleCrUseOfItemTubeConfig({
            error: Error()
          }), ItemTubeConfig) : ItemTubeConfig)(new Vec3(-30.5, -189, 0), new Vec3(30.5, -189, 0), [44, 68, 78, 89, 110], [0.9, 0.65, 0.68, 0.5, 0.5], [18.5, 25, 65, 63, 40], [1.2, 1.8, 1.5, 1, 1], [1, 1, 1, 0.6]), //10
          new (_crd && ItemTubeConfig === void 0 ? (_reportPossibleCrUseOfItemTubeConfig({
            error: Error()
          }), ItemTubeConfig) : ItemTubeConfig)(new Vec3(-38, -184.5, 0), new Vec3(38, -184.5, 0), [44, 68, 78, 89, 105], [0.85, 0.6, 0.48, 0.58, 0.5], [10, 20, 27, 70, 40], [1.2, 1.8, 1.5, 0.6, 0.6], [1, 1, 1, 0.6]), //11
          new (_crd && ItemTubeConfig === void 0 ? (_reportPossibleCrUseOfItemTubeConfig({
            error: Error()
          }), ItemTubeConfig) : ItemTubeConfig)(new Vec3(-37, -179, 0), new Vec3(37, -179, 0), [44, 68, 78, 89, 110], [0.86, 0.65, 0.63, 0.5, 0.5], [9, 23, 54, 55, 40], [1.2, 1.8, 1.5, 1, 1], [1, 1, 1, 0.6]), //12
          new (_crd && ItemTubeConfig === void 0 ? (_reportPossibleCrUseOfItemTubeConfig({
            error: Error()
          }), ItemTubeConfig) : ItemTubeConfig)(new Vec3(-37, -179, 0), new Vec3(37, -179, 0), [44, 68, 75, 85, 90], [0.82, 0.6, 0.68, 0.6, 0.6], [5, 10, 53, 70, 50], [1.2, 1.8, 1.5, 1, 1], [1, 0.6, 0.6, 0.6]), //13
          new (_crd && ItemTubeConfig === void 0 ? (_reportPossibleCrUseOfItemTubeConfig({
            error: Error()
          }), ItemTubeConfig) : ItemTubeConfig)(new Vec3(-51, -178.5, 0), new Vec3(51, -178.5, 0), [44, 72, 78, 85, 90], [0.82, 0.58, 0.7, 0.6, 0.6], [5, 2.655, 53, 70, 50], [1.2, 1.8, 1.5, 1, 1], [1.5, 1.8, 0.4, 0.5])]);

          _defineProperty(this, "ITEMWATER_POSY_START", -270);

          _defineProperty(this, "ITEMWATER_HIGHT", 95);

          _defineProperty(this, "ITEMWATER_WIDTH", 126);

          _defineProperty(this, "ITEMWATER_TOP_POSY", 95);

          _defineProperty(this, "currInfoDay", null);

          _defineProperty(this, "currWeek", 0);

          _defineProperty(this, "blackFriday_Infoday", new (_crd && InfoDay === void 0 ? (_reportPossibleCrUseOfInfoDay({
            error: Error()
          }), InfoDay) : InfoDay)(1, 1, 2023));

          _defineProperty(this, "isShowBlackFriday", false);

          _defineProperty(this, "BLACKFIRDAY_DAYLY_SHOW", [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);

          _defineProperty(this, "arrLevelDataStrs", []);

          _defineProperty(this, "WATER_MAX_LEVEL", 500);

          _defineProperty(this, "arrLevelChallengeDataStrs", []);

          _defineProperty(this, "WATER_MAX_CHALLENGE_LEVEL", 440);

          _defineProperty(this, "currLevelDataInfo", null);

          _defineProperty(this, "KC_X", 300);

          _defineProperty(this, "KC_Y", 300);

          _defineProperty(this, "currLevel", 1);

          _defineProperty(this, "fixRatioScreen", 1);

          _defineProperty(this, "scaleTube", 1);

          _defineProperty(this, "isWaterLock", false);

          _defineProperty(this, "arrBoosterCount", [3, 3, 3]);

          _defineProperty(this, "arrTickets", []);

          _defineProperty(this, "BOOSTER_PRICES", [300, 300, 900]);

          _defineProperty(this, "LEVEL_SHOW_HOME", 4);

          _defineProperty(this, "currLevelUnlock", 1);

          _defineProperty(this, "arrShopDataInfos", []);

          _defineProperty(this, "isRemoveAd", false);

          _defineProperty(this, "isIAPStarterPack", false);

          _defineProperty(this, "shop_free_lastTime", 0);

          _defineProperty(this, "SHOP_FREE_NEXT_TIME", 60 * 60 * 2);

          _defineProperty(this, "shop_daily_free_lastday", 0);

          _defineProperty(this, "vipType", 0);

          _defineProperty(this, "vipLastDay", 0);

          _defineProperty(this, "vipLastDayReward", 0);

          _defineProperty(this, "vipDailyRewards", new (_crd && GroupRewardDataInfo === void 0 ? (_reportPossibleCrUseOfGroupRewardDataInfo({
            error: Error()
          }), GroupRewardDataInfo) : GroupRewardDataInfo)([new (_crd && RewardDataInfo === void 0 ? (_reportPossibleCrUseOfRewardDataInfo({
            error: Error()
          }), RewardDataInfo) : RewardDataInfo)((_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).TICKET_GOLD, 3), new (_crd && RewardDataInfo === void 0 ? (_reportPossibleCrUseOfRewardDataInfo({
            error: Error()
          }), RewardDataInfo) : RewardDataInfo)((_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
            error: Error()
          }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).TICKET_SILVER, 3)]));

          _defineProperty(this, "currSceneType", (_crd && SCENE_TYPE === void 0 ? (_reportPossibleCrUseOfSCENE_TYPE({
            error: Error()
          }), SCENE_TYPE) : SCENE_TYPE).MENU);

          _defineProperty(this, "currInfoDaySelect", null);

          _defineProperty(this, "minInfoDay", new (_crd && InfoDay === void 0 ? (_reportPossibleCrUseOfInfoDay({
            error: Error()
          }), InfoDay) : InfoDay)(2, 11, 2024));

          _defineProperty(this, "month_names_short", ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);

          _defineProperty(this, "month_names_full", ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);

          _defineProperty(this, "arrInfoDailyChallengeFinisheds", []);

          _defineProperty(this, "CALENDAR_X", 112);

          _defineProperty(this, "CALENDAR_Y", 110);

          _defineProperty(this, "arrInfoMonthRewards", []);

          _defineProperty(this, "arrDailyChallengeRewards", []);

          _defineProperty(this, "TUTORIAL_LEVEL_SHOW_BOOSTER", 5);

          _defineProperty(this, "isTutLevel5", false);

          _defineProperty(this, "arrThemeSelected", []);

          _defineProperty(this, "mapThemeUnlocked", new Map());

          _defineProperty(this, "arrSkinInfos", []);

          _defineProperty(this, "arrUnlockProgressInfos", []);

          _defineProperty(this, "arrUnlockProgressInfo_Tubes", []);

          _defineProperty(this, "arrUnlockProgressInfo_BGs", []);

          _defineProperty(this, "arrChests_GroupRewardDataInfos", []);

          _defineProperty(this, "arrDailyLogin_GroupRewardDataInfos", []);

          _defineProperty(this, "currDailyLoginIndex", 0);

          _defineProperty(this, "currDailyLoginLastDay", 0);

          _defineProperty(this, "currDailyLoginAdLastDay", 0);

          _defineProperty(this, "dailyQuest_LastDay", 0);

          _defineProperty(this, "arrDailyQuest_GroupRewardDataInfos", []);

          _defineProperty(this, "arrDailyQuestDataInfos", []);

          _defineProperty(this, "arrDailyQuest_Receives", []);

          _defineProperty(this, "dailyQuest_Login", 0);

          _defineProperty(this, "dailyQuest_Win", 0);

          _defineProperty(this, "dailyQuest_WinStreak", 0);

          _defineProperty(this, "dailyQuest_WinMaxStreak", 0);

          _defineProperty(this, "dailyQuest_Tournament", 0);

          _defineProperty(this, "dailyQuest_DailyChallenge", 0);

          _defineProperty(this, "dailyQuest_Booster", 0);

          _defineProperty(this, "mapCacheAvatars", new Map());

          _defineProperty(this, "arrLeaderBoardDataInfos", []);

          _defineProperty(this, "mapLeaderBoard_ItemRankInfos", new Map());

          _defineProperty(this, "mapLeaderBoard_Totals", new Map());

          _defineProperty(this, "mapLeaderBoard_MyScores", new Map());

          _defineProperty(this, "TOURNAMENT_PRICE_REVIVE", 500);

          _defineProperty(this, "arrTournament_LeaderBoardDataInfos", []);

          _defineProperty(this, "currLeaderboardDataInfo", null);

          _defineProperty(this, "currSessionLeaderboardDataInfo", null);

          _defineProperty(this, "currLevelStartTournament", 0);

          _defineProperty(this, "currIndexLevelTournament", 1);

          _defineProperty(this, "isStartTournament", false);

          _defineProperty(this, "isTournamentRevivebyAd", false);

          _defineProperty(this, "currShopItemPopup_BoosterType", null);

          _defineProperty(this, "TIME_COMBO", 4);

          _defineProperty(this, "arrTopPlayers", []);

          _defineProperty(this, "arrDefault_Names", ["Amity", "Edna", "Giselle", "Mario", "Mai", "Moudi", "Maria", "Erenn", "Edward", "Sai", "Shawn", "Santilli", "Brooke", "Shaun", "Torres", "Vera", "Donna", "Martha", "Sorak", "Helen", "Gwena", "Andrea", "Scarlet", "Yatsu", "Iris"]);

          _defineProperty(this, "RACE_LEVEL_UNLOCK", 11);

          _defineProperty(this, "raceActive", 0);

          _defineProperty(this, "raceLastTime", 0);

          _defineProperty(this, "raceFinishedTime", 0);

          _defineProperty(this, "raceScore", 0);

          _defineProperty(this, "raceRewardFinished", 0);

          _defineProperty(this, "RACE_TIME", 2 * 60 * 60);

          _defineProperty(this, "arrPlayerRaceDataInfos", []);

          _defineProperty(this, "arrRace_GroupRewardDataInfos", []);

          _defineProperty(this, "isInitRaceGroup", false);

          _defineProperty(this, "PASS_LEVEL_UNLOCK", 16);

          _defineProperty(this, "PASS_TIME", 6 * 24 * 60 * 60);

          _defineProperty(this, "PASS_TIME_CLAIM", 24 * 60 * 60);

          _defineProperty(this, "arrPassRewardDataInfos", []);

          _defineProperty(this, "passLevelWin", 0);

          _defineProperty(this, "arrPassFreeClaims", []);

          _defineProperty(this, "arrPassMasterClaims", []);

          _defineProperty(this, "passLastTime", 0);

          _defineProperty(this, "passActivated", false);

          _defineProperty(this, "passIndexAvailable", 0);

          _defineProperty(this, "passProgess", 0);

          _defineProperty(this, "passCountLevel", 0);

          _defineProperty(this, "passTutorial", false);

          _defineProperty(this, "SPIN_LEVEL_UNLOCK", 6);

          _defineProperty(this, "arrSpinRewardDataInfos", []);

          _defineProperty(this, "spinLastTime", 0);

          _defineProperty(this, "spinFreeCount", 0);

          _defineProperty(this, "isMobile", true);

          _defineProperty(this, "scaleBG", 1);

          _defineProperty(this, "DEFAULT_W", 1080);

          _defineProperty(this, "DEFAULT_H", 1920);

          _defineProperty(this, "freeVideo_lastTime", 0);

          _defineProperty(this, "FREEVIDEO_NEXTTIME", 2 * 60);

          _defineProperty(this, "currWithFriendDataInfo", null);

          _defineProperty(this, "arrShopItem_Free", [false, false, false]);

          _defineProperty(this, "arrMagicLevelConfigInfos", []);

          _defineProperty(this, "arrMagicLoopLevelConfigInfos", []);

          _defineProperty(this, "currLevelConfigInfo", null);

          _defineProperty(this, "currMagicLevelConfigInfo", null);

          _defineProperty(this, "REWARD_COIN_DEFAULT", 20);

          _defineProperty(this, "mapMagicColorIndex", new Map());

          _defineProperty(this, "mapMagicCountColbyIndexY", new Map());

          _defineProperty(this, "arrMagicColors2", [new Color(196, 6, 2), // Đỏ nâu cháy
          new Color(253, 194, 9), // Vàng nghệ đậm
          new Color(23, 24, 189), // Xanh lam cổ điển
          new Color(113, 166, 4), // Xanh rêu tươi
          new Color(96, 32, 143), // Tím mực đậm
          new Color(227, 91, 1), // Cam đất cháy
          new Color(254, 111, 215), // Hồng neon tươi
          new Color(93, 100, 166), // Xanh ghi đậm
          new Color(112, 50, 43), // Nâu gạch trầm
          new Color(0, 133, 201), // Xanh cyan đậm
          new Color(4, 45, 1), // Xanh rừng tối
          new Color(115, 16, 85) // Tím mận đậm
          ]);

          _defineProperty(this, "arrMagicTOPColors2", [new Color(246, 38, 35), // Đỏ tươi sáng
          new Color(252, 216, 33), // Vàng chanh sáng
          new Color(49, 79, 202), // Xanh lam sáng
          new Color(174, 219, 58), // Xanh lá non
          new Color(162, 49, 248), // Tím hoa cà rực
          new Color(251, 146, 24), // Cam ngọt sáng
          new Color(253, 150, 235), // Hồng pastel ánh tím
          new Color(130, 141, 218), // Xanh lavender
          new Color(174, 72, 69), // Nâu đỏ rượu vang
          new Color(63, 186, 245), // Xanh thiên thanh
          new Color(16, 88, 33), // Xanh rêu đậm
          new Color(204, 51, 146) // Hồng sen tím
          ]);

          _defineProperty(this, "arrMagicColors", [new Color(244, 46, 37), // Đỏ tươi
          new Color(254, 213, 23), // Vàng chanh
          new Color(13, 75, 254), // Xanh dương đậm
          new Color(59, 195, 23), // Xanh lá tươi
          new Color(151, 23, 224), // Tím đậm
          new Color(255, 122, 4), // Cam sáng
          new Color(224, 47, 213), // Hồng tím
          new Color(47, 171, 252), // Xanh trời
          new Color(164, 239, 54), // Vàng lá sáng
          new Color(0, 248, 254), // Xanh ngọc
          new Color(93, 100, 166), // Xanh ghi đậm
          new Color(115, 16, 85), // Tím mận
          new Color(138, 94, 255), // Tím thiên thanh
          new Color(56, 255, 176), // Xanh ngọc sáng
          new Color(255, 94, 165) // Hồng cánh sen
          ]);

          _defineProperty(this, "arrMagicTOPColors", [new Color(255, 123, 125), // Hồng sáng
          new Color(255, 228, 147), // Vàng pastel
          new Color(77, 119, 255), // Xanh dương nhạt
          new Color(77, 233, 38), // Xanh lá non
          new Color(177, 43, 254), // Tím sáng
          new Color(254, 161, 118), // Cam đào
          new Color(229, 112, 216), // Hồng tím pastel
          new Color(110, 197, 246), // Xanh biển nhạt
          new Color(222, 255, 163), // Vàng chanh nhạt
          new Color(174, 255, 240), // Xanh ngọc nhạt
          new Color(130, 141, 218), // Xanh lavender
          new Color(204, 51, 146), // Hồng sen đậm
          new Color(186, 153, 255), // Tím hoa cà nhạt
          new Color(128, 255, 217), // Ngọc lam sáng
          new Color(255, 168, 203) // Hồng pastel
          ]);

          _defineProperty(this, "HEART_TIME_RESET", 30 * 60);

          _defineProperty(this, "HEART_MAX_COUNT", 5);

          _defineProperty(this, "HEARE_PRICE", 900);

          _defineProperty(this, "currHeart", 0);

          _defineProperty(this, "currHeart_LastTime", 0);

          _defineProperty(this, "currHeart_CountTime", 0);

          _defineProperty(this, "currHeartUnlimited_CountTime", 0);

          _defineProperty(this, "currHeartUnlimited_LastTime", 0);

          _defineProperty(this, "isTutCurtain", false);

          _defineProperty(this, "isTutClay", false);

          _defineProperty(this, "isTutPlaster", false);

          _defineProperty(this, "splashStartTime", 0);

          _defineProperty(this, "iapCount", 0);

          _defineProperty(this, "winStreak", 0);

          _defineProperty(this, "loseStreak", 0);

          _defineProperty(this, "playDurationStartTime", 0);

          _defineProperty(this, "playDurationEndTime", 0);

          _defineProperty(this, "playType", (_crd && PLAY_TYPE === void 0 ? (_reportPossibleCrUseOfPLAY_TYPE({
            error: Error()
          }), PLAY_TYPE) : PLAY_TYPE).HOME);

          _defineProperty(this, "isNoMoves_AddCol_byAD", false);

          _defineProperty(this, "currTournamentPageHostDataInfo", null);
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new localConfig();
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.start();
          return this._instance;
        }

        getFriendAvatarInfo_byIDPlayer(idPlayer) {
          for (let i = 0; i < this.arrConnectedPlayerInfos.length; i++) {
            let friendAvatarInfo = this.arrConnectedPlayerInfos[i];

            if (friendAvatarInfo.id == idPlayer) {
              return friendAvatarInfo;
            }
          }

          return null;
        }

        getFriendAvatarInfo(idFB) {
          for (let i = 0; i < this.arrConnectedPlayerInfos.length; i++) {
            if (this.arrConnectedPlayerInfos[i].id == idFB) {
              return this.arrConnectedPlayerInfos[i];
            }
          }

          return null;
        }

        checkIsMyFriend(idFB) {
          for (let i = 0; i < this.arrConnectedPlayerInfos.length; i++) {
            if (this.arrConnectedPlayerInfos[i].id == idFB) {
              return true;
            }
          }

          return false;
        }

        setSound(isSound) {
          this.isSound = isSound;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_Sound(this.isSound);
        }

        setMusic(isMusic) {
          this.isMusic = isMusic;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_Music(this.isMusic);
        }

        setVibration(isVibration) {
          this.isVibration = isVibration;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_Vibration(this.isVibration);
        }

        setTops(isTops) {
          this.isTops = isTops;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_Tops(this.isTops);
        } //#endregion


        //#region COIN
        setCoin(count) {
          this.currCoin = count;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setGlobalData_COIN(this.currCoin);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).COIN_UPDATE);
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logBalanceCoin(this.currCoin);
        }

        generateListCoinValue_fromTotalCoin(totalCoin, count) {
          let listCoinValue = [];

          if (totalCoin < count) {
            for (let i = 0; i < totalCoin; i++) {
              listCoinValue.push(1);
            }
          } else {
            let value1 = Math.floor(totalCoin / count);
            let value2 = value1 + 1;
            let countValue2 = totalCoin - value1 * count;

            for (let i = 0; i < count; i++) {
              if (i < countValue2) {
                listCoinValue.push(value2);
              } else {
                listCoinValue.push(value1);
              }
            }
          }

          return listCoinValue;
        } //#endregion
        //#region TIME_NEXT_DAY


        getTimeToNextDay() {
          let currDate = new Date(); //console.log("getTimeToNextDaygetTimeToNextDaygetTimeToNextDay");
          //console.log(currDate.getTime());

          let lastDate = new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate()); //console.log(lastDate.getTime());

          return Math.floor((lastDate.getTime() - currDate.getTime()) / 1000) + 86400;
        }

        getTimeToNextWeek() {
          let currDate = new Date(); //console.log("getTimeToNextDaygetTimeToNextDaygetTimeToNextDay");
          //console.log(currDate.getTime());

          let lastDate = new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate() - currDate.getDay() + 7); //console.log(lastDate.getTime());

          return Math.floor((lastDate.getTime() - currDate.getTime()) / 1000) + 86400;
        }

        getStartTimeWeek() {
          let currDate = new Date(); //console.log("getTimeToNextDaygetTimeToNextDaygetTimeToNextDay");
          //console.log(currDate.getTime());

          let startWeekDate = new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate() - currDate.getDay() + 1); //console.log(lastDate.getTime());

          return Math.floor(startWeekDate.getTime() / 1000);
        } //#endregion
        //#region 


        getCurrDay() {
          let date = new Date();
          let currDay = date.getFullYear() * 10000 + date.getMonth() * 100 + date.getDate();
          return currDay;
        }

        getCurrTime() {
          let date = new Date();
          return Math.floor(date.getTime() / 1000);
        } //#endregion
        //#region LOG EVENT


        checkCampID(campID) {
          return this.log_CAMP_ID == campID;
        }

        addCampID(campID) {
          this.log_CAMP_ID = campID;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_CampID(this.log_CAMP_ID);
        }

        checkAdsetID(adsetID) {
          return this.log_ADSET_ID == adsetID;
        }

        addAdsetID(adsetID) {
          this.log_ADSET_ID = adsetID;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_AdsetID(this.log_ADSET_ID);
        }

        checkAdsID(adsID) {
          return this.log_ADS_ID == adsID;
        }

        addAdsID(adsID) {
          this.log_ADS_ID = adsID;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_AdsID(this.log_ADS_ID);
        }

        checkTourID(tourID) {
          return this.log_TOUR_ID == tourID;
        }

        addTourID(tourID) {
          this.log_TOUR_ID = tourID;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_TourID(this.log_TOUR_ID);
        } //#endregion


        updatePlayerData_Finished() {
          localConfig.instance.initCurrInfoDay();
          localConfig.instance.initCurrWeek(); // console.log("updatePlayerData_FinishedupdatePlayerData_Finished");

          localConfig.instance.isSound = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_Sound() == 1;
          localConfig.instance.isMusic = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_Music() == 1; // localConfig.instance.isVibration  = configuration.instance.getData_Vibration() == 1;

          localConfig.instance.isVibration = false;
          localConfig.instance.isTops = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_Tops();
          localConfig.instance.currCoin = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getGlobalData_COIN(); // localConfig.instance.currLevel = configuration.instance.getData_LevelUnlock();

          localConfig.instance.currLevelUnlock = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_LevelUnlock(); // localConfig.instance.currLevelUnlock = 104;
          // localConfig.instance.currLevelUnlock = 105;
          // console.log(localConfig.instance.currLevelUnlock);

          localConfig.instance.isTutLevel5 = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_TutLevel5() == 1;
          localConfig.instance.arrBoosterCount = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_BoosterCount(); // localConfig.instance.arrBoosterCount = [99,99,9];

          localConfig.instance.getThemeSelected((_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_ThemeSelected()); // localConfig.instance.setThemeSelected(THEME_TYPE.TUBE,11);

          localConfig.instance.getThemeUnlocked((_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_ThemeUnlocked());
          localConfig.instance.arrTickets = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_Ticket();
          localConfig.instance.isRemoveAd = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_RemoveAd();
          localConfig.instance.isIAPStarterPack = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_IAPStarterPack();
          localConfig.instance.shop_free_lastTime = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_ShopFreeLastTime();
          localConfig.instance.vipLastDayReward = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_VipLastDay_Reward();
          localConfig.instance.vipType = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_VIP();
          localConfig.instance.vipLastDay = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_VipLastDay();
          localConfig.instance.initInfoVIP();
          localConfig.instance.currDailyLoginIndex = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_DailyLoginIndex();
          localConfig.instance.currDailyLoginLastDay = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_DailyLoginLastDay();
          localConfig.instance.currDailyLoginAdLastDay = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_DailyLoginAdLastDay();

          if (localConfig.instance.currDailyLoginIndex == 7) {
            if (localConfig.instance.getCurrDay() > localConfig.instance.currDailyLoginLastDay) {
              localConfig.instance.currDailyLoginIndex = 0;
            }
          }

          localConfig.instance.arrDailyQuest_Receives = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_DailyQuestReceives();
          localConfig.instance.dailyQuest_LastDay = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_DailyQuestLastDay();

          if (localConfig.instance.getCurrDay() > localConfig.instance.dailyQuest_LastDay) {
            this.resetDailyQuestData();
          } else {
            localConfig.instance.initDailyQuestData((_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
              error: Error()
            }), configuration) : configuration).instance.getData_DailyQuestData());
          }

          localConfig.instance.arrInfoDailyChallengeFinisheds = this.getInfoDayFinsihed((_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_InfoDay_Finished());
          localConfig.instance.arrInfoMonthRewards = this.getInfoMonthReward((_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_InfoMonth_Reward()); // console.log(localConfig.instance.arrInfoMonthRewards);

          localConfig.instance.log_CAMP_ID = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_CampID();
          localConfig.instance.log_ADSET_ID = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_AdsetID();
          localConfig.instance.log_ADS_ID = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_AdsID();
          localConfig.instance.log_TOUR_ID = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_TourID();

          if (localConfig.instance.log_CAMP_ID && localConfig.instance.log_CAMP_ID.length > 0) {
            localConfig.instance.isPaidUser = true;
          }

          if (localConfig.instance.log_ADSET_ID && localConfig.instance.log_ADSET_ID.length > 0) {
            localConfig.instance.isPaidUser = true;
          }

          if (localConfig.instance.log_ADS_ID && localConfig.instance.log_ADS_ID.length > 0) {
            localConfig.instance.isPaidUser = true;
          } // localConfig.instance.isStartTournament = true;
          // let leaderboardDataInfo = new LeaderboardDataInfo();
          // leaderboardDataInfo.contextId = "1";
          // leaderboardDataInfo._id = "1";
          // leaderboardDataInfo.expireTime = 1831401911;
          // leaderboardDataInfo.name = "Weekly Tournament";
          // leaderboardDataInfo.tournamentId = "1";
          // leaderboardDataInfo.type = 1;
          // localConfig.instance.arrTournament_LeaderBoardDataInfos.push(leaderboardDataInfo);


          localConfig.instance.setRaceInfoDatas((_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_RaceInfos());
          localConfig.instance.arrPlayerRaceDataInfos = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_RaceOpponents();
          localConfig.instance.passActivated = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_MasterPassActivated();
          localConfig.instance.setPassDataInfos((_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_MasterPassInfos());
          localConfig.instance.passTutorial = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_MasterPassTutorial();
          localConfig.instance.spinFreeCount = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_SpinFreeCount();
          localConfig.instance.spinLastTime = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_SpinLastTime();

          if (localConfig.instance.getCurrDay() > localConfig.instance.spinLastTime) {
            localConfig.instance.initSpin();
          }

          localConfig.instance.currHeart = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_HeartCount();

          if (localConfig.instance.currHeart < 0) {
            localConfig.instance.currHeart = 0;
          }

          localConfig.instance.currHeart_LastTime = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_HeartLastTime();
          localConfig.instance.currHeartUnlimited_CountTime = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_HeartUnlimited(); // localConfig.instance.currHeartUnlimited_CountTime = 10;
          // localConfig.instance.currHeart = 4;
          // localConfig.instance.currHeart_LastTime = localConfig.instance.getCurrTime() - 5;

          localConfig.instance.currHeartUnlimited_LastTime = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_HeartUnlimited_LastTime();
          localConfig.instance.initHeartUnlimited();
          localConfig.instance.shop_daily_free_lastday = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_ShopDailyFreeLastDay();
          localConfig.instance.isTutCurtain = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_TutCurtain();
          localConfig.instance.isTutClay = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_TutClay();
          localConfig.instance.isTutPlaster = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_TutPlaster();
          localConfig.instance.iapCount = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_IAPCount();
          localConfig.instance.winStreak = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_WinStreak();
          localConfig.instance.loseStreak = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_LoseStreak(); // localConfig.instance.isStartTournament = true;
          // localConfig.instance.currTournamentPageHostDataInfo= new TournamentPageHostDataInfo();
          // localConfig.instance.currTournamentPageHostDataInfo.tournamentID = "111111";
          // localConfig.instance.currTournamentPageHostDataInfo.title = "Test Tournament";
          // localConfig.instance.currTournamentPageHostDataInfo.typeHost= TOURNAMENT_TYPE.PAGE_HOST;
          // localConfig.instance.currTournamentPageHostDataInfo.levelIndex = 6;
          // localConfig.instance.currTournamentPageHostDataInfo.eventURL = "https://game.gameoki.com/playfab/assets/a9ee59e4-478b-435f-ad8f-ebbbc27f4a04-BG_1572025_001.jpg";

          localConfig.instance.blackFriday_Infoday = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_BlackFriday();
          localConfig.instance.isGetPlayerDataSuccess = true;
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GET_DATA_PLAYER_SUCCESS);
        }

        getWaterColor_byID(id) {
          // console.log("getWaterColor_byID:"+id);
          if (id < this.arrWaterColors.length) {
            return this.arrWaterColors[id];
          }

          return this.arrWaterColors[0];
        }

        getWaterTOPColor_byID(id) {
          if (id < this.arrWaterTOPColors.length) {
            return this.arrWaterTOPColors[id];
          }

          return this.arrWaterTOPColors[0];
        }

        getMagicColor_byID(id) {
          // console.log("getMagicColor_byID:"+id);
          // if(id <= this.arrMagicColors.length){
          //     return this.arrMagicColors[id];
          // }
          // return this.arrMagicColors[0];
          if (id < 0) return this.arrMagicColors[0];
          return this.arrMagicColors[this.mapMagicColorIndex.get(id)];
        }

        getMagicTOPColor_byID(id) {
          // console.log("getMagicTOPColor_byID:"+id);
          // if(id <= this.arrMagicTOPColors.length){
          //     return this.arrMagicTOPColors[id];
          // }
          // return this.arrMagicTOPColors[0];
          if (id < 0) return this.arrMagicTOPColors[0];
          return this.arrMagicTOPColors[this.mapMagicColorIndex.get(id)];
        } // currIndexTube:number = 1;


        getItemTubePolygonConfig_byIndexTube(indexTube) {
          if (indexTube >= this.MAX_THEME_TUBE) return this.arrItemTubePolygonConfigs[0];
          return this.arrItemTubePolygonConfigs[indexTube];
        }

        getPathHoverBottom_byIndexTube(indexTube) {
          return "tube/" + indexTube + "/" + indexTube + "b";
        }

        getPathHoverTop_byIndexTube(indexTube) {
          return "tube/" + indexTube + "/" + indexTube + "a";
        }

        getPathMask_byIndexTube(indexTube) {
          return "tube/" + indexTube + "/" + indexTube + "c";
        }

        getPathTop_byIndexTube(indexTube) {
          return "tube/" + indexTube + "/" + indexTube;
        }

        getItemTubeConfig_byIndexTube(indexTube) {
          if (indexTube >= this.MAX_THEME_TUBE) return this.arrItemTubeConfigs[0];
          return this.arrItemTubeConfigs[indexTube];
        }

        getItemWater_TOP_PosY(indexWater) {
          return this.ITEMWATER_POSY_START + this.ITEMWATER_HIGHT * indexWater + this.ITEMWATER_TOP_POSY;
        }

        getItemWater_PosY(indexWater) {
          return this.ITEMWATER_POSY_START + this.ITEMWATER_HIGHT * indexWater;
        }

        initCurrInfoDay() {
          let date = new Date();
          this.currInfoDay = new (_crd && InfoDay === void 0 ? (_reportPossibleCrUseOfInfoDay({
            error: Error()
          }), InfoDay) : InfoDay)(date.getDate(), date.getMonth(), date.getFullYear());
        }

        initCurrWeek() {
          // console.log("initCurrWeek");
          let oneDay = 24 * 60 * 60 * 1000;
          let startDate = new Date(2024, 11, 2);
          let currentdate = new Date();
          let countDays = Math.round((currentdate.getTime() - startDate.getTime()) / oneDay);
          this.currWeek = Math.floor(countDays / 7); // console.log(this.currWeek);
        }

        getCountDay_two_InfoDay(startDay, endDay) {
          // let startDate:Date = new Date(startDay.)
          let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

          let firstDate = new Date(startDay.year, startDay.month, startDay.day);
          let secondDate = new Date(endDay.year, endDay.month, endDay.day);
          let diffDays = Math.round((secondDate.getTime() - firstDate.getTime()) / oneDay);
          return diffDays;
        }

        getCountDay_From_Start(selectDay) {
          let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

          let firstDate = new Date(this.minInfoDay.year, this.minInfoDay.month, this.minInfoDay.day);
          let secondDate = new Date(selectDay.year, selectDay.month, selectDay.day);
          let diffDays = Math.round((secondDate.getTime() - firstDate.getTime()) / oneDay);
          return diffDays;
        } //#region BLACK FRIDAY


        setBackFriday_Received() {
          this.blackFriday_Infoday = this.currInfoDay;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_BlackFriday(this.currInfoDay);
        }

        checkShowBlackFriday() {
          if (this.currInfoDay.month == 10) {
            if (this.BLACKFIRDAY_DAYLY_SHOW.indexOf(this.currInfoDay.day) > -1) {
              if (!this.checkSameInfoDay(this.blackFriday_Infoday, this.currInfoDay)) {
                if (!this.isShowBlackFriday) {
                  return true;
                }
              }
            }
          }

          return false;
        } //#endregion    


        checkSameInfoDay(infoday1, infoday2) {
          if (infoday1.year == infoday2.year && infoday1.month == infoday2.month && infoday1.day == infoday2.day) {
            return true;
          }

          return false;
        }

        initAfterLoadData() {
          localConfig.instance.setPassDataInfos((_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_MasterPassInfos());
        }

        getPath_LevelWaterInfo(_levelID) {
          return "water/levels/" + _levelID;
        }

        getLevelDataInfo_byIndexLevel(indexLevel) {
          return this.getLevelDataInfo_byStr(this.arrLevelDataStrs[indexLevel - 1]);
        }

        getLevelDataInfo_byIndexLevelChallenge(indexLevelChallenge) {
          return this.getLevelDataInfo_byStr(this.arrLevelChallengeDataStrs[indexLevelChallenge]);
        }

        getLevelDataInfo_byStr(strData) {
          // console.log(strData);
          let leveDataInfo = new (_crd && LevelDataInfo === void 0 ? (_reportPossibleCrUseOfLevelDataInfo({
            error: Error()
          }), LevelDataInfo) : LevelDataInfo)();
          let strRow1 = "";
          let strRow2 = "";

          if (strData.indexOf("|") > -1) {
            let arrRows = strData.split("|");
            strRow1 = arrRows[0];
            strRow2 = arrRows[1];
          } else {
            strRow1 = strData;
          }

          if (strRow1.length > 0) {
            leveDataInfo.arrTubeInfo_1 = this.getArrTubeInfo_byStr(strRow1);
          }

          if (strRow2.length > 0) {
            leveDataInfo.arrTubeInfo_2 = this.getArrTubeInfo_byStr(strRow2);
          }

          if (leveDataInfo.arrTubeInfo_2.length > 0) {
            leveDataInfo.isTwoRows = true;
          }

          leveDataInfo.maxCol = leveDataInfo.arrTubeInfo_1.length;

          if (leveDataInfo.arrTubeInfo_1.length == leveDataInfo.arrTubeInfo_2.length) {// leveDataInfo.maxCol ++;
          } else if (leveDataInfo.arrTubeInfo_1.length < leveDataInfo.arrTubeInfo_2.length) {
            leveDataInfo.maxCol = leveDataInfo.arrTubeInfo_2.length;
          }

          return leveDataInfo;
        }

        updateLevelDataInfo_MaxCol() {}

        initPos_byLevelDataInfo(levelDataInfo) {
          if (levelDataInfo.maxRow <= 3) {}

          if (levelDataInfo.maxCol <= 3) {
            this.KC_X = 300;
            this.KC_Y = 300;
            this.scaleTube = 1;
          } else if (levelDataInfo.maxCol == 4) {
            this.KC_X = 250;
            this.KC_Y = 325;
            this.scaleTube = 0.9;
          } else if (levelDataInfo.maxCol == 5) {
            this.KC_X = 220;
            this.KC_Y = 325;
            this.scaleTube = 0.9;
          } else if (levelDataInfo.maxCol == 6) {
            this.KC_X = 200;
            this.KC_Y = 325;
            this.scaleTube = 0.8;
          } else if (levelDataInfo.maxCol == 7) {
            this.KC_X = 200;
            this.KC_Y = 325;
            this.scaleTube = 0.7;
          } else if (levelDataInfo.maxCol == 8) {
            this.KC_X = 190;
            this.KC_Y = 325;
            this.scaleTube = 0.7;
          } else if (levelDataInfo.maxCol == 9) {
            this.KC_X = 170;
            this.KC_Y = 325;
            this.scaleTube = 0.7;
          }
        }

        initPos_byMagicLevelDataInfo(magicLevelDataInfo) {
          // console.log("initPos_byLevelDataInfo",magicLevelDataInfo);
          if (magicLevelDataInfo.maxRow <= 2) {
            if (magicLevelDataInfo.maxCol <= 3) {
              this.KC_X = 300;
              this.KC_Y = 300;
              this.scaleTube = 1;
            } else if (magicLevelDataInfo.maxCol == 4) {
              this.KC_X = 250;
              this.KC_Y = 650;
              this.scaleTube = 0.9;
            } else if (magicLevelDataInfo.maxCol == 5) {
              this.KC_X = 220;
              this.KC_Y = 650;
              this.scaleTube = 0.9;
            } else if (magicLevelDataInfo.maxCol == 6) {
              this.KC_X = 200;
              this.KC_Y = 700;
              this.scaleTube = 0.8;
            } else if (magicLevelDataInfo.maxCol == 7) {
              this.KC_X = 200;
              this.KC_Y = 700;
              this.scaleTube = 0.75;
            } else if (magicLevelDataInfo.maxCol == 8) {
              this.KC_X = 200;
              this.KC_Y = 700;
              this.scaleTube = 0.75;
            } else {
              this.KC_X = 170;
              this.KC_Y = 700;
              this.scaleTube = 0.8;
            }
          } else {
            if (magicLevelDataInfo.maxCol == 5) {
              this.KC_X = 220;
              this.KC_Y = 600;
              this.scaleTube = 0.75;
            } else if (magicLevelDataInfo.maxCol == 6) {
              this.KC_X = 200;
              this.KC_Y = 600;
              this.scaleTube = 0.75;
            } else if (magicLevelDataInfo.maxCol == 7) {
              this.KC_X = 200;
              this.KC_Y = 600;
              this.scaleTube = 0.75;
            } else if (magicLevelDataInfo.maxCol == 8) {
              this.KC_X = 180;
              this.KC_Y = 600;
              this.scaleTube = 0.75;
            } else {
              this.KC_X = 180;
              this.KC_Y = 600;
              this.scaleTube = 0.75;
            }
          } // console.error("initPos_byMagicLevelDataInfo",this.KC_X,this.KC_Y,this.scaleTube);

        }

        getPosTube_byXY(levelDataInfo, tubeX, tubeY) {
          let arrTubeInfos = levelDataInfo.arrTubeInfo_1;

          if (tubeY == 1) {
            arrTubeInfos = levelDataInfo.arrTubeInfo_2;
          }

          let posY = 0;

          if (levelDataInfo.isTwoRows) {
            if (tubeY == 0) {
              posY = this.KC_Y;
            } else {
              posY = -this.KC_Y;
            }
          }

          let posX = 0;
          posX = (tubeX - arrTubeInfos.length / 2 + 0.5) * this.KC_X;
          return new Vec2(posX, posY);
        }

        getMagicPosTube_byXY(magicLevelDataInfo, tubeX, tubeY) {
          // let arrTubes_byY:MagicBInfo[] = magicLevelDataInfo.B.filter((item:MagicBInfo) => item.indexY == tubeY);
          // console.log(this.mapMagicCountColbyIndexY);
          let countTubebyY = this.mapMagicCountColbyIndexY.get(tubeY); // console.log("tubeY",tubeY,"countTubebyY",countTubebyY);

          let posY = 0;
          posY = (tubeY - magicLevelDataInfo.maxRow / 2 + 0.5) * this.KC_Y;
          let posX = 0;
          posX = (tubeX - countTubebyY / 2 + 0.5) * this.KC_X; // console.log(posX,posY);

          return new Vec2(posX, posY);
        }

        getArrTubeInfo_byStr(strDataTube) {
          strDataTube = strDataTube.replace("\r", "");
          let arrTubeInfos = [];
          let arrTubeStrs = strDataTube.split(";");

          for (let i = 0; i < arrTubeStrs.length; i++) {
            let strData = arrTubeStrs[i];
            let tubeInfo = new (_crd && TubeInfo === void 0 ? (_reportPossibleCrUseOfTubeInfo({
              error: Error()
            }), TubeInfo) : TubeInfo)();

            for (let j = 0; j < strData.length; j++) {
              // console.log(strData[j]);
              let indexColor = -1;

              if (strData[j] == "a") {
                indexColor = 10;
                tubeInfo.arrIndexColors.push(indexColor);
              } else {
                indexColor = parseInt(strData[j]);

                if (!Number.isNaN(indexColor)) {
                  tubeInfo.arrIndexColors.push(indexColor);
                }
              } // console.log("indexColor:"+indexColor);

            }

            arrTubeInfos.push(tubeInfo);
          }

          return arrTubeInfos;
        }

        updateFixRatioScreen() {
          // console.log("updateFixRatioScreen",view.getViewportRect().width,view.getViewportRect().height);
          // this.fixRatioScreen =  (view.getViewportRect().width/view.getViewportRect().height) / (720/1280) ;
          this.fixRatioScreen = view.getFrameSize().width / view.getFrameSize().height / (1080 / 1920); // console.log("fixRatioScreen",this.fixRatioScreen);

          this.fixRatioScreen = 1;
        }

        getPos_PosWord_WorldSpace(posWorld, scale) {
          // console.log("getPos_PosWord_WorldSpace",posWorld,scale);
          let _posV3 = new Vec3(posWorld.x / 100 * scale * this.fixRatioScreen, posWorld.y / 100 * scale * this.fixRatioScreen, 0); // console.log(_posV3);


          return _posV3;
        }

        setBoosterCount(boosterType, count) {
          this.arrBoosterCount[boosterType] = count;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_BoosterCount(this.arrBoosterCount);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).BOOSTER_COUNT_UPDATE, boosterType);

          if (boosterType == (_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
            error: Error()
          }), BOOSTER_TYPE) : BOOSTER_TYPE).UNDO) {
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logBoosterUndoCount(count);
          } else if (boosterType == (_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
            error: Error()
          }), BOOSTER_TYPE) : BOOSTER_TYPE).SUGGEST) {
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logBoosterShuffleCount(count);
          } else if (boosterType == (_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
            error: Error()
          }), BOOSTER_TYPE) : BOOSTER_TYPE).ADDCOL) {
            (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
              error: Error()
            }), LogEventManager) : LogEventManager).instance.logBoosterAddColCount(count);
          }
        }

        getBoosterCount(boosterType) {
          return this.arrBoosterCount[boosterType];
        } //#endregion
        //#region TICKET


        setTicketCount(ticketType, count) {
          this.arrTickets[ticketType] = count;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_Ticket(this.arrTickets);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TICKET_UPDATE, ticketType);
        }

        getTicketCount(ticketType) {
          return this.arrTickets[ticketType];
        }

        getBoosterPrice(boosterType) {
          return this.BOOSTER_PRICES[boosterType];
        } //#endregion
        //#region LEVEL UNLOCK


        setLevelUnlock(level) {
          if (level > this.currLevelUnlock) {
            this.currLevelUnlock = level;
            (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
              error: Error()
            }), configuration) : configuration).instance.setData_LevelUnlock(this.currLevelUnlock);
            localConfig.instance.setDailyQuest_AddWin();
          }
        } //#endregion
        //#region SHOP


        getIAP_PackID_bShopPackType(shopPackType) {
          return (_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE)[shopPackType].toLowerCase().toString();
        }

        getIAP_PlacementType(iapPlacementType) {
          return (_crd && IAP_PLACEMENT_TYPE === void 0 ? (_reportPossibleCrUseOfIAP_PLACEMENT_TYPE({
            error: Error()
          }), IAP_PLACEMENT_TYPE) : IAP_PLACEMENT_TYPE)[iapPlacementType].toLowerCase().toString();
        }

        getIAP_ShowType(iapShowType) {
          return (_crd && IAP_SHOW_TYPE === void 0 ? (_reportPossibleCrUseOfIAP_SHOW_TYPE({
            error: Error()
          }), IAP_SHOW_TYPE) : IAP_SHOW_TYPE)[iapShowType].toLowerCase().toString();
        }

        getAD_FormatType(ad_format) {
          return (_crd && AD_FORMAT_TYPE === void 0 ? (_reportPossibleCrUseOfAD_FORMAT_TYPE({
            error: Error()
          }), AD_FORMAT_TYPE) : AD_FORMAT_TYPE)[ad_format].toLowerCase().toString();
        }

        getAd_EndType(ad_endType) {
          return (_crd && AD_END_TYPE === void 0 ? (_reportPossibleCrUseOfAD_END_TYPE({
            error: Error()
          }), AD_END_TYPE) : AD_END_TYPE)[ad_endType].toLowerCase().toString();
        }

        getItemShopDataInfo_byPackID(packID) {
          for (let i = 0; i < this.arrShopDataInfos.length; i++) {
            if (this.arrShopDataInfos[i].packID == packID) {
              return this.arrShopDataInfos[i];
            }
          }

          return this.arrShopDataInfos[0];
        }

        getValuePriceIAPPack_byProductID(packID) {
          for (let i = 0; i < this.arrShopDataInfos.length; i++) {
            if (this.arrShopDataInfos[i].packID == packID) {
              // console.log(this.arrShopDataInfos[i]);
              return this.arrShopDataInfos[i].price_amount_cents / 100;
            }
          }

          return 0;
        }

        setData_RemoveAd() {
          this.isRemoveAd = true;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_RemoveAd(true);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).REMOVE_AD_UPDATE);
          (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.HideBanner();
        }

        setData_IAPStarterPack() {
          this.isIAPStarterPack = true;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_IAPStarterPack(true);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).STARTER_PACK_UPDATE);
        }

        setShopFreeLastTime() {
          this.shop_free_lastTime = this.getCurrTime();
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_ShopFreeLastTime();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOP_FREE_LASTTIME_UPDATE);
        }

        setShopDailyFreeLastDay() {
          this.shop_daily_free_lastday = localConfig.instance.getCurrDay();
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_ShopDailyFreeLastDay(this.shop_daily_free_lastday);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SHOP_DAILY_FREE_LASTDAY_UPDATE);
        }

        setVIPType(vipType) {
          this.vipType = vipType; // console.log("setVIPType:"+vipType);

          this.vipLastDay = localConfig.instance.getCurrDay();
          this.isRemoveAd = true;
          (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.HideBanner();
          this.setVIPLastDayReward();
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_VIP(this.vipType);
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_VipLastDay();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).VIP_UPDATE);
        }

        setVIPLastDayReward() {
          localConfig.instance.vipLastDayReward = localConfig.instance.getCurrDay();
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_VipLastDay_Reward();
        }

        getVipCountDownTimeLeft(vipType) {
          let vipStartTime = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_VipLastDay(); // console.log(removeAdStartTime);

          let currTime = localConfig.instance.getCurrTime(); // console.log(currTime);

          let countDays = Math.floor((currTime - vipStartTime) / 86400);
          let coutnVIPDays = 30;

          if (vipType == (_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).VIP_30) {
            coutnVIPDays = 30;
          } else if (vipType == (_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).VIP_7) {
            coutnVIPDays = 7;
          } else if (vipType == (_crd && SHOP_PACK_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_PACK_TYPE({
            error: Error()
          }), SHOP_PACK_TYPE) : SHOP_PACK_TYPE).VIP_3) {
            coutnVIPDays = 3;
          }

          return coutnVIPDays - countDays;
        }

        initInfoVIP() {
          if (this.vipType != 0) {
            let countDaysLeft = localConfig.instance.getVipCountDownTimeLeft(this.vipType);

            if (countDaysLeft <= 0) {
              this.vipType = 0;
              this.vipLastDay = 0;
              this.vipLastDayReward = 0;
              (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
                error: Error()
              }), configuration) : configuration).instance.setData_VIP(0);
            } else {
              this.isRemoveAd = true;
            }
          }
        } //#endregion


        getMonth_Name_Short(monthIndex) {
          return this.month_names_short[monthIndex];
        }

        getMonth_Name_Full(monthIndex) {
          return this.month_names_full[monthIndex];
        }

        getNameMonthOfYear(month, year) {
          return this.getMonth_Name_Short(month) + " " + year;
        }

        getCountFinished_InMonth(month, year) {
          let countFinished = 0;

          for (let i = 0; i < this.arrInfoDailyChallengeFinisheds.length; i++) {
            if (this.arrInfoDailyChallengeFinisheds[i].year == year && this.arrInfoDailyChallengeFinisheds[i].month == month) {
              countFinished++;
            }
          }

          return countFinished;
        }

        getStrInfoDayFinsihed(arrInfoDailyChallengeFinisheds) {
          let strInfoDayFinsihed = "";

          for (let i = 0; i < arrInfoDailyChallengeFinisheds.length; i++) {
            if (i == arrInfoDailyChallengeFinisheds.length - 1) {
              strInfoDayFinsihed += arrInfoDailyChallengeFinisheds[i].day + "-" + arrInfoDailyChallengeFinisheds[i].month + "-" + arrInfoDailyChallengeFinisheds[i].year;
            } else {
              strInfoDayFinsihed += arrInfoDailyChallengeFinisheds[i].day + "-" + arrInfoDailyChallengeFinisheds[i].month + "-" + arrInfoDailyChallengeFinisheds[i].year + "|";
            }
          }

          return strInfoDayFinsihed;
        }

        getInfoDayFinsihed(strInfoDayChallengeFinsihed) {
          let arrInfoDailyChallengeFinisheds = [];
          if (strInfoDayChallengeFinsihed == "") return [];
          let arrInfoDayFinsihed = strInfoDayChallengeFinsihed.split("|");

          for (let i = 0; i < arrInfoDayFinsihed.length; i++) {
            let infoDay = new (_crd && InfoDay === void 0 ? (_reportPossibleCrUseOfInfoDay({
              error: Error()
            }), InfoDay) : InfoDay)();
            infoDay.day = parseInt(arrInfoDayFinsihed[i].split("-")[0]);
            infoDay.month = parseInt(arrInfoDayFinsihed[i].split("-")[1]);
            infoDay.year = parseInt(arrInfoDayFinsihed[i].split("-")[2]);
            arrInfoDailyChallengeFinisheds.push(infoDay);
          }

          return arrInfoDailyChallengeFinisheds;
        }

        addInfoDayFinished(infoDailyChallenge) {
          let isFinished = this.checkInfoDailyChallengeFinished(infoDailyChallenge);

          if (!isFinished) {
            this.arrInfoDailyChallengeFinisheds.push(infoDailyChallenge);
            (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
              error: Error()
            }), configuration) : configuration).instance.setDataInfoDay_Finished(this.getStrInfoDayFinsihed(this.arrInfoDailyChallengeFinisheds));
            this.setDailyQuest_CompletedDailyChallenge();
          }
        }

        checkInfoDailyChallengeFinished(_infoDay) {
          for (let i = 0; i < this.arrInfoDailyChallengeFinisheds.length; i++) {
            if (this.arrInfoDailyChallengeFinisheds[i].year == _infoDay.year && this.arrInfoDailyChallengeFinisheds[i].month == _infoDay.month && this.arrInfoDailyChallengeFinisheds[i].day == _infoDay.day) {
              return true;
            }
          }

          return false;
        }

        getInfoDay_NextGame() {
          if (this.currInfoDaySelect.year == this.currInfoDay.year && this.currInfoDaySelect.month == this.currInfoDay.month) {
            if (this.currInfoDaySelect.day < this.currInfoDay.day) {
              for (let i = this.currInfoDaySelect.day + 1; i <= this.currInfoDay.day; i++) {
                let infoDayCheck = new (_crd && InfoDay === void 0 ? (_reportPossibleCrUseOfInfoDay({
                  error: Error()
                }), InfoDay) : InfoDay)(i, this.currInfoDaySelect.month, this.currInfoDaySelect.year);

                if (this.checkInfoDailyChallengeFinished(infoDayCheck)) {
                  return infoDayCheck;
                }
              }
            }
          }

          if (this.currInfoDaySelect.year == this.currInfoDay.year && this.currInfoDaySelect.month < this.currInfoDay.month) {
            let monthCheck = this.currInfoDaySelect.month;
            let countInMonthCheck = this.getDaysInMonth(monthCheck, this.currInfoDaySelect.year);

            for (let i = this.currInfoDaySelect.day + 1; i < countInMonthCheck; i++) {
              let infoDayCheck = new (_crd && InfoDay === void 0 ? (_reportPossibleCrUseOfInfoDay({
                error: Error()
              }), InfoDay) : InfoDay)(i, monthCheck, this.currInfoDaySelect.year);

              if (this.checkInfoDailyChallengeFinished(infoDayCheck)) {
                return infoDayCheck;
              }
            }

            for (let i = this.currInfoDaySelect.month + 1; i < this.currInfoDay.month; i++) {
              let monthCheck = i;
              let countInMonthCheck = this.getDaysInMonth(monthCheck, this.currInfoDaySelect.year);

              for (let j = 0; j < countInMonthCheck; j++) {
                let infoDayCheck = new (_crd && InfoDay === void 0 ? (_reportPossibleCrUseOfInfoDay({
                  error: Error()
                }), InfoDay) : InfoDay)(j, monthCheck, this.currInfoDaySelect.year);

                if (this.checkInfoDailyChallengeFinished(infoDayCheck)) {
                  return infoDayCheck;
                }
              }
            }
          }

          if (this.currInfoDaySelect.year == this.currInfoDay.year && this.currInfoDaySelect.month == this.currInfoDay.month) {
            if (this.currInfoDaySelect.day > 0) {
              for (let i = this.currInfoDaySelect.day - 1; i >= 0; i--) {
                let infoDayCheck = new (_crd && InfoDay === void 0 ? (_reportPossibleCrUseOfInfoDay({
                  error: Error()
                }), InfoDay) : InfoDay)(i, this.currInfoDaySelect.month, this.currInfoDaySelect.year); // console.log(infoDayCheck);

                if (this.checkInfoDailyChallengeFinished(infoDayCheck)) {
                  return infoDayCheck;
                }
              }
            }
          }

          let currYear = this.currInfoDay.year;
          let currMonth = this.currInfoDay.month;

          for (let i = this.currInfoDay.day; i >= 0; i--) {
            let infoDayCheck = new (_crd && InfoDay === void 0 ? (_reportPossibleCrUseOfInfoDay({
              error: Error()
            }), InfoDay) : InfoDay)(i, currMonth, currYear);

            if (this.checkInfoDailyChallengeFinished(infoDayCheck)) {
              return infoDayCheck;
            }
          }

          let prevMonth = this.currInfoDay.month - 1;

          if (prevMonth >= 0) {
            let monthCheck = prevMonth;
            let countInMonthCheck = this.getDaysInMonth(monthCheck, currYear);

            for (let i = countInMonthCheck - 1; i >= 0; i--) {
              let infoDayCheck = new (_crd && InfoDay === void 0 ? (_reportPossibleCrUseOfInfoDay({
                error: Error()
              }), InfoDay) : InfoDay)(i, monthCheck, currYear);

              if (this.checkInfoDailyChallengeFinished(infoDayCheck)) {
                return infoDayCheck;
              }
            }
          }

          return null;
        }

        getDaysInMonth(month, year) {
          // console.log("getDaysInMonth year:"+year+" month:"+month);
          return new Date(year, month + 1, 0).getDate();
        }

        getStrInfoDay(infoDay) {
          let strInfo = "";

          if (infoDay.day < 10) {
            strInfo += "0" + infoDay.day;
          } else {
            strInfo += infoDay.day;
          }

          if (infoDay.month < 10) {
            strInfo += "0" + infoDay.month;
          } else {
            strInfo += infoDay.month;
          }

          strInfo += infoDay.year;
          return strInfo;
        }

        getInfoDayStr(infoDay) {
          return infoDay.year + "-" + infoDay.month + "-" + infoDay.day;
        }

        getInfoDayStr_2(infoDay) {
          return infoDay.year + "-" + localConfig.instance.getStrTime(infoDay.month + 1) + "-" + localConfig.instance.getStrTime(infoDay.day);
        }

        getStrTime(time) {
          if (time < 10) {
            return "0" + time;
          }

          return time;
        }

        getStrInfoMonthReward(arrInfoMonthRewards) {
          let strDataInfoMonthReward = "";

          for (let i = 0; i < arrInfoMonthRewards.length; i++) {
            let infoMonthReward = arrInfoMonthRewards[i];

            if (i == arrInfoMonthRewards.length - 1) {
              strDataInfoMonthReward += infoMonthReward.infoMonth.year + "-" + infoMonthReward.infoMonth.month + "-" + infoMonthReward.indexReward;
            } else {
              strDataInfoMonthReward += infoMonthReward.infoMonth.year + "-" + infoMonthReward.infoMonth.month + "-" + infoMonthReward.indexReward + "|";
            }
          }

          return strDataInfoMonthReward;
        }

        getInfoMonthReward(strDataInfoMonthReward) {
          if (strDataInfoMonthReward == "") return [];
          let arrDataInfoMonthReward = strDataInfoMonthReward.split("|");
          let arrInfoMonthRewards = [];

          for (let i = 0; i < arrDataInfoMonthReward.length; i++) {
            let dataInfoMonthReward = arrDataInfoMonthReward[i].split("-");
            let infoMonthReward = new (_crd && InfoMonthReward === void 0 ? (_reportPossibleCrUseOfInfoMonthReward({
              error: Error()
            }), InfoMonthReward) : InfoMonthReward)(new (_crd && InfoMonth === void 0 ? (_reportPossibleCrUseOfInfoMonth({
              error: Error()
            }), InfoMonth) : InfoMonth)(parseInt(dataInfoMonthReward[1]), parseInt(dataInfoMonthReward[0])), parseInt(dataInfoMonthReward[2]));
            arrInfoMonthRewards.push(infoMonthReward);
          }

          return arrInfoMonthRewards;
        }

        addInfoMonthReward(infoMonth, indexReward) {
          // console.log("addInfoMonthReward infoMonth:"+infoMonth.year+"-"+infoMonth.month+" indexReward:"+indexReward);
          let infoMonthReward = new (_crd && InfoMonthReward === void 0 ? (_reportPossibleCrUseOfInfoMonthReward({
            error: Error()
          }), InfoMonthReward) : InfoMonthReward)(infoMonth, indexReward);

          if (this.arrInfoMonthRewards.indexOf(infoMonthReward) == -1) {
            this.arrInfoMonthRewards.push(infoMonthReward);
          } // console.log(this.getStrInfoMonthReward(this.arrInfoMonthRewards));


          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setDataInfoMonth_Reward(this.getStrInfoMonthReward(this.arrInfoMonthRewards));
        }

        getInfoMonthReward_byInfoMonth(infoMonth) {
          for (let i = 0; i < this.arrInfoMonthRewards.length; i++) {
            let infoMonthReward = this.arrInfoMonthRewards[i];

            if (infoMonthReward.infoMonth.year == infoMonth.year && infoMonthReward.infoMonth.month == infoMonth.month) {
              return infoMonthReward;
            }
          }

          return null;
        }

        checkReceivedInfoMonthReward(infoMonthReward) {
          // console.log("checkReceivedInfoMonthReward infoMonth:"+infoMonthReward.infoMonth.year+"-"+infoMonthReward.infoMonth.month+" indexReward:"+infoMonthReward.indexReward);
          // console.log(this.arrInfoMonthRewards);
          for (let i = 0; i < this.arrInfoMonthRewards.length; i++) {
            let infoMonthReward_2 = this.arrInfoMonthRewards[i];

            if (infoMonthReward_2.infoMonth.year == infoMonthReward.infoMonth.year && infoMonthReward_2.infoMonth.month == infoMonthReward.infoMonth.month && infoMonthReward_2.indexReward == infoMonthReward.indexReward) {
              return true;
            }
          }

          return false;
        }

        setTutLevel5_Finshed() {
          this.isTutLevel5 = true;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_TutLevel5(this.isTutLevel5);
        } //#endregion
        //#region THEME


        getThemeSelected(strThemeSelected) {
          let arrThemeSelected = strThemeSelected.split("|");

          for (let i = 0; i < arrThemeSelected.length; i++) {
            this.arrThemeSelected.push(parseInt(arrThemeSelected[i]));
          } // console.log(this.arrThemeSelected);

        }

        getStrThemeSelected() {
          let strThemeSelected = "";

          for (let i = 0; i < this.arrThemeSelected.length; i++) {
            if (i < this.arrThemeSelected.length - 1) {
              strThemeSelected += this.arrThemeSelected[i] + "|";
            } else {
              strThemeSelected += this.arrThemeSelected[i];
            }
          }

          return strThemeSelected;
        }

        setThemeSelected(themeType, itemID) {
          this.arrThemeSelected[themeType] = itemID;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_ThemeSelected(this.getStrThemeSelected()); // console.log("setThemeSelected000",themeType,itemID);

          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).THEME_SELECTED_UPDATE, themeType, itemID);
        }

        getThemeSelected_byThemeType(themeType) {
          if (themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).TUBE) {
            return 1;
          }

          return this.arrThemeSelected[themeType];
        }

        getThemeUnlocked(strThemeUnlocked) {
          // console.log("getThemeUnlocked",strThemeUnlocked);
          let arrThemeUnlocked = strThemeUnlocked.split("|");

          for (let i = 0; i < arrThemeUnlocked.length; i++) {
            this.mapThemeUnlocked.set(i, []);

            if (arrThemeUnlocked[i].length > 0) {
              let arrUnlocked = arrThemeUnlocked[i].split(",");

              for (let j = 0; j < arrUnlocked.length; j++) {
                this.mapThemeUnlocked.get(i).push(parseInt(arrUnlocked[j]));
              }
            }
          } // console.log(this.mapThemeUnlocked);

        }

        getStrThemeUnlocked_byThemeType(themeType) {
          let strThemeUnlocked = "";
          let arrThemeUnlocked = this.mapThemeUnlocked.get(themeType);

          for (let i = 0; i < arrThemeUnlocked.length; i++) {
            if (i < arrThemeUnlocked.length - 1) {
              strThemeUnlocked += arrThemeUnlocked[i] + ",";
            } else {
              strThemeUnlocked += arrThemeUnlocked[i];
            }
          }

          return strThemeUnlocked;
        }

        getStrThemeUnlocked() {
          let strThemeUnlocked = this.getStrThemeUnlocked_byThemeType((_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).TUBE) + "|" + this.getStrThemeUnlocked_byThemeType((_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).BG) + "|" + this.getStrThemeUnlocked_byThemeType((_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).SKIN);
          return strThemeUnlocked;
        }

        setThemeUnlocked(themeType, itemID) {
          // console.log("setThemeUnlocked",themeType,itemID);
          if (!this.mapThemeUnlocked.has(themeType)) {
            this.mapThemeUnlocked.set(themeType, []);
          }

          this.mapThemeUnlocked.get(themeType).push(itemID); // console.log(this.mapThemeUnlocked);
          // console.log(this.getStrThemeUnlocked());

          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_ThemeUnlocked(this.getStrThemeUnlocked());
        }

        checkThemeUnlocked(themeType, itemID) {
          // console.log(this.mapThemeUnlocked);
          if (!this.mapThemeUnlocked.has(themeType)) {
            return false;
          }

          let arrThemeUnlocked = this.mapThemeUnlocked.get(themeType);

          if (arrThemeUnlocked.indexOf(itemID) > -1) {
            return true;
          }

          return false;
        }

        getThemePath_byItemID(themeType, itemID) {
          if (themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).TUBE) {
            return "theme/tube/" + itemID;
          } else if (themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).BG) {
            return "theme/bg/" + itemID;
          } else if (themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).SKIN) {
            return "theme/skin/" + itemID;
          }
        } //#endregion
        //#region SKIN


        getSkinInfo(skinID) {
          for (let i = 0; i < this.arrSkinInfos.length; i++) {
            let skinInfo = this.arrSkinInfos[i];

            if (skinInfo.id == skinID) {
              return skinInfo;
            }
          }

          return null;
        } //#endregion
        //#region UNLOCK PROGRESS


        initUnlockProgressInfos() {
          for (let i = 0; i < this.arrUnlockProgressInfos.length; i++) {
            if (this.arrUnlockProgressInfos[i].type == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
              error: Error()
            }), THEME_TYPE) : THEME_TYPE).TUBE) {
              this.arrUnlockProgressInfo_Tubes.push(this.arrUnlockProgressInfos[i]);
            } else if (this.arrUnlockProgressInfos[i].type == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
              error: Error()
            }), THEME_TYPE) : THEME_TYPE).BG) {
              this.arrUnlockProgressInfo_BGs.push(this.arrUnlockProgressInfos[i]);
            }
          } // console.log(this.arrUnlockProgressInfo_Tubes);
          // console.log(this.arrUnlockProgressInfo_BGs);

        }

        getUnlockProgressInfo_byThemeType(themeType, itemID) {
          if (themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).TUBE) {
            for (let i = 0; i < this.arrUnlockProgressInfo_Tubes.length; i++) {
              if (this.arrUnlockProgressInfo_Tubes[i].itemID == itemID) {
                return this.arrUnlockProgressInfo_Tubes[i];
              }
            }
          } else if (themeType == (_crd && THEME_TYPE === void 0 ? (_reportPossibleCrUseOfTHEME_TYPE({
            error: Error()
          }), THEME_TYPE) : THEME_TYPE).BG) {
            for (let i = 0; i < this.arrUnlockProgressInfo_BGs.length; i++) {
              if (this.arrUnlockProgressInfo_BGs[i].itemID == itemID) {
                return this.arrUnlockProgressInfo_BGs[i];
              }
            }
          }

          return null;
        }

        getUnlockProgressInfo_Tubes_byLevel(level) {
          let currUnlockProgressInfo = null;
          let nextUnlockProgressInfo = null;

          for (let i = 0; i < this.arrUnlockProgressInfo_Tubes.length; i++) {
            if (this.arrUnlockProgressInfo_Tubes[i].level >= level) {
              currUnlockProgressInfo = this.arrUnlockProgressInfo_Tubes[i - 1];
              nextUnlockProgressInfo = this.arrUnlockProgressInfo_Tubes[i];
              return [currUnlockProgressInfo, nextUnlockProgressInfo];
            }
          }

          return null;
        }

        checkUnlockProgressInfo_Tubes_Available(level) {
          let maxLevelUnlockProgressTubes = this.arrUnlockProgressInfo_Tubes[this.arrUnlockProgressInfo_Tubes.length - 1].level;

          if (level >= maxLevelUnlockProgressTubes) {
            return false;
          }

          return true;
        }

        getUnlockProgressInfo_BGs_byLevel(level) {
          let currUnlockProgressInfo = null;
          let nextUnlockProgressInfo = null;

          for (let i = 0; i < this.arrUnlockProgressInfo_BGs.length; i++) {
            if (this.arrUnlockProgressInfo_BGs[i].level >= level) {
              currUnlockProgressInfo = this.arrUnlockProgressInfo_BGs[i - 1];
              nextUnlockProgressInfo = this.arrUnlockProgressInfo_BGs[i];
              return [currUnlockProgressInfo, nextUnlockProgressInfo];
            }
          }

          return null;
        }

        checkUnlockProgressInfo_BGs_Available(level) {
          let maxLevelUnlockProgressTubes = this.arrUnlockProgressInfo_BGs[this.arrUnlockProgressInfo_BGs.length - 1].level;

          if (level >= maxLevelUnlockProgressTubes) {
            return false;
          }

          return true;
        } //#endregion
        //#region CHESTS


        getChests_GroupRewardDataInfo_byIndex(index) {
          return this.arrChests_GroupRewardDataInfos[index % this.arrChests_GroupRewardDataInfos.length];
        }

        getChests_CountLevelUnlock(level) {
          if (level < 9) return 5;
          return 8;
        }

        getChestProgress_byLevel(level) {
          if (level < 9) {
            let progress = (level - 3) % 5;
            if (progress == 0) return 5;else return progress;
          } else {
            let progress = (level - 8) % 8;
            if (progress == 0) return 8;
            return (level - 8) % 8;
          }
        }

        getChestIndex_byLevel(level) {
          if (level < 9) return 0;
          return Math.floor((level - 8) / 8) + 1;
        } //#endregion
        //#region DAILY LOGIN


        setDailyLogin_ReceiveReward() {
          this.currDailyLoginIndex++;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_DailyLoginIndex(this.currDailyLoginIndex);
          this.currDailyLoginLastDay = this.getCurrDay();
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_DailyLoginLastDay(this.currDailyLoginLastDay);
          this.setDailyQuest_ReceiveDailyLoginReward_Finished();
        }

        setDailyLogin_AdReceiveReward() {
          this.currDailyLoginAdLastDay = this.getCurrDay();
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_DailyLoginAdLastDay(this.currDailyLoginAdLastDay);
        }

        getDailyLogin_GroupRewardDataInfo_byIndex(index) {
          return this.arrDailyLogin_GroupRewardDataInfos[index];
        } //#endregion
        //#region DAILY QUEST


        getDailyQuestDataInfo_byID(idQuest) {
          for (let i = 0; i < this.arrDailyQuestDataInfos.length; i++) {
            if (this.arrDailyQuestDataInfos[i].id == idQuest) {
              return this.arrDailyQuestDataInfos[i];
            }
          }

          return null;
        }

        getDailyQuest_GroupRewardDataInfo_byIndex(indexBoxReward) {
          return this.arrDailyQuest_GroupRewardDataInfos[indexBoxReward - 1];
        }

        getStrDailyQuestData() {
          return this.dailyQuest_Login + "|" + this.dailyQuest_Win + "|" + this.dailyQuest_WinStreak + "|" + this.dailyQuest_WinMaxStreak + "|" + this.dailyQuest_Tournament + "|" + this.dailyQuest_DailyChallenge + "|" + this.dailyQuest_Booster;
        }

        resetDailyQuestData() {
          this.dailyQuest_Login = 0;
          this.dailyQuest_Win = 0;
          this.dailyQuest_WinStreak = 0;
          this.dailyQuest_WinMaxStreak = 0;
          this.dailyQuest_Tournament = 0;
          this.dailyQuest_DailyChallenge = 0;
          this.dailyQuest_Booster = 0;
          this.dailyQuest_LastDay = this.getCurrDay();
          this.arrDailyQuest_Receives = [];
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_DailyQuestLastDay(this.dailyQuest_LastDay);
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_DailyQuestData(this.getStrDailyQuestData());
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_DailyQuestReceives(this.arrDailyQuest_Receives);
        }

        initDailyQuestData(strDailyQuestData) {
          if (strDailyQuestData == "") return;
          if (strDailyQuestData.indexOf("|") == -1) return;
          let arrData = strDailyQuestData.split("|");

          if (arrData[0]) {
            this.dailyQuest_Login = parseInt(arrData[0]);
          }

          if (arrData[1]) {
            this.dailyQuest_Win = parseInt(arrData[1]);
          }

          if (arrData[2]) {
            this.dailyQuest_WinStreak = parseInt(arrData[2]);
          }

          if (arrData[3]) {
            this.dailyQuest_WinMaxStreak = parseInt(arrData[3]);
          }

          if (arrData[4]) {
            this.dailyQuest_Tournament = parseInt(arrData[4]);
          }

          if (arrData[5]) {
            this.dailyQuest_DailyChallenge = parseInt(arrData[5]);
          }

          if (arrData[6]) {
            this.dailyQuest_Booster = parseInt(arrData[6]);
          }
        }

        setDailyQuest_ReceiveDailyLoginReward_Finished() {
          this.dailyQuest_Login = 1;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_DailyQuestData(this.getStrDailyQuestData());
        }

        setDailyQuest_AddWin() {
          this.dailyQuest_Win++;
          this.dailyQuest_WinStreak++;

          if (this.dailyQuest_WinStreak > this.dailyQuest_WinMaxStreak) {
            this.dailyQuest_WinMaxStreak = this.dailyQuest_WinStreak;
          }

          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_DailyQuestData(this.getStrDailyQuestData());
        }

        setDailyQuest_CompletedTournament() {
          this.dailyQuest_Tournament++;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_DailyQuestData(this.getStrDailyQuestData());
        }

        setDailyQuest_CompletedDailyChallenge() {
          this.dailyQuest_DailyChallenge = 1;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_DailyQuestData(this.getStrDailyQuestData());
        }

        setDailyQuest_UseBooster() {
          this.dailyQuest_Booster++;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_DailyQuestData(this.getStrDailyQuestData());
        }

        getDailyQuestProgress_byID(idQuest) {
          if (idQuest == 1) {
            return this.dailyQuest_Login;
          } else if (idQuest == 2 || idQuest == 3 || idQuest == 4 || idQuest == 5) {
            return this.dailyQuest_Win;
          } else if (idQuest == 6) {
            return this.dailyQuest_Tournament;
          } else if (idQuest == 7) {
            return this.dailyQuest_DailyChallenge;
          } else if (idQuest == 8 || idQuest == 9 || idQuest == 10) {
            return this.dailyQuest_Booster;
          }
        }

        setDailyQuestReceive_byID(idQuest) {
          this.arrDailyQuest_Receives.push(idQuest);
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_DailyQuestReceives(this.arrDailyQuest_Receives);
        }

        checkDailyQuestReceive_byID(idQuest) {
          return this.arrDailyQuest_Receives.indexOf(idQuest) > -1;
        }

        getDailyQuest_BoxRewadValue_byIndexBox(indexBox) {
          return indexBox * 20;
        } //#endregion
        //#region AVATARS


        getWorldContextID_byWeek(indexWeek) {
          return (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PGS_GAMEID + "_week_" + indexWeek;
        }

        getLeaderBoardMyScore_byID(leaderboardId) {
          if (this.mapLeaderBoard_MyScores.has(leaderboardId)) {
            return this.mapLeaderBoard_MyScores.get(leaderboardId);
          }

          return 0;
        }

        setLeaderBoardMyScore_byID(leaderboardId, score) {
          this.mapLeaderBoard_MyScores.set(leaderboardId, score);
        }

        getLeaderBoardMyScore_byTournamentID(tournamentId) {
          if (this.mapLeaderBoard_MyScores.has(tournamentId)) {
            return this.mapLeaderBoard_MyScores.get(tournamentId);
          }

          return 0;
        }

        setLeaderBoardMyScore_byTournamentID(tournamentId, score) {
          this.mapLeaderBoard_MyScores.set(tournamentId, score);
        } // getFriendContextID_byWeek(indexWeek:number){
        //     return "friend_"+indexWeek%20;
        // }


        getLeaderBoardDataInfo_byContextID(contextID) {
          for (let i = 0; i < this.arrLeaderBoardDataInfos.length; i++) {
            if (this.arrLeaderBoardDataInfos[i].contextId == contextID) {
              return this.arrLeaderBoardDataInfos[i];
            }
          }

          return null;
        }

        getListItemRankInfos_byLeaderboardId(leaderboardId) {
          if (this.mapLeaderBoard_ItemRankInfos.has(leaderboardId)) {
            return this.mapLeaderBoard_ItemRankInfos.get(leaderboardId).filter(item => item.userScore > 0);
          }

          return [];
        } //#region 


        getBoosterType_byshopItemType(shopItemType) {
          switch (shopItemType) {
            case (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
              error: Error()
            }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).BOOSTER_UNDO:
              //4
              return (_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
                error: Error()
              }), BOOSTER_TYPE) : BOOSTER_TYPE).UNDO;

            case (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
              error: Error()
            }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).BOOSTER_SUGGEST:
              //5
              return (_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
                error: Error()
              }), BOOSTER_TYPE) : BOOSTER_TYPE).SUGGEST;

            case (_crd && SHOP_ITEM_TYPE === void 0 ? (_reportPossibleCrUseOfSHOP_ITEM_TYPE({
              error: Error()
            }), SHOP_ITEM_TYPE) : SHOP_ITEM_TYPE).BOOSTER_ADDCOL:
              //6
              return (_crd && BOOSTER_TYPE === void 0 ? (_reportPossibleCrUseOfBOOSTER_TYPE({
                error: Error()
              }), BOOSTER_TYPE) : BOOSTER_TYPE).ADDCOL;
          }

          return null;
        } //#region TOURNAMENT


        //#endregion
        ordinal_suffix_of(i) {
          let j = i % 10;
          let k = i % 100;

          if (j == 1 && k != 11) {
            return i + "st";
          }

          if (j == 2 && k != 12) {
            return i + "nd";
          }

          if (j == 3 && k != 13) {
            return i + "rd";
          }

          return i + "th";
        }

        getStrRaceInfoDatas() {
          return this.raceActive + "|" + this.raceLastTime + "|" + this.raceFinishedTime + "|" + this.raceScore + "|" + this.raceRewardFinished;
        }

        setRaceInfoDatas(datas) {
          if (datas.length > 0) {
            let arrDatas = datas.split("|");
            this.raceActive = parseInt(arrDatas[0]);
            this.raceLastTime = parseInt(arrDatas[1]);
            this.raceFinishedTime = parseInt(arrDatas[2]);
            this.raceScore = parseInt(arrDatas[3]);
            this.raceRewardFinished = parseInt(arrDatas[4]);
          }
        }

        setStartRace() {
          this.raceActive = 1;
          this.raceLastTime = this.getCurrTime();
          this.raceScore = 0;
          this.raceRewardFinished = 0;
          this.arrPlayerRaceDataInfos = [];
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_RaceInfos(this.getStrRaceInfoDatas());
          let arrPlayerTops = (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
            error: Error()
          }), lodash) : lodash).cloneDeep(localConfig.instance.arrTopPlayers);

          if (arrPlayerTops.length > 4) {} else {
            let arrDefault_Names = (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).cloneDeep(localConfig.instance.arrDefault_Names);
            let arrAvatars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

            for (let i = 0; i < 4; i++) {
              let itemRankInfo = new (_crd && ItemRankInfo === void 0 ? (_reportPossibleCrUseOfItemRankInfo({
                error: Error()
              }), ItemRankInfo) : ItemRankInfo)();
              let indexName = (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
                error: Error()
              }), lodash) : lodash).random(0, arrDefault_Names.length - 1);
              let indexAvatar = (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
                error: Error()
              }), lodash) : lodash).random(0, arrAvatars.length - 1);
              itemRankInfo.userName = arrDefault_Names[indexName];
              itemRankInfo.avatarType = (_crd && AVATAR_TYPE === void 0 ? (_reportPossibleCrUseOfAVATAR_TYPE({
                error: Error()
              }), AVATAR_TYPE) : AVATAR_TYPE).TYPE_LOCAL;
              itemRankInfo.avatarURL = arrAvatars[indexAvatar].toString();
              itemRankInfo.playerID = "" + indexAvatar;
              arrDefault_Names.splice(indexName, 1);
              arrAvatars.splice(indexAvatar, 1);
              arrPlayerTops.push(itemRankInfo);
            }
          }

          for (let i = 0; i < 4; i++) {
            let raceOpponent = new (_crd && PlayerRaceDataInfo === void 0 ? (_reportPossibleCrUseOfPlayerRaceDataInfo({
              error: Error()
            }), PlayerRaceDataInfo) : PlayerRaceDataInfo)(); //PlayerRaceDataInfo

            let indexRankInfo = (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).random(0, arrPlayerTops.length - 1);
            let itemRankInfo = arrPlayerTops[indexRankInfo];
            raceOpponent.userName = itemRankInfo.userName;
            raceOpponent.avatarType = itemRankInfo.avatarType;
            raceOpponent.avatarURL = itemRankInfo.avatarURL;
            raceOpponent.playerID = itemRankInfo.playerID;
            raceOpponent.raceSkinID = (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).random(1, 12);
            let countTime = 0;

            for (let j = 0; j < 10; j++) {
              countTime += (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
                error: Error()
              }), lodash) : lodash).random(2 * 60, 6 * 60);
              raceOpponent.arrTimes.push(countTime);
            }

            this.arrPlayerRaceDataInfos.push(raceOpponent);
            arrPlayerTops.splice(indexRankInfo, 1);
          } // console.log(this.arrPlayerRaceDataInfos);


          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_RaceOpponents(this.arrPlayerRaceDataInfos);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUBERACE_UPDATE);
        }

        getRaceScore_Opponent(timePlayed, arrTimes) {
          for (let i = 0; i < arrTimes.length; i++) {
            if (timePlayed < arrTimes[i]) {
              return i;
            }
          }

          return 10;
        }

        updateRaceLastTime() {
          this.raceLastTime = this.getCurrTime();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUBERACE_UPDATE);
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_RaceInfos(this.getStrRaceInfoDatas());
        }

        updateRaceFinished() {
          this.raceFinishedTime = this.getCurrTime();
          this.raceScore = 10;
          this.raceActive = 1;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_RaceInfos(this.getStrRaceInfoDatas());
        }

        resetRaceDatas() {
          this.isInitRaceGroup = false;
          this.raceActive = 0;
          this.raceLastTime = 0;
          this.raceScore = 0;
          this.raceRewardFinished = 0;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_RaceInfos(this.getStrRaceInfoDatas());
          this.arrPlayerRaceDataInfos = [];
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_RaceOpponents(this.arrPlayerRaceDataInfos);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUBERACE_UPDATE);
        }

        checkRaceFinished() {
          if (this.raceActive == 0) return false;
          if (this.raceScore >= 10) return true;
          if (this.raceLastTime + this.RACE_TIME < this.getCurrTime()) return true;
          let countOppoent_Finished = 0;
          let timePlayed = this.getCurrTime() - this.raceLastTime;

          for (let i = 0; i < this.arrPlayerRaceDataInfos.length; i++) {
            let scoreOpponent = this.getRaceScore_Opponent(timePlayed, this.arrPlayerRaceDataInfos[i].arrTimes);
            if (scoreOpponent >= 10) countOppoent_Finished++;
          }

          if (countOppoent_Finished >= 3) return true;
          return false;
        }

        addRaceScore() {
          if (this.currLevelUnlock < this.RACE_LEVEL_UNLOCK) {
            return;
          }

          if (this.raceActive == 0) return;
          this.raceScore++;

          if (this.raceScore >= 10) {
            this.updateRaceFinished();
          }

          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).TUBERACE_UPDATE);
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_RaceInfos(this.getStrRaceInfoDatas());
        }

        //#endregion
        //#region CHARACTER
        getStrAnimationIdle_byID(id) {
          return "idle_character" + id;
        }

        getStrAnimationRun_byID(id) {
          return "run_character" + id;
        }

        getStrAnimationAppear_byID(id) {
          return "appear_character" + id;
        }

        getStrAnimationDance_byID(id) {
          return "dance_character" + id;
        }

        getStrAnimationJump_byID(id, isJumpRight) {
          if (isJumpRight) {
            return "jumd_R_character" + id;
          } else {
            return "jumd_L_character" + id;
          }
        } //#endregion
        //#region PASS


        setMassterPassTutorialFinished() {
          this.passTutorial = true;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_MasterPassTutorial();
        }

        getStrPassDataInfos() {
          return this.passLevelWin + "#" + this.getStrPassFreeClaims() + "#" + this.getStrPassMasterClaims() + "#" + this.passLastTime;
        }

        getStrPassFreeClaims() {
          let strFree = "";

          for (let i = 0; i < this.arrPassFreeClaims.length; i++) {
            if (i < this.arrPassFreeClaims.length - 1) {
              strFree += this.arrPassFreeClaims[i] + "|";
            } else {
              strFree += this.arrPassFreeClaims[i];
            }
          }

          return strFree;
        }

        getStrPassMasterClaims() {
          let strMaster = "";

          for (let i = 0; i < this.arrPassMasterClaims.length; i++) {
            if (i < this.arrPassMasterClaims.length - 1) {
              strMaster += this.arrPassMasterClaims[i] + "|";
            } else {
              strMaster += this.arrPassMasterClaims[i];
            }
          }

          return strMaster;
        }

        setPassDataInfos(strPassDataInfos) {
          if (strPassDataInfos == "") {
            this.activeNewPassDataInfos();
            return;
          }

          let arrPassDataInfos = strPassDataInfos.split("#");
          this.passLevelWin = parseInt(arrPassDataInfos[0]); // this.passLevelWin = 3;

          this.arrPassFreeClaims = [];

          if (arrPassDataInfos[1].length > 0) {
            for (let i = 0; i < arrPassDataInfos[1].split("|").length; i++) {
              this.arrPassFreeClaims.push(parseInt(arrPassDataInfos[1].split("|")[i]));
            }
          }

          this.arrPassMasterClaims = [];

          if (arrPassDataInfos[2].length > 0) {
            for (let i = 0; i < arrPassDataInfos[2].split("|").length; i++) {
              this.arrPassMasterClaims.push(parseInt(arrPassDataInfos[2].split("|")[i]));
            }
          }

          this.passLastTime = parseInt(arrPassDataInfos[3]);
          this.setIndexPassAvailable();
          let currTime = this.getCurrTime();

          if (currTime - this.passLastTime > this.PASS_TIME + this.PASS_TIME_CLAIM) {
            this.activeNewPassDataInfos();
          }
        }

        activeNewPassDataInfos() {
          // console.log("activeNewPassDataInfos");
          if (this.currLevelUnlock < this.PASS_LEVEL_UNLOCK) {
            return;
          }

          this.passLevelWin = 0;
          this.arrPassFreeClaims = [];
          this.arrPassMasterClaims = [];
          this.passLastTime = this.getCurrTime();
          this.passActivated = false;
          this.passIndexAvailable = 0;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_MasterPassInfos(this.getStrPassDataInfos());
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_MasterPassActivated(this.passActivated);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PASS_UPDATE);
        }

        addPassLevel() {
          if (this.currLevelUnlock < this.PASS_LEVEL_UNLOCK) {
            return;
          }

          if (this.passLastTime + this.PASS_TIME < this.getCurrTime()) return;
          this.passLevelWin += 1;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_MasterPassInfos(this.getStrPassDataInfos());
          this.setIndexPassAvailable();
        }

        addPassFreeClaim(indexPass) {
          if (this.arrPassFreeClaims.indexOf(indexPass) == -1) {
            this.arrPassFreeClaims.push(indexPass);
          }

          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_MasterPassInfos(this.getStrPassDataInfos());
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PASS_UPDATE);
        }

        addPassMasterClaim(indexPass) {
          if (this.arrPassMasterClaims.indexOf(indexPass) == -1) {
            this.arrPassMasterClaims.push(indexPass);
          }

          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_MasterPassInfos(this.getStrPassDataInfos());
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PASS_UPDATE);
        }

        setIndexPassAvailable() {
          let countLevel = this.passLevelWin;

          for (let i = 0; i < this.arrPassRewardDataInfos.length; i++) {
            if (countLevel >= i) {
              countLevel = countLevel - i;
            } else {
              this.passIndexAvailable = i - 1;
              this.passProgess = countLevel;
              this.passCountLevel = i; // console.log("passIndexAvailable:"+this.passIndexAvailable+" passProgess:"+this.passProgess+" passCountLevel:"+this.passCountLevel);

              return;
            }
          }

          if (countLevel > 0) {
            this.passIndexAvailable = this.arrPassRewardDataInfos.length - 1;
            this.passProgess = this.arrPassRewardDataInfos.length;
            this.passCountLevel = this.arrPassRewardDataInfos.length; // console.log("passIndexAvailable:"+this.passIndexAvailable+" passProgess:"+this.passProgess+" passCountLevel:"+this.passCountLevel);
          }

          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PASS_UPDATE);
        }

        setPassActivated() {
          this.passActivated = true;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_MasterPassActivated(this.passActivated);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PASS_UPDATE);
        } //#endregion
        //#region SPIN


        initSpin() {
          this.spinFreeCount = 3;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_SpinFreeCount(this.spinFreeCount);
        }

        setSpinLastTime() {
          this.spinLastTime = this.getCurrDay();
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_SpinLastTime(this.spinLastTime);
        }

        setSpinFreeCount(count) {
          this.spinFreeCount = count;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_SpinFreeCount(this.spinFreeCount);
        }

        checkFreeSpin() {
          if (this.getCurrDay() > this.spinLastTime) {
            return true;
          }

          return false;
        } //#region SPIN


        setResetShopItem_Free() {
          this.arrShopItem_Free = [false, false, false];
        }

        getShopItem_Free_byBoosterType(boosterType) {
          return this.arrShopItem_Free[boosterType];
        }

        setShopItem_Free_byBoosterType(boosterType) {
          this.arrShopItem_Free[boosterType] = true;
        } //#region NEW LEVELs


        getMagicLevelConfigInfo_byLevelIndex(levelIndex) {
          if (levelIndex <= this.arrMagicLevelConfigInfos.length) {
            return this.arrMagicLevelConfigInfos[levelIndex - 1];
          } else {
            let levelIndexLoop = (levelIndex - this.arrMagicLevelConfigInfos.length) % this.arrMagicLoopLevelConfigInfos.length;

            if (levelIndexLoop == 0) {
              levelIndexLoop = this.arrMagicLoopLevelConfigInfos.length;
            } // console.log("levelIndexLoop:"+levelIndexLoop);


            return this.arrMagicLoopLevelConfigInfos[levelIndexLoop - 1];
          }

          return null;
        }

        getMagicLevelConfigInfo(magicLevelDataInfo) {
          this.mapMagicColorIndex.clear();
          this.mapMagicCountColbyIndexY.clear(); // let minPosX:number = 999;

          let minPosY = 999; // let maxPosX:number = -999;

          let maxPosY = -999;

          for (let i = 0; i < magicLevelDataInfo.B.length; i++) {
            // if(minPosX > magicLevelDataInfo.B[i].P.x){
            //     minPosX = magicLevelDataInfo.B[i].P.x;
            // }
            // if(maxPosX < magicLevelDataInfo.B[i].P.x){
            //     maxPosX = magicLevelDataInfo.B[i].P.x;
            // }
            if (minPosY > magicLevelDataInfo.B[i].P.y) {
              minPosY = magicLevelDataInfo.B[i].P.y;
            }

            if (maxPosY < magicLevelDataInfo.B[i].P.y) {
              maxPosY = magicLevelDataInfo.B[i].P.y;
            }
          }

          let KC_X = 999;
          let KC_Y = 999;

          for (let i = 0; i < magicLevelDataInfo.B.length; i++) {
            // if(magicLevelDataInfo.B[i].P.x - minPosX > 0 && magicLevelDataInfo.B[i].P.x - minPosX < KC_X){
            //     KC_X = magicLevelDataInfo.B[i].P.x - minPosX;
            // }
            if (magicLevelDataInfo.B[i].P.y - minPosY > 0 && magicLevelDataInfo.B[i].P.y - minPosY < KC_Y) {
              KC_Y = magicLevelDataInfo.B[i].P.y - minPosY;
            }
          }

          for (let i = 0; i < magicLevelDataInfo.B.length; i++) {
            // magicLevelDataInfo.B[i].indexX = Math.round((magicLevelDataInfo.B[i].P.x - minPosX) / KC_X);
            magicLevelDataInfo.B[i].indexY = Math.round((magicLevelDataInfo.B[i].P.y - minPosY) / KC_Y);
          } // magicLevelDataInfo.maxCol = Math.round((maxPosX - minPosX) / KC_X) + 1;


          magicLevelDataInfo.maxRow = Math.round((maxPosY - minPosY) / KC_Y) + 1;
          let currIndexY = -1;
          let currIndexX = -1;
          let maxIndexX = -1;

          for (let i = 0; i < magicLevelDataInfo.B.length; i++) {
            if (currIndexY != magicLevelDataInfo.B[i].indexY) {
              currIndexY = magicLevelDataInfo.B[i].indexY;
              currIndexX = 0;
              magicLevelDataInfo.B[i].indexX = currIndexX;
            } else {
              currIndexX++;

              if (currIndexX > maxIndexX) {
                maxIndexX = currIndexX;
              }

              this.mapMagicCountColbyIndexY.set(currIndexY, currIndexX + 1);
              magicLevelDataInfo.B[i].indexX = currIndexX;
            }
          }

          magicLevelDataInfo.maxCol = maxIndexX + 1;
          return magicLevelDataInfo;
        }

        getRewardCoinby_LevelConfigInfo(levelConfigInfo) {
          if (levelConfigInfo) {
            if (levelConfigInfo.isSuperHard) {
              return this.REWARD_COIN_DEFAULT * 5;
            } else if (levelConfigInfo.isHard) {
              return this.REWARD_COIN_DEFAULT * 3;
            }
          }

          return this.REWARD_COIN_DEFAULT;
        }

        setMagicMappingColorIndex(magicLevelDataInfo) {
          let arrIndexColors = [];

          for (let i = 0; i < magicLevelDataInfo.B.length; i++) {
            for (let j = 0; j < magicLevelDataInfo.B[i].C.length; j++) {
              if (magicLevelDataInfo.B[i].C[j].BIM) {
                if (arrIndexColors.indexOf(magicLevelDataInfo.B[i].C[j].BIM.CI) == -1) {
                  arrIndexColors.push(magicLevelDataInfo.B[i].C[j].BIM.CI);
                }
              }
            }
          }

          let uniqueCIList = Array.from(arrIndexColors).sort((a, b) => a - b); // console.log(uniqueCIList);

          for (let i = 0; i < uniqueCIList.length; i++) {
            this.mapMagicColorIndex.set(uniqueCIList[i], i);
          } // console.log(this.mapMagicColorIndex);

        }

        initHeartUnlimited() {
          this.currHeartUnlimited_CountTime = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_HeartUnlimited() - (this.getCurrTime() - (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getData_HeartUnlimited_LastTime());

          if (this.currHeartUnlimited_CountTime <= 0) {
            this.currHeartUnlimited_CountTime = 0;
            (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
              error: Error()
            }), configuration) : configuration).instance.setData_HeartUnlimited(this.currHeartUnlimited_CountTime);
            (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
              error: Error()
            }), configuration) : configuration).instance.setData_HeartUnlimited_LastTime(this.getCurrTime());
          }
        } //#endregion
        //#region TUT CURTAIN


        setTutCurtainFinished() {
          this.isTutCurtain = true;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_TutCurtain(this.isTutCurtain);
        } //#endregion
        //#region TUT CLAY


        setTutClayFinished() {
          this.isTutClay = true;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_TutClay(this.isTutClay);
        } //#endregion
        //#region TUT PLASTER


        setTutPlasterFinished() {
          this.isTutPlaster = true;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_TutPlaster(this.isTutPlaster);
        } //#endregion
        //#region LOG SPLASH TIME


        setIAPCount(count) {
          this.iapCount = count;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_IAPCount(this.iapCount);
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logIAPCount(this.iapCount);
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logIsIAPUser(this.getIAPUser());
        }

        getIAPUser() {
          if (this.iapCount > 0) {
            return 1;
          }

          return 0;
        } //#endregion
        //#region LOG WIN,LOSE STREAK 


        setAddWinStreak() {
          this.winStreak++;
          this.loseStreak = 0;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_WinStreak(this.winStreak);
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_LoseStreak(this.loseStreak);
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logWinStreak(this.winStreak);
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logLoseStreak(this.loseStreak);
        }

        setAddLoseStreak() {
          this.winStreak = 0;
          this.loseStreak++;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_WinStreak(this.winStreak);
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setData_LoseStreak(this.loseStreak);
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logWinStreak(this.winStreak);
          (_crd && LogEventManager === void 0 ? (_reportPossibleCrUseOfLogEventManager({
            error: Error()
          }), LogEventManager) : LogEventManager).instance.logLoseStreak(this.loseStreak);
        } //#endregion


        getLevelLoopByFromStr(levelOrder) {
          let strLevel = levelOrder.split("_")[1];
          return parseInt(strLevel);
        }

      }, _defineProperty(_class2, "_instance", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=localConfig.js.map