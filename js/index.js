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

////// formulario contacto ////////

var formInputs = document.getElementsByClassName("form");

for (var i = 0; i < formInputs.length; i++) {
    formInputs[i].children[0].addEventListener("input", function(){
        if(this.value.length == 0){
            this.parentElement.children[1].classList.remove("filled"); 
        }else{
        this.parentElement.children[1].classList.add("filled");
        }
    });
}

////// offices ////////

var adress = document.getElementsByClassName("adress");
var overline = document.getElementById("overline");
var initial = document.getElementById("initial");
var uruguay = document.getElementById("uruguay");
var argentina = document.getElementById("argentina");
var california = document.getElementById("california");
var florida = document.getElementById("florida");

for (var i = 0; i < adress.length; i++) {
    adress[i].addEventListener("click", function(){
      initial.classList.remove("initial");
      for (var i = 0; i < adress.length; i++) {
        adress[i].children[1].classList.remove("show");
        adress[i].children[1].style.bottom = "-.5rem";
        adress[i].children[1].style.opacity = "0";
      }
      this.children[1].classList.add("show");
      var current = this;
      window.setTimeout( function(){
        current.children[1].style.bottom = "0";
        current.children[1].style.opacity = "1";
      }, 60);
      if(this.classList.contains("one")){
        overline.style.top = "0";
        california.classList.add("current");
        florida.classList.remove("current");
        uruguay.classList.remove("current");
        argentina.classList.remove("current");
      }
      if(this.classList.contains("two")){
        overline.style.top = "1.4rem";
        florida.classList.add("current");
        california.classList.remove("current");
        uruguay.classList.remove("current");
        argentina.classList.remove("current");
      }
      if(this.classList.contains("three")){
        overline.style.top = "2.8rem";
        uruguay.classList.add("current");
        florida.classList.remove("current");
        california.classList.remove("current");
        argentina.classList.remove("current");
      }
      if(this.classList.contains("four")){
        overline.style.top = "4.2rem";
        argentina.classList.add("current");
        florida.classList.remove("current");
        california.classList.remove("current");
        uruguay.classList.remove("current");
      }
    });
}

////// abrir/cerrar boton hamburguesa mobile ////////

var navToggle = document.getElementById("nav-toggle");
var navList = document.getElementById("nav-list");
var navListItem = document.getElementsByTagName("li");
var body = document.body;
var lineOne = document.getElementById("line-one");
var lineTwo = document.getElementById("line-two");
var lineThree = document.getElementById("line-three");

var navToggleClicks = 1;

var mediaQueries = window.matchMedia("(max-width: 1024px)");
myFunction(mediaQueries);
mediaQueries.addEventListener(myFunction);

function myFunction(mediaQueries){ 
  
  if(mediaQueries.matches){
    document.querySelector("header").classList.add("scroll");
    navToggle.addEventListener("click", OpenClose);
    for (var i = 0; i < navListItem.length; i++) {
      navListItem[i].addEventListener('click', OpenClose);
    }
  }else{
    var nav = document.getElementById("header");
    window.onscroll = function() {
      "use strict";
      if (document.body.scrollTop >= 150 || document.documentElement.scrollTop >= 150) {
        nav.classList.add("scroll");
      }else{
        nav.classList.remove("scroll");
      }
    };
  }

}

function OpenClose(){
    navToggleClicks++
    if(navToggleClicks % 2 == 0){
        openNav();
    }else{
        closeNav();
    }
}

function openNav(){
    navList.style.transform = "translateY(0)";
    lineOne.style.transform = "rotate(-45deg) scale(0.8)";
    lineTwo.style.opacity = "0";
    lineThree.style.transform = "rotate(45deg) scale(0.8) translate(0.1vw, 0.4vw)";
    lineThree.style.width = "8vw";
    setTimeout(function() {
        for (var i = 0; i < navListItem.length; i++) {
        navListItem[i].style.opacity = "1";
        }
    }, 150);
    setTimeout(function() {
        for (var i = 0; i < navListItem.length; i++) {
        navListItem[i].style.transform = "translateY(0)";
        }
    }, 200);
}

function closeNav(){
    navList.style.transform = "translateY(-100vh)";
    lineOne.style.transform = "rotate(0) scale(1)";
    lineTwo.style.opacity = "1";
    lineThree.style.transform = "rotate(0) scale(1) translate(0, 0)";
    lineThree.style.width = "4vw";
    for (var i = 0; i < navListItem.length; i++) {
        navListItem[i].style.opacity = "0";
        navListItem[i].style.transform = "translateY(-2rem)";
    }
}