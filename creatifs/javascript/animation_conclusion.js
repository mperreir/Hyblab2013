$(document).ready(
		function(){
/*Bouton retour*/
			var widthRetourConclusion = 51;
			var deltaWidthRetourConclusion = 12;
			var heightRetourConclusion = 24;
			var deltaHeightRetourConclusion = 5;
			var topRetourConclusion = 175;
			var leftRetourConclusion = 20;
			var speedRetourConclusion = 100;
			
			$("#retourConclusion").mouseover(
					function(){
						$("#retourConclusion").animate({top:topRetourConclusion,left:leftRetourConclusion,width:widthRetourConclusion+deltaWidthRetourConclusion,height:heightRetourConclusion+deltaHeightRetourConclusion}, speedRetourConclusion);
					}
			);
			$("#retourConclusion").mouseout(
					function(){
						$("#retourConclusion").animate({top:topRetourConclusion,left:leftRetourConclusion,width:widthRetourConclusion,height:heightRetourConclusion}, speedRetourConclusion);	
					}
			);
			$("#retourConclusion").mousedown(
					function(){
						$("#retourConclusion").css("top",topRetourConclusion+deltaHeightRetourConclusion/2).css("left",leftRetourConclusion+deltaWidthRetourConclusion/2).css("width",widthRetourConclusion).css("height",heightRetourConclusion);
					}
			);
			$("#retourConclusion").mouseup(
					function(){
						$("#retourConclusion").css("top",topRetourConclusion).css("left",leftRetourConclusion).css("width",widthRetourConclusion+deltaWidthRetourConclusion).css("height",heightRetourConclusion+deltaHeightRetourConclusion);
					}
			);
		}
	);