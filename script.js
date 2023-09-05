const nav = document.querySelector(".Navbar");
window.onscroll = function () {
  if (
    document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100
  ) {
    nav.classList.add("NavbarChange");
    nav.classList.remove("NavbarDefault");
  } else {
    nav.classList.add("NavbarDefault");
    nav.classList.remove("NavbarChange");
  }
};

document.querySelector(".Menubar").onclick = function () {
  document.getElementById("MenuToggle").checked = false;
};
