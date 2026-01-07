
import { _decorator, Component, instantiate, Node, Prefab, tween, Tween, UIOpacity, Widget } from 'cc';
import { Constants, THEME_TYPE } from '../framework/constants';
import { clientEvent } from '../framework/clientEvent';
import { localConfig } from '../localConfig';
import { ItemTheme } from './ItemTheme';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ThemeGroup
 * DateTime = Fri Oct 11 2024 17:22:49 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ThemeGroup.ts
 * FileBasenameNoExtension = ThemeGroup
 * URL = db://assets/scripts/game/ThemeGroup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ThemeGroup')
export class ThemeGroup extends Component {
    @property(Widget)
    groupAllTopWidget:Widget;

    @property(Widget)
    groupAllContentWidget:Widget;

    @property(Widget)
    scrollViewWidget:Widget;

    @property(UIOpacity)
    groupOpacity:UIOpacity = null;

    tweenGroup:Tween<{}> = null;
    @property(Prefab)
    itemThemePrefab:Prefab = null;

    @property(Node)
    contentGroup:Node = null;

    currThemeType:THEME_TYPE = null;

    protected onEnable(): void {
        clientEvent.on(Constants.TOUCH_TABTHEME,this.touchTabTheme,this);
    }

    protected onDisable(): void {
        clientEvent.off(Constants.TOUCH_TABTHEME,this.touchTabTheme,this);

        // clientEvent.dispatchEvent(Constants.THEME_SELECTED_UPDATE);
        this.contentGroup.active = false;
    }

    initAllTop(){
        // console.log("initAllTop ThemeGroup");
        if(localConfig.instance.isMobile){
            
            let posY = (localConfig.instance.scaleBG - 1) * localConfig.instance.DEFAULT_H / 2 ;
            // console.log("posY:"+posY);
            if(posY <= 0) {
                this.groupAllTopWidget.top = 0;
                this.groupAllContentWidget.top = 0;
                this.scrollViewWidget.bottom = 372.25;
                return;
            }
            this.groupAllTopWidget.top = -posY;
            this.groupAllContentWidget.top = -posY;
            this.scrollViewWidget.bottom = 372.25 - posY;
        }else{
            this.groupAllTopWidget.top = 0;
            this.groupAllContentWidget.top = 0;
            this.scrollViewWidget.bottom = 372.25;
        }
    }

    start () {
        // [3]
        this.initAllTop();
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
    showGroup(){
        this.contentGroup.active = true;
        if(this.currThemeType == null){
            this.currThemeType = THEME_TYPE.SKIN;
            clientEvent.dispatchEvent(Constants.TABTHEME_UPDATE,THEME_TYPE.SKIN);
            this.showTab();
        }
    }

    touchTabTheme(themeType:THEME_TYPE){
        if(themeType == THEME_TYPE.SKIN){
            LogEventManager.instance.logButtonClick("tabskin","themepopup");
        }else if(themeType == THEME_TYPE.BG){
            LogEventManager.instance.logButtonClick("tabbg","themepopup");
        }
        if(this.currThemeType != themeType){
            this.currThemeType = themeType;
            clientEvent.dispatchEvent(Constants.TABTHEME_UPDATE,this.currThemeType);

            this.showTab();
        }
    }

    showTab(){
        this.contentGroup.destroyAllChildren();
        // if(this.currThemeType == THEME_TYPE.TUBE){
        //     for(let i= 0; i< localConfig.instance.arrUnlockProgressInfo_Tubes.length;i++){
        //         let item = instantiate(this.itemThemePrefab);
        //         item.setParent(this.contentGroup);
        //         let itemTheme:ItemTheme = item.getComponent(ItemTheme);
        //         itemTheme.initInfo(THEME_TYPE.TUBE,localConfig.instance.arrUnlockProgressInfo_Tubes[i].itemID);
        //     }
        // }else 
        if(this.currThemeType == THEME_TYPE.BG){
            for(let i= 0; i< localConfig.instance.arrUnlockProgressInfo_BGs.length;i++){
                let item = instantiate(this.itemThemePrefab);
                item.setParent(this.contentGroup);
                let itemTheme:ItemTheme = item.getComponent(ItemTheme);
                itemTheme.initInfo(THEME_TYPE.BG,localConfig.instance.arrUnlockProgressInfo_BGs[i].itemID);
            }
        }else if(this.currThemeType == THEME_TYPE.SKIN){
            for(let i= 0; i< localConfig.instance.arrSkinInfos.length;i++){
                let item = instantiate(this.itemThemePrefab);
                item.setParent(this.contentGroup);
                let itemTheme:ItemTheme = item.getComponent(ItemTheme);
                itemTheme.initInfo(THEME_TYPE.SKIN,localConfig.instance.arrSkinInfos[i].id);
            }
        }
    }

    setShow(){
        if(this.tweenGroup != null){    
            this.tweenGroup.stop();
        }
        this.tweenGroup = tween(this.groupOpacity).to(0.2,{opacity:255},{easing:'linear',onComplete:()=>{}}).start();
    }

    setHide(){
        if(this.tweenGroup != null){
            this.tweenGroup.stop();
        }
        this.tweenGroup = tween(this.groupOpacity).to(0.2,{opacity:0},{easing:'linear',onComplete:()=>{
            
        }}).start();
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
