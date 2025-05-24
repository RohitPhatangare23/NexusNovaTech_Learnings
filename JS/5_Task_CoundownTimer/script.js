// DOM Elements
const timeInput = document.getElementById('timeInput');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const timerDisplay = document.getElementById('timer');
const messageDisplay = document.getElementById('message');

let countdown;
let timeLeft = 0;

// Start Countdown
startBtn.addEventListener('click', () => {
  clearInterval(countdown);

  const seconds = parseInt(timeInput.value);

  if (isNaN(seconds) || seconds <= 0) {
    alert('Please enter a valid time in seconds');
    return;
  }

  timeLeft = seconds;
  startTimer();
});

// Reset Countdown
resetBtn.addEventListener('click', () => {
  clearInterval(countdown);
  timeLeft = 0;
  timerDisplay.textContent = '00:00';
  messageDisplay.textContent = '';
  timeInput.value = '';
});

// Timer Logic
function startTimer() {
  countdown = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(countdown);
      timerDisplay.textContent = '00:00';
      messageDisplay.textContent = "Time's up!";
      messageDisplay.style.color = 'red';
    } else {
      timeLeft--;
      displayTime(timeLeft);
    }
  }, 1000);
}

// Format and Display Time
function displayTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
