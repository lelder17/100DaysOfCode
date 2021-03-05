//create a function to generate a number between 0 & 1 && times it by 360 from our .from_hue method
const randomNumber = () => {
  return Math.floor(Math.random() * 360);
};

//create a color scheme object
const scheme = new ColorScheme();
let alertBox = document.createElement('div');

//create a function to generate colors
const generateColors = () => {
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

    function copyHexValue() {
      // get all .color-divs on page
      const divs = document.getElementsByClassName('color-divs');

      //loop over divs to get all .color-divs on page
      for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', () => {
          alertBox.className = 'alert-box'; //add  class name
          alertBox.innerHTML = `The color #${
            colors[i * 2]
          } has been copied to your clipboard`; //set inner html
          divs[i].appendChild(alertBox); //add div to page

          //call write text to write on clipboard
          window.navigator.clipboard.writeText(`${color}`);

          function hide() {
            divs[i].classList.add('hidden');
          }
          setTimeout(hide, 4000);
          console.log(alertBox);
        });
      }
    }
  }

  copyHexValue();
};

const generateButton = document.getElementById('generate');
//every time button is clicked generateColors function is called
generateButton.addEventListener('click', generateColors);

generateColors();
