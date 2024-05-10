// main.js
// Copyright (c) 2023 - 2024 daysant, Elysia MC - Elysia MC website
// This file is licensed under the terms of the AGPL v3.0-or-later.
// daysant@proton.me, discord.gg/RKAf97d5Ap
function setRandomBackground() {
    var img = Math.floor(Math.random()*12)+1;
    var prev_img = Math.floor(Math.random()*12)+1;

    img = "res/title_imgs/title"+img+".png";

    var root = document.querySelector(':root');
    root.style.setProperty('--image', `url('${img}'`);
}

document.addEventListener('DOMContentLoaded', function() {
  setRandomBackground()
  section('home');
});

function section(section) {
  document.querySelectorAll('section').forEach(section => {section.style.display = 'none';});

  const element = document.getElementById(section);
  if (element) {
    element.style.display = 'block';
  } else {
    console.error(`element with id '${section}' not found.`);
  }
}