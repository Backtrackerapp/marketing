"use strict";

$(function(videojs) {
    $('.responsive-nav-button').click(function() {
        if($('.responsive-nav-button').hasClass('cross')) {
            $('body').removeClass('responsive-nav-shown');
            $('.responsive-nav').removeClass('shown');
            $('.responsive-nav-button').removeClass('cross');
            $('.nav-container').removeClass('shown');
        } else {
            $('body').addClass('responsive-nav-shown')
            $('.responsive-nav').addClass('shown')
            $('.responsive-nav-button').addClass('cross')
            $('.nav-container').addClass('shown');
        }
    });
    if($('.info-page').length > 0) {
        if(window.location.hash) {
            $('.pane-' + $('a[href="' + window.location.hash + '"]').data('link')).addClass('active');
            $('a[href="' + window.location.hash + '"]').addClass('active');
        } else {
            $('.pane').first().addClass('active');
            $('.nav-left a').first().addClass('active');
        }
        var changeTab = function(e) {
            var tab = $(this).data('link');
            $('.pane').removeClass('active');
            $('.nav-left a').removeClass('active');
            $('.pane-' + tab).addClass('active');
            var navLeft = $("."+$(this).data('link'));
            if(navLeft.length>0){
                navLeft.addClass('active');
            } else {
                $(this).addClass('active');
            }
        }
        $('.toplink').click(changeTab);
        $('.nav-left a').click(changeTab);
    }

    var video = $('#video').get(0);
    var initTop = {
        '.parallax-one' : -150,
        '.parallax-two' : -200
    }
    //1775

    var para = function(el){
        var parallax = $(el);
        var top = ($('body').scrollTop() + $(window).height())- parallax.position().top,
            bottom = ($('body').scrollTop()) - (parallax.position().top  + 235)
            if(top > 0 && bottom < 0) {
                var delta = initTop[el] - (top)/10
                parallax.find('img').css('top', delta);
            }
    }

    if($('.parallax-one').length > 0){
        $(window).scroll(para.bind(null, '.parallax-one'));
        $(window).scroll(para.bind(null, '.parallax-two'));
    }


    var showVideo = function (e) {
        $('.header-video').addClass('show');
        $('.header-content').addClass('video');
        $('.header-foot').addClass('video');
        setTimeout(function(){
            video.play();
        }, 1000);
    };

    var hideVideo = function (e) {
        $('.header-video').removeClass('show');
        $('.header-content').removeClass('video');
        $('.header-foot').removeClass('video');
        video.pause();
    };

    $('.video-btn').click(showVideo);
    $('.close-btn').click(hideVideo);

});
