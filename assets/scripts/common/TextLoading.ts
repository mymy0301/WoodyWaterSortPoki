import { _decorator, Component, Node, macro, Label, CCString } from 'cc';
import { lodash } from '../framework/lodash';
const { ccclass, property } = _decorator;

@ccclass('TextLoading')
export class TextLoading extends Component {
    @property(Label)
    txtLoading:Label;

    @property(CCString)
    contentText:string = "Loading";
    indexLoading:number = -1;

    @property(Boolean)
    isRandomTime:boolean = false;
    start() {

    }

    update(deltaTime: number) {
        
    }

    onEnable(){
        if(this.isRandomTime){
            this.txtLoading.string =`${this.contentText}`;
            this.scheduleOnce(()=>{
                this.schedule(this.showTextLoading,0.2,macro.REPEAT_FOREVER);
            },lodash.randomFloat(0,0.3));
        }else{
            this.schedule(this.showTextLoading,0.2,macro.REPEAT_FOREVER);
        }
        
    }

    protected onDisable(): void {
        this.unschedule(this.showTextLoading);
    }

    showTextLoading(){
        this.indexLoading ++;
        if(this.indexLoading == 4) this.indexLoading = 0;
        if(this.indexLoading == 0){
            this.txtLoading.string =`${this.contentText}`;
        }else if(this.indexLoading == 1){
            this.txtLoading.string =`${this.contentText}.`;
        }else if(this.indexLoading == 2){
            this.txtLoading.string =`${this.contentText}..`;
        }else if(this.indexLoading == 3){
            this.txtLoading.string =`${this.contentText}...`;
        }
    }
}

