var easymidi = require('easymidi');
//var virtualInput = new easymidi.Input('in', true);
//var virtualOutput = new easymidi.Output('out', true);
var output = new easymidi.Output('testOut', true);
while(true) {
 output.send('noteon', {
    note: 1,
    velocity: 127,
    channel: 1
});
   
}
