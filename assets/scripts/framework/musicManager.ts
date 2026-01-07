
import { _decorator, Component, Node, AudioSource, game, director } from 'cc';
import { localConfig } from '../localConfig';
import { configuration } from './configuration';
const { ccclass, property } = _decorator;

@ccclass('MusicManager')
export class MusicManager extends Component {
    public static instance: MusicManager;
    @property(AudioSource)
    audioSource: AudioSource = null!;

    onLoad(){
        game.addPersistRootNode(this.node);
        this.audioSource = this.node.getComponent(AudioSource);
        MusicManager.instance = this; 
    }

    start () {
        // [3]
        // this.initMusic();
    }


    initMusic(){
        if(!localConfig.instance.isMusic){
            this.closeMusic();
        }else{
            this.openMusic();
        }
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    openMusic () {
        //////console.log("openMusicopenMusicopenMusicopenMusic");
        // this.setMusicVolume(0.8);
        // configuration.instance.setGlobalData('music', 'true');
        this.audioSource.volume = 1;
        if (!this.audioSource.playing) {
            this.audioSource.play();
        }
    }

    checkMusicPlaying(){
        return this.audioSource.playing;
    }

    closeMusic () {
        //////console.log("closeMusiccloseMusiccloseMusic");
        // this.setMusicVolume(0);
        // configuration.instance.setGlobalData('music', 'false');
        this.audioSource.volume = 0;
        if (this.audioSource.playing) {
            this.audioSource.stop();
        }
    }

    pauseMusic(){
        if (this.audioSource.playing){
            this.audioSource.pause();
        }
    }

    resumeMusic(){
        if (localConfig.instance.isMusic){
            this.audioSource.volume = 1;
            this.audioSource.play();
        }
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
