jQuery.noConflict();
(function($) {
	
	//pourcentages en haut
	$("#nuage").hover(
		function () {
			$("#nuage").attr('src','images/infoHaut/nuagePourcent.png');
			$("#nuageTexte").css('visibility','visible');
		},
		function () {
			$("#nuage").attr('src','images/infoHaut/nuage.png');
			$("#nuageTexte").css('visibility','hidden');
		}
				
	);
	
	$("#gens").hover(
			function () {
				$("#gens").attr('src','images/infoHaut/gensPourcent.png');
				$("#gensTexte").css('visibility','visible');
			},
			function () {
				$("#gens").attr('src','images/infoHaut/gens.png');
				$("#gensTexte").css('visibility','hidden');
			}
	);
	
	$("#infoHaut2_img").hover(
			function () {
				$("#infoHaut2_img").attr('src','images/infoHaut/po_05.png');
			},
			function () {
				$("#infoHaut2_img").attr('src','images/infoHaut/p_05.png');
			}
	);
	
	//compteur
	$(".compteur").hover(
			function(){
				$("#compt1").animate({top:'-=12em',left:'+=5em'},500);
				$("#compt2").animate({left:'-=12em'},500);
				$("#compt3").animate({right:'-=12em',top:'+=2em'},500);
				$("#compt4").animate({right:'-=12em',top:'+=8em'},500);
				$("#compteurPlein").fadeIn(100);
				$("#compteurPlein").css('visibility','visible');
				
			},
			function(){
				$("#compt1").animate({top:'+=12em',left:'-=5em'},500);
				$("#compt2").animate({left:'+=12em'},500);
				$("#compt3").animate({right:'+=12em',top:'-=2em'},500);
				$("#compt4").animate({right:'+=12em',top:'-=8em'},500);
				$("#compteurPlein").fadeOut(500);	
			}
		);
	
	//dataviz avec carte
	var tailleMaxBarre = 300;
	var tailleMinBarre = 75;
	$("#onglet1").click(function(){
		//changement onglets
		$("#onglet1").attr('src','images/carte_flux/onglet1Clique.png');
		$("#onglet2").attr('src','images/carte_flux/onglet2.png');
		$("#onglet3").attr('src','images/carte_flux/onglet3.png');
		$("#onglet4").attr('src','images/carte_flux/onglet4.png');
		//changement fleche
		$("#fleche1").css('visibility','visible');
		$("#fleche2").css('visibility','hidden');
		$("#fleche3").css('visibility','hidden');
		$("#fleche4").css('visibility','hidden');
		//changement taille barres
		var pourcentMotorise = flux.echangeNord.motorise/100;
		var tailleBarre = tailleMinBarre + pourcentMotorise * tailleMaxBarre;
		var pourcentPieton = flux.echangeNord.pieton/100;
		var tailleBarre2 = tailleMinBarre + pourcentPieton * tailleMaxBarre;
		var pourcentVelo = flux.echangeNord.velo/100;
		var tailleBarre3 = tailleMinBarre + pourcentVelo * tailleMaxBarre;
		var pourcentTransComm = flux.echangeNord.transportCommun/100;
		var tailleBarre4 = tailleMinBarre + pourcentTransComm * tailleMaxBarre;
		$("#barre1").animate({width: tailleBarre}, 300);
		$("#barre2").animate({width: tailleBarre2}, 300);
		$("#barre3").animate({width: tailleBarre3}, 300);
		$("#barre4").animate({width: tailleBarre4}, 300);
		//changement des %
		document.getElementById("pourcent1").innerHTML = flux.echangeNord.motorise + ' %';
		document.getElementById("pourcent2").innerHTML = flux.echangeNord.pieton + ' %';
		document.getElementById("pourcent3").innerHTML = flux.echangeNord.velo + ' %';
		document.getElementById("pourcent4").innerHTML = flux.echangeNord.transportCommun + ' %';
	});

	$("#onglet2").click(function(){
		//changement onglets
		$("#onglet1").attr('src','images/carte_flux/onglet1.png');
		$("#onglet2").attr('src','images/carte_flux/onglet2Clique.png');
		$("#onglet3").attr('src','images/carte_flux/onglet3.png');
		$("#onglet4").attr('src','images/carte_flux/onglet4.png');
		//changement fleche
		$("#fleche1").css('visibility','hidden');
		$("#fleche2").css('visibility','visible');
		$("#fleche3").css('visibility','hidden');
		$("#fleche4").css('visibility','hidden');
		//changement taille barres
		var pourcentMotorise = flux.echangeSud.motorise/100;
		var tailleBarre = tailleMinBarre + pourcentMotorise * tailleMaxBarre;
		var pourcentPieton = flux.echangeSud.pieton/100;
		var tailleBarre2 = tailleMinBarre + pourcentPieton * tailleMaxBarre;
		var pourcentVelo = flux.echangeSud.velo/100;
		var tailleBarre3 = tailleMinBarre + pourcentVelo * tailleMaxBarre;
		var pourcentTransComm = flux.echangeSud.transportCommun/100;
		var tailleBarre4 = tailleMinBarre + pourcentTransComm * tailleMaxBarre;
		$("#barre1").animate({width: tailleBarre}, 300);
		$("#barre2").animate({width: tailleBarre2}, 300);
		$("#barre3").animate({width: tailleBarre3}, 300);
		$("#barre4").animate({width: tailleBarre4}, 300);
		//changement des %
		document.getElementById("pourcent1").innerHTML = flux.echangeSud.motorise + ' %';
		document.getElementById("pourcent2").innerHTML = flux.echangeSud.pieton + ' %';
		document.getElementById("pourcent3").innerHTML = flux.echangeSud.velo + ' %';
		document.getElementById("pourcent4").innerHTML = flux.echangeSud.transportCommun + ' %';
	});
	
	$("#onglet3").click(function(){
		//changement onglets
		$("#onglet1").attr('src','images/carte_flux/onglet1.png');
		$("#onglet2").attr('src','images/carte_flux/onglet2.png');
		$("#onglet3").attr('src','images/carte_flux/onglet3Clique.png');
		$("#onglet4").attr('src','images/carte_flux/onglet4.png');
		//changement fleche
		$("#fleche1").css('visibility','hidden');
		$("#fleche2").css('visibility','hidden');
		$("#fleche3").css('visibility','visible');
		$("#fleche4").css('visibility','hidden');
		//changement taille barres
		var pourcentMotorise = flux.interne.motorise/100;
		var tailleBarre = tailleMinBarre + pourcentMotorise * tailleMaxBarre;
		var pourcentPieton = flux.interne.pieton/100;
		var tailleBarre2 = tailleMinBarre + pourcentPieton * tailleMaxBarre;
		var pourcentVelo = flux.interne.velo/100;
		var tailleBarre3 = tailleMinBarre + pourcentVelo * tailleMaxBarre;
		var pourcentTransComm = flux.interne.transportCommun/100;
		var tailleBarre4 = tailleMinBarre + pourcentTransComm * tailleMaxBarre;
		$("#barre1").animate({width: tailleBarre}, 300);
		$("#barre2").animate({width: tailleBarre2}, 300);
		$("#barre3").animate({width: tailleBarre3}, 300);
		$("#barre4").animate({width: tailleBarre4}, 300);
		//changement des %
		document.getElementById("pourcent1").innerHTML = flux.interne.motorise + ' %';
		document.getElementById("pourcent2").innerHTML = flux.interne.pieton + ' %';
		document.getElementById("pourcent3").innerHTML = flux.interne.velo + ' %';
		document.getElementById("pourcent4").innerHTML = flux.interne.transportCommun + ' %';
	});

	$("#onglet4").click(function(){
		//changement onglets
		$("#onglet1").attr('src','images/carte_flux/onglet1.png');
		$("#onglet2").attr('src','images/carte_flux/onglet2.png');
		$("#onglet3").attr('src','images/carte_flux/onglet3.png');
		$("#onglet4").attr('src','images/carte_flux/onglet4Clique.png');
		//changement fleche
		$("#fleche1").css('visibility','hidden');
		$("#fleche2").css('visibility','hidden');
		$("#fleche3").css('visibility','hidden');
		$("#fleche4").css('visibility','visible');
		//changement taille barres
		var pourcentMotorise = flux.transitUrba.motorise/100;
		var tailleBarre = tailleMinBarre + pourcentMotorise * tailleMaxBarre;
		var pourcentPieton = flux.transitUrba.pieton/100;
		var tailleBarre2 = tailleMinBarre + pourcentPieton * tailleMaxBarre;
		var pourcentVelo = flux.transitUrba.velo/100;
		var tailleBarre3 = tailleMinBarre + pourcentVelo * tailleMaxBarre;
		var pourcentTransComm = flux.transitUrba.transportCommun/100;
		var tailleBarre4 = tailleMinBarre + pourcentTransComm * tailleMaxBarre;
		$("#barre1").animate({width: tailleBarre}, 300);
		$("#barre2").animate({width: tailleBarre2}, 300);
		$("#barre3").animate({width: tailleBarre3}, 300);
		$("#barre4").animate({width: tailleBarre4}, 300);
		//changement des %
		document.getElementById("pourcent1").innerHTML = flux.transitUrba.motorise + ' %';
		document.getElementById("pourcent2").innerHTML = flux.transitUrba.pieton + ' %';
		document.getElementById("pourcent3").innerHTML = flux.transitUrba.velo + ' %';
		document.getElementById("pourcent4").innerHTML = flux.transitUrba.transportCommun + ' %';
	});

	$("#interr1").hover(
		function(){
			$("#aide1").css('visibility','visible');
			$("#interr1").attr('src','images/carte_flux/interr1Survole.png');
		},
		function(){
			$("#aide1").css('visibility','hidden');
			$("#interr1").attr('src','images/carte_flux/interr1.png');
		}
	);
	$("#interr2").hover(
		function(){
			$("#aide2").css('visibility','visible');
			$("#interr2").attr('src','images/carte_flux/interr2Survole.png');
		},
		function(){
			$("#aide2").css('visibility','hidden');
			$("#interr2").attr('src','images/carte_flux/interr2.png');
		}
	);
	$("#interr3").hover(
		function(){
			$("#aide3").css('visibility','visible');
			$("#interr3").attr('src','images/carte_flux/interr3Survole.png');
		},
		function(){
			$("#aide3").css('visibility','hidden');
			$("#interr3").attr('src','images/carte_flux/interr3.png');
		}
	);
	$("#interr4").hover(
		function(){
			$("#aide4").css('visibility','visible');
			$("#interr4").attr('src','images/carte_flux/interr4Survole.png');
		},
		function(){
			$("#aide4").css('visibility','hidden');
			$("#interr4").attr('src','images/carte_flux/interr4.png');
		}
	);
	
	//dataviz avec frequentation transport commun
	function compteur(x,y,id){
	        if(x<y){
	                while(x<y){
	                        x = plus(x);
	                        $(id).delay(50).animate({innerHTML : x}, 0);
	                }
	        }
	        if(x>y){
	                while(x>y){
	                        x = moins(x);
	                        $(id).delay(50).animate({innerHTML : x}, 0);
	                }
	        }
	}

	function plus(x){
	        return x+1;
	}

	function moins(x){
	        return x-1;
	}

	var annee=1997;
	var tailleMaxBarreFreq = 300;
	var tailleMinBarreFreq = 100;
	$("#bouton1").click(function(){
	        var anneeAvant=annee;
	        annee=1997;
	        compteur(anneeAvant,annee,"#annee");
	        var tailleBarre = tailleMinBarreFreq + freq.annee1997.bus/17826*tailleMaxBarreFreq;
	        var tailleBarre2 = tailleMinBarreFreq +
	freq.annee1997.busway/17826*tailleMaxBarreFreq;
	        var tailleBarre3 = tailleMinBarreFreq + freq.annee1997.tram/17826*tailleMaxBarreFreq;
	        $("#barreFreq1").animate({width: tailleBarre}, 300);
	        $("#barreFreq2").animate({width: tailleBarre2}, 300);
	        $("#barreFreq3").animate({width: tailleBarre3}, 300);
	        document.getElementById("valFreq1").innerHTML = spacer(freq.annee1997.bus);
	        document.getElementById("valFreq2").innerHTML = spacer(freq.annee1997.busway);
	        document.getElementById("valFreq3").innerHTML = spacer(freq.annee1997.tram);
	        $("#bouton1").attr('src','images/transportCommun/1Clique.png');
	        $("#bouton2").attr('src','images/transportCommun/2.png');
	        $("#bouton3").attr('src','images/transportCommun/3.png');
	        $("#bouton4").attr('src','images/transportCommun/4.png');
	});


	$("#bouton2").click(function(){
	        var anneeAvant=annee;
	        annee=2005;
	        compteur(anneeAvant,annee,"#annee");
	        var tailleBarre = tailleMinBarreFreq + freq.annee2005.bus/17826*tailleMaxBarreFreq;
	        var tailleBarre2 = tailleMinBarreFreq +
	freq.annee2005.busway/17826*tailleMaxBarreFreq;
	        var tailleBarre3 = tailleMinBarreFreq + freq.annee2005.tram/17826*tailleMaxBarreFreq;
	        $("#barreFreq1").animate({width: tailleBarre}, 300);
	        $("#barreFreq2").animate({width: tailleBarre2}, 300);
	        $("#barreFreq3").animate({width: tailleBarre3}, 300);
	        document.getElementById("valFreq1").innerHTML = spacer(freq.annee2005.bus);
	        document.getElementById("valFreq2").innerHTML = spacer(freq.annee2005.busway);
	        document.getElementById("valFreq3").innerHTML = spacer(freq.annee2005.tram);
	        $("#bouton1").attr('src','images/transportCommun/1.png');
	        $("#bouton2").attr('src','images/transportCommun/2Clique.png');
	        $("#bouton3").attr('src','images/transportCommun/3.png');
	        $("#bouton4").attr('src','images/transportCommun/4.png');
	});

	$("#bouton3").click(function(){
	        var anneeAvant=annee;
	        annee=2008;
	        compteur(anneeAvant,annee,"#annee");
	        var tailleBarre = tailleMinBarreFreq + freq.annee2008.bus/17826*tailleMaxBarreFreq;
	        var tailleBarre2 = tailleMinBarreFreq +
	freq.annee2008.busway/17826*tailleMaxBarreFreq;
	        var tailleBarre3 = tailleMinBarreFreq + freq.annee2008.tram/17826*tailleMaxBarreFreq;
	        $("#barreFreq1").animate({width: tailleBarre}, 300);
	        $("#barreFreq2").animate({width: tailleBarre2}, 300);
	        $("#barreFreq3").animate({width: tailleBarre3}, 300);
	        document.getElementById("valFreq1").innerHTML = spacer(freq.annee2008.bus);
	        document.getElementById("valFreq2").innerHTML = spacer(freq.annee2008.busway);
	        document.getElementById("valFreq3").innerHTML = spacer(freq.annee2008.tram);
	        $("#bouton1").attr('src','images/transportCommun/1.png');
	        $("#bouton2").attr('src','images/transportCommun/2.png');
	        $("#bouton3").attr('src','images/transportCommun/3Clique.png');
	        $("#bouton4").attr('src','images/transportCommun/4.png');
	});

	$("#bouton4").click(function(){
	        var anneeAvant=annee;
	        annee=2011;
	        compteur(anneeAvant,annee,"#annee");
	        var tailleBarre = tailleMinBarreFreq + freq.annee2011.bus/17826*tailleMaxBarreFreq;
	        var tailleBarre2 = tailleMinBarreFreq +
	freq.annee2011.busway/17826*tailleMaxBarreFreq;
	        var tailleBarre3 = tailleMinBarreFreq + freq.annee2011.tram/17826*tailleMaxBarreFreq;
	        $("#barreFreq1").animate({width: tailleBarre}, 300);
	        $("#barreFreq2").animate({width: tailleBarre2}, 300);
	        $("#barreFreq3").animate({width: tailleBarre3}, 300);
	        document.getElementById("valFreq1").innerHTML = spacer(freq.annee2011.bus);
	        document.getElementById("valFreq2").innerHTML = spacer(freq.annee2011.busway);
	        document.getElementById("valFreq3").innerHTML = spacer(freq.annee2011.tram);
	        $("#bouton1").attr('src','images/transportCommun/1.png');
	        $("#bouton2").attr('src','images/transportCommun/2.png');
	        $("#bouton3").attr('src','images/transportCommun/3.png');
	        $("#bouton4").attr('src','images/transportCommun/4Clique.png');
	});

	function spacer(x){
	        if(x%1000>0){
	                return Math.floor(x/1000) + " " + x%1000;
	        }
	        else{
	                return x;
	        }
	}
	
	//pourcentages info bas	
	$(".poR").css('visibility','hidden');
	$(".poO").css('visibility','hidden');
	var timeoutIDO=null;
	var timeoutIDP=null;
	var timeoutIDP1=null;
	var timeoutIDP2=null;
	var timeoutIDP3=null;
	var timeoutIDP4=null;
	var timeoutIDP5=null;
	var timeoutIDP6=null;
	var timeoutIDP7=null;
	var timeoutIDP8=null;
	var timeoutIDP9=null;
	$("#boGris").hover(
		function(){
			$("#boGris").attr('src','images/pointille/boRose.png');
			$("#texteRose").css('visibility','visible');
			timeoutIDP1=window.setTimeout(function(){$("#po1R").css('visibility','visible');},1000);
			timeoutIDP2=window.setTimeout(function(){$("#po2R").css('visibility','visible');},1100);
			timeoutIDP3=window.setTimeout(function(){$("#po3R").css('visibility','visible');},1200);
			timeoutIDO=window.setTimeout(function(){$("#ouiR").css('visibility','visible');},1300);
			timeoutIDP4=window.setTimeout(function(){$("#po4R").css('visibility','visible');},1400);
			timeoutIDP5=window.setTimeout(function(){$("#po5R").css('visibility','visible');},1500);
			timeoutIDP6=window.setTimeout(function(){$("#po6R").css('visibility','visible');},1600);
			timeoutIDP7=window.setTimeout(function(){$("#po7R").css('visibility','visible');},1700);
			timeoutIDP8=window.setTimeout(function(){$("#po8R").css('visibility','visible');},1800);
			timeoutIDP9=window.setTimeout(function(){$("#po9R").css('visibility','visible');},1900);
			timeoutIDP=window.setTimeout(function(){$("#pourcRose").css('visibility','visible');},2000);	
		},
		function(){
			window.clearTimeout(timeoutIDP1);
			window.clearTimeout(timeoutIDP2);
			window.clearTimeout(timeoutIDP3);
			window.clearTimeout(timeoutIDO);
			window.clearTimeout(timeoutIDP4);
			window.clearTimeout(timeoutIDP5);
			window.clearTimeout(timeoutIDP6);
			window.clearTimeout(timeoutIDP7);
			window.clearTimeout(timeoutIDP8);
			window.clearTimeout(timeoutIDP9);
			window.clearTimeout(timeoutIDP);
			$("#boGris").attr('src','images/pointille/boGris.png');
			$("#texteRose").css('visibility','hidden');
			$("#pourcRose").css('visibility','hidden');
			$("#ouiR").css('visibility','hidden');
			$(".poR").css('visibility','hidden');
		}
	);
	
	$("#veGris").hover(
		function(){
			$("#veGris").attr('src','images/pointille/veOrange.png');
			$("#texteOrange").css('visibility','visible');
			timeoutIDP1=window.setTimeout(function(){$("#po1O").css('visibility','visible');},900);
			timeoutIDP2=window.setTimeout(function(){$("#po2O").css('visibility','visible');},1000);
			timeoutIDP3=window.setTimeout(function(){$("#po3O").css('visibility','visible');},1100);
			timeoutIDP4=window.setTimeout(function(){$("#po4O").css('visibility','visible');},1200);
			timeoutIDO=window.setTimeout(function(){$("#ouiO").css('visibility','visible');},1300);
			timeoutIDP5=window.setTimeout(function(){$("#po5O").css('visibility','visible');},1400);
			timeoutIDP6=window.setTimeout(function(){$("#po6O").css('visibility','visible');},1500);
			timeoutIDP7=window.setTimeout(function(){$("#po7O").css('visibility','visible');},1600);
			timeoutIDP8=window.setTimeout(function(){$("#po8O").css('visibility','visible');},1700);
			timeoutIDP9=window.setTimeout(function(){$("#po9O").css('visibility','visible');},1800);
			timeoutIDP=window.setTimeout(function(){$("#pourcOrange").css('visibility','visible');},1900);	
			
			
		},
		function(){
			window.clearTimeout(timeoutIDP1);
			window.clearTimeout(timeoutIDP2);
			window.clearTimeout(timeoutIDP3);
			window.clearTimeout(timeoutIDP4);
			window.clearTimeout(timeoutIDO);
			window.clearTimeout(timeoutIDP5);
			window.clearTimeout(timeoutIDP6);
			window.clearTimeout(timeoutIDP7);
			window.clearTimeout(timeoutIDP8);
			window.clearTimeout(timeoutIDP9);
			window.clearTimeout(timeoutIDP);
			$("#veGris").attr('src','images/pointille/veGris.png');
			$("#texteOrange").css('visibility','hidden');
			$("#pourcOrange").css('visibility','hidden');
			$("#ouiO").css('visibility','hidden');
			$(".poO").css('visibility','hidden');
		}
	);
	
	//micro trottoir
	var indexPhoto = 1;
	var min = 1;
	var max = 6;
	var reponses=[
	        "« En tant qu'ancien Nantais, je trouve cela complètement faux parce qu'ils ont refait tout le plan de circulation de la ville de Nantes. Pour se garer maintenant entre midi et deux, c'est vrai que c'est beaucoup plus simple, mais pour venir ici c'est une horreur au niveau des voitures, ça circule de partout. En revanche, pour bouger à pied, c'est devenu sympathique, mais il faut aimer marcher ! »",
			"« Je ne me déplace quasiment qu'en bicloo et je suis uniquement dans l'hypercentre et sur l'ile. Les pistes cyclables ça peut être limite, il y aurait mieux à faire. Il y a des villes où c'est mieux, des capitales à l'étranger comme Berlin ou en Hollande ! »",
			"« Je viens à pied, donc tout va bien, ça me permet de prendre l'air, il y a des ponts partout. J'aime bien avoir ce temps-là pour réfléchir. J'aime vraiment marcher, être tranquille. À pied ou à vélo, oui, je trouve que c'est plutôt sympathique. »",
			"« Pour moi ça va parce que je suis à pied, mais je trouve ça faux parce que ça n'est pas pratique du tout. Alors oui, il y en a du côté de Beaulieu, il y en a du côté de Chantiers Navals, mais l'Île de Nantes c'est grand et il n'y a aucun transport en commun pour rejoindre les deux bouts, il n'y a rien au milieu. »",
			"« Je me déplace toujours à pied, mais je ne fréquente pas l'intégralité de l'Île de Nantes, je vais jusqu’à République, je trouve ça très agréable. Mais c'est parce que j’ai revendu ma voiture depuis que j'habite ici, donc je suis beaucoup plus tranquille à pied. »",
			"« Je me déplace souvent en transport en commun, à pied ou en vélo. Je trouve qu'à Nantes beaucoup de choses sont faites mais ça dépend aussi des automobilistes »"
	];
	
	function changerPhotoD(){
		if(indexPhoto<max){
			indexPhoto = indexPhoto + 1;
			$("#photo").attr('src','images/reportage/'+indexPhoto+'.png').fadeIn();
			document.getElementById("texteReponses").innerHTML = reponses[indexPhoto-1];
		}
	}
	
	function changerPhotoG(){
		if(indexPhoto>min){
			indexPhoto = indexPhoto - 1;
			$("#photo").attr('src','images/reportage/'+indexPhoto+'.png').fadeIn();
			document.getElementById("texteReponses").innerHTML = reponses[indexPhoto-1];
		}
	}
	
	$('#flecheD').click(function() {
		if(indexPhoto<max){
			$("#photo").fadeOut(function() {
				changerPhotoD();
			});

		}
	});
	
	$('#flecheG').click(function() {
		if(indexPhoto>min){
			$("#photo").fadeOut(function() {
				changerPhotoG();
			});	
		}
	});
	
})(jQuery);

		
