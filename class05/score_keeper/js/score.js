$(document).ready(function() { 
console.log("hello, it's me");

var total = 0;

$("#add5").click(add5);
$("#add10").click(add10);
$("#sub1").click(sub1);
$("#mul5").click(mul5);
$("#div5").click(div5);
$("#zero").click(zero);


	function add5(){
		total = total + 5;
		$('#result').html(total);
		console.log(total);
	}

	function add10(){
		total = total + 10;
		$('#result').html(total);
		console.log(total);
	}

	function sub1(){
		total = total - 1;
		$('#result').html(total);
		console.log(total);
	}

	function mul5(){
		total = total * 5;
		$('#result').html(total);
		console.log(total);
	}

		function div5(){
		total = total / 5;
		$('#result').html(total);
		console.log(total);
	}

	function zero(){
		total = 0;
		$('#result').html(total);
		console.log(total);
	}




});