
import { _decorator, Button, Component, Label, Node, tween, Tween, Vec3 } from 'cc';
import { CountDownToNextTime } from '../common/CountDownToNextTime';
import { CountDownTimeHeart } from '../common/CountDownTimeHeart';
import { clientEvent } from '../framework/clientEvent';
import { Constants } from '../framework/constants';
import { localConfig } from '../localConfig';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = HeartGroup
 * DateTime = Wed May 07 2025 14:39:36 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = HeartGroup.ts
 * FileBasenameNoExtension = HeartGroup
 * URL = db://assets/scripts/game/HeartGroup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('HeartGroup')
export class HeartGroup extends Component {
    @property(Node)
    nodeHeart: Node;

    @property(Label)
    txtCountHeart: Label;

    @property(Node)
    nodeHeartUnlimited: Node;

    @property(Node)
    nodeFull: Node;

    @property(CountDownTimeHeart)
    countDownTimeHeart: CountDownTimeHeart;

    @property(Node)
    groupHeart: Node;

    @property(Button)
    btnAdd:Button;


    tweenUpdate:Tween<{}> = null;
    onLoad(){
        this.tweenUpdate = tween(this.groupHeart).to(0.1,{scale: new Vec3(1.1,1.1,1.1)},{easing:'linear'}).to(0.1,{scale: new Vec3(1,1,1)},{easing:'linear'}).union().repeat(3);
    }

    onEnable(){
        clientEvent.on(Constants.HEART_UPDATE,this.heartUpdate,this);
        if(this.btnAdd){
            this.btnAdd.node.on(Constants.CLICK,this.touchAddHeart,this);
        }

        this.initInfo();
    }   

    onDisable(){
        clientEvent.off(Constants.HEART_UPDATE,this.heartUpdate,this);
        if(this.btnAdd){
            this.btnAdd.node.off(Constants.CLICK,this.touchAddHeart,this);
        }
    }

    start () {
        // [3]
        
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    initInfo(){

        // console.log(localConfig.instance.currHeartUnlimited_CountTime);
        // console.log(localConfig.instance.currHeart,localConfig.instance.currHeart_CountTime);
        if(localConfig.instance.currHeartUnlimited_CountTime > 0){
            this.nodeHeart.active = false;
            this.nodeHeartUnlimited.active = true;
            this.nodeFull.active = false;
            this.countDownTimeHeart.node.active = true;
            this.countDownTimeHeart.initCountDownTime(localConfig.instance.currHeartUnlimited_CountTime,()=>{});
            if(this.btnAdd){
                this.btnAdd.node.active = false;
            }
        }else{
            if(localConfig.instance.currHeart >= localConfig.instance.HEART_MAX_COUNT){
                this.nodeHeart.active = true;
                this.nodeHeartUnlimited.active = false;
                this.nodeFull.active = true;
                this.txtCountHeart.string = `${localConfig.instance.currHeart}`;
                this.countDownTimeHeart.node.active = false;
                if(this.btnAdd){
                    this.btnAdd.node.active = false;
                }
            }else{
                this.nodeHeart.active = true;
                this.nodeHeartUnlimited.active = false;
                this.nodeFull.active = false;
                this.txtCountHeart.string = `${localConfig.instance.currHeart}`;
                this.countDownTimeHeart.node.active = true;
                this.countDownTimeHeart.initCountDownTime(localConfig.instance.currHeart_CountTime,()=>{});
                if(this.btnAdd){
                    this.btnAdd.node.active = true;
                }

            }
        }
    }

    heartUpdate(){
        this.initInfo();
        this.groupHeart.setScale(new Vec3(1,1,1));
        this.tweenUpdate.stop();
        this.tweenUpdate.start().call(()=>{
            this.groupHeart.setScale(new Vec3(1,1,1));
        });
    }

    touchAddHeart(){
        clientEvent.dispatchEvent(Constants.SHOW_MORELIVES_POPUP,()=>{});
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
