
import { _decorator, Component, Node, tween, Tween, Vec3 } from 'cc';
import { BasePopup } from '../common/basePopup';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = BaseInfoPopup
 * DateTime = Thu Nov 21 2024 17:04:34 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = BaseInfoPopup.ts
 * FileBasenameNoExtension = BaseInfoPopup
 * URL = db://assets/scripts/game/BaseInfoPopup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('BaseInfoPopup')
export class BaseInfoPopup extends BasePopup {
    
    @property(Node)
    nodeTitle:Node = null;

    indexNode: number = 0;

    @property(Node)
    arrInfoGroups:Node[] = [];

    tweenShow:Tween<{}> = null;

    showInfoPopup(){
        super.showPopup();
        this.nodeTitle.active = false;
        this.nodeTitle.setScale(new Vec3(0,0,0));
        for(let i = 0; i < this.arrInfoGroups.length; i ++){
            this.arrInfoGroups[i].active = false;
            this.arrInfoGroups[i].setScale(new Vec3(0,0,0));
        }
        this.btnClose.node.active = false;
        
        this.indexNode = 0;
        if(this.tweenShow != null){ 
            this.tweenShow.stop();
        }
    }

    showPoup_ShowView_Finished(): void {
        super.showPoup_ShowView_Finished();

        this.showTitle();
    }

    showTitle(){
        this.nodeTitle.active = true;
        this.nodeTitle.setScale(new Vec3(0,0,0));
        this.tweenShow = tween(this.nodeTitle).to(0.5,{scale:new Vec3(1,1,1)},{easing:'backOut',onComplete:()=>{
            this.showInfoGroup(0);
        }}).start();
    }

    showInfoGroup(indexNode:number){
        this.indexNode = indexNode;
        this.arrInfoGroups[indexNode].active = true;
        this.arrInfoGroups[indexNode].setScale(new Vec3(0,0,0));
        this.tweenShow = tween(this.arrInfoGroups[indexNode]).to(0.4,{scale:new Vec3(1,1,1)},{easing:'backOut',onComplete:()=>{
            if(this.indexNode < this.arrInfoGroups.length - 1){
                this.showInfoGroup(this.indexNode + 1);
            }else{
                this.btnClose.node.active = true;
            }
        }}).start();
    }

    hidePopup(): void {
        this.hidePopup_Finished();
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
