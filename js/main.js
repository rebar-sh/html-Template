$(document).ready(function () {
    //Start Document Ready Function

    //Menu
    $('#nav').slicknav();

    // scroll nav
    $("#header-area").sticky({ topSpacing: 0 });

    // scroll up
    $.scrollUp();


    //Slider
    $('.bxslider').bxSlider();






    $('.service-area').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });




    $('.posts-area').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    $('.testimonial-area').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.client-area').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });

    //End Docmument Ready Function
});