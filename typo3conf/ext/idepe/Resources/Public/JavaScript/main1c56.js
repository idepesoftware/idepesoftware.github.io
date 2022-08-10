var App = function () {


    function initBootstrap() {

        $('[data-toggle="tooltip"]').tooltip();


        //$('.nav-tabs').tabCollapse();

        if ($('.navbar-onepage').length > 0) {
            $('body').scrollspy({ target: $('.navbar-onepage'), offset: ($('#nav-primary').height()+21) });
        }

    }

    function initLightbox() {


        /* fix for missing title attribute in lightbox a tags */
        $('.lightbox').each(function () {
            if (this.title === '') {
                $(this).attr('title', $("img", $(this)).attr('title'));
            }
        }).fancybox();

    }

    function initHeader() {
        jQuery(window).scroll(function () {
            if (jQuery(window).scrollTop() > 100) {
                jQuery('#nav-primary').addClass('navbar-shrinked');
            } else {
                jQuery('#nav-primary').removeClass('navbar-shrinked');
            }
        });
    }

    function initParallaxBg() {
        jQuery('.parallaxBg').parallax("50%", 0.3);
    }

    function initMmenu() {


        $('#sidemenu').mmenu({
            extensions: ['effect-slide-menu', 'pageshadow'],
            navbar: {
                title: document.head.querySelector("[name=navtitle]").content
            },
            navbars: [{
                position: 'top'
            }, {
                position: 'bottom',
                height: 2,
                content: ['<div id="mobile-footer"></div>']
            }]
        }, {
            classNames: {
                selected: 'current'
            }
        });

        /* change fixed position while opening the mmenu */
        var api = $('#sidemenu').data('mmenu');
        api.bind('opening', function () {
            var scrollTopPosition = $(window).scrollTop();
            $('.fixed-top').css('position', 'absolute').css('top', scrollTopPosition + 'px');
        });
        api.bind('closed', function () {
            $('.fixed-top').css('position', 'fixed').css('top', '0px');
        });

        $('#mobile-footer').html($('#nav-mobile-footer').html());

    }

    function initFlexslider() {

        /* flexslider im hero */
        $('.hero .flexslider').flexslider({
            'controlNav': false,
            'selector': '.slides > div'
        });

    }

    function initEqualHeight() {

        $('h2').matchHeight({
            byRow: true,
            property: 'min-height'
        });
        $('h3').matchHeight({
            byRow: true,
            property: 'min-height'
        });
    }

    function initSmoothScroll() {

        // Add smooth scrolling on all links inside the navbar
        $('.nav-onepage a, #c23 a, #c34 a').on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top-($('#nav-primary').height()+20)
                }, 800, function(){
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    //window.location.hash = hash;
                });
            }
        });
        
        $('.page-onepage .navbar-brand a').on('click', function(event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 800, function(){

            });
        });
        
        $('.nav-onepage a').on('click', function(event) {
            $(this).closest('.navbar-collapse.show').collapse('hide');
        });

    }
    
    function initSlick() {
        $('#carousel1').slick({ nextArrow: '<i class="fa fa-angle-right slick-arrow-nextArrow"></i>', prevArrow: '<i class="fa fa-angle-left slick-arrow-prevArrow"></i>'});
        $('#carousel1').slick('setOption', 'dots', true, true);
        $('#carousel1').slick('setOption', 'dotsClass', 'js-pagination u-carousel-indicators-v30 g-pos-abs g-top-0 mb-4 mt-4', true);
        $('#carousel1').slick('setOption', 'customPaging', function (slider, i) {
        var title = $(slider.$slides[i]).data('title');

        return '<i class="u-dot-line-v1 g-brd-gray-light-v2--before g-brd-gray-light-v2--after g-mb-15--sm"><span class="u-dot-line-v1__inner g-bg-white g-bg-primary--before g-brd-gray-light-v2 g-brd-primary--active g-transition--ease-in g-transition-0_2"></span></i><span class="hidden-sm-down g-color-black g-font-size-15">' + title + '</span>';
        }, true);
    }
        
    return {
        init: function () {

            initBootstrap();
            initLightbox();
            initHeader();
            $.cookieBar();
            initFlexslider();
            initParallaxBg();
            initEqualHeight();
            initSmoothScroll();
            initSlick();
            
        }
    }
}();


jQuery(document).ready(function () {


    App.init();
});

