$(document).ready(
		function(){
			/*Bouton retour*/
			var widthRetourIle = 51;
			var deltaWidthRetourIle = 12;
			var heightRetourIle = 24;
			var deltaHeightRetourIle = 5;
			var topRetourIle = 748;
			var leftRetourIle = 957;
			var speedRetourIle = 100;

			$("#retour_Ile").mouseover(
					function(){
						$("#retour_Ile").animate({top:topRetourIle-deltaHeightRetourIle,left:leftRetourIle-deltaWidthRetourIle,width:widthRetourIle+deltaWidthRetourIle,height:heightRetourIle+deltaHeightRetourIle}, speedRetourIle);
					}
			);
			$("#retour_Ile").mouseout(
					function(){
						$("#retour_Ile").animate({top:topRetourIle,left:leftRetourIle,width:widthRetourIle,height:heightRetourIle}, speedRetourIle);	
					}
			);
			$("#retour_Ile").mousedown(
					function(){
						$("#retour_Ile").css("top",topRetourIle-deltaHeightRetourIle/2).css("left",leftRetourIle-deltaWidthRetourIle/2).css("width",widthRetourIle).css("height",heightRetourIle);
					}
			);
			$("#retour_Ile").mouseup(
					function(){
						$("#retour_Ile").css("top",topRetourIle-deltaHeightRetourIle).css("left",leftRetourIle-deltaWidthRetourIle).css("width",widthRetourIle+deltaWidthRetourIle).css("height",heightRetourIle+deltaHeightRetourIle);
					}
			);

			/*Bouton quelques créatifs*/
			var widthCreatifs = 145;
			var deltaWidthCreatifs = 10;
			var heightCreatifs = 30;
			var deltaHeightCreatifs = 3;
			var topCreatifs = 720;
			var leftCreatifs = 0;
			var speedCreatifs = 100;
			var timerCercles = null;
			var timeOutCercles = 1000;

			$("#quelques_creatifs").mouseover(
					function(){
						$("#quelques_creatifs").animate({top:topCreatifs,left:leftCreatifs,width:widthCreatifs+deltaWidthCreatifs,height:heightCreatifs+deltaHeightCreatifs}, speedCreatifs);
					}
			);
			$("#quelques_creatifs").mouseout(
					function(){
						$("#quelques_creatifs").animate({top:topCreatifs,left:leftCreatifs,width:widthCreatifs,height:heightCreatifs}, speedCreatifs);	
					}
			);
			$("#quelques_creatifs").mousedown(
					function(){
						$("#quelques_creatifs").css("top",topCreatifs+deltaHeightCreatifs/2).css("left",leftCreatifs+deltaWidthCreatifs/2).css("width",widthCreatifs).css("height",heightCreatifs);
					}
			);
			$("#quelques_creatifs").mouseup(
					function(){
						$("#quelques_creatifs").css("top",topCreatifs).css("left",leftCreatifs).css("width",widthCreatifs+deltaWidthCreatifs).css("height",heightCreatifs+deltaHeightCreatifs);
					}
			);

			var menuItems = new Array();
			var cercles = new Array();
			var speedCouvrir = 300;
			var speedPlier = 400;
			var speedMenuItem = 100;

			/*Classe cercle*/
			function cercle(categorie, taille, topFinal, leftFinal){
				this.categorie = categorie;
				this.taille = taille;
				this.topFinal = topFinal;
				this.leftFinal = leftFinal;
				this.srcCercleVert = "images/ile/cercle/cercle-"+categorie+".png";

				this.isCouvrir = false;
				this.isDecrouvrir = false;
				this.newSrc = "";

				cercles["#cat-"+categorie] = this;

				$("#cercle-"+categorie).css("top", this.topCentreInit-taille/2).css("left", this.leftCentreInit-taille/2).css("width", this.taille).css("height", this.taille);
			}

			cercle.prototype.srcCercleRouge = "images/ile/cercle/cercle-base.png";
			cercle.prototype.leftCentreInit = 890;
			cercle.prototype.topCentreInit = 684;

			cercle.prototype.deplier = function(){
				$("#cercle-"+this.categorie).animate({top:this.topFinal,left:this.leftFinal}, speedPlier);
			}

			cercle.prototype.plier = function(){
				$("#cercle-"+this.categorie).animate({top:this.topCentreInit-this.taille/2,left:this.leftCentreInit-this.taille/2}, speedPlier);
			}

			cercle.prototype.retressir = function(){
				$("#cercle-"+this.categorie).animate({top:this.topFinal+this.taille/2,left:this.leftFinal+this.taille/2,width:0,height:0}, speedCouvrir, 
						function(){
					grossir();
				});
			}

			function grossir(){
				for(var c in cercles){
					var cercle = cercles[c];
					if(cercle.isCouvrir || cercle.isDecouvrir){
						cercle.isCouvrir = false;
						cercle.isDecouvrir = false;
						$("#cercle-"+cercle.categorie).attr("src", cercle.newSrc);
						$("#cercle-"+cercle.categorie).css("top", cercle.topFinal+cercle.taille/2).css("left", cercle.leftFinal+cercle.taille/2);
						$("#cercle-"+cercle.categorie).animate({top:cercle.topFinal,left:cercle.leftFinal,width:cercle.taille,height:cercle.taille},speedCouvrir);
					}
				}
			}

			cercle.prototype.decouvrir = function(){
				this.isDecouvrir = true;
				this.newSrc = this.srcCercleVert;
				this.retressir();
			}

			cercle.prototype.couvrir = function(){
				this.isCouvrir = true;
				this.newSrc = this.srcCercleRouge;
				this.retressir();
			}

			new cercle("activitesupport", 74, 475, 430);
			new cercle("artspec", 111, 340, 810);
			new cercle("artsvisuels", 82, 525, 500);
			new cercle("audiovisuel", 92, 412, 497);
			new cercle("communication", 102, 457, 820);
			new cercle("design", 82, 337, 551);
			new cercle("edition", 58, 444, 312);
			new cercle("media", 77, 396, 387);
			new cercle("metierdart", 77, 400, 610);
			new cercle("mode", 66, 491, 352);
			new cercle("numerique", 77, 485, 597);
			new cercle("archi", 127, 410, 686);

			/*Classe menuItem*/
			function menuItem(categorie, top, width){
				this.srcBoutonMenu = "images/ile/boutons/bouton-"+categorie+".png";
				this.srcBoutonMenuSurvole = "images/ile/boutons/survol-bouton-"+categorie+".png";
				this.top = top;
				this.width = width;

				menuItems["#cat-"+categorie] = this;
				$("#cat-"+categorie).css("top", this.top).css("width", this.width).css("height", this.height);

				$("#cat-"+categorie).mouseover(
						function(){
							var item = menuItems["#cat-"+categorie];
							var cercle = cercles["#cat-"+categorie];
							$("#cat-"+categorie).attr("src", item.srcBoutonMenuSurvole);
							$("#cat-"+categorie).animate({width:item.width+item.deltaWidth,height:32},speedMenuItem);

							cercle.decouvrir();

							if(timerCercles!=null){
								window.clearTimeout(timerCercles);
							}else{
								item.deplierBulles();
							}
						}
				);

				$("#cat-"+categorie).mouseout(
						function(){
							var item = menuItems["#cat-"+categorie];
							var cercle = cercles["#cat-"+categorie];
							$("#cat-"+categorie).attr("src", item.srcBoutonMenu);
							$("#cat-"+categorie).animate({width:item.width,height:item.height},speedMenuItem);

							cercle.couvrir();

							timerCercles = window.setTimeout(plierBulles,timeOutCercles);
						}	
				);
			}

			menuItem.prototype.deltaWidth = 20;
			menuItem.prototype.height = 30;

			function plierBulles(){
				for(var item in cercles)
				{
					var cercle = cercles[item];
					cercle.plier();
				}
				timerCercles = null;
			}

			menuItem.prototype.deplierBulles = function(){
				for(var item in cercles)
				{
					var cercle = cercles[item];
					cercle.deplier();
				}
			}

			new menuItem("archi", 264, 343);
			new menuItem("artspec", 302, 328);
			new menuItem("communication", 340, 313);
			new menuItem("audiovisuel", 378, 298);
			new menuItem("artsvisuels", 416, 283);
			new menuItem("design", 454, 268);
			new menuItem("media", 492, 253);
			new menuItem("metierdart", 530, 238);
			new menuItem("numerique", 568, 223);
			new menuItem("activitesupport", 606, 208);
			new menuItem("mode", 644, 193);
			new menuItem("edition", 682, 178);
		}
);