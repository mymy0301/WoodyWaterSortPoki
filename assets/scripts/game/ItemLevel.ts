
import { _decorator, Color, Component, Label, Node, sp, Sprite, tween, Vec3 } from 'cc';
import { LEVEL_STATE } from '../framework/constants';
import { MagicLevelDataInfo } from '../newlevel/MagicLevelDataInfo';
import { localConfig } from '../localConfig';
import { LevelConfigInfo } from '../newlevel/LevelConfigInfo';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemLevel
 * DateTime = Wed Oct 16 2024 05:14:04 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemLevel.ts
 * FileBasenameNoExtension = ItemLevel
 * URL = db://assets/scripts/game/ItemLevel.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemLevel')
export class ItemLevel extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Node)
    objGroup:Node = null;

    @property(Node)
    objLock:Node = null;

    @property(Sprite)
    iconLock:Sprite = null;

    @property(Label)
    txtLevel:Label = null;

    @property(Node)
    objFinsihed:Node = null;

    @property(sp.Skeleton)
    skeleton:sp.Skeleton = null;

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    level:number = 0;
    initLevel(level:number,state:LEVEL_STATE){
        this.level = level;
        // console.log("level",level);
        if(level < 1){
            this.objGroup.active = false;
            return;
        }
        this.txtLevel.string = `${this.level}`;
        // console.log("level",level);
        let levelConfigInfo:LevelConfigInfo = localConfig.instance.getMagicLevelConfigInfo_byLevelIndex(level);
        if(levelConfigInfo != null && levelConfigInfo.isSuperHard){
            // console.log("star");
            this.skeleton.node.active = true;
            this.skeleton.setAnimation(0,"star",true);
        }else if(levelConfigInfo != null && levelConfigInfo.isHard){
            this.skeleton.node.active = true;
            this.skeleton.setAnimation(0,"fire",true);
        }else{
            this.skeleton.node.active = false;
        }
        
        let posX:number = 0;
        if(this.level %2 == 1){
            posX = 0;
        }else if(this.level % 4 == 0){
            posX = -180;
        }else{
            posX = 180;
        }
        this.objGroup.setPosition(new Vec3(posX,0,0));

        if(state == LEVEL_STATE.ACTIVE){
            this.txtLevel.color = new Color(214,255,0,255);
        }else{
            this.txtLevel.color = new Color(255,137,58,150);
        }
        this.objLock.active= false;
        this.objFinsihed.active = false;
        if(state == LEVEL_STATE.FINISHED){
            this.objFinsihed.active = true;
        }else if(state == LEVEL_STATE.LOCK){
            this.objLock.active = true;
            this.iconLock.node.active = false;
        }
    }

    setFinsihed(){
        this.objFinsihed.active = true;
        this.objFinsihed.setScale(new Vec3(0,0,0));
        tween(this.objFinsihed).to(0.3, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut', onComplete: () => { 
            this.txtLevel.color = new Color(255,137,58,255);
        } }).start();
    }

    setActive(){
        this.objLock.active = false;
        this.objFinsihed.active = false;
        this.txtLevel.color = new Color(214,255,0,255);
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
