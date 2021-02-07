
new WOW().init();
console.log('here!');

$(document).ready(function() {
    const navOffset = $('#menu').offset().top;
    const menuPhoneNumber = $('#menu-phoneNumber').offset().top
    $(window).scroll(function(){
        const scrolled = $(this).scrollTop();
        if (scrolled > navOffset) {
            $('#nav').addClass('menu-fixed');
            $('#menuPhone').addClass('phone-fixed')
        } else if (scrolled < navOffset) {
            $('#nav').removeClass('menu-fixed');
            $('#menuPhone').removeClass('phone-fixed');
        } 
    });
})

