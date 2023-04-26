$(function(){

    /* sticky nav class about reducing height */
    $(window).scroll(function(){
        win_top = $(window).scrollTop();
        
        if(win_top >= 1103) {
            $('nav .gnb').addClass('sticky');
        }else{
            $('nav .gnb').removeClass('sticky');
        };
        
    })

    /* bloonies slick slide */

    $('.bloonies_slide').slick({
        arrows:true, 
        dots:true,
        appendDots:$('.bloonies .indicator'),  
        dotsClass:'dots',
        prevArrow: $('.bloonies .prev'),
        nextArrow: $('.bloonies .next'),
    });
        
    /* prev next */
    $('.bloonies .prev').click(function(){
        $('.bloonies_slide').slick('slickNext');
    });
    $('.bloonies .next').click(function(){
        $('.bloonies_slide').slick('slickNext');
    });

    /* topic video hover play */
    var ctrlVideo = $('#topic .video_wrap video'),
        play = $('.control .btn_play'),
        pause = $('.control .btn_pause');

    ctrlVideo.mouseover(function(){
        this.pause();
        play.removeClass('on');
        pause.addClass('on');
      }).mouseout(function(){
        this.play();
        pause.removeClass('on');
        play.addClass('on');
    });
   
    /* play, pause button click */
    play.click(function(){
        pause.removeClass("on");
        play.addClass("on");
        ctrlVideo.trigger('play');     
    });

    pause.click(function(){
        play.removeClass("on");
        pause.addClass("on");
        ctrlVideo.trigger('pause');                                 
    });


    /* tips slick slide */
    var slideInner = $('.tips_slide .slide_inner');
    
    slideInner.slick({
        autoplay:true,
        autoplaySpeed:3000,
        speed:500,
        fade:true,
        arrows:true, 
        dots:true,
        appendDots:$('.tips_slide .indicator'),  
        dotsClass:'dots',
        prevArrow: $('.tips_slide .prev'),
        nextArrow: $('.tips_slide .next')
    });

    /* play button */
    $('.tips_slide .btn_stop').on('click', function(){
        var $this = $(this);

        if ( $this.hasClass('on')){
            $this.removeClass('on').text('play');
            slideInner.slick('slickPause');
        }else {
            $this.addClass('on').text('pause');
            slideInner.slick('slickPlay');
        }
    });

    /* prev next */
    $('.tips_slide .prev').click(function(){
        slideInner.slick('slickNext');
    });
    $('.tips_slide .next').click(function(){
        slideInner.slick('slickNext');
    });
});
