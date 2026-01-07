
import { _decorator, Component, Node, ParticleSystem, sp, tween, Tween, UIOpacity } from 'cc';
import { clientEvent } from './framework/clientEvent';
import { Constants } from './framework/constants';
import { AudioManager2 } from './framework/audioManager2';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = WellDoneGroup
 * DateTime = Tue Sep 10 2024 15:18:39 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = WellDoneGroup.ts
 * FileBasenameNoExtension = WellDoneGroup
 * URL = db://assets/scripts/WellDoneGroup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('WellDoneGroup')
export class WellDoneGroup extends Component {
    @property(ParticleSystem)
    arrEfxs:ParticleSystem[] = [];

    @property(UIOpacity)
    nodeOpacity:UIOpacity;

    tweenOpacity:Tween<{}> = null;

    @property(sp.Skeleton)
    wellDone:sp.Skeleton = null;

    start () {
        // [3]
    }

    showWellDoneGroup(){
        this.wellDone.node.active = false;
        this.nodeOpacity.opacity = 0;
        this.node.active = true;
        this.tweenOpacity = tween(this.nodeOpacity).to(0.3,{opacity:160},{easing:'quadOut',onComplete:()=>{
            this.showStep2();
        }}).start();
    }

    showStep2(){
        AudioManager2.instance.playSound_WIN();

        for(let i=0; i< this.arrEfxs.length;i++){
            this.arrEfxs[i].play();
        }

        this.scheduleOnce(()=>{
            this.wellDone.node.active = true;
            this.wellDone.setAnimation(0,'appear',false);
        },0.5);
        

        this.scheduleOnce(()=>{
            this.showWellDoneFinished();
        },2);
    }

    showWellDoneFinished(){
        this.node.active = false;
        clientEvent.dispatchEvent(Constants.WELLDONE_FINISHED);
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
