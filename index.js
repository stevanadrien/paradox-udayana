// berger menu diklik muncul card
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function ( ) {
    nav.classList.toggle('slide');
});

// Klik di luar sidebar keluar dari card
const hamburger = document.querySelector('.menu-toggle');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove('slide');
  }
});





