// video bg
$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });
});
function scaleVideoContainer() {
    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);
}
function initBannerVideoSize(element){
    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });
    scaleBannerVideoSize(element);
}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }
        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}
var flag1 = 0, flag2 = 0;
$(document).ready(function() {
    if( $('.mynavbar')[0].getBoundingClientRect().top <= 0 ) {
            $('.mynavbar').css({'position': 'fixed', 'top' : '0'});
            $('.whoami').css('padding-top', $('.mynavbar').innerHeight());
        }
    $('.mynavbar li').on('click', function() {
        var element = $(this).children('a').attr('href'),
            destination = $(element).offset().top - $('.mynavbar').innerHeight();
            console.log('destination: ' + destination);
            $('html').animate( {scrollTop: destination}, 1000 );
        return false;
    });
    $('.respmenu-item').on('click', function() {
        var element = $(this).children('.fa').attr('href'),
            destination = $(element).offset().top - $('.mynavbar').innerHeight();
            $('html').animate( {scrollTop: destination}, 1000 );
            console.log('destination: ' + destination);
        return false;
    });
    $('#review').on('click', function() {
        var dest = $('#about').offset().top;
        $('html').animate({scrollTop: dest - $('.mynavbar').innerHeight()}, 500, 'swing');
    });
    $('.skills').css('height', $('.more-wrap')[0].clientHeight + 300 + 'px');
    $(window).scroll(function(){
        $('.mynavbar li').removeAttr('style');
        $('.mynavbar .respmenu-item').removeAttr('style');
        if( $('#home')[0].getBoundingClientRect().top == 0 ){
            $('.mynavbar [href="#home"]').parent('li').css('background', '#fff');
            $('.mynavbar [href="#home"]').parent('.respmenu-item').css('background', '#fff');
        }

        if( $('#about')[0].getBoundingClientRect().top < window.innerHeight && $('#about')[0].getBoundingClientRect().top > 0  ){
            $('.mynavbar [href="#about"]').parent('li').css('background', '#fff');
            $('.mynavbar [href="#about"]').parent('.respmenu-item').css('background', '#fff');
        }
        if( $('#about')[0].getBoundingClientRect().top < 0 && $('#skills')[0].getBoundingClientRect().bottom > window.innerHeight  ){
            $('.mynavbar [href="#skills"]').parent('li').css('background', '#fff');
            $('.mynavbar [href="#skills"]').parent('.respmenu-item').css('background', '#fff');
        }
        if( $('#work')[0].getBoundingClientRect().top > 0 && $('#skills')[0].getBoundingClientRect().bottom < window.innerHeight  ){
            $('.mynavbar [href="#work"]').parent('li').css('background', '#fff');
            $('.mynavbar [href="#work"]').parent('.respmenu-item').css('background', '#fff');
        }
        if( $('#work')[0].getBoundingClientRect().top < 0 && $('#portfolio')[0].getBoundingClientRect().bottom > window.innerHeight ){
            $('.mynavbar [href="#portfolio"]').parent('li').css('background', '#fff');
            $('.mynavbar [href="#portfolio"]').parent('.respmenu-item').css('background', '#fff');
        }
        if( $('#contacts')[0].getBoundingClientRect().top < window.innerHeight ){
            $('.mynavbar [href="#contacts"]').parent('li').css('background', '#fff');
            $('.mynavbar [href="#contacts"]').parent('.respmenu-item').css('background', '#fff');
        }

        if( $('.mynavbar')[0].getBoundingClientRect().top <= 0 ) {
            $('.whoami').css('margin-top', $('.mynavbar').innerHeight());
            $('.mynavbar').css({'position': 'fixed', 'top' : '0'});
           console.log('attach: ' + $('.mynavbar').innerHeight());
        }
        
        if( $('.filter')[0].getBoundingClientRect().bottom > $('.mynavbar').innerHeight() ) {
            console.log('deteach: ' + $('.mynavbar').innerHeight());
            $('.mynavbar').removeAttr('style');
            $('.whoami').removeAttr('style'); 
        }

        if(window.innerHeight - $('.skills-wraper')[0].getBoundingClientRect().top > 300 ) {
            $('.skills-wraper').css({'height': $('.more-wrap')[0].clientHeight + 100 + 'px'});
        }
        if(window.innerHeight - $('.whoami')[0].getBoundingClientRect().top > 200 ) {
            $('.whoami img[alt="myphoto"]').css('animation', 'leftBound 2s ease-in-out').delay(2000).css('opacity', '1');
        }
        if( $('.whatdo')[0].getBoundingClientRect().top < window.innerHeight && $('.whatdo')[0].getBoundingClientRect().bottom > 0 ){
           
            $('.whatdo').css('background-position', 'right ' + (-$('.whatdo')[0].getBoundingClientRect().top / 2 - 100) + 'px' );
        }
        if(window.innerHeight - $('.whatdo')[0].getBoundingClientRect().top > 200 ){
                $('.whatdo h1').css('animation', 'leftBound .7s').delay(700).css('opacity', '1');
            setTimeout(function(){
    
                $('.whatdo .line').css('animation', 'leftBound .7s').delay(700).css('opacity', '1');
            }, 500);
            
            $.each($('.icons'), function(i, el){
                    setTimeout(function() {
                        $(el).css('transform', 'translateX(-50%) scale(1)');
                        $(el).css({'animation': 'whatDo 1s'});
                        $(el).next('h3').css('animation', 'leftBound .7s').delay(700).css('opacity', '1');
                        $(el).next('h3').next('p').css('animation', 'leftBound .7s').delay(700).css('opacity', '1');

                    } , 200 + (i * 200));
                });
           flag2++; 
        }
        if(window.innerHeight - $('.portfolio')[0].getBoundingClientRect().top > 400 ){
            $.each( $('.portfolio-item'), function(i, el) {
                setTimeout(function() {
                    $(el).css('animation', 'myworks .5s').delay(500).css('opacity', '1');
                }, 200 + (i * 200));

            });


        }
    });
});
