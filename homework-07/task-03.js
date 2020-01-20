import images from './task-03-images.js';

const ul = document.getElementById('gallery');
ul.classList.add('gallery');

function createImageNode({ url, alt }) {
  let li = document.createElement('li');
  let img = document.createElement('img');
  img.src = url;
  img.alt = alt;
  li.appendChild(img);
  ul.appendChild(li);
}

images.forEach(function(images) {
  ul.insertAdjacentHTML('afterbegin', createImageNode(images));
});
