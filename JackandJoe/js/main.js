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

});

	