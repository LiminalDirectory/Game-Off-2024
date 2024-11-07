class Scene1 extends Phaser.Scene {
  constructor() {
    super({ key: 'Scene1' });
  }
  preload() {
    this.load.spritesheet("sheet1", "assets/sprites/Spritesheet.png", { frameWidth: 16, frameHeight: 16 });
    this.load.image("arena", "assets/sprites/Dungeon.png");
  }
  create() {
    //Create dungeon background image
    this.add.sprite(256, 256, "arena").setDepth(0);

    //Create character sprite
    gameState.player = this.add.sprite(256, 256, "sheet1").setDepth(2).setFrame(32);

    //Create character animations
    this.anims.create({
      key: 'runR',
      frames: this.anims.generateFrameNumbers("sheet1", { start: 32, end: 35 }),
      frameRate: 4,
      repeat: -1
    });

    this.anims.create({
      key: 'runL',
      frames: this.anims.generateFrameNumbers("sheet1", { start: 36, end: 39 }),
      frameRate: 4,
      repeat: -1
    });

    this.anims.create({
      key: 'runBR',
      frames: this.anims.generateFrameNumbers("sheet1", { start: 64, end: 67 }),
      frameRate: 4,
      repeat: -1
    });

    this.anims.create({
      key: 'runBL',
      frames: this.anims.generateFrameNumbers("sheet1", { start: 68, end: 71 }),
      frameRate: 4,
      repeat: -1
    });

    this.anims.create({
      key: 'rollR',
      frames: this.anims.generateFrameNumbers("sheet1", { start: 96, end: 117 }),
      frameRate: 22,
      repeat: -1
    });

    this.anims.create({
      key: 'rollBR',
      frames: this.anims.generateFrameNumbers("sheet1", { start: 128, end: 150 }),
      frameRate: 22,
      repeat: -1
    });

    this.anims.create({
      key: 'rollL',
      frames: this.anims.generateFrameNumbers("sheet1", { start: 160, end: 182 }),
      frameRate: 22,
      repeat: -1
    });

    this.anims.create({
      key: 'rollBL',
      frames: this.anims.generateFrameNumbers("sheet1", { start: 192, end: 214 }),
      frameRate: 22,
      repeat: -1
    });

    this.anims.create({
      key: 'dead',
      frames: this.anims.generateFrameNumbers("sheet1", { start: 40, end: 47 }),
      frameRate: 4,
      repeat: -1
    });

    //Create input keys
    gameState.cursors = this.input.keyboard.createCursorKeys();
    
    //If ESC is pressed, go back to the title
    this.input.keyboard.on('keydown-ESC', function () {gameState.escape = true});
  }
  update() {
    //Movement controls
    controls();
    
    //If the player wins, go to next scene
    if (gameState.nextScene = 1) {
      this.scene.stop("Scene2");
      this.scene.start("Scene3");
    };

    //If the player dies, go to the next scene
    if (gameState.nextScene = 2) {
      this.scene.stop("Scene2");
      this.scene.start("Scene4");
    }

    //If ESC is pressed, go back to the title
    if (gameState.escape) {
      gameState.escape = false;
      //Stop playing the game's music
      //document.querySelector(".music").load();
      //document.querySelector(".music").pause();
      this.scene.stop("Scene2");
      this.scene.start("Title");
    };
  };
};
