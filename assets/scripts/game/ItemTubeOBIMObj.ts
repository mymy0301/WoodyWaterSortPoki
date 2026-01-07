
import { _decorator, Component, Node, ParticleSystem, Sprite, SpriteFrame, tween, Tween, UIOpacity, Vec3 } from 'cc';
import { MagicOBIMInfo, MagicOBIMObjInfo } from '../newlevel/MagicLevelDataInfo';
import { localConfig } from '../localConfig';
import { clientEvent } from '../framework/clientEvent';
import { Constants } from '../framework/constants';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemTubeOBIMObj
 * DateTime = Wed Apr 23 2025 09:55:04 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemTubeOBIMObj.ts
 * FileBasenameNoExtension = ItemTubeOBIMObj
 * URL = db://assets/scripts/game/ItemTubeOBIMObj.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemTubeOBIMObj')
export class ItemTubeOBIMObj extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;



    @property(Node)
    bg:Node = null;

    @property(UIOpacity)
    bg_Opacity:UIOpacity = null;

    @property(Node)
    obj:Node = null;

    @property(UIOpacity)
    obj_Opacity:UIOpacity = null;

    @property(Node)
    nodeFinished:Node = null;

    @property(Sprite)
    iconColor:Sprite = null;

    isOBIMDone:boolean = false;

    protected onEnable(): void {
        clientEvent.on(Constants.TUBE_OBIM_DONE,this.setOBIMDone,this);
    }

    protected onDisable(): void {
        clientEvent.off(Constants.TUBE_OBIM_DONE,this.setOBIMDone,this);
    }

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    magicOBIMInfo:MagicOBIMInfo = null;
    cbOBIMDone:any = null;
    cbOBIMShowEfx:any = null;
    setInit(_magicOBIMInfo:MagicOBIMInfo,_cbOBIMDone:any,_cbShowEfx:any){
        this.cbOBIMDone = _cbOBIMDone;
        this.cbOBIMShowEfx = _cbShowEfx;
        this.isOBIMDone = false;
        this.magicOBIMInfo = _magicOBIMInfo;
        this.iconColor.color = localConfig.instance.getMagicColor_byID(this.magicOBIMInfo.Obj.CI);
        this.bg.setPosition(new Vec3(0,0,0));
        this.bg_Opacity.opacity = 255;
        this.obj.active = true;
        this.obj_Opacity.opacity = 255;
        this.nodeFinished.active = false;
    }

    setOBIMDone(_indexColor:number){
        // console.log("setOBIMDone",_indexColor);
        if(this.isOBIMDone) return;
        if(this.magicOBIMInfo.Obj.CI == _indexColor){
            this.isOBIMDone = true;
            this.setShowOBIMObj_Step1();
        }
    }

    tweenTickScale:Tween<{}> = null;
    setShowOBIMObj_Step1(){
        this.nodeFinished.active = true;
        this.nodeFinished.scale = new Vec3(2.5,2.5,2.5);

        if(this.tweenTickScale != null) this.tweenTickScale.stop();
        this.tweenTickScale = tween(this.nodeFinished).to(0.4,{scale:new Vec3(1,1,1)},{easing:'backOut',onComplete:()=>{
            this.setShowOBIMObj_Step2();
        }}).start();
    }


    tweenObjScale:Tween<{}> = null;
    tweenObjOpacity:Tween<{}> = null;

    tweenBgMove:Tween<{}> = null;
    tweenBgOpacity:Tween<{}> = null;
    setShowOBIMObj_Step2(){
        if(this.cbOBIMShowEfx!= null){
            this.cbOBIMShowEfx();
            this.cbOBIMShowEfx = null;
        }
        if(this.tweenObjScale != null) this.tweenObjScale.stop();
        if(this.tweenObjOpacity != null) this.tweenObjOpacity.stop();
        this.tweenObjScale = tween(this.obj).delay(0.1).to(0.5,{scale:new Vec3(0,0,0)},{easing:'backIn',onComplete:()=>{
            
        }}).start();

        this.tweenObjOpacity = tween(this.obj_Opacity).delay(0.2).to(0.2,{opacity:0},{easing:'linear',onComplete:()=>{
            
        }}).start();

        if(this.tweenBgMove != null) this.tweenBgMove.stop();
        if(this.tweenBgOpacity != null) this.tweenBgOpacity.stop();

        this.tweenBgMove = tween(this.bg).delay(0.5).to(0.4,{position:new Vec3(0,600,0)},{easing:'quadOut',onComplete:()=>{
            this.setShowOBIMObj_Step3();
        }}).start();
        this.tweenBgOpacity = tween(this.bg_Opacity).delay(0.5).to(0.3,{opacity:0},{easing:'linear',onComplete:()=>{
            
        }}).start();
    }

    setShowOBIMObj_Step3(){
        this.node.active = false;
        if(this.cbOBIMDone != null){
            this.cbOBIMDone();
            this.cbOBIMDone = null;
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
