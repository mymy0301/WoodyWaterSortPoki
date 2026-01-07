
import { _decorator, Button, Component, Enum, Node, Sprite, SpriteFrame, tween, Tween, Vec3 } from 'cc';
import { Constants, TAB_TYPE } from '../framework/constants';
import { clientEvent } from '../framework/clientEvent';
import { LogEventManager } from '../common/LogEventManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemTab
 * DateTime = Thu Sep 12 2024 17:18:39 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemTab.ts
 * FileBasenameNoExtension = ItemTab
 * URL = db://assets/scripts/game/ItemTab.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemTab')
export class ItemTab extends Component {
    @property({type:Enum(TAB_TYPE)})
    tabType:TAB_TYPE = TAB_TYPE.HOME;

    @property(Button)
    btnTab:Button;

    @property(Node)
    nodeON:Node;

    @property(Node)
    nodeOFF:Node;

    @property(Sprite)
    bg:Sprite;

    @property(SpriteFrame)
    arrSfBgs:SpriteFrame[] = [];

    @property(Sprite)
    icon:Sprite;

    @property(SpriteFrame)
    arrSfIcons:SpriteFrame[] = [];

    @property(Vec3)
    arrPos:Vec3[] = [];

    tweenBG_ON:Tween<{}> = null;
    tweenBG_OFF:Tween<{}> = null;

    tweenICON_ON:Tween<{}> = null;
    tweenICON_OFF:Tween<{}> = null;

    tweenMove:Tween<{}> = null;

    protected onEnable(): void {
        this.btnTab.node.on(Constants.CLICK,this.touchTab,this);
        clientEvent.on(Constants.TAB_UPDATE,this.showTab,this);
    }

    protected onDisable(): void {
        this.btnTab.node.off(Constants.CLICK,this.touchTab,this);
        clientEvent.off(Constants.TAB_UPDATE,this.showTab,this);
    }

    resetTween(){
        this.tweenBG_ON?.stop();
        this.tweenBG_OFF?.stop();
        this.tweenICON_ON?.stop();
        this.tweenICON_OFF?.stop();
        this.tweenMove?.stop();
    }

    isTabON:boolean = false;
    setItemON(){
        this.isTabON = true;
        // this.nodeON.active = true;
        // this.nodeOFF.active = false;
        this.resetTween();

        this.bg.spriteFrame = this.arrSfBgs[1];
        this.bg.node.setScale(new Vec3(0.7,0.9,1));
        this.icon.spriteFrame = this.arrSfIcons[1];
        this.icon.node.setScale(new Vec3(0.68,0.68,1));
        this.icon.node.setPosition(new Vec3(0,5,0));
        this.tweenBG_ON = tween(this.bg.node).to(0.15, { scale: new Vec3(1, 1, 1) }, { easing: 'quadOut', onComplete: () => { } }).start();
        this.tweenICON_ON = tween(this.icon.node).to(0.15, { scale: new Vec3(1, 1, 1),position:new Vec3(0,40,0) }, { easing: 'quadOut', onComplete: () => { } }).start();
    }

    setItemOff(){

        // this.nodeON.active = false;
        // this.nodeOFF.active = true;
        if(this.isTabON){
            this.isTabON = false;
            this.resetTween();
            this.bg.spriteFrame = this.arrSfBgs[0];
            this.bg.node.setScale(new Vec3(1.3,1.1,1));
            this.icon.spriteFrame = this.arrSfIcons[0];
            this.icon.node.setScale(new Vec3(1.5,1.5,1));
            this.icon.node.setPosition(new Vec3(0,40,0));

            this.tweenBG_OFF = tween(this.bg.node).to(0.15, { scale: new Vec3(1, 1, 1) }, { easing: 'quadOut', onComplete: () => { } }).start();
            this.tweenICON_OFF = tween(this.icon.node).to(0.15, { scale: new Vec3(1, 1, 1),position:new Vec3(0,5,0) }, { easing: 'quadOut', onComplete: () => { } }).start();
        }
    }

    touchTab(){
        if(this.tabType == TAB_TYPE.HOME){
            LogEventManager.instance.logButtonClick("home","home");
        }else if(this.tabType == TAB_TYPE.SHOP){
            LogEventManager.instance.logButtonClick("shop","home");
        }else if(this.tabType == TAB_TYPE.THEME){
            LogEventManager.instance.logButtonClick("theme","home");
        }else if(this.tabType == TAB_TYPE.LEADERBOARD){
            LogEventManager.instance.logButtonClick("leaderboard","home");
        }else if(this.tabType == TAB_TYPE.TOURNAMENT){
            LogEventManager.instance.logButtonClick("tournament","home");
        }

        clientEvent.dispatchEvent(Constants.TOUCH_TAB,this.tabType);
    }

    showTab(currTab:TAB_TYPE){
        if(this.tabType == currTab){
            this.setItemON();
        }else{
            this.setItemOff();
        }
        // this.updatePos(currTab);
        this.tweenMove = tween(this.node).to(0.2, { position: this.arrPos[currTab] }, { easing: 'quadOut', onComplete: () => { } }).start();
    }

    updatePos(indexTab:number){
        this.node.setPosition(this.arrPos[indexTab]);
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
