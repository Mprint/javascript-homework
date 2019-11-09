console.log('task-06 start');

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('введите число');
  console.log(input);
  if (input == null) break;
  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  numbers.push(Number(input));
}
console.log(numbers);

if (numbers.length > 1) {
  for (let i = 0; i < numbers.length; i += 1) {
    console.log(typeof Number(numbers[i]));
    total += numbers[i];
  }
} else {
  alert('Введите число');
}

console.log(`Общая сумма чисел равна ${total}`);
