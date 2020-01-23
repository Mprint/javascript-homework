import imagesList from './task-03-images.js';

const galleryContainer = document.getElementById('gallery');
const gallery = createGalleryRows(imagesList);

galleryContainer.insertAdjacentHTML('afterbegin', gallery);

function createGalleryRows(items) {
  return items.map(item => createPhotoGalleryMurkup(item)).join('');
}

function createPhotoGalleryMurkup({ url, alt }) {
  galleryContainer.classList.add('gallery');
  const listItem = document.createElement('li');
  const image = document.createElement('img');
  image.src = url;
  image.alt = alt;
  listItem.appendChild(image);
  galleryContainer.appendChild(listItem);
}
