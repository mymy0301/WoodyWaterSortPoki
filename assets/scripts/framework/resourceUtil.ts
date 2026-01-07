import { _decorator, Prefab, Node, Sprite, SpriteFrame, Texture2D, Asset, error, instantiate, find, resources, isValid, assetManager, LoadCompleteCallback, ImageAsset, AudioClip } from "cc";
import { localConfig } from "../localConfig";
import { clientEvent } from "./clientEvent";
import { AssetType } from "./configuration";
import { Constants } from "./constants";
const { ccclass } = _decorator;

declare global {
    namespace globalThis {
        var LZString: any;
    }
}

interface ITextAsset{
    text?: string;
    _file?: string;
    json?: string
}



@ccclass("resourceUtil")
export class resourceUtil {
    public static loadBundler(name:string)
    {
        return new Promise((resolve,reject)=>{
            assetManager.loadBundle(name,(err,ret)=>{
                //console.log(ret)
                resolve(null);
            })
        })
    }

    public static loadRes<T extends Asset>(url: string, type: AssetType<T> | null, cb?: LoadCompleteCallback<T>) {
        if(type){
            resources.load(url, type, (err, res) => {
                if (err) {
                    error(err.message || err);
                    if (cb) {
                        cb(err, res);
                    }

                    return;
                }

                if (cb) {
                    cb(err, res);
                }
            });
        } else {
            resources.load(url, (err, res) => {
                if (err) {
                    error(err.message || err);
                    if (cb) {
                        cb(err, res as T);
                    }

                    return;
                }

                if (cb) {
                    cb(err, res as T);
                }
            });
        }
    }

    public static loadRes2 (url: string, type: any, cb: Function = ()=>{}) {
        resources.load(url, (err: any, res: any)=>{
            if (err) {
                error(err.message || err);
                cb(err, res);
                return;
            }
 
            cb && cb(null, res);
        })
    }

    public static getUIPrefabRes(prefabPath: string, cb?: (err: Error | null, asset?: Prefab) => void) {
        this.loadRes("prefab/ui/" + prefabPath, Prefab, cb);
    }

    public static createUI(path: string, cb?: (err: Error | null, node?: Node) => void, parent?: Node | null) {
        this.getUIPrefabRes(path, (err: Error | null, prefab?: Prefab) => {
            if (err) return;
            const node = instantiate(prefab!);
            node.setPosition(0, 0, 0);
            if (!parent) {
                parent = find("Canvas");
            }

            parent!.addChild(node);
            if(cb){
                cb(null, node);
            }
        });
    }

    // public static setCarIcon(name: string, sprite: Sprite, isBlack: boolean, cb: LoadCompleteCallback<SpriteFrame>) {
    //     let path = `gamePackage/texture/car/car${name}`;
    //     if (isBlack) {
    //         path += 'Black';
    //     }

    //     this.setSpriteFrame(path, sprite, cb);
    // }

    public static getJsonData(fileName: string, cb: (err: Error | null, asset: any) => void) {
        resources.load("datas/" + fileName, (err, content) => {
            if (err) {
                error(err.message || err);
                return;
            }

            const txt = content as unknown as ITextAsset;
            if (txt.json) {
                cb(err, txt.json);
            } else {
                const errObj = new Error('failed!!!')
                cb(errObj, null);
            }
        });
    }

    public static getJsonData_Promise(fileName: string, cb: (err: Error | null, asset: any) => void) {
        return new Promise((resolve, reject)=>{
            resources.load("datas/" + fileName, (err, content) => {
                if (err) {
                    error(err.message || err);
                    reject(null);
                    return;
                }

                const txt = content as unknown as ITextAsset;
                if (txt.json) {
                    cb(err, txt.json);
                    resolve && resolve(txt.json);
                } else {
                    const errObj = new Error('failed!!!')
                    cb(errObj, null);
                    reject(null);
                }
            });
        })
    }

    public static getData(fileName: string, cb: (err: Error | null, asset: any) => void) {
        resources.load("datas/" + fileName, function (err, content) {
            if (err) {
                error(err.message || err);
                return;
            }

            const txt = content as unknown as ITextAsset;
            let text = txt!.text;
            if (!text) {
                resources.load(content.nativeUrl, (err, content) => {
                    text = content as unknown as string;
                    cb(err, text);
                });

                return;
            }

            cb(err, text);
        });
    }

    public static getData_Promise(fileName: string, cb: (err: Error | null, asset: any) => void) {
        return new Promise((resolve, reject)=>{
            resources.load("datas/" + fileName, function (err, content) {
                // console.log(err,content);
                if (err) {
                    error(err.message || err);
                    reject(null);
                    return;
                }

                const txt = content as unknown as ITextAsset;
                let text = txt!.text;
                if (!text) {
                    resources.load(content.nativeUrl, (err, content) => {
                        text = content as unknown as string;
                        cb(err, text);
                        resolve && resolve(text);
                        return;
                    });
                }

                cb(err, text);
                resolve && resolve(text);
            });
        })
    }

    

    public static setSpriteFrame<T extends Asset>(path: string, sprite: Sprite, cb: LoadCompleteCallback<SpriteFrame>) {
        this.loadRes<SpriteFrame>(path + '/spriteFrame', SpriteFrame, (err, spriteFrame) => {
            if (err) {
                console.error('set sprite frame failed! err:', path, err);
                cb(err, spriteFrame);
                return;
            }

            if (sprite && isValid(sprite)) {
                sprite.spriteFrame = spriteFrame;
                cb(null, spriteFrame);
            }
        });
    }

    public static loadSpriteFrameRes(path: string,sprite: Sprite,cb: LoadCompleteCallback<SpriteFrame>) {
        // return new Promise((resolve, reject)=>{
        //     this.loadRes2(path+'/spriteFrame', SpriteFrame, (err: any, img: SpriteFrame)=>{
        //         if (err) {
        //             console.error('spriteFrame load failed!', path, err);
        //             reject && reject();
        //             return;
        //         }
 
        //         // let texture = new Texture2D();
        //         // texture.image = img;
 
        //         // let sf = new SpriteFrame();
        //         // sf.texture = texture;
        //         if (sprite && isValid(sprite)) {
        //             sprite.spriteFrame = img;
        //             cb(null, img);
        //         }
        //         resolve && resolve(img);
        //     })
        // })
        return new Promise((resolve, reject)=>{
            path = path+'/spriteFrame';
            let bundel = Constants.BUNDLE_ITEMS;
            let ret = assetManager.getBundle(bundel).get(path,SpriteFrame);
                
            if(ret)
            {
                if (sprite && isValid(sprite)) {
                    sprite.spriteFrame = ret;
                    cb(null, ret);
                }else{
                    cb(null, ret);
                }                                  
                resolve && resolve(ret);
                return;
            }
            // //console.log(bundel,path);
            assetManager.getBundle(bundel).load(path,SpriteFrame,(err,ret)=>{
                if (err) {
                    console.log(err);
                    reject(null);

                }
                else {
                    if (sprite && isValid(sprite)) {
                        sprite.spriteFrame = ret;
                        cb(null, ret);
                    }
                    else{
                        cb(null, ret);
                    }      
                    resolve && resolve(ret);
                }
            });                
        })
    }

    public static loadSpriteFrame_Bundle(path: string,cb: LoadCompleteCallback<SpriteFrame>){
        return new Promise((resolve, reject)=>{
            path = path+'/spriteFrame';
            // console.log(path);
            let bundel = Constants.BUNDLE_ITEMS;
            let ret = assetManager.getBundle(bundel).get(path,SpriteFrame);
            if(ret)
            {
                // console.log(path);
                cb(null, ret);                             
                resolve && resolve(ret);
                return;
            }
            // console.log(bundel,path);
            assetManager.getBundle(bundel).load(path,SpriteFrame,(err,ret)=>{
                if (err) {
                    // console.log(err);
                    cb(err, null);
                    reject(null);
                }
                else {
                    // console.log(ret);    
                    cb(null, ret);      
                    resolve && resolve(ret);
                }
            });                
        })
    }

    public static loadPrefabUI_Bundle(uiPopupName: string,cb: LoadCompleteCallback<Prefab>){
        // console.log("loadPrefabUI_BundleloadPrefabUI_Bundle");    
        return new Promise((resolve, reject)=>{
            let path = 'prefabsUI/'+uiPopupName;
            let bundel = Constants.BUNDLE_ITEMS;
            let ret = assetManager.getBundle(bundel).get(path,Prefab);
            // console.log(path);    
            // console.log(bundel);    
            // console.log(ret);    
            if(ret)
            {
                cb(null, ret);                             
                resolve && resolve(ret);
                return;
            }
            // //console.log(bundel,path);
            assetManager.getBundle(bundel).load(path,Prefab,(err,ret)=>{
                if (err) {
                    cb(err, ret);      
                    reject(null);
                }
                else {
                    // console.log(ret);    
                    cb(null, ret);      
                    resolve && resolve(ret);
                }
            });                
        })
    }


    public static loadPrefabCat_Bundle(pathCat: string,cb: LoadCompleteCallback<Prefab>){
        return new Promise((resolve, reject)=>{
            let path = 'cat/cat'+pathCat;
            let bundel = Constants.BUNDLE_ITEMS;
            let ret = assetManager.getBundle(bundel).get(path,Prefab);
            if(ret)
            {
                cb(null, ret);                             
                resolve && resolve(ret);
                return;
            }
            assetManager.getBundle(bundel).load(path,Prefab,(err,ret)=>{
                if (err) {
                    // console.log(bundel,path);
                    reject(null);
                }
                else {
                    cb(null, ret);      
                    resolve && resolve(ret);
                }
            });                
        })
    }

    public static loadAudioClip(path: string,cb: LoadCompleteCallback<AudioClip>) {
        return new Promise((resolve, reject)=>{
            let bundel = Constants.BUNDLE_AUDIOS;
            assetManager.getBundle(bundel).load(path,AudioClip,(err,ret)=>{
                if (err) {
                    console.error(path);
                    reject(null);
                }
                else {
                    cb(null, ret);
                    resolve && resolve(ret);
                }
            });                
        })
    }



    /**
     * 根据英雄的文件名获取头像
     */
    public static setRemoteImage(url: string, sprite: Sprite, cb: LoadCompleteCallback<SpriteFrame>) {
        return new Promise((resolve, reject)=>{
            if (!url || !url.startsWith('http')) {
                cb && cb(null, null);
                reject(null);
                return;
            }
            // assetManager.loadRemote<ImageAsset>(url, function (err, imageAsset) {
            //     if(err){

            //     }else{
            //         const spriteFrame = new SpriteFrame();
            //         const texture = new Texture2D();
            //         texture.image = imageAsset;
            //         spriteFrame.texture = texture;
            //         // ...
            //         if (sprite && isValid(sprite)) {
            //             sprite.spriteFrame = spriteFrame;
            //         }
                    

            //         cb && cb(null, imageAsset);
            //     }
            // });

            assetManager.downloader.downloadDomImage(url,{ext:'.jpg'},function (err, res) {
                if(err){
                    console.log(err);
                    cb && cb(err, null);
                    reject(null);
                }else{
                    let imageAsset = new ImageAsset(res as HTMLImageElement);
                    const texture = new Texture2D();
                    texture.image = imageAsset;
                    const spriteFrame = new SpriteFrame();
                    spriteFrame.texture = texture;
                    if (sprite && isValid(sprite)) {
                        sprite.spriteFrame = spriteFrame;
                    }
                    cb && cb(null, spriteFrame);
                    resolve && resolve(spriteFrame);
                }
            });
        })
        
    }

    public static setRemoteSpriteFrame(url: string,cb: LoadCompleteCallback<SpriteFrame>) {
        if (!url || !url.startsWith('http')) {
            return;
        }
        // assetManager.loadRemote<ImageAsset>(url, function (err, imageAsset) {
        //     const spriteFrame = new SpriteFrame();
        //     const texture = new Texture2D();
        //     texture.image = imageAsset;
        //     spriteFrame.texture = texture;

        //     cb && cb(null, spriteFrame);
        // });

        assetManager.downloader.downloadDomImage(url,{ext:'.jpg'},function (err, res) {
            if(err){
                console.log(err);
            }else{
                let imageAsset = new ImageAsset(res as HTMLImageElement);
                const texture = new Texture2D();
                texture.image = imageAsset;
                const spriteFrame = new SpriteFrame();
                spriteFrame.texture = texture;

                cb && cb(null, spriteFrame);
            }
        });
    }

    public static setBGResultSpriteFrame(url: string,cb: LoadCompleteCallback<SpriteFrame>) {
        if (!url || !url.startsWith('http')) {
            return;
        }
        // assetManager.loadRemote<ImageAsset>(url, function (err, imageAsset) {
        //     const spriteFrame = new SpriteFrame();
        //     const texture = new Texture2D();
        //     texture.image = imageAsset;
        //     spriteFrame.texture = texture;

        //     cb && cb(null, spriteFrame);
        // });

        assetManager.downloader.downloadDomImage(url,{ext:'.jpg'},function (err, res) {
            if(err){
                console.log(err);
            }else{
                let imageAsset = new ImageAsset(res as HTMLImageElement);
                const texture = new Texture2D();
                texture.image = imageAsset;
                const spriteFrame = new SpriteFrame();
                spriteFrame.texture = texture;

                cb && cb(null, spriteFrame);
            }
        });
    }

    public static setAvatarSpriteFrame(url: string,cb: LoadCompleteCallback<SpriteFrame>) {
        // console.log(url);
        if (!url || !url.startsWith('http')) {
            return;
        }
        // assetManager.loadRemote<ImageAsset>(url, function (err, imageAsset) {
        //     const spriteFrame = new SpriteFrame();
        //     const texture = new Texture2D();
        //     texture.image = imageAsset;
        //     spriteFrame.texture = texture;
        //     localConfig.instance.myAvatarImageAsset = imageAsset;
        //     localConfig.instance.myAvatarSpriteFrame = spriteFrame;

        //     clientEvent.dispatchEvent(Constants.AVATAR_LOAD_FINISHED);
        //     cb && cb(null, spriteFrame);
        // });

        assetManager.downloader.downloadDomImage(url,{ext:'.jpg'},function (err, res) {
            if(err){
                console.log(err);
            }else{
                let imageAsset = new ImageAsset(res as HTMLImageElement);
                const spriteFrame = new SpriteFrame();
                const texture = new Texture2D();
                texture.image = imageAsset;
                spriteFrame.texture = texture;
                localConfig.instance.myAvatarImageAsset = imageAsset;
                localConfig.instance.myAvatarSpriteFrame = spriteFrame;

                clientEvent.dispatchEvent(Constants.AVATAR_LOAD_FINISHED);
                cb && cb(null, spriteFrame);
            }
        });

    }

    public static loadPrefabBird_Bundle(pathBird: string,cb: LoadCompleteCallback<Prefab>){
        // console.log("loadPrefabUI_BundleloadPrefabUI_Bundle");    
        return new Promise((resolve, reject)=>{
            let path = 'cat/cat'+pathBird;
            let bundel = Constants.BUNDLE_ITEMS;
            let ret = assetManager.getBundle(bundel).get(path,Prefab);
            if(ret)
            {
                cb(null, ret);                             
                resolve && resolve(ret);
                return;
            }
            // //console.log(bundel,path);
            assetManager.getBundle(bundel).load(path,Prefab,(err,ret)=>{
                if (err) {
                    reject(null);
                }
                else {
                    // console.log(ret);    
                    cb(null, ret);      
                    resolve && resolve(ret);
                }
            });                
        })
    }
}
