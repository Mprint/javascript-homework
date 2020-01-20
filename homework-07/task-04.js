let counterValue = 0;
const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');

const value = document.getElementById('value');
// console.log(value)

increment.addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
});

decrement.addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
