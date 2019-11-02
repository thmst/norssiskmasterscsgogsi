const CSGOGSI = require("../index"); // const CSGOGSI = require("node-csgo-gsi");
var easymidi = require('easymidi');
var output = new easymidi.Output('CS', true);

let gsi = new CSGOGSI({
    port: 8080,
    authToken: ["Q79v5tcxVQ8u", "Team2Token", "Team2SubToken"] // this must match the cfg auth token
});


gsi.on("bombTimeStart", function () {
    console.log("C4 planted");
    for(var i = 0; i < 1; i++) {
    output.send('noteon', {
        velocity: 127,
        note: 1,
        channel: 1
    });
}
    }
);

gsi.on("bombState", function (data) {
    if (data === "defused") {
        console.log("defused");
        for(var i = 0; i < 1; i++) {
            output.send('noteon', {
                velocity: 127,
                note: 2,
                channel: 1
            });
        }
    }
});

gsi.on("roundWinTeam", function (data) {
    if (data === "CT") {
        console.log("CT win");
        for(var i = 0; i < 1; i++) {
            output.send('noteon', {
                velocity: 127,
                note: 3,
                channel: 1
            });
        }
    }
});

gsi.on("roundWinTeam", function (data) {
    if (data === "T") {
        console.log("T win");
        for(var i = 0; i < 1; i++) {
            output.send('noteon', {
                velocity: 127,
                note: 4,
                channel: 1
            });
        }
    }
});