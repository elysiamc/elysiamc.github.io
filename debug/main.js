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