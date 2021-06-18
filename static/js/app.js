(function($) {

    "use strict";
    
//     var nav_offset_top = $('header').height() + 50;
//     function navbarFixed() {
//         if ($('#app-header').length) {
//             $(window).scroll(function () {
//                 var scroll = $(window).scrollTop();
//                 if (scroll >= nav_offset_top) {
//                     $('#app-header').addClass('navbar_fixed');
//                 } else {
//                     $('#app-header').removeClass('navbar_fixed');
//                 }
//             });
//         }
//     }
//    navbarFixed();


    document.querySelector('#navbar-toggler').addEventListener('click', (e) => {
        e.preventDefault();
        if (!$('#app-header').hasClass('navbar_fixed')) {
            $('#app-header').addClass('navbar_fixed')
        }
        $('.navbar-menu, .hamburger').toggleClass('is-active');

    });
    $('.navbar-item').on('click', (e) => {
        $('.navbar-menu, .hamburger').toggleClass('is-active');
    });

})(jQuery);