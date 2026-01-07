
import { _decorator, Button, Component, Node, tween, Tween, UIOpacity, Vec3 } from 'cc';
import { ItemPlayerRaceProgress } from './ItemPlayerRaceProgress';
import { localConfig } from '../../localConfig';
import { Constants } from '../../framework/constants';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = RaceGroupManager
 * DateTime = Wed Nov 13 2024 11:51:18 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = RaceGroupManager.ts
 * FileBasenameNoExtension = RaceGroupManager
 * URL = db://assets/scripts/game/race/RaceGroupManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('RaceGroupManager')
export class RaceGroupManager extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Node)
    groupJoin:Node = null;

    @property(Button)
    btnJoin:Button = null;

    @property(Node)
    groupActive:Node = null;

    @property(ItemPlayerRaceProgress)
    myPlayerProgress:ItemPlayerRaceProgress = null;

    @property(ItemPlayerRaceProgress)
    arrPlayerOpponentProgress:ItemPlayerRaceProgress[] = [];

    @property(UIOpacity)
    groupAllOpacity:UIOpacity = null;

    tweenGroupAll:Tween<{}> = null;
    tweenGroupAllOpacity:Tween<{}> = null;
    protected onEnable(): void {
        this.btnJoin.node.on(Constants.CLICK, this.touchJoin, this);
        this.showGroup();
        this.showInfoGroup();
    }

    protected onDisable(): void {
        this.resetGroup();
        this.btnJoin.node.off(Constants.CLICK, this.touchJoin, this);
    }

    resetGroup(){
        this.groupAllOpacity.opacity = 0;
        this.node.setPosition(new Vec3(0,-650,0));
        if(this.tweenGroupAll != null){
            this.tweenGroupAll.stop();
        }
        if(this.tweenGroupAllOpacity != null){
            this.tweenGroupAllOpacity.stop();
        }
    }
    showGroup(){
        this.node.active = true;
        this.tweenGroupAll = tween(this.node).to(0.5,{position:new Vec3(0,-550,0)},{easing:'quadOut',onComplete:()=>{

        }}).start();

        this.tweenGroupAllOpacity = tween(this.groupAllOpacity).to(0.5,{opacity:255},{easing:'linear',onComplete:()=>{

        }}).start();
    }

    
    showInfoGroup(){
        // console.log("showInfoGroup",localConfig.instance.raceActive,localConfig.instance.arrPlayerRaceDataInfos);
        if(localConfig.instance.raceActive == 1){
            this.groupJoin.active = false;
            this.groupActive.active = true;
            if(!localConfig.instance.isInitRaceGroup){
                localConfig.instance.isInitRaceGroup = true;
                for(let i=0; i<this.arrPlayerOpponentProgress.length;i++){
                    this.arrPlayerOpponentProgress[i].initPlayerOpponent(localConfig.instance.arrPlayerRaceDataInfos[i]);
                }

                this.myPlayerProgress.initMyPlayer();
            }
        }else if(localConfig.instance.raceActive == 0){
            this.groupJoin.active = true;
            this.groupActive.active = false;
        }
    }

    touchJoin(){
        localConfig.instance.setStartRace();
        this.showInfoGroup();
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
