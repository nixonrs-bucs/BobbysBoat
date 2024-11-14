const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Load background image
const backgroundImage = new Image();
backgroundImage.src = '/assets/background.jpeg';

// Draw background image
backgroundImage.onload = 
function() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
};

// Draw board
function drawBoard() {
    ctx.strokeStyle = 'black';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

backgroundImage.onload =
function() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    drawBoard();
};

