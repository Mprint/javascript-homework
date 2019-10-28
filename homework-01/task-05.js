console.log('task-05 start');

let country = prompt('Введите страну для доставки');
let price;

switch (country.toLowerCase()) {
  case 'китай':
    price = '100';
    break;

  case 'чили':
    price = '250';
    break;

  case 'австралия':
    price = '170';
    break;

  case 'индия':
    price = '80';
    break;

  case 'ямайка':
    price = '120';
    break;

  default:
    alert('В вашей стране доставка не доступна');
    break;
}

alert(`Доставка в ${country[0].toUpperCase() + country.slice(1).toLowerCase()} будет стоить ${price} кредитов`);

