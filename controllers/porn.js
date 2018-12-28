"use strict";

const directory = require("./directory.json");
const Telegram = require("telegram-node-bot");

class PornController extends Telegram.TelegramBaseController {
  PornHandler($) {
    $.runInlineMenu({
      layout: 2,
      method: "sendMessage",
      params: ["Select the search type"],
      menu: [
        {
          text: "Names",
          callback: () => {
            $.sendMessage("Send the name");
            $.waitForRequest.then($ => {
              let userMsg = $.message.text;
              let temp = cap_First(userMsg);
              searchNames(temp);
            });
          }
        },
        {
          text: "Hair",
          callback: () => {
            $.sendMessage(
              "Send the hair color\nSupported:\n\nBrunette\nBlonde\nBlack\nRedhead\nBlonette\nW-Blonde\n"
            );
            $.waitForRequest.then($ => {
              let userMsg = $.message.text;
              let temp = cap_First(userMsg);
              searchHair(temp);
            });
          }
        },
        {
          text: "Age",
          callback: () => {
            $.sendMessage("Send the age: ");
            $.waitForRequest.then($ => {
              let userMsg = $.message.text;
              if (isNaN(userMsg)) {
                $.sendMessage(userMsg + " is not a number");
              } else {
                searchAge(query);
              }
            });
          }
        },
        {
          text: "Status",
          callback: () => {
            $.sendMessage("Send me: (Active || Retired)");
            $.waitForRequest.then($ => {
              let userMsg = $.message.text;
              let temp = cap_First(userMsg);
              searchStatus(temp);
            });
          }
        },
        {
          text: "Nationality",
          callback: () => {
            $.sendMessage(
              "Send the nationality\nSupported:\n\nAustralia\nCanada\nColombia\nCzechia\nFrance\nGermany\nJapan\nLebanon\nPoland\nRussia\nSpain\nUkraine\nUK\nUS\nLatvia\nHungary\nSlovakia"
            );
            $.waitForRequest.then($ => {
              let userMsg = $.message.text;
              let temp = cap_First(userMsg);
              searchNationality(temp);
            });
          }
        },
        {
          text: "Ethnicity",
          callback: () => {
            $.sendMessage("Send the ethnicity");
            $.waitForRequest.then($ => {
              let userMsg = $.message.text;
              let temp = cap_First(userMsg);
              searchEthnicity(temp);
            });
          }
        },
        {
          text: "Vids",
          callback: () => {
            $.sendMessage("Send the videos number");
            $.waitForRequest.then($ => {
              let userMsg = $.message.text;
              if (isNaN(userMsg)) {
                $.sendMessage(userMsg + " is not a number");
              } else {
                searchVids(userMsg);
              }
            });
          }
        }
      ]
    });

    function searchNames(query) {
      for (var i = 0; i < directory.length; i++) {
        if (directory[i].First == query) {
          $.sendMessage(
            "*Found!*\n\n" +
              directory[i].Last +
              ", " +
              directory[i].First +
              "\nHair: " +
              directory[i].Hair +
              "\nAge: " +
              directory[i].Age +
              "\nStatus: " +
              directory[i].Status +
              "\nNationality: " +
              directory[i].Nationality +
              "\nEthnicity: " +
              directory[i].Ethnicity +
              "\nVids: " +
              directory[i].Vids,
            { parse_mode: "Markdown" }
          );
        } else if (directory[i].Last == query) {
          $.sendMessage(
            "*Found!*\n\n" +
              directory[i].Last +
              ", " +
              directory[i].First +
              "\nHair: " +
              directory[i].Hair +
              "\nAge: " +
              directory[i].Age +
              "\nStatus: " +
              directory[i].Status +
              "\nNationality: " +
              directory[i].Nationality +
              "\nEthnicity: " +
              directory[i].Ethnicity +
              "\nVids: " +
              directory[i].Vids,
            { parse_mode: "Markdown" }
          );
        }
      }
    }

    function searchHair(query) {
      for (var i = 0; i < directory.length; i++) {
        if (directory[i].Hair == query) {
          $.sendMessage(
            "*Found!*\n\n" +
              directory[i].Last +
              ", " +
              directory[i].First +
              "\nHair: " +
              directory[i].Hair +
              "\nAge: " +
              directory[i].Age +
              "\nStatus: " +
              directory[i].Status +
              "\nNationality: " +
              directory[i].Nationality +
              "\nEthnicity: " +
              directory[i].Ethnicity +
              "\nVids: " +
              directory[i].Vids,
            { parse_mode: "Markdown" }
          );
        }
      }
    }

    function searchAge(query) {
      for (var i = 0; i < directory.length; i++) {
        if (directory[i].Age == query) {
          $.sendMessage(
            "*Found!*\n\n" +
              directory[i].Last +
              ", " +
              directory[i].First +
              "\nHair: " +
              directory[i].Hair +
              "\nAge: " +
              directory[i].Age +
              "\nStatus: " +
              directory[i].Status +
              "\nNationality: " +
              directory[i].Nationality +
              "\nEthnicity: " +
              directory[i].Ethnicity +
              "\nVids: " +
              directory[i].Vids,
            { parse_mode: "Markdown" }
          );
        }
      }
    }

    function searchStatus(query) {
      for (var i = 0; i < directory.length; i++) {
        if (directory[i].Status == query) {
          $.sendMessage(
            "*Found!*\n\n" +
              directory[i].Last +
              ", " +
              directory[i].First +
              "\nHair: " +
              directory[i].Hair +
              "\nAge: " +
              directory[i].Age +
              "\nStatus: " +
              directory[i].Status +
              "\nNationality: " +
              directory[i].Nationality +
              "\nEthnicity: " +
              directory[i].Ethnicity +
              "\nVids: " +
              directory[i].Vids,
            { parse_mode: "Markdown" }
          );
        }
      }
    }

    function searchNationality(query) {
      for (var i = 0; i < directory.length; i++) {
        if (directory[i].Nationality == query) {
          $.sendMessage(
            "*Found!*\n\n" +
              directory[i].Last +
              ", " +
              directory[i].First +
              "\nHair: " +
              directory[i].Hair +
              "\nAge: " +
              directory[i].Age +
              "\nStatus: " +
              directory[i].Status +
              "\nNationality: " +
              directory[i].Nationality +
              "\nEthnicity: " +
              directory[i].Ethnicity +
              "\nVids: " +
              directory[i].Vids,
            { parse_mode: "Markdown" }
          );
        }
      }
    }

    function searchEthnicity(query) {
      for (var i = 0; i < directory.length; i++) {
        if (directory[i].Ethnicity == query) {
          $.sendMessage(
            "*Found!*\n\n" +
              directory[i].Last +
              ", " +
              directory[i].First +
              "\nHair: " +
              directory[i].Hair +
              "\nAge: " +
              directory[i].Age +
              "\nStatus: " +
              directory[i].Status +
              "\nNationality: " +
              directory[i].Nationality +
              "\nEthnicity: " +
              directory[i].Ethnicity +
              "\nVids: " +
              directory[i].Vids,
            { parse_mode: "Markdown" }
          );
        }
      }
    }

    function searchVids(query) {
      for (var i = 0; i < directory.length; i++) {
        if (directory[i].Vids == query) {
          $.sendMessage(
            "*Found!*\n\n" +
              directory[i].Last +
              ", " +
              directory[i].First +
              "\nHair: " +
              directory[i].Hair +
              "\nAge: " +
              directory[i].Age +
              "\nStatus: " +
              directory[i].Status +
              "\nNationality: " +
              directory[i].Nationality +
              "\nEthnicity: " +
              directory[i].Ethnicity +
              "\nVids: " +
              directory[i].Vids,
            { parse_mode: "Markdown" }
          );
        }
      }
    }
  }

  get routes() {
    return {
      PornCommand: "PornHandler"
    };
  }
}

function cap_First(str) {
  return str.replace(/\w\S*/g, txt => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

module.exports = PornController;
