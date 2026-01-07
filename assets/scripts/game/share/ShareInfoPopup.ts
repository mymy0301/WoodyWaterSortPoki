
import { _decorator, Camera, Component, Label, Node, RichText, Sprite } from 'cc';
import { GetBase64Image_Callback, localConfig } from '../../localConfig';
import Utils from '../../core/utils/Utils';
import { FBInstantManager } from '../../common/FBInstantManager';
import { captureNode, getBase64 } from '../../common/capture-screen';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ShareInfoPopup
 * DateTime = Wed Dec 04 2024 17:16:18 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ShareInfoPopup.ts
 * FileBasenameNoExtension = ShareInfoPopup
 * URL = db://assets/scripts/game/share/ShareInfoPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ShareInfoPopup')
export class ShareInfoPopup extends Component {
    @property(Camera)
    nodeCamera:Camera;

    @property(RichText)
    txtDes:RichText;

    @property(Label)
    txtInfo:Label;

    @property(Sprite)
    iconAvatar:Sprite;

    showShareInfoLevelPopup(level:number,cb:GetBase64Image_Callback){
        this.node.active = true;
        this.nodeCamera.node.active = true;
        if(localConfig.instance.myAvatarSpriteFrame){
            this.iconAvatar.spriteFrame = localConfig.instance.myAvatarSpriteFrame;
        }
        this.txtDes.string = `<outline color=#ad3501 width=1.5><color=#FFFFFF>Can you beat</color> </outline><outline color=#00545b width=1.5><color=#00e9ff>${FBInstantManager.instance.getName()}</color></outline> <outline color=#ad3501 width=1.5><color=#FFFFFF>level?</color></outline>`;
        this.txtInfo.string = `Lv.${Utils.formatNumber(level)}`;

        this.captureNode_Context(cb);
    }

    showShareInfoScorePopup(score:number,cb:GetBase64Image_Callback){
        this.node.active = true;
        this.nodeCamera.node.active = true;
        if(localConfig.instance.myAvatarSpriteFrame){
            this.iconAvatar.spriteFrame = localConfig.instance.myAvatarSpriteFrame;
        }
        this.txtDes.string = `<outline color=#ad3501 width=1.5><color=#FFFFFF>Can you beat</color> </outline><outline color=#00545b width=1.5><color=#00e9ff>${FBInstantManager.instance.getName()}</color></outline> <outline color=#ad3501 width=1.5><color=#FFFFFF>score?</color></outline>`;
        this.txtInfo.string = `${Utils.formatNumber(score)}`;

        this.captureNode_Context(cb);
    }

    showShareTournamentPopup(tittle:string,score:number,cb:GetBase64Image_Callback){
        this.node.active = true;
        this.nodeCamera.node.active = true;
        if(localConfig.instance.myAvatarSpriteFrame){
            this.iconAvatar.spriteFrame = localConfig.instance.myAvatarSpriteFrame;
        }
        this.txtDes.string = `<outline color=#00e9ff width=2><color=#00e9ff>${tittle}</color></outline>`;
        this.txtInfo.string = `${Utils.formatNumber(score)}`;

        this.captureNode_Context(cb);
    }

    captureNode_Context(cb:GetBase64Image_Callback){
        let self = this;
        captureNode(this.node,this.nodeCamera).then(()=>{
            let base64 = getBase64(this.nodeCamera,800,800);
            self.node.active = false;
            self.nodeCamera.node.active = false;
            // console.log(base64);
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
