//create a function to generate a number between 0 & 1 && times it by 360 from our .from_hue method
const randomNumber = () => {
  return Math.floor(Math.random() * 360);
};

//create a function to generate colors
const generateColors = () => {
  //create a color scheme object
  const scheme = new ColorScheme();
  scheme
    .from_hue(randomNumber())
    .scheme('triade')
    .distance(Math.random())
    .variation('pastel');
  //call scheme.colors to get an array of colors
  const colors = scheme.colors();

  for (let i = 0; i < 4; i++) {
    //apply colors to html element
    const el = document.getElementById(`color-${i + 1}`);
    const color = `#${colors[i * 2]}`;
    el.style.backgroundColor = color;
    el.innerHTML = color;
  }
};

function copyHexValue() {
  const divs = document.getElementsByClassName('color-divs');
  for (let i = 0; i < divs.length; i++) {
    console.log(divs[i]);

    //call write text to write on clipboard
    divs[i].addEventListener('click', () => {
      window.navigator.clipboard.writeText(divs[i].innerHTML);
    });
  }
}
copyHexValue();
const generateButton = document.getElementById('generate');
//every time button is clicked generateColors function is called
generateButton.addEventListener('click', generateColors);

generateColors();
