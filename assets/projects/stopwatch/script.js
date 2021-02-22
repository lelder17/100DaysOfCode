//define variables to hold time value
let seconds = 0;
let minutes = 0;
let hours = 0;

//define variables to hold display value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//define variable to hold setInterval() function
let interval = null;

//define variable to hold stopwatch status
//let status = 'stopped';

// StopWatch functionality
function StopWatch() {
  //increments by secs
  seconds++;

  //determine when to increments minutes and hrs
  //logic to determine when to set sec to minutes and mins to hours
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  //add a leading zero if digit is only one
  if (seconds < 10) {
    displaySeconds = '0' + seconds.toString();
  } else {
    displaySeconds = seconds;
  }

  if (minutes < 10) {
    displayMinutes = '0' + minutes.toString();
  } else {
    displayMinutes = minutes;
  }

  if (hours < 10) {
    displayHours = '0' + hours.toString();
  } else {
    displayHours = hours;
  }

  //display updated time values
  let displayTime = document.getElementById('display');
  displayTime.innerHTML =
    displayHours + ':' + displayMinutes + ':' + displaySeconds;
}

//create function to start when button is clicked
function startStopWatch() {
  //define variables to grab buttons
  let playButton = document.getElementById('js-playButton');
  let pauseButton = document.getElementById('js-pauseButton');
  let resetButton = document.getElementById('js-resetButton');

  //start stopwatch by calling setInterval function
  playButton.addEventListener('click', () => {
    interval = window.setInterval(StopWatch, 10);
  });

  pauseButton.addEventListener('click', () => {
    clearInterval(interval);
  });

  resetButton.addEventListener('click', () => {
    clearInterval(interval);
    let displayTime = document.getElementById('display');
    displayTime.innerHTML = '00:00:00';
  });
}
startStopWatch();
