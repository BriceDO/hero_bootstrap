// Preview img

// Carousel de texte

$(document).ready(function() {
    $('.carousel').carousel({
        interval: 2500,
        pause: 'null'
    })
})

// navbar animation
    // quand on va scroller de 30px vers le bas, la classe opaque est activée et réduit la navbar

$(window).scroll(function() {
    if($(this).scrollTop() > 30) {
        $('.navbar').addClass('opaque');
    } else {
        $('.navbar').removeClass('opaque');
    }
})