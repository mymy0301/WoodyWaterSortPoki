
import { _decorator, Component, instantiate, Node, Prefab, Vec3 } from 'cc';
import { clientEvent } from '../framework/clientEvent';
import { Constants } from '../framework/constants';
import { ItemHeartUnlimited } from './ItemHeartUnlimited';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = HeartUnlimitedPoolManager
 * DateTime = Wed May 07 2025 15:47:00 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = HeartUnlimitedPoolManager.ts
 * FileBasenameNoExtension = HeartUnlimitedPoolManager
 * URL = db://assets/scripts/common/HeartUnlimitedPoolManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('HeartUnlimitedPoolManager')
export class HeartUnlimitedPoolManager extends Component {
    @property(Prefab)
    itemPoolPrefab:Prefab;

    @property(Node)
    poolParentNode:Node;


    @property(Node)
    target_Node:Node;

    @property(Node)
    start_Node:Node;

    arrPools:Node[] = [];

    

    onEnable(){
        clientEvent.on(Constants.SHOW_ADDHEART_UNLIMITED,this.showAddHeartUnlimited,this);
        clientEvent.on(Constants.UPDATE_HEART_TARGETPOS,this.updateTargetPos,this);
        clientEvent.on(Constants.UPDATE_HEART_STARTPOS,this.updateStartPos,this);
    }

    onDisable(){
        clientEvent.off(Constants.SHOW_ADDHEART_UNLIMITED,this.showAddHeartUnlimited,this);
        clientEvent.off(Constants.UPDATE_HEART_TARGETPOS,this.updateTargetPos,this);
        clientEvent.off(Constants.UPDATE_HEART_STARTPOS,this.updateStartPos,this);
    }

    start () {
        // [3]
    }

    updateTargetPos(posTarget:Vec3){
        console.log("updateHEART StartPos",posTarget);
        this.target_Node.setWorldPosition(posTarget);
    }

    updateStartPos(posStart:Vec3){
        this.start_Node.setWorldPosition(posStart);
    }

    showAddHeartUnlimited(countTime:number){
        let itemHeartUnlimited = this.getItem();
        itemHeartUnlimited.getComponent(ItemHeartUnlimited).initHeartUnlimited(countTime,this.start_Node.getWorldPosition(),this.target_Node.getWorldPosition(),0);
    }



    getItem(){
        for(let i=0; i< this.arrPools.length;i++){
            if(!this.arrPools[i].active){
                return this.arrPools[i];
            }
        }

        let obj = instantiate(this.itemPoolPrefab);
        obj.parent = this.poolParentNode;
        this.arrPools.push(obj);
        return obj;
        
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
