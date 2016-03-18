//when you click this select nav and change display property 


$(document).ready(function(){

console.log("hello");

	$("header span").click(function(){
		$("body").toggleClass("active");

	});
});