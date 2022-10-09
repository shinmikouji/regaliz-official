jQuery(function ($) {
  $(window).scroll(function () {
    const scroll	= $(this).scrollTop();
    console.log(scroll)
    if(scroll > 90) {
      $(".l-header").addClass('l-header--borderBottom');
    } else {
      $(".l-header").removeClass('l-header--borderBottom');
    }
  })
});