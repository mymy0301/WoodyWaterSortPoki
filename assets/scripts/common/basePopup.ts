
import { _decorator, Component, Node, tween, Vec3, Button, UIOpacity, CCBoolean, Tween } from 'cc';
import { AudioManager2 } from '../framework/audioManager2';
import { Constants } from '../framework/constants';
import { localConfig } from '../localConfig';
const { ccclass, property } = _decorator;

@ccclass('BasePopup')
export class BasePopup extends Component {
    
    @property(CCBoolean)
    isTweenPopup:boolean = true;

    @property(UIOpacity)
    bgOpacity:UIOpacity = null;

    @property(Node)
    popup : Node;

    @property(Node)
    lockGroup : Node;

    @property(Button)
    btnClose : Button | null = null;

    @property(Button)
    btnClose2 : Button | null = null;

    @property(UIOpacity)
    popup_UIOpacity:UIOpacity;

    tweenScalePopup: Tween<{}> = null;
    tweenOpacityPopup: Tween<{}> = null;
    tweenOpacityBG: Tween<{}> = null;
    onLoad(){
        if(this.popup.getComponent(UIOpacity) == null){
            this.popup.addComponent(UIOpacity);
        }
        if(this.popup_UIOpacity == null){
            this.popup_UIOpacity = this.popup.getComponent(UIOpacity);
        }
    }
    start () {
        // [3].
        
    }

    onEnable(){
        if(this.btnClose!= null){
            this.btnClose!.node.on(Constants.CLICK,this.touchClose,this);
        }

        if(this.btnClose2!= null){
            this.btnClose2!.node.on(Constants.CLICK,this.touchClose,this);
        }

    }

    onDisable(){
        if(this.btnClose!= null){
            this.btnClose!.node.off(Constants.CLICK,this.touchClose,this);
        }

        if(this.btnClose2!= null){
            this.btnClose2!.node.off(Constants.CLICK,this.touchClose,this);
        }
    }
    // update (deltaTime: number) {
    //     // [4]
    // }

    resetPopup(){
        if(this.popup.getComponent(UIOpacity) == null){
            this.popup.addComponent(UIOpacity);
        }
        if(this.popup_UIOpacity == null){
            this.popup_UIOpacity = this.popup.getComponent(UIOpacity);
        }
        if(this.isTweenPopup){
            this.popup_UIOpacity.opacity = 150;
            this.popup.setScale(new Vec3(0.5,0.5,0.5));
            if(this.bgOpacity){
                this.bgOpacity.opacity = 150;
            }
        }
        this.lockGroup.active = true;
    }

    showPopup(){
        if(this.popup.getComponent(UIOpacity) == null){
            this.popup.addComponent(UIOpacity);
        }
        if(this.popup_UIOpacity == null){
            this.popup_UIOpacity = this.popup.getComponent(UIOpacity);
        }

        if(this.tweenScalePopup){
            this.tweenScalePopup.stop();
        }

        if(this.tweenOpacityPopup){ 
            this.tweenOpacityPopup.stop();
        }

        if(this.tweenOpacityBG){
            this.tweenOpacityBG.stop();
        }

        if(this.isTweenPopup){
            this.popup_UIOpacity.opacity = 150;
            this.popup.setScale(new Vec3(0.5,0.5,0.5));
            if(this.bgOpacity){
                this.bgOpacity.opacity = 150;
            }
        }else{
            this.popup_UIOpacity.opacity = 255;
            this.popup.setScale(new Vec3(1,1,1));
            if(this.bgOpacity){
                this.bgOpacity.opacity = 255;
            }
        }

        this.lockGroup.active = true;
        this.node.active = true;
        this.showPoup_ShowView();
    }

    showPopup_Now(){
        if (this.popup_UIOpacity == null) {
            this.popup_UIOpacity = this.popup.getComponent(UIOpacity);
        }
        this.popup_UIOpacity.opacity = 255;
        this.popup.setScale(new Vec3(1, 1, 1));
        if (this.bgOpacity) {
            this.bgOpacity.opacity = 255;
        }
        this.lockGroup.active = false;
        this.node.active = true;
    }

    showPoup_ShowView(){
        if(this.isTweenPopup){
            AudioManager2.instance.playPopupOpen();
            this.popup_UIOpacity.opacity = 0;
            this.popup.setScale(new Vec3(0.5,0.5,0.5));
            this.tweenScalePopup = tween(this.popup).to(0.4,{scale: new Vec3(1,1,1)}, { easing: 'backOut',onComplete:()=>{
                this.showPoup_ShowView_Finished();
            }}).start();

            this.tweenOpacityPopup = tween(this.popup_UIOpacity).to(0.4,{opacity:255},{easing:'quadOut',onComplete:()=>{

            }}).start();

            if(this.bgOpacity){
                this.tweenOpacityBG = tween(this.bgOpacity).to(0.2,{opacity:255},{easing:'quadOut',onComplete:()=>{       

                }}).start();
            }
        }else{
            this.showPoup_ShowView_Finished();
        }
    }

    showPoup_ShowView_Finished(){
        // this.popup.setScale(new Vec3(1,1,1));
        if(this.popup.getComponent(UIOpacity) == null){
            this.popup.addComponent(UIOpacity);
        }
        if(this.popup_UIOpacity == null){
            this.popup_UIOpacity = this.popup.getComponent(UIOpacity);
        }
        // this.popup_UIOpacity.opacity = 255;
        this.node.active = true;
        this.lockGroup.active = false;
        // console.log("showPoup_ShowView_Finished");
    }




    hidePopup(){
        AudioManager2.instance.playPopupClose();
        this.lockGroup.active = true;
        if(this.isTweenPopup){
            this.tweenScalePopup = tween(this.popup).to(0.3,{scale: new Vec3(0.5,0.5,0.5)}, { easing: 'quadOut',onComplete:()=>{
                this.hidePopup_Finished();
            }}).start();

            this.tweenOpacityPopup = tween(this.popup_UIOpacity).to(0.2,{opacity:0},{easing:'quadOut',onComplete:()=>{

            }}).start();

            if(this.bgOpacity){
                this.tweenOpacityBG = tween(this.bgOpacity).to(0.3,{opacity:0},{easing:'quadOut',onComplete:()=>{       

                }}).start();
            }
        }else{
            this.hidePopup_Finished();
        }
    }

    hidePopup_Finished(){
        this.lockGroup.active = false;
        this.node.active = false;
    }

    touchClose(){
        this.hidePopup();
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
