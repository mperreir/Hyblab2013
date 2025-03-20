function selectName(name) {
	switch(name) {
		case "district1":
			return "Sainte-Anne ";
		case "district2":
			return "République";
		case "district3":
			return "Beaulieu-Mangin";
		case "district4":
			return "Ile Beaulieu";
	}
}

var selected="district1";
$(document).ready(function() {


    //fancybox sur interview
    //http://fancyapps.com/fancybox/
     $('.fancybox').fancybox({
         'autoSize': false,
         'width': '70%',
         'height': '70%'
    });


	$('.hiddenMap,.hiddenMapCat').hide();
	$(".district1,#district1age").show();
	$("#namedistrict").html(selectName(selected));
	$("area[class=nantesArea]").click(function(){
		$("#namedistrict").html(selectName($(this).attr("name")));
		$('.hiddenMap').hide();
		$("."+$(this).attr("name")).css("display", "block");
		selected=$(this).attr("name");
		$('.hiddenMapCat').hide();
		$("#"+selected+"age").css("display", "block");
		//$("#district6").css("display", "none");

		//},function(){
		/*$("#"+$(this).attr("name")).css("display", "none");
		$("#district6").css("display", "block");*/
	});
	
	$("area[class=typesArea]").click(function(){
		$('.hiddenMapCat').hide();
		$("#"+selected+$(this).attr("name")).css("display", "block");
		//$("#district6").css("display", "none");

		//},function(){
		/*$("#"+$(this).attr("name")).css("display", "none");
		$("#district6").css("display", "block");*/
	});	
});
/*
$("area[class=nantesArea]").click(function(){
	$('.hiddenMap').hide();
	$("#"+$(this)).show();
	/*$("#"+$(this).attr("name")).css("display", "block");
	$("#district6").css("display", "none");

	},function(){
	$("#"+$(this).attr("name")).css("display", "none");
	$("#district6").css("display", "block");*/
//});

