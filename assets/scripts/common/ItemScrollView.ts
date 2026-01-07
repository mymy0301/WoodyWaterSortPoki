
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemScrollView
 * DateTime = Thu Nov 14 2024 17:23:10 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemScrollView.ts
 * FileBasenameNoExtension = ItemScrollView
 * URL = db://assets/scripts/common/ItemScrollView.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemScrollView')
export class ItemScrollView extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    indexPos:number;

    setIndexPos(_indexPos:number){
        this.indexPos = _indexPos;
    }

    init(_data:any,_timeDelay:number = 0){
        // console.log(_data,_timeDelay);
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
