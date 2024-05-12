// dev/main.js
// Copyright (c) 2023 - 2024 daysant, Elysia MC - Elysia MC website
// This file is licensed under the terms of the AGPL v3.0-or-later.
// daysant@proton.me, discord.gg/RKAf97d5Ap

var hamburger = false;

function setRandomBackground() {
    var img = Math.floor(Math.random()*17)+1;
    img = "/res/title_imgs/title"+img+".png";

    var root = document.querySelector(':root');
    root.style.setProperty('--image', `url('${img}'`);
};

function section(section) {
  window.scrollTo(0,0);
  var sections = document.getElementsByTagName('section');
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = 'none';
  }

  var element = document.getElementById(section);
  if (element) {
    element.style.display = 'block';
  };
  
  if (hamburger){
    cookTheHamburger();
  };

  setRandomBackground();
};

function cookTheHamburger() {
  hamburger = !hamburger;
  
  if (hamburger){
    document.getElementById('hamburger').innerHTML = 'x';
    document.querySelector('nav').style.display = 'flex';
  } else {
    document.getElementById('hamburger').innerHTML = '≡';
    document.querySelector('nav').style.display = 'none';
  };
};

document.addEventListener('DOMContentLoaded', function() {
  setRandomBackground();
  section('home');

  if (!localStorage.getItem('theme')){
    localStorage.setItem('theme','dark');
  }
  if (!localStorage.getItem('cookiesAcknowledged')){
    localStorage.setItem('cookiesAcknowledged','0')
  }
  
  if (localStorage.getItem('cookiesAcknowledged')=='1'){
    document.getElementById('cookieNotice').style.display='none';
  };

  theme();
});

window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    document.querySelector('nav').style.display = 'flex';
  } else {
    document.querySelector('nav').style.display = 'none';
  };
});

function acknowledgeCookies(){
  document.getElementById('cookieNotice').style.display = 'none';
  localStorage.setItem('cookiesAcknowledged', '1');
};

function switchTheme(){
  if (localStorage.getItem('theme')=='dark'){
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');

  };
  theme();
};

function theme() { 
  var root = document.documentElement;
  if (localStorage.getItem('theme')=='dark'){
    root.style.setProperty('--text-colour','white');
    root.style.setProperty('--bg-colour1','#222229');
    root.style.setProperty('--bg-colour2','#1E1E24');
    root.style.setProperty('--header-colour','#bfe9c5');
    document.getElementById('themeButton').innerHTML = '🌙';
  } else {
    root.style.setProperty('--text-colour','black');
    root.style.setProperty('--bg-colour1','white');
    root.style.setProperty('--bg-colour2','#E4E4E4');
    root.style.setProperty('--header-colour','#5A6F5D');
    document.getElementById('themeButton').innerHTML = '☀️';
  };
};