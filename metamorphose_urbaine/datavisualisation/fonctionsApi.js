/*fonctions pour affichage de la dataviz : 
prend en parametre le fichier JSON a lire, l id de la div(id html), la taille de la div en question pour adapter la taille de la dataviz et enfin une liste de
5 couleurs en hexa pour les différents cercles. Ces couleurs sont ranges dans l'ordre de l'exterieur vers l interieur*/

function draw(JSON,DivId,tailleDiv) {
			/*defnition du conteneur (obligatoire)*/
                var r = Raphael(DivId, 600, 600), /*conteneur*/
					R = 200, /*cercle de ronds*/
                    init = true,
                    param = {stroke: "#FFFFFF", "stroke-width": 30}, /*  au fond et taille des traits*/
                    marksAttr = {fill:  "#FFFFFF", stroke: "#FFFFFF"}; /*couleur des carres interieur et exterieur ici on les met en blanc*/
                    
                // Custom Attribute
                r.customAttributes.arc = function (value, total, R) {
					/*on ne touche surtout pas aux variables qui suivent sinon on fait sauter les cercle*/
                    var alpha = 360 / total * value,
                        a = (90 - alpha) * Math.PI / 180,
                        x = 300 + R * Math.cos(a),
                        y = 300 - R * Math.sin(a),
                        color = "rgb(255,255,255)", /*definir couleur des cercles, forcement en rgb pas d'hexa*/
                        path;
                    if (total == value) {
                        path = [["M", 300, 300 - R], ["A", R, R, 0, 1, 1, 299.99, 300 - R]];
                    } else {
                        path = [["M", 300, 300 - R], ["A", R, R, 0, +(alpha > 180), 1, x, y]];
                    }
                    return {path: path, stroke: color};
                };

                drawMarks(R, 60);
                var sec = r.path().attr(param).attr({arc: [0, 60, R]}); /*redefinie arc en passant de nouveaux parametres a la fonc */
                R -= 40;
                drawMarks(R, 60);
                var min = r.path().attr(param).attr({arc: [0, 60, R]});
                R -= 40;
                drawMarks(R, 12);
                var hor = r.path().attr(param).attr({arc: [0, 12, R]});
                R -= 40;
                drawMarks(R, 31);
                var day = r.path().attr(param).attr({arc: [0, 31, R]});
                R -= 40;
                drawMarks(R, 12);
                var mon = r.path().attr(param).attr({arc: [0, 12, R]});
                var pm = r.circle(300, 300, 16).attr({stroke: "none", fill: Raphael.hsb2rgb(15 / 200, 3, .15).hex}); //regarde la
                

                function updateVal(value, total, R, hand, id,couleurHexa) {
					/*on transforme la couleur hexa en rgb*/
					var temp=Raphael.getRGB(couleurHexa);
					/*ne pas toucher a la suite du code*/
					var alpha = 360 / total * value,
                        a = (90 - alpha) * Math.PI / 180,
                        x = 300 + R * Math.cos(a),
                        y = 300 - R * Math.sin(a);
					var color=temp;
					var path;
					if (total == value) {
                        path = [["M", 300, 300 - R], ["A", R, R, 0, 1, 1, 299.99, 300 - R]];
                    } else {
                        path = [["M", 300, 300 - R], ["A", R, R, 0, +(alpha > 180), 1, x, y]];
                    }
					r.path().attr(param).attr({path: path,stroke: color});
					
                    if (init) {
                        hand.animate({arc: [value, total, R]}, 900, ">");
                    } else {
                        if (!value || value == total) {
                            value = total;
                            hand.animate({arc: [value, total, R]}, 750, "bounce", function () {
                                hand.attr({arc: [0, total, R]});
                            });
                        } else {
                            hand.animate({arc: [value, total, R]}, 750, "elastic");
                        }
                    }
                    
                }

                function drawMarks(R, total) {
                    var out = r.set();
                    for (var value = 0; value < total; value++) {
                        var alpha = 360 / total * value,
                            a = (90 - alpha) * Math.PI / 180,
                            x = 300 + R * Math.cos(a),
                            y = 300 - R * Math.sin(a);
                        out.push(r.circle(x, y, 2).attr(marksAttr));
                    }
                    return out;
                }
				
				/*main qui fait appel aux fonctions definies plus haut pour mettre en place les graphismes*/
                (function () {
                    /*Pour changer la valeur d'un cercle, on modifie la premiere valeure.
					Le second parametre represente le nombre de valeures possibles dans le cercle
					Le troisieme parametre represente la hauteur ou l'on veut placer le cercle
					*/
					nbItems = JSON.length;
					var calc;
					for (var i=0; i<nbItems; i++) {
					calc = tailleDiv-40*i;
						//switch obligatoire pour utiliser la bonne variable
						//ne marche pas avec une chaine de char
						//on peut mettre jusqua 5 arcs max
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