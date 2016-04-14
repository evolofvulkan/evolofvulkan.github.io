//scroll down to first content clicking bouncing arrow
$('.bottom-btn').click(function() {
 $('html, body').animate({scrollTop: $("#first-content").offset().top - 80}, 500);
});

//change navigation bar and brand logo with scroll
var off = $('#first-content').offset().top;
$(window).scroll(function() {
  if($(window).scrollTop() >= off - 300){
    $('.navbar-fixed-top').addClass('navbar-afterscroll');
    $('.navbar-brand').addClass('navbar-brand-afterscroll');
  }else{
    $('.navbar-fixed-top').removeClass('navbar-afterscroll');
    $('.navbar-brand').removeClass('navbar-brand-afterscroll');
  }
});
