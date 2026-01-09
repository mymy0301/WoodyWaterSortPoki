
import { _decorator, Button, Component, Label, Node, Sprite, SpriteFrame, tween, Tween, Vec3 } from 'cc';
import { Constants, THEME_TYPE, TICKET_TYPE, UNLOCK_TYPE } from '../framework/constants';
import { localConfig } from '../localConfig';
import { resourceUtil } from '../framework/resourceUtil';
import { clientEvent } from '../framework/clientEvent';
import { FBInstantManager } from '../common/FBInstantManager';
import { LogEventManager } from '../common/LogEventManager';
import { PokiSDKManager } from '../common/PokiSDKManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemTheme
 * DateTime = Fri Oct 11 2024 09:55:31 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemTheme.ts
 * FileBasenameNoExtension = ItemTheme
 * URL = db://assets/scripts/game/ItemTheme.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('ItemTheme')
export class ItemTheme extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    themeType: THEME_TYPE = THEME_TYPE.TUBE;
    itemID: number = -1;

    @property(Sprite)
    icon: Sprite = null;

    @property(Node)
    iconLoading: Node = null;

    @property(Button)
    btnItemTheme: Button = null;

    @property(Sprite)
    bg: Sprite = null;

    @property(SpriteFrame)
    bgSkin: SpriteFrame = null;

    @property(SpriteFrame)
    bgTube: SpriteFrame = null;

    @property(Node)
    objLock: Node = null;

    @property(Label)
    txtLevel: Label = null;

    @property(Node)
    objSelected: Node = null;

    @property(Node)
    iconSelected: Node = null;

    @property(Node)
    objUnlock: Node = null;

    @property(Button)
    btnUnlock_Ad: Button = null;
    @property(Button)
    btnUnlock_Coin: Button = null;

    @property(Sprite)
    bgBtnUnlock_Coin: Sprite = null;

    @property(Label)
    txtUnlock_Coin: Label = null;

    tweenSelected: Tween<{}> = null;

    protected onEnable(): void {
        clientEvent.on(Constants.THEME_SELECT_UPDATE, this.setThemeSelect_Update, this);
        clientEvent.on(Constants.THEME_UNSELECT_UPDATE, this.setThemeUnselect_Update, this);
        this.btnItemTheme.node.on(Button.EventType.CLICK, this.touchItemTheme, this);
        this.btnUnlock_Ad.node.on(Button.EventType.CLICK, this.touchUnlock_Ad, this);
        this.btnUnlock_Coin.node.on(Button.EventType.CLICK, this.touchUnlock_Coin, this);
    }

    protected onDisable(): void {
        clientEvent.off(Constants.THEME_SELECT_UPDATE, this.setThemeSelect_Update, this);
        clientEvent.off(Constants.THEME_UNSELECT_UPDATE, this.setThemeUnselect_Update, this);
        this.btnItemTheme.node.off(Button.EventType.CLICK, this.touchItemTheme, this);
        this.btnUnlock_Ad.node.off(Button.EventType.CLICK, this.touchUnlock_Ad, this);
        this.btnUnlock_Coin.node.off(Button.EventType.CLICK, this.touchUnlock_Coin, this);

    }
    start() {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    initInfo(themeType: THEME_TYPE, itemID: number) {
        this.iconLoading.active = false;
        this.themeType = themeType;
        this.itemID = itemID;
        if (themeType == THEME_TYPE.TUBE) {
            this.bg.spriteFrame = this.bgSkin;
        } else if (themeType == THEME_TYPE.BG) {
            this.bg.spriteFrame = this.bgTube;
        } else if (themeType == THEME_TYPE.SKIN) {
            this.bg.spriteFrame = this.bgSkin;
        }

        this.iconLoading.active = true;
        let strPath: string = localConfig.instance.getThemePath_byItemID(themeType, itemID);
        resourceUtil.loadSpriteFrame_Bundle(strPath, (err, spriteFrame) => {
            if (err) {
                console.error(err);
                return;
            }
            if(!this.node){
                return;
            } 

            if (themeType == THEME_TYPE.BG) {
                if(!this.bg){
                    return;
                } 

                this.bg.spriteFrame = spriteFrame;

            } else {
                if(!this.icon){
                    return;
                }
                this.icon.spriteFrame = spriteFrame;
                this.icon.node.active = true;
            }
            this.iconLoading.active = false;
        });

        this.showInfo();
    }

    setThemeSelect_Update(themeType: THEME_TYPE, itemID: number) {
        if (themeType == this.themeType && itemID == this.itemID) {
            if (this.tweenSelected) {
                this.tweenSelected.stop();
            }
            this.iconSelected.setScale(new Vec3(0, 0, 0));
            this.tweenSelected = tween(this.iconSelected).to(0.2, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' }).start();

            this.objSelected.active = true;
            this.btnItemTheme.node.active = false;
            this.objLock.active = false; 
            this.objUnlock.active = false;
        }

        if (this.itemID == localConfig.instance.getThemeSelected_byThemeType(this.themeType)) {
            
        }else{
            if (localConfig.instance.checkThemeUnlocked(this.themeType, this.itemID)) {

            }else{
                if (this.themeType == THEME_TYPE.SKIN) {
                    let skinInfo = localConfig.instance.getSkinInfo(this.itemID);
                    if (localConfig.instance.currCoin >= skinInfo.price) {
                        this.bgBtnUnlock_Coin.grayscale = false;
                    } else {
                        this.bgBtnUnlock_Coin.grayscale = true;
                    }
                }
            }
        }
    }

    setThemeUnselect_Update(themeType: THEME_TYPE, itemID: number) {
        if (themeType == this.themeType && itemID == this.itemID) {
            this.objSelected.active = false;
            this.btnItemTheme.node.active = true;
        }
    }

    showInfo() {
        this.objLock.active = false;
        this.objSelected.active = false;
        this.objUnlock.active = false;
        this.btnUnlock_Coin.node.active = false;
        this.btnUnlock_Ad.node.active = false;
        this.btnItemTheme.node.active = true;


        if (this.itemID == localConfig.instance.getThemeSelected_byThemeType(this.themeType)) {
            if (this.tweenSelected) {
                this.tweenSelected.stop();
            }
            this.iconSelected.setScale(new Vec3(0, 0, 0));
            this.tweenSelected = tween(this.iconSelected).to(0.2, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' }).start();

            this.objSelected.active = true;
            this.btnItemTheme.node.active = false;
        } else {
            if (localConfig.instance.checkThemeUnlocked(this.themeType, this.itemID)) {
                this.btnItemTheme.node.active = true;
            } else {
                if (this.themeType == THEME_TYPE.TUBE || this.themeType == THEME_TYPE.BG) {
                    let unlockInfo = localConfig.instance.getUnlockProgressInfo_byThemeType(this.themeType, this.itemID);
                    if (unlockInfo && localConfig.instance.currLevelUnlock >= unlockInfo.level) {
                        this.objUnlock.active = true;
                        this.btnUnlock_Ad.node.active = true;
                        this.btnItemTheme.node.active = true;

                        
                    } else {
                        this.objLock.active = true;
                        if (unlockInfo) {
                            this.txtLevel.string = `Level ${unlockInfo.level}`;
                        } else {
                            this.txtLevel.string = ``;
                        }
                        this.btnItemTheme.node.active = false;
                    }
                } else if (this.themeType == THEME_TYPE.SKIN) {
                    let skinInfo = localConfig.instance.getSkinInfo(this.itemID);
                    if (skinInfo) {
                        this.objUnlock.active = true;
                        if (skinInfo.unlockType == UNLOCK_TYPE.COIN) {
                            this.btnUnlock_Coin.node.active = true;
                            this.txtUnlock_Coin.string = `${skinInfo.price}`;
                            if(localConfig.instance.currCoin >= skinInfo.price){
                                this.bgBtnUnlock_Coin.grayscale = false;
                            }else{
                                this.bgBtnUnlock_Coin.grayscale = true;
                            }
                        } else if (skinInfo.unlockType == UNLOCK_TYPE.WATCH_AD) {
                            this.btnUnlock_Ad.node.active = true;
                        }
                        this.btnItemTheme.node.active = true;
                    } else {
                        this.objLock.active = true;
                        this.txtLevel.string = ``;
                        this.btnItemTheme.node.active = false;
                    }
                }
            }
        }

    }

    touchItemTheme() {
        LogEventManager.instance.logButtonClick("itemtheme", "themepopup");
        if (localConfig.instance.checkThemeUnlocked(this.themeType, this.itemID)) {
            clientEvent.dispatchEvent(Constants.THEME_UNSELECT_UPDATE, this.themeType, localConfig.instance.getThemeSelected_byThemeType(this.themeType));
            localConfig.instance.setThemeSelected(this.themeType, this.itemID);
            clientEvent.dispatchEvent(Constants.THEME_SELECT_UPDATE, this.themeType, this.itemID);
        } else {
            if (this.themeType == THEME_TYPE.TUBE || this.themeType == THEME_TYPE.BG) {
                // FBInstantManager.instance.Show_RewardedVideoAsync("themepopup","unlock",(err, success) => {
                //     if (err) {

                //     } else {
                //         localConfig.instance.setThemeUnlocked(this.themeType, this.itemID);
                //         LogEventManager.instance.logResourceEarned("theme","bg",this.itemID,"themepopup","watchad");
                //         clientEvent.dispatchEvent(Constants.THEME_UNSELECT_UPDATE, this.themeType, localConfig.instance.getThemeSelected_byThemeType(this.themeType));
                //         localConfig.instance.setThemeSelected(this.themeType, this.itemID);
                //         clientEvent.dispatchEvent(Constants.THEME_SELECT_UPDATE, this.themeType, this.itemID);
                //     }
                // });

                PokiSDKManager.instance.Show_RewardedVideoAsync("themepopup","unlock",(err, success) => {
                    if (err) {

                    } else {
                        localConfig.instance.setThemeUnlocked(this.themeType, this.itemID);
                        LogEventManager.instance.logResourceEarned("theme","bg",this.itemID,"themepopup","watchad");
                        clientEvent.dispatchEvent(Constants.THEME_UNSELECT_UPDATE, this.themeType, localConfig.instance.getThemeSelected_byThemeType(this.themeType));
                        localConfig.instance.setThemeSelected(this.themeType, this.itemID);
                        clientEvent.dispatchEvent(Constants.THEME_SELECT_UPDATE, this.themeType, this.itemID);
                    }
                });
            } else if (this.themeType == THEME_TYPE.SKIN) {
                let skinInfo = localConfig.instance.getSkinInfo(this.itemID);
                if (skinInfo) {
                    if (skinInfo.unlockType == UNLOCK_TYPE.WATCH_AD) {
                        // FBInstantManager.instance.Show_RewardedVideoAsync("themepopup","unlock",(err, success) => {
                        //     if (err) {

                        //     } else {
                        //         localConfig.instance.setThemeUnlocked(this.themeType, this.itemID);
                        //         LogEventManager.instance.logResourceEarned("theme","skin",this.itemID,"themepopup","watchad");
                        //         clientEvent.dispatchEvent(Constants.THEME_UNSELECT_UPDATE, this.themeType, localConfig.instance.getThemeSelected_byThemeType(this.themeType));
                        //         localConfig.instance.setThemeSelected(this.themeType, this.itemID);
                        //         clientEvent.dispatchEvent(Constants.THEME_SELECT_UPDATE, this.themeType, this.itemID);
                        //     }
                        // });

                        PokiSDKManager.instance.Show_RewardedVideoAsync("themepopup","unlock",(err, success) => {
                            if (err) {

                            } else {
                                localConfig.instance.setThemeUnlocked(this.themeType, this.itemID);
                                LogEventManager.instance.logResourceEarned("theme","skin",this.itemID,"themepopup","watchad");
                                clientEvent.dispatchEvent(Constants.THEME_UNSELECT_UPDATE, this.themeType, localConfig.instance.getThemeSelected_byThemeType(this.themeType));
                                localConfig.instance.setThemeSelected(this.themeType, this.itemID);
                                clientEvent.dispatchEvent(Constants.THEME_SELECT_UPDATE, this.themeType, this.itemID);
                            }
                        })
                    } else if (skinInfo.unlockType == UNLOCK_TYPE.TICKET_GOLD) {
                        if (localConfig.instance.getTicketCount(TICKET_TYPE.GOLD) >= skinInfo.price) {
                            localConfig.instance.setTicketCount(TICKET_TYPE.GOLD, localConfig.instance.getTicketCount(TICKET_TYPE.GOLD) - skinInfo.price);

                            // console.log(this.themeType, this.itemID);
                            localConfig.instance.setThemeUnlocked(this.themeType, this.itemID);
                            clientEvent.dispatchEvent(Constants.THEME_UNSELECT_UPDATE, this.themeType, localConfig.instance.getThemeSelected_byThemeType(this.themeType));
                            localConfig.instance.setThemeSelected(this.themeType, this.itemID);
                            clientEvent.dispatchEvent(Constants.THEME_SELECT_UPDATE, this.themeType, this.itemID);
                        } else {
                            clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION, "Not Enough Ticket!");
                        }

                    } else if (skinInfo.unlockType == UNLOCK_TYPE.TICKET_SILVER) {
                        if (localConfig.instance.getTicketCount(TICKET_TYPE.SILVER) >= skinInfo.price) {
                            localConfig.instance.setTicketCount(TICKET_TYPE.SILVER, localConfig.instance.getTicketCount(TICKET_TYPE.SILVER) - skinInfo.price);

                            localConfig.instance.setThemeUnlocked(this.themeType, this.itemID);
                            clientEvent.dispatchEvent(Constants.THEME_UNSELECT_UPDATE, this.themeType, localConfig.instance.getThemeSelected_byThemeType(this.themeType));
                            localConfig.instance.setThemeSelected(this.themeType, this.itemID);
                            clientEvent.dispatchEvent(Constants.THEME_SELECT_UPDATE, this.themeType, this.itemID);
                        } else {
                            clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION, "Not Enough Ticket!");
                        }

                    } else if (skinInfo.unlockType == UNLOCK_TYPE.COIN) {
                        if (localConfig.instance.currCoin >= skinInfo.price) {
                            localConfig.instance.setCoin(localConfig.instance.currCoin - skinInfo.price);
                            LogEventManager.instance.logResourceSpend("currency","coin",skinInfo.price,"themepopup","unlock");

                            localConfig.instance.setThemeUnlocked(this.themeType, this.itemID);
                            LogEventManager.instance.logResourceEarned("theme","skin",this.itemID,"themepopup","exchange");
                            clientEvent.dispatchEvent(Constants.THEME_UNSELECT_UPDATE, this.themeType, localConfig.instance.getThemeSelected_byThemeType(this.themeType));
                            localConfig.instance.setThemeSelected(this.themeType, this.itemID);
                            clientEvent.dispatchEvent(Constants.THEME_SELECT_UPDATE, this.themeType, this.itemID);
                        } else {
                            clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION, "Not Enough Coin!");
                        }
                    }
                }
            }
        }
    }

    touchUnlock_Ad() {
        LogEventManager.instance.logButtonClick("unlockad", "themepopup");
        // FBInstantManager.instance.Show_RewardedVideoAsync("themepopup","unlock",(err, success) => {
        //     if (err) {

        //     } else {
        //         localConfig.instance.setThemeUnlocked(this.themeType, this.itemID);
        //         if (this.themeType == THEME_TYPE.BG) {
        //             LogEventManager.instance.logResourceEarned("theme", "bg", this.itemID, "themepopup", "watchad");
        //         } else if (this.themeType == THEME_TYPE.SKIN) {
        //             LogEventManager.instance.logResourceEarned("theme", "skin", this.itemID, "themepopup", "watchad");
        //         }
        //         clientEvent.dispatchEvent(Constants.THEME_UNSELECT_UPDATE, this.themeType, localConfig.instance.getThemeSelected_byThemeType(this.themeType));
        //         localConfig.instance.setThemeSelected(this.themeType, this.itemID);
        //         clientEvent.dispatchEvent(Constants.THEME_SELECT_UPDATE, this.themeType, this.itemID);
        //     }
        // });

        PokiSDKManager.instance.Show_RewardedVideoAsync("themepopup","unlock",(err, success) => {
            if (err) {

            } else {
                localConfig.instance.setThemeUnlocked(this.themeType, this.itemID);
                if (this.themeType == THEME_TYPE.BG) {
                    LogEventManager.instance.logResourceEarned("theme", "bg", this.itemID, "themepopup", "watchad");
                } else if (this.themeType == THEME_TYPE.SKIN) {
                    LogEventManager.instance.logResourceEarned("theme", "skin", this.itemID, "themepopup", "watchad");
                }
                clientEvent.dispatchEvent(Constants.THEME_UNSELECT_UPDATE, this.themeType, localConfig.instance.getThemeSelected_byThemeType(this.themeType));
                localConfig.instance.setThemeSelected(this.themeType, this.itemID);
                clientEvent.dispatchEvent(Constants.THEME_SELECT_UPDATE, this.themeType, this.itemID);
            }
        })
    }

    touchUnlock_TicketGold() {
        let skinInfo = localConfig.instance.getSkinInfo(this.itemID);
        if (localConfig.instance.getTicketCount(TICKET_TYPE.GOLD) >= skinInfo.price) {
            localConfig.instance.setThemeUnlocked(this.themeType, this.itemID);
            localConfig.instance.setTicketCount(TICKET_TYPE.GOLD, localConfig.instance.getTicketCount(TICKET_TYPE.GOLD) - skinInfo.price);
            clientEvent.dispatchEvent(Constants.THEME_UNSELECT_UPDATE, this.themeType, localConfig.instance.getThemeSelected_byThemeType(this.themeType));
            localConfig.instance.setThemeSelected(this.themeType, this.itemID);
            clientEvent.dispatchEvent(Constants.THEME_SELECT_UPDATE, this.themeType, this.itemID);
        } else {
            clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION, "Not Enough Ticket!");
        }
    }

    touchUnlock_TicketSilver() {
        let skinInfo = localConfig.instance.getSkinInfo(this.itemID);
        if (localConfig.instance.getTicketCount(TICKET_TYPE.SILVER) >= skinInfo.price) {
            localConfig.instance.setThemeUnlocked(this.themeType, this.itemID);
            localConfig.instance.setTicketCount(TICKET_TYPE.SILVER, localConfig.instance.getTicketCount(TICKET_TYPE.SILVER) - skinInfo.price);
            clientEvent.dispatchEvent(Constants.THEME_UNSELECT_UPDATE, this.themeType, localConfig.instance.getThemeSelected_byThemeType(this.themeType));
            localConfig.instance.setThemeSelected(this.themeType, this.itemID);
            clientEvent.dispatchEvent(Constants.THEME_SELECT_UPDATE, this.themeType, this.itemID);
        } else {
            clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION, "Not Enough Ticket!");
        }
    }

    touchUnlock_Coin() {
        LogEventManager.instance.logButtonClick("unlockcoin", "themepopup");
        let skinInfo = localConfig.instance.getSkinInfo(this.itemID);
        if (localConfig.instance.currCoin >= skinInfo.price) {
            localConfig.instance.setThemeUnlocked(this.themeType, this.itemID);
            if(this.themeType == THEME_TYPE.BG){
                LogEventManager.instance.logResourceEarned("theme","bg",this.itemID,"themepopup","exchange");
            }else if(this.themeType == THEME_TYPE.SKIN){
                LogEventManager.instance.logResourceEarned("theme","skin",this.itemID,"themepopup","exchange");
            }
            localConfig.instance.setCoin(localConfig.instance.currCoin - skinInfo.price);
            LogEventManager.instance.logResourceSpend("currency","coin",skinInfo.price,"themepopup","unlock");
            clientEvent.dispatchEvent(Constants.THEME_UNSELECT_UPDATE, this.themeType, localConfig.instance.getThemeSelected_byThemeType(this.themeType));
            localConfig.instance.setThemeSelected(this.themeType, this.itemID);
            clientEvent.dispatchEvent(Constants.THEME_SELECT_UPDATE, this.themeType, this.itemID);
        } else {
            clientEvent.dispatchEvent(Constants.SHOW_NOTIFICATION, "Not Enough Coin!");
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
