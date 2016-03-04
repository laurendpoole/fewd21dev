var light = 'on';
function switchLights() {
	if (light == 'on'){
		light = 'off';
		$('body').addClass('dark');
	} else {
		light = 'on';
		$('body').removeClass('dark');
	}
}


$(document).ready(function(){

	$('#light_switch').click(switchLights);

});