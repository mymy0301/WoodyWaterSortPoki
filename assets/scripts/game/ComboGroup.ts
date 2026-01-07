
import { _decorator, Component, Label, Node, ProgressBar, Tween, tween, UIOpacity, Vec3 } from 'cc';
import { localConfig } from '../localConfig';
import { AudioManager2 } from '../framework/audioManager2';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ComboGroup
 * DateTime = Wed Oct 30 2024 16:59:38 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ComboGroup.ts
 * FileBasenameNoExtension = ComboGroup
 * URL = db://assets/scripts/game/ComboGroup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ComboGroup')
export class ComboGroup extends Component {
    @property(Label)
    txtCombo:Label;

    @property(UIOpacity)
    comboOpacity:UIOpacity;

    @property(ProgressBar)
    comboProgress:ProgressBar;

    @property(UIOpacity)
    groupOpacity:UIOpacity;

    comboValue:number = 0;

    onLoad(){
        let self = this;
        this.tweenText = tween(this.txtCombo.node).to(0.12,{scale:new Vec3(1,1,1)},{easing:'quadOut'}).to(0.06,{scale:new Vec3(1.5,1.5,1.5)},{easing:'quadOut'}).to(0.06,{scale:new Vec3(1,1,1)},{easing:'quadOut'}).to(0.06,{scale:new Vec3(1.25,1.25,1.25)},{easing:'quadOut'}).to(0.06,{scale:new Vec3(1,1,1)},{easing:'quadOut'}).union();
        this.tweenTextOpacity = tween(this.comboOpacity).to(0.1,{opacity:255},{easing:'quadOut'});
        this.tweenProgress = tween(this.comboProgress).to(localConfig.instance.TIME_COMBO,{progress:0},{easing:'linear',onComplete:()=>{
            self.resetCombo();
        }});
        this.tweenHideGroup = tween(this.groupOpacity).to(0.3,{opacity:0},{easing:'quadOut',onComplete:()=>{
            self.hideComboGroup_Finished();
        }});
    }

    start () {
        // [3]
    }

    tweenText:Tween<{}> = null;
    tweenTextOpacity:Tween<{}> = null;

    tweenProgress:Tween<{}> = null;

    tweenHideGroup:Tween<{}> = null;

    // update (deltaTime: number) {
    //     // [4]
    // }

    init(){
        this.comboValue = 0;
        this.groupOpacity.opacity = 0;
    }

    addCombo(){
        //console.log("ADD COMBO");
        this.comboValue ++;
        //console.log(this.comboValue);
        

        if(this.comboValue >= 2){
            this.groupOpacity.opacity = 255;
            this.showTextCombo();
        }else{
            this.groupOpacity.opacity = 0;

            if(this.tweenProgress != null){
                this.tweenProgress.stop();
            }
            this.tweenProgress.start();
        }
    }

    showTextCombo(){
        if(this.tweenText != null){
            this.tweenText.stop();
        }
        if(this.tweenTextOpacity != null){
            this.tweenTextOpacity.stop();
        }

        if(this.tweenProgress != null){
            this.tweenProgress.stop();
        }


        this.txtCombo.string = `x${this.comboValue}`;
        this.comboOpacity.opacity = 0;
        this.txtCombo.node.setScale(new Vec3(3,3,3));
        this.comboProgress.progress = 1;
        
        this.tweenText.start();
        this.tweenTextOpacity.start();
        this.tweenProgress.start();

    }


    resetCombo(){
        this.comboValue = 0;
        this.hideComboGroup();
    }

    hideComboGroup(){
        if(this.tweenHideGroup != null){
            this.tweenHideGroup.stop();
        }

        this.tweenHideGroup.start();;
    }

    hideComboGroup_Finished(){

    }

    getComboValue(){
        if(this.comboValue >= 2) return this.comboValue;
        return 1;
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
