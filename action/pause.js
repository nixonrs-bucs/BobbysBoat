document.addEventListener("DOMContentLoaded", function () {
  const pauseButton = document.getElementById("pauseButton");
  const pauseOverlay = document.getElementById("pauseOverlay");
  const pauseText = document.getElementById("pauseText");

  function PauseGame() {
    if (pauseOverlay.style.display === "none" || pauseOverlay.style.display === "") {
      pauseGame(); // Pause the game
      pauseOverlay.style.display = "flex";
      pauseText.textContent = "Pause";
    } else {
      StartCountdown();
    }
  }

  function StartCountdown() {
    let countdown = 3;
    pauseText.textContent = countdown;

    const interval = setInterval(() => {
      countdown--;
      if (countdown > 0) {
        pauseText.textContent = countdown;
      } else {
        clearInterval(interval);
        pauseOverlay.style.display = "none";
        startGame(); // Resume the game
      }
    }, 1000);
  }

  pauseButton.addEventListener("click", PauseGame);
  pauseOverlay.addEventListener("click", StartCountdown);
});
