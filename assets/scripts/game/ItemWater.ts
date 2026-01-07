
import { _decorator, CCInteger, Component, Node, ProgressBar, Sprite, tween, Tween, UIOpacity, Vec2, Vec3 } from 'cc';
import { ItemWaterConfig } from './info/ItemWaterConfig';
import { localConfig } from '../localConfig';
import { WATER_STATE } from '../framework/constants';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemWater
 * DateTime = Tue Jul 23 2024 17:22:06 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemWater.ts
 * FileBasenameNoExtension = ItemWater
 * URL = db://assets/scripts/game/ItemWater.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemWater')
export class ItemWater extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    indexColor:number = -1;

    @property(CCInteger)
    indexWater:number = 0;

    @property(Sprite)
    icon:Sprite;

    @property(Sprite)
    iconLock:Sprite;

    @property(UIOpacity)
    iconLock_Opacity:UIOpacity;

    @property(Sprite)
    iconFix:Sprite;

    @property(Sprite)
    iconFixLock:Sprite;

    @property(Sprite)
    iconBottom:Sprite;

    @property(Sprite)
    iconBottomLock:Sprite;

    @property(UIOpacity)
    iconBottomLock_Opactity:UIOpacity;

    @property(Sprite)
    iconTop:Sprite;

    @property(Sprite)
    iconTopLock:Sprite;

    @property(UIOpacity)
    iconTopLock_Opactity:UIOpacity;

    @property(Node)
    nodeLock:Node;

    tween_Scale:Tween<{}> = null;
    tween_Move:Tween<{}> = null;

    tweenOpacity_Unlock:Tween<{}> = null;

    tweenBOTTOM_Scale:Tween<{}> = null;
    tweenBOTTOM_Move:Tween<{}> = null;

    tweenBOTTOMOpacity_Unlock:Tween<{}> = null;

    tweenTOP_Scale:Tween<{}> = null;
    tweenTOP_Move:Tween<{}> = null;

    tweenTOPOpacity_Unlock:Tween<{}> = null;

    @property(ProgressBar)
    waterProgressBar:ProgressBar;

    @property(typeof(WATER_STATE))
    waterState:WATER_STATE = WATER_STATE.NONE;

    // WIDTH:number = 125;
    // HIGHT:number = 95;

    TIME_MOVE_TO_TARGET:number = 2;

    initIndexColor(_indexColor:number){
        // console.log("initIndexColor:"+_indexColor);
        this.indexColor = _indexColor;
        this.icon.color = localConfig.instance.getWaterColor_byID(this.indexColor);
        if(this.iconFix){
            this.iconFix.color = localConfig.instance.getWaterColor_byID(this.indexColor);
        }
        if(this.iconBottom){
            this.iconBottom.color = localConfig.instance.getWaterColor_byID(this.indexColor);
        }
        this.iconTop.color = localConfig.instance.getWaterTOPColor_byID(this.indexColor);
    }

    initMagicIndexColor(_indexColor:number){
        if(_indexColor == -1) return;
        // console.log("initMagicIndexColor:"+_indexColor,localConfig.instance.getMagicColor_byID(_indexColor));
        this.indexColor = _indexColor;
        this.icon.color = localConfig.instance.getMagicColor_byID(this.indexColor);
        if(this.iconFix){
            this.iconFix.color = localConfig.instance.getMagicColor_byID(this.indexColor);
        }
        if(this.iconBottom){
            this.iconBottom.color = localConfig.instance.getMagicColor_byID(this.indexColor);
        }
        this.iconTop.color = localConfig.instance.getMagicTOPColor_byID(this.indexColor);
    }

    initWaterLock(_waterState:WATER_STATE){
        // if(localConfig.instance.isWaterLock && this.indexWater < 3 && this.indexColor != -1){
        //     this.waterState = WATER_STATE.LOCK;
        // }else{
        //     this.waterState = WATER_STATE.NONE;
        // }

        this.waterState = _waterState;
        this.showWaterLock();
    }

    showWaterLock(){
        if(this.waterState == WATER_STATE.NONE){
            if(this.iconBottomLock){
                this.iconBottomLock.node.active = false;
            }
            
            this.iconLock.node.active = false;
            if(this.iconFixLock){
                this.iconFixLock.node.active = false;
            }
            this.iconTopLock.node.active = false;
            this.nodeLock.active = false;
        }else{
            if(this.iconBottomLock){
                this.iconBottomLock.node.active = true;
            }
            this.iconLock.node.active = true;
            if(this.iconFixLock){
                this.iconFixLock.node.active = true;
            }
            this.iconTopLock.node.active = true;
            this.nodeLock.active = true;
        }
    }

    updateIndexColor(_indexColor:number){
        // console.log("updateIndexColor:"+_indexColor);
        this.indexColor = _indexColor;

        this.icon.color = localConfig.instance.getWaterColor_byID(this.indexColor);
        if(this.iconFix){
            this.iconFix.color = localConfig.instance.getWaterColor_byID(this.indexColor);
        }
        if(this.iconBottom){
            this.iconBottom.color = localConfig.instance.getWaterColor_byID(this.indexColor);
        }
        this.iconTop.color = localConfig.instance.getWaterTOPColor_byID(this.indexColor);
    }

    updateMagicIndexColor(_indexColor:number){
        // console.log("updateIndexColor:"+_indexColor);
        this.indexColor = _indexColor;

        this.icon.color = localConfig.instance.getMagicColor_byID(this.indexColor);
        if(this.iconFix){
            this.iconFix.color = localConfig.instance.getMagicColor_byID(this.indexColor);
        }
        if(this.iconBottom){
            this.iconBottom.color = localConfig.instance.getMagicColor_byID(this.indexColor);
        }
        this.iconTop.color = localConfig.instance.getMagicTOPColor_byID(this.indexColor);
    }

    setUndoIndexColor_Update(_indexColor:number,_isWaterLock:boolean){
        if(_indexColor != this.indexColor){
            this.updateIndexColor(_indexColor);
            if(this.indexColor == -1){
                this.setWaterOFF_Now();
            }else{
                this.setWaterON_Now();
            }

            if(_isWaterLock){
                this.waterState = WATER_STATE.LOCK;
                this.showWaterLock();
            }
        }
    }

    setUndoMagicIndexColor_Update(_indexColor:number,_isWaterLock:boolean){
        // console.log("setUndoMagicIndexColor_Update",_indexColor,_isWaterLock);
        if(_indexColor != this.indexColor){
            this.updateMagicIndexColor(_indexColor);
            if(this.indexColor == -1){
                this.setWaterOFF_Now();
            }else{
                // console.error("setWaterON_NowsetWaterON_NowsetWaterON_Now");
                this.setWaterON_Now();
                if(_isWaterLock){
                    this.waterState = WATER_STATE.LOCK;
                    this.showWaterLock();
                }
            }

            
        }
    }


    resetIndexColor(){
        this.indexColor = -1;
    }

    initScaleTOP:number = 1;
    initScaleBOTTOM:number = 1;
    initScaleTOPY:number = 1;
    initScale(scaleTOP:number,scaleBOTTOM:number,scaleInitTop:number){
        // console.log(scaleTOP,scaleBOTTOM)
        this.initScaleTOP = scaleTOP;
        this.initScaleBOTTOM = scaleBOTTOM;
        this.initScaleTOPY = scaleInitTop;
        this.iconTop.node.setScale(new Vec3(scaleTOP, this.initScaleTOPY,1));
        this.iconTopLock.node.setScale(new Vec3(scaleTOP, this.initScaleTOPY,1));
        if(this.iconBottom){
            this.iconBottom.node.setScale(new Vec3(scaleBOTTOM, this.initScaleTOPY,1));
        }

        if(this.iconBottomLock){
            this.iconBottomLock.node.setScale(new Vec3(scaleBOTTOM, this.initScaleTOPY,1));
        }
    }

    showIconTOP(isShow:boolean){
        this.iconTop.node.active = isShow;
        if(this.waterState == WATER_STATE.LOCK){
            this.iconTopLock.node.active = true;
        }
    }

    initMoveToTarget(){
        if(this.waterState == WATER_STATE.LOCK){
            this.nodeLock.active = false;
        }
    }

    //#region MOVE TO TARGET
    updateMoveToTarget(scaleTOP:number,posTOP_x:number,scaleBOTTOM:number,posBOTTOM_x:number,scaleWaterY:number){
        if(this.node.active){
            // console.log(this.indexWater);
            this.iconTop.node.setScale(new Vec3(scaleTOP,scaleWaterY,0));
            this.iconTop.node.setPosition(posTOP_x,95,0);
            if(this.iconBottom){
                this.iconBottom.node.setScale(new Vec3(scaleBOTTOM,scaleWaterY,0));
                this.iconBottom.node.setPosition(posBOTTOM_x,0,0);
            }

            if(this.waterState == WATER_STATE.LOCK){

            }
        }
    }

    //#endregion

    //#region WATER CHANGE
    updateWaterChange(scaleTOP:number,posTOP_x:number,scaleBOTTOM:number,posBOTTOM_x:number,scaleWaterY:number){
        if(this.node.active){
            // console.log(this.indexWater);
            this.iconTop.node.setScale(new Vec3(scaleTOP,scaleWaterY,0));
            this.iconTop.node.setPosition(posTOP_x,95,0);
            if(this.iconBottom){
                this.iconBottom.node.setScale(new Vec3(scaleBOTTOM,scaleWaterY,0));
                this.iconBottom.node.setPosition(posBOTTOM_x,0,0);
            }

            if(this.waterState == WATER_STATE.LOCK){

            }
        }
    }
    //#endregion

    //#region OFF
    updateWaterOFF(scaleTOP:number,posTOP_x:number,scaleBOTTOM:number,posBOTTOM_x:number,scaleWaterY:number,indexTubeON:number,progress:number){
        if(this.node.active){
            // console.log("updateWaterOFF",this.indexWater,scaleTOP,posTOP_x,scaleBOTTOM,posBOTTOM_x,scaleWaterY,indexTubeON,progress);
            this.iconTop.node.setScale(new Vec3(scaleTOP,scaleWaterY,0));
            if(this.indexWater == 4 - indexTubeON){
                this.waterProgressBar.progress = progress;
                this.iconTop.node.setPosition(posTOP_x,95 * progress,0);
                // console.log("iconTop",this.iconTop.node.position.y);
            }else{
                this.iconTop.node.setPosition(posTOP_x,95,0);
            }
            if(this.iconBottom){
                this.iconBottom.node.setScale(new Vec3(scaleBOTTOM,scaleWaterY,0));
                this.iconBottom.node.setPosition(posBOTTOM_x,0,0);
            }
            
        }
    }

    setWaterOFF_Finished(){
        if(this.waterState == WATER_STATE.LOCK){
            this.nodeLock.active = true;
        }
    }
    //#endregion

    //#region OFF NOW
    setWaterOFF_Now(){
        // console.log("setWaterOFF_Now",this.initScaleBOTTOM);
        // this.indexColor = -1;
        this.iconTop.node.setScale(new Vec3(this.initScaleBOTTOM, this.initScaleTOPY,1));
        this.iconTop.node.setPosition(0,0,0);
        if(this.iconBottom){
            this.iconBottom.node.setScale(new Vec3(this.initScaleBOTTOM, this.initScaleTOPY,1));
            this.iconBottom.node.setPosition(0,0,0);
        }
        this.waterProgressBar.progress = 0;
        // console.log("setWaterOFF_Now",this.iconTop.node.position);
    }
    //#endregion

    //#region WATER ON
    setWaterON_Now(){
        this.iconTop.node.setScale(new Vec3(this.initScaleTOP, this.initScaleTOPY,1));
        this.iconTop.node.setPosition(0,95,0);
        if(this.iconBottom){
            this.iconBottom.node.setScale(new Vec3(this.initScaleBOTTOM, this.initScaleTOPY,1));
            this.iconBottom.node.setPosition(0,0,0);
        }

        this.waterProgressBar.progress = 1;
    }

    updateWaterON(scaleTOP:number,posTOP_y:number,progress:number){
        this.iconTop.node.setScale(new Vec3(scaleTOP, this.initScaleTOPY,0));
        this.iconTop.node.setPosition(0,posTOP_y,0);
        this.waterProgressBar.progress = progress;
    }
    //#endregion
    
    setWaterUnlock(){
        this.nodeLock.active = false;

        if(this.iconFixLock){
            this.iconFixLock.node.active = false;
        }
        this.tweenOpacity_Unlock = tween(this.iconLock_Opacity).delay(0.1).to(0.2,{opacity:0},{easing:'quadOut',onComplete:()=>{
            this.setWaterUnlock_Finished();
        }}).start();

        this.tweenTOPOpacity_Unlock = tween(this.iconTopLock_Opactity).delay(0.1).to(0.2,{opacity:0},{easing:'quadOut',onComplete:()=>{
            
        }}).start();

        if(this.iconBottomLock_Opactity){
            this.tweenBOTTOMOpacity_Unlock = tween(this.iconBottomLock_Opactity).delay(0.1).to(0.2,{opacity:0},{easing:'quadOut',onComplete:()=>{
                
            }}).start();
        }
    }


    setWaterUnlock_Finished(){
        this.nodeLock.active = false;
        if(this.iconBottomLock){
            this.iconBottomLock.node.active = false;
        }
        this.iconTopLock.node.active = false;
        this.iconLock.node.active = false;
        if(this.iconFixLock){
            this.iconFixLock.node.active = false;
        }

        this.iconLock_Opacity.opacity = 255;
        this.iconTopLock_Opactity.opacity = 255;
        this.waterState = WATER_STATE.NONE;
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
