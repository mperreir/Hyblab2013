$(document).ready(
		function(){
			/*Bouton cliquez*/
			var idBouton = "cliquez";
			var bouton_normal = "images/carte/bouton/bouton.png";
			var bouton_clique = "images/carte/bouton/bouton-clique.png";
			var bouton_survol = "images/carte/bouton/bouton-survol.png";

			$("#"+idBouton).mouseover(
					function(){
						$("#"+idBouton).attr("src", bouton_survol);
					}
			);
			$("#"+idBouton).mouseout(
					function(){
						$("#"+idBouton).attr("src", bouton_normal);
					}	
			);
			$("#"+idBouton).mousedown(
					function(){
						$("#"+idBouton).attr("src", bouton_clique);
					}	
			);
			$("#"+idBouton).mouseup(
					function(){
						$("#"+idBouton).attr("src", bouton_survol);
					}
			);
			
			
			$("#basePourcentage").css("top", 220).css("left", 700).css("width", 277).css("height", 523);
			
			
			/*Affichage au survol des quartiers*/
			var idPourcentage = "pourcentage";
			var pourcents = new Array();
			var quartiers = new Array();
			var affiches = new Array();
			var timer = null;
			var timeOut = 250;
			var lastQuartier = null;
			
			$("#"+idPourcentage).fadeOut();
			
			
			function effacerElements(){
				$("#"+idPourcentage).fadeOut("low");
				//$("#afficheCodePostal").fadeOut("low");
				timer = null;
				lastQuartier = null;
			}
			
			function afficherElements(){
				$("#"+idPourcentage).fadeIn("low");
			}

			function pourcent(num, width, height){
				this.src = "images/carte/pourcentage/pourcent"+num+".png";
				this.width = width;
				this.height = height;

				pourcents["quartier"+num] = this;
			}

			pourcent.prototype.middleHeight = 460;

			pourcent.prototype.getTop = function(){
				return this.middleHeight - this.getHeight()/2;
			}

			pourcent.prototype.getLeft = function(){
				return 720;
			}

			pourcent.prototype.getWidth = function(){
				return 150;
			}

			pourcent.prototype.getHeight = function(){
				return this.getWidth()*this.height/this.width;
			}

			pourcent.prototype.afficher = function(){
				$("#"+idPourcentage).attr("src", this.src).css("top", this.getTop()).css("left", this.getLeft()).css("height", this.getHeight()).css("width", this.getWidth());
			}

			new pourcent(44000,134,78);
			new pourcent(44100,127,75);
			new pourcent(44200,130,86);
			new pourcent(44300,127,95);

			function affiche(numQuartier, top, left){
				this.numQuartier = numQuartier;
				this.top = top;
				this.left = left;
				this.src = "images/carte/codePostal/CP"+numQuartier+".png";
				
				affiches["quartier"+numQuartier] = this;
			}
			
			affiche.prototype.afficher = function(){
				//$("#afficheCodePostal").attr("src", this.src).css("top", this.top).css("left", this.left);
				//$("#afficheCodePostal").fadeIn("low");
			}
			
			/*$("#afficheCodePostal").mouseover(
					function(){
						if(timer!=null){
							window.clearTimeout(timer);
						}
					}
			);
			$("#afficheCodePostal").mouseout(
					function(){
						timer = window.setTimeout(effacerElements,timeOut);
					}
			);*/
			
			new affiche(44000, 375, 235);
			new affiche(44100, 450, 125);
			new affiche(44200, 465, 315);
			new affiche(44300, 275, 350);
			
			function quartier(idQuartier, numQuartier){
				this.idQuartier = idQuartier;
				this.numQuartier = numQuartier;
				this.pourcent = pourcents["quartier"+numQuartier];
				this.affiche = affiches["quartier"+numQuartier];
				
				quartiers[idQuartier] = this;
				
				$("#"+idQuartier).mouseover(
						function(){
							var quartier = quartiers[idQuartier];
							
							if(timer!=null){
								window.clearTimeout(timer);
							}else{
								afficherElements();
							}
							quartier.pourcent.afficher();
							
							
							/*if(lastQuartier == null){
								quartier.affiche.afficher()
							}else if(lastQuartier != quartier.numQuartier){
								$("#afficheCodePostal").fadeOut("low", function(){
										quartier.affiche.afficher();
								});
							}*/
							lastQuartier = quartier.numQuartier;
						}
				);
				$("#"+idQuartier).mouseout(
						function(){
							timer = window.setTimeout(effacerElements,timeOut);
						}
				);
			}
			
			new quartier("q44000_1", 44000);
			new quartier("q44000_2", 44000);
			new quartier("q44000_3", 44000);
			new quartier("q44100_1", 44100);
			new quartier("q44100_2", 44100);
			new quartier("q44100_3", 44100);
			new quartier("q44300_1", 44300);
			new quartier("q44300_2", 44300);
			new quartier("q44300_3", 44300);
			new quartier("q44200_1", 44200);
			new quartier("q44200_2", 44200);
			
			/*Bouton retour*/
			var widthRetourCarte = 51;
			var deltaWidthRetourCarte = 12;
			var heightRetourCarte = 24;
			var deltaHeightRetourCarte = 5;
			var topRetourCarte = 175;
			var leftRetourCarte = 20;
			var speedRetourCarte = 100;
			
			$("#retour_carte").mouseover(
					function(){
						$("#retour_carte").animate({top:topRetourCarte,left:leftRetourCarte,width:widthRetourCarte+deltaWidthRetourCarte,height:heightRetourCarte+deltaHeightRetourCarte}, speedRetourCarte);
					}
			);
			$("#retour_carte").mouseout(
					function(){
						$("#retour_carte").animate({top:topRetourCarte,left:leftRetourCarte,width:widthRetourCarte,height:heightRetourCarte}, speedRetourCarte);	
					}
			);
			$("#retour_carte").mousedown(
					function(){
						$("#retour_carte").css("top",topRetourCarte+deltaHeightRetourCarte/2).css("left",leftRetourCarte+deltaWidthRetourCarte/2).css("width",widthRetourCarte).css("height",heightRetourCarte);
					}
			);
			$("#retour_carte").mouseup(
					function(){
						$("#retour_carte").css("top",topRetourCarte).css("left",leftRetourCarte).css("width",widthRetourCarte+deltaWidthRetourCarte).css("height",heightRetourCarte+deltaHeightRetourCarte);
					}
			);
			
		}
);