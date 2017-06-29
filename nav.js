/*************************/
/* Slide In
/* https://www.webdesignerdepot.com/2014/04/how-to-create-mobile-style-slide-in-navigation/
/************************/

$(document).ready(function() {
    $('#fade').hide();
    $('#navicon').click(function() {
        if($('#navicon').hasClass('closed')) {
            $('body').animate({left: "-250px"}, 400).css({"overflow":"hidden"});
            $('#main-nav').animate({right: "0"}, 400);
            $(this).removeClass('closed').addClass('open').html('x');
            $('#fade').fadeIn(); }
        else if($('#navicon').hasClass('open')) {
            $('body').animate({left: "0"}, 400).css({"overflow":"scroll"});
            $('#main-nav').animate({right: "-250px"}, 400);
            $(this).removeClass('open').addClass('closed').html('&#9776;');
            $('#fade').fadeOut(); }
    });
});
