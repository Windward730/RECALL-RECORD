$(function(){    
    let showHeight = 100; 

    $('.pic,.txt').css({
        opacity: 0
    });

    $(window).on('load scroll resize',function(){
        $('.pic,.txt').each(function(){                    
            let setThis = $(this);
            let areaTop = setThis.offset().top;

            if($(window).scrollTop() >= (areaTop + showHeight) - $(window).height()){
                setThis.stop().animate({
                    opacity: 1,
                },1000);
            }else{
                setThis.stop().animate({
                    opacity: 0
                },1000);
            }
        });
    });
   
});