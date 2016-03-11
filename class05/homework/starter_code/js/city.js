$(document).ready(function() {
	console.log("hello, it's me");


    $("#submit-btn").click(function(){


	event.preventDefault();

	var city = $('#city-type').val();
        $('#city-type').val('');


    city = city.toLowerCase().trim();


//NYC
	 if(city == 'new york' || city == 'new york city' || city == 'nyc') {
      $('body').attr('class','nyc');
      console.log('nyc');
    }


//SF
	else if(city == "san francisco" || city == "sf" || city == "bay area" ){
        $('body').attr('class','SF');
        console.log('sf');

     }


//LA
	else if(city == "los angeles" || city == "la" || city == "lax" ){
        $('body').attr('class','la');
        console.log('lax');

     }


//ATX
	else if(city == "austin" || city == "atx" ){
        $('body').attr('class','austin');
        console.log('atx');

     }


//SYD
	else if(city == "sydney" || city == "syd" ){
        $('body').attr('class','sydney');
        console.log('syd');

     }

	});

    });