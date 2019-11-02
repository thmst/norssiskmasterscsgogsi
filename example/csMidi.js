var easymidi = require('easymidi');
var virtualInput = new easymidi.Input('testIn', true);
var virtualOutput = new easymidi.Output('CS', true);
console.log("Virtual output created")