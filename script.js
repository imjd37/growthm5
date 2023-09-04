const nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (
    document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100
  ) {
    nav.classList.add("navbar1");
    nav.classList.remove("navbar2");
  } else {
    nav.classList.add("navbar2");
    nav.classList.remove("navbar1");
  }
};




