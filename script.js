const images = document.querySelectorAll('.gallery-img');
let currentImageIndex = 0;

setInterval(() => {
  images[currentImageIndex].style.display = 'none';
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.display = 'block';
}, 3000);
