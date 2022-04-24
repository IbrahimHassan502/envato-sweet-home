/* global $, console, document, window*/
/*disallowMultipleLineBreaks: true*/
/*jslint devel: true, evil: true, plusplus: true */
/*eslint no-console: off */
 /*eslint no-unused-vars: off, no-unused-labels: off*/

$(window).on('load', function () { 'use strict';
    
    new WOW().init();                              
                                  
    // VARIABLES DECLERATION
    let 
    sections = $('section'),
        
    navbarButton = $('#nav-button'),
        
    mobilMenu = $('.mobil-menu'),
        
    navBar = $('header').find('.navbar'),
    
    landingPageImages = $('.land-page').find('img'),
        
    galleryLi = $('.gallery').find('ul').find('li'),
        
    viewBox = $('.gallery').find('.view-box'),
        
    viewBoxImg = $('.view-box').find('img'),
        
    galleryImg = $('.gallery').find('.img'),
        
    closeIcon = $('#close-icon'),
        
    rightIcon = $('#right-icon'),
        
    leftIcon = $('#left-icon'),
        
    viewBoxOverLay = $('.view-box').find('.overlay'),
        
    owlOne = $('.owl-one'),
        
    owlTwo = $('.owl-two'),
        
    loadingScreen = $('.loading-layer');
    
    // animate landing page images
    $(landingPageImages).addClass('animated');
                                  
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

    
    // ABOUT-US
    if ($(window).width() >= 768) {
        
        let whyUsImg = $('.why-us img'),
            whyUsP = $('.why-us p').offset().top;
        
        $(whyUsImg).offset({top: whyUsP, left: '-50%'});
        
    }
                                  
    // GALLERY                                
    $(galleryLi).on('click', function () {
        
        let lastClass = $('.gallery-grid').attr('class').split(' ').pop(),
            option = $(this).attr('data-option'),
            galleryGrid = $('.gallery-grid');

        $(galleryGrid).removeClass(lastClass).addClass(option);
        
        $(this).addClass('active').siblings().removeClass('active');
       
    });
                                  
    function viewImg() {

            let imgInside = $('.cloned').find('.img-inside'),
                bg = imgInside.css('background-image');
        
            bg = bg.replace('url(', '').replace(')', '').replace(/"/g, '');
        
            $(viewBoxImg).attr('src', bg);
        
            $(viewBox).addClass('d-flex');
            
        }
                                  
        $(galleryImg).on('click', function () {

            $(galleryImg).removeClass('cloned');
            
            $(this).addClass('cloned');
            
            viewImg();
            
        });

        $(closeIcon).on('click', () => {

            $(viewBox).removeClass('d-flex');
            
            $(galleryImg).removeClass('cloned');
            
        });

        $(rightIcon).on('click', () => {

            let cloned = $('.cloned'),
                nextCloned = $(cloned).next();

            if ($(nextCloned).is('.img')) {

                $(cloned).removeClass('cloned');
                
                $(nextCloned).addClass('cloned');
                
                viewImg();

            } else {

                $(galleryImg).removeClass('cloned');
                
                $(galleryImg).eq(0).addClass('cloned');
                
                viewImg();

            }
            
        });

        $(leftIcon).on('click', () => {

            let cloned = $('.cloned'),
                prevCloned = $(cloned).prev();

            if ($(prevCloned).is('.img')) {

                $(cloned).removeClass('cloned');
                
                $(prevCloned).addClass('cloned');
                
                viewImg();

            } else {
                let firstGalleryImg = $('.gallery .img:last-of-type');

                $(galleryImg).removeClass('cloned');
                
                $(firstGalleryImg).addClass('cloned');
                
                viewImg();

            }
            
        });
                                  
        $(viewBoxOverLay).on('click', () => {

            $(viewBox).removeClass('d-flex');
            
            $(galleryImg).removeClass('cloned');
            
        });


        $('body').on('keyup', (e) => {

            let key = e.which;

            if (key === 27) { $(closeIcon).click(); return false; }
            
                else if (key === 37) { $(leftIcon).click(); return false;  }
            
                else if (key === 39) { $(rightIcon).click(); return false; }
            
        });

    // TESTIMONIAL CAROUSEL                        
    $(owlOne).owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        center: true
    });

    // CLIENT CAROUSEL
    $(owlTwo).owlCarousel({
        loop: true,
        margin: 10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive: {
            
            0: {
                items: 3
            },
            768: {
                items: 4
            }
            
        }
    });
    // FADING OUT LOADSCREEN
    setTimeout(function () {
        
        loadingScreen.fadeOut(1000);
        
    }, 1000);
                                  
                                 });

