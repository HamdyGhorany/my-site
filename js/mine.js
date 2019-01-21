//document.addEventListener('contextmenu', event => event.preventDefault());
// ==== loading screen ====
$(document).ready(function(){
   $("#loading-screen").fadeOut(1000) 
})
// ==== navbar ====
//== part 1 == for up and down navbar ==
$(document).ready(function () {
  
  'use strict';
  
   var c, currentScrollTop = 0,
       navbar = $('nav');

   $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();
     
      currentScrollTop = a;
     
      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
      }
      c = currentScrollTop;
  });
  
});
// == part 2 == for change navbar colors ==
function checkScroll(){
    var startY = $('.navbar').height() * 2;

    if($(window).scrollTop() > startY){
            $(".navbar").css("background", "#a5d");
            $(".navbar-light .navbar-nav .nav-link").css("color", "#fff");
            $(".navbar-brand").css("color", "#fff");
    }else{
        $('.navbar').css("background", "rgba(0,0,0,0.0)");
        $(".navbar-light .navbar-nav .nav-link").css("color", "#141414");
        $(".navbar-brand").css("color", "#fff");
    }
}
if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}
new WOW().init();
