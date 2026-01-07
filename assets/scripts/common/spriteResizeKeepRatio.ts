
import { _decorator, Component, Node, Sprite, Size, UITransform, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpriteResizeKeepRatio')
export class SpriteResizeKeepRatio extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Sprite)
    icon:Sprite;
    @property(UITransform)
    uiTranform:UITransform;

    sizeUITranform:Size = null;

    onLoad(){
        this.sizeUITranform = this.uiTranform.contentSize;
    }

    start () {
        // [3]
        
    }

    updateSprite(){
        let w = this.icon.spriteFrame.width;
        let h = this.icon.spriteFrame.height;

        if(w/h > this.sizeUITranform.width/this.sizeUITranform.height){
            let newH = this.sizeUITranform.width * h/w;

            this.uiTranform.setContentSize(new Size(this.sizeUITranform.width,newH));
        }else{
            let newW = this.sizeUITranform.height * w/h;
            
            this.uiTranform.setContentSize(new Size(newW,this.sizeUITranform.height));
        }
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
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
