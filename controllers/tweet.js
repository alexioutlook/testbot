"use strict";

const Telegram = require("telegram-node-bot");
const Twit = require("twit");
const T = new Twit({
  consumer_key: "iBdn8SfBd3LI5q2iicxQTzkcX",
  consumer_secret: "1GjG1WpKKRKgOjNXTP1n2NKBM79BXnjXMmtwA4TTBo5WdHDIBO",
  access_token: "845477478-vYgVHeiqB2kjBhVOepeohX1y9xlpfGEqhKuIJviw",
  access_token_secret: "rbBg3qjSh5vs1PD7DUGs9vmX7PylFAxhgGJnjsqazaabR"
});

class TweetController extends Telegram.TelegramBaseController {
  tweetHandler($) {
    let userMsg = $.message.text
      .split(" ")
      .slice(1)
      .join(" ");
    if (!userMsg) {
      $.sendMessage("Send your tweet");
      $.waitForRequest.then($ => {
        let userMsg = $.message.text;
        tweetIt(userMsg);
      });
    } else {
      tweetIt(userMsg);
    }

    function tweetIt(message) {
      let tweet = {
        status: message
      };

      $.sendMessage("Yalla Tweeting...");
      T.post("statuses/update", tweet, (err, data, res) => {
        if (err) {
          $.sendMessage("An error has occured");
        } else {
          $.sendMessage(
            "Tweeted!\nYour tweet was: " +
              '"' +
              JSON.stringify(tweet.status) +
              '"'
          );
        }
      });
    }
  }

  get routes() {
    return {
      tweetCommand: "tweetController"
    };
  }
}

module.exports = TweetController;
