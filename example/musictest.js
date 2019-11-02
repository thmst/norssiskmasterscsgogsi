const Troubadour = require('troubadour');
const troubadour = new Troubadour('vlc');

troubadour.on('play', () => {
    // Event listener function
  });

  troubadour.on('error', (error) => {
      console.log(error.message)
    // Do something here to handle the errors
  });

troubadour.on('start', () => {
    console.log("Play")
    // Do something here when the audio starts playing
  });
  
  troubadour.on('end', () => {
    // Do something here when the audio finishes playing
  });
  
  troubadour.play('test.mp3');
  