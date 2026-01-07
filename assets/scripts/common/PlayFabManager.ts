
import { _decorator, Component, Node, game, director } from 'cc';
import { clientEvent } from '../framework/clientEvent';
import { AVATAR_TYPE, Constants, ENV_TYPE, GAME_MODE } from '../framework/constants';
import { localConfig } from '../localConfig';
import { FBInstantManager } from './FBInstantManager';
import { ItemRankInfo } from './ItemRankInfo';
import { lodash } from '../framework/lodash';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PlayFabManager
 * DateTime = Thu Feb 24 2022 00:06:23 GMT+0700 (Indochina Time)
 * Author = tuzkekizer
 * FileBasename = PlayFabManager.ts
 * FileBasenameNoExtension = PlayFabManager
 * URL = db://assets/scripts/common/PlayFabManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('PlayFabManager')
export class PlayFabManager extends Component {
    public static instance: PlayFabManager;
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    playfabID:string = "";
    myCountryCode:string = "us";
    isTest:boolean = false;
    onLoad(){
        game.addPersistRootNode(this.node);
        PlayFabManager.instance = this; 
        //console.log(this.isTest);
    }

    start () {
        // [3]
        // if(localConfig.instance.envType == ENV_TYPE.FB){
        //     this.LoginWithCustomID();
        // }
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    LoginWithCustomID() {
        //console.log("LoginWithCustomID");
        PlayFab.settings.titleId = Constants.PLAYFAB_TITLE;
        var loginRequest: PlayFabClientModels.LoginWithCustomIDRequest = {
            CustomId: "Moon",
            CreateAccount: true
        };
    
        PlayFabClientSDK.LoginWithCustomID(loginRequest, this.LoginCallback);
    }

    // LoginWithFBID(fbID:string){
    //     PlayFab.settings.titleId = Constants.PLAYFAB_TITLE;
    //     var loginRequest: PlayFabClientModels.LoginWithEmailAddressRequest = {
    //         CustomId: fbID,
    //         CreateAccount: true,
            
    //     };
    
    //     PlayFabClientSDK.LoginWithCustomID(loginRequest, this.LoginCallback);
    // }

    LoginWithFBInstant(strSignature:string){
        PlayFab.settings.titleId = Constants.PLAYFAB_TITLE;
        let infoParamsRequest:PlayFabClientModels.GetPlayerCombinedInfoRequestParams = {
            GetCharacterInventories:false,
            GetCharacterList:false,
            GetPlayerStatistics:true,
            GetUserData : true,
            UserDataKeys: null,
            GetPlayerProfile:true,
            GetTitleData:false,
            GetUserAccountInfo:true,
            GetUserInventory:false,
            GetUserReadOnlyData:false,
            GetUserVirtualCurrency:false
        };
        var loginRequest: PlayFabClientModels.LoginWithFacebookInstantGamesIdRequest = {
            FacebookInstantGamesSignature: strSignature,
            TitleId:Constants.PLAYFAB_TITLE,
            CreateAccount: true,
            InfoRequestParameters: infoParamsRequest
        };
        PlayFabClientSDK.LoginWithFacebookInstantGamesId(loginRequest ,this.LoginCallback);
    }

    LoginCallback( result: PlayFabModule.SuccessContainer<PlayFabClientModels.LoginResult>,error: PlayFabModule.IPlayFabError){
        // console.log("LoginCallbackLoginCallbackLoginCallbackLoginCallback");
        if(error){
            // console.log(error.errorMessage);
            return;
        } 
        PlayFabManager.instance.playfabID = result.data.PlayFabId;
        // console.log(PlayFabManager.instance.playfabID);
        
        if(FBInstantManager.instance.getID() != null){
            
            PlayFabManager.instance.GetInfoAccount(result.data.PlayFabId);
        }

    }

    GetInfoAccount(playfabID:string){
        PlayFab.settings.titleId = Constants.PLAYFAB_TITLE;
        let infoParamsRequest:PlayFabClientModels.GetPlayerCombinedInfoRequestParams = {
            GetCharacterInventories:false,
            GetCharacterList:false,
            GetPlayerStatistics:true,
            GetUserData : true,
            UserDataKeys: null,
            GetPlayerProfile:true,
            GetTitleData:false,
            GetUserAccountInfo:true,
            GetUserInventory:false,
            GetUserReadOnlyData:false,
            GetUserVirtualCurrency:false
        };
        var accountInfoRequest: PlayFabClientModels.GetAccountInfoRequest = {
            PlayFabId:playfabID
        };
        PlayFabClientSDK.GetAccountInfo(accountInfoRequest ,this.GetInfoAccountCallback);
    }

    GetInfoAccountCallback( result: PlayFabModule.SuccessContainer<PlayFabClientModels.GetAccountInfoResult>,error: PlayFabModule.IPlayFabError){
        // console.log("GetInfoAccountCallbackGetInfoAccountCallbackGetInfoAccountCallback");
        if(error){
            console.log(error.errorMessage);
            return;
        } 

        let displayName = FBInstantManager.instance.getName();
        if(result.data.AccountInfo.TitleInfo.DisplayName !== displayName){
            PlayFabManager.instance.UpdateName(displayName);
        }

        let avatarURL = FBInstantManager.instance.getPhotoUrl();
        if(result.data.AccountInfo.TitleInfo.AvatarUrl !== avatarURL){
            PlayFabManager.instance.UpdateAvatar(avatarURL);
        }
    }


    AddUserNamePassword(id:string){

        var request : PlayFabClientModels.AddUsernamePasswordRequest = 
        {
            Email:"fb-"+id+"@gmail.com",
            Username:"fb"+id,
            Password:id
        };

        PlayFabClientSDK.AddUsernamePassword(request, this.AddUserNamePassword_Callback);
    }

    AddUserNamePassword_Callback(result: PlayFabModule.SuccessContainer<PlayFabClientModels.AddUsernamePasswordResult>,error: PlayFabModule.IPlayFabError){
        
        if(error){
            // console.log(error.errorMessage);
            return;
        }
    }

    UpdateInfoPlayer(){
        this.scheduleOnce(()=>{
            if(FBInstantManager.instance.getPhotoUrl() != null){
                PlayFabManager.instance.UpdateAvatar(FBInstantManager.instance.getPhotoUrl());
            }
    
            if(FBInstantManager.instance.getName() != null){
                PlayFabManager.instance.UpdateName(FBInstantManager.instance.getName());
            }
        },2);
    }

    UpdateAvatar(avatarUrl:string){
        var request : PlayFabClientModels.UpdateAvatarUrlRequest = 
        {
            ImageUrl : avatarUrl
        };

        PlayFabClientSDK.UpdateAvatarUrl(request, this.UpdateAvatar_Callback);
    }

    UpdateAvatar_Callback(result: PlayFabModule.SuccessContainer<PlayFabClientModels.EmptyResponse>,error: PlayFabModule.IPlayFabError){
        if(error){
            console.log(error.errorMessage);
            return;
        }
        // console.log("UpdateAvatar_SuccessUpdateAvatar_Success");
    }

    UpdateName(_updateName:string){
        var request : PlayFabClientModels.UpdateUserTitleDisplayNameRequest = 
            {
                DisplayName : _updateName
            };

        PlayFabClientSDK.UpdateUserTitleDisplayName(request, this.UpdateDisplayName_Callback);
    }

    UpdateDisplayName_Callback(result: PlayFabModule.SuccessContainer<PlayFabClientModels.UpdateUserTitleDisplayNameResult>,error: PlayFabModule.IPlayFabError,){
        if(error){
            console.log(error.errorMessage);
            return;
        }
    }


    //#endregion


    
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
