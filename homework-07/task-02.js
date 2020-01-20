const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let ul = document.getElementById('ingredients');

ingredients.forEach(function(ingredient) {
  const li = document.createElement('li');
  ul.appendChild(li);
  li.innerHTML += ingredient;
});
