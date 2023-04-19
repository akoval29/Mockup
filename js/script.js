const slides = document.querySelectorAll(".feedback__photo");
const nextBtn = document.querySelector(".feedback__arrow-next");
const prevBtn = document.querySelector(".feedback__arrow-prev");

const text = document.querySelector(".feedback__text");
const author = document.querySelector(".feedback__author");
let slideIndex = 0;

const slideTexts = [
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa totam fugit impedit! Dignissimos repellat excepturi delectus illum maiores commodi eligendi ut.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
];
const slideAuthors = [
  "Angel Paulina",
  "John Smith",
  "Chris Scholz",
  "Maria Poltavska",
];

nextBtn.addEventListener("click", () => {
  slides[slideIndex].classList.remove("feedback__photo--active");
  slideIndex++;
  if (slideIndex === slides.length) {
    slideIndex = 0;
  }
  slides[slideIndex].classList.add("feedback__photo--active");
  updateSlide();
});

prevBtn.addEventListener("click", () => {
  slides[slideIndex].classList.remove("feedback__photo--active");
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  slides[slideIndex].classList.add("feedback__photo--active");
  updateSlide();
});

function updateSlide() {
  text.textContent = slideTexts[slideIndex];
  author.textContent = slideAuthors[slideIndex];
}
