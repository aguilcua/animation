const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("sprites/background.png");
ASSET_MANAGER.queueDownload("sprites/frog_idle_up.png");
ASSET_MANAGER.queueDownload("sprites/frog_idle_down.png");
ASSET_MANAGER.queueDownload("sprites/frog_idle_left.png");
ASSET_MANAGER.queueDownload("sprites/frog_idle_right.png");
ASSET_MANAGER.queueDownload("sprites/frog_walk_down.png");
ASSET_MANAGER.queueDownload("sprites/frog_walk_up.png");
ASSET_MANAGER.queueDownload("sprites/frog_walk_left.png");
ASSET_MANAGER.queueDownload("sprites/frog_walk_right.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new Frog(gameEngine));
	gameEngine.addEntity(new Background(gameEngine));
	
	gameEngine.init(ctx);

	gameEngine.start();
});
