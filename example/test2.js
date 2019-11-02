var easymidi = require('easymidi');
var virtualInput = new easymidi.Input('test', true);
var virtualOutput = new easymidi.Output('test', true);
console.log('MIDI inputs:');
console.log(easymidi.getInputs());

console.log('MIDI outputs:');
console.log(easymidi.getOutputs());
console.log("Onnistui!")