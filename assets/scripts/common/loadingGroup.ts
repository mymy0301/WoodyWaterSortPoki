
import { _decorator, Component, Node, Sprite, UIOpacity, tween, Vec3, Quat, quat, Tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LoadingGroup')
export class LoadingGroup extends Component {
    @property(Sprite)
    bgLoading: Sprite;
    @property(Sprite)
    iconLoading:Sprite;

    tweenHideLoading:Tween<{}>;
    tweenIconLoading:Tween<{}>;
    tweenIconHideLoading:Tween<{}>;

    tweenHideLoading2:Tween<{}>;
    tweenIconHideLoading2:Tween<{}>;
    onLoad(){
        this.tweenIconLoading =  tween(this.iconLoading.node).by(1,{eulerAngles: new Vec3(0,0,360)},{easing:'linear'}).repeatForever();
        this.tweenHideLoading =  tween(this.bgLoading.getComponent(UIOpacity)).delay(1).to(1,{opacity:200},{easing:'quadOut'});
        this.tweenIconHideLoading =  tween(this.iconLoading.getComponent(UIOpacity)).delay(1).to(0.8,{opacity:100},{easing:'quadOut'});

        this.tweenHideLoading2 =  tween(this.bgLoading.getComponent(UIOpacity)).delay(0.5).to(0.5,{opacity:200},{easing:'quadOut'});
        this.tweenIconHideLoading2 =  tween(this.iconLoading.getComponent(UIOpacity)).delay(0.5).to(0.4,{opacity:100},{easing:'quadOut'});
    }
    start () {
        // [3]
    }

    onEnable(){
        this.showIconLoading();
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    showLoadingNow(){
        this.node.active =true;
        this.bgLoading.getComponent(UIOpacity).opacity = 255;
    }

    hideLoading(){
        this.node.active =true;
        this.bgLoading.getComponent(UIOpacity).opacity = 255;
        this.iconLoading.getComponent(UIOpacity).opacity = 255;
        this.tweenIconHideLoading.start();
        this.tweenHideLoading.call(() => { 
            //////console.log('All tweens finished.');
            this.node.active = false;
        }).start();
    }

    hideLoading2(){
        this.node.active =true;
        this.bgLoading.getComponent(UIOpacity).opacity = 255;
        this.iconLoading.getComponent(UIOpacity).opacity = 255;
        this.tweenIconHideLoading2.start();
        this.tweenHideLoading2.call(() => { 
            //////console.log('All tweens finished.');
            this.node.active = false;
        }).start();
    }

    showIconLoading(){
        // tween(this.iconLoading.node).stop();
        this.tweenIconLoading!.stop();
        this.tweenIconLoading.start();
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
