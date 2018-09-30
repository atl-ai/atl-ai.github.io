$(document).ready(function() {
  $(window).scroll(function(){
    $('.show-on-scroll').each(function(i) {
      let topOffset = 50;
      var elemTop = $(this).offset().top;
      var winBottom = $(window).scrollTop() + $(window).height();
      if (winBottom > elemTop + topOffset) {
                              console.log("Fade");
                              $(this).fadeIn();
      }
      })
    })
  })
