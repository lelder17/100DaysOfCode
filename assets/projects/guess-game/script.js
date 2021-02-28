let button = document.getElementById('button');
let output = document.getElementById('outputText');

let number = [Math.floor(Math.random() * 100)];
console.log(number);

button.addEventListener('click', () => {
  //get input value
  let input = document.getElementById('userInput');
  let inputValue = input.value;

  if (inputValue == number) {
    output.innerHTML = `You got luck on your side! The lucky number was ${number} &amp; you guessed ${number}`;
  } else if (inputValue < number) {
    output.innerHTML = `You guessed to low. The lucky number was ${number} and your number was ${inputValue}`;
  }

  if (inputValue > number) {
    output.innerHTML = `You guessed toooo high The lucky number was ${number} and your number was ${inputValue}`;
  }
});
