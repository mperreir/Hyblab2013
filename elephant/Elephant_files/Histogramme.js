function histogramme(fb,twitter,flickr) {
	var g = new Bluff.Bar('histogramme', '500x375');
  	g.tooltips = true;
 
	g.set_theme({
		colors:['#229c8c ','#e0b332', '#0c9c61'], // Mettre les couleurs des courbes
		marker_color: '#aea9a9',
		font_color: 'black',
		background_colors: '#f9f3eb' // Mettre la couleur de fond
  	})
  	//g.theme_pastel();
	g.data("Facebook (en nombre de like)", fb);
	g.data("Twitter (en nombre de tweet)", twitter);
	g.data("Flickr (en nombre de photos)", flickr);
	g.minimum_value=0;
	//g.labels = {0: '2010', 2: '2011'};
      
	g.draw();
 };