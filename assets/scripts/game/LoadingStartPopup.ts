
import { _decorator, Component, Node, tween, Tween, UIOpacity, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = LoadingStartPopup
 * DateTime = Thu Sep 12 2024 11:59:02 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = LoadingStartPopup.ts
 * FileBasenameNoExtension = LoadingStartPopup
 * URL = db://assets/scripts/game/LoadingStartPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('LoadingStartPopup')
export class LoadingStartPopup extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(UIOpacity)
    nodeOpacity:UIOpacity;

    tweenOpacity:Tween<{}> = null;

    @property(Node)
    nodeIcon:Node = null;

    @property(UIOpacity)
    nodeIconOpacity:UIOpacity = null;

    tweenIcon:Tween<{}> = null;
    tweenIconOpacity:Tween<{}> = null;

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    showLoadingStart(){
        // console.log("showLoadingStart");
        if(this.tweenOpacity != null){
            this.tweenOpacity.stop();
        }
        this.node.active = true;
        this.nodeOpacity.opacity = 0;
        this.tweenOpacity = tween(this.nodeOpacity).to(0.2,{opacity:255},{easing:'quadOut',onComplete:()=>{

        }}).start();

        if(this.tweenIcon != null){
            this.tweenIcon.stop();
        }
        this.nodeIcon.scale = new Vec3(0.5,0.5,0.5);
        this.nodeIcon.active = true;
        this.tweenIcon = tween(this.nodeIcon).to(0.2,{scale:new Vec3(1,1,1)},{easing:'backOut',onComplete:()=>{
            
        }}).start();

        if(this.tweenIconOpacity != null){
            this.tweenIconOpacity.stop();
        }
        this.nodeIconOpacity.opacity = 0;
        this.tweenIconOpacity = tween(this.nodeIconOpacity).to(0.2,{opacity:255},{easing:'quadOut',onComplete:()=>{

        }}).start();
    }

    showLoadingStartNow(){
        // console.log("showLoadingStartNow");
        this.node.active = true;
        this.nodeOpacity.opacity = 255;

        if(this.tweenIcon != null){
            this.tweenIcon.stop();
        }
        this.nodeIcon.scale = new Vec3(0.5,0.5,0.5);
        this.nodeIcon.active = true;
        this.tweenIcon = tween(this.nodeIcon).to(0.4,{scale:new Vec3(1,1,1)},{easing:'backOut',onComplete:()=>{
            
        }}).start();

        if(this.tweenIconOpacity != null){
            this.tweenIconOpacity.stop();
        }
        this.nodeIconOpacity.opacity = 0;
        this.tweenIconOpacity = tween(this.nodeIconOpacity).to(0.2,{opacity:255},{easing:'quadOut',onComplete:()=>{

        }}).start();
    }

    hideLoadingStart(){
        // console.log("hideLoadingStart");
        this.scheduleOnce(() => {
            this.hideLoadingStart_scheduleOnce();
        }, 0.3);

    }

    hideLoadingStart_scheduleOnce(){
        if(this.tweenOpacity != null){
            this.tweenOpacity.stop();
        }
        this.nodeOpacity.opacity = 255;
        this.tweenOpacity = tween(this.nodeOpacity).to(0.6,{opacity:0},{easing:'expoIn',onComplete:()=>{
            this.node.active = false;
        }}).start();

        if(this.tweenIconOpacity != null){
            this.tweenIconOpacity.stop();
        }
        this.tweenIconOpacity = tween(this.nodeIconOpacity).to(0.6,{opacity:0},{easing:'expoIn',onComplete:()=>{
            
        }}).start();
    }

    hideLoadingStartNow(){
        // console.log("hideLoadingStartNow");
        this.nodeOpacity.opacity = 0;
        this.node.active = false;
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
