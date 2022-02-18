// Función para el icono del menú
jQuery('document').ready(function ($) {

    var menuBtn = $('.menu-icon');
    menu = $('.navigation ul');

    menuBtn.click(function () {

        if (menu.hasClass('show')) {
            menu.removeClass('show')
        } else {
            menu.addClass('show');
        }

    });
 
// Animaciones Scroll
    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("abajo",window.scrollY>0);
    });

    window.scrollR = ScrollReveal();

        scrollR.reveal('.nav', {
            duration: 3000,
            origin: 'bottom',
            distance: '-100px'
        });

        scrollR.reveal('.nav-l', {
            duration: 2000
        });

        scrollR.reveal('.inf', {
            duration: 4000,
            origin: 'left',
            distance: '100px'
        });

        scrollR.reveal('.a-exp', {
            duration: 4000,
            origin: 'right',
            distance: '100px'
        });

        scrollR.reveal('.hab', {
            duration: 4000,
            origin: 'left',
            distance: '100px'
        });

        scrollR.reveal('.hab-p', {
            duration: 4000,
            origin: 'right',
            distance: '100px'
        });

        scrollR.reveal('.sm', {
            duration: 4000,
            origin: 'left',
            distance: '100px'
        });

        scrollR.reveal('.edu', {
            duration: 4000,
            origin: 'right',
            distance: '100px'
        });

        scrollR.reveal('.exp', {
            duration: 4000,
            origin: 'left',
            distance: '100px'
        });

        // scrollR.reveal('.img', {
        //     duration: 3500,
        //     rotate: {
        //         x: 1,
        //         y: 180,
        //     }
        // });

});