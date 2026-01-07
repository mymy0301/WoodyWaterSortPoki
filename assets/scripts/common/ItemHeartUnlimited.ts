
import { _decorator, Component, Label, Node, tween, UIOpacity, Vec3 } from 'cc';
import { AudioManager2 } from '../framework/audioManager2';
import { lodash } from '../framework/lodash';
import { clientEvent } from '../framework/clientEvent';
import { Constants } from '../framework/constants';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemHeartUnlimited
 * DateTime = Wed May 07 2025 15:51:25 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemHeartUnlimited.ts
 * FileBasenameNoExtension = ItemHeartUnlimited
 * URL = db://assets/scripts/common/ItemHeartUnlimited.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemHeartUnlimited')
export class ItemHeartUnlimited extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Label)
    txtCountTime: Label = null;

    @property(UIOpacity)
    groupOpacity: UIOpacity = null;

    targetPos:Vec3 = new Vec3(0,0,0);
    delayTimetoTagert:number = 0;
    countTime:number;
    initHeartUnlimited(_countTime:number,_posStart:Vec3,_targetPos:Vec3,_delayTimeToTarget:number){
        this.countTime = _countTime; 
        this.targetPos = _targetPos;
        this.delayTimetoTagert = _delayTimeToTarget;
        // console.log("this.targetPos:"+this.targetPos);
        this.node.setPosition(_posStart);
        this.node.active = true;
        this.showHeartUnlimited();
    }

    showHeartUnlimited(){
        let self = this;
        this.groupOpacity.opacity = 0;
        this.node.setScale(new Vec3(0, 0, 0));
        tween(this.groupOpacity).to(0.3, { opacity: 255 }, {
            easing: 'quadOut', onComplete: () => {

            }
        }).start();

        tween(this.node).to(0.3, { scale: new Vec3(1, 1, 1), position: new Vec3(this.node.position.x , this.node.position.y + lodash.random(80, 200), 0) }, {
            easing: 'quadOut', onComplete: () => {
                self.moveToTarget();
            }
        }).start();
    }

    moveToTarget(){
        let self = this;
        // console.log("moveToTargetmoveToTarget");
        tween(this.node).delay(this.delayTimetoTagert).to(lodash.randomFloat(0.5, 0.6), { position: this.targetPos }, {
            easing: 'quadOut', onComplete: () => {
                AudioManager2.instance.playSound_Coin_Receive();
                self.node.active = false;
                clientEvent.dispatchEvent(Constants.HEART_UNLIMITED_UPDATE,this.countTime);
            }
        }).start();

        tween(this.groupOpacity).delay(this.delayTimetoTagert).to(0.5, { opacity: 200 }, {
            easing: 'linear', onComplete: () => {

            }
        }).start();
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
