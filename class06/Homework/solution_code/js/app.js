//setting up the city variables in an array
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

//wait for the DOM elements to load before executing
$(document).ready(function() {
  
// insert city type at the end. This Part is still confusing for me
  for(i=0;i<cities.length;i++) {
    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }
 
  //change city type to selected element in the form
  $('form').on('change', '#city-type',function(){
    
    //get the value of the #city-type selection
    var city = $('#city-type').val();
    
    // if the user selects nyc, change the css class to nyc
    if(city == 'NYC') {
      $('body').attr('class','nyc');
    }
      // if the user selects sf, change the css class to sf
      $('body').attr('class','sf');
    }
    
    // if the user selects la, change the css class to la
    else if (city == 'LA') {
      $('body').attr('class','la');
    }
    
    // if the user selects atx, change the css class to austin
    else if (city == 'ATX') {
      $('body').attr('class','austin');
    }
    
    // if the user selects syd, change the css class to sydney
    else if (city == 'SYD') {
      $('body').attr('class','sydney');
    }
  });
});