$('.show-filters').on('click', function () {
    if ($('.filter-list').is(':visible')){
        // 1. Slide .filter-list up
        $('.filter-list').slideUp();
        // 2. change text to 'Show filters'
        $('.show-filters').text('Hide filters');
    } else {
        // 3. Slide .filter-list down
        $('.filter-list').slideDown();
        // 4. change text to 'Hide filters'
        $('.show-filters').text('Show filters');
    }


    console.log('What, what??');

    return false;
})

$('.filter-list a').on('click', function () {

    // 1. we want to extract the keyword in order for our filter to work
    // console.log($(this).attr('data-filter'));
    let filter = $(this).attr('data-filter');

    // 2. we want to query for the keyword that we extracted
    // a. make all the products disappear in order to reset what we can see. CSS display on .product set to none.
    // b. make only the filtered ones appear.
    $('.product').hide();
    $(filter).show();

    $('.filter-list a').removeClass('selected');
    $(this).addClass('selected');

    return false;
})
