
import { _decorator, Color, Component, Label, labelAssembler, LabelOutline, Node, Sprite, SpriteFrame } from 'cc';
import { ItemRankInfo } from '../../common/ItemRankInfo';
import { localConfig } from '../../localConfig';
import { AVATAR_TYPE } from '../../framework/constants';
import { resourceUtil } from '../../framework/resourceUtil';
import { lodash } from '../../framework/lodash';
import Utils from '../../core/utils/Utils';
import { FBInstantManager } from '../../common/FBInstantManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemTournamentGroupPlayer
 * DateTime = Tue Oct 29 2024 10:44:06 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemTournamentGroupPlayer.ts
 * FileBasenameNoExtension = ItemTournamentGroupPlayer
 * URL = db://assets/scripts/game/tournaments/ItemTournamentGroupPlayer.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemTournamentGroupPlayer')
export class ItemTournamentGroupPlayer extends Component {
    @property(Node)
    groupPlayer:Node;

    @property(Sprite)
    avatar:Sprite;

    @property(SpriteFrame)
    avatarDefault:SpriteFrame;

    @property(Label)
    txtName:Label;

    @property(LabelOutline)
    txtNameOutline:LabelOutline;

    @property(Label)
    txtScore:Label;


    @property(Node)
    iconLoading:Node;
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    itemRankInfo:ItemRankInfo = null;
    initPlayer(_itemRankInfo:ItemRankInfo){
        this.itemRankInfo = _itemRankInfo;
        if(this.itemRankInfo.isMyRank){
            this.txtName.string = `${FBInstantManager.instance.getName()}`;
            // this.txtName.color = new Color(22,182,0,255);
            this.txtNameOutline.color = new Color(0,102,0,255);
        }else{
            // this.txtName.color = new Color(255,255,255,255);
            this.txtNameOutline.color = new Color(0,57,102,255);
        }
        this.txtName.string = `${this.itemRankInfo.userName}`;
        this.avatar.spriteFrame = this.avatarDefault;
        if(this.txtScore){
            this.txtScore.string = `${Utils.formatNumber(this.itemRankInfo.userScore)}`;
        }
        this.iconLoading.active = false;
        this.loadAvatar();
        this.node.active = true;
    }

    reset(){
        this.avatar.spriteFrame = this.avatarDefault;
        this.txtName.string = "";
        this.txtScore.string = "";
        this.iconLoading.active = false;
        this.node.active = false;
    }

    loadAvatar(){
        if(this.itemRankInfo.isMyRank){
            if(localConfig.instance.myAvatarSpriteFrame != null){
                this.avatar.spriteFrame = localConfig.instance.myAvatarSpriteFrame;
            }
        }else if(this.itemRankInfo.avatarType == AVATAR_TYPE.TYPE_WEB){
            if(localConfig.instance.mapCacheAvatars.has(this.itemRankInfo.playerID)){
                this.avatar.spriteFrame = localConfig.instance.mapCacheAvatars.get(this.itemRankInfo.playerID);
            }else{
                this.iconLoading.active = true;
                resourceUtil.setRemoteImage(this.itemRankInfo.avatarURL,this.avatar,(err,spriteFrame)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    localConfig.instance.mapCacheAvatars.set(this.itemRankInfo.playerID,spriteFrame);
                    this.iconLoading.active = false;
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
