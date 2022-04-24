/* global window, console, document*/
/*disallowMultipleLineBreaks: true*/
/*jslint devel: true, evil: true, plusplus: true */
/*eslint no-console: off */
 /*eslint no-unused-vars: off, no-unused-labels: off*/

$(window).on('load', function () { 'use strict';
    
        let 
        headerImgs = $('.land-page').find('.img-box'),
            
        headerHeadings = $('.land-page').find('.heading-box'),
            
        landingPageImages = $('.land-page').find('img'),
            
        headerHeight = $('.land-page').innerHeight(),
            
        headerShadow = $('.land-page').find('.shadow'),
            
        tallestImg = $('.img-box').find('.tallest'),
            
        headerHeadingsMargin = parseInt( $(headerHeadings).css('margin-bottom') );
        
        // animate landing page images
        $(landingPageImages).addClass('animated');
                                  
        // setting img-box height
        headerImgs.height($(tallestImg).height() + headerHeadings.height());
        
        // show headings
        headerHeadings.delay(300).animate({opacity: 1}, 900);
        
        // aetting top offset of headings
        headerHeadings.offset({
            top: 
            $(tallestImg).offset().top - $(headerHeadings).outerHeight() - headerHeadingsMargin
        });
        
        // scroll parallex effect
        window.addEventListener('scroll', function () {
            let pageScroll = $(window).scrollTop();

            if (pageScroll <= 700) {
                headerImgs.css("transform", `translateY(${pageScroll * -0.3}px)`);
                headerHeadings.css("opacity", - pageScroll / (headerHeight / 2) + 1);

                headerHeadings.css("transform", `translate(-50%, ${pageScroll * 0.1}px)`);

                headerShadow.height(pageScroll * .5);   
                }
            
        });
});
              
    


