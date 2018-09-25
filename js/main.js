/**
 * Javascript file that adds event listeners to buttons and keyboard commands 
 * and allows the simulation's functions to run once the page is loaded
 */

// globals to track state of simulation
let is_currently_running = false;
let interval;
let current_head_location;
let current_direction;
let current_tail_location;
let snake_components;

window.onload = function() {
	createGridElements(GRID_SIZE);
	document.getElementById(START_BUTTON_ID).addEventListener("click", () => {
		if (!is_currently_running) {
			// reset the board and all globals
			current_head_location = (SNAKE_START_HEAD-1) * GRID_SIZE + SNAKE_START_COLUMN
			current_direction = DIRECTION_DOWN;
			current_tail_location = (SNAKE_START_TAIL) * GRID_SIZE + SNAKE_START_COLUMN;
			snake_components = [];
			for (let i = (SNAKE_START_TAIL); i <= (SNAKE_START_HEAD-1); i++) {
				snake_components.push(i*GRID_SIZE + SNAKE_START_COLUMN)
			}
			createGridElements(GRID_SIZE);
			document.getElementById(DECORATION_TEXT_ID).innerHTML = DECORATION_TEXT;
			// start the snake game at 100ms iterations
			interval = setInterval(simulateGameOfLife, 100);
			is_currently_running = true;
		}
	});

	// add key event listeners to allow changing direction of snake movement
	document.onkeydown = function(event) {
		event = event || window.event;
		switch(event.keyCode) {
			case ARROW_DOWN:
				current_direction = (current_direction != DIRECTION_UP) ? DIRECTION_DOWN : current_direction;
				break;
			case ARROW_LEFT:
				current_direction = (current_direction != DIRECTION_RIGHT) ? DIRECTION_LEFT : current_direction;
				break;
			case ARROW_RIGHT:
				current_direction = (current_direction != DIRECTION_LEFT) ? DIRECTION_RIGHT : current_direction;
				break;
			case ARROW_UP:
				current_direction = (current_direction != DIRECTION_DOWN) ? DIRECTION_UP : current_direction;
				break;
		}
	};
}
