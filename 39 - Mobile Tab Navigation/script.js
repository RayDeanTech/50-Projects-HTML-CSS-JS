const images = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((li, idx) => {
    li.addEventListener('click', () => {
        hideAllImages();
        hideAllListItems();

        li.classList.add('active');
        images[idx].classList.add('show');

    });
});

function hideAllImages() {
    images.forEach(img => {
        img.classList.remove('show');
    });
};

function hideAllListItems() {
    listItems.forEach(li => {
        li.classList.remove('active');
    });
};