//
// document.querySelector("button").addEventListener("click",function (){
//   alert("Hello");});


for(var i=0;i<document.querySelectorAll(".drum").length;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}


// detecting keyboard press
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
  switch (key) {
    case (buttonInnerHTML = "w"):
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case (buttonInnerHTML = "a"):
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case (buttonInnerHTML = "s"):
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case (buttonInnerHTML = "d"):
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case (buttonInnerHTML = "j"):
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case (buttonInnerHTML = "k"):
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case (buttonInnerHTML = "l"):
      var tom4= new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    default:
      buttonInnerHTML = console.log(this.innerHTML);
  }
}


function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
