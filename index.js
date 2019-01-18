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
const tweetController = require("./controllers/tweet");
const picController = require("./controllers/pichunter");
const pornCtrl = new pornController();
const tweetCtrl = new tweetController();
const picCtrl = new picController();

tg.router
  .when(new Telegram.TextCommand("/porn", "PornCommand"), pornCtrl)
  .when(new Telegram.TextCommand("/tweet", "tweetCommand"), tweetCtrl)
  .when(new Telegram.TextCommand("/pichunter", "picCommand"), picCtrl)
  .otherwise(new otherController());
