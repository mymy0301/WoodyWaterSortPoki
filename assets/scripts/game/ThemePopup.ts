
import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { BasePopup } from '../common/basePopup';
import { Constants, THEME_TYPE } from '../framework/constants';
import { clientEvent } from '../framework/clientEvent';
import { LogEventManager } from '../common/LogEventManager';
import { localConfig } from '../localConfig';
import { ItemTheme } from './ItemTheme';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ThemePopup
 * DateTime = Thu Jan 08 2026 11:32:39 GMT+0700 (Indochina Time)
 * Author = MyTom2k17
 * FileBasename = ThemePopup.ts
 * FileBasenameNoExtension = ThemePopup
 * URL = db://assets/scripts/game/ThemePopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ThemePopup')
export class ThemePopup extends BasePopup {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Prefab)
    itemThemePrefab: Prefab = null;

    @property(Node)
    contentGroup: Node = null;

    currThemeType: THEME_TYPE = null;

    onEnable(): void {
        super.onEnable();
        clientEvent.on(Constants.TOUCH_TABTHEME,this.touchTabTheme,this);
    }

    onDisable(): void {
        super.onDisable();
        clientEvent.off(Constants.TOUCH_TABTHEME,this.touchTabTheme,this);
    }

    start () {
        // [3]
        this.currThemeType = THEME_TYPE.SKIN;
        this.showTab();
    }

    showThemePopup() {
        super.showPopup();
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    touchTabTheme(themeType: THEME_TYPE) {
        if (themeType == THEME_TYPE.SKIN) {
            LogEventManager.instance.logButtonClick("tabskin", "themepopup");
        } else if (themeType == THEME_TYPE.BG) {
            LogEventManager.instance.logButtonClick("tabbg", "themepopup");
        }
        if (this.currThemeType != themeType) {
            this.currThemeType = themeType;
            clientEvent.dispatchEvent(Constants.TABTHEME_UPDATE, this.currThemeType);

            this.showTab();
        }
    }

    showTab() {
        this.contentGroup.destroyAllChildren();
        // if(this.currThemeType == THEME_TYPE.TUBE){
        //     for(let i= 0; i< localConfig.instance.arrUnlockProgressInfo_Tubes.length;i++){
        //         let item = instantiate(this.itemThemePrefab);
        //         item.setParent(this.contentGroup);
        //         let itemTheme:ItemTheme = item.getComponent(ItemTheme);
        //         itemTheme.initInfo(THEME_TYPE.TUBE,localConfig.instance.arrUnlockProgressInfo_Tubes[i].itemID);
        //     }
        // }else 
        if (this.currThemeType == THEME_TYPE.BG) {
            for (let i = 0; i < localConfig.instance.arrUnlockProgressInfo_BGs.length; i++) {
                let item = instantiate(this.itemThemePrefab);
                item.setParent(this.contentGroup);
                let itemTheme: ItemTheme = item.getComponent(ItemTheme);
                itemTheme.initInfo(THEME_TYPE.BG, localConfig.instance.arrUnlockProgressInfo_BGs[i].itemID);
            }
        } else if (this.currThemeType == THEME_TYPE.SKIN) {
            for (let i = 0; i < localConfig.instance.arrSkinInfos.length; i++) {
                let item = instantiate(this.itemThemePrefab);
                item.setParent(this.contentGroup);
                let itemTheme: ItemTheme = item.getComponent(ItemTheme);
                itemTheme.initInfo(THEME_TYPE.SKIN, localConfig.instance.arrSkinInfos[i].id);
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
