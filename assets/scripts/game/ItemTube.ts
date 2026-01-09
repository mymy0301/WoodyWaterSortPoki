
import { _decorator, Button, Color, Component, EventTouch, Graphics, log, Mask, Node, ProgressBar, Sprite, SpriteFrame, tween, Tween, UIOpacity, UITransform, Vec2, Vec3 } from 'cc';
import { ItemWater } from './ItemWater';
import { ItemTubeConfig } from './info/ItemTubeConfig';
import { localConfig } from '../localConfig';
import { ItemWaterConfig } from './info/ItemWaterConfig';
import { ItemTubePolygonConfig } from './info/ItemTubePolygonConfig';
import Utils from '../core/utils/Utils';
import { Constants, GAME_MODE, GAME_STATE, ITEM_TUBE_STATE, THEME_TYPE, WATER_STATE } from '../framework/constants';
import { clientEvent } from '../framework/clientEvent';
import { AudioManager2 } from '../framework/audioManager2';
import { FBInstantManager } from '../common/FBInstantManager';
import { resourceUtil } from '../framework/resourceUtil';
import { ItemTubeOBIMObj } from './ItemTubeOBIMObj';
import { MagicBInfo, MagicOBIMInfo } from '../newlevel/MagicLevelDataInfo';
import { ItemTubeClayObj } from './ItemTubeClayObj';
import { ItemTubePlasterObj } from './ItemTubePlasterObj';
import { lodash } from '../framework/lodash';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemTube
 * DateTime = Tue Jul 23 2024 17:21:29 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemTube.ts
 * FileBasenameNoExtension = ItemTube
 * URL = db://assets/scripts/game/ItemTube.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemTube')
export class ItemTube extends Component {
    tubeX:number = 0;
    tubeY:number = 0;

    @property(Sprite)
    iconHover_Bottom:Sprite;
    @property(Sprite)
    iconHover_Top:Sprite;
    @property(Mask)
    iconMask:Mask;
    @property(Sprite)
    iconTop:Sprite;

    @property(Button)
    btnTube:Button;

    @property(Node)
    groupTube:Node;

    @property(Node)
    groupPivot:Node;

    @property(Node)
    groupAllItemRotate:Node;
    
    @property(Node)
    groupAllItemMove:Node;

    @property(ItemWater)
    arrItemWaters:ItemWater[] = [];

    @property(Sprite)
    waterLine:Sprite;

    @property(ProgressBar)
    progressBar_waterON:ProgressBar;
   
    TIME_MOVE_TO_TARGET:number = .4;
    TIME_POUR_INDDEX:number = .3;
    TIME_MOVE_BACK:number = .4 ;

    posPivot_Right:Vec3 = new Vec3(-68,-191,0);
    posPivot_Left:Vec3 = new Vec3(68,-191,0);


    tweenPivot:Tween<{}> = null;
    tweenTube:Tween<{}> = null;
    tweenAllItemRotate:Tween<{}> = null;
    tweenAllItemMove:Tween<{}> = null;
    tweenProgressON:Tween<{}> = null;
   
    currState:ITEM_TUBE_STATE = ITEM_TUBE_STATE.NONE;

    arrPoints:Vec2[] = [];

    @property(Sprite)
    iconCover:Sprite;

    @property(UIOpacity)
    coverOpacity:UIOpacity;

    tweenIconCover:Tween<{}> = null;
    tweenCoverOpacity:Tween<{}> = null;

    tweenAddCol:Tween<{}> = null;

    start () {
        // this.drawPolygon();
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    protected onEnable(): void {
        this.btnTube.node.on(Node.EventType.TOUCH_START,this.touchItemTube,this);
        // this.btnTube.node.on(Node.EventType.TOUCH_CANCEL,this.touchEndItemTube,this);
        // this.btnTube.node.on(Node.EventType.TOUCH_END, this.touchEndItemTube, this);
        // this.btnTube.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMoveItemTube, this);
    }

    protected onDisable(): void {
        this.btnTube.node.on(Node.EventType.TOUCH_START,this.touchItemTube,this);
        // this.btnTube.node.off(Node.EventType.TOUCH_CANCEL,this.touchEndItemTube,this);
        // this.btnTube.node.off(Node.EventType.TOUCH_END, this.touchEndItemTube, this);
        // this.btnTube.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMoveItemTube, this);
    }


    

    initItemTube(_tubeX:number,_tubeY:number,_arrIndexColors:number[]){
        this.loadTube();
        
        this.tubeX = _tubeX;
        this.tubeY = _tubeY;

        let posTube:Vec2 = localConfig.instance.getPosTube_byXY(localConfig.instance.currLevelDataInfo,this.tubeX,this.tubeY);

        this.node.setPosition(new Vec3(posTube.x,posTube.y,0));
        // console.log("_arrIndexColors:",_arrIndexColors);
        let countIndexColor_SameHeadIndexColor:number = this.getCountIndexColor_SameHeadIndexColor(_arrIndexColors);
        // console.log("countIndexColor_SameHeadIndexColor:",countIndexColor_SameHeadIndexColor);
        for(let i=0; i< this.arrItemWaters.length;i++){
            let waterState:WATER_STATE = WATER_STATE.NONE;
            if (localConfig.instance.isWaterLock && i < 3 - countIndexColor_SameHeadIndexColor) {
                waterState = WATER_STATE.LOCK;
            }
        
            if(i < _arrIndexColors.length){
                this.arrItemWaters[i].initIndexColor(_arrIndexColors[i]);
                this.arrItemWaters[i].initWaterLock(waterState);
                this.arrItemWaters[i].node.active = true;
            }else{
                this.arrItemWaters[i].initIndexColor(-1);
                this.arrItemWaters[i].initWaterLock(WATER_STATE.NONE);
                this.arrItemWaters[i].node.active = false;
            }
        }
        this.initItemWaterScale();
        this.waterLine.node.active = false;
        this.iconCover.node.active = false;
        this.coverOpacity.opacity = 0;

        this.updateCountItemWater(_arrIndexColors.length);
        this.setBottle_Touch_Available(true);

        
    }

    magicBInfo:MagicBInfo = null;
    initMagicItemTube(_magicBInfo:MagicBInfo,_tubeX:number,_tubeY:number,_arrIndexColors:number[],_arrWaterLocks:WATER_STATE[]){
        // console.error("_arrWaterLocks:",_arrWaterLocks);
        // console.error("_arrIndexColors:",_arrIndexColors);
        this.magicBInfo = _magicBInfo;
        this.loadTube();
        
        this.tubeX = _tubeX;
        this.tubeY = _tubeY;

        let posTube:Vec2 = localConfig.instance.getMagicPosTube_byXY(localConfig.instance.currMagicLevelConfigInfo,this.tubeX,this.tubeY);

        this.node.setPosition(new Vec3(posTube.x,posTube.y,0));
        for(let i=0; i< this.arrItemWaters.length;i++){
        
            if(i < _arrIndexColors.length){
                this.arrItemWaters[i].initMagicIndexColor(_arrIndexColors[i]);
                this.arrItemWaters[i].initWaterLock(_arrWaterLocks[i]);
                this.arrItemWaters[i].node.active = true;
            }else{
                this.arrItemWaters[i].initMagicIndexColor(-1);
                this.arrItemWaters[i].initWaterLock(WATER_STATE.NONE);
                this.arrItemWaters[i].node.active = false;
            }
        }
        this.initItemWaterScale();
        this.waterLine.node.active = false;
        this.iconCover.node.active = false;
        this.coverOpacity.opacity = 0;

        this.updateCountItemWater(_arrIndexColors.length);
        this.setBottle_Touch_Available(true);
        this.itemTubeOBIMObj.node.active = false;
        this.itemTubeClayObj.node.active = false;
        if(localConfig.instance.currGameMode == GAME_MODE.TOURNAMENT){

        }else{
            if(this.magicBInfo.OBIM && this.magicBInfo.OBIM.length > 0){
                let magicOBIMInfo:MagicOBIMInfo = this.magicBInfo.OBIM[0];
                if(magicOBIMInfo.CI == -1){
                    this.initMagicClayObj(magicOBIMInfo);
                }else if(magicOBIMInfo.Obj){
                    this.initMagicOBIMObj(magicOBIMInfo);
                }else if(magicOBIMInfo.CI == 0){
                    this.initMagicPlasterObj(magicOBIMInfo);
                }
            }
        }
    }

    loadTube(){

        // let pathHoverBottom:string = localConfig.instance.getPathHoverBottom_byIndexTube(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.TUBE));
        // // console.log("pathHoverBottom",pathHoverBottom);
        // resourceUtil.loadSpriteFrame_Bundle(pathHoverBottom, (err, spriteFrame) => {
        //     if (err) {
        //         console.error(err);
        //     } else {
        //         this.iconHover_Bottom.spriteFrame = spriteFrame;
        //     }
        // });

        // let patchHoverTop:string = localConfig.instance.getPathHoverTop_byIndexTube(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.TUBE));
        // resourceUtil.loadSpriteFrame_Bundle(patchHoverTop, (err, spriteFrame) => {
        //     if (err) {
        //         console.error(err);
        //     } else {
        //         this.iconHover_Top.spriteFrame = spriteFrame;
        //     }
        // });

        // let pathCover:string = localConfig.instance.getPathTop_byIndexTube(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.TUBE));    
        // resourceUtil.loadSpriteFrame_Bundle(pathCover, (err, spriteFrame) => {
        //     if (err) {
        //         console.error(err);
        //     } else {                
        //         this.iconCover.spriteFrame = spriteFrame;
        //     }
        // });

        // let pathMask:string = localConfig.instance.getPathMask_byIndexTube(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.TUBE));    
        // resourceUtil.loadSpriteFrame_Bundle(pathMask, (err, spriteFrame) => {
        //     if (err) {
        //         console.error(err);
        //     } else {                
        //         this.iconMask.spriteFrame = spriteFrame;
        //     }
        // });
    }

    updatePos(){
        let posTube:Vec2 = localConfig.instance.getPosTube_byXY(localConfig.instance.currLevelDataInfo,this.tubeX,this.tubeY);

        this.node.setPosition(new Vec3(posTube.x,posTube.y,0));
    }

    updateMagicPos(){
        let posTube:Vec2 = localConfig.instance.getMagicPosTube_byXY(localConfig.instance.currMagicLevelConfigInfo,this.tubeX,this.tubeY);

        this.node.setPosition(new Vec3(posTube.x,posTube.y,0));
    }


    countItemWaterActive:number = 0;
    updateCountItemWater(countItemWater:number){
        this.countItemWaterActive = countItemWater;
        // console.log("updateCountItemWater:"+this.countItemWaterActive);
        for(let i=0; i< this.arrItemWaters.length;i++){
            if(i < countItemWater){
                this.arrItemWaters[i].node.active = true;
                if(i == countItemWater -1){
                    this.arrItemWaters[i].showIconTOP(true);
                }else{
                    this.arrItemWaters[i].showIconTOP(false);
                }
            }else{
                this.arrItemWaters[i].node.active = false;
                this.arrItemWaters[i].setWaterOFF_Now();
            }
        }
    }

    initItemWaterScale(){
        let itemTubePolygonConfig:ItemTubePolygonConfig = localConfig.instance.getItemTubePolygonConfig_byIndexTube(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.TUBE) -1);
        
        for(let i=0; i< itemTubePolygonConfig.arrPoints.length - 1; i++){
            this.arrPoints.push(itemTubePolygonConfig.arrPoints[i]);
        }
        this.arrPoints.push(itemTubePolygonConfig.arrPoints[itemTubePolygonConfig.arrPoints.length - 1]);
        for(let i=itemTubePolygonConfig.arrPoints.length - 2; i >= 0; i--){
            let point:Vec2 = itemTubePolygonConfig.arrPoints[i];
            this.arrPoints.push(new Vec2(-point.x,point.y));
        }

        for(let i=0; i< this.arrItemWaters.length;i++){
            let pointCheckTOP:Vec2 = new Vec2(0,localConfig.instance.getItemWater_TOP_PosY(i));
            let pointCheckBOTTOM:Vec2 = new Vec2(0,localConfig.instance.getItemWater_PosY(i));

            let intersectionsTOP = Utils.getPolygonIntersection(pointCheckTOP,0,this.arrPoints);
            let scaleTOP:number = 1;
            // console.log(intersectionsTOP);
            if(intersectionsTOP.length >= 2){
                scaleTOP = Math.abs(intersectionsTOP[1].x - intersectionsTOP[0].x)/localConfig.instance.ITEMWATER_WIDTH;
            }

            let intersectionsBOTTOM = Utils.getPolygonIntersection(pointCheckBOTTOM,0,this.arrPoints);
            let scaleBOTTOM:number = 1;
            // console.log(intersectionsBOTTOM);
            if(intersectionsBOTTOM.length >= 2){
                scaleBOTTOM = Math.abs(intersectionsBOTTOM[1].x - intersectionsBOTTOM[0].x)/localConfig.instance.ITEMWATER_WIDTH;
            }

            let itemTubeConfig:ItemTubeConfig = localConfig.instance.getItemTubeConfig_byIndexTube(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.TUBE) - 1);
            let scaleInitTop:number = itemTubeConfig.arrScaleInitTops[i];
            this.arrItemWaters[i].initScale(scaleTOP,scaleBOTTOM,scaleInitTop);
        }
    }

    graphics:Graphics = null;
    drawPolygon(){
        let itemTubePolygonConfig:ItemTubePolygonConfig = localConfig.instance.getItemTubePolygonConfig_byIndexTube(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.TUBE) - 1);
        let arrPoints:Vec2[] = [];
        for(let i=0; i< itemTubePolygonConfig.arrPoints.length - 1; i++){
            arrPoints.push(itemTubePolygonConfig.arrPoints[i]);
        }
        arrPoints.push(itemTubePolygonConfig.arrPoints[itemTubePolygonConfig.arrPoints.length - 1]);
        for(let i=itemTubePolygonConfig.arrPoints.length - 2; i >= 0; i--){
            let point:Vec2 = itemTubePolygonConfig.arrPoints[i];
            arrPoints.push(new Vec2(-point.x,point.y));
        }
        // console.log(arrPoints);
        let arrRotatePoints:Vec2[] = [];

        for(let i = 0; i< arrPoints.length;i++){
            let newPoint:Vec2 = Utils.rotatePointBack(arrPoints[i],new Vec2(0,0),44);
            arrRotatePoints.push(newPoint);
        }

        this.graphics = this.node.addComponent(Graphics);

        this.graphics.strokeColor = new Color(255,0,0);
        this.graphics.lineWidth = 10;

        // Xóa bất kỳ hình dạng nào trước đó
        this.graphics.clear();
        this.graphics.moveTo(arrRotatePoints[0].x, arrRotatePoints[0].y);

        for (let i = 1; i < arrRotatePoints.length; i++) {
            this.graphics.lineTo(arrRotatePoints[i].x, arrRotatePoints[i].y);
        }

        // Kết thúc và vẽ đường
        this.graphics.close(); // Nếu muốn khép kín hình dạng
        this.graphics.stroke();

        let pointCheck:Vec2 = new Vec2(0,95);
        // let newPointCheck:Vec2 = Utils.rotatePointBack(pointCheck,new Vec2(0,0),44);
        // console.log(newPointCheck);
        pointCheck.y = (110 + 3) * 0.81;
        // console.log(pointCheck);
        this.graphics.moveTo(-1000, pointCheck.y);
        this.graphics.lineTo(1000, pointCheck.y);
        this.graphics.stroke();

        let intersections = Utils.getPolygonIntersection(pointCheck,0,arrRotatePoints);

        // console.log(intersections);
        if(intersections.length >= 2){
            let scaleX:number = Math.abs(intersections[1].x - intersections[0].x)/126;
            let posX:number = (intersections[1].x - intersections[0].x)/2;

            // console.log(scaleX,posX);
        }
        // for(let i=0; i< intersections.length;i++){
        //     console.log(Utils.rotatePointBack(intersections[i],new Vec2(0,0),44));
        // }
    }

    initGraphicsTest(){
        this.graphics = this.node.addComponent(Graphics);

        this.graphics.strokeColor = new Color(255,0,0);
        this.graphics.lineWidth = 10;
        // Xóa bất kỳ hình dạng nào trước đó
        this.graphics.clear();
    }

    drawGraphicsTest(pointCheck:Vec2,arrPoints:Vec2[]){
        this.graphics.moveTo(arrPoints[0].x, arrPoints[0].y);

        for (let i = 1; i < arrPoints.length; i++) {
            this.graphics.lineTo(arrPoints[i].x, arrPoints[i].y);
        }
        this.graphics.stroke();


        this.graphics.moveTo(-1000, pointCheck.y);
        this.graphics.lineTo(1000, pointCheck.y);
        this.graphics.stroke();

    }

    stopAlllTween(){
        if(this.tweenAllItemMove){
            this.tweenAllItemMove.stop();
        }
        if(this.tweenAllItemRotate){
            this.tweenAllItemRotate.stop();
        }
        if(this.tweenTube){
            this.tweenTube.stop();
        }
        if(this.tweenPivot){
            this.tweenPivot.stop();
        }
        if(this.tweenProgressON){
            // console.log("stopAlllTweenstopAlllTweenstopAlllTween");
            this.tweenProgressON.stop();
        }

        if(this.tweenIconCover){
            this.tweenIconCover.stop();
        }
    }

    setStartWaterOFF(itemTubeTarget:ItemTube,indexStep:number,posTarget:Vec3,isRight:boolean,indexStepON:number,countWaterOFF:number){
        this.currState = ITEM_TUBE_STATE.OFF;
        this.btnTube.interactable = false;
        for(let i=0; i< this.arrItemWaters.length; i++){
            if(i < this.countItemWaterActive){
                this.arrItemWaters[i].initMoveToTarget();
            }
        }
        this.setMoveToTarget(itemTubeTarget,indexStep,posTarget,isRight,indexStepON,countWaterOFF);
    }

    setMoveToTarget(itemTubeTarget:ItemTube,indexStep:number,posTarget:Vec3,isRight:boolean,indexStepON:number,countWaterOFF:number){
        // this.initGraphicsTest();
        let itemTubeConfig:ItemTubeConfig = localConfig.instance.getItemTubeConfig_byIndexTube(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.TUBE) - 1);
        // console.log(itemTubeConfig);

        this.posPivot_Right = itemTubeConfig.pivotRight;
        this.posPivot_Left = itemTubeConfig.pivotLeft;
        let angleRotateTube:number = itemTubeConfig.arrRotateConfigs[indexStep];
        if(isRight){

        }else{
            angleRotateTube = -itemTubeConfig.arrRotateConfigs[indexStep];
        }
        //Tube
        this.tweenTube = tween(this.groupTube).to(this.TIME_MOVE_TO_TARGET, { position: posTarget,eulerAngles: new Vec3(0, 0, -angleRotateTube),}, 
            {
                easing: 'linear', onComplete: () => {}
            }).start();

        //Change Pivot
        if (isRight) {
            this.tweenPivot = tween(this.groupPivot).to(this.TIME_MOVE_TO_TARGET, { position: this.posPivot_Right }, {
                easing: 'linear', onComplete: () => {

                }
            }).start();
        } else {
            this.tweenPivot = tween(this.groupPivot).to(this.TIME_MOVE_TO_TARGET, { position: this.posPivot_Left }, {
                easing: 'linear', onComplete: () => {

                }
            }).start();
        }

        //All Item
        let posY: number = itemTubeConfig.arrMoveConfigs[indexStep];
        // console.log("posY"+posY);
        let scaleY: number = itemTubeConfig.arrScaleConfigs[indexStep];
        // console.log("scaleY"+scaleY);
        let scaleWater:number = itemTubeConfig.arrScaleWaterConfigs[indexStep];
        this.tweenAllItemMove = tween(this.groupAllItemMove).to(this.TIME_MOVE_TO_TARGET, {position: new Vec3(0, posY, 0), scale: new Vec3(1, scaleY, 1)},
            { easing: 'linear', onComplete:()=>{
                // console.log("AAAAAAAAAAAAAA");
            }
        }).start();
        this.tweenAllItemRotate = tween(this.groupAllItemRotate).to(this.TIME_MOVE_TO_TARGET, { eulerAngles: new Vec3(0, 0, angleRotateTube) },
         {
            easing: 'linear', 
            onUpdate:(target, ratio)=>{
                let angleRotate: number = this.groupAllItemRotate.eulerAngles.z;
                // console.log("angleRotate:"+angleRotate);
                let posY:number = this.groupAllItemMove.position.y;
                let scaleY:number = this.groupAllItemMove.scale.y;
                // console.log("posY:"+angleRotate);
                // console.log("scaleY:"+scaleY);
                let arrRotatePoints:Vec2[] = [];


                for(let i = 0; i< this.arrPoints.length;i++){
                    let newPoint:Vec2 = Utils.rotatePointBack(this.arrPoints[i],new Vec2(0,0),angleRotate);
                    arrRotatePoints.push(newPoint);
                }

                for(let i=0; i< this.arrItemWaters.length;i++){
                    // console.log("i===="+i);
                    let pointCheckTOP:Vec2 = new Vec2(0,localConfig.instance.getItemWater_TOP_PosY(i));
                    pointCheckTOP.y = pointCheckTOP.y * scaleY + posY;
                    // console.log("pointCheckTOP:"+pointCheckTOP);

                    let pointCheckBOTTOM:Vec2 = new Vec2(0,localConfig.instance.getItemWater_PosY(i));
                    pointCheckBOTTOM.y = pointCheckBOTTOM.y * scaleY + posY;
                    // console.log("pointCheckBOTTOM:"+pointCheckBOTTOM);

                    let scaleTOP:number = 1;
                    let posTOP_x:number = 0;
                    let intersectionsTOP = Utils.getPolygonIntersection(pointCheckTOP,0,arrRotatePoints);
                    // console.log(intersectionsTOP);
                    if(intersectionsTOP.length >= 2){
                        scaleTOP = Math.abs(intersectionsTOP[intersectionsTOP.length -1].x - intersectionsTOP[0].x)/localConfig.instance.ITEMWATER_WIDTH;
                        posTOP_x = (intersectionsTOP[intersectionsTOP.length -1].x + intersectionsTOP[0].x)/2;
                        // console.log(posTOP_x);
                    }

                    let intersectionsBOTTOM = Utils.getPolygonIntersection(pointCheckBOTTOM,0,arrRotatePoints);
                    let scaleBOTTOM:number = 1;
                    let posBOTTOM_x:number = 0;
                    // console.log(intersectionsBOTTOM);
                    if(intersectionsBOTTOM.length >= 2){
                        scaleBOTTOM = Math.abs(intersectionsBOTTOM[intersectionsBOTTOM.length - 1].x - intersectionsBOTTOM[0].x)/localConfig.instance.ITEMWATER_WIDTH;
                        posBOTTOM_x = (intersectionsBOTTOM[intersectionsBOTTOM.length - 1].x + intersectionsBOTTOM[0].x)/2;
                        // console.log(posBOTTOM_x);
                    }

                    // if(ratio >= 1){
                    //     this.drawGraphicsTest(pointCheckTOP,arrRotatePoints);
                    // }
                    let scaleWaterY:number = (scaleWater - 1) * ratio + 1;
                    this.arrItemWaters[i].updateMoveToTarget(scaleTOP,posTOP_x,scaleBOTTOM,posBOTTOM_x,scaleWaterY);
                }

            },
            onComplete: () => {
                this.setMoveToTarget_Finished(itemTubeTarget,indexStep,isRight,indexStepON,countWaterOFF);
            }
        }).start();
    }

    setMoveToTarget_Finished(itemTubeTarget:ItemTube,indexStep:number,isRight:boolean,indexStepON:number,countWaterOFF:number){
        let indexStepOFF:number = indexStep + 1;
        // console.log("setMoveToTarget_Finished:",countWaterOFF);
        AudioManager2.instance.playSound_Pour(countWaterOFF+1);
        this.setTubeOFF_StepbyStep(itemTubeTarget,indexStepOFF,isRight,indexStepON,countWaterOFF,true);
    }


    setTubeOFF_StepbyStep(itemTubeTarget:ItemTube,indexStepOFF:number,isRight:boolean,indexStepON:number,countWaterOFF:number,isStartOFF:boolean){
        // console.error("setTubeOFF_StepbyStep:",indexStepOFF,isRight,indexStepON,countWaterOFF);
        this.arrItemWaters[4 - indexStepOFF].resetIndexColor();
        let itemTubeConfig:ItemTubeConfig = localConfig.instance.getItemTubeConfig_byIndexTube(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.TUBE) - 1);
        let angleRotateTube:number = itemTubeConfig.arrRotateConfigs[indexStepOFF];
        if(isRight){

        }else{
            angleRotateTube = -itemTubeConfig.arrRotateConfigs[indexStepOFF];
        }

        //Tube
        this.tweenTube = tween(this.groupTube).to(this.TIME_POUR_INDDEX, { eulerAngles: new Vec3(0, 0, -angleRotateTube)}, 
            {
                easing: 'linear', onComplete: () => {}
            }
        ).start();

        //All Item
        let posY: number = itemTubeConfig.arrMoveConfigs[indexStepOFF];
        let scaleY: number = itemTubeConfig.arrScaleConfigs[indexStepOFF];
        let scaleWater:number = itemTubeConfig.arrScaleWaterConfigs[indexStepOFF];
        let scaleWaterPrev:number = itemTubeConfig.arrScaleWaterConfigs[indexStepOFF-1];
        // console.log("scaleWater:",scaleWater,scaleWaterPrev);
        this.tweenAllItemMove = tween(this.groupAllItemMove).to(this.TIME_POUR_INDDEX, {position: new Vec3(0, posY, 0), scale: new Vec3(1, scaleY, 1)},
            { easing: 'linear', 
                onUpdate:(target, ratio) => {
                    // console.log("groupAllItemMove",this.groupAllItemMove.position.y,this.groupAllItemMove.scale.y);
                },
                onComplete:()=>{
                // console.log("AAAAAAAAAAAAAA");
                }
            }).start();

        this.tweenAllItemRotate = tween(this.groupAllItemRotate).to(this.TIME_POUR_INDDEX, { eulerAngles: new Vec3(0, 0, angleRotateTube) },
            {
                easing: 'linear', 
                onUpdate:(target, ratio)=>{
                    // console.log(this);
                    let angleRotate: number = this.groupAllItemRotate.eulerAngles.z;
                    // console.log("angleRotate:"+angleRotate);
                    let posY:number = this.groupAllItemMove.position.y;
                    let scaleY:number = this.groupAllItemMove.scale.y;
                    // console.log("posY:"+angleRotate);
                    // console.log("scaleY:"+scaleY);
                    let arrRotatePoints:Vec2[] = [];


                    for(let i = 0; i< this.arrPoints.length;i++){
                        let newPoint:Vec2 = Utils.rotatePointBack(this.arrPoints[i],new Vec2(0,0),angleRotate);
                        arrRotatePoints.push(newPoint);
                    }

                    for(let i=0; i< this.arrItemWaters.length;i++){
                        // console.log("i===="+i);
                        let pointCheckTOP:Vec2 = new Vec2(0,localConfig.instance.getItemWater_TOP_PosY(i));
                        if(i == 4 - indexStepOFF){
                            pointCheckTOP.y = ((1 - ratio) * localConfig.instance.ITEMWATER_HIGHT + localConfig.instance.getItemWater_PosY(i)) * scaleY + posY;
                        }else{
                            pointCheckTOP.y = pointCheckTOP.y * scaleY + posY;
                        }
                        // console.log("pointCheckTOP:"+pointCheckTOP);

                        let pointCheckBOTTOM:Vec2 = new Vec2(0,localConfig.instance.getItemWater_PosY(i));
                        pointCheckBOTTOM.y = pointCheckBOTTOM.y * scaleY + posY;
                        // console.log("pointCheckBOTTOM:"+pointCheckBOTTOM);

                        let scaleTOP:number = 1;
                        let posTOP_x:number = 0;
                        let intersectionsTOP = Utils.getPolygonIntersection(pointCheckTOP,0,arrRotatePoints);
                        // console.log(intersectionsTOP);
                        if(intersectionsTOP.length >= 2){
                            scaleTOP = Math.abs(intersectionsTOP[intersectionsTOP.length -1].x - intersectionsTOP[0].x)/localConfig.instance.ITEMWATER_WIDTH;
                            posTOP_x = (intersectionsTOP[intersectionsTOP.length -1].x + intersectionsTOP[0].x)/2;
                            // console.log(posTOP_x);
                        }

                        let intersectionsBOTTOM = Utils.getPolygonIntersection(pointCheckBOTTOM,0,arrRotatePoints);
                        let scaleBOTTOM:number = 1;
                        let posBOTTOM_x:number = 0;
                        // console.log(intersectionsBOTTOM);
                        if(intersectionsBOTTOM.length >= 2){
                            scaleBOTTOM = Math.abs(intersectionsBOTTOM[intersectionsBOTTOM.length - 1].x - intersectionsBOTTOM[0].x)/localConfig.instance.ITEMWATER_WIDTH;
                            posBOTTOM_x = (intersectionsBOTTOM[intersectionsBOTTOM.length - 1].x + intersectionsBOTTOM[0].x)/2;
                            // console.log(posBOTTOM_x);
                        }

                        // if(ratio >= 1){
                        //     this.drawGraphicsTest(pointCheckTOP,arrRotatePoints);
                        // }
                        let scaleWaterY:number = (scaleWater - scaleWaterPrev) * ratio + scaleWaterPrev;
                        // console.log("scaleWaterY:",scaleWaterY);
                        this.arrItemWaters[i].updateWaterOFF(scaleTOP,posTOP_x,scaleBOTTOM,posBOTTOM_x,scaleWaterY,indexStepOFF,1-ratio);
                    }

                },
                onComplete: () => {
                    this.setTubeOFFStep_Finished(itemTubeTarget,indexStepOFF,isRight,indexStepON,countWaterOFF);
                }
            }).start();


        if(isStartOFF){    
            itemTubeTarget.setStart_WaterON(indexStepON,countWaterOFF);
        }
    }

    setTubeOFFStep_Finished(itemTubeTarget:ItemTube,indexStepOFF:number,isRight:boolean,indexStepON:number,countWaterOFF:number){
        // console.error("setPourIndex_FinishedsetPourIndex_FinishedsetPourIndex_Finished",indexStepOFF,countWaterOFF);
        this.countItemWaterActive --;
        this.updateCountItemWater(this.countItemWaterActive);
        if(countWaterOFF > 0){
            this.setTubeOFF_StepbyStep(itemTubeTarget,indexStepOFF + 1,isRight ,indexStepON + 1,countWaterOFF - 1,false);
            return;
        }else{   
            this.setTubeMoveBack(indexStepOFF);
        }
    }

    setTubeMoveBack(indexStep:number){
        let itemTubeConfig:ItemTubeConfig = localConfig.instance.getItemTubeConfig_byIndexTube(localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.TUBE) - 1);
        let scaleWater:number = itemTubeConfig.arrScaleWaterConfigs[indexStep];
        this.tweenPivot = tween(this.groupPivot).to(this.TIME_MOVE_BACK, { position: new Vec3(0, 0, 0) }, {
            easing: 'linear', onComplete: () => {

            }
        }).start();
        //Tube
        this.tweenTube = tween(this.groupTube).to(this.TIME_MOVE_BACK, { position: new Vec3(0, 0, 0), eulerAngles: new Vec3(0, 0, 0) },
            {
                easing: 'quadOut', onComplete: () => { }
            }).start();

        this.tweenAllItemMove = tween(this.groupAllItemMove).to(this.TIME_MOVE_BACK, { position: new Vec3(0, 0, 0), scale: new Vec3(1, 1, 1) },
            {
                easing: 'quadOut', onComplete: () => {
                    // console.log("AAAAAAAAAAAAAA");
                }
            }).start();

        this.tweenAllItemRotate = tween(this.groupAllItemRotate).to(this.TIME_MOVE_BACK, { eulerAngles: new Vec3(0, 0, 0) },
            {
                easing: 'quadOut',
                onUpdate: (target, ratio) => {
                    let angleRotate: number = this.groupAllItemRotate.eulerAngles.z;
                    // console.log("angleRotate:"+angleRotate);
                    let posY: number = this.groupAllItemMove.position.y;
                    let scaleY: number = this.groupAllItemMove.scale.y;
                    // console.log("posY:"+angleRotate);
                    // console.log("scaleY:"+scaleY);
                    let arrRotatePoints: Vec2[] = [];


                    for (let i = 0; i < this.arrPoints.length; i++) {
                        let newPoint: Vec2 = Utils.rotatePointBack(this.arrPoints[i], new Vec2(0, 0), angleRotate);
                        arrRotatePoints.push(newPoint);
                    }

                    for (let i = 0; i < this.arrItemWaters.length; i++) {
                        // console.log("i===="+i);
                        let pointCheckTOP: Vec2 = new Vec2(0, localConfig.instance.getItemWater_TOP_PosY(i));
                        pointCheckTOP.y = pointCheckTOP.y * scaleY + posY;
                        // console.log("pointCheckTOP:"+pointCheckTOP);

                        let pointCheckBOTTOM: Vec2 = new Vec2(0, localConfig.instance.getItemWater_PosY(i));
                        pointCheckBOTTOM.y = pointCheckBOTTOM.y * scaleY + posY;
                        // console.log("pointCheckBOTTOM:"+pointCheckBOTTOM);

                        let scaleTOP: number = 1;
                        let posTOP_x: number = 0;
                        let intersectionsTOP = Utils.getPolygonIntersection(pointCheckTOP, 0, arrRotatePoints);
                        // console.log(intersectionsTOP);
                        if (intersectionsTOP.length >= 2) {
                            scaleTOP = Math.abs(intersectionsTOP[intersectionsTOP.length - 1].x - intersectionsTOP[0].x) / localConfig.instance.ITEMWATER_WIDTH;
                            posTOP_x = (intersectionsTOP[intersectionsTOP.length - 1].x + intersectionsTOP[0].x) / 2;
                            // console.log(posTOP_x);
                        }

                        let intersectionsBOTTOM = Utils.getPolygonIntersection(pointCheckBOTTOM, 0, arrRotatePoints);
                        let scaleBOTTOM: number = 1;
                        let posBOTTOM_x: number = 0;
                        // console.log(intersectionsBOTTOM);
                        if (intersectionsBOTTOM.length >= 2) {
                            scaleBOTTOM = Math.abs(intersectionsBOTTOM[intersectionsBOTTOM.length - 1].x - intersectionsBOTTOM[0].x) / localConfig.instance.ITEMWATER_WIDTH;
                            posBOTTOM_x = (intersectionsBOTTOM[intersectionsBOTTOM.length - 1].x + intersectionsBOTTOM[0].x) / 2;
                            // console.log(posBOTTOM_x);
                        }

                        // if(ratio >= 1){
                        //     this.drawGraphicsTest(pointCheckTOP,arrRotatePoints);
                        // }
                        let scaleWaterY: number = (1 - ratio) * (scaleWater - 1) + 1;
                        this.arrItemWaters[i].updateMoveToTarget(scaleTOP, posTOP_x, scaleBOTTOM, posBOTTOM_x, scaleWaterY);
                    }

                },
                onComplete: () => {
                    this.setTubeMoveBack_Finished();
                }
            }).start();
    }

    setTubeMoveBack_Finished(){
        // console.log("setTubeMoveBack_FinishedsetTubeMoveBack_Finished",this.arrItemWaters[0].indexColor,this.arrItemWaters[1].indexColor,this.arrItemWaters[2].indexColor,this.arrItemWaters[3].indexColor);    
        this.currState = ITEM_TUBE_STATE.NONE;
        this.btnTube.interactable = true;
        let isWaterUnlock:boolean = false;
        let countItemWater_SameHeadIndexColor_LOCK:number = this.getCountItemWater_SameHeadIndexColor_LOCK();

        // console.log("countItemWater_SameHeadIndexColor_LOCK:"+countItemWater_SameHeadIndexColor_LOCK);
        for(let i=0; i< this.arrItemWaters.length; i++){
            if(i < this.countItemWaterActive){
                if(i >= this.countItemWaterActive - countItemWater_SameHeadIndexColor_LOCK){
                    if(this.arrItemWaters[i].waterState == WATER_STATE.LOCK){
                        // console.log("AAAAAAAAAAAAA");
                        isWaterUnlock = true;
                        this.arrItemWaters[i].setWaterUnlock();
                        clientEvent.dispatchEvent(Constants.SHOW_EFX_QUESTION,new Vec3(this.node.position.x, - 270 + i * 110 + this.node.position.y + 55 + 120,this.node.position.z),localConfig.instance.scaleTube);
                    }else{
                        this.arrItemWaters[i].setWaterOFF_Finished();
                    }
                }else{
                    this.arrItemWaters[i].setWaterOFF_Finished();
                }
            }
        }

        if(isWaterUnlock){
            this.setTube_WaterUnlock();
        }else{
            clientEvent.dispatchEvent(Constants.TUBE_MOVEBACK_FINISHED);
        }
       
    }


    setTube_WaterUnlock(){
        this.currState = ITEM_TUBE_STATE.UNLOCK;
        this.scheduleOnce(()=>{
            this.currState = ITEM_TUBE_STATE.NONE;
            clientEvent.dispatchEvent(Constants.TUBE_MOVEBACK_FINISHED);
        },0.25);
    }



    //#region WATER ON

    setWaitting_WaterON(){
        this.currState = ITEM_TUBE_STATE.WAITTING;
    }
    
    setStart_WaterON(indexWater:number,countWaterON:number){
        this.setUnselect_ItemTube_Now();
        this.currState = ITEM_TUBE_STATE.ON;
        if(this.isOnStepbyStep){
            let countItemWater_Available:number = this.getCount_ItemWater_Available();
            let indexONNow:number = countItemWater_Available - countWaterON - 1;
            this.setTubeON_Now(indexONNow);
        }
        this.setTubeON_StepbyStep(indexWater,countWaterON);
    }

    setTubeON_Now(indexONNow:number){
        // console.log("setTubeON_Now",indexONNow);
        this.countItemWaterActive = indexONNow;
        // console.log(this.arrItemWaters[0].indexColor,this.arrItemWaters[1].indexColor,this.arrItemWaters[2].indexColor,this.arrItemWaters[3].indexColor);
        if(this.tweenProgressON){
            // console.log("setTubeON_NowsetTubeON_NowsetTubeON_NowsetTubeON_Now");
            this.tweenProgressON.stop();
        }
        for(let i=0; i< this.arrItemWaters.length;i++){
            if(i < indexONNow){
                this.arrItemWaters[i].node.active = true;
                this.arrItemWaters[i].setWaterON_Now();
            }
        }
    }

    isOnStepbyStep:boolean = false;
    setTubeON_StepbyStep(indexWater:number,countWaterON:number){
        // console.log("setTubeONIndex:",indexWater,countWaterON);
        this.isOnStepbyStep = true;
        // this.node.active = true;
        this.waterLine.node.active = true;
        let itemWaterON:ItemWater = this.arrItemWaters[indexWater];
        this.progressBar_waterON.progress = 0;
        itemWaterON.setWaterOFF_Now();  
        itemWaterON.node.active = true;
        this.tweenProgressON = tween(this.progressBar_waterON).to(this.TIME_POUR_INDDEX, { progress: 1 },
            {
                easing: 'linear',
                onUpdate: (target, ratio) => {
                    // console.log(ratio);
                    let pointCheckTOP: Vec2 = new Vec2(0, localConfig.instance.getItemWater_PosY(indexWater));
                    pointCheckTOP.y = pointCheckTOP.y + ratio * localConfig.instance.ITEMWATER_HIGHT;

                    let intersectionsTOP = Utils.getPolygonIntersection(pointCheckTOP, 0, this.arrPoints);
                    // console.log(intersectionsTOP);
                    if (intersectionsTOP.length >= 2) {
                        let scaleTOP = Math.abs(intersectionsTOP[intersectionsTOP.length - 1].x - intersectionsTOP[0].x) / localConfig.instance.ITEMWATER_WIDTH;
                        let posTOP_y = ratio * 95;
                        
                        itemWaterON.updateWaterON(scaleTOP,posTOP_y,ratio);
                    }

                },
                onComplete:()=>{
                    this.setTubeONIndex_Finished(indexWater,countWaterON);
                }
            }
        ).start();

    }

    setTubeONIndex_Finished(indexWater:number,countWaterON:number){
        // console.log("setTubeONIndex_FinishedsetTubeONIndex_Finished"+indexWater,countWaterON);
        this.countItemWaterActive ++;
        this.updateCountItemWater(this.countItemWaterActive);
        if(countWaterON == 0){
            this.isOnStepbyStep = false;
            this.waterLine.node.active = false;
            if(this.checkTube_Finished() && indexWater == 3){
                // console.log("TUBE DONE");
                if(this.isTubeClay){
                    this.setMagicClayFinished();
                }
                this.currState = ITEM_TUBE_STATE.DONE;
                this.showIconCover();
                clientEvent.dispatchEvent(Constants.TUBE_DONE,new Vec3(this.node.position.x,this.node.position.y + 150,this.node.position.z));
                clientEvent.dispatchEvent(Constants.TUBE_OBIM_DONE,this.arrItemWaters[0].indexColor);
                clientEvent.dispatchEvent(Constants.TUBE_PLASER_DONE,this.tubeX,this.tubeY);
                FBInstantManager.instance.setHaptic();
                clientEvent.dispatchEvent(Constants.SHOW_EFX_TUBE_FINSIHED,new Vec3(this.node.position.x,this.node.position.y - 50,this.node.position.z),localConfig.instance.scaleTube);

                
            }else if(this.currState == ITEM_TUBE_STATE.WAITTING){

            }else{
                this.currState = ITEM_TUBE_STATE.NONE;
            }
        }else{
            this.setTubeON_StepbyStep(indexWater+1,countWaterON-1);
        }
    }
    //#endregion


    touchItemTube(){
        // console.log("touchItemTube:",this.currState);
        // console.log(this.arrItemWaters[0].indexColor,this.arrItemWaters[1].indexColor,this.arrItemWaters[2].indexColor,this.arrItemWaters[3].indexColor);
        // let countItem_Available:number = this.getCountItemWater_SameHeadIndexColor();
        // console.log("countItem_Available:",countItem_Available);
        if(localConfig.instance.currGameState == GAME_STATE.NO_MOVES) return;
        if(localConfig.instance.currGameState == GAME_STATE.SHUFFLE ){
            this.setShuffle();
        }else{
            if(this.currState == ITEM_TUBE_STATE.NONE || this.currState == ITEM_TUBE_STATE.SELECT || this.currState == ITEM_TUBE_STATE.ON || this.currState == ITEM_TUBE_STATE.UNSELECT){
                
                clientEvent.dispatchEvent(Constants.TUBE_SELECT,this);
            }else if(this.currState == ITEM_TUBE_STATE.WAITTING || this.currState == ITEM_TUBE_STATE.DONE){

            }else{
                this.setSelectTube_Fail();
            }
        }
    }

    touchEndItemTube(){
        console.log("touchEndItemTube");
    }

    onTouchMoveItemTube(event:EventTouch){
        console.log("onTouchMoveItemTube");
        let touches_Check = event.getTouches();
        let locationUI_Check = touches_Check[0].getUILocation();
        let posCheck:Vec3 = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(locationUI_Check.x, locationUI_Check.y));

        console.log("posCheck:",posCheck,locationUI_Check);
    }

    setSelectTube_Fail(){

    }

    setSelect_ItemTube(){
        // console.log("setSelect_ItemTube");
        this.currState = ITEM_TUBE_STATE.SELECT;
        this.stopAlllTween();
        this.tweenTube = tween(this.groupTube).to(0.15,{position: new Vec3(0,60,0)},{easing:'backOut',onComplete:()=>{
            this.setSelect_ItemTube_Finished();
        }}).start();
        AudioManager2.instance.playSound_PickUp();
    }

    setSelect_ItemTube_Finished(){

    }

    setUnselect_ItemTube(isPlaySound:boolean = true){
        // console.log("setUnselect_ItemTube");
        this.currState = ITEM_TUBE_STATE.UNSELECT;
        this.stopAlllTween();
        this.tweenTube = tween(this.groupTube).to(0.15,{position: new Vec3(0,0,0)},{easing:'backOut',onComplete:()=>{
            this.setUnselect_ItemTube_Finished();
        }}).start();
        if(isPlaySound){
            AudioManager2.instance.playSound_PickDown();
        }
    }
    

    setUnselect_ItemTube_Now(){
        if(this.currState == ITEM_TUBE_STATE.SELECT){
            this.stopAlllTween();
            this.currState = ITEM_TUBE_STATE.NONE;
        }
    }

    setUnselect_ItemTube_Now_ResetPos(){
        if(this.currState == ITEM_TUBE_STATE.SELECT){
            this.stopAlllTween();
            this.currState = ITEM_TUBE_STATE.NONE;
            this.groupTube.setPosition(0,0,0);
        }
    }

    setUnselect_ItemTube_Finished(){
        if(this.currState == ITEM_TUBE_STATE.UNSELECT){
            this.currState = ITEM_TUBE_STATE.NONE;
        }
    }

    setItemTube_beSelected(){
        // this.groupTube.setPosition(0,0,0);
        this.currState = ITEM_TUBE_STATE.WAITTING;
    }

    checkTube_None(){
        for(let i=0; i< this.arrItemWaters.length;i++){
            if(this.arrItemWaters[i].indexColor != -1){
                return false;
            }
        }
        return true;
    }

    checkTube_Done(){
        if(this.currState == ITEM_TUBE_STATE.DONE){
            return true;
        }

        if(this.checkTube_None()){
            return true;
        }
        return false;
    }

    checkTube_Finished(){
        let checkIndexColor:number = this.arrItemWaters[0].indexColor;
        if(this.arrItemWaters[0].waterState == WATER_STATE.LOCK) return false;
        if(checkIndexColor == -1) return false;
        for(let i=1; i< this.arrItemWaters.length;i++){
            if(this.arrItemWaters[i].waterState == WATER_STATE.LOCK) return false;
            if(this.arrItemWaters[i].indexColor == -1 || this.arrItemWaters[i].indexColor != checkIndexColor){
                return false;
            }
        }
        return true;
    }


    getHeadIndexColor(){
        for(let i= this.arrItemWaters.length -1;i>=0 ;i--){
            if(this.arrItemWaters[i].indexColor != -1){
                return this.arrItemWaters[i].indexColor;
            }
        }
    }

    getCount_ItemWater_Available(){
        let countItemWater_Available = 0;
        for(let i=0; i< this.arrItemWaters.length;i++){
            if(this.arrItemWaters[i].indexColor != -1){
                countItemWater_Available ++;
            }else{
                break;
            }
        }
        return countItemWater_Available;
    }

    getCountItemWater_SameHeadIndexColor(){
        if(this.checkTube_None()) return 0;
        let headIndexColor:number = this.getHeadIndexColor();
        let countItemWater_SameHeadIndexColor:number = 0;
        for(let i= this.arrItemWaters.length -1;i>=0 ;i--){
            if(this.arrItemWaters[i].indexColor != -1 ){
                if(this.arrItemWaters[i].indexColor == headIndexColor && this.arrItemWaters[i].waterState == WATER_STATE.NONE){
                    countItemWater_SameHeadIndexColor ++;
                }
                else{
                    break;
                }
            }
        }

        return countItemWater_SameHeadIndexColor;
    }

    getCountItemWater_SameHeadIndexColor_LOCK(){
        if(this.checkTube_None()) return 0;
        let headIndexColor:number = this.getHeadIndexColor();
        let countItemWater_SameHeadIndexColor:number = 0;
        for(let i= this.arrItemWaters.length -1;i>=0 ;i--){
            if(this.arrItemWaters[i].indexColor != -1 ){
                if(this.arrItemWaters[i].indexColor == headIndexColor){
                    countItemWater_SameHeadIndexColor ++;
                }
                else{
                    break;
                }
            }
        }

        return countItemWater_SameHeadIndexColor;
    }


    getCountIndexColor_SameHeadIndexColor(arrIndexColors:number[]){
        if(arrIndexColors.length == 0) return 0;
        let countIndexColor_SameHeadIndexColor:number = 0;
        let headIndexColor:number = arrIndexColors[arrIndexColors.length-1];
        for(let i= arrIndexColors.length -2;i>=0 ;i--){
            if(arrIndexColors[i] == headIndexColor){
                countIndexColor_SameHeadIndexColor ++;
            }else{  
                break;
            }
        }
        return countIndexColor_SameHeadIndexColor;

    }

    checkAllItemWater_SameIndexColor(){
        let countItemWater_SameHeadIndexColor = this.getCountItemWater_SameHeadIndexColor();
        let countItemWater_Available = this.getCount_ItemWater_Available();

        if(countItemWater_Available == countItemWater_SameHeadIndexColor){
            return true;
        }
        return false;
    }

    getCountItemWater_ON_Available(){
        let countItemWater_Avaliable:number = this.getCount_ItemWater_Available();

        return 4- countItemWater_Avaliable;

    }

    updateHeadColorIndex_Now(_indexWater:number,_indexColor:number,_countItemWaterON:number){
        for(let i=0;i< _countItemWaterON;i++){
            this.arrItemWaters[_indexWater+i].updateIndexColor(_indexColor);
        }
        this.waterLine.color = localConfig.instance.getWaterColor_byID(_indexColor);
    }

    updateMagicHeadColorIndex_Now(_indexWater:number,_indexColor:number,_countItemWaterON:number){
        for(let i=0;i< _countItemWaterON;i++){
            this.arrItemWaters[_indexWater+i].updateMagicIndexColor(_indexColor);
        }
        this.waterLine.color = localConfig.instance.getMagicColor_byID(_indexColor);
    }


    showIconCover(){
        if(localConfig.instance.isTops == false) return;
        this.iconCover.node.active = true;
        this.iconCover.node.setPosition(new Vec3(0,60,0));
        this.coverOpacity.opacity = 0;
        
        this.tweenIconCover = tween(this.iconCover.node).delay(0.1).to(0.5,{position:new Vec3(0,0,0)},{easing:'quadOut'}).start();
        this.tweenCoverOpacity = tween(this.coverOpacity).to(0.2,{opacity:255},{easing:'quadOut'}).start();
    }

    //#region UNDO
    setUndo(_arrIndexColors:number[],indexLock:number){
        for(let i=0; i< this.arrItemWaters.length;i++){
            this.arrItemWaters[i].setUndoIndexColor_Update(_arrIndexColors[i],i < indexLock)
        }

        let countActive:number = 0;
        for(let i=0; i< _arrIndexColors.length;i++){
            if(_arrIndexColors[i] > -1){
                countActive ++;
            }
        }

        this.updateCountItemWater(countActive);

        if(this.currState == ITEM_TUBE_STATE.SELECT){
            this.setUnselect_ItemTube(false);
        }
    }

    setUndoMagic(_arrIndexColors:number[],_arrWaterLocks:WATER_STATE[]){
        for(let i=0; i< this.arrItemWaters.length;i++){
            // console.log("setUndoMagic",this.tubeX,this.tubeY);
            this.arrItemWaters[i].setUndoMagicIndexColor_Update(_arrIndexColors[i],_arrWaterLocks[i] == WATER_STATE.LOCK);
        }

        let countActive:number = 0;
        for(let i=0; i< _arrIndexColors.length;i++){
            if(_arrIndexColors[i] > -1){
                countActive ++;
            }
        }

        this.updateCountItemWater(countActive);

        if(this.currState == ITEM_TUBE_STATE.SELECT){
            this.setUnselect_ItemTube(false);
        }
    }
    //#endregion



    //#region ADDCOL
    initItemTube_AddCol(_tubeX:number,_tubeY:number){
        this.loadTube();
        this.tubeX = _tubeX;
        this.tubeY = _tubeY;

        let posTube:Vec2 = localConfig.instance.getPosTube_byXY(localConfig.instance.currLevelDataInfo,this.tubeX,this.tubeY);

        this.node.setPosition(new Vec3(posTube.x + 300,posTube.y,0));
        for(let i=0; i< this.arrItemWaters.length;i++){
            this.arrItemWaters[i].initIndexColor(-1);
            this.arrItemWaters[i].initWaterLock(WATER_STATE.NONE);
            this.arrItemWaters[i].node.active = false;
        }
        this.initItemWaterScale();
        this.waterLine.node.active = false;
        this.iconCover.node.active = false;
        this.coverOpacity.opacity = 0;

        this.updateCountItemWater(0);
        this.currState = ITEM_TUBE_STATE.ADDCOL;

        this.showAddCol();
    }

    initMagicItemTube_AddCol(_tubeX:number,_tubeY:number){
        this.loadTube();
        this.tubeX = _tubeX;
        this.tubeY = _tubeY;

        let posTube:Vec2 = localConfig.instance.getMagicPosTube_byXY(localConfig.instance.currMagicLevelConfigInfo,this.tubeX,this.tubeY);
        // console.log("posTube:",posTube,this.tubeX,this.tubeY);
        this.node.setPosition(new Vec3(posTube.x + 300,posTube.y,0));
        for(let i=0; i< this.arrItemWaters.length;i++){
            this.arrItemWaters[i].initMagicIndexColor(-1);
            this.arrItemWaters[i].initWaterLock(WATER_STATE.NONE);
            this.arrItemWaters[i].node.active = false;
        }
        this.initItemWaterScale();
        this.waterLine.node.active = false;
        this.iconCover.node.active = false;
        this.coverOpacity.opacity = 0;

        this.updateCountItemWater(0);
        this.currState = ITEM_TUBE_STATE.ADDCOL;

        this.showMagicAddCol();
    }

    showAddCol(){
        let posTube:Vec2 = localConfig.instance.getPosTube_byXY(localConfig.instance.currLevelDataInfo,this.tubeX,this.tubeY);
        this.tweenAddCol = tween(this.node).to(0.2,{position:new Vec3(posTube.x,posTube.y,0)},{easing:'quadOut',onComplete:()=>{
            this.showAddCol_Finished();
        }}).start();
    }

    showMagicAddCol(){
        let posTube:Vec2 = localConfig.instance.getMagicPosTube_byXY(localConfig.instance.currMagicLevelConfigInfo,this.tubeX,this.tubeY);

        this.tweenAddCol = tween(this.node).to(0.2,{position:new Vec3(posTube.x,posTube.y,0)},{easing:'quadOut',onComplete:()=>{
            this.showAddCol_Finished();
        }}).start();
    }

    showAddCol_Finished(){
        // console.log("showAddCol_Finished");
        // console.log(this.node);
        this.currState = ITEM_TUBE_STATE.NONE;
    }

    //#endregion

    setBottle_Touch_Available(isAvailable:boolean){
        this.btnTube.node.active = isAvailable;
    }
    
    //#region TUT
    @property(SpriteFrame)
    tut_v_SpriteFrame:SpriteFrame;
    @property(SpriteFrame)
    tut_x_SpriteFrame:SpriteFrame;

    @property(Node)
    tutCheck:Node;

    @property(Sprite)
    tutCheck_Sprite:Sprite;

    showTut_Level2(isCorrect:boolean){
        this.tutCheck.active = true;
        if(isCorrect){
            this.tutCheck_Sprite.spriteFrame = this.tut_v_SpriteFrame;
        }else{
            this.tutCheck_Sprite.spriteFrame = this.tut_x_SpriteFrame;
        }
    }

    hideTut_Level2(){
        this.tutCheck.active = false;
    }
    //#endregion

    //#region OBIMOBJ
    @property(ItemTubeOBIMObj)
    itemTubeOBIMObj:ItemTubeOBIMObj = null;

    initMagicOBIMObj(_magicOBIMInfo:MagicOBIMInfo){
        this.currState = ITEM_TUBE_STATE.OBIM;
        this.itemTubeOBIMObj.node.active = true;
        this.itemTubeOBIMObj.setInit(_magicOBIMInfo,cb=>{
            console.error("cbOBIMDone");
            this.currState = ITEM_TUBE_STATE.NONE;
        },cb=>{
            this.setOBIMShowEfx();
        });
    }

    setOBIMShowEfx(){
        clientEvent.dispatchEvent(Constants.SHOW_EFX_OBIM_FINSIHED,new Vec3(this.node.position.x,this.node.position.y + 100,this.node.position.z),localConfig.instance.scaleTube);
    }
    //#endregion

    //#region CLAY
    @property(ItemTubeClayObj)
    itemTubeClayObj:ItemTubeClayObj = null;

    isTubeClay:boolean = false;
    initMagicClayObj(_magicOBIMInfo:MagicOBIMInfo){
        this.isTubeClay = true;
        this.itemTubeClayObj.node.active = true;
    }

    setMagicClayFinished(){
        this.isTubeClay = false;
        this.itemTubeClayObj.setShowClayFinished();
        clientEvent.dispatchEvent(Constants.SHOW_EFX_CLAY_FINSIHED,new Vec3(this.node.position.x,this.node.position.y - 100,this.node.position.z),localConfig.instance.scaleTube);
    }
    //#endregion

    //#region PLASTER
    @property(ItemTubePlasterObj)
    itemTubePlasterObj:ItemTubePlasterObj = null;

    initMagicPlasterObj(_magicOBIMInfo:MagicOBIMInfo){
        this.currState = ITEM_TUBE_STATE.PLASTER;
        this.itemTubePlasterObj.node.active = true;
        this.itemTubePlasterObj.setInit(_magicOBIMInfo,this.tubeX,this.tubeY,cb=>{
            this.currState = ITEM_TUBE_STATE.NONE;
            this.setPlasterShowEfx();
        });
    }

    setPlasterShowEfx(){
        clientEvent.dispatchEvent(Constants.SHOW_EFX_PLASTER_FINSIHED,new Vec3(this.node.position.x,this.node.position.y -100,this.node.position.z),localConfig.instance.scaleTube);
    }
    //#endregion

    //#region Shuffle
    checkTube_Shuffle_Available():boolean{ 
        if(this.currState == ITEM_TUBE_STATE.PLASTER) return false;
        if(this.currState == ITEM_TUBE_STATE.OBIM) return false;
        if(this.isTubeClay) return false;
        if(this.currState == ITEM_TUBE_STATE.DONE) return false;
        if(this.checkTube_None()) return false;
        if(this.getCount_ItemWater_Available() <= 1) return false;
        return true;
    }

    tweenShuffle:Tween<{}> = null;
    setShuffle(){
        let arrShuffleIndexs:number[] = [];
        let arrIndexColors_Temp2:number[] = [];
        let arrWaterStates_Temp2:WATER_STATE[] = [];
        for(let i=0; i<this.arrItemWaters.length;i++){
            if(this.arrItemWaters[i].indexColor == -1) continue;
            // console.log(this.arrItemWaters[i].indexColor,this.arrItemWaters[i].waterState);
            arrIndexColors_Temp2.push(this.arrItemWaters[i].indexColor);
            arrWaterStates_Temp2.push(this.arrItemWaters[i].waterState);
            arrShuffleIndexs.push(i);
        }
        let arrIndexColors_Temp:number[] = lodash.cloneDeep(arrIndexColors_Temp2);
        let arrWaterStates_Temp:WATER_STATE[] = lodash.cloneDeep(arrWaterStates_Temp2);

        arrShuffleIndexs.sort(function(a, b) {return 0.5 - Math.random()});
        // console.log("11111",arrShuffleIndexs);
        let isShuffled:boolean = false;
        for(let i=0; i<arrShuffleIndexs.length;i++){
            if(arrShuffleIndexs[i] != i) isShuffled = true;
        }
        if(!isShuffled){
            // console.log("Shuffled reversereversereverse");
            arrShuffleIndexs.reverse();
        } 
        // console.log("22222",arrShuffleIndexs);
        if(this.tweenShuffle){
            this.tweenShuffle.stop();
        }
        this.groupTube.setRotationFromEuler(new Vec3(0,0,0));

        this.tweenShuffle = tween(this.groupTube).to(0.05,{eulerAngles:new Vec3(0,0,10)},{easing:'quadOut'})
                                                     .to(0.1,{eulerAngles:new Vec3(0,0,-10)},{easing:'quadOut'})
                                                     .to(0.05,{eulerAngles:new Vec3(0,0,0)},{easing:'quadOut'})
                                                     .to(0.025,{eulerAngles:new Vec3(0,0,5)},{easing:'quadOut'})
                                                     .to(0.05,{eulerAngles:new Vec3(0,0,-5)},{easing:'quadOut'})
                                                     .to(0.025,{eulerAngles:new Vec3(0,0,0)},{easing:'quadOut'})
                                                     .union().call(()=>{
                                                        for(let i=0; i<arrShuffleIndexs.length;i++){
                                                            this.arrItemWaters[i].initMagicIndexColor(arrIndexColors_Temp[arrShuffleIndexs[i]]);
                                                            if(this.arrItemWaters[i].waterState == WATER_STATE.LOCK) {
                                                                if(arrWaterStates_Temp[arrShuffleIndexs[i]] == WATER_STATE.NONE){
                                                                    this.arrItemWaters[i].setWaterUnlock();
                                                                    clientEvent.dispatchEvent(Constants.SHOW_EFX_QUESTION,new Vec3(this.node.position.x, - 270 + i * 110 + this.node.position.y + 55,this.node.position.z),localConfig.instance.scaleTube);
                                                                }
                                                            }
                                                        }
                                                
                                                        this.groupTube.setRotationFromEuler(new Vec3(0,0,0));
                                                        clientEvent.dispatchEvent(Constants.SHUFFLE_TUBE_FINISHED);
                                                     }).start();
                                                     
    }
    //#endregion
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
