$(document).ready(function () {
  $(".testimonials__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: true,
  });
});

$(".header__burger").click(function () {
  $(".header__burger").toggleClass("active");
  $(".header__mobile-menu").toggleClass("active");
});
