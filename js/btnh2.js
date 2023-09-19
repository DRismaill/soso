// JavaScript om de pop-up te openen en te sluiten
const popupTrigger = document.querySelector('.popup-trigger');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const popupImage = document.querySelector('.popup-image');

popupTrigger.addEventListener('click', () => {
    popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

popupImage.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Sluit de pop-up als er buiten wordt geklikt
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
