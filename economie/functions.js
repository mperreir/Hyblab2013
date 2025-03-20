// Largeur des chiffres représantant un pourcentage. et virgule + pourcent = 31px
var pictureSize = new Array();
pictureSize[0] = 20;
pictureSize[1] = 14;
pictureSize[2] = 19;
pictureSize[3] = 20;
pictureSize[4] = 21;
pictureSize[5] = 19;
pictureSize[6] = 19;
pictureSize[7] = 20;
pictureSize[8] = 21;
pictureSize[9] = 19;

var data = [
    { label: "industrie",  data: Number(fieldPercent().field6.industrie), color: "#4E3908"},
	 { label: "construction",  data: Number(fieldPercent().field6.construction), color: "#9EB5B2"},
    { label: "commerce",  data: Number(fieldPercent().field6.commerce), color: "#9D2E26"},
	 { label: "services",  data: Number(fieldPercent().field6.services), color: "#F4A900"},
];

$(document).ready(function () {
	drawPieChart("#leftPieChart");
	drawPieChart("#rightPieChart");
});

function applyPercent($div, $clue1, $clue2){
	var $picture = $div.children(":first");
	var percent = fieldPercent();
	var $size =0;
	for(var $i=0; $i<percent["field"+$clue1][$clue2].length ; $i++){
		if(percent["field"+$clue1][$clue2][$i] == ".")
			$picture.attr("src", "image/digit/"+$clue2+"/virgule.png" );
		else {
			$picture.attr("src", "image/digit/"+$clue2+"/"+percent["field"+$clue1][$clue2][$i]+".png" );
			$size = $size+pictureSize[percent["field"+$clue1][$clue2][$i]];
		}
		
		$picture.css("display", "block");
		$picture = $picture.next(":first");
	}
	$picture.attr("src", "image/digit/"+$clue2+"/pourcent.png" );
	$picture.css("display", "block");
	$size = $size+31;
	$size=(300-$size)/2;
	$div.css("margin-left", $size+"px" );
};

function clearPercent($div){
	var $picture = $div.children(":first");
	for(var $i=0;$i<6;$i++){
		$picture.attr("src", "");
		$picture.css("display", "none");
		$picture = $picture.next(":first");
	}
}

function changeLeftCompanyCircle() {
	var $polarCircle = $("#leftCompanyCircle").children(":first");
	$polarCircle.attr("src", "image/company/area"+companyListLeft+"/left/base.png");
	$("#leftCompanyNumber").children(":first").text(companyPercent()["field"+companyListLeft]["institution"]);
}

function changeRightCompanyCircle() {
	var $polarCircle = $("#rightCompanyCircle").children(":first");
	$polarCircle.attr("src", "image/company/area"+companyListRight+"/right/base.png");
	$("#rightCompanyNumber").children(":first").text(companyPercent()["field"+companyListRight]["institution"]);
}

function drawPieChart($id) {
	$.plot($($id), data, {
         series: {
            pie: {
                show: true,
					 label: {
                show: false
					 }
            }
         },
         legend: {
            show : false
         },	
    });
}

function reloadData($sector){
	data[0].data = Number(fieldPercent()["field"+$sector].industrie);
	data[1].data = Number(fieldPercent()["field"+$sector].construction);
	data[2].data = Number(fieldPercent()["field"+$sector].commerce);
	data[3].data = Number(fieldPercent()["field"+$sector].services);
}