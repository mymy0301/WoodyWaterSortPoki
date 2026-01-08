import { Asset, game, log, sys, _decorator } from "cc";
import { FBInstantManager } from "../common/FBInstantManager";
import { localConfig } from "../localConfig";
import { clientEvent } from "./clientEvent";
import { Constants, ENV_TYPE, SHOP_PACK_TYPE } from "./constants";
import { lodash } from "./lodash";
import { InfoDay } from "../common/InfoDay";
import { PlayerRaceDataInfo } from "../game/race/PlayerRaceDataInfo";
const { ccclass } = _decorator;

declare const jsb: any;
export type ValueObj = { [name: string]: string };

export type Constructor<T = unknown> = new (...args: any[]) => T;
export type AssetType<T = Asset> = Constructor<T>;
export type LoadCompleteCallback<T> = (error: Error | null, asset: T) => void;

@ccclass("configuration")
export class configuration {
    static _instance: configuration;

    static get instance () {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new configuration();
        // this._instance.start();
        return this._instance;
    }

    jsonData: any ={};
    path: any = null;
    KEY_CONFIG: string = Constants.GAME_NAME;
    markSave: boolean = false;
    saveTimer: number = -1;

    start () {
        // sys.localStorage.clear();
        this.jsonData = {
        };

        if(localConfig.instance.envType == ENV_TYPE.TEST_AD){
            this.path = this.getConfigPath();

            let content;
            if (sys.isNative) {
                const valueObject = jsb.fileUtils.getValueMapFromFile(this.path);

                content = valueObject[this.KEY_CONFIG];
            } else {
                content = sys.localStorage.getItem(this.KEY_CONFIG);
            }
            // console.log("configurationconfigurationconfiguration");
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
                }catch (excepaiton) {

                }

            }else{
                localConfig.instance.updatePlayerData_Finished();
            }

            // //启动无限定时器，每1秒保存一次数据，而不是无限保存数据
            // this.saveTimer = setInterval(() =>{
            //     this.scheduleSave();
            // }, 500);
        }
    }

    // getAllDataJson(){
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


    updateDataPlayer(content:string){
        try {
            this.jsonData = JSON.parse(content);
        } catch (error) {
            console.error(error);
            if(lodash.isObject(content)){
                this.jsonData = content;
            }
        }
        localConfig.instance.updatePlayerData_Finished();
    }
    setGlobalData (key:string, value: any) {
        this.jsonData[key] = value;
        this.save();
    }

    scheduleSave () {
        if (!this.markSave) {
            return;
        }

        this.save();
    }

    /**
     * 标记为已修改
     */
    markModified () {
        this.markSave = true;
    }

    save () {
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

        if(configuration.instance.mySaveInterval){
            clearInterval(configuration.instance.mySaveInterval);
        }

        if(configuration.instance.isCheckSaveInterval){
            configuration.instance.isCheckSaveInterval = false;
        }

        configuration.instance.mySaveInterval = setInterval(configuration.instance.saveInterval,300);
    }

    mySaveInterval = null;
    isCheckSaveInterval:boolean = true;
    saveInterval(){
        clearInterval(configuration.instance.mySaveInterval);
        configuration.instance.mySaveInterval = null;

        let str = JSON.stringify(configuration.instance.jsonData);
        

        if(localConfig.instance.envType == ENV_TYPE.TEST_AD ){
            // console.log(str);
            let zipStr = str;

            configuration.instance.markSave = false;

            if (!sys.isNative) {
                const ls = sys.localStorage;
                ls.setItem(configuration.instance.KEY_CONFIG, zipStr);
                return;
            }

            const valueObj: ValueObj = {};
            valueObj[configuration.instance.KEY_CONFIG] = zipStr;
            jsb.fileUtils.writeToFile(valueObj, configuration.instance.path);
        }

        FBInstantManager.instance.SetDataPlayer(str);
    }


    getConfigPath () {

        const platform = sys.platform;

        let path = "";

        if (sys.isNative) {
            path = jsb.fileUtils.getWritablePath();
            path = path + "conf";
        } else {
            path = "src/conf";
        }

        return path;
    }

    parseUrl (paramStr: string) {
        if (!paramStr || (typeof paramStr === 'string' && paramStr.length <= 0)) {
            // 没有带参数，直接忽略
            return;
        }

        let dictParam: any = {};
        if (typeof paramStr === 'string') {
            paramStr = paramStr.split('?')[1]; // 去除掉 ？号
            const arrParam = paramStr.split("&");
            arrParam.forEach(function (paramValue) {
                const idxEqual = paramValue.indexOf("=");
                if (idxEqual !== -1) {
                    const key = paramValue.substring(0, idxEqual);
                    dictParam[key] = paramValue.substring(idxEqual + 1);
                }
            });
        } else {
            dictParam = paramStr;
        }

        if (dictParam.action) {
            this.setGlobalData('urlParams', dictParam);
        }

        // todo：记录来源，以后用到
        if (dictParam.source) {
            this.setGlobalData('source', dictParam.source);
        }

        if (dictParam.adchannelid) {
            this.setGlobalData('adchannelid', dictParam.adchannelid);
        }
    }


    getGlobalData (key:string) {
        return this.jsonData[key];
    }

    hasGlobalData (key:string) {
        return this.jsonData.hasOwnProperty(key);
    }

    setData_Sound(isSound:boolean){
        this.jsonData[Constants.SOUND] = isSound ? 1 : 0;
        this.save();
    }

    getData_Sound () {
        if(this.jsonData.hasOwnProperty(Constants.SOUND)){
            return  this.jsonData[Constants.SOUND];
        }
        return 1;
    }

    setData_Music(isMusic:boolean){
        this.jsonData[Constants.MUSIC] = isMusic ? 1 : 0;
        this.save();
    }

    getData_Music () {
        if(this.jsonData.hasOwnProperty(Constants.MUSIC)){
            return  this.jsonData[Constants.MUSIC];
        }
        return 0;
    }

    setData_Vibration(isVibration:boolean){
        this.jsonData[Constants.VIBRATION] = isVibration ? 1 : 0;
        this.save();
    }

    getData_Vibration () {
        if(this.jsonData.hasOwnProperty(Constants.VIBRATION)){
            return  this.jsonData[Constants.VIBRATION];
        }
        return 1;
    }

    setData_Tops(isTops:boolean){
        this.jsonData[Constants.TOPS] = isTops ? 1 : 0;
        this.save();
    }

    getData_Tops () {
        if(this.jsonData.hasOwnProperty(Constants.TOPS)){
            return  this.jsonData[Constants.TOPS];
        }
        return 1;
    }

    setGlobalData_Tutorial_Finished(_indexTut:number){
        let key = `tutorial_${Constants.GAME_NAME}_${_indexTut}`;
        this.jsonData[key] = true;
        this.save();
    }


    getGlobalData_Tutorial_Finished(_indexTut:number){
        let key = `tutorial_${Constants.GAME_NAME}_${_indexTut}`;
        if(this.jsonData.hasOwnProperty(key)){
            return true;
        }
        return false;
    }

    //#region COIN
    setGlobalData_COIN(coin: number){
       
        this.jsonData[Constants.COIN] = coin;
        this.save();
    }

    getGlobalData_COIN(){
        if(this.jsonData.hasOwnProperty(Constants.COIN)){
            return  this.jsonData[Constants.COIN];
        }
        return 10000;
    }
    //#endregion

         

    //#region LOG CAMPID
    setData_CampID(logCampID:string){
        this.jsonData[Constants.LOG_CAMPID] = logCampID;
        this.save();
    }

    getData_CampID(){
        if(this.jsonData.hasOwnProperty(Constants.LOG_CAMPID)){
            return  this.jsonData[Constants.LOG_CAMPID];
        }
        return "";
    }
    //#endregion

    //#region LOG ADSET
    setData_AdsetID(logAdsetID:string){
        this.jsonData[Constants.LOG_ADSET] = logAdsetID;
        this.save();
    }

    getData_AdsetID(){
        if(this.jsonData.hasOwnProperty(Constants.LOG_ADSET)){
            return  this.jsonData[Constants.LOG_ADSET];
        }
        return "";
    }
    //#endregion

    //#region LOG ADS
    setData_AdsID(logAdsID:string){
        this.jsonData[Constants.LOG_ADS] = logAdsID;
        this.save();
    }

    getData_AdsID(){
        if(this.jsonData.hasOwnProperty(Constants.LOG_ADS)){
            return  this.jsonData[Constants.LOG_ADS];
        }
        return "";
    }
    //#endregion

    //#region LOG TOUR
    setData_TourID(logTourID:string){
        this.jsonData[Constants.LOG_TOUR] = logTourID;
        this.save();
    }

    getData_TourID(){
        if(this.jsonData.hasOwnProperty(Constants.LOG_TOUR)){
            return  this.jsonData[Constants.LOG_TOUR];
        }
        return "";
    }
    //#endregion

    //#region BLACK FRIDAY
    setData_BlackFriday(infoDay:InfoDay){
        this.jsonData[Constants.BLACK_FIRDAY] = infoDay;
        this.save();
    }

    getData_BlackFriday(){
        if(this.jsonData.hasOwnProperty(Constants.BLACK_FIRDAY)){
            return  this.jsonData[Constants.BLACK_FIRDAY];
        }
        return new InfoDay(1,1,2023);
    }
    //#endregion

    //#region BOOSTER COUNT
    setData_BoosterCount(arrBoosterCount:number[]){
        this.jsonData[Constants.BOOSTER_COUNT] = arrBoosterCount;
        this.save();
    }

    getData_BoosterCount(){
        if(this.jsonData.hasOwnProperty(Constants.BOOSTER_COUNT)){
            return  this.jsonData[Constants.BOOSTER_COUNT];
        }
        return [5,5,5];
    }
    //#endregion

    //#region TICKET
    setData_Ticket(arrTickets:number[]){
        this.jsonData[Constants.TICKET] = arrTickets;
        this.save();
    }

    getData_Ticket(){
        if(this.jsonData.hasOwnProperty(Constants.TICKET)){
            return  this.jsonData[Constants.TICKET];
        }
        return [0,0];
    }
    //#endregion

    //#region LEVEL UNLOCK
    setData_LevelUnlock(level:number){
        this.jsonData[Constants.LEVEL_UNLOCK] = level;
        this.save();
    }

    getData_LevelUnlock(){
        if(this.jsonData.hasOwnProperty(Constants.LEVEL_UNLOCK)){
            return  this.jsonData[Constants.LEVEL_UNLOCK];
        }
        return 1;
    }
    //#endregion

    //#region REMOVE AD
    setData_RemoveAd(isRemoveAd:boolean){
        this.jsonData[Constants.REMOVE_AD] = isRemoveAd;
        this.save();
    }

    getData_RemoveAd(){
        if(this.jsonData.hasOwnProperty(Constants.REMOVE_AD)){
            return  this.jsonData[Constants.REMOVE_AD];
        }
        return false;
    }
    //#endregion

    //#region SHOP FREE LAST DAY
    setData_ShopFreeLastTime(){
        this.jsonData[Constants.SHOP_FREE_LASTTIME] = localConfig.instance.getCurrTime();
        this.save();
    }

    getData_ShopFreeLastTime(){
        if(this.jsonData.hasOwnProperty(Constants.SHOP_FREE_LASTTIME)){
            return  this.jsonData[Constants.SHOP_FREE_LASTTIME];
        }
        return 0;
    }
    //#endregion

    //#region VIP
    setData_VIP(vipType:SHOP_PACK_TYPE){
        this.jsonData[Constants.VIP] = vipType;
        this.save();
    }

    getData_VIP(){
        if(this.jsonData.hasOwnProperty(Constants.VIP)){
            return  this.jsonData[Constants.VIP];
        }
        return 0;
    }
    //#endregion

    //#region VIP LAST DAY
    setData_VipLastDay(){
        this.jsonData[Constants.VIP_LASTDAY] = localConfig.instance.getCurrTime();
        this.save();
    }

    getData_VipLastDay(){        
        if(this.jsonData.hasOwnProperty(Constants.VIP_LASTDAY)){
            return  this.jsonData[Constants.VIP_LASTDAY];
        }
        return 0;
    }

    setData_VipLastDay_Reward(){
        this.jsonData[Constants.VIP_LASTDAY_REWARD] = localConfig.instance.getCurrDay();
        this.save();
    }

    getData_VipLastDay_Reward(){        
        if(this.jsonData.hasOwnProperty(Constants.VIP_LASTDAY_REWARD)){
            return  this.jsonData[Constants.VIP_LASTDAY_REWARD];
        }
        return 0;
    }
    //#endregion

    //#region DATA_INFODAY_FINISHED
    setDataInfoDay_Finished(strDataInfoDay_Finished: string) {
        this.jsonData[Constants.DATA_INFODAY_FINISHED] = strDataInfoDay_Finished;
        this.save();
    }

    getData_InfoDay_Finished() {
        if (this.jsonData.hasOwnProperty(Constants.DATA_INFODAY_FINISHED)) {

            return this.jsonData[Constants.DATA_INFODAY_FINISHED];
        }
        return "";
    }
    //#endregion

    //#region DATA_INFOMONTH_REWARD
    setDataInfoMonth_Reward(strDataInfoMonthReward: string) {
        this.jsonData[Constants.DATA_INFOMONTH_REWARD] = strDataInfoMonthReward;
        this.save();
    }

    getData_InfoMonth_Reward() {
        if (this.jsonData.hasOwnProperty(Constants.DATA_INFOMONTH_REWARD)) {

            return this.jsonData[Constants.DATA_INFOMONTH_REWARD];
        }
        return "";
    }
    //#endregion


    //#region TUT LEVEL 5
    setData_TutLevel5(isTutLevel5:boolean){
        this.jsonData[Constants.TUT_LEVEL5] = isTutLevel5 ? 1 : 0;
        this.save();
    }

    getData_TutLevel5 () {
        if(this.jsonData.hasOwnProperty(Constants.TUT_LEVEL5)){
            return  this.jsonData[Constants.TUT_LEVEL5];
        }
        return 0;
    }
    //#endregion


    //#region THEME SELECTED
    setData_ThemeSelected(themeSelected:string){
        this.jsonData[Constants.THEME_SELECTED] = themeSelected;
        this.save();
    }

    getData_ThemeSelected(){
        if(this.jsonData.hasOwnProperty(Constants.THEME_SELECTED)){
            return  this.jsonData[Constants.THEME_SELECTED];
        }
        return "1|1|1";
    }
    //#endregion

    //#region THEME UNLOCKED
    setData_ThemeUnlocked(themeUnlocked:string){
        this.jsonData[Constants.THEME_UNLOCKED] = themeUnlocked;
        this.save();
    }

    getData_ThemeUnlocked(){
        if(this.jsonData.hasOwnProperty(Constants.THEME_UNLOCKED)){
            return  this.jsonData[Constants.THEME_UNLOCKED];
        }
        return "1|1|1";
    }
    //#endregion

    //#region DAILY LOGIN INDEX
    setData_DailyLoginIndex(index:number){
        this.jsonData[Constants.DAILY_LOGIN_INDEX] = index;
        this.save();
    }

    getData_DailyLoginIndex(){
        if(this.jsonData.hasOwnProperty(Constants.DAILY_LOGIN_INDEX)){
            return  this.jsonData[Constants.DAILY_LOGIN_INDEX];
        }   
        return 0;
    }
    //#endregion

    //#region DAILY LOGIN LAST DAY
    setData_DailyLoginLastDay(lastDay:number){
        this.jsonData[Constants.DAILY_LOGIN_LASTDAY] = lastDay;
        this.save();
    }

    getData_DailyLoginLastDay(){
        if(this.jsonData.hasOwnProperty(Constants.DAILY_LOGIN_LASTDAY)){
            return  this.jsonData[Constants.DAILY_LOGIN_LASTDAY];
        }   
        return 0;
    }
    //#endregion

    //#region DAILY LOGIN AD LAST DAY
    setData_DailyLoginAdLastDay(lastDay:number){
        this.jsonData[Constants.DAILY_LOGIN_AD_LASTDAY] = lastDay;
        this.save();
    }

    getData_DailyLoginAdLastDay(){
        if(this.jsonData.hasOwnProperty(Constants.DAILY_LOGIN_AD_LASTDAY)){
            return  this.jsonData[Constants.DAILY_LOGIN_AD_LASTDAY];
        }   
        return 0;
    }
    //#endregion

    //#region DAILY QUEST RECEIVES
    setData_DailyQuestReceives(receiveIDs:number[]){
        this.jsonData[Constants.DAILY_QUEST_RECEIVES] = receiveIDs;
        this.save();
    }

    getData_DailyQuestReceives(){
        if(this.jsonData.hasOwnProperty(Constants.DAILY_QUEST_RECEIVES)){
            return  this.jsonData[Constants.DAILY_QUEST_RECEIVES];
        }   
        return [];
    }
    //#endregion

    //#region DAILY QUEST LAST DAY
    setData_DailyQuestLastDay(lastDay:number){
        this.jsonData[Constants.DAILY_QUEST_LASTDAY] = lastDay;
        this.save();
    }

    getData_DailyQuestLastDay(){    
        if(this.jsonData.hasOwnProperty(Constants.DAILY_QUEST_LASTDAY)){
            return  this.jsonData[Constants.DAILY_QUEST_LASTDAY];
        }
        return 0;
    }
    //#endregion

    //#region DAILY QUEST DATA
    setData_DailyQuestData(data:string){
        this.jsonData[Constants.DAILY_QUEST_DATA] = data;
        this.save();
    }

    getData_DailyQuestData(){
        if(this.jsonData.hasOwnProperty(Constants.DAILY_QUEST_DATA)){
            return  this.jsonData[Constants.DAILY_QUEST_DATA];
        }
        return "";
    }
    //#endregion
    

    //#region RACE
    setData_RaceInfos(strRaceInfos: string) {
        this.jsonData[Constants.TUBERACE_INFOS] = strRaceInfos;
        this.save();
    }

    getData_RaceInfos() {
        if (this.jsonData.hasOwnProperty(Constants.TUBERACE_INFOS)) {
            return this.jsonData[Constants.TUBERACE_INFOS];
        }
        return "";
    }
    setData_RaceOpponents(arrPlayerRaceDataInfos: PlayerRaceDataInfo[]) {
        this.jsonData[Constants.TUBERACE_OPPONENTS] = arrPlayerRaceDataInfos;
        this.save();
    }
    getData_RaceOpponents() {
        if (this.jsonData.hasOwnProperty(Constants.TUBERACE_OPPONENTS)) {
            return this.jsonData[Constants.TUBERACE_OPPONENTS];
        }
        return [];
    }
    //#endregion


    //#region MASTERPASS
    setData_MasterPassInfos(strMasterPassInfos: string) {
        this.jsonData[Constants.PASS_INFOS] = strMasterPassInfos;
        this.save();
    }

    getData_MasterPassInfos() {
        if (this.jsonData.hasOwnProperty(Constants.PASS_INFOS)) {
            return this.jsonData[Constants.PASS_INFOS];
        }
        return "";
    }

    setData_MasterPassActivated(activated: boolean) {
        this.jsonData[Constants.PASS_ACTIVATED] = activated;
        this.save();
    }

    getData_MasterPassActivated() {
        if (this.jsonData.hasOwnProperty(Constants.PASS_ACTIVATED)) {
            return this.jsonData[Constants.PASS_ACTIVATED];
        }
        return false;
    }

    setData_MasterPassTutorial() {
        this.jsonData[Constants.PASS_TUTORIAL] = 1;
        this.save();
    }

    getData_MasterPassTutorial() {
        if (this.jsonData.hasOwnProperty(Constants.PASS_TUTORIAL)) {
            return this.jsonData[Constants.PASS_TUTORIAL] == 1;
        }
        return false;
    }
    //#endregion

    //#region SPIN
    setData_SpinLastTime(lastTime: number) {
        this.jsonData[Constants.SPIN_LASTTIME] = lastTime;
        this.save();
    }

    getData_SpinLastTime() {
        if (this.jsonData.hasOwnProperty(Constants.SPIN_LASTTIME)) {
            return this.jsonData[Constants.SPIN_LASTTIME];
        }
        return 0;
    }

    setData_SpinFreeCount(count: number) {
        this.jsonData[Constants.SPIN_FREECOUNT] = count;
        this.save();
    }

    getData_SpinFreeCount() {
        if (this.jsonData.hasOwnProperty(Constants.SPIN_FREECOUNT)) {
            return this.jsonData[Constants.SPIN_FREECOUNT];
        }
        return 3;
    }
    //#endregion

    //#region HEART
    setData_HeartCount(count: number) {
        this.jsonData[Constants.HEART_COUNT] = count;
        this.save();
    }

    getData_HeartCount() {
        if (this.jsonData.hasOwnProperty(Constants.HEART_COUNT)) {
            return this.jsonData[Constants.HEART_COUNT];
        }
        return 5;
    }

    setData_HeartLastTime(lastTime: number) {
        this.jsonData[Constants.HEART_LASTTIME] = lastTime;
        this.save();
    }

    getData_HeartLastTime() {
        if (this.jsonData.hasOwnProperty(Constants.HEART_LASTTIME)) {
            return this.jsonData[Constants.HEART_LASTTIME];
        }
        return 0;
    }

    setData_HeartUnlimited(countTime: number) {
        this.jsonData[Constants.HEART_UNLIMITED_COUNTTIME] = countTime;
        this.save();
    }

    getData_HeartUnlimited() {
        if (this.jsonData.hasOwnProperty(Constants.HEART_UNLIMITED_COUNTTIME)) {
            return this.jsonData[Constants.HEART_UNLIMITED_COUNTTIME];
        }
        return 0;
    }

    setData_HeartUnlimited_LastTime(lastTime: number) {
        this.jsonData[Constants.HEART_UNLIMITED_LASTTIME] = lastTime;
        this.save();
    }

    getData_HeartUnlimited_LastTime() {
        if (this.jsonData.hasOwnProperty(Constants.HEART_UNLIMITED_LASTTIME)) {
            return this.jsonData[Constants.HEART_UNLIMITED_LASTTIME];
        }
        return 0;
    }
    //#endregion

    //#region SHOP DAILY FREE LAST DAY
    setData_ShopDailyFreeLastDay(lastDay: number) {
        this.jsonData[Constants.SHOP_DAILY_FREE_LASTDAY] = lastDay;
        this.save();
    }

    getData_ShopDailyFreeLastDay() {
        if (this.jsonData.hasOwnProperty(Constants.SHOP_DAILY_FREE_LASTDAY)) {
            return this.jsonData[Constants.SHOP_DAILY_FREE_LASTDAY];
        }
        return 0;
    }
    //#endregion

    //#region TUT CURTAIN
    setData_TutCurtain(isTutCurtain: boolean) {
        this.jsonData[Constants.TUT_CURTAION] = isTutCurtain ? 1 : 0;
        this.save();
    }

    getData_TutCurtain() {
        if (this.jsonData.hasOwnProperty(Constants.TUT_CURTAION)) {
            return this.jsonData[Constants.TUT_CURTAION] == 1;
        }
        return false;
    }
    //#endregion

    //#region TUT CLAY
    setData_TutClay(isTutClay: boolean) {
        this.jsonData[Constants.TUT_CLAY] = isTutClay ? 1 : 0;
        this.save();
    }

    getData_TutClay() {
        if (this.jsonData.hasOwnProperty(Constants.TUT_CLAY)) {
            return this.jsonData[Constants.TUT_CLAY] == 1;
        }
        return false;
    }
    //#endregion

    //#region TUT PLASTER
    setData_TutPlaster(isTutPlaster: boolean) {
        this.jsonData[Constants.TUT_PLASTER] = isTutPlaster ? 1 : 0;
        this.save();
    }

    getData_TutPlaster() {
        if (this.jsonData.hasOwnProperty(Constants.TUT_PLASTER)) {
            return this.jsonData[Constants.TUT_PLASTER] == 1;
        }
        return false;
    }
    //#endregion

    //#region IAP COUNT
    setData_IAPCount(count: number) {
        this.jsonData[Constants.IAP_COUNT] = count;
        this.save();
    }

    getData_IAPCount() {
        if (this.jsonData.hasOwnProperty(Constants.IAP_COUNT)) {
            return this.jsonData[Constants.IAP_COUNT];
        }
        return 0;   
    }
    //#endregion

    //#region WIN STREAK
    setData_WinStreak(streak: number) {
        this.jsonData[Constants.WIN_STREAK] = streak;
        this.save();
    }

    getData_WinStreak() {
        if (this.jsonData.hasOwnProperty(Constants.WIN_STREAK)) {
            return this.jsonData[Constants.WIN_STREAK];
        }
        return 0;
    }
    //#endregion

    //#region LOSE STREAK
    setData_LoseStreak(streak: number) {
        this.jsonData[Constants.LOSE_STREAK] = streak;
        this.save();
    }

    getData_LoseStreak() {
        if (this.jsonData.hasOwnProperty(Constants.LOSE_STREAK)) {
            return this.jsonData[Constants.LOSE_STREAK];
        }
        return 0;
    }
    //#endregion

    //#region  IAP STARTER PACK
    setData_IAPStarterPack(isIAPStarterPack: boolean) {
        this.jsonData[Constants.STARTER_PACK] = isIAPStarterPack ? 1 : 0;
        this.save();
    }

    getData_IAPStarterPack() {
        if (this.jsonData.hasOwnProperty(Constants.STARTER_PACK)) {
            return this.jsonData[Constants.STARTER_PACK] == 1;
        }
        return false;
    }
    //#endregion
}
