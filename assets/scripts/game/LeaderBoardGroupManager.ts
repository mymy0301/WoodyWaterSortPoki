import { _decorator, CCInteger, Component, instantiate, Node, Prefab, ScrollView, Size, UITransform, Vec2, Vec3 } from 'cc';
import { ItemRankInfo } from '../common/ItemRankInfo';
import { ItemLeaderBoard } from './ItemLeaderBoard';

const { ccclass, property } = _decorator;

@ccclass('LeaderBoardGroupManager')
export class LeaderBoardGroupManager extends Component {
    arrItemRankInfos:ItemRankInfo[] = [];
    @property(Node)
    contentGroup:Node;
    
    @property(Prefab)
    itemLeaderBoardPrefab:Prefab;

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


    arrPoolItems:ItemLeaderBoard[] = [];
    mapItemBoards:Map<number,ItemLeaderBoard> = new Map();

    @property(ScrollView)
    scrollView:ScrollView;

    @property(ItemLeaderBoard)
    myItemLeaderBoard:ItemLeaderBoard;

    indexMyRank:number = -1;
    isShowMyRank:boolean = false;


    protected onEnable(): void {
        this.scrollView.node.on(ScrollView.EventType.SCROLLING,this.setScrollEvent,this);
    }

    protected onDisable(): void {
        this.scrollView.node.off(ScrollView.EventType.SCROLLING,this.setScrollEvent,this);
    }

    initRankGroup(_arrItemRewardInfos:ItemRankInfo[]){
        if(this.myItemLeaderBoard){
            this.myItemLeaderBoard.node.active = false;
        }
        

        this.resetRankGroup();

        this.arrItemRankInfos = _arrItemRewardInfos;

        let maxY:number = (this.SIZE_ITEM + this.KC_Y) * _arrItemRewardInfos.length + 200; 
        this.contentGroup.getComponent(UITransform).setContentSize(new Size(this.CONTENT_WIDTH,maxY));
        this.contentGroup.setPosition(new Vec3(0,this.posYStart,0));
        this.scrollView.scrollToTop();
        
        if(this.myItemLeaderBoard){
            this.indexMyRank = this.arrItemRankInfos.findIndex(item => item.isMyRank == true);
        }

       
        this.showInitRank();
    }

    resetRankGroup(){
        if(this.myItemLeaderBoard){
            this.myItemLeaderBoard.node.active = false;
        }
        
        this.contentGroup.destroyAllChildren();
        this.arrPoolItems = [];
        this.mapItemBoards.clear();
        this.scrollView.stopAutoScroll();
        this.arrItemRankInfos = [];
    }


    getPos_byIndex(_index:number){
        let posY:number = -this.SIZE_ITEM/2 - _index * (this.SIZE_ITEM + this.KC_Y);
        return new Vec3(0,posY,0);
    }

    showInitRank(){
        for(let i=0; i< this.countShowItem;i++){
            if(i < this.arrItemRankInfos.length){
                let itemLeaderBoard:ItemLeaderBoard = this.getItemLeaderBoard_Recycle_FromPools();
                itemLeaderBoard.node.setPosition(this.getPos_byIndex(i));
                itemLeaderBoard.init(this.arrItemRankInfos[i],0.1 * i);
                itemLeaderBoard.setIndexPos(i);
                this.mapItemBoards.set(i,itemLeaderBoard);
            }
        }

        for(let i=0; i< this.arrItemRankInfos.length;i++){
            if(this.arrItemRankInfos[i].isMyRank){
                if(this.myItemLeaderBoard){
                    this.myItemLeaderBoard.init(this.arrItemRankInfos[i]);
                    this.myItemLeaderBoard.node.active = true;
                }
            }
        }

        if(this.indexMyRank > -1){
            if(this.mapItemBoards.has(this.indexMyRank)){
                this.isShowMyRank = false;
                this.myItemLeaderBoard.node.active = false;
            }else{
                this.isShowMyRank = true;
                this.myItemLeaderBoard.node.active = true;
            }
        }
    }

    updateItemRank(itemLeaderBoard:ItemLeaderBoard,indexPos:number){
        if(indexPos < this.arrItemRankInfos.length){
            itemLeaderBoard.node.setPosition(this.getPos_byIndex(indexPos));
            itemLeaderBoard.init(this.arrItemRankInfos[indexPos]);
            itemLeaderBoard.setIndexPos(indexPos);
            this.mapItemBoards.set(indexPos,itemLeaderBoard);
            itemLeaderBoard.node.active = true;
        }
    }

    lastIndexPosCenter:number = -1;
    setScrollEvent(){
        // console.log(this.contentGroup.position.y);
        let indexPosCenter:number = Math.floor((this.contentGroup.position.y - this.posYStart + this.CONTENT_HIGHT / 2) /(this.SIZE_ITEM + this.KC_Y));
        if(this.lastIndexPosCenter == indexPosCenter) return;
        this.lastIndexPosCenter = indexPosCenter;
        this.mapItemBoards.forEach(itemLeaderBoard => {
            // console.log("Check itemLeaderBoard:"+itemLeaderBoard.indexPos);
            if (itemLeaderBoard.node.active) {
                // console.log("Check itemLeaderBoard22222:"+itemLeaderBoard.indexPos);
                // console.log(itemLeaderBoard.indexPos, indexPosCenter - this.countShowItem / 2, indexPosCenter + this.countShowItem / 2, itemLeaderBoard.indexPos < indexPosCenter - this.countShowItem / 2 || itemLeaderBoard.indexPos > indexPosCenter + this.countShowItem / 2);
                if (itemLeaderBoard.indexPos < indexPosCenter - this.countShowItem / 2 || itemLeaderBoard.indexPos > indexPosCenter + this.countShowItem / 2) {
                    // console.log("HIDE ITEM:" + itemLeaderBoard.indexPos);
                    itemLeaderBoard.node.active = false;
                    this.mapItemBoards.delete(itemLeaderBoard.indexPos);
                }
            }
        });

        let value:number = Math.floor(this.countShowItem/2);
        for(let i = -value; i < value + 1; i++){
            let indexPos:number = i + indexPosCenter;
            // console.log("Check : i="+i+"    indexPos="+indexPos);
            if(indexPos >=0 && indexPos < this.arrItemRankInfos.length){
                if(this.mapItemBoards.has(indexPos)){
                    let itemBoard:ItemLeaderBoard = this.mapItemBoards.get(indexPos);
                    if(!itemBoard.node.active){
                        itemBoard.node.active = true;
                    }
                }else{
                    let itemRecycle:ItemLeaderBoard = this.getItemLeaderBoard_Recycle_FromPools();
                    this.updateItemRank(itemRecycle,indexPos);
                }
            }
        }

        if(this.indexMyRank > -1){
            if(this.mapItemBoards.has(this.indexMyRank) && this.isShowMyRank){
                // console.log("HIDE");
                this.isShowMyRank = false;
                this.myItemLeaderBoard.node.active = false;
            }else if(!this.mapItemBoards.has(this.indexMyRank) && !this.isShowMyRank){
                // console.log("SHOW");
                this.isShowMyRank = true;
                this.myItemLeaderBoard.node.active = true;
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
        let item = instantiate(this.itemLeaderBoardPrefab);
        item.setParent(this.contentGroup);
        let itemLeaderBoard:ItemLeaderBoard = item.getComponent(ItemLeaderBoard);
        this.arrPoolItems.push(itemLeaderBoard);
        return itemLeaderBoard;
    }
}

