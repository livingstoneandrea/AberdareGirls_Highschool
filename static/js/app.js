(function ($) {

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

    //dynamic modal control
    const readMoreLinks = document.querySelectorAll('.readmore')
    var modal = document.getElementById('_modal');
    let image;
    let text_info;
    readMoreLinks.forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            let data_extras = e.currentTarget.getAttribute('data-extra_info');
            console.log(`data extra_info ${e.currentTarget.getAttribute('data-extra_info')}`);
            switch (data_extras) {
                case "about":
                    image = ""
                    text_info = "This content is being worked on, it will be up soon"

                    document.querySelector("._modal__contents > .wrapper > p").innerHTML = text_info;
                    if (!modal.classList.contains("is-visible"))
                        modal.classList.add("is-visible");

                    break;
                case "learning_progression":
                    image = ""
                    text_info = "The content of learning progression is being developed, will notify you soon, "

                    document.querySelector("._modal__contents > .wrapper > p").innerHTML = text_info;
                    if (!modal.classList.contains("is-visible"))
                        modal.classList.add("is-visible");

                    break;
                case "event_1":
                    image = ""
                    text_info = "The content of event 1 is being developed, will notify you soon"

                    document.querySelector("._modal__contents > .wrapper > p").innerHTML = text_info;
                    if (!modal.classList.contains("is-visible"))
                        modal.classList.add("is-visible");
                    break;
                case "event_2":
                    image = ""
                    text_info = "The content of event 2 is being developed, will notify you soon"

                    document.querySelector("._modal__contents > .wrapper > p").innerHTML = text_info;
                    if (!modal.classList.contains("is-visible"))
                        modal.classList.add("is-visible");
                    break;
                case "event_3":
                    image = ""
                    text_info = "The content of event 3 is being developed, will notify you soon"

                    document.querySelector("._modal__contents > .wrapper > p").innerHTML = text_info;
                    if (!modal.classList.contains("is-visible"))
                        modal.classList.add("is-visible");
                    break;
                default:
                   image = ""
                    text_info = "Oops seemed you clicked on wrong info"

                    document.querySelector("._modal__contents > .wrapper > p").innerHTML = text_info;
                    if (!modal.classList.contains("is-visible"))
                        modal.classList.add("is-visible");
                    
             }
        })
    });

    //close the modal
    var span = document.getElementsByClassName("_modal-header__close-btn")[0];
    span.onclick = function() {
        modal.classList.remove("is-visible")
        //clear modal data
        // $('.modal-body').html(' ');
        // window.location.reload(true);


    }

    //  outside click of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
           modal.classList.remove("is-visible")
        }
    }
    

})(jQuery);