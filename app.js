const container = document.querySelector(".container");
const img = document.querySelector(".img");

const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

const images = [
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F20%252F2021%252F09%252F15%252Fselena-gomez-3.jpg&q=85",
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F20%252F2021%252F10%252F15%252Fselena-gomez-1.jpg&q=85",
  "https://www.iwmbuzz.com/wp-content/uploads/2021/10/we-swear-by-selena-gomezs-jacket-styles-for-unforgettable-fashion-impact.jpg",
];
const len = images.length;
var current = 0;

img.src = images[current];

leftBtn.addEventListener("click", leftHandler);
rightBtn.addEventListener("click", rightHandler);

function leftHandler() {
  current--;
  if (current < 0) {
    current = len - 1;
  }
  setTimeout(() => {
    img.src = images[current];
  }, 250);
}

function rightHandler() {
  current++;
  if (current > len - 1) {
    current = 0;
  }
  setTimeout(() => {
    img.src = images[current];
  }, 250);
}

// setInterval(rightHandler, 2000);
