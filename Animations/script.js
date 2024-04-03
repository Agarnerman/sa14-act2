const movableDiv = document.getElementById('movable-div');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
let isAnimating = false;

startButton.addEventListener('click', () => {
  if (!isAnimating) {
    movableDiv.classList.add('animated');
    isAnimating = true;
    stopButton.disabled = false; 
  }
});

stopButton.addEventListener('click', () => {
  if (isAnimating) {
    movableDiv.classList.remove('animated');
    isAnimating = false;
    stopButton.disabled = true; 
  }
});
