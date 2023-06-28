$(function() {
    var header = $(".header");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 350) {
            header.removeClass('header').addClass("header-alt");
        } else {
            header.removeClass("header-alt").addClass('header');
        }
    });
});