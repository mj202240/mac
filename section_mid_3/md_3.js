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