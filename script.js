// md1
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// md2
var swiper = new Swiper(".swiper_md2", {
  slidesPerView: 4,
  spaceBetween: 0,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination_md2",
    clickable: true,
  },
});

// md3
const $cursor = $('.cursor');
const $cursorShadow = $('.cursor-shadow');

$(window).mousemove(function(e) {    
    $cursor.css({
        top: e.clientY,
        left: e.clientX
    });
    
    $cursorShadow.css({
        top: e.clientY,
        left: e.clientX
    });
});

$('.cursor-big').mouseenter(function() {
    $('html').addClass('need-to-cursor-big');
});

$('.cursor-big').mouseleave(function() {
    $('html').removeClass('need-to-cursor-big');
});

//md4
var swiper = new Swiper(".swiper_md4", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});