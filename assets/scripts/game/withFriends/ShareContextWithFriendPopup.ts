
import { _decorator, Camera, Component, Label, Node, Sprite, SpriteFrame } from 'cc';
import { WithFriendDataInfo } from './WithFriendDataInfo';
import { GetBase64Image_Callback, localConfig } from '../../localConfig';
import { FBInstantManager } from '../../common/FBInstantManager';
import Utils from '../../core/utils/Utils';
import { resourceUtil } from '../../framework/resourceUtil';
import { captureNode, getBase64 } from '../../common/capture-screen';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ShareContextWithFriendPopup
 * DateTime = Mon Mar 24 2025 14:34:44 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ShareContextWithFriendPopup.ts
 * FileBasenameNoExtension = ShareContextWithFriendPopup
 * URL = db://assets/scripts/game/withFriends/ShareContextWithFriendPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ShareContextWithFriendPopup')
export class ShareContextWithFriendPopup extends Component {
    @property(Camera)
    nodeCamera:Camera;

    @property(Sprite)
    playerAvatar: Sprite = null;

    @property(Label)
    playerName: Label = null;

    @property(Label)
    playerScore: Label = null;

    @property(Node)
    nodePlayerWin:Node = null;

    @property(Sprite)
    friendAvatar: Sprite = null;

    @property(Label)
    friendName: Label = null;

    @property(Label)
    friendScore: Label = null;

    @property(Node)
    nodeFriendWin:Node = null;

    @property(SpriteFrame)
    sfAvatarDefault: SpriteFrame = null;

    showUpdateContextWithFriendPopup(withFriendDataInfo:WithFriendDataInfo,cb:GetBase64Image_Callback):void{
        this.node.active = true;
        this.nodeCamera.node.active = true;
        // console.log("showUpdateContextWithFriendPopup",withFriendDataInfo);
        this.playerName.string = `${FBInstantManager.instance.getName()}`;
        if(localConfig.instance.myAvatarSpriteFrame){
            this.playerAvatar.spriteFrame = localConfig.instance.myAvatarSpriteFrame;
        }
       
        this.nodePlayerWin.active = false;
        this.nodeFriendWin.active = false;

        this.friendAvatar.spriteFrame = this.sfAvatarDefault;
        if(withFriendDataInfo.senderID == FBInstantManager.instance.getID()){
            //SENDER == PLAYER
            if(withFriendDataInfo.senderScore == 0){
                this.playerScore.string = `???`;
            }else{
                this.playerScore.string = `${Utils.formatNumber(Math.floor(withFriendDataInfo.senderScore))}`;
            }
            
            if(withFriendDataInfo.receiverName.length == 0){
                this.friendName.string = `Your Friend`;
            }else{
                this.friendName.string = `${withFriendDataInfo.receiverName}`;
            }
            
            if(withFriendDataInfo.receiverScore == 0){
                this.friendScore.string = `???`;
                this.nodePlayerWin.active = true;
            }else{
                this.friendScore.string = `${Utils.formatNumber(Math.floor(withFriendDataInfo.receiverScore))}`;
                if(withFriendDataInfo.senderScore >= withFriendDataInfo.receiverScore){
                    this.nodePlayerWin.active = true;
                }else{
                    this.nodeFriendWin.active = true;
                }
            }
            if(localConfig.instance.mapCacheAvatars.has(withFriendDataInfo.receiverID)){
                if(this.friendAvatar){
                    this.friendAvatar.spriteFrame = localConfig.instance.mapCacheAvatars.get(withFriendDataInfo.receiverID);
                }
            }else{
                if(withFriendDataInfo.receiverAvatarURL.length == 0) {
                    
                }else{
                    resourceUtil.setRemoteImage(withFriendDataInfo.receiverAvatarURL,this.friendAvatar,(err,sf)=>{
                        if(err){
                            this.friendAvatar.spriteFrame = null;
                        }else{
                            localConfig.instance.mapCacheAvatars.set(withFriendDataInfo.receiverID,sf);
                        }
                        
                    });
                }
            }
        }else if(withFriendDataInfo.receiverID == FBInstantManager.instance.getID()){
            //RECEIVER == PLAYER
            if(withFriendDataInfo.receiverScore == 0){
                this.playerScore.string = `???`;
            }else{
                this.playerScore.string = `${Utils.formatNumber(Math.floor(withFriendDataInfo.receiverScore))}`;
            }
            if(withFriendDataInfo.senderName.length == 0){
                this.friendName.string = `Your Friend`;
            }else{
                this.friendName.string = `${withFriendDataInfo.senderName}`;
            }
            if(withFriendDataInfo.senderScore == 0){
                this.friendScore.string = `???`;
                this.nodePlayerWin.active = true;
            }else{
                this.friendScore.string = `${Utils.formatNumber(Math.floor(withFriendDataInfo.senderScore))}`;
                if(withFriendDataInfo.receiverScore >= withFriendDataInfo.senderScore){
                    this.nodePlayerWin.active = true;
                }else{
                    this.nodeFriendWin.active = false;
                }
            }
            if(localConfig.instance.mapCacheAvatars.has(withFriendDataInfo.senderID)){
                if(this.friendAvatar){
                    this.friendAvatar.spriteFrame = localConfig.instance.mapCacheAvatars.get(withFriendDataInfo.senderID);
                }
            }else{
                if(withFriendDataInfo.senderAvatarURL.length == 0) {
                    
                }else{
                    resourceUtil.setRemoteImage(withFriendDataInfo.senderAvatarURL,this.friendAvatar,(err,sf)=>{
                        if(err){
                            this.friendAvatar.spriteFrame = null;
                        }else{
                            localConfig.instance.mapCacheAvatars.set(withFriendDataInfo.senderID,sf);
                        }
                    });
                }
            }
        }
        this.captureNode_Invite(cb);
    
    }

    captureNode_Invite(cb:GetBase64Image_Callback){
        let self = this;
        captureNode(this.node,this.nodeCamera).then(()=>{
            let base64 = getBase64(this.nodeCamera,800,450);
            // console.log("base : ", base64)
            self.node.active = false;
            self.nodeCamera.node.active = false;

            cb(base64);
        }).catch(()=>{
            cb("");
        });
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
