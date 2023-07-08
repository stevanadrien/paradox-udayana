// berger menu diklik muncul card
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// Klik di luar sidebar keluar dari card
const hamburger = document.querySelector(".menu-toggle");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("slide");
  }
});
/*CARD 1 START;
card = document.getElementsByClassName("card");
icon = document.getElementsByTagName("i");

function mouseIn(i) {
  card[i].addEventListener("mouseenter", function () {
    icon[i].removeAttribute("class");
    icon[i].setAttribute("class", "fa-solid fa-list fa-3x fa-bounce");
    // alert('test');
  });
}

/*function mouseOut(i) {
  card[i].addEventListener("mouseleave", function () {
    icon[i].removeAttribute("class");
    icon[i].setAttribute("class", "fa-solid fa-list fa-3x");
    // alert('test');
  });
}
//CARD 1 END*/
