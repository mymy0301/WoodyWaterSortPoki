
import { _decorator, Component, Label, Node, Sprite, SpriteFrame, tween, Tween, Vec3 } from 'cc';
import { WithFriendDataInfo } from './WithFriendDataInfo';
import { FBInstantManager } from '../../common/FBInstantManager';
import { localConfig } from '../../localConfig';
import Utils from '../../core/utils/Utils';
import { resourceUtil } from '../../framework/resourceUtil';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = InfoGroupWithFriend
 * DateTime = Mon Mar 24 2025 11:13:24 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = InfoGroupWithFriend.ts
 * FileBasenameNoExtension = InfoGroupWithFriend
 * URL = db://assets/scripts/game/withFriends/InfoGroupWithFriend.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('InfoGroupWithFriend')
export class InfoGroupWithFriend extends Component {
    @property(Sprite)
    playerAvatar:Sprite = null;

    @property(Label)
    playerName:Label = null;

    @property(Label)
    playerScore:Label = null;

    @property(Sprite)
    friendAvatar:Sprite = null;

    @property(Label)
    friendName:Label = null;

    @property(Label)
    friendScore:Label = null;

    @property(SpriteFrame)
    sfAvatarDefault:SpriteFrame = null;

    

    initWithFriendGroup(withFriendDataInfo:WithFriendDataInfo){
        this.scoreValue = 0;
        this.playerScore.string = `${Utils.formatNumber(this.scoreValue)}`;
        this.playerName.string = `${FBInstantManager.instance.getName()}`;
        if(localConfig.instance.myAvatarSpriteFrame){
            this.playerAvatar.spriteFrame = localConfig.instance.myAvatarSpriteFrame;
        }
       
        this.friendAvatar.spriteFrame = this.sfAvatarDefault;
        if(withFriendDataInfo.senderID == FBInstantManager.instance.getID()){
            //SENDER == PLAYER
            if(withFriendDataInfo.receiverName.length == 0){
                this.friendName.string = `Your Friend`;
            }else{
                this.friendName.string = `${withFriendDataInfo.receiverName}`;
            }
            if(withFriendDataInfo.receiverScore == 0){
                this.friendScore.string = `???`;
            }else{
                this.friendScore.string = `${Utils.formatNumber(Math.floor(withFriendDataInfo.receiverScore))}`;
            }
            if(withFriendDataInfo.receiverAvatarURL.length > 0 && localConfig.instance.mapCacheAvatars.has(withFriendDataInfo.receiverID)){
                if(this.friendAvatar){
                    this.friendAvatar.spriteFrame = localConfig.instance.mapCacheAvatars.get(withFriendDataInfo.receiverID);
                }
            }else{
                if(withFriendDataInfo.receiverAvatarURL.length == 0) {
                    this.friendAvatar.spriteFrame = this.sfAvatarDefault;
                }else{
                    resourceUtil.setRemoteImage(withFriendDataInfo.receiverAvatarURL,this.friendAvatar,(err,sf)=>{
                        if(err){
                            this.friendAvatar.spriteFrame = this.sfAvatarDefault;
                        }else{
                            localConfig.instance.mapCacheAvatars.set(withFriendDataInfo.receiverID,sf);
                        }
                        
                    });
                }
            }
        }else if(withFriendDataInfo.receiverID == FBInstantManager.instance.getID()){
            //RECEIVER == PLAYER
            if(withFriendDataInfo.senderName.length == 0){
                this.friendName.string = `Your Friend`;
            }else{
                this.friendName.string = `${withFriendDataInfo.senderName}`;
            }
            if(withFriendDataInfo.senderScore == 0){
                this.friendScore.string = `???`;
            }else{
                this.friendScore.string = `${Utils.formatNumber(Math.floor(withFriendDataInfo.senderScore))}`;
            }
            if(withFriendDataInfo.senderAvatarURL.length > 0 && localConfig.instance.mapCacheAvatars.has(withFriendDataInfo.senderID)){
                if(this.friendAvatar){
                    this.friendAvatar.spriteFrame = localConfig.instance.mapCacheAvatars.get(withFriendDataInfo.senderID);
                }
            }else{
                if(withFriendDataInfo.senderAvatarURL.length == 0) {
                    this.friendAvatar.spriteFrame = this.sfAvatarDefault;
                }else{
                    resourceUtil.setRemoteImage(withFriendDataInfo.senderAvatarURL,this.friendAvatar,(err,sf)=>{
                        if(err){
                            this.friendAvatar.spriteFrame = this.sfAvatarDefault;
                        }else{
                            localConfig.instance.mapCacheAvatars.set(withFriendDataInfo.senderID,sf);
                        }
                    });
                }
            }
        }
    }

    scoreValue:number = 0;
    tweenScoreUpdate:Tween<{}> = null;
    setAddScore(scoreAdd:number){
        // console.log('setAddScore');
        this.scoreValue += scoreAdd;
        this.playerScore.string = `${Utils.formatNumber(this.scoreValue)}`;
        if (this.tweenScoreUpdate) this.tweenScoreUpdate.stop();
        this.tweenScoreUpdate = tween(this.playerScore.node).to(0.1,{scale: new Vec3(1.1,1.1,1.1)},{easing:'linear'}).to(0.1,{scale: new Vec3(1,1,1)},{easing:'linear'}).union().repeat(2).start();
    }

    resetScore(){
        // console.log('resetScore');
        if (this.tweenScoreUpdate) this.tweenScoreUpdate.stop();
        this.scoreValue = 0;
        this.playerScore.string = `${Utils.formatNumber(this.scoreValue)}`;        
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
