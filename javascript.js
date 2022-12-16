
// Get the button
var mybutton = document.getElementById("myBtn");

// When the person clicks on the button it scrolls to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// When the person scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("bottomheader");

// Get the offset position of the navbar
var sticky = bottomheader.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
};
//functions for the popup info divs
function show(){
var div = document.getElementById("quizd2");

div.style.display ="block";
};
//second one
function info(){
var div = document.getElementById("info2");

div.style.display ="block";
};
//third one
function idk(){
var div = document.getElementById("idk2");

div.style.display ="block";
};


