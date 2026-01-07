
import { _decorator, Component, Enum, Node, tween, UIOpacity, Vec3 } from 'cc';
import { lodash } from '../framework/lodash';
import { configuration } from '../framework/configuration';
import { TICKET_TYPE } from '../framework/constants';
import { localConfig } from '../localConfig';
import { AudioManager2 } from '../framework/audioManager2';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemTicket
 * DateTime = Wed Sep 11 2024 11:11:56 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemTicket.ts
 * FileBasenameNoExtension = ItemTicket
 * URL = db://assets/scripts/game/ItemTicket.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemTicket')
export class ItemTicket extends Component {
    @property({type:Enum(TICKET_TYPE)})
    ticketType:TICKET_TYPE = TICKET_TYPE.GOLD;

    @property(Node)
    icon:Node;

    @property(UIOpacity)
    icon_UIOpacity:UIOpacity;

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    targetPos:Vec3 = new Vec3(0,0,0);
    ticketValue:number;
    delayTimetoTagert:number;
    initTicket(_coinValue:number,_posStart:Vec3,_targetPos:Vec3,_delayTimeToTarget:number){
        this.ticketValue = _coinValue; 
        this.targetPos = _targetPos;
        this.delayTimetoTagert = _delayTimeToTarget;
        // console.log("this.targetPos:"+this.targetPos);
        this.node.setPosition(_posStart);
        this.node.active = true;
        this.showTicket();
    }

    showTicket(){
        let self = this;
        this.icon_UIOpacity.opacity = 0;
        this.node.setScale(new Vec3(0,0,0));
        this.node.eulerAngles = new Vec3(0,0,lodash.random(0,90));
        tween(this.icon_UIOpacity).to(0.3,{opacity: 255}, { easing: 'quadOut',onComplete:()=>{
            
        }}).start();

        tween(this.node).to(0.3,{scale: new Vec3(1,1,1),position:new Vec3(this.node.position.x + lodash.random(-150,150),this.node.position.y + lodash.random(-150,150),0)}, { easing: 'backOut',onComplete:()=>{
            self.moveToTarget();
        }}).start();
    }

    initTicket2(_coinValue:number,_posStart:Vec3,_targetPos:Vec3,_delayTimeToTarget:number){
        this.ticketValue = _coinValue; 
        this.targetPos = _targetPos;
        this.delayTimetoTagert = _delayTimeToTarget;
        // console.log("this.targetPos:"+this.targetPos);
        this.node.setPosition(_posStart);
        this.node.active = true;
        this.showTicket2();
    }

    showTicket2(){
        let self = this;
        this.icon_UIOpacity.opacity = 0;
        this.node.setScale(new Vec3(0,0,0));
        this.node.setRotationFromEuler(new Vec3(0,0,45));
        tween(this.icon_UIOpacity).to(0.3,{opacity: 255}, { easing: 'quadOut',onComplete:()=>{
            
        }}).start();

        tween(this.node).to(0.3,{eulerAngles: new Vec3(0,0,0)}, { easing: 'bounceOut',onComplete:()=>{

        }}).start();

        tween(this.node).to(0.3,{scale: new Vec3(0.8,0.8,0.8)}, { easing: 'backOut',onComplete:()=>{
            self.moveToTarget();
        }}).start();
    }


    moveToTarget(){
        let self = this;
        // console.log("moveToTargetmoveToTarget");
        tween(this.node).delay(0.2 + this.delayTimetoTagert).to(lodash.randomFloat(0.5,0.6),{position: this.targetPos}, { easing: 'backIn',onComplete:()=>{
            AudioManager2.instance.playSound_Coin_Receive();
            self.node.active = false;
            localConfig.instance.setTicketCount(this.ticketType,localConfig.instance.getTicketCount(this.ticketType) + this.ticketValue);
        }}).start();

        tween(this.node).delay(0.2 + this.delayTimetoTagert).to(0.4,{eulerAngles: new Vec3(0,0,0)}, { easing: 'backIn',onComplete:()=>{
            
        }}).start();

        tween(this.icon_UIOpacity).delay(0.2 + this.delayTimetoTagert).to(0.5,{opacity: 200}, { easing: 'linear',onComplete:()=>{
            
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
