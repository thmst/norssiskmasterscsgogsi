const fs = require("fs");
const CSGOGSI = require("../index"); // const CSGOGSI = require("node-csgo-gsi");
var ks = require('node-key-sender');
var tickinterval;
var easymidi = require('easymidi');
//var virtualInput = new easymidi.Input('CS', true);
//var virtualOutput = new easymidi.Output('CS', true);
var output = new easymidi.Output('CS', true);

let gsi = new CSGOGSI({
    port: 8080,
    authToken: ["Q79v5tcxVQ8u", "Team2Token", "Team2SubToken"] // this must match the cfg auth token
});

var pommi = false;
var purku = false;


gsi.on("bombTimeStart", function () {
    console.log("C4 planted");
    pommi = true;
    while(pommi) {
        output.send('noteon', {
        velocity: 127,
        note: 1,
        channel: 1

      });
    }
    //ks.sendKey('1');
    }
);

gsi.on("bombState", function (data) {
    if (data === "defused") {
        console.log("defused");
        //ks.sendKey('2');
    }
});

gsi.on("roundWinTeam", function (data) {
    if (data === "CT") {
        console.log("CT win");
        pommi = false;
        output.send('noteon', {
            note: 2,
            velocity: 127,
            channel: 1
          });
    
        //ks.sendKey('3');
    }
});

gsi.on("roundWinTeam", function (data) {
    if (data === "T") {
        console.log("T win");
        pommi = false;
        output.send('noteon', {
            note: 3,
            velocity: 127,
            channel: 1
          });
        //ks.sendKey('4');
    }
});