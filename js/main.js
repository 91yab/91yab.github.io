$(function () {
  $('.top_banner i').on('click', function () {
    $('.top_banner').slideUp();
  });

  $('.main_slider').on('init relint afterChange', function (e, s, c) {
    console.log(e, s, c);
    var TG = $('.slick-current');
    TG.addClass('xxx').siblings().removeClass('xxx');
    $('.num').text((c ? c + 1 : 1) + '/' + s.slideCount);
  });

  $('.main_slider').slick({
    // arrows: false
    autoplay: true,
    autopalySpeed: 4000,
    pauseOnHover: false,
    dots: true,
  });

  $('.product_slider').slick({
    arrows: false,
    slidesToShow: 5,
    dots: true,
  });

  $('.product_list .arrows .left').on('click', function () {
    $('.product_slider').slick('slickPrev')
  })

  $('.product_list .arrows .right').on('click', function () {
    $('.product_slider').slick('slickNext')
  })

  $('#bgndVideo').YTPlayer();

  $('.utb_movie .left').on('click', function () {
    $('#bgndVideo').YTPPause()
  })

  $('.utb_movie .right').on('click', function () {
    $('#bgndVideo').YTPPlay()
  })

});