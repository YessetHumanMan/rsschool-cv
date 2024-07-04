$(function () {

  $(".menu__link, .logo, .header__arrow").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.burger, .menu__link').on('click', function () {
    $('.burger,.menu__list').toggleClass('active');
    $('body').toggleClass('lock');
  });


  $(window).on('scroll', function () {
    $('.header__top').toggleClass('fixed', $(this).scrollTop() > 50);
  });

});

var mixer = mixitup('.projects__content');
