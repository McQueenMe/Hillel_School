const slides = document.querySelectorAll('.block__slide');
const dots = document.querySelectorAll('.block__dot');
const slider = document.querySelector('.block__slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const sliderContainer = document.querySelector('.block__slider-container');

let currentIndex = 0;

function updateButtons() {
   if (currentIndex === 0) {
      prevButton.style.display = 'none';
      nextButton.style.display = 'block';
      sliderContainer.classList.remove('end');
      sliderContainer.classList.add('start');
   } else if (currentIndex === slides.length - 1) {
      nextButton.style.display = 'none';
      prevButton.style.display = 'block';
      sliderContainer.classList.remove('start');
      sliderContainer.classList.add('end');
   } else {
      prevButton.style.display = 'block';
      nextButton.style.display = 'block';
      sliderContainer.classList.remove('start', 'end');
   }
}

function showSlide(index) {
   slider.style.transform = `translateX(${-index * 100}%)`;
   dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
   });
   updateButtons();
}

function nextSlide() {
   if (currentIndex < slides.length - 1) {
      currentIndex++;
      showSlide(currentIndex);
   }
}

function prevSlide() {
   if (currentIndex > 0) {
      currentIndex--;
      showSlide(currentIndex);
   }
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
   dot.addEventListener('click', () => {
      currentIndex = index;
      showSlide(currentIndex);
   });
});

showSlide(currentIndex);
