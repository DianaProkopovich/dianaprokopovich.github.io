$('[data-fancybox="gallery"]').fancybox({
    // Options will go here
    loop: true,
});

new WOW().init();
console.log('here!');

$(document).ready(function() {
    const navOffset = $('#menu').offset().top;
    const socialsOffset = $('#socials').offset().top
    $(window).scroll(function(){
        const scrolled = $(this).scrollTop();
        if (scrolled > navOffset) {
            $('#nav').addClass('menu-fixed');
            $('#socials-wrapper').addClass('socials-fixed')
        } else if (scrolled < navOffset) {
            $('#nav').removeClass('menu-fixed');
            $('#socials-wrapper').removeClass('socials-fixed');
        } 
    });
})
