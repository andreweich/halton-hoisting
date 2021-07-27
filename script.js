
// hamburger

const hamburger = document.querySelector('#hamburger');
const mobileNav = document.querySelector('#sub-menu');

hamburger.addEventListener('click', function () {
    mobileNav.classList.toggle('open-menu');
});

// image gallery 

const slideImage = document.querySelectorAll(".slide-image");
const slideContainer = document.querySelector(".slide-container");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const navDots = document.querySelector(".navigation-dots");

let numOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

// set up slider 

function init() {
    slideImage.forEach((img, i) => {
        img.style.left = i * 100 + '%';
    })

    slideImage[0].classList.add("active");

    createNavDots();
}

init();

// navigation dots 

function createNavDots () {
    for (let i = 0; i < numOfImages; i++) {
        const dot = document.createElement("div");
        dot.classList.add("single-dot");
        navDots.appendChild(dot);

        dot.addEventListener("click", () => {
            goToSlide(i);
        });
    }

    navDots.children[0].classList.add("active");
}

// next button 

next.addEventListener("click", () => {
    if (currentSlide >= numOfImages - 1) {
        goToSlide(0);
        // currentSlide = 0;
        return;
    }

    currentSlide++;
    goToSlide(currentSlide);
})

// prev button 

prev.addEventListener("click", () => {
    if (currentSlide <= 0) {
        goToSlide(numOfImages - 1);
        // currentSlide = numOfImages - 1;
        return;
    }

    currentSlide--;
    goToSlide(currentSlide);
})

// go to slide 

function goToSlide (slideNumber) {
    slideContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";

    currentSlide = slideNumber;

    setActiveClass();
}

function setActiveClass () {
    let currentActive = document.querySelector(".slide-image.active");
    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active");

    let currentDot = document.querySelector(".single-dot.active");
    currentDot.classList.remove("active");
    navDots.children [currentSlide].classList.add("active");
}


