
import { _decorator, Component, Node, Sprite, Vec3 } from 'cc';
import { localConfig } from '../localConfig';
import { Constants, THEME_TYPE } from '../framework/constants';
import { resourceUtil } from '../framework/resourceUtil';
import { clientEvent } from '../framework/clientEvent';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = BackGroundGameManager
 * DateTime = Mon Dec 09 2024 09:22:54 GMT+0700 (Indochina Time)
 * Author = MoonMoon246
 * FileBasename = BackGroundGameManager.ts
 * FileBasenameNoExtension = BackGroundGameManager
 * URL = db://assets/scripts/game/BackGroundGameManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('BackGroundGameManager')
export class BackGroundGameManager extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Sprite)
    bg3:Sprite = null;

    @property(Sprite)
    bg:Sprite = null;

    @property(Sprite)
    bg2:Sprite;

    protected onEnable(): void {
        clientEvent.on(Constants.THEME_SELECT_UPDATE,this.setThemeSelected,this)
        this.loadBG();
    }

    protected onDisable(): void {
        clientEvent.off(Constants.THEME_SELECT_UPDATE,this.setThemeSelected,this)
    }

    start () {
        // [3]
        this.bg.node.setScale(new Vec3(localConfig.instance.scaleBG,localConfig.instance.scaleBG,localConfig.instance.scaleBG));
        this.bg3.node.setScale(new Vec3(localConfig.instance.scaleBG,localConfig.instance.scaleBG,localConfig.instance.scaleBG));
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    setThemeSelected(themeType:THEME_TYPE,itemID:number){
        if(themeType == THEME_TYPE.BG){
            this.loadBG();
        }
    }

    loadBG(){
        let themeBG:number = localConfig.instance.getThemeSelected_byThemeType(THEME_TYPE.BG);
        let pathBG:string = "bg/" + themeBG;
        resourceUtil.loadSpriteFrame_Bundle(pathBG, (err, spriteFrame) => {
            if (err) {
                console.error(err);
                return;
            }
            if(!this.node || !this.bg){
                return;
            } 
            this.bg.spriteFrame = spriteFrame;
            this.bg3.spriteFrame = spriteFrame;
        });
    }

    showTournamentPageHostBG(){
        if (localConfig.instance.currTournamentPageHostDataInfo && localConfig.instance.currTournamentPageHostDataInfo.eventURL && localConfig.instance.currTournamentPageHostDataInfo.eventURL.length > 0) {
            resourceUtil.setBGResultSpriteFrame(localConfig.instance.currTournamentPageHostDataInfo.eventURL, (err, sf) => {
                if (err) {
                    this.bg2.spriteFrame = null;
                    this.bg2.node.active = false;
                } else {
                    this.bg2.spriteFrame = sf;
                    this.bg2.node.active = true;

                }
            });
        }
    }
    hideTournamentPageHostBG(){
        this.bg2.node.active = false;
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
