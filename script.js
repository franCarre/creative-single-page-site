AOS.init();

// nav

const body = document.body;
const mobileNav = document.querySelector('.nav');
const menuBtn = document.querySelector('.nav__toggle');

function toggleMobileNav() {
  mobileNav.classList.toggle('nav--active');
}

menuBtn.addEventListener('click', () => {
  toggleMobileNav();
});

// slider

const md = window.matchMedia("(max-width: 991.98px)");
const sm = window.matchMedia("(max-width: 575.98px)");

const slideImg = document.querySelector("#slide-img");
const slideHeading = document.querySelector("#slide-heading");
const slideDescription = document.querySelector("#slide-description");
const slideYear = document.querySelector("#slide-year");

const hero_btn = document.querySelector("#hero__btn");

const slide_btns = document.querySelectorAll(".btn--slider");
const slide_1 = document.querySelector("#slide__indicator-1");
const slide_2 = document.querySelector("#slide__indicator-2");
const slide_3 = document.querySelector("#slide__indicator-3");

function changeSlide() {
  if (slide_1.classList.contains("btn--active")) {
    if (sm.matches) {
      slideImg.style.backgroundImage = "url(../assets/mobile/image-slide-1.jpg)";
    } else if (md.matches) {
      slideImg.style.backgroundImage = "url(../assets/tablet/image-slide-1.jpg)";
    } else {
      slideImg.style.backgroundImage = "url(../assets/desktop/image-slide-1.jpg)";
    }
    // slideImg.classList.add('--')
    slideHeading.innerHTML = "Brand naming & guidelines";
    slideDescription.innerHTML = "Lean Product Roadmap";
    slideYear.innerHTML = "2019 Project";
  } else if (slide_2.classList.contains("btn--active")) {
    if (sm.matches) {
      slideImg.style.backgroundImage = "url(../assets/mobile/image-slide-2.jpg)";
    } else if (md.matches) {
      slideImg.style.backgroundImage = "url(../assets/tablet/image-slide-2.jpg)";
    } else {
      slideImg.style.backgroundImage = "url(../assets/desktop/image-slide-2.jpg)";
    }

    slideHeading.innerHTML = "Brand identity & merchandise";
    slideDescription.innerHTML = "New Majestic Hotel";
    slideYear.innerHTML = "2018 Project";
  } else if (slide_3.classList.contains("btn--active")) {
    if (sm.matches) {
      slideImg.style.backgroundImage = "url(../assets/mobile/image-slide-3.jpg)";
    } else if (md.matches) {
      slideImg.style.backgroundImage = "url(../assets/tablet/image-slide-3.jpg)";
    } else {
      slideImg.style.backgroundImage = "url(../assets/desktop/image-slide-3.jpg)";
    }

    slideHeading.innerHTML = "Brand identity & web design";
    slideDescription.innerHTML = "Crypto Dashboard";
    slideYear.innerHTML = "2016 Project"
  }

}

function activeSlide() {
  if (slide_1.classList.contains("btn--active")) {
    slide_1.classList.remove("btn--active");
    slide_2.classList.add("btn--active");
  } else if (slide_2.classList.contains("btn--active")) {
    slide_2.classList.remove("btn--active");
    slide_3.classList.add("btn--active");
  } else {
    slide_3.classList.remove("btn--active");
    slide_1.classList.add("btn--active");
  }

  changeSlide();
}

function slider() {
  sId = window.setInterval(activeSlide, 3000);
}

slider();

slide_btns.forEach((slide_btn) => {
  slide_btn.addEventListener("click", function () {
    window.clearInterval(sId);
    for (let i = 0; i < slide_btns.length; i++) {
      slide_btns[i].classList.remove("btn--active");
    }
    this.classList.add("btn--active");
    changeSlide();
    slider();
  });
});
