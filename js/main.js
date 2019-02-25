$(window).scroll(function() {
var y_scroll_pos = window.pageYOffset;
var scroll_pos_test = 10;


if(y_scroll_pos > scroll_pos_test) {
   $("#nav_bar").css("background-color","#262626");
   $("#nav_bar").css("box-shadow","0px 0px 5px 1px #262626");
}
else
{
   $("#nav_bar").css("background-color","transparent");
   $("#nav_bar").css("box-shadow","none");
}
});

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top-58
        }, 1000);
    }
});


$(window).scroll(function(){
	$('#timeline p').each(function(){
    	var scrollTop     = $(window).scrollTop(),
        	elementOffset = $(this).offset().top,
       		distance      = (elementOffset - scrollTop),
			    windowHeight  = $(window).height(),
			    breakPoint    = windowHeight*0.9;

			if(distance > breakPoint) {
				$(this).addClass("more-padding");
			}  if(distance < breakPoint) {
				$(this).removeClass("more-padding");
			}
	});
});


$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });
