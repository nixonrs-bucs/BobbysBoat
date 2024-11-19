document.addEventListener("DOMContentLoaded", () => {
    const tutorialButton = document.getElementById("tutorialButton");
    const gameCanvas = document.getElementById("gameCanvas");
    const tutorialOverlay = document.getElementById("tutorialOverlay");
    const closeTutorialButton = document.getElementById("closeTutorialButton");
  
    // Fixes the tutorial button to bottom left of game board
    function positionTutorialButton() {
      const canvasRect = gameCanvas.getBoundingClientRect();
      tutorialButton.style.position = "absolute"; // Position relative to the viewport
      tutorialButton.style.left = `${canvasRect.left}px`; // Align with the left edge of the canvas
      tutorialButton.style.top = `${canvasRect.bottom + 10}px`; // Place it 10px below the canvas
    }
  
    // Calls function to position and allows for window resizing
    positionTutorialButton();
    window.addEventListener("resize", positionTutorialButton);
  
    // Open the tutorial modal
    tutorialButton.addEventListener("click", () => {
      tutorialOverlay.style.display = "flex";
    });
  
    // Close the tutorial modal
    closeTutorialButton.addEventListener("click", () => {
      tutorialOverlay.style.display = "none";
    });
   
  });
  
