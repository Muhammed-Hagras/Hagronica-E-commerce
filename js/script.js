var mySlides = document.querySelectorAll(".slider .slides");
var btnRight = document.getElementById("btn-left");
var btnLeft = document.getElementById("btn-right");


//Slide to next Function
var slideNext = function() {
    for(var i=0; i<mySlides.length ;i++){
        if(mySlides[i].classList.contains("active")){
            if(i == (mySlides.length - 1)){
                mySlides[i].classList.remove("active");
                mySlides[0].classList.add("active"); 
                break;  
            }else{
                mySlides[i].classList.remove("active");
                mySlides[i+1].classList.add("active"); 
                break;
            }
            
        }
    }
}

//Slide to previous Function
var slidePrev = function() {
     for(var i= mySlides.length-1; i >= 0; i--){
         if(mySlides[i].classList.contains("active")){
            if(i == 0){
                mySlides[i].classList.remove("active");
                mySlides[mySlides.length-1].classList.add("active"); 
                break;  
            }else{
                mySlides[i].classList.remove("active");
                mySlides[i-1].classList.add("active"); 
                break;
            }
        }
    }
} 

// Gategories filter


myFilter("all")
function myFilter(c) {
  var x, i;
  x = document.getElementsByClassName("prod-box");

  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClassFun(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClassFun(x[i], "show");
  }
}


function addClassFun(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeClassFun(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}




//shuffle btns

var myShuffle = document.getElementById("shuffle");

var btns = myShuffle.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = myShuffle.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


//Back To Top Btn

//Get the button
var mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ( document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//For cart
$(document).ready(function(){
  $(".prod-box .cart").on("click", function(){
    var myval = $("#myCart").html();
    myval = parseInt(myval);
    
    myval++;
    $("#myCart").html(myval);
    alert("your Product is added");

    //Not works good now
    var myCartProd= $(this).clone();
    //$(myCartProd).$(".cart").remove()
    $("my-cart").append(myCartProd);
  })

  /*
  $("#cartx").on("click", function(){
    window.location.href ="cart.html"
  })*/
})