System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Prefab, SpriteFrame, Texture2D, error, instantiate, find, resources, isValid, assetManager, ImageAsset, AudioClip, localConfig, clientEvent, Constants, _dec, _class, _crd, ccclass, resourceUtil;

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "./clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetType(extras) {
    _reporterNs.report("AssetType", "./configuration", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "./constants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Prefab = _cc.Prefab;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
      error = _cc.error;
      instantiate = _cc.instantiate;
      find = _cc.find;
      resources = _cc.resources;
      isValid = _cc.isValid;
      assetManager = _cc.assetManager;
      ImageAsset = _cc.ImageAsset;
      AudioClip = _cc.AudioClip;
    }, function (_unresolved_2) {
      localConfig = _unresolved_2.localConfig;
    }, function (_unresolved_3) {
      clientEvent = _unresolved_3.clientEvent;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "03e12Aq+BVKE49r36ms5xuQ", "resourceUtil", undefined);

      ({
        ccclass
      } = _decorator);

      _export("resourceUtil", resourceUtil = (_dec = ccclass("resourceUtil"), _dec(_class = class resourceUtil {
        static loadBundler(name) {
          return new Promise((resolve, reject) => {
            assetManager.loadBundle(name, (err, ret) => {
              //console.log(ret)
              resolve(null);
            });
          });
        }

        static loadRes(url, type, cb) {
          if (type) {
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
                  cb(err, res);
                }

                return;
              }

              if (cb) {
                cb(err, res);
              }
            });
          }
        }

        static loadRes2(url, type, cb = () => {}) {
          resources.load(url, (err, res) => {
            if (err) {
              error(err.message || err);
              cb(err, res);
              return;
            }

            cb && cb(null, res);
          });
        }

        static getUIPrefabRes(prefabPath, cb) {
          this.loadRes("prefab/ui/" + prefabPath, Prefab, cb);
        }

        static createUI(path, cb, parent) {
          this.getUIPrefabRes(path, (err, prefab) => {
            if (err) return;
            const node = instantiate(prefab);
            node.setPosition(0, 0, 0);

            if (!parent) {
              parent = find("Canvas");
            }

            parent.addChild(node);

            if (cb) {
              cb(null, node);
            }
          });
        } // public static setCarIcon(name: string, sprite: Sprite, isBlack: boolean, cb: LoadCompleteCallback<SpriteFrame>) {
        //     let path = `gamePackage/texture/car/car${name}`;
        //     if (isBlack) {
        //         path += 'Black';
        //     }
        //     this.setSpriteFrame(path, sprite, cb);
        // }


        static getJsonData(fileName, cb) {
          resources.load("datas/" + fileName, (err, content) => {
            if (err) {
              error(err.message || err);
              return;
            }

            const txt = content;

            if (txt.json) {
              cb(err, txt.json);
            } else {
              const errObj = new Error('failed!!!');
              cb(errObj, null);
            }
          });
        }

        static getJsonData_Promise(fileName, cb) {
          return new Promise((resolve, reject) => {
            resources.load("datas/" + fileName, (err, content) => {
              if (err) {
                error(err.message || err);
                reject(null);
                return;
              }

              const txt = content;

              if (txt.json) {
                cb(err, txt.json);
                resolve && resolve(txt.json);
              } else {
                const errObj = new Error('failed!!!');
                cb(errObj, null);
                reject(null);
              }
            });
          });
        }

        static getData(fileName, cb) {
          resources.load("datas/" + fileName, function (err, content) {
            if (err) {
              error(err.message || err);
              return;
            }

            const txt = content;
            let text = txt.text;

            if (!text) {
              resources.load(content.nativeUrl, (err, content) => {
                text = content;
                cb(err, text);
              });
              return;
            }

            cb(err, text);
          });
        }

        static getData_Promise(fileName, cb) {
          return new Promise((resolve, reject) => {
            resources.load("datas/" + fileName, function (err, content) {
              // console.log(err,content);
              if (err) {
                error(err.message || err);
                reject(null);
                return;
              }

              const txt = content;
              let text = txt.text;

              if (!text) {
                resources.load(content.nativeUrl, (err, content) => {
                  text = content;
                  cb(err, text);
                  resolve && resolve(text);
                  return;
                });
              }

              cb(err, text);
              resolve && resolve(text);
            });
          });
        }

        static setSpriteFrame(path, sprite, cb) {
          this.loadRes(path + '/spriteFrame', SpriteFrame, (err, spriteFrame) => {
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

        static loadSpriteFrameRes(path, sprite, cb) {
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
          return new Promise((resolve, reject) => {
            path = path + '/spriteFrame';
            let bundel = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BUNDLE_ITEMS;
            let ret = assetManager.getBundle(bundel).get(path, SpriteFrame);

            if (ret) {
              if (sprite && isValid(sprite)) {
                sprite.spriteFrame = ret;
                cb(null, ret);
              } else {
                cb(null, ret);
              }

              resolve && resolve(ret);
              return;
            } // //console.log(bundel,path);


            assetManager.getBundle(bundel).load(path, SpriteFrame, (err, ret) => {
              if (err) {
                console.log(err);
                reject(null);
              } else {
                if (sprite && isValid(sprite)) {
                  sprite.spriteFrame = ret;
                  cb(null, ret);
                } else {
                  cb(null, ret);
                }

                resolve && resolve(ret);
              }
            });
          });
        }

        static loadSpriteFrame_Bundle(path, cb) {
          return new Promise((resolve, reject) => {
            path = path + '/spriteFrame'; // console.log(path);

            let bundel = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BUNDLE_ITEMS;
            let ret = assetManager.getBundle(bundel).get(path, SpriteFrame);

            if (ret) {
              // console.log(path);
              cb(null, ret);
              resolve && resolve(ret);
              return;
            } // console.log(bundel,path);


            assetManager.getBundle(bundel).load(path, SpriteFrame, (err, ret) => {
              if (err) {
                // console.log(err);
                cb(err, null);
                reject(null);
              } else {
                // console.log(ret);    
                cb(null, ret);
                resolve && resolve(ret);
              }
            });
          });
        }

        static loadPrefabUI_Bundle(uiPopupName, cb) {
          // console.log("loadPrefabUI_BundleloadPrefabUI_Bundle");    
          return new Promise((resolve, reject) => {
            let path = 'prefabsUI/' + uiPopupName;
            let bundel = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BUNDLE_ITEMS;
            let ret = assetManager.getBundle(bundel).get(path, Prefab); // console.log(path);    
            // console.log(bundel);    
            // console.log(ret);    

            if (ret) {
              cb(null, ret);
              resolve && resolve(ret);
              return;
            } // //console.log(bundel,path);


            assetManager.getBundle(bundel).load(path, Prefab, (err, ret) => {
              if (err) {
                cb(err, ret);
                reject(null);
              } else {
                // console.log(ret);    
                cb(null, ret);
                resolve && resolve(ret);
              }
            });
          });
        }

        static loadPrefabCat_Bundle(pathCat, cb) {
          return new Promise((resolve, reject) => {
            let path = 'cat/cat' + pathCat;
            let bundel = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BUNDLE_ITEMS;
            let ret = assetManager.getBundle(bundel).get(path, Prefab);

            if (ret) {
              cb(null, ret);
              resolve && resolve(ret);
              return;
            }

            assetManager.getBundle(bundel).load(path, Prefab, (err, ret) => {
              if (err) {
                // console.log(bundel,path);
                reject(null);
              } else {
                cb(null, ret);
                resolve && resolve(ret);
              }
            });
          });
        }

        static loadAudioClip(path, cb) {
          return new Promise((resolve, reject) => {
            let bundel = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BUNDLE_AUDIOS;
            assetManager.getBundle(bundel).load(path, AudioClip, (err, ret) => {
              if (err) {
                console.error(path);
                reject(null);
              } else {
                cb(null, ret);
                resolve && resolve(ret);
              }
            });
          });
        }
        /**
         * 根据英雄的文件名获取头像
         */


        static setRemoteImage(url, sprite, cb) {
          return new Promise((resolve, reject) => {
            if (!url || !url.startsWith('http')) {
              cb && cb(null, null);
              reject(null);
              return;
            } // assetManager.loadRemote<ImageAsset>(url, function (err, imageAsset) {
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


            assetManager.downloader.downloadDomImage(url, {
              ext: '.jpg'
            }, function (err, res) {
              if (err) {
                console.log(err);
                cb && cb(err, null);
                reject(null);
              } else {
                let imageAsset = new ImageAsset(res);
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
          });
        }

        static setRemoteSpriteFrame(url, cb) {
          if (!url || !url.startsWith('http')) {
            return;
          } // assetManager.loadRemote<ImageAsset>(url, function (err, imageAsset) {
          //     const spriteFrame = new SpriteFrame();
          //     const texture = new Texture2D();
          //     texture.image = imageAsset;
          //     spriteFrame.texture = texture;
          //     cb && cb(null, spriteFrame);
          // });


          assetManager.downloader.downloadDomImage(url, {
            ext: '.jpg'
          }, function (err, res) {
            if (err) {
              console.log(err);
            } else {
              let imageAsset = new ImageAsset(res);
              const texture = new Texture2D();
              texture.image = imageAsset;
              const spriteFrame = new SpriteFrame();
              spriteFrame.texture = texture;
              cb && cb(null, spriteFrame);
            }
          });
        }

        static setBGResultSpriteFrame(url, cb) {
          if (!url || !url.startsWith('http')) {
            return;
          } // assetManager.loadRemote<ImageAsset>(url, function (err, imageAsset) {
          //     const spriteFrame = new SpriteFrame();
          //     const texture = new Texture2D();
          //     texture.image = imageAsset;
          //     spriteFrame.texture = texture;
          //     cb && cb(null, spriteFrame);
          // });


          assetManager.downloader.downloadDomImage(url, {
            ext: '.jpg'
          }, function (err, res) {
            if (err) {
              console.log(err);
            } else {
              let imageAsset = new ImageAsset(res);
              const texture = new Texture2D();
              texture.image = imageAsset;
              const spriteFrame = new SpriteFrame();
              spriteFrame.texture = texture;
              cb && cb(null, spriteFrame);
            }
          });
        }

        static setAvatarSpriteFrame(url, cb) {
          // console.log(url);
          if (!url || !url.startsWith('http')) {
            return;
          } // assetManager.loadRemote<ImageAsset>(url, function (err, imageAsset) {
          //     const spriteFrame = new SpriteFrame();
          //     const texture = new Texture2D();
          //     texture.image = imageAsset;
          //     spriteFrame.texture = texture;
          //     localConfig.instance.myAvatarImageAsset = imageAsset;
          //     localConfig.instance.myAvatarSpriteFrame = spriteFrame;
          //     clientEvent.dispatchEvent(Constants.AVATAR_LOAD_FINISHED);
          //     cb && cb(null, spriteFrame);
          // });


          assetManager.downloader.downloadDomImage(url, {
            ext: '.jpg'
          }, function (err, res) {
            if (err) {
              console.log(err);
            } else {
              let imageAsset = new ImageAsset(res);
              const spriteFrame = new SpriteFrame();
              const texture = new Texture2D();
              texture.image = imageAsset;
              spriteFrame.texture = texture;
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.myAvatarImageAsset = imageAsset;
              (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.myAvatarSpriteFrame = spriteFrame;
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).AVATAR_LOAD_FINISHED);
              cb && cb(null, spriteFrame);
            }
          });
        }

        static loadPrefabBird_Bundle(pathBird, cb) {
          // console.log("loadPrefabUI_BundleloadPrefabUI_Bundle");    
          return new Promise((resolve, reject) => {
            let path = 'cat/cat' + pathBird;
            let bundel = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).BUNDLE_ITEMS;
            let ret = assetManager.getBundle(bundel).get(path, Prefab);

            if (ret) {
              cb(null, ret);
              resolve && resolve(ret);
              return;
            } // //console.log(bundel,path);


            assetManager.getBundle(bundel).load(path, Prefab, (err, ret) => {
              if (err) {
                reject(null);
              } else {
                // console.log(ret);    
                cb(null, ret);
                resolve && resolve(ret);
              }
            });
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=resourceUtil.js.map