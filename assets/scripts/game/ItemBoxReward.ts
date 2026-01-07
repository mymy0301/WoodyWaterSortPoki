
import { _decorator, Component, Label, Node } from 'cc';
import Utils from '../core/utils/Utils';
import { SHOP_ITEM_TYPE } from '../framework/constants';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemBoxReward
 * DateTime = Fri Oct 04 2024 16:32:43 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemBoxReward.ts
 * FileBasenameNoExtension = ItemBoxReward
 * URL = db://assets/scripts/game/ItemBoxReward.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemBoxReward')
export class ItemBoxReward extends Component {
    @property(Label)
    txtValue:Label = null;

    initValue(itemShopType:SHOP_ITEM_TYPE,value:number) {
        if(itemShopType == SHOP_ITEM_TYPE.HEART_UNLIMITED){
            this.txtValue.string = `${Utils.getTimeStrByS_5(value)}`;
        }else{
            this.txtValue.string = `x${Utils.formatNumber(value)}`;
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
