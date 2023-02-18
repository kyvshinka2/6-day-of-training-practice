let slideIndex = 1;
let slideIndex1 = 1;
let slideIndex2 = 1;

showSlides(slideIndex);
showSlides1(slideIndex1);
showSlides2(slideIndex2);


function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
};

// прически

function nextSlide1() {
    showSlides1(slideIndex1 += 1);
}

function previousSlide1() {
    showSlides1(slideIndex1 -= 1);
}

function currentSlide1(i) {
    showSlides1(slideIndex1 = i);
}

function showSlides1(i) {

    let slides1 = document.getElementsByClassName("item2");

    if (i > slides1.length) {
        slideIndex1 = 1;
    }
    if (i < 1) {
        slideIndex1 = slides1.length;
    }

    for (let slideee of slides1) {
        slideee.style.display = "none";
    }

    slides1[slideIndex1 - 1].style.display = "block";
}

// тело


function nextSlide2() {
    showSlides2(slideIndex2 += 1);
}

function previousSlide2() {
    showSlides2(slideIndex2 -= 1);
}

function currentSlide2(i) {
    showSlides2(slideIndex2 = k);
}

function showSlides2(k) {

    let slides2 = document.getElementsByClassName("item3");

    if (k > slides2.length) {
        slideIndex2 = 1;
    }
    if (k < 1) {
        slideIndex2 = slides2.length;
    }

    for (let slideeek of slides2) {
        slideeek.style.display = "none";
    }

    slides2[slideIndex2 - 1].style.display = "block";
}