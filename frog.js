class Frog {
  constructor(game) {
    this.game = game;
    this.animations = {
      idleup: new Animator(
        ASSET_MANAGER.getAsset("sprites/frog_idle_up.png"),
        0,
        0,
        17,
        26,
        1,
        1
      ),
      idledown: new Animator(
        ASSET_MANAGER.getAsset("sprites/frog_idle_down.png"),
        0,
        0,
        18,
        25,
        1,
        1
      ),
      idleleft: new Animator(
        ASSET_MANAGER.getAsset("sprites/frog_idle_left.png"),
        0,
        0,
        17,
        27,
        1,
        1
      ),
      idleright: new Animator(
        ASSET_MANAGER.getAsset("sprites/frog_idle_right.png"),
        0,
        0,
        20,
        26,
        1,
        1
      ),
      up: new Animator(
        ASSET_MANAGER.getAsset("sprites/frog_walk_up.png"),
        0,
        0,
        19.833,
        27,
        6,
        0.15
      ),
      down: new Animator(
        ASSET_MANAGER.getAsset("sprites/frog_walk_down.png"),
        0,
        0,
        19.833,
        26,
        6,
        0.15
      ),
      left: new Animator(
        ASSET_MANAGER.getAsset("sprites/frog_walk_left.png"),
        1,
        0,
        21,
        26,
        6,
        0.15
      ),
      right: new Animator(
        ASSET_MANAGER.getAsset("sprites/frog_walk_right.png"),
        0,
        0,
        21,
        26,
        6,
        0.15
      ),
    };
    this.direction = "down";
    this.animator = this.animations.idledown;

    this.x = 450;
    this.y = 450;
    this.speed = 150;
  }
  update() {
    const time = this.game.clockTick;

    let xMove = 0;
    let yMove = 0;

    //determine movement direction 
    if (this.game.keys["w"]) yMove -= 1;
    if (this.game.keys["s"]) yMove += 1;
    if (this.game.keys["a"]) xMove -= 1;
    if (this.game.keys["d"]) xMove += 1;

    //normalize for diagonal movement
    const length = Math.hypot(xMove, yMove);
    if (length > 0) {
      xMove /= length;
      yMove /= length;
    }

    //apply movement to frog entity
    this.x += xMove * this.speed * time;
    this.y += yMove * this.speed * time;

    //change direction based on movement change
    if (yMove < 0) this.direction = "up";
    else if (yMove > 0) this.direction = "down";
    else if (xMove < 0) this.direction = "left";
    else if (xMove > 0) this.direction = "right";

    //check if there is any movement at all
    const isMoving = xMove !== 0 || yMove !== 0;

    //if there is a movement change then, play the movement animation, otherwise just the idle
    if (isMoving) {
      this.animator = this.animations[this.direction];
    } else {
      this.animator = this.animations["idle" + this.direction];
    }
  }

  draw(ctx) {
    this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
  }
}
