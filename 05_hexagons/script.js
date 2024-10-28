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
