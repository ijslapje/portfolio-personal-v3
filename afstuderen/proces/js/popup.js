// JavaScript to handle image popup functionality
const slideshowImages = document.querySelectorAll('.slide');
const imagePopup = document.getElementById('image-popup');
const popupImage = document.querySelector('.popup-image');
const closePopup = document.querySelector('.close-popup');

slideshowImages.forEach((image) => {
  image.addEventListener('click', () => {
    const imageUrl = image.getAttribute('src');
    popupImage.setAttribute('src', imageUrl);
    imagePopup.style.display = 'block';
  });
});

closePopup.addEventListener('click', () => {
  imagePopup.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === imagePopup) {
    imagePopup.style.display = 'none';
  }
});
