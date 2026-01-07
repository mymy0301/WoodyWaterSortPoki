System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, A2uData, _crd, DAILY_MESSAGE;

  _export("A2uData", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2ef91dDEltGy5F6YXS4amgZ", "message-data", undefined);

      DAILY_MESSAGE = {
        gameid: "woodenwatersort",
        dataDaily: [{
          imageUrl: "https://game.gameoki.com/playfab/assets/c4a56436-ef80-4960-ace2-2e6edc33b3d8-Water Sort Woody_Bot Message01A_800x420.jpg",
          text: "Claim your gift",
          sub_text: "A special surprise is waiting.",
          buttons: [{
            type: "game_play",
            title: "Play Now",
            webview_height_ratio: "tall",
            payload: {
              type: "a2u"
            },
            url: ""
          }]
        }, {
          imageUrl: "https://game.gameoki.com/playfab/assets/a1cc0e71-8001-4741-863d-205b54301d2f-Water Sort Woody_Bot Message02_800x420.jpg",
          text: "Daily challenge awaits",
          sub_text: "New levels and new rewards are waiting for you.",
          buttons: [{
            type: "game_play",
            title: "Play Now",
            webview_height_ratio: "tall",
            payload: {
              type: "a2u"
            },
            url: ""
          }]
        }, {
          imageUrl: "https://game.gameoki.com/playfab/assets/5f7cc4df-448b-4312-a2e9-03f19673aedb-Water Sort Woody_Bot Message03_800x420.jpg",
          text: "Can you beat your best score",
          sub_text: "Show your sorting skills again.",
          buttons: [{
            type: "game_play",
            title: "Play Now",
            webview_height_ratio: "tall",
            payload: {
              type: "a2u"
            },
            url: ""
          }]
        }, {
          imageUrl: "https://game.gameoki.com/playfab/assets/a01cba21-1a66-46cc-bb80-f0e04689b8ca-Water Sort Woody_Bot Message04_800x420.jpg",
          text: "Time to train your brain",
          sub_text: "Keep your mind sharp & calm.",
          buttons: [{
            type: "game_play",
            title: "Play Now",
            webview_height_ratio: "tall",
            payload: {
              type: "a2u"
            },
            url: ""
          }]
        }, {
          imageUrl: "https://game.gameoki.com/playfab/assets/f5c72c1d-ed7d-4ecc-ad3e-7b3f6e6a07bb-Water Sort Woody_Bot Message05_800x420.jpg",
          text: "It’s brain time",
          sub_text: "Can you beat today’s tricky level?",
          buttons: [{
            type: "game_play",
            title: "Play Now",
            webview_height_ratio: "tall",
            payload: {
              type: "a2u"
            },
            url: ""
          }]
        }, {
          imageUrl: "https://game.gameoki.com/playfab/assets/fc3d837e-35be-42e5-b65c-65dc4b9cebc1-Water Sort Woody_Bot Message06_800x420.jpg",
          text: "Your friends are winning",
          sub_text: "Can you catch up & beat them?",
          buttons: [{
            type: "game_play",
            title: "Play Now",
            webview_height_ratio: "tall",
            payload: {
              type: "a2u"
            },
            url: ""
          }]
        }, {
          imageUrl: "https://game.gameoki.com/playfab/assets/d74f4d2a-f86f-4f30-b40d-f2d3d67e65d0-Water Sort Woody_Bot Message07_800x420.jpg",
          text: "Beat your friends",
          sub_text: "Who’s on top of the leaderboard?",
          buttons: [{
            type: "game_play",
            title: "Play Now",
            webview_height_ratio: "tall",
            payload: {
              type: "a2u"
            },
            url: ""
          }]
        }]
      };

      _export("A2uData", A2uData = class A2uData {
        static a2uNotification(delayTime) {
          let _elements = [];
          let page = DAILY_MESSAGE.dataDaily;
          let length = page.length;

          let _index = Math.floor(Math.random() * length);

          let _data = page[_index];
          let buttonDatas = _data.buttons;
          let buttons = [];

          for (let buttonData of buttonDatas) {
            switch (buttonData.type) {
              case "web_url":
                let _buttonWeb = {
                  type: buttonData.type,
                  title: buttonData.title,
                  url: buttonData.url
                };
                buttons.push(_buttonWeb);
                break;

              case "game_play":
                if (buttonData.payload) {
                  var payload = JSON.parse(JSON.stringify(buttonData.payload));
                  payload.time = Date.now() + delayTime * 1000;
                  payload.index = _index;
                }

                let _buttonPlay = {
                  type: buttonData.type,
                  title: buttonData.title,
                  payload: payload ? JSON.stringify(payload) : "{}"
                };
                buttons.push(_buttonPlay);
                break;

              default:
                break;
            }
          }

          _elements.push({
            title: _data.text,
            subtitle: _data.sub_text,
            image_url: _data.imageUrl,
            buttons: buttons
          });

          let element = _elements[0];

          if (delayTime > 0) {
            var messageData = {
              message: {
                title: element.title,
                body: element.subtitle,
                media_url: element.image_url
              },
              payload: buttons[0].payload,
              schedule_interval: delayTime,
              bot_message_payload_elements: _elements
            };
          } else {
            messageData = {
              message: {
                title: element.title,
                body: element.subtitle,
                media_url: element.image_url
              },
              payload: buttons[0].payload,
              bot_message_payload_elements: _elements
            };
          }

          return messageData;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=message-data.js.map