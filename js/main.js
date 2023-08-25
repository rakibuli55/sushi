(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
(function ($) {
    "use strict";
    $(window).on('load', function(){
        //===== Prealoder
        $("#preloader").delay(1800).fadeOut("slow");
    });

    $(document).ready(function () {
        //05. sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        //===== Back to top

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });

        // Hamburger-menu
        $('.hamburger-menu, .close_icon').on('click', function () {
            $('.ofcavas-menu').toggleClass('current');
        });
        $('.hamburger-menu-2').on('click', function () {
            $('.mon-complete-area-1 .link-box').addClass('current');
            $('body.opacity').addClass('current');
        });
        $('.mon-close-area').on('click', function () {
            $('.mon-complete-area-1 .link-box').removeClass('current');
        });

        $('.owl-carousel.secure_slide').owlCarousel({
            loop: false,
            margin: 20,
            nav: true,
            navText: [
                '<img src="img/right_arrow.svg" alt="">',
                '<img src="img/right_arrow.svg" alt="">'
            ],
            dots: false,
            items: 1,
        });

        $('.owl-carousel.box_home_slider').owlCarousel({
            loop: false,
            margin: 20,
            stagePadding: 2,
            nav: true,
            navText: [
                '<img src="img/right_arrow3.svg" alt="">',
                '<img src="img/right_arrow3.svg" alt="">'
            ],
            dots: false,
            responsive: {
                0: {
                    items:2,
                    margin: 20,
                },
                576: {
                    items:2
                },
                768: {
                    items:3
                },
                992: {
                    items:4
                }
            }
        }); 
        $('.owl-carousel.slider-cart').owlCarousel({
            loop: false,
            margin: 40,
            nav:true,
            navText: [
                '<img src="img/right_arrow3.svg" alt="">',
                '<img src="img/right_arrow3.svg" alt="">'
            ],
            dots: false,
            responsive: {
                0: {
                    items:1,
                    margin: 20,
                    stagePadding:60
                },
                490: {
                    items:2
                },
                576: {
                    items:2
                },
                768: {
                    items:3
                },
                992: {
                    items:3
                }
            }
        });  

        $('.owl-carousel.mobile_slider').owlCarousel({
            loop: false,
            margin: 15,
            nav: true,
            navText: [
                '<img src="img/right_arrow_white.svg" alt="">',
                '<img src="img/right_arrow_white.svg" alt="">'
            ],
            dots: false,
            items: 2,        
        });
    });
     /*----------------------------
        nice number
    ----------------------------*/
    $('input[type="number"]').niceNumber();

})(jQuery);