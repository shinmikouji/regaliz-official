jQuery(function ($) {
  const pageTop = $('#page-top');
  $(window).scroll(function () {
    const scroll	= $(this).scrollTop();
    console.log(scroll);
    if(scroll > 90) {
      $(".l-header").addClass('l-header--borderBottom');
      pageTop.fadeIn(500);
    } else {
      $(".l-header").removeClass('l-header--borderBottom');
      pageTop.fadeOut(500);
    }
  })
  pageTop.click(function () {
    $('body, html').animate({scrollTop: 0}, 700);
    return false;
  })
});