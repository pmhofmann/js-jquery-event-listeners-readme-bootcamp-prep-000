//define functions here

function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function() {
    alert('sup bro');
  //  $('img').addClass('.tasty');
  });
}

function pressIt() {
  $('form').on('keydown', function(key) {
    if(key.which === 71) {
      alert('G was typed');
    }
  });
}


$(document).ready(function(){

// call functions here

getIt();
pressIt();
frameIt();
submitIt();
});
