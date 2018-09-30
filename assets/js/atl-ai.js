$(document).ready(function() {
                  checkHiddenElem();
                  $(window).scroll(function(){
                                   checkHiddenElem();
                                   })
                  })

function checkHiddenElem() {
  $('.show-on-scroll').each(function(i) {
                            let topOffset = 100;
                            var elemTop = $(this).offset().top;
                            var winBottom = $(window).scrollTop() + $(window).height();
                            if (winBottom > elemTop + topOffset) {
                              console.log("Fade");
                              $(this).animate({'opacity':'1'}, 500);
                            }
                            })
}
