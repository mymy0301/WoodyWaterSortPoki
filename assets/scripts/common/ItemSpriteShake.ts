
import { _decorator, Component, Node, Vec2, Vec3 } from 'cc';
import { lodash } from '../framework/lodash';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemSpriteShake
 * DateTime = Mon Feb 14 2022 15:55:01 GMT+0700 (Indochina Time)
 * Author = tuzkekizer
 * FileBasename = ItemSpriteShake.ts
 * FileBasenameNoExtension = ItemSpriteShake
 * URL = db://assets/scripts/common/ItemSpriteShake.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemSpriteShake')
export class ItemSpriteShake extends Component {
    isShakePos:boolean = false;
    amountPos:number = 0;
    timeShake_Pos:number = 0;

    isShakeScale:boolean = false;
    amount_Scale:number = 0;
    timeShake_Scale:number = 0.2;



    start () {
        // [3]
    }

    update (deltaTime: number) {
        // [4]
        if(this.isShakeScale){
            this.timeShake_Scale -= deltaTime;
            this.amount_Scale -= this.amount_Scale * deltaTime;

            if(this.timeShake_Scale <= 0){
                this.isShakeScale = false;
                this.node.setScale(new Vec3(1,1,1));
                return;
            }
            let scaleValueX = 1 + lodash.randomFloat(0,this.amount_Scale);
            let scaleValueY = 1 + lodash.randomFloat(0,this.amount_Scale);
            this.node.setScale(new Vec3(scaleValueX,scaleValueY,1));
        }
    }


    setShake_Scale(_timeShake:number,_amount:number){

        this.timeShake_Scale = _timeShake;
        this.amount_Scale = _amount;
        this.isShakeScale = true;
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
