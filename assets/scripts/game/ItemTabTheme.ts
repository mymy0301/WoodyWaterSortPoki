
import { _decorator, Button, Component, Enum, Node, Sprite, SpriteFrame, Tween, tween, Vec3 } from 'cc';
import { Constants, THEME_TYPE } from '../framework/constants';
import { clientEvent } from '../framework/clientEvent';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemTabTheme
 * DateTime = Thu Oct 10 2024 17:51:54 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemTabTheme.ts
 * FileBasenameNoExtension = ItemTabTheme
 * URL = db://assets/scripts/game/ItemTabTheme.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemTabTheme')
export class ItemTabTheme extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property({type:Enum(THEME_TYPE)})
    tabType:THEME_TYPE = THEME_TYPE.TUBE;

    @property(Button)
    btnTab:Button;

    @property(Sprite)
    bg:Sprite;

    @property(SpriteFrame)
    sfON:SpriteFrame;

    @property(SpriteFrame)
    sfOFF:SpriteFrame;

    @property(Node)
    nodeActive:Node = null;

    @property(Node)
    nodeDeactive:Node = null;

    protected onEnable(): void {
        this.btnTab.node.on(Constants.CLICK,this.touchTab,this);
        clientEvent.on(Constants.TABTHEME_UPDATE,this.showTab,this);
    }

    protected onDisable(): void {
        this.btnTab.node.off(Constants.CLICK,this.touchTab,this);
        clientEvent.off(Constants.TABTHEME_UPDATE,this.showTab,this);
    }

    tweenMove:Tween<{}> = null;
    setItemON(){
        this.bg.spriteFrame = this.sfON;
        // tween(this.node).to(0.15, { position: new Vec3(this.node.position.x, 0, 0) }, { easing: 'quadOut', onComplete: () => { } }).start();
        this.nodeActive.active = true;
        this.nodeDeactive.active = false;
    }

    setItemOff(){
        this.bg.spriteFrame = this.sfOFF;
        // tween(this.node).to(0.15, { position: new Vec3(this.node.position.x, -5, 0) }, { easing: 'quadOut', onComplete: () => { } }).start();
        this.nodeActive.active = false;
        this.nodeDeactive.active = true;
    }

    touchTab(){
        clientEvent.dispatchEvent(Constants.TOUCH_TABTHEME,this.tabType);
    }

    showTab(currTab:THEME_TYPE){
        if(this.tabType == currTab){
            this.setItemON();
        }else{
            this.setItemOff();
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
