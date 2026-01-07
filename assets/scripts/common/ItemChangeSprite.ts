
import { _decorator, CCFloat, Component, macro, Node, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemChangeSprite
 * DateTime = Wed Dec 04 2024 06:13:53 GMT+0700 (Indochina Time)
 * Author = MyTom2k17
 * FileBasename = ItemChangeSprite.ts
 * FileBasenameNoExtension = ItemChangeSprite
 * URL = db://assets/scripts/common/ItemChangeSprite.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemChangeSprite')
export class ItemChangeSprite extends Component {
    @property(Sprite)
    icon:Sprite = null;
    
    @property(SpriteFrame)
    arrSpriteFrame:SpriteFrame[] = [];

    @property(CCFloat)
    timeChangeAuto:number = 0;

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    setChangeSprite(_index:number) {
        this.icon.spriteFrame = this.arrSpriteFrame[_index%this.arrSpriteFrame.length];
    }

    setChangeAuto() {
        this.schedule(this.setChangeSpriteAuto, this.timeChangeAuto, macro.REPEAT_FOREVER);
    }

    indexChangeSpriteAuto:number = 0;
    setChangeSpriteAuto() {
        this.indexChangeSpriteAuto++;
        if(this.indexChangeSpriteAuto >= this.arrSpriteFrame.length) {
            this.indexChangeSpriteAuto = 0;
        }
        this.setChangeSprite(this.indexChangeSpriteAuto);
    }

    stopChangeAuto() {
        this.unschedule(this.setChangeSpriteAuto);
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
