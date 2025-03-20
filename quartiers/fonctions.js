$("area.carte_quartier").hover(function(){

	//Survol du quartier 1 (quartier bleu)
	$("#quartier1").hover(function(){
		$("#carte_3D").attr("src", "Images/Introduction/Cartes/survol-quartier1.png");
	}, function(){
		$("#carte_3D").attr("src", "Images/Introduction/Cartes/carte-inactive.png");
	});

	//Survol du quartier 2 (quartier vert)
	$("#quartier2").hover(function(){
		$("#carte_3D").attr("src", "Images/Introduction/Cartes/survol-quartier2.png");
	}, function(){
		$("#carte_3D").attr("src", "Images/Introduction/Cartes/carte-inactive.png");
	});

	//Survol du quartier 3 (quartier rouge)
	$("#quartier3").hover(function(){
		$("#carte_3D").attr("src", "Images/Introduction/Cartes/survol-quartier3.png");
	}, function(){
		$("#carte_3D").attr("src", "Images/Introduction/Cartes/carte-inactive.png");
	});

	//Survol du quartier 4 (quartier orange)
	$("#quartier4").hover(function(){
		$("#carte_3D").attr("src", "Images/Introduction/Cartes/survol-quartier4.png");
	}, function(){
		$("#carte_3D").attr("src", "Images/Introduction/Cartes/carte-inactive.png");
	});
	
	//Survol du quartier 5 (quartier orange)
	$("#quartier5").hover(function(){
		$("#carte_3D").attr("src", "Images/Introduction/Cartes/survol-quartier5.png");
	}, function(){
		$("#carte_3D").attr("src", "Images/Introduction/Cartes/carte-inactive.png");
	});
});


/*Survol d'un bouton
* - Modifie le bouton survolé si bouton non grisé
*/
$("img.bouton_carte").hover(function(){
		bouton_courant = $(this).attr("id");
		image_courante = $(this).attr("src");
		image_grise = "Images/Boutons/Bouton_Autre/" + $(this).attr("id") + "-autre.png";
		if(image_courante != image_grise){
			bouton_valide = true;
			lien_image = "Images/Boutons/Bouton_Survol/" + $(this).attr("id") + "-survol.png";
			$(this).attr("src", lien_image);
		}else{
			bouton_valide = false;
		}
}, function(){
	if(bouton_valide){
		lien_bouton = "Images/Boutons/Bouton_normal/" + $(this).attr("id") + "-normal.png";
		$(this).attr("src", lien_bouton);
	}
});

/*Clique sur un bouton
* - Grise les autres boutons
* - Clique sur un bouton déjà cliqué --> Dégrise tout les autres boutons
*/
$("img.bouton_carte").click(function(){
	
	//Récupèration du bouton cliqué
	id_carte = $("#carte_3D").attr("id");
	bouton = $(this);
	bouton_clique = $(this).attr("id");
	lien_bouton_clique = $(this).attr("src"); //Etat du bouton clique
	lien_bouton = "Images/Boutons/Bouton_normal/" + bouton_clique + "-normal.png"; // Etat d'un bouton non grisé
	
	//Le bouton clique est déjà sélectionné
	if(lien_bouton_clique == lien_bouton){
		
		//Désélectionné tous les boutons
		$("img.bouton_carte").each(function(){
			bouton_courant = $(this).attr("id");
			lien_bouton = "Images/Boutons/Bouton_normal/" + bouton_courant + "-normal.png";
			$(this).attr("src", lien_bouton);
		});
		
		//MAJ Carte 3D
		lien_carte = "Images/Introduction/Cartes/carte-inactive.png";
		$("#carte_element").attr("id", "carte_3D");
		$("#carte_3D").attr("src", lien_carte);
		
		//MAJ texte informations des boutons
		$("#texte_boutons").attr("src", "");
		$("#texte_boutons").css("visibility", "hidden");
		
	}else{
	

		//MAJ de la carte
		lien_carte = "Images/Introduction/Cartes/element-" + bouton_clique + ".png";
		$("#carte_3D").attr("id", "carte_element");
		$("#carte_element").attr("src", lien_carte);
			
		//MAJ des boutons
		$(this).attr("src", lien_bouton);
		
		//MAJ des textes d'informations des boutons
		$("#texte_boutons").attr("src", "Images/Boutons/Bouton_Texte/Texte-" + bouton_clique + ".png");
		$("#texte_boutons").css("visibility", "visible");
		
		//Grise tous les boutons qui ne sont pas sélectionné
		$("img.bouton_carte").each(function(){
			bouton = $(this);
			bouton_courant = $(this).attr("id");
			if(bouton_courant != bouton_clique){
				lien_bouton = "Images/Boutons/Bouton_Autre/" + bouton_courant + "-autre.png";
				bouton.attr("src", lien_bouton);
			}
		});
	}
	
/*
		//Bouton sélectionné --> Vérifié que le bouton cliqué est le bouton sélectionné
		lien_error = "Images/Boutons/Bouton_Autre/" + bouton_click + "-autre.png";

		if(bouton.attr("src") != lien_error){
			$("img.bouton_carte").each(function(){
				lien_bouton = "Images/Boutons/Bouton_normal/" + $(this).attr("id") + "-normal.png";
				$(this).attr("src", lien_bouton);
			});
			lien_carte = "Images/Introduction/Cartes/carte-inactive.png";
			$("#carte_element").attr("src", lien_carte);
			$("#carte_element").attr("id", "carte_3D");
			$("#texte_boutons").attr("src", "");
			$("#texte_boutons").css("visibility", "hidden");
		}
*/
});


$("img.icone").hover(function() {
	num_quartier = $(this).attr("id").substr(-1);
	id_image = $(this).attr("id");
	$("#" + id_image).attr("src", "Images/Quartier" + num_quartier + "/Bouton_" + id_image + "_survol.png");
}, function(){
	$("#" + id_image).attr("src", "Images/Quartier" + num_quartier + "/Bouton_" + id_image + ".png");
});


$("img.icone").click(function() {
	bouton_click = $(this).attr("id");

	//Numéro du quartier
	n = $(this).attr("id").substr(-1);
	$("#Fond_quartier1").attr("usemap","");
	$("#Fond_quartier2").attr("usemap","");
	$("#Fond_quartier3").attr("usemap","");
	$("#Fond_quartier4").attr("usemap","");
	//Désactiver la map	+ curseur su,r Témoignage pour tout les autres quartiers 

	//Affiche la carte de l'icone sélectionné (Traitement spécific pour les témoignages)
	carte = $(this).attr("id");
	if(carte == "Temoignage_quartier"+n){
		$("#Fond_quartier"+n).attr("src","Images/Quartier" + n + "/Temoignage/Quartier-0" + n + "-Fond.png" );
	}
	
	//Cacher les témoignages
	etat_temoignage = "none";
	
		if(bouton_click.indexOf("Temoignage")>=0){
			lien_curseur = "Curseur-Temoignage.png";
			etat_temoignage = "inline-block";
		}
		else if(bouton_click.indexOf("Population")>=0){
			lien_curseur = "Curseur-Population.png";
			$("#Fond_quartier"+n).attr("src","Images/Quartier" + n + "/Population/Population_quartier"+n+".png");
		}
		else if(bouton_click.indexOf("Transport")>=0){
			lien_curseur = "Curseur-Transport.png";
			$("#Fond_quartier"+n).attr("src","Images/Quartier" + n + "/Transport/Transport_quartier"+n+".png");
		}
		else if(bouton_click.indexOf("Etablissement")>=0){
			lien_curseur = "Curseur-Etablissement.png";
			$("#Fond_quartier"+n).attr("src","Images/Quartier" + n + "/Etablissement/Etablissement_quartier"+n+".png");
			$("#Fond_quartier"+n).attr("usemap","#EtablissementsQ"+n);
	
				$("#c"+n+"1").hover(function(){
					$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Etablissement/EtablissementSurvol1.png");
					$("#Q"+n+"Cercle1").css("display","block");
				}, function(){
					$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Etablissement/Etablissement_quartier"+n+".png");
					$("#Q"+n+"Cercle1").css("display","none");
				});
				
				$("#r"+n+"1").hover(function(){
					$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Etablissement/EtablissementSurvol1.png");
					$("#Q"+n+"Cercle1").css("display","block");
				}, function(){
					$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Etablissement/Etablissement_quartier"+n+".png");
					$("#Q"+n+"Cercle1").css("display","none");
				});

				$("#c"+n+"2").hover(function(){
					$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Etablissement/EtablissementSurvol2.png");
					$("#Q"+n+"Cercle2").css("display","block");
				}, function(){
					$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Etablissement/Etablissement_quartier"+n+".png");
					$("#Q"+n+"Cercle2").css("display","none");
				});
				
				$("#r"+n+"2").hover(function(){
					$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Etablissement/EtablissementSurvol2.png");
					$("#Q"+n+"Cercle2").css("display","block");
				}, function(){
					$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Etablissement/Etablissement_quartier"+n+".png");
					$("#Q"+n+"Cercle2").css("display","none");
				});
				

				$("#c"+n+"3").hover(function(){
					$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Etablissement/EtablissementSurvol3.png");
					$("#Q"+n+"Cercle3").css("display","block");
				}, function(){
					$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Etablissement/Etablissement_quartier"+n+".png");
					$("#Q"+n+"Cercle3").css("display","none");
				});
				
				$("#r"+n+"3").hover(function(){
					$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Etablissement/EtablissementSurvol3.png");
					$("#Q"+n+"Cercle3").css("display","block");
				}, function(){
					$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Etablissement/Etablissement_quartier"+n+".png");
					$("#Q"+n+"Cercle3").css("display","none");
				});
				

				$("#c"+n+"4").hover(function(){
					$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Etablissement/EtablissementSurvol4.png");
					$("#Q"+n+"Cercle4").css("display","block");
				}, function(){
					$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Etablissement/Etablissement_quartier"+n+".png");
					$("#Q"+n+"Cercle4").css("display","none");
				});
				
				$("#r"+n+"4").hover(function(){
					$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Etablissement/EtablissementSurvol4.png");
					$("#Q"+n+"Cercle4").css("display","block");
				}, function(){
					$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Etablissement/Etablissement_quartier"+n+".png");
					$("#Q"+n+"Cercle4").css("display","none");
				});
				

				$("#c"+n+"5").hover(function(){
					$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Etablissement/EtablissementSurvol5.png");
					$("#Q"+n+"Cercle5").css("display","block");
				}, function(){
					$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Etablissement/Etablissement_quartier"+n+".png");
					$("#Q"+n+"Cercle5").css("display","none");
				});
				
				$("#r"+n+"5").hover(function(){
					$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Etablissement/EtablissementSurvol5.png");
					$("#Q"+n+"Cercle5").css("display","block");
				}, function(){
					$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Etablissement/Etablissement_quartier"+n+".png");
					$("#Q"+n+"Cercle5").css("display","none");
				});
		}
		else if(bouton_click.indexOf("Travail")>=0){
			lien_curseur = "Curseur-Travail.png";
			$("#Fond_quartier"+n).attr("src","Images/Quartier" + n + "/Travail/Travail_quartier"+n+".png");
			$("#Fond_quartier"+n).attr("usemap","#TravailQ"+n);
			
			$("#tc"+n+"1").hover(function(){
				$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Travail/TravailSurvol1.png");
			}, function(){
				$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Travail/Travail_quartier"+n+".png");
			});
			
			$("#tr"+n+"1").hover(function(){
				$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Travail/TravailSurvol1.png");
			}, function(){
				$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Travail/Travail_quartier"+n+".png");
			});	

			$("#tc"+n+"2").hover(function(){
				$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Travail/TravailSurvol2.png");
			}, function(){
				$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Travail/Travail_quartier"+n+".png");
			});
			
			$("#tr"+n+"2").hover(function(){
				$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Travail/TravailSurvol2.png");
			}, function(){
				$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Travail/Travail_quartier"+n+".png");
			});
			

			$("#tc"+n+"3").hover(function(){
				$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Travail/TravailSurvol3.png");
			}, function(){
				$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Travail/Travail_quartier"+n+".png");
			});
			
			$("#tr"+n+"3").hover(function(){
				$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Travail/TravailSurvol3.png");
			}, function(){
				$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Travail/Travail_quartier"+n+".png");
			});
			

			$("#tc"+n+"4").hover(function(){
				$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Travail/TravailSurvol4.png");
			}, function(){
				$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Travail/Travail_quartier"+n+".png");
			});
			
			$("#tr"+n+"4").hover(function(){
				$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Travail/TravailSurvol4.png");
			}, function(){
				$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Travail/Travail_quartier"+n+".png");
			});
			

			$("#tc"+n+"5").hover(function(){
				$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Travail/TravailSurvol5.png");
			}, function(){
				$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Travail/Travail_quartier"+n+".png");
			});
			
			$("#tr"+n+"5").hover(function(){
				$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Travail/TravailSurvol5.png");
			}, function(){
				$("#Fond_quartier"+n).attr("src","Images/Quartier"+n+"/Travail/Travail_quartier"+n+".png");
			});
		}
		$("#Curseur_quartier"+n).attr("src","Images/Quartier"+n+"/" + lien_curseur);
		$("#image_temoignage_quartier"+n).css("display", etat_temoignage);
		$("#texte_temoignage_quartier"+n).css("display", etat_temoignage);
});
