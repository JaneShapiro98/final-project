const hamburgerDisplay = document.getElementById("hamburger-open");

hamburgerDisplay.addEventListener('click', openHamburger);

function openHamburger() {
  var x = document.getElementById("menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
