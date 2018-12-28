"use strict";

const Telegram = require("telegram-node-bot");

class OtherwiseController extends Telegram.TelegramBaseController {
  handle($) {
    $.sendMessage("What the fuck is that?");
  }
}

module.exports = OtherwiseController;
