// Отримання всіх елементів галереї
const galleryItems = document.querySelectorAll('.gallery-item');

// Отримання елементів модального вікна
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('#modal-image');
const closeModalBtn = document.querySelector('.close');

let currentIndex = 0;

// Функція для відкриття модального вікна з великим зображенням
function openModal(imgSrc) {
    modalImg.src = imgSrc;
    modal.style.display = 'block';
}

// Показ модального вікна
function closeModal() {
    modal.style.display = 'none';
}

function showImage(index) {
    const imgSrc = galleryItems[index].querySelector('img').getAttribute('data-src');
    openModal(imgSrc);
    currentIndex = index;
}

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        showImage(index);
    });
});

closeModalBtn.addEventListener('click', () => {
    closeModal();
});