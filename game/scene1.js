class Scene1 extends Phaser.Scene {
  constructor() {
    super({ key: 'Scene1' });
  }
  preload() {
    //this.load.spritesheet("sheet1", "assets/sprites/32x32sprites1.png", { frameWidth: 32, frameHeight: 32 });
    //this.load.image("mapBG", "assets/sprites/MapBG.png");
  }
  create() {
    //If ESC is pressed, go back to the title
    this.input.keyboard.on('keydown-ESC', function () {gameState.escape = true});
  }
  update() {
    //If a character is chosen, go to next scene
    if (gameState.nextScene) {
      this.scene.stop("Scene1");
      this.scene.start("Forest");
    };

    //If ESC is pressed, go back to the title
    if (gameState.escape) {
      gameState.escape = false;
      //Stop playing the game's music
      //document.querySelector(".music").load();
      //document.querySelector(".music").pause();
      this.scene.stop("Scene1");
      this.scene.start("Title");
    };
  };
};
