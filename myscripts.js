const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

document.querySelector('div[role="button"]').addEventListener('keydown', function(e) {
    const keyD = e.key !== undefined ? e.key : e.keyCode;
      if ( (keyD === 'Enter' || keyD === 13) || (['Spacebar', ' '].indexOf(keyD) >= 0 || keyD === 32)) {
      e.preventDefault();
      this.click();
    }
  });

  var specifiedElement = document.getElementById('.hamburger');
  document.addEventListener('click', function(event) {
      var isClickInside = specifiedElement.contains(event.target);
      if (isClickInside) {
        console.log('You clicked inside')
      }
      else {
        console.log('You clicked outside')
      }
  });