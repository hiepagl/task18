let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
// header
let header = $(".c-header");
let headerNavList = $(".c-header__navList");
let showNavSub1 = $("#show-navSub1");
let showNavSub2 = $("#show-navSub2");
let goBack = $("#goBack");

// slider
let slider = $(".p-slider__wrapper");
let sliderControl = $$(".p-slider__controlItem");

window.onscroll = function () {
  handleScrollTopHeader();
};

function handleScrollTopHeader() {
  let scrollTopHeader =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  if (scrollTopHeader > 50) {
    header.classList.add("is-active");
  } else {
    header.classList.remove("is-active");
  }
}

goBack.onclick = function () {
  headerNavList.classList.remove("is-navSub1", "is-navSub2");
};

showNavSub1.onclick = function () {
  headerNavList.classList.add("is-navSub1");
};

showNavSub2.onclick = function () {
  headerNavList.classList.add("is-navSub2");
};

let clearSlider = function () {
  for (let i = 0; i < sliderControl.length; i++) {
    slider.classList.remove(`p-slider__visual${i + 1}`);
  }
};

let clearSliderControl = function () {
  for (let i = 0; i < sliderControl.length; i++) {
    sliderControl[i].classList.remove("is-active");
  }
};

for (let i = 0; i < sliderControl.length; i++) {
  sliderControl[i].onclick = function () {
    clearSlider();
    clearSliderControl();
    slider.classList.add(`p-slider__visual${i + 1}`);
    sliderControl[i].classList.add("is-active");
  };
}
