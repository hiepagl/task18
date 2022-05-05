let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
let header = $(".c-header");

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
