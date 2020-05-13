(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      

      if ($(window).width() >= 1224) {  

        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 100) 
          }, 1000, "easeInOutExpo");
          return false;

         }

       }
       if ($(window).width() >= 1024) {  

        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 60) 
          }, 1000, "easeInOutExpo");
          return false;

         }

       }
      if ($(window).width() >= 768) {  

        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 100) 
          }, 1000, "easeInOutExpo");
          return false;
         }

       }
      if ($(window).width() <= 760) {  

        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 70) 
          }, 1000, "easeInOutExpo");
          return false;
         }

       }
      
    } 
    
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.collapse').collapse('hide'); 
  });
   

})(jQuery); // End of use strict
 

//$(".btn-primary1").on('touchstart click', function () {
//  $(".confirmation-message").show();
//})

//cuando refresca la pagina siempre va al header
//window.onbeforeunload = function () {
//  window.scrollTo(0, 0);
//}