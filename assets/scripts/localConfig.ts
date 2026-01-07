// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Vec3, Texture2D, ImageAsset, SpriteAtlas, Color, SpriteFrame, Size, director, Director, Sprite, Rect, Vec2, view, sys, log, UITransform, Mat4 } from "cc";
import { clientEvent } from "./framework/clientEvent";
import { configuration } from "./framework/configuration";
import { lodash } from "./framework/lodash";
import { ItemRankInfo } from "./common/ItemRankInfo";
import { FriendAvatarInfo } from "./common/FriendAvatarInfo";
import { AD_END_TYPE, AD_FORMAT_TYPE, AVATAR_TYPE, BOOSTER_TYPE, Constants, ENV_TYPE, GAME_MODE, GAME_STATE, IAP_PLACEMENT_TYPE, IAP_SHOW_TYPE, PLAY_TYPE, SCENE_TYPE, SHOP_ITEM_TYPE, SHOP_PACK_TYPE, THEME_TYPE, TICKET_TYPE, TOURNAMENT_TYPE } from "./framework/constants";
import { ItemTubeConfig } from "./game/info/ItemTubeConfig";
import { ItemWaterConfig } from "./game/info/ItemWaterConfig";
import { ItemTubePolygonConfig } from "./game/info/ItemTubePolygonConfig";
import { InfoDay } from "./common/InfoDay";
import { LevelDataInfo, TubeInfo } from "./game/info/LevelDataInfo";
import { GroupRewardDataInfo, PassRewardDataInfo, RewardDataInfo, ShopDataInfo, SpinRewardDataInfo } from "./game/info/ShopDataInfo";
import { InfoMonthReward } from "./common/InfoMonthReward";
import { InfoMonth } from "./common/InfoMonth";
import { UnlockProgressInfo } from "./game/info/UnlockProgressInfo";
import { SkinInfo } from "./game/info/SkinInfo";
import { QuestDataInfo } from "./game/info/QuestDataInfo";
import { LeaderboardDataInfo } from "./common/LeaderboardDataInfo";
import { TournamentDataInfo } from "./game/info/TournamentDataInfo";
import { PlayerRaceDataInfo } from "./game/race/PlayerRaceDataInfo";
import { FBInstantManager } from "./common/FBInstantManager";
import { WithFriendDataInfo } from "./game/withFriends/WithFriendDataInfo";
import { LevelConfigInfo, LevelConfigInfoModels } from "./newlevel/LevelConfigInfo";
import { MagicBInfo, MagicLevelDataInfo } from "./newlevel/MagicLevelDataInfo";
import { LogEventManager } from "./common/LogEventManager";
import { TournamentPageHostDataInfo } from "./game/info/TournamentPageHostDataInfo";
const { ccclass, property } = _decorator;

@ccclass("localConfig")
export class localConfig {
    /* class member could be defined like this */
    static _instance: localConfig;

    static get instance () {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new localConfig();
        configuration.instance.start();
        return this._instance;
    }

    isLevelEditor:boolean = false;
    //#region FBInstant
    playerID:string;
    envType: ENV_TYPE = ENV_TYPE.TEST_AD;
    FAN_enable: boolean = true;

    //#endregion

    isGetPlayerDataSuccess:boolean = false;
    isGetPayloadDataSuccess:boolean = false;
    isGetRemoteConfigDataSuccess:boolean = false;

    arrConnectedPlayerInfos:FriendAvatarInfo[] = [];

    getFriendAvatarInfo_byIDPlayer(idPlayer:string){
        for(let i=0; i< this.arrConnectedPlayerInfos.length;i++){
            let friendAvatarInfo:FriendAvatarInfo = this.arrConnectedPlayerInfos[i];
            if(friendAvatarInfo.id == idPlayer){
                return friendAvatarInfo;
            }
        }
        return null;
    }

    getFriendAvatarInfo(idFB:string){
        for(let i=0; i< this.arrConnectedPlayerInfos.length;i++){
            if(this.arrConnectedPlayerInfos[i].id == idFB){
                return this.arrConnectedPlayerInfos[i];
            }
        }
        return null;
    }

    checkIsMyFriend(idFB:string){
        for(let i=0; i< this.arrConnectedPlayerInfos.length;i++){
            if(this.arrConnectedPlayerInfos[i].id == idFB){
                return true;
            }
        }
        return false;
    }

    currGameState:GAME_STATE = GAME_STATE.PRE_START;
    currGameMode:GAME_MODE = GAME_MODE.NORMAL;



    myAvatarImageAsset:ImageAsset = null;
    myAvatarSpriteFrame: SpriteFrame = null;

    //#region SOUND,MUSIC
    isSound:boolean = true;
    isMusic:boolean = false;
    isVibration:boolean = false;
    isTops:boolean = true;


    setSound(isSound:boolean){
        this.isSound = isSound;
        configuration.instance.setData_Sound(this.isSound);
    }
    setMusic(isMusic:boolean){
        this.isMusic = isMusic;
        configuration.instance.setData_Music(this.isMusic);
    }
    setVibration(isVibration:boolean){
        this.isVibration = isVibration;
        configuration.instance.setData_Vibration(this.isVibration);
    }

    setTops(isTops:boolean){
        this.isTops = isTops;
        configuration.instance.setData_Tops(this.isTops);
    }
    //#endregion

    currCoin:number = 0;
    //#region COIN
    setCoin(count:number){
        this.currCoin = count;
        
        configuration.instance.setGlobalData_COIN(this.currCoin);
        clientEvent.dispatchEvent(Constants.COIN_UPDATE);

        LogEventManager.instance.logBalanceCoin(this.currCoin);
    }
    generateListCoinValue_fromTotalCoin(totalCoin:number,count:number){
        let listCoinValue:number[] = [];
        if(totalCoin < count){
            for(let i=0; i< totalCoin;i++){
                listCoinValue.push(1);
            }
        }else{
            let value1:number = Math.floor(totalCoin / count);
            let value2:number = value1 + 1;
            let countValue2 = totalCoin - value1 * count;

            for(let i=0; i< count;i++){
                if(i < countValue2){
                    listCoinValue.push(value2);
                }else{
                    listCoinValue.push(value1);
                }
            }
        }

        return listCoinValue;
    }
    //#endregion

    //#region TIME_NEXT_DAY
    getTimeToNextDay(){
        let currDate = new Date();
        //console.log("getTimeToNextDaygetTimeToNextDaygetTimeToNextDay");
        //console.log(currDate.getTime());
        let lastDate = new Date(currDate.getFullYear(),currDate.getMonth(),currDate.getDate());
        //console.log(lastDate.getTime());

        return  Math.floor((lastDate.getTime() - currDate.getTime()) /1000) + 86400;
    }

    getTimeToNextWeek(){
        let currDate = new Date();
        //console.log("getTimeToNextDaygetTimeToNextDaygetTimeToNextDay");
        //console.log(currDate.getTime());
        let lastDate = new Date(currDate.getFullYear(),currDate.getMonth(),currDate.getDate() - currDate.getDay() + 7);
        //console.log(lastDate.getTime());

        return  Math.floor((lastDate.getTime() - currDate.getTime()) /1000) + 86400;
    }

    getStartTimeWeek(){
        let currDate = new Date();
        //console.log("getTimeToNextDaygetTimeToNextDaygetTimeToNextDay");
        //console.log(currDate.getTime());
        let startWeekDate = new Date(currDate.getFullYear(),currDate.getMonth(),currDate.getDate() - currDate.getDay() + 1);
        //console.log(lastDate.getTime());

        return  Math.floor(startWeekDate.getTime() /1000);
    }
    //#endregion


    //#region 
    getCurrDay(){
        let date = new Date();
        let currDay = date.getFullYear() * 10000 + date.getMonth() * 100+ date.getDate();
        return currDay;
    }

    getCurrTime(){
        let date = new Date();
        return Math.floor(date.getTime()/1000);
    }
    //#endregion

    
    //#region LOG EVENT
    log_CAMP_ID:string = "";
    log_ADSET_ID:string = "";
    log_ADS_ID:string = "";

    isPaidUser:boolean = false;
    

    campID_session:string = "";
    adsetID_session:string = "";
    adsID_session:string = "";

    checkCampID(campID:string){
        return this.log_CAMP_ID == campID;
    }

    addCampID(campID:string){
        this.log_CAMP_ID = campID;
        configuration.instance.setData_CampID(this.log_CAMP_ID);
    }

    checkAdsetID(adsetID:string){
        return this.log_ADSET_ID == adsetID;
    }

    addAdsetID(adsetID:string){
        this.log_ADSET_ID = adsetID;
        configuration.instance.setData_AdsetID(this.log_ADSET_ID);
    }

    checkAdsID(adsID:string){
        return this.log_ADS_ID == adsID;
    }

    addAdsID(adsID:string){
        this.log_ADS_ID = adsID;
        configuration.instance.setData_AdsID(this.log_ADS_ID);
    }

    log_TOUR_ID:string = "";
    tourID_session:string = "";

    checkTourID(tourID:string){
        return this.log_TOUR_ID == tourID;
    }

    addTourID(tourID:string){
        this.log_TOUR_ID = tourID;
        configuration.instance.setData_TourID(this.log_TOUR_ID);
    }

    //#endregion

    updatePlayerData_Finished(){
        localConfig.instance.initCurrInfoDay();
        localConfig.instance.initCurrWeek();

        // console.log("updatePlayerData_FinishedupdatePlayerData_Finished");
        localConfig.instance.isSound  = configuration.instance.getData_Sound() == 1;
        localConfig.instance.isMusic  = configuration.instance.getData_Music() == 1;
        // localConfig.instance.isVibration  = configuration.instance.getData_Vibration() == 1;
        localConfig.instance.isVibration  = false;
        localConfig.instance.isTops  = configuration.instance.getData_Tops();

        localConfig.instance.currCoin = configuration.instance.getGlobalData_COIN();
        // localConfig.instance.currLevel = configuration.instance.getData_LevelUnlock();
        localConfig.instance.currLevelUnlock = configuration.instance.getData_LevelUnlock();
        // localConfig.instance.currLevelUnlock = 104;
        // localConfig.instance.currLevelUnlock = 105;
        // console.log(localConfig.instance.currLevelUnlock);
        
        localConfig.instance.isTutLevel5 = configuration.instance.getData_TutLevel5() == 1;

        localConfig.instance.arrBoosterCount = configuration.instance.getData_BoosterCount();
        // localConfig.instance.arrBoosterCount = [99,99,9];

        localConfig.instance.getThemeSelected(configuration.instance.getData_ThemeSelected());
        // localConfig.instance.setThemeSelected(THEME_TYPE.TUBE,11);

        localConfig.instance.getThemeUnlocked(configuration.instance.getData_ThemeUnlocked());

        localConfig.instance.arrTickets = configuration.instance.getData_Ticket();
        
        localConfig.instance.isRemoveAd = configuration.instance.getData_RemoveAd();
        localConfig.instance.isIAPStarterPack = configuration.instance.getData_IAPStarterPack();
        localConfig.instance.shop_free_lastTime = configuration.instance.getData_ShopFreeLastTime();

        localConfig.instance.vipLastDayReward = configuration.instance.getData_VipLastDay_Reward();
        localConfig.instance.vipType = configuration.instance.getData_VIP();
        localConfig.instance.vipLastDay = configuration.instance.getData_VipLastDay();
        localConfig.instance.initInfoVIP();

        localConfig.instance.currDailyLoginIndex = configuration.instance.getData_DailyLoginIndex();
        localConfig.instance.currDailyLoginLastDay = configuration.instance.getData_DailyLoginLastDay();
        localConfig.instance.currDailyLoginAdLastDay = configuration.instance.getData_DailyLoginAdLastDay();

        if(localConfig.instance.currDailyLoginIndex == 7){
            if(localConfig.instance.getCurrDay() > localConfig.instance.currDailyLoginLastDay){
                localConfig.instance.currDailyLoginIndex = 0;
            }
        }

        localConfig.instance.arrDailyQuest_Receives = configuration.instance.getData_DailyQuestReceives();
        localConfig.instance.dailyQuest_LastDay = configuration.instance.getData_DailyQuestLastDay();

        if(localConfig.instance.getCurrDay() > localConfig.instance.dailyQuest_LastDay){
            this.resetDailyQuestData();
        }else{
            localConfig.instance.initDailyQuestData(configuration.instance.getData_DailyQuestData());
        }

        localConfig.instance.arrInfoDailyChallengeFinisheds = this.getInfoDayFinsihed(configuration.instance.getData_InfoDay_Finished());
        localConfig.instance.arrInfoMonthRewards = this.getInfoMonthReward(configuration.instance.getData_InfoMonth_Reward());
        // console.log(localConfig.instance.arrInfoMonthRewards);

        localConfig.instance.log_CAMP_ID = configuration.instance.getData_CampID();
        localConfig.instance.log_ADSET_ID = configuration.instance.getData_AdsetID();
        localConfig.instance.log_ADS_ID = configuration.instance.getData_AdsID();
        localConfig.instance.log_TOUR_ID = configuration.instance.getData_TourID();

        if(localConfig.instance.log_CAMP_ID && localConfig.instance.log_CAMP_ID.length > 0){
            localConfig.instance.isPaidUser = true;
        }

        if (localConfig.instance.log_ADSET_ID && localConfig.instance.log_ADSET_ID.length > 0) {
            localConfig.instance.isPaidUser = true;
        }

        if (localConfig.instance.log_ADS_ID && localConfig.instance.log_ADS_ID.length > 0) {
            localConfig.instance.isPaidUser = true;
        }


        // localConfig.instance.isStartTournament = true;
        // let leaderboardDataInfo = new LeaderboardDataInfo();
        // leaderboardDataInfo.contextId = "1";
        // leaderboardDataInfo._id = "1";
        // leaderboardDataInfo.expireTime = 1831401911;
        // leaderboardDataInfo.name = "Weekly Tournament";
        // leaderboardDataInfo.tournamentId = "1";
        // leaderboardDataInfo.type = 1;
        // localConfig.instance.arrTournament_LeaderBoardDataInfos.push(leaderboardDataInfo);

        localConfig.instance.setRaceInfoDatas(configuration.instance.getData_RaceInfos());
        localConfig.instance.arrPlayerRaceDataInfos = configuration.instance.getData_RaceOpponents();

        localConfig.instance.passActivated = configuration.instance.getData_MasterPassActivated();
        localConfig.instance.setPassDataInfos(configuration.instance.getData_MasterPassInfos());
        localConfig.instance.passTutorial = configuration.instance.getData_MasterPassTutorial();

        localConfig.instance.spinFreeCount = configuration.instance.getData_SpinFreeCount();
        localConfig.instance.spinLastTime = configuration.instance.getData_SpinLastTime();
        if(localConfig.instance.getCurrDay() > localConfig.instance.spinLastTime){
            localConfig.instance.initSpin();
        }

        localConfig.instance.currHeart = configuration.instance.getData_HeartCount();
        if(localConfig.instance.currHeart < 0){
            localConfig.instance.currHeart = 0;
        }
        localConfig.instance.currHeart_LastTime = configuration.instance.getData_HeartLastTime();
        localConfig.instance.currHeartUnlimited_CountTime = configuration.instance.getData_HeartUnlimited();
        // localConfig.instance.currHeartUnlimited_CountTime = 10;
        // localConfig.instance.currHeart = 4;
        // localConfig.instance.currHeart_LastTime = localConfig.instance.getCurrTime() - 5;
        localConfig.instance.currHeartUnlimited_LastTime = configuration.instance.getData_HeartUnlimited_LastTime();

        localConfig.instance.initHeartUnlimited();

        localConfig.instance.shop_daily_free_lastday = configuration.instance.getData_ShopDailyFreeLastDay();


        localConfig.instance.isTutCurtain = configuration.instance.getData_TutCurtain();
        localConfig.instance.isTutClay = configuration.instance.getData_TutClay();
        localConfig.instance.isTutPlaster = configuration.instance.getData_TutPlaster();

        localConfig.instance.iapCount = configuration.instance.getData_IAPCount();
        localConfig.instance.winStreak = configuration.instance.getData_WinStreak();
        localConfig.instance.loseStreak = configuration.instance.getData_LoseStreak();


        // localConfig.instance.isStartTournament = true;
        // localConfig.instance.currTournamentPageHostDataInfo= new TournamentPageHostDataInfo();
        // localConfig.instance.currTournamentPageHostDataInfo.tournamentID = "111111";
        // localConfig.instance.currTournamentPageHostDataInfo.title = "Test Tournament";
        // localConfig.instance.currTournamentPageHostDataInfo.typeHost= TOURNAMENT_TYPE.PAGE_HOST;
        // localConfig.instance.currTournamentPageHostDataInfo.levelIndex = 6;
        // localConfig.instance.currTournamentPageHostDataInfo.eventURL = "https://game.gameoki.com/playfab/assets/a9ee59e4-478b-435f-ad8f-ebbbc27f4a04-BG_1572025_001.jpg";

        localConfig.instance.blackFriday_Infoday = configuration.instance.getData_BlackFriday();

        localConfig.instance.isGetPlayerDataSuccess = true;
        clientEvent.dispatchEvent(Constants.GET_DATA_PLAYER_SUCCESS);
    }



    arrWaterColors:Color[] = [
        new Color(255,122,4), //ff7a04 x 0 //cam
        new Color(13,75,254), //0d4bfe x 1 
        new Color(59,195,23), //3bc317 x 2
        new Color(244,46,37), //F42E25 x 3
        new Color(151,23,224), //9717e0 x 4
        new Color(224,47,213), //e02fd5 x 5
        new Color(254,213,23), //fed517 x 6
        new Color(47,171,252), //2FABFC x 7
        new Color(0,248,254), //00F8FE x 8
        new Color(164,239,54), //A4EF36 x 9
        new Color(240,204,176), //F0CCB0 x 10
    ];
   
    arrWaterTOPColors:Color[] = [
        new Color(254,161,118),//fea176 x 0
        new Color(77,119,255), //4d77ff x 1
        new Color(77,233,38), //4ddf26 x 2
        new Color(255,123,125), //FF7B7D x 3
        new Color(177,43,254),  //b12bfe x 4
        new Color(229,112,216),//b12bfe x 5
        new Color(255,228,147),//ffe493 x 6
        new Color(110,197,246), //6EC5F6 x 7
        new Color(174,255,240), //AEFFF0 x 8
        new Color(222,255,163), //DEFFA3 x 9
        new Color(250,234,214), //FAEAD6 x 10
    ];

    getWaterColor_byID(id:number){
        // console.log("getWaterColor_byID:"+id);
        if(id < this.arrWaterColors.length){
            return this.arrWaterColors[id];
        }
        return this.arrWaterColors[0];
    }

    getWaterTOPColor_byID(id:number){
        if(id < this.arrWaterTOPColors.length){
            return this.arrWaterTOPColors[id];
        }
        return this.arrWaterTOPColors[0];
    }

    getMagicColor_byID(id:number){
        // console.log("getMagicColor_byID:"+id);

        // if(id <= this.arrMagicColors.length){
        //     return this.arrMagicColors[id];
        // }
        
        // return this.arrMagicColors[0];
        if(id < 0) return this.arrMagicColors[0];
        return this.arrMagicColors[this.mapMagicColorIndex.get(id)];
    }

    getMagicTOPColor_byID(id:number){
        // console.log("getMagicTOPColor_byID:"+id);
        // if(id <= this.arrMagicTOPColors.length){
        //     return this.arrMagicTOPColors[id];
        // }
        // return this.arrMagicTOPColors[0];
        if(id < 0) return this.arrMagicTOPColors[0];
        return this.arrMagicTOPColors[this.mapMagicColorIndex.get(id)];
    }
    
    // currIndexTube:number = 1;

    arrItemTubePolygonConfigs:ItemTubePolygonConfig[] = [
        //1
        new ItemTubePolygonConfig([
            new Vec2(-66,2000),
            new Vec2(-66,165),
            new Vec2(-63,160),
            new Vec2(-63,-214),
            new Vec2(-55.5,-238),
            new Vec2(-40.5,-256),
            new Vec2(-24.5,-266),
            new Vec2(0,-270)
        ]),
        //2
        new ItemTubePolygonConfig([
            new Vec2(-31,2000),
            new Vec2(-31,197),
            new Vec2(-31,152),
            new Vec2(-57,127),
            new Vec2(-66,107),
            new Vec2(-66,91),
            new Vec2(-61,72),
            new Vec2(-51,53),
            new Vec2(-51,26),
            new Vec2(-62,10),
            new Vec2(-65,0),
            new Vec2(-65,-250),
            new Vec2(-63,-258),
            new Vec2(-57,-266),
            new Vec2(-47,-271),
            new Vec2(0,-271),
        ]),
        //3
        new ItemTubePolygonConfig([
            new Vec2(-58,2000),
            new Vec2(-58,197),
            new Vec2(-36,143),
            new Vec2(-36,134),
            new Vec2(-60,114),
            new Vec2(-67,100),
            new Vec2(-41,-258),
            new Vec2(-36,-264),
            new Vec2(-17,-270.5),
            new Vec2(-17,-271.5),
        ]),
        //4
        new ItemTubePolygonConfig([
            new Vec2(-46,2000),
            new Vec2(-46,193),
            new Vec2(-46,178),
            new Vec2(-30.5,134),
            new Vec2(-26,107),
            new Vec2(-26.5,89),
            new Vec2(-34,65),
            new Vec2(-53,41),
            new Vec2(-65,18),
            new Vec2(-70,-6),
            new Vec2(-68,-53),
            new Vec2(-64,-102),
            new Vec2(-59,-143),
            new Vec2(-50,-192),
            new Vec2(-34,-264),
            new Vec2(-17,-270.5),
            new Vec2(0,-271.5),
        ]),
        //5
        new ItemTubePolygonConfig([
            new Vec2(-37,2000),
            new Vec2(-37,189),
            new Vec2(-37,174),
            new Vec2(-32,170),
            new Vec2(-27.5,136.5),
            new Vec2(-27,89),
            new Vec2(-29,50),
            new Vec2(-34,13),
            new Vec2(-40.5,-17),
            new Vec2(-55.5,-51.5),
            new Vec2(-76.5,-90),
            new Vec2(-91,-126),
            new Vec2(-94,-149),
            new Vec2(-90,-173.5),
            new Vec2(-77,-211),
            new Vec2(-41.5,-264),
            new Vec2(-34,-268),
            new Vec2(-34,-268),
            new Vec2(-17,-271),
            new Vec2(0,-271),
        ]),
        //6
        new ItemTubePolygonConfig([
            new Vec2(-31,2000),
            new Vec2(-31,176),
            new Vec2(-31,162.5),
            new Vec2(-27,157.5),    
            new Vec2(-27,89),    
            new Vec2(-29,62),    
            new Vec2(-34,50),    
            new Vec2(-52.5,31),    
            new Vec2(-64.5,12),    
            new Vec2(-68,0),    
            new Vec2(-62,-256),    
            new Vec2(-56.5,-262),    
            new Vec2(-34.5,-269),    
            new Vec2(0,-271.5),    
        ]),
        //7
        new ItemTubePolygonConfig([
            new Vec2(-62,2000),
            new Vec2(-62,184),
            new Vec2(-62,160),
            new Vec2(-59,156),
            new Vec2(-59,-171),
            new Vec2(-56.5,-194),
            new Vec2(-51.5,-217),
            new Vec2(-42.5,-240),
            new Vec2(-28.5,-260),
            new Vec2(-11.5,-271),
            new Vec2(0,-271)
        ]),

        //8
        new ItemTubePolygonConfig([
            new Vec2(-73, 2000),
            new Vec2(-73, 187),
            new Vec2(-45.5, -255.5),
            new Vec2(-36, -264.5),
            new Vec2(-20.5, -269.5),
            new Vec2(0, -271)
        ]),

        //9
        new ItemTubePolygonConfig([
            new Vec2(-30.5, 2000),
            new Vec2(-30.5, 189),
            new Vec2(-30.5, 175),
            new Vec2(-26, 170),
            new Vec2(-26, 133.5),
            new Vec2(-29, 124),
            new Vec2(-66, 72),
            new Vec2(-69, 62),
            new Vec2(-68, -73),
            new Vec2(-65.5, -81),
            new Vec2(-53, -117),
            new Vec2(-52, -159),
            new Vec2(-55.5, -172),
            new Vec2(-67.5, -203.5),
            new Vec2(-71, -219),
            new Vec2(-69.5, -238),
            new Vec2(-64, -251),
            new Vec2(-56.5, -258.5),
            new Vec2(-45, -264.5),
            new Vec2(-23.5, -270),
            new Vec2(0, -271.5)
        ]),

        //10
        new ItemTubePolygonConfig([
            new Vec2(-38, 2000),
            new Vec2(-38, 184.5),
            new Vec2(-38, 169),
            new Vec2(-35, 165),
            new Vec2(-35, 165),
            new Vec2(-32, 71),
            new Vec2(-87.5, 24),
            new Vec2(-89, 19),
            new Vec2(-49.5, -256.5),
            new Vec2(-46, -261.5),
            new Vec2(-28.5, -269),
            new Vec2(0, -271.5),
        ]),

        //11
        new ItemTubePolygonConfig([
            new Vec2(-37, 2000),
            new Vec2(-37, 179),
            new Vec2(-36.5, 165.5),
            new Vec2(-32.5, 161),
            new Vec2(-33, 133.5),
            new Vec2(-36, 108.5),
            new Vec2(-40.5, 84.5),
            new Vec2(-47, 62),
            new Vec2(-55.5, 38.5),
            new Vec2(-64, 18),
            new Vec2(-71, 8),
            new Vec2(-74, -27),
            new Vec2(-74.5, -42),
            new Vec2(-73.5, -56.5),
            new Vec2(-70.5, -73),
            new Vec2(-65, -111),
            new Vec2(-59.5, -151.5),
            new Vec2(-58.5, -166),
            new Vec2(-59.3, -172),
            new Vec2(-67.5, -203.5),
            new Vec2(-65.5, -219),
            new Vec2(-68.5, -238),
            new Vec2(-63, -251),
            new Vec2(-56.5, -258.5),
            new Vec2(-46, -261.5),
            new Vec2(-28.5, -269),
            new Vec2(0, -271.5),
        ]),

        //12
        new ItemTubePolygonConfig([
            new Vec2(-55.5, 2000),
            new Vec2(-55.5, 181),
            new Vec2(-55.5, 158.5),
            new Vec2(-46, 152),
            new Vec2(-46, 121),
            new Vec2(-46, 121),
            new Vec2(-56.891, -129.287),
            new Vec2(-67.33, -141.569),
            new Vec2(-74.815, -154.251),
            new Vec2(-80.747, -170.698),
            new Vec2(-83.177, -192.875),
            new Vec2(-79.643, -212.834),
            new Vec2(-73.195, -229.721),
            new Vec2(-62.888, -243.707),
            new Vec2(-49.071, -256.667),
            new Vec2(-33.478, -265.607),
            new Vec2(-14.974, -271.013),
            new Vec2(0, -271.5),
        ]),

        //13
        new ItemTubePolygonConfig([
            new Vec2(-51, 2000),
            new Vec2(-51, 178.5),
            new Vec2(-48.598, 158.077),
            new Vec2(-40.048, 132.768),
            new Vec2(-35.602, 112.247),
            new Vec2(-32.349, 92.099),
            new Vec2(-29.646, 69.874),
            new Vec2(-28.053, 47.576),
            new Vec2(-27.408, 23.287),
            new Vec2(-27.408, 2.311),
            new Vec2(-30.96, -39.221),
            new Vec2(-47.094, -35.053),
            new Vec2(-60.59, -34.656),
            new Vec2(-71.308, -36.244),
            new Vec2(-83.613, -40.213),
            new Vec2(-94.926, -47.755),
            new Vec2(-105.048, -58.87),
            new Vec2(-113.875, -78.158),
            new Vec2(-118.452, -99.081),
            new Vec2(-116.666, -125.081),
            new Vec2(-111.307, -145.325),
            new Vec2(-100.353, -172.326),
            new Vec2(-84.051, -199.836),
            new Vec2(-65.905, -222.229),
            new Vec2(-45.056, -243.078),
            new Vec2(-21.504, -262.769),
            new Vec2(0, -271.5),
        ]),
    ]

    MAX_THEME_TUBE = 11;
    getItemTubePolygonConfig_byIndexTube(indexTube:number){
        if(indexTube >= this.MAX_THEME_TUBE) return this.arrItemTubePolygonConfigs[0];
        return this.arrItemTubePolygonConfigs[indexTube];
    }

    arrItemTubeConfigs:ItemTubeConfig[] = [
        //1
        new ItemTubeConfig(
            new Vec3(-68,-191,0),
            new Vec3(68,-191,0),
            [
                44,
                68,
                78,
                84,
                90
            ],
            [
                0.81,
                0.54,
                0.43,
                0.4,
                0.4
            ],
            [
                3,
                1.866,
                8.558,
                23.81,//23.81
                42
            ],
            [
                1.2,
                1.8,
                1.5,
                1,
                1
            ],
            [1,1,1,1]
        ),
        //2
        new ItemTubeConfig(
            new Vec3(-30,-191,0),
            new Vec3(30,-191,0),
            [
                44,
                68,
                82,
                89,
                110
            ],
            [
                0.93,
                0.7,
                0.68,
                0.5,
                0.5
            ],
            [
                19,
                36,
                60,
                58,
                40
            ],
            [
                1.2,
                1.8,
                1.5,
                1,
                1
            ],
            [1,1,1,1]
        ),
        //3
        new ItemTubeConfig(
            new Vec3(-58, -196, 0),
            new Vec3(58, -196, 0),
            [
                44,
                68,
                78,
                85,
                105
            ],
            [
                0.83,
                0.55,
                0.5,
                0.4,
                0.5
            ],
            [
                10,
                12.5,
                25,
                30,
                25
            ],
            [
                1.2,
                1.8,
                1.5,
                1,
                1
            ],
            [1,1,1,1]
        ),

        //4
        new ItemTubeConfig(
            new Vec3(-46, -193, 0),
            new Vec3(46, -193, 0),
            [
                44,
                68,
                78,
                85,
                105
            ],
            [
                0.85,
                0.55,
                0.48,
                0.48,
                0.5
            ],
            [
                13,
                19,
                33,
                55,
                25
            ],
            [
                1.2,
                1.8,
                1.5,
                0.6,
                0.6
            ],
            [1,1,1,0.6]
        ),

        //5
        new ItemTubeConfig(
            new Vec3(-37, -189, 0),
            new Vec3(37, -189, 0),
            [
                44,
                72,
                82,
                90,
                105
            ],
            [
                0.86,
                0.6,
                0.6,
                0.58,
                0.5
            ],
            [
                15,
                15,
                36,
                68,
                35
            ],
            [
                1.2,
                1.8,
                1.5,
                0.8,
                0.6
            ],
            [1,1,0.8,0.6]
        ),

        //6
        new ItemTubeConfig(
            new Vec3(-29, -176, 0),
            new Vec3(29, -176, 0),
            [
                44,
                72,
                82,
                90,
                105
            ],
            [
                0.88,
                0.6,
                0.5,
                0.5,
                0.3
            ],
            [
                8,
                17,
                36,
                58,
                10
            ],
            [
                1.2,
                1.8,
                1.5,
                0.8,
                0.6
            ],
            [1,1,1,0.6]
        ),

        //7
        new ItemTubeConfig(
            new Vec3(-62,-184,0),
            new Vec3(62,-184,0),
            [
                44,
                68,
                78,
                84,
                90
            ],
            [
                0.78,
                0.54,
                0.43,
                0.4,
                0.4
            ],
            [
                3,
                3,
                12,
                28,
                40
            ],
            [
                1.2,
                1.8,
                1.5,
                1,
                1
            ],
            [1,1,1,1]
        ),

        //8
        new ItemTubeConfig(
            new Vec3(-73,-187,0),
            new Vec3(73,-187,0),
            [
                44,
                68,
                75,
                82,
                90
            ],
            [
                0.8,
                0.5,
                0.5,
                0.45,
                0.4
            ],
            [
                -5,
                -5,
                17,
                32,
                35
            ],
            [
                1.2,
                1.8,
                1.5,
                1,
                1
            ],
            [1,1,1,1]
        ),

        //9
        new ItemTubeConfig(
            new Vec3(-30.5,-189,0),
            new Vec3(30.5,-189,0),
            [
                44,
                68,
                78,
                89,
                110
            ],
            [
                0.9,
                0.65,
                0.68,
                0.5,
                0.5
            ],
            [
                18.5,
                25,
                65,
                63,
                40
            ],
            [
                1.2,
                1.8,
                1.5,
                1,
                1
            ],
            [1,1,1,0.6]
        ),

        //10
        new ItemTubeConfig(
            new Vec3(-38, -184.5, 0),
            new Vec3(38, -184.5, 0),
            [
                44,
                68,
                78,
                89,
                105
            ],
            [
                0.85,
                0.6,
                0.48,
                0.58,
                0.5
            ],
            [
                10,
                20,
                27,
                70,
                40
            ],
            [
                1.2,
                1.8,
                1.5,
                0.6,
                0.6
            ],
            [1,1,1,0.6]
        ),

        //11
        new ItemTubeConfig(
            new Vec3(-37,-179,0),
            new Vec3(37,-179,0),
            [
                44,
                68,
                78,
                89,
                110
            ],
            [
                0.86,
                0.65,
                0.63,
                0.5,
                0.5
            ],
            [
                9,
                23,
                54,
                55,
                40
            ],
            [
                1.2,
                1.8,
                1.5,
                1,
                1
            ],
            [1,1,1,0.6]
        ),

        //12
        new ItemTubeConfig(
            new Vec3(-37,-179,0),
            new Vec3(37,-179,0),
            [
                44,
                68,
                75,
                85,
                90
            ],
            [
                0.82,
                0.6,
                0.68,
                0.6,
                0.6
            ],
            [
                5,
                10,
                53,
                70,
                50
            ],
            [
                1.2,
                1.8,
                1.5,
                1,
                1
            ],
            [1,0.6,0.6,0.6]
        ),

        //13
        new ItemTubeConfig(
            new Vec3(-51,-178.5,0),
            new Vec3(51,-178.5,0),
            [
                44,
                72,
                78,
                85,
                90
            ],
            [
                0.82,
                0.58,
                0.7,
                0.6,
                0.6
            ],
            [
                5,
                2.655,
                53,
                70,
                50
            ],
            [
                1.2,
                1.8,
                1.5,
                1,
                1
            ],
            [1.5,1.8,0.4,0.5]
        ),
    ]


    getPathHoverBottom_byIndexTube(indexTube:number){
        return "tube/"+indexTube+"/"+indexTube+"b";
    }

    getPathHoverTop_byIndexTube(indexTube:number){
        return "tube/"+indexTube+"/"+indexTube+"a";
    }

    getPathMask_byIndexTube(indexTube:number){
        return "tube/"+indexTube+"/"+indexTube+"c";
    }

    getPathTop_byIndexTube(indexTube:number){
        return "tube/"+indexTube+"/"+indexTube;
    }

    getItemTubeConfig_byIndexTube(indexTube:number){
        if(indexTube >= this.MAX_THEME_TUBE) return this.arrItemTubeConfigs[0];
        return this.arrItemTubeConfigs[indexTube];
    }

    ITEMWATER_POSY_START:number = -270;
    ITEMWATER_HIGHT:number = 95;
    ITEMWATER_WIDTH:number = 126;
    ITEMWATER_TOP_POSY:number = 95;

    getItemWater_TOP_PosY(indexWater:number){
        return this.ITEMWATER_POSY_START + this.ITEMWATER_HIGHT * indexWater + this.ITEMWATER_TOP_POSY;
    }

    getItemWater_PosY(indexWater:number){
        return this.ITEMWATER_POSY_START + this.ITEMWATER_HIGHT * indexWater;
    }

    currInfoDay: InfoDay = null;
    currWeek:number = 0;

    initCurrInfoDay(){
        let date = new Date();
        this.currInfoDay = new InfoDay(date.getDate(),date.getMonth(),date.getFullYear());
    }


    initCurrWeek(){
        // console.log("initCurrWeek");
        let oneDay = 24 * 60 * 60 * 1000;
        let startDate = new Date(2024,11,2);
        let currentdate = new Date();
        let countDays:number  = Math.round((currentdate.getTime() - startDate.getTime()) / oneDay);
        
        this.currWeek = Math.floor(countDays / 7);
        // console.log(this.currWeek);
    }

    getCountDay_two_InfoDay(startDay:InfoDay,endDay:InfoDay){
        // let startDate:Date = new Date(startDay.)

        let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        let firstDate:Date = new Date(startDay.year, startDay.month, startDay.day);
        let secondDate:Date = new Date(endDay.year, endDay.month, endDay.day);

        let diffDays:number = Math.round((secondDate.getTime() - firstDate.getTime()) / oneDay);
        return diffDays;
    }

    getCountDay_From_Start(selectDay:InfoDay){
        let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        let firstDate:Date = new Date(this.minInfoDay.year, this.minInfoDay.month, this.minInfoDay.day);
        let secondDate:Date = new Date(selectDay.year, selectDay.month, selectDay.day);

        let diffDays:number = Math.round((secondDate.getTime() - firstDate.getTime()) / oneDay);
        return diffDays;
    }

    //#region BLACK FRIDAY
    blackFriday_Infoday: InfoDay = new InfoDay(1, 1, 2023);

    isShowBlackFriday: boolean = false;
    setBackFriday_Received() {
        this.blackFriday_Infoday = this.currInfoDay;
        configuration.instance.setData_BlackFriday(this.currInfoDay);
    }

    BLACKFIRDAY_DAYLY_SHOW: number[] = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
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
    }
    //#endregion    

    checkSameInfoDay(infoday1: InfoDay, infoday2: InfoDay) {
        if (infoday1.year == infoday2.year && infoday1.month == infoday2.month && infoday1.day == infoday2.day) {
            return true;
        }
        return false;
    }


    initAfterLoadData(){
        localConfig.instance.setPassDataInfos(configuration.instance.getData_MasterPassInfos());
    }

    arrLevelDataStrs:string [] = [];
    WATER_MAX_LEVEL:number = 500;
    arrLevelChallengeDataStrs:string [] = [];
    WATER_MAX_CHALLENGE_LEVEL:number = 440;

    
    currLevelDataInfo: LevelDataInfo = null;
    getPath_LevelWaterInfo(_levelID:number){
        return "water/levels/"+_levelID;
    }

    getLevelDataInfo_byIndexLevel(indexLevel:number){
        return this.getLevelDataInfo_byStr(this.arrLevelDataStrs[indexLevel - 1]);
    }

    getLevelDataInfo_byIndexLevelChallenge(indexLevelChallenge:number){
        return this.getLevelDataInfo_byStr(this.arrLevelChallengeDataStrs[indexLevelChallenge]);
    }

    getLevelDataInfo_byStr(strData:string){
        // console.log(strData);
        let leveDataInfo:LevelDataInfo =new LevelDataInfo();
        let strRow1:string = "";
        let strRow2:string = "";
        if(strData.indexOf("|") > -1){
            let arrRows:string[] = strData.split("|");
            strRow1 = arrRows[0];
            strRow2 = arrRows[1];
        }else{
            strRow1 = strData;
        }

        if(strRow1.length > 0){
            leveDataInfo.arrTubeInfo_1 = this.getArrTubeInfo_byStr(strRow1);
        }
        if(strRow2.length > 0){
            leveDataInfo.arrTubeInfo_2 = this.getArrTubeInfo_byStr(strRow2);
        }
        if(leveDataInfo.arrTubeInfo_2.length > 0){
            leveDataInfo.isTwoRows = true;
        }

        leveDataInfo.maxCol = leveDataInfo.arrTubeInfo_1.length;
        if(leveDataInfo.arrTubeInfo_1.length == leveDataInfo.arrTubeInfo_2.length){
            // leveDataInfo.maxCol ++;
        }else if(leveDataInfo.arrTubeInfo_1.length < leveDataInfo.arrTubeInfo_2.length){
            leveDataInfo.maxCol = leveDataInfo.arrTubeInfo_2.length;
        }
        return leveDataInfo;
    }

    updateLevelDataInfo_MaxCol(){

    }

    KC_X:number = 300;
    KC_Y:number = 300;

    initPos_byLevelDataInfo(levelDataInfo:LevelDataInfo){
        if(levelDataInfo.maxRow <= 3){
            
        }
        if(levelDataInfo.maxCol <= 3){
            this.KC_X = 300;
            this.KC_Y = 300;
            this.scaleTube = 1;
        }else if(levelDataInfo.maxCol == 4){
            this.KC_X = 250;
            this.KC_Y = 325;
            this.scaleTube = 0.9;
        }else if(levelDataInfo.maxCol == 5){
            this.KC_X = 220;
            this.KC_Y = 325;
            this.scaleTube = 0.9;
        }else if(levelDataInfo.maxCol == 6){
            this.KC_X = 200;
            this.KC_Y = 325;
            this.scaleTube = 0.8;
        }else if(levelDataInfo.maxCol == 7){
            this.KC_X = 200;
            this.KC_Y = 325;
            this.scaleTube = 0.7;
        }else if(levelDataInfo.maxCol == 8){
            this.KC_X = 190;
            this.KC_Y = 325;
            this.scaleTube = 0.7;
        }else if(levelDataInfo.maxCol == 9){
            this.KC_X = 170;
            this.KC_Y = 325;
            this.scaleTube = 0.7;
        }
    }

    initPos_byMagicLevelDataInfo(magicLevelDataInfo:MagicLevelDataInfo){
        // console.log("initPos_byLevelDataInfo",magicLevelDataInfo);
        if(magicLevelDataInfo.maxRow <= 2){
            if(magicLevelDataInfo.maxCol <= 3){
                this.KC_X = 300;
                this.KC_Y = 300;
                this.scaleTube = 1;
            }else if(magicLevelDataInfo.maxCol == 4){
                this.KC_X = 250;
                this.KC_Y = 650;
                this.scaleTube = 0.9;
            }else if(magicLevelDataInfo.maxCol == 5){
                this.KC_X = 220;
                this.KC_Y = 650;
                this.scaleTube = 0.9;
            }else if(magicLevelDataInfo.maxCol == 6){
                this.KC_X = 200;
                this.KC_Y = 700;
                this.scaleTube = 0.8;
            }else if(magicLevelDataInfo.maxCol == 7){
                this.KC_X = 200;
                this.KC_Y = 700;
                this.scaleTube = 0.75;
            }else if(magicLevelDataInfo.maxCol == 8){
                this.KC_X = 200;
                this.KC_Y = 700;
                this.scaleTube = 0.75;
            }else{
                this.KC_X = 170;
                this.KC_Y = 700;
                this.scaleTube = 0.8;
            }
        }else{
            if(magicLevelDataInfo.maxCol == 5){
                this.KC_X = 220;
                this.KC_Y = 600;
                this.scaleTube = 0.75;
            }else if(magicLevelDataInfo.maxCol == 6){
                this.KC_X = 200;
                this.KC_Y = 600;
                this.scaleTube = 0.75;
            }else if(magicLevelDataInfo.maxCol == 7){
                this.KC_X = 200;
                this.KC_Y = 600;
                this.scaleTube = 0.75;
            }else if(magicLevelDataInfo.maxCol == 8){
                this.KC_X = 180;
                this.KC_Y = 600;
                this.scaleTube = 0.75;
            }else{
                this.KC_X = 180;
                this.KC_Y = 600;
                this.scaleTube = 0.75;
            }
        }

        // console.error("initPos_byMagicLevelDataInfo",this.KC_X,this.KC_Y,this.scaleTube);
    }
    getPosTube_byXY(levelDataInfo:LevelDataInfo,tubeX:number,tubeY:number){
        let arrTubeInfos:TubeInfo[] = levelDataInfo.arrTubeInfo_1;
        if(tubeY == 1){
            arrTubeInfos = levelDataInfo.arrTubeInfo_2;
        }


        let posY:number = 0;
        if(levelDataInfo.isTwoRows){
            if(tubeY == 0){
                posY = this.KC_Y;
            }else{
                posY = -this.KC_Y;
            }
        }
        let posX:number = 0;
        posX = (tubeX - arrTubeInfos.length/2 + 0.5) * this.KC_X;
        return new Vec2(posX,posY);
    }

    getMagicPosTube_byXY(magicLevelDataInfo:MagicLevelDataInfo,tubeX:number,tubeY:number){
        // let arrTubes_byY:MagicBInfo[] = magicLevelDataInfo.B.filter((item:MagicBInfo) => item.indexY == tubeY);
        // console.log(this.mapMagicCountColbyIndexY);
        let countTubebyY:number = this.mapMagicCountColbyIndexY.get(tubeY);
        // console.log("tubeY",tubeY,"countTubebyY",countTubebyY);
        let posY:number = 0;
        posY = (tubeY - magicLevelDataInfo.maxRow/2 + 0.5) * this.KC_Y;
        let posX:number = 0;
        posX = (tubeX - countTubebyY/2 + 0.5) * this.KC_X;
        // console.log(posX,posY);
        return new Vec2(posX,posY);
    }

    getArrTubeInfo_byStr(strDataTube:string){
        strDataTube = strDataTube.replace("\r","");
        let arrTubeInfos:TubeInfo[] = [];
        let arrTubeStrs:string[] = strDataTube.split(";");
        for(let i=0; i< arrTubeStrs.length;i++){
            let strData:string = arrTubeStrs[i];
            let tubeInfo:TubeInfo = new TubeInfo();
            for(let j=0; j< strData.length;j++){
                // console.log(strData[j]);
                let indexColor:number = -1;
                if(strData[j] == "a"){
                    indexColor = 10;
                    tubeInfo.arrIndexColors.push(indexColor);
                }else{
                    indexColor = parseInt(strData[j]);
                    if(!Number.isNaN(indexColor)){
                        tubeInfo.arrIndexColors.push(indexColor);
                    }
                }
                // console.log("indexColor:"+indexColor);
            }
            arrTubeInfos.push(tubeInfo);
        }
        return arrTubeInfos;
    }

    currLevel:number = 1;


    fixRatioScreen:number = 1;
    updateFixRatioScreen(){
        // console.log("updateFixRatioScreen",view.getViewportRect().width,view.getViewportRect().height);
        // this.fixRatioScreen =  (view.getViewportRect().width/view.getViewportRect().height) / (720/1280) ;
        this.fixRatioScreen =  (view.getFrameSize().width/view.getFrameSize().height) / (1080/1920);
        // console.log("fixRatioScreen",this.fixRatioScreen);
    }
    getPos_PosWord_WorldSpace(posWorld:Vec3,scale:number){
        // console.log("getPos_PosWord_WorldSpace",posWorld,scale);
        let _posV3 = new Vec3(posWorld.x /100 * scale * this.fixRatioScreen,posWorld.y / 100 * scale * this.fixRatioScreen,0);
        // console.log(_posV3);
        return _posV3;
    }



    scaleTube:number = 1;
    isWaterLock:boolean = false;

    //#region BOOSTER
    arrBoosterCount:number[] = [3,3,3];

    setBoosterCount(boosterType:BOOSTER_TYPE,count:number){
        this.arrBoosterCount[boosterType] = count;
        configuration.instance.setData_BoosterCount(this.arrBoosterCount);

        clientEvent.dispatchEvent(Constants.BOOSTER_COUNT_UPDATE,boosterType);
        if(boosterType == BOOSTER_TYPE.UNDO){
            LogEventManager.instance.logBoosterUndoCount(count);
        }else if(boosterType == BOOSTER_TYPE.SUGGEST){
            LogEventManager.instance.logBoosterShuffleCount(count);
        }else if(boosterType == BOOSTER_TYPE.ADDCOL){
            LogEventManager.instance.logBoosterAddColCount(count);
        }
    }

    getBoosterCount(boosterType:BOOSTER_TYPE){
        return this.arrBoosterCount[boosterType];
    }
    //#endregion

    //#region TICKET
    arrTickets:number[] = [];
    setTicketCount(ticketType:TICKET_TYPE,count:number){
        this.arrTickets[ticketType] = count;
        configuration.instance.setData_Ticket(this.arrTickets);

        clientEvent.dispatchEvent(Constants.TICKET_UPDATE,ticketType);
    }

    getTicketCount(ticketType:TICKET_TYPE){
        return this.arrTickets[ticketType];
    }

    BOOSTER_PRICES:number[] = [300,300,900];

    getBoosterPrice(boosterType:BOOSTER_TYPE){
        return this.BOOSTER_PRICES[boosterType];
    }
    //#endregion


    //#region LEVEL UNLOCK
    LEVEL_SHOW_HOME:number = 4;
    currLevelUnlock:number = 1;

    setLevelUnlock(level:number){
        if(level > this.currLevelUnlock){
            this.currLevelUnlock = level;
            configuration.instance.setData_LevelUnlock(this.currLevelUnlock);
            localConfig.instance.setDailyQuest_AddWin();
        }
    }
    //#endregion

    //#region SHOP
    arrShopDataInfos:ShopDataInfo[] = [];

    getIAP_PackID_bShopPackType(shopPackType:SHOP_PACK_TYPE){
        return SHOP_PACK_TYPE[shopPackType].toLowerCase().toString();
    }

    getIAP_PlacementType(iapPlacementType:IAP_PLACEMENT_TYPE){
        return IAP_PLACEMENT_TYPE[iapPlacementType].toLowerCase().toString();
    }

    getIAP_ShowType(iapShowType:IAP_SHOW_TYPE){
        return IAP_SHOW_TYPE[iapShowType].toLowerCase().toString();
    }

    getAD_FormatType(ad_format:AD_FORMAT_TYPE){
        return AD_FORMAT_TYPE[ad_format].toLowerCase().toString();
    }

    getAd_EndType(ad_endType:AD_END_TYPE){
        return AD_END_TYPE[ad_endType].toLowerCase().toString();
    }

    getItemShopDataInfo_byPackID(packID:string){
        for(let i=0; i< this.arrShopDataInfos.length;i++){
            if(this.arrShopDataInfos[i].packID == packID){
                return this.arrShopDataInfos[i];
            }
        }
        return this.arrShopDataInfos[0];
    }

    getValuePriceIAPPack_byProductID(packID: string): number {
       for(let i=0; i< this.arrShopDataInfos.length;i++){
            if(this.arrShopDataInfos[i].packID == packID){
                // console.log(this.arrShopDataInfos[i]);
                return this.arrShopDataInfos[i].price_amount_cents / 100;
            }
        }
        return 0;
    }


    isRemoveAd:boolean = false;
    setData_RemoveAd(){
        this.isRemoveAd = true;
        configuration.instance.setData_RemoveAd(true);

        clientEvent.dispatchEvent(Constants.REMOVE_AD_UPDATE);
        FBInstantManager.instance.HideBanner();
    }

    isIAPStarterPack: boolean = false;

    setData_IAPStarterPack() {
        this.isIAPStarterPack = true;
        configuration.instance.setData_IAPStarterPack(true);

        clientEvent.dispatchEvent(Constants.STARTER_PACK_UPDATE);
    }

    shop_free_lastTime:number = 0;
    SHOP_FREE_NEXT_TIME:number = 60 * 60 * 2;

    

    setShopFreeLastTime(){
        this.shop_free_lastTime = this.getCurrTime();
        configuration.instance.setData_ShopFreeLastTime();

        clientEvent.dispatchEvent(Constants.SHOP_FREE_LASTTIME_UPDATE);
    }

    shop_daily_free_lastday:number = 0;

    setShopDailyFreeLastDay(){
        this.shop_daily_free_lastday = localConfig.instance.getCurrDay();
        configuration.instance.setData_ShopDailyFreeLastDay(this.shop_daily_free_lastday);

        clientEvent.dispatchEvent(Constants.SHOP_DAILY_FREE_LASTDAY_UPDATE);
    }

    vipType:number = 0;
    vipLastDay:number = 0;
    vipLastDayReward:number = 0;

    vipDailyRewards:GroupRewardDataInfo = new GroupRewardDataInfo([
        new RewardDataInfo(SHOP_ITEM_TYPE.TICKET_GOLD, 3),
        new RewardDataInfo(SHOP_ITEM_TYPE.TICKET_SILVER, 3)
    ]);

    setVIPType(vipType:SHOP_PACK_TYPE){
        this.vipType = vipType;
        // console.log("setVIPType:"+vipType);
        this.vipLastDay = localConfig.instance.getCurrDay();

        this.isRemoveAd = true;
        FBInstantManager.instance.HideBanner();

        this.setVIPLastDayReward();
        configuration.instance.setData_VIP(this.vipType);
        configuration.instance.setData_VipLastDay();

        clientEvent.dispatchEvent(Constants.VIP_UPDATE);
    }

    setVIPLastDayReward(){
        localConfig.instance.vipLastDayReward = localConfig.instance.getCurrDay();
        configuration.instance.setData_VipLastDay_Reward();
    }

    getVipCountDownTimeLeft(vipType:SHOP_PACK_TYPE){
        let vipStartTime:number = configuration.instance.getData_VipLastDay();
        // console.log(removeAdStartTime);
        let currTime:number = localConfig.instance.getCurrTime();
        // console.log(currTime);
        let countDays:number =Math.floor((currTime - vipStartTime)/86400);
        
        let coutnVIPDays:number = 30;
        if(vipType == SHOP_PACK_TYPE.VIP_30){
            coutnVIPDays = 30;
        }else if(vipType == SHOP_PACK_TYPE.VIP_7){
            coutnVIPDays = 7;
        }else if(vipType == SHOP_PACK_TYPE.VIP_3){
            coutnVIPDays = 3;
        }
        return coutnVIPDays - countDays;
    }

    initInfoVIP(){
        if(this.vipType != 0){
            let countDaysLeft:number = localConfig.instance.getVipCountDownTimeLeft(this.vipType);
            if(countDaysLeft <= 0){
                this.vipType = 0;
                this.vipLastDay = 0;
                this.vipLastDayReward = 0;
                configuration.instance.setData_VIP(0);
            }else{
                this.isRemoveAd = true;
            }
        }
    }
    //#endregion

    currSceneType:SCENE_TYPE = SCENE_TYPE.MENU;

    
    //#region DAILY CHALLENGE
    currInfoDaySelect:InfoDay = null;

    minInfoDay:InfoDay = new InfoDay(2,11,2024);

    month_names_short:string[] =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    month_names_full:string[] =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];

    getMonth_Name_Short(monthIndex:number){
        return this.month_names_short[monthIndex];
    }
    

    getMonth_Name_Full(monthIndex:number){
        return this.month_names_full[monthIndex];
    }

    getNameMonthOfYear(month:number,year:number){
        return this.getMonth_Name_Short(month) + " "+ year;
    }
    getCountFinished_InMonth(month:number,year:number){
        let countFinished:number = 0;
        for(let i=0; i< this.arrInfoDailyChallengeFinisheds.length;i++){
            if(this.arrInfoDailyChallengeFinisheds[i].year == year && this.arrInfoDailyChallengeFinisheds[i].month == month){
                countFinished ++;
            }
        }

        return countFinished;
    }

    getStrInfoDayFinsihed(arrInfoDailyChallengeFinisheds:InfoDay[]){
        let strInfoDayFinsihed:string = "";
        for(let i=0; i< arrInfoDailyChallengeFinisheds.length;i++){
            if(i == arrInfoDailyChallengeFinisheds.length - 1){
                strInfoDayFinsihed += arrInfoDailyChallengeFinisheds[i].day + "-" + arrInfoDailyChallengeFinisheds[i].month + "-" + arrInfoDailyChallengeFinisheds[i].year;
            }else{
                strInfoDayFinsihed += arrInfoDailyChallengeFinisheds[i].day + "-" + arrInfoDailyChallengeFinisheds[i].month + "-" + arrInfoDailyChallengeFinisheds[i].year + "|";
            }
            
        }
        return strInfoDayFinsihed;
    }

    getInfoDayFinsihed(strInfoDayChallengeFinsihed:string){
        let arrInfoDailyChallengeFinisheds:InfoDay[] = [];
        if(strInfoDayChallengeFinsihed == "") return [];
        let arrInfoDayFinsihed = strInfoDayChallengeFinsihed.split("|");
        for(let i=0; i< arrInfoDayFinsihed.length;i++){
            let infoDay:InfoDay = new InfoDay();
            infoDay.day = parseInt(arrInfoDayFinsihed[i].split("-")[0]);
            infoDay.month = parseInt(arrInfoDayFinsihed[i].split("-")[1]);
            infoDay.year = parseInt(arrInfoDayFinsihed[i].split("-")[2]);
            arrInfoDailyChallengeFinisheds.push(infoDay);
        }    
        return arrInfoDailyChallengeFinisheds;
    }

    addInfoDayFinished(infoDailyChallenge:InfoDay){
        let isFinished:boolean = this.checkInfoDailyChallengeFinished(infoDailyChallenge);
        if(!isFinished){
            this.arrInfoDailyChallengeFinisheds.push(infoDailyChallenge);
            configuration.instance.setDataInfoDay_Finished(this.getStrInfoDayFinsihed(this.arrInfoDailyChallengeFinisheds));
            this.setDailyQuest_CompletedDailyChallenge();
        }
    }

    checkInfoDailyChallengeFinished(_infoDay:InfoDay){
        for(let i=0; i< this.arrInfoDailyChallengeFinisheds.length;i++){
            if(this.arrInfoDailyChallengeFinisheds[i].year == _infoDay.year && this.arrInfoDailyChallengeFinisheds[i].month == _infoDay.month && this.arrInfoDailyChallengeFinisheds[i].day == _infoDay.day){
                return true;
            }
        }
        return false;
    }

    arrInfoDailyChallengeFinisheds:InfoDay[] = [];
    

    getInfoDay_NextGame(){
        if(this.currInfoDaySelect.year == this.currInfoDay.year && this.currInfoDaySelect.month == this.currInfoDay.month){
            if(this.currInfoDaySelect.day < this.currInfoDay.day){
                for(let i= this.currInfoDaySelect.day + 1;i <= this.currInfoDay.day;i++){
                    let infoDayCheck:InfoDay = new InfoDay(i,this.currInfoDaySelect.month,this.currInfoDaySelect.year);
                    if(this.checkInfoDailyChallengeFinished(infoDayCheck) ){
                        return infoDayCheck;
                    }
                }
            }
        }
        if(this.currInfoDaySelect.year == this.currInfoDay.year && this.currInfoDaySelect.month < this.currInfoDay.month){
            let monthCheck:number = this.currInfoDaySelect.month;
            let countInMonthCheck:number = this.getDaysInMonth(monthCheck,this.currInfoDaySelect.year);
            for(let i= this.currInfoDaySelect.day + 1;i < countInMonthCheck;i++){
                let infoDayCheck:InfoDay = new InfoDay(i,monthCheck,this.currInfoDaySelect.year);
                if(this.checkInfoDailyChallengeFinished(infoDayCheck) ){
                    return infoDayCheck;
                }   
            }

            for(let i= this.currInfoDaySelect.month + 1; i< this.currInfoDay.month;i++){
                let monthCheck:number = i;
                let countInMonthCheck:number = this.getDaysInMonth(monthCheck,this.currInfoDaySelect.year);
                for(let j= 0;j < countInMonthCheck;j++){
                    let infoDayCheck:InfoDay = new InfoDay(j,monthCheck,this.currInfoDaySelect.year);
                    if(this.checkInfoDailyChallengeFinished(infoDayCheck) ){
                        return infoDayCheck;
                    }    
                }
            }
        }
        if(this.currInfoDaySelect.year == this.currInfoDay.year && this.currInfoDaySelect.month == this.currInfoDay.month){
            if(this.currInfoDaySelect.day > 0){
                for(let i= this.currInfoDaySelect.day - 1;i >= 0;i--){
                    let infoDayCheck:InfoDay = new InfoDay(i,this.currInfoDaySelect.month,this.currInfoDaySelect.year);
                    // console.log(infoDayCheck);
                    if(this.checkInfoDailyChallengeFinished(infoDayCheck) ){
                        return infoDayCheck;
                    }
                }
            }
        }

        let currYear:number = this.currInfoDay.year;
        let currMonth:number = this.currInfoDay.month;
        for(let i= this.currInfoDay.day; i>=0 ;i--){
            let infoDayCheck:InfoDay = new InfoDay(i,currMonth,currYear);
            if(this.checkInfoDailyChallengeFinished(infoDayCheck) ){
                return infoDayCheck;
            }    
        }

        let prevMonth:number = this.currInfoDay.month - 1;

        if(prevMonth >= 0){
            let monthCheck:number = prevMonth;
            let countInMonthCheck:number = this.getDaysInMonth(monthCheck,currYear);
            for(let i= countInMonthCheck - 1;i >= 0;i--){
                let infoDayCheck:InfoDay = new InfoDay(i,monthCheck,currYear);
                if(this.checkInfoDailyChallengeFinished(infoDayCheck) ){
                    return infoDayCheck;
                }    
            }
        }            

        return null;


    }

    getDaysInMonth(month:number,year:number) {
        // console.log("getDaysInMonth year:"+year+" month:"+month);
        return new Date(year, month + 1, 0).getDate();
    }

    getStrInfoDay(infoDay:InfoDay){
        let strInfo:string = "";
        if(infoDay.day < 10){
            strInfo += "0"+infoDay.day;
        }else{
            strInfo += infoDay.day;
        }

        if(infoDay.month < 10){
            strInfo += "0"+infoDay.month;
        }else{
            strInfo += infoDay.month;
        }

        strInfo += infoDay.year;
        return strInfo;
    }

    getInfoDayStr(infoDay:InfoDay){
        return infoDay.year+"-"+infoDay.month+"-"+infoDay.day;
    }

    getInfoDayStr_2(infoDay:InfoDay){
        return infoDay.year+"-"+localConfig.instance.getStrTime(infoDay.month+1)+"-"+localConfig.instance.getStrTime(infoDay.day);
    }

    getStrTime(time:number){
        if(time < 10){
            return "0"+time;
        }
        return time;
    }

    CALENDAR_X:number = 112;
    CALENDAR_Y:number = 110;

    arrInfoMonthRewards:InfoMonthReward[] = [];
    getStrInfoMonthReward(arrInfoMonthRewards:InfoMonthReward[]){
        let strDataInfoMonthReward:string = ""; 
        for(let i=0;i<arrInfoMonthRewards.length;i++){
            let infoMonthReward:InfoMonthReward = arrInfoMonthRewards[i];
            if(i == arrInfoMonthRewards.length - 1){
                strDataInfoMonthReward += infoMonthReward.infoMonth.year + "-" + infoMonthReward.infoMonth.month + "-" + infoMonthReward.indexReward;
            }else{
                strDataInfoMonthReward += infoMonthReward.infoMonth.year + "-" + infoMonthReward.infoMonth.month + "-" + infoMonthReward.indexReward + "|";
            }
        }
        return strDataInfoMonthReward;
    }

    getInfoMonthReward(strDataInfoMonthReward:string){
        if(strDataInfoMonthReward == "") return [];
        let arrDataInfoMonthReward = strDataInfoMonthReward.split("|");
        let arrInfoMonthRewards:InfoMonthReward[] = [];
        for(let i=0;i<arrDataInfoMonthReward.length;i++){
            let dataInfoMonthReward = arrDataInfoMonthReward[i].split("-");
            let infoMonthReward:InfoMonthReward = new InfoMonthReward(new InfoMonth(parseInt(dataInfoMonthReward[1]),parseInt(dataInfoMonthReward[0])),parseInt(dataInfoMonthReward[2]));
            arrInfoMonthRewards.push(infoMonthReward);
        }
        return arrInfoMonthRewards;
    }

    addInfoMonthReward(infoMonth:InfoMonth,indexReward:number){
        // console.log("addInfoMonthReward infoMonth:"+infoMonth.year+"-"+infoMonth.month+" indexReward:"+indexReward);
        let infoMonthReward:InfoMonthReward = new InfoMonthReward(infoMonth,indexReward);
        if(this.arrInfoMonthRewards.indexOf(infoMonthReward) == -1){
            this.arrInfoMonthRewards.push(infoMonthReward);
        }
        // console.log(this.getStrInfoMonthReward(this.arrInfoMonthRewards));
        configuration.instance.setDataInfoMonth_Reward(this.getStrInfoMonthReward(this.arrInfoMonthRewards));
    }

    getInfoMonthReward_byInfoMonth(infoMonth:InfoMonth){
        for(let i=0;i<this.arrInfoMonthRewards.length;i++){
            let infoMonthReward:InfoMonthReward = this.arrInfoMonthRewards[i];
            if(infoMonthReward.infoMonth.year == infoMonth.year && infoMonthReward.infoMonth.month == infoMonth.month){
                return infoMonthReward;
            }
        }
        return null;
    }

    checkReceivedInfoMonthReward(infoMonthReward:InfoMonthReward){
        // console.log("checkReceivedInfoMonthReward infoMonth:"+infoMonthReward.infoMonth.year+"-"+infoMonthReward.infoMonth.month+" indexReward:"+infoMonthReward.indexReward);
        // console.log(this.arrInfoMonthRewards);
        for(let i=0;i<this.arrInfoMonthRewards.length;i++){
            let infoMonthReward_2:InfoMonthReward = this.arrInfoMonthRewards[i];
            if(infoMonthReward_2.infoMonth.year == infoMonthReward.infoMonth.year && infoMonthReward_2.infoMonth.month == infoMonthReward.infoMonth.month && infoMonthReward_2.indexReward == infoMonthReward.indexReward){
                return true;
            }
        }
        return false;
    }

    arrDailyChallengeRewards:GroupRewardDataInfo[] = [];
    //#endregion

    //#region TUTORIAL
    TUTORIAL_LEVEL_SHOW_BOOSTER = 5;

    isTutLevel5:boolean = false;

    setTutLevel5_Finshed(){
        this.isTutLevel5 = true;
        configuration.instance.setData_TutLevel5(this.isTutLevel5);
    }
    //#endregion

    //#region THEME
    arrThemeSelected:number[] = [];
    mapThemeUnlocked:Map<THEME_TYPE,number[]> = new Map<THEME_TYPE,number[]>();


    getThemeSelected(strThemeSelected:string){
        let arrThemeSelected = strThemeSelected.split("|");
        for(let i=0;i<arrThemeSelected.length;i++){
            this.arrThemeSelected.push(parseInt(arrThemeSelected[i]));
        }

        // console.log(this.arrThemeSelected);
    }
    

    getStrThemeSelected(){
        let strThemeSelected:string = "";
        for(let i=0;i<this.arrThemeSelected.length;i++){
            if(i< this.arrThemeSelected.length - 1){
                strThemeSelected += this.arrThemeSelected[i]+"|";
            }else{
                strThemeSelected += this.arrThemeSelected[i];
            }
        }
        return strThemeSelected;
    }

    setThemeSelected(themeType:THEME_TYPE,itemID:number){
        this.arrThemeSelected[themeType] = itemID;
        configuration.instance.setData_ThemeSelected(this.getStrThemeSelected());

        // console.log("setThemeSelected000",themeType,itemID);
        clientEvent.dispatchEvent(Constants.THEME_SELECTED_UPDATE, themeType, itemID);
    }

    getThemeSelected_byThemeType(themeType:THEME_TYPE){
        if(themeType == THEME_TYPE.TUBE){
            return 1;
        }
        return this.arrThemeSelected[themeType];
    }


    getThemeUnlocked(strThemeUnlocked:string){
        // console.log("getThemeUnlocked",strThemeUnlocked);
        let arrThemeUnlocked = strThemeUnlocked.split("|");
        for(let i=0;i<arrThemeUnlocked.length;i++){
            this.mapThemeUnlocked.set(i,[]);
            if(arrThemeUnlocked[i].length > 0){
                let arrUnlocked:string[] = arrThemeUnlocked[i].split(",");
                for(let j=0;j<arrUnlocked.length;j++){
                    this.mapThemeUnlocked.get(i).push(parseInt(arrUnlocked[j]));
                } 
            }
        }


        // console.log(this.mapThemeUnlocked);
    }

    getStrThemeUnlocked_byThemeType(themeType:THEME_TYPE){
        let strThemeUnlocked:string = "";
        let arrThemeUnlocked:number[] = this.mapThemeUnlocked.get(themeType);
        for(let i=0;i<arrThemeUnlocked.length;i++){
            if(i< arrThemeUnlocked.length - 1){
                strThemeUnlocked += arrThemeUnlocked[i]+",";
            }else{
                strThemeUnlocked += arrThemeUnlocked[i];
            }
        }

        return strThemeUnlocked;
    }

    getStrThemeUnlocked(){
        let strThemeUnlocked:string = this.getStrThemeUnlocked_byThemeType(THEME_TYPE.TUBE) +"|" + 
        this.getStrThemeUnlocked_byThemeType(THEME_TYPE.BG)+"|"+this.getStrThemeUnlocked_byThemeType(THEME_TYPE.SKIN);
        return strThemeUnlocked;
    }

    setThemeUnlocked(themeType:THEME_TYPE,itemID:number){
        // console.log("setThemeUnlocked",themeType,itemID);
        if(!this.mapThemeUnlocked.has(themeType)){
            this.mapThemeUnlocked.set(themeType,[]);
        }
        this.mapThemeUnlocked.get(themeType).push(itemID);
        // console.log(this.mapThemeUnlocked);
        // console.log(this.getStrThemeUnlocked());
        configuration.instance.setData_ThemeUnlocked(this.getStrThemeUnlocked());
    }

    checkThemeUnlocked(themeType:THEME_TYPE,itemID:number){
        // console.log(this.mapThemeUnlocked);
        if(!this.mapThemeUnlocked.has(themeType)){
            return false;
        }
        let arrThemeUnlocked:number[] = this.mapThemeUnlocked.get(themeType);
        if(arrThemeUnlocked.indexOf(itemID) > -1){
            return true;
        }
        return false;
    }

    getThemePath_byItemID(themeType:THEME_TYPE,itemID:number){
        if(themeType == THEME_TYPE.TUBE){
            return "theme/tube/" + itemID;
        }else if(themeType == THEME_TYPE.BG){
            return "theme/bg/" + itemID;
        }else if(themeType == THEME_TYPE.SKIN){
            return "theme/skin/" + itemID;
        }
    }
    //#endregion

    //#region SKIN
    arrSkinInfos:SkinInfo[] = [];

    getSkinInfo(skinID:number){
        for(let i=0;i<this.arrSkinInfos.length;i++){
            let skinInfo:SkinInfo = this.arrSkinInfos[i];
            if(skinInfo.id == skinID){
                return skinInfo;
            }
        }
        return null;
    }



    //#endregion

    //#region UNLOCK PROGRESS
    arrUnlockProgressInfos:UnlockProgressInfo[] = [];
    arrUnlockProgressInfo_Tubes:UnlockProgressInfo[] = [];
    arrUnlockProgressInfo_BGs:UnlockProgressInfo[] = [];

    initUnlockProgressInfos(){
        for(let i=0; i< this.arrUnlockProgressInfos.length;i++){
            if(this.arrUnlockProgressInfos[i].type == THEME_TYPE.TUBE){
                this.arrUnlockProgressInfo_Tubes.push(this.arrUnlockProgressInfos[i]);
            }else if(this.arrUnlockProgressInfos[i].type == THEME_TYPE.BG){
                this.arrUnlockProgressInfo_BGs.push(this.arrUnlockProgressInfos[i]);
            }
        }

        // console.log(this.arrUnlockProgressInfo_Tubes);
        // console.log(this.arrUnlockProgressInfo_BGs);
    }

    getUnlockProgressInfo_byThemeType(themeType:THEME_TYPE,itemID:number){
        if(themeType == THEME_TYPE.TUBE){
            for(let i=0;i<this.arrUnlockProgressInfo_Tubes.length;i++){
                if(this.arrUnlockProgressInfo_Tubes[i].itemID == itemID){
                    return this.arrUnlockProgressInfo_Tubes[i];
                }
            }
        }else if(themeType == THEME_TYPE.BG){
            for(let i=0;i<this.arrUnlockProgressInfo_BGs.length;i++){
                if(this.arrUnlockProgressInfo_BGs[i].itemID == itemID){
                    return this.arrUnlockProgressInfo_BGs[i];
                }
            }
        }
        return null;
    }

    getUnlockProgressInfo_Tubes_byLevel(level:number){
        let currUnlockProgressInfo:UnlockProgressInfo = null;
        let nextUnlockProgressInfo:UnlockProgressInfo = null;
        for(let i=0;i<this.arrUnlockProgressInfo_Tubes.length;i++){
            if(this.arrUnlockProgressInfo_Tubes[i].level >= level){
                currUnlockProgressInfo = this.arrUnlockProgressInfo_Tubes[i - 1];
                nextUnlockProgressInfo = this.arrUnlockProgressInfo_Tubes[i];

                return [currUnlockProgressInfo,nextUnlockProgressInfo];
            }
        }
        return null;
    }

    checkUnlockProgressInfo_Tubes_Available(level:number){
        let maxLevelUnlockProgressTubes:number = this.arrUnlockProgressInfo_Tubes[this.arrUnlockProgressInfo_Tubes.length - 1].level;
        if(level >= maxLevelUnlockProgressTubes){
            return false;
        }
        return true;
    }

    getUnlockProgressInfo_BGs_byLevel(level:number){
        let currUnlockProgressInfo:UnlockProgressInfo = null;
        let nextUnlockProgressInfo:UnlockProgressInfo = null;
        for(let i=0;i<this.arrUnlockProgressInfo_BGs.length;i++){
            if(this.arrUnlockProgressInfo_BGs[i].level >= level){
                currUnlockProgressInfo = this.arrUnlockProgressInfo_BGs[i - 1];
                nextUnlockProgressInfo = this.arrUnlockProgressInfo_BGs[i];

                return [currUnlockProgressInfo,nextUnlockProgressInfo];
            }
        }
        return null;
    }

    checkUnlockProgressInfo_BGs_Available(level:number){
        let maxLevelUnlockProgressTubes:number = this.arrUnlockProgressInfo_BGs[this.arrUnlockProgressInfo_BGs.length - 1].level;
        if(level >= maxLevelUnlockProgressTubes){
            return false;
        }
        return true;
    }
    //#endregion

    //#region CHESTS
    arrChests_GroupRewardDataInfos:GroupRewardDataInfo[] = [];

    getChests_GroupRewardDataInfo_byIndex(index:number){
        return this.arrChests_GroupRewardDataInfos[index % this.arrChests_GroupRewardDataInfos.length];
    }

    getChests_CountLevelUnlock(level:number){
        if(level < 9) return 5;
        return 8;
    }

    getChestProgress_byLevel(level:number){
        if(level < 9) {
            let progress:number = (level - 3) % 5;
            if(progress == 0) return 5;
            else return progress;
        }
        else {
            let progress:number = (level - 8) % 8;
            if(progress == 0) return 8;
            return (level -8) % 8;
        }
    }

    getChestIndex_byLevel(level:number){
        if(level < 9) return 0;
        return Math.floor((level - 8) / 8) + 1;
    }
    //#endregion

    //#region DAILY LOGIN
    arrDailyLogin_GroupRewardDataInfos:GroupRewardDataInfo[] = [];
    
    currDailyLoginIndex:number = 0;
    currDailyLoginLastDay:number = 0;
    currDailyLoginAdLastDay:number = 0;

    setDailyLogin_ReceiveReward(){
        this.currDailyLoginIndex ++;
        configuration.instance.setData_DailyLoginIndex(this.currDailyLoginIndex);

        this.currDailyLoginLastDay = this.getCurrDay();
        configuration.instance.setData_DailyLoginLastDay(this.currDailyLoginLastDay);
        this.setDailyQuest_ReceiveDailyLoginReward_Finished();
    }

    setDailyLogin_AdReceiveReward(){
        this.currDailyLoginAdLastDay = this.getCurrDay();
        configuration.instance.setData_DailyLoginAdLastDay(this.currDailyLoginAdLastDay);
    }

    getDailyLogin_GroupRewardDataInfo_byIndex(index:number){
        return this.arrDailyLogin_GroupRewardDataInfos[index];
    }
    //#endregion

    //#region DAILY QUEST
    dailyQuest_LastDay:number = 0;
    arrDailyQuest_GroupRewardDataInfos:GroupRewardDataInfo[] = [];
    arrDailyQuestDataInfos:QuestDataInfo[] = [];

    arrDailyQuest_Receives:number[] = [];

    dailyQuest_Login:number = 0;
    dailyQuest_Win:number = 0;
    dailyQuest_WinStreak:number = 0;
    dailyQuest_WinMaxStreak:number = 0;
    dailyQuest_Tournament:number = 0;
    dailyQuest_DailyChallenge:number = 0;
    dailyQuest_Booster:number = 0;

    getDailyQuestDataInfo_byID(idQuest:number){
        for(let i=0;i<this.arrDailyQuestDataInfos.length;i++){
            if(this.arrDailyQuestDataInfos[i].id == idQuest){
                return this.arrDailyQuestDataInfos[i];
            }
        }
        return null;
    }


    getDailyQuest_GroupRewardDataInfo_byIndex(indexBoxReward:number){
        return this.arrDailyQuest_GroupRewardDataInfos[indexBoxReward - 1];
    }

    getStrDailyQuestData(){
        return this.dailyQuest_Login+"|"+this.dailyQuest_Win+"|"+this.dailyQuest_WinStreak+"|"+this.dailyQuest_WinMaxStreak+"|"+this.dailyQuest_Tournament+"|"+this.dailyQuest_DailyChallenge+"|"+this.dailyQuest_Booster;
    }

    resetDailyQuestData(){
        this.dailyQuest_Login = 0;
        this.dailyQuest_Win = 0;
        this.dailyQuest_WinStreak = 0;
        this.dailyQuest_WinMaxStreak = 0;
        this.dailyQuest_Tournament = 0;
        this.dailyQuest_DailyChallenge = 0;
        this.dailyQuest_Booster = 0;

        this.dailyQuest_LastDay = this.getCurrDay();
        this.arrDailyQuest_Receives = [];

        configuration.instance.setData_DailyQuestLastDay(this.dailyQuest_LastDay);
        configuration.instance.setData_DailyQuestData(this.getStrDailyQuestData());
        configuration.instance.setData_DailyQuestReceives(this.arrDailyQuest_Receives);
    }

    initDailyQuestData(strDailyQuestData:string){
        if(strDailyQuestData == "") return;
        if(strDailyQuestData.indexOf("|") == -1) return;
        let arrData = strDailyQuestData.split("|");
        if(arrData[0]){
            this.dailyQuest_Login = parseInt(arrData[0]);
        }
        
        if(arrData[1]){
            this.dailyQuest_Win = parseInt(arrData[1]);
        }

        if(arrData[2]){
            this.dailyQuest_WinStreak = parseInt(arrData[2]);
        }

        if(arrData[3]){
            this.dailyQuest_WinMaxStreak = parseInt(arrData[3]);
        }

        if(arrData[4]){
            this.dailyQuest_Tournament = parseInt(arrData[4]);
        }

        if(arrData[5]){
            this.dailyQuest_DailyChallenge = parseInt(arrData[5]);
        }

        if(arrData[6]){
            this.dailyQuest_Booster = parseInt(arrData[6]);
        }
    }

    setDailyQuest_ReceiveDailyLoginReward_Finished(){
        this.dailyQuest_Login = 1;
        configuration.instance.setData_DailyQuestData(this.getStrDailyQuestData());
    }

    setDailyQuest_AddWin(){
        this.dailyQuest_Win++;
        this.dailyQuest_WinStreak++;
        if(this.dailyQuest_WinStreak > this.dailyQuest_WinMaxStreak){
            this.dailyQuest_WinMaxStreak = this.dailyQuest_WinStreak;
        }
        configuration.instance.setData_DailyQuestData(this.getStrDailyQuestData());
    }

    setDailyQuest_CompletedTournament(){
        this.dailyQuest_Tournament ++;
        configuration.instance.setData_DailyQuestData(this.getStrDailyQuestData());
    }

    setDailyQuest_CompletedDailyChallenge(){
        this.dailyQuest_DailyChallenge = 1;
        configuration.instance.setData_DailyQuestData(this.getStrDailyQuestData());
    }

    setDailyQuest_UseBooster(){
        this.dailyQuest_Booster++;
        configuration.instance.setData_DailyQuestData(this.getStrDailyQuestData());
    }

    getDailyQuestProgress_byID(idQuest:number){
        if(idQuest == 1){
            return this.dailyQuest_Login;
        }else if(idQuest == 2 || idQuest == 3 || idQuest == 4 || idQuest == 5){
            return this.dailyQuest_Win;
        }else if(idQuest == 6){
            return this.dailyQuest_Tournament;
        }else if(idQuest == 7){
            return this.dailyQuest_DailyChallenge;
        }else if(idQuest == 8 || idQuest == 9 || idQuest == 10){
            return this.dailyQuest_Booster;
        }
    }

    setDailyQuestReceive_byID(idQuest:number){
        this.arrDailyQuest_Receives.push(idQuest);
        configuration.instance.setData_DailyQuestReceives(this.arrDailyQuest_Receives);
    }

    checkDailyQuestReceive_byID (idQuest:number){
        return this.arrDailyQuest_Receives.indexOf(idQuest) > -1;
    }

    getDailyQuest_BoxRewadValue_byIndexBox(indexBox:number){
        return indexBox * 20;
    }
    //#endregion

    //#region AVATARS
    mapCacheAvatars:Map<string,SpriteFrame> = new Map<string,SpriteFrame>();
    //#endregion

    //#region LEADERBOARD
    arrLeaderBoardDataInfos:LeaderboardDataInfo[] = [];
    mapLeaderBoard_ItemRankInfos:Map<string,ItemRankInfo[]> = new Map();
    mapLeaderBoard_Totals:Map<string,number> = new Map();
    mapLeaderBoard_MyScores:Map<string,number> = new Map();

    getWorldContextID_byWeek(indexWeek:number){
        return Constants.PGS_GAMEID+"_week_"+indexWeek;
    }

    getLeaderBoardMyScore_byID(leaderboardId:string){
        if(this.mapLeaderBoard_MyScores.has(leaderboardId)){
            return this.mapLeaderBoard_MyScores.get(leaderboardId);
        }
        return 0;
    }

    setLeaderBoardMyScore_byID(leaderboardId:string,score:number){
        this.mapLeaderBoard_MyScores.set(leaderboardId,score);
    }

    getLeaderBoardMyScore_byTournamentID(tournamentId:string){
        if(this.mapLeaderBoard_MyScores.has(tournamentId)){
            return this.mapLeaderBoard_MyScores.get(tournamentId);
        }
        return 0;
    }

    setLeaderBoardMyScore_byTournamentID(tournamentId:string,score:number){
        this.mapLeaderBoard_MyScores.set(tournamentId,score);
    }

    // getFriendContextID_byWeek(indexWeek:number){
    //     return "friend_"+indexWeek%20;
    // }

    getLeaderBoardDataInfo_byContextID(contextID:string){
        for(let i = 0; i < this.arrLeaderBoardDataInfos.length; i++){
            if(this.arrLeaderBoardDataInfos[i].contextId == contextID){
                return this.arrLeaderBoardDataInfos[i];
            }
        }
        return null;
    }

    getListItemRankInfos_byLeaderboardId(leaderboardId:string){
        if(this.mapLeaderBoard_ItemRankInfos.has(leaderboardId)){
            return this.mapLeaderBoard_ItemRankInfos.get(leaderboardId).filter(item => item.userScore > 0);
        }
        return [];
    }
    //#region 

    getBoosterType_byshopItemType(shopItemType:SHOP_ITEM_TYPE){
        switch(shopItemType){
            case SHOP_ITEM_TYPE.BOOSTER_UNDO: //4
                return BOOSTER_TYPE.UNDO; 
            case SHOP_ITEM_TYPE.BOOSTER_SUGGEST: //5
                return BOOSTER_TYPE.SUGGEST;
            case SHOP_ITEM_TYPE.BOOSTER_ADDCOL: //6
                return BOOSTER_TYPE.ADDCOL;
        }
        return null;
    }

    //#region TOURNAMENT
    TOURNAMENT_PRICE_REVIVE:number = 500;
    arrTournament_LeaderBoardDataInfos:LeaderboardDataInfo[] = []; //tournament LeaderBoard

    currLeaderboardDataInfo:LeaderboardDataInfo = null;

    // currLeaderboardTournament_MyScore:number = -1;

    currSessionLeaderboardDataInfo:LeaderboardDataInfo = null;

    currLevelStartTournament:number = 0;
    currIndexLevelTournament:number = 1;

    isStartTournament:boolean = false;
    isTournamentRevivebyAd:boolean = false;


    // setLeaderboardTournament_MyScore(score:number){
    //     this.currLeaderboardTournament_MyScore = score;
    // }


    //#endregion

    //#region SHOP ITEM POPUP
    currShopItemPopup_BoosterType:BOOSTER_TYPE = null;
    //#endregion

    //#region COMBO
    TIME_COMBO: number = 4;
    //#endregion

    ordinal_suffix_of(i:number) {
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

    arrTopPlayers:ItemRankInfo[] = [];
    arrDefault_Names:string[] = ["Amity","Edna","Giselle","Mario","Mai","Moudi","Maria","Erenn","Edward","Sai","Shawn","Santilli","Brooke","Shaun","Torres","Vera","Donna","Martha","Sorak","Helen","Gwena","Andrea","Scarlet","Yatsu","Iris"];
    //#region RACE

    RACE_LEVEL_UNLOCK:number = 11;

    raceActive: number = 0;
    raceLastTime: number = 0;
    raceFinishedTime:number = 0;
    raceScore:number = 0;
    raceRewardFinished: number = 0;
    RACE_TIME:number = 2 * 60 * 60;

    arrPlayerRaceDataInfos:PlayerRaceDataInfo[] = [];

    getStrRaceInfoDatas(){
        return this.raceActive+"|"+this.raceLastTime+"|"+this.raceFinishedTime+"|"+this.raceScore+"|"+this.raceRewardFinished;
    }

    setRaceInfoDatas(datas:string){
        if(datas.length > 0){
            let arrDatas:string[] = datas.split("|");
            this.raceActive = parseInt(arrDatas[0]);
            this.raceLastTime = parseInt(arrDatas[1]);
            this.raceFinishedTime = parseInt(arrDatas[2]);
            this.raceScore = parseInt(arrDatas[3]);
            this.raceRewardFinished = parseInt(arrDatas[4]);
        }
    }


    setStartRace(){
        this.raceActive = 1;
        this.raceLastTime = this.getCurrTime();
        this.raceScore = 0;

        this.raceRewardFinished = 0;
        this.arrPlayerRaceDataInfos = [];

        configuration.instance.setData_RaceInfos(this.getStrRaceInfoDatas());

        let arrPlayerTops:ItemRankInfo[] = lodash.cloneDeep(localConfig.instance.arrTopPlayers);
        if(arrPlayerTops.length > 4){
            
        }else{
            let arrDefault_Names:string[] = lodash.cloneDeep(localConfig.instance.arrDefault_Names);
            let arrAvatars:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
            for(let i = 0; i < 4; i++){
                let itemRankInfo:ItemRankInfo = new ItemRankInfo();
                let indexName:number = lodash.random(0, arrDefault_Names.length - 1);
                let indexAvatar:number = lodash.random(0, arrAvatars.length - 1);

                itemRankInfo.userName = arrDefault_Names[indexName];
                itemRankInfo.avatarType = AVATAR_TYPE.TYPE_LOCAL;
                itemRankInfo.avatarURL = arrAvatars[indexAvatar].toString();
                itemRankInfo.playerID = ""+indexAvatar;
                arrDefault_Names.splice(indexName, 1);
                arrAvatars.splice(indexAvatar, 1);

                arrPlayerTops.push(itemRankInfo);
            }
        }

        for(let i =0; i< 4; i++){
            let raceOpponent:PlayerRaceDataInfo = new PlayerRaceDataInfo(); //PlayerRaceDataInfo
            let indexRankInfo:number = lodash.random(0, arrPlayerTops.length - 1);
            let itemRankInfo:ItemRankInfo = arrPlayerTops[indexRankInfo];
            raceOpponent.userName = itemRankInfo.userName;
            raceOpponent.avatarType = itemRankInfo.avatarType;
            raceOpponent.avatarURL = itemRankInfo.avatarURL;
            raceOpponent.playerID = itemRankInfo.playerID;
            raceOpponent.raceSkinID = lodash.random(1, 12);
            let countTime:number = 0;
            for(let j=0; j < 10; j++){
                countTime += lodash.random(2 * 60, 6 * 60);
                raceOpponent.arrTimes.push(countTime);
            }

            this.arrPlayerRaceDataInfos.push(raceOpponent);

            arrPlayerTops.splice(indexRankInfo, 1);
        }

        // console.log(this.arrPlayerRaceDataInfos);
        configuration.instance.setData_RaceOpponents(this.arrPlayerRaceDataInfos);
        clientEvent.dispatchEvent(Constants.TUBERACE_UPDATE);
    }

    getRaceScore_Opponent(timePlayed:number, arrTimes:number[]){
        for(let i = 0; i < arrTimes.length; i++){
            if(timePlayed < arrTimes[i]){
                return i;
            }
        }
        return 10;
    }

    updateRaceLastTime(){
        this.raceLastTime = this.getCurrTime();
        clientEvent.dispatchEvent(Constants.TUBERACE_UPDATE);
        configuration.instance.setData_RaceInfos(this.getStrRaceInfoDatas());
    }

    updateRaceFinished(){
        this.raceFinishedTime = this.getCurrTime();
        this.raceScore = 10;
        this.raceActive = 1;
        configuration.instance.setData_RaceInfos(this.getStrRaceInfoDatas());
    }

    resetRaceDatas(){
        this.isInitRaceGroup = false;
        this.raceActive = 0;
        this.raceLastTime = 0;
        this.raceScore = 0;
        this.raceRewardFinished = 0;
        configuration.instance.setData_RaceInfos(this.getStrRaceInfoDatas());

        this.arrPlayerRaceDataInfos = [];
        configuration.instance.setData_RaceOpponents(this.arrPlayerRaceDataInfos);
        clientEvent.dispatchEvent(Constants.TUBERACE_UPDATE);
    }

    checkRaceFinished(){
        if(this.raceActive == 0) return false;
        if(this.raceScore >= 10) return true;
        if(this.raceLastTime + this.RACE_TIME < this.getCurrTime()) return true;
        let countOppoent_Finished:number = 0;
        let timePlayed:number = this.getCurrTime() - this.raceLastTime;
        for(let i = 0; i < this.arrPlayerRaceDataInfos.length; i++){
            let scoreOpponent:number = this.getRaceScore_Opponent(timePlayed, this.arrPlayerRaceDataInfos[i].arrTimes);
            if(scoreOpponent >= 10) countOppoent_Finished++;
        }

        if(countOppoent_Finished >= 3) return true;
        return false;
    }


    addRaceScore(){
        if(this.currLevelUnlock < this.RACE_LEVEL_UNLOCK){
            return;
        }
        if(this.raceActive == 0) return;
        this.raceScore++;
        if(this.raceScore >= 10) {
            this.updateRaceFinished();
        }
        clientEvent.dispatchEvent(Constants.TUBERACE_UPDATE);
        configuration.instance.setData_RaceInfos(this.getStrRaceInfoDatas());
    }

    arrRace_GroupRewardDataInfos:GroupRewardDataInfo[] = [];

    isInitRaceGroup:boolean = false;
    //#endregion


    //#region CHARACTER
    getStrAnimationIdle_byID(id:number){
        return "idle_character"+id;
    }

    getStrAnimationRun_byID(id:number){
        return "run_character"+id;
    }

    getStrAnimationAppear_byID(id:number){
        return "appear_character"+id;
    }

    getStrAnimationDance_byID(id:number){
        return "dance_character"+id;
    }

    getStrAnimationJump_byID(id:number,isJumpRight:boolean){
            if(isJumpRight){
                return "jumd_R_character"+id;
            }else{
                return "jumd_L_character"+id;
            }
        }
    //#endregion

    //#region PASS
    PASS_LEVEL_UNLOCK:number = 16;

    PASS_TIME:number = 6 * 24 * 60 * 60;
    PASS_TIME_CLAIM:number = 24 * 60 * 60;
    

    arrPassRewardDataInfos:PassRewardDataInfo[] = [];

    passLevelWin:number = 0;
    arrPassFreeClaims:number[] = [];
    arrPassMasterClaims:number[] = [];
    passLastTime:number = 0;

    passActivated:boolean = false;

    passIndexAvailable:number = 0;
    passProgess:number = 0;
    passCountLevel:number = 0;

    passTutorial:boolean = false;

    setMassterPassTutorialFinished(){
        this.passTutorial = true;
        configuration.instance.setData_MasterPassTutorial();
    }
    
    getStrPassDataInfos(){
        return this.passLevelWin+"#"+this.getStrPassFreeClaims()+"#"+this.getStrPassMasterClaims()+"#"+this.passLastTime;
    }

    getStrPassFreeClaims(){
        let strFree:string = "";
        for(let i = 0; i < this.arrPassFreeClaims.length; i++){
            if(i < this.arrPassFreeClaims.length - 1){
                strFree += this.arrPassFreeClaims[i] + "|";
            }else{
                strFree += this.arrPassFreeClaims[i];
            }
        }
        return strFree;
    }

    getStrPassMasterClaims(){
        let strMaster:string = "";
        for(let i = 0; i < this.arrPassMasterClaims.length; i++){
            if(i < this.arrPassMasterClaims.length - 1){
                strMaster += this.arrPassMasterClaims[i] + "|";
            }else{
                strMaster += this.arrPassMasterClaims[i];
            }
        }
        return strMaster;
    }

    setPassDataInfos(strPassDataInfos:string){
        if(strPassDataInfos == "") {
            this.activeNewPassDataInfos();
            return;
        }
        let arrPassDataInfos = strPassDataInfos.split("#");
        this.passLevelWin = parseInt(arrPassDataInfos[0]);
        // this.passLevelWin = 3;
        this.arrPassFreeClaims = [];
        if(arrPassDataInfos[1] .length > 0){ 
            for(let i = 0; i < arrPassDataInfos[1].split("|").length; i++){
                this.arrPassFreeClaims.push(parseInt(arrPassDataInfos[1].split("|")[i]));
            }
        }
        this.arrPassMasterClaims = [];

        if(arrPassDataInfos[2] .length > 0){ 
            for(let i = 0; i < arrPassDataInfos[2].split("|").length; i++){
                this.arrPassMasterClaims.push(parseInt(arrPassDataInfos[2].split("|")[i]));
            }
        }
        this.passLastTime = parseInt(arrPassDataInfos[3]);
        this.setIndexPassAvailable();
        
        let currTime:number = this.getCurrTime();
        if(currTime - this.passLastTime > (this.PASS_TIME + this.PASS_TIME_CLAIM)) {
            this.activeNewPassDataInfos();
        }
    }

    activeNewPassDataInfos(){
        // console.log("activeNewPassDataInfos");
        if(this.currLevelUnlock < this.PASS_LEVEL_UNLOCK){
            return;
        }
        this.passLevelWin = 0;
        this.arrPassFreeClaims = [];
        this.arrPassMasterClaims = [];
        this.passLastTime = this.getCurrTime();
        this.passActivated = false;
        this.passIndexAvailable = 0;
        configuration.instance.setData_MasterPassInfos(this.getStrPassDataInfos());
        configuration.instance.setData_MasterPassActivated(this.passActivated);

        clientEvent.dispatchEvent(Constants.PASS_UPDATE);
    }

    addPassLevel(){
        if(this.currLevelUnlock < this.PASS_LEVEL_UNLOCK){
            return;
        }
        if(this.passLastTime + this.PASS_TIME < this.getCurrTime()) return;
        this.passLevelWin += 1;
        configuration.instance.setData_MasterPassInfos(this.getStrPassDataInfos());

        this.setIndexPassAvailable();
    }

    addPassFreeClaim(indexPass:number){
        if(this.arrPassFreeClaims.indexOf(indexPass) == -1) {
            this.arrPassFreeClaims.push(indexPass);
        }
        configuration.instance.setData_MasterPassInfos(this.getStrPassDataInfos());
        clientEvent.dispatchEvent(Constants.PASS_UPDATE);
    }

    addPassMasterClaim(indexPass:number){
        if(this.arrPassMasterClaims.indexOf(indexPass) == -1) {
            this.arrPassMasterClaims.push(indexPass);
        }
        configuration.instance.setData_MasterPassInfos(this.getStrPassDataInfos());
        clientEvent.dispatchEvent(Constants.PASS_UPDATE);
    }

    setIndexPassAvailable(){
        let countLevel:number = this.passLevelWin;
        for(let i = 0; i< this.arrPassRewardDataInfos.length; i++){
            if(countLevel >= i){
                countLevel = countLevel - i;
            }else{
                this.passIndexAvailable = i - 1;
                this.passProgess = countLevel;
                this.passCountLevel = i;
                // console.log("passIndexAvailable:"+this.passIndexAvailable+" passProgess:"+this.passProgess+" passCountLevel:"+this.passCountLevel);
                return;
            }
        }
        if(countLevel > 0){
            this.passIndexAvailable = this.arrPassRewardDataInfos.length - 1;
            this.passProgess = this.arrPassRewardDataInfos.length;
            this.passCountLevel =  this.arrPassRewardDataInfos.length;

            // console.log("passIndexAvailable:"+this.passIndexAvailable+" passProgess:"+this.passProgess+" passCountLevel:"+this.passCountLevel);
        }

        clientEvent.dispatchEvent(Constants.PASS_UPDATE);

    }


    setPassActivated(){
        this.passActivated = true;
        configuration.instance.setData_MasterPassActivated(this.passActivated);

        clientEvent.dispatchEvent(Constants.PASS_UPDATE);
    }
    //#endregion

    //#region SPIN
    SPIN_LEVEL_UNLOCK:number = 6;

    arrSpinRewardDataInfos:SpinRewardDataInfo[] = [];

    spinLastTime:number = 0;
    spinFreeCount:number = 0;

    initSpin(){
        this.spinFreeCount = 3;
        configuration.instance.setData_SpinFreeCount(this.spinFreeCount);
    }

    setSpinLastTime() {
        this.spinLastTime = this.getCurrDay();
        configuration.instance.setData_SpinLastTime(this.spinLastTime);
    }

    setSpinFreeCount(count: number) {
        this.spinFreeCount = count;
        configuration.instance.setData_SpinFreeCount(this.spinFreeCount);
    }

    checkFreeSpin(){
        if(this.getCurrDay() > this.spinLastTime){
            return true;
        }
        return false;
    }
    //#region SPIN

    isMobile:boolean = true;
    scaleBG:number = 1;
    // PADDING_TOP_DEFAULT:number = 120;
    DEFAULT_W:number = 1080;
    DEFAULT_H:number = 1920;


    freeVideo_lastTime:number = 0;
    FREEVIDEO_NEXTTIME:number = 2 * 60;

    //#region WITH FRIEND
    currWithFriendDataInfo:WithFriendDataInfo = null;
    //#endregion

    arrShopItem_Free:boolean[] = [false,false,false];

    setResetShopItem_Free(){
        this.arrShopItem_Free = [false,false,false];
    }

    getShopItem_Free_byBoosterType(boosterType:BOOSTER_TYPE):boolean{
        return this.arrShopItem_Free[boosterType];
    }

    setShopItem_Free_byBoosterType(boosterType:BOOSTER_TYPE){
        this.arrShopItem_Free[boosterType] = true;
    }

    //#region NEW LEVELs
    arrMagicLevelConfigInfos:LevelConfigInfo[] = [];
    arrMagicLoopLevelConfigInfos:LevelConfigInfo[] = [];
    currLevelConfigInfo:LevelConfigInfo = null;


    getMagicLevelConfigInfo_byLevelIndex(levelIndex:number):LevelConfigInfo{
        if(levelIndex <= this.arrMagicLevelConfigInfos.length){
            return this.arrMagicLevelConfigInfos[levelIndex - 1];
        }else{
            let levelIndexLoop:number = (levelIndex - this.arrMagicLevelConfigInfos.length) % this.arrMagicLoopLevelConfigInfos.length;
            if(levelIndexLoop == 0){
                levelIndexLoop = this.arrMagicLoopLevelConfigInfos.length;
            }
            // console.log("levelIndexLoop:"+levelIndexLoop);
            return this.arrMagicLoopLevelConfigInfos[levelIndexLoop - 1];       
        }   
        return null;
    }

    currMagicLevelConfigInfo:MagicLevelDataInfo = null;
    getMagicLevelConfigInfo(magicLevelDataInfo:MagicLevelDataInfo):MagicLevelDataInfo{
        this.mapMagicColorIndex.clear();
        this.mapMagicCountColbyIndexY.clear();
        // let minPosX:number = 999;
        let minPosY:number = 999;

        // let maxPosX:number = -999;
        let maxPosY:number = -999;
        for(let i = 0; i < magicLevelDataInfo.B.length; i++){
            // if(minPosX > magicLevelDataInfo.B[i].P.x){
            //     minPosX = magicLevelDataInfo.B[i].P.x;
            // }
            // if(maxPosX < magicLevelDataInfo.B[i].P.x){
            //     maxPosX = magicLevelDataInfo.B[i].P.x;
            // }
            if(minPosY > magicLevelDataInfo.B[i].P.y){
                minPosY = magicLevelDataInfo.B[i].P.y;
            }
            if(maxPosY < magicLevelDataInfo.B[i].P.y){
                maxPosY = magicLevelDataInfo.B[i].P.y;
            }
        }

        let KC_X:number = 999;
        let KC_Y:number = 999;
        for(let i = 0; i < magicLevelDataInfo.B.length; i++){
            // if(magicLevelDataInfo.B[i].P.x - minPosX > 0 && magicLevelDataInfo.B[i].P.x - minPosX < KC_X){
            //     KC_X = magicLevelDataInfo.B[i].P.x - minPosX;
            // }

            if(magicLevelDataInfo.B[i].P.y - minPosY > 0 && magicLevelDataInfo.B[i].P.y - minPosY < KC_Y){
                KC_Y = magicLevelDataInfo.B[i].P.y - minPosY;
            }
        }

        for(let i = 0; i < magicLevelDataInfo.B.length; i++){
            // magicLevelDataInfo.B[i].indexX = Math.round((magicLevelDataInfo.B[i].P.x - minPosX) / KC_X);
            magicLevelDataInfo.B[i].indexY = Math.round((magicLevelDataInfo.B[i].P.y - minPosY) / KC_Y);
        }
        // magicLevelDataInfo.maxCol = Math.round((maxPosX - minPosX) / KC_X) + 1;
        magicLevelDataInfo.maxRow = Math.round((maxPosY - minPosY) / KC_Y) + 1;

        let currIndexY = -1;
        let currIndexX = -1;
        let maxIndexX = -1;
        for(let i=0; i< magicLevelDataInfo.B.length; i++){
            if(currIndexY != magicLevelDataInfo.B[i].indexY){
                currIndexY = magicLevelDataInfo.B[i].indexY;
                currIndexX = 0;
                magicLevelDataInfo.B[i].indexX = currIndexX;
            }else{
                currIndexX++;
                if(currIndexX > maxIndexX){
                    maxIndexX = currIndexX;
                }
                this.mapMagicCountColbyIndexY.set(currIndexY, currIndexX + 1);
                magicLevelDataInfo.B[i].indexX = currIndexX;
            }
        }
        magicLevelDataInfo.maxCol = maxIndexX+1;

        return magicLevelDataInfo;
    }

    REWARD_COIN_DEFAULT:number = 20;
    getRewardCoinby_LevelConfigInfo(levelConfigInfo:LevelConfigInfo):number{
        if(levelConfigInfo){
            if(levelConfigInfo.isSuperHard){
                return this.REWARD_COIN_DEFAULT * 5;
            }else if(levelConfigInfo.isHard){
                return this.REWARD_COIN_DEFAULT * 3;
            }
        }
        return this.REWARD_COIN_DEFAULT;
    }

    setMagicMappingColorIndex(magicLevelDataInfo:MagicLevelDataInfo){
        let arrIndexColors:number[] = [];
        for(let i = 0; i < magicLevelDataInfo.B.length; i++){
            for (let j = 0; j < magicLevelDataInfo.B[i].C.length; j++) {
                if (magicLevelDataInfo.B[i].C[j].BIM) {
                    if(arrIndexColors.indexOf(magicLevelDataInfo.B[i].C[j].BIM.CI) == -1){
                        arrIndexColors.push(magicLevelDataInfo.B[i].C[j].BIM.CI);
                    }
                }
            }
        }

        let uniqueCIList = Array.from(arrIndexColors).sort((a, b) => a - b);
        // console.log(uniqueCIList);
        for (let i = 0; i < uniqueCIList.length; i++) {
            this.mapMagicColorIndex.set(uniqueCIList[i], i);
        }
        // console.log(this.mapMagicColorIndex);
    }

    mapMagicColorIndex:Map<number,number> = new Map<number,number>();
    mapMagicCountColbyIndexY:Map<number,number> = new Map<number,number>();
    // arrWaterColors2:Color[] = [
    //     new Color(255,122,4), //ff7a04 x 0 //cam
    //     new Color(13,75,254), //0d4bfe x 1 
    //     new Color(59,195,23), //3bc317 x 2
    //     new Color(244,46,37), //F42E25 x 3
    //     new Color(151,23,224), //9717e0 x 4
    //     new Color(224,47,213), //e02fd5 x 5
    //     new Color(254,213,23), //fed517 x 6
    //     new Color(47,171,252), //2FABFC x 7
    //     new Color(0,248,254), //00F8FE x 8
    //     new Color(164,239,54), //A4EF36 x 9
    //     new Color(240,204,176), //F0CCB0 x 10
    // ];
   
    // arrWaterTOPColors2:Color[] = [
    //     new Color(254,161,118),//fea176 x 0
    //     new Color(77,119,255), //4d77ff x 1
    //     new Color(77,233,38), //4ddf26 x 2
    //     new Color(255,123,125), //FF7B7D x 3
    //     new Color(177,43,254),  //b12bfe x 4
    //     new Color(229,112,216),//b12bfe x 5
    //     new Color(255,228,147),//ffe493 x 6
    //     new Color(110,197,246), //6EC5F6 x 7
    //     new Color(174,255,240), //AEFFF0 x 8
    //     new Color(222,255,163), //DEFFA3 x 9
    //     new Color(250,234,214), //FAEAD6 x 10
    // ];

    // arrMagicColors:Color[] = [
    //     new Color(244,46,37),
    //     new Color(254,213,23),
    //     new Color(13,75,254), 
    //     new Color(59,195,23),
    //     new Color(151,23,224),
    //     new Color(255,122,4),
    //     new Color(224,47,213),
    //     new Color(47,171,252),
    //     new Color(164,239,54),
    //     new Color(0,248,254),
    //     new Color(240,204,176),
    //     new Color(115, 16, 85),
    // ];
   
    // arrMagicTOPColors:Color[] = [
    //     new Color(255,123,125),
    //     new Color(255,228,147),
    //     new Color(77,119,255),
    //     new Color(77,233,38), 
    //     new Color(177,43,254), 
    //     new Color(254,161,118), 
    //     new Color(229,112,216), 
    //     new Color(110,197,246), 
    //     new Color(222,255,163), 
    //     new Color(174,255,240), 
    //     new Color(250,234,214), 
    //     new Color(204, 51, 146), 
    // ];

    arrMagicColors2: Color[] = [
        new Color(196, 6, 2),     // Đỏ nâu cháy
        new Color(253, 194, 9),   // Vàng nghệ đậm
        new Color(23, 24, 189),   // Xanh lam cổ điển
        new Color(113, 166, 4),   // Xanh rêu tươi
        new Color(96, 32, 143),   // Tím mực đậm
        new Color(227, 91, 1),    // Cam đất cháy
        new Color(254, 111, 215), // Hồng neon tươi
        new Color(93, 100, 166),  // Xanh ghi đậm
        new Color(112, 50, 43),   // Nâu gạch trầm
        new Color(0, 133, 201),   // Xanh cyan đậm
        new Color(4, 45, 1),      // Xanh rừng tối
        new Color(115, 16, 85),   // Tím mận đậm
    ];
    
    arrMagicTOPColors2: Color[] = [
        new Color(246, 38, 35),    // Đỏ tươi sáng
        new Color(252, 216, 33),   // Vàng chanh sáng
        new Color(49, 79, 202),    // Xanh lam sáng
        new Color(174, 219, 58),   // Xanh lá non
        new Color(162, 49, 248),   // Tím hoa cà rực
        new Color(251, 146, 24),   // Cam ngọt sáng
        new Color(253, 150, 235),  // Hồng pastel ánh tím
        new Color(130, 141, 218),  // Xanh lavender
        new Color(174, 72, 69),    // Nâu đỏ rượu vang
        new Color(63, 186, 245),   // Xanh thiên thanh
        new Color(16, 88, 33),     // Xanh rêu đậm
        new Color(204, 51, 146),   // Hồng sen tím
    ];

    arrMagicColors: Color[] = [
        new Color(244, 46, 37),     // Đỏ tươi
        new Color(254, 213, 23),    // Vàng chanh
        new Color(13, 75, 254),     // Xanh dương đậm
        new Color(59, 195, 23),     // Xanh lá tươi
        new Color(151, 23, 224),    // Tím đậm
        new Color(255, 122, 4),     // Cam sáng
        new Color(224, 47, 213),    // Hồng tím
        new Color(47, 171, 252),    // Xanh trời
        new Color(164, 239, 54),    // Vàng lá sáng
        new Color(0, 248, 254),     // Xanh ngọc
        new Color(93, 100, 166),  // Xanh ghi đậm
        new Color(115, 16, 85),     // Tím mận
        new Color(138, 94, 255),    // Tím thiên thanh
        new Color(56, 255, 176),    // Xanh ngọc sáng
        new Color(255, 94, 165),    // Hồng cánh sen
       
    ];
    
    arrMagicTOPColors: Color[] = [
        new Color(255, 123, 125),   // Hồng sáng
        new Color(255, 228, 147),   // Vàng pastel
        new Color(77, 119, 255),    // Xanh dương nhạt
        new Color(77, 233, 38),     // Xanh lá non
        new Color(177, 43, 254),    // Tím sáng
        new Color(254, 161, 118),   // Cam đào
        new Color(229, 112, 216),   // Hồng tím pastel
        new Color(110, 197, 246),   // Xanh biển nhạt
        new Color(222, 255, 163),   // Vàng chanh nhạt
        new Color(174, 255, 240),   // Xanh ngọc nhạt
        new Color(130, 141, 218),  // Xanh lavender
        new Color(204, 51, 146),    // Hồng sen đậm
        new Color(186, 153, 255),   // Tím hoa cà nhạt
        new Color(128, 255, 217),   // Ngọc lam sáng
        new Color(255, 168, 203),   // Hồng pastel
        
        
    ];

    //#endregion

    //#region HEART
    HEART_TIME_RESET:number = 30 * 60;
    HEART_MAX_COUNT:number = 5;
    HEARE_PRICE:number = 900;
    currHeart:number = 0;
    currHeart_LastTime:number = 0;
    currHeart_CountTime:number = 0;

    currHeartUnlimited_CountTime:number = 0;
    currHeartUnlimited_LastTime:number = 0;

    initHeartUnlimited(){
        this.currHeartUnlimited_CountTime = configuration.instance.getData_HeartUnlimited() - (this.getCurrTime() - configuration.instance.getData_HeartUnlimited_LastTime());
        if(this.currHeartUnlimited_CountTime <= 0){
            this.currHeartUnlimited_CountTime = 0;
            configuration.instance.setData_HeartUnlimited(this.currHeartUnlimited_CountTime);
            configuration.instance.setData_HeartUnlimited_LastTime(this.getCurrTime());
        }
    }
    //#endregion


    //#region TUT CURTAIN
    isTutCurtain: boolean = false;

    setTutCurtainFinished() {
        this.isTutCurtain = true;
        configuration.instance.setData_TutCurtain(this.isTutCurtain);
    }
    //#endregion

    //#region TUT CLAY
    isTutClay: boolean = false;

    setTutClayFinished() {
        this.isTutClay = true;
        configuration.instance.setData_TutClay(this.isTutClay);
    }
    //#endregion

    //#region TUT PLASTER
    isTutPlaster: boolean = false;

    setTutPlasterFinished() {
        this.isTutPlaster = true;
        configuration.instance.setData_TutPlaster(this.isTutPlaster);
    }
    //#endregion


    //#region LOG SPLASH TIME
    splashStartTime:number = 0;
    //#endregion

    //#region LOG IAP
    iapCount:number = 0;

    setIAPCount(count: number) {
        this.iapCount = count;
        configuration.instance.setData_IAPCount(this.iapCount);


        LogEventManager.instance.logIAPCount(this.iapCount);
        LogEventManager.instance.logIsIAPUser(this.getIAPUser());
    }

    getIAPUser() {
        if (this.iapCount > 0) {
            return 1;
        }
        return 0;
    }
    //#endregion

    //#region LOG WIN,LOSE STREAK 
    winStreak:number = 0;
    loseStreak:number = 0;

    setAddWinStreak() {
        this.winStreak++;
        this.loseStreak = 0;
        configuration.instance.setData_WinStreak(this.winStreak);
        configuration.instance.setData_LoseStreak(this.loseStreak);

        LogEventManager.instance.logWinStreak(this.winStreak);
        LogEventManager.instance.logLoseStreak(this.loseStreak);
    }

    setAddLoseStreak() {
        this.winStreak = 0;
        this.loseStreak++;
        configuration.instance.setData_WinStreak(this.winStreak);
        configuration.instance.setData_LoseStreak(this.loseStreak);

        LogEventManager.instance.logWinStreak(this.winStreak);
        LogEventManager.instance.logLoseStreak(this.loseStreak);
    }
    //#endregion

    getLevelLoopByFromStr(levelOrder: string) {
        let strLevel:string = levelOrder.split("_")[1];
        return parseInt(strLevel);
    }

    playDurationStartTime:number = 0;
    playDurationEndTime:number = 0;

    playType:PLAY_TYPE = PLAY_TYPE.HOME;

    isNoMoves_AddCol_byAD: boolean = false;

    currTournamentPageHostDataInfo:TournamentPageHostDataInfo = null;


    
}


export type GetBase64Image_Callback = (base64Image:string) => void;

