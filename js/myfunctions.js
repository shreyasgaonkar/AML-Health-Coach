$(function () {

    // Visit Home
    if ($('body').hasClass('Home') && !$.cookie('seen')) {
        $.cookie('seen', 'step1', { expires: 120, path: '/' });
        console.log($.cookie('seen'));
    }

    // Visit Inner Page

    if ($.cookie('seen') === 'step1' && !$('body').hasClass('Home')) {
        $.cookie('seen', 'step2', { expires: 120, path: '/' });
        console.log($.cookie('seen'));
    }


    // Visit Home again > modal

    if ($.cookie('seen') === 'step2' && $('body').hasClass('Home')) {
        $('.signup-modal').addClass('is-open');
        console.log("Step 3");
    }

    //closing the modal

    $('.signup-modal .close').click(function () {
        $('.signup-modal').removeClass('is-open');
        $.cookie('seen', 'complete', { expires: 120, path: '/' });
        console.log($.cookie('seen'));
    });

    //closing with text
    $('.signup-modal .close-modal').click(function () {
        $('.signup-modal').removeClass('is-open');
        $.cookie('seen', 'complete', { expires: 120, path: '/' });
        console.log($.cookie('seen'));
    });
});
