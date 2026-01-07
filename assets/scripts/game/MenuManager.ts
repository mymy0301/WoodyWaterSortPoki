
import { _decorator, Button, Component, instantiate, Node, Tween, tween, Vec3 } from 'cc';
import { ItemTab } from './ItemTab';
import { Constants, SCENE_TYPE, TAB_TYPE } from '../framework/constants';
import { clientEvent } from '../framework/clientEvent';
import { HomeGroup } from './HomeGroup';
import { ShopGroup } from './ShopGroup';
import { localConfig } from '../localConfig';
import { ThemeGroup } from './ThemeGroup';
import { LeaderBoardGroup } from './LeaderBoardGroup';
import { TournamentsGroup } from './TournamentsGroup';
import { resourceUtil } from '../framework/resourceUtil';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = MenuManager
 * DateTime = Thu Sep 12 2024 17:33:45 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = MenuManager.ts
 * FileBasenameNoExtension = MenuManager
 * URL = db://assets/scripts/game/MenuManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('MenuManager')
export class MenuManager extends Component {
    @property(ItemTab)
    arrItemTabs:ItemTab[] = [];
    
    currTab:TAB_TYPE = null;

   

    @property(HomeGroup)
    homeGroup:HomeGroup = null;

    @property(Node)
    nodeShopGroup:Node = null;
    // @property(ShopGroup)
    shopGroup:ShopGroup = null;

    @property(Node)
    nodeThemeGroup:Node = null;
    // @property(ThemeGroup)
    themeGroup:ThemeGroup = null;

    @property(Node)
    nodeLeaderBoardGroup:Node = null;
    // @property(LeaderBoardGroup)
    leaderBoardGroup:LeaderBoardGroup = null;

    @property(Node)
    nodeTournamentsGroup:Node = null;
    // @property(TournamentsGroup)
    tournamentsGroup:TournamentsGroup = null;

    @property(Node)
    contentGroup:Node = null;

    @property(Node)
    nodeLoading:Node = null;

    @property(Node)
    lockGroup:Node = null;

    protected onEnable(): void {
        clientEvent.on(Constants.TOUCH_TAB,this.touchTab,this);

        clientEvent.on(Constants.SHOW_SHOP_GROUP,this.showShopGroup,this);
        clientEvent.on(Constants.GOTO_TOURNAMENT,this.goToTournament,this);
        
        localConfig.instance.currSceneType = SCENE_TYPE.MENU;
    }

    protected onDisable(): void {
        clientEvent.off(Constants.TOUCH_TAB,this.touchTab,this);

        clientEvent.off(Constants.GOTO_TOURNAMENT,this.goToTournament,this);

        clientEvent.off(Constants.SHOW_SHOP_GROUP,this.showShopGroup,this);
    }

    start () {
        // [3]
        // clientEvent.dispatchEvent(Constants.TAB_UPDATE,TAB_TYPE.HOME);
        // this.showTab(this.currTab);
        this.lockGroup.active = false;
    }


    touchTab(tabType:TAB_TYPE){
        if(this.currTab != tabType){
            if(this.currTab == TAB_TYPE.HOME){
                if(this.homeGroup.node.active){
                    this.homeGroup.setHide();
                }
            }else if(this.currTab == TAB_TYPE.SHOP){
                if(this.shopGroup && this.shopGroup.node.active){
                    this.shopGroup.setHide();
                }
            }else if(this.currTab == TAB_TYPE.THEME){
                if(this.themeGroup && this.themeGroup.node.active){
                    this.themeGroup.setHide();
                }
            }else if(this.currTab == TAB_TYPE.LEADERBOARD){
                if( this.leaderBoardGroup && this.leaderBoardGroup.node.active){
                    this.leaderBoardGroup.setHide();
                }
            }else if(this.currTab == TAB_TYPE.TOURNAMENT){
                if(this.tournamentsGroup && this.tournamentsGroup.node.active){
                    this.tournamentsGroup.setHide();
                }
            }
            this.currTab = tabType;
            clientEvent.dispatchEvent(Constants.TAB_UPDATE,this.currTab);
            this.changeTab();
        }
    }

    showTab(tabType:TAB_TYPE){
        this.homeGroup.node.active = false;
        if(this.shopGroup){
            this.shopGroup.node.active = false;
        }
        if(this.themeGroup){
            this.themeGroup.node.active = false;
        }
        if(this.leaderBoardGroup){
            this.leaderBoardGroup.node.active = false;
        }
        if(this.tournamentsGroup){
            this.tournamentsGroup.node.active = false;
        }
        if(tabType == TAB_TYPE.HOME){
            this.homeGroup.node.active = true;
            this.homeGroup.showGroup();
        }else if(tabType == TAB_TYPE.SHOP){
            if(this.shopGroup){
                this.shopGroup.node.active = true;
                this.shopGroup.showGroup();
            }else{
                this.loadShopGroup();
            }
        }else if(tabType == TAB_TYPE.THEME){
            if(this.themeGroup){
                this.themeGroup.node.active = true;
                this.themeGroup.showGroup();
            }else{
                this.loadThemeGroup();
            }
        }else if(tabType == TAB_TYPE.LEADERBOARD){
            if(this.leaderBoardGroup){
                this.leaderBoardGroup.node.active = true;
                this.leaderBoardGroup.showGroup();
            }else{
                this.loadLeaderBoardGroup();
            }
        }else if(tabType == TAB_TYPE.TOURNAMENT){
            if(this.tournamentsGroup){
                this.tournamentsGroup.node.active = true;
                this.tournamentsGroup.showGroup();
            }else{
                this.loadTournamentsGroup();
            }
        }
    }

    tweenMoveContentTab:Tween<{}> = null;

    changeTab(){
        this.lockGroup.active = true;
        if(this.currTab == TAB_TYPE.HOME){
            this.homeGroup.node.active = true;
            this.homeGroup.setShow();
        }else if(this.currTab == TAB_TYPE.SHOP){
            if(this.shopGroup){
                this.shopGroup.node.active = true;
                this.shopGroup.setShow();
            }
        }else if(this.currTab == TAB_TYPE.THEME){
            if(this.themeGroup){
                this.themeGroup.node.active = true;
                this.themeGroup.setShow();
            }
        }else if(this.currTab == TAB_TYPE.LEADERBOARD){
            if(this.leaderBoardGroup){
                this.leaderBoardGroup.node.active = true;
                this.leaderBoardGroup.setShow();
            }
        }else if(this.currTab == TAB_TYPE.TOURNAMENT){
            if(this.tournamentsGroup){
                this.tournamentsGroup.node.active = true;
                this.tournamentsGroup.setShow();
            }
        }


        let posX:number = (2 - this.currTab) * 1080;
        this.tweenMoveContentTab = tween(this.contentGroup).to(0.5, { position: new Vec3(posX, 0, 0) }, { easing: 'quadOut', onComplete: () => { 
            this.showTab(this.currTab);

            this.lockGroup.active = false;
        } }).start();
        
        // this.scheduleOnce(()=>{
           
        // },0.2);
    }

    showShopGroup(){
        this.touchTab(TAB_TYPE.SHOP);
    }

    showTabHome(){
        if(this.currTab == TAB_TYPE.HOME){
            this.homeGroup.node.active = true;
            this.homeGroup.showGroup();
        }else{
            clientEvent.dispatchEvent(Constants.TAB_UPDATE,TAB_TYPE.HOME);
            this.touchTab(TAB_TYPE.HOME);
        }
    }

    showTableaderBoard(){
        this.touchTab(TAB_TYPE.LEADERBOARD);
    }

    showTabTournament(){
        if(this.currTab == TAB_TYPE.TOURNAMENT){
            this.tournamentsGroup.showGroup();
        }else{
            clientEvent.dispatchEvent(Constants.TAB_UPDATE,TAB_TYPE.TOURNAMENT);
            this.touchTab(TAB_TYPE.TOURNAMENT);
        }
    }



    loadShopGroup(){
        let self = this;
        if(this.shopGroup == null){
            this.lockGroup.active = true;
            this.nodeLoading.active = true;
            resourceUtil.loadPrefabUI_Bundle("ShopGroup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeShopGroup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.shopGroup = uiPopup.getComponent(ShopGroup);
                self.shopGroup.showGroup();
                self.shopGroup.setShow();
                self.nodeLoading.active = false;
                self.lockGroup.active = false;
            });
        }
    }

    loadThemeGroup(){
        let self = this;
        if(this.themeGroup == null){
            this.lockGroup.active = true;
            this.nodeLoading.active = true;
            resourceUtil.loadPrefabUI_Bundle("ThemeGroup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeThemeGroup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.themeGroup = uiPopup.getComponent(ThemeGroup);
                self.themeGroup.showGroup();
                self.themeGroup.setShow();
                self.nodeLoading.active = false;
                self.lockGroup.active = false;
            });
        }    
    }

    loadLeaderBoardGroup(){
        let self = this;
        if(this.leaderBoardGroup == null){
            this.lockGroup.active = true;
            this.nodeLoading.active = true;
            resourceUtil.loadPrefabUI_Bundle("LeaderBoardGroup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeLeaderBoardGroup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.leaderBoardGroup = uiPopup.getComponent(LeaderBoardGroup);
                self.leaderBoardGroup.showGroup();
                self.leaderBoardGroup.setShow();
                self.nodeLoading.active = false;
                self.lockGroup.active = false;
            });
        }    
    }

    loadTournamentsGroup(){
        let self = this;
        if(this.tournamentsGroup == null){
            this.lockGroup.active = true;
            this.nodeLoading.active = true;
            resourceUtil.loadPrefabUI_Bundle("TournamentsGroup", (err, uiPrefab) => {
                let uiPopup = instantiate(uiPrefab);
                uiPopup.setParent(self.nodeTournamentsGroup);
                uiPopup.setPosition(new Vec3(0, 0, 0));

                self.tournamentsGroup = uiPopup.getComponent(TournamentsGroup);
                self.tournamentsGroup.showGroup();
                self.tournamentsGroup.setShow();
                self.nodeLoading.active = false;
                self.lockGroup.active = false;
            });
        }    
    }

    goToTournament(){
        this.touchTab(TAB_TYPE.TOURNAMENT);
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
