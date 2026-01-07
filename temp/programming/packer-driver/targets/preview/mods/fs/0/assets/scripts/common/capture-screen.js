System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, find, RenderTexture, Camera, instantiate, screen, isValid, UITransform, _crd, captureCamera, removeCamera, _getRenderData, _createImg;

  function toB64(arrayBuffer, RTex, width, height) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d'); // console.log(canvas.width);
    // console.log(canvas.height);
    // console.log(Math.floor(RTex.width));
    // console.log(Math.floor(RTex.height));
    // const widthW = canvas.width = Math.floor(RTex.width);
    // const heightH = canvas.height = Math.floor(RTex.height);
    // canvas.width = width;
    // canvas.width = height;
    // console.log(canvas.width);
    // console.log(canvas.height);
    // console.log(Math.floor(RTex.width));
    // console.log(Math.floor(RTex.height));

    canvas.width = width;
    canvas.height = height;
    var rowBytes = width * 4; //bytes amount in each row

    for (var row = 0; row < height; row++) {
      var srow = height - 1 - row;
      var imageData = ctx.createImageData(width, 1);
      var start = srow * width * 4;

      for (var i = 0; i < rowBytes; i++) {
        imageData.data[i] = arrayBuffer[start + i];
      }

      ctx.putImageData(imageData, 0, row);
    }

    return canvas.toDataURL('image/jpeg', 0.8);
  }

  function formatScreenPixel(arrayBuffer) {
    var width = Math.floor(screen.windowSize.width);
    var height = Math.floor(screen.windowSize.height);
    var rowBytes = width * 4; //bytes amount in each row

    var screenPixelArray = [];

    for (var row = 0; row < height; row++) {
      var srow = height - 1 - row;
      var start = srow * width * 4;
      var rowArray = [];
      screenPixelArray[row] = rowArray;

      for (var i = 0; i < rowBytes; i += 4) {
        rowArray.push([arrayBuffer[start + i], arrayBuffer[start + i + 1], arrayBuffer[start + i + 2], arrayBuffer[start + i + 3]]);
      }
    }

    return screenPixelArray;
  }

  function removeImg(img) {
    img.parentNode.removeChild(img);
  }

  function createRenderTexture(camera, node) {
    var texture = new RenderTexture();

    if (node != undefined) {
      var uiTransform = node.getComponent(UITransform);
      var width = uiTransform.width;
      var height = uiTransform.height;
    } else {
      width = screen.windowSize.width;
      height = screen.windowSize.height;
    }

    texture.initialize({
      width,
      height
    });
    camera.targetTexture = texture;
  }

  function judgeCaptureCameraValid() {
    if (!isValid(captureCamera)) {
      throw new SyntaxError('please execute  function:createCaptureCamera first');
    }
  }

  function backNextTickPromise() {
    return new Promise(resolve => requestAnimationFrame(resolve));
  }

  function captureNode(_node, _camera) {
    // const _cameraNode = instantiate(_node);
    // _cameraNode.parent = _node.parent;
    // const comp = _cameraNode.getComponent(Camera);
    createRenderTexture(_camera, _node);
    captureCamera = _camera;
    return backNextTickPromise();
  }

  function createCaptureCamera() {
    var _node = find('Canvas/Camera');

    var _cameraNode = instantiate(_node);

    _cameraNode.parent = _node.parent;

    var comp = _cameraNode.getComponent(Camera);

    createRenderTexture(comp);
    captureCamera = comp;
    return backNextTickPromise();
  }

  function setCaptureCameraVisibility(visibility) {
    judgeCaptureCameraValid();
    captureCamera.visibility = visibility;
    return backNextTickPromise();
  }

  function captureScreen() {
    // judgeCaptureCameraValid();
    // const _data = _getRenderData(captureCamera);
    // const _img = _createImg(_data);
    // return _img;
    return null;
  }

  function getBase64(_camera, width, height) {
    // judgeCaptureCameraValid();
    return _getRenderData(captureCamera, width, height);
  }

  function getScreenData() {
    judgeCaptureCameraValid();
    return formatScreenPixel(captureCamera.targetTexture.readPixels());
  }

  _export({
    setCaptureCameraVisibility: setCaptureCameraVisibility,
    createCaptureCamera: createCaptureCamera,
    captureScreen: captureScreen,
    getScreenData: getScreenData,
    removeImg: removeImg,
    getBase64: getBase64,
    captureNode: captureNode
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      find = _cc.find;
      RenderTexture = _cc.RenderTexture;
      Camera = _cc.Camera;
      instantiate = _cc.instantiate;
      screen = _cc.screen;
      isValid = _cc.isValid;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0a31bwJOzlA2b3fdziGdbHA", "capture-screen", undefined);

      captureCamera = null;
      /**
       * @author ccbbs
       * @file 屏幕截取，长按分享
       * @version 1.0.0
       * @date 2021-12-29
       * @example 
       * ```js
       * //创建截图摄像机
       * createCaptureCamera().then(()=>{
       * captureScreen();//截图
       * getScreenData();//获得屏幕数据
       * })
       * 
       * setCaptureCameraVisibility(1).then(()=>{
       * captureScreen();//截图
       * getScreenData();//获得屏幕数据
       * })
       * ```
       */

      _export("removeCamera", removeCamera = function removeCamera() {
        captureCamera.node.destroy();
      });

      _getRenderData = function _getRenderData(camera, width, height) {
        var _texture = camera.targetTexture;
        return toB64(_texture.readPixels(), _texture, width, height);
      };

      _createImg = function _createImg(data) {
        var img = document.createElement("img");
        var gameDiv = document.getElementById('Cocos3dGameContainer');
        img.src = data;
        img.style.position = 'absolute';
        img.width = gameDiv.clientWidth;
        img.height = gameDiv.clientHeight;
        img.style.left = '0';
        img.style.top = '0';
        img.style.opacity = '0.01';
        gameDiv.appendChild(img);
        return img;
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=capture-screen.js.map