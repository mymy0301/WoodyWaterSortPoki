
import { _decorator, Color, Component, Label, Node, Sprite, SpriteFrame, tween, Tween, UI, UIOpacity, Vec3 } from 'cc';
import { ItemRankInfo } from '../common/ItemRankInfo';
import { localConfig } from '../localConfig';
import { AVATAR_TYPE } from '../framework/constants';
import { resourceUtil } from '../framework/resourceUtil';
import Utils from '../core/utils/Utils';
import { FBInstantManager } from '../common/FBInstantManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemLeaderBoard
 * DateTime = Thu Oct 17 2024 09:44:39 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemLeaderBoard.ts
 * FileBasenameNoExtension = ItemLeaderBoard
 * URL = db://assets/scripts/game/ItemLeaderBoard.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemLeaderBoard')
export class ItemLeaderBoard extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    itemRankInfo:ItemRankInfo;

    @property(Node)
    nodeGroup:Node = null;

    @property(UIOpacity)
    nodeGroupOpacity:UIOpacity = null;

    tweenGroup:Tween<{}> = null;
    tweenGroupOpacity:Tween<{}> = null;

    @property(Sprite)
    iconAvatar:Sprite = null;

    @property(SpriteFrame)
    sfAvatarDefault:SpriteFrame = null;

    @property(Sprite)
    frameRank:Sprite = null;

    @property(SpriteFrame)
    arrSfFrameRanks:SpriteFrame[] = [];

    @property(Sprite)
    iconRank:Sprite = null;

    @property(SpriteFrame)
    arrSfIconRanks:SpriteFrame[] = [];

    @property(Label)
    txtRank:Label = null;

    @property(Label)
    txtName:Label = null;

    @property(Label)
    txtScore:Label = null;

    indexPos:number;

    setIndexPos(_indexPos:number){
        this.indexPos = _indexPos;
    }


    
    timeDelayShow:number = 0;
    init(_itemRankInfo:ItemRankInfo,_timeDelay:number = 0){
        this.timeDelayShow = _timeDelay;
        // console.log("init itemRankInfo:",_itemRankInfo);
        this.itemRankInfo = _itemRankInfo;

        this.loadAvatar();

        if(this.itemRankInfo.userName != null && this.itemRankInfo.userName != 'undefined'){
            this.txtName.string = `${this.itemRankInfo.userName}`;
        }
        if(this.itemRankInfo.isMyRank){
            this.txtName.string = `${FBInstantManager.instance.getName()}`;
            this.txtName.color = new Color(22,182,0,255);
        }else{
            this.txtName.color = new Color(156,53,4,255);
        }
        this.txtScore.string = `${Utils.formatNumber(this.itemRankInfo.userScore)}`;

        if(this.itemRankInfo.indexRank >= 100){
            this.txtRank.string = `99+`;
        }else{
            this.txtRank.string = `${this.itemRankInfo.indexRank}`;
        }

        if(this.itemRankInfo.indexRank <= 3){
            this.iconRank.node.active = true;
            this.iconRank.spriteFrame = this.arrSfIconRanks[this.itemRankInfo.indexRank - 1];
            this.frameRank.spriteFrame = this.arrSfFrameRanks[this.itemRankInfo.indexRank - 1];
        }else{
            this.iconRank.node.active = false;
            this.frameRank.spriteFrame = this.arrSfFrameRanks[3];
        }

        this.showItem();
    }

    showItem(){
        if(this.tweenGroup != null){
            this.tweenGroup.stop();
            this.tweenGroup = null;
        }
        if(this.tweenGroupOpacity != null){
            this.tweenGroupOpacity.stop();
            this.tweenGroupOpacity = null;
        }
        this.nodeGroupOpacity.opacity = 0;
        this.nodeGroup.active = true;
        this.nodeGroup.setScale(new Vec3(0.8,0.8,1));
        this.tweenGroup = tween(this.nodeGroup).delay(this.timeDelayShow).to(0.3,{scale:new Vec3(1,1,1)},{easing:'quadOut',onComplete:()=>{}}).start();
        this.tweenGroupOpacity = tween(this.nodeGroupOpacity).delay(this.timeDelayShow).to(0.3,{opacity:255},{easing:'linear',onComplete:()=>{}}).start();
    }

    loadAvatar(){
        this.iconAvatar.spriteFrame = this.sfAvatarDefault;
        if(this.itemRankInfo.isMyRank){
            if(localConfig.instance.myAvatarSpriteFrame != null){
                this.iconAvatar.spriteFrame = localConfig.instance.myAvatarSpriteFrame;
            }
        }else if(this.itemRankInfo.avatarType == AVATAR_TYPE.TYPE_WEB){
            // console.log(localConfig.instance.mapCacheAvatars);
            // console.log(this.itemRankInfo.playerID);
            if(localConfig.instance.mapCacheAvatars.has(this.itemRankInfo.playerID)){
                this.iconAvatar.spriteFrame = localConfig.instance.mapCacheAvatars.get(this.itemRankInfo.playerID);
            }else{
                // console.log("load avatar: " + this.itemRankInfo.playerID);
                this.iconAvatar.spriteFrame = this.sfAvatarDefault;
                resourceUtil.setRemoteImage(this.itemRankInfo.avatarURL,this.iconAvatar,(err,spriteFrame)=>{
                    if(err){

                    }else{
                        localConfig.instance.mapCacheAvatars.set(this.itemRankInfo.playerID,spriteFrame);
                    }
                });
            }
        }
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
