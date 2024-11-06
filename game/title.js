class Title extends Phaser.Scene {
  constructor() {
    super({ key: 'Title' });
  }
  preload() {
    //Load required sprites
    this.load.image("titleBG", "assets/sprites/TitleBG.png");
  }
  create() {
    //Create map background image
    let titleBG = this.add.sprite(256, 256, "titleBG").setDepth(0);
    titleBG.setInteractive();
    
    //Create and style the title
    let playText = this.add.text(256, 200, "  [Click Anywhere To Play]  ", { fontFamily: 'FiveBySeven', fontSize: '30px', fill: '#bf1600', align: "center", lineSpacing: -25 });
    playText.setOrigin(playText.halfWidth, 0);
    playText.setShadow(-6, 6, "#ff7300", 0);
    playText.setDepth(1);
    playText.setInteractive();
  
    //On click: start the game
    titleBG.on('pointerup', () => {
      gameState.nextScene = true;
    });

    playText.on('pointerup', () => {
      gameState.nextScene = true;
    });
  }
  update() {
    if (gameState.nextScene) {
      gameState.nextScene = false;
      //Start playing the game's music
      //document.querySelector(".music").play(); //Uncomment when music for the game has been created
      this.scene.stop("Title");
      this.scene.start("Scene1");
    };
  }
};
