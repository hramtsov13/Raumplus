//Slick slider config
$(document).ready(function () {
  $(".projects__slider").slick({
    arrows: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: true,
    pauseOnHover: true,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendArrows: $(".slider__arrow"),
  });
});

document.addEventListener("swup:contentReplaced", (event) => {
  $(document).ready(function () {
    $(".projects__slider").slick({
      arrows: true,
      adaptiveHeight: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnFocus: true,
      pauseOnHover: true,
      touchThreshold: 10,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
      appendArrows: $(".slider__arrow"),
    });
  });
});
