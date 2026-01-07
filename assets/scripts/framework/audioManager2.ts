
import { _decorator, Component, Node, AudioSource, game, AudioClip, warn, director } from 'cc';
import { localConfig } from '../localConfig';
import { configuration } from './configuration';
import { lodash } from './lodash';
import { resourceUtil } from './resourceUtil';
const { ccclass, property } = _decorator;

@ccclass('AudioManager2')
export class AudioManager2 extends Component {
    public static instance: AudioManager2;
    @property(AudioSource)
    audioSource: AudioSource = null!;

    onLoad(){
        game.addPersistRootNode(this.node);
        this.audioSource = this.node.getComponent(AudioSource);
        AudioManager2.instance = this; 
    }

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    playSound (name:string) {
        if(!localConfig.instance.isSound) return;
        let path = 'audio/sound/';

        resourceUtil.loadAudioClip(path + name, (err, clip)=> {
            if (err) {
                warn('load audioClip failed: ', err);
                //////console.log(path + name);
                return;
            }

            // NOTE: the second parameter is volume scale.
            this.audioSource.playOneShot(clip, 1);
        });

    }

    playSoundClick(){
        // if(!localConfig.instance.isSound) return;
        // let path = 'audio/sound/click';

        // resourceUtil.loadAudioClip(path, (err, clip)=> {
        //     if (err) {
        //         warn('load audioClip failed: ', err);
        //         //////console.log(path + name);
        //         return;
        //     }

        //     // NOTE: the second parameter is volume scale.
        //     this.audioSource.playOneShot(clip,1);
        // });

    }


    
    playPopupOpen(){
        // if(!localConfig.instance.isSound) return;
        // let path = 'audio/sound/pop_dialog';

        // resourceUtil.loadAudioClip(path, (err, clip)=> {
        //     if (err) {
        //         warn('load audioClip failed: ', err);
        //         //////console.log(path + name);
        //         return;
        //     }

        //     // NOTE: the second parameter is volume scale.
        //     this.audioSource.playOneShot(clip,1);
        // });
    }

    playPopupOpen2(){
        if(!localConfig.instance.isSound) return;
        let path = 'audio/sound/pop_dialog';

        resourceUtil.loadAudioClip(path, (err, clip)=> {
            if (err) {
                warn('load audioClip failed: ', err);
                //////console.log(path + name);
                return;
            }

            // NOTE: the second parameter is volume scale.
            this.audioSource.playOneShot(clip,1);
        });
    }

    playPopupClose(){
        
    }

    playSound_PickUp(){
        if(!localConfig.instance.isSound) return;
        let path = 'audio/sound/bottle_up';

        resourceUtil.loadAudioClip(path, (err, clip)=> {
            if (err) {
                warn('load audioClip failed: ', err);
                //////console.log(path + name);
                return;
            }

            // NOTE: the second parameter is volume scale.
            this.audioSource.playOneShot(clip,1);
        });
    }

    playSound_PickDown(){
        if(!localConfig.instance.isSound) return;
        // let path = 'audio/sound/pick-down';
        let path = 'audio/sound/bottle_down';
        resourceUtil.loadAudioClip(path, (err, clip)=> {
            if (err) {
                warn('load audioClip failed: ', err);
                //////console.log(path + name);
                return;
            }

            // NOTE: the second parameter is volume scale.
            this.audioSource.playOneShot(clip,1);
        });
    }

    playSound_Pour(countPour:number){
        // console.log("playSound Pour:"+countPour);
        if(!localConfig.instance.isSound) return;
        // let path = 'audio/sound/water'+countPour;
        let path = 'audio/sound/p_mid'+countPour;

        resourceUtil.loadAudioClip(path, (err, clip)=> {
            if (err) {
                warn('load audioClip failed: ', err);
                //////console.log(path + name);
                return;
            }

            // NOTE: the second parameter is volume scale.
            this.audioSource.playOneShot(clip,1);
        });
    }

    playSound_BottleDone(){
        if(!localConfig.instance.isSound) return;
        let path = 'audio/sound/waterfull';

        resourceUtil.loadAudioClip(path, (err, clip)=> {
            if (err) {
                warn('load audioClip failed: ', err);
                //////console.log(path + name);
                return;
            }

            // NOTE: the second parameter is volume scale.
            this.audioSource.playOneShot(clip,1);
        });
    }

    playSound_WIN(){
        if(!localConfig.instance.isSound) return;
        let path = 'audio/sound/win_effect';

        resourceUtil.loadAudioClip(path, (err, clip)=> {
            if (err) {
                warn('load audioClip failed: ', err);
                //////console.log(path + name);
                return;
            }

            // NOTE: the second parameter is volume scale.
            this.audioSource.playOneShot(clip,1);
        });
    }

    playSound_WIN2(){
        if(!localConfig.instance.isSound) return;
        let path = 'audio/sound/win';

        resourceUtil.loadAudioClip(path, (err, clip)=> {
            if (err) {
                warn('load audioClip failed: ', err);
                //////console.log(path + name);
                return;
            }

            // NOTE: the second parameter is volume scale.
            this.audioSource.playOneShot(clip,1);
        });
    }

    playSound_showItemReward(){
        if(!localConfig.instance.isSound) return;
        let rd:number = lodash.randomSign();
        let path = 'audio/sound/cap_eff_1';
        if(rd<0) path = 'audio/sound/cap_eff_2';

        resourceUtil.loadAudioClip(path, (err, clip)=> {
            if (err) {
                warn('load audioClip failed: ', err);
                //////console.log(path + name);
                return;
            }

            // NOTE: the second parameter is volume scale.
            this.audioSource.playOneShot(clip,1);
        });
    }

    playSound_progressbar(){
        if(!localConfig.instance.isSound) return;
        let path = 'audio/sound/progressbar';

        resourceUtil.loadAudioClip(path, (err, clip)=> {
            if (err) {
                warn('load audioClip failed: ', err);
                //////console.log(path + name);
                return;
            }

            // NOTE: the second parameter is volume scale.
            this.audioSource.playOneShot(clip,1);
        });
    }

    playSound_Coin_Appear(){
        if(!localConfig.instance.isSound) return;
        let path = 'audio/sound/coin_appear';   

        resourceUtil.loadAudioClip(path, (err, clip)=> {
            if (err) {  
                warn('load audioClip failed: ', err);
                //////console.log(path + name);
                return;
            }

            // NOTE: the second parameter is volume scale.
            this.audioSource.playOneShot(clip,1);
        });
    }

    playSound_Coin_Receive(){
        if(!localConfig.instance.isSound) return;
        let path = 'audio/sound/coin_receive';   

        resourceUtil.loadAudioClip(path, (err, clip)=> {
            if (err) {  
                warn('load audioClip failed: ', err);
                //////console.log(path + name);
                return;
            }

            // NOTE: the second parameter is volume scale.
            this.audioSource.playOneShot(clip,1);
        });
    }

    playSound_Chest_Open(){
        if(!localConfig.instance.isSound) return;
        let path = 'audio/sound/chest_open';   

        resourceUtil.loadAudioClip(path, (err, clip)=> {
            if (err) {  
                warn('load audioClip failed: ', err);
                //////console.log(path + name);
                return;
            }

            // NOTE: the second parameter is volume scale.
            this.audioSource.playOneShot(clip,1);
        });
    }

    playPhaohoa(){
        if(!localConfig.instance.isSound) return;
        let path = 'audio/sound/phaohoa';

        resourceUtil.loadAudioClip(path, (err, clip)=> {
            if (err) {
                warn('load audioClip failed: ', err);
                return;
            }

            // NOTE: the second parameter is volume scale.
            this.audioSource.playOneShot(clip,1);
        });
    }

    playNotification(){
        if(!localConfig.instance.isSound) return;
        let path = 'audio/sound/notification-alert';

        resourceUtil.loadAudioClip(path, (err, clip)=> {
            if (err) {
                warn('load audioClip failed: ', err);
                return;
            }

            // NOTE: the second parameter is volume scale.
            this.audioSource.playOneShot(clip,1);
        });
    }

    playSpinItemShow(){
        if(!localConfig.instance.isSound) return;
        let path = 'audio/sound/Wheel_Spin';

        resourceUtil.loadAudioClip(path, (err, clip)=> {
            if (err) {
                warn('load audioClip failed: ', err);
                return;
            }

            // NOTE: the second parameter is volume scale.
            this.audioSource.playOneShot(clip,1);
        });
    }

    playSpinStart(){
        if(!localConfig.instance.isSound) return;
        let path = 'audio/sound/Wheel_Spin';

        resourceUtil.loadAudioClip(path, (err, clip)=> {
            if (err) {
                warn('load audioClip failed: ', err);
                return;
            }

            // NOTE: the second parameter is volume scale.
            this.audioSource.playOneShot(clip,1);
        });
    }

    playSpinDone(){
        if(!localConfig.instance.isSound) return;
        let path = 'audio/sound/Wheel_Done';

        resourceUtil.loadAudioClip(path, (err, clip)=> {
            if (err) {
                warn('load audioClip failed: ', err);
                return;
            }

            // NOTE: the second parameter is volume scale.
            this.audioSource.playOneShot(clip,1);
        });
    }

    playPopupReward(){
        if(!localConfig.instance.isSound) return;
        let path = 'audio/sound/sfx_getRew';

        resourceUtil.loadAudioClip(path, (err, clip)=> {
            if (err) {
                warn('load audioClip failed: ', err);
                return;
            }

            // NOTE: the second parameter is volume scale.
            this.audioSource.playOneShot(clip,1);
        });
    }

    playGetReward(){
        if(!localConfig.instance.isSound) return;
        let path = 'audio/sound/sfx_getRew';

        resourceUtil.loadAudioClip(path, (err, clip)=> {
            if (err) {
                warn('load audioClip failed: ', err);
                return;
            }

            // NOTE: the second parameter is volume scale.
            this.audioSource.playOneShot(clip,1);
        });
    }

    playJump(){
        if(!localConfig.instance.isSound) return;
        let path = 'audio/sound/jump';

        resourceUtil.loadAudioClip(path, (err, clip)=> {
            if (err) {
                warn('load audioClip failed: ', err);
                return;
            }

            // NOTE: the second parameter is volume scale.
            this.audioSource.playOneShot(clip,1);
        });
    }

    isPlayingClay = false;
    playClay(){
        if(!localConfig.instance.isSound) return;
        if(this.isPlayingClay) return;
        this.isPlayingClay = true;
        this.scheduleOnce(() => {this.isPlayingClay = false;}, 0.5);
        let path = 'audio/sound/clay_break_v2';
        // console.log(path);
        resourceUtil.loadAudioClip(path, (err, clip)=> {
            if (err) {
                warn('load audioClip failed: ', err);
                return;
            }

            // NOTE: the second parameter is volume scale.
            this.audioSource.playOneShot(clip,1);
        });
    }

    isPlayingCurtain = false;
    playCurrtain(){
        if(!localConfig.instance.isSound) return;
        if(this.isPlayingCurtain) return;
        this.isPlayingCurtain = true;
        this.scheduleOnce(() => {this.isPlayingCurtain = false;}, 0.5);
        let path = 'audio/sound/curtain';
        // console.log(path);
        resourceUtil.loadAudioClip(path, (err, clip)=> {
            if (err) {
                warn('load audioClip failed: ', err);
                return;
            }

            // NOTE: the second parameter is volume scale.
            this.audioSource.playOneShot(clip,1);
        });
    }

    playNoMoves(){
        if(!localConfig.instance.isSound) return;
        let path = 'audio/sound/fail2';

        resourceUtil.loadAudioClip(path, (err, clip)=> {
            if (err) {
                warn('load audioClip failed: ', err);
                return;
            }

            // NOTE: the second parameter is volume scale.
            this.audioSource.playOneShot(clip,1);
        });
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
