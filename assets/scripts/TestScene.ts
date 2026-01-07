import { _decorator, Button, Component, Node, RichText, UITransform, Vec3 } from 'cc';
import { Constants, THEME_TYPE } from './framework/constants';
import { ItemTube } from './game/ItemTube';
import { ItemTubeConfig } from './game/info/ItemTubeConfig';
import { localConfig } from './localConfig';
const { ccclass, property } = _decorator;

@ccclass('TestScene')
export class TestScene extends Component {
    @property(RichText)
    text:RichText;

    @property(Button)
    btnTest_1:Button;

    @property(Button)
    btnTest_2:Button;

    @property(Button)
    btnTest_3:Button;

    @property(Button)
    btnTest_4:Button;

    protected onEnable(): void {
        this.btnTest_1.node.on(Constants.CLICK,this.touchTest_1,this);
        this.btnTest_2.node.on(Constants.CLICK,this.touchTest_2,this);
        this.btnTest_3.node.on(Constants.CLICK,this.touchTest_3,this);
        this.btnTest_4.node.on(Constants.CLICK,this.touchTest_4,this);
    }
    start() {
        localConfig.instance.currLevelDataInfo = localConfig.instance.getLevelDataInfo_byIndexLevel(1);

        localConfig.instance.setThemeSelected(THEME_TYPE.TUBE,2);
    }

    update(deltaTime: number) {
        
    }

    arrIndexColor:number[] = [0,1,2,3];

    @property(ItemTube)
    itemTubeTest:ItemTube;

    @property(ItemTube)
    itemTubeTestON:ItemTube;

    touchTest_1(){
        this.itemTubeTest.initItemTube(0,0,[0,1,2,3]);
        this.itemTubeTestON.initItemTube(1,0,[]);
        let posTarget:Vec3 = new Vec3(300,282, 0);
        this.itemTubeTest.setMoveToTarget(this.itemTubeTestON,0,posTarget,true,0,0);
    }

    touchTest_2(){
        
        this.itemTubeTest.initItemTube(0,0,[0,1,2]);
        this.itemTubeTestON.initItemTube(1,0,[]);
        let posTarget:Vec3 = new Vec3(300,282, 0);
        this.itemTubeTest.setMoveToTarget(this.itemTubeTestON,1,posTarget,true,0,0);
    }

    touchTest_3(){
        
        this.itemTubeTest.initItemTube(0,0,[0,1]);
        this.itemTubeTestON.initItemTube(1,0,[]);
        let posTarget:Vec3 = new Vec3(300,282, 0);
        this.itemTubeTest.setMoveToTarget(this.itemTubeTestON,2,posTarget,true,0,0);
    }

    touchTest_4(){
        
        this.itemTubeTest.initItemTube(0,0,[0]);
        this.itemTubeTestON.initItemTube(1,0,[]);
        let posTarget:Vec3 = new Vec3(300,282, 0);
        this.itemTubeTest.setMoveToTarget(this.itemTubeTestON,3,posTarget,true,0,0);
    }
}

