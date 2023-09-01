$(function () {
    $(window).on('scroll', function(){
        let sct = $(window).scrollTop();
        if(sct>0) { 
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })

    $('.tab .home').on('click', function(){
        var targetTop = $('.main_home').offset().top;
        
        $('html, body').stop().animate({scrollTop : targetTop}, 1000)
    });
    $('.tab .product').on('click', function(){
        var targetTop = $('.main_product').offset().top;
        
        $('html, body').stop().animate({scrollTop : targetTop}, 1000)
    });
    $('.tab .promotion').on('click', function(){
        var targetTop = $('.main_promotion').offset().top;
        
        $('html, body').stop().animate({scrollTop : targetTop}, 1000)
    });
    $('.tab .public').on('click', function(){
        var targetTop = $('.main_relation').offset().top;
        
        $('html, body').stop().animate({scrollTop : targetTop}, 1000)
    });
    $('.tab .customer').on('click', function(){
        var targetTop = $('.main_customer').offset().top;
        
        $('html, body').stop().animate({scrollTop : targetTop}, 1000)
    });


    $('.h_slide').slick({
        arrows: false,
        dots: true,
    })

    $('.main_home .left').on('click', function() {
        $('.h_slide').slick('slickPrev')
    })

    $('.main_home .right').on('click', function() {
        $('.h_slide').slick('slickNext')
    })

    $('.p_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
    })

    $('.main_product .left').on('click', function() {
        $('.p_slide').slick('slickPrev')
    })

    $('.main_product .right').on('click', function() {
        $('.p_slide').slick('slickNext')
    })

})