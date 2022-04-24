/* global console, document,$*/
/*disallowMultipleLineBreaks: true*/
/*jslint devel: true, evil: true, plusplus: true */
/*eslint no-console: off */
 /*eslint no-unused-vars: off, no-unused-labels: off*/

$(window).on('load', function () { 'use strict';
                                  
    new WOW().init();
              
    let
    
    navbarButton = $('#nav-button'),
    
    navBar = $('header').find('.navbar'),
    
    mobilMenu = $('.mobil-menu'),
                
    gridItems = $('.grid-item'),
        
    li = $('.gallery').find('ul').find('li'),
        
    grid = $('.grid'),
        
    viewBox = $('.gallery').find('.view-box'),
        
    viewBoxOverLay = $('.view-box').find('.overlay'),
        
    viewBoxImg = $('.view-box').find('img'),
        
    galleryGrid = $('.gallery').find('.grid-item'),
        
    closeIcon = $('.close-icon'),
        
    rightIcon = $('.right-icon'),
        
    leftIcon = $('.left-icon'),
        
    loadingScreen = $('.loading-layer');

                                  
     
     if ($(window).width() <= 767) {
         
         $('.land-page').find('.lamp').removeClass('tallest');
         $('.land-page').find('.screen').addClass('tallest');
         console.log('hi');
     }
                                  
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
                                  
    function viewImg() {
        
        let imgInside = $('.cloned').find('img'),
            bg = $(imgInside).attr('src');

        bg = bg.replace('url(', '').replace(')', '').replace(/"/g, '');
        
        $(viewBoxImg).attr('src', bg);
        
        $(viewBox).addClass('d-flex');
        
        
     }
                    
    $(galleryGrid).on('click', function () {

        $(galleryGrid).removeClass('cloned');
        
        $(this).addClass('cloned');
        
        viewImg();
        
        
    });

                                  
   $(viewBoxOverLay).on('click', function () {
           
        $(viewBox).removeClass('d-flex');
           
        $(galleryGrid).removeClass('cloned');
       
       
       
    });                           
                                  
    $(closeIcon).on('click', function () {
        
        $(viewBox).removeClass('d-flex');
        
        $(galleryGrid).removeClass('cloned');
        
        
        
    });


    $(rightIcon).on('click', function () {
        
        let cloned = $('.cloned'),
            nextCloned = cloned.next();
        
        if ($(nextCloned).is('.grid-item')) {
            
            $(cloned).removeClass('cloned');

            $(nextCloned).addClass('cloned');

            viewImg();
            
        } else {
            
            $(galleryGrid).removeClass('cloned');
            
            $(galleryGrid).eq(0).addClass('cloned');
            
            viewImg();
            
        }
        
        
    });


    $(leftIcon).on('click', function () {
        
        let cloned = $('.cloned'),
            prevCloned = cloned.prev();
        
        if ($(prevCloned).is('.grid-item')) {
            
            $(cloned).removeClass('cloned');
            
            $(prevCloned).addClass('cloned');
            
            viewImg();
            
        } else {
            
            let lastGalleryGrid = $('.gallery .grid-item:last-of-type');
            
            $(galleryGrid).removeClass('cloned');
            
            $(lastGalleryGrid).addClass('cloned');
            
            viewImg();
        }
        
        
    });


    $('body').on('keyup', function (e) {
        
        let key = e.which;
        
        if (key === 27) { $(closeIcon).click();  }
        
            else if (key === 37) { $(leftIcon).click();   }
        
            else if (key === 39) { $(rightIcon).click();  }
        
        
        
    });
                                  
    $(grid).masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });
                                  
    $(li).on('click', function () {

        $(this).addClass('active').siblings().removeClass('active');
        
        if($(this).is(':first-of-type')) {
            
            $(gridItems).removeClass('d-none');
            
        }
            else {
            
                let dataOption = $('.gallery ul li.active').attr('data-option');
                
                for (let i = 0; i < $(gridItems).length; i++ ){
                    
                    if ($(gridItems[i]).attr('data-type') !== dataOption) {
                        
                        $(gridItems[i]).addClass('d-none');
                        
                    }
                        else { $(gridItems[i]).removeClass('d-none'); }
                }
                
            }

        
        $(grid).masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });
        
        
        
    });

    loadingScreen.fadeOut(1000);

             
    
                          });
