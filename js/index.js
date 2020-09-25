////// suavizar el scroll en anchors de href ////////

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

////// camiar nav a blanco en scroll ////////

var nav = document.getElementById("header");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 150 || document.documentElement.scrollTop >= 150) {
    nav.classList.add("scroll");
  }else{
    nav.classList.remove("scroll");
  }
};

////// animación de hover en iconos de lenguajes ////////

var card = document.getElementsByClassName("card");

for (var i = 0; i < card.length; i++) {
  card[i].addEventListener("mouseover", function(){
    this.children[0].style.transform = "scale(1.2)";
  });
  card[i].addEventListener("mouseout", function(){
    this.children[0].style.transform = "scale(1)";
  });
}