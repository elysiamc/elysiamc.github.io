// main.js
// Copyright (c) 2023 - 2024 daysant, Elysia MC - Elysia MC website
// This file is licensed under the terms of the AGPL v3.0-or-later.
// daysant@proton.me, discord.gg/RKAf97d5Ap

var hamburger = false

function setRandomBackground() {
    var img = Math.floor(Math.random()*12)+1;
    var prev_img = Math.floor(Math.random()*12)+1;

    img = "res/title_imgs/title"+img+".png";

    var root = document.querySelector(':root');
    root.style.setProperty('--image', `url('${img}'`);
}

function section(section) {
  var sections = document.getElementsByTagName('section');
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = 'none';
  }

  var element = document.getElementById(section);
  if (element) {
    element.style.display = 'block';
  }
  
  if (hamburger){
    cookTheHamburger()
  }
}

function cookTheHamburger() {
  hamburger=!hamburger
  
  if (hamburger){
    document.getElementById('hamburger').innerHTML = 'x'
    document.querySelector('nav').style.display = 'flex';
  } else {
    document.getElementById('hamburger').innerHTML = '≡'
    document.querySelector('nav').style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  setRandomBackground()
  section('home');
});