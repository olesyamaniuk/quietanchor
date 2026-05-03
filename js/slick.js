$(function () {
  $(".o-j-why-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".o-j-gallery-list-left",
    nextArrow: ".o-j-gallery-list-right",
  });
});
