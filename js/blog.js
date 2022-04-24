/* global console, document,$*/
/*disallowMultipleLineBreaks: true*/
/*jslint devel: true, evil: true, plusplus: true */
/*eslint no-console: off */
 /*eslint no-unused-vars: off, no-unused-labels: off*/

$(window).on('load', function () { 'use strict';
    
    let 
    navBar = $('header').find('.navbar'),
        
    navbarButton = $('#nav-button'),
        
    mobilMenu = $('.mobil-menu'),
        
    loadingScreen = $('.loading-layer');
                                  
    // MOBILE NAVBAR
    $(navbarButton).on('click', () => {

        $(mobilMenu).addClass('active');
        $('section').addClass('blur');


    });

    $(mobilMenu).on('click', () => {

        $(mobilMenu).removeClass('active');
        $('section').removeClass('blur');

    });

    // SHOW NAVBAR ON SCROLL                           
    window.addEventListener('scroll', () => {

        let pageScroll = $(window).scrollTop();

        if (pageScroll > 700) {navBar.addClass('alt'); }

        else {navBar.removeClass('alt'); }

    });

    setTimeout(function () {

        loadingScreen.fadeOut(1000);

    }, 1000);
                                  
});