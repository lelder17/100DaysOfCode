window.onload = function () {
  const enterButton = document.getElementById('js-button');
  enterButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.location = 'purecss.html';
  });
};
