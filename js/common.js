$(document).ready(function() {

  var scrollUp = document.getElementById('scrollUp');

  scrollUp.onclick = function() { //обработка клика
    window.scrollTo(0,0);
  };

  window.onscroll = function () { // при скролле показывать и прятать блок
    if ( window.pageYOffset > 1500 ) {
      scrollUp.style.display = 'block';
    } else {
      scrollUp.style.display = 'none';
    }
  };

  $('.pop-up-btn').click(function(){
    $('pop-up').slideToggle();
      
  })

  $('.fa-bars').click(function(){   /*Гамбургер меню*/
    $('.header-bottom').slideToggle();
  })

  

});