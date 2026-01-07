
import { _decorator, Button, Color, Component, Label, LabelOutline, Node, Sprite, SpriteFrame, tween, UIOpacity, Vec3 } from 'cc';
import { InfoDay } from '../common/InfoDay';
import { localConfig } from '../localConfig';
import { Constants } from '../framework/constants';
import { clientEvent } from '../framework/clientEvent';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemDailyChallenge
 * DateTime = Tue Oct 01 2024 09:28:40 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemDailyChallenge.ts
 * FileBasenameNoExtension = ItemDailyChallenge
 * URL = db://assets/scripts/game/ItemDailyChallenge.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemDailyChallenge')
export class ItemDailyChallenge extends Component {
    @property(Label)
    txtInfo: Label = null;

    @property(Label)
    txtInfoDisable: Label = null;

    @property(Label)
    txtInfoSelect: Label = null;


    @property(Button)
    btn:Button = null;

    @property(Sprite)
    bg:Sprite = null;

    @property(SpriteFrame)
    sf_select:SpriteFrame;

    @property(SpriteFrame)
    sf_nonselect:SpriteFrame;

    @property(Node)
    nodeFinished:Node = null;

    @property(UIOpacity)
    nodeFinished_Opacity:UIOpacity = null;

    @property(Node)
    nodeNotify:Node = null;
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    infoDay:InfoDay = null;

    isSelect:boolean = false;

    protected onEnable(): void {
        this.btn.node.on(Button.EventType.CLICK, this.touchItemDailyChallenge, this);
    }

    protected onDisable(): void {
        this.btn.node.off(Button.EventType.CLICK, this.touchItemDailyChallenge, this);
    }

    initItemDailyChallenge(info:InfoDay){
        this.infoDay = info;
        this.txtInfo.string = `${this.infoDay.day}`;
        this.txtInfoDisable.string = `${this.infoDay.day}`;
        this.txtInfoSelect.string = `${this.infoDay.day}`;
        let dateCheck:Date = new Date(this.infoDay.year,this.infoDay.month,this.infoDay.day);
        let dayOfWeek:number = dateCheck.getDay();
        let weekofMonth:number = Math.ceil((this.infoDay.day - 1 - dayOfWeek) / 7);

        let posX = (dayOfWeek - 3) * localConfig.instance.CALENDAR_X;
        let posY = -50 - weekofMonth * localConfig.instance.CALENDAR_Y;
        this.node.setPosition(new Vec3(posX,posY,0));
    }

    showItem(){
        let isFinished:boolean = localConfig.instance.checkInfoDailyChallengeFinished(this.infoDay);
        if(isFinished){
            this.nodeFinished.active = true;
        }else{
            this.nodeFinished.active = false;
        }
        this.nodeNotify.active = false;
        if(localConfig.instance.checkSameInfoDay(localConfig.instance.currInfoDay,this.infoDay)){
           if(!isFinished){
               this.nodeNotify.active = true;
           } 
        }
        if(this.infoDay.year == localConfig.instance.currInfoDay.year && this.infoDay.month == localConfig.instance.currInfoDay.month && this.infoDay.day > localConfig.instance.currInfoDay.day){
            this.btn.interactable = false;
            this.bg.grayscale = true;
            if(!this.isSelect){
                this.txtInfoDisable.node.active = true;
                this.txtInfo.node.active = false;
            }
        }else {
            this.btn.interactable = true;
            this.bg.grayscale = false;
            if(!this.isSelect){
                this.txtInfoDisable.node.active = false;
                this.txtInfo.node.active = true;
            }
        }


    }

    setSelectDay(_infoDay:InfoDay){
        // console.log(_infoDay,this.infoDay);
        if(this.infoDay.year == _infoDay.year && this.infoDay.month == _infoDay.month && this.infoDay.day == _infoDay.day){
            this.isSelect = true;
            this.bg.spriteFrame = this.sf_select;
        }else{
            this.bg.spriteFrame = this.sf_nonselect;
            this.isSelect = false;
        }
        this.txtInfoSelect.node.active = this.isSelect;
        this.txtInfoDisable.node.active = false;
        this.txtInfo.node.active = false;
        this.showItem();
    }


    touchItemDailyChallenge(){
        // console.log(this);
        clientEvent.dispatchEvent(Constants.DAILYCHALLENGE_TOUCH_SELECT_DAY,this.infoDay,this);
    }

    setFinished(){
        this.node.setSiblingIndex(999);
        this.nodeNotify.active = false;

        this.nodeFinished.active = true;
        this.nodeFinished.setScale(new Vec3(3,3,3));
        this.nodeFinished_Opacity.opacity = 0;
        
        tween(this.nodeFinished).to(0.3, { scale: new Vec3(1, 1, 1) }, { easing: 'bounceOut', onComplete: () => { } }).start();
        tween(this.nodeFinished_Opacity).to(0.1, { opacity: 255 }, { easing: 'quadOut', onComplete: () => { } }).start();

        localConfig.instance.addInfoDayFinished(this.infoDay);
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
