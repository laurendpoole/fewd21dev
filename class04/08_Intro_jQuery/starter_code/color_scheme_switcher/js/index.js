// document.getElementById('grayButton').onclick = switchGray;
// document.getElementById('whiteButton').onclick = switchWhite;

// function switchGray() {
//   document.body.style.backgroundColor = 'gray';
//  document.body.style.color = 'white';
// }

// function switchWhite() {
//   document.body.style.backgroundColor = 'white';
//   document.body.style.color = 'black';
// }

/* Examples of getting elements

	element: $("p").click();
	id: $("#id").click();
	class: $(".class").click(); */

//$ is shorthand for jQuery, you can use both but other code may also use $ for shorthand so keep that in mind

$( document ).ready(function() { /*makes sure document is loaded before jquery begins*/
   // console.log( "helllllllooooooo, it's me" );

	$('#grayButton').click(switchGray);

		function switchGray(){
			$('body').css('background-color', 'gray') 
					 .css('color', 'white');
					 console.log("I'm gray!") /*helps when looking for errors to put a console log in*/
		}

	$('#whiteButton').click(switchWhite);

		function switchWhite(){
			$('body').css('background-color', 'white') 
					 .css('color', 'black');
					  console.log("I'm white!")
		}


});






















