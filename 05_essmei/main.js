$('.show-filters').on('click', function () {

    // $('.filters-list').toggle(200)

    if ($('.filters-list').is(':visible')) {
        $('.filters-list').slideUp();
        $('.show-filters').text('Show filters');
    } else {
        $('.filters-list').slideDown();
        $('.show-filters').text('Hide filters');
    }

    return false;

})


$('.filters-list a').on('click', function() {

    // console.log($(this).data('filter'));
    let filter = $(this).attr('data-filter');


    $('.product').hide();
    $(filter).show();


    $('.filters-list a').removeClass('selected');
    $(this).addClass('selected');

    return false;

})
