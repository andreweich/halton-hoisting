// const gallerySlide = document.querySelector('.gallery-slide');
// const galleryImages = document.querySelectorAll('.gallery-slide img');

// // arrows
// const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');

// // counter
// let counter = 1;
// const size = galleryImages[0].clientWidth;

// gallerySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// // arrow listeners

// next.addEventListener('click', () => {
//     if (counter >= galleryImages.length -1) return;
//     gallerySlide.style.transition = "transform 0.4s ease-in-out";
//     counter ++;
//     gallerySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });

// prev.addEventListener('click', () => {
//     if (counter <= 0) return;
//     gallerySlide.style.transition = "transform 0.4s ease-in-out";
//     counter--;
//     gallerySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });

// gallerySlide.addEventListener('transitionend', () => {
//     if (galleryImages[counter].id === 'lastClone') {
//         gallerySlide.style.transition = 'none';
//         counter = galleryImages.length -2;
//         gallerySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
//     if (galleryImages[counter].id === 'firstClone') {
//         gallerySlide.style.transition = 'none';
//         counter = galleryImages.length - counter;
//         gallerySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
// });


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