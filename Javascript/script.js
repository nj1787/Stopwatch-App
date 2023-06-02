let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;

// Get elements from the DOM
const display = document.getElementById("timeTracker");
const logDisplay = document.getElementById("timelog-display");
const startStopTimer = document.getElementById("startStop");
const stopTimer = document.getElementById("stop");
const resetTimer = document.getElementById("reset");
const logTimer = document.getElementById("log");
let btnText;

// Start/stop button event listener
startStopTimer.addEventListener("click", function (event) {
  event.preventDefault();
  btnText = !btnText;
  if (btnText) {
    startStopTimer.textContent = "Stop";
    start();
  } else {
    startStopTimer.textContent = "Start";
    stop();
  }
});

// stopTimer.addEventListener("click", function () {
//   stop();
// });

// Reset button event listener
resetTimer.addEventListener("click", function () {
  reset();
});

logTimer.addEventListener("click", function () {
  timeLog();
});

// Start function
function start() {
  document.body.style.backgroundColor = "green";
  timer = setInterval(function () {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }

    display.textContent =
      (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
      ":" +
      (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
      ":" +
      (seconds > 9 ? seconds : "0" + seconds);
  }, 1000);
}

// Stop function
function stop() {
  document.body.style.backgroundColor = "red";
  clearInterval(timer);
}

// Reset function
function reset() {
  document.body.style.backgroundColor = "white";
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  display.textContent = "00:00:00";
  logDisplay.innerHTML = `<h1>TimeLog Display</h1>`;
}

//Timelog
function timeLog() {
  const list = document.createElement("ul");
  list.style.marginLeft = "16%";
  list.style.fontSize = "1rem";
  list.style.marginTop = "12%";
  list.innerHTML = `<li style="margin-top: none">Logged At ${hours}:${minutes}:${seconds}</li>`;
  logDisplay.append(list);
}
