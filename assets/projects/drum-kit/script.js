let drumButtons = [
  {
    name: 'w',
    symbol: 'w',
    sound: '',
    key: 'w',
  },
  {
    name: 'a',
    symbol: 'a',
    sound: '',
    key: 'a',
  },
  {
    name: 's',
    symbol: '',
    sound: 's',
    key: 's',
  },
  {
    name: 'd',
    symbol: 'd',
    sound: '',
    key: 'd',
  },
  {
    name: 'j',
    symbol: '',
    sound: 'j',
    key: 'j',
  },
  {
    name: 'k',
    symbol: 'k',
    sound: '',
    key: 'k',
  },
  {
    name: 'l',
    symbol: '',
    sound: 'l',
    key: 'l',
  },
];

//grabbing the class name from html markup
const buttonContainer = document.querySelector('.buttons-containers');

//loop over each button and change inner html to
drumButtons.forEach((button) => {
  buttonContainer.innerHTML += `<div class='button'><span>${button.name}</span></div>`;
});

const playMusic = (path) => {
  const audio = new Audio(path);
  audio.play();
};

//listen for button to be pressed
document.addEventListener('keypress', (event) => {
  const pressedKey = event.key;
  makeSound(pressedKey);
});

//create a function to handle the sound
const makeSound = (sound) => {
  switch (sound) {
    case 'w':
      playMusic('sounds/cartoon.wav');
      break;
    case 'a':
      playMusic('sounds/drum-and-percussion.wav');
      break;
    case 's':
      playMusic('sounds/drums-and-bell-ding.wav');
      break;
    case 'd':
      playMusic('sounds/drums.wav');
      break;
    case 'j':
      playMusic('sounds/dry-drum-558.wav');
      break;
    case 'k':
      playMusic('sounds/short-bass.wav');
      break;
    case 'l':
      playMusic('sounds/tap.wav');
      break;
    default:
      console.log('hey wrong button');
  }
};

//create function to handle css when button is clicked
const handleDrumClick = (event) => {
  //grab the letter that is clicked
  const target = event.target;

  //set letter that is pressed to inner html
  const innerHtml = target.innerHTML;

  //match button with case letter in makesound function
  makeSound(innerHtml);

  //add class name when button is clicked
  target.classList.add('pressed');

  //remove class after a certain time
  setTimeout(() => {
    event.target.classList.remove('pressed');
  }, 250);
};

//select all button elements and add event listener
const allButtons = document.querySelectorAll('.button');

for (i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', handleDrumClick);
}
