$("area[class=nantesArea]").hover(function(){
	$("#"+$(this).attr("name")).css("display", "block");
	$("#district6").css("display", "none");

	},function(){
	$("#"+$(this).attr("name")).css("display", "none");
	$("#district6").css("display", "block");
});

$("area[class=islandArea]").hover(function(){
	$("#"+$(this).attr("name")).css("display", "block");
	$("#island1").css("display", "none");

	},function(){
	$("#"+$(this).attr("name")).css("display", "none");
	$("#island1").css("display", "block");
});

$("#nantesIsland").children(":first").click(function(){
	if($(this).attr("src") == "image/plus.png") {
		$("#nantesIslandMap").css("display", "block");
		$(this).attr("src", "image/minus.png")
		//$("body").css("opacity", "0.85");
	} else {
		$("#nantesIslandMap").css("display", "none");
		$(this).attr("src", "image/plus.png");
	}
});

