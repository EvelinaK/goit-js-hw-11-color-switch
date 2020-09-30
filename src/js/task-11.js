import colors from './colors.js';

document.addEventListener('DOMContentLoaded', () => {
  const startBut = document.querySelector("[data-action='start']");
  const stopBut = document.querySelector("[data-action='stop']");
  const body = document.querySelector('body');

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const changeColor = () => {
    let colorIndex = randomIntegerFromInterval(0, colors.length - 1);
    body.style.cssText = ` background-color: ${colors[colorIndex]}`;
    //refs.body.style.backgroundColor
  };
  let timerId;
  let flag = true;
  const start = () => {
    if (flag) {
      flag = false;
      startBut.setAttribute('disabled', 'true');
      timerId = setInterval(function () {
        changeColor();
      }, 1000);
    }
  };

  const stop = () => {
    if (!flag) {
      clearInterval(timerId);
      flag = true;
      startBut.removeAttribute('disabled');
    }
  };

  startBut.addEventListener('click', start);
  stopBut.addEventListener('click', stop);
});
