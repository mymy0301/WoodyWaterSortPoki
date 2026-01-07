
import { _decorator, Component, instantiate, Node, Prefab, ScrollView, tween, Tween, UIOpacity, Vec3, Widget } from 'cc';
import { localConfig } from '../localConfig';
import { ItemTournament } from './tournaments/ItemTournament';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TournamentsGroup
 * DateTime = Tue Oct 29 2024 15:42:34 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = TournamentsGroup.ts
 * FileBasenameNoExtension = TournamentsGroup
 * URL = db://assets/scripts/game/TournamentsGroup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('TournamentsGroup')
export class TournamentsGroup extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Widget)
    groupAllTopWidget:Widget;

    @property(Widget)
    scrollViewWidget:Widget;


    @property(UIOpacity)
    groupOpacity:UIOpacity = null;

    tweenGroup:Tween<{}> = null;

    @property(ScrollView)
    scrollViewTournaments:ScrollView = null;

    @property(Node)
    contentGroup:Node = null;

    @property(Prefab)
    itemTournamentPrefab:Prefab = null;

    protected onEnable(): void {
        
    }

    protected onDisable(): void {
        for(let i=0; i< this.arrItemTournaments.length; i++){
            this.arrItemTournaments[i].hideGroup();
        }
        this.contentGroup.active = false;
    }

    initAllTop(){
        // console.log("initAllTop TournamentsGroup");
        if(localConfig.instance.isMobile){
            
            let posY = (localConfig.instance.scaleBG - 1) * localConfig.instance.DEFAULT_H / 2  ;
            // console.log("posY:"+posY);
            if(posY <= 0){
                this.groupAllTopWidget.top = 0;
                this.scrollViewWidget.top = 160;
                this.scrollViewWidget.bottom = 372.25;
                return;
            }
            this.groupAllTopWidget.top = -posY;
            this.scrollViewWidget.top = 160-posY;
            this.scrollViewWidget.bottom = 372.25;
        }else{
            this.groupAllTopWidget.top = 0;
            this.scrollViewWidget.top = 160;
            this.scrollViewWidget.bottom = 372.25;
        }
    }

    start () {
        // [3]
        this.initAllTop();
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    arrItemTournaments:ItemTournament[] = [];
    showGroup(){
        this.contentGroup.active = true;
        if(this.arrItemTournaments.length > 0){
            for(let i=0; i< this.arrItemTournaments.length; i++){
                this.arrItemTournaments[i].showGroup();
            }
        }else{
            for(let i=0; i< localConfig.instance.arrTournament_LeaderBoardDataInfos.length; i++){
                let item = instantiate(this.itemTournamentPrefab);
                item.setParent(this.contentGroup);
                let itemTournament:ItemTournament = item.getComponent(ItemTournament);
                itemTournament.init(i,localConfig.instance.arrTournament_LeaderBoardDataInfos[i]);
                this.arrItemTournaments.push(itemTournament);
            }
        }

        this.scrollViewTournaments.scrollToTop();
    }

   

    hideGroup(){
        this.contentGroup.active = false;
        if(this.tweenGroup != null){
            this.tweenGroup.stop();
        }
        this.tweenGroup = tween(this.groupOpacity).to(0.2,{opacity:0},{easing:'linear',onComplete:()=>{
            
        }}).start();
    }

    setShow(){
        if(this.tweenGroup != null){    
            this.tweenGroup.stop();
        }
        this.tweenGroup = tween(this.groupOpacity).to(0.2,{opacity:255},{easing:'linear',onComplete:()=>{}}).start();
    }

    setHide(){
        if(this.tweenGroup != null){
            this.tweenGroup.stop();
        }
        this.tweenGroup = tween(this.groupOpacity).to(0.2,{opacity:0},{easing:'linear',onComplete:()=>{
            
        }}).start();
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
