function updateTime() {
  //creates a new date object with the current date and time:
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let dayOrNight = ' AM';

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (hours > 12) {
    dayOrNight = ' PM';
    hours = hours - 12;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  //create variables for ids in html
  let htmlHourId = document.getElementById('hours');
  let htmlMinuteId = document.getElementById('minutes');
  let htmlSecondId = document.getElementById('seconds');

  //set innerhtml to current time
  htmlHourId.innerHTML = hours + ':';
  htmlMinuteId.innerHTML = minutes + ':';
  htmlSecondId.innerHTML = seconds + dayOrNight;
}
//update time automatically
setInterval(updateTime);
