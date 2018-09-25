/**
 * Javascript file containing the functions that populates the snake game's initial state
 */

/**
 * Creates the square snake board in the HTML file 
 * @param {integer} numGrid - The side length of the board
 */
function createGridElements(numGrid) {
	const grid = document.getElementById(GRID_ID);
	grid.innerHTML = "";
	for (let x = 0; x < numGrid*numGrid; x++) {
		let box = document.createElement("div");
		// first location of food is fixed
		if (x === FOOD_START_LOCATION) {
			box.className = FOOD;
		} 
		// borders of board should be walls
		else if (x < numGrid || x >= numGrid*(numGrid-1) || x % numGrid === 0 || x % numGrid === numGrid-1) {
			box.className = WALL;
		}
		else {
			box.className = (x >= SNAKE_START_TAIL*numGrid && 
				x <= SNAKE_START_HEAD*numGrid && 
				x % numGrid === SNAKE_START_COLUMN) ? ALIVE : NEUTRAL;
		}
		box.id = BOX_ID_PREFIX + x;
		grid.appendChild(box);
	}
}
