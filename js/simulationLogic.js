/**
 * Javascript file containing the functions that run the Snake game 
 */

 /**
 * Executes the Snake game
 */
function simulateGameOfLife() {
	let grid = document.getElementById(GRID_ID);
	let displacement = MAP_DIRECTION_TO_DISPLACEMENT[current_direction];
	let newID = (current_head_location + displacement)
	let newHead = document.getElementById(BOX_ID_PREFIX + newID);
	// Game Over Conditions: snake either hits body or hits wall 
	if (newHead.className === ALIVE || newHead.className === WALL) {
		clearInterval(interval);
		let text = document.getElementById(DECORATION_TEXT_ID);
		grid.innerHTML = "";
		text.innerHTML = DECORATION_TEXT_LOSE;
		is_currently_running = false;
	} else if (newHead.className === FOOD) { 
		// add the new food randomly on the board
		const boxes = Array.from(grid.children);
		const neutral_boxes = boxes.filter((box) => box.className === NEUTRAL);
		let random_box = neutral_boxes[Math.floor(Math.random()*neutral_boxes.length)]
		random_box.className = FOOD;
	} else {
		let oldTail = document.getElementById(BOX_ID_PREFIX + current_tail_location);
		oldTail.className = NEUTRAL;
		snake_components.shift()
		current_tail_location = snake_components[0];
	} 
	newHead.className = ALIVE;
	current_head_location = current_head_location + displacement;
	snake_components.push(current_head_location);
}
