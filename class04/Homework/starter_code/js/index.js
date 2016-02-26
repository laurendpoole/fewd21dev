$( document ).ready(function() { 
    console.log( "helllllllooooooo, it's me" );


// function togglereadmore(){
// 	$('.readmore').slideToggle();
// }

// $('#show-this-on-click').hide();
// //$('.readless hide').hide();

// $('#show-this-on-click').click(togglereadmore).show();

// function toggleAnswer1(){
// 	$('#show-this-on-click').slideDown();

// $('#show-this-on-click').hide();
// $('.readmore').click(toggleAnswer1);

// function reveal(){
// 	$('.learnmore').click();

// }

// 	$('#learnmoretext').slideDown();

//  $('.readmore').click(function) 

// $('.readmore').click()

//   $('#show-this-on-click').slideDown();
//         $('.readmore').hide();
//         $('.readless').show(); 

// function reveal(){
// 	$('#show-this-on-click').slideDown();
// }


// $('.readmore').click(function){


// 		$('#show-this-on-click').slideDown();
//         $('.readmore').hide();
//         $('.readless').show();


//   });

// function click('.readmore'){
// 		$('#show-this-on-click').slideDown();
//          $('.readmore').hide();
//          $('.readless').show();
// });

/*I thought that I new this when I started but I was having 
trouble having the click do all of the things I wanted at once. 
I understand how this was done after seeing the solution 
but I was having trouble doing it myself. I think my last attempt 
was closest*/


 $('.readmore').click(function (e) {
         e.preventDefault();
         $('#show-this-on-click').slideDown();
         $('.readmore').hide();
         $('.readless').show();
     });

 $('.readless').click(function (e) {
         e.preventDefault();
         jQuery('#show-this-on-click').slideUp();
         jQuery('.readless').hide();
         jQuery('.readmore').show();
     });

     $('.learnmore').click(function (e) {
         e.preventDefault();
         jQuery('#learnmoretext').slideDown();
         jQuery('.learnmore').hide();
     });

});







