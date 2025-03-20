var pieListLeft=6;
var pieListRight=6;
var companyListLeft=6;
var companyListRight=6;

$(".aSector").hover(function(){
	var fieldName;
	var degree;
	$fieldName = $(this).attr("name");
	switch($fieldName) {
		case "industrie" : $degree = 60;
			break;
		case "construction" : $degree = -60;
			break;
		case "commerce" : $degree = 100;
			break;
		case "services" : $degree = -100;
			break;
	}
	$(this).css("background-color", $(this).css("color"));
	$(this).css("color", "white");
	$(".turn").transition({ rotate: $degree }, 100, "ease");
	$(".whiteCircle").transition({ scale: 4 }, 500);
	applyPercent($("#leftPercent"), pieListLeft, $fieldName);
	applyPercent($("#rightPercent"), pieListRight, $fieldName);
	},function(){
	$(this).css("color", $(this).css("background-color"));
	$(this).css("background-color", "white");
	$(".turn").transition({ rotate: '0deg' }, 100, "ease");
	$(".whiteCircle").transition({ scale: 1 }, 50, "ease");
	$(".colorCircle[name='"+$fieldName+"']").transition({ scale: 1 }, 100, "ease");
	clearPercent($("#leftPercent"));
	clearPercent($("#rightPercent"));
	$(".hidden_"+$fieldName).css("display","none");
});


$(".centerArrow[name='up']").click(function(){
  var menu, item, length, i, temp1, temp2;
  $menu=$(this).next();
  $length = $menu.children().length;
  $item = $menu.children(":last");
  $temp2="";
	for(i=0;i<$length;i++){
		$temp1=$item.children(":first").text();
		$item.children(":first").text($temp2);
		$temp2=$temp1;
		$item=$item.prev(":first");
	}
	$menu.children(":last").children(":first").text($temp2);
	
	//modification de l'image dans le cas des secteurs d'activité
	if($menu.parent(":first").parent(":first").attr("id") == "pieContainer")
	{
		var pie, nbPie;
		if($menu.attr("id")=="leftPieMenu")
		{
			$pie = $("#leftPie").children(":first").children(":first");
			if(pieListLeft>=12){
				pieListLeft=1;
			} else {
				pieListLeft++;
			}
			//modifier les données du pieChart avec le numéro du secteur
			reloadData(pieListLeft);
			drawPieChart("#leftPieChart");
		} else {
			$pie = $("#rightPie").children(":first").children(":first");
			if(pieListRight>=12){
				pieListRight=1;
			} else {
				pieListRight++;
			}
			reloadData(pieListRight);
			drawPieChart("#rightPieChart");
		}
	} else {
		//affichage de l'image des entreprises;
		if($menu.attr("id")=="leftCompanyMenu") {
			if(companyListLeft>=12){
				companyListLeft=1;
			} else {
				companyListLeft++;
			}
			changeLeftCompanyCircle();
		} else {
			if(companyListRight>=12){
				companyListRight=1;
			} else {
				companyListRight++;
			}
			changeRightCompanyCircle();
		}
		
	}
});

$(".centerArrow[name='down']").click(function(){
  var $menu, $item, $length, $i, $temp1, $temp2;
  $menu=$(this).prev(":first");
  $length = $menu.children().length;
  $item = $menu.children(":first");
  $temp2="";
	for($i=0;$i<$length;$i++){
		$temp1=$item.children(":first").text();
		$item.children(":first").text($temp2);
		$temp2=$temp1;
		$item=$item.next(":first");
	}
	$menu.children(":first").children(":first").text($temp2);
	
	//modification de l'image de camembert
	if($menu.parent(":first").parent(":first").attr("id") == "pieContainer") {
		var $pie, $nbPie;
		if($menu.attr("id")=="leftPieMenu")
		{
			$pie = $("#leftPie").children(":first").children(":first");
			if(pieListLeft<=1){
				pieListLeft=12;
			} else {
				pieListLeft--;
			}
			reloadData(pieListLeft);
			drawPieChart("#leftPieChart");
		} else {
			$pie = $("#rightPie").children(":first").children(":first");
			if(pieListRight<=1){
				pieListRight=12;
			} else {
				pieListRight--;
			}
			reloadData(pieListRight);
			drawPieChart("#rightPieChart");
		}
	} else {
		//affichage de l'image des entreprises;
		
		if($menu.attr("id")=="leftCompanyMenu") {
			if(companyListLeft<=1){
				companyListLeft=12;
			} else {
				companyListLeft--;
			}
			changeLeftCompanyCircle();
		} else {
			if(companyListRight<=1){
				companyListRight=12;
			} else {
				companyListRight--;
			}
			changeRightCompanyCircle();
		}
	}
});


