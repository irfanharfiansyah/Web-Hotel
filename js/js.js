$(function () {



    $('.slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    });


    $('.testimoni').slick({
        dots: true,
        infinite: true,
        speed: 600,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<span class="priv_arrow"><i class="fas fa-arrow-left"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fas fa-arrow-right"></i></span>',
    });



    $('.image').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<span class="priv_arrow"><i class="fas fa-arrow-left"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fas fa-arrow-right"></i></span>',
    });

});

// effect scrol
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    if (wScroll > $('.about').offset().top - 400) {
        $('.about .tum1').addClass('muncul');
    }

    if (wScroll > $('.about').offset().top - 250) {
        $('.about .tum2').addClass('muncul');
    }

});