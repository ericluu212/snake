Recreating Snake in the browser with HTML, CSS, &amp; Javascript.

0) Build/Usage Instructions
Simply open up index.html and the game should be ready to run!

1) Separation of Concerns
My primary concerns were as follows:
	- Constructing the board
	- Populating the boxes in the grid 
	- Running Snake according to its rules

Consequently, I used the HTML file as a skeleton for housing the client-facing button, text, and the board container. I wrote populateGrid.js to handle board population. Once the page finishes loading, each arrow key has an event listener to allow the user to control the snake when the game is running. Note that for simplicity, the initial state of the game is always the game. 


2) Future Improvements/Next Steps
In its current state, the game runs fine from what I can tell. However, if I had more time, I would incorporate the following changes:
	- Refactor the box-related CSS to reduce redundancy (i.e. insert border-radius and padding in a separate class shared by all the boxes)
	- Allow the user to set the board size and the speed of the game
	- Randomize the initial state of the game
	- Make the UI more pretty/aesthetically pleasing

Full disclosure: The initial location of the snake and food are hard-coded in the constants.js file, which may make further changes to the game slightly difficult.


3) Design Ideas/Tradeoffs
I designed the game so that a board box's type is represented by one of the following CSS classes: .box, .boxAlive, .boxFood, and .boxWall. This class-specific CSS styling allows me to use colors to easily display on the webpage which boxes are a snake, food, wall, or neutral. When I need to change a box's state, I simply assign the appropriate CSS class in the code logic.

I also have an array containing all the boxes corresponding to the snake's body. This allows me to perform the movement transitions of the snake's tail/head at the expense of some memory. 
