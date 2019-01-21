const hamburgerToggle = document.querySelector('.hamburger');
const nav = document.querySelector('nav');


hamburgerToggle.addEventListener('click', function () {
  nav.classList.toggle('open');
  this.classList.toggle('toggled');
});