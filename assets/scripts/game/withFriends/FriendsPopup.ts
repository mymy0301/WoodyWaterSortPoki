
import { _decorator, Button, Component, Node } from 'cc';
import { BasePopup } from '../../common/basePopup';
import { LeaderBoardGroupManager } from '../LeaderBoardGroupManager';
import { localConfig } from '../../localConfig';
import { ItemRankInfo } from '../../common/ItemRankInfo';
import { AVATAR_TYPE, Constants } from '../../framework/constants';
import { clientEvent } from '../../framework/clientEvent';
import { FBInstantManager } from '../../common/FBInstantManager';
import { WithFriendDataInfo } from './WithFriendDataInfo';
import { lodash } from '../../framework/lodash';
import { FriendAvatarInfo } from '../../common/FriendAvatarInfo';
import { LeaderBoardGroupFriendManager } from '../tournaments/LeaderBoardGroupFriendManager';
import { LogEventManager } from '../../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = FriendsPopup
 * DateTime = Fri Mar 21 2025 15:10:43 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = FriendsPopup.ts
 * FileBasenameNoExtension = FriendsPopup
 * URL = db://assets/scripts/game/withFriends/FriendsPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('FriendsPopup')
export class FriendsPopup extends BasePopup {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Button)
    btnInvite: Button = null;

    @property(Button)
    btnPlayWithFriends: Button = null;

    @property(LeaderBoardGroupFriendManager)
    leaderBoardGroupFriendManager: LeaderBoardGroupFriendManager = null;

    @property(Node)
    groupNonFriends: Node = null;

    @property(Node)
    nodeLoading: Node = null;

    onEnable(): void {
        super.onEnable();
        this.btnPlayWithFriends.node.on(Constants.CLICK,this.touchPlayWithFriend,this);
        this.btnInvite.node.on(Constants.CLICK,this.touchInvite,this);

        clientEvent.on(Constants.WITHFRIEND_TOUCH_PLAY,this.setPlayWithFriend,this);
    }

    onDisable(): void {
        super.onDisable();
        this.btnPlayWithFriends.node.off(Constants.CLICK,this.touchPlayWithFriend,this);
        this.btnInvite.node.off(Constants.CLICK,this.touchInvite,this);

        clientEvent.off(Constants.WITHFRIEND_TOUCH_PLAY,this.setPlayWithFriend,this);
    }

    showFriendsPopup(){
        this.groupNonFriends.active = false;
        this.leaderBoardGroupFriendManager.resetRankGroup();
        this.leaderBoardGroupFriendManager.node.active = false;
        if(localConfig.instance.arrConnectedPlayerInfos.length > 0){
            this.nodeLoading.active = true;
        }else{
            this.nodeLoading.active = false;
            this.groupNonFriends.active = true;
        }
        super.showPopup();
    }

    showPoup_ShowView_Finished(): void {
        super.showPoup_ShowView_Finished();
        this.nodeLoading.active = false;
        if(localConfig.instance.arrConnectedPlayerInfos.length > 0){
            this.groupNonFriends.active = false;
            this.leaderBoardGroupFriendManager.node.active = true;

            let arrListLeaderboard_Ranks : ItemRankInfo[] = [];
            for (let i = 0; i < localConfig.instance.arrConnectedPlayerInfos.length; i++) {
                let friendInfo = localConfig.instance.arrConnectedPlayerInfos[i];
                let itemRankInfo: ItemRankInfo = new ItemRankInfo();
                itemRankInfo.userName = friendInfo.name;
                itemRankInfo.avatarType = AVATAR_TYPE.TYPE_WEB;
                itemRankInfo.userScore = friendInfo.level;
                itemRankInfo.avatarURL = friendInfo.avatarUrl;
                itemRankInfo.indexRank = i + 1;
                itemRankInfo.idFB = friendInfo.id;
                itemRankInfo.isMyRank = false;
                itemRankInfo.playerID = friendInfo.id;
                arrListLeaderboard_Ranks.push(itemRankInfo);
            }
            arrListLeaderboard_Ranks.sort((a,b) => b.userScore - a.userScore);
            for(let i=0;i<arrListLeaderboard_Ranks.length;i++){
                arrListLeaderboard_Ranks[i].indexRank = i + 1;
            }
            this.leaderBoardGroupFriendManager.initRankGroup(arrListLeaderboard_Ranks);
        }else{
            this.groupNonFriends.active = true;
            this.leaderBoardGroupFriendManager.node.active = false;
        }
    }

    touchPlayWithFriend(){
        LogEventManager.instance.logButtonClick("playwithfriend","friendspopup");
        FBInstantManager.instance.PlayWithFriend_ChooseAsync((err, success) => {
            if (err) {
            } else {
                localConfig.instance.currWithFriendDataInfo = new WithFriendDataInfo();
                localConfig.instance.currWithFriendDataInfo.senderAvatarURL = FBInstantManager.instance.getPhotoUrl();
                localConfig.instance.currWithFriendDataInfo.senderName = FBInstantManager.instance.getName();
                localConfig.instance.currWithFriendDataInfo.senderID = FBInstantManager.instance.getID();
                localConfig.instance.currWithFriendDataInfo.senderScore = 0;
                localConfig.instance.currWithFriendDataInfo.receiverScore = 0;

                localConfig.instance.currWithFriendDataInfo.levelIndex = lodash.random(20,150);

                this.updateContextWithFriend();

                this.hidePopup();
                clientEvent.dispatchEvent(Constants.WITHFRIEND_PLAY_START);
            }
        });
    }

    setPlayWithFriend(itemRankInfo:ItemRankInfo){
        // console.log("setPlayWithFriend",itemRankInfo);
        FBInstantManager.instance.PlayWithFriend_ID(itemRankInfo.idFB,(err,success)=>{
            if(err){
                
            }else{
                localConfig.instance.currWithFriendDataInfo = new WithFriendDataInfo();
                localConfig.instance.currWithFriendDataInfo.senderAvatarURL = FBInstantManager.instance.getPhotoUrl();
                localConfig.instance.currWithFriendDataInfo.senderName = FBInstantManager.instance.getName();
                localConfig.instance.currWithFriendDataInfo.senderID = FBInstantManager.instance.getID();
                localConfig.instance.currWithFriendDataInfo.senderScore = 0;
               

                localConfig.instance.currWithFriendDataInfo.receiverAvatarURL = itemRankInfo.avatarURL;
                localConfig.instance.currWithFriendDataInfo.receiverName = itemRankInfo.userName;
                localConfig.instance.currWithFriendDataInfo.receiverID = itemRankInfo.idFB;
                localConfig.instance.currWithFriendDataInfo.receiverScore = 0;

                localConfig.instance.currWithFriendDataInfo.levelIndex = lodash.random(20,150);

                this.hidePopup();
                clientEvent.dispatchEvent(Constants.WITHFRIEND_PLAY_START);

                this.updateContextWithFriend();
            }
        });
    }

    touchInvite(){
        LogEventManager.instance.logButtonClick("invite","friendspopup");
        clientEvent.dispatchEvent(Constants.SHOW_INVITE_POPUP,localConfig.instance.currLevelUnlock,(err,content)=>{
            
        });
    }

    updateContextWithFriend(){
        clientEvent.dispatchEvent(Constants.SHOW_UPDATECONTEXT_WITHFRIEND_POPUP,(errr,success)=>{});
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
