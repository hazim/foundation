$("a.menu-toggle").on('click', function (event) {
    // console.log('Hello');
    $('section.menu').toggleClass('show');
    $('img.eye-icon').toggleClass('revel');

    event.preventDefault();
})
