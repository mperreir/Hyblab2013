function selectName(name) {
	switch(name) {
		case "district11":
			return "Nantes Nord ";
		case "district9":
			return "Nantes Erdre";
		case "district6":
			return "Île de Nantes";
		case "district10":
			return "Doulon - Bottière";
		case "district1":
			return "Breil - Barberie";
		case "district3":
			return "Hauts Pavés - Saint Félix";
		case "district5":
			return "Malakoff - Saint Donatien";
		case "district2":
			return "Centre Ville";
		case "district8":
			return "Dervallières - Zola";
		case "district7":
			return "Bellevue Chantenay - Sainte Anne";
		case "district4":
			return "Nantes Sud";
	}
}

var selected="district6";
$(document).ready(function() {
	$('.hiddenMap,.hiddenMapCat').hide();
	$(".district6,#district6").show();
	$("#namedistrict").html(selectName(selected));
	$("area[class=nantesArea]").click(function(){
		$("#namedistrict").html(selectName($(this).attr("name")));
		$('.hiddenMap').hide();
		$("."+$(this).attr("name")).css("display", "block");
		selected=$(this).attr("name");
		$('.hiddenMapCat').hide();
		$("#"+selected+"age").css("display", "block");
		
	});
	
	$("area[class=typesArea]").click(function(){
		$('.hiddenMapCat').hide();
		$("#"+selected+$(this).attr("name")).css("display", "block");
		
	});	
});


