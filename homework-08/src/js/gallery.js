import imagesList from './gallery-items.js';
const refs = {
  gallery: document.querySelector('.js-gallery'),
  galleryModal: document.querySelector('.js-lightbox'),
  galleryModalImage: document.querySelector('.lightbox__image'),
  closeGalleryModal: document.querySelector('.lightbox__button'),
  modalOverlay: document.querySelector('.lightbox__overlay'),
  modalContent: document.querySelector('.lightbox__content'),
};

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
createGallery();

function createGallery() {
  const createGallery = createGalleryList(imagesList);
  refs.gallery.insertAdjacentHTML('afterbegin', createGallery);
}

function createGalleryList(items) {
  return items.map(item => buildGalleryItem(item)).join('');
}

function buildGalleryItem({ preview, original, description }) {
  return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}" >
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
            <span class="gallery__icon"><i class="material-icons">zoom_out_map</i></span>
        </a>
    </li>`;
}

// Открытие модального окна по клику на элементе галереи.
refs.gallery.addEventListener('click', openGalleryImage);

function openGalleryImage(event) {
  event.preventDefault();
  setData();
}

function setData() {
  refs.galleryModal.classList.add('is-open');
  refs.galleryModalImage.setAttribute('src', `${event.target.dataset.source}`);
  refs.galleryModalImage.setAttribute('alt', `${event.target.alt}`);
}

// Закрытие модального окна по клику на кнопку
refs.closeGalleryModal.addEventListener('click', closeGalleryLightboxModal);

function closeGalleryLightboxModal(event) {
  event.preventDefault();
  removeData();
}

function removeData() {
  refs.galleryModal.classList.remove(`is-open`);
  refs.galleryModalImage.removeAttribute('src');
  refs.galleryModalImage.removeAttribute('alt');
}

// Закрытие модального окна по клику на overlay
refs.galleryModal.addEventListener('click', closeGalleryModalOverlay);

function closeGalleryModalOverlay(event) {
  if (
    event.target === refs.modalContent &&
    event.target !== refs.galleryModalImage
  ) {
    removeData();
  }
}
