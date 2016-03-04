$(document).ready(function() {
  console.log("hello, it's me");
  var comparison;

function compare(){
	var a = Number($('#a').val());
	var b = Number($('#b').val());

	if (a < b){
		comparison = '<';
		console.log("<")
	}

	else if (a > b){
		comparison = '>';
		console.log(">")
	}

	else if (a === b){
		comparison = '===';
		console.log("===")
	}

	else{
		comparison = "N/A";
		console.log("N/A")
	}

	console.log(comparison);
	$('#comparison').text(comparison);
}



$("#submit").click(compare);



});