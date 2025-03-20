$("#leftLightTargetCompany").hover(function(){
	applyCompanyDisplay("creation");
	applyCompanyPercent("creation");
	$(".hiddenCompanyPercent").css("display", "block");
	},function(){
	applyCompanyDisplay("base");
	$(".hiddenCompanyPercent").css("display", "none");
	clearCompanyPercent();
});

$("#leftDarkTargetCompany").hover(function(){
	applyCompanyDisplay("transfert");
	applyCompanyPercent("transfer");
	$(".hiddenCompanyPercent").css("display", "block");
	},function(){
	applyCompanyDisplay("base");
	$(".hiddenCompanyPercent").css("display", "none");
	clearCompanyPercent();
});

$("#rightLightTargetCompany").hover(function(){
	applyCompanyDisplay("salaries");
	applyCompanyPercent("employe");
	$(".hiddenCompanyPercent").css("display", "block");
	},function(){
	applyCompanyDisplay("base");
	$(".hiddenCompanyPercent").css("display", "none");
	clearCompanyPercent();
});

$("#rightDarkTargetCompany").hover(function(){
	applyCompanyDisplay("cinquante");
	applyCompanyPercent("company50");
	$(".hiddenCompanyPercent").css("display", "block");
	},function(){
	applyCompanyDisplay("base");
	$(".hiddenCompanyPercent").css("display", "none");
	clearCompanyPercent();
});

function applyCompanyDisplay($fileName) {
	var path1 = "image/company/area"+companyListLeft+"/left/"+$fileName+".png";
	var path2 = "image/company/area"+companyListRight+"/right/"+$fileName+".png";
	$("#leftCompanyCircle").children(":first").attr("src", path1);
	$("#rightCompanyCircle").children(":first").attr("src", path2);
}

function applyCompanyPercent($section){
	var percents = companyPercent();
	// chiffre de gauche
	var $field = "field"+companyListLeft;
	var $picture = $("#leftCompanyPercent").children(":first").children(":first");
	for(var $i=0; $i<percents[$field][$section].length ; $i++){
		if(percents[$field][$section][$i] == ".")
			$picture.attr("src", "image/digit/"+$section+"/virgule.png" );
		else
			$picture.attr("src", "image/digit/"+$section+"/"+percents[$field][$section][$i]+".png" );
		
		$picture = $picture.next(":first");
	}
	$picture.attr("src", "image/digit/"+$section+"/pourcent.png" );
	//chiffre de droite
	var $field = "field"+companyListRight;
	var $picture = $("#rightCompanyPercent").children(":first").children(":first");
	for(var $i=0; $i<percents[$field][$section].length ; $i++){
		if(percents[$field][$section][$i] == ".")
			$picture.attr("src", "image/digit/"+$section+"/virgule.png" );
		else
			$picture.attr("src", "image/digit/"+$section+"/"+percents[$field][$section][$i]+".png" );
		
		$picture = $picture.next(":first");
	}
	$picture.attr("src", "image/digit/"+$section+"/pourcent.png" );
}

function clearCompanyPercent(){
	var $picture1 = $("#leftCompanyPercent").children(":first").children(":first");
	var $picture2 = $("#rightCompanyPercent").children(":first").children(":first");
	for(var i=0;i<6;i++){
		$picture1.attr("src", "");
		$picture2.attr("src", "");
		$picture1 = $picture1.next(":first");
		$picture2 = $picture2.next(":first");
	}
}