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