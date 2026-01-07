
import { _decorator, Component, Label, Node, tween, Tween, Vec3 } from 'cc';
import Utils from '../../core/utils/Utils';
import { localConfig } from '../../localConfig';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = InfoGroupTournamentPageHost
 * DateTime = Wed Jul 16 2025 10:55:46 GMT+0700 (Indochina Time)
 * Author = MyTom2k17
 * FileBasename = InfoGroupTournamentPageHost.ts
 * FileBasenameNoExtension = InfoGroupTournamentPageHost
 * URL = db://assets/scripts/game/tournaments/InfoGroupTournamentPageHost.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('InfoGroupTournamentPageHost')
export class InfoGroupTournamentPageHost extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Label)
    txtInfoTournament:Label = null;

    @property(Label)
    txtScore:Label = null;

    scoreValue:number = 0

    initGroup(){
        this.scoreValue = 0;
        this.txtScore.string = `${Utils.formatNumber(this.scoreValue)}`;
        this.txtInfoTournament.string = `${localConfig.instance.currTournamentPageHostDataInfo.title}`;
    }

    tweenScoreUpdate:Tween<{}> = null;
    setAddScore(scoreAdd:number){
        // console.log('setAddScore');
        this.scoreValue += scoreAdd;
        this.txtScore.string = `${Utils.formatNumber(this.scoreValue)}`;
        if (this.tweenScoreUpdate) this.tweenScoreUpdate.stop();
        this.tweenScoreUpdate = tween(this.txtScore.node).to(0.1,{scale: new Vec3(1.1,1.1,1.1)},{easing:'linear'}).to(0.1,{scale: new Vec3(1,1,1)},{easing:'linear'}).union().repeat(2).start();
    }

    resetScore(){
        // console.log('resetScore');
        if (this.tweenScoreUpdate) this.tweenScoreUpdate.stop();
        this.scoreValue = 0;
        this.txtScore.string = `${Utils.formatNumber(this.scoreValue)}`;        
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
