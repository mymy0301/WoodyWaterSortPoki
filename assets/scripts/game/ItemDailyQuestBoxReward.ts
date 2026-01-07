
import { _decorator, CCInteger, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemDailyQuestBoxReward
 * DateTime = Tue Oct 15 2024 09:36:33 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemDailyQuestBoxReward.ts
 * FileBasenameNoExtension = ItemDailyQuestBoxReward
 * URL = db://assets/scripts/game/ItemDailyQuestBoxReward.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemDailyQuestBoxReward')
export class ItemDailyQuestBoxReward extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(CCInteger)
    indexBoxReward:number = 1;

    @property(Node)
    nodeLock:Node = null;

    @property(Node)
    nodeFinished:Node = null;

    start () {
        // [3]

    }

    setBoxLock() {
        this.nodeLock.active = true;
        this.nodeFinished.active = false;
    }

    setBoxFinished() {
        this.nodeLock.active = false;
        this.nodeFinished.active = true;
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
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
