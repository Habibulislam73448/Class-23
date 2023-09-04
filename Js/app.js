$(function () {
      $(".banner_slider").slick({
          autoplay: true,
          autoplaySpeed: 3000,
          speed: 1000,
          prevArrow: '<i class="fa-solid fa-chevron-left banner_slider_arrow"></i>',
          nextArrow: '<i class="fa-solid fa-chevron-right banner_slider_arrow"></i>',
          dots: true,
          dotsClass: 'banner_slider_dots',
          slidesToShow: 2,
      });
  });