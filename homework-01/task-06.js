console.log('task-06 start');

let input;
let total = 0;

while (true) {
  input = prompt('Введите число');
  if (input === null) {
    break;
  }
  input = Number(input);

  if (Number.isNaN(input) === true) {
    alert('Следует ввести число');
    continue;
  }
  total = total + input;
}
alert(`Общая сумма чисел: ${total}`);
