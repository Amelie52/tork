$(document).ready(function(){
  var navh = $('nav').height();
  $('header').parallax("50%", 0.5);
  $('#citation_2').parallax("50%", 0.8);
  $('.iphones').parallax("90%", 0.07);
  // $('.secondMenu').localScroll({
  //   duration: 2500,
  // });
  $("nav a").click(function() {
    $("html, body").animate({ 
      scrollTop: $( 
        $(this).data('rel') ).offset().top-navh }, 1500);
  });
  $('.mainLogo').localScroll(2500);

  // ---------- slider ----------------
  $('.flexslider').flexslider({
          animation: "slide",
          directionNav: false,
          controlNav: true
  });

// ------------- header ----------------

  $('.secondMenu').css('display','none');
  var hamburger = 0;
  console.log(hamburger);
  $(".hamburger").click(function(){
    if(hamburger == 0) {
      $(".secondMenu").slideDown('slow'); 
      $(".hamburger").addClass("active");
      hamburger = 1;
      console.log(hamburger);
    } else {
      $(".secondMenu").slideUp('slow');
      $(this).removeClass("active");
      hamburger = 0;
      console.log(hamburger);
    }
  });
});

$(window).scroll(function(){
    // var navh =$('nav').height();
    var scroll = $(window).scrollTop();
    if(scroll > $('header').offset().top+100){
        $('nav').addClass('active');
        $('h1').addClass('active');
    } else {
        $('nav').removeClass('active');
        $('h1').removeClass('active');
    }

    if(scroll > $('#presentation').offset().top-500){
        $('.section_text').addClass('active');
    } else {
        $('.section_text').removeClass('active');
    }

});