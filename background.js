class Background {
    constructor(game) {
        this.game = game;
        this.sprite = ASSET_MANAGER.getAsset("sprites/background.png");
        this.x = 0;
        this.y = 0;
    }
    update () {

    }
    draw (ctx) {
        ctx.drawImage(this.sprite, 0, 0, 900, 900);
    }
}