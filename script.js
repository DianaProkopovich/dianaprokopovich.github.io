$('[data-fancybox="gallery"]').fancybox({
    // Options will go here
    loop: true,
});

new WOW().init();
console.log('here!');

//отправка на почту
document.addEventListener('DOMContentLoaded', function (){
    const form = document.getElementById('feedbackForm');
    form.addEventListener('submit', formsend);
})