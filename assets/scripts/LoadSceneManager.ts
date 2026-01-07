
import { _decorator, Component, director, game, macro, Node, ProgressBar, tween, Tween, UIOpacity, Vec3, view } from 'cc';
import { clientEvent } from './framework/clientEvent';
import { Constants, ENV_TYPE, PLAY_TYPE, SHOP_PACK_TYPE } from './framework/constants';
import { resourceUtil } from './framework/resourceUtil';
import { localConfig } from './localConfig';
import { configuration } from './framework/configuration';
import { LogEventManager } from './common/LogEventManager';
import { MusicManager } from './framework/musicManager';
import { PGSPlayInstantManager } from './common/PGSPlayInstantManager';
import { LevelConfigInfo } from './newlevel/LevelConfigInfo';
import { MagicLevelDataInfo } from './newlevel/MagicLevelDataInfo';
import { FBInstantManager } from './common/FBInstantManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = LoadSceneManager
 * DateTime = Fri Aug 16 2024 11:45:26 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = LoadSceneManager.ts
 * FileBasenameNoExtension = LoadSceneManager
 * URL = db://assets/scripts/LoadSceneManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('LoadSceneManager')
export class LoadSceneManager extends Component {
    @property(ProgressBar)
    loadingProgressBar:ProgressBar;
    tweenLoading:Tween<{}> = null;

    isPreloadScene:boolean = false;
    isDataFinished:boolean = false;

    @property(Node)
    bg:Node;

    @property(Node)
    nodeTitle:Node = null;

    @property(UIOpacity)
    nodeTitle_Opacity:UIOpacity = null;

    @property(Node)
    nodeIcon:Node = null;

    @property(UIOpacity)
    nodeIcon_Opacity:UIOpacity = null;



    protected onLoad(): void {
        game.frameRate = 60;
    }

    protected onEnable(): void {
        clientEvent.on(Constants.GET_DATA_PLAYER_SUCCESS,this.getDataPlayerSuccess,this);
        clientEvent.on(Constants.GET_DATA_PAYLOAD_SUCCESS,this.getDataPayloadSuccess,this);
    }

    protected onDisable(): void {
        clientEvent.off(Constants.GET_DATA_PLAYER_SUCCESS,this.getDataPlayerSuccess,this);
        clientEvent.off(Constants.GET_DATA_PAYLOAD_SUCCESS,this.getDataPayloadSuccess,this);
    }
    start () {
        console.log(PLAY_TYPE[localConfig.instance.playType].toLowerCase().toString());
        localConfig.instance.splashStartTime = localConfig.instance.getCurrTime();
        tween(this.nodeTitle_Opacity).to(3,{opacity:255},{easing:'quadOut'}).start();
        tween(this.nodeIcon_Opacity).to(2,{opacity:255},{easing:'quadOut'}).start();
        tween(this.nodeTitle).to(3,{position:new Vec3(30,600,0)},{easing:'bounceOut'}).start();
        tween(this.nodeIcon).to(3,{position:new Vec3(0,0,0)},{easing:'linear'}).start();

        let self = this;
        localConfig.instance.scaleBG = 1;
        localConfig.instance.updateFixRatioScreen();

        if(localConfig.instance.isMobile){
            // let w:number = window.innerWidth;
            // let h:number = window.innerHeight;
            let w:number = view.getFrameSize().width;
            let h:number = view.getFrameSize().height;
            console.log(w,h);
            // if(localConfig.instance.envType == ENV_TYPE.TEST_AD){
            //     w = 414;
            //     h = 896;
            // }
            // console.log(w,h);
            if(w / h < localConfig.instance.DEFAULT_W / localConfig.instance.DEFAULT_H){
                localConfig.instance.scaleBG = (localConfig.instance.DEFAULT_W / localConfig.instance.DEFAULT_H) / (w / h);

                this.bg.setScale(new Vec3(localConfig.instance.scaleBG,localConfig.instance.scaleBG,localConfig.instance.scaleBG));

                // console.log(localConfig.instance.scaleBG);
            }
        }
        macro.ENABLE_MULTI_TOUCH = false;

        // [3]
        director.preloadScene("play", (completedCount:number, totalCount:number, item:any)=>{

        },function () {

        });

        this.loadingProgressBar.progress = 0;
        this.tweenLoading = tween(this.loadingProgressBar).to(20,{progress:0.99},{easing:'linear'});
        this.tweenLoading.start();

        Promise.all([
            resourceUtil.loadBundler(Constants.BUNDLE_ITEMS),
            resourceUtil.loadBundler(Constants.BUNDLE_AUDIOS),
            resourceUtil.getData_Promise("level",(err,content)=>{
                // console.log(content);
                content = content.replaceAll("\r","");
                localConfig.instance.arrLevelDataStrs = content.split("\n");
                // console.log(localConfig.instance.arrLevelDataStrs);
            }),
            resourceUtil.getData_Promise("challenge",(err,content)=>{
                // console.log(content);
                content = content.replaceAll("\r","");
                localConfig.instance.arrLevelChallengeDataStrs = content.split("\n");
                // console.log(localConfig.instance.arrLevelChallengeDataStrs);
            }),
            resourceUtil.getJsonData_Promise("shop",(err,content)=>{
                localConfig.instance.arrShopDataInfos = content;
                // console.log(localConfig.instance.arrShopDataInfos);
            }),
            resourceUtil.getJsonData_Promise("dailychallenge",(err,content)=>{
                localConfig.instance.arrDailyChallengeRewards = content;
                // console.log(localConfig.instance.arrDailyChallengeRewards);
            }),
            resourceUtil.getJsonData_Promise("unlockprogress",(err,content)=>{
                localConfig.instance.arrUnlockProgressInfos = content;
                localConfig.instance.initUnlockProgressInfos();
            }),
            resourceUtil.getJsonData_Promise("skin",(err,content)=>{
                localConfig.instance.arrSkinInfos = content;
                // console.log(localConfig.instance.arrSkinInfos);
            }),
            resourceUtil.getJsonData_Promise("dailylogin",(err,content)=>{
                localConfig.instance.arrDailyLogin_GroupRewardDataInfos = content;
                // console.log(localConfig.instance.arrDailyLogin_GroupRewardDataInfos);
            }),
            resourceUtil.getJsonData_Promise("dailyquest",(err,content)=>{
                localConfig.instance.arrDailyQuestDataInfos = content;
                // console.log(localConfig.instance.arrDailyQuestDataInfos);
            }),
            resourceUtil.getJsonData_Promise("dailyquestreward",(err,content)=>{
                localConfig.instance.arrDailyQuest_GroupRewardDataInfos = content;
                // console.log(localConfig.instance.arrDailyQuest_GroupRewardDataInfos);
            }),
            resourceUtil.getJsonData_Promise("chestreward",(err,content)=>{
                localConfig.instance.arrChests_GroupRewardDataInfos = content;
                // console.log("chestreward",localConfig.instance.arrChests_GroupRewardDataInfos);
            }),
            resourceUtil.getJsonData_Promise("racereward",(err,content)=>{
                localConfig.instance.arrRace_GroupRewardDataInfos = content;
                // console.log("racereward",localConfig.instance.arrRace_GroupRewardDataInfos);
            }),
            resourceUtil.getJsonData_Promise("masterpass",(err,content)=>{
                localConfig.instance.arrPassRewardDataInfos = content;
                // console.log("masterpass",localConfig.instance.arrPassRewardDataInfos);
            }),
            resourceUtil.getJsonData_Promise("spin",(err,content)=>{
                localConfig.instance.arrSpinRewardDataInfos = content;
                // console.log(localConfig.instance.arrSpinRewardDataInfos);
            }),

            resourceUtil.getJsonData_Promise("LevelsConfigv2",(err,content)=>{
                localConfig.instance.arrMagicLevelConfigInfos = content.levelConfigModels;
            }),

            resourceUtil.getJsonData_Promise("LoopLevelsConfig",(err,content)=>{
                localConfig.instance.arrMagicLoopLevelConfigInfos = content.levelConfigModels;
            }),

            // resourceUtil.getJsonData_Promise("levelnew2/magicsort_magicsort1_difficulty1-1",(err,content)=>{
            //     let magicLevelDataInfo:MagicLevelDataInfo = content;
            //     console.log(magicLevelDataInfo);
            //     console.log(magicLevelDataInfo.UCCC,magicLevelDataInfo.CC,magicLevelDataInfo.LId,magicLevelDataInfo.B);
            // }),
        ]).then(values=>{
            // console.log(values);
            self.setLoad_Step2();
            
        });
    }

    setLoad_Step2_NoWait(){
        Promise.all([
            resourceUtil.loadPrefabUI_Bundle("TutLevelPopup",(err,uiPrefab)=>{
                // console.log("TutLevelPopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("TutLevel5Popup",(err,uiPrefab)=>{
                // console.log("TutLevel5Popup");
            }),

            resourceUtil.loadPrefabUI_Bundle("ShopGroup",(err,uiPrefab)=>{
                
            }),

            resourceUtil.loadPrefabUI_Bundle("ThemeGroup",(err,uiPrefab)=>{
                
            }),

            resourceUtil.loadPrefabUI_Bundle("LeaderBoardGroup",(err,uiPrefab)=>{
                
            }),
            
            resourceUtil.loadPrefabUI_Bundle("TournamentsGroup",(err,uiPrefab)=>{
                
            }),
            
            resourceUtil.loadPrefabUI_Bundle("WinPopup",(err,uiPrefab)=>{
                // console.log("WinPopup");
            }),
            resourceUtil.loadPrefabUI_Bundle("PausePopup",(err,uiPrefab)=>{
                // console.log("PausePopup");
            }),
            resourceUtil.loadPrefabUI_Bundle("RemoveAdPopup",(err,uiPrefab)=>{
                // console.log("RemoveAdPopup");
            }),
            resourceUtil.loadPrefabUI_Bundle("SettingPopup",(err,uiPrefab)=>{
                // console.log("SettingPopup");
            }),
            resourceUtil.loadPrefabUI_Bundle("ShopPopup",(err,uiPrefab)=>{
                // console.log("ShopPopup");
            }),
            resourceUtil.loadPrefabUI_Bundle("SummerPackPopup",(err,uiPrefab)=>{
                // console.log("SummerPackPopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("DailyChallengePopup",(err,uiPrefab)=>{
                // console.log("DailyChallengePopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("BoxRewardReceivePopup",(err,uiPrefab)=>{
                // console.log("BoxRewardReceivePopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("RewardReceivePopup",(err,uiPrefab)=>{
                // console.log("RewardReceivePopup");
            }),

            

            resourceUtil.loadPrefabUI_Bundle("DailyTaskPopup",(err,uiPrefab)=>{
                // console.log("DailyTaskPopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("RewardReceivePopup",(err,uiPrefab)=>{
                // console.log("RewardReceivePopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("LevelChestsPopup",(err,uiPrefab)=>{
                // console.log("LevelChestsPopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("TubeRaceJoinPopup",(err,uiPrefab)=>{
                // console.log("TubeRaceJoinPopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("TubeRacePopup",(err,uiPrefab)=>{
                // console.log("TubeRacePopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("MasterPassDetailPopup",(err,uiPrefab)=>{
                // console.log("MasterPassDetailPopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("MasterPassInfoPopup",(err,uiPrefab)=>{
                // console.log("MasterPassInfoPopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("MasterPassPopup",(err,uiPrefab)=>{
                // console.log("MasterPassPopup");
            }),



            resourceUtil.loadPrefabUI_Bundle("SpinPopup",(err,uiPrefab)=>{
                // console.log("SpinPopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("ShareInfoPopup",(err,uiPrefab)=>{
                // console.log("ShareInfoPopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("ShareContextPopup",(err,uiPrefab)=>{
                // console.log("ShareContextPopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("ShopItemPopup",(err,uiPrefab)=>{
                // console.log("ShopItemPopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("ThemeUnlockPopup",(err,uiPrefab)=>{
                // console.log("ThemeUnlockPopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("TournamentPopup",(err,uiPrefab)=>{
                // console.log("TournamentPopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("TournamentQuitPopup",(err,uiPrefab)=>{
                // console.log("TournamentQuitPopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("TournamentResultPopup",(err,uiPrefab)=>{
                // console.log("TournamentResultPopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("TournamentRevivePopup",(err,uiPrefab)=>{
                // console.log("TournamentRevivePopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("TubeRaceJoinPopup",(err,uiPrefab)=>{
                // console.log("TubeRaceJoinPopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("TubeRaceLosePopup",(err,uiPrefab)=>{
                // console.log("TubeRaceLosePopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("TubeRacePopup",(err,uiPrefab)=>{
                // console.log("TubeRacePopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("TubeRaceWinPopup",(err,uiPrefab)=>{
                // console.log("TubeRaceWinPopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("LevelFailedPopup",(err,uiPrefab)=>{
                // console.log("TubeRaceWinPopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("MoreLivesPopup",(err,uiPrefab)=>{
                // console.log("TubeRaceWinPopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("QuitConfirmPopup", (err, uiPrefab) => {
                // console.log("TubeRaceWinPopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("TutClayPopup", (err, uiPrefab) => {
                // console.log("TubeRaceWinPopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("TutCurtainPopup", (err, uiPrefab) => {
                // console.log("TubeRaceWinPopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("TutPlasterPopup", (err, uiPrefab) => {
                // console.log("TubeRaceWinPopup");
            }),

            resourceUtil.loadPrefabUI_Bundle("WinTournamentPageHostPopup", (err, uiPrefab) => {
                // console.log("WinTournamentPageHostPopup");
            }),

            resourceUtil.loadAudioClip("audio/sound/Button", (err, clip)=> {
            }),
            resourceUtil.loadAudioClip("audio/sound/water1", (err, clip)=> {
            }),
            resourceUtil.loadAudioClip("audio/sound/water2", (err, clip)=> {
            }),
            resourceUtil.loadAudioClip("audio/sound/water3", (err, clip)=> {
            }),
            resourceUtil.loadAudioClip("audio/sound/bottleselect", (err, clip)=> {
            }),
            resourceUtil.loadAudioClip("audio/sound/waterfull", (err, clip)=> {
            }),
            resourceUtil.loadAudioClip("audio/sound/win_effect", (err, clip)=> {
            }),
            resourceUtil.loadAudioClip("audio/sound/cap_eff_1", (err, clip)=> {
            }),
            resourceUtil.loadAudioClip("audio/sound/cap_eff_2", (err, clip)=> {
            }),
            resourceUtil.loadAudioClip("audio/sound/progressbar", (err, clip)=> {
            }),
            resourceUtil.loadAudioClip("audio/sound/coin_appear", (err, clip)=> {
            }),
            resourceUtil.loadAudioClip("audio/sound/coin_receive", (err, clip)=> {
            }),
            resourceUtil.loadAudioClip("audio/sound/coin_receive", (err, clip)=> {
            }),
            resourceUtil.loadAudioClip("audio/sound/pop_dialog", (err, clip)=> {
            }),
            resourceUtil.loadAudioClip("audio/sound/win", (err, clip)=> {
            }),
            resourceUtil.loadAudioClip("audio/sound/notification-alert", (err, clip)=> {
            }),
            resourceUtil.loadAudioClip("audio/sound/Wheel_Spin", (err, clip)=> {
            }),
            resourceUtil.loadAudioClip("audio/sound/Wheel_Done", (err, clip)=> {
            }),
            resourceUtil.loadAudioClip("audio/sound/sfx_getRew", (err, clip)=> {
            }),
            resourceUtil.loadAudioClip("audio/sound/jump", (err, clip)=> {
            }),
        ]).then(values=>{
            // console.log(values);
        });
    }

    setLoad_Step2(){
        Promise.all([
            resourceUtil.loadSpriteFrame_Bundle("tube/1/1", (err, spriteFrame) => {
            })
        ]).then(values=>{
            this.setLoad_Step3();
        });
    }


    //Read data level
    indexLevel:number = 1;
    mapLevelStr:Map<number,string> = new Map<number,string>();
    readDataLevel(){
        resourceUtil.getData("level/"+this.indexLevel,(err,content)=>{
            // console.log(this.indexLevel,content);
            this.mapLevelStr.set(this.indexLevel,content);
            this.indexLevel ++;
            if(this.indexLevel > localConfig.instance.WATER_MAX_LEVEL){
                // console.log(this.mapLevelStr);
                let str = "";
                for(let i=0; i< 500;i++){
                    str += this.mapLevelStr.get(i+1);
                }
                // console.log(str);
            }else{
                this.readDataLevel();
            }
        })
    }

    readDataLevel_Challenge(){
        resourceUtil.getData("challenge/"+this.indexLevel,(err,content)=>{
            // console.log(this.indexLevel,content);
            let strRows:string[] = content.split("|");
            let strRow2:string = strRows[1];
            // console.log(strRow2);
            let strRow2Data:string[] = strRow2.split(";");
            // console.log(strRow2Data);
            let str1:string = strRows[0];
            for(let i=0;i<2;i++){
                str1 += ";"+strRow2Data[i];
            }

            let str2:string = "";
            for(let i=2;i<strRow2Data.length;i++){
                str2 += strRow2Data[i] + ";";
            }
            str2 += strRows[2];
            let newContent = str1 + "|" + str2;
            // console.log(this.indexLevel,newContent);
            this.mapLevelStr.set(this.indexLevel,newContent);
            this.indexLevel ++;
            if(this.indexLevel > localConfig.instance.WATER_MAX_CHALLENGE_LEVEL){
                // console.log(this.mapLevelStr);
                let str = "";
                for(let i=0; i< localConfig.instance.WATER_MAX_CHALLENGE_LEVEL;i++){
                    str += this.mapLevelStr.get(i+1);
                }
                // console.log(str);
            }else{
                this.readDataLevel_Challenge();
            }
        })
    }

    setLoad_Step3(){
        if(localConfig.instance.envType == ENV_TYPE.TEST_AD){
            localConfig.instance.isGetPayloadDataSuccess = true;
        }

        let self = this;
        self.isDataFinished = true;
        if(localConfig.instance.isGetPlayerDataSuccess && localConfig.instance.isGetPayloadDataSuccess){
           
            self.setNextScene();
        }
    }
    

    getDataPlayerSuccess(){
        if(this.isDataFinished && localConfig.instance.isGetPayloadDataSuccess){
            
            this.setNextScene();
        }
    }

    getDataPayloadSuccess(){
        if(this.isDataFinished && localConfig.instance.isGetPlayerDataSuccess){
            
            this.setNextScene();
        }
    }

    isNextScene:boolean = false;
    setNextScene(){
        // console.log("LoadSceneManager2222:"+localConfig.instance.isGetPlayerDataSuccess);
        if(this.isNextScene) return;
        if(!localConfig.instance.isGetPlayerDataSuccess) return;
        if(!localConfig.instance.isGetPayloadDataSuccess) return;
        if(!this.isDataFinished) return;
        this.isNextScene = true;

        if(localConfig.instance.envType == ENV_TYPE.FB){
            let arrLeaderboard_contextIDs:string[] = [];
            let worldContextID:string = localConfig.instance.getWorldContextID_byWeek(localConfig.instance.currWeek);
            arrLeaderboard_contextIDs.push(worldContextID);
            // for(let i=0; i< 20; i++){
            //     let worldContextID:string = localConfig.instance.getWorldContextID_byWeek(i);
            //     arrLeaderboard_contextIDs.push(worldContextID);
            //     let friendContextId:string = localConfig.instance.getFriendContextID_byWeek(i);
            //     arrLeaderboard_contextIDs.push(friendContextId);
            // }

            PGSPlayInstantManager.instance.GetLeaderboards_byContextIDs(arrLeaderboard_contextIDs);
        }
        
        let self = this;
        // let currProgress = this.loadingProgressBar.progress;
        // console.log("setNextScenesetNextScenesetNextScenesetNextScene");
        localConfig.instance.blackFriday_Infoday = configuration.instance.getData_BlackFriday();

        if(localConfig.instance.campID_session && localConfig.instance.campID_session.length > 0){
            if(!localConfig.instance.checkCampID(localConfig.instance.campID_session)){
                localConfig.instance.addCampID(localConfig.instance.campID_session);

                LogEventManager.instance.logCAMP_ID(localConfig.instance.campID_session);
            }

            localConfig.instance.isPaidUser = true;
        }

        if(localConfig.instance.adsetID_session && localConfig.instance.adsetID_session.length > 0){
            if(!localConfig.instance.checkAdsetID(localConfig.instance.adsetID_session)){
                localConfig.instance.addAdsetID(localConfig.instance.adsetID_session);

                LogEventManager.instance.logADSET_ID(localConfig.instance.adsetID_session);
            }

            localConfig.instance.isPaidUser = true;
        }

        if(localConfig.instance.adsID_session && localConfig.instance.adsID_session.length > 0){
            if(!localConfig.instance.checkAdsID(localConfig.instance.adsID_session)){
                localConfig.instance.addAdsID(localConfig.instance.adsID_session);

                LogEventManager.instance.logADS_ID(localConfig.instance.adsID_session);
            }

            localConfig.instance.isPaidUser = true;
        }

        if(localConfig.instance.tourID_session && localConfig.instance.tourID_session.length > 0){
            if(!localConfig.instance.checkTourID(localConfig.instance.tourID_session)){
                localConfig.instance.addTourID(localConfig.instance.tourID_session);

                LogEventManager.instance.logTour_ID(localConfig.instance.tourID_session);
            }
        }

        

        localConfig.instance.initAfterLoadData();
        if(localConfig.instance.isMusic){
            MusicManager.instance.openMusic();
        }
        this.setLoad_Step4();
    }

    setLoad_Step4(){
        this.setNextScene222();
    }

    setNextScene222(){
        
        director.loadScene("play");

        // this.setLoad_Step2_NoWait();
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
