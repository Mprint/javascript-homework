const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ul = document.getElementById('ingredients');

const listItems = createList(ingredients);

ul.insertAdjacentHTML('afterbegin', listItems)

function createList(arr) {
  return arr.map(element => generateListMarkup(element)).join('');
}

function generateListMarkup(item) {
  const li = document.createElement('li');
  li.textContent = item;
  ul.appendChild(li)
}

