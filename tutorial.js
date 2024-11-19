//Background for the tutorial instructions overlay will be updated along with positioning.

document.addEventListener('DOMContentLoaded', function () {
    const tutorialButton = document.getElementById('tutorialButton');
    const tutorialOverlay = document.getElementById('tutorialOverlay');
    const closeButton = document.createElement('button');
  
    // Add the close button 
    closeButton.textContent = 'Close';
    closeButton.style.marginTop = '20px';
    closeButton.style.padding = '10px 20px';
    closeButton.style.border = 'none';
    closeButton.style.backgroundColor = '#007bff';
    closeButton.style.color = 'white';
    closeButton.style.borderRadius = '5px';
    closeButton.style.cursor = 'pointer';
  
    //place holder instructions
    const tutorialText = `
      <h2>How to Play</h2>
      <p>Use the arrow keys or the on-screen D-pad to move the snake.</p>
      <p>Avoid hitting the walls or yourself</p>
      <p>Collect food to grow and increase your score.</p>
    `;
    tutorialOverlay.innerHTML = tutorialText;
    tutorialOverlay.appendChild(closeButton);
  
    // Show the tutorial overlay
    tutorialButton.addEventListener('click', function () {
      tutorialOverlay.style.display = 'flex';
    });
  
    // Close tutorial
    closeButton.addEventListener('click', function () {
      tutorialOverlay.style.display = 'none';
    });
  });
  
