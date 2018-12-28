"use strict";

const Telegram = require("telegram-node-bot");

const tg = new Telegram.Telegram(
  "496310435:AAER9cj1Ogfcag_Nd13YPRjEydXyoPQz1-w",
  {
    workers: 2
  }
);

const pornController = require("./controllers/porn");
const otherController = require("./controllers/other");
const pornCtrl = new pornController();

tg.router
  .when(new Telegram.TextCommand("/porn", "PornCommand"), pornCtrl)
  .otherwise(new otherController());
