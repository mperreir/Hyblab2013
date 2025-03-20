
function camenbert(tabintitule,tabvaleur) {
	var g = new Bluff.Pie('camenbert', '500x375');
      g.title = 'Financement (en %)';
      g.tooltips = true;
      g.set_theme({
    	    colors: ['#229c8c ','#e0b332', '#0c9c61'],
    	    marker_color: '#aea9a9',
    	    font_color: 'black',
    	   background_colors: '#F9F3EB'
    	  });
      
      g.data(tabintitule[0],tabvaleur[0]);
      g.data(tabintitule[1], tabvaleur[1]);
      g.data(tabintitule[2], tabvaleur[2]);
            
      g.draw();
 };
    