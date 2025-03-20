function courbes(tabEleph,tabChateau,tabTourisme) {
	var g = new Bluff.Line('courbe', '500x375');
  	g.tooltips = true;
 
	g.set_theme({
		colors:['#229c8c ','#e0b332', '#0c9c61'], // Mettre les couleurs des courbes
		marker_color: '#aea9a9',
		font_color: 'black',
		background_colors: '#f9f3eb' // Mettre la couleur de fond
  	})
  	//g.theme_pastel();
	g.data("Chateau", tabChateau);
	g.data("Machines de Nantes", tabEleph);
	g.data("Nb de touriste Nantes", tabTourisme);
      
	g.labels = {0: '2010', 1: '2011', 2: '2012'};
      
	g.draw();
 };