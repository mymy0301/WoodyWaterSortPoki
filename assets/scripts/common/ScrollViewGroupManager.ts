
import { _decorator, CCInteger, Component, instantiate, Node, Prefab, ScrollView, Size, UITransform, Vec2, Vec3 } from 'cc';
import { ItemScrollView } from './ItemScrollView';
import { localConfig } from '../localConfig';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ScrollViewGroupManager
 * DateTime = Thu Nov 14 2024 17:22:56 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = ScrollViewGroupManager.ts
 * FileBasenameNoExtension = ScrollViewGroupManager
 * URL = db://assets/scripts/common/ScrollViewGroupManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ScrollViewGroupManager')
export class ScrollViewGroupManager extends Component {
    arrDataInfos:any[] = [];

    @property(Node)
    contentGroup:Node;
    
    @property(Prefab)
    itemScrowViewPrefab:Prefab;

    @property(CCInteger)
    countShowItem:number = 18;

    @property(CCInteger)
    KC_Y:number = 0;

    @property(CCInteger)
    SIZE_ITEM:number = 123;

    @property(CCInteger)
    CONTENT_HIGHT:number = 800;

    @property(CCInteger)
    CONTENT_WIDTH:number = 1080;

    @property(CCInteger)
    posYStart:number = 400;


    arrPoolItems:ItemScrollView[] = [];
    mapItemBoards:Map<number,ItemScrollView> = new Map();

    @property(ScrollView)
    scrollView:ScrollView;

    protected onEnable(): void {
        this.scrollView.node.on(ScrollView.EventType.SCROLLING,this.setScrollEvent,this);
    }

    protected onDisable(): void {
        this.scrollView.node.off(ScrollView.EventType.SCROLLING,this.setScrollEvent,this);
    }

    initDataInfos(_arrDataInfos:any[]){
        this.reset();

        this.arrDataInfos = _arrDataInfos;

        let maxY:number = (this.SIZE_ITEM + this.KC_Y) * _arrDataInfos.length + 200; 
        this.contentGroup.getComponent(UITransform).setContentSize(new Size(this.CONTENT_WIDTH,maxY));
        this.contentGroup.setPosition(new Vec3(0,this.posYStart,0));
        // this.scrollView.scrollToTop();
        this.showInitScrowView();
    }

    reset(){
        this.contentGroup.destroyAllChildren();
        this.arrPoolItems = [];
        this.mapItemBoards.clear();
        this.scrollView.stopAutoScroll();
        this.arrDataInfos = [];
    }

    showInitScrowView(){
        for(let i=0; i< this.countShowItem;i++){
            if(i < this.arrDataInfos.length){
                let itemScrollView:ItemScrollView = this.getItemLeaderBoard_Recycle_FromPools();
                itemScrollView.node.setPosition(this.getPos_byIndex(i));
                itemScrollView.init(this.arrDataInfos[i],0.1 * i);
                itemScrollView.setIndexPos(i);
                this.mapItemBoards.set(i,itemScrollView);
            }
        }
    }

    getItemLeaderBoard_Recycle_FromPools(){
        for(let i=0; i< this.arrPoolItems.length;i++){
            if(!this.arrPoolItems[i].node.active){
                return this.arrPoolItems[i];
            }
        }
        // console.error("-------------------------------------------------------------");
        let item = instantiate(this.itemScrowViewPrefab);
        item.setParent(this.contentGroup);
        let itemScrollView:ItemScrollView = item.getComponent(ItemScrollView);
        this.arrPoolItems.push(itemScrollView);
        return itemScrollView;
    }

    lastIndexPosCenter:number = -1;

    setScrollEvent(){
        // console.log(this.contentGroup.position.y);
        let indexPosCenter:number = Math.floor((this.contentGroup.position.y - this.posYStart + this.CONTENT_HIGHT / 2) /(this.SIZE_ITEM + this.KC_Y));
        if(this.lastIndexPosCenter == indexPosCenter) return;
        this.lastIndexPosCenter = indexPosCenter;
        this.mapItemBoards.forEach(item => {
            // console.log("Check itemLeaderBoard:"+itemLeaderBoard.indexPos);
            if (item.node.active) {
                // console.log("Check itemLeaderBoard22222:"+itemLeaderBoard.indexPos);
                // console.log(itemLeaderBoard.indexPos, indexPosCenter - this.countShowItem / 2, indexPosCenter + this.countShowItem / 2, itemLeaderBoard.indexPos < indexPosCenter - this.countShowItem / 2 || itemLeaderBoard.indexPos > indexPosCenter + this.countShowItem / 2);
                if (item.indexPos < indexPosCenter - this.countShowItem / 2 || item.indexPos > indexPosCenter + this.countShowItem / 2) {
                    // console.log("HIDE ITEM:" + itemLeaderBoard.indexPos);
                    item.node.active = false;
                    this.mapItemBoards.delete(item.indexPos);
                }
            }
        });

        let value:number = Math.floor(this.countShowItem/2);
        for(let i = -value; i < value + 1; i++){
            let indexPos:number = i + indexPosCenter;
            // console.log("Check : i="+i+"    indexPos="+indexPos);
            if(indexPos >=0 && indexPos < this.arrDataInfos.length){
                if(this.mapItemBoards.has(indexPos)){
                    let itemBoard:ItemScrollView = this.mapItemBoards.get(indexPos);
                    if(!itemBoard.node.active){
                        itemBoard.node.active = true;
                    }
                }else{
                    let itemRecycle:ItemScrollView = this.getItemLeaderBoard_Recycle_FromPools();
                    this.updateItem(itemRecycle,indexPos);
                }
            }
        }

    }

    updateItem(itemScrollView:ItemScrollView,indexPos:number){
        if(indexPos < this.arrDataInfos.length){
            itemScrollView.node.setPosition(this.getPos_byIndex(indexPos));
            itemScrollView.init(this.arrDataInfos[indexPos]);
            itemScrollView.setIndexPos(indexPos);
            this.mapItemBoards.set(indexPos,itemScrollView);
            itemScrollView.node.active = true;
        }
    }


    getPos_byIndex(_index:number){
        let posY:number = -this.SIZE_ITEM/2 - _index * (this.SIZE_ITEM + this.KC_Y);
        return new Vec3(0,posY,0);
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
