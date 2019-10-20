window.onload = () => {
  var i = 0;
  var txt = 'Atomic Fission'; /* The text */
  var speed = 100; /* The speed/duration of the effect in milliseconds */

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("brand").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } /* else {
      
      i = 0
      document.getElementById("brand").innerHTML = "";
      wait(1000)
      typeWriter()
    } */
   
  }
  typeWriter()
  checkMode()
  function wait(ms) {
    setTimeout(function() {}, ms)
  }


  $(document).on('click', '#dark-mode', function () {
    darkMode();
    //$("a").css('color', '#F1B379');
  });
  $(document).on('click', '#light-mode', function () {
    lightMode();
  });
}

function checkMode() {
  var x = document.cookie;
  var cookies = {};
  x = x.split(';');
  x.forEach(cookie => {
    var temp = cookie.split('=');
    cookies[temp[0]] = temp[1];
  })
  var mode = cookies['mode'];
  console.log(mode);
  if (mode === 'dark') {
    darkMode();
  } else {
    lightMode();
  }
}

function darkMode () {
  $("body").css('background-color', '#221E20');
  $("body").css('color', 'white')
  $(".jumbotron").css('color', '#F1B379');
  $('.list-link').css('background-color', '#d7dbdd')
  $('.list-link').css('color', 'black')
  $('.list-link.active').css('background-color', '#007BFF')
  document.cookie = "mode=dark"
}

function lightMode () {
  $("body").css('background-color', 'white');
  $("body").css('color', 'black');
  $(".jumbotron").css('color', 'white');
  $('.list-link').css('background-color', '#221E20')
  $('.list-link').css('color', '#F1B379')
  $('.list-link').css('border-color', '#d7dbdd')
  $('.list-link.active').css('background-color', '#007BFF')
  document.cookie = "mode=light"
}