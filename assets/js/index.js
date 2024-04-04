// header

// $(window).scroll(function () {

// 	let position = $(this).scrollTop();
// 	if (position >= 1) {
// 		$('#header').addClass('navbar-scroll');
// 	} else {
// 		$('#header').removeClass('navbar-scroll');
// 	}

// })

$(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 1) {
        if (!$('#header').hasClass('navbar-scroll') && $('#header').css('top') === '0px') {
            $('#header').css({ opacity: 0, top: '0px' })
                .stop()
                .animate({ opacity: 1, top: '0px' }, 300); // Fade-in animation when adding class
            $('#header').addClass('navbar-scroll');
        }
    } else {
        $('#header').stop().animate({ top: '0px' }, 300, function() {
            $(this).removeClass('navbar-scroll');
        }); // Animation when removing class
    }
});
// main
// hero owl carousel
        $(document).ready(function(){
        $('.hero-owl').owlCarousel({
           loop:true,
           margin:0,
           responsiveClass:true,
           dots:false,
		   autoplay:true,
		   animateOut: 'fadeOut',
           responsive:{
               0:{
                   items:1,
                   nav:false
               },
               600:{
                   items:1,
                   nav:false
               },
               1200:{
                   items:1,
                   nav:true,
                   loop:true
               }
           }
       })
       $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
        $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
});

// special dish owl
$(document).ready(function(){
$('.special-owl').owlCarousel({
    loop:false,
    margin:10,
    responsiveClass:true,
    dots:false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1200:{
            items:3,
            nav:true,
            loop:false
        }
    }
})
$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
});

// testimonial owl

$(document).ready(function(){
    $('.testimonial-owl').owlCarousel({
        loop:false,
        margin:10,
        responsiveClass:true,
        dots:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1200:{
                items:3,
                loop:false,
                dots:true,
            }
        }
    })
    
    });
    
// copyrights footer
// Get the current year
var currentYear = new Date().getFullYear();
// Display the current year in the copyright notice
document.getElementById("copyrightYear").innerHTML = currentYear;