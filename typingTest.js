const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0, 0, 0, 0];
var interval = 0;
var timerRunning = false;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
  if (time <= 9) {
    time = "0" + time;
  }
  return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
  timerStr =
    leadingZero(timer[0] % 60) +
    ":" +
    leadingZero(timer[1] % 60) +
    ":" +
    leadingZero(timer[2] % 100);
  theTimer.innerHTML = timerStr;
  timer[2] = parseInt(timer[3]);
  timer[1] = parseInt(timer[2] / 100);
  timer[0] = parseInt(timer[1] / 60);
  timer[3]++;
}

// Match the text entered with the provided text on the page:
function spellCheck() {
  let enteredText = testArea.value;
  let textMatch = originText.substring(0, enteredText.length);

  if (enteredText == originText) {
    testWrapper.style.borderColor = "#429890";
    clearInterval(interval);
  } else if (enteredText == textMatch) {
    testWrapper.style.borderColor = "blue";
  } else {
    testWrapper.style.borderColor = "orange";
  }
}
// Start the timer:
function startTimer() {
  let enteredTextLen = testArea.value.length;
  if (enteredTextLen === 0 && !timerRunning) {
    timerRunning = true;
    interval = setInterval(runTimer, 10);
  }
}
// Reset everything:
function resetTest() {
  clearInterval(interval);
  interval = null;
  timer = [0, 0, 0, 0];
  timerRunning = false;
  testArea.value = "";
  theTimer.innerHTML = "00:00:00";
  testWrapper.style.borderColor = "grey";
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", startTimer);
testArea.addEventListener("keyup", spellCheck);
resetButton.addEventListener("click", resetTest);
