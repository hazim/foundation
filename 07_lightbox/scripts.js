$('.photos a').on('click', function (event) {
    $('.modal').fadeIn(500);

    let currentImage = $(this).html();
    $('.modal-content').html(currentImage)
    // $('.modal-content').
    console.log(currentImage);

    event.preventDefault();
})

$('.modal-close, .modal-background, .modal-content').on('click', function (event) {
    $('.modal').fadeOut(500);

    event.preventDefault();
})
