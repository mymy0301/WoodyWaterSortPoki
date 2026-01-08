import { _decorator, Component, director, game, Node } from 'cc';
import { AVATAR_TYPE, Constants, ENV_TYPE } from '../framework/constants';
import { FBInstantManager } from './FBInstantManager';
import { ItemRankInfo } from './ItemRankInfo';
import { localConfig } from '../localConfig';
import { clientEvent } from '../framework/clientEvent';
import { LeaderboardDataInfo } from './LeaderboardDataInfo';
const { ccclass, property } = _decorator;

@ccclass('PGSPlayInstantManager')
export class PGSPlayInstantManager extends Component {
    public static instance: PGSPlayInstantManager;
    
    isLogin:boolean = false;
    onLoad(){
        game.addPersistRootNode(this.node);
        PGSPlayInstantManager.instance = this; 
        //console.log(this.isTest);
    }

    LoginFBInstant(){
        if(localConfig.instance.envType != ENV_TYPE.FB) return;
        FBInstant.player.getSignedPlayerInfoAsync('metadata').then(signedPlayerInfo => {
            const playerID: string = signedPlayerInfo.getPlayerID();
            const signature: string = signedPlayerInfo.getSignature();
            //console.log(signature);
            this.LoginFBInstant_signature(signature);
            
        });
    }

    private LoginFBInstant_signature(strSignature:string){
        // const myHeaders = new Headers();
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

    public UpdatePlayerScore(score:number){
        if(localConfig.instance.envType != ENV_TYPE.FB) return;
        FBInstant.player.getSignedPlayerInfoAsync('metadata').then(signedPlayerInfo => {
            const playerID: string = signedPlayerInfo.getPlayerID();
            const signature: string = signedPlayerInfo.getSignature();
            //console.log(signature);
            this.UpdatePlayerScore_signature(signature,score);
            
        });
    }

    private UpdatePlayerScore_signature(strSignature:string,score:number){
        // const myHeaders = new Headers();
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

    public GetPlayer_byPlayerIds(arrPlayerIDs:string[]){
        if(localConfig.instance.envType != ENV_TYPE.FB) return;
        FBInstant.player.getSignedPlayerInfoAsync('metadata').then(signedPlayerInfo => {
            const playerID: string = signedPlayerInfo.getPlayerID();
            const signature: string = signedPlayerInfo.getSignature();
            //console.log(signature);
            this.GetPlayer_byPlayerIds_signature(signature,arrPlayerIDs);
            
        });
    }

    private GetPlayer_byPlayerIds_signature(strSignature:string,arrPlayerIDs:string[]){
        // const myHeaders = new Headers();
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

    public GetTopPlayers(){
        if(localConfig.instance.envType != ENV_TYPE.FB) return;
        FBInstant.player.getSignedPlayerInfoAsync('metadata').then(signedPlayerInfo => {
            const playerID: string = signedPlayerInfo.getPlayerID();
            const signature: string = signedPlayerInfo.getSignature();
            //console.log(signature);
            this.GetTopPlayers_signature(signature);
            
        });
    }

    private GetTopPlayers_signature(strSignature:string){
        // const myHeaders = new Headers();
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

    public GetLeaderboards_byContextIDs(arrContextIDs:string[]){
        if(localConfig.instance.envType != ENV_TYPE.FB) return;
        FBInstant.player.getSignedPlayerInfoAsync('metadata').then(signedPlayerInfo => {
            const playerID: string = signedPlayerInfo.getPlayerID();
            const signature: string = signedPlayerInfo.getSignature();
            //console.log(signature);
            this.GetLeaderboards_byContextIDs_signature(signature,arrContextIDs);
            
        });
    }

    private GetLeaderboards_byContextIDs_signature(strSignature:string,arrContextIDs:string[]){
        // const myHeaders = new Headers();
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

    public GetTournament_Leaderboards_byContextIDs(arrTournamentContextIDs:string[]){
        if(localConfig.instance.envType != ENV_TYPE.FB) return;
        FBInstant.player.getSignedPlayerInfoAsync('metadata').then(signedPlayerInfo => {
            const playerID: string = signedPlayerInfo.getPlayerID();
            const signature: string = signedPlayerInfo.getSignature();
            //console.log(signature);
            this.GetTournament_Leaderboards_byContextIDs_signature(signature,arrTournamentContextIDs);
            
        });
    }

    private GetTournament_Leaderboards_byContextIDs_signature(strSignature:string,arrTournamentContextIDs:string[]){
        // const myHeaders = new Headers();
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

    public UpdatePlayerScore_byLeaderboardID(leaderboardID:string,score:number){
        if(localConfig.instance.envType != ENV_TYPE.FB) return;
        if(leaderboardID == "") return;
        FBInstant.player.getSignedPlayerInfoAsync('metadata').then(signedPlayerInfo => {
            const playerID: string = signedPlayerInfo.getPlayerID();
            const signature: string = signedPlayerInfo.getSignature();
            //console.log(signature);
            this.UpdatePlayerScore_byLeaderboardID_signature(signature,leaderboardID,score);
            
        });
    }

    private UpdatePlayerScore_byLeaderboardID_signature(strSignature:string,leaderboardID:string,score:number){
        // const myHeaders = new Headers();
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

    public GetTopPlayers_byLeaderboardID(leaderboardID:string,tournamentID:string){
        if(localConfig.instance.envType != ENV_TYPE.FB) return;
        if(leaderboardID == "") {
            clientEvent.dispatchEvent(Constants.PGS_RECEIVE_LISTRANK_LEADERBOARD,[]);
            return;
        }
        FBInstant.player.getSignedPlayerInfoAsync('metadata').then(signedPlayerInfo => {
            const playerID: string = signedPlayerInfo.getPlayerID();
            const signature: string = signedPlayerInfo.getSignature();
            //console.log(signature);
            this.GetTopPlayers_byLeaderboardID_signature(signature,leaderboardID,tournamentID);
            
        });
    }

    private GetTopPlayers_byLeaderboardID_signature(strSignature:string,leaderboardID:string,tournamentID:string){
        // const myHeaders = new Headers();
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

    public GetTournament_TopPlayers_byLeaderboardID(leaderboardID:string,tournamentID:string){
        if(localConfig.instance.envType != ENV_TYPE.FB) return;
        if(leaderboardID == "") {
            clientEvent.dispatchEvent(Constants.PGS_RECEIVE_LISTRANK_LEADERBOARD,[]);
            return;
        }
        FBInstant.player.getSignedPlayerInfoAsync('metadata').then(signedPlayerInfo => {
            const playerID: string = signedPlayerInfo.getPlayerID();
            const signature: string = signedPlayerInfo.getSignature();
            //console.log(signature);
            this.GetTournament_TopPlayers_byLeaderboardID_signature(signature,leaderboardID,tournamentID);
            
        });
    }

    private GetTournament_TopPlayers_byLeaderboardID_signature(strSignature:string,leaderboardID:string,tournamentID:string){
        // const myHeaders = new Headers();
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

    public GetRemoteConfig(){
        if(localConfig.instance.envType != ENV_TYPE.FB) return;
        FBInstant.player.getSignedPlayerInfoAsync('metadata').then(signedPlayerInfo => {
            const playerID: string = signedPlayerInfo.getPlayerID();
            const signature: string = signedPlayerInfo.getSignature();
            //console.log(signature);
            this.GetRemoteConfig_signature(signature);
            
        });
    }

    private GetRemoteConfig_signature(strSignature:string){
        // const myHeaders = new Headers();
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

}

