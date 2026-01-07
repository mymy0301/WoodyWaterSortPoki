import { _decorator, Component, Node, tween, Tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ItemSpriteMove')
export class ItemSpriteMove extends Component {
    tweenMove:Tween<{}> = null;

    @property(Vec3)
    posStart:Vec3 = new Vec3(0,0,0);

    @property(Vec3)
    posEnd:Vec3 = new Vec3(0,0,0);

    start() {
        if(this.tweenMove){
            this.tweenMove.stop();
        }
        this.node.setPosition(this.posStart);

        this.tweenMove = tween(this.node).to(0.5,{position:this.posEnd},{easing:'linear'}).to(0.5,{position:this.posStart},{easing:'linear'}).union().repeatForever();
        this.tweenMove.start();
    }
}

