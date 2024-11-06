class Scene1 extends Phaser.Scene {
  constructor() {
    super({ key: 'Scene1' });
  }
  preload() {
    this.load.spritesheet("sheet1", "assets/sprites/Spritesheet.png", { frameWidth: 16, frameHeight: 16 });
    this.load.image("arena", "assets/sprites/Dungeon.png");
  }
  create() {
    //Add text to the screen
    let exposition = this.add.text(256, 10, "Finally, you've found it. The thing you've spent your whole life searching for!\n\nThe Secret Temple of Secrets\n\nNot only will you be its discoverer, but you will also be the first to find all the secrets within.\nYour objective: reach the final floor of the temple. Good Luck!", { fontFamily: 'FiveBySeven', fontSize: '30px', fill: '#ff7300', align: "center", lineSpacing: -25 });
    exposition.setOrigin(exposition.halfWidth, 0);
    exposition.setDepth(1);

    //Create the player character and begin their "spawn" animation
    let player = this.add.sprite(256, 450, "sheet1").setDepth(2).setScale(4).setFrame(12).setInteractive();
    
    //Create character animations
    this.anims.create({
      key: 'playerSpawn',
      frames: this.anims.generateFrameNumbers("sheet1", { start: 0, end: 12 }),
      frameRate: 5,
      repeat: 0
    });
    player.anims.play("playerSpawn", true);

    //On hover: scale up
    player.on('pointerover', () => {
      player.setScale(4.4);
    });

    //No hover: reset scale
    player.on('pointerout', () => {
      player.setScale(4);
    });

    //On click: start the game
    player.on('pointerup', () => {
      gameState.nextScene = true;
    });
    
    //If ESC is pressed, go back to the title
    this.input.keyboard.on('keydown-ESC', function () {gameState.escape = true});
  }
  update() {
    //If a character is chosen, go to next scene
    if (gameState.nextScene) {
      this.scene.stop("Scene1");
      this.scene.start("Begin");
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
