$(function() {
$("area[class=nantesArea]").hover(function(){
	$("#"+$(this).attr("name")).css("display", "block");
	$("#district6").css("display", "none");

	},function(){
	$("#"+$(this).attr("name")).css("display", "none");
	$("#district6").css("display", "block");
});
});

