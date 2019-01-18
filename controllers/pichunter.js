"use strict";

const Telegram = require("telegram-node-bot");
const nspider = require("nspider22");

class PichunterController extends Telegram.TelegramBaseController {
  picHandler($) {
    let userMsg = $.message.text.split(" ").slice(1);
    if (!userMsg) {
      $.sendMessage("Send your link");
      $.waitForRequest.then($ => {
        let linkMsg = $.message.text;
        $.sendMessage("Now send the limit");
        $.waitForRequest.then($ => {
          let limitMsg = $.message.text;
          $.sendMessage("Processing...");
          getPics(linkMsg, limitMsg);
        });
      });
    } else {
      $.sendMessage("Send the limit");
      $.waitForRequest.then($ => {
        let limitMsg = $.message.text;
        getPics(userMsg, limitMsg);
      });
    }

    //ANCHOR get images function
    function getPics(link, limit) {
      if (!isNaN(limit)) return $.sendMessage(limit + " is not a number");
      else {
        let links = [];
        limit = parseInt(limit);
        let nsp = new nspider({ name: "something" });

        nsp.onHtml("div .flex-images", ele => {
          let linkToModify = ele.$.children()
            .children()
            .attr("href")
            .toString();
          let counter = 0;
          let picsCounter = limit;

          do {
            let finalLink =
              linkToModify.split("_", 1) + `_${(counter += 1)}_o.jpg`;
            links.push(finalLink);
          } while (counter < picsCounter);

          links.forEach(link => {
            $.sendMessage(link);
          });
        });
        nsp.visit(link);
      }
    }
  }

  get routes() {
    return {
      picCommand: "picHandler"
    };
  }
}

module.exports = PichunterController;
