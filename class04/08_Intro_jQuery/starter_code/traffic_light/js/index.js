//Implement the red light using jQuery. Don't forget to add the script tags.



$( document ).ready(function() { /*makes sure document is loaded before jquery begins*/
    console.log( "helllllllooooooo, it's me" );

$('#stopButton').click(illuminateRed);

		function illuminateRed(){
			clearLights();
			$('#stopLight').css ('background-color', 'red') ;
					 console.log("I'm red"); /*helps when looking for errors to put a console log in*/
		}


$('#slowButton').click(illuminateYellow);

		function illuminateYellow(){
			clearLights();
			$('#slowLight').css ('background-color', 'yellow') ;
					 console.log("I'm yellow"); /*helps when looking for errors to put a console log in*/
		}



$('#goButton').click(illuminateGreen);

		function illuminateGreen(){
			clearLights();
			$('#goLight').css ('background-color', 'green') ;
					 console.log("I'm green"); /*helps when looking for errors to put a console log in*/
		}


function clearLights(){
	$('.bulb').css('background-color', 'black');
//	$('#stopLight, #slowLight, #goLight').css('background-color', 'black');


	}


//   function ('stopLight').style.backgroundColor = "black";
//   document.getElementById('slowLight').style.backgroundColor = "black";
//   document.getElementById('goLight').style.backgroundColor = "black";
// }





});
