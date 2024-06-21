document.addEventListener('DOMContentLoaded', () => {
   const imagesFolder = 'img/';
   const imagesCount = 9;
   const randomIndex = Math.floor(Math.random() * imagesCount) + 1;
   const randomImageSrc = `${imagesFolder}${randomIndex}.jpg`;

   const imageElement = document.getElementById('randomImage');
   imageElement.src = randomImageSrc;
});
