function init() {
  window.onload = function () {
    const enterButton = document.getElementById('js-button');
    if (enterButton) {
      enterButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.location = 'home.html';
      });
    }
  };
}
init();

//challenges

//create a function that return hello
function hello() {
  return 'hello';
}
//console.log(hello());

//write a function that converts hours into sec
function hoursToSeconds(hours) {
  let seconds = hours * 60 * 60;
  return seconds;
}
//console.log(hoursToSeconds(4));

//Create a function that takes voltage and current and returns the calculated power.
function electricity(voltage, current) {
  let power = voltage * current;
  return power;
}
//console.log(electricity(45, 4));

//Create a function that takes an array containing only numbers and return the first element.
function getFirstValue() {
  let numberArray = [2, 4, 6, 3, 9];
  const firstElement = numberArray.shift();
  return firstElement;
}
//console.log(getFirstValue());

//           OR            //
function getFirstValue(arr) {
  let numberArray = arr[0];
  return numberArray;
}

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function addition(num) {
  return num + 1;
}
//console.log(addition(6));

//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(num1, num2) {
  if (num1 + num2 < 100) {
    return true;
  } else {
    return false;
  }
}
//console.log(lessThan100(2, 3));
