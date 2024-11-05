//Phaser.js Config goes here

//A global object to pass values between functions and files alike
const gameState = {
  nextScene: false, //Scene flag for changing to the next scene
  escape: false, //Is set to true in some scene files when the player presses esc
};

//Config creates the entire scene, you can change backgroundColor and game size here without breaking any other code
const config = {
  height: 512,
  width: 512,
  backgroundColor: 0x140026, //My palette: 140026-660035-bf1600-ff7300, or 080033-2d0059-a600a6-f29dd6
  scene: [Title, Scene1],
  pixelArt: true, //Turns off anti-aliasing
  physics: {
    default: 'arcade',
    arcade: {
      //gravity: { y: 0 }, not sure if I'll need gravity or not
      debug: false, //Set to true to turn on debug mode (shows hitboxes and velocities)
    }
  },
  scale: {
    parent: document.body.querySelector(".game"),
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      height: 256,
      width: 256,
    },
    max: {
      height: 16000,
      width: 16000,
    },
    zoom: 1,
  },
  autoRound: false,
};

//Initiates the config
const game = new Phaser.Game(config);
