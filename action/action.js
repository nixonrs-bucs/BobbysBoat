

// Adding console logs for each direction clicked
document.getElementById("up").addEventListener("click", () => console.log("up"));
document.getElementById("down").addEventListener("click", () => console.log("down"));
document.getElementById("left").addEventListener("click", () => console.log("left"));
document.getElementById("right").addEventListener("click", () => console.log("right"));

//Logs arrow key presses with same D-Pad functionality
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
    case "w":
      console.log("up");
      break;
    case "ArrowDown":
    case "s":
      console.log("down");
      break;
    case "ArrowLeft":
    case "a":
      console.log("left");
      break;
    case "ArrowRight":
    case "d":
      console.log("right");
      break;
    default:
      // Do nothing for other keys
      break;
  }
});

// Handle D-pad button clicks to change snake direction
document.getElementById("up").addEventListener("click", () => {
  if (direction !== "down") direction = "up";
});

document.getElementById("down").addEventListener("click", () => {
  if (direction !== "up") direction = "down";
});

document.getElementById("left").addEventListener("click", () => {
  if (direction !== "right") direction = "left";
});

document.getElementById("right").addEventListener("click", () => {
  if (direction !== "left") direction = "right";
});
