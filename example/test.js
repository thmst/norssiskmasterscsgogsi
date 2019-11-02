var easymidi = require('easymidi');
//var virtualInput = new easymidi.Input('in', true);
//var virtualOutput = new easymidi.Output('out', true);
var output = new easymidi.Output('out', true);

output.send('noteon', {
    note: 1,
    velocity: 127,
    channel: 1
});
console.log("Lähetetty!")
console.log('MIDI inputs:');
console.log(easymidi.getInputs());

console.log('MIDI outputs:');
console.log(easymidi.getOutputs());