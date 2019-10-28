console.log('task-04 start');

let credits = 23580;
const pricePerDroid = 3000;

const order = prompt('Сколько дроидов вам необходимо');
console.log('order:', order);
const totalPrice = order * pricePerDroid;

if (order === null) {
  alert('Отменено пользователем!');
} else if (totalPrice > credits) {
  credits = totalPrice - credits;
  alert(
    `Недостаточно средств на счету! Вы превысили ваш кредит на ${credits} кредитов`,
  );
} else if (totalPrice < credits) {
  credits = credits - totalPrice;
  alert(`Вы купили ${order} дроидов, на счету осталось ${credits} кредитов`);
} else {
  alert('Введите корректное значение');
}
