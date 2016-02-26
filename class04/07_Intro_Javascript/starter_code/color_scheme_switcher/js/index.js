
document.getElementById('grayButton').onclick=switchGray; 
document.getElementById('whiteButton').onclick=switchWhite;


function switchGray(){
	document.body.style.backgroundColor='gray';
	document.body.style.color='white';
	document.body.style.fontFamily='serif';
}

function switchWhite(){
	document.body.style.backgroundColor='white';
	document.body.style.color='black';
	document.body.style.fontFamily='sans-serif';
}