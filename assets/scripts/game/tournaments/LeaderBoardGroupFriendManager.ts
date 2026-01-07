
import { _decorator, CCInteger, Component, instantiate, Node, Prefab, ScrollView, Size, UITransform, Vec3 } from 'cc';
import { ItemRankInfo } from '../../common/ItemRankInfo';
import { ItemLeaderBoard } from '../ItemLeaderBoard';
import { ItemLeaderBoardFriend } from '../withFriends/ItemLeaderBoardFriend';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = LeaderBoardGroupFriendManager
 * DateTime = Wed Apr 02 2025 16:52:25 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = LeaderBoardGroupFriendManager.ts
 * FileBasenameNoExtension = LeaderBoardGroupFriendManager
 * URL = db://assets/scripts/game/tournaments/LeaderBoardGroupFriendManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('LeaderBoardGroupFriendManager')
export class LeaderBoardGroupFriendManager extends Component {
    arrItemRankInfos: ItemRankInfo[] = [];
    @property(Node)
    contentGroup: Node;

    @property(Prefab)
    itemLeaderBoardFriendPrefab: Prefab;

    @property(CCInteger)
    countShowItem: number = 18;

    @property(CCInteger)
    KC_Y: number = 0;

    @property(CCInteger)
    SIZE_ITEM: number = 123;

    @property(CCInteger)
    CONTENT_HIGHT: number = 800;

    @property(CCInteger)
    CONTENT_WIDTH: number = 1080;

    @property(CCInteger)
    posYStart: number = 400;


    arrPoolItems: ItemLeaderBoardFriend[] = [];
    mapItemBoards: Map<number, ItemLeaderBoardFriend> = new Map();

    @property(ScrollView)
    scrollView: ScrollView;

    protected onEnable(): void {
        this.scrollView.node.on(ScrollView.EventType.SCROLLING, this.setScrollEvent, this);
    }

    protected onDisable(): void {
        this.scrollView.node.off(ScrollView.EventType.SCROLLING, this.setScrollEvent, this);
    }

    initRankGroup(_arrItemRewardInfos: ItemRankInfo[]) {


        this.resetRankGroup();

        this.arrItemRankInfos = _arrItemRewardInfos;

        let maxY: number = (this.SIZE_ITEM + this.KC_Y) * _arrItemRewardInfos.length + 200;
        this.contentGroup.getComponent(UITransform).setContentSize(new Size(this.CONTENT_WIDTH, maxY));
        this.contentGroup.setPosition(new Vec3(0, this.posYStart, 0));
        this.scrollView.scrollToTop();


        this.showInitRank();
    }

    resetRankGroup() {
        this.contentGroup.destroyAllChildren();
        this.arrPoolItems = [];
        this.mapItemBoards.clear();
        this.scrollView.stopAutoScroll();
        this.arrItemRankInfos = [];
    }


    getPos_byIndex(_index: number) {
        let posY: number = -this.SIZE_ITEM / 2 - _index * (this.SIZE_ITEM + this.KC_Y);
        return new Vec3(0, posY, 0);
    }

    showInitRank() {
        for (let i = 0; i < this.countShowItem; i++) {
            if (i < this.arrItemRankInfos.length) {
                let itemLeaderBoardFriend: ItemLeaderBoardFriend = this.getItemLeaderBoard_Recycle_FromPools();
                itemLeaderBoardFriend.node.setPosition(this.getPos_byIndex(i));
                itemLeaderBoardFriend.init(this.arrItemRankInfos[i], 0.1 * i);
                itemLeaderBoardFriend.setIndexPos(i);
                this.mapItemBoards.set(i, itemLeaderBoardFriend);
            }
        }

    }

    updateItemRank(itemLeaderBoardFriend: ItemLeaderBoardFriend, indexPos: number) {
        if (indexPos < this.arrItemRankInfos.length) {
            itemLeaderBoardFriend.node.setPosition(this.getPos_byIndex(indexPos));
            itemLeaderBoardFriend.init(this.arrItemRankInfos[indexPos]);
            itemLeaderBoardFriend.setIndexPos(indexPos);
            this.mapItemBoards.set(indexPos, itemLeaderBoardFriend);
            itemLeaderBoardFriend.node.active = true;
        }
    }

    lastIndexPosCenter: number = -1;
    setScrollEvent() {
        // console.log(this.contentGroup.position.y);
        let indexPosCenter: number = Math.floor((this.contentGroup.position.y - this.posYStart + this.CONTENT_HIGHT / 2) / (this.SIZE_ITEM + this.KC_Y));
        if (this.lastIndexPosCenter == indexPosCenter) return;
        this.lastIndexPosCenter = indexPosCenter;
        this.mapItemBoards.forEach(ItemLeaderBoardFriend => {
            // console.log("Check itemLeaderBoard:"+itemLeaderBoard.indexPos);
            if (ItemLeaderBoardFriend.node.active) {
                // console.log("Check itemLeaderBoard22222:"+itemLeaderBoard.indexPos);
                // console.log(itemLeaderBoard.indexPos, indexPosCenter - this.countShowItem / 2, indexPosCenter + this.countShowItem / 2, itemLeaderBoard.indexPos < indexPosCenter - this.countShowItem / 2 || itemLeaderBoard.indexPos > indexPosCenter + this.countShowItem / 2);
                if (ItemLeaderBoardFriend.indexPos < indexPosCenter - this.countShowItem / 2 || ItemLeaderBoardFriend.indexPos > indexPosCenter + this.countShowItem / 2) {
                    // console.log("HIDE ITEM:" + itemLeaderBoard.indexPos);
                    ItemLeaderBoardFriend.node.active = false;
                    this.mapItemBoards.delete(ItemLeaderBoardFriend.indexPos);
                }
            }
        });

        let value: number = Math.floor(this.countShowItem / 2);
        for (let i = -value; i < value + 1; i++) {
            let indexPos: number = i + indexPosCenter;
            // console.log("Check : i="+i+"    indexPos="+indexPos);
            if (indexPos >= 0 && indexPos < this.arrItemRankInfos.length) {
                if (this.mapItemBoards.has(indexPos)) {
                    let itemBoard: ItemLeaderBoardFriend = this.mapItemBoards.get(indexPos);
                    if (!itemBoard.node.active) {
                        itemBoard.node.active = true;
                    }
                } else {
                    let itemRecycle: ItemLeaderBoardFriend = this.getItemLeaderBoard_Recycle_FromPools();
                    this.updateItemRank(itemRecycle, indexPos);
                }
            }
        }
    }


    getItemLeaderBoard_Recycle_FromPools() {
        for (let i = 0; i < this.arrPoolItems.length; i++) {
            if (!this.arrPoolItems[i].node.active) {
                return this.arrPoolItems[i];
            }
        }
        // console.error("-------------------------------------------------------------");
        let item = instantiate(this.itemLeaderBoardFriendPrefab);
        item.setParent(this.contentGroup);
        let itemLeaderBoardFriend: ItemLeaderBoardFriend = item.getComponent(ItemLeaderBoardFriend);
        this.arrPoolItems.push(itemLeaderBoardFriend);
        return itemLeaderBoardFriend;
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
