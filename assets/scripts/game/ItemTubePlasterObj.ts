
import { _decorator, Component, Node, tween, Tween, UIOpacity, Vec3 } from 'cc';
import { clientEvent } from '../framework/clientEvent';
import { Constants } from '../framework/constants';
import { MagicOBIMInfo } from '../newlevel/MagicLevelDataInfo';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ItemTubePlasterObj
 * DateTime = Mon Apr 28 2025 10:07:54 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ItemTubePlasterObj.ts
 * FileBasenameNoExtension = ItemTubePlasterObj
 * URL = db://assets/scripts/game/ItemTubePlasterObj.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ItemTubePlasterObj')
export class ItemTubePlasterObj extends Component {
    @property(Node)
    bg: Node = null;

    @property(UIOpacity)
    bg_Opacity: UIOpacity = null;

    isPlasterDone:boolean = false;

    protected onEnable(): void {
        clientEvent.on(Constants.TUBE_PLASER_DONE, this.setPlasterDone, this);
    }

    protected onDisable(): void {
        clientEvent.off(Constants.TUBE_PLASER_DONE, this.setPlasterDone, this);
    }
    tweenBgOpacity: Tween<{}> = null;
    setShowPlasterFinished() {
        if (this.tweenBgOpacity != null) this.tweenBgOpacity.stop();
        this.tweenBgOpacity = tween(this.bg_Opacity).to(0.2, { opacity: 0 }, {
            easing: 'linear', onComplete: () => {
                this.node.active = false;
            }
        }).start();
    }

    magicOBIMInfo:MagicOBIMInfo = null;
    cbPlasterShowEfx: any = null;
    tubeX:number = -1;
    tubeY:number = -1;

    setInit(_magicOBIMInfo:MagicOBIMInfo,_tubeX:number,_tubeY:number,_cbPlasterShowEfx:any){
        this.cbPlasterShowEfx = _cbPlasterShowEfx;
        this.tubeX = _tubeX;
        this.tubeY = _tubeY;
        this.isPlasterDone = false;
        this.magicOBIMInfo = _magicOBIMInfo;
        this.bg_Opacity.opacity = 255;
    }

    setPlasterDone(_tubeXDone:number,_tubeYDone:number){
        if(_tubeYDone == this.tubeY && Math.abs(_tubeXDone - this.tubeX) == 1){
            this.setShowPlasterFinished();
            if(this.cbPlasterShowEfx != null){
                this.cbPlasterShowEfx();
                this.cbPlasterShowEfx = null;
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
