$(document).ready(function() {
    var cw = $('.project').width();
    $('.project').css({
        'height': cw + 'px'
    });

    var cw = $('.read-me__post__img').width();
    $('.read-me__post__img').css({
        'height': cw*257/370 + 'px'
    });
});

$(window).on('resize orientationchange', function() {
    var cw = $('.project').width();
    $('.project').css({
        'height': cw + 'px'
    });

    var cw = $('.read-me__post__img').width();
    $('.read-me__post__img').css({
        'height': cw*257/370 + 'px'
    });
});