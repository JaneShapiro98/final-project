
const hamburgerDisplay = document.getElementById('hamburger');

const hamburgerDisplayClose = document.getElementById('menu-close');

const hamburgerMenu = document.getElementById('menu');

hamburgerDisplay.addEventListener('click', openHamburger);

hamburgerDisplayClose.addEventListener("click", closeHamburger);

function openHamburger() {
  hamburgerMenu.classList.add('show-menu');
}

function  closeHamburger() {
  hamburgerMenu.classList.remove('show-menu');
}