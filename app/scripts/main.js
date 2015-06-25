"use strict"

$(function() {
  FB.init({
      appId: '412307002251243', cookie: true,
      status: true, xfbml: true
  });
  $('.responsive-nav-button').click(function() {
    if($('.responsive-nav-button').hasClass('cross')) {
      $('body').removeClass('responsive-nav-shown')
      $('.responsive-nav').removeClass('shown')
      $('.responsive-nav-button').removeClass('cross')
    } else {
      $('body').addClass('responsive-nav-shown')
      $('.responsive-nav').addClass('shown')
      $('.responsive-nav-button').addClass('cross')
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
  var login = function(){
    FB.login(function(response) {
     if (response.authResponse) {
       window.location = "http://app.backtrackerapp.com";
     } else {
       
     }
   }, {scope: 'public_profile,email,user_friends'});
  }
  $('.login-btn').click(login);
  $('.banner').click(login);
});
