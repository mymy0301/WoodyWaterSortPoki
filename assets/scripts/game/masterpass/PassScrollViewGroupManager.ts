
import { _decorator, Component, Node, Size, UITransform, Vec2, Vec3 } from 'cc';
import { ScrollViewGroupManager } from '../../common/ScrollViewGroupManager';
import { localConfig } from '../../localConfig';
import { ItemScrollView } from '../../common/ItemScrollView';
const { ccclass, property } = _decorator;

 
@ccclass('PassScrollViewGroupManager')
export class PassScrollViewGroupManager extends ScrollViewGroupManager {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    initPass(arrIndexPass: number[]) {
        // super.initDataInfos(arrIndexPass);
        this.reset();
        this.arrDataInfos = arrIndexPass;

        let maxY:number = (this.SIZE_ITEM + this.KC_Y) * this.arrDataInfos.length + 200; 
        this.contentGroup.getComponent(UITransform).setContentSize(new Size(this.CONTENT_WIDTH,maxY));
        let indexPassStart:number = 0;
        if(localConfig.instance.passIndexAvailable > 2){
            indexPassStart = localConfig.instance.passIndexAvailable - 2;
        }
        let posYStart:number = this.posYStart + indexPassStart * (this.SIZE_ITEM + this.KC_Y);
        // console.log("posYStart:"+posYStart);
        this.contentGroup.setPosition(new Vec3(0,posYStart,0));
        this.showInitScrowView();

        let posYOffset:number = 0;
        if(localConfig.instance.passIndexAvailable >= 2){
            posYOffset = (localConfig.instance.passIndexAvailable - 1) * (this.SIZE_ITEM + this.KC_Y);
        }
        // console.log("posYOffset:"+posYOffset);
        this.scrollView.scrollToOffset(new Vec2(0,posYOffset), 0.8);
    }

    showInitScrowView(): void {
        let indexPassStart:number = 0;
        if(localConfig.instance.passIndexAvailable > 2){
            indexPassStart = localConfig.instance.passIndexAvailable - 2;
        }
        for (let i = indexPassStart; i < this.countShowItem + indexPassStart; i++) {
            if (i < this.arrDataInfos.length) {
                let itemScrollView: ItemScrollView = this.getItemLeaderBoard_Recycle_FromPools();
                itemScrollView.node.setPosition(this.getPos_byIndex(i));
                itemScrollView.init(this.arrDataInfos[i], 0.1 * i);
                itemScrollView.setIndexPos(i);
                this.mapItemBoards.set(i, itemScrollView);
            }
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
