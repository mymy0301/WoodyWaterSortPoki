System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, game, Constants, FBInstantManager, _dec, _class, _class2, _temp, _crd, ccclass, property, PlayFabManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../framework/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFBInstantManager(extras) {
    _reporterNs.report("FBInstantManager", "./FBInstantManager", _context.meta, extras);
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
    }, function (_unresolved_3) {
      FBInstantManager = _unresolved_3.FBInstantManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "432afNBpkdL2YHZqMqvwfpE", "PlayFabManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("PlayFabManager", PlayFabManager = (_dec = ccclass('PlayFabManager'), _dec(_class = (_temp = _class2 = class PlayFabManager extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "playfabID", "");

          _defineProperty(this, "myCountryCode", "us");

          _defineProperty(this, "isTest", false);
        }

        onLoad() {
          game.addPersistRootNode(this.node);
          PlayFabManager.instance = this; //console.log(this.isTest);
        }

        start() {// [3]
          // if(localConfig.instance.envType == ENV_TYPE.FB){
          //     this.LoginWithCustomID();
          // }
        } // update (deltaTime: number) {
        //     // [4]
        // }


        LoginWithCustomID() {
          //console.log("LoginWithCustomID");
          PlayFab.settings.titleId = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PLAYFAB_TITLE;
          var loginRequest = {
            CustomId: "Moon",
            CreateAccount: true
          };
          PlayFabClientSDK.LoginWithCustomID(loginRequest, this.LoginCallback);
        } // LoginWithFBID(fbID:string){
        //     PlayFab.settings.titleId = Constants.PLAYFAB_TITLE;
        //     var loginRequest: PlayFabClientModels.LoginWithEmailAddressRequest = {
        //         CustomId: fbID,
        //         CreateAccount: true,
        //     };
        //     PlayFabClientSDK.LoginWithCustomID(loginRequest, this.LoginCallback);
        // }


        LoginWithFBInstant(strSignature) {
          PlayFab.settings.titleId = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PLAYFAB_TITLE;
          let infoParamsRequest = {
            GetCharacterInventories: false,
            GetCharacterList: false,
            GetPlayerStatistics: true,
            GetUserData: true,
            UserDataKeys: null,
            GetPlayerProfile: true,
            GetTitleData: false,
            GetUserAccountInfo: true,
            GetUserInventory: false,
            GetUserReadOnlyData: false,
            GetUserVirtualCurrency: false
          };
          var loginRequest = {
            FacebookInstantGamesSignature: strSignature,
            TitleId: (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).PLAYFAB_TITLE,
            CreateAccount: true,
            InfoRequestParameters: infoParamsRequest
          };
          PlayFabClientSDK.LoginWithFacebookInstantGamesId(loginRequest, this.LoginCallback);
        }

        LoginCallback(result, error) {
          // console.log("LoginCallbackLoginCallbackLoginCallbackLoginCallback");
          if (error) {
            // console.log(error.errorMessage);
            return;
          }

          PlayFabManager.instance.playfabID = result.data.PlayFabId; // console.log(PlayFabManager.instance.playfabID);

          if ((_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.getID() != null) {
            PlayFabManager.instance.GetInfoAccount(result.data.PlayFabId);
          }
        }

        GetInfoAccount(playfabID) {
          PlayFab.settings.titleId = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PLAYFAB_TITLE;
          let infoParamsRequest = {
            GetCharacterInventories: false,
            GetCharacterList: false,
            GetPlayerStatistics: true,
            GetUserData: true,
            UserDataKeys: null,
            GetPlayerProfile: true,
            GetTitleData: false,
            GetUserAccountInfo: true,
            GetUserInventory: false,
            GetUserReadOnlyData: false,
            GetUserVirtualCurrency: false
          };
          var accountInfoRequest = {
            PlayFabId: playfabID
          };
          PlayFabClientSDK.GetAccountInfo(accountInfoRequest, this.GetInfoAccountCallback);
        }

        GetInfoAccountCallback(result, error) {
          // console.log("GetInfoAccountCallbackGetInfoAccountCallbackGetInfoAccountCallback");
          if (error) {
            console.log(error.errorMessage);
            return;
          }

          let displayName = (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.getName();

          if (result.data.AccountInfo.TitleInfo.DisplayName !== displayName) {
            PlayFabManager.instance.UpdateName(displayName);
          }

          let avatarURL = (_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
            error: Error()
          }), FBInstantManager) : FBInstantManager).instance.getPhotoUrl();

          if (result.data.AccountInfo.TitleInfo.AvatarUrl !== avatarURL) {
            PlayFabManager.instance.UpdateAvatar(avatarURL);
          }
        }

        AddUserNamePassword(id) {
          var request = {
            Email: "fb-" + id + "@gmail.com",
            Username: "fb" + id,
            Password: id
          };
          PlayFabClientSDK.AddUsernamePassword(request, this.AddUserNamePassword_Callback);
        }

        AddUserNamePassword_Callback(result, error) {
          if (error) {
            // console.log(error.errorMessage);
            return;
          }
        }

        UpdateInfoPlayer() {
          this.scheduleOnce(() => {
            if ((_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
              error: Error()
            }), FBInstantManager) : FBInstantManager).instance.getPhotoUrl() != null) {
              PlayFabManager.instance.UpdateAvatar((_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                error: Error()
              }), FBInstantManager) : FBInstantManager).instance.getPhotoUrl());
            }

            if ((_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
              error: Error()
            }), FBInstantManager) : FBInstantManager).instance.getName() != null) {
              PlayFabManager.instance.UpdateName((_crd && FBInstantManager === void 0 ? (_reportPossibleCrUseOfFBInstantManager({
                error: Error()
              }), FBInstantManager) : FBInstantManager).instance.getName());
            }
          }, 2);
        }

        UpdateAvatar(avatarUrl) {
          var request = {
            ImageUrl: avatarUrl
          };
          PlayFabClientSDK.UpdateAvatarUrl(request, this.UpdateAvatar_Callback);
        }

        UpdateAvatar_Callback(result, error) {
          if (error) {
            console.log(error.errorMessage);
            return;
          } // console.log("UpdateAvatar_SuccessUpdateAvatar_Success");

        }

        UpdateName(_updateName) {
          var request = {
            DisplayName: _updateName
          };
          PlayFabClientSDK.UpdateUserTitleDisplayName(request, this.UpdateDisplayName_Callback);
        }

        UpdateDisplayName_Callback(result, error) {
          if (error) {
            console.log(error.errorMessage);
            return;
          }
        } //#endregion


      }, _defineProperty(_class2, "instance", void 0), _temp)) || _class));
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


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PlayFabManager.js.map