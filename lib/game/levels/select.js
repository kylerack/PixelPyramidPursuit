ig.module( 'game.levels.select' )
.requires( 'impact.image','game.entities.levelexit','game.entities.player','game.entities.gameover' )
.defines(function(){
LevelSelect=/*JSON[*/{
	"entities": [
		{
			"type": "EntityLevelexit",
			"x": 68,
			"y": 56,
			"settings": {
				"level": "level1"
			}
		},
		{
			"type": "EntityPlayer",
			"x": 24,
			"y": 126
		},
		{
			"type": "EntityLevelexit",
			"x": 132,
			"y": 56,
			"settings": {
				"level": "level2"
			}
		},
		{
			"type": "EntityLevelexit",
			"x": 196,
			"y": 56,
			"settings": {
				"level": "maze"
			}
		},
		{
			"type": "EntityGameover",
			"x": 276,
			"y": 46
		}
	],
	"layer": [
		{
			"name": "new_layer_1",
			"width": 20,
			"height": 10,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/tiles.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 16,
			"foreground": false,
			"data": [
				[31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31],
				[31,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31],
				[31,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31],
				[31,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31],
				[31,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31],
				[31,30,30,22,22,22,30,22,22,22,30,22,22,22,30,30,22,22,22,31],
				[31,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31],
				[31,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31],
				[31,30,30,13,13,13,30,13,13,13,30,13,13,13,30,30,13,13,13,31],
				[31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31]
			]
		},
		{
			"name": "tiles2",
			"width": 20,
			"height": 10,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/tiles2.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 16,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,6,0,0,0,16,0,0,0,26,0,0,0,0,15,0,0],
				[0,0,0,0,35,0,0,0,35,0,0,0,35,0,0,0,0,25,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		},
		{
			"name": "collision",
			"width": 20,
			"height": 10,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 16,
			"foreground": false,
			"data": [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,12,12,12,0,12,12,12,0,12,12,12,0,0,12,12,12,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
			]
		}
	]
}/*]JSON*/;
LevelSelectResources=[new ig.Image('media/tiles.png'), new ig.Image('media/tiles2.png')];
});