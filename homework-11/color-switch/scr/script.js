const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let timerId = null;
const min = 0;
const max = colors.length - 1;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

refs.startBtn.addEventListener('click', () => {
  refs.startBtn.setAttribute('disabled', 'disabled');
  timerId = setInterval(() => {
    let index = colors[randomIntegerFromInterval(min, max)];
    console.log(index);
    refs.body.style.background = index;
  }, 1000);
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  refs.startBtn.removeAttribute('disabled');
  console.log('Stopped!');
});
