
import { _decorator, Component, Node, Sprite } from 'cc';
import { localConfig } from '../localConfig';
import { clientEvent } from '../framework/clientEvent';
import { Constants } from '../framework/constants';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = AvatarGroup
 * DateTime = Mon Sep 23 2024 15:48:22 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = AvatarGroup.ts
 * FileBasenameNoExtension = AvatarGroup
 * URL = db://assets/scripts/game/AvatarGroup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('AvatarGroup')
export class AvatarGroup extends Component {
    @property(Sprite)
    icon:Sprite;

    protected onEnable(): void {
        clientEvent.on(Constants.AVATAR_LOAD_FINISHED,this.showAvatar,this);
    }

    protected onDisable(): void {
        clientEvent.off(Constants.AVATAR_LOAD_FINISHED,this.showAvatar,this);
    }

    start () {
        // [3]
        this.showAvatar();
    }

    showAvatar(){
        if(localConfig.instance.myAvatarSpriteFrame){
            this.icon.spriteFrame = localConfig.instance.myAvatarSpriteFrame;
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
