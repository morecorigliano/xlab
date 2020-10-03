////// suavizar el scroll en anchors de href ////////

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

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
mediaQueries.addListener(myFunction);

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

    var techLi = document.getElementById("tech-li");
    var techNav = document.getElementById("technology-nav");

    techLi.addEventListener("click", function(){
      techNav.style.display = "block";
      nav.classList.add("tech");
      window.setTimeout( function(){
        techNav.style.opacity = "1";
      }, 60);
    });

    document.querySelector("main").addEventListener("click", function(){
      nav.classList.remove("tech");
      techNav.style.opacity = "0";
      window.setTimeout( function(){
        techNav.style.display = "none";
      }, 60);
    });

    var contactLi = document.getElementById("contact-li");

    contactLi.addEventListener("click", function(){
      techNav.style.opacity = "0";
      nav.classList.remove("tech");
      window.setTimeout( function(){
        techNav.style.display = "none";
      }, 60);
    });


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