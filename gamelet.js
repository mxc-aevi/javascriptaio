/*

  Gamelet: a starting point for writing games
  Author: Chris Minnick
  Version: 1.0

  Instructions:
  Include gamelet.js in an HTML document containing
  an element with an id of 'ball'.
  The script will detect when the left or right arrow
  key is pressed and will move the ball element
  accordingly.

*/
const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let positionx = 0;
let positiony = 0;

/*
handleKeyPress
responds to certain key presses by updating position.
*/
function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    positionx = positionx - 50;
  }
  if (e.code === "ArrowRight") {
    positionx = positionx + 50;
  }
  if (e.code === "ArrowUp") {
    positiony = positiony - 50;
  }
  if (e.code === "ArrowDown") {
    positiony = positiony + 50;
  }
  if (positionx < 0) {
    positionx = 0;
  }
  if (positiony < 0) {
    positiony = 0;
  }
  refresh();
}

/*
refresh
changes the position of the ball
*/
function refresh() {
  ball.style.left = positionx + "px";
  ball.style.top = positiony + "px";
}
