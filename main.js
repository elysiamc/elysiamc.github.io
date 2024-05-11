// main.js
// Copyright (c) 2023 - 2024 daysant, Elysia MC - Elysia MC website
// This file is licensed under the terms of the AGPL v3.0-or-later.
// daysant@proton.me, discord.gg/RKAf97d5Ap

var hamburger = false

function setRandomBackground() {
    var img = Math.floor(Math.random()*12)+1;
    var prev_img = Math.floor(Math.random()*17)+1;

    img = "res/title_imgs/title"+img+".png";

    var root = document.querySelector(':root');
    root.style.setProperty('--image', `url('${img}'`);
}

function section(section) {
  window.scrollTo(0,0);
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

  setRandomBackground()
}

function cookTheHamburger() {
  hamburger = !hamburger;
  
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
  
  var cookies = document.cookie.split(';');
    var cookieExists = false;
    for(var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf("cookiesAccepted=") === 0) {
            cookieExists = true;
            break;
        }
    }
    if (cookieExists) {
        
    } else {
        document.cookie = 'cookiesAcknowledged=0; max-age=31536000; path=/;';
        document.cookie = 'lightMode=0; max-age=31536000; path=/;';
    }
    
    var themeID = getCookie("lightMode")
    theme(themeID)
});

window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    document.querySelector('nav').style.display = 'flex';
  } else {
    document.querySelector('nav').style.display = 'none';
  }
});

function wipeCookies(){ // debug only
  var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=-1;path=/";
    }
    
  return "cookies wiped"
}

function acknowledgeCookies(){
  document.cookie = 'cookiesAcknowledged=1; max-age=31536000; path=/;';
  document.getElementById('cookieNotice').style.display='none';
}

function themeSwitch(){
  var switchTo = getCookie("lightMode")
  var root = document.querySelector(':root');

  if (switchTo=="0"){
    switchTo="1"
    theme("1")
    
  } else {
    switchTo="0"
    theme("0")
  }
  
  document.cookie = `lightMode=${switchTo}; max-age=31536000; path=/;`;
}

function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

function theme(mode){
  var root = document.querySelector(':root');
  
  if (mode=="0"){
    root.style.setProperty('--text-colour','black');
    root.style.setProperty('--bg-colour1','white');
    root.style.setProperty('--bg-colour2','#E4E4E4')
    root.style.setProperty('--header-colour','#5A6F5D')
    document.getElementById('modeSwitch').innerHTML='☀️'
  }
  if (mode=="1") {
    root.style.setProperty('--text-colour','white');
    root.style.setProperty('--bg-colour1','#222229');
    root.style.setProperty('--bg-colour2','#1E1E24')
    root.style.setProperty('--header-colour','#bfe9c5')
    document.getElementById('modeSwitch').innerHTML='🌑'
  }
}