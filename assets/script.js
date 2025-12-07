const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const dotsContainer = document.querySelector(".dots");
const bannerImg = document.querySelector(".banner-img");
const tagline = document.querySelector("#banner p");

let currentSlide = 0;

slides.forEach((_, index) => {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	if (index === 0) dot.classList.add("dot_selected");
	dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateCarousel() {
    const slide = slides[currentSlide];

    bannerImg.src = "./assets/images/slideshow/" + slide.image;
    tagline.innerHTML = slide.tagLine;

    dots.forEach(dot => dot.classList.remove("dot_selected"));
    dots[currentSlide].classList.add("dot_selected");
};

arrowRight.addEventListener("click", () => {
    currentSlide++;
    if (currentSlide >= slides.length) currentSlide = 0;
    updateCarousel();
});

arrowLeft.addEventListener("click", () => {
    currentSlide--;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    updateCarousel();
});
