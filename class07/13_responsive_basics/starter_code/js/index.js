//when you click this select nav and change display property 


$(document).ready(function(){

	$("header span").click(function(){
		$("body").toggleClass("active");

	});
});