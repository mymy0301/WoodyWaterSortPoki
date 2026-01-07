
import { _decorator, Button, Component, Label, Node, Sprite, SpriteFrame, tween, Tween, UIOpacity, Vec3, Widget } from 'cc';
import { BasePopup } from '../../common/basePopup';
import { WithFriendDataInfo } from './WithFriendDataInfo';
import { Constants } from '../../framework/constants';
import { AudioManager2 } from '../../framework/audioManager2';
import { FBInstantManager } from '../../common/FBInstantManager';
import { localConfig } from '../../localConfig';
import Utils from '../../core/utils/Utils';
import { resourceUtil } from '../../framework/resourceUtil';
import { clientEvent } from '../../framework/clientEvent';
import { LogEventManager } from '../../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = WinWithFriendPopup
 * DateTime = Mon Mar 24 2025 09:49:20 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = WinWithFriendPopup.ts
 * FileBasenameNoExtension = WinWithFriendPopup
 * URL = db://assets/scripts/game/withFriends/WinWithFriendPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('WinWithFriendPopup')
export class WinWithFriendPopup extends BasePopup {
    @property(Widget)
    groupAllTopWidget: Widget;

    @property(Node)
    groupWithFriend: Node = null;

    @property(Sprite)
    playerAvatar: Sprite = null;

    @property(Label)
    playerName: Label = null;

    @property(Label)
    playerScore: Label = null;

    @property(Node)
    nodePlayerWin: Node = null;

    @property(Sprite)
    friendAvatar: Sprite = null;

    @property(Label)
    friendName: Label = null;

    @property(Label)
    friendScore: Label = null;

    @property(Node)
    nodeFriendWin: Node = null;

    @property(SpriteFrame)
    sfAvatarDefault: SpriteFrame = null;

    @property(Button)
    btnShare: Button = null;

    @property(UIOpacity)
    nodeShare_Opacity: UIOpacity;

    @property(Button)
    btnHome: Button = null;

    @property(Button)
    btnReplay: Button = null;

    @property(UIOpacity)
    nodeReplay_Opacity: UIOpacity;

    withFriendDataInfo: WithFriendDataInfo = null;

    @property(Node)
    titleGroup: Node;

    @property(UIOpacity)
    titleGroup_Opacity: UIOpacity;

    tweenTitleGroup: Tween<{}> = null;
    tweenTitleGroup_Opacity: Tween<{}> = null;



    onEnable(): void {
        super.onEnable();
        this.btnShare.node.on(Constants.CLICK, this.touchShare, this);
        this.btnHome.node.on(Constants.CLICK, this.touchHome, this);
        this.btnReplay.node.on(Constants.CLICK, this.touchReplay, this);
    }

    onDisable(): void {
        super.onDisable();
        this.btnShare.node.off(Constants.CLICK, this.touchShare, this);
        this.btnHome.node.off(Constants.CLICK, this.touchHome, this);
        this.btnReplay.node.off(Constants.CLICK, this.touchReplay, this);
    }

    start(): void {
        this.initAllTop();
    }

    initAllTop(): void {
        if (localConfig.instance.isMobile) {
            let posY = (localConfig.instance.scaleBG - 1) * localConfig.instance.DEFAULT_H / 2;
            if (posY > 0) {
                this.groupAllTopWidget.top = -posY;
            } else {
                this.groupAllTopWidget.top = 0;
            }
        } else {
            this.groupAllTopWidget.top = 0;
        }
    }

    showWinWithFriendPopup(_withFriendDataInfo: WithFriendDataInfo, _score: number): void {
        this.withFriendDataInfo = _withFriendDataInfo;
        AudioManager2.instance.playSound_WIN2();

        this.btnShare.node.active = false;
        this.btnReplay.node.active = false;
        this.groupWithFriend.active = false;
        this.titleGroup_Opacity.opacity = 0;

        this.nodePlayerWin.active = false;
        this.nodeFriendWin.active = false;

        this.playerName.string = `${FBInstantManager.instance.getName()}`;
        if (localConfig.instance.myAvatarSpriteFrame) {
            this.playerAvatar.spriteFrame = localConfig.instance.myAvatarSpriteFrame;
        }

        this.friendAvatar.spriteFrame = this.sfAvatarDefault;
        this.playerScore.string = `${Utils.formatNumber(Math.floor(_score))}`;
        // console.log("initWithFriendGroupinitWithFriendGroup",this.withFriendDataInfo);
        if (this.withFriendDataInfo.senderID == FBInstantManager.instance.getID()) {
            //SENDER == PLAYER
            if (this.withFriendDataInfo.receiverName.length == 0) {
                this.friendName.string = `Your Friend`;
            } else {
                this.friendName.string = `${this.withFriendDataInfo.receiverName}`;
            }
            if (this.withFriendDataInfo.receiverScore == 0) {
                this.friendScore.string = `???`;
                this.nodePlayerWin.active = false;
            } else {
                this.friendScore.string = `${Utils.formatNumber(Math.floor(this.withFriendDataInfo.receiverScore))}`;
                if (this.withFriendDataInfo.receiverScore > _score) {
                    this.nodeFriendWin.active = true;
                } else {
                    this.nodePlayerWin.active = true;
                }
            }
            if (localConfig.instance.mapCacheAvatars.has(this.withFriendDataInfo.receiverID)) {
                if (this.friendAvatar) {
                    this.friendAvatar.spriteFrame = localConfig.instance.mapCacheAvatars.get(this.withFriendDataInfo.receiverID);
                }
            } else {
                if (this.withFriendDataInfo.receiverAvatarURL.length == 0) {

                } else {
                    resourceUtil.setRemoteImage(this.withFriendDataInfo.receiverAvatarURL, this.friendAvatar, (err, sf) => {
                        if (err) {
                            this.friendAvatar.spriteFrame = null;
                        } else {
                            localConfig.instance.mapCacheAvatars.set(this.withFriendDataInfo.receiverID, sf);
                        }

                    });
                }
            }
        } else if (this.withFriendDataInfo.receiverID == FBInstantManager.instance.getID()) {
            //RECEIVER == PLAYER

            if (this.withFriendDataInfo.senderName.length == 0) {
                this.friendName.string = `Your Friend`;
            } else {
                this.friendName.string = `${this.withFriendDataInfo.senderName}`;
            }
            if (this.withFriendDataInfo.senderScore == 0) {
                this.friendScore.string = `???`;
                this.nodePlayerWin.active = true;
            } else {
                this.friendScore.string = `${Utils.formatNumber(Math.floor(this.withFriendDataInfo.senderScore))}`;
                if (this.withFriendDataInfo.senderScore > _score) {
                    this.nodeFriendWin.active = true;
                } else {
                    this.nodePlayerWin.active = true;
                }
            }
            if (localConfig.instance.mapCacheAvatars.has(this.withFriendDataInfo.senderID)) {
                if (this.friendAvatar) {
                    this.friendAvatar.spriteFrame = localConfig.instance.mapCacheAvatars.get(this.withFriendDataInfo.senderID);
                }
            } else {
                if (this.withFriendDataInfo.senderAvatarURL.length == 0) {

                } else {
                    resourceUtil.setRemoteImage(this.withFriendDataInfo.senderAvatarURL, this.friendAvatar, (err, sf) => {
                        if (err) {
                            this.friendAvatar.spriteFrame = null;
                        } else {
                            localConfig.instance.mapCacheAvatars.set(this.withFriendDataInfo.senderID, sf);
                        }
                    });
                }
            }
        }

        super.showPopup();
    }

    showPoup_ShowView(): void {
        // clientEvent.dispatchEvent(Constants.SHOW_EFX_FIREWORK);

        if (this.tweenOpacityBG) {
            this.tweenOpacityBG.stop();
        }
        this.tweenOpacityBG = tween(this.bgOpacity).to(0.3, { opacity: 255 }, {
            easing: 'quadOut', onComplete: () => {
                this.showPoup_ShowView_Finished();
            }
        }).start();
    }

    showPoup_ShowView_Finished(): void {
        super.showPoup_ShowView_Finished();
        if (this.tweenTitleGroup) {
            this.tweenTitleGroup.stop();
        }
        if (this.tweenTitleGroup_Opacity) {
            this.tweenTitleGroup_Opacity.stop();
        }

        this.titleGroup.setScale(new Vec3(1.5, 1.5, 1.5));
        this.titleGroup_Opacity.opacity = 150;
        this.tweenTitleGroup = tween(this.titleGroup).to(0.4, { scale: new Vec3(1, 1, 1) }, {
            easing: 'backOut', onComplete: () => {

            }
        }).start();
        this.tweenTitleGroup_Opacity = tween(this.titleGroup_Opacity).to(0.3, { opacity: 255 }, { easing: 'quadOut' }).start();

        this.scheduleOnce(() => {
            this.groupWithFriend.active = true;
            this.showButton_Step1();
        }, 0.2);
    }

    showButton_Step1(): void {
        this.btnShare.node.active = true;
        this.nodeShare_Opacity.opacity = 150;
        this.btnShare.node.setScale(new Vec3(0.5, 0.5, 0.5));
        tween(this.btnShare.node).to(0.3, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' }).start();
        tween(this.nodeShare_Opacity).to(0.3, { opacity: 255 }, { easing: 'quadOut' }).start();


        this.scheduleOnce(() => {
            this.showButton_Step2();
        }, 0.2);
    }

    showButton_Step2(): void {
        this.btnReplay.node.active = true;
        this.btnReplay.node.setScale(new Vec3(0.5, 0.5, 0.5));
        this.nodeReplay_Opacity.opacity = 150;
        tween(this.btnReplay.node).to(0.3, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' }).start();
        tween(this.nodeReplay_Opacity).to(0.3, { opacity: 255 }, {
            easing: 'quadOut', onComplete: () => {
            }
        }).start();
    }


    touchShare() {
        LogEventManager.instance.logButtonClick("share", "winwithfriendpopup");
        clientEvent.dispatchEvent(Constants.SHOW_SHARE_WITHFRIEND_POPUP);
    }

    touchHome() {
        LogEventManager.instance.logButtonClick("home", "winwithfriendpopup");
        this.hidePopup();
        FBInstantManager.instance.resetContext(() => { });
        localConfig.instance.currWithFriendDataInfo = null;

        clientEvent.dispatchEvent(Constants.WINPOPUP_WITHFRIEND_TOUCH_HOME);

    }

    touchReplay() {
        LogEventManager.instance.logButtonClick("replay", "winwithfriendpopup");
        this.hidePopup();
        clientEvent.dispatchEvent(Constants.WITHFRIEND_TOUCH_REPLAY);
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
