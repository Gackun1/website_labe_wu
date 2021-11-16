const header1 = document.getElementById("header-1");
const header2 = document.getElementById("header-2");
document.addEventListener("scroll", () => {
  const className = "header--hidden";
  if (mv.clientHeight <= window.scrollY) {
    //メインビジュアルより下にスクロールした時
    header1.classList.add(className);
    header2.classList.remove(className);
  } else {
    header1.classList.remove(className);
    header2.classList.add(className);
  }
});

const menus = document.getElementsByClassName("header__menu-icon");
const nav = document.getElementById("fullsize-nav");
const close = document.getElementById("close");

[...menus, close].forEach((elm) => {
  elm.addEventListener("click", () => {
    const navClassName = "fullsize-nav--open";
    const menuClassName = "header__menu-icon--close";
    const closeClassName = "fullsize-nav__icon--close";
    nav.classList.toggle(navClassName);
    [...menus].forEach((menu) => menu.classList.toggle(menuClassName));
    close.classList.toggle(closeClassName);
  });
});
