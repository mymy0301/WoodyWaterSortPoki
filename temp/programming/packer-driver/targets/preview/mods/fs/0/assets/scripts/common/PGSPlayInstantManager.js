System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, game, Constants, ENV_TYPE, localConfig, clientEvent, _dec, _class, _class2, _temp, _crd, ccclass, property, PGSPlayInstantManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENV_TYPE(extras) {
    _reporterNs.report("ENV_TYPE", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
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
      Constants = _unresolved_2.Constants;
      ENV_TYPE = _unresolved_2.ENV_TYPE;
    }, function (_unresolved_3) {
      localConfig = _unresolved_3.localConfig;
    }, function (_unresolved_4) {
      clientEvent = _unresolved_4.clientEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3d03ew4HhdGiKQZSl9hyRxo", "PGSPlayInstantManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PGSPlayInstantManager", PGSPlayInstantManager = (_dec = ccclass('PGSPlayInstantManager'), _dec(_class = (_temp = _class2 = class PGSPlayInstantManager extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "isLogin", false);
        }

        onLoad() {
          game.addPersistRootNode(this.node);
          PGSPlayInstantManager.instance = this; //console.log(this.isTest);
        }

        LoginFBInstant() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType != (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) return;
          FBInstant.player.getSignedPlayerInfoAsync('metadata').then(signedPlayerInfo => {
            var playerID = signedPlayerInfo.getPlayerID();
            var signature = signedPlayerInfo.getSignature(); //console.log(signature);

            this.LoginFBInstant_signature(signature);
          });
        }

        LoginFBInstant_signature(strSignature) {// const myHeaders = new Headers();
          // myHeaders.append("x-signature", strSignature);
          // myHeaders.append("x-id", Constants.PGS_GAMEID);
          // myHeaders.append("Content-Type", "application/json");
          // const raw = JSON.stringify({
          //     "gameId": Constants.PGS_GAMEID,
          //     "playerId": FBInstant.player.getID(),
          //     "name": FBInstant.player.getName(),
          //     "avatar": FBInstant.player.getPhoto(),
          //     "asid": FBInstantManager.instance.asID
          // });
          // const requestOptions = {
          //     method: "POST",
          //     headers: myHeaders,
          //     body: raw,
          //     redirect: "follow"
          // };
          // fetch("https://playinstant.playgameo.com/api/player/", requestOptions)
          //     .then((response) => response.text())
          //     .then((result) => {
          //         console.log(result);
          //         this.isLogin = true;
          //         this.GetTopPlayers();
          //         this.GetRemoteConfig();
          //     })
          //     .catch((error) => console.error(error));
        }

        UpdatePlayerScore(score) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType != (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) return;
          FBInstant.player.getSignedPlayerInfoAsync('metadata').then(signedPlayerInfo => {
            var playerID = signedPlayerInfo.getPlayerID();
            var signature = signedPlayerInfo.getSignature(); //console.log(signature);

            this.UpdatePlayerScore_signature(signature, score);
          });
        }

        UpdatePlayerScore_signature(strSignature, score) {// const myHeaders = new Headers();
          // myHeaders.append("x-signature", strSignature);
          // myHeaders.append("x-id", Constants.PGS_GAMEID);
          // myHeaders.append("Content-Type", "application/json");
          // const raw = JSON.stringify({
          //     "score": score
          // });
          // const requestOptions = {
          //     method: "PUT",
          //     headers: myHeaders,
          //     body: raw,
          //     redirect: "follow"
          // };
          // fetch("https://playinstant.playgameo.com/api/player/"+Constants.PGS_GAMEID+"/"+FBInstant.player.getID()+"/points", requestOptions)
          //     .then((response) => response.text())
          //     .then((result) => console.log(result))
          //     .catch((error) => console.error(error));
        }

        GetPlayer_byPlayerIds(arrPlayerIDs) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType != (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) return;
          FBInstant.player.getSignedPlayerInfoAsync('metadata').then(signedPlayerInfo => {
            var playerID = signedPlayerInfo.getPlayerID();
            var signature = signedPlayerInfo.getSignature(); //console.log(signature);

            this.GetPlayer_byPlayerIds_signature(signature, arrPlayerIDs);
          });
        }

        GetPlayer_byPlayerIds_signature(strSignature, arrPlayerIDs) {// const myHeaders = new Headers();
          // myHeaders.append("x-signature", strSignature);
          // myHeaders.append("x-id", Constants.PGS_GAMEID);
          // let strPlayerIds = "";
          // for(let i=0;i<arrPlayerIDs.length;i++){
          //     if(i==0){
          //         strPlayerIds = arrPlayerIDs[i];
          //     }else{
          //         strPlayerIds = strPlayerIds + "," + arrPlayerIDs[i];
          //     }
          // }
          // const requestOptions = {
          // method: "GET",
          // headers: myHeaders,
          // redirect: "follow"
          // };
          // fetch("https://playinstant.playgameo.com/api/player/?playerIds="+strPlayerIds+"&gameId="+Constants.PGS_GAMEID, requestOptions)
          // .then((response) => response.json())
          // .then((result) => {
          //     // console.log(result);
          //     for(let i=0;i<result.data.length;i++){
          //         let playerInfo = result.data[i];
          //         if(playerInfo && playerInfo.score){
          //             let indexFriend: number = localConfig.instance.arrConnectedPlayerInfos.findIndex(item => item.id == playerInfo.playerId);
          //             if(indexFriend > -1){
          //                 localConfig.instance.arrConnectedPlayerInfos[indexFriend].level = playerInfo.score;
          //             }
          //         }
          //     }
          //     console.log(localConfig.instance.arrConnectedPlayerInfos);
          // })
          // .catch((error) => console.error(error));
        }

        GetTopPlayers() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType != (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) return;
          FBInstant.player.getSignedPlayerInfoAsync('metadata').then(signedPlayerInfo => {
            var playerID = signedPlayerInfo.getPlayerID();
            var signature = signedPlayerInfo.getSignature(); //console.log(signature);

            this.GetTopPlayers_signature(signature);
          });
        }

        GetTopPlayers_signature(strSignature) {// const myHeaders = new Headers();
          // myHeaders.append("x-signature", strSignature);
          // myHeaders.append("x-id", Constants.PGS_GAMEID);
          // const requestOptions = {
          // method: "GET",
          // headers: myHeaders,
          // redirect: "follow"
          // };
          // fetch("https://playinstant.playgameo.com/api/player/top-players?gameId="+Constants.PGS_GAMEID+"&limit=100&sortField=score&sortOrder=desc", requestOptions)
          // .then((response) => response.text())
          // .then((result) => {
          //     // console.log(result);
          //     let jsonData = JSON.parse(result);
          //     let arrListLeaderboard_Ranks : ItemRankInfo[] = [];
          //     for(let i=0;i<jsonData.data.length;i++){
          //         let itemRankInfo:ItemRankInfo = new ItemRankInfo();
          //         itemRankInfo.userName = jsonData.data[i].name;
          //         itemRankInfo.avatarType = AVATAR_TYPE.TYPE_WEB;
          //         itemRankInfo.userScore = jsonData.data[i].score;
          //         itemRankInfo.avatarURL = jsonData.data[i].avatar;
          //         itemRankInfo.indexRank = i+1;
          //         itemRankInfo.isMyRank = jsonData.data[i].playerId == FBInstant.player.getID();
          //         itemRankInfo.playerID = jsonData.data[i].playerId;
          //         if(!itemRankInfo.isMyRank){
          //             arrListLeaderboard_Ranks.push(itemRankInfo);
          //         }
          //     }
          //     localConfig.instance.arrTopPlayers = arrListLeaderboard_Ranks;
          // })
          // .catch((error) => console.error(error));
        }

        GetLeaderboards_byContextIDs(arrContextIDs) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType != (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) return;
          FBInstant.player.getSignedPlayerInfoAsync('metadata').then(signedPlayerInfo => {
            var playerID = signedPlayerInfo.getPlayerID();
            var signature = signedPlayerInfo.getSignature(); //console.log(signature);

            this.GetLeaderboards_byContextIDs_signature(signature, arrContextIDs);
          });
        }

        GetLeaderboards_byContextIDs_signature(strSignature, arrContextIDs) {// const myHeaders = new Headers();
          // myHeaders.append("x-signature", strSignature);
          // myHeaders.append("x-id", Constants.PGS_GAMEID);
          // let strContextIDs = "";
          // for(let i=0;i<arrContextIDs.length;i++){
          //     if(i==0){
          //         strContextIDs = arrContextIDs[i];
          //     }else{
          //         strContextIDs = strContextIDs + "," + arrContextIDs[i];
          //     }
          // }
          // const requestOptions = {
          //     method: "GET",
          //     headers: myHeaders,
          //     redirect: "follow"
          // };
          // fetch("https://playinstant.playgameo.com/api/leaderboard/"+Constants.PGS_GAMEID+"/contextIds?contextIds="+strContextIDs, requestOptions)
          // .then((response) => response.text())
          // .then((result) => {
          //     // console.log(result);
          //     let jsonData = JSON.parse(result);
          //     for(let i=0;i<jsonData.data.length;i++){
          //         let leaderboardInfo = jsonData.data[i];
          //         // console.log(leaderboardInfo);
          //         localConfig.instance.arrLeaderBoardDataInfos.push(leaderboardInfo);
          //     }
          // })
          // .catch((error) => console.error(error));
        }

        GetTournament_Leaderboards_byContextIDs(arrTournamentContextIDs) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType != (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) return;
          FBInstant.player.getSignedPlayerInfoAsync('metadata').then(signedPlayerInfo => {
            var playerID = signedPlayerInfo.getPlayerID();
            var signature = signedPlayerInfo.getSignature(); //console.log(signature);

            this.GetTournament_Leaderboards_byContextIDs_signature(signature, arrTournamentContextIDs);
          });
        }

        GetTournament_Leaderboards_byContextIDs_signature(strSignature, arrTournamentContextIDs) {// const myHeaders = new Headers();
          // myHeaders.append("x-signature", strSignature);
          // myHeaders.append("x-id", Constants.PGS_GAMEID);
          // let strContextIDs = "";
          // for(let i=0;i<arrTournamentContextIDs.length;i++){
          //     if(i==0){
          //         strContextIDs = arrTournamentContextIDs[i];
          //     }else{
          //         strContextIDs = strContextIDs + "," + arrTournamentContextIDs[i];
          //     }
          // }
          // const requestOptions = {
          //     method: "GET",
          //     headers: myHeaders,
          //     redirect: "follow"
          // };
          // fetch("https://playinstant.playgameo.com/api/leaderboard/"+Constants.PGS_GAMEID+"/contextIds?contextIds="+strContextIDs, requestOptions)
          // .then((response) => response.text())
          // .then((result) => {
          //     // console.log(result);
          //     let jsonData = JSON.parse(result);
          //     for(let i=0;i<jsonData.data.length;i++){
          //         let leaderboardInfo = jsonData.data[i];
          //         // console.log(leaderboardInfo);
          //         for(let j=0;j<localConfig.instance.arrTournament_LeaderBoardDataInfos.length;j++){
          //             if(localConfig.instance.arrTournament_LeaderBoardDataInfos[j].tournamentId == leaderboardInfo.tournamentId && localConfig.instance.arrTournament_LeaderBoardDataInfos[j].contextId == leaderboardInfo.contextId){
          //                 localConfig.instance.arrTournament_LeaderBoardDataInfos[j]._id = leaderboardInfo._id;
          //             }
          //         }
          //         PGSPlayInstantManager.instance.GetTournament_TopPlayers_byLeaderboardID(leaderboardInfo._id,leaderboardInfo.tournamentId);
          //     }
          //     // console.log(localConfig.instance.arrEventDataInfos);
          // })
          // .catch((error) => console.error(error));
        }

        UpdatePlayerScore_byLeaderboardID(leaderboardID, score) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType != (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) return;
          if (leaderboardID == "") return;
          FBInstant.player.getSignedPlayerInfoAsync('metadata').then(signedPlayerInfo => {
            var playerID = signedPlayerInfo.getPlayerID();
            var signature = signedPlayerInfo.getSignature(); //console.log(signature);

            this.UpdatePlayerScore_byLeaderboardID_signature(signature, leaderboardID, score);
          });
        }

        UpdatePlayerScore_byLeaderboardID_signature(strSignature, leaderboardID, score) {// const myHeaders = new Headers();
          // myHeaders.append("x-signature", strSignature);
          // myHeaders.append("x-id", Constants.PGS_GAMEID);
          // myHeaders.append("Content-Type", "application/json");
          // const raw = JSON.stringify({
          // "gameId": Constants.PGS_GAMEID,
          // "playerId": FBInstant.player.getID(),
          // "leaderboardId": leaderboardID,
          // "score": score
          // });
          // const requestOptions = {
          // method: "POST",
          // headers: myHeaders,
          // body: raw,
          // redirect: "follow"
          // };
          // fetch("https://playinstant.playgameo.com/api/player-score/", requestOptions)
          // .then((response) => response.text())
          // .then((result) => console.log(result))
          // .catch((error) => console.error(error));
        }

        GetTopPlayers_byLeaderboardID(leaderboardID, tournamentID) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType != (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) return;

          if (leaderboardID == "") {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).PGS_RECEIVE_LISTRANK_LEADERBOARD, []);
            return;
          }

          FBInstant.player.getSignedPlayerInfoAsync('metadata').then(signedPlayerInfo => {
            var playerID = signedPlayerInfo.getPlayerID();
            var signature = signedPlayerInfo.getSignature(); //console.log(signature);

            this.GetTopPlayers_byLeaderboardID_signature(signature, leaderboardID, tournamentID);
          });
        }

        GetTopPlayers_byLeaderboardID_signature(strSignature, leaderboardID, tournamentID) {// const myHeaders = new Headers();
          // myHeaders.append("x-signature", strSignature);
          // myHeaders.append("x-id", Constants.PGS_GAMEID);
          // const requestOptions = {
          // method: "GET",
          // headers: myHeaders,
          // redirect: "follow"
          // };
          // fetch("https://playinstant.playgameo.com/api/player-score/leaderboard/"+leaderboardID+"?limit=100", requestOptions)
          // .then((response) => response.text())
          // .then((result) => {
          //     // console.log(result);
          //     let jsonData = JSON.parse(result);
          //     // console.log(jsonData);
          //     let arrListLeaderboard_Ranks : ItemRankInfo[] = [];
          //     for(let i=0;i<jsonData.data.length;i++){
          //         let itemRankInfo:ItemRankInfo = new ItemRankInfo();
          //         itemRankInfo.userName = jsonData.data[i].name;
          //         itemRankInfo.avatarType = AVATAR_TYPE.TYPE_WEB;
          //         itemRankInfo.userScore = jsonData.data[i].score;
          //         itemRankInfo.avatarURL = jsonData.data[i].avatar;
          //         itemRankInfo.indexRank = jsonData.data[i].rank;
          //         itemRankInfo.isMyRank = jsonData.data[i].playerId == FBInstant.player.getID();
          //         itemRankInfo.playerID = jsonData.data[i].playerId;
          //         if(itemRankInfo.indexRank){
          //             localConfig.instance.setLeaderBoardMyScore_byTournamentID(tournamentID,jsonData.data[i].score);
          //         }
          //         arrListLeaderboard_Ranks.push(itemRankInfo);
          //     }
          //     localConfig.instance.mapLeaderBoard_Totals.set(leaderboardID,jsonData.total);
          //     localConfig.instance.mapLeaderBoard_ItemRankInfos.set(leaderboardID,arrListLeaderboard_Ranks);
          //     // console.log(arrListLeaderboard_Ranks);
          //     clientEvent.dispatchEvent(Constants.PGS_RECEIVE_LISTRANK_LEADERBOARD,arrListLeaderboard_Ranks);
          // })
          // .catch((error) => {
          //     console.error(error);
          //     clientEvent.dispatchEvent(Constants.PGS_RECEIVE_LISTRANK_LEADERBOARD,[]);
          // });
        }

        GetTournament_TopPlayers_byLeaderboardID(leaderboardID, tournamentID) {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType != (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) return;

          if (leaderboardID == "") {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).PGS_RECEIVE_LISTRANK_LEADERBOARD, []);
            return;
          }

          FBInstant.player.getSignedPlayerInfoAsync('metadata').then(signedPlayerInfo => {
            var playerID = signedPlayerInfo.getPlayerID();
            var signature = signedPlayerInfo.getSignature(); //console.log(signature);

            this.GetTournament_TopPlayers_byLeaderboardID_signature(signature, leaderboardID, tournamentID);
          });
        }

        GetTournament_TopPlayers_byLeaderboardID_signature(strSignature, leaderboardID, tournamentID) {// const myHeaders = new Headers();
          // myHeaders.append("x-signature", strSignature);
          // myHeaders.append("x-id", Constants.PGS_GAMEID);
          // const requestOptions = {
          // method: "GET",
          // headers: myHeaders,
          // redirect: "follow"
          // };
          // fetch("https://playinstant.playgameo.com/api/player-score/leaderboard/"+leaderboardID+"?limit=100", requestOptions)
          // .then((response) => response.text())
          // .then((result) => {
          //     // console.log(result);
          //     let jsonData = JSON.parse(result);
          //     // console.log(jsonData);
          //     let arrListLeaderboard_Ranks : ItemRankInfo[] = [];
          //     for(let i=0;i<jsonData.data.length;i++){
          //         let itemRankInfo:ItemRankInfo = new ItemRankInfo();
          //         itemRankInfo.userName = jsonData.data[i].name;
          //         itemRankInfo.avatarType = AVATAR_TYPE.TYPE_WEB;
          //         itemRankInfo.userScore = jsonData.data[i].score;
          //         itemRankInfo.avatarURL = jsonData.data[i].avatar;
          //         itemRankInfo.indexRank = jsonData.data[i].rank;
          //         itemRankInfo.isMyRank = jsonData.data[i].playerId == FBInstant.player.getID();
          //         itemRankInfo.playerID = jsonData.data[i].playerId;
          //         if(itemRankInfo.isMyRank){
          //             localConfig.instance.setLeaderBoardMyScore_byTournamentID(tournamentID,jsonData.data[i].score);
          //         }
          //         arrListLeaderboard_Ranks.push(itemRankInfo);
          //     }
          //     localConfig.instance.mapLeaderBoard_Totals.set(leaderboardID,jsonData.total);
          //     localConfig.instance.mapLeaderBoard_ItemRankInfos.set(leaderboardID,arrListLeaderboard_Ranks);
          //     // console.log(localConfig.instance.mapLeaderBoard_ItemRankInfos);
          //     // console.log(localConfig.instance.mapLeaderBoard_MyScores);
          //     clientEvent.dispatchEvent(Constants.PGS_RECEIVE_LISTRANK_LEADERBOARD,arrListLeaderboard_Ranks);
          // })
          // .catch((error) => {
          //     console.error(error);
          //     clientEvent.dispatchEvent(Constants.PGS_RECEIVE_LISTRANK_LEADERBOARD,[]);
          // });
        }

        GetRemoteConfig() {
          if ((_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.envType != (_crd && ENV_TYPE === void 0 ? (_reportPossibleCrUseOfENV_TYPE({
            error: Error()
          }), ENV_TYPE) : ENV_TYPE).FB) return;
          FBInstant.player.getSignedPlayerInfoAsync('metadata').then(signedPlayerInfo => {
            var playerID = signedPlayerInfo.getPlayerID();
            var signature = signedPlayerInfo.getSignature(); //console.log(signature);

            this.GetRemoteConfig_signature(signature);
          });
        }

        GetRemoteConfig_signature(strSignature) {// const myHeaders = new Headers();
          // myHeaders.append("x-signature", strSignature);
          // myHeaders.append("x-id", Constants.PGS_GAMEID);
          // const requestOptions = {
          // method: "GET",
          // headers: myHeaders,
          // redirect: "follow"
          // };
          // fetch("https://playinstant.playgameo.com/api/game-data/"+Constants.PGS_GAMEID, requestOptions)
          // .then((response) => response.json())
          // .then((result) => {
          //     console.log(result);
          //     FBInstantManager.instance.TIME_NEXT_INTERSTITIAL = parseInt(result.data.time_next_inter);
          //     FBInstantManager.instance.TIME_NEXT_RELOAD_BANNER = parseInt(result.data.time_next_banner);
          //     localConfig.instance.arrTournament_LeaderBoardDataInfos = JSON.parse(result.data.event);
          //     // console.log(localConfig.instance.arrTournament_LeaderBoardDataInfos);
          //     // let arrContextIDs:string[] = [];
          //     // for(let i=0;i<localConfig.instance.arrTournament_LeaderBoardDataInfos.length;i++){
          //     //     arrContextIDs.push(localConfig.instance.arrTournament_LeaderBoardDataInfos[i].contextId);        
          //     // }
          //     // PGSPlayInstantManager.instance.GetTournament_Leaderboards_byContextIDs(arrContextIDs);
          //     for(let i=0;i<localConfig.instance.arrTournament_LeaderBoardDataInfos.length;i++){
          //         PGSPlayInstantManager.instance.GetTournament_TopPlayers_byLeaderboardID(localConfig.instance.arrTournament_LeaderBoardDataInfos[i]._id,localConfig.instance.arrTournament_LeaderBoardDataInfos[i].tournamentId);
          //         let leaderboarDataInfo:LeaderboardDataInfo = localConfig.instance.arrTournament_LeaderBoardDataInfos[i];
          //         if(localConfig.instance.currLeaderboardDataInfo != null && leaderboarDataInfo.contextId == localConfig.instance.currLeaderboardDataInfo.contextId && leaderboarDataInfo.tournamentId == localConfig.instance.currLeaderboardDataInfo.tournamentId){
          //             localConfig.instance.currLeaderboardDataInfo._id = leaderboarDataInfo._id;
          //             localConfig.instance.currLeaderboardDataInfo.type = leaderboarDataInfo.type;
          //             localConfig.instance.currLeaderboardDataInfo.name = leaderboarDataInfo.name;
          //         }
          //         if(localConfig.instance.currSessionLeaderboardDataInfo != null && leaderboarDataInfo.contextId == localConfig.instance.currSessionLeaderboardDataInfo.contextId && leaderboarDataInfo.tournamentId == localConfig.instance.currSessionLeaderboardDataInfo.tournamentId){
          //             localConfig.instance.currSessionLeaderboardDataInfo._id = leaderboarDataInfo._id;
          //             localConfig.instance.currSessionLeaderboardDataInfo.type = leaderboarDataInfo.type;
          //             localConfig.instance.currSessionLeaderboardDataInfo.name = leaderboarDataInfo.name;
          //         }
          //     }
          //     // console.log(localConfig.instance.arrTournament_LeaderBoardDataInfos);
          //     // console.log(localConfig.instance.currLeaderboardDataInfo);
          //     // console.log(localConfig.instance.currSessionLeaderboardDataInfo);
          //     localConfig.instance.isGetRemoteConfigDataSuccess = true;
          //     clientEvent.dispatchEvent(Constants.PGS_REMOTECONFIG_SUCCESS);
          // })
          // .catch((error) => {
          //     console.error(error);
          //     localConfig.instance.isGetRemoteConfigDataSuccess = true;
          //     clientEvent.dispatchEvent(Constants.PGS_REMOTECONFIG_SUCCESS);
          // });
        }

      }, _defineProperty(_class2, "instance", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PGSPlayInstantManager.js.map