// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }


const hamburgerDisplay = document.getElementById('hamburger');

const hamburgerMenu = document.getElementById('menu');

hamburgerDisplay.addEventListener('click', openHamburger);

hamburgerDisplayClose.addEventListener("click", closeHamburger);

function openHamburger() {
  hamburgerMenu.classList.add('show-menu');
}

function  closeHamburger() {
  hamburgerMenu.classList.remove('show-menu');
}

// function validateForm() {
//   var name =  document.getElementById('name').value;
//   if (name == "") {
//       document.querySelector('.status').innerHTML = "Name cannot be empty";
//       return false;
//   }
//   var email =  document.getElementById('email').value;
//   if (email == "") {
//       document.querySelector('.status').innerHTML = "Email cannot be empty";
//       return false;
//   } else {
//       var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//       if(!re.test(email)){
//           document.querySelector('.status').innerHTML = "Email format invalid";
//           return false;
//       }
//   }
//   var subject =  document.getElementById('subject').value;
//   if (subject == "") {
//       document.querySelector('.status').innerHTML = "Subject cannot be empty";
//       return false;
//   }
//   var message =  document.getElementById('message').value;
//   if (message == "") {
//       document.querySelector('.status').innerHTML = "Message cannot be empty";
//       return false;
//   }
//   document.querySelector('.status').innerHTML = "Sending...";
// }