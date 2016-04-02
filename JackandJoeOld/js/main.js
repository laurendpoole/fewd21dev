$(document).ready(function() {
	console.log("hellooo, it's me")

		$(".fancybox").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		padding: 0 // remove white border
	});

    var mySwiper = new Swiper ('.swiper-container', {
       	pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    })   

    // var mn = $(".navigation");

    // $(window).scroll(function(){
    // 	if($(this).scrollTop()> 700){
    // 		mn.addClass("main-nav-sticky");
    // 	}
    // 	else{
    // 		mn.removeClass("main-nav-sticky");
    // 	}

    // });


var stickyNavTop = $('.navigation').offset().top;
 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
if (scrollTop > stickyNavTop) { 
    $('.navigation').addClass('sticky');
} else {
    $('.navigation').removeClass('sticky'); 
}
};
 
stickyNav();
 
$(window).scroll(function() {
    stickyNav();
});



});

	