// debug/main.js
// Copyright (c) 2023 - 2024 daysant, Elysia MC - Elysia MC website
// This file is licensed under the terms of the AGPL v3.0-or-later.
// daysant@proton.me, discord.gg/RKAf97d5Ap

var detailsAsked = false

async function wipeData() {
  try {
    localStorage.clear();
    document.getElementById('wipeData').style.color='lime'
    document.getElementById('wipeData').innerHTML='localStorage wiped'
  } catch(error) {
    document.getElementById('wipeData').style.color='red'
    document.getElementById('wipeData').innerHTML=`Error: ${error}`
  };
};

async function showData() {
  try {
    document.getElementById('showData').innerHTML = ''
    document.getElementById('showData').style.color = 'lime'
    var result=''
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key.includes('eruda')) continue;
      var value = localStorage.getItem(key);
      result+=`${key}: ${value}<br>`
      document.getElementById('showData').innerHTML = result
    }
  } catch(error) {
    document.getElementById('wipeData').style.color='red'
    document.getElementById('wipeData').innerHTML=`Error: ${error}`
  };
};

async function detailsAsk() {
  detailsAsked=!detailsAsked
  if (detailsAsked){
    document.getElementById('detailsAsk').innerHTML = 'Ok.'
    document.getElementById('details').style.display = 'block'
  } else {
    document.getElementById('detailsAsk').innerHTML = 'Why?'
    document.getElementById('details').style.display = 'none'
  }
}