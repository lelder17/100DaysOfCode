function counter() {
  //select value
  const value = document.getElementById('value');

  //set inital count
  let count = 0;

  //select the button
  const buttons = document.querySelectorAll('.button');

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const buttonClasses = e.currentTarget.classList;
      if (buttonClasses.contains('decrease')) {
        count--;
        value.innerHTML = count;
      } else if (buttonClasses.contains('increase')) {
        count++;
        value.innerHTML = count;
      } else {
        count = 0;
        value.innerHTML = 0;
      }
      if (count > 0) {
        value.style.color = 'green';
      }

      if (count < 0) {
        value.style.color = 'red';
      }

      if (count === 0) {
        value.style.color = 'black';
      }
    });
  });
}
counter();
