$(document).ready(
		function(){
			var boutons = new Array();
			var sujetEnCours = "";
			var idSujetEnCours = null;
			var timerTransitionLecteur = null;
			var srcBoutonFermerPlein = "images/video/croixFermer.png";
			var srcBoutonFermerVide = "images/vide.png";

			function bouton_play(id, topInit, leftInit, sujet){
				this.id = id;
				this.topInit = topInit;
				this.leftInit = leftInit;
				this.sujet = sujet;
				this.topBoutonFermer = 162+(id-1)*152;
				this.leftBoutonFermer = 660;
				this.tailleBoutonFermer = 22;
				this.deltaTailleBoutonFermer = 4;

				boutons[this.id] = this;

				$("#bouton_play"+id).css("top", topInit).css("left", leftInit);

				$("#bouton_play"+id).mouseover(
						function(){
							var bouton = boutons[id];
							$("#bouton_play"+id).animate({top:bouton.topInit-bouton.deltaTaille/2,left:bouton.leftInit-bouton.deltaTaille/2,width:bouton.taille+bouton.deltaTaille,height:bouton.taille+bouton.deltaTaille}, bouton.speedTransition);
						}
				);
				$("#bouton_play"+id).mouseout(
						function(){
							var bouton = boutons[id];
							$("#bouton_play"+id).animate({top:bouton.topInit,left:bouton.leftInit,width:bouton.taille,height:bouton.taille}, bouton.speedTransition);	
						}
				);
				$("#bouton_play"+id).mousedown(
						function(){
							var bouton = boutons[id];
							$("#bouton_play"+id).css("top",bouton.topInit).css("left",bouton.leftInit).css("width",bouton.taille).css("height",bouton.taille);
						}
				);
				$("#bouton_play"+id).mouseup(
						function(){
							var bouton = boutons[id];
							$("#bouton_play"+id).css("top",bouton.topInit-bouton.deltaTaille/2).css("left",bouton.leftInit-bouton.deltaTaille/2).css("width",bouton.taille+bouton.deltaTaille).css("height",bouton.taille+bouton.deltaTaille);
							sujetEnCours = bouton.sujet;
							idSujetEnCours = bouton.id;
							ouvrirLecteur();
						}
				);
				
				$("#croixFermer"+id).css("top", this.topBoutonFermer).css("left", this.leftBoutonFermer).css("width", this.tailleBoutonFermer).css("height", this.tailleBoutonFermer).css("opacity", 0);
				$("#croixFermer"+id).attr("src", srcBoutonFermerVide);
				
				$("#croixFermer"+id).mouseover(
						function(){
							var bouton = boutons[id];
							$("#croixFermer"+id).animate({top:bouton.topBoutonFermer-bouton.deltaTailleBoutonFermer/2,left:bouton.leftBoutonFermer-bouton.deltaTailleBoutonFermer/2,width:bouton.tailleBoutonFermer+bouton.deltaTailleBoutonFermer,height:bouton.tailleBoutonFermer+bouton.deltaTailleBoutonFermer}, bouton.speedTransition);
						}
				);
				$("#croixFermer"+id).mouseout(
						function(){
							var bouton = boutons[id];
							$("#croixFermer"+id).animate({top:bouton.topBoutonFermer,left:bouton.leftBoutonFermer,width:bouton.tailleBoutonFermer,height:bouton.tailleBoutonFermer}, bouton.speedTransition);	
						}
				);
				$("#croixFermer"+id).mousedown(
						function(){
							var bouton = boutons[id];
							$("#croixFermer"+id).css("top",bouton.topBoutonFermer).css("left",bouton.leftBoutonFermer).css("width",bouton.tailleBoutonFermer).css("height",bouton.tailleBoutonFermer);
						}
				);
				$("#croixFermer"+id).mouseup(
						function(){
							var bouton = boutons[id];
							$("#croixFermer"+id).css("top",bouton.topBoutonFermer-bouton.deltaTailleBoutonFermer/2).css("left",bouton.leftBoutonFermer-bouton.deltaTailleBoutonFermer/2).css("width",bouton.tailleBoutonFermer+bouton.deltaTailleBoutonFermer).css("height",bouton.tailleBoutonFermer+bouton.deltaTailleBoutonFermer);
							fermerLecteur();
						}
				);
			}

			bouton_play.prototype.taille = 32;
			bouton_play.prototype.deltaTaille = 4;
			bouton_play.prototype.speedTransition = 100;
			
			bouton_play.prototype.ouvrirLecteur = function(){
				$("#"+this.sujet).animate({opacity:0}, speedFond);
				$("#bouton_play"+this.id).animate({opacity:0}, speedFond);
				$("#survol"+this.id).animate({opacity:0}, speedFond);
			}

			bouton_play.prototype.finOuvertureLecteur = function(){
				$("#"+this.sujet).css("visibility", "hidden");
				$("#bouton_play"+this.id).css("visibility", "hidden");
				$("#survol"+this.id).css("visibility", "hidden");
			}

			bouton_play.prototype.fermerLecteur = function(){
				$("#"+this.sujet).css("visibility", "visible");
				$("#bouton_play"+this.id).css("visibility", "visible");
				$("#survol"+this.id).css("visibility", "visible");
				$("#"+this.sujet).animate({opacity:1}, speedFond);
				$("#bouton_play"+this.id).animate({opacity:1}, speedFond);
				$("#survol"+this.id).animate({opacity:1}, speedFond);
			}

			/*Bouton play1*/
			var topB1 = 198;
			var leftB1 = 489;
			var srcB1 = "Jose_Cerclet";
			new bouton_play(1, topB1, leftB1, srcB1);

			/*bouton play2*/
			var topB2 = 403;
			var leftB2 = 477;
			var srcB2 = "Pierrick_Sorin";
			new bouton_play(2, topB2, leftB2, srcB2);

			/*bouton play3*/
			var topB3 = 522;
			var leftB3 = 520;
			var srcB3 = "Charlie_Mars";
			new bouton_play(3, topB3, leftB3, srcB3);

			/*bouton play4*/
			var topB4 = 728;
			var leftB4 = 473;
			var srcB4 = "Laurent";
			new bouton_play(4, topB4, leftB4, srcB4);


			var srcImageFondLecteur = "images/video/fondVideo.png";
			var srcImageVide = "images/vide.png";
			var speedFond = 350;

			/*Gestion du lecteur de vidéo*/
			ouvrirLecteur = function(){
				for(var sujet in boutons){
					var btn = boutons[sujet];
					btn.ouvrirLecteur();
				}
				timerTransitionLecteur = window.setTimeout(finOuvertureLecteur,speedFond);
			}

			finOuvertureLecteur = function(){
				$("#lecteurVideo_"+sujetEnCours).css("visibility", "visible");
				$("#croixFermer"+idSujetEnCours).attr("src", srcBoutonFermerPlein);
				$("#croixFermer"+idSujetEnCours).css("opacity", 0);
				$("#croixFermer"+idSujetEnCours).animate({opacity:1}, speedFond);
				for(var sujet in boutons){
					var btn = boutons[sujet];
					btn.finOuvertureLecteur();
				}
			}
			
			fermerLecteur = function(){
				$("#lecteurVideo_"+sujetEnCours).css("visibility", "hidden");
				$("#croixFermer"+idSujetEnCours).attr("src", srcBoutonFermerVide);
				$("#croixFermer"+idSujetEnCours).css("opacity", 1);
				$("#croixFermer"+idSujetEnCours).animate({opacity:0}, speedFond);
				timerTransitionLecteur = window.setTimeout(finFermetureLecteur, speedFond);
			}

			finFermetureLecteur = function(){
				for(var sujet in boutons){
					var btn = boutons[sujet];
					btn.fermerLecteur();
				}
			}
			
			/*Bouton retour*/
			var widthRetourVideo = 51;
			var deltaWidthRetourVideo = 12;
			var heightRetourVideo = 24;
			var deltaHeightRetourVideo = 5;
			var topRetourVideo = 175;
			var leftRetourVideo = 20;
			var speedRetourVideo = 100;
			
			$("#retour_video").mouseover(
					function(){
						$("#retour_video").animate({top:topRetourVideo,left:leftRetourVideo,width:widthRetourVideo+deltaWidthRetourVideo,height:heightRetourVideo+deltaHeightRetourVideo}, speedRetourVideo);
					}
			);
			$("#retour_video").mouseout(
					function(){
						$("#retour_video").animate({top:topRetourVideo,left:leftRetourVideo,width:widthRetourVideo,height:heightRetourVideo}, speedRetourVideo);	
					}
			);
			$("#retour_video").mousedown(
					function(){
						$("#retour_video").css("top",topRetourVideo+deltaHeightRetourVideo/2).css("left",leftRetourVideo+deltaWidthRetourVideo/2).css("width",widthRetourVideo).css("height",heightRetourVideo);
					}
			);
			$("#retour_video").mouseup(
					function(){
						$("#retour_video").css("top",topRetourVideo).css("left",leftRetourVideo).css("width",widthRetourVideo+deltaWidthRetourVideo).css("height",heightRetourVideo+deltaHeightRetourVideo);
					}
			);
			
			
			var idBouton = "go_conclusion";
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
			
			var descriptions = new Array();
			
			description = function(id, top, left, width, height, topFinal, leftFinal){
				this.id = id;
				this.top = top;
				this.left = left;
				this.width = width;
				this.height = height;
				this.topFinal = topFinal;
				this.leftFinal = leftFinal;
				
				descriptions["desc"+this.id] = this;
				
				$("#survol"+this.id).css("top", this.top).css("left", this.left).css("width", this.width).css("height", this.height);
				
				$("#survol"+this.id).mouseover(
					function(){
						var desc = descriptions["desc"+id];
						$("#survol"+desc.id).animate({top:desc.topFinal,left:desc.leftFinal,width:desc.width*desc.coeff,height:desc.height*desc.coeff}, "slow");
					}
				);
				
				$("#survol"+this.id).mouseout(
					function(){
						var desc = descriptions["desc"+id];
						$("#survol"+desc.id).animate({top:desc.top,left:desc.left,width:desc.width,height:desc.height}, "slow");
					}
				);
			}
			
			description.prototype.coeff = 1.4;
			
			new description(1, 188, 575, 244, 140, 170, 575);
			new description(2, 253, 265, 154, 195, 215, 203);
			new description(3, 426, 550, 153, 223, 401, 550);
			new description(4, 610, 119, 297, 121, 591, 0);

		}
);