
// import { _decorator, Button, Component, instantiate, Label, Node, PageView, Prefab, tween, Tween, Vec2, Vec3, Widget } from 'cc';
// import { LogEventManager } from '../common/LogEventManager';
// import { localConfig } from '../localConfig';
// import { resourceUtil } from '../framework/resourceUtil';
// import { ItemTube } from './ItemTube';
// import { clientEvent } from '../framework/clientEvent';
// import { BOOSTER_TYPE, Constants, GAME_MODE, GAME_STATE, ITEM_TUBE_STATE, SCENE_TYPE, WATER_STATE } from '../framework/constants';
// import { ButtonBoosterTypeGroup } from './ButtonBoosterTypeGroup';
// import { LevelDataInfo, TubeInfo } from './info/LevelDataInfo';
// import { lodash } from '../framework/lodash';
// import { WellDoneGroup } from '../WellDoneGroup';
// import Utils from '../core/utils/Utils';
// import { TutLevelPopup } from './TutLevelPopup';
// import { TutLevel5Popup } from './TutLevel5Popup';
// import { ComboGroup } from './ComboGroup';
// import { InfoGroupTournament } from './tournaments/InfoGroupTournament';
// import { FBInstantManager } from '../common/FBInstantManager';
// import { PGSPlayInstantManager } from '../common/PGSPlayInstantManager';
// import { AudioManager2 } from '../framework/audioManager2';
// import { LeaderboardDataInfo } from '../common/LeaderboardDataInfo';
// import { InfoGroupWithFriend } from './withFriends/InfoGroupWithFriend';
// import { InfoGroupTournamentPageHost } from './tournaments/InfoGroupTournamentPageHost';
// const { ccclass, property } = _decorator;

// /**
//  * Predefined variables
//  * Name = PlayManager
//  * DateTime = Fri Aug 16 2024 15:10:35 GMT+0700 (Indochina Time)
//  * Author = MoonMoon246
//  * FileBasename = PlayManager.ts
//  * FileBasenameNoExtension = PlayManager
//  * URL = db://assets/scripts/game/PlayManager.ts
//  * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
//  *
//  */
 
// @ccclass('PlayManager')
// export class PlayManager extends Component {
//     @property(Node)
//     groupAllTop:Node;

//     @property(Widget)
//     groupAllTopWidget:Widget;

//     @property(Prefab)
//     tubePrefab:Prefab;

//     arrItemTubes_1:ItemTube[] = [];
//     arrItemTubes_2:ItemTube[] = [];

//     @property(Node)
//     groupAllTubes:Node;

//     @property(Node)
//     lockScene:Node;

//     @property(Node)
//     boosterGroup:Node;

//     tweenBoosterGroup:Tween<{}> = null;

//     @property(ButtonBoosterTypeGroup)
//     btnBoosterUndo:ButtonBoosterTypeGroup;

//     @property(ButtonBoosterTypeGroup)
//     btnBoosterSuggest:ButtonBoosterTypeGroup;

//     @property(ButtonBoosterTypeGroup)
//     btnBoosterAddCol:ButtonBoosterTypeGroup;

//     @property(Node)
//     infoGroupNormal:Node;

//     @property(Label)
//     txtInfoNormal:Label;

//     @property(InfoGroupTournament)
//     infoGroupTournament:InfoGroupTournament;

//     @property(InfoGroupTournamentPageHost)
//     infoGroupTournamentPageHost:InfoGroupTournamentPageHost;

//     @property(InfoGroupWithFriend)
//     infoGroupWithFriend:InfoGroupWithFriend;

//     @property(Button)
//     btnSetting:Button;

//     @property(Button)
//     btnReplay:Button;

//     @property(Button)
//     btnHome:Button;

//     @property(Button)
//     btnPause:Button;

//     protected onEnable(): void {
//         localConfig.instance.currSceneType = SCENE_TYPE.GAME;

//         clientEvent.on(Constants.TUBE_SELECT,this.selectTubeItem,this);
//         clientEvent.on(Constants.TUBE_MOVEBACK_FINISHED,this.setTubeMoveBack_Finished,this);
//         clientEvent.on(Constants.TUBE_DONE,this.checkFinishedGame,this);
//         clientEvent.on(Constants.BOOSTER_CLICK,this.setBoosterClick,this);
//         clientEvent.on(Constants.TOURNAMENT_QUIT_YES,this.setTournamentQuit,this);
//         clientEvent.on(Constants.TOURNAMENT_QUIT_CONTINUE,this.setTournamentContinue,this);

//         clientEvent.on(Constants.WELLDONE_FINISHED,this.setWellDoneFinished,this);
//         clientEvent.on(Constants.SETTING_TOUCH_CONTINUE,this.setSettingTouchContinue,this);

//         clientEvent.on(Constants.TOUCH_NEXT_LEVEL,this.setNextLevel,this);

//         this.btnSetting.node.on(Button.EventType.CLICK,this.touchSetting,this);
//         this.btnReplay.node.on(Button.EventType.CLICK,this.touchReplay,this);
//         this.btnHome.node.on(Button.EventType.CLICK,this.touchHome,this);

//         clientEvent.on(Constants.TOURNAMENT_REVIVE_YES,this.setTournamentReviveYes,this);
//         clientEvent.on(Constants.TOURNAMENT_REVIVE_NO,this.setTournamentReviveNo,this);
//         clientEvent.on(Constants.SET_TOURNAMENT_LOSE,this.setTournamentLose,this);
//         clientEvent.on(Constants.TOURNAMENT_RESULT_TOUCH_REPLAY,this.setTournamentReplay,this);
//         clientEvent.on(Constants.TOURNAMENT_PAGEHOST_TOUCH_REPLAY,this.setTournamentPageHostReplay,this);

//         clientEvent.on(Constants.SHOPITEM_BUYSUCESS,this.setShopItem_BuySuccess,this);
//         clientEvent.on(Constants.WITHFRIEND_TOUCH_REPLAY,this.setWithFriendReplay,this);

        
//         this.initAllTop();
//     }

//     protected onDisable(): void {
//         clientEvent.off(Constants.TUBE_SELECT,this.selectTubeItem,this);
//         clientEvent.off(Constants.TUBE_MOVEBACK_FINISHED,this.setTubeMoveBack_Finished,this);
//         clientEvent.off(Constants.TUBE_DONE,this.checkFinishedGame,this);
//         clientEvent.off(Constants.BOOSTER_CLICK,this.setBoosterClick,this);
//         clientEvent.off(Constants.TOURNAMENT_QUIT_YES,this.setTournamentQuit,this);
//         clientEvent.off(Constants.TOURNAMENT_QUIT_CONTINUE,this.setTournamentContinue,this);

//         clientEvent.off(Constants.WELLDONE_FINISHED,this.setWellDoneFinished,this);
//         clientEvent.off(Constants.SETTING_TOUCH_CONTINUE,this.setSettingTouchContinue,this);
//         clientEvent.off(Constants.TOUCH_NEXT_LEVEL,this.setNextLevel,this);

//         this.btnSetting.node.off(Button.EventType.CLICK,this.touchSetting,this);
//         this.btnReplay.node.off(Button.EventType.CLICK,this.touchReplay,this);
//         this.btnHome.node.off(Button.EventType.CLICK,this.touchHome,this);

//         clientEvent.off(Constants.TOURNAMENT_REVIVE_YES,this.setTournamentReviveYes,this);
//         clientEvent.off(Constants.TOURNAMENT_REVIVE_NO,this.setTournamentReviveNo,this);
//         clientEvent.off(Constants.SET_TOURNAMENT_LOSE,this.setTournamentLose,this);
//         clientEvent.off(Constants.TOURNAMENT_RESULT_TOUCH_REPLAY,this.setTournamentReplay,this);
//         clientEvent.off(Constants.TOURNAMENT_PAGEHOST_TOUCH_REPLAY,this.setTournamentPageHostReplay,this);

//         clientEvent.off(Constants.SHOPITEM_BUYSUCESS,this.setShopItem_BuySuccess,this);
//         clientEvent.off(Constants.WITHFRIEND_TOUCH_REPLAY,this.setWithFriendReplay,this);

//     }

//     start () {
//         // [3]
        
       
//         // localConfig.instance.currLevel = 9;
       
//         // this.preloadLevel(localConfig.instance.currLevel);
        
//     }

//     initAllTop(){
//         // let kc_banner:number = 0;
//         // if(localConfig.instance.isRemoveAd){
//         //     kc_banner = 150;
//         // }
//         if(localConfig.instance.isMobile){
//             let posY = (localConfig.instance.scaleBG - 1) * localConfig.instance.DEFAULT_H / 2;
//             // console.log("posY:"+posY);
//             if(posY <= 0){
//                 this.groupAllTopWidget.top = 0;
//                 return;
//             }
//             // this.groupAllTop.setPosition(new Vec3(0,posY + 180,0));
//             this.groupAllTopWidget.top = -posY;
//         }else{
//             this.groupAllTopWidget.top = 0;
//         }
//     }

//     touchSetting(){
//         clientEvent.dispatchEvent(Constants.SHOW_PAUSE_POPUP);
//     }

//     touchReplay(){
//         FBInstantManager.instance.Show_InterstitialAdAsync("play","replay",(err,success)=>{
//             this.setReplay();
//         });
//     }

//     setWithFriendReplay(){
//         this.setReplay();
//     }

//     setReplay(){
//         clientEvent.dispatchEvent(Constants.SHOW_LOADING_START_NOW_POPUP);
//         if(localConfig.instance.currGameMode == GAME_MODE.NORMAL){
//             this.preloadLevel(localConfig.instance.currLevel);
//         }else if(localConfig.instance.currGameMode == GAME_MODE.DAILY_CHALLENGE){
//             let indexDay:number = localConfig.instance.getCountDay_From_Start(localConfig.instance.currInfoDaySelect) + 1;
//             this.preloadLevelChallenge(indexDay);
//         }else if(localConfig.instance.currGameMode == GAME_MODE.WITH_FRIEND){
//             this.preloadLevelwithFriend();
//         }
//     }

//     touchHome(){
//         clientEvent.dispatchEvent(Constants.SHOW_TOURNAMENTQUIT_POPUP);
//     }

//     resetLevel(){
//         localConfig.instance.setResetShopItem_Free();
//         if(this.tweenBoosterGroup){
//             this.tweenBoosterGroup.stop();
//         }
//         this.btnPause.node.active = false;
//         this.btnReplay.node.active = false;
//         this.btnHome.node.active = false;
//         this.infoGroupNormal.active = false;
//         this.infoGroupTournament.node.active = false;
//         this.infoGroupTournamentPageHost.node.active = false;
//         this.infoGroupWithFriend.node.active = false;
//         this.comboGroup.node.active = false;
//         this.boosterGroup.setPosition(new Vec3(0,-686,0));
//         this.arrItemTubes_1 = [];
//         this.arrItemTubes_2 = [];
//         this.arrTubeSuggests_Temp = [];
//         this.arrUndo_Infos = [];
//         this.lastItemTubeSelect = null;
//         localConfig.instance.currGameState = GAME_STATE.PRE_START;
//         this.wellDoneGroup.node.active = false;
//         this.groupAllTubes.destroyAllChildren();
//         this.hideTutAddCol();
//         this.isAddCol = false;
//         this.btnBoosterAddCol.setBoosterAvailable(true);
//         localConfig.instance.isWaterLock = false;
//         this.resetTut();
//     }



//     preloadLevel(indexLevel:number){
//         localConfig.instance.currGameMode = GAME_MODE.NORMAL;
//         this.resetLevel();
//         this.groupAllTubes.setPosition(new Vec3(0,120,0));
//         if(indexLevel == 1){
//             this.btnReplay.node.active = false;
//             this.btnPause.node.active = false;
//         }else{
//             this.btnReplay.node.active = true;
//             this.btnPause.node.active = true;
//         }
//         this.txtInfoNormal.string = `Level ${Utils.formatNumber(localConfig.instance.currLevel)}`;
//         this.infoGroupNormal.active = true;
//         this.lockScene.active = true;
//         let levelLoadData:number = indexLevel;
//         if(levelLoadData > localConfig.instance.WATER_MAX_LEVEL){
//             levelLoadData = 50 + levelLoadData % 450;
//         }
//         localConfig.instance.currLevelDataInfo = localConfig.instance.getLevelDataInfo_byIndexLevel(levelLoadData);


//         // console.log(indexLevel);
//         if(indexLevel % 10 == 0){
//             localConfig.instance.isWaterLock = true;
//         }else{
//             localConfig.instance.isWaterLock = false;
//         }

//         this.initLevel();
//     }

//     preloadLevelChallenge(indexLevelChallenge:number){
//         localConfig.instance.currGameMode = GAME_MODE.DAILY_CHALLENGE;
//         this.resetLevel();
//         this.groupAllTubes.setPosition(new Vec3(0,120,0));
//         this.btnReplay.node.active = true;
//         this.btnPause.node.active = true;
//         this.txtInfoNormal.string = `${localConfig.instance.getInfoDayStr_2(localConfig.instance.currInfoDaySelect)}`;
//         this.infoGroupNormal.active = true;
//         this.lockScene.active = true;
        
//         let levelLoadData:number = indexLevelChallenge;
//         if(levelLoadData > localConfig.instance.WATER_MAX_CHALLENGE_LEVEL){
//             levelLoadData = levelLoadData % localConfig.instance.WATER_MAX_CHALLENGE_LEVEL;
//         }
        
//         localConfig.instance.currLevelDataInfo = localConfig.instance.getLevelDataInfo_byIndexLevelChallenge(levelLoadData);


//         localConfig.instance.isWaterLock = true;
//         this.initLevel();
//     }

//     preloadLevelTournament(){
//         localConfig.instance.currGameMode = GAME_MODE.TOURNAMENT;
//         this.resetLevel();
//         this.groupAllTubes.setPosition(new Vec3(0,60,0));
//         this.btnHome.node.active = true;
//         this.btnPause.node.active = true;
//         this.lockScene.active = true;
//         let levelLoadData:number = localConfig.instance.currLevelStartTournament + localConfig.instance.currIndexLevelTournament;
//         if(levelLoadData > localConfig.instance.WATER_MAX_LEVEL){
//             levelLoadData = 50 + levelLoadData % 450;
//         }
//         localConfig.instance.currLevelDataInfo = localConfig.instance.getLevelDataInfo_byIndexLevel(levelLoadData);

//         this.infoGroupTournament.node.active = true;
//         this.infoGroupTournament.initGroup();

//         this.comboGroup.node.active = true;
//         this.comboGroup.init();
        
//         this.initLevel();
//     }

//     setWithFriendPlayStart(){
        
//     }

//     preloadLevelwithFriend(){
//         localConfig.instance.currGameMode = GAME_MODE.WITH_FRIEND;
//         this.resetLevel();
//         this.infoGroupWithFriend.resetScore();
//         this.groupAllTubes.setPosition(new Vec3(0,60,0));
//         this.btnReplay.node.active = true;
//         this.btnPause.node.active = true;
//         this.lockScene.active = true;
//         let levelLoadData:number = localConfig.instance.currWithFriendDataInfo.levelIndex;
//         if(levelLoadData > localConfig.instance.WATER_MAX_CHALLENGE_LEVEL){
//             levelLoadData = levelLoadData % localConfig.instance.WATER_MAX_CHALLENGE_LEVEL;
//         }
//         localConfig.instance.currLevelDataInfo = localConfig.instance.getLevelDataInfo_byIndexLevel(levelLoadData);

//         this.infoGroupWithFriend.node.active = true;
//         this.infoGroupWithFriend.initWithFriendGroup(localConfig.instance.currWithFriendDataInfo);

//         this.comboGroup.node.active = true;
//         this.comboGroup.init();

//         this.initLevel();
//     }


//     preloadLevelTournamentPageHost(){
//         localConfig.instance.currGameMode = GAME_MODE.TOURNAMENT_PAGEHOST;
//         this.resetLevel();
//         this.groupAllTubes.setPosition(new Vec3(0,60,0));
//         this.btnHome.node.active = true;
//         this.btnPause.node.active = true;
//         this.lockScene.active = true;
//         let levelLoadData:number = localConfig.instance.currTournamentPageHostDataInfo.levelIndex;
//         if(levelLoadData > localConfig.instance.WATER_MAX_LEVEL){
//             levelLoadData = 50 + levelLoadData % 450;
//         }
//         localConfig.instance.currLevelDataInfo = localConfig.instance.getLevelDataInfo_byIndexLevel(levelLoadData);

//         this.infoGroupTournamentPageHost.node.active = true;
//         this.infoGroupTournamentPageHost.initGroup();

//         this.comboGroup.node.active = true;
//         this.comboGroup.init();
        
//         this.initLevel();
//     }

//     initLevel(){
//         this.showButtonBoosterUndo_Available();
//         this.showButtonBoosterAddCol_Available();

//         this.setShowButtonBooster();

//         localConfig.instance.initPos_byLevelDataInfo(localConfig.instance.currLevelDataInfo);
//         this.groupAllTubes.setScale(new Vec3(localConfig.instance.scaleTube,localConfig.instance.scaleTube,1));

//         this.initAllTubes();
//         this.initTutorials();

//         this.lockScene.active = false;
//         clientEvent.dispatchEvent(Constants.HIDE_LOADING_START_POPUP);

//         localConfig.instance.currGameState = GAME_STATE.PLAY;
//         if(localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT){
//             this.infoGroupTournament.setStartCountDown();
//         }else if(localConfig.instance.currGameMode == GAME_MODE.WITH_FRIEND){

//         }

//         // this.addUndo_Info();
//     }

//     initAllTubes(){
//         for(let i=0; i< localConfig.instance.currLevelDataInfo.arrTubeInfo_1.length;i++){
//             let item = instantiate(this.tubePrefab);
//             item.setParent(this.groupAllTubes);
//             let itemTube:ItemTube = item.getComponent(ItemTube);
//             itemTube.initItemTube(i,0,localConfig.instance.currLevelDataInfo.arrTubeInfo_1[i].arrIndexColors);
//             this.arrItemTubes_1.push(itemTube);
//         }

//         if(localConfig.instance.currLevelDataInfo.arrTubeInfo_2.length > 0){
//             for(let i=0; i< localConfig.instance.currLevelDataInfo.arrTubeInfo_2.length;i++){
//                 let item = instantiate(this.tubePrefab);
//                 item.setParent(this.groupAllTubes);
//                 let itemTube:ItemTube = item.getComponent(ItemTube);
//                 itemTube.initItemTube(i,1,localConfig.instance.currLevelDataInfo.arrTubeInfo_2[i].arrIndexColors);
//                 this.arrItemTubes_2.push(itemTube);
//             }
//         }

//     }

//     lastItemTubeSelect:ItemTube = null;
//     selectTubeItem(itemTube:ItemTube){
//         if(localConfig.instance.currGameState == GAME_STATE.PRE_START){
//             localConfig.instance.currGameState = GAME_STATE.PLAY;
//         }

//         if(itemTube.currState == ITEM_TUBE_STATE.DONE){
//             return;
//         }

//         if(itemTube.currState == ITEM_TUBE_STATE.SELECT){
//             itemTube.setUnselect_ItemTube();
//             if(localConfig.instance.currGameMode == GAME_MODE.NORMAL){
//                 if(localConfig.instance.currLevel == 2){
//                     this.checkLevel2_TutTubes_HideTut();
//                 }
//             }
//             else if(localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT){
//                 if(localConfig.instance.currIndexLevelTournament + localConfig.instance.currLevelStartTournament == 2){
//                     this.checkLevel2_TutTubes_HideTut();
//                 }
//             }
//             this.lastItemTubeSelect = null;
//             return;
//         }

//         if(itemTube.checkTube_None()){
            
//             if(this.lastItemTubeSelect == null) 
//             {
//                 itemTube.setSelectTube_Fail();
//                 return;
//             }
//         }

//         if(itemTube.currState == ITEM_TUBE_STATE.ON){
//             // console.log(this.lastItemTubeSelect);
//             if(this.lastItemTubeSelect == null) return;
//         }

//         if(this.lastItemTubeSelect == null){
//             if(localConfig.instance.currGameMode == GAME_MODE.NORMAL){
//                 if(localConfig.instance.currLevel == 1){
//                     this.hideTutLevel1_Step1();
//                 }
//             }else if(localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT){
//                 if(localConfig.instance.currIndexLevelTournament + localConfig.instance.currLevelStartTournament == 1){
//                     this.hideTutLevel1_Step1();
//                 }
//             }
//             this.lastItemTubeSelect = itemTube;
//             this.lastItemTubeSelect.setSelect_ItemTube();
//             this.lastItemTubeSelect.node.setSiblingIndex(999);

//             if(localConfig.instance.currGameMode == GAME_MODE.NORMAL){
//                 if(localConfig.instance.currLevel == 2){
//                     this.checkTutLevel2_TutTubes(this.lastItemTubeSelect.tubeX);
//                 }
//             }else if(localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT){
//                 if(localConfig.instance.currIndexLevelTournament + localConfig.instance.currLevelStartTournament == 2){
//                     this.checkTutLevel2_TutTubes(this.lastItemTubeSelect.tubeX);
//                 }
//             }
//         }else{
//             if(localConfig.instance.currGameMode == GAME_MODE.NORMAL){
//                 if(localConfig.instance.currLevel == 1){
//                     this.hideTutLevel1_Step2();
//                 }
//             }else if(localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT){
//                 if(localConfig.instance.currIndexLevelTournament + localConfig.instance.currLevelStartTournament == 1){
//                     this.hideTutLevel1_Step2();
//                 }
//             }
//             let countTubeTarget_ItemWater_Avaliable:number = itemTube.getCount_ItemWater_Available();
//             if(countTubeTarget_ItemWater_Avaliable < 4 && (this.lastItemTubeSelect.getHeadIndexColor() == itemTube.getHeadIndexColor() || countTubeTarget_ItemWater_Avaliable == 0)){

//                 this.addUndo_Info();

//                 let isRight:boolean = true;
//                 if(itemTube.node.position.x < 0){
//                     isRight = false;
//                 }

//                 let isAddScore:boolean = true;
//                 let isCombo:boolean = true;

//                 let countItem_Available:number = this.lastItemTubeSelect.getCountItemWater_SameHeadIndexColor();
//                 let countItem_ON_Available:number = itemTube.getCountItemWater_ON_Available();

//                 if(countItem_Available > countItem_ON_Available){
//                     countItem_Available = countItem_ON_Available;  
//                     isAddScore = false;      
//                 }

//                 if(!itemTube.checkAllItemWater_SameIndexColor()) {
//                     // isAddScore = false;
//                     isCombo = false;
//                 }

//                 if(itemTube.checkTube_None()){
//                     if(this.lastItemTubeSelect.checkAllItemWater_SameIndexColor()){
//                         isAddScore = false;
//                         isCombo = false;
//                     }
//                 }
//                 // if(localConfig.instance.isWaterLock){
//                 //     countItem_Available = 1;
//                 // }
//                 itemTube.updateHeadColorIndex_Now(countTubeTarget_ItemWater_Avaliable,this.lastItemTubeSelect.getHeadIndexColor(),countItem_Available);
//                 // itemTube.currState = ITEM_TUBE_STATE.ON;
//                 let countTubeLast_ItemWater_Avaiable:number = this.lastItemTubeSelect.getCount_ItemWater_Available();
//                 let indexStep:number = 4 - countTubeLast_ItemWater_Avaiable;
//                 // console.log("indexStep",indexStep);
//                 let posTube:Vec2 = localConfig.instance.getPosTube_byXY(localConfig.instance.currLevelDataInfo,itemTube.tubeX,itemTube.tubeY);
//                 let posLastTube:Vec2 = localConfig.instance.getPosTube_byXY(localConfig.instance.currLevelDataInfo,this.lastItemTubeSelect.tubeX,this.lastItemTubeSelect.tubeY);
//                 let posTarget:Vec3 = new Vec3(posTube.x - posLastTube.x,posTube.y + 282 - posLastTube.y, 0);
//                 // console.log(posTarget);
//                 let indexStepON:number = countTubeTarget_ItemWater_Avaliable;
//                 // console.log("countItem_Available:"+countItem_Available);
//                 this.lastItemTubeSelect.setStartWaterOFF(itemTube,indexStep,posTarget,isRight,indexStepON,countItem_Available-1);
//                 this.lastItemTubeSelect.node.setSiblingIndex(999);
//                 itemTube.setItemTube_beSelected();
//                 this.lastItemTubeSelect = null;
//                 this.setHideButtonBooster();

//                 if(localConfig.instance.currGameMode == GAME_MODE.NORMAL){
//                     if(localConfig.instance.currLevel == 2){
//                         this.checkLevel2_TutTubes_HideTut();
//                     }
//                 }else if(localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT){
//                     if(localConfig.instance.currIndexLevelTournament + localConfig.instance.currLevelStartTournament == 2){
//                         this.checkLevel2_TutTubes_HideTut();
//                     }
//                 }

//                 if(localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT){
//                     if(isCombo){
//                         this.addCombo(0.8 * countItem_Available + 0.6);
//                     }
    
//                     if(isAddScore){
//                         this.scheduleOnce(()=>{
//                             let scoreValue:number = 10 * this.comboGroup.getComboValue();
//                             this.infoGroupTournament.setAddScore(scoreValue);
//                         },0.8 * countItem_Available +0.6);
//                     }
//                 }else if(localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT_PAGEHOST){
//                     if(isCombo){
//                         this.addCombo(0.8 * countItem_Available + 0.6);
//                     }
    
//                     if(isAddScore){
//                         this.scheduleOnce(()=>{
//                             let scoreValue:number = 10 * this.comboGroup.getComboValue();
//                             this.infoGroupTournamentPageHost.setAddScore(scoreValue);
//                         },0.8 * countItem_Available +0.6);
//                     }
//                 }else if(localConfig.instance.currGameMode == GAME_MODE.WITH_FRIEND){
//                     if(isCombo){
//                         this.addCombo(0.8 * countItem_Available + 0.6);
//                     }
    
//                     if(isAddScore){
//                         this.scheduleOnce(()=>{
//                             let scoreValue:number = 10 * this.comboGroup.getComboValue();
//                             this.infoGroupWithFriend.setAddScore(scoreValue);
//                         },0.8 * countItem_Available +0.6);
//                     }
//                 }
                

                
//             }else{
//                 if(itemTube.currState == ITEM_TUBE_STATE.ON || itemTube.currState == ITEM_TUBE_STATE.WAITTING){
//                     this.lastItemTubeSelect.setUnselect_ItemTube(false);
//                     this.lastItemTubeSelect = null;
//                 }else{
//                     this.lastItemTubeSelect.setUnselect_ItemTube(false);
//                     this.lastItemTubeSelect = itemTube;
//                     this.lastItemTubeSelect.setSelect_ItemTube();
//                     this.lastItemTubeSelect.node.setSiblingIndex(999);
//                 }
                
                

//                 if(localConfig.instance.currGameMode == GAME_MODE.NORMAL){
//                     if(localConfig.instance.currLevel == 2){
//                         this.checkLevel2_TutTubes_HideTut();
//                     }
//                 }else if(localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT){
//                     if(localConfig.instance.currIndexLevelTournament + localConfig.instance.currLevelStartTournament == 2){
//                         this.checkLevel2_TutTubes_HideTut();
//                     }
//                 }
//             }
//         }
//     }

//     setTubeMoveBack_Finished(){
//         // console.log("setTubeMoveBack_Finished");
//         let isShowButtonBooster:boolean = true;
//         for(let i=0; i< this.arrItemTubes_1.length; i++){
//             if(this.arrItemTubes_1[i].currState == ITEM_TUBE_STATE.OFF){
//                 // console.log("Tube1:",i,this.arrItemTubes_1[i].currState);
//                 isShowButtonBooster = false;
//             }
//         }

//         for(let i=0; i< this.arrItemTubes_2.length; i++){
//             if(this.arrItemTubes_2[i].currState == ITEM_TUBE_STATE.OFF){
//                 // console.log("Tube2:",i,this.arrItemTubes_1[i].currState);
//                 isShowButtonBooster = false;
//             }
//         }
//         // this.addUndo_Info();
//         if(isShowButtonBooster){
//             this.setShowButtonBooster();
//         }
//     }
    

//     //#region END GAME
//     checkFinishedGame(posBottleFinished:Vec3){
//         if(localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT){
//             let scoreValue:number = 100 * this.comboGroup.getComboValue();
//             this.infoGroupTournament.setAddScore(scoreValue);
//         }else if(localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT_PAGEHOST){
//             let scoreValue:number = 100 * this.comboGroup.getComboValue();
//             this.infoGroupTournamentPageHost.setAddScore(scoreValue);
//         }else if(localConfig.instance.currGameMode == GAME_MODE.WITH_FRIEND){
//             let scoreValue:number = 100 * this.comboGroup.getComboValue();
//             this.infoGroupWithFriend.setAddScore(scoreValue);
//         }
//         this.resetUndo();

//         this.checkFinishedGame_2(1);
//     }

//     checkFinishedGame_2(timeCheckDelay:number){
//         this.scheduleOnce(()=>{
//             // console.log("checkFinishedGamecheckFinishedGame");
//             let isWin:boolean = true;
//             for(let i=0; i < this.arrItemTubes_1.length;i++){
//                 // console.log(this.arrBottles[i]);
//                 if(!this.arrItemTubes_1[i].checkTube_Done()){
//                     // console.log("IS DONE === FALSE:"+i);
//                     isWin = false;
//                     break;
//                 }
//             }

//             for(let i=0; i < this.arrItemTubes_2.length;i++){
//                 // console.log(this.arrBottles[i]);
//                 if(!this.arrItemTubes_2[i].checkTube_Done()){
//                     // console.log("IS DONE === FALSE:"+i);
//                     isWin = false;
//                     break;
//                 }
//             }
    
//             if(isWin){
//                 this.setWin();
//             }
//         },timeCheckDelay);
        
//     }
//     //#endregion

//     //#region BOOSTER

//     setShowButtonBooster(){
//         if(localConfig.instance.currGameMode == GAME_MODE.NORMAL){
//             if(localConfig.instance.currLevel < localConfig.instance.TUTORIAL_LEVEL_SHOW_BOOSTER){
//                 this.btnBoosterUndo.node.active = false;
//                 this.btnBoosterSuggest.node.active = false;
//                 this.btnBoosterAddCol.node.active = false;
//             }else{
//                 this.btnBoosterUndo.node.active = true;
//                 this.btnBoosterSuggest.node.active = true;
//                 this.btnBoosterAddCol.node.active = true;
//             }
//         }else if(localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT){
//             if(localConfig.instance.currLevelStartTournament + localConfig.instance.currIndexLevelTournament < localConfig.instance.TUTORIAL_LEVEL_SHOW_BOOSTER){
//                 this.btnBoosterUndo.node.active = false;
//                 this.btnBoosterSuggest.node.active = false;
//                 this.btnBoosterAddCol.node.active = false;
//             }else{
//                 this.btnBoosterUndo.node.active = true;
//                 this.btnBoosterSuggest.node.active = true;
//                 this.btnBoosterAddCol.node.active = true;
//             }
//         }else{
//             this.btnBoosterUndo.node.active = true;
//             this.btnBoosterSuggest.node.active = true;
//             this.btnBoosterAddCol.node.active = true;
//         }
//     }

//     setHideButtonBooster(){
//         this.btnBoosterUndo.node.active = false;
//         this.btnBoosterSuggest.node.active = false;
//         this.btnBoosterAddCol.node.active = false;
//     }

//     setBoosterClick(boosterType:BOOSTER_TYPE,isTutorial:boolean){
//         let boosterCount:number = localConfig.instance.getBoosterCount(boosterType);
//         if(boosterCount > 0 || isTutorial){
//             this.setUseBooster(boosterType);
//         }else{
//             clientEvent.dispatchEvent(Constants.SHOW_SHOP_ITEM_POPUP,boosterType);
//         }
//     }

//     setUseBooster(boosterType:BOOSTER_TYPE){
//         if(localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT){
//             this.resetCombo();
//         }else if(localConfig.instance.currGameMode == GAME_MODE.WITH_FRIEND){
//             this.resetCombo();
//         }
        
//         localConfig.instance.setDailyQuest_UseBooster();
//         let boosterCount:number = localConfig.instance.getBoosterCount(boosterType);
//         if(boosterType == BOOSTER_TYPE.UNDO){
//             localConfig.instance.setBoosterCount(boosterType,boosterCount - 1);
//             this.setUseBooster_Undo();
//             this.hideTutAddCol();
//         }else if(boosterType == BOOSTER_TYPE.SUGGEST){
//             if(localConfig.instance.currGameMode == GAME_MODE.NORMAL){
//                 if(localConfig.instance.currLevel == 5 && !localConfig.instance.isTutLevel5){
//                     this.setTutLevel5_Finished();
//                 }
//             }
//             this.arrTubeSuggests_Temp = this.findAll_Suggest_Available();
//             if(this.arrTubeSuggests_Temp.length > 0){
//                 localConfig.instance.setBoosterCount(boosterType,boosterCount - 1);
//                 this.setUseBooster_Suggest();
//             }else{
//                 console.error("NO MOVE!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//                 clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION,"No more possible moves!");
//                 if(!this.isAddCol){
//                     this.showTutAddCol();
//                 }
//             }

//         }else if(boosterType == BOOSTER_TYPE.ADDCOL){
//             // if(!this.isAddCol){
//                 // this.isAddCol = true;
//                 // this.btnBoosterAddCol.setBoosterAvailable(false);
//                 this.hideTutAddCol();
//                 localConfig.instance.setBoosterCount(boosterType,boosterCount - 1);
//                 this.setUseBooster_AddCol();
//             // }
            
//         }
//     }


//     setShopItem_BuySuccess(boosterType:BOOSTER_TYPE){
//         this.setUseBooster(boosterType);
//     }
    

    
//     //#endregion

//     //#region UNDO
//     arrUndo_Infos:LevelDataInfo[] = [];

//     setUseBooster_Undo(){
//         if(this.lastItemTubeSelect != null){
//             this.lastItemTubeSelect.setUnselect_ItemTube_Now_ResetPos();
//             this.lastItemTubeSelect = null;
//         }

//         if(this.arrUndo_Infos.length > 0){
//             let undoLevelDataInfo:LevelDataInfo = this.arrUndo_Infos[this.arrUndo_Infos.length-1];

//             for(let i=0; i< undoLevelDataInfo.arrTubeInfo_1.length;i++){
//                 this.arrItemTubes_1[i].setUndo(undoLevelDataInfo.arrTubeInfo_1[i].arrIndexColors,undoLevelDataInfo.arrTubeInfo_1[i].indexLock);
//             }

//             for(let i=0; i< undoLevelDataInfo.arrTubeInfo_2.length;i++){
//                 this.arrItemTubes_2[i].setUndo(undoLevelDataInfo.arrTubeInfo_2[i].arrIndexColors,undoLevelDataInfo.arrTubeInfo_2[i].indexLock);
//             }

//             this.arrUndo_Infos.splice(this.arrUndo_Infos.length-1,1);

//             this.showButtonBoosterUndo_Available();
//         }
//     }

//     showButtonBoosterUndo_Available(){
//         this.btnBoosterUndo.setBoosterAvailable(this.arrUndo_Infos.length > 0);
//     }

    

//     addUndo_Info(){
//         let levelDataInfo:LevelDataInfo = new LevelDataInfo();
//         for(let i=0; i< this.arrItemTubes_1.length;i++){
//             if(this.arrItemTubes_1[i].currState == ITEM_TUBE_STATE.ON || this.arrItemTubes_1[i].currState == ITEM_TUBE_STATE.OFF || this.arrItemTubes_1[i].currState == ITEM_TUBE_STATE.WAITTING){
//                 return;
//             }
//             let tubeInfo:TubeInfo = new TubeInfo();
//             for(let j=0; j< 4; j++){
//                 tubeInfo.arrIndexColors.push(this.arrItemTubes_1[i].arrItemWaters[j].indexColor);
//             }

//             if(localConfig.instance.isWaterLock){
//                 for(let j=3; j>= 0; j--){
//                     if(this.arrItemTubes_1[i].arrItemWaters[j].waterState == WATER_STATE.LOCK){
//                         tubeInfo.indexLock = j;
//                         break;
//                     }
//                 }
//             }
//             levelDataInfo.arrTubeInfo_1.push(tubeInfo);
//         }

//         for(let i=0; i< this.arrItemTubes_2.length;i++){
//             if(this.arrItemTubes_2[i].currState == ITEM_TUBE_STATE.ON || this.arrItemTubes_2[i].currState == ITEM_TUBE_STATE.OFF || this.arrItemTubes_2[i].currState == ITEM_TUBE_STATE.WAITTING){
//                 return;
//             }
//             let tubeInfo:TubeInfo = new TubeInfo();
//             for(let j=0; j< 4; j++){
//                 tubeInfo.arrIndexColors.push(this.arrItemTubes_2[i].arrItemWaters[j].indexColor);
//             }

//             if(localConfig.instance.isWaterLock){
//                 for(let j=3; j>= 0; j--){
//                     if(this.arrItemTubes_2[i].arrItemWaters[j].waterState == WATER_STATE.LOCK){
//                         tubeInfo.indexLock = j;
//                         break;
//                     }
//                 }
//             }
//             levelDataInfo.arrTubeInfo_2.push(tubeInfo);
//         }

//         this.arrUndo_Infos.push(levelDataInfo);

//         this.showButtonBoosterUndo_Available();

//     }

//     resetUndo(){
//         this.arrUndo_Infos = [];
//         this.showButtonBoosterUndo_Available();
//     }
//     //#endregion

//     //#region SUGGEST

//     setUseBooster_Suggest(){
//         // console.log("setUseBooster_Suggest",this.lastItemTubeSelect);
//         if(this.lastItemTubeSelect != null){
//             this.lastItemTubeSelect.setUnselect_ItemTube_Now_ResetPos();
//             this.lastItemTubeSelect = null;
//         }

//         this.arrTubeSuggests_Temp.sort((a,b)=> b.expecte_value - a.expecte_value);

//         let arrTubeSuggests:TubeSuggest[] = [];
//         arrTubeSuggests.push(this.arrTubeSuggests_Temp[0]);
//         for (let i = 1; i < this.arrTubeSuggests_Temp.length; i++) {
//             if (this.arrTubeSuggests_Temp[i].expecte_value == arrTubeSuggests[0].expecte_value) {
//                 arrTubeSuggests.push(this.arrTubeSuggests_Temp[i]);
//             }
//         }

//         let tubeSuggest: TubeSuggest = arrTubeSuggests[lodash.random(0, arrTubeSuggests.length)];

//         let arrAllTubes:ItemTube[] = this.arrItemTubes_1.concat(this.arrItemTubes_2);
//         let tube1: ItemTube = arrAllTubes[tubeSuggest.tube_index_1];
//         let tube2: ItemTube = arrAllTubes[tubeSuggest.tube_index_2];

//         this.addUndo_Info();

//         let isRight:boolean = true;
//         if (tube2.node.position.x < 0) {
//             isRight = false;
//         }
//         let countTubeTarget_ItemWater_Avaliable:number = tube2.getCount_ItemWater_Available();
//         let countItem_Available:number = tube1.getCountItemWater_SameHeadIndexColor();
//         let countItem_ON_Available: number = tube2.getCountItemWater_ON_Available();

//         if (countItem_Available > countItem_ON_Available) {
//             countItem_Available = countItem_ON_Available;
//         }
//         // if(localConfig.instance.isWaterLock){
//         //     countItem_Available = 1;
//         // }
//         tube2.updateHeadColorIndex_Now(countTubeTarget_ItemWater_Avaliable, tube1.getHeadIndexColor(), countItem_Available);
//         // tube2.currState = ITEM_TUBE_STATE.ON;
//         let countTubeLast_ItemWater_Avaiable: number = tube1.getCount_ItemWater_Available();
//         let indexStep: number = 4 - countTubeLast_ItemWater_Avaiable;
//         // console.log("indexStep",indexStep);
//         let posTube: Vec2 = localConfig.instance.getPosTube_byXY(localConfig.instance.currLevelDataInfo, tube2.tubeX, tube2.tubeY);
//         let posLastTube: Vec2 = localConfig.instance.getPosTube_byXY(localConfig.instance.currLevelDataInfo, tube1.tubeX, tube1.tubeY);
//         let posTarget: Vec3 = new Vec3(posTube.x - posLastTube.x, posTube.y + 282 - posLastTube.y, 0);
//         // console.log(posTarget);
//         let indexStepON: number = countTubeTarget_ItemWater_Avaliable;
//         // console.log("countItem_Available:"+countItem_Available);
//         tube1.setStartWaterOFF(tube2, indexStep, posTarget, isRight, indexStepON, countItem_Available - 1);
//         tube1.node.setSiblingIndex(999);
//         tube2.setItemTube_beSelected();


//         this.setHideButtonBooster();
//     }

//     arrTubeSuggests_Temp:TubeSuggest[] = [];
//     findAll_Suggest_Available(){
//         let arrTubeSuggests:TubeSuggest[] = [];
//         let arrAllTubes:ItemTube[] = this.arrItemTubes_1.concat(this.arrItemTubes_2);
//         for(let i=0; i < arrAllTubes.length;i++){
//             for(let j=0;j< arrAllTubes.length;j++){
//                 if(this.checkTube_Suggest_Available(i,j)){
//                     let tubeSuggest:TubeSuggest = new TubeSuggest();
//                     tubeSuggest.tube_index_1 = i;
//                     tubeSuggest.tube_index_2 = j;

//                     let countItem_Available_Tube_1:number = arrAllTubes[i].getCountItemWater_SameHeadIndexColor();
//                     let countItem_SameHeadIndexColor_Tube_2:number = arrAllTubes[j].getCountItemWater_SameHeadIndexColor();
                   

//                     tubeSuggest.expecte_value = countItem_Available_Tube_1 + countItem_SameHeadIndexColor_Tube_2;
//                     if(arrAllTubes[j].checkAllItemWater_SameIndexColor()) tubeSuggest.expecte_value++;
//                     arrTubeSuggests.push(tubeSuggest);
//                 }
//             }
//         }

//         return arrTubeSuggests;
//     }

//     checkTube_Suggest_Available(tube_index_1:number,tube_index_2:number){
//         if(tube_index_1 == tube_index_2) return false;
//         let arrAllTubes:ItemTube[] = this.arrItemTubes_1.concat(this.arrItemTubes_2);
//         if(arrAllTubes[tube_index_1].currState == ITEM_TUBE_STATE.DONE || arrAllTubes[tube_index_2].currState == ITEM_TUBE_STATE.DONE) return false;
        
//         if(arrAllTubes[tube_index_1].currState == ITEM_TUBE_STATE.OFF) return false;
        
//         if(arrAllTubes[tube_index_1].currState == ITEM_TUBE_STATE.ON) return false;
        
//         if(arrAllTubes[tube_index_2].checkTube_None() && arrAllTubes[tube_index_1].checkAllItemWater_SameIndexColor()) return false;

//         if(arrAllTubes[tube_index_2].checkTube_None()){
//             return true;
//         }

//         if(arrAllTubes[tube_index_2].getCount_ItemWater_Available() == 4){
//             return false;
//         }
        
//         let headIndexColor_Bottle_1:number = arrAllTubes[tube_index_1].getHeadIndexColor();
        
//         let headIndexColor_Bottle_2:number = arrAllTubes[tube_index_2].getHeadIndexColor();
        
//         if(headIndexColor_Bottle_1 == headIndexColor_Bottle_2){

//             //Nếu ko chuyển đc hết các color cùng màu headIndexColor từ bottle1 sang bottle2 thì cũng false
//             let countItem_OFF_Available:number = arrAllTubes[tube_index_1].getCountItemWater_SameHeadIndexColor();
//             let countItem_ON_Available:number = arrAllTubes[tube_index_2].getCountItemWater_ON_Available(); 
            
//             if(countItem_OFF_Available > countItem_ON_Available) {
//                 return false;
//             }

//             return true;
//         }
//         return false;
//     }
//     //#endregion


//     //#region ADD COL
//     isAddCol:boolean = false;
//     @property(Node)
//     objTut_AddCol:Node;

//     showButtonBoosterAddCol_Available(){
//         let isAvailable:boolean = true;
//         if(this.arrItemTubes_2.length >= 9 && this.arrItemTubes_2.length >= 9){
//             isAvailable = false;
//         }
//         this.btnBoosterAddCol.setBoosterAvailable(isAvailable);
//     }

//     setUseBooster_AddCol(){
//         let indexAddColY:number = 0;
//         if(this.arrItemTubes_2.length > 0 && this.arrItemTubes_2.length < this.arrItemTubes_1.length){
//             indexAddColY = 1;
//         }

//         if(indexAddColY == 0){
//             localConfig.instance.currLevelDataInfo.arrTubeInfo_1.push(new TubeInfo());
//         }else {
//             localConfig.instance.currLevelDataInfo.arrTubeInfo_2.push(new TubeInfo());
//         }
//         localConfig.instance.currLevelDataInfo.maxCol = localConfig.instance.currLevelDataInfo.arrTubeInfo_1.length;
//         if(localConfig.instance.currLevelDataInfo.arrTubeInfo_1.length == localConfig.instance.currLevelDataInfo.arrTubeInfo_2.length){
//             // localConfig.instance.currLevelDataInfo.maxCol ++;
//         }else if(localConfig.instance.currLevelDataInfo.arrTubeInfo_1.length < localConfig.instance.currLevelDataInfo.arrTubeInfo_2.length){
//             localConfig.instance.currLevelDataInfo.maxCol = localConfig.instance.currLevelDataInfo.arrTubeInfo_2.length;
//         }

//         localConfig.instance.initPos_byLevelDataInfo(localConfig.instance.currLevelDataInfo);
//         this.groupAllTubes.setScale(new Vec3(localConfig.instance.scaleTube,localConfig.instance.scaleTube,1));
//         for(let i=0; i< this.arrItemTubes_1.length;i++){
//             this.arrItemTubes_1[i].updatePos();
//         }

//         for(let i=0; i< this.arrItemTubes_2.length;i++){
//             this.arrItemTubes_2[i].updatePos();
//         }

//         let item = instantiate(this.tubePrefab);
//         item.setParent(this.groupAllTubes);
//         let itemTube: ItemTube = item.getComponent(ItemTube);
//         if(indexAddColY == 0){
//             itemTube.initItemTube_AddCol(this.arrItemTubes_1.length, 0);
//             this.arrItemTubes_1.push(itemTube);
//         }else {
//             itemTube.initItemTube_AddCol(this.arrItemTubes_2.length, 1);
//             this.arrItemTubes_2.push(itemTube);
//         }
        

//         this.showButtonBoosterAddCol_Available();
//     }


//     //#endregion
//     //Hien thi khi No Move
//     showTutAddCol(){
//         // if(this.isAddCol){
//         //     clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION,"No Move!");
//         // }else{
//         //     this.objTut_AddCol.active = true;
//         // }
//     }

//     hideTutAddCol(){
//         this.objTut_AddCol.active = false;
//     }
//     //#endregion

//     //#region WIN
//     @property(WellDoneGroup)
//     wellDoneGroup:WellDoneGroup;
//     setWin(){
//         if(localConfig.instance.currGameState != GAME_STATE.WIN){
//             localConfig.instance.currGameState = GAME_STATE.WIN;
//             // if(localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT){
//             //     this.setWinTournament();
//             // }else{
                
//             // }
//             this.tweenBoosterGroup = tween(this.boosterGroup).to(0.5,{position:new Vec3(0,-786,0)},{easing:'quadOut'}).start();
//             this.wellDoneGroup.showWellDoneGroup();
//         }
//     }

//     setWellDoneFinished(){
//         if(localConfig.instance.currGameMode == GAME_MODE.DAILY_CHALLENGE){
//             FBInstantManager.instance.Show_InterstitialAdAsync("dailychallenge","win",(err,success)=>{
//                 clientEvent.dispatchEvent(Constants.SHOW_WIN_DAILYCHALLENGE_POPUP);
//             });
            
//         }else if(localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT){
//             if(localConfig.instance.currIndexLevelTournament + localConfig.instance.currLevelStartTournament == 2){
//                 localConfig.instance.setLevelUnlock(3);
//                 this.hideTutLevel2();
//             }
//             localConfig.instance.setLevelUnlock(2);
//             if(localConfig.instance.currIndexLevelTournament + localConfig.instance.currLevelStartTournament > 2){
//                 FBInstantManager.instance.Show_InterstitialAdAsync("tournament","win",(err,success)=>{
//                     this.setWinTournament();
//                 });
//             }else{
//                 this.setWinTournament();
//             }
//         }else if(localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT_PAGEHOST){
//             FBInstantManager.instance.Show_InterstitialAdAsync("tournamentpagehost", "win", (err, success) => {
//                 this.setWinTournamentPageHost();
//             });
//         }else if(localConfig.instance.currGameMode == GAME_MODE.WITH_FRIEND){
//             if(localConfig.instance.currWithFriendDataInfo.senderID == FBInstantManager.instance.getID()){
//                 localConfig.instance.currWithFriendDataInfo.senderScore = this.infoGroupWithFriend.scoreValue;
//                 this.updateContextWithFriend();
//             }else{
//                 localConfig.instance.currWithFriendDataInfo.receiverScore = this.infoGroupWithFriend.scoreValue;
//                 this.updateContextWithFriend();
//             }
//             FBInstantManager.instance.Show_InterstitialAdAsync("withfriend","win",()=>{
//                 // this.showWinWithFriendPopup(this.scoreGroupWithFriend.currScore);
//                 clientEvent.dispatchEvent(Constants.SHOW_WIN_WITHFRIEND_POPUP, localConfig.instance.currWithFriendDataInfo, this.infoGroupWithFriend.scoreValue);
//             });
//         }
//         else{
//             if(localConfig.instance.currLevel == 2){
//                 this.hideTutLevel2();
//             }
//             localConfig.instance.setLevelUnlock(localConfig.instance.currLevel + 1);
//             localConfig.instance.addPassLevel();
//             PGSPlayInstantManager.instance.UpdatePlayerScore(localConfig.instance.currLevelUnlock);
//             let strWorldContextID:string = localConfig.instance.getWorldContextID_byWeek(localConfig.instance.currWeek);
//             let leaderboardDataInfo:LeaderboardDataInfo = localConfig.instance.getLeaderBoardDataInfo_byContextID(strWorldContextID);
//             if(leaderboardDataInfo != null){
//                 PGSPlayInstantManager.instance.UpdatePlayerScore_byLeaderboardID(leaderboardDataInfo._id,localConfig.instance.currLevelUnlock);
//             }
//             if(localConfig.instance.raceActive){
//                 localConfig.instance.addRaceScore();
//             }

//             if(localConfig.instance.currLevelUnlock >= 2){
//                 FBInstantManager.instance.Show_InterstitialAdAsync("normal","win",(err,success)=>{
//                     clientEvent.dispatchEvent(Constants.SHOW_WIN_POPUP,localConfig.instance.currLevel);
//                 });
//             }else{
//                 clientEvent.dispatchEvent(Constants.SHOW_WIN_POPUP,localConfig.instance.currLevel);
//             }
            
//         }
        
//     }
//     //#endregion

//     setNextLevel(){
//         clientEvent.dispatchEvent(Constants.SHOW_LOADING_START_NOW_POPUP);
//         localConfig.instance.currLevel++;   
//         this.preloadLevel(localConfig.instance.currLevel);
//     }

//     //#region TUTORIAL
//     initTutorials() {
//         if(localConfig.instance.currGameMode == GAME_MODE.NORMAL){
//             if(localConfig.instance.currLevel == 1){
//                 this.initTutorial_Level1();
//             }else if(localConfig.instance.currLevel == 2){
//                 this.initTutorial_Level2();
//             }else if(localConfig.instance.currLevel == 5){
//                 if(!localConfig.instance.isTutLevel5){
//                     this.initTutorial_Level5();
//                 }
//             }
//         }else if(localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT){
//             if(localConfig.instance.currLevelStartTournament + localConfig.instance.currIndexLevelTournament == 1){
//                 this.initTutorial_Level1();
//             }else if(localConfig.instance.currLevelStartTournament + localConfig.instance.currIndexLevelTournament == 2){
//                 this.initTutorial_Level2();
//             }
//         }
//     }
//     /**
//     * TUT LEVEL 1
//     */
//     @property(Node)
//     nodeTutLevelPopup: Node;

//     tutLevel: TutLevelPopup;

//     initTutorial_Level1() {
//         this.lockScene.active = false;
//         let self = this;
//         if (this.tutLevel) {
//             this.tutLevel.showPopup();
//             let posTube: Vec2 = localConfig.instance.getPosTube_byXY(localConfig.instance.currLevelDataInfo, 0, 0);
//             this.showTutLevel1_Step1(new Vec3(posTube.x, posTube.y - 50, 0));
//         } else {
//             clientEvent.dispatchEvent(Constants.SHOW_LOADING_POPUP);
//             resourceUtil.loadPrefabUI_Bundle("TutLevelPopup", (err, uiPrefab) => {
//                 let tutlevel1Prefab = instantiate(uiPrefab);
//                 tutlevel1Prefab.setParent(self.nodeTutLevelPopup);
//                 tutlevel1Prefab.setPosition(new Vec3(0, 0, 0))

//                 self.tutLevel = tutlevel1Prefab.getComponent(TutLevelPopup);
//                 self.tutLevel.showPopup();
//                 let posTube: Vec2 = localConfig.instance.getPosTube_byXY(localConfig.instance.currLevelDataInfo, 0, 0);
//                 self.showTutLevel1_Step1(new Vec3(posTube.x, posTube.y - 50, 0));
//                 clientEvent.dispatchEvent(Constants.HIDE_LOADING_POPUP);
//             });
//         }


//     }

//     showTutLevel1_Step1(pos: Vec3) {
//         if (this.tutLevel) {
//             this.tutLevel.showTutLevel1_step1(pos);
//             this.arrItemTubes_1[1].setBottle_Touch_Available(false);
//         }
//     }

//     hideTutLevel1_Step1() {
//         this.arrItemTubes_1[0].setBottle_Touch_Available(false);
//         if (this.tutLevel) {
//             this.tutLevel.hideTut();
//         }
//         this.initTutLevel1_Step2();
//     }
 
//     initTutLevel1_Step2() {
//         let self = this;
//         this.scheduleOnce(() => {
//             let posTube: Vec2 = localConfig.instance.getPosTube_byXY(localConfig.instance.currLevelDataInfo, 1, 0);
//             self.showTutLevel1_Step2(new Vec3(posTube.x, posTube.y - 50, 0));
//         }, 0.3);    
//     }

//     showTutLevel1_Step2(pos: Vec3) {
//         this.arrItemTubes_1[1].setBottle_Touch_Available(true);
//         if (this.tutLevel) {
//             this.tutLevel.showTutLevel1_step2(pos);
//         }
//     }


   

//     hideTutLevel1_Step2() {
//         if (this.tutLevel) {
//             this.tutLevel.hidePopup();
//         }
//     }

//     /**
//     * TUT LEVEL 2
//     */
//     initTutorial_Level2() {
//         this.lockScene.active = false;
//         let self = this;
//         if (this.tutLevel) {
//             this.tutLevel.showPopup();
//             this.tutLevel.showTutLevel2();
//         } else {
//             clientEvent.dispatchEvent(Constants.SHOW_LOADING_POPUP);
//             resourceUtil.loadPrefabUI_Bundle("TutLevelPopup", (err, uiPrefab) => {
//                 let tutlevel1Prefab = instantiate(uiPrefab);
//                 tutlevel1Prefab.setParent(self.nodeTutLevelPopup);
//                 tutlevel1Prefab.setPosition(new Vec3(0, 0, 0))

//                 self.tutLevel = tutlevel1Prefab.getComponent(TutLevelPopup);
//                 self.tutLevel.showPopup();
//                 self.tutLevel.showTutLevel2();
//                 clientEvent.dispatchEvent(Constants.HIDE_LOADING_POPUP);
//             });
//         }
//     }

//     checkTutLevel2_TutTubes(indexTube:number){
//         let indexHeadColor_Selected:number = this.arrItemTubes_1[indexTube].getHeadIndexColor();
//         for(let i=0; i< this.arrItemTubes_1.length;i++){
//             if(i!= indexTube){
//                 let indexHeadColor:number = this.arrItemTubes_1[i].getHeadIndexColor();
//                 let countWaterInBottle:number = this.arrItemTubes_1[i].getCount_ItemWater_Available();
                
//                 let isCorrect:boolean = true;
//                 if(indexHeadColor != indexHeadColor_Selected){
//                      isCorrect = false;
//                 }

//                 if(countWaterInBottle >= 4){
//                     isCorrect = false;
//                 }else{
//                     this.arrItemTubes_1[i].showTut_Level2(isCorrect);
//                 }

               
//             }else{
//                 this.arrItemTubes_1[i].hideTut_Level2();
//             }
//         }
//     }

//     checkLevel2_TutTubes_HideTut(){
//         for(let i=0; i< this.arrItemTubes_1.length;i++){
//             this.arrItemTubes_1[i].hideTut_Level2();
//         }
//     }

//     hideTutLevel2() {
//         if (this.tutLevel) {
//             this.tutLevel.hidePopup();
//         }
//     }

//     /**
//     * TUT LEVEL 1
//     */
//     @property(Node)
//     nodeTutLevel5Popup: Node;

//     tutLevel5: TutLevel5Popup;

//     initTutorial_Level5() {
//         this.lockScene.active = false;
//         let self = this;
//         if (this.tutLevel5) {
//             this.tutLevel5.showPopup();
//         } else {
//             clientEvent.dispatchEvent(Constants.SHOW_LOADING_POPUP);
//             resourceUtil.loadPrefabUI_Bundle("TutLevel5Popup", (err, uiPrefab) => {
//                 let tutlevel5Prefab = instantiate(uiPrefab);
//                 tutlevel5Prefab.setParent(self.nodeTutLevel5Popup);
//                 tutlevel5Prefab.setPosition(new Vec3(0, 0, 0))

//                 self.tutLevel5 = tutlevel5Prefab.getComponent(TutLevel5Popup);
//                 self.tutLevel5.showPopup();
//                 clientEvent.dispatchEvent(Constants.HIDE_LOADING_POPUP);
//             });
//         }
//     }

//     setTutLevel5_Finished() {
//         localConfig.instance.setTutLevel5_Finshed();
//         if (this.tutLevel5) {
//             this.tutLevel5.hidePopup();
//         }
//     }

//     resetTut(){
//         if (this.tutLevel) {
//             this.tutLevel.hidePopup();
//         }
//         if (this.tutLevel5) {
//             this.tutLevel5.hidePopup();
//         }
//     }
//     //#endregion
//     //#region COMBO
//     @property(ComboGroup)
//     comboGroup:ComboGroup;

//     addCombo(delayTime:number){
//         let self = this;
//         this.scheduleOnce(()=>{
//             self.comboGroup.addCombo();
//         },delayTime);
        
//     }

//     resetCombo(){
//         this.comboGroup.resetCombo();
//     }
//     //#endregion

//     setWinTournament(){
//         let score:number = this.infoGroupTournament.scoreValue;
//         let leaderBoardMyScore = localConfig.instance.getLeaderBoardMyScore_byTournamentID(localConfig.instance.currLeaderboardDataInfo.tournamentId);
//         if(score > leaderBoardMyScore){
//             localConfig.instance.setLeaderBoardMyScore_byTournamentID(localConfig.instance.currLeaderboardDataInfo.tournamentId,score);
//             PGSPlayInstantManager.instance.UpdatePlayerScore_byLeaderboardID(localConfig.instance.currLeaderboardDataInfo._id,score);
//         }
        
//         console.log("setWinTournament",localConfig.instance.currIndexLevelTournament + localConfig.instance.currLevelStartTournament);
//         if((localConfig.instance.currIndexLevelTournament + localConfig.instance.currLevelStartTournament) % 3 == 1){   
//             FBInstantManager.instance.ShareTournament(this.infoGroupTournament.scoreValue,(err,success)=>{

//             });
//         }
//         clientEvent.dispatchEvent(Constants.SHOW_LOADING_START_NOW_POPUP);
//         this.resetLevel();
//         localConfig.instance.currIndexLevelTournament ++;
//         this.lockScene.active = true;
//         let levelLoadData: number = localConfig.instance.currLevelStartTournament + localConfig.instance.currIndexLevelTournament;
//         if (levelLoadData > localConfig.instance.WATER_MAX_CHALLENGE_LEVEL) {
//             levelLoadData = levelLoadData % localConfig.instance.WATER_MAX_CHALLENGE_LEVEL;
//         }
//         localConfig.instance.currLevelDataInfo = localConfig.instance.getLevelDataInfo_byIndexLevel(levelLoadData);

//         this.infoGroupTournament.node.active = true;
//         let timePlay = (localConfig.instance.currLevelDataInfo.arrTubeInfo_1.length + localConfig.instance.currLevelDataInfo.arrTubeInfo_2.length) * 15 + lodash.random(1,9) * 5;
//         this.infoGroupTournament.setNextLevel(timePlay);

//         this.comboGroup.node.active = true;
//         this.comboGroup.init();

//         if (localConfig.instance.currIndexLevelTournament % 10 == 0) {
//             localConfig.instance.isWaterLock = true;
//         } else {
//             localConfig.instance.isWaterLock = false;
//         }
//         console.log("setWinTournament BTN HOME ACTIVE");
//         this.btnHome.node.active = true;
//         this.btnPause.node.active = true;
//         this.initLevel();
//     }

//     setWinTournamentPageHost(){
//         let score:number = this.infoGroupTournamentPageHost.scoreValue;
//         clientEvent.dispatchEvent(Constants.SHOW_WIN_TOURNAMENT_PAGEHOST_POPUP, score);
//     }

//     setWinWithFriend(){
//         let score:number = this.infoGroupWithFriend.scoreValue;
        
//     }

    


//     //#region TOURNAMENT QUIT
//     setTournamentQuit(){
//         clientEvent.dispatchEvent(Constants.SHOW_TOURNAMENT_RESULT_POPUP,this.infoGroupTournament.indexTarget,this.infoGroupTournament.scoreValue)   
//     }

//     setTournamentContinue(){
//         localConfig.instance.currGameState = GAME_STATE.PLAY;
//     }
//     //#endregion

//     //#region TOURNAMENT REVIVE
//     setTournamentLose(){
//         clientEvent.dispatchEvent(Constants.SHOW_TOURNAMENT_REVIVE_POPUP);
//     }
//     setTournamentReviveYes(){
//         AudioManager2.instance.playGetReward();
//         localConfig.instance.currGameState = GAME_STATE.PLAY;
//         this.infoGroupTournament.setRevive();
//     }

//     setTournamentReviveNo(){
//         clientEvent.dispatchEvent(Constants.SHOW_TOURNAMENT_RESULT_POPUP,this.infoGroupTournament.indexTarget,this.infoGroupTournament.scoreValue);   
//     }
//     //#endregion

//     setTournamentReplay(){
//         this.preloadLevelTournament();
//     }

//     setTournamentPageHostReplay(){
//         // this.preloadLevelTournamentPageHost();
//     }

//     setSettingTouchContinue(){
//         localConfig.instance.currGameState = GAME_STATE.PLAY;
//     }

//     updateContextWithFriend(){
//         clientEvent.dispatchEvent(Constants.SHOW_UPDATECONTEXT_WITHFRIEND_POPUP,(errr,success)=>{});
//     }

// }


// @ccclass('TubSuggest')
// export class TubeSuggest {
//     tube_index_1:number;
//     tube_index_2:number;
//     expecte_value:number;
// }

// /**
//  * [1] Class member could be defined like this.
//  * [2] Use `property` decorator if your want the member to be serializable.
//  * [3] Your initialization goes here.
//  * [4] Your update function goes here.
//  *
//  * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
//  * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/ccclass.html
//  * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
//  */
