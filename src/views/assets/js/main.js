'use strict'

$(document).ready(() => {
  $('.nav-btn').click(() => {
    
    let btnActive = $('.sections').hasClass("sections-active");

    console.log(btnActive);

    if(btnActive == false){
      console.log('ready');
      $('.sections').addClass('sections-active');
    }else{
      $('.sections').removeClass('sections-active');
    }

  });
});

function bjs() {
  
        setTimeout(function(){
          $('body').css('background', '#f0d91d');
          $('.BJS').css('background', '#f0d91d');
          setTimeout(function(){
            $('body').css('background', '#ff6620');
            $('.BJS').css('background', '#ff6620');
            setTimeout(function(){
              $('body').css('background', 'rgba(255, 255, 255, 0.8)');
              $('.BJS').css('background', '#182128');
              setTimeout(function(){}, 600);
           }, 1500);

         }, 1500);
       }, 1000);
}

function contact() {
  $('html, body').animate({ scrollTop: ($('.divs').offset().top)}, 600);
}

