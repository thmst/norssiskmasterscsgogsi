const CSGOGSI = require("../index"); // const CSGOGSI = require("node-csgo-gsi");
const player = require('play-sound')();

let gsi = new CSGOGSI({
    port: 8080,
    authToken: ["Q79v5tcxVQ8u", "Team2Token", "Team2SubToken"] // this must match the cfg auth token
});

gsi.on("bombTimeStart", function () {
    console.log("C4 planted");
    player.play('./csbombtimer.wav', (err) => {
        if (err) console.log(`Could not play sound: ${err}`);
    });
});

gsi.on("bombState", function (data) {
    if (data === "defused") {
        console.log("defused");
        audio.kill();
        player.play('./160Hz L.wav', (err) => {
            if (err) console.log(`Could not play sound: ${err}`);
        });
    }
});

gsi.on("roundWinTeam", function (data) {
    if (data === "CT") {
        console.log("CT win");
        player.play('./160Hz R.wav', (err) => {
            if (err) console.log(`Could not play sound: ${err}`);
        });
    }
});

gsi.on("roundWinTeam", function (data) {
    if (data === "T") {
        console.log("T win");
        player.play('./400Hz L.wav', (err) => {
            if (err) console.log(`Could not play sound: ${err}`);
        });
    }
});