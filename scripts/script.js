// JavaScript Document
var hamburgerButton = document.querySelector("#hamburger");
var menuList = document.querySelector("#menu");
var closeButton = document.querySelector("#close");

var favoriteCounter = document.querySelector("#counter");
var favoriteButton = document.querySelector("#heart");
var number = 0;
var min = 0;
var max = 1;

var animationClick = document.querySelector("#heart");

hamburgerButton.addEventListener('click',active);
closeButton.addEventListener('click',away);

favoriteButton.addEventListener('click',counter);

function active(){
    menu.classList.add('toonmenu')
}

function away(){
    menu.classList.remove('toonmenu')
}

function counter() {
    if (number<max) {
        number = number+1;
        favoriteCounter.innerHTML = number;
        favoriteButton.classList.toggle("zoom")
    } else {
        number = number-1;
        favoriteCounter.innerHTML = number;
        favoriteButton.classList.toggle("zoom")
    }
}

