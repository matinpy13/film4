const searchToggle = document.getElementById('search-toggle');
const searchBar = document.getElementById('search-bar');
const header = document.getElementById('header');
const searchInput = document.getElementById('search-input');

searchToggle.addEventListener('click', (event) => {
  event.stopPropagation();
  const isActive = searchBar.classList.contains('active');
  if (isActive) {
    searchBar.classList.remove('active');
    header.style.padding = '25px 0';
  } else {
    searchBar.classList.add('active');
    header.style.padding = '30px 0';
    searchInput.focus();
  }
});

document.addEventListener('click', (event) => {
  if (!searchBar.contains(event.target) && !searchToggle.contains(event.target)) {
    searchBar.classList.remove('active');
    header.style.padding = '25px 0';
  }
});



// اسلایدر اول
let slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function showSlides1(n) {
  let slides = document.querySelectorAll(".slide-1");
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  slides.forEach(slide => slide.style.display = "none");
  slides[slideIndex1 - 1].style.display = "block";
}

// تغییر خودکار برای اسلایدر اول
let slideIndexAuto1 = 0;
function showSlidesAuto1() {
  let slides = document.querySelectorAll(".slide-1");
  slides.forEach(slide => slide.style.display = "none");
  slideIndexAuto1++;
  if (slideIndexAuto1 > slides.length) {slideIndexAuto1 = 1}
  slides[slideIndexAuto1 - 1].style.display = "block";
  setTimeout(showSlidesAuto1, 3000);
}
showSlidesAuto1();

const carousel = document.querySelector('.carousel');
const prevArrow = document.querySelector('.arrow-prev');
const nextArrow = document.querySelector('.arrow-next');

let currentTranslateX = 0; // مقدار فعلی ترجمه اسلایدر
const stepSize = 200; // مقدار حرکت به ازای هر کلیک (10 پیکسل)

// عملکرد حرکت به چپ
function slideLeft() {
  currentTranslateX -= stepSize; // کاهش مقدار ترجمه برای حرکت به چپ
  carousel.style.transform = `translateX(${currentTranslateX}px)`;
}

// عملکرد حرکت به راست
function slideRight() {
  currentTranslateX += stepSize; // افزایش مقدار ترجمه برای حرکت به راست
  carousel.style.transform = `translateX(${currentTranslateX}px)`;
}

// افزودن رویداد کلیک به دکمه‌ها
prevArrow.addEventListener('click', slideLeft);
nextArrow.addEventListener('click', slideRight);
