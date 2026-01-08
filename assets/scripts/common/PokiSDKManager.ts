import { _decorator, Component, director, game, Node } from 'cc';
import { clientEvent } from '../framework/clientEvent';
import { Constants } from '../framework/constants';
import { AudioManager2 } from '../framework/audioManager2';
import { MusicManager } from '../framework/musicManager';
import { FBIntanstAd_Callback } from './FBInstantManager';
import { localConfig } from '../localConfig';
const { ccclass, property } = _decorator;

@ccclass('PokiSDKManager')
export class PokiSDKManager extends Component {
    public static instance: PokiSDKManager;
    protected onLoad(): void {
        if (PokiSDKManager.instance == null) {
            PokiSDKManager.instance = this;
        }
        game.addPersistRootNode(this.node);
    }

    isInitializeAsync = false;
    update (deltaTime: number) {
        if(typeof PokiSDK === 'undefined') return;
        if (!this.isInitializeAsync) {
            ////console.log("isInitializeAsync:" + this.isInitializeAsync);
            // [4]
            if (window["phase"] === "poki_init_success") {
                this.isInitializeAsync = true;
                ////console.log("isInitializeAsync:" + this.isInitializeAsync);

                clientEvent.dispatchEvent(Constants.POKI_INIT_SUCCESS);
            }
        }
    }

    protected start(): void {
        this.isInitializeAsync = true;
        clientEvent.dispatchEvent(Constants.POKI_INIT_SUCCESS);
    }


    setGameLoadingFinished(){
        console.error("-----------------------------gameLoadingFinished");
        if(typeof PokiSDK === 'undefined') return;
        PokiSDK.gameLoadingFinished();
    }

    isFirstUserInteraction:boolean = false;
    setGameStart(){
        console.error("-----------------------------setGameStart");
        if(typeof PokiSDK === 'undefined') return;
        PokiSDK.gameplayStart();
    }

    setGameStop(){
        console.error("-----------------------------setGameStop");
        if(typeof PokiSDK === 'undefined') return;
        PokiSDK.gameplayStop();
    }

    fb_InterstitialAd_CallBack: FBIntanstAd_Callback = null;
    public Show_InterstitialAdAsync(location: string, button_name: string, cb?: FBIntanstAd_Callback) {
        if(typeof PokiSDK === 'undefined') {
            cb(null, Constants.FB_INTERSTITIAL_CALLBACK_SUCCESS);
            return;
        };
        let self = this;
        self.fb_InterstitialAd_CallBack = cb;
        clientEvent.dispatchEvent(Constants.SHOW_LOADING_AD_POPUP);
        if (this.isShowInterstitialAd) {
            // pause your game here if it isn't already
            PokiSDK.commercialBreak(() => {
                // you can pause any background music or other audio here
                MusicManager.instance.pauseMusic();
            }).then(() => {
                console.log("Commercial break finished, proceeding to game");
                // if the audio was paused you can resume it here (keep in mind that the function above to pause it might not always get called)
                // continue your game here
                MusicManager.instance.resumeMusic();
                self.SetNextTime_ShowInterstitialAd();
                cb(null, Constants.FB_INTERSTITIAL_CALLBACK_SUCCESS);
            });
        }else{
            clientEvent.dispatchEvent(Constants.HIDE_LOADING_AD_POPUP);
            self.fb_InterstitialAd_CallBack(new Error("next TIME!"), Constants.FB_INTERSTITIAL_CALLBACK_FAIL);
        }
    }

    TIME_NEXT_INTERSTITIAL = 60;
    private isShowInterstitialAd = true;
    private SetNextTime_ShowInterstitialAd() {
            // console.log(this.TIME_NEXT_INTERSTITIAL);
        this.isShowInterstitialAd = false;
        this.scheduleOnce(function () {
            // Here `this` is referring to the component
            this.isShowInterstitialAd = true;
        }, this.TIME_NEXT_INTERSTITIAL);
    }


    fb_RewardVideo_CallBack: FBIntanstAd_Callback = null;
    Show_RewardedVideoAsync(location: string, button_name: string, cb?: FBIntanstAd_Callback) {
        if(typeof PokiSDK === 'undefined'){
            console.log("PokiSDK not init");
            cb(null, Constants.FB_REWARD_CALLBACK_SUCCESS);
            return;
        };
        let self = this;
        self.fb_RewardVideo_CallBack = cb;
        clientEvent.dispatchEvent(Constants.SHOW_LOADING_AD_POPUP);
        // pause your game here if it isn't already
        PokiSDK.rewardedBreak(() => {
            // you can pause any background music or other audio here
            MusicManager.instance.pauseMusic();
        }).then((success) => {
            MusicManager.instance.resumeMusic();
            clientEvent.dispatchEvent(Constants.HIDE_LOADING_AD_POPUP);
            if (success) {
                // video was displayed, give reward
                self.SetNextTime_ShowInterstitialAd_AfterReward();
                self.fb_RewardVideo_CallBack(null, Constants.FB_REWARD_CALLBACK_SUCCESS);
            } else {
                // video not displayed, should not give reward
                self.fb_RewardVideo_CallBack(new Error("load FAIL"), Constants.FB_REWARD_CALLBACK_FAIL);
            }
            // if the audio was paused you can resume it here (keep in mind that the function above to pause it might not always get called)
            console.log("Rewarded break finished, proceeding to game");
            // continue your game here
        });
    }

    TIME_NEXT_INTERSTITIAL_AFTERREWARD = 60;
    private SetNextTime_ShowInterstitialAd_AfterReward() {
        // console.log(this.TIME_NEXT_INTERSTITIAL);
        this.isShowInterstitialAd = false;
        this.scheduleOnce(function () {
            // Here `this` is referring to the component
            this.isShowInterstitialAd = true;
        }, this.TIME_NEXT_INTERSTITIAL_AFTERREWARD);
    }
}


