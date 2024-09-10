let currentImage = 0;
const images = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentImage = index;
    updateMainImage();
  });
});

prevButton.addEventListener('click', () => {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  updateMainImage();
});

nextButton.addEventListener('click', () => {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  updateMainImage();
});

function updateMainImage() {
  mainImage.src = images[currentImage].src;
}