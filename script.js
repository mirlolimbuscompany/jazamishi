let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');
const totalImages = images.length;
const sliderWrapper = document.querySelector('.slider-wrapper');

function slideTo(index) {
  // Calculate the offset for the current image based on index
  const offset = -index * 100;  // 100% width for each image (flex box)
  sliderWrapper.style.transform = `translateX(${offset}%)`;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  slideTo(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  slideTo(currentIndex);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    nextImage();
  } else if (event.key === 'ArrowLeft') {
    prevImage();
  }
});

// Initialize the slider at the first image
slideTo(currentIndex);
