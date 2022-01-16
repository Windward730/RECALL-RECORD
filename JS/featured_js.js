
$(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin:100,
        responsiveClass: true,
        dots: true,
        smartSpeed: 1000,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:2,
                nav:true
            },
            1200:{
                items:3,
                nav:true,
                loop:true
            }
        }
    });
});