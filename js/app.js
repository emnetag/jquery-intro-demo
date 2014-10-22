/* app.js
* main script file for our little application
* */

"use strict";

jQuery(document).ready(function() {
    jQuery('p a[href!="#top"]').attr('target', '_blank');
    jQuery('section').hide().fadeIn(2000);

    jQuery('nav a, p a[href="#top"]').click(function(eventObject) {
       console.log(this.hash);
       var targetElement = jQuery(this.hash);
       jQuery('html,body').animate({
           scrollTop: targetElement.offset().top - navHeight
       }, 700);
       eventObject.preventDefault();
    });

    var nav = jQuery('nav');
    var navTop = nav.offset().top;
    var navHeight = nav.outerHeight();
    var navPlaceHolder = jQuery('.nav-placeholder');
    navPlaceHolder.height(navHeight);

    jQuery(window).scroll(function() {
        var scrollPos = jQuery(this).scrollTop();

        if (scrollPos > navTop) {
            nav.addClass('nav-fixed');
            navPlaceHolder.show();
        }
        else {
            nav.removeClass('nav-fixed');
            navPlaceHolder.hide();
        }
    });

    jQuery('#exit-button').click(function() {
        jQuery('#confirm-exit-modal').modal();
    });

    jQuery('#confirm-exit-button').click(function() {
        window.location = 'http://ischool.uw.edu';
    });
});