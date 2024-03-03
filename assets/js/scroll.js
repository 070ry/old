jQuery(window).scroll(function () {
  jQuery('.top').click(function (event) {
    event.preventDefault();
    jQuery('html, body').animate({ scrollTop: 0 }, 0);
    return false;
  });
});
