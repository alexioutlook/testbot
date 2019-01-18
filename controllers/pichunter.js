"use strict";

const Telegram = require("telegram-node-bot");
const nspider = require("nspider22");

class PichunterController extends Telegram.TelegramBaseController {
  picHandler($) {
    $.sendMessage("Link?");
    $.waitForRequest.then($ => {
      var userLink = $.message.text;
      $.sendMessage("Limit?");
      $.waitForRequest.then($ => {
        var userLimit = $.message.text;
        getPics(userLink, userLimit);
      });
    });

    //ANCHOR get images function
    function getPics(link, limit) {
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

  get routes() {
    return {
      picCommand: "picHandler"
    };
  }
}

module.exports = PichunterController;
