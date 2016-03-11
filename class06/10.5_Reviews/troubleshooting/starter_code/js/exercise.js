$(document).ready(function(){
	console.log("hello")


    $(".breedContainer .toggler").click(function(){
        $(this).parent().toggleClass("breedContainerLG");
        if($(this).attr('src') == "img/240px-Gnome-window-close.svg.png"){
            $(this).attr('src',"img/48px-Gnome-list-add.svg.png");
        }else{
            $(this).attr('src',"img/240px-Gnome-window-close.svg.png");
        }
    });
});