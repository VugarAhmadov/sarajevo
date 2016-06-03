/**
 * Created by Vugar on 5/20/2016.
 */
$(function(){

    //slider
    var slider_item = $('.slider-items ul.slider-item-container > li'),
        slider_buttons = $('.slider-button ul li');

    slider_item.filter(':not(:first)').hide();
    slider_buttons.filter(':first').addClass('active2');

    slider_buttons.on('click', function(e){

        var index = $(this).index();
        slider_item.fadeOut(500).filter(':eq(' + index + ')').fadeIn(500);
        slider_buttons.removeClass('active2');
        $(this).addClass('active2');

        e.preventDefault();
    });

    //hover olanda
    $('.slider1 ul li').hover(function(){
        $('.slider-hover', this).finish().fadeIn(700);
    }, function(){
        $('.slider-hover', this).fadeOut(700);
    });

    //team hover olanda
    $('.team-persons ul li').hover(function(){
        $('.team2', this).finish().fadeIn(700);
    }, function(){
        $('.team2', this).fadeOut(700);
    });
});