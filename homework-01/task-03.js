console.log('task-03 start');

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

message = prompt('Введите пароль Админа для получения доступа');
if (message === ADMIN_PASSWORD){
    alert('Добро пожаловать!')
} else if (message === null) {
    alert('Отменено пользователем!');
}
else {
    alert('Доступ запрещен, неверный пароль!')
} 

console.log(message);