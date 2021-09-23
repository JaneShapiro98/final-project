const hamburgerDisplay = document.getElementsByClassName("hamburger");

hamburgerDisplay.addEventListener('click', openHamburger);

function openHamburger() {
  var x = document.getElementsByClassName("menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
