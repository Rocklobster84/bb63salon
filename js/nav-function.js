/*----------------------------------------------------*/
/* Quote Loop
------------------------------------------------------ */

function fade($ele) {
    $ele.fadeIn(1000).delay(3000).fadeOut(1000, function() {
        var $next = $(this).next('.quote');
        fade($next.length > 0 ? $next : $(this).parent().children().first());
   });
}
fade($('.quoteLoop > .quote').first());


/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ */

function updateStickyNav() {
    $('.main_nav').toggleClass('sticky', $(window).scrollTop() > 40);
}
$(window).scroll(updateStickyNav);
updateStickyNav();

// Mobile Navigation
function setMobileNav(open) {
    $('.main_nav').toggleClass('open-nav', open);
    $('.mobile-toggle').attr('aria-expanded', open ? 'true' : 'false');
}

$('.mobile-toggle').click(function() {
    setMobileNav(!$('.main_nav').hasClass('open-nav'));
});

$('.main_nav a').click(function() {
    setMobileNav(false);
});


TweenMax.staggerFrom(".heading", 0.8, {opacity: 0, y: 20, delay: 0.2}, 0.4);