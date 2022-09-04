const menuBtn = document.querySelector(".menu-btn");
const navList = document.querySelector(".nav__list");
let menuOpen = false;
let navListCollapsed = true;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    navList.classList.add("expanded");
    // navList.style.transition = "all 5s";
    navListCollapsed = false;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    navList.classList.remove("expanded");
    navListCollapsed = true;
  }
});
