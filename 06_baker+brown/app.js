$('.menu-toggle').on('click', function (event) {
    // console.log('Working');
    $('.menu').toggleClass('hidde');
    event.preventDefault();
})

$('.menu a').on('click', function (event) {
    event.preventDefault();
})
