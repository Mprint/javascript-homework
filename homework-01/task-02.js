console.log('task-02 start');
const total = 100;
const order = 50;
const message_insufficiently = 'На складе недостаточно товаров!';
const message_succes = 'Заказ оформлен, с вами свяжется менеджер';

let message = total < order ? message_insufficiently : message_succes;
console.log(message);
