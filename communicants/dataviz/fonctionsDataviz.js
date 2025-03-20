/*fonction qui prend en parametre le fichier JSON ou aller chercher les donnes pour la dataviz
il faut que les champs soit variable.val variable.couleurHexa et variable.description. Chaque enregistrement comporte deux valeures :
la premiere est le quartier voulu, la seconde le quartier de l IDN.
l identifiant de la div ou mettre la dataviz et la taille de la div en pixel. Attention il faut que ce soit un carre*/
function draw(JSON,DivId,tailleDiv) {
	/*ici on declare les variables et on initialise ce qu il faut*/
	var r = Raphael(DivId, tailleDiv, tailleDiv),
		moitieDiv=(tailleDiv/2),
		rayon=moitieDiv-50,/*on laisse une marge*/
		espace=(rayon/2),/*pour 3 cercles*/
		R = rayon,
		init = true,
		param = {stroke: "#fff", "stroke-width": 20},/*le dernier parametre est l epaisseur de l arc*/
		hash = document.location.hash,
		marksAttr = {fill: hash || "#444", stroke: "none"};
		
	// Custom Attribute
	/*fonction qui va servir a tracer les arcs et les colories dans la couleur souhaitee
	Cette fonction sera appelle lors de la creation des variables arcs un peu plus bas et appelle a chaque upadateValue*/
	r.customAttributes.arc = function (value, total, R,id,mycolorHexa,tailleDiv) {
		var moitieEcran=(tailleDiv/2),
			alpha = 360 / total * value,
			a = (90 - alpha) * Math.PI / 180,
			x = moitieEcran + R * Math.cos(a),
			y = moitieEcran - R * Math.sin(a),
			path;
		if (total == value) {
			path = [["M", moitieEcran, moitieEcran - R], ["A", R, R, 0, 1, 1, moitieEcran, moitieEcran - R]];
		} else {
			path = [["M", moitieEcran, moitieEcran - R], ["A", R, R, 0, +(alpha > 180), 1, x, y]];
		}
		/*note  : on est obliger de passer poar cette transformation de couleurs car si on met directement de lhexa, ca fait sauter lanimation*/
		var color=Raphael.getRGB(mycolorHexa.toString());
		var colorAUtiliser=Raphael.rgb2hsb(color.r,color.g,color.b);
		return {path: path, stroke: colorAUtiliser};
	};
	/*decalration des variables d arcs*/
	var sec;
	var min;
	var hor;
	var day;
	var mon;
	
	sec = r.path().attr(param).attr({arc: [0, 100, R,0,"#660099",tailleDiv]});
	R -= espace;
	
	min = r.path().attr(param).attr({arc: [0, 100, R,1,"#660099",tailleDiv]});
	R -= espace;
	
	hor = r.path().attr(param).attr({arc: [0, 100, R,2,"#660099",tailleDiv]});
	R -= espace;
	
	day = r.path().attr(param).attr({arc: [0, 100, R,3,"#660099",tailleDiv]});
	R -= espace;
	
	mon = r.path().attr(param).attr({arc: [0, 100, R,4,"#660099",tailleDiv]});

	/*fonction appellee pour tracer les arcs*/
	function updateVal(value, total, R, hand, id,couleurHexa) {
		if (init) {
			hand.animate({arc: [value, total, R,id,couleurHexa,tailleDiv]}, 700, ">"); /*vitesse d execution*/
		} else {
			if (!value || value == total) {
				value = total;
				hand.animate({arc: [value, total, R,id,couleurHexa,tailleDiv]}, 750, "bounce", function () {
					hand.attr({arc: [0, total, R,id,couleurHexa,tailleDiv]});
				});
			} else {
				hand.animate({arc: [value, total, R,id,couleurHexa,tailleDiv]}, 750, "elastic");
			}
		}
	}
	
	/*fonction main qui va adapter le nombre d arcs selon le contenu du fichier json
	et mettre les bonnes couleurs et le bonnes valeures sur chaque arcs*/
	(function () {
	
		var nbItems = JSON.length;
		var calc;
			for (var i=0; i<nbItems; i++) {
				//switch obligatoire pour utiliser la bonne variable
				calc=rayon-(i*espace);
				switch(i){
				case 0:
					updateVal(JSON[i].val, 100, calc, sec, i,JSON[i].couleurHexa);
					break; 
				case 1: 
					updateVal(JSON[i].val, 100, calc, min, i,JSON[i].couleurHexa);
					break; 
				case 2: 
					updateVal(JSON[i].val, 100, calc, hor, i,JSON[i].couleurHexa);
					break; 
				case 3: 
					updateVal(JSON[i].val, 100, calc, mon, i,JSON[i].couleurHexa);
					break; 
				case 4: 
					updateVal(JSON[i].val, 100, calc, day, i,JSON[i].couleurHexa);
					break; 
				}
			}
		init = false;
	})();
};