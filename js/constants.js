/**
 * Javascript file containing the constants used by other Javascript files
 */
const ALIVE = "boxAlive";
const ARROW_DOWN = 40;
const ARROW_LEFT = 37;
const ARROW_RIGHT = 39;
const ARROW_UP = 38;
const BOX_ID_PREFIX = "boxID";
const DECORATION_TEXT = "Use the keyboard arrow keys to control the snake. Good luck!";
const DECORATION_TEXT_ID = "decoration_text";
const DECORATION_TEXT_LOSE = "Game Over =(";
const DIRECTION_DOWN = "DOWN";
const DIRECTION_LEFT = "LEFT";
const DIRECTION_RIGHT = "RIGHT";
const DIRECTION_UP = "UP";
const FOOD = "boxFood";
const FOOD_START_LOCATION = 400;
const GRID_ID = "grid";
const GRID_SIZE = 24;
const MAP_DIRECTION_TO_DISPLACEMENT = {
	[DIRECTION_DOWN]: GRID_SIZE, 
	[DIRECTION_LEFT]: -1,
	[DIRECTION_RIGHT]: 1,
	[DIRECTION_UP]: (-1 * GRID_SIZE),
};
const NEUTRAL = "box";
const SNAKE_START_COLUMN = 3;
const SNAKE_START_HEAD = 6;
const SNAKE_START_TAIL = 2
const START_BUTTON_ID = "start";
const WALL = "boxWall";
