// Mobile menu
let hamburger = document.querySelector(".hamburger-bar");
let mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
