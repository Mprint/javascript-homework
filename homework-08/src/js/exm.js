import images from "./gallery-items.js";

const galleryList = document.querySelector(`.js-gallery`);
const galleryContent = document.querySelector(`.lightbox__content`);
const galleryModal = document.querySelector(`.js-lightbox`);
const galleryModalClose = document.querySelector(`.lightbox__button`);
const galleryModalNext = document.querySelector(`.lightbox__button[data-action="next-lightbox"]`);
const galleryModalPrev = document.querySelector(`.lightbox__button[data-action="prev-lightbox"]`);
const galleryModalImage = document.querySelector(`.lightbox__image`);
const imagesData = images.map(img => img.original);

//добавляем элементы в галерею
function createGallery() {
    const galleryItems = [];
    let galleryItem;

    for (let image of images) {
        galleryItem = `
        <li class="gallery__item">
            <a class="gallery__link" href="${image.original}">
                <img class="gallery__image" src="${image.preview}" alt="${image.description}" data-source="${image.original}">
            </a>
        </li>`;
        galleryItems.push(galleryItem);  
    }
    galleryList.insertAdjacentHTML(`afterbegin`, galleryItems.join(''));
}
createGallery();

//открытие/закрытие модала и запись/удаление данных для большого изображения
function setData() {
    galleryModal.classList.add(`is-open`);
    galleryModalImage.setAttribute(`alt`, `${event.target.alt}`);
    galleryModalImage.setAttribute(`src`, `${event.target.dataset.source}`);
    galleryModalNext.removeAttribute(`disabled`, `disabled`);
    galleryModalPrev.removeAttribute(`disabled`, `disabled`);
};

function removeData() {
    galleryModal.classList.remove(`is-open`);
    galleryModalImage.removeAttribute(`alt`);
    galleryModalImage.removeAttribute(`src`);
};

//..открываем большое изображение в модальном окне
galleryList.addEventListener(`click`, openGalleryImage);

function openGalleryImage(event) {
    event.preventDefault();
    setData()
};

//..закрытие по кнопке
galleryModalClose.addEventListener(`click`, closeGalleryModal);

function closeGalleryModal(event) {
    event.preventDefault();
    removeData();
};

//..зыкрытие по Overlay
galleryModal.addEventListener(`click`, closeGalleryModalOverlay); 

function closeGalleryModalOverlay(event) {
    if (event.target === galleryContent && event.target !== galleryModalImage) {
        removeData();
    }
};

// переключение слайдов
galleryModalNext.addEventListener(`click`, nextImage);
galleryModalPrev.addEventListener(`click`, prevImage);

function nextImage() {
    let currentImage = document.querySelector(`.lightbox__image`).src;
    let id = imagesData.indexOf(currentImage);
    const lastImage = imagesData.length - 1;

    if (id !== lastImage) {
        id +=1;
        galleryModalNext.removeAttribute(`disabled`, `disabled`);
        galleryModalPrev.removeAttribute(`disabled`, `disabled`);
    } else {
        galleryModalNext.setAttribute(`disabled`, `disabled`);
    }

    currentImage = imagesData[id];
    galleryModalImage.setAttribute(`src`, currentImage);
}

function prevImage() {
    let currentImage = document.querySelector(`.lightbox__image`).src;
    let id = imagesData.indexOf(currentImage);

    if (id !== 0) {
        id -=1;
        galleryModalNext.removeAttribute(`disabled`, `disabled`);
        galleryModalPrev.removeAttribute(`disabled`, `disabled`);
    } else {
        galleryModalPrev.setAttribute(`disabled`, `disabled`);
    }

    currentImage = imagesData[id];
    galleryModalImage.setAttribute(`src`, currentImage);
}

//действия по нажатию кнопок
document.addEventListener(`keydown`, function(event) {
    if (event.keyCode === 37) {
        prevImage();
    }

    if (event.keyCode === 39) {
        nextImage();
    }

    if (event.keyCode === 27) {
        removeData();
    }
})